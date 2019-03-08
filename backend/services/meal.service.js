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
      return await Meal.create(meal);
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
      const updatedMenu = await Meal.update(modifiedMeal,
        { returning: true, where: { id } });

      return updatedMenu[1][0];
    } catch (e) {
      const error = 'An error just occurred while updating the meal';
      throw error;
    }
  }

  static async deleteSingleMeal(id) {
    try {
      return await Meal.destroy({ returning: true, where: { id } });
    } catch (e) {
      const error = 'An error just occurred while deleting the meal';
      throw error;
    }
  }
}

export default MealService;
