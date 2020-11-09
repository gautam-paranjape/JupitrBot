const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");

module.exports = {
  name: "flip",
  description: "flip a coin",
  category: "fun",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    let choices = ["Heads", "Tails"];
    let choice = choices[Math.floor(Math.random() * choices.length)];

    const flip = new MessageEmbed();
    flip.setTitle("Flip!");
    flip.setDescription(`The coin landed on ${choice}!`);
    flip.setColor(maincolor);
    flip.setFooter(`Requested by ${message.author.tag}`);
    message.channel.send(flip);
  },
};
