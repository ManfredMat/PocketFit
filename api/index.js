const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {User , Exercise} = require("./src/db")

const generatorEx = (n)=>{
  let array=[]
  let descripciones=["tirar una pesa y atraparla con la cara","sufrir como condenado" , "tirarse a llorar" , "correr hasta desmayarse"]
  let disciplina=["Levantamiento" , "Running" ,"Tortura china" , "Lo que nadie quiere hacer"]
  for(i=0 ; i < n ; i++){
    let description = descripciones[parseInt(Math.random()*4)]
    let discipline  = disciplina[parseInt(Math.random()*4)]
    array.push(
      {
        name:`ejercicio n ${[i+1]}`,
        description,
        video:"un url",
        discipline,
      }
    )

  }
  return array
}

const exerArray = generatorEx(10)

let adminAcount = {
  name:"Admin",
  lastname:"Fake Gym",
  email:"soyElAdmin@FakeGym.com",
  password:"fakegym1234",
  isadmin:true,
  isprofessor:false,
  isuser:false
}

conn.sync({ force: true }).then(async () => {
  
  await User.create(adminAcount)
  await Exercise.bulkCreate(exerArray)
  server.listen(3001, () => {
    console.log("%s listening at 3001");
  });
});
