var Division = require("../schemas/divisionSchema.js");

module.exports = {

      Create: function(req, res, next) {
          var newContest = new Division(req.body);
          newDivision.save(function(err, response) {
              if (err) {
                  res.status(500).json(err);
              } else {
                  res.status(200).json(response)
              }

          })
      },

      Read: function(req, res, next){
        Division.find().exec(function(err, response){
          if(err){
            res.status(500).json(err);
          }
          else{
            res.status(200).json(response);
          }
        })
      },

}
