const { prefix } = require("../../config.json");
const db = require("../../db");

module.exports = async (client) => {
  console.log(`Client connected as ${client.user.tag}`);

  client.user.setPresence({
    status: "online",
    activity: {
      name: "j!help | j!invite | j!support",
      type: "PLAYING",
    },
  });

  await db().then((mongoose) => {
    try {
      console.log("Connected to MongoDB!");
    } finally {
      mongoose.connection.close();
    }
  });
};
