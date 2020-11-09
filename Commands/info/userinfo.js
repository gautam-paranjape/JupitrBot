const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");

module.exports = {
  name: "userinfo",
  description: "gives info about the mentioned user",
  category: "info",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    let mentionedUser = message.mentions.users.first() || message.author;

    let userconfig = {
      avatar: mentionedUser.avatarURL(),
      name: mentionedUser.username,
      tag: `#${mentionedUser.discriminator}`,
      id: mentionedUser.id,
      status: mentionedUser.presence.status,
      bot: mentionedUser.bot,
      createdAt: mentionedUser.createdAt,
    };

    const embed = new MessageEmbed();

    embed.setThumbnail(userconfig.avatar);
    embed.setColor(maincolor);
    embed.addField(`**Username**`, userconfig.name, true);
    embed.addField("**Tag**", userconfig.tag, true);
    embed.addField("**User ID**", userconfig.id, true);
    embed.addField("**Status**", userconfig.status, true);
    embed.addField("**Bot**", userconfig.bot, true);
    embed.addField("**Created At**", userconfig.createdAt, true);
    embed.setFooter(`Requested by ${message.author.tag}`);

    message.channel.send(embed);
  },
};
