
const say = require('say-promise');

module.exports = {
    speak: function (text) {
        return new Promise(() => {
            console.log(text);
            say.speak(text);
        });
    }
}
