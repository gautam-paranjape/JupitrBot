const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");
const UtilityEmbed = require("../../utils/UtilityEmbeds");

module.exports = {
  name: "clear",
  description: "clears the requested amount of messages",
  category: "misc",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    const UtilityEmbeds = new UtilityEmbed();

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          `You do not have the manage messages permission!`,
          `Triggered by ${message.author.tag}`
        )
      );
    }

    if (!args[0]) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          `Usage: j!clear <amount>`,
          `Triggered by ${message.author.tag}`
        )
      );
    }

    if (isNaN(args[0])) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          `The clear amount isn't a number!`,
          `Triggered by ${message.author.tag}`
        )
      );
    }

    if (parseInt(args[0]) <= 0) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          `You can't delete 0 messages!`,
          `Triggered by ${message.author.tag}`
        )
      );
    }

    let clearedMessages = parseInt(args[0]);

    if (clearedMessages >= 100) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          `You can't delete more than 100 messages at a time!`,
          `Triggered by ${message.author.tag}`
        )
      );
    }

    message.channel.bulkDelete(clearedMessages);

    if (message.channel.bulkDelete) {
      message.delete();
    }

    message.channel.send(
      UtilityEmbeds.successEmbed(
        `Successfully deleted ${clearedMessages} messages!`,
        `Requested by ${message.author.tag}`
      )
    );
  },
};
