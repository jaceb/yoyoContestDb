var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
  name: {type: String, require: true},
  place: {type: Number},
  finalScore: {type: Number},
  techExec: {type: Number},
  techEval: {type: Number},
  performanceEval: {type: Number},
  deductions: {type: Number}
  // contest:[{type: Schema.Types.ObjectId, ref:"Contest"}],
  // division: {type: Schema.Types.ObjectId, ref:"Division"}
})

module.exports = mongoose.model('Player', playerSchema);
