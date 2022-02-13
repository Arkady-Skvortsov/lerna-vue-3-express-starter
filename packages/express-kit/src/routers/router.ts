import { Router } from 'express';
import CitizenController from '../controllers/citizen.controller';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello Lerna');
});

router.get('/citizens', (req, res) => {
  const citizens = new CitizenController();

  res.send(citizens.getCitizens());
});

export default router;
