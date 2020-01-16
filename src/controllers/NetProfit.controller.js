const NetProfit = require("../models/NetProfit");

class NetProfitController {
  constructor() {}

  async index(req, resp) {
    console.log("Chamou");
    const doc = await NetProfit.findOne();
    return resp.json(doc.value);
  }

  async update(req, resp) {
    const { value, increment } = req.body;
    const doc = await NetProfit.findOne();
    increment ? (doc.value += value) : (doc.value -= value);
    const updateValue = await NetProfit.updateOne(
      { _id: doc._id },
      { value: doc.value }
    );
    return resp.json(updateValue);
  }
}

// const index = async (req, resp) => {
//   const doc = await NetProfit.findOne();
//   return resp.json(doc.value);
// };

// const update = async (req, resp) => {
//   const { value, increment } = req.body;
//   const doc = await NetProfit.findOne();
//   increment ? (doc.value += value) : (doc.value -= value);
//   const updateValue = await NetProfit.updateOne(
//     { _id: doc._id },
//     { value: doc.value }
//   );
//   return resp.json(updateValue);
// };

module.exports = new NetProfitController();
