const { Router } = require("express");
const { Exercise } = require("../db.js");
const router = Router();


router.post("/", async(req, res, next) =>{
try{
    const { name, description, video, discipline } = req.body
    const newExercise = await Exercise.create({ name, description, video, discipline });
    res.send({message: "Exercise created successfully"})

}
catch(error){
next(error)
}
})

router.get("/", async (req, res, next) =>{
    try{
        const allExercises = await Exercise.findAll()
        res.send(allExercises)
    }
    catch(error){
next(error)
    }
})


router.get("/:id", async (req, res, next) =>{
    const {id} = req.params

    try{
        const oneExercise= await Exercise.findOne({where:{id:id}})
        res.send(oneExercise)
    }
    catch(error){
        next(error)
    }
})

router.put("/:name/:prop", async (req, res, next) =>{
   
    const{name, prop} = req.params
    const {update} = req.body
    try{
    const oneExercise= await Exercise.findOne({where:{name:name}})
    oneExercise[prop] = update
    await oneExercise.save()
   res.send(oneExercise)}
   catch(error){
       next(error)
   }

})

router.delete("/:name", async (req, res, next) =>{
const {name} = req.params

try{
    await Exercise.destroy({where:{name:name}})
res.send({message: "Entry successfully deleted"})
}

catch(error){
    next(error)
}
})


module.exports = router;