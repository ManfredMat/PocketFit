const { Router } = require("express");
const { sendNotification, turnOffNotifitation, turnOnNotifitation } = require("../Controllers/Notification")

const router = Router();

router.put('/notificationson' , turnOnNotifitation)
router.put('/notificationsoff' , turnOffNotifitation) 
router.post('/message', sendNotification)

module.exports = router;