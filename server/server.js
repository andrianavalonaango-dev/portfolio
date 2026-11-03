import express from 'express';
import cors from 'cors';
import projects from './data/projects.js';

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  'http://localhost:4200',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// En local seulement : sur Vercel, c'est la plateforme qui lance l'application
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`API disponible sur http://localhost:${PORT}`);
  });
}

export default app;