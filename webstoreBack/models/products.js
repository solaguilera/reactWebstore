var mongoose = require('mongoose');

 var Product = new mongoose.Schema({
   artist: String,
   album: String,
   price: Number,
   description: String,
   imgUrl: String,
   comments:[{
     type:mongoose.Schema.Types.ObjectId,
     ref: 'Comment'
   }]
 });

module.exports = mongoose.model('Product', Product);
