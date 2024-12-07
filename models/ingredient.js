const products = require("./product");
const product_ingredient = require("../product_ingredient");

const ingredient = database.define("ingredient", {
  ingredientID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  ingredientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

ingredient.belongsToMany(products, { trough: product_ingredient });

ingredient
  .sync()
  .then(() => console.log("Table created successfully"))
  .catch((error) => console.error(error));

modules.export = ingredient;
