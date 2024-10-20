const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routesCreate = require('./Routes/routesCreate');
const routesGet = require('./Routes/routesGet');
const routesUpdate = require('./Routes/routesUpdate');
const routesDelete = require('./Routes/routesDelete');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3500;

app.use(bodyParser.json());



mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/routes', routesCreate);
app.use('/routes', routesGet);
app.use('/routes', routesDelete);
app.use('/routes', routesUpdate);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
