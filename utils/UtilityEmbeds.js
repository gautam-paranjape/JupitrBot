const { MessageEmbed } = require("discord.js");

class UtilityEmbeds {
  errorEmbed(description, footer) {
    const errEmbed = new MessageEmbed();
    errEmbed.setTitle("❌ Error! ❌");
    errEmbed.setDescription(description);
    errEmbed.setColor("ff0000");
    errEmbed.setFooter(footer);

    return errEmbed;
  }

  successEmbed(description, footer) {
    const success = new MessageEmbed();
    success.setTitle("✅ Success! ✅");
    success.setDescription(description);
    success.setColor("4fe324");
    success.setFooter(footer);

    return success;
  }
}
module.exports = UtilityEmbeds;
