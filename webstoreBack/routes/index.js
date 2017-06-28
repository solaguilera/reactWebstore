var express = require('express');
var router = express.Router();
var Product = require('../models/products.js');
var Comment = require('../models/comments');  // El modelo de comentarios

//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// get all products
router.get('/products', function(req, res, next) {
  Product.find({}, function(err, products){
    if (err) return 'Error '+err;
    res.send(products);
  });
});
// individual product
router.get('/products/:id', function(req, res, next) {
  Product.findById(req.params.id).populate("comments").exec(function(err, product) {
    if (err) return 'Error';
    res.send(product);
  });
});
// post product
router.post('/products', function(req, res, next) {
  console.log('body',req.body)
  Product.create(req.body, function (err, product) {
    if (err) return 'Can\'t create product';
    res.send({product});
  });
});
// edit product
router.put('/products/:id', function(req, res, next) {
  console.log('body',req.body)
  console.log('id',req.params.id)
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, product) {
    if (!err) return 'Error';
    console.log(product)
    res.send(product);
  });
});
// delete product
router.delete('/products/:id', function(req, res, next) {
  // console.log('body',req.body)
  // console.log('id',req.params.id)
  Product.findByIdAndRemove(req.params.id, function(err, product) {
    if (err) return 'Error';
    res.send(product)
  });
});


module.exports = router;
