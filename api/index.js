const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {User,Event} = require("./src/db")
const datos = require('../client/src/components/Timetable/clases-pre')


conn.sync({ force: true }).then(async () => {
  
  let adminAcount = {
    name:"Admin",
    lastname:"Fake Gym",
    email:"soyElAdmin@FakeGym.com",
    password:"fakegym1234",
    isadmin:true,
    isprofessor:false,
    isuser:false
  }
  await User.create(adminAcount)
  await datos.clases.forEach((cla)=> Event.create(cla))
  server.listen(3001, () => {
    console.log("%s listening at 3001");
  });
});
