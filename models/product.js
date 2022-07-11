const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../config/connection')

const Products = sequelize.define(
  "product",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    url_image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    category: {
      type: DataTypes.INTEGER,
    }
  },
  {
    tableName: "product",
    timestamps: false
  }
);

module.exports = Products;
