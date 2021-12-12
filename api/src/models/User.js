const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    backsquat: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    benchpress: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    snatch: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    clean: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    running: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    pullups: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    password: {
      type: DataTypes.STRING,
    },
    isadmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isprofessor: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isuser: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    paymentday: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status:{
      type: DataTypes.ENUM("ACTIVO" , "INACTIVO"),
      defaultValue:"ACTIVO"
    },
    newsletter:{
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
    notifications:{
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
    imageType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageData: {
      type: DataTypes.BLOB,
    }
  });
};
