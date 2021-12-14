const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('review', {

      id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },
      subject:{
        type: DataTypes.STRING
      },
      review:{
          type: DataTypes.TEXT,
          allowNull:false
      },
      value:{
          type: DataTypes.INTEGER,
          allowNull:false
      },
      profesor:{
        type: DataTypes.STRING,
        allowNull:true
      },
      event:{
        type:DataTypes.STRING,
        allowNull:true
      },
      gym:{
        type: DataTypes.STRING,
        allowNull:true
      }
   }
  );
};