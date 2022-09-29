const express = require('express');
const router = express.Router();
const { User } = require('../model/User.model')
const bcrypt = require('bcrypt')
const _ = require('lodash')
const Joi = require('joi')
require('dotenv/config');
const jwt = require('jsonwebtoken')
router.post('/login', async (req, res) => {
    console.log(req.session);
    const { error } = validate(req.body);
    if (error) {
        console.log('from login controller');
        res.status(400).json(error.details[0].message)
        return
    }

    const adminUser = await User.findOne({ email: req.body.email })
    if (!adminUser) {
        res.status(400).send('Invalid mail or password')
        return
    }
    const isValidPassword = await bcrypt.compare(
        req.body.password,
        adminUser.password
    )
    if (!isValidPassword) {
        res.status(400).send("Invalid Email or password")
        return
    }
    if (adminUser) {
        const token = jwt.sign({
            email: adminUser.email
        }, process.env.TOKEN_KEY)
        res.status(200).send(token)
    }

    function validate(data) {
        const schema = Joi.object({
            email: Joi.string().min(6).max(255).email().required(),
            password: Joi.string().min(6).max(1000).required()
        })
        return schema.validate(data)
    }
})


router.post('/register', async (req, res) => {

    console.log(req.body);
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email: email })


        if (user) {
            return res.status(403).json({ message: 'User Already registrerd' })
        }
        user = new User({
            email,
            password,
        })

        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(user.password, salt)
        await user.save()
        res.send(_.pick(user, ['_id', 'email']))
    } catch (e) {
        res.send('Something went wrong')
    }

})

router.post('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (error) throw error;
    })
})

module.exports = router;