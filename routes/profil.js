var express = require('express');
var router = express.Router();


/*Get Profil Item*/

router.get('/sejarah-kel', function (req, res, next) {
    res.render('sejarah-kel');
});

router.get('/header', function (req, res, next) {
    res.render('header', { text: "Apa" })

});



module.exports = router;