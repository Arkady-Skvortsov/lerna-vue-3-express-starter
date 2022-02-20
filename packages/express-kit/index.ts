import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
require('dotenv').config();

import router from './src/routers/router';

const app = express();

const PORT = 5500 ?? process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET',
    optionSuccessStatus: 200,
  })
);
app.use(helmet());
app.use(router);

app.listen(PORT, async () => {
  try {
    mongoose
      .connect(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@lerna-vue-3-express-sta.kxgo1.mongodb.net/lerna-vue-3-express?retryWrites=true&w=majority`
      )
      .then(() => console.log('Mongoose had been connected'))
      .catch((e) => console.log(e));

    console.log(`Server had been started at ${PORT} port`);
  } catch (e) {
    throw new Error(e);
  }
});
