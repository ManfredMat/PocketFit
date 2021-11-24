const {User} = require ('../../db')

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

const createRoutine = async(req, res) => {
        const {id} = req.params
    try{
        const createPersonalRoutine = await User.findOne({where:{id:id}});
        res.json(createPersonalRoutine);
    }
    catch(err){
        res.send(err);
    }
}

const getRoutine = async(req, res) => {
    const {id} = req.params
try{
    const getRoutine = await User.findOne({where:{id:id}});
    res.json(getRoutine);
}
catch(err){
    res.send(err);
    }
};

const deleteRoutine = async(req, res) => {
    const {name} = req.params
try{
    await User.destroy({where:{name:name}});
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
    const oneRoutine= await User.findOne({where:{id:id}})
    oneRoutine[prop] = update
    await oneRoutine.save()
   res.send(oneRoutine)
}
   catch(error){
       next(error)
   }
}

module.exports={ createUser, getSpeficicUser, getAllUsers, createRoutine, getRoutine, deleteRoutine, updateRoutine};   