require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    };
    
    mongoose.connect(process.env.MONGO_CONNECTION_URL, connectionParams);
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    }).catch(err => {
        console.log('Connection failed ☹️☹️☹️☹️');
    });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;