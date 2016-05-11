var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 4000;

mongoose.connect('mongofdb://localhost/contestData')
mongoose.connection.once(open), function(){
  console.log("connecting to yoyo database");
}

app.listen(port, function(){
  console.log("Easy listening on port " + port ": the breeze");
})
