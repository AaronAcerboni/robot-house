const MicToSpeech = require('mic-to-speech');
const cmd         = require('node-run-cmd');
const fs          = require('fs');
const stt         = require('./stt');
const say         = require('say-promise')
const exec        = require('sync-exec')
 
let micToSpeech = new MicToSpeech();


micToSpeech.on('speech', function(rawAudio) {
  let tempFileName = 'tempaudio'
  fs.writeFileSync(tempFileName, rawAudio);
  console.log('wrote raw file')
  exec('sox '+ tempFileName +' -r 16000 -c 1 -b 16 -e unsigned ' + tempFileName +'.wav');
  // exec('sox '+ tempFileName +' -r 16000 -c 1 -b 16 -e unsigned ' + tempFileName +'.wav');
  stt.getTextFromSpeech(tempFileName+'.wav').then(response => {
    micToSpeech.resume();
    console.log(response.results[0].lexical)
  });
});

micToSpeech.start();
console.log('Listening for speech');