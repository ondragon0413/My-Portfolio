const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'Blue Dragon', // replace with your Gmail username
        pass: 'onedr@gon0413' // replace with your Gmail password
    }
});

// create a function to send an email
function sendEmail(to, subject, message) {
    // send mail with defined transport object
    let info = transporter.sendMail({
        from: 'Blue Dragon <passiondragon0413@gmail.com>', // replace with your name and Gmail username
        to,
        subject,
        text: message
    });

    console.log('Message sent: %s', info.messageId);
}

// export the sendEmail function
module.exports = sendEmail;