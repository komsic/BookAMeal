import { Router } from 'express';

import MenuController from '../controllers/menu.controller';

const router = Router();

router.get('/', MenuController.fetchAllMenu);
router.post('/', MenuController.postMenu);

export default router;
