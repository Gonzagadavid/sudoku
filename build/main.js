/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Sudoku.ttf */ \"./public/fonts/Sudoku.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Medium.ttf */ \"./public/fonts/Roboto-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://kit.fontawesome.com/443c006cec.js);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n}\\n\\nbutton {\\n  border: none;\\n  background-color: rgba(248, 248, 248, 0.6);\\n  font-family: roboto;\\n  color: rgb(0, 0, 0);\\n  font-size: 15px;\\n  padding: 5px 10px;\\n  border-radius: 8px;\\n  cursor: pointer;\\n  margin: 5px;\\n  box-shadow: 0 0 2px black;\\n}\\n\\n.title {\\n   font-family: sudoku;\\n   font-size: 90px;\\n   margin: 0;\\n   color: white;\\n   letter-spacing: 15px;\\n   text-shadow: 2px 2px 10px black;\\n }\\n\\n#content {\\n  width: 100vw;\\n  height: 100vh;\\n  background: linear-gradient(0deg, rgb(45, 132, 225), rgb(0, 30, 56));\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n}\\n\\n.contact-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 50px;\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  color: white;\\n  font-size: 25px;\\n  font-family: roboto;\\n  opacity: 60%;\\n}\\n\\n.contact-container a {\\n  color: white;\\n  font-size: 70px;\\n}\\n\\n.contact-container p {\\n  margin: 0;\\n}\\n\\n.btn-container {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: flex-start;\\n  width: 400px;\\n  height: 50px;\\n}\\n\\n.card-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: 464px;\\n  height: 472px;\\n  background-color: black;\\n  box-shadow: 0 0 20px black;\\n}\\n\\n.row-card {\\n  display: flex;\\n  width: 460px;\\n}\\n\\n.row-card:nth-child(3) .number {\\n  border-bottom: black 1px solid;\\n}\\n.row-card:nth-child(6) .number {\\n  border-bottom: black 1px solid;\\n} \\n\\n.row-card:nth-child(4) .number {\\n  border-top: black 1px solid;\\n}\\n.row-card:nth-child(7) .number {\\n  border-top: black  1px solid;\\n}\\n\\n\\n.number {\\n display: flex;\\n align-items: center;\\n justify-content: center;\\n border: rgb(135, 169, 233) solid 0.05px;\\n width: 50px;\\n height: 50px;\\n position: relative;\\n font-size: 35px;\\n color: rgb(0, 0, 0);\\n font-family: roboto;\\n font-weight: lighter;\\n background-color: rgb(255, 255, 255);\\n}\\n.number:nth-child(3) {\\n  border-right: black  1px solid;\\n}\\n.number:nth-child(6) {\\n  border-right: black  1px solid;\\n}\\n\\n.number:nth-child(4) {\\n  border-left: black 1px solid;\\n}\\n.number:nth-child(7) {\\n  border-left: black  1px solid;\\n}\\n\\n.options-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  background-color: rgb(8, 5, 151);\\n  position: absolute;\\n  width: 80px;\\n  height: 60px;\\n  right: 10px;\\n  bottom: 10px;\\n  font-size: 20px;\\n  color: white;\\n}\\n\\n.try {\\n  cursor: pointer;\\n  color: rgb(7, 62, 124);\\n}\\n\\n.number-option {\\n  margin-left: 5px;\\n  height: 20px;\\n  display: inline-block;\\n  text-align: center;\\n  cursor: pointer;\\n}\\n\\n.clear-container {\\n  margin-top: 10px;\\n}\\n\\n.finished-container {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  width: 400px;\\n  height: 200px;\\n  font-size: 20px;\\n  position: fixed;\\n  background-color: rgb(17, 53, 170);\\n  color: white;\\n  font-family: roboto;\\n  box-shadow: 0 0 20px rgb(0, 0, 0);\\n  border-radius: 10px;\\n}\\n\\n.selected {\\n  background-color: rgb(250, 111, 69);\\n}\\n.number::-webkit-textfield-decoration-container {\\n  display: none;\\n}\\n\\n@font-face {\\n  font-family: sudoku;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n@font-face {\\n  font-family: roboto;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n@media (max-width: 990px) {\\n  .title {\\n    font-size: 60px;\\n  }\\n\\n  .contact-container {\\n    padding: 10px;\\n    font-size: 15px;\\n    position: relative;\\n  }\\n\\n  .contact-container a {\\n    color: white;\\n    font-size: 50px;\\n  }\\n\\n  #content {\\n    width: 100%;\\n    height: 100%;\\n  }\\n\\n}\\n\\n@media (max-width: 500px) {\\n  .title {\\n    font-size: 60px;\\n  }\\n\\n  .contact-container {\\n    padding: 30px;\\n    font-size: 15px;\\n    position: relative;\\n  }\\n\\n  .contact-container a {\\n    color: white;\\n    font-size: 50px;\\n  }\\n\\n  .card-container {\\n    width: 370px;\\n    height: 387px;\\n  }\\n\\n  .row-card {\\n    display: flex;\\n    width: 360px;\\n  }\\n  \\n  .number {\\n    width: 40px;\\n    height: 40px;\\n    font-size: 30px;\\n  }\\n\\n  .btn-container {\\n    width: 100%;\\n    height: 50px;\\n  }\\n  \\n  .left {\\n    right: -40px;\\n    bottom: 40px;\\n  }\\n}\\n\\n@media (max-width: 390px) {\\n  .card-container {\\n    width: 100%;\\n    height: 387px;\\n  }\\n\\n  .row-card {\\n    display: flex;\\n    width: 100%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://sudoku/./public/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://sudoku/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://sudoku/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://sudoku/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://sudoku/./public/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://sudoku/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://sudoku/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://sudoku/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://sudoku/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://sudoku/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://sudoku/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./public/fonts/Roboto-Medium.ttf":
/*!****************************************!*\
  !*** ./public/fonts/Roboto-Medium.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7429a63c09f79a1760b0.ttf\";\n\n//# sourceURL=webpack://sudoku/./public/fonts/Roboto-Medium.ttf?");

/***/ }),

