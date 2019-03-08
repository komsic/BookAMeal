import dummyData from '../utils/dummyData';
import db from '../db/models';

const { Menu } = db;

class MenuService {
  static async getAllMenu() {
    try {
      return await Menu.findAll();
    } catch (e) {
      const error = 'An error just occurred while fetching the menu';
      throw error;
    }
  }

  static async getSingleMenuById(id) {
    return await dummyData.menu.find(menu => menu.id === id) || {};
  }

  static async modifySingleMenuById(modifiedMenu) {
    try {
      const menuToBeModify = await dummyData.menu.find(meal => meal.id === modifiedMenu.id);
      if (menuToBeModify != null) {
        dummyData.menu[modifiedMenu.id - 1] = modifiedMenu;
      }

      return dummyData.menu[modifiedMenu.id - 1];
    } catch (e) {
      const error = 'An error just occurred while fetching the menu';
      throw error;
    }
  }

  static async setUpNewMenu(menu) {
    try {
      return await Menu.create(menu);
    } catch (e) {
      const error = 'An error just occurred while posting a new menu';
      throw error;
    }
  }
}

export default MenuService;
