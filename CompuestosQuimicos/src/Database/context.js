const mongoose = require('mongoose');

// Cargamos variales de entorno
require('dotenv').config();

const connectDB = async () => {
    await
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Conexión a MongoDB exitosa'))
        .catch((err) => console.error('Error conectando a MongoDB:', err));
};

module.exports = connectDB;