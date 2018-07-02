/*

---------------------------------------------
|                                           |
|   REQUIRED MODULES                        |
|                                           |
---------------------------------------------

*/

const fs           = require('fs');
const say          = require('say-promise');
const jokes        = require('./jokes');
const wordOfTheDay = require('./word-of-the-day');
const fact         = require('./randomFact');

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
                             say.speak('Time for a fact.' + fact)
                         })
    }
}

module.exports = RobotHouse;