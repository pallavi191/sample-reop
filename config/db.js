const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connection is done with ${connection.connection.host}`);
    } catch (error) {
        console.log(`Database connection failed due to ${error}`);
    }
};

module.exports = connectDB;