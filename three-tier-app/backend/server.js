const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API is healthy' });
});

app.get('/users', async (req, res) => {
  try {
    await pool.query('CREATE TABLE IF NOT EXISTS visits (id SERIAL PRIMARY KEY, created_at TIMESTAMP DEFAULT NOW())');
    await pool.query('INSERT INTO visits DEFAULT VALUES');
    const result = await pool.query('SELECT COUNT(*) FROM visits');
    res.json({ message: 'Connected to PostgreSQL!', total_visits: result.rows[0].count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(4000, '0.0.0.0', () => console.log('Backend API listening on port 4000'));
