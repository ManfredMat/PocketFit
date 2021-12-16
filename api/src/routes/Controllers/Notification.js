const axios = require("axios");
const { User, Notification } = require("../../db");

const turnOnNotifitation = async (req, res) => {
  let { id } = req.body;
  try {
    let user = await User.findOne({ where: { id: id } });
    user["notifications"] = true;
    await user.save();
    res.send({ message: "Notifications have been turned on" });
  } catch (error) {
    res.send(error);
  }
};

const turnOffNotifitation = async (req, res) => {
  let { id } = req.body;
  try {
    let user = await User.findOne({ where: { id: id } });
    user["notifications"] = false;
    await user.save();

    res.send({ message: "User is now unsubscribed" });
  } catch (error) {
    res.send(error);
  }
};

const sendNotification = async (req, res) => {
  const { title, message } = req.body;
  try {
    await Notification.create({ title: title, message: message });
    await User.findAll({ where: { notifications: true } });
    await axios.post(`https://nativenotify.com/api/indie/notification`, {
      subID: User.id,
      appId: 667,
      appToken: "IONltqu86xwT3H5l2OSLtu",
      title: title,
      message: message,
    });
    res.send({ message: "done" });
  } catch (error) {
    res.send(error);
  }
};

const getNotifications = async (req, res) => {
  try {
    let allNotifications = await Notification.findAll();

    res.send(allNotifications);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  sendNotification,
  turnOffNotifitation,
  turnOnNotifitation,
  getNotifications,
};
