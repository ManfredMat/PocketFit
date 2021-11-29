const {WeekPlan , Routine} = require('../../db')
// createWeekPlan, getAllWeekPlans ,getWeekPlanById,updateWeekPlan ,deleteWeekPlan

const createWeekPlan = async (req , res)=>{
    let {monday , tuesday ,wendsday , thursday , friday , saturday} = req.params
    try{
        let newWeekPlan = {
            monday,
            tuesday,
            wendsday,
            thursday,
            friday,
            saturday
        }
        await WeekPlan.create(newWeekPlan)

        res.json(newWeekPlan)
    }
    catch(error){console.log(error)}

}

const getAllWeekPlans = async (req , res)=>{
    try{
        let weekplan = await WeekPlan.findAll()        
    
        res.json(weekplan)
    }catch(error){console.log(error)}
}

const getWeekPlanById = async (req , res)=>{

    let {id}=req.params

    try{
        let weekplan = await WeekPlan.findOne({where:{id:id}})        

        res.json(weekplan)
    }catch(error){console.log(error)}
}

const updateWeekPlan = async (req , res)=>{
    const{id, prop} = req.params

    const {update} = req.body

    try{
    const oneWeekPlan= await WeekPlan.findOne({where:{id:id}})
    oneWeekPlan[prop] = update
    await oneWeekPlan.save()
   res.send(oneWeekPlan)
    }
   catch(error){
    console.log(error)
   }
}

const deleteWeekPlan = async (req , res)=>{
    const {id} = req.params

    try{
        await Exercise.destroy({where:{id:id}})
        res.send({message: "Entry successfully deleted"})
    }

    catch(error){
        console.log(error)
    }
}

module.exports = {
    createWeekPlan, 
    getAllWeekPlans,
    getWeekPlanById,
    updateWeekPlan,
    deleteWeekPlan
}