/***/ "./public/fonts/Sudoku.ttf":
/*!*********************************!*\
  !*** ./public/fonts/Sudoku.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a032bf7969137c4a703a.ttf\";\n\n//# sourceURL=webpack://sudoku/./public/fonts/Sudoku.ttf?");

/***/ }),

/***/ "./js/functions/btnSelect.js":
/*!***********************************!*\
  !*** ./js/functions/btnSelect.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ btnSelect)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./js/main.js\");\n\n\nfunction btnSelect() {\n  const selected = document.querySelector('.selected');\n  if (selected) selected.classList.remove('selected');\n  const levelBtn = document\n    .querySelector(`[value=\"${(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty || 'easy').toUpperCase()}\"]`);\n  if (levelBtn) levelBtn.classList.add('selected');\n}\n\n\n//# sourceURL=webpack://sudoku/./js/functions/btnSelect.js?");

/***/ }),

/***/ "./js/functions/checkCompleted.js":
/*!****************************************!*\
  !*** ./js/functions/checkCompleted.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkCompleted)\n/* harmony export */ });\nfunction checkCompleted(board) {\n  if (!board) return false;\n  let bool = true;\n  board.forEach((row) => row.forEach((number) => {\n    if (number === 0) bool = false;\n  }));\n  return bool;\n}\n\n\n//# sourceURL=webpack://sudoku/./js/functions/checkCompleted.js?");

/***/ }),

/***/ "./js/functions/createHtmlElement.js":
/*!*******************************************!*\
  !*** ./js/functions/createHtmlElement.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHtmlElement)\n/* harmony export */ });\nfunction createHtmlElement(type = 'div', attributes = {}) {\n  const element = document.createElement(type);\n  const attributesKey = Object.keys(attributes);\n  attributesKey.forEach((attribute) => {\n    element[attribute] = attributes[attribute];\n  });\n\n  return element;\n}\n\n\n//# sourceURL=webpack://sudoku/./js/functions/createHtmlElement.js?");

/***/ }),

