import express from 'express';
import gastoRoutes from './app/routes/usuarioRoutes.mjs';

const port = 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.static('cliente')); 

// Rutas
app.use('/', gastoRoutes);  

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});