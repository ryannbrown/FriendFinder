var path = require("path");

module.exports = function(app) {

//HTML get requests
//First one is for survey screen
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // this is the catch all that brings us home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
