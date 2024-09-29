import { Router } from 'express';
import { ReviewController } from '../controllers/ReviewController';

const router = Router();

router.post('/', ReviewController.create);
router.get('/', ReviewController.getAll);
router.get('/approved', ReviewController.getAllApproved);
router.get('/:id', ReviewController.getById);
router.put('/:id', ReviewController.update);
router.delete('/:id', ReviewController.delete);

export default router;
