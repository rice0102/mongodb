const assert = require('assert'); // true or false
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    // model follow ths schema
    const joe = new User({ name: 'Joe' }); // Creating new User

    joe.save()
    .then(() => {
      assert(!joe.isNew); // has joe save successfully ?
      done();
    });
    // Save instance to model database , return Promise
  });
});

