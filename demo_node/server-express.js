const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo desde Express');
});

app.post('/', (req, res) => {
  console.log(req);
  res.send('Hola Mundo desde Express POST');
});

app.patch('/', (req, res) => {
  res.send('Hola Mundo desde Express PATCH');
});

app.listen(3000, () => {
  console.log(`Servidor corriendo en http://127.0.0.1:3000`);
});
