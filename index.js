// discord
const Discord = require("discord.js");
const bot = new Discord.Client();

// other modules
const fs = require("fs");
require('dotenv').config();
const settings = require('./settings.json');

// settings
var chatchannel = settings.outputchannel;
var syntaxmsg = settings.helpDM;

// creates collections for commands and aliases
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

// checks if there is a token.
if(process.env.TOKEN === "setmeplease" || !process.env.TOKEN) return console.log("[!] Set your token up! Go to https://www.discord.com/developers and generate a token from a bot user.");

console.clear();
console.log("Loading...")

bot.on("ready", () => {

  console.clear()
  console.log( bot.user.username + " CONSOLE")
  console.log("------------")

  bot.user.setActivity("messages..", {
        type: "WATCHING"
    });

  console.log("[BOT] " + bot.user.username + " is online.")
  console.log("------------");

  enabled = true;

});

bot.on("message", async message => {

    if(message.author.bot) return;
    if(message.content.startsWith(">") == true ) {
    if (message.author.id == process.env.OWNER) {
        switch (message.content.slice(1)) {

            case "t":
            case "toggle":
                enabled = !enabled;
                console.log(`enabled: ${enabled}`);
            break;
    
            case "stop":
                message.delete();
                process.exit(0);
            return;
        }
    }

    switch (message.content.slice(1)) {

        case "botinvite":
            message.delete();
            message.channel.send("Invite me with this link: \nhttps://discord.com/api/oauth2/authorize?client_id=797233261670563870&permissions=522304&scope=bot");
        break;

        case "invite":
            message.delete();
            message.channel.send("Read all messages: \nhttps://discord.gg/dhAGG4BDZV");
        break;

    }
    return;
    
}


    if (enabled == true) {

            channel = bot.channels.cache.get(chatchannel);
            if (message.channel.type == 'dm' && message.author.id == process.env.OWNER){
                channel.send(message.content);
                return;
            } else if (message.channel.type == 'dm') return;
            channel.send(`${message.guild.name} | ${message.author.username}#${message.author.discriminator}: \n${message.content}`);
            return;

        
    }

})


bot.login(process.env.TOKEN);