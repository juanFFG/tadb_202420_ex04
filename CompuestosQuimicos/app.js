const express = require('express');
const connectDB = require('./src/Database/context');
const app = express();

// Conectar a MongoDB
connectDB();

//puerto
const port = process.env.APP_PORT || 5000;

app.listen(port , () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
