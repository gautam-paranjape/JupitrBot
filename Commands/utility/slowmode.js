const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");
const UtilityEmbed = require("../../utils/UtilityEmbeds");

module.exports = {
  name: "slowmode",
  description: "set the slowmode of the chanel",
  category: "utility",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    const UtilityEmbeds = new UtilityEmbed();

    //Error handlers
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          "You do not have the manage channel permission!",
          `Triggered by ${message.author.tag}`
        )
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          "I dont have the permission to set the slowmode!",
          `Triggered by ${message.author.tag}`
        )
      );
    }

    if (!args[0]) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          `Usage: j!slowmode <time>`,
          `Triggered by ${message.author.tag}`
        )
      );
    }

    //IF it's not a number...
    if (isNaN(args[0])) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          "The slowmode time provided is not a number!",
          `Triggered by ${message.author.tag}`
        )
      );
    }

    if (args[0] == "0") {
      message.channel.setRateLimitPerUser(0);
      return message.channel.send(
        UtilityEmbeds.successEmbed(
          `Successfully reset the slowmode of the channel!`,
          `Requested by ${message.author.tag}`
        )
      );
    }

    message.channel.setRateLimitPerUser(args[0]);
    message.channel.send(
      UtilityEmbeds.successEmbed(
        `Slowmode of the channel was successfully set to ${args[0]} seconds!`,
        `Requested by ${message.author.tag}`
      )
    );
  },
};
