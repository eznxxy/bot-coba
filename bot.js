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

bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `
/kentu *untuk melakukan seks
/me *untuk melihat profile
        `);
  });

bot.onText(/\/kentu/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Bot sedang kentu bersama anda!');
});

bot.onText(/\/me/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Kamu sedang melihat profilmu sendiri tolol');
});
