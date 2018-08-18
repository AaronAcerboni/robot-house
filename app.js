/*
            ⊂_ヽ
            　 ＼＼  Λ＿Λ
            　　 ＼( 'ㅅ' ) ROBOT
            　　　 >　⌒ヽ
            　　　/ 　 へ＼
            　　 /　　/　＼＼
            　　 ﾚ　ノ　　 ヽ_つ
            　　/　/ HOUSE
            　 /　/|
            　(　(ヽ
            　|　|、＼
            　| 丿 ＼ ⌒)
            　| |　　) /
            `ノ )　　Lﾉ 

---------------------------------------------
|                                           |
|   REQUIRED MODULES                        |
|                                           |
---------------------------------------------

*/

const jokes = require('./lib/jokes');
const wordOfTheDay = require('./lib/word-of-the-day');
const sentence = require('./lib/sentence');
const say = require('say-promise');

/*

---------------------------------------------
|                                           |
|   MAIN                                    |
|                                           |
---------------------------------------------

*/

//tellJoke();
//tellWordOfTheDay();
tellRandomSentence();

/*

---------------------------------------------
|                                           |
|   HELPER FUNCTIONS                        |
|                                           |
---------------------------------------------

*/

function tellJoke() {
    jokes.getJoke()
        .then(joke => say.speak('Let me tell you a joke!')
            .then(() => say.speak(joke))
        );
}

function tellWordOfTheDay() {
    wordOfTheDay.getTodaysWord()
        .then(wordData => say.speak('The word of the day is' + wordData.word)
            .then(() => say.speak('which means ' + wordData.meaning))
        );
}

function tellRandomSentence() {
    sentence.getSentence()
        .then(sentence => say.speak(sentence));
}