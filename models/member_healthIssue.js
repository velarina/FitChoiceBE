const { Sql, DataTypes } = require("sequelize");
const database = require("./config/database");
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

member_healthissue
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", +error);
  });

module.exports = member_healthissue;
