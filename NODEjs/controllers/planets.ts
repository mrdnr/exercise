import { Request, Response } from 'express';
import { db } from '../db.js';


export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const planets = await db.any('SELECT * FROM planets');
    res.json(planets);
  } catch (error) {
    res.status(500).json({ message: 'No planets found' });
  }
};


export const getOneById = async (req: Request, res: Response): Promise<void> => {
  const planetId: number = parseInt(req.params.id, 10);

  try {
    const planet = await db.one('SELECT * FROM planets WHERE id=$1', planetId);
    res.json(planet);
  } catch (error) {
    res.status(404).json({ message: 'No planets found' });
  }
};


export const create = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: 'Planet name is mandatory' });
    return;
  }

  try {
    const newPlanet = await db.one('INSERT INTO planets (name) VALUES ($1) RETURNING *', name);
    res.status(201).json(newPlanet);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


export const updateById = async (req: Request, res: Response): Promise<void> => {
  const planetId: number = parseInt(req.params.id, 10);
  const { name } = req.body;

  try {
    await db.none('UPDATE planets SET name=$2 WHERE id=$1', [planetId, name]);
    res.json({ message: 'Planet successfully updated' });
  } catch (error) {
    res.status(404).json({ message: 'No planets found' });
  }
};


export const deleteById = async (req: Request, res: Response): Promise<void> => {
  const planetId: number = parseInt(req.params.id, 10);

  try {
    await db.none('DELETE FROM planets WHERE id=$1', planetId);
    res.json({ message: 'Planet successfully erased' });
  } catch (error) {
    res.status(404).json({ message: 'No planets found' });
  }
};
