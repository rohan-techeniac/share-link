const express = require("express");

const UrlExpressRoute = express.Router();

let UrlSchema = require("../models/urls.model");

UrlExpressRoute.route("/").post((req, res, next) => {
  UrlSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.send("Success");
    }
  });
});

module.exports = UrlExpressRoute;
