const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('block', {

      id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },

      day:{
        type:DataTypes.ENUM("monday" , "tuesday" , "wendsday" , "thursday" , "friday" , "saturday"),
        allowNull:false
      },

      order:{
        type: DataTypes.INTEGER,
        allowNull:false
      },

    rounds:{
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
  
    kindOfBlock:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    exercises:{
        type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING)),
        allowNull:true
    },
    
  

   }
  );
};
