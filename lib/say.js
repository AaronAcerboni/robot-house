
const say = require('say-promise');

module.exports = {
    speak: function (text) {
        console.log(text);
        return say.speak(text);
    }
}
