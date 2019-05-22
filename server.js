const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/db").mongoURI;
const passportSetup = require("./config/passportSetup");

const app = express();
const port = process.env.PORT || 5000;
app.set("view engine", "ejs");

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, createindex: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

//Use Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors");
const citiesRoute = require("./routes/api/cities");
const userRoute = require("./routes/api/users");
const activitiesRoute = require("./routes/api/activities");
const itinerariesRoute = require("./routes/api/itineraries");
//importing the routes
app.use("/api/cities", citiesRoute);
app.use("/api/users", userRoute);
app.use("/api/activities", activitiesRoute);
app.use("/api/itineraries", itinerariesRoute);

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.listen(port, () => console.log("Magic happens on port " + port));
