import chai from 'chai';

const { expect } = chai;

/* global describe it */
describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});
