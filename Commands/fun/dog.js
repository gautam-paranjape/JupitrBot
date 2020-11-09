const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");
const randomPuppy = require("random-puppy");

module.exports = {
  name: "dog",
  description: "get dog pictures",
  category: "fun",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    let chosenReddit = "dogpictures";

    const image = await randomPuppy(chosenReddit);

    const reddit = new MessageEmbed();
    reddit.setTitle(`Dog!`);
    reddit.setImage(image);
    reddit.setURL(`https://www.reddit.com/r/dogpictures`);
    reddit.setColor(`RANDOM`);

    message.channel.send(reddit);
  },
};
