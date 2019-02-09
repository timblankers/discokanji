var mongoose = require('mongoose');
var DATABASE_URL = process.env.DATABASE_URL || 'http://localhost'
mongoose.connect(`mongodb://${DATABASE_URL}/discokanji`, { useNewUrlParser: true });

var connection = mongoose.connection;

connection.on('error', function (error) {
  if (error.message && error.message.match(/failed to connect to server .* on first connect/)) {
    setTimeout(function () {
      mongoose.connect(`mongodb://${DATABASE_URL}/discokanji`, { useNewUrlParser: true }).catch(() => {

      });
    }, 20 * 1000);
  } else {
    console.error(new Date(), String(error));
  }
});

connection.once("open", function(callback){
  console.log("Database Connection Succeeded");
});