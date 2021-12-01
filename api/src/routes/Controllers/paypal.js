const cors = require('cors')
const request = require('request')
require("dotenv").config();
const express = require("express");
const server = express();
const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET} = process.env;
const axios = require('axios')
server.use(cors());

const createOrder = async (req, res) => {
	try {
	  const order = {
		intent: "CAPTURE",
		purchase_units: [
		  {
			amount: {
			  currency_code: "USD",
			  value: "105.70",
			},
		  },
		],
		application_context: {
		  brand_name: "mycompany.com",
		  landing_page: "NO_PREFERENCE",
		  user_action: "PAY_NOW",
		  return_url: 'localhost:3001/api/paypal/capture-order',
		  cancel_url: 'localhost:3001/api/paypal/cancel-payment',
		},
	  };
  
	  const params = new URLSearchParams();
	  params.append("grant_type", "client_credentials");
  
	  const {
		data: { access_token },
	  } = await axios.post(
		"https://api-m.sandbox.paypal.com/v1/oauth2/token",
		params,
		{
		  headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		  },
		  auth: {
			username: PAYPAL_API_CLIENT,
			password: PAYPAL_API_SECRET,
		  },
		}
	  );
  
	  console.log(access_token);
  

	  const response = await axios.post(
		`${PAYPAL_API}/v2/checkout/orders`,
		order,
		{
		  headers: {
			Authorization: `Bearer ${access_token}`,
		  },
		}
	  );
  
	  console.log(response.data);
  
	  return res.json(response.data);
	} catch (error) {
	  console.log(error.message);
	  return res.status(500).json("Something goes wrong");
	}
  };


const captureOrder = async (req, res)=>{
	const {token, PayerID} = req.query
	try{
		const response = await axios.post(
			`${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
			{},
			{
			  auth: {
				username: ID_PAYPAL,
				password: PAYPAL_SECRET,
			  },
			}
		  );
		  console.log(response)
	}
	catch(error){
		res.send(error)
	}
}

const cancelPayment = async (req, res)=>{
	try{

	}
	catch{
		
	}
}

module.exports={createOrder, captureOrder, cancelPayment}


