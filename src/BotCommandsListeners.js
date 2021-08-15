const {checkCommand} = require("../helpers/Index");
const {bot} = require("./BotInit");
const gameStart = require("./GameStart");
const UserModel = require('../models/User')

const BotCommandsListeners = async (msg) => {
  const {text} = msg;
  const {id: chatId} = msg.chat;
  try {
    if (checkCommand('/start', text)) {
      // TODO: Make greetings for old users;
      await UserModel.findOrCreate({where: {chatId : chatId.toString()}})
      return bot.sendMessage(chatId, `Welcome to guess number bot, type '/game' to start game`);
    }
    if (checkCommand('/info', text)) {
      const user = await UserModel.findOne({chatId});
      return bot.sendMessage(chatId, `
Your name ${msg.from.first_name} ${msg.from.last_name},
Number of correct answers: ${user.numberOfCorrectAnswers},
Number of wrong answers: ${user.numberOfWrongAnswers}
       `);

    }
    if (checkCommand('/game', text)) {
      return gameStart(chatId);
    }
    return bot.sendMessage(chatId, 'I don\'t understand you, try again please');
  } catch (e) {
    return bot.sendMessage(chatId, `Some kind of mistake has happened! ${e}`);
  }
}

module.exports = BotCommandsListeners;