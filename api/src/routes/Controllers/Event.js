const {Event , Timetable , User} = require('../../db')

const createEvent = async (req , res)=>{

    let{kindOfEvent , name , description , profesor , timetable} = req.body

    try{
        let newEvent = await Event.create({
            kindOfEvent,
            name,
            description
        })

        await newEvent.setTimetables(timetable)

        await newEvent.setUsers(profesor)

        res.json(newEvent)

    }
    catch(error){res.send(error)}

}

const getAllEvents = async (req , res)=>{
    try{
        let events = await Event.findAll({
            include:[{
                model: Timetable , attributes:['beginning' , 'ending'],
                model: User , attributes:['name'],
                through:{
                    attributes:[]
                }
            }]
        })
    
    
        res.json(events)        
        }
        catch(error){
            res.send(error)
        }
}

const getOneEvent = async (req , res)=>{
    let {id}=req.params
    try{
        let event = await Event.findOne({
            where:{id:id},
            include:[{
                model: Timetable , attributes:['beginning' , 'ending'],
                model: User , attributes:['name'],
                through:{
                    attributes:[]
                }
            }]
        })
    
    
        res.json(event) 
    }
    catch(error){res.send(error)}
}

const updateEventProp = async (req , res)=>{
    const{id, prop} = req.params
    const {update} = req.body
    try{
    const oneEvent= await Event.findOne({where:{id:id}})
    oneEvent[prop] = update
    await oneEvent.save()
   res.send(oneEvent)
}
   catch(error){
       next(error)
   }
}

const removeEvent = async (req , res)=>{
    const {id} = req.params

    try{
        await Event.destroy({where:{id:id}})
    res.send({message: "Entry successfully deleted"})
    }
    
    catch(error){
        next(error)
    }
}

module.exports = {
    getAllEvents,
    getOneEvent,
    createEvent,
    updateEventProp,
    removeEvent
}