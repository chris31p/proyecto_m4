require('dotenv').config();
const app = require('./src/app.js');

app.get('/', (req, res) => {
    res.send('Bienvenido a la API Reservas. Visita /api-docs para la documentación.');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});