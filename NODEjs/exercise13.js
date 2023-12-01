const express = require('express');
const Joi = require('joi');

const router = express.Router();


let planets = [
  { id: 1, name: 'Earth' },
  { id: 2, name: 'Mars' },
];


const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});


router.get('/api/planets', (req, res) => {
  res.json(planets);
});


router.get('/api/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);

  if (!planet) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  res.json(planet);
});


router.post('/api/planets', (req, res) => {
  const { error } = planetSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const newPlanet = {
    id: req.body.id,
    name: req.body.name,
  };

  planets.push(newPlanet);

  res.status(201).json({ msg: 'Planet created successfully' });
});


router.put('/api/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id);
  const updatedPlanetData = req.body;

  const { error } = planetSchema.validate(updatedPlanetData);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const existingPlanet = planets.find((p) => p.id === planetId);

  if (!existingPlanet) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  existingPlanet.name = updatedPlanetData.name;

  res.status(200).json({ msg: 'Planet updated successfully' });
});

// DELETE /api/planets/:id
router.delete('/api/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id);

  const existingPlanet = planets.find((p) => p.id === planetId);

  if (!existingPlanet) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  planets = planets.filter((p) => p.id !== planetId);

  res.status(200).json({ msg: 'Planet deleted successfully' });
});

module.exports = router;
