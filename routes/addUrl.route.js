const express = require("express");
const httpstatus = require("http-status")

const UrlExpressRoute = express.Router();

let UrlSchema = require("../models/urls.model");

UrlExpressRoute.route("/").post((req, res, next) => {
  UrlSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.send({"message":"Success"});
    }
  });
});

module.exports = UrlExpressRoute;
