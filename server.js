var express = require('express');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 4000;
var keys = require('./js/keys.js');

app.use(session({secret: 'not quite sure what these words are for', saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/public"));

passport.use(new FacebookStrategy({
  clientID: keys.facebookKey,
  clientSecret: keys.facebookSecret,
  callbackUrl: 'http://localhost:4000/auth/facebook/callback',
}, function(token, refreshToken, profile, done){
  return done(null, profile);
}));
app.get('/auth/facebook', passport.authenticate('facebook', {
  successRedirect: '/dashboard',
  failureRedirect: '/auth/facebook'
}))
passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(obj, done){
  done(null, user);
});

mongoose.connect('mongodb://localhost/contestData')
mongoose.connection.once("open", function(){
  console.log("connecting to yoyo database");
});

app.listen(port, function(){
  console.log("Easy listening on port " + port + ": the breeze");
})