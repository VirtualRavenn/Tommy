const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "417810155447648267") message.reply("This is the **last** dance for Lance Vance!");
});

client.on("message", message => {
  if (message.author.id === "415330227451985920") message.reply("Shiet you look **jacked** up!");
});

client.on("message", message => {
  if (message.author.id === "416418286184431636") message.reply("Watch the road, **motherfucker**, the road!");
});

client.on("message", message => {
  if (message.author.id === "417500499424706560") message.reply("Oh man, we gonna **die!**");
});

client.login(process.env.BOT_TOKEN);
