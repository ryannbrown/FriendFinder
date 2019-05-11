// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends
// ===============================================================================

var friends = require("../data/friends");
==========================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
};

