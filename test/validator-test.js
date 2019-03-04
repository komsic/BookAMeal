import chai from 'chai';
import Joi from 'joi';
import Validator from '../backend/validators/validators';

const { expect } = chai;
const validator = new Validator();

const getErrorMessage = result => result.error.message.replace(/['"]/g, '');

/* global describe it */
describe('Validate that input only contain positive number id', () => {
  const radNum = 1 + Math.ceil(Math.random() * 20);

  const validate = num => Joi.validate(num, validator.getPositiveNonZeroNumberSchema());
  const expectedErrorMessage = 'value must be greater than 0';

  it('It should reject any negative number', () => {
    const result = validate(-(radNum));
    const errorMessage = getErrorMessage(result);

    expect(result.error).to.be.a('error');
    expect(errorMessage).to.equal(expectedErrorMessage);
  });

  it('It should reject 0', () => {
    const result = validate(-(radNum));
    const errorMessage = getErrorMessage(result);

    expect(result.error).to.be.a('error');
    expect(errorMessage).to.equal(expectedErrorMessage);
  });

  it('It should accept any positive number', () => {
    const result = validate(radNum);
    expect(result.error).to.be.a('null');
  });
});

describe('Validate String input', () => {
  it('It should ensure input is a string with more than one character and the character must never be whitespace', () => {
    const result = Joi.validate(' ', validator.getStringSchema());
    expect(getErrorMessage(result)).to.equal('value is not allowed to be empty');
  });
});

describe('Validate Meal input', () => {
  const validate = meal => Joi.validate(meal, validator.getMealSchema());
  it('It should ensure that when id is present (not null), then at least one of name, price, or quantity exist', () => {
    const meal = {
      id: 5,
    };
    const result = validate(meal);
    expect(getErrorMessage(result)).to.equal('meal must have at least 2 children');
  });

  it('It should ensure that when id is not present (null), then name must exist', () => {
    const meal = {
      price: 4500,
    };
    const result = validate(meal);
    expect(getErrorMessage(result)).to.equal('child name fails because [Meal name is required]');
  });
});

describe('Validate Meal Array', () => {
  const validate = meals => Joi.validate(meals, validator.getMealArraySchema());
  it('It should validate that the array contains meals only', () => {
    const meals = [
      {
        price: 400,
      },
      {
        id: 10,
      },
      {
        id: 10,
      },
      {
        id: 10,
      },
    ];

    const result = validate(meals);
    expect(result.error).to.be.an('error');
  });

  it('It should validate that the array may contain empty meal', () => {
    const meals = [];
    const result = validate(meals);
    expect(result.error).to.be.an('null');
  });
});

describe('Validate Menu', () => {
  const validate = _menu => Joi.validate(_menu, validator.getMenuSchema());

  it('it should validate that either name or id must exist', () => {
    const menu = {
      meals: [
        {
          id: 4,
          name: 'Amala',
          price: 500,
          quantity: 4,
        },
      ],
    };

    const result = validate(menu);
    expect(result.error).to.be.a('error');
  });

  it('it should validate that meals length must be greater than 0', () => {
    const menu = {
      id: 4,
      meals: [],
    };

    const result = validate(menu);
    expect(result.error).to.be.a('error');
  });
});
