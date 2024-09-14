const express = require('express');
const app = express();

app.get('/location', (req, res) => {
  const locationData = { latitude: 40.7128, longitude: -74.0060 }; // Coordenadas de ejemplo
  res.json(locationData);
});

app.listen(3000, () => {
  console.log('API corriendo en Azure');
});
