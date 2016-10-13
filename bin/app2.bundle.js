webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var cats = __webpack_require__(1);
	console.log('cats', cats);

	var rabits = __webpack_require__(3);
	console.log('rabits', rabits);


	__webpack_require__.e/* nsure */(1/* duplicate */, function(require) {
	    var dogs = __webpack_require__(2);
	    console.log('dogs', dogs);
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	var rabits = ['Panpan', 'Pantoufle'];
	module.exports = rabits;

/***/ }
]);