const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const grabber = require("image-grabberjs");

module.exports = {
  name: "meme",
  description:
    "fetches a random meme from a subreddit and displays it in an embed",
  category: "fun",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    const subReddits = ["meme", "memes", "comedyhaven"];

    const randomReddit =
      subReddits[Math.floor(Math.random() * subReddits.length)];

    const image = await grabber(randomReddit);

    const meme = new MessageEmbed();
    meme.setTitle(`A meme from /r/${randomReddit}`);
    meme.setImage(image);
    meme.setURL(`https://www.reddit.com/r/${randomReddit}`);
    meme.setColor(`RANDOM`);
    meme.setFooter(
      `Note: These memes are random memes fetched from the subreddits "meme", "memes", and "comedyhaven". Please note that some of these images might be innapropriate or offensive, as they are pulled from posts from the subreddits, and we have no way of controlling what gets sent.`
    );

    message.channel.send(meme);
  },
};
