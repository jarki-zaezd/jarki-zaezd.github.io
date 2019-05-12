const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const mongoose = require("mongoose");

let app = express();
const port = 9000;

mongoose.connect("mongodb://localhost:27017/test-7", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + "/"));

const Trip = require("./models/trip");
const tripContent = fs.readFileSync("JSON/trips.json", "utf8");

const Event = require("./models/event");
const eventContent = fs.readFileSync("JSON/events.json", "utf8");

try {
  const data = JSON.parse(tripContent);
  for (let i = 0; i < data.length; i++) {
    Trip.create(data[i], function() {});
  }
} catch (err) {
  console.error(err);
}

try {
  const data = JSON.parse(eventContent);
  for (let i = 0; i < data.length; i++) {
    Event.create(data[i], function() {});
  }
} catch (err) {
  console.error(err);
}

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
