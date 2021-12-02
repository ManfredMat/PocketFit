/*

1ero recibo del front el email ---> tirar error si no mandan el email
2do busco el usuario en la db
3ro creamos token con el user (no se si va a ser necesario)
4to guardo el link al que se lo enviaria con la info encriptada (si el paso 3 es necesario) ----> tiene que pegarle a un endpoint del front ej:localhost:3000/newpassword/:token
5to preparo el envio de email (nodemailer)
6to metodo put donde buscamos el user con el user con el id y modificamos el user con la nueva contraseña0

config nodemailer

npm i nodemailer

config google --> seguridad --> verificacion en dos pasos -- > doble ver por mensaje

contraseña aplicaciones --> otra personalizada ---> nombre pocketfit guardo contraseña

import package 
host "smtp.gmail.com"
port 465 

auth:{
    user:el email,
    pass: las pass creada para apps
}

----todo lo siguiente en un try!!!----

transporter.sendMail({
    from: de donde
    to: user email
    subject: encabezado del mail,
    text: texto plano,
    html: como se vera el mail
})
-----------------------------------------
*/
const { Router } = require('express');
const router = Router();
const {sendEmailToRecover , changePassword} = require('../Controllers/ResetPassword')


router.post('/forgotten_password' , sendEmailToRecover)
router.put('/reset_password' , changePassword)



module.exports = router;