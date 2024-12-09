const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const products = require("./product");
const nutrient = require("./nutrient");

const product_nutrient = database.define("product_nutrient");

module.exports = product_nutrient;
