require('dotenv').config()
const token = process.env.TELEGRAM_TOKEN ? process.env.TELEGRAM_TOKEN : '';
const TelegramAPI = require('node-telegram-bot-api');
if (!token) {
  throw new Error('Please provide a telegram bot token.');
}
const chats = {};
const botInit = new TelegramAPI(token, {polling: true});

module.exports = {
  chats,
  bot: botInit
};
