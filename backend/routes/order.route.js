import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const router = Router();

router.get('/', OrderController.getAllOrder);
router.put('/:id', OrderController.modifyOrderById);
router.post('/', OrderController.makeNewOrder);

export default router;
