const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/myShop' //myShop is our database name

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;
db.on('connected', ()=> {
    console.log('connected to MongoDB server');
});
db.on('error', (err)=> {
    console.log('MongoDB connection error');
});
db.on('disconnected', ()=> {
    console.log('MongoDB disconnected');
});
module.exports = db;