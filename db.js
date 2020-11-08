const { MongoClient } = require("salvage.db");
const db = new MongoClient({
  schema: {
    name: "Database",
  },
  mongoURI: "mongodb://localhost/botdbs",
});

module.exports = db;
