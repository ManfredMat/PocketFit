const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { User, Exercise, Timetable } = require("./src/db");
const bcrypt = require("bcrypt");


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

  await User.create(adminAcount);

  server.listen(process.env.PORT||3001, () => {
      console.log(`Our app is running on port ${ PORT }`);
  });
});
