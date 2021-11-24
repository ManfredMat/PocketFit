const {User, Routine, Exercise} = require ('../../db')

const createUser = async (req, res) =>{
    const {name, lastname, email, age, height, weight, 
        backsquat, pushpress, snatch, clean, running, 
        pullups, password, isadmin, isprofessor, isuser} = req.body;
    try{
        const newUser = await User.create({name, lastname, email, age, height, weight, 
            backsquat, pushpress, snatch, clean, running, 
            pullups, password, isadmin, isprofessor, isuser});
        res.json(newUser)
    }
    catch(err){
        res.send(err)
    }
};

const getAllUsers = async(req, res) =>{
    try{
        const allUsers = await User.findAll();
        res.json(allUsers);
    }
    catch(err){
        res.send(err);
    }
}

const getSpeficicUser = async(req, res) =>{
    const {id} = req.params
    try{
        const specificUser = await User.findOne({where:{id:id}});
        res.json(specificUser);
    }
    catch(err){
        res.send(err);
    }
}
const modifyUser = async(req, res)=>{
    const {id, prop} = req.params
    const {update} = req.body
    try{
        const oneUser= await User.findOne({where:{id:id}})
        oneUser[prop] = update
        await oneUser.save()
       res.send(oneUser)
    }
       catch(error){
           res.send(error)
       }
}

const createRoutine = async(req, res) => {
        const {id} = req.params
    try{
        const createPersonalRoutine = await Routine.findOne({where:{id:id}});
        res.json(createPersonalRoutine);
    }
    catch(err){
        res.send(err);
    }
}

const getRoutine = async(req, res) => {
    const {id} = req.params
try{
    const getRoutine = await Routine.findOne({where:{id:id}, include:[{
        model: Exercise , attributes:['name'],
        through:{
            attributes:[]
        }
    }]}
        );
    res.json(getRoutine);
}
catch(err){
    res.send(err);
    }
};

const deleteRoutine = async(req, res) => {
    const {id} = req.params
try{
    await Routine.destroy({where:{id:id}});
    res.json('Routine deleted');
}
catch(err){
    res.send(err);
    }
};

const updateRoutine = async(req , res) =>{
    const{id, prop} = req.params
    const {update} = req.body
    try{
    const oneRoutine= await Routine.findOne({where:{id:id}})
    oneRoutine[prop] = update
    await oneRoutine.save()
   res.send(oneRoutine)
}
   catch(error){
       res.send(error)
   }
}

module.exports={ createUser, getSpeficicUser, getAllUsers, createRoutine, getRoutine, deleteRoutine, updateRoutine, modifyUser};   