import { Testimonial } from '../model/Testimoniales.js';

const guardarTestimonial = async (req, res) => {
    
    const { nombre, correo, mensaje } = req.body;
    
    let errorNombre = '';
    let errorCorreo = '';
    let errorMensaje = '';
    let errores = false;

    if (nombre.trim() === '') {
        errorNombre = 'El nombre no puede estar vacio.';
        errores = true;
    }

    if (correo.trim() === '') {
        errorCorreo = 'El correo no puede estar vacio.';
        errores = true;
    }

    if (mensaje.trim() === '') {
        errorMensaje = 'El mensaje no puede estar vacio.';
        errores = true;
    }

    if (errores) {
        //conultar los testimoniales existentes
        const testimoniales = await Testimonial.findAll();
        //mostrar la vista con los errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales,
            errorNombre,
            errorCorreo,
            errorMensaje,
            nombre,
            correo,
            mensaje
        });
    } else {        
        //almacenar en la base de datos        
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }   
}

export {guardarTestimonial}