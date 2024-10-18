const TelegramBot = require('node-telegram-bot-api');

// Gunakan token yang kamu dapatkan dari BotFather
const token = '7340008497:AAHT5AFWluXSrc8iAslbLqNJ5iQuwFOagjo';

// Buat bot dengan webhook, tanpa polling
const bot = new TelegramBot(token);

// URL yang akan digunakan Telegram untuk mengirim pesan
const URL = 'bot-coba.vercel.app';

// Atur webhook Telegram ke URL Vercel
bot.setWebHook(`${URL}/api/webhook`);

// Respon saat user mengirim /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Halo, ini bot Telegram yang di-host di Vercel!');
});

// Fungsi utama yang menangani request webhook
export default function handler(req, res) {
  if (req.method === 'POST') {
    bot.processUpdate(req.body);
    res.status(200).send('ok');
  } else {
    res.status(404).send('Not found');
  }
}