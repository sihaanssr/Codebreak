const express = require("express");
const router = express.Router();

const getcoordinates = require("../../validation/search");

/*router.get("/dhundo", (req, res) => {
  const coordinates = getcoordinates();
  console.log(coordinates);
  res.send("test");
});*/

router.get("/dhundo", (req, res) => {
  res.render("others");
});

module.exports = router;
