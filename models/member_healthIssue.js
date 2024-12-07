const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const member_healthissue = database.define("member_healthissue", {
  memberID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "member",
      key: "memberID",
    },
  },
  healthIssueID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "healthIssues",
      key: "healthIssueID",
    },
  },
});

module.exports = member_healthissue;
