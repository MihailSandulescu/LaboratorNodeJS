const fetch = require('node-fetch')

const generateMessage = () => {
    const url = 'https://cat-fact.herokuapp.com/facts/random'
    return fetch(url)
        .then(res => res.text())
        .then(body => body);
};

module.exports = generateMessage;