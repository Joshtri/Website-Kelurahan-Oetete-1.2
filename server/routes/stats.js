var express = require('express');
var router = express.Router();
 

router.get('/data-umur', function (req, res, next) {
    res.render('data-umur');
});

router.get('/data-jeniskelamin', function (req, res, next) {
    res.render('data-jeniskelamin');
});

router.get('/data-statuspernikahan', function (req, res, next) {
    res.render('data-statuspernikahan');
});

router.get('/data-umkm', function(req,res,next){
    res.render('data-umkm');
});

router.get('/data-pekerjaan', function (req, res, next) {
    res.render('data-pekerjaan');
});

router.get('/data-jeniskelamin', function (req, res, next) {
    res.render('data-jeniskelamin');
});

router.get('/data-pendidikan', function (req, res, next) {
    res.render('data-pendidikan');
});

// There is 7 router

//DONE
router.get('/statistik/umur', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                
            ],
            data: [90, 60, 45, 80, 100, 40, 25],
            hoverOffset: 4,
        },
    );
});

router.get('/statistik/pekerjaan', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            data: [21, 10,20,29,22,24,29,39],
            hoverOffset: 4,
        },
    );

});

router.get('/statistik/status', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            data: [50, 10, 34, 26],
            hoverOffset: 4,
        },
    );

});
router.get('/statistik/pendidikan', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(25, 34, 86)",
                "rgb(255, 99, 132)",

                "rgb(54, 16, 235)",
                "rgb(115, 25, 86)",
                "rgb(0, 99, 132)",
                "rgb(534, 162, 235)",

                "rgb(211, 15, 56)",
                
            ],
            data: [2, 10,3,5,6,7,8,5,2],
            hoverOffset: 4,
        },
    );

});

//
router.get('/statistik/jeniskelamin', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(128,0,0)",
                "rgb(139,0,0)",
                "rgb(165,42,42)",
            ],
            data: [10, 15],
            hoverOffset: 4,
        },
    );

});


//
router.get('/statistik/umkm', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            data: [8, 5, 3],
            hoverOffset: 4,
        },
    );

});


router.get('/statistik/penduduk', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(128,0,0)",
                "rgb(139,0,0)",
                "rgb(165,42,42)",
            ],
            data: [10, 15],
            hoverOffset: 4,
        },
    );

});
module.exports = router;
