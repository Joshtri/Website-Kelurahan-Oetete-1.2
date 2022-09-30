const mysql = require("mysql");

//Connection Pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//View data
exports.view_pendidikan = (req, res) => {
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    connection.query('SELECT * FROM tumbal', (err,rows)=>{
        //when done with the connection, release it. 
        connection.release();

        if(!err){
            res.render("data-pendidikan",{rows});
        }
        else{
            console.log(err);
        }
        console.log('The data from user table: \n', rows);

    });

  });
};

//View data
exports.view_pekerjaan = (req, res) => {
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    connection.query('SELECT * FROM tumbal', (err,rows)=>{
        //when done with the connection, release it. 
        connection.release();

        if(!err){
            res.render("data-pekerjaan",{rows});
        }
        else{
            console.log(err);
        }
        console.log('The data from user table: \n', rows);

    });

  });
};

//View data
exports.view_jeniskelamin = (req, res) => {
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    connection.query('SELECT * FROM tumbal', (err,rows)=>{
        //when done with the connection, release it. 
        connection.release();

        if(!err){
            res.render("data-jeniskelamin",{rows});
        }
        else{
            console.log(err);
        } 
        console.log('The data from user table: \n', rows);

    });

  });
};

//View data
exports.view_umur = (req, res) => {
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    connection.query('SELECT * FROM tumbal', (err,rows)=>{
        //when done with the connection, release it. 
        connection.release();

        if(!err){
            res.render("data-umur",{rows});
        }
        else{
            console.log(err);
        } 
        console.log('The data from user table: \n', rows);

    });

  });
};

//View data
exports.view_umkm = (req, res) => {
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    connection.query('SELECT * FROM tumbal', (err,rows)=>{
        //when done with the connection, release it. 
        connection.release();

        if(!err){
            res.render("data-umkm",{rows});
        }
        else{
            console.log(err);
        } 
        console.log('The data from user table: \n', rows);

    });

  });
};

//View data
exports.view_statuspernikahan = (req, res) => {
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    connection.query('SELECT * FROM tumbal', (err,rows)=>{
        //when done with the connection, release it. 
        connection.release();

        if(!err){
            res.render("data-statuspernikahan",{rows});
        }
        else{
            console.log(err);
        } 
        console.log('The data from user table: \n', rows);

    });

  });
};
