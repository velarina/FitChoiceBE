const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const member = require("../member");
const member_healthissue = require("./member_healthIssue");

const healthIssue = database.define("healthIssue", {
  healthIssueID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  healthIssueName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  healthIssueDesc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prohibition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

healthIssue.belongsToMany(member, { through: member_healthissue });

healthIssue
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", +error);
  });

module.exports = healthIssue;
