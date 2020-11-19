const Client = require("../../structures/Client");
const { MessageEmbed, Message, Util } = require("discord.js");
const UtilityEmbed = require("../../utils/UtilityEmbeds");
//const { prefix } = require("../../config.json");
const { maincolor } = require("../../utils/colors");
const prefix = process.env.prefix;

module.exports = {
  name: "poll",
  description: "make a poll",
  category: "misc",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    const UtilityEmbeds = new UtilityEmbed();

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          "You do not have the admin permission!",
          `Triggered by ${message.author.tag}`
        )
      );
    }

    const chosenCHNL =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);

    let pollContent = message.content
      .split(`${prefix}poll ${chosenCHNL}`)
      .join("");

    if (!chosenCHNL || !pollContent) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          `Usage: j!poll <channel> <content>`,
          `Triggered by ${message.author.tag}`
        )
      );
    }

    const poll = new MessageEmbed();
    poll.setTitle("Poll: ");
    poll.setDescription(pollContent);
    poll.setColor(maincolor);
    poll.setFooter(`Poll created by ${message.author.tag}`);

    let channel = await client.channels.cache.get(chosenCHNL.id).send(poll);
    await channel.react("👍");
    await channel.react("👎");
  },
};
