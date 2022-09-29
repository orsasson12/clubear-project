const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const multer = require('./routes/processImage')
const cors = require('cors')
const mailer = require('./routes/mailer')
require('dotenv/config');
app.use('/Images', express.static('Images'))



app.use(bodyParser.json());
app.use(multer.single('image'))
app.use(cors({
    origin: 'https://clubear.co.il'
}))
app.get("/health-check", (req, res) => {
    res.send('hello')
})


const clubRoute = require('./routes/clubRoute')
const loginRoute = require('./routes/loginRoute')


app.use('/', clubRoute)
app.use('/', loginRoute)
app.use('/', mailer)








mongoose.connect(
    process.env.DB_CONNECTION, () => {
        console.log("Connected to database"
        );
    })



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
})


