var express = require('express');
var router = express.Router();
const userController = require('../controllers/dataController');

/* GET data page. */

//create, find, update, delete.


// Data page berupa penduduk
// router.get('/data-penduduk', function (req, res, next) {
//     res.render('data-penduduk');
// });

router.get('/data-pendidikan',userController.view_pendidikan);


    //lock this for a while.

// router.get('/data-pendidikan', function(req,res,next){
//     res.render('data-pendidikan');
// });

router.get('/data-pekerjaan',userController.view_pekerjaan);

router.get('/data-umur',userController.view_umur );
   

router.get('/data-jeniskelamin', userController.view_jeniskelamin);


router.get('/data-statuspernikahan', userController.view_statuspernikahan)


// router.get('/apitumbal', function(req,res,next){

// });

//Diluar konteks utk oetete.
router.get('/data-umkm',userController.view_umkm);

module.exports = router;