const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");

module.exports = {
  name: "help",
  description: "returns all the commands in an embed",
  category: "utility",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    const help = new MessageEmbed();
    help.setTitle("Commands");
    help.addField("Fun", "`8ball`, `meme`");
    help.addField("Utility", "`ping`");
    help.setColor("e36e4b");
    help.setFooter(`Requested by ${message.author.tag}`);

    message.channel.send(help);
  },
};
