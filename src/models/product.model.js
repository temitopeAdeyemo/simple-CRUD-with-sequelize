const { DataTypes} = require("sequelize")
const { sequelize } = require("../db.js");
const productTable = {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.TEXT,
  },
  published: {
    type: DataTypes.BOOLEAN,
  },
};
const Product = sequelize.define("Product", productTable);
module.exports = Product
