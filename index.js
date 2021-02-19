// discord
const Discord = require("discord.js");
const bot = new Discord.Client();

// other modules
const fs = require("fs");
require('dotenv').config();


// settings
var chatchannel = "812003740386459704";
var syntaxmsg = 'Syntax: >[message]';

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

});

bot.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(">") == true) {

        switch (message.content.slice(1)) {

            case "cc":
            case "clear":
                if(message.author.id != process.env.OWNER) return;
                message.channel.bulkDelete(99);
            return;
    
            case "print":
                if(message.author.id != process.env.OWNER) return;
                message.channel.send(message.content);
            return;
    
            default:
                message.delete();
                message.author.send(syntaxmsg)
            return;
    
            case "stop":
                if(message.author.id != process.env.OWNER) return;
                process.exit(0);
            return;
    
        }
        
    } else {

        message.delete();
        channel = bot.channels.cache.get(chatchannel);
        channel.send(`${message.author.username}#${message.author.discriminator} : ${message.content.slice(1)}`);
        return;

    }

})


bot.login(process.env.TOKEN);