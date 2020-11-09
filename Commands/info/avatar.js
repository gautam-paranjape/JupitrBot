const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");

module.exports = {
  name: "avatar",
  description: "gives the avatar of users",
  category: "info",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    let mentioneduser = message.mentions.users.first();

    if (!mentioneduser) {
      const youravatar = new MessageEmbed();
      youravatar.setTitle("Your Avatar");
      youravatar.setColor(maincolor);
      youravatar.setThumbnail(message.author.displayAvatarURL());
      youravatar.setFooter(`Requested by ${message.author.tag}`);
      message.channel.send(youravatar);
    } else {
      const mentionavatar = new MessageEmbed();
      mentionavatar.setTitle(`${mentioneduser.username}'s Avatar`);
      mentionavatar.setThumbnail(mentioneduser.displayAvatarURL());
      mentionavatar.setColor(maincolor);
      mentionavatar.setFooter(`Requested by ${message.author.tag}`);
      message.channel.send(mentionavatar);
    }
  },
};
