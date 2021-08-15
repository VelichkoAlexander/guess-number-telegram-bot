const {gameOptions} = require("./Options");
const {chats, bot} = require('./BotInit');

const gameStart = async (chatId) => {
  await bot.sendMessage(chatId, `Now I will guess a number from 0 to 9, and you have to guess it!`);
  chats[chatId] = Math.floor(Math.random() * 10);
  await bot.sendMessage(chatId, chats[chatId]);
  await bot.sendMessage(chatId, 'Guess', gameOptions);
}

module.exports = gameStart;