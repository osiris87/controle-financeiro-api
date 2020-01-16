const mongoose = require("mongoose");

const NetProfitSchema = new mongoose.Schema({
  value: Number
});

module.exports = mongoose.model("NetProfit", NetProfitSchema);
