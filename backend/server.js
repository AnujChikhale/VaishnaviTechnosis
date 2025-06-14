import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contact.js';

dotenv.config();
const app = express();
connectDB();

app.use(cors({ origin: 'https://vaishnavi-technosis.vercel.app', // your frontend domain
  credentials: true }));
app.use(express.json());

app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => res.send('🚀 Server is up and running'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌍 Server running on port ${PORT}`));
