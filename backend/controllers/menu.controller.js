import MenuService from '../services/menu.service';

const MenuController = {
  getAllMenu(req, res) {
    const allMenu = MenuService.getAllMenu();

    if (allMenu.length === 0) {
      return res.json({
        status: 'successful but there is no menu in this list',
        data: allMenu,
      }).status(200);
    }

    return res.json({
      status: 'success',
      data: allMenu,
    }).status(200);
  },
  getSingleMenuById(req, res) {
    const requiredMenu = MenuService.getSingleMenuById(parseInt(req.params.id, 10));

    if (Object.entries(requiredMenu).length === 0 && requiredMenu.constructor === Object) {
      return res.json({
        status: 'menu of this id does not exist',
        data: requiredMenu,
      }).status(200);
    }

    return res.json({
      status: 'success',
      data: requiredMenu,
    }).status(200);
  },
  modifySingleMenuById(req, res) {
    const modifiedMenu = MenuService.modifySingleMenuById(req.body);

    if (modifiedMenu === undefined) {
      return res.json({
        status: 'menu of this id does not exist',
        data: {},
      }).status(200);
    }

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
