class Reserva {
    constructor(id, hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, huespedes){
        this.id = id;
        this.hotel = hotel;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.tipo_habitacion = tipo_habitacion;
        this.estado = estado;
        this.huespedes = huespedes;
    }
}
//Creamos un array para listar las reservas
const reservas = [];

module.exports = {Reserva, reservas};