const Discord = require("discord.js");
let client = new Discord.Client();

const Meska = require("../meska");
console.log(Meska);

let Logger = new Meska.Logger();
console.log(Logger);

Logger.log("MESKA.JS", "Test Message.", true);
Logger.info("MESKA.JS", "Test Message.", true);
Logger.success("MESKA.JS", "Test Message.", true);
Logger.warn("MESKA.JS", "Test Message.", true);
Logger.error("MESKA.JS", "Test Message.", true);

let DiscordClient = new Meska.DiscordClient(client);
console.log(DiscordClient);

let button = new DiscordClient.MessageButton()
  .setStyle("blurple")
  .setLabel("Meska!")
  .setID("meska");
console.log(button);

let button1 = new DiscordClient.MessageButton()
  .setStyle("url")
  .setLabel("Meska!")
  .setURL("https://example.com");
console.log(button1);

let embed = new Discord.MessageEmbed()
  .setTitle("Meska!")
  .setDescription("Test Message")
  .setTimestamp();
console.log(embed)

client.on("message", async (message) => {
  if (message.content == "!meska") {
    message.channel.send("Meska!", {
      buttons: [button, button1],
      embed: embed
    });
  }
});

client.on("clickButton", async (button) => {
  if (button.id === "meska") {
    button.channel.send("<@" + button.clicker.user.id + "> clicked button!");
    button.clicker.member.roles.add("ROLE_ID")
  }
});

client.login("YOUR_BOT_TOKEN");