const {Event , Timetable , User} = require('../../db')

const monthEventStructure = (eventArray)=>{
    let nuevoArray=[]
    
        eventArray.forEach(event => {
        
            let {name , day , users ,description ,timetables} = event

            let user= users[0].name
            

            let eventRestructured={
                name:name,
                day:day,
                responsable:user,
                description:description,
                beginning:timetables[0].beginning,
                ending:timetables[0].ending,
            }

            nuevoArray.push(eventRestructured)  


        });
    nuevoArray=monthEventSort(nuevoArray)
    return nuevoArray
   
}

const monthEventSort = (eventArray)=>{
    eventArray = eventArray.sort((a,b)=>{
        if(a.day > b.day){
            
            return  1 
        }
        if(a.day < b.day){
            
            return  (-1 )
        }
        return 0
    })
    return eventArray
}



const createEvent = async (req , res)=>{

    let{kindOfEvent , name , description , profesor , timetable , month , day} = req.body

    try{
        let newEvent = await Event.create({
            kindOfEvent,
            name,
            description,
            month,
            day
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

const getEventsByMonth = async (req , res)=>{

    let {month}  = req.params
    console.log(month)
    try{
        let monthEvents = await Event.findAll({
            where:{month:month},
            include:[{
                model: User , attributes:['name'],
                through:{
                    attributes:[]
                }
            } ,
            {
            model: Timetable , attributes:['beginning' , 'ending'],
            through:{
                attributes:[]
            }
        }]

        })


        monthEvents = monthEventStructure(monthEvents)

        res.json(monthEvents)
    }catch(error){
        res.send(error)
    }
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
    getEventsByMonth,
    createEvent,
    updateEventProp,
    removeEvent
}