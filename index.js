import express from 'express';
import { getAllHandler } from './routes/mundiales/getAll.js';
import { getBySlugHandler } from './routes/mundiales/getBySlug.js';
import { getByCampeonHandler } from './routes/mundiales/getByCampeon.js';
import { getRandomHandler } from './routes/mundiales/getRandom.js';
import { searchHandler } from './routes/mundiales/search.js';
import { imagenesHandler } from './routes/imagenes.js';

const HOST = 'localhost';
const PORT = process.env.PORT || 4321;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    nombre: 'API Copa Mundial FIFA',
    version: '1.0.0',
    descripcion: 'API REST con información histórica de las ediciones de la Copa Mundial de la FIFA.',
    rutas: [
      'GET /mundiales             - Lista todas las ediciones',
      'GET /mundiales?include=full - Lista con todos los campos',
      'GET /mundial/:slug         - Detalle de una edición por slug',
      'GET /campeon/:pais         - Ediciones ganadas por un país',
      'GET /random                - Edición aleatoria',
      'GET /search/:text          - Búsqueda por texto (mín. 3 chars)',
      'GET /imagenes/*            - Imágenes de las ediciones',
    ],
  });
});

app.use('/imagenes', imagenesHandler);
app.get('/mundiales', getAllHandler);
app.get('/mundial/:slug', getBySlugHandler);
app.get('/campeon/:pais', getByCampeonHandler);
app.get('/random', getRandomHandler);
app.get('/search/:text', searchHandler);

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor ejecutándose en http://${HOST}:${PORT}`);
});
