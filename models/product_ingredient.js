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

product_ingredient
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", error.message);
  });

module.exports = product_ingredient;
