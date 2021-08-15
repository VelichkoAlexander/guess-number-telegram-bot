const gameStart = require("./GameStart");
const {chats, bot} = require("./BotInit");
const {againOptions} = require("./Options");

const keyboardListener = async (msg) => {
  const {data} = msg;
  const {id: cbId } = msg;
  const {id: chatId} = msg.message.chat;
  if (data === '/again') {
    bot.answerCallbackQuery(cbId);
    return gameStart(chatId)
  }
  if (data === chats[chatId].toString()) {
    bot.answerCallbackQuery(cbId);
    return await bot.sendMessage(chatId, `Congratulations, you guessed the number ${chats[chatId]}`, againOptions);
  } else {
    bot.answerCallbackQuery(cbId);
    return await bot.sendMessage(chatId, `Unfortunately, you did not guess, the bot guessed a number ${chats[chatId]}`, againOptions);
  }
}

module.exports = keyboardListener;