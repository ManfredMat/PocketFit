require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const session = require("express-session");

const { DB_USER, DB_PASSWORD, DB_HOST , DB_NAME } = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/development`,
        { logging: false, native: false }
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





const { Event , Exercise  , Routine , Timetable , User  , Block, Shift , Weekplan} = sequelize.models;



// Aca vendrian las relaciones
// Product.hasMany(Reviews);
User.belongsToMany(Routine, { through: "UserRoutine" });
Routine.belongsToMany(User, { through: "UserRoutine" });

User.belongsToMany(Shift, { through: "UserShift" });
Shift.belongsToMany(User, { through: "UserShift" });

Shift.belongsToMany(Timetable, { through: "ShiftTimetable" });
Timetable.belongsToMany(Shift, { through: "ShiftTimetable" });

User.belongsToMany(Event, { through: "UserEvent" });
Event.belongsToMany(User, { through: "UserEvent" });

Routine.belongsToMany(Block, { through: "BlockRoutine" });
Block.belongsToMany(Routine, { through: "BlockRoutine" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
