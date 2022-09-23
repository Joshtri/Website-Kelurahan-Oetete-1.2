var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var favicon = require("express-favicon");
var fonts = require("express-fonts");
const { db } = require("./model/dbConnection");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.get("/api/readData", (req, res) => {
  const sqlQuery = "SELECT * FROM tumbal";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var profilRouter = require("./routes/profil");
var petaRouter = require("./routes/peta");
var pemerintahanRouter = require("./routes/gov");
var dataRouter = require("./routes/data");
var statisticsRouter = require("./routes/stats");

// Specific folder example
// app.use(express.static('public'));
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))

// read

app.use(express.static(__dirname + "/public"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public/images')));

//use for favicon.
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

//use for fonts.

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

module.exports = app;
