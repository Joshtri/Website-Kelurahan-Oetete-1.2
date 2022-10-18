var express = require('express');
var router = express.Router();
const mysql = require("mysql");
// const userController = require('../controllers')
 


const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

/* GET home page. */

router.get('/', function(req, res, next) {
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
                connection.query("SELECT COUNT(id_Usaha) AS Tmikro from umkm WHERE omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta' OR omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta' OR omset = 'Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta'", (err, rows5) => {
                  //when done with the connection, release it.
                  connection.query("SELECT COUNT(id_Usaha) AS Tmenengah from umkm WHERE omset ='Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar'", (err, rows6) => {
                      //when done with the connection, release it.
                      connection.query("SELECT COUNT(id_Usaha) AS Tkecil from umkm WHERE omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.500 Juta' OR omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar' OR omset = 'Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta'", (err, rows7) => {
                          //when done with the connection, release it.
                          connection.query("SELECT COUNT(id_Usaha) AS TotalUMKM FROM umkm", (err, rows8) => {
                          connection.release();
                
                          if (!err) { 
                            res.render("home", {rows,rows1, rows2, rows3, rows5, rows6, rows7, rows8});
                          } else {
                            console.log(err);
                          }
                          console.log("The data from user table: \n",rows,rows1, rows2,rows3, rows5, rows6, rows7,rows8);
                        });
                       }); 
                    }); 
                 }); 
              }); 
            }); 
          }); 
        });
    });
});



router.get('/footer', function(req,res,next){
  res.render('footer')

});


router.get('/sidebar', function(req,res,next){
  res.render('sidebar')

});


module.exports = router;  
