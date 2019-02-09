var mongoose = require('mongoose');  
var RadicalSchema = new mongoose.Schema({  
  radical: String,
  strokes: Number
});
mongoose.model('Radical', RadicalSchema);

module.exports = mongoose.model('Radical');