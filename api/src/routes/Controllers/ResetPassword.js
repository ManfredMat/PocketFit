const nodemailer = require('nodemailer')
const { User } = require('../../db')
const bcrypt = require("bcrypt");

//otjtefuzpkuuiief
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pocketfitteam@gmail.com',
    pass: 'henryft18a'
  }
})

const mailOptions = (email, modelEmail) => {
  return ({
    from: 'pocketfitteam@gmail.com',
    to: email,
    subject: 'Recover you password',
    html: modelEmail
  })
};
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

const sendEmailToRecover = async (req, res) => {
  let { email } = req.body
  try {

    if (!email) {
      res.send({ message: "You need to send an email" })
    }

    let usuario = await User.findOne({ where: { email: email } })

    let id = usuario.id
    let usuarioEmail = email
    let link = `localhost:3000/reset_password/${id}`
    let otrolink = "https://www.youtube.com/watch?v=35XFAkwmU4c"
    let message = modelEmail
    let resetButton = `<a style="padding:0.5em; display:inline-block; text-decoration:none; background-color: #507b00; color:#ffffff; margin:.5em; border-radius:.5em;" href=${otrolink} >Recuperar Contraseña</a>`

    message = message.replace("%usuario%", usuario.name);
    message = message.replace("%link%", resetButton)

    let emailOptions = mailOptions(usuarioEmail, message)


    let info = await transporter.sendMail(emailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.send("Everithing is awesome")

  } catch (error) {
    res.send("Something went wrong")
  }

}



const changePassword = async (req, res) => {
  let { email, newPassword } = req.body
  try {

    let usuario = await User.findOne({ where: { email: email } })

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