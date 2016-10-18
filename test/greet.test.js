const greeter = require('../lib/greet');
const assert = require('chai').assert;
const faces = require('cool-ascii-faces').faces;

describe('greeter', () => {

  let salutation = 'hello';
  let greet = greeter.makeGreeting(salutation);

  let greeting = greet('foo');
  //store the regex literal for using twice
  let regex = /^hello foo/;

  it('starts hello and name', () => {
  //test the beginning of the greeting
    assert.match(greeting, regex);
  });

  it('ends with cool face', () => {
  // isolate the cool ascii face at the end of greeting
    let face = greeting.replace(regex, '');

  //make sure the face is one of the valid faces 
    assert.isAbove(faces.indexOf(face), 0);
  });
});
