import { Router } from 'express';

import UserController from '../controllers/user.controller';

const router = Router();

router.get('/', UserController.getAllUser);
router.post('/', UserController.setUpNewUser);
router.put('/:id', UserController.modifySingleUserById);
router.get('/:id', UserController.getSingleUserById);
router.post('/register', UserController.register);
router.post('/me', UserController.me);
router.post('/login', UserController.login);

export default router;