/***/ "./js/functions/fetchBoard.js":
/*!************************************!*\
  !*** ./js/functions/fetchBoard.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBoard)\n/* harmony export */ });\n/* harmony import */ var _btnSelect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btnSelect.js */ \"./js/functions/btnSelect.js\");\n/* harmony import */ var _views_createCardGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/createCardGame.js */ \"./js/views/createCardGame.js\");\n/* harmony import */ var _views_createClearBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/createClearBtn.js */ \"./js/views/createClearBtn.js\");\n\n\n\n\nfunction clearCard() {\n  const content = document.getElementById('content');\n  if (content.lastChild) content.lastChild.remove();\n  if (content.lastChild) content.lastChild.remove();\n}\n\nasync function fetchBoard(url, clear, content) {\n  if (!content) return;\n  const response = await fetch(url);\n  if (!response.ok) throw new Error('A requisão do jogo falhou');\n  const objBoard = await response.json();\n  const { board } = objBoard;\n  if (clear) clearCard();\n  const card = (0,_views_createCardGame_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(board);\n  content.appendChild(card);\n  content.appendChild((0,_views_createClearBtn_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(board));\n  (0,_btnSelect_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://sudoku/./js/functions/fetchBoard.js?");

/***/ }),

/***/ "./js/functions/getOptions.js":
/*!************************************!*\
  !*** ./js/functions/getOptions.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getOptions)\n/* harmony export */ });\nfunction getOptions(x, y, board) {\n  if (board[x][y]) throw new Error('invalid verification');\n\n  const startX = x < 3 ? 0 : x < 6 ? 3 : 6;\n  const startY = y < 3 ? 0 : y < 6 ? 3 : 6;\n  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];\n  const usedNumbers = [];\n\n  for (let index = 0; index < board.length; index += 1) {\n    usedNumbers.push(board[x][index]);\n    usedNumbers.push(board[index][y]);\n  }\n\n  for (let xIndex = startX; xIndex < startX + 3; xIndex += 1) {\n    for (let yIndex = startY; yIndex < startY + 3; yIndex += 1) {\n      usedNumbers.push(board[xIndex][yIndex]);\n    }\n  }\n\n  return options.filter((number) => !usedNumbers.includes(number));\n}\n\n\n//# sourceURL=webpack://sudoku/./js/functions/getOptions.js?");

/***/ }),

/***/ "./js/functions/index.js":
/*!*******************************!*\
  !*** ./js/functions/index.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _btnSelect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btnSelect.js */ \"./js/functions/btnSelect.js\");\n/* harmony import */ var _checkCompleted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkCompleted.js */ \"./js/functions/checkCompleted.js\");\n/* harmony import */ var _createHtmlElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n/* harmony import */ var _getOptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getOptions.js */ \"./js/functions/getOptions.js\");\n/* harmony import */ var _renderOptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderOptions.js */ \"./js/functions/renderOptions.js\");\n/* harmony import */ var _fetchBoard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetchBoard.js */ \"./js/functions/fetchBoard.js\");\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  fetchBoard: _fetchBoard_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  btnSelect: _btnSelect_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  checkCompleted: _checkCompleted_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  createHtmlElement: _createHtmlElement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  getOptions: _getOptions_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  renderOptions: _renderOptions_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n});\n\n\n//# sourceURL=webpack://sudoku/./js/functions/index.js?");

/***/ }),

