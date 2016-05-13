var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = Schema({
  name: {type: String},
  finalScore: {type: Number, max: 100 },
  techExec: {type: Number, max: 60},
  techEval: {type: Number, max: 20},
  performanceEval: {type: Number, max:20}
  deductions: {type: Number},
  contest:[{type: Schema.Types.ObjectId, ref:"Contest"}],
  division: {type: Schema.Types.Objects, ref:"Division"}
})

module.exports = mongoose.model('Player', playerSchema);
