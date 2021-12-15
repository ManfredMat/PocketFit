const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("notifications", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
