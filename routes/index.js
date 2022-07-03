import express from 'express';
import {
  paginaInicio,
  paginaNosotros,
  paginaTestimoniales,
  paginaViajes,
  paginaDetalleViaje,
} from '../controllers/paginas.js';
import { guardartestimonial } from '../controllers/testimonialcontroller.js';

const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardartestimonial);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

export default router;
