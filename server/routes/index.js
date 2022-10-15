var express = require('express');
var router = express.Router();
const mysql = require("mysql");
// const userController = require('../controllers')
 
//Connection Pool
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

/* GET home page. */

router.get('/beranda', function(req, res, next) {
    //connect db.
    pool.getConnection((err, connection) => {
      if (err) throw err; //NOT CONNECTED.
      console.log(`Connected as ID ` + connection.threadId);
        connection.query("SELECT SUM(jenis_kelamin ='Laki-Laki') AS TotalLaki FROM penduduk", (err, rows1) => {
          //when done with the connection, release it.
          connection.query("SELECT SUM (jenis_kelamin = 'Perempuan') AS Totalperempuan FROM penduduk", (err, rows2) => {
            //when done with the connection, release it.
            connection.query("SELECT COUNT(jenis_kelamin) AS TotalJK FROM penduduk", (err, rows3) => {
              connection.query("SELECT file_article, judul_publish, tanggal_terbit, id_publish FROM publikasi", (err, rows) => {
                  connection.release();
        
                  if (!err) { 
                    res.render("home", {rows,rows1, rows2, rows3});
                  } else {
                    console.log(err);
                  }
                  console.log("The data from user table: \n",rows,rows1, rows2,rows3);
              }); 
            }); 
          }); 
        });
    });
});

// router.get('/beranda', function(req, res, next) {
//     //connect db.
//     pool.getConnection((err, connection) => {
//       if (err) throw err; //NOT CONNECTED.
//       console.log(`Connected as ID ` + connection.threadId);
  
//       //show data
//       connection.query("SELECT file_article, judul_publish, tanggal_terbit, id_publish FROM publikasi", (err, rows) => {
//         //when done with the connection, release it.
//         connection.release();
  
//         if (!err) {
//           res.render("data-publikasi", { rows });
//         } else {
//           console.log(err);
//         }
//         console.log("The data from user table: \n", rows);
//       });
//     });
// });

router.get('/header', function(req,res,next){
  res.render('header', {text : "Apa" })

});

router.get('/footer', function(req,res,next){
  res.render('footer', {text : "Apa" })

});

// router.get('/error', function(req,res,next){
//   res.render('error')

// });

router.get('/sidebar', function(req,res,next){
  res.render('sidebar')

});

router.get('/tester', function(req,res,next){
  res.render('tester')

});

module.exports = router;  
