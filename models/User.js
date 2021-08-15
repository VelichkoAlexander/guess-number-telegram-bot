const db = require('../helpers/db');
const {DataTypes} = require('sequelize');

const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  chatId: {
    type: DataTypes.INTEGER,
    unique: true,
  },
  numberOfCorrectAnswers: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  numberOfWrongAnswers: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
})

module.exports = User;