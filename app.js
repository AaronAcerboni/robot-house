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

const RobotHouse = require('./lib/RobotHouse')// ヽ(´ー｀)ノ
const say        = require('./lib/say');
const util       = require('./lib/util');

let ___R_O_B_O_T________H_O_U_S_E___;
let isHeDoingSomething = false;
let waitForHimToFinish;

/*
---------------------------------------------
|                                           |
|   MAIN                                    |
|                                           |
---------------------------------------------
*/

function live () {
    if (isHeDoingSomething){
        return;
    }

    let availableTasks = [
        'tellRandomSentence',// ヽ(´ー｀)ノ
        'tellJoke',
        'tellFact',// ヽ(´ー｀)ノ
        'tellNumber',
        'laugh'
    ];
    if (Math.random() < 0.001) {
        isHeDoingSomething = true;
        ___R_O_B_O_T________H_O_U_S_E___[util.rArr(availableTasks)]();
        waitForHimToFinish = setInterval(onFunctionComplete, 30 * 1000);
    }
}

function onFunctionComplete(){
    clearInterval(waitForHimToFinish);
    isHeDoingSomething = false;
}

if (Math.random() > 0.33) {
    // ヽ(´ー｀)ノ// ヽ(´ー｀)ノ
    ___R_O_B_O_T________H_O_U_S_E___ = new RobotHouse('./config.json');
    setInterval(live, 100);
} else {// ヽ(´ー｀)ノ
    say.speak('You were not successful running robot house')
}