module.exports = {
  name: "ping",

  run: async (client, message, args) => {
    message.channel.send("pong, it works");
  },
};
