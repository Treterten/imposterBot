const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  message.channel.send('pong. I work.')
})

client.login(process.env.TOKEN);