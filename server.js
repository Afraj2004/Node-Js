const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Hotel. Please view the menu!');
});
const db = require('./db');

// Importing route modules
const hotelRoutes = require('./routes/hotelRoutes');
// Using route modules
app.use('/hotels', hotelRoutes);
const roomRoutes = require('./routes/roomRoutes');
app.use('/rooms', roomRoutes);
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);
const bookingRoutes = require('./routes/bookingRoutes');
app.use('/bookings', bookingRoutes);
const staffRoutes = require('./routes/staffRoutes');
app.use('/staff', staffRoutes);
const reviewRoutes = require('./routes/reviewRoutes');
app.use('/reviews', reviewRoutes);
const paymentRoutes = require('./routes/paymentRoutes');
app.use('/payments', paymentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

