const {bot} = require('./src/BotInit');
const db = require('./helpers/db');
const botCommands = require('./src/BotCommandsList');
const botCommandsListeners = require('./src/BotCommandsListeners');
const keyboardListener = require('./src/KeyboardListener')

async function start() {
  try {
    await db.authenticate();
    await db.sync();
  } catch (e) {
    console.log('Please check db configuration', e)
  }
  await bot.setMyCommands(botCommands)
  bot.on('message', botCommandsListeners);
  bot.on('callback_query', keyboardListener)
}

start();




