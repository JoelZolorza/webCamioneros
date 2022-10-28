const {Sequelize} = require("sequelize");
const {Sqlite, sqlite} = require("./config");

const sequelize = new Sequelize (sqlite.db);

module.exports = sequelize;
