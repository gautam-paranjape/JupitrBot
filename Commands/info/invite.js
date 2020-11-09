const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");

module.exports = {
  name: "invite",
  description: "invite the bot to your server",
  category: "info",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    const invite = new MessageEmbed();
    invite.setTitle("Invite Me!");
    invite.setDescription("Click the link above to invite me to your server!");
    invite.setURL(
      "https://discord.com/oauth2/authorize?client_id=774836954349043723&permissions=2147483383&scope=bot"
    );
    invite.setColor(maincolor);
    invite.setFooter(`Requested by ${message.author.tag}`);
    message.channel.send(invite);
  },
};
