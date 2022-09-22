var express = require('express');
var router = express.Router();

/* GET data page. */


// Data page berupa penduduk
router.get('/data-penduduk', function (req, res, next) {
    res.render('data-penduduk');
});

router.get('/data-pendidikan', function(req,res,next){
    res.render('data-pendidikan');
});

router.get('/data-pekerjaan', function(req,res,next){
    res.render('data-pekerjaan');
});

router.get('/data-umur', function(req,res,next){
    res.render('data-umur');
});

router.get('/data-jeniskelamin', function(req,res,next){
    res.render('data-jeniskelamin');
});

router.get('/data-statuspernikahan', function(req,res,next){
    res.render('data-statuspernikahan');
});




//Diluar konteks utk oetete.
router.get('/data-umkm', function(req,res,next){
    res.render('data-umkm');
});

module.exports = router;