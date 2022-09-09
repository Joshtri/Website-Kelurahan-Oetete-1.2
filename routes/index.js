var express = require('express');
var router = express.Router();
 

/* GET home page. */


router.get('/beranda', function(req, res, next) {
  res.render('home');
});

router.get('/header', function(req,res,next){
  res.render('header', {text : "Apa" })

});

router.get('/footer', function(req,res,next){
  res.render('footer', {text : "Apa" })

});

module.exports = router;
