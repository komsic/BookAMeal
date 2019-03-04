import dummyData from '../utils/dummyData';
import Menu from '../models/menu.model';

class MenuService {
  static async getAllMenu() {
    try {
      const validMenu = await dummyData.menu.map((menu) => {
        const newMenu = new Menu(menu.name, menu.meals);
        newMenu.id = menu.id;

        return newMenu;
      });

      return validMenu;
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
      const menuLength = dummyData.menu.length;
      const lastId = dummyData.menu[menuLength - 1].id;

      const newMenu = new Menu(menu.name, menu.meals);
      newMenu.id = lastId + 1;
      dummyData.menu.push(newMenu);

      return newMenu;
    } catch (e) {
      const error = 'An error just occurred while fetching the menu';
      throw error;
    }
  }
}

export default MenuService;
