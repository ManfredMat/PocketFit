const {Weekplan , Routine , Block} = require('../../db')
const NOMBRE_GENERAL = "Plan semanal general"

const structureWeekPlan=(weekplan , name)=>{
    let newStructure = {
        name:name,
        monday: weekplan[0],
        tuesday: weekplan[1],
        wendsday:weekplan[2],
        thursday: weekplan[3],
        friday: weekplan[4],
        saturday: weekplan[5]

    }
    return newStructure   
}

const createWeekPlan = async (req , res)=>{
    let {name , monday , tuesday ,wendsday , thursday , friday , saturday} = req.body
    

    

    if(!name){

        Weekplan.destroy({where:{name:NOMBRE_GENERAL}})        
        name = NOMBRE_GENERAL
    }

    try{
        let newWeekPlan = await Weekplan.create(
            {
                name,
                monday,
                tuesday,
                wendsday,
                thursday,
                friday,
                saturday
            }
            )
            
        

        res.json(newWeekPlan)
    }
    catch(error){res.send(error)}

}

const getAllWeekPlans = async (req , res)=>{
    try{
        let weekplan = await Weekplan.findAll()        
        
        res.json(weekplan)
    }catch(error){res.send(error)}
}

const getWeekPlanById = async (req , res)=>{

    let {id}=req.params
    console.log(typeof id)
    try{
        let weekplan = await Weekplan.findOne({where:{id:id}})

        let {monday , tuesday ,wendsday , thursday , friday , saturday} = weekplan

        let {name}=weekplan

        let newStructure=[]

        weekplan=[monday,tuesday,wendsday,thursday,friday,saturday]

        for(let i of weekplan){
        

            newStructure.push(Routine.findOne({
                where:{id:i},
                include:[{
                    model: Block , attributes:['id' , 'order', 'rounds' ,'kindOfBlock','exercises'],
                    through:{
                        attributes:[]
                    }
                }]}))
       
       
        }
        weekplan = await Promise.all(newStructure , name)

        weekplan = structureWeekPlan(weekplan)


        res.json(weekplan)
    }catch(error){res.send(error)}
}

const getGeneralWeekPlan = async (req , res) =>{

    let name= NOMBRE_GENERAL

    try{

    let generalWeekPlan = await Weekplan.findOne({where:{name:name}})

    let {monday , tuesday ,wendsday , thursday , friday , saturday} = generalWeekPlan

    let newStructure=[]

    generalWeekPlan=[monday,tuesday,wendsday,thursday,friday,saturday]

    for(let i of generalWeekPlan){
    

        newStructure.push(Routine.findOne({
            where:{id:i},
            include:[{
                model: Block , attributes:['id' , 'order', 'rounds' ,'kindOfBlock','exercises'],
                through:{
                    attributes:[]
                }
            }]}))
   
   
    }
    generalWeekPlan = await Promise.all(newStructure , name)

    generalWeekPlan = structureWeekPlan(generalWeekPlan)
    

    res.json(generalWeekPlan)

    }
    catch(error){res.send(error)}
}



const updateWeekPlan = async (req , res)=>{
    const{id, prop} = req.params

    const {update} = req.body

    try{
    const oneWeekPlan= await Weekplan.findOne({where:{id:id}})
    oneWeekPlan[prop] = update
    await oneWeekPlan.save()
   res.send(oneWeekPlan)
    }
   catch(error){
    res.send(error)
   }
}

const deleteWeekPlan = async (req , res)=>{
    const {id} = req.params

    try{
        await Weekplan.destroy({where:{id:id}})
        res.send({message: "Entry successfully deleted"})
    }

    catch(error){
        res.send(error)
    }
}

module.exports = {
    createWeekPlan, 
    getAllWeekPlans,
    getWeekPlanById,
    updateWeekPlan,
    deleteWeekPlan,
    getGeneralWeekPlan
}