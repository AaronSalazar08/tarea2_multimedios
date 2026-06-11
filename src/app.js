// Aplicación principal
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Rutas básicas
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación!');
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});

module.exports = app;
