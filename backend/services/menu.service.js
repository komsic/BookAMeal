import db from '../db/models';

const { Meal } = db;

class MenuService {
  static async fetchAllMenu() {
    try {
      return await Meal.findAll({
        where: {
          inMenu: true,
        },
        include: {
          model: db.Order,
          as: 'Orders',
        },
      });
    } catch (e) {
      console.log(`###################: ERROR--- ${e}`);
      const error = 'An error just occurred while fetching the menu';
      throw error;
    }
  }

  static async postMenu(meals, userId) {
    try {
      const oldMenuMeals = await Meal.findAll({
        where: {
          inMenu: true,
          userId,
        },
      });

      MenuService.updateMealsMenu(oldMenuMeals, false);
      MenuService.updateMealsMenu(meals, true);

      return await Meal.findAll({
        where: {
          inMenu: true,
        },
      });
    } catch (e) {
      console.log(`###################: ERROR--- ${e}`);
      const error = 'An error just occurred while posting the menu';
      throw error;
    }
  }

  static updateMealsMenu(meals, isMenu) {
    meals.forEach((meal) => {
      MenuService.updateMealMenu(meal, isMenu);
    });
  }

  static async updateMealMenu(meal, isMenu) {
    try {
      meal.then((m) => {
        console.log(m);

        // eslint-disable-next-line no-param-reassign
        m.isMenu = isMenu;
        Meal.update(m, { where: { id: meal.id } });
      });
    } catch (e) {
      console.log(`###################: ERROR--- ${e}`);
      const error = 'An error just occurred while updating the meal menu';
      throw error;
    }
  }
}

export default MenuService;
