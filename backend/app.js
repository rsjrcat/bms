const express = require('express');
const cors = require('cors'); // ✅ Add this
const app = express();
const adminRoutes = require('./routes/adminRoutes');
const courseRoutes = require('./routes/courseRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');

require('dotenv').config();
require('./config/db')(); // connect DB


// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Allow frontend
  credentials: true // Optional: if using cookies/auth headers
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
