const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");
const randomPuppy = require("random-puppy");

module.exports = {
  name: "cat",
  description: "get cat pictures",
  category: "fun",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    let chosenReddit = "catpictures";
    const image = await randomPuppy(chosenReddit);

    const reddit = new MessageEmbed();
    reddit.setTitle(`Cat!`);
    reddit.setImage(image);
    reddit.setURL(`https://www.reddit.com/r/catpictures/`);
    reddit.setColor(`RANDOM`);

    message.channel.send(reddit);
  },
};
