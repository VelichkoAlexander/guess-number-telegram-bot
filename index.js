const {bot} = require('./src/Bot');
const botCommands = require('./src/BotCommandsList');
const botCommandsListeners = require('./src/BotCommandsListeners');
const keyboardListener = require('./src/KeyboardListener')

function start() {
  bot.setMyCommands(botCommands)
    .then(res => console.log(res));
  bot.on('message', botCommandsListeners);
  bot.on('callback_query', keyboardListener)
}

start();




