import MenuService from '../services/menu.service';

const MenuController = {
  getAllMenu(req, res) {
    const allMenu = MenuService.getAllMenu();

    return res.json({
      status: 'success',
      data: allMenu,
    }).status(200);
  },
  getSingleMenuById(req, res) {
    const requiredMenu = MenuService.getSingleMenuById(parseInt(req.params.id, 10));

    return res.json({
      status: 'success',
      data: requiredMenu,
    }).status(200);
  },
};

export default MenuController;
