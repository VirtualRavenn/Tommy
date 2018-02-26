const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "") message.reply("This is the last dance for Lance Vance!");
});

client.login(process.env.BOT_TOKEN
