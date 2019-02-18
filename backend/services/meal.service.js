import dummyData from '../utils/dummyData';
import Meal from '../models/meal.model';

const MealService = {
  fetchAllMeals() {
    const validMeals = dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.price = meal.price;
      newMeal.quantity = meal.quantity;

      return newMeal;
    });

    return validMeals;
  },
  addMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;

    const mealToBeAdded = meal;
    mealToBeAdded.id = newId;
    dummyData.meals.push(mealToBeAdded);

    return mealToBeAdded;
  },
  getSingleMeal(id) {
    const requestedMeal = dummyData.meals.find(meal => meal.id === parseInt(id, 10));

    return requestedMeal || {};
  },
};

export default MealService;
