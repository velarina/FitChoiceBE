const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const products = require("../product");

const nutritionist = database.define("nutritionist", {
  nutritionistID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  nutritionistName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nutritionistEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  certification: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  yearsOfExperience: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

nutritionist.hasMany(products);

nutritionist
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", +error);
  });

module.exports = nutritionist;
