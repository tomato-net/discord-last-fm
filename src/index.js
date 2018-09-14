const Discord        = require('discord.js');
const client         = new Discord.Client();
const discord_config = require('../config/secure/discord-auth.json');
const user_tokens    = discord_config.tokens

client.on('ready', () => {
  console.log('Ready!');
  client.user.setActivity('Last.fm', { type: 'LISTENING', url: 'https://github.com/vaequitas/discord-last-fm' });
});

client.login(user_tokens[0]);
