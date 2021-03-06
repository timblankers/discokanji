var express = require('express');
var cors = require('cors');
var app = express();
var db = require('./db');

app.use(cors());

var KanjiController = require('./kanji/KanjiController');
app.use('/kanji', KanjiController);
var RadicalController = require('./radical/RadicalController');
app.use('/radicals', RadicalController);

module.exports = app;