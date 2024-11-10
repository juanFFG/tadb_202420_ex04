const express = require('express');
const connectDB = require('./src/Database/context');

const app = express();

// Conectar a MongoDB
connectDB();

app.listen(process.env.APP_PORT || 3000, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.APP_PORT || 3000}`);
});
