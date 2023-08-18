var path = require("path");

module.exports = function(app) {
    app.get("FriendFinderApp/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "/survey.html"));
    });
  
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "/index.html"));
    });
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "/index.html"));
    });

  }
