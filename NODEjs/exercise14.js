import express from 'express';
import bodyParser from 'body-parser';
import planetsRouter from './routes/planets';

const app = express();
const port = 3000;


app.use(bodyParser.json());


app.use(planetsRouter);


app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} üzerinde çalışıyor`);
});
