const { Router } = require("express");
const router = Router();
const mercadopago = require('mercadopago')

mercadopago.configure({
    access_token: 'TEST-6388733552893649-120718-94cefa92328bbb6e61137a88f9d07b70-194185716'
  });

  // ACCESS TOKEN - TEST-6388733552893649-120718-94cefa92328bbb6e61137a88f9d07b70-194185716
  // Public Key - TEST-a696de80-c815-4492-bead-9c011112b90b
  // access token para usuarios - APP_USR-6388733552893649-120718-62f4163746f82234ad13632557821c2e-194185716
  // public key credencial real- APP_USR-9f808268-1ab7-42af-956f-15043288021f

