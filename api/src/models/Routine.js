const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('routine', {
    id: {
      type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },

    day:{
      type:DataTypes.ENUM("monday" , "tuesday" , "wendsday" , "thursday" , "friday" , "saturday"),
      allowNull:false
    },

    kindOfRoutine:{
      type:DataTypes.STRING,
      allowNull:false,
    },
  });
};