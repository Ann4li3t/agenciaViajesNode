import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//conectar base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch( error => console.log(error))

const puerto = process.env.Port || 4001;

//habilitar pug
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next(); // lo que hace es ir al siguente middleware
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

//definir carpeta publica
app.use(express.static('public'))

//agregar router
app.use('/', router);

app.listen(puerto, () => {
    console.log(`El servidor está funcionando por el puerto ${puerto}`);
})