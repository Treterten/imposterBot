const Discord = require('discord.js');
const commands = require('./commands')
const client = new Discord.Client();
const PREFIX = process.env.PREFIX;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', msg => {
  const commandReg = /!(\S+)/;
  const channel = client.channels.cache.get(msg.channel.id);

  if (msg.content[0] === PREFIX && msg.member.id === process.env.USER_ID) {
    try {
      commands[commandReg.exec(msg.content)[1]](client, msg);
    } catch (e) {
      msg.reply(`\`\`\`${e}\`\`\``);
    }
  }
});

client.login(process.env.TOKEN);