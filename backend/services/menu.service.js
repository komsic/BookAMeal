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
    return dummyData.meals.find(menu => menu.id === id) || {};
  },
};

export default MenuService;
