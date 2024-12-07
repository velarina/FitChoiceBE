const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");

const admin = database.define("admin", {
  adminID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  adminName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adminEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  permission: {
    type: DataTypes.ENUM("adminProduct", "adminRegistrations"),
    allowNull: false,
  },
});

admin
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", +error);
  });

module.exports = admin;
