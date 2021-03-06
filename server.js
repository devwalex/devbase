const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: 'config/config.env' });

// Connect to database
connectDB();

// ==== Route files Start
const bootcamps = require('./routes/bootcamps');
// ==== Route files End

const app = express();

// Body Parser
app.use(express.json());

// ==== Dev logging middleware Start
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// ==== Dev logging middleware End

// ==== Mount Routers Start
app.use('/api/v1', bootcamps);
// ==== Mount Routers End
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on ${PORT}`));
