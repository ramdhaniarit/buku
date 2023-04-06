"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {
    static associate(models) {}
  }
  Buku.init(
    {
        id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Buku",
    }
  );
 
  return Buku;
};