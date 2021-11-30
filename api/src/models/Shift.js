const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('shift', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    kindOfShift:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      availability:{
        type: DataTypes.INTEGER,

      },
      capacity:{
        type: DataTypes.INTEGER,

      },
      beginning:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      ending:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      weekday:{
        type: DataTypes.STRING,
        allowNull: false
      },
      week:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      month:{
        type: DataTypes.STRING,
        allowNull: false
      },
      year:{        
        type: DataTypes.INTEGER,
        allowNull: false}
    })
  };