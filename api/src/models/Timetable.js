const { DataTypes } = require('sequelize');
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
      type: DataTypes.STRING,
      allowNull:false,
    },
    ending:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    kind:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    availability:{
      type: DataTypes.INTEGER,
      defaultValue:0,
    }
  });
};
