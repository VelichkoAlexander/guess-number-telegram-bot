const {checkCommand} = require("../Helpers/Index");
const {bot} = require("./Bot");
const gameStart = require("./GameStart");

const BotCommandsListeners = async (msg) => {
  const {text} = msg;
  const {id: chatId} = msg.chat;
  try {
    if (checkCommand('/start', text)) {
      return bot.sendMessage(chatId, `Welcome to guess number bot`);
    }
    if (checkCommand('/info', text)) {
      return bot.sendMessage(chatId, `Your name ${msg.from.first_name} ${msg.from.last_name}`);

    }
    if (checkCommand('/game', text)) {
      return gameStart(chatId);
    }
    return bot.sendMessage(chatId, 'I don\'t understand you, try again please');
  } catch (e) {
    return bot.sendMessage(chatId, 'Some kind of mistake has happened!');
  }
}

module.exports = BotCommandsListeners;