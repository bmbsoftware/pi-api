exports.id = "main";
exports.modules = {

/***/ "./src/tv/listings.js":
/*!****************************!*\
  !*** ./src/tv/listings.js ***!
  \****************************/
/*! exports provided: getWebCamListings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWebCamListings\", function() { return getWebCamListings; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar getWebCamListings = function getWebCamListings(days) {\n\tconsole.log('getting program data for ' + days + ' days...');\n\tvar programSourceData = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync('./data/webCamListings.json', 'utf8'));\n\n\tvar data = JSON.parse(JSON.stringify(programSourceData));\n\tdata.listings[0].tv = [];\n\n\tvar programCount = 0;\n\tprogramSourceData.listings[0].tv.forEach(function (element) {\n\t\tif (element.programme) {\n\t\t\tvar format = 'YYYYMMDDHHmmss ZZ';\n\t\t\tfor (var day = 0; day < days; day++) {\n\t\t\t\tvar today = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf(\"day\").add(day, \"day\").format(format);\n\t\t\t\tvar tomorrow = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf(\"day\").add(day + 1, \"day\").format(format);\n\t\t\t\telement.programme[0]._attr.start = today;\n\t\t\t\telement.programme[0]._attr.stop = tomorrow;\n\t\t\t\tdata.listings[0].tv.push(JSON.parse(JSON.stringify(element)));\n\t\t\t\tprogramCount++;\n\t\t\t}\n\t\t} else {\n\t\t\tdata.listings[0].tv.push(Object.assign({}, element));\n\t\t}\n\t});\n\n\tconsole.log('loaded ' + programCount + ' listings.');\n\n\treturn data;\n};\n\n//# sourceURL=webpack:///./src/tv/listings.js?");

/***/ })

};