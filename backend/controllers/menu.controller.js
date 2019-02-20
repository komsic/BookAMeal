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
  modifySingleMenuById(req, res) {
    const modifiedMenu = MenuService.modifySingleMenuById(req.body);

    return res.json({
      status: 'success',
      data: modifiedMenu,
    }).status(200);
  },
  setUpNewMenu(req, res) {
    const newMenu = MenuService.setUpNewMenu(req.body);

    return res.json({
      status: 'success',
      data: newMenu,
    }).status(201);
  },
};

export default MenuController;
