const dotenv = require('dotenv');
const app = require('./app');

// Cargar las variables de entorno
dotenv.config();

// Puerto de la aplicación
const PORT = process.env.APP_PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
