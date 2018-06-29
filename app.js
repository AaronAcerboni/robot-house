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
const say = require('say-promise');

/*

---------------------------------------------
|                                           |
|   MAIN                                    |
|                                           |
---------------------------------------------

*/

//tellJoke();
tellWordOfTheDay();

/*

---------------------------------------------
|                                           |
|   HELPER FUNCTIONS                        |
|                                           |
---------------------------------------------

*/

function tellJoke() {
    jokes.getJoke()
        .then(joke => {
            say.speak('Let me tell you a joke!')
                .then(() => say.speak(joke))
        });
}

function tellWordOfTheDay() {
    wordOfTheDay.getTodaysWord()
        .then(wordData => {
            say.speak('The word of the day is' + wordData.word)
                .then(() => say.speak('which means ' + wordData.meaning))
        });
}
