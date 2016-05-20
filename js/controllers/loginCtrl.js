var User = require("../schemas/userSchema.js");

module.exports = {

    Create: function(req, res, next) {
        var newUser = new User (req.body);
        newUser.save(function(err, response) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(response)
            }

        })
    },

    Read: function(req, res, next){
      User.find().populate("favorites").exec(function(err, response){
        if(err){
          res.status(500).json(err);
        }
        else{
          res.status(200).json(response);
        }
      })
    },
    ReadId: function(req, res, next){
        User.findById(req.params.id).populate({path: 'user.favorites'}).exec(function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },
}
