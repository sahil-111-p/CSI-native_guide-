require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const codeRoutes = require('./routes/code');

const app = express();
const PORT = process.env.PORT || 3001;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// ── Middleware ─────────────────────────────────────────────
app.use(cors({
  origin: [
    CLIENT_URL,
    // Allow both Vercel preview and production URLs
    /\.vercel\.app$/,
    // Allow any localhost port for development
    /^http:\/\/localhost:\d+$/,
  ],
  methods: ['GET', 'POST'],
  credentials: false,
}));

app.use(express.json({ limit: '500kb' }));

// ── Routes ─────────────────────────────────────────────────
app.use('/api/code', codeRoutes);

// Health check (useful for Render cold-start detection)
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// ── 404 fallback ───────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// ── Connect to MongoDB then start ─────────────────────────
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not set. Please configure it in .env');
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`   CORS: allowing ${CLIENT_URL}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });
