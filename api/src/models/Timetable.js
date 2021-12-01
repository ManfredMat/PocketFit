const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('timetable', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    beginning:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:7
    },
    ending:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10
    },
    intervalo:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: ["7-9", "9-11", "11-13", "14-16", "16-18", "18-20"]
    },
    capacity:{
      type: DataTypes.INTEGER,
      defaultValue:15
    },
  });
};
