const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");

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
    help.addField("Fun", "`8ball`, `meme`, `roll`, `flip`");
    help.addField(
      "Utility",
      "`ping`, `poll`, `clear`, `setprefix`, `giveaway`"
    );
    help.addField(
      "Moderation",
      "`kick`, `ban`, `unban`, `warn`, `warnings`, `clearwarnings` `mute`, `unmute`"
    );
    help.addField(
      "Information",
      "`serverinfo`, `userinfo`, `avatar`, `invite`, `support`"
    );
    help.addField(`Economy`, "`balance`, `buy`, `rob`, `shop`");
    help.addField("Music", "`play`, `pause`, `queue`");
    help.setColor(maincolor);
    help.setFooter(`Requested by ${message.author.tag}`);

    message.channel.send(help);
  },
};
