const Discord = require("discord.js");
const discordUtil = require("../../util/discord");

const Message = require("./Classes/Message")
const TextChannel = require("./Classes/TextChannel")
const NewsChannel = require("./Classes/NewsChannel")
const DMChannel = require("./Classes/DMChannel")
const MessageButton = require("./Classes/MessageButton");
const INTERACTION_CREATE = require('./Classes/INTERACTION_CREATE.js');

module.exports = class DiscordClient {
  constructor(client) {
    if (client) {
      if (discordUtil.getVersion() < 11) {
        throw new Error("The discord.js version must be v12 or high");
      } else {
        Discord.Structures.extend("Message", () => Message);
        Discord.Structures.extend("TextChannel", () => TextChannel);
        Discord.Structures.extend("NewsChannel", () => NewsChannel);
        Discord.Structures.extend("DMChannel", () => DMChannel);
        
        client.ws.on("INTERACTION_CREATE", (data) => {
          if (!data.message) {
            return;
          } else if (data.data.component_type === 2) {
            const button = new INTERACTION_CREATE(client, data);
            client.emit("clickButton", button);
          }
        });

        return {
          MessageButton: MessageButton,
          ButtonInteraction: INTERACTION_CREATE,
        };
      }
    }
  }
  MessageButton = MessageButton;
};
