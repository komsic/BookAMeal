import MealService from '../services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();

    return res.json({
      status: 'success',
      data: allMeals,
    }).status(200);
  },
  addSingleMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);

    return res.json({
      status: 'success',
      data: createdMeal,
    }).status(200);
  },
  getSingleMeal(req, res) {
    const { id } = req.params;
    const queriedMeal = MealService.getSingleMeal(id);

    return res.json({
      status: 'success',
      data: queriedMeal,
    }).status(200);
  },
  modifySingleMeal(req, res) {
    const modifiedMeal = MealService.modifySingleMeal(req.params.id, req.body);

    return res.json({
      status: 'success',
      data: modifiedMeal,
    }).status(200);
  },
};

export default MealController;
