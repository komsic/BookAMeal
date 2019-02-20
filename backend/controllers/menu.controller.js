import MenuService from '../services/menu.service';

const MenuController = {
  getAllMenu(req, res) {
    const allMenu = MenuService.getAllMenu();

    return res.json({
      status: 'success',
      data: allMenu,
    }).status(200);
  },
};

export default MenuController;
