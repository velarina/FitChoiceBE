const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const products = require("./product");

const category = database.define("category", {
  categoryID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

category.hasMany(products);

category
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", error.message);
  });

module.exports = category;
