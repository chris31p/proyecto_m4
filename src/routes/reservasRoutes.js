const express = require('express');
const rutas = express.Router();
const reservasController = require('../controllers/reservasController.js');

//CRUD para reservas
/**
 * @swagger
 * components:
 *   schemas:
 *     API_Reservas:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         hotel:
 *           type: string
 *           description: Nombre del hotel
 *         fecha_inicio:
 *           type: string
 *           description: Fecha de inicio de la reserva
 *         fecha_fin:
 *           type: string
 *           description: Fecha final de la reserva
 *         tipo_habitacion:
 *           type: string
 *           description: Tipo de la habitacion
 *         estado:
 *           type: string
 *           description: Estado de la reserva
 *         huespedes:
 *           type: integer
 *           description: Cantidad de huespedes
 *       ejemplo:
 *         id: 1
 *         hotel: Atacama Suites Hotel
 *         fecha_inicio: 2024/11/04
 *         fecha_fin: 2024/11/05
 *         tipo_habitacion: Doble
 *         estado: Confirmado
 *         huespedes: 2
 */

/**
 * @swagger
 * tags:
 *   name: reservas
 *   description: API para la gestión de reservas de hotel
 */

// Obtener un listado de todas las reservas
/**
 * @swagger
 * /:
 *   get:
 *     summary: Listar todas las reservas
 *     tags: [reservas]
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/API_Reservas'
 */
rutas.get('/', reservasController.obtenerReservas);

// Crear nueva reserva
/**
 * @swagger
 * /:
 *   post:
 *     summary: Crear una nueva reserva
 *     tags: [reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/API_Reservas'
 *     responses:
 *       201:
 *         description: La reserva fue creada exitosamente!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/API_Reservas'
 *       404:
 *         description: No se pudo crear la reserva
 */
rutas.post('/', reservasController.crearReserva);

// Ruta para filtrar reservas:
/**
 * @swagger
 * /filtrar:
 *   get:
 *     summary: Filtrar reservas por parámetros
 *     tags: [reservas]
 *     parameters:
 *       - in: query
 *         name: hotel
 *         schema:
 *           type: string
 *         description: Nombre del hotel
 *       - in: query
 *         name: fecha_inicio
 *         schema:
 *           type: string
 *         description: Fecha de inicio de la reserva
 *       - in: query
 *         name: fecha_fin
 *         schema:
 *           type: string
 *         description: Fecha final de la reserva
 *       - in: query
 *         name: tipo_habitacion
 *         schema:
 *           type: string
 *         description: Tipo de habitacion
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *         description: Estado de la reserva
 *       - in: query
 *         name: huespedes
 *         schema:
 *           type: integer
 *         description: Cantidad de huespedes
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/API_Reservas'
 *       404:
 *         description: Reserva no encontrada!
 */
rutas.get('/filtrar', reservasController.filtroReservas);

// Obtener una reserva por su ID
/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Obtener una reserva por su id
 *     tags: [reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ingrese el ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva encontrada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/API_Reservas'
 *       404:
 *         description: Reserva no encontrada!
 */
rutas.get('/:id', reservasController.obtenerReservaPorId);

// Actualizar información de una reserva específica
/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Actualizar una reserva por su id
 *     tags: [reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ingrese el ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/API_Reservas'
 *     responses:
 *       200:
 *         description: La reserva fue actualizada!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/API_Reservas'
 *       404:
 *         description: No se encontró la reserva
 */
rutas.put('/:id', reservasController.actualizarReserva);

// Eliminar una reserva específica
/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Eliminar una reserva por su id
 *     tags: [reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ingrese el ID de la reserva a eliminar
 *     responses:
 *       200:
 *         description: Esta reserva fue eliminada exitosamente!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/API_Reservas'
 *       404:
 *         description: No existe esta reserva
 */
rutas.delete('/:id', reservasController.eliminarReserva);

module.exports = rutas; //Usamos module para exportar las rutas
