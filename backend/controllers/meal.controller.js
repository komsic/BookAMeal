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
    }).status(201);
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
  deleteSingleMeal(req, res) {
    const deletedMeal = MealService.deleteSingleMeal(parseInt(req.params.id, 10));

    return res.json({
      status: 'success',
      data: deletedMeal,
    }).status(206);
  },
};

export default MealController;
