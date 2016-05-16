var mongoose = require('mongoose');
var divisionSchema = require("./divisionSchema")
var Schema = mongoose.Schema;

var contestSchema = new Schema({
  contestName: {type: "String"},
  scale: {type: "String"},
  year: {type: "Number", min:2000},
  country: {type: "String"},
  division:[divisionSchema]
})

module.exports = mongoose.model('Contest', contestSchema);


/*
  [
  {
  contestName: ,
  scale: ,
  year: ,
  country: ,
  division: [
  {
  division: 1A
},
{division: 1B}
]
}
]


*/
