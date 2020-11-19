const mongoose = require("mongoose");
//const { mongoURL } = require("./config.json");

module.exports = async () => {
  await mongoose.connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoose;
};
