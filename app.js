/*
                ⊂_ヽ
                　 ＼＼ _____
                　　 ＼| '.' | ROBOT
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

const RobotHouse = require('./lib/RobotHouse')
const say        = require('say-promise');

/*

---------------------------------------------
|                                           |
|   MAIN                                    |
|                                           |
---------------------------------------------

*/

if (Math.random() > 0.33) {
    let ___R_O_B_O_T________H_O_U_S_E___ = new RobotHouse('./config.json');
    ___R_O_B_O_T________H_O_U_S_E___.tellFact();
} else {
    say.speak('You were not successful running robot house')
    console.log('You were not successful running robot house!')
}