/***/ "./js/functions/renderOptions.js":
/*!***************************************!*\
  !*** ./js/functions/renderOptions.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderOptions)\n/* harmony export */ });\n/* harmony import */ var _views_createOptionsContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/createOptionsContainer.js */ \"./js/views/createOptionsContainer.js\");\n/* harmony import */ var _getOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOptions.js */ \"./js/functions/getOptions.js\");\n\n\n\nfunction renderOptions(event, board) {\n  const containerOld = document.querySelector('.options-container');\n  if (containerOld) containerOld.parentElement.removeChild(containerOld);\n  const element = event.target;\n  const x = +element.id.replace(/(x=)|y=\\d/g, '');\n  const y = +element.id.replace(/(y=)|x=\\d/g, '');\n  const options = (0,_getOptions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x, y, board);\n  (0,_views_createOptionsContainer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, options, board, y);\n}\n\n\n//# sourceURL=webpack://sudoku/./js/functions/renderOptions.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"gameInit\": () => (/* binding */ gameInit)\n/* harmony export */ });\n/* harmony import */ var _functions_fetchBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/fetchBoard.js */ \"./js/functions/fetchBoard.js\");\n/* harmony import */ var _views_createBtnContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/createBtnContainer.js */ \"./js/views/createBtnContainer.js\");\n/* harmony import */ var _views_createContactContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/createContactContainer.js */ \"./js/views/createContactContainer.js\");\n/* harmony import */ var _views_insertTitle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/insertTitle.js */ \"./js/views/insertTitle.js\");\n\n\n\n\n\nconst gameState = { difficulty: 'easy' };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameState);\n\nconst gameInit = () => {\n  const content = document.getElementById('content');\n  (0,_views_createContactContainer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n\n  (0,_views_insertTitle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n\n  (0,_views_createBtnContainer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n\n  const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;\n  (0,_functions_fetchBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, false, content);\n};\n\ngameInit();\n\n\n//# sourceURL=webpack://sudoku/./js/main.js?");

/***/ }),

/***/ "./js/views/clearNumber.js":
/*!*********************************!*\
  !*** ./js/views/clearNumber.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearNumber)\n/* harmony export */ });\nfunction clearNumber(element, board) {\n  if (!element.innerHTML) return;\n  const x = +element.id.replace(/(x=)|y=\\d/g, '');\n  const y = +element.id.replace(/(y=)|x=\\d/g, '');\n  board[x][y] = 0;\n  element.innerHTML = '';\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/clearNumber.js?");

/***/ }),

/***/ "./js/views/createBtnContainer.js":
/*!****************************************!*\
  !*** ./js/views/createBtnContainer.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBtnContainer)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.js */ \"./js/main.js\");\n/* harmony import */ var _functions_fetchBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/fetchBoard.js */ \"./js/functions/fetchBoard.js\");\n\n\n\n\nfunction nextLevel() {\n  const content = document.getElementById('content');\n  const url = `https://sugoku.herokuapp.com/board?difficulty=${_main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].difficulty}`;\n  (0,_functions_fetchBoard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, true, content);\n}\n\nfunction renderDifficult(event) {\n  _main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].difficulty = event.target.value.toLowerCase();\n  nextLevel();\n}\n\nfunction addBtn(parentElement, value) {\n  const btnAttributes = {\n    className: 'btn-difficult',\n    value,\n    innerHTML: value,\n  };\n  const btn = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', btnAttributes);\n  btn.addEventListener('click', (e) => renderDifficult(e));\n  parentElement.appendChild(btn);\n}\n\nfunction createBtnContainer(content) {\n  if (!content) return;\n  const btnContainer = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'btn-container' });\n  const arrayDifficult = ['EASY', 'MEDIUM', 'HARD', 'RANDOM'];\n  arrayDifficult.forEach((dif) => addBtn(btnContainer, dif));\n  content.appendChild(btnContainer);\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/createBtnContainer.js?");

/***/ }),

/***/ "./js/views/createCardGame.js":
/*!************************************!*\
  !*** ./js/views/createCardGame.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createCardGame)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n/* harmony import */ var _functions_renderOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/renderOptions.js */ \"./js/functions/renderOptions.js\");\n\n\n\nfunction fillLine(axleY, y, x, board) {\n  const colAttributes = { id: `x=${x} y=${y}`, className: 'number', innerHTML: axleY || '' };\n  const number = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', colAttributes);\n  if (axleY === 0) {\n    number.addEventListener('click', (event) => (0,_functions_renderOptions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event, board));\n    number.classList.add('try');\n  }\n  return number;\n}\n\nfunction createLine(axleX, x, board) {\n  const rowCard = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'row-card' });\n  axleX.forEach((axleY, y) => rowCard.appendChild(fillLine(axleY, y, x, board)));\n  return rowCard;\n}\n\nfunction createCardGame(board) {\n  const cardContainer = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'card-container' });\n  board.forEach((axleX, x) => cardContainer.appendChild(createLine(axleX, x, board)));\n  return cardContainer;\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/createCardGame.js?");

/***/ }),

