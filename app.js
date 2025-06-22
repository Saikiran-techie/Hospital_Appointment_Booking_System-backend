
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());


app.use("/api", paymentRoutes);


//Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Hospital Management System API!');
});

//Later: Import routes here

module.exports = app;

