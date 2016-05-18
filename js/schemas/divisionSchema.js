var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var divisionSchema = new Schema({
  divisionName: {type: String},
  player: [{type: Schema.Types.ObjectId, ref: "Player"}]

})

module.exports = divisionSchema;