/***/ "./js/views/createClearBtn.js":
/*!************************************!*\
  !*** ./js/views/createClearBtn.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createClearBtn)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n/* harmony import */ var _clearNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearNumber.js */ \"./js/views/clearNumber.js\");\n\n\n\nfunction clearBoard(event, board) {\n  const tryNumbers = document.querySelectorAll('.try');\n  tryNumbers.forEach((element) => (0,_clearNumber_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, board));\n}\n\nfunction createClearBtn(board) {\n  const clearContainer = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'clear-container' });\n  const clearBtnAttributes = {\n    className: 'clear-btn',\n    innerHTML: 'CLEAR BOARD',\n    onclick: (event) => clearBoard(event, board),\n  };\n  const clearBtn = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', clearBtnAttributes);\n  clearContainer.appendChild(clearBtn);\n  return clearContainer;\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/createClearBtn.js?");

/***/ }),

/***/ "./js/views/createContactContainer.js":
/*!********************************************!*\
  !*** ./js/views/createContactContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContactContainer)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n\n\nfunction createContactContainer(content) {\n  if (!content) return;\n\n  const container = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'contact-container' });\n  const linkAttributes = {\n    innerHTML: '<i class=\"fab fa-github\"></i>',\n    href: 'https://github.com/Gonzagadavid/sudoku',\n    target: '_blank',\n  };\n  const link = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', linkAttributes);\n  container.appendChild(link);\n  const textAtribttues = {\n    className: 'contact-text',\n    innerHTML: 'by David Gonzaga',\n  };\n  const text = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', textAtribttues);\n  container.appendChild(text);\n  content.appendChild(container);\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/createContactContainer.js?");

/***/ }),

/***/ "./js/views/createOptionsContainer.js":
/*!********************************************!*\
  !*** ./js/views/createOptionsContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createOptionsContainer)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n/* harmony import */ var _renderNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderNumber.js */ \"./js/views/renderNumber.js\");\n/* harmony import */ var _clearNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearNumber.js */ \"./js/views/clearNumber.js\");\n\n\n\n\nfunction createSpan(number, optionsContainer, element, board) {\n  const spanAttributes = { className: 'number-option', innerHTML: number };\n  const span = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', spanAttributes);\n  span.addEventListener('click', (event) => (0,_renderNumber_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event, element, board));\n  optionsContainer.appendChild(span);\n}\n\nfunction createContainer(options, element, board) {\n  const optionsContainer = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'options-container' });\n  options.forEach((number) => createSpan(number, optionsContainer, element, board));\n  return optionsContainer;\n}\n\nfunction createOptionsContainer(element, options, board, y) {\n  const optionsContainer = createContainer(options, element, board);\n  if (y < 3) optionsContainer.classList.add('left');\n  const clearAttributes = { className: 'number-option', innerHTML: 'Limpar' };\n  const cleanNumber = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', clearAttributes);\n  cleanNumber.addEventListener('click', (event) => (0,_clearNumber_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event, element, board));\n  optionsContainer.appendChild(cleanNumber);\n  element.appendChild(optionsContainer);\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/createOptionsContainer.js?");

/***/ }),

/***/ "./js/views/finishedContainer.js":
/*!***************************************!*\
  !*** ./js/views/finishedContainer.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ finishedContainer)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n/* harmony import */ var _functions_fetchBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/fetchBoard.js */ \"./js/functions/fetchBoard.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.js */ \"./js/main.js\");\n\n\n\n\nfunction restart(container) {\n  const url = `https://sugoku.herokuapp.com/board?difficulty=${_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].difficulty}`;\n  container.remove();\n  (0,_functions_fetchBoard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, true);\n}\n\nfunction finishedContainer() {\n  const content = document.getElementById('content');\n  const container = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'finished-container' });\n  container.appendChild((0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', { innerHTML: 'Finished' }));\n  const text = `Parabéns! Você concluiu no level ${_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].difficulty.toUpperCase()}.`;\n  container.appendChild((0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', { innerHTML: text }));\n  const btnAttributes = { innerHTML: 'Jogar novamente', className: 'btn-finished' };\n  const btn = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', btnAttributes);\n  btn.addEventListener('click', () => restart(container));\n  container.appendChild(btn);\n  content.appendChild(container);\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/finishedContainer.js?");

