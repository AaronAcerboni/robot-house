/*

---------------------------------------------
|                                           |
|   REQUIRED MODULES                        |
|                                           |
---------------------------------------------

*/

const fs           = require('fs');
const say          = require('say-promise');
const util         = require('./util');
const jokes        = require('./jokes');
const wordOfTheDay = require('./word-of-the-day');
const fact         = require('./randomFact');
const sentence     = require('./sentence');

/*

---------------------------------------------
|                                           |
|   Class: RobotHouse                       |
|                                           |
---------------------------------------------

*/

class RobotHouse {
    constructor (pathToConfig) {
        let config = fs.readFileSync(pathToConfig)
        if (JSON.parse(config).robothouse === false) {
            console.log(new Error("(config.json) Robot House must be true!"))
            process.exit(1);
        }
    }
    tellJoke () {
        return jokes.getJoke()
                    .then(joke => {
                        say.speak('Let me tell you a joke!')
                            .then(joke => say.speak(joke))
                    })
    }
    tellWordOfTheDay () {
        return wordOfTheDay.getTodaysWord()
                           .then(wordData => {
                               say.speak('The word of the day is ' + wordData.word + '.')
                                  .then(() => say.speak('This means ' + wordData.meaning + '.'))
                           })
    }
    tellFact () {
        return fact.getRandomFact()
                         .then(fact => {
                             say.speak('Time for a fact. ' + fact)
                         })
    }
    tellNumber () {
        return say.speak('The number is ' + Math.random());
    }
    laugh () {
        let noises = ['ha','he','hi','ho','hu', 'tee', 'hee', ' ', ' '];
        let theCombinedNoisesSumToAnEnchantingLaugh = 'ha';
        while (Math.random () > 0.1) {
            theCombinedNoisesSumToAnEnchantingLaugh += util.rArr(noises);
        }
        return say.speak(theCombinedNoisesSumToAnEnchantingLaugh.trim() + '!');
    }
    tellRandomSentence() {
        sentence.getSentence()
            .then(sentence => say.speak(sentence));
    }
}

module.exports = RobotHouse;