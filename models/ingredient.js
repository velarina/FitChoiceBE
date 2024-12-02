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
