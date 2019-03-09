import MenuService from '../services/menu.service';
import ResponseTransformer from '../utils/response.transformer';

class MenuController {
  static async getAllMenu(req, res) {
    MenuService.getAllMenu()
      .then((allMenu) => {
        if (allMenu.length === 0) {
          return res.status(200).json({
            status: 'successful but there is no menu in this list',
            data: allMenu,
          });
        }

        return res.status(200).json({
          status: 'success',
          data: allMenu,
        });
      }).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }

  static async getSingleMenuById(req, res) {
    const { id } = req.params;
    MenuService.getSingleMenuById(Number(id))
      .then((requiredMenu) => {
        if (requiredMenu === null) {
          return res.status(404).json({
            status: 'menu of this id does not exist',
            data: requiredMenu,
          });
        }

        return res.json({
          status: 'success',
          data: requiredMenu,
        }).status(200);
      }).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }

  static async modifySingleMenuById(req, res) {
    MenuService.modifySingleMenuById(req.body)
      .then(((modifiedMenu) => {
        if (modifiedMenu === undefined) {
          return res.status(404).json({
            status: 'menu of this id does not exist',
            data: {},
          });
        }

        return res.json({
          status: 'success',
          data: modifiedMenu,
        }).status(200);
      })).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }

  static async setUpNewMenu(req, res) {
    MenuService.setUpNewMenu(req.body)
      .then(newMenu => res.json({
        status: 'success',
        data: newMenu,
      }).status(201)).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }
}

export default MenuController;
