const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/hotelDB';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose connected to Hotel_DB');
});

db.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected from DB');
});

module.exports = db;
