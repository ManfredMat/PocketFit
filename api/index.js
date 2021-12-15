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


conn.sync({ force: false }).then(async () => {
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

  let users = [
    {
      name: "Luciano",
      lastname: "Heitt",
      email: "fromgualeguaychuwithlove@gmail.com",
      password: newPassword,
      paymentday: "2021-12-01",
      phoneNumber: "1125632147",
    },
    {
      name: "Jesús",
      lastname: "Gutierrez",
      email: "joaquingutierrez@gmail.com",
      password: newPassword,
      paymentday: "2022-01-14",
      phoneNumber: "1156873921",
    },
    {
      name: "Candela",
      lastname: "Aznarez",
      email: "candemeinkampf@gmail.com",
      password: newPassword,
      paymentday: "2021-12-05",
    },
    {
      name: "Steve",
      lastname: "Medel",
      email: "stiviewonder@gmail.com",
      password: newPassword,
      paymentday: "2021-12-20",
    },
    {
      name: "Mateo",
      lastname: "Manfredi",
      email: "ilovehenrycoins@gmail.com",
      password: newPassword,
      paymentday: "2021-12-02",
      phoneNumber: "1166589785",
    },
    {
      name: "Victoria",
      lastname: "Chouhy",
      email: "ilovecocacola@gmail.com",
      password: newPassword,
      paymentday: "2021-11-28",
    },
    {
      name: "Leandro",
      lastname: "Rebequi",
      email: "tonimybestfriend@gmail.com",
      password: newPassword,
      paymentday: "2021-11-29",
      phoneNumber: "1100589620",
    },
    {
      name: "Juan",
      lastname: "Carvajal",
      email: "crazyforbitcoin@gmail.com",
      password: newPassword,
      paymentday: "2021-12-28",
    },
    {
      name: "Jerlib",
      lastname: "Gonzalez",
      email: "salsalover@gmail.com",
      password: newPassword,
      paymentday: "2021-12-07",
    },
    {
      name: "Carlos",
      lastname: "Arceguet",
      email: "ferneteverywhere@gmail.com",
      password: newPassword,
      paymentday: "2021-12-17",
      phoneNumber: "1189631056",
    },
    {
      name: "Barbara",
      lastname: "Kristal",
      email: "checkpointdealer@gmail.com",
      password: newPassword,
      paymentday: "2021-11-15",
    },
    {
      name: "Damian",
      lastname: "Diego",
      email: "mylasthair@gmail.com",
      password: newPassword,
      paymentday: "2021-10-15",
      status: "INACTIVO",
    },
    {
      name: "David",
      lastname: "Mendoza",
      email: "thegreatcheater@gmail.com",
      password: newPassword,
      paymentday: "2021-12-25",
      phoneNumber: "1123957856",
    },
    {
      name: "Janina",
      lastname: "Roberto",
      email: "janinarobe@gmail.com",
      password: newPassword,
      paymentday: "2021-12-24",
    },
    {
      name: "Andrés",
      lastname: "Cuervo",
      email: "andycuervo@gmail.com",
      password: newPassword,
      paymentday: "2021-12-20",
    },
    {
      name: "Josue",
      lastname: "Solano",
      email: "jsolano@gmail.com",
      password: newPassword,
      paymentday: "2020-05-10",
      status: "INACTIVO",
    },
    {
      name: "Juan",
      lastname: "Malerba",
      email: "juanmale@gmail.com",
      password: newPassword,
      paymentday: "2021-06-06",
      status: "INACTIVO",
      phoneNumber: "1112365498",
    },
    {
      name: "Eliseo",
      lastname: "Masuelli",
      email: "eliseomasuelli@gmail.com",
      password: newPassword,
      paymentday: "2012-12-12",
      status: "INACTIVO",
    },
    {
      name: "Pablo",
      lastname: "Peraltta",
      email: "paulperaltta@gmail.com",
      password: newPassword,
      paymentday: "2022-02-27",
    },
    {
      name: "Ryder",
      lastname: "Michel",
      email: "ryderm@gmail.com",
      password: newPassword,
      paymentday: "2021-12-31",
      phoneNumber: "1156987423",
    },
  ];

  await Timetable.create();
  await User.create(adminAcount);
  await Exercise.bulkCreate(exerArray);
  await User.bulkCreate(users);

  server.listen(3001, () => {
    console.log("%s listening at 3001");
  });
});
