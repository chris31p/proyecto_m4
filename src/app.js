const express = require('express');
const reservasRoutes = require('./routes/reservasRoutes');
const app = express();

app.use(express.json());
app.use('/api/reservas', reservasRoutes);

module.exports = app;