import { Router } from 'express';

import MealController from '../controllers/meal.controller';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addSingleMeal);
router.get('/:id', MealController.getSingleMeal);
router.put('/:id', MealController.modifySingleMeal);

export default router;
