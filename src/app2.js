var cats = require('./lib/cats.js');
console.log('cats', cats);

var rabits = require('./lib/rabits.js');
console.log('rabits', rabits);


require.ensure(['./lib/dogs.js'], function(require) {
    var dogs = require('./lib/dogs.js');
    console.log('dogs', dogs);
});