// app.ts (veya uygun yer)

import express from 'express';
import bodyParser from 'body-parser';
import planetsRouter from './routes/planets';
import { setupDb } from './db';

const app = express();
const port = 3000;

// PostgreSQL bağlantısını yapılandır
setupDb();

// Ara yazılım
app.use(bodyParser.json());

// Rotalar
app.use('/api', planetsRouter); // Rotaları "/api" altında kullanmak istiyorsanız

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} üzerinde çalışıyor`);
});
