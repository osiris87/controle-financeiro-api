const express = require("express");
const NetProfitController = require("./controllers/NetProfitController");

const routes = express.Router();

routes.get("/net-profit", NetProfitController.index);
routes.put("/net-profit", NetProfitController.update);

module.exports = routes;
