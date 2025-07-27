const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '.env' ) });

// Database connection
const connectDB = require('./config/db');
connectDB();

// Routes
app.use('/api', require('./routes'));

// Start App
const PORT = process.env.PORT || 3040;
const server = app.listen(
    PORT, function () {
        console.log("Server is running on PORT: ", PORT);
    }
)