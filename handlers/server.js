const express = require("express");
const app = express();
const { PORT } = require("../PORT.json");
const { Timers } = require("../timerMap");

module.exports = async (client) => {
  app.get("/api/timers", async (req, res) => {
    let Array = [];

    Timers.forEach((timer) => {
      Array.push({
        GUILD: timer.Guild,
        AUTHOR: { ID: timer.Author.ID, TAG: timer.Author.TAG },
        TIME_IN_MS: timer.Time,
      });
    });

    res.send(Array);
  });

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};
