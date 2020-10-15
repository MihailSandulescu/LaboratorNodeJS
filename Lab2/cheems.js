const fetch = require('node-fetch')

const cheems = () => {
    const url = 'https://random.dog/woof.json'
    return fetch(url)
        .then(res => res.json())
        .then(json => json['url']);
};

module.exports = cheems;