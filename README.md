<div align="center">
  <p>
    <a href="https://discord.gg/tyu6B9eHBR"><img src="https://img.shields.io/discord/617925960016068611?color=7289da&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/meska.js"><img src="https://img.shields.io/npm/v/meska.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/meska.js"><img src="https://img.shields.io/npm/dt/meska.js.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/meska.js/"><img src="https://nodei.co/npm/meska.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Example Usage](#example-usage)
- [Links](#links)
- [Help](#help)

## About

meska.js is a powerful [Node.js](https://nodejs.org) module.


## Installation

**Node.js 14.0.0 or newer is required.**  
Ignore any warnings about unmet peer dependencies, as they're all optional.

```npm
npm install meska.js
```


## Example usage

```js
const Discord = require("discord.js");
let client = new Discord.Client();


const Meska = require("meska.js");
let Logger = new Meska.Logger();
let DiscordClient = new Meska.DiscordClient(client);

Logger.log("MESKA.JS", "Test Message.", true);
Logger.info("MESKA.JS", "Test Message.", true);
Logger.success("MESKA.JS", "Test Message.", true);
Logger.warn("MESKA.JS", "Test Message.", true);
Logger.error("MESKA.JS", "Test Message.", true);

let button = new DiscordClient.MessageButton()
  .setStyle("blurple")
  .setLabel("Meska!")
  .setID("meska");

client.on("message", async (message) => {
  if (message.content == "!meska") {
    message.channel.send("Meska!", button);
  }
});

client.on("clickButton", async (button) => {
  if (button.id === "meska") {
    Logger.info("BUTTON", button.clicker.user.id + " clicked button!")
    button.channel.send("<@" + button.clicker.user.id + "> clicked button!");
    button.clicker.member.roles.add("ROLE_ID")
  }
});

client.login("YOUR_BOT_TOKEN");
```

## Links

- [Discord server](https://discord.gg/tyu6B9eHBR)
- [GitHub](https://github.com/meskajs/meska.js)
- [NPM](https://www.npmjs.com/package/meska.js)

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [Discord Server](https://discord.gg/tyu6B9eHBR).
