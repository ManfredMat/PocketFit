const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { User, Exercise, Timetable } = require("./src/db");
const bcrypt = require("bcrypt");

const generatorEx = (n) => {
  let array = [];
  let descripciones = [
    "tirar una pesa y atraparla con la cara",
    "sufrir como condenado",
    "tirarse a llorar",
    "correr hasta desmayarse",
  ];
  let disciplina = [
    "Levantamiento",
    "Running",
    "Tortura china",
    "Lo que nadie quiere hacer",
  ];
  for (i = 0; i < n; i++) {
    let description = descripciones[parseInt(Math.random() * 4)];
    let discipline = disciplina[parseInt(Math.random() * 4)];
    array.push({
      name: `ejercicio n ${[i + 1]}`,
      description,
      video: "https://www.youtube.com/watch?v=35XFAkwmU4c",
      discipline,
    });
  }
  return array;
};

const exerArray = generatorEx(10);

conn.sync({ force: true }).then(async () => {
  let newPassword = await bcrypt.hash("1234", 10);
  let adminAcount = {
    name: "Admin",
    lastname: "Fake Gym",
    email: "soyElAdmin@FakeGym.com",
    password: newPassword,
    isadmin: true,
    isprofessor: false,
    isuser: false,
  };

  await Timetable.create();
  await User.create(adminAcount);
  await Exercise.bulkCreate(exerArray);

  server.listen(3001, () => {
    console.log("%s listening at 3001");
  });
});
