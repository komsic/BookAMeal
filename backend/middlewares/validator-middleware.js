import Joi from 'joi';
import Validator from '../validators/validators';

const getErrorMessage = error => error.message.replace(/['"]/g, '');

const validator = () => {
  const supportedMethods = ['post', 'put'];

  const validatorSchema = new Validator();
  const supportedRoutesSchemas = {
    '/meals': validatorSchema.getMealSchema(),
    '/orders': validatorSchema.getOrderSchema(),
    '/menu': validatorSchema.getMenuSchema(),
  };

  const validationOptions = {
    abortEarly: false,
  };

  return (req, res, next) => {
    const route = req.originalUrl;
    const method = req.method.toLowerCase();
    const data = req.body;

    if (method === 'put' || method === 'get' || method === 'delete') {
      const splitRoute = route.split('/');
      const id = splitRoute[splitRoute.length - 1];

      if (!(id === 'meals' || id === 'orders' || id === 'menu' || id === '')) {
        if (method !== 'put') {
          return Joi.validate(id, validatorSchema.getPositiveNonZeroNumberSchema().label('id'), (err, value) => {
            if (err) {
              res.status(422).json({
                status: 'failed',
                error: getErrorMessage(err),
              });
            } else {
              req.body = value;
              next();
            }
          });
        }
        data.id = id;
      }
    }

    if (supportedMethods.includes(method)) {
      const selectedPath = Object.keys(supportedRoutesSchemas).find(path => route.includes(path));
      const schema = supportedRoutesSchemas[selectedPath];
      if (schema) {
        return Joi.validate(data, schema, validationOptions, (err, value) => {
          if (err) {
            res.status(422).json({
              status: 'failed',
              error: getErrorMessage(err),
            });
          } else {
            req.body = value;
            next();
          }
        });
      }
    }

    next();
  };
};

export default validator;
