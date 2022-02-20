import { Router } from 'express';
import CitizenController from '../controllers/citizen.controller';
import CitiesController from '../controllers/cities.controller';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello Lerna');
});

router.get('/citizens', async (req, res) => {
  const citizensController = new CitizenController();

  res.send(await citizensController.getCitizens());
});

router.get('/cities', async (req, res) => {
  const citiesController = new CitiesController();

  res.send(await citiesController.getCities());
});

export default router;
