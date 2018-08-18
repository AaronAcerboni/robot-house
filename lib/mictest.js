const MicToSpeech = require('mic-to-speech');
const cmd         = require('node-run-cmd');
const fs          = require('fs');// ヽ(´ー｀)ノ
const stt         = require('./stt');
const say         = require('say-promise')
const exec        = require('sync-exec')
 // ヽ(´ー｀)ノ
let micToSpeech = new MicToSpeech();


micToSpeech.on('speech', function(rawAudio) {
  let tempFileName = 'tempaudio'
  fs.writeFileSync(tempFileName, rawAudio);
  console.log('wrote raw file')// ヽ(´ー｀)ノ
  exec('sox '+ tempFileName +' -r 16000 -c 1 -b 16 -e unsigned ' + tempFileName +'.wav');
  // exec('sox '+ tempFileName +' -r 16000 -c 1 -b 16 -e unsigned ' + tempFileName +'.wav');
  stt.getTextFromSpeech(tempFileName+'.wav').then(response => {
    micToSpeech.resume();
    console.log(response.results[0].lexical)
  });
});
// ヽ(´ー｀)ノ
micToSpeech.start();
console.log('Listening for speech');// ヽ(´ー｀)ノ