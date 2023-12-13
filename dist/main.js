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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/Burbank Big Regular Medium.ttf */ \"./src/assets/Burbank Big Regular Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/border.png */ \"./src/assets/border.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n  font-family: Fortnite;\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n:root {\r\n  font-family: Fortnite, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\r\n  --primary-color: #f96c07;\r\n  --secondary-color: #163a9b;\r\n  --third-color: #1f50d6;\r\n}\r\n\r\nhtml {\r\n  scrollbar-gutter: stable both-edges;\r\n}\r\nbody {\r\n  width: 100%;\r\n  /* width: calc(100vw - 34px); */\r\n  margin: 0;\r\n  background-color: var(--secondary-color);\r\n}\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\r\n\r\n  height: 40px;\r\n\r\n  gap: 10px;\r\n}\r\nnav > button {\r\n  width: 80px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  background-color: var(--primary-color);\r\n  color: white;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  font-size: 16px;\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\r\n}\r\nh1 {\r\n  margin: 0;\r\n}\r\n#homePage,\r\n#menuPage,\r\n#contactPage {\r\n  width: 800px;\r\n  margin: 0 auto;\r\n  background-color: var(--third-color);\r\n  color: white;\r\n  font-size: 30px;\r\n  padding: 10px;\r\n}\r\n#homePage {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: auto auto auto;\r\n}\r\n#homePage > h1 {\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n  grid-row-start: 1;\r\n  grid-row-end: 2;\r\n  text-align: center;\r\n}\r\n#homePage > #mascot {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 2;\r\n  grid-row-end: 3;\r\n}\r\n#homePage > #homeDescription {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 2;\r\n  grid-row-end: 3;\r\n  font-size: 26px;\r\n}\r\n#homePage > #hoursHeader {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 3;\r\n  grid-row-end: 4;\r\n}\r\n#homePage > #location {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 3;\r\n  grid-row-end: 4;\r\n}\r\n#homePage > #map {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 4;\r\n  grid-row-end: 5;\r\n}\r\n#homePage > #hours > p {\r\n  margin: 0;\r\n}\r\n#menuPage {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.menu-card {\r\n  display: grid;\r\n  grid-template-columns: auto 250px;\r\n  grid-template-rows: 40px auto 40px;\r\n  width: auto;\r\n  border: red 1px solid;\r\n  grid-gap: 10px;\r\n  padding: 10px;\r\n  margin-block: 10px;\r\n  background-color: var(--primary-color);\r\n  border-radius: 10px;\r\n}\r\n.menu-card > h2 {\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n  margin: 5px 0 0 20px;\r\n}\r\n.menu-card > img {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 2;\r\n  grid-row-end: 4;\r\n  width: 250px;\r\n  border: 10px solid transparent;\r\n  border-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) 20% round;\r\n  margin: 10px;\r\n}\r\n.menu-card > p {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 2;\r\n  grid-row-end: 3;\r\n}\r\n.menu-card > price {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 3;\r\n  grid-row-end: 4;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n#contactPage {\r\n  display: grid;\r\n  grid-template-columns: 1fr 300px 1fr;\r\n  grid-template-rows: auto auto auto;\r\n}\r\n#contactPage > .header {\r\n  text-align: center;\r\n  grid-column-start: 1;\r\n  grid-column-end: 4;\r\n  grid-row-start: 1;\r\n  grid-row-end: 2;\r\n}\r\n#contactPage > #male {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 2;\r\n  grid-row-end: 3;\r\n  justify-self: start;\r\n}\r\n#contactPage > #invite {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 2;\r\n  grid-row-end: 3;\r\n}\r\n#contactPage > #female {\r\n  grid-column-start: 3;\r\n  grid-column-end: 4;\r\n  grid-row-start: 2;\r\n  grid-row-end: 3;\r\n  justify-self: end;\r\n}\r\n#contactPage > #details {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 3;\r\n  grid-row-end: 4;\r\n}\r\n\r\n#contactPage > #details > li > a {\r\n  margin: 0;\r\n  /* list-style-type: none; */\r\n  color: white;\r\n}\r\n#contactPage > #details {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\nfooter {\r\n  margin-top: auto;\r\n  text-align: center;\r\n  background-color: var(--secondary-color);\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\r\n  color: white;\r\n  padding: 10px;\r\n  font-size: 20px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n  const content = document.getElementById(\"content\");\r\n  const contactPage = document.createElement(\"div\");\r\n  const header = document.createElement(\"h1\");\r\n  const female = document.createElement(\"img\");\r\n  const male = document.createElement(\"img\");\r\n  const invite = document.createElement(\"p\");\r\n  const details = document.createElement(\"ul\");\r\n  const footer = document.querySelector(\"footer\");\r\n\r\n  contactPage.id = \"contactPage\";\r\n  header.classList = \"header\";\r\n  header.textContent = \"Contact us\";\r\n  female.id = \"female\";\r\n  female.src = \"../src/assets/female.png\";\r\n  female.width = \"250\";\r\n  male.id = \"male\";\r\n  male.src = \"../src/assets/male.png\";\r\n  male.width = \"250\";\r\n  invite.id = \"invite\";\r\n  invite.textContent =\r\n    \"Want to become a part of the Durrr Burger family? Reach out to us today using the details below or swing by for a chat!\";\r\n  details.id = \"details\";\r\n  const links = [\r\n    {\r\n      href: \"mailto:durrr.burger@nosweat.com\",\r\n      textContent: \"durrr.burger@nosweat.com\",\r\n    },\r\n    { href: \"tel:+15555555555\", textContent: \"+1 (555) 555-5555\" },\r\n    { href: \"https://twitter.com/durrr_burger\", textContent: \"@durrr_burger\" },\r\n  ];\r\n\r\n  links.forEach((link) => {\r\n    const li = document.createElement(\"li\");\r\n    const a = document.createElement(\"a\");\r\n    a.href = link.href;\r\n    a.textContent = link.textContent;\r\n    li.appendChild(a);\r\n    details.appendChild(li);\r\n  });\r\n\r\n  contactPage.appendChild(header);\r\n  contactPage.appendChild(male);\r\n  contactPage.appendChild(female);\r\n  contactPage.appendChild(invite);\r\n  contactPage.appendChild(details);\r\n  content.insertBefore(contactPage, footer);\r\n}\r\n// TODO add details list\r\n// Create an array of link objects\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _src_assets_mascot_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/mascot.png */ \"./src/assets/mascot.png\");\n\r\nfunction loadHome() {\r\n  const content = document.getElementById(\"content\");\r\n  const homePage = document.createElement(\"div\");\r\n  const header = document.createElement(\"h1\");\r\n  const image = document.createElement(\"img\");\r\n  const description = document.createElement(\"p\");\r\n  const hoursHeader = document.createElement(\"p\");\r\n  const hours = document.createElement(\"p\");\r\n  const location = document.createElement(\"p\");\r\n  const map = document.createElement(\"img\");\r\n  const footer = document.querySelector(\"footer\");\r\n\r\n  homePage.id = \"homePage\";\r\n  header.textContent = \"Durrr Burger\";\r\n  image.id = \"mascot\";\r\n  image.src = _src_assets_mascot_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  image.width = \"400\";\r\n  description.id = \"homeDescription\";\r\n  description.textContent =\r\n    \"Welcome to Durrr Burger, where every visit is a flavor-packed journey! Our iconic burger chain, scattered across Fortnite's diverse landscapes, boasts more than just mouthwatering burgers; it's an immersive experience. With our juicy signature Durrr Burger stealing the show, accompanied by crispy fries and refreshing drinks, your taste buds are in for a treat. But Durrr Burger isn't just about the food—it's a cultural hub. Snap a pic with our friendly mascot, soak in the vibrant atmosphere, and create unforgettable moments in a place where great food and adventure collide. Join us at Durrr Burger for an unforgettable fusion of taste and fun!\";\r\n  hoursHeader.id = \"hoursHeader\";\r\n  hoursHeader.textContent = \"Available hours:\";\r\n  hours.id = \"hours\";\r\n  location.id = \"location\";\r\n  location.textContent = \"Location: Chapter 1, Greasy Grove\";\r\n  map.id = \"map\";\r\n  map.src = \" ../src/assets/map.png\";\r\n  map.width = \"300\";\r\n\r\n  homePage.appendChild(header);\r\n  homePage.appendChild(image);\r\n  homePage.appendChild(description);\r\n  homePage.appendChild(hoursHeader);\r\n  homePage.appendChild(hours);\r\n  homePage.appendChild(location);\r\n  homePage.appendChild(map);\r\n  content.insertBefore(homePage, footer);\r\n  displayDays();\r\n  function displayDays() {\r\n    const hoursArray = [\r\n      \"Monday: Closed\",\r\n      \"Tuesday: 11:00 AM - 9:00 PM\",\r\n      \"Wednesday: 11:00 AM - 9:00 PM\",\r\n      \"Thursday: 11:00 AM - 9:00 PM\",\r\n      \"Friday: 11:00 AM - 9:00 PM\",\r\n      \"Saturday: 11:00 AM - 9:00 PM\",\r\n      \"Sunday: 11:00 AM - 9:00 PM\",\r\n    ];\r\n    for (let i = 0; i < hoursArray.length; i++) {\r\n      const day = document.createElement(\"p\");\r\n      day.textContent = hoursArray[i];\r\n      document.getElementById(\"hours\").appendChild(day);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\r\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n\r\nconst homeButton = document.querySelector(\"#home-button\");\r\nconst menuButton = document.querySelector(\"#menu-button\");\r\nconst contactButton = document.querySelector(\"#contact-button\");\r\nconst homePage = document.querySelector(\"#homePage\");\r\nconst menuPage = document.querySelector(\"#menuPage\");\r\nconst contactPage = document.querySelector(\"#contactPage\");\r\n\r\nhomeButton.addEventListener(\"click\", function () {\r\n  console.log(\"home button clicked\");\r\n  removeContent();\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n});\r\n\r\nmenuButton.addEventListener(\"click\", function () {\r\n  console.log(\"menu button clicked\");\r\n  removeContent();\r\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\r\n});\r\n\r\ncontactButton.addEventListener(\"click\", function () {\r\n  console.log(\"contact button clicked\");\r\n  removeContent();\r\n  (0,_contact__WEBPACK_IMPORTED_MODULE_3__.loadContact)();\r\n});\r\n\r\nfunction removeContent() {\r\n  const secondChild = document.querySelector(\"#content > *:nth-child(2)\");\r\n  secondChild.remove();\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n  const content = document.getElementById(\"content\");\r\n  const menuPage = document.createElement(\"div\");\r\n  const header = document.createElement(\"h1\");\r\n  const footer = document.querySelector(\"footer\");\r\n\r\n  menuPage.id = \"menuPage\";\r\n  header.textContent = \"Menu\";\r\n  menuPage.appendChild(header);\r\n  displayMenu();\r\n  content.insertBefore(menuPage, footer);\r\n  function displayMenu() {\r\n    const foodArray = [\r\n      {\r\n        name: \"French Bowl\",\r\n        price: 200,\r\n        image: \"../src/assets/frenchBowl.png\",\r\n        description:\r\n          \"Indulge in a bowl brimming with golden, crispy french fries, seasoned to perfection for a savory delight.\",\r\n      },\r\n      {\r\n        name: \"French Burger\",\r\n        price: 400,\r\n        image: \"../src/assets/frenchBurger.png\",\r\n        description:\r\n          \"A delicious twist on the classic burger - crispy french fries tucked inside a juicy patty, delivering the perfect crunch with every bite.\",\r\n      },\r\n      {\r\n        name: \"Ice Cream\",\r\n        price: 200,\r\n        image: \"../src/assets/iceCream.png\",\r\n        description:\r\n          \"Treat yourself to a delightful cone of creamy, sweet ice cream, the perfect cool and satisfying dessert.\",\r\n      },\r\n      {\r\n        name: \"Coca Cola\",\r\n        price: 100,\r\n        image: \"../src/assets/cola.png\",\r\n        description:\r\n          \"Quench your thirst with a refreshing cup of ice-cold Coca-Cola, the ideal companion to any meal.\",\r\n      },\r\n      {\r\n        name: \"Birthday Cake\",\r\n        price: 1000,\r\n        image: \"../src/assets/birthdayCake.png\",\r\n        description:\r\n          \"Celebrate in style with three colossal burgers adorned with festive candles, making every bite a party!\",\r\n      },\r\n    ];\r\n    for (let i = 0; i < foodArray.length; i++) {\r\n      const card = document.createElement(\"div\");\r\n      const name = document.createElement(\"h2\");\r\n      const price = document.createElement(\"price\");\r\n      const priceIcon = document.createElement(\"img\");\r\n      const priceText = document.createElement(\"div\");\r\n      const image = document.createElement(\"img\");\r\n      const description = document.createElement(\"p\");\r\n\r\n      card.className = \"menu-card\";\r\n      name.textContent = foodArray[i].name;\r\n      priceIcon.src = \"../src/assets/icons8-v-bucks-48.png\";\r\n      priceText.textContent = foodArray[i].price;\r\n      price.appendChild(priceIcon);\r\n      price.appendChild(priceText);\r\n      image.src = foodArray[i].image;\r\n      image.className = \"menu-image\";\r\n      description.textContent = foodArray[i].description;\r\n\r\n      card.appendChild(name);\r\n      card.appendChild(price);\r\n      card.appendChild(image);\r\n      card.appendChild(description);\r\n\r\n      menuPage.appendChild(card);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction loadPage() {\r\n  const body = document.querySelector(\"body\");\r\n  const content = document.getElementById(\"content\");\r\n  const navBar = document.createElement(\"nav\");\r\n\r\n  const homeButton = document.createElement(\"button\");\r\n  homeButton.textContent = \"Home\";\r\n  homeButton.id = \"home-button\";\r\n  navBar.appendChild(homeButton);\r\n\r\n  const menuButton = document.createElement(\"button\");\r\n  menuButton.textContent = \"Menu\";\r\n  menuButton.id = \"menu-button\";\r\n  navBar.appendChild(menuButton);\r\n\r\n  const contactButton = document.createElement(\"button\");\r\n  contactButton.textContent = \"Contact\";\r\n  contactButton.id = \"contact-button\";\r\n  navBar.appendChild(contactButton);\r\n\r\n  const footer = document.createElement(\"footer\");\r\n  footer.textContent = \"2023 | Made with ❤ by Maxnikit\";\r\n\r\n  content.appendChild(navBar);\r\n  content.appendChild(footer);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./src/assets/Burbank Big Regular Medium.ttf":
/*!***************************************************!*\
  !*** ./src/assets/Burbank Big Regular Medium.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c7483ad5d73ab8ba703.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/Burbank_Big_Regular_Medium.ttf?");

/***/ }),

/***/ "./src/assets/border.png":
/*!*******************************!*\
  !*** ./src/assets/border.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e4a1ac5a2776733d5ba3.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/border.png?");

/***/ }),

/***/ "./src/assets/mascot.png":
/*!*******************************!*\
  !*** ./src/assets/mascot.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0fb73147f46fd2b7be2f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/mascot.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;