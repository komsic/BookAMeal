import db from '../db/models';

const { User } = db;

class UserService {
  static async getAllUser() {
    try {
      return await User.findAll({
        include: [{
          model: db.Meal,
          as: 'Meals',
        }],
      });
    } catch (e) {
      console.log(e);

      const error = 'An error just occurred while fetching the user';
      throw error;
    }
  }

  static async getSingleUserById(id) {
    try {
      return await User.findByPk(id, {
        include: [{
          model: db.Meal,
          as: 'Meals',
        }],
      });
    } catch (e) {
      const error = 'An error just occurred while fetching the user of this id';
      throw error;
    }
  }

  static async modifySingleUserById(modifiedUser) {
    try {
      const updatedUser = await User.update(modifiedUser,
        { returning: true, where: { id: modifiedUser.id } });

      return updatedUser[1][0];
    } catch (e) {
      const error = 'An error just occurred while fetching the user';
      throw error;
    }
  }

  static async setUpNewUser(user) {
    try {
      return await User.create(user);
    } catch (e) {
      const error = 'An error just occurred while posting a new user';
      throw error;
    }
  }

  static async findOne(email) {
    try {
      return await User.findOne({ where: { email } });
    } catch (e) {
      const error = 'An error just occurred. Could not find user with this error';
      throw error;
    }
  }
}

export default UserService;
