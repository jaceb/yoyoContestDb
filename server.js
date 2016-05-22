var express = require('express');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var app = express();
var serverConfig = require("./serverConfig.js")
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = serverConfig.serverPort;
var keys = require('./keys.js');
var addContestCtrl = require("./js/controllers/addContestCtrl");
var loginCtrl = require("./js/controllers/loginCtrl");


app.use(bodyParser.json());
app.use(session({
    secret: 'not quite sure what these words are for',
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/public"));

passport.use(new FacebookStrategy({
    clientID: keys.facebookKey,
    clientSecret: keys.facebookSecret,
    callbackURL: 'http://localhost:4000/auth/facebook/callback',
}, function(token, refreshToken, profile, done) {
    return done(null, profile);
}));
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/#/dashboard',
    failureRedirect: '/auth/facebook'
}))
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

app.post('/api/contests', addContestCtrl.Create);
app.get('/api/contests', addContestCtrl.Read);
app.post('/api/users', loginCtrl.Create);
app.get('/api/users', loginCtrl.Read);
app.get('api/users/:id', loginCtrl.ReadId);
app.put('/favorites/:id', loginCtrl.Update);
app.delete('api/users/:id', loginCtrl.Delete)


mongoose.connect('mongodb://localhost/contestData')
mongoose.connection.once("open", function() {
    console.log("connecting to yoyo database");
});

app.listen(port, function() {
    console.log("Easy listening on port " + port + ": the breeze");
})
