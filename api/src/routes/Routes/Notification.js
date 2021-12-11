const { Router } = require("express");
const { sendNotification } = require("../Controllers/Notification")

const router = Router();

  
router.post('/message', sendNotification)

module.exports = router;