/***/ }),

/***/ "./js/views/index.js":
/*!***************************!*\
  !*** ./js/views/index.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _insertTitle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insertTitle.js */ \"./js/views/insertTitle.js\");\n/* harmony import */ var _finishedContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finishedContainer.js */ \"./js/views/finishedContainer.js\");\n/* harmony import */ var _renderNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderNumber.js */ \"./js/views/renderNumber.js\");\n/* harmony import */ var _createOptionsContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createOptionsContainer.js */ \"./js/views/createOptionsContainer.js\");\n/* harmony import */ var _createContactContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createContactContainer.js */ \"./js/views/createContactContainer.js\");\n/* harmony import */ var _createBtnContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createBtnContainer.js */ \"./js/views/createBtnContainer.js\");\n/* harmony import */ var _createClearBtn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createClearBtn.js */ \"./js/views/createClearBtn.js\");\n/* harmony import */ var _createCardGame_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createCardGame.js */ \"./js/views/createCardGame.js\");\n/* harmony import */ var _clearNumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clearNumber.js */ \"./js/views/clearNumber.js\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  finishedContainer: _finishedContainer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  clearNumber: _clearNumber_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  createBtnContainer: _createBtnContainer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  createCardGame: _createCardGame_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  createClearBtn: _createClearBtn_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  createContactContainer: _createContactContainer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  createOptionsContainer: _createOptionsContainer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  insertTitle: _insertTitle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  renderNumber: _renderNumber_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n});\n\n\n//# sourceURL=webpack://sudoku/./js/views/index.js?");

/***/ }),

/***/ "./js/views/insertTitle.js":
/*!*********************************!*\
  !*** ./js/views/insertTitle.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ insertTitle)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n\n\nfunction insertTitle(content) {\n  if (!content) return;\n  const title = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', { innerHTML: 'Sudoku', className: 'title' });\n  content.appendChild(title);\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/insertTitle.js?");

/***/ }),

/***/ "./js/views/renderNumber.js":
/*!**********************************!*\
  !*** ./js/views/renderNumber.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderNumber)\n/* harmony export */ });\n/* harmony import */ var _functions_checkCompleted_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/checkCompleted.js */ \"./js/functions/checkCompleted.js\");\n/* harmony import */ var _finishedContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finishedContainer.js */ \"./js/views/finishedContainer.js\");\n\n\n\nfunction renderNumber(event, element, board) {\n  const x = +element.id.replace(/(x=)|y=\\d/g, '');\n  const y = +element.id.replace(/(y=)|x=\\d/g, '');\n  const value = +event.target.innerHTML;\n  board[x][y] = value;\n  element.innerHTML = value;\n  if ((0,_functions_checkCompleted_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(board)) (0,_finishedContainer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/renderNumber.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./build/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./js/functions/createHtmlElement.js");
/******/ 	__webpack_require__("./js/functions/checkCompleted.js");
/******/ 	__webpack_require__("./js/functions/getOptions.js");
/******/ 	__webpack_require__("./js/functions/btnSelect.js");
/******/ 	__webpack_require__("./js/functions/fetchBoard.js");
/******/ 	__webpack_require__("./js/functions/index.js");
/******/ 	__webpack_require__("./js/functions/renderOptions.js");
/******/ 	__webpack_require__("./js/views/createBtnContainer.js");
/******/ 	__webpack_require__("./js/views/finishedContainer.js");
/******/ 	__webpack_require__("./js/views/clearNumber.js");
/******/ 	__webpack_require__("./js/views/createCardGame.js");
/******/ 	__webpack_require__("./js/views/createClearBtn.js");
/******/ 	__webpack_require__("./js/views/createContactContainer.js");
/******/ 	__webpack_require__("./js/views/createOptionsContainer.js");
/******/ 	__webpack_require__("./js/views/index.js");
/******/ 	__webpack_require__("./js/views/insertTitle.js");
/******/ 	__webpack_require__("./js/views/renderNumber.js");
/******/ 	__webpack_require__("./js/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./public/css/style.css");
/******/ 	
/******/ })()
;