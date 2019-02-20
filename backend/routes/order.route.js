import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const router = Router();

router.get('/', OrderController.getAllOrder);
router.put('/:id', OrderController.modifyOrderById);

export default router;
