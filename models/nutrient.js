const { Sql, DataTypes } = require("sequelize");
const database = require("./config/database");
const nutrient = database.define("nutrient", {
  nutrientID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  nutrientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

nutrient
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", +error);
  });

module.exports = nutrient;
