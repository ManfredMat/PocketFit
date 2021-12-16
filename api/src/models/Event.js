const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("event", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    kindOfEvent: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    month: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    nameday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hour: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    profesor: {
      type: DataTypes.STRING,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    },
  });
};
