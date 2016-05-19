var CreateUser = require("../schemas/userSchema.js");

module.exports = {

    Create: function(req, res, next) {
        var newContest = new Contest(req.body);
        newContest.save(function(err, response) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(response)
            }

        })
    },

    Read: function(req, res, next){
      Contest.find().populate("user.favorites").exec(function(err, response){
        if(err){
          res.status(500).json(err);
        }
        else{
          res.status(200).json(response);
        }
      })
    },
}
