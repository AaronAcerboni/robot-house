
const jokes = require('give-me-a-joke');

module.exports = {
    getJoke: function () {
        var promise = new Promise((resolve, reject) => {
            jokes.getRandomDadJoke(joke => {
                resolve(joke);
            })
        });
        return promise;
    }
}