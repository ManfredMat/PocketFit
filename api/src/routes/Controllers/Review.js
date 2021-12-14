const { User, Event , Review} = require("../../db");

const sendReview = async(req , res) =>{
    let {subject, review, value, profesor, gym, event} = req.body

    try{
    let newReview = await Review.create({
        subject,
        review,
        value,
        event,
        profesor,
        gym
    })
    
    res.send(newReview)

    }
    catch(error){res.send(error)}
}

const getReviews = async (req , res)=>{
try{
let reviews = await Review.findAll()

res.send(reviews)
}
catch(error){res.send(error)}
}

const getOneReview = async (req , res)=>{
    let {id} = req.body
    try{
        let review = await Review.findOne({where:{id:id}})
        let user = await review.user?User.findOne({where:{id:review.user}}): null
        let event = await review.event?Event.findOne({where:{id:review.event}}): null  
        review.user = user.name
        review.event = event.name
        res.send(review)
    }
    catch(error){res.send(error)}
}

const deleteOneReview = async (req , res)=>{
    let {id} = req.body
    try{
        await Review.destroy({where:{id:id}})
        res.send({message: "Entry successfully deleted"})
    }
    catch(error){res.send(error)}
}

module.exports = {
sendReview,
getReviews,
getOneReview,
deleteOneReview    
}