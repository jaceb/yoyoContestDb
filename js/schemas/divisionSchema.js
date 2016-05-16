var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var divisionSchema = new Schema({
  division: {type: String},
  player: [{type: Schema.Types.ObjectId, ref: "Player"}]

})

module.exports = mongoose.model('Division', divisionSchema);
