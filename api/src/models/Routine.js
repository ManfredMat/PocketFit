const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('routine', {
    id: {
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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