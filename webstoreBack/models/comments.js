var mongoose = require('mongoose');
var Comment = new mongoose.Schema({
  body: String,
  user: String, // aca va el coso de users
  date: Date,
})





module.exports = mongoose.model('Comment', Comment);
