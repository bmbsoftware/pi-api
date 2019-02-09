exports.id = "main";
exports.modules = {

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var xml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xml */ \"xml\");\n/* harmony import */ var xml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xml__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tv_listings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tv/listings */ \"./src/tv/listings.js\");\n\n\n\nvar appRouter = function appRouter(router) {\n  router.get('/', function (req, res) {\n    res.send({\n      message: \"Hello JSON API world!!\"\n    });\n  });\n\n  router.get('/tvlistings/:days', function (req, res) {\n    res.json(Object(tv_listings__WEBPACK_IMPORTED_MODULE_1__[\"getWebCamListings\"])(req.params.days || 1));\n  });\n\n  router.get('/xml', function (req, res) {\n    res.set('Content-Type', 'text/xml');\n    res.send(xml__WEBPACK_IMPORTED_MODULE_0___default()({\n      message: \"Hello XML API world!!\"\n    }));\n  });\n\n  router.get('/xml/tvlistings/:days', function (req, res) {\n    var data = xml__WEBPACK_IMPORTED_MODULE_0___default()(Object(tv_listings__WEBPACK_IMPORTED_MODULE_1__[\"getWebCamListings\"])(req.params.days || 1).listings, { indent: '  ', declaration: true });\n    res.set('Content-Type', 'text/xml');\n    res.send(data);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (appRouter);\n\n//# sourceURL=webpack:///./src/routes/routes.js?");

/***/ })

};