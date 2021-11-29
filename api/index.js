const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {User} = require("./src/db")


conn.sync({ alter: true }).then(async () => {
  
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
  server.listen(3001, () => {
    console.log("%s listening at 3001");
  });
});
