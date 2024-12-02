const { Sql, DataTypes } = require("sequelize");
const database = require("./config/database");
const favorites = database.define("favorites", {
  favoriteID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  favoriteName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  memberID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "member",
      key: "memberID",
    },
  },
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
});

favorites
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", +error);
  });

module.exports = favorites;
