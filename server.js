const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: 'config/config.env' });

// Connect to database
connectDB();

// ==== Route files Start
const bootcamps = require('./routes/bootcamps');
// ==== Route files End

const app = express();

// ==== Dev logging middleware Start
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// ==== Dev logging middleware End

// ==== Mount Routers Start
app.use('/api/v1', bootcamps);
// ==== Mount Routers End

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on ${PORT}`));
