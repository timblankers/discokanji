var mongoose = require('mongoose');  
var KanjiSchema = new mongoose.Schema({  
  kanji: String,
  radicals: [String]
});
mongoose.model('Kanji', KanjiSchema);

module.exports = mongoose.model('Kanji');