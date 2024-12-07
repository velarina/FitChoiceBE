const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const nutrient = require("./nutrient");
const nutritionist = require("./nutritionist");
const admin = require("./admin");
const category = require("./category");
const ingredient = require("../controllers/ingredient");
const product_ingredient = require("./product_ingredient");
const product_nutrient = require("./product_nutrient");

const products = database.define("products", {
  productsID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  productsName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productsBrand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  permission: {
    type: DataTypes.enum("declined", "high", "medium", "low"),
    allowNull: false,
  },
  nutritionistID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "nutritionist",
      key: "nutritionistID",
    },
  },
  adminID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "admin",
      key: "adminID",
    },
  },
  categoryID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "category",
      key: "categoryID",
    },
  },
});

products.belongsTo(nutritionist);
products.belongsTo(admin);
products.belongsTo(category);
products.belongsToMany(nutrient, { through: product_nutrient });
products.belongsToMany(ingredient, { through: product_ingredient });

products
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", +error);
  });

module.exports = products;
