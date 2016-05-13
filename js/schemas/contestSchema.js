var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contestSchema = Schema({
  contestName: {type: String},
  scale: {type: String},
  year: {type: Number, min:2000},
  country: {type: String},
  division:[{type: Schema.Types.ObjecId, ref:"Division"}]
})

module.exports = mongoose.model('Contest', contestSchema);
