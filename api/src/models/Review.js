const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('review', {

      id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },
      review:{
          type: DataTypes.TEXT,
          allowNull:false
      },
      value:{
          type: DataTypes.ENUM("1","2","3","4","5"),
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