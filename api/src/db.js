require("dotenv").config();

const { Sequelize } = require("sequelize");

const fs = require("fs");

const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pocketfit`,
  {
    logging: false,
    native: false,
    dialect: "postgres",
    storage: "./db.postgres",
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Event, Exercise, Routine, Timetable, User } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
User.belongsToMany(Routine, { through: "UserRoutine" });
Routine.belongsToMany(User, { through: "UserRoutine" });

User.belongsToMany(Timetable, { through: "UserTimetable" });
Timetable.belongsToMany(User, { through: "UserTimetable" });

User.belongsToMany(Event, { through: "UserEvent" });
Event.belongsToMany(User, { through: "UserEvent" });

Exercise.belongsToMany(Routine, { through: "ExerciseRoutine" });
Routine.belongsToMany(Exercise, { through: "ExerciseRoutine" });

Timetable.belongsToMany(Event, { through: "EventTimetable" });
Event.belongsToMany(Timetable, { through: "EventTimetable" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
