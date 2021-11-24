const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('event', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
  clase:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
  },
  event:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
},
  name:{
        type: DataTypes.STRING,
        allowNull: false,
},
description:{
  type: DataTypes.TEXT,
  allowNull: false
},

   }
  );
};
