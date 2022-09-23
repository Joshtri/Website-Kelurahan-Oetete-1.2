var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var favicon = require("express-favicon");
var fonts = require("express-fonts");

var bodyParser = require("body-parser");
var cors = require("cors");
var mysql = require("mysql");

require("dotenv").config();

var app = express();

const port = process.env.PORT || "3001";

// static files.
app.use(express.static(__dirname + "/public"));

app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});


//connect db. 
pool.getConnection((err,connection)=>{
  if(err) throw err;
  console.log(`Connected as ID ` + connection.threadId);
});

var indexRouter = require("./server/routes/index");
var usersRouter = require("./server/routes/users");
var profilRouter = require("./server/routes/profil");
var petaRouter = require("./server/routes/peta");
var pemerintahanRouter = require("./server/routes/gov");
var dataRouter = require("./server/routes/data");
var statisticsRouter = require("./server/routes/stats");
const { application } = require("express");

//Router.
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/profil", profilRouter);
app.use("/", petaRouter);
app.use("/pemerintahan", pemerintahanRouter);
app.use("/data", dataRouter);
app.use("/statistics", statisticsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => console.log(`listening on ${port}`));