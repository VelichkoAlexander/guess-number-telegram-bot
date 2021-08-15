require('dotenv').config()
const {Sequelize} = require('sequelize');

const DB_NAME = process.env.DB_NAME ? process.env.DB_NAME : '';
const DB_USER = process.env.DB_USER ? process.env.DB_USER : '';
const DB_PASS = process.env.DB_PASS ? process.env.DB_PASS : '';
const DB_IP = process.env.DB_IP ? process.env.DB_IP : '';
const DB_PORT = process.env.DB_PORT ? process.env.DB_PORT : '5432';
const DB_TYPE = process.env.DB_TYPE ? process.env.DB_TYPE : 'postgres';

if(!(DB_NAME && DB_USER && DB_PASS && DB_IP && DB_PORT && DB_TYPE)) {
  throw new Error('Please check DB credentials');
}

module.exports = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASS,
  {
    host: DB_IP,
    port: DB_PORT,
    dialect: DB_TYPE
  }
)