const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.login(config.token);

client.on('message', (message) => {

  // Set the prefix
  let prefix = '!';
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + 'ping')) 
  {
    message.channel.send('pong!');
  } else if (message.content.startsWith(prefix + 'foo')) {
    message.channel.send('bar!');
  }

});
