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

//Definimos la ruta a cada función del controller:
rutas.post('/', crearReserva); //Creamos una nueva reserva
rutas.get('/', filtroReservas); //Aplicamos un filtro a las reservas
rutas.get('/:id', obtenerReservaPorId); //Obtenemos una reserva específica por ID
rutas.put('/:id', actualizarReserva); //Actualizamos una reserva específica
rutas.delete('/:id', eliminarReserva); //Eliminamos una reserva específica

module.exports = rutas; //Usamos module para exportar las rutas
