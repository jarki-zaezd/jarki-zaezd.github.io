const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/main", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/../index.html"));
});

module.exports = router;
