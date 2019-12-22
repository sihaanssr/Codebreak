const express = require("express");
const router = express.Router();

router.get("/getride", (req, res) => {
  res.render("test");
});

module.exports = router;
