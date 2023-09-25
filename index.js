const nodemailer = require('nodemailer');

const readline = require('readline');

 

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});
rl.question('Recipient\'s Email: ', (recipientEmail) => {

    rl.question('Subject: ', (subject) => {
        rl.question('Message: ', (message) => {          

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'namitjain0620@gmail.com',
                    pass: 'fafq lont teao eieh'
                }
            });
            // Email data

            const mailOptions = {
                from: 'namitjain0620@gmail.com',
                to: recipientEmail,
                subject: subject,
                text: message
            };
            // Send the email

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
                rl.close();
            });
        });
    });
});