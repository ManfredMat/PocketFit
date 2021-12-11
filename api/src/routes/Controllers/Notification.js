const axios = require("axios")

const sendNotification = async (req, res) => {
    const { title, message } = req.body
    try {
       await axios.post(`https://nativenotify.com/api/indie/notification`, {
          subID: 'fb5f05d5-dbd0-4425-ba0f-a176e866e30f',
          appId: 667,
          appToken: 'IONltqu86xwT3H5l2OSLtu',
          title: title,
          message: message
      });
      res.send({ message: "done" })
    } catch (error) {
      res.send(error)
    }
}

module.exports = {
    sendNotification
   };