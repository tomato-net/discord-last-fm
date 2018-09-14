const Discord        = require('discord.js');
const discord_config = require('../config/secure/discord-auth.json');
const user_tokens    = discord_config.tokens;

const updateActivity = async (song, token) => {
  const client = new Discord.Client();
  await client.on('ready', async () => {
    console.log('Ready!');
    await client.user.setActivity(song, { type: 'LISTENING' });
    client.destroy();
  });


  client.login(token);
};

updateActivity('Amorphis', user_tokens.shift());
