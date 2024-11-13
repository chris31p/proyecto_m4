const {reservas, Reserva} = require('../models/reservas');

//Operaciones CRUD
const crearReserva = (req, res) => {
    const {hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, huespedes} = req.body;
    const id = reservas.length + 1;
    const nuevaReserva = new Reserva(id, hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, huespedes);
    reservas.push(nuevaReserva);
    res.status(201).json(nuevaReserva);
};

const obtenerReservas = (req, res) => {
    res.json(reservas);
};

const obtenerReservaPorId = (req, res) => {
    const reserva = reservas.find(r => r.id === req.params.id);
    if(!reserva) return res.status(404).send('No se encuentra esta Reserva');
    res.json(reserva);
};

const actualizarReserva = (req, res) => {
    const reserva = reservas.find(r => r.id === req.params.id);
    if(!reserva) return res.status(404).send('No se encuentra esta Reserva');
    Object.assign(reserva, req.body);
    res.json(reserva);
};

const eliminarReserva = (req, res) => {
    const index = reservas.findIndex(r => r.id === req.params.id);
    if(index === -1) return res.status(404).send('No se encuentra esta Reserva');
    reservas.splice(index, 1);
    res.status(204).send();
};

//Operaciones de filtros
const filtroReservas = (req, res) => {
    let filtro = reservas;
    const {hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, huespedes} = req.query;

    if(hotel) filtro = filtro.filter(r => r.hotel === hotel);
    if(fecha_inicio && fecha_fin){
        filtro = filtro.filter(r =>
            r.fecha_inicio >=fecha_inicio && r.fecha_fin <= fecha_fin
        );
    }
    if(tipo_habitacion) filtro = filtro.filter(r => r.tipo_habitacion === tipo_habitacion);
    if(estado) filtro = filtro.filter(r => r.estado === estado);
    if(huespedes) filtro = filtro.filter(r => r.huespedes == huespedes);

    res.json(filtro);
};

module.exports = {crearReserva, obtenerReservas, obtenerReservaPorId, actualizarReserva, eliminarReserva, filtroReservas};