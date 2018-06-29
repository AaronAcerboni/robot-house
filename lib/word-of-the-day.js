
const wordOfTheDay = require('words-of-the-day');

module.exports = {
    getTodaysWord: function () {
        return wordOfTheDay.merriamWebster();
        //return wordOfTheDay.dictionaryWord();
    }
}
