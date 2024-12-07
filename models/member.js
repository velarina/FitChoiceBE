const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const healthIssue = require("../healthIssue");
const member_healthissue = require("../member_healthIssue");

const member = database.define("member", {
  memberID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  memberName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  memberEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.enum("Female", "Male"),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = member;
