const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");

module.exports = {
  name: "name",
  description: "description",
  category: "category",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {},
};
