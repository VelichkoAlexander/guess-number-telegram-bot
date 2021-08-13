function checkCommand(command, text = '') {
  if (!command && !(command instanceof String)) {
    return '';
  }

  return -1 !== text.search(command);
}

module.exports = {
  checkCommand
}