const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("notification", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
