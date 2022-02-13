import { Router } from 'express';
import CitizenController from '../controllers/citizen.controller';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello Lerna');
});

router.get('/citizens', async (req, res) => {
  const citizens = new CitizenController();

  res.send(await citizens.getCitizens());
});

export default router;
