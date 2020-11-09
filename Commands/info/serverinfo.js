const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");

module.exports = {
  name: "serverinfo",
  description: "provides info about the server",
  category: "info",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    let serverConfig = {
      guildIcon: message.guild.iconURL(),
      guildName: message.guild.name,
      createdAt: message.guild.createdAt,
      guildID: message.guild.id,

      owner: message.guild.owner.user.tag,
      region: message.guild.region,
      verified: message.guild.verified,
      members: message.guild.memberCount,
    };

    const embed = new MessageEmbed();
    embed.setTitle("**Server Information**");
    embed.setColor(maincolor);
    embed.addField("**Server Name**", serverConfig.guildName, true);
    embed.addField("**Server ID**", serverConfig.guildID, true);
    embed.addField("**Owner**", serverConfig.owner, true);
    embed.addField("**Region**", serverConfig.region, true);
    embed.addField("**Server Verification**", serverConfig.verified, true);
    embed.addField("**Created At**", serverConfig.createdAt, true);
    embed.setFooter(`Requested by ${message.author.tag}`);

    message.channel.send(embed);
  },
};
