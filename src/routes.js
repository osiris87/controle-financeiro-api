const express = require("express");

const routes = express.Router();

routes.get("/", (req, resp) => {
  console.log("Ok");
  return resp.json({ message: "Ok" });
});

module.exports = routes;
