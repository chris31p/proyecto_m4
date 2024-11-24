const express = require('express');
const reservasRoutes = require('./routes/reservasRoutes.js');
const app = express();
const swaggerUI = require('swagger-ui-express');
const specs = require('../swagger/swagger.js');

app.use(express.json()); //Permite que express maneje el formato json en el body de las solicitudes
//Configuración del endpoint de Swagger UI
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(specs));

//Definir la base de rutas de la API
app.use('/', (req, res, next) => {
    res.send('Bienvenido a la API Biblioteca. Visita /api-docs para la documentación.');
    next(); // Continua al siguiente middleware
},reservasRoutes); //Definimos la ruta base para las reservas

module.exports = app;