import express from 'express';
import bodyParser from 'body-parser';
import planetsRouter from './routes/planets';
import { setupDb } from './db';

const app = express();
const port = 3000;


setupDb();


app.use(bodyParser.json());


app.use('/api', planetsRouter);


app.listen(port, () => {
  console.log(`Server http://localhost:${port} working on`);
});
