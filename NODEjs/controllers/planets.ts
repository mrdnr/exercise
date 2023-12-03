import { Request, Response } from 'express';


let planets: Planet[] = [
  { id: 1, name: 'Mercury' },
  { id: 2, name: 'Venus' },
  { id: 3, name: 'Earth' },

];

interface Planet {
  id: number;
  name: string;
}


export const getAll = (req: Request, res: Response): void => {
  res.json(planets);
};


export const getOneById = (req: Request, res: Response): void => {
  const planetId: number = parseInt(req.params.id, 10);
  const planet = planets.find((p) => p.id === planetId);

  if (planet) {
    res.json(planet);
  } else {
    res.status(404).json({ message: 'Gezegen bulunamadı' });
  }
};


export const create = (req: Request, res: Response): void => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: 'Gezegen adı zorunludur' });
    return;
  }

  const newPlanet: Planet = {
    id: planets.length + 1,
    name,
  };

  planets = [...planets, newPlanet];

  res.status(201).json(newPlanet);
};


export const updateById = (req: Request, res: Response): void => {
  const planetId: number = parseInt(req.params.id, 10);
  const { name } = req.body;

  const updatedPlanets = planets.map((planet) =>
    planet.id === planetId ? { ...planet, name } : planet
  );

  planets = updatedPlanets;

  res.json({ message: 'Gezegen başarıyla güncellendi' });
};

// ID'ye göre bir gezegeni sil
export const deleteById = (req: Request, res: Response): void => {
  const planetId: number = parseInt(req.params.id, 10);

  const updatedPlanets = planets.filter((planet) => planet.id !== planetId);

  if (updatedPlanets.length < planets.length) {
    planets = updatedPlanets;
    res.json({ message: 'Gezegen başarıyla silindi' });
  } else {
    res.status(404).json({ message: 'Gezegen bulunamadı' });
  }
};
