import { Router } from 'express';
import { getDividas, createDivida, updateDivida } from '../controllers/dividaController';

const router: Router = Router();

router.get('/dividas', getDividas);
router.post('/dividas', createDivida);
router.put('/dividas/:id', updateDivida);

export default router;