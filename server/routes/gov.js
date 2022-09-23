var express = require('express');
var router = express.Router();


/* GET pemerintahan page. */

router.get('/visi_misi', function (req, res, next) {
    res.render('visi_misi', { text: "Apa" })
});


router.get('/struktur-pemerintahan', function (req, res, next) {
    res.render('struktur', { text: "Apa" })
});

module.exports = router;
