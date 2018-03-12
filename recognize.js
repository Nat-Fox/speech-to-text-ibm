var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');

var speech_to_text = new SpeechToTextV1 ({
  username: 'c4de3960-f617-4dcf-b79c-3fbb0f2eb985',
  password: 'NiIZFrjTElVs'
});

var files = ['./audio/call1.flac'];
for (var file in files) {
  var params = {
    audio: fs.createReadStream(files[file]),
    content_type: 'audio/flac',
    timestamps: true,
    word_alternatives_threshold: 0.9,
    keywords: ['colorado', 'tornado', 'tornadoes'],
    keywords_threshold: 0.5,
    model: 'es-ES_NarrowbandModel'
  };

  speech_to_text.recognize(params, function(error, transcript) {
    if (error)
      console.log('Error:', error);
    else
      console.log(JSON.stringify(transcript, null, 2));
  });
}