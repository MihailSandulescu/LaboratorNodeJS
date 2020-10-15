const express = require('express');
const app = express();
const port = 3000;

app.get('/hello-world', function(req,res) {
   console.log('request incoming');
    res.send('Hello world');
});

app.get('/assignment', (req, res) => {
    res.send({
        inoata: 'chelutu'
    });
});

app.listen(port, function() {
    console.log('server started');
})