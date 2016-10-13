var cats = require('./lib/cats.js');
console.log('cats', cats);


require.ensure(['./lib/dogs.js'], function(require) {
    var dogs = require('./lib/dogs.js');
    console.log('dogs', dogs);
});