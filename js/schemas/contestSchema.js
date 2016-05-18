var mongoose = require('mongoose');
var divisionSchema = require("./divisionSchema")
var Schema = mongoose.Schema;

var contestSchema = new Schema({
    contestName: {
        type: "String"
    },
    scale: {
        type: "String"
    },
    year: {
        type: "Number",
        min: 2000
    },
    country: {
        type: "String"
    },
    player: []


})

module.exports = mongoose.model('Contest', contestSchema);
