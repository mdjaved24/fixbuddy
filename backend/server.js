const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Routes
const userRoutes = require('./routes/users');
const workerRoutes = require('./routes/worker');
const loginRoute = require('./routes/login');
const workerServiceRoutes = require('./routes/workerServiceRoutes');
const queryRoutes = require('./routes/queryRoutes');
const serviceRoutes = require('./routes/serviceRoutes'); 
const passwordRoutes = require('./routes/passwordRoutes');
const showQueryRoutes = require('./routes/showQueryRoutes');

app.use('/api/users', userRoutes);
app.use('/api/worker', workerRoutes);
app.use('/api/worker-services', workerServiceRoutes);
app.use('/api/login', loginRoute);
app.use('/api/queries', queryRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/password', passwordRoutes);
app.use('/api/admin', showQueryRoutes);

// MongoDB connection string from environment variables
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
