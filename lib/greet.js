const cool = require('cool-ascii-faces');

// module.exports = function greet(name){
//   return 'hello ' + name + cool();
// };

//module export with different function
//we hang them off a top-level object
module.exports = {
  makeGreeting: (salutation) => {
    return function greet(name){
      return salutation + ' ' + name + cool();
    };
  },
  makeFarewell: (salutation) => {
    return function greet(name){
      return salutation + ' ' + name;
    };
  }
};

//pure factory function being export
module.exports = (name) => {
  return {
    sayHello: () => {
      return 'hello' + ' ' + name + cool();
      };
    },
    sayGoodbye: () => {
      return salutation + ' ' + name;
    };
  }
};