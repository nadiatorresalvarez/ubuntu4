const express = require('express');
const app = express();

const PORT = 9000;

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la página principal!');
});

app.get('/clientes', (req, res) => {
  res.send('Aquí se mostraría la lista de clientes.');
});

app.get('/productos', (req, res) => {
  res.send('Aquí se mostraría la lista de productos.');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

