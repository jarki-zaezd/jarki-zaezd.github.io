const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

let app = express();
const port = 9000;

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + "/"));

const routes = require("./routes/router");

app.use("/", routes);

app.use(function(req, res, next) {
  let err = new Error("File Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(3000, function() {
  console.log("Express app listening on port 3000");
});

app.listen(port);
console.log("Node listening on port %s", port);
