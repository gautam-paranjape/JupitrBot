const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");
const UtilityEmbed = require("../../utils/UtilityEmbeds");
const ms = require("ms");

module.exports = {
  name: "giveaway",
  description: "create a giveaway",
  category: "misc",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */

  run: async (client, message, args) => {
    const UtilityEmbeds = new UtilityEmbed();

    if (!args[0]) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          `Usage: j!giveaway <time> <channel> <prize>`,
          `Triggered by ${message.author.category}`
        )
      );
    }

    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          `Incorrect time formatting provided`,
          `Triggered by ${message.author.tag}`
        )
      );

    if (isNaN(args[0][0])) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          `The time provided is not a number!`,
          `Triggered by ${message.author.tag}`
        )
      );
    }
    let channel = message.mentions.channels.first();

    if (!channel) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          `No channel was provided, or that channel does not exist`,
          `Triggered by ${message.author.tag}`
        )
      );
    }

    let prize = args.slice(2).join(" ");

    if (!prize) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          `Usage: j!giveaway <time> <channel> <prize>`,
          `Triggered by ${message.author.tag}`
        )
      );
    }

    await message.channel.send(`*Giveaway created in ${channel}*`);

    let embed = new MessageEmbed();
    embed.setTitle(`🎉 New Giveaway! 🎉`);
    embed.setDescription(`**${prize}**`);
    embed.addField(
      `Hosted by ${message.author.username}`,
      `React with 🎉 to enter!`
    );
    embed.setTimestamp(Date.now() + ms(args[0]));
    embed.setColor(maincolor);

    let m = await channel.send(embed);

    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        return message.channel.send(
          `**Not enough people joined the giveaway.**`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `The winner of the giveaway for **${prize}** is **${winner}**!`
      );
    }, ms(args[0]));
  },
};
