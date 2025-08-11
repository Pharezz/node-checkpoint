const nodemailer = require('nodemailer');

// Replace with your own email service and credentials
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oguegbuikechukwu@gmail.com',
    
    pass: 'hdkb rvhp qjtx tbaq',
  }
});

let mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello! This is a test email sent from Node.js',
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error('Error sending email:', err);
  } else {
    console.log('Email sent:', info.response);
  }
});
