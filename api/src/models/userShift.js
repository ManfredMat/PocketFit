const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('UserShift', {
    id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true}
  })
}