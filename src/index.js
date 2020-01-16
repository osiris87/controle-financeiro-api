const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect("mongodb://localhost:27017/controleFinanceiro", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3333);
