const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true,
    trim: true
  },
  month: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: String,
    required: true,
    trim: true
  },
  trip_name: {
    type: String,
    required: true,
    trim: true
  }
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
