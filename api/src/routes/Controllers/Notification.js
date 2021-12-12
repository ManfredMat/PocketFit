const axios = require("axios")
const {User} = require('../../db');


const turnOnNotifitation = async (req , res)=>{
  let {id}  = req.body
  try{
    let user = await User.findOne({where:{id:id}})
    user["notifications"] = true
    await user.save()
    res.send({message:"Notifications have been turned on"})

  }
  catch(error){res.send(error)}
}

const turnOffNotifitation = async (req , res)=>{
  let {id}  = req.body
  try{
    let user = await User.findOne({where:{id:id}})
    user["notifications"] = false
    await user.save()

    res.send({message:"User is now unsubscribed"})
  }
  catch(error){res.send(error)}
}
const sendNotification = async (req, res) => {
    const { title, message } = req.body
    try {
       await axios.post(`https://nativenotify.com/api/indie/notification`, {
          subID: 'fb5f05d5-dbd0-4425-ba0f-a176e866e30f',
          appId: 667,
          appToken: 'IONltqu86xwT3H5l2OSLtu',
          title: title,
          message: message
      });
      res.send({ message: "done" })
    } catch (error) {
      res.send(error)
    }
}

module.exports = {
    sendNotification,
    turnOffNotifitation,
    turnOnNotifitation
   };