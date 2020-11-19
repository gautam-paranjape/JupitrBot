const { Collection, Client } = require("discord.js");
//const { prefix, token } = require("../config.json");
const db = require("../db");
const prefix = process.env.prefix;
class Jupitr extends Client {
  constructor() {
    super();

    //Create collections
    this.commands = new Collection();
    this.aliases = new Collection();
    this.snipes = new Collection();

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

    /*
    ["event", "server"].forEach((handler) => {
      require(`../handlers/${handler}`)(this);
    });
    */

    ["server"].forEach((handler) => {
      require(`../handlers/${handler}`)(this);
    });

    this.on("ready", async () => {
      require("../events/ready")(this);
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

    this.login(process.env.token);
  }
}

module.exports = Jupitr;
