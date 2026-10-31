import express from 'express';
import cors from 'cors';
import projects from './data/projects.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`API disponible sur http://localhost:${PORT}`);
});