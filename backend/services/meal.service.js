import dummyData from '../utils/dummyData';
import db from '../db/models';

const { Meal } = db;

class MealService {
  static async fetchAllMeals() {
    try {
      return await Meal.findAll();
    } catch (e) {
      const error = 'An error just occurred while fetching the meals';
      throw error;
    }
  }

  static async addMeal(meal) {
    try {
      const mealLength = await dummyData.meals.length;
      const lastId = await dummyData.meals[mealLength - 1].id;
      const newId = lastId + 1;

      const mealToBeAdded = meal;
      mealToBeAdded.id = newId;
      await dummyData.meals.push(mealToBeAdded);

      return mealToBeAdded;
    } catch (e) {
      const error = 'An error just occurred while creating a meal';
      throw error;
    }
  }

  static async getSingleMeal(id) {
    try {
      return await Meal.findByPk(id);
    } catch (e) {
      const error = 'An error just occurred while getting the meal';
      throw error;
    }
  }

  static async modifySingleMeal(id, modifiedMeal) {
    try {
      const mealToBeModify = await dummyData.meals.find(meal => meal.id === parseInt(id, 10));
      if (mealToBeModify != null) {
        dummyData.meals[modifiedMeal.id - 1] = modifiedMeal;
      }

      return dummyData.meals[modifiedMeal.id - 1];
    } catch (e) {
      const error = 'An error just occurred while updating the meal';
      throw error;
    }
  }

  static async deleteSingleMeal(id) {
    try {
      return await id <= dummyData.meals.length ? dummyData.meals.splice(id - 1, 1)[0] : {};
    } catch (e) {
      const error = 'An error just occurred while deleting the meal';
      throw error;
    }
  }
}

export default MealService;
