const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

const citiesRoute = require("./routes/api/cities");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/cities", citiesRoute);

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Richlyn" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => console.log("Magic happens on port " + port));
