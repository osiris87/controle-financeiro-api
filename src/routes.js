const express = require("express");
const NetProfitController = require("./controllers/NetProfit.controller");

const routes = express.Router();

routes.get("/net-profit", (req, resp) => NetProfitController.index(req, resp));
routes.put("/net-profit", (req, resp) => NetProfitController.update(req, resp));

module.exports = routes;
