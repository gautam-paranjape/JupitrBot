const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");

module.exports = {
  name: "roll",
  description: "roll a dice",
  category: "fun",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    const randomRoll = Math.floor(Math.random() * 6) + 1;
    const roll = new MessageEmbed();
    roll.setTitle("🎲  Roll! 🎲 ");
    roll.setDescription(`The dice rolled ${randomRoll}`);
    roll.setColor(maincolor);
    roll.setFooter(`Requested by ${message.author.tag}`);

    message.channel.send(roll);
  },
};
