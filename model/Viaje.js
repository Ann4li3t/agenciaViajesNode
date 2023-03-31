import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Viaje = db.define('viajes', { //viajes es el nombre de la tabla en la base de datos
    // este objeto tendrá los nombre de las columnas y sus tipos de datos
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
});