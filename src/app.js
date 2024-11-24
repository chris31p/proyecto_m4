const express = require('express');
const reservasRoutes = require('./routes/reservasRoutes.js');
const app = express();
const swaggerUI = require('swagger-ui-express');

app.use(express.json()); //Permite que express maneje el formato json en el body de las solicitudes
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(specs))
app.use('/api/reservas', (req, res, next) => {
    console.log('Solicitud recibida en /api/reservas'); // Depuración
    next(); // Continua al siguiente middleware
},reservasRoutes); //Definimos la ruta base para las reservas

module.exports = app;