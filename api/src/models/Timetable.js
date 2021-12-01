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
    },
    ending:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    intervalo:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    capacity:{
      type: DataTypes.INTEGER,

    },
  });
};
