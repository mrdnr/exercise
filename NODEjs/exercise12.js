const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const asyncErrors = require('express-async-errors');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));

let planets = [
  {
    id: 1,
    name: 'Earth',
  },
  {
    id: 2,
    name: 'Mars',
  },
];

app.get('/planets', (req, res) => {
  res.json(planets);
});

app.get('/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);

  if (!planet) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  res.json(planet);
});

// asyncErrors(app);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal server error',
      stack: err.stack,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
