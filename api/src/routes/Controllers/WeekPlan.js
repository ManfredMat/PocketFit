const {Weekplan , Routine , Block} = require('../../db')

const structureWeekPlan=(weekplan)=>{
    let newStructure = {
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
    let {monday , tuesday ,wendsday , thursday , friday , saturday} = req.body
    try{
        let newWeekPlan = await Weekplan.create(
            {
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
        let weekplan = await Weekplan.findAll({include:[{
            model: Block , attributes:['id' , 'rounds' ,'kindOfBlock','exercises' ,'description'],
            through:{
                attributes:[]
            }
        }]})        
        
        res.json(weekplan)
    }catch(error){res.send(error)}
}

const getWeekPlanById = async (req , res)=>{

    let {id}=req.params

    try{
        let weekplan = await Weekplan.findOne({where:{id:id}})

        let {monday , tuesday ,wendsday , thursday , friday , saturday} = weekplan

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
        weekplan = await Promise.all(newStructure)

        weekplan = structureWeekPlan(weekplan)


        res.json(weekplan)
    }catch(error){res.send(error)}
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
    deleteWeekPlan
}