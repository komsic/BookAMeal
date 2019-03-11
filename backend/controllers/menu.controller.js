import MenuService from '../services/menu.service';

class MenuController {
  static async fetchAllMenu(req, res) {
    const allMenu = await MenuService.fetchAllMenu();

    if (allMenu.length === 0) {
      return res.status(200).json({
        status: 'successful but there is no meal in this list',
        data: allMenu,
      });
    }

    return res.status(200).json({
      status: 'success',
      data: allMenu,
    });
  }

  static async postMenu(req, res) {
    const { userId } = req.body;
    if (!userId) {
      return res.status(500).json({
        status: 'Oops!!! Something went wrong. You need to enter the right user id',
      });
    }
    const { meals } = req.body;
    const postedMenu = await MenuService.postMenu(meals, userId);

    if (postedMenu.length === 0) {
      return res.status(200).json({
        status: 'Oops!!! Something went wrong. Are you sure you owned this meals?',
        data: postedMenu,
      });
    }

    return res.status(200).json({
      status: 'success',
      data: postedMenu,
    });
  }
}

export default MenuController;
