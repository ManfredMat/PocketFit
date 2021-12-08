const { Router } = require("express");
const {saveToken,handlePushTokens} =require("../Controllers/Notification")
    
const router = Router();


router.post('/token' , (req, res) => {
    saveToken(req.body.token.value);
    console.log(`Received push token, ${req.body.token.value}`);
    res.send(`Received push token, ${req.body.token.value}`);
  })
router.post('/message', (req, res) => {
    handlePushTokens(req.body.message);
    console.log(`Received message, ${req.body.message}`);
    res.send(`Received message, ${req.body.message}`);
  });

module.exports = router;