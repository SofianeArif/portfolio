import {Router} from "express";
import reviewRoutes from "./reviewRoutes";
import contactRoutes from "./contactRoutes";

const router = Router();

router.use('/review', reviewRoutes);
router.use('/contact', contactRoutes);

export default router;
