const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('routine', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },

    day:{
      type:DataTypes.ENUM("monday" , "tuesday" , "wednsday" , "thursday" , "friday" , "saturday"),
      allowNull:false
    },

    kindOfRoutine:{
      type:DataTypes.STRING,
      allowNull:false,
    },
  });
};