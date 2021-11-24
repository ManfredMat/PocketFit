const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('routine', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    kindOfRoutine:{
      type:DataTypes.STRING,
      allowNull:false,
    },
  });
};