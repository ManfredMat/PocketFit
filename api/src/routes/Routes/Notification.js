const { Router } = require("express");
const {
  sendNotification,
  turnOffNotifitation,
  turnOnNotifitation,
  getNotifications,
} = require("../Controllers/Notification");

const router = Router();

router.put("/notificationson", turnOnNotifitation);
router.put("/notificationsoff", turnOffNotifitation);
router.post("/message", sendNotification);
router.get("/all", getNotifications);

module.exports = router;
