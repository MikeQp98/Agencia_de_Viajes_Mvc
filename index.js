import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';




const app = express();

// Conectar la base de Datos
db.authenticate()
  .then(() => console.log('Base de datos Conectada'))
  .catch((error) => console.log(error));

// Definir Puertos
const port = process.env.PORT || 4000;

// Habilitar Pug
app.set('view engine', 'pug');

// Obtener el año Actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombresitio = 'Agencia de Viajes';
  next();
});

// Agregar Body parser para leer datos del formulario, Esto siempre debe ir primero
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta Publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router);

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
