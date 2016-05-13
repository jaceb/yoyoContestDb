var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  email:{ type:String, Unique:true },
  password:{type: String, min:8}

})
