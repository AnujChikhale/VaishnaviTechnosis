import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contact.js';

dotenv.config();
const app = express();
connectDB(process.env.MONGO_URI);

const allowedOrigins = [
  'https://vaishnavi-technosis.vercel.app',
  'https://vaishnavitechnosis.com',
  'https://www.vaishnavitechnosis.com'
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

app.use('/api/contact', contactRoutes);


app.get('/', (req, res) => res.send('🚀 Server is up and running'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.get('/api/ping', (req, res) => {
  res.status(200).send('pong');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌍 Server running on port ${PORT}`));
