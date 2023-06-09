import { Viaje } from "../model/Viaje.js";
import { Testimonial } from '../model/Testimoniales.js';

const paginaInicio = async (req, res) => {
    try {
        const promiseDB = [];

        promiseDB.push(Viaje.findAll({limit:3}));
        promiseDB.push(Testimonial.findAll({limit:3}));

        const resultado = await Promise.all( promiseDB );

        //otra forma de hacerlo que se pasaria viajes y testimoniales a la vista
        /*const [viajes, testimoniales] = await Promise.all([
            Viaje.findAll({ limit: 3 }),
            Testimoniales.findAll({ limit: 3 }),
          ]);*/

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
        
    } catch (error) {
        console.log(error);
    }
    
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => {
    //consultar BD 
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Viajes',
        viajes
    });
};

//muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {    

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne( { where : { slug } } );

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
    
};

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });

    } catch (error) {
        console.log(error);
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales
}