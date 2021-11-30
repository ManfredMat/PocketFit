const {Routine , Block} = require('../../db')



 const createRoutine = async (req , res)=>{
    let {kindOfRoutine  , blocks , day } = req.body;
    try{
       const newRoutine = await  Routine.create({
           day,
           kindOfRoutine
       })
       newRoutine.setBlocks(blocks)
       res.json(newRoutine)
    }
    catch(error){
        res.send(error)
    }
    
}

const getAllRoutines = async (req , res)=> {
    try{
    let routines = await Routine.findAll({
        include:[{
            model: Block , attributes:['id' , 'rounds' ,'kindOfBlock','exercises' ,'description'],
            through:{
                attributes:[]
            }
        }]
    })


    res.json(routines)        
    }
    catch(error){
        res.send(error)
    }
}

const getOneRoutine = async (req , res)=> {

    let id = req.params
    try{
    let routines = await Routine.findOne({
        where:{id:id},
        include:[{
            model: Block , attributes:['id' , 'order', 'rounds' ,'kindOfBlock','exercises' ],
            through:{
                attributes:[]
            }
        }]
    })


    res.json(routines)        
    }
    catch(error){
        res.send(error)
    }
}


 const updateRoutineProp = async (req , res)=>{
    const{id, prop} = req.params
    const {update} = req.body
    try{
    const oneRoutine= await Routine.findOne({where:{id:id}})
    oneRoutine[prop] = update
    await oneRoutine.save()
   res.send(oneRoutine)
}
   catch(error){
       next(error)
   }
 }

 const removeRoutine = async (req , res)=>{
    const {id} = req.params

    try{
        await Routine.destroy({where:{id:id}})
    res.send({message: "Entry successfully deleted"})
    }
    
    catch(error){
        next(error)
    }
 }

module.exports = {
    createRoutine,
    getAllRoutines,
    getOneRoutine,
    updateRoutineProp,
    removeRoutine
}