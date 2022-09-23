var express = require('express');
var router = express.Router();
 

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/beranda', function(req, res, next) {
  res.render('home');
});

router.get('/header', function(req,res,next){
  res.render('header', {text : "Apa" })

});

router.get('/footer', function(req,res,next){
  res.render('footer', {text : "Apa" })

});

router.get('/error', function(req,res,next){


});

module.exports = router;  
