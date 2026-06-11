import express from 'express';

const HOST = 'localhost';
const PORT = process.env.PORT || 4321;

const app = express();
app.use(express.json());

// Archivos estáticos (imágenes de cada edición)
app.use('/imagenes', express.static('public/imagenes'));

// Ruta raíz: información del API
app.get('/', (req, res) => {
  res.json({
    nombre: 'API Copa Mundial FIFA',
    version: '1.0.0',
    descripcion: 'API REST con información histórica de las ediciones de la Copa Mundial de la FIFA.',
    rutas: [
      'GET /mundiales             - Lista todas las ediciones',
      'GET /mundial/:slug         - Detalle de una edición por slug',
      'GET /campeon/:pais         - Ediciones ganadas por un país',
      'GET /random                - Edición aleatoria',
      'GET /search/:text          - Búsqueda por texto (mín. 3 chars)',
      'GET /imagenes/*            - Imágenes de las ediciones',
    ],
  });
});

// 404 para rutas no definidas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor ejecutándose en http://${HOST}:${PORT}`);
});
