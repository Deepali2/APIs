const express = require("express");
const app = express();
app.set("view engine", "ejs");

const request = require ("request");

app.get("/results", function(req, res) {
  let query = req.query.search;
  request(`http://www.omdbapi.com/?s=${query}&apikey=thewdb`, function(error, response, body) {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  let data = JSON.parse(body);
  res.render("results", {data: data});
  });
});

app.get("/", function(req, res) {
  res.render("search");
});




app.listen(3002, function() {
  console.log("I am listening on port 3002");
});