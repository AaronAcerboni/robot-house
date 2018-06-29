const { BingSpeechClient, VoiceRecognitionResponse } = require('bingspeech-api-client');

module.exports = {
    getTextFromSpeech: function (fileLocation) {
        console.log('a')
        let audioStream = require('fs').createReadStream(fileLocation); // create audio stream from any source
         console.log('b')
        // Bing Speech Key (https://www.microsoft.com/cognitive-services/en-us/subscriptions)
        let subscriptionKey = 'ebf9ca3bdffa4bc5bb5d1088c7772077';
        let client = new BingSpeechClient(subscriptionKey);

        return new Promise((resolve, reject) => {
            client.recognizeStream(audioStream).then(response => {
                resolve(response);
            });
        })
    }
}