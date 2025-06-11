const express = require('express');
const cors = require('cors'); // ✅ Add this
const app = express();
const adminRoutes = require('./routes/adminRoutes');
const courseRoutes = require('./routes/courseRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');

require('dotenv').config();
require('./config/db')(); // connect DB


// Enable CORS
const allowedOrigins = [
  'http://localhost:5173',
  'https://bms-two-bay.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/courses', courseRoutes); 
app.use('/api/contact', require('./routes/contact')); // Contact form route
app.use('/api/testimonials', testimonialRoutes);

app.get('/', (req, res) => res.send('API is running...'));

console.log('Cloudinary config:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET ? '***' : 'NOT SET',
});


module.exports = app;
