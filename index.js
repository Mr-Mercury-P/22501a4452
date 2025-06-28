const express = require('express');
const mongoose = require('mongoose');
const urlRoutes = require('./route/urlRoutes.js');
require('dotenv').config();

const connectDB = require('./config/db.js');
connectDB();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use('/', urlRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});