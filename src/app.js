const express = require('express');
const reservasRoutes = require('./routes/reservasRoutes.js');
const app = express();
const swaggerUI = require('swagger-ui-express');
const specs = require('../swagger/swagger.js');

app.use(express.json()); //Permite que express maneje el formato json en el body de las solicitudes

// Ruta raíz para el mensaje de bienvenida
app.get('/', (req, res) => {
    res.send('BIENVENIDO A LA API DE RESERVAS. Visita /api-docs para la documentación.');
});

//Configuración del endpoint de Swagger UI
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(specs));

//Definir la base de rutas de la API
app.use('/api/reservas', (req, res, next) => {
    console.log('Solicitud recibida en /api/reservas'); // Depuración
    next(); // Continua al siguiente middleware
},reservasRoutes); //Definimos la ruta base para las reservas

module.exports = app;