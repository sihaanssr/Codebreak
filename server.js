const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
