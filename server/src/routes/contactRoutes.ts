import {Router} from 'express';
import {ContactController} from '../controllers/ContactController';

const router = Router();

router.post('/', ContactController.create);
router.get('/', ContactController.getAll);
router.get('/:id', ContactController.getById);
router.delete('/:id', ContactController.delete);

export default router;
