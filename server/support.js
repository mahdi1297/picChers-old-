// const express = require("express");
// const bodyParser = require("body-parser");
// const helmets = require("helmet");
// const cors = require("cors");
// const morgan = require("morgan");
// const mongoose = require("mongoose");
// const routes = require("./roates/route");
// var hpp = require('hpp');
 
 
// const app = express();

// const PORT = process.env.PORT || 5000;

// require("dotenv").config();

// mongoose.connect("mongodb://localhost/picchers_db", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });

 
// app.use(hpp());

// app.use(helmets());
// app.use(cors());

// //MongoDb Connection Setup

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json({ limit: "50mb" }));


// app.use(
//   bodyParser.urlencoded({
//     limit: "50mb",
//     extended: true,
//     parameterLimit: 50000,
//   })
// );

// if (process.env.NODE_ENV === "development") {
//   const mongo = mongoose.connection;
//   mongo.on("open", () => {
//     console.log("mongo is opened");
//   });
//   mongo.on("error", () => {
//     console.log("mongo has error");
//   });
//   app.use(morgan("tiny"));
// }

// app.use("/", routes);

// app.listen(PORT, () => console.log("running"));
