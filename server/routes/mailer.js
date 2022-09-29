const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')

router.post('/', async (req, res) => {
    const { firstName, lastName, email, phone, numberOfPeople } = req.body
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    await transport.sendMail({
        from: email,
        to: 'omrilahyani@gmail.com',
        subject: "Customer - Contact Details",
        html: `<div className="email" style="
        border: 1px solid black;
        padding: 1.2rem;
        font-family: sans-serif;
        line-height: 2;
        font-size: 1.2rem; 
        ">
        <h2>${email} : מייל לקוח  </h2>
        <p>${numberOfPeople} : מספר אנשים </p>
        <p>  שם לקוח  : ${firstName + " " + lastName}   </p>
        <p>${phone} : מספר טלפון  </p>
         </div>
    `
    })
    res.send('success')
})

module.exports = router