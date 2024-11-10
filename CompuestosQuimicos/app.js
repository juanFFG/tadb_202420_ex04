const express = require('express');
const { swaggerUi, swaggerDocs } = require('./swagger');
const elementosRoutes = require('./src/routes/ElementoRoutes');
const compuestosRoutes = require('./src/routes/CompuestoRoutes');

const app = express();

// middleware para parsear el body de las peticiones
app.use(express.json());

// Configuración de la documentación para Swagger en la ruta /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas de la API
app.use('/api/elementos', elementosRoutes);
app.use('/api/compuestos', compuestosRoutes);

module.exports = app;
