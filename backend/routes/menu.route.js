import { Router } from 'express';

import MenuController from '../controllers/menu.controller';

const router = Router();

router.get('/', MenuController.getAllMenu);
router.put('/:id', MenuController.modifySingleMenuById);
router.get('/:id', MenuController.getSingleMenuById);

export default router;