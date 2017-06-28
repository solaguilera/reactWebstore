var express = require('express');
var router = express.Router({mergeParams:true}); // must pass to the child router if you want to access the params from the parent router
var Product = require('../models/products');  // El modelo de productos
var Comment = require('../models/comments');  // El modelo de comentarios

/* Post  Comments */

router.post ("/", function(req, res, next){
  console.log(req.params)
  var date=new Date();
  Product.findById(req.params.id, function(err, product) {
    if(err){
      res.render(error)
    }else{
      Comment.create({body:req.body.body, date:date.toLocaleDateString()}, function(err, comment){
        if(err){
          res.render(error)
        }else{
          console.log(product)
          product.comments.unshift(comment)
          product.save()
          console.log('comentario creado');
          res.send(comment);
        }
      })
    }
  })
});

// DELETE COMMENTS
router.delete("/:id", function(req, res, next){
  console.log('req params id', req.params.id);
  Comment.findByIdAndRemove(req.params.id, function(err, comment){
    if(err){
      res.render(error)
    }else{
      console.log(req.params.id)
      res.send(comment);
    }
  })
});

// PUT EDIT COMMENT
router.put('/:id', function(req, res, next){
  Comment.findByIdAndUpdate(req.params.id, req.body, function(err, comment){
      if(err){
        res.render("error");
      }else{
        res.send(comment);
      }
    })
  });

module.exports = router;
