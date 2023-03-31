import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define('testimoniales', { //testimoniales es el nombre de la tabla en la base de datos
    // este objeto tendrá los nombre de las columnas y sus tipos de datos
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});