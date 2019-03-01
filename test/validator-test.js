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
