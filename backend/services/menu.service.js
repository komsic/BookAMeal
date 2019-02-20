import dummyData from '../utils/dummyData';
import Menu from '../models/menu.model';

const MenuService = {
  getAllMenu() {
    const validMenu = dummyData.menu.map((menu) => {
      const newMenu = new Menu(menu.name, menu.meals);
      newMenu.id = menu.id;

      return newMenu;
    });

    return validMenu;
  },
  getSingleMenuById(id) {
    return dummyData.menu.find(menu => menu.id === id) || {};
  },
  modifySingleMenuById(modifiedMenu) {
    const menuToBeModify = dummyData.menu.find(meal => meal.id === modifiedMenu.id);
    if (menuToBeModify != null) {
      dummyData.menu[modifiedMenu.id - 1] = modifiedMenu;
    }

    return modifiedMenu;
  },
};

export default MenuService;
