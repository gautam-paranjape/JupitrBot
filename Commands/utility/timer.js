const Client = require("../../structures/Client");
const { MessageEmbed, Message } = require("discord.js");
const { maincolor } = require("../../utils/colors");
const ms = require("ms");
const { Timers } = require("../../timerMap");

module.exports = {
  name: "timer",
  description: "set a timer",
  category: "utility",

  /**
   * @param {Message} message
   * @param {String[]} args
   * @param {Client} client
   */
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send(
        `You did not specify the amount of time for your timer!`
      );
    }

    if (
      !args[0].includes("d") &&
      !args[0].includes("h") &&
      !args[0].includes("m")
    ) {
      return message.channel.send("Incorrect time formatting provided");
    }

    Timers.set(message.author.id + " G " + message.guild.name, {
      Guild: message.guild.name,
      Author: {
        Tag: message.author.tag,
        ID: message.author.id,
      },
      Time: ms(args[0]),
    });

    message.channel.send(
      `${message.author.tag} has set a timer for ${args[0]} (${ms(args[0])} MS)`
    );

    setTimeout(() => {
      const embed = new MessageEmbed();
      embed.setTitle(`Timer finished in guild ${message.guild.name}`);
      embed.setDescription(`Your timer for ${args[0]} has finished!`);
      embed.setColor(maincolor);
      embed.setFooter(`Requested by ${message.author.tag}`);

      message.author.send(embed);
      Timers.delete(message.author.id, +" G " + message.guild.name);
    }, ms(args[0]));
  },
};
