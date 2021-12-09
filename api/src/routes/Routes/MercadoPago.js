const { Router } = require("express");
const router = Router();
const mercadopago = require('mercadopago')
const nodemailer = require('nodemailer');

mercadopago.configure({
    access_token: 'TEST-6388733552893649-120718-94cefa92328bbb6e61137a88f9d07b70-194185716'
  });

  // ACCESS TOKEN - TEST-6388733552893649-120718-94cefa92328bbb6e61137a88f9d07b70-194185716
  // Public Key - TEST-a696de80-c815-4492-bead-9c011112b90b
  // access token para usuarios - APP_USR-6388733552893649-120718-62f4163746f82234ad13632557821c2e-194185716
  // public key credencial real- APP_USR-9f808268-1ab7-42af-956f-15043288021f

  router.post('/mercadopago', async (req, res) => {
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
            success: 'https://pocket-fit.vercel.app/mercadopago/success',
            failure: 'https://pocket-fit.vercel.app/mercadopago/order',
            pending: 'https://pocket-fit.vercel.app/mercadopago/success',
        },
        auto_return: 'approved',
    };
    let answer = await mercadopago.preferences.create(preference);
    const response = answer.body.id;
    const init_points = answer.body.init_point;
    res.json({ response: response, init_points: init_points });
});

