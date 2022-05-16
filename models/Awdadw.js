
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const awdadwSchema = new Schema({
Underscoreid:String , 


tyest:String 



})

module.exports = {
  Awdadw : mongoose.model('awdadw', awdadwSchema),
}

