var express = require('express');
var app = express();
var db = require('./db');

var RadicalController = require('./radical/RadicalController');
app.use('/radicals', RadicalController);

module.exports = app;