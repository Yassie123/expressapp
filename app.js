import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

import homeRouter from './route/home.js';
import helloRouter from './route/hello.js';
import messagesRoute from './route/messages.js';

import usersRoute from './route/users.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Use JSON as global data format
app.use(express.static('public')); // Make public folder accessible

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event listeners for the connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/', homeRouter);
app.use('/api/hello', helloRouter);
app.use('/api/messages', messagesRoute);

app.use('/api/users', usersRoute);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});