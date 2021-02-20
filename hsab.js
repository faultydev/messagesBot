// discord
const Discord = require("discord.js");
const bot = new Discord.Client();

//dotenv
require('dotenv').config();

// THIS IS FOR BASH DOWNTIME

bot.on('ready', () => {

    console.clear();
    console.log(`hsab is ready to destroy childhood dreams.`);

    bot.user.setActivity("with the DELETE button.", {type: "PLAYING"})

})

bot.on('message', async message => {

    message.delete();

}) 

bot.login(process.env.TOKEN);