const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("./db/database");
const cors = require("cors");
const httpstatus = require("http-status")


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Connect to DB
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database could not be connected : " + error);
    }
  );

// Routes
const UrlRoute = require("./routes/addUrl.route");
app.use("/save-link", UrlRoute);

//error func
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = httpstatus.INTERNAL_SERVER_ERROR;
  res.status(err.statusCode).send(err.message);
});

// Event Loop
app.listen(3000);
