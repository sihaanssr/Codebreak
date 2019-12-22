const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const db = require("./config/default").mongoURI;

mongoose.Promise = global.Promise;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/insert", require("./routes/api/insert"));
app.use("/api/locate", require("./routes/api/locate"));
app.use("/api/carpool", require("./routes/api/carpool"));
app.use("/api/payment", require("./routes/api/payment"));
app.set("views", path.join(__dirname, "views"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
