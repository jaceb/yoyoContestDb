var Division = require("../schemas/divisionSchema.js");

module.exports = {

      Create: function(req, res, next) {
          var newDivision = new Division(req.body);
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
      
      Update: function(req, res, next){
      Division.findByIdAndUpdate(req.params.id, req.body, function(err, response){
          if(err){
              res.status(500).json(err);
          }else{
              res.status(200).json(response);
          }
      })
  },

}
