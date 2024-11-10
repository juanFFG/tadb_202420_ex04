const express = require('express');
const elementosRoutes = require('./src/routes/ElementoRoutes');
const compuestosRoutes = require('./src/routes/CompuestoRoutes');

const app = express();

// Middleware
app.use(express.json());

// Configuración de rutas
app.use('/api/elementos', elementosRoutes);
app.use('/api/compuestos', compuestosRoutes);

module.exports = app;
