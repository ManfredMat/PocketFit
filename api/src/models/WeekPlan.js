const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
    
  sequelize.define('weekplan', {

      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },

      name:{
        type:DataTypes.STRING,
        allownull:false
      },

      monday:{
        type:DataTypes.INTEGER,
        allownull:false,
      },
      tuesday:{
        type:DataTypes.INTEGER,
        allownull:false,
      },
      wendsday:{
        type:DataTypes.INTEGER,
        allownull:false,
      },
      thursday:{
        type:DataTypes.INTEGER,
        allownull:false,
      },
      friday:{
        type:DataTypes.INTEGER,
        allownull:false,
      },
      saturday:{
        type:DataTypes.INTEGER,
        allownull:false,
      }  

   }
  );
};