const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");

const product_nutrient = database.define("product_nutrient", {
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
  nutrientID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "nutrients",
      key: "nutrientID",
    },
  },
});

product_nutrient
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", error.message);
  });

module.exports = product_nutrient;
