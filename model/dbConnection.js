const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  database: "db_kel_oetete",
  password: "",
});


module.exports = db;
// exports.db=db;