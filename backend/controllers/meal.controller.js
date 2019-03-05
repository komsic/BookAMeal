import MealService from '../services/meal.service';
import ResponseTransformer from '../utils/response.transformer';

class MealController {
  static async fetchAllMeals(req, res) {
    MealService.fetchAllMeals()
      .then((allMeals) => {
        if (allMeals.length === 0) {
          return res.status(200).json({
            status: 'successful but there is no meal in this list',
            data: allMeals,
          });
        }

        return res.status(200).json({
          status: 'success',
          data: allMeals,
        });
      });
  }

  static async addSingleMeal(req, res) {
    const newMeal = req.body;
    MealService.addMeal(newMeal)
      .then(createdMeal => res.status(201).json({
        status: 'success',
        data: createdMeal,
      }))
      .catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }

  static async getSingleMeal(req, res) {
    const { id } = req.params;
    MealService.getSingleMeal(id)
      .then((queriedMeal) => {
        if (Object.entries(queriedMeal).length === 0 && queriedMeal.constructor === Object) {
          return res.status(404).json({
            status: 'meal of this id does not exist',
            data: queriedMeal,
          });
        }
        return res.status(200).json({
          status: 'success',
          data: queriedMeal,
        });
      }).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }

  static async modifySingleMeal(req, res) {
    MealService.modifySingleMeal(req.params.id, req.body)
      .then((modifiedMeal) => {
        if (modifiedMeal === undefined) {
          return res.status(404).json({
            status: 'meal of this id does not exist',
            data: {},
          });
        }

        return res.status(200).json({
          status: 'success',
          data: modifiedMeal,
        });
      }).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }

  static async deleteSingleMeal(req, res) {
    MealService.deleteSingleMeal(parseInt(req.params.id, 10))
      .then((deletedMeal) => {
        if (Object.entries(deletedMeal).length === 0 && deletedMeal.constructor === Object) {
          return res.status(404).json({
            status: 'meal of this id does not exist',
            data: deletedMeal,
          });
        }

        return res.status(200).json({
          status: 'success',
          data: deletedMeal,
        });
      }).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }
}

export default MealController;
