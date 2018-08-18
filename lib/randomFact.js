const WikiFakt = require('wikifakt');

module.exports = {
    getRandomFact: function () {
        return WikiFakt.getRandomFact()
    }
}