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

const jokes = require('./jokes');
const say   = require('say-promise');

/*

---------------------------------------------
|                                           |
|   MAIN                                    |
|                                           |
---------------------------------------------

*/

say
    .speak('Let me tell you a joke!')
    .then (() => {
        jokes.getJoke().then(joke => {
            say.speak(joke);
        })
    })