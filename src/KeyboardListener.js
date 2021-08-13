const gameStart = require("./GameStart");
const {chats, bot} = require("./Bot");
const {againOptions} = require("./Options");

const keyboardListener = async (msg) => {
  const {data} = msg;
  const {id: chatId} = msg.message.chat;
  if (data === '/again') {
    return gameStart(chatId)
  }

  if (data === chats[chatId].toString()) {
    await bot.sendMessage(chatId, `Congratulations, you guessed the number ${chats[chatId]}`, againOptions);
  } else {
    await bot.sendMessage(chatId, `Unfortunately, you did not guess, the bot guessed a number ${chats[chatId]}`, againOptions);
  }
}

module.exports = keyboardListener;