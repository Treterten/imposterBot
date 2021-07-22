module.exports.King = async (client, message) => {
  const channelHash = {};
  const requestedChannel = message?.content?.substring(message?.content?.indexOf(" ") + 1);
  const channels = [...message.guild.channels.cache].map(a => a[1]).filter(c => c.type === "voice").forEach(e => channelHash[e.name] = e.id);
  const channel = client.channels.cache.get(channelHash[requestedChannel])
  console.log(channelHash);
  if (client.voice.connections.array()[0]) {
    message.reply('I\'m already in a voice channel');
  } else if (channel) {
    await channel.join()
  } else {
    message.reply('Invalid channel name.')
  }
};

module.exports.Mort = (client, message) => {
  const voiceChannelConnection = client.voice.connections.array()[0];
  if (voiceChannelConnection) {
    voiceChannelConnection.disconnect();
  } else {
    message.reply('I\'m not in a voice channel');
  }
};