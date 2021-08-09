const express = require("express");
const bodyParser = require("body-parser");
const helmets = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./roates/route");
const sts = require("strict-transport-security");
// const toobusy = require("./../middlewares/tobusy");

const app = express();

const PORT = process.env.PORT || 5000;

require("dotenv").config();

mongoose.connect("mongodb://localhost/picchers_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const globalSTS = sts.getSTS({ "max-age": { days: 30 } });

app.use(globalSTS);

app.use(helmets());
app.use(cors());

app.use(globalSTS);
// app.use(toobusy);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

if (process.env.NODE_ENV === "development") {
  const mongo = mongoose.connection;
  mongo.on("open", () => {
    console.log("mongo is opened");
  });
  mongo.on("error", () => {
    console.log("mongo has error");
  });
  app.use(morgan("tiny"));
}

app.use("/", routes);
app.listen(PORT, () => console.log("running"));
