const express = require('express');
const {
    crearReserva,
    obtenerReservas,
    obtenerReservaPorId,
    actualizarReserva, 
    eliminarReserva,
    filtroReservas
} = require('../controllers/reservasController');
const rutas = express.Router();

rutas.post('/', crearReserva);
rutas.get('/', filtroReservas);
rutas.get('/:id', obtenerReservaPorId);
rutas.put('/:id', actualizarReserva);
rutas.delete('/:id', eliminarReserva);

module.exports = rutas;
