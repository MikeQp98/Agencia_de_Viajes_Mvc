import { Testimonial } from '../models/Testimoniales.js';

const guardartestimonial = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const errores = [];
  // Validar el formulario

  if (nombre.trim() === '') {
    errores.push({ mensaje: 'El nombre esta vacio' });
  }
  if (correo.trim() === '') {
    errores.push({ mensaje: 'El mensaje esta vacio' });
  }
  if (mensaje.trim() === '') {
    errores.push({ mensaje: 'El correo esta vacio' });
  }

  if (errores.length > 0) {
    /// Consulta Los testimoniales que hay
    const testimoniales = await Testimonial.findAll();

    res.render('testimoniales', {
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales,
    });
  } else {
    // Informacion que se va a almacenar en la base de Datos.

    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });

      res.redirect('/testimoniales');
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardartestimonial };
