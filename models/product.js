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
    type: DataTypes.ENUM("declined", "high", "medium", "low"),
    allowNull: false,
  },
  nutritionistID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "nutritionists",
      key: "nutritionistID",
    },
  },
  adminID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "admins",
      key: "adminID",
    },
  },
  categoryID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "categories",
      key: "categoryID",
    },
  },
});

module.exports = products;
