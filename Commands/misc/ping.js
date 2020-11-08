const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");

module.exports = {
  name: "ping",
  description: "returns the bot's latency, and the discord api ping",
  category: "misc",
  aliases: ["latency"],

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    const msg = await message.channel.send("🏓 Pinging... 🏓");
    const ping = new MessageEmbed();
    ping.setTitle("🏓 Pong! 🏓");
    ping.setDescription(
      `WebSocket Ping: ${client.ws.ping} MS | Discord API Ping: ${
        msg.createdAt - message.createdAt
      } MS`
    );
    ping.setColor(`e36e4b`);
    ping.setFooter(`Requested by ${message.author.tag}`);

    await msg.edit(ping);
    await msg.edit("🏓 Pong! 🏓");
  },
};
