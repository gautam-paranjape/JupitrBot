const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");

module.exports = {
  name: "support",
  description: "gives invite to the supportserver",
  category: "info",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    const support = new MessageEmbed();
    support.setTitle("Support Server");
    support.setColor(maincolor);
    support.setDescription("Join https://discord.gg/frjVBhbjam for support!");
    support.setFooter(`Requested by ${message.author.tag}`);
    message.channel.send(support);
  },
};
