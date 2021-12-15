const { Router } = require("express");
const router = Router();
const mercadopago = require('mercadopago')
const nodemailer = require('nodemailer');
const User = require("../../models/User");
const { transporter, mailOptions } = require('../Controllers/Transporter');

let success = `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  </head>
  
  <body style=" font-family: 'Open Sans', 'Arial Narrow', Arial, sans-serif; ">
   <h2>Hola %mail% </h2>
   <h2>Tu pago ha sido procesado correctamente</h2>
   <h3>Abonaste $ %total% en concepto de mensualidad del gimnasio</h3>
   <h3>El mismo quedo registrado bajo la orden Nº %payment_id%</h3>
   <h3>Muchas gracias!</h3> 
  </body>
  
  </html>`

  let rejected = `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  </head>
  
  <body style=" font-family: 'Open Sans', 'Arial Narrow', Arial, sans-serif; ">
   <h2>Hola %mail% </h2>
   <h2>Te informamos que tu pago no pudo ser procesado correctamente</h2>
   <h3>Se ha rechazado el pago por $ %total% en concepto de mensualidad del gimnasio</h3>
   <h3>Por favor, vuelva a intentarlo</h3>
   <h3>Muchas gracias!</h3> 
  </body>
  
  </html>`

  let pending = `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  </head>
  
  <body style=" font-family: 'Open Sans', 'Arial Narrow', Arial, sans-serif; ">
   <h2>Hola %mail% </h2>
   <h2>Te informamos que tu pago esta siendo procesado</h2>
   <h3>Muchas gracias!</h3> 
  </body>
  
  </html>`


mercadopago.configure({
    access_token: 'TEST-6388733552893649-120718-94cefa92328bbb6e61137a88f9d07b70-194185716'
  });

  // ACCESS TOKEN - TEST-6388733552893649-120718-94cefa92328bbb6e61137a88f9d07b70-194185716
  // Public Key - TEST-a696de80-c815-4492-bead-9c011112b90b
  // access token para usuarios - APP_USR-6388733552893649-120718-62f4163746f82234ad13632557821c2e-194185716
  // public key credencial real- APP_USR-9f808268-1ab7-42af-956f-15043288021f

  router.post('/pay', async (req, res) => {
    const { title, /*total*/ } = req.body;
    mercadopago.configure({
        access_token: 'TEST-4584026682195569-100518-6865fd891a74a50438b28e4a07dae8f4-835549336',
    });

    let preference = {
        items: [
            {
                title: title,
                unit_price: 10000,
                quantity: 1,
            },
        ],

        back_urls: {
            success: 'https://localhost:3001/api/mercadopago/success',
            failure: 'https://localhost:3001/api/mercadopago/order',
            pending: 'https://localhost:3001/api/mercadopago/success',
        },
        auto_return: 'approved',
    };
    let answer = await mercadopago.preferences.create(preference);
    const response = answer.body.id;
    const init_points = answer.body.init_point;
    console.log(answer, "answer")
    res.json({ response: response, init_points: init_points });
});

router.get('/success', async (req, res)=>{
    res.json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    })
})

router.post('/mail', async (req, res)=>{
    const { payment_id, mail, total, status, id } = req.body;
    try{    
        let user = await User.findOne({where: {id: id}})
        if(status === 'approved'){
        let message = success
        message = message.replace(("%mail%", user.mail), ("%payment_id%", payment_id), ("%total%", total))
        let emailApproved = transporter.sendMail( function (error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        if(status === 'rejected'){
            let message = rejected
            message = message.replace(("%mail%", user.mail), ("%payment_id%", payment_id), ("%total%", total))
            let emailRejected = transporter.sendMail(function (error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              })
        }
        if(status === 'pending'){
            let message = pending
            message = message.replace(("%mail%", user.mail), ("%payment_id%", payment_id), ("%total%", total))
            let emailPending = transporter.sendMail(function (error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              })
        }
        // res.send({message:"User is now subscribed"})
        res.json({
            Payment: req.query.payment_id,
            Status: req.query.status,
            MerchantOrder: req.query.merchant_order_id,
        });
    }}
    catch(error){res.send(error)}
})