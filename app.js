var jokes = require('./jokes');

jokes.getJoke().then(joke => {
    console.log(joke);
})