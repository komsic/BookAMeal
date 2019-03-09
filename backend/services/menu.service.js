import db from '../db/models';

const { Menu } = db;

class MenuService {
  static async getAllMenu() {
    try {
      return await Menu.findAll({
        include: [{
          model: db.Meal,
          as: 'Meals',
        }],
      });
    } catch (e) {
      const error = 'An error just occurred while fetching the menu';
      throw error;
    }
  }

  static async getSingleMenuById(id) {
    try {
      return await Menu.findByPk(id, {
        include: [{
          model: db.Meal,
          as: 'Meals',
        }],
      });
    } catch (e) {
      const error = 'An error just occurred while fetching the menu of this id';
      throw error;
    }
  }

  static async modifySingleMenuById(modifiedMenu) {
    try {
      const updatedMenu = await Menu.update(modifiedMenu,
        { returning: true, where: { id: modifiedMenu.id } });

      return updatedMenu[1][0];
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
