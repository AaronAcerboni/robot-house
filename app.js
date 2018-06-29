var jokes = require('./jokes');

require('say-promise')
    .speak('Let me tell you a joke!')
    .then(sayJoke)

function sayJoke () {
    jokes.getJoke().then(joke => {
        require('say-promise').speak(joke);
        console.log(joke)
    });
}