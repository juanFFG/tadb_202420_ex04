// server.js
const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./src/Database/context');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Conectar a la base de datos
connectDB();

// Puerto de la aplicación
const PORT = process.env.APP_PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`Documentación Swagger disponible en: http://localhost:${PORT}/api-docs`);
});
