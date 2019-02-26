import MealService from '../services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();

    if (allMeals.length === 0) {
      return res.json({
        status: 'successful but there is no meal in this list',
        data: allMeals,
      }).status(200);
    }

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

    if (Object.entries(queriedMeal).length === 0 && queriedMeal.constructor === Object) {
      return res.json({
        status: 'meal of this id does not exist',
        data: queriedMeal,
      }).status(200);
    }

    return res.json({
      status: 'success',
      data: queriedMeal,
    }).status(200);
  },
  modifySingleMeal(req, res) {
    const modifiedMeal = MealService.modifySingleMeal(req.params.id, req.body);
    if (modifiedMeal === undefined) {
      return res.json({
        status: 'meal of this id does not exist',
        data: {},
      }).status(200);
    }

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
