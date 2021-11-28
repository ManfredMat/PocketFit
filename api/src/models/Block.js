const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('block', {

      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
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
    
    description:{
    type: DataTypes.TEXT,
    allowNull: false
    },

   }
  );
};
