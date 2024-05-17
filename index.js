/** @format */

// Import packages
const cors = require('cors');
const express = require('express');
const hello = require('./routes/hello');

// Middlewares
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/hello', hello);

// connection
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening to port ${port}`));
