const {User} = require('../../db');
const { transporter, mailOptions } = require('./Transporter');


let subscribed = ` <html>
  
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
</head>

<body style=" font-family: 'Open Sans', 'Arial Narrow', Arial, sans-serif; ">
  <div
    style="height: 100%; padding: 2em; background-image: url('https://i.ibb.co/qYt487N/loginbackground.png'); background-size: 100%;">
    <div style="border-radius: 2em;text-align: -webkit-center;background-color: rgb(2, 14, 18 , 0.8);z-index: 1;position: relative;">
      <img src="https://i.ibb.co/ScMP2M3/Group.png" width="80px" height="80px"
        style="position: relative; margin-top: 1em;">
      <p
        style="color: #ffffff;font-weight: 850;background-color:#588A58;padding:2em;">
        %username% , Ya estas suscripto a las noticias de tu gimnasio </p>
        
    </div>
  </div>

</body>

</html>`

let unsubscribed = ` <html>
  
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
</head>

<body style=" font-family: 'Open Sans', 'Arial Narrow', Arial, sans-serif; ">
  <div
    style="height: 100%; padding: 2em; background-image: url('https://i.ibb.co/qYt487N/loginbackground.png'); background-size: 100%;">
    <div style="border-radius: 2em;text-align: -webkit-center;background-color: rgb(2, 14, 18 , 0.8);z-index: 1;position: relative;">
      <img src="https://i.ibb.co/ScMP2M3/Group.png" width="80px" height="80px"
        style="position: relative; margin-top: 1em;">
      <p
        style="color: #ffffff;font-weight: 850;background-color:#588A58;padding:2em;">
        %username% , Ya estas desuscripto a las noticias de tu gimnasio </p>
        
    </div>
  </div>

</body>

</html>`  

let modelNews = ` <html>
  
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
</head>

<body style=" font-family: 'Open Sans', 'Arial Narrow', Arial, sans-serif; ">
  <div
    style="height: 100%; padding: 2em; background-image: url('https://i.ibb.co/qYt487N/loginbackground.png'); background-size: 100%;">
    <div style="border-radius: 2em;text-align: -webkit-center;background-color: rgb(2, 14, 18 , 0.8);z-index: 1;position: relative;">
      <img src="https://i.ibb.co/ScMP2M3/Group.png" width="80px" height="80px"
        style="position: relative; margin-top: 1em;">
      <p
        style="color: #ffffff;font-weight: 850;background-color:#588A58;padding:2em;">
        Hola %username% , %message% </p>
        
    </div>
  </div>

</body>

</html>`


const subscribeToNews = async (req , res)=>{
  let {id}  = req.body

  try{
    
    let user = await User.findOne({where:{id:id}})

    user["newsletter"] = true

    await user.save()

    let message = subscribed

    message = message.replace("%username%", user.name);

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
  
      message = message.replace("%username%", user.name);
  
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

            message = message.replace("%username%", user.name);
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