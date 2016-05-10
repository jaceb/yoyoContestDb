var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongofdb://localhost/contestData')
mongoose.connection.once(open), function()
