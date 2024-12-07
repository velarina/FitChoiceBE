const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const product_ingredient = database.define("product_ingredient", {
  productsID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "products",
      key: "productsID",
    },
  },
  ingredientID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "ingredients",
      key: "ingredientID",
    },
  },
});

module.exports = product_ingredient;
