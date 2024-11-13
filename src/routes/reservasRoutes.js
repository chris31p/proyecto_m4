const express = require('express');
const rutas = express.Router();
const reservasController = require('../controllers/reservasController.js');

// Ruta para filtrar reservas (usa el método GET)
rutas.get('/', reservasController.filtroReservas);

// Otras rutas CRUD para reservas
rutas.post('/', reservasController.crearReserva);
rutas.get('/:id', reservasController.obtenerReservaPorId);
rutas.put('/:id', reservasController.actualizarReserva);
rutas.delete('/:id', reservasController.eliminarReserva);

module.exports = rutas; //Usamos module para exportar las rutas
