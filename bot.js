const TelegramBot = require('node-telegram-bot-api');

// Ganti dengan token yang kamu dapatkan dari BotFather
const token = '7340008497:AAHT5AFWluXSrc8iAslbLqNJ5iQuwFOagjo';

// Buat instance bot
const bot = new TelegramBot(token, {polling: true});

// Respon saat user mengirim /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Halo! irvan tolol. Bagaimana kabarmuu hari ini?? kok malah main stardewy valley anjing');
});

// Respon pesan teks biasa
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text.toLowerCase() === 'halo') {
    bot.sendMessage(chatId, 'Halo juga! Apa kabar?');
  } else {
    bot.sendMessage(chatId, 'Saya tidak mengerti. Coba ketik "Halo"!');
  }
});
