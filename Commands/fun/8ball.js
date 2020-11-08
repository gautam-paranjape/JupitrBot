const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const UtilityEmbed = require("../../utils/UtilityEmbeds");

const answers = [
  "It is certain.",
  "It is decidely so.",
  "Without a doubt.",
  "Yes, definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely",
  "Outlook good.",
  "Yes.",
  "Signs points to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate, and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

module.exports = {
  name: "8ball",
  description: "description",
  category: "category",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    const question = message.content.slice(8);
    const UtilityEmbeds = new UtilityEmbed();

    if (!question) {
      return message.channel.send(
        UtilityEmbeds.errorEmbed(
          "Usage: j!8ball <question>",
          `Triggered by ${message.author.tag}`
        )
      );
    }

    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];

    const embed = new MessageEmbed();
    embed.setTitle("🎱 8ball 🎱");
    embed.setDescription(chosenAnswer);
    embed.setFooter(`Requested by ${message.author.tag}`);

    message.channel.send(embed);
  },
};
