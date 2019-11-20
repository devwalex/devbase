const express = require('express');
const dotenv = require('dotenv');

// ==== Route files Start
const bootcamps = require('./routes/bootcamps');
// ==== Route files End

dotenv.config({ path: 'config/config.env' });
const app = express();

// ==== Mount Routers Start
app.use('/api/v1', bootcamps);
// ==== Mount Routers End

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on ${PORT}`));
