const mongoose = require('mongoose');

// const mongoURI = process.env.Local_MONGODB_URL;
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
console.log('MONGO_URI =', process.env.MONGO_URI);
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


db.on('disconnected', () => {
  console.log('Mongoose disconnected from DB');
});

module.exports = db;
