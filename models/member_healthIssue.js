const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const member_healthissue = database.define("member_healthissue");

module.exports = member_healthissue;
