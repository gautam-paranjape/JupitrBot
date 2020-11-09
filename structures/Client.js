const { Collection, Client } = require("discord.js");
const { prefix, token } = require("../config.json");
const db = require("../db");
class Jupitr extends Client {
  constructor() {
    super();

    //Create collections
    this.commands = new Collection();
    this.aliases = new Collection();

    //Import modules
    this.fs = require("fs");
    this.path = require("path");
  }

  commandHandler() {
    this.fs.readdirSync("./Commands").map((directory) => {
      this.fs.readdirSync(`./Commands/${directory}/`).map((file) => {
        let CMD = require(`../Commands/${directory}/${file}`);
        console.log(`Command ${CMD.name} loaded in ${directory}`);

        this.commands.set(CMD.name, CMD);
      });
    });
  }

  initBot() {
    this.commandHandler();

    this.on("ready", async () => {
      console.log(`Client connected as ${this.user.tag}`);

      this.user.setPresence({
        status: "online",
        activity: {
          name: "j!help | j!invite | j!support",
          type: "PLAYING",
        },
      });

      await db().then((mongoose) => {
        try {
          console.log(`Connected to MongoDB!`);
        } finally {
          mongoose.connection.close;
        }
      });
    });

    this.on("message", async (message) => {
      //If the message comes from another bot or doesnt start with the prefix, then return
      if (message.author.bot || !message.content.startsWith(prefix)) {
        return;
      }

      if (!message.guild) {
        return;
      }

      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const lower = args.shift().toLowerCase();

      let commandFiles;
      //Navigate the collection filled with commands, get them, and run the run function in them
      if (this.commands.has(lower)) {
        commandFiles = this.commands.get(lower);
        commandFiles.run(this, message, args);
      }
    });

    this.login(token);
  }
}

module.exports = Jupitr;
