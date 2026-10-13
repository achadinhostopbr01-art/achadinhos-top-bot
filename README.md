const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const CANAL_ID = "129... COLOCA O ID QUE VOCE COPIOU AQUI";

client.once('ready', () => {
  console.log(`Bot online: ${client.user.tag}`);
  setInterval(enviarOferta, 30 * 60 * 1000);
  enviarOferta();
});

async function enviarOferta() {
  const canal = await client.channels.fetch(CANAL_ID);
  const embed = new EmbedBuilder()
  .setTitle("🔥 OFERTA RELÂMPAGO SHOPEE")
  .setDescription("Fone TWS por R$ 29,90\n\n👉 **Link com desconto:** https://s.shopee.com.br/SEU_LINK_AQUI")
  .setColor(0xEE4D2D)
  .setImage("https://cf.shopee.com.br/file/br-11134207-7r98o-lq1j2b5a1n1d1f")
  .setFooter({ text: "Achadinhos TOP" })
  .setTimestamp();

  canal.send({ embeds: [embed] });
}

client.login(process.env.DISCORD_TOKEN);
