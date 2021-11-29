const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
    
  sequelize.define('weekplan', {

      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },

      monday:{
        type:DataTypes.STRING,
        allownull:false,
      },
      tuesday:{
        type:DataTypes.STRING,
        allownull:false,
      },
      wendsday:{
        type:DataTypes.STRING,
        allownull:false,
      },
      thursday:{
        type:DataTypes.STRING,
        allownull:false,
      },
      friday:{
        type:DataTypes.STRING,
        allownull:false,
      },
      saturday:{
        type:DataTypes.STRING,
        allownull:false,
      }  

   }
  );
};