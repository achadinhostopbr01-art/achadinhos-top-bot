
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Bot conectado: ${client.user.tag}`);

  setInterval(() => {
    console.log('Hora de verificar novas ofertas!');
  }, 30 * 60 * 1000);
});

client.login(process.env.DISCORD_TOKEN);
