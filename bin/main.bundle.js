webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var cats = __webpack_require__(2);
	console.log('cats', cats);


	__webpack_require__.e/* nsure */(1, function(require) {
	    var dogs = __webpack_require__(3);
	    console.log('dogs', dogs);
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	var cats = ['Lumo', 'Lova', 'Gaya'];
	module.exports = cats;

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var cats = __webpack_require__(2);
	console.log('cats', cats);

	var rabits = __webpack_require__(5);
	console.log('rabits', rabits);


	__webpack_require__.e/* nsure */(1/* duplicate */, function(require) {
	    var dogs = __webpack_require__(3);
	    console.log('dogs', dogs);
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	var rabits = ['Panpan', 'Pantoufle'];
	module.exports = rabits;

/***/ }
]);