// Importar Express y Morgan
import express from 'express';
import morgan from 'morgan';
import {router} from './routes.js'; 


// Crear la aplicación de Express
const app = express();

// Establecer el puerto en el que se ejecutará la aplicación
app.set('port', 3000);

// Utilizar Morgan para registrar cada solicitud al servidor
app.use(morgan('dev'));

// Permitir que la aplicación entienda y maneje JSON
app.use(express.json());
app.use(router);

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(app.get('port'), () => {
  console.log(`Servidor en el puerto ${app.get('port')}`);
});
