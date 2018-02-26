const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "") message.reply("This is the last dance for Lance Vance!");
});

client.on('message', msg => {
  if (msg.content.toLowerCase()=== "ha gae!") {
    msg.reply("Imma bash your head in **fool.**");
  }
});

client.login(process.env.BOT_TOKEN
