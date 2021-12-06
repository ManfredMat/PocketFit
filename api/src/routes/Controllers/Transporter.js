const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pocketfitteam@gmail.com',
      pass: 'henryft18a'
    }
  });

const mailOptions = (email, modelEmail, subject) => {
    return ({
      from: 'pocketfitteam@gmail.com',
      to: email,
      subject: subject,
      html: modelEmail
    })
  };

  module.exports = {
    transporter,
    mailOptions
  }