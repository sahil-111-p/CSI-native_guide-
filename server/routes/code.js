const express = require('express');
const router = express.Router();
const CodeEntry = require('../models/CodeEntry');

// ── SSE client registry ────────────────────────────────────
// Map of res → true for every connected SSE client
const sseClients = new Set();

function broadcastToClients(data) {
  const payload = `data: ${JSON.stringify(data)}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(payload);
    } catch {
      sseClients.delete(client);
    }
  }
}

// ── GET /api/code — fetch all published entries ────────────
router.get('/', async (_req, res) => {
  try {
    const entries = await CodeEntry.find()
      .sort({ createdAt: -1 })
      .limit(20)
      .lean();
    res.json(entries);
  } catch (err) {
    console.error('GET /api/code error:', err);
    res.status(500).json({ error: 'Failed to fetch code entries.' });
  }
});

// ── GET /api/code/stream — SSE real-time connection ───────
router.get('/stream', (req, res) => {
  // SSE headers
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'X-Accel-Buffering': 'no', // Important for Nginx/Render proxies
  });
  res.flushHeaders();

  // Register this client
  sseClients.add(res);

  // Send initial heartbeat so browser knows connection is open
  res.write(': connected\n\n');

  // Heartbeat every 25s to keep proxies/load balancers from timing out
  const heartbeat = setInterval(() => {
    try {
      res.write(`data: ${JSON.stringify({ type: 'ping' })}\n\n`);
    } catch {
      clearInterval(heartbeat);
      sseClients.delete(res);
    }
  }, 25000);

  // Clean up when client disconnects
  req.on('close', () => {
    clearInterval(heartbeat);
    sseClients.delete(res);
  });
});

// ── POST /api/code — publish new code entry ───────────────
router.post('/', async (req, res) => {
  const { title, language, code, description } = req.body;

  if (!code || typeof code !== 'string' || !code.trim()) {
    return res.status(400).json({ error: 'Code is required.' });
  }

  try {
    const entry = await CodeEntry.create({
      title: title?.trim() || 'Untitled',
      language: language?.trim() || 'javascript',
      code, // preserve exact whitespace/indentation
      description: description?.trim() || '',
    });

    // Broadcast to all SSE clients immediately
    broadcastToClients({
      type: 'publish',
      ...entry.toJSON(),
    });

    console.log(`📡 Published "${entry.title}" (${entry.language}) — ${sseClients.size} client(s) notified`);

    res.status(201).json(entry);
  } catch (err) {
    console.error('POST /api/code error:', err);
    res.status(500).json({ error: 'Failed to publish code.' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  console.log('🗑️ DELETE request received:', id);

  try {
    const deletedEntry = await CodeEntry.findByIdAndDelete(id);

    if (!deletedEntry) {
      console.log('❌ Code entry not found:', id);

      return res.status(404).json({
        error: 'Code entry not found.',
      });
    }

    console.log('✅ Deleted:', deletedEntry.title);

    broadcastToClients({
      type: 'delete',
      id: deletedEntry._id.toString(),
    });

    res.json({
      success: true,
      message: 'Code deleted successfully.',
      id: deletedEntry._id.toString(),
    });

  } catch (err) {
    console.error('❌ DELETE /api/code error:', err);

    res.status(500).json({
      error: 'Failed to delete code.',
    });
  }
});

module.exports = router;
