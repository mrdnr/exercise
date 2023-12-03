import express from 'express';
import * as planetsController from '../controllers/planets.ts';

const router = express.Router();


router.get('/api/planets', planetsController.getAll);
router.get('/api/planets/:id', planetsController.getOneById);
router.post('/api/planets', planetsController.create);
router.put('/api/planets/:id', planetsController.updateById);
router.delete('/api/planets/:id', planetsController.deleteById);

export default router;
