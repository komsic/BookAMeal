import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

import UserService from '../services/user.service';
import ResponseTransformer from '../utils/response.transformer';

const { config } = dotenv;
config();

class UserController {
  static async register(req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password);

    const newUser = {
      password: hashedPassword,
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      isAdmin: req.body.isAdmin,
    };

    let createdUser = null;
    try {
      createdUser = await UserService.setUpNewUser(newUser);
    } catch (e) {
      return res.status(500).send(e);
    }

    const token = jwt.sign({ id: createdUser.id }, process.env.SECRET_KEY, {
      expiresIn: 86400,
    });

    return res.status(200).json({
      auth: true,
      token,
    });
  }

  static async login(req, res) {
    const user = await UserService.findOne(req.body.email);
    if (!user) {
      return res.status(404).send('No user found.');
    }

    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ auth: false, token: null });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: 86400,
    });

    return res.status(200).send({ auth: true, token });
  }

  static async me(req, res) {
    const token = req.headers['x-access-token'];

    if (!token) {
      return res.status(401).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({ auth: false, message: 'No token provided.' });
      }

      let user = null;
      try {
        user = UserService.getSingleUserById(decoded.id);
      } catch (e) {
        return res.status(500).send(e);
      }

      if (!user) {
        return res.status(404).send('No user found');
      }
      user.then(u => res.status(200).send(u));
    });
  }

  static async getAllUser(req, res) {
    UserService.getAllUser()
      .then((allUser) => {
        if (allUser.length === 0) {
          return res.status(200).json({
            status: 'successful but there is no user in this list',
            data: allUser,
          });
        }

        return res.status(200).json({
          status: 'success',
          data: allUser,
        });
      }).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }

  static async getSingleUserById(req, res) {
    const { id } = req.params;
    UserService.getSingleUserById(Number(id))
      .then((requiredUser) => {
        if (requiredUser === null) {
          return res.status(404).json({
            status: 'user of this id does not exist',
            data: requiredUser,
          });
        }

        return res.json({
          status: 'success',
          data: requiredUser,
        }).status(200);
      }).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }

  static async modifySingleUserById(req, res) {
    UserService.modifySingleUserById(req.body)
      .then(((modifiedUser) => {
        if (modifiedUser === undefined) {
          return res.status(404).json({
            status: 'user of this id does not exist',
            data: {},
          });
        }

        return res.json({
          status: 'success',
          data: modifiedUser,
        }).status(200);
      })).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }

  static async setUpNewUser(req, res) {
    UserService.setUpNewUser(req.body)
      .then(newUser => res.json({
        status: 'success',
        data: newUser,
      }).status(201)).catch(error => res.status(500)
        .json(ResponseTransformer.transform(500, error.error)));
  }
}

export default UserController;
