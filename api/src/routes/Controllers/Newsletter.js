const {User} = require('../../db');
const { transporter, mailOptions } = require('./Transporter');

let subscribed = `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  </head>
  
  <body style=" font-family: 'Open Sans', 'Arial Narrow', Arial, sans-serif; ">
   <h2>Hola %usuario% </h2>
   <h2>Ya estas suscripto a las noticias del gimnasio </h2>
  
  </body>
  
  </html>`

let unsubscribed = `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  </head>
  
  <body style=" font-family: 'Open Sans', 'Arial Narrow', Arial, sans-serif; ">
   <h2>Hola %usuario% </h2>
   <h2>Ya estas desuscrito de las noticias del gimnasio </h2>
  
  </body>
  
  </html>`  

let modelNews = `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  </head>
  
  <body style=" font-family: 'Open Sans', 'Arial Narrow', Arial, sans-serif; ">
   <h2>Hola %usuario% </h2>
   <h2> %message% </h2>
  
  </body>
  
  </html>`


const subscribeToNews = async (req , res)=>{
  let {id}  = req.body

  try{
    
    let user = await User.findOne({where:{id:id}})

    user["newsletter"] = true

    await user.save()

    let message = subscribed

    message = message.replace("%usuario%", user.name);

    let emailOptions = mailOptions(user.email, message , 'Ya estas suscripto a las noticias de tu gimnasio')

    let info = transporter.sendMail(emailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    res.send({message:"User is now subscribed"})

  }
  catch(error){res.send(error)}
}

const unsubscribeToNews = async (req , res)=>{
    let {id}  = req.body
  
    try{
      
      let user = await User.findOne({where:{id:id}})
  
      user["newsletter"] = false
  
      await user.save()
  
      let message = unsubscribed
  
      message = message.replace("%usuario%", user.name);
  
      let emailOptions = mailOptions(user.email, message , 'Ya estas desuscripto')
  
      let info = await transporter.sendMail(emailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
  
      res.send({message:"User is now unsubscribed"})
  
    }
    catch(error){res.send(error)}
  }

  const sendNewsletter = async (req , res)=>{
      let {news , subject} = req.body
      try{
        let users = await User.findAll({where:{newsletter:true}})
        console.log(users)
        users.forEach(user => {

            let message = modelNews

            message = message.replace("%usuario%", user.name);
            message = message.replace("%message%", news);


            let emailOptions = mailOptions(user.email, message , subject?subject:'Que hay de nuevo en tu gimnasio local')
        
            let info = transporter.sendMail(emailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        });

        res.send({message:"All messages delivered"})


      }catch(error){res.send(error)}
  }


module.exports = {
    subscribeToNews,
    unsubscribeToNews,
    sendNewsletter
  }