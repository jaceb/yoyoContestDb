var User = require("../schemas/userSchema.js");
var Contest = require("../schemas/contestSchema.js");

module.exports = {

    Create: function(req, res, next) {
        var newUser = new User(req.body);
        newUser.save(function(err, response) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(response)
            }

        })
    },

    Read: function(req, res, next) {
        User.find().populate("favorites").exec(function(err, response) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(response);
            }
        })
    },
    ReadId: function(req, res, next) {
        User.findById(req.params.id).populate({
            path: 'user.favorites'
        }).exec(function(err, response) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(response);
            }
        })
    },

    Update: function(req, res, next) {
      console.log("path", req.body);
      Contest.findById(req.body.favorite).populate({path: 'favorites.contest'}).exec(function(err, response) {
          if(err) {
            console.log('1', err);
          }
          console.log('this?', response);
          var favContest = response;


        User.findOneAndUpdate({_id: req.params.id}, {$push:{'favorites': favContest}}, function(err, response) {
            if (err) {
              console.log(err);
                res.status(500).json(err);
            } else {
                res.status(200).json(response);

            }
        })

        })
    },
    Delete: function(req, res, next){
        User.favorites.findByIdAndRemove(req.params.id, function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },
}
