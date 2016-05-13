var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var divisionSchema = Schema({
  division: {type: String},
  player: [{type: Schema.Types.Objects, ref: "Player"}],
  contest:[{type: Schema.Types.ObjectId, ref:"Contest"}]

})

module.exports = mongoose.model('Division', divisionSchema);
