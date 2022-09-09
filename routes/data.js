var express = require('express');
var router = express.Router();


/* GET data page. */

router.get('/data-penduduk', function (req, res, next) {
    res.render('data-penduduk', { text: "Apa" })
});


module.exports = router;