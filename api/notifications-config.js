var admin = require("firebase-admin");

var serviceAccount = require("./notifications-pocketfit-firebase-adminsdk-s28yl-4fc8a8b2f3.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://notifications-pocketfit-default-rtdb.firebaseio.com"
  });

module.exports.admin = admin