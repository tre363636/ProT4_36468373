import { Router } from 'express';
import { libros } from './controller.js';

export const router = Router();

router.get('/libros', libros.getAll);
router.post('/libros', libros.add);
router.delete('/libros', libros.delete);

export default router;  // Añadir esta línea para exportar el router
