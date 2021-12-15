const { User } = require('../../db')
const bcrypt = require("bcrypt");
const { transporter, mailOptions } = require('./Transporter');
let modelEmail = `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  </head>
  
  <body style=" font-family: 'Open Sans', 'Arial Narrow', Arial, sans-serif; ">
   <h2>Hola %usuario% </h2>
   <h2>Este es el Link para la recuperacion de contraseña</h2>
   %link% 
  
  </body>
  
  </html>`
let modelEmail2=` <html>
  
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
        %username% , Recibimos una peticion para restablecer su contraseña, si fue usted Haga click en el siguiente boton , de no ser asi reportelo con nuestro equipo</p>
        %link% 
    </div>
  </div>

</body>

</html>`
const sendEmailToRecover = async (req, res) => {
  let { email } = req.body
  try {

    if (!email) {
      res.send({ message: "You need to send an email" })
    }

    let usuario = await User.findOne({ where: { email: email } })

    let id = usuario.id
    let usuarioEmail = email
    let link = `https://pocket-fit.vercel.app/resetpassword/${id}`
    let message = modelEmail2
    let resetButton = `<a style="padding:0.5em; display:inline-block; text-decoration:none; background-color: #6AE056; color:#020E12; margin:.5em; border-radius:.5em;" href=${link} >Recuperar Contraseña</a>`

    message = message.replace("%usuario%", usuario.name);
    message = message.replace("%link%", resetButton)
   
    let emailOptions = mailOptions(usuarioEmail, message , 'Recover you password')


    let info = await transporter.sendMail(emailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.send("Everything is awesome")

  } catch (error) {
    res.send("Something went wrong")
  }

}



const changePassword = async (req, res) => {
  let { id, newPassword } = req.body
  try {

    let usuario = await User.findOne({ where: { id: id } })

    newPassword = await bcrypt.hash(newPassword, 10)

    usuario["password"] = newPassword

    await usuario.save()

    res.send(usuario)
  }
  catch (error) { res.send(error) }

}

module.exports = {
  sendEmailToRecover,
  changePassword
}