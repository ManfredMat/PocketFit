const { Router } = require("express");
const router = Router();
const {createPayment, executePayment} = require('../Controllers/paypal')

router.post('/create_payment', createPayment)
router.get('/execute_payment', executePayment)

module.exports = router;