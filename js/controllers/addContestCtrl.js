var Contest = require("../schemas/contestSchema.js");

module.exports = {

    Create: function(req, res, next) {
        var newContest = new Contest(req.body);
        newContest.save(function(err, response) {
            if (err) {
                res.status(500).json(err;)
            } else {
                res.status(200).json(response)
            }

        })
    },

    Read: function(req, res, next){
      Product.find().exec(funtion(err, response){
        if(err){
          res.status(500).json(err);
        }
        else{
          res.status(200).json(response);
        }
      })
    },
}
