var Player = require("./../schemas/playerSchema");
// var Contest = require("../schemas/contestSchema.js");
// var Division = require("../schemas/divisionSchema.js");

module.exports = {


      Create: function(req, res, next) {
        Player.create(req.body, function(err, response) {
              if (err) {
                  res.status(500).json(err);
              } else {
                  res.status(200).json(response);
              }

          })
      },

      Read: function(req, res, next){
        Player.find().exec(function(err, response){
          if(err){
            res.status(500).json(err);
          }
          else{
            res.status(200).json(response);
          }
        })
      },
      Delete: function(req, res, next){
    Player.findByIdAndRemove(req.params.id, function(err, response){
        if(err){
            res.status(500).json(err);
        }else{
            res.status(200).json(response);
        }
    })
},
}
