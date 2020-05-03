const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("706295646344445964")
setInterval(function() {
channel.send(`timarix timarix`);
}, 30)
})

client.login(process.env.BOT_TOKEN);