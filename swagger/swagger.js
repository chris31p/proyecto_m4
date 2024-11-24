const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API_Reservas',
            version: '1.0.0',
            description: 'Documentación de la API para la gestión de reservas de hoteles',
            contact: {
                name: 'Christopher Pesántez'
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Servidor Local'
                }
            ]
        }
    },
    apis: ['./src/routes/*.js']
};

const specs = swaggerJsdoc(options);
module.exports = specs;