//dependencies
var express = require("express");

// Instance of express app
var app = express();

// sets port for app, this works for heruko also
var PORT = process.env.PORT || 8080;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware
app.use(express.static("public"));

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Soccer2121!",
  database: "friendFinder_db"
});

//notify if there is error, if not will notify it is connected
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });