const express = require("express");
const router = express.Router();
const path = require("path");

const Trip = require("../models/trip");
const Event = require("../models/event");

router.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/../index.html"));
});

router.get("/trips", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/../tripChoose.html"));
});

router.get("/trips/:type", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/../trips.html"));
});

router.get("/trips/:type/:id", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/../onetrip.html"));
});

router.get("/statistic", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/../tripStat.html"));
});

router.post("/createEvent", function(req, res, next) {
  Event.create(req.body, function(error) {
    if (error) {
      return next(error);
    }
    res.sendStatus(200);
  });
});

router.post("/setCalendar", function(req, res, next) {
  let bunchOfevents = [];

  Event.find({}, function(error, events) {
    if (error) {
      return next(error);
    } else if (!events) {
      return next(new Error("events not found"));
    }
    for (const prop in events) {
      let object = events[prop];
      let event = (({ id, name, day, month, year, trip_name }) => ({
        id,
        name,
        day,
        month,
        year,
        trip_name
      }))(object);
      bunchOfevents.push(event);
    }
    res.send(bunchOfevents);
  });
});

router.post("/getTripsForType", function(req, res, next) {
  let tripType = req.body.type;
  let bunchOftrips = [];

  Trip.find({ type: tripType }, function(error, trips) {
    if (error) {
      return next(error);
    } else if (!trips) {
      return next(new Error("trips not found"));
    }
    for (const prop in trips) {
      let object = trips[prop];
      let event = (({ id, name, picture }) => ({
        id,
        name,
        picture
      }))(object);
      bunchOftrips.push(event);
    }
    res.send(bunchOftrips);
  });
});

router.post("/getTripsForId", function(req, res, next) {
  let tripId = req.body.id;

  Trip.findOne({ id: tripId }, function(error, trip) {
    if (error) {
      return next(error);
    } else if (!trip) {
      return next(new Error("trips not found"));
    }
    res.send(trip);
  });
});

module.exports = router;
