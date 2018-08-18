
const scrab = require('scrab');

module.exports = {
    getSentence: function () {
        return new Promise((resolve, reject) => resolve(scrab.sentence({
            scream: ((Math.random() > 0.3) ? false : true)
        })));// ヽ(´ー｀)ノ
    }
}
