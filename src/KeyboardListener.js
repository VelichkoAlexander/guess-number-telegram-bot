const gameStart = require("./GameStart");
const {chats, bot} = require("./BotInit");
const {againOptions} = require("./Options");
const UserModel = require("../models/User");

const keyboardListener = async (msg) => {
  const {data} = msg;
  const {id: cbId} = msg;
  const {id: chatId} = msg.message.chat;
  const {message_id} = msg.message;

  if (data === '/again') {
    sendCbAndRemovePrevMessage(cbId, chatId, message_id);
    return gameStart(chatId);
  }
  const user = await UserModel.findOne({chatId});
  if (data === chats[chatId].toString()) {
    sendCbAndRemovePrevMessage(cbId, chatId, message_id);
    user.numberOfCorrectAnswers += 1;
    await bot.sendMessage(chatId, `Congratulations, you guessed the number ${chats[chatId]}`, againOptions);
  } else {
    sendCbAndRemovePrevMessage(cbId, chatId, message_id);
    user.numberOfWrongAnswers += 1;
    await bot.sendMessage(chatId, `Unfortunately, you did not guess, the bot guessed a number ${chats[chatId]}`, againOptions);
  }
  await user.save();
}

function sendCbAndRemovePrevMessage(cbId, chatId, message_id) {
  bot.answerCallbackQuery(cbId);
  bot.deleteMessage(chatId, message_id);
}

module.exports = keyboardListener;