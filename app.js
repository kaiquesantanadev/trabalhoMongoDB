require('dotenv').config()
const express = require('express')
const app = express();
const userRoutes = require('./routes/routes')
const mongoose = require('mongoose')

const { MONGO_URL } = process.env

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);

mongoose.connect(MONGO_URL).then(() => {
    app.listen(3000);
    console.log('Conectado ao BD com sucesso! http://localhost:3000');
}).catch((err) => console.log(err));