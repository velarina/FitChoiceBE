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

member.belongsToMany(healthIssue, { through: member_healthissue });

member
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", error.message);
  });

module.exports = member;
