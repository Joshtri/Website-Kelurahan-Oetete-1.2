var express = require('express');
var router = express.Router();


/*Get Profil Item*/

router.get('/sejarah-kel', function (req, res, next) {
    res.render('sejarah-kel');
});

router.get('/header', function (req, res, next) {
    res.render('header', { text: "Apa" })

});


router.get('/potensi_&_Fasilitas', function (req,res,next){
    res.render('potensi_Fasilitas');
});

module.exports = router;