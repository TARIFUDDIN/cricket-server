import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRoutes);


mongoose.connect('mongodb://localhost:27017/cricketapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
