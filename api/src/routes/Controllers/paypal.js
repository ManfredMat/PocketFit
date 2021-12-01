const cors = require('cors')
const request = require('request')
require("dotenv").config();
const express = require("express");
const server = express();
const { ID_PAYPAL, PAYPAL_SECRET, PAYPAL_API } = process.env;

server.use(cors());

const auth = {user:ID_PAYPAL, pass:PAYPAL_SECRET}

const createPayment = async (req, res, error)=>{
	const body = {
		intent: 'CAPTURE',
		purchase_units:[{
			amount:{
				currency_code: 'ARG',
				value: '150'
				}
		}],
		application_context: {
				brand_name: 'PocketFit',
				landing_page: 'NO_PREFERENCE', // si esta fogueado lo lleva a pagar o si no lo leva a iniciar sesión
				user_action: 'PAY_NOW',
				return_url: 'http://localhost:3000/api/execute-payment',
				cancel_url: 'http://localhost:3000/api/cancel-payment'
				}
			}
	request.post(`${PAYPAL_API}/v2/checkout/orders`,{
	auth,
	body,
	json: true}, 
	(error, res) =>{
	res.json({ data: res.body})	
})
}


const executePayment = (req, res)=>{
	const token = req.query.token

	req.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
		auth,
		body: {},
		json: true
		},
		(error, res)=>{
		res.json({data: res.body})
		})
}

module.exports={executePayment, createPayment }


