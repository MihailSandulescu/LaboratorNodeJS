const hbs = require('hbs');
const path = require('path');
const express = require('express');
const cheems = require('./cheems');
const generateMessage = require('./messageGenerator');

const app = express();
const port = 3000;
const publicDirectoryPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, 'templates/views')

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicDirectoryPath))


app.get('/hello-world', function(req,res) {
    generateMessage()
        .then((body) => {
            const { text } = body;
            res.send(text);
        })
 });

app.get('/cheems', function(req,res) {
    cheems()
        .then((url) => {
            res.render('index', {
                dogUrl: url
            });
        });
});

 app.listen(port, function() {
     console.log('server started');
 })