const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const products = require("./product");
const ingredient = require("./ingredient");

const product_ingredient = database.define("product_ingredient");

module.exports = product_ingredient;
