const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();

// Habilitar CORS para todo
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static('public')); // Asegúrate de que tus imágenes están aquí

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(8000, () => {
  console.log('Servidor HTTPS en https://localhost:8000');
});


app.use((req, res, next) => {
    console.log('Request URL:', req.url);
    next();
  });
  