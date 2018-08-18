
const scrab = require('scrab');

module.exports = {
    getSentence: function () {
        return new Promise((resolve, reject) => resolve(scrab.sentence()));
    }
}
