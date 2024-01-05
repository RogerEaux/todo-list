/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-family: Helvetica, Arial, sans-serif;
  --bismuth: #762041;
  --lapis: #26619c;
  --peridot: #b4c424;
  --ruby: #ae001a;
  --sapphire: #568cf5;
  --steven: #f66fb2;
  --pearl: #eae0c8;
  --amethyst: #9966cc;
  --garnet: #9a2a2a;
  --shadow: 0px 0px 8px var(--bismuth);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  height: 100vh;
  flex-direction: column;
  display: flex;
}

.header {
  display: grid;
  grid-template-columns: 16rem 1fr;
  box-shadow: var(--shadow);
}

.logo-container {
  display: flex;
  padding: 16px;
  justify-self: center;
}

.logo-container > * {
  align-self: center;
}

.logo-container img {
  padding: 8px;
  width: auto;
  height: 75px;
}

.logo-container p {
  padding: 16px;
  font-size: 1.4rem;
}

.main {
  width: 80%;
  flex: 1;
  display: grid;
  grid-template-columns: 16rem 1fr;
}

nav {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
}

nav > * {
  padding: 8px;
}

@keyframes allTasksTrans {
  0% {
    transform: translateY(60%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

.all-tasks {
  animation: 0.5s ease-out 0s 1 allTasksTrans;
}

.project-button {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: left;
  font-size: 1rem;
  gap: 8px;
  border: none;
  border-radius: 5px;
  color: var(--bismuth);
  cursor: pointer;
}

.project-button img {
  width: auto;
  height: 1.5rem;
}

nav > h1 {
  font-size: 1.2rem;
}

.project-container {
  display: grid;
  grid-template-columns: 1fr;
  padding: 16px;
}

.project-container > h1,
.project-container > input {
  grid-area: 1 / 1;
  margin: 16px 8px;
  font-size: 1.4rem;
}

.project-container > h1 {
  cursor: pointer;
}

.task-container {
  display: grid;
  grid-template:
    'input title delete' 1fr
    '. due .' 1fr / 1.5rem 1fr 1rem;
  align-items: center;
  padding: 8px;
}

@keyframes taskCompletedTrans {
  0% {
    transform: translateX(0%);
    opacity: 1;
  }

  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.fade-out {
  animation: 1.25s ease-out 0s 1 taskCompletedTrans;
}

@keyframes taskCreatedTrans {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.fade-in {
  animation: 0.75s ease-in 0s 1 taskCreatedTrans;
}

.task-container > h2,
.task-container > input {
  grid-area: title;
  font-size: 1rem;
}

.task-container > h2 {
  cursor: pointer;
  font-weight: 400;
}

.task-container > button {
  cursor: pointer;
  color: var(--ruby);
  border: none;
  font-size: 1rem;
}

.task-container > button:active {
  color: var(--sapphire);
}

.task-container .task-due {
  grid-area: due;
  font-size: 0.7rem;
}

.checkbox-container {
  grid-area: input;
  position: relative;
}

.checkbox-container label {
  background-color: #ffffff;
  border: 2px solid var(--lapis);
  border-radius: 50%;
  cursor: pointer;
  height: 1.1rem;
  width: 1.1rem;
  position: absolute;
  left: 0;
  top: 0;
}

.checkbox-container input[type='checkbox'] {
  visibility: hidden;
}

.checkbox-container input[type='checkbox']:checked + label {
  background-color: var(--peridot);
  border-color: var(--peridot);
}

.add-button {
  font-size: 1rem;
  text-align: left;
  border: none;
  border-radius: 5px;
  padding: 8px;
  color: var(--bismuth);
  cursor: pointer;
}

.add-button:hover,
.project-button:hover {
  filter: brightness(90%);
}

.add-button:active,
.project-button:active,
.main .current-selected-project {
  filter: brightness(80%);
}

.footer {
  display: flex;
  padding: 16px;
  justify-content: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yCAAyC;EACzC,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,OAAO;EACP,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;IACE,0BAA0B;IAC1B,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,UAAU;EACZ;AACF;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,qBAAqB;EACrB,eAAe;EACf,QAAQ;EACR,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,aAAa;AACf;;AAEA;;EAEE,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb;;mCAEiC;EACjC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE;IACE,yBAAyB;IACzB,UAAU;EACZ;;EAEA;IACE,2BAA2B;IAC3B,UAAU;EACZ;AACF;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE;IACE,4BAA4B;IAC5B,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,UAAU;EACZ;AACF;;AAEA;EACE,8CAA8C;AAChD;;AAEA;;EAEE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,OAAO;EACP,MAAM;AACR;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;EAChC,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;;;EAGE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;AACzB","sourcesContent":[":root {\n  font-family: Helvetica, Arial, sans-serif;\n  --bismuth: #762041;\n  --lapis: #26619c;\n  --peridot: #b4c424;\n  --ruby: #ae001a;\n  --sapphire: #568cf5;\n  --steven: #f66fb2;\n  --pearl: #eae0c8;\n  --amethyst: #9966cc;\n  --garnet: #9a2a2a;\n  --shadow: 0px 0px 8px var(--bismuth);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  height: 100vh;\n  flex-direction: column;\n  display: flex;\n}\n\n.header {\n  display: grid;\n  grid-template-columns: 16rem 1fr;\n  box-shadow: var(--shadow);\n}\n\n.logo-container {\n  display: flex;\n  padding: 16px;\n  justify-self: center;\n}\n\n.logo-container > * {\n  align-self: center;\n}\n\n.logo-container img {\n  padding: 8px;\n  width: auto;\n  height: 75px;\n}\n\n.logo-container p {\n  padding: 16px;\n  font-size: 1.4rem;\n}\n\n.main {\n  width: 80%;\n  flex: 1;\n  display: grid;\n  grid-template-columns: 16rem 1fr;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  gap: 8px;\n}\n\nnav > * {\n  padding: 8px;\n}\n\n@keyframes allTasksTrans {\n  0% {\n    transform: translateY(60%);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n.all-tasks {\n  animation: 0.5s ease-out 0s 1 allTasksTrans;\n}\n\n.project-button {\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n  justify-content: left;\n  font-size: 1rem;\n  gap: 8px;\n  border: none;\n  border-radius: 5px;\n  color: var(--bismuth);\n  cursor: pointer;\n}\n\n.project-button img {\n  width: auto;\n  height: 1.5rem;\n}\n\nnav > h1 {\n  font-size: 1.2rem;\n}\n\n.project-container {\n  display: grid;\n  grid-template-columns: 1fr;\n  padding: 16px;\n}\n\n.project-container > h1,\n.project-container > input {\n  grid-area: 1 / 1;\n  margin: 16px 8px;\n  font-size: 1.4rem;\n}\n\n.project-container > h1 {\n  cursor: pointer;\n}\n\n.task-container {\n  display: grid;\n  grid-template:\n    'input title delete' 1fr\n    '. due .' 1fr / 1.5rem 1fr 1rem;\n  align-items: center;\n  padding: 8px;\n}\n\n@keyframes taskCompletedTrans {\n  0% {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n\n.fade-out {\n  animation: 1.25s ease-out 0s 1 taskCompletedTrans;\n}\n\n@keyframes taskCreatedTrans {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n}\n\n.fade-in {\n  animation: 0.75s ease-in 0s 1 taskCreatedTrans;\n}\n\n.task-container > h2,\n.task-container > input {\n  grid-area: title;\n  font-size: 1rem;\n}\n\n.task-container > h2 {\n  cursor: pointer;\n  font-weight: 400;\n}\n\n.task-container > button {\n  cursor: pointer;\n  color: var(--ruby);\n  border: none;\n  font-size: 1rem;\n}\n\n.task-container > button:active {\n  color: var(--sapphire);\n}\n\n.task-container .task-due {\n  grid-area: due;\n  font-size: 0.7rem;\n}\n\n.checkbox-container {\n  grid-area: input;\n  position: relative;\n}\n\n.checkbox-container label {\n  background-color: #ffffff;\n  border: 2px solid var(--lapis);\n  border-radius: 50%;\n  cursor: pointer;\n  height: 1.1rem;\n  width: 1.1rem;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.checkbox-container input[type='checkbox'] {\n  visibility: hidden;\n}\n\n.checkbox-container input[type='checkbox']:checked + label {\n  background-color: var(--peridot);\n  border-color: var(--peridot);\n}\n\n.add-button {\n  font-size: 1rem;\n  text-align: left;\n  border: none;\n  border-radius: 5px;\n  padding: 8px;\n  color: var(--bismuth);\n  cursor: pointer;\n}\n\n.add-button:hover,\n.project-button:hover {\n  filter: brightness(90%);\n}\n\n.add-button:active,\n.project-button:active,\n.main .current-selected-project {\n  filter: brightness(80%);\n}\n\n.footer {\n  display: flex;\n  padding: 16px;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _images_done_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/done.svg */ "./src/images/done.svg");
/* harmony import */ var _images_inbox_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/inbox.svg */ "./src/images/inbox.svg");
/* harmony import */ var _images_calendar_day_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/calendar-day.svg */ "./src/images/calendar-day.svg");
/* harmony import */ var _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/calendar-week.svg */ "./src/images/calendar-week.svg");
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskList */ "./src/modules/taskList.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");









// Helper functions

const formatTitle = (title) => title.replaceAll(' ', '-').toLowerCase();

const validateNewTaskTitle = (project, title) => {
  let errorMessage = '';

  project.tasks.forEach((task) => {
    if (formatTitle(title) === formatTitle(task.title)) {
      errorMessage = 'Task titles must be different';
    } else if (title === '') {
      errorMessage = 'Task must have a title';
    }
  });

  return errorMessage;
};

const validateNewProjectTitle = (taskList, title) => {
  let errorMessage = '';

  taskList.projects.forEach((project) => {
    if (formatTitle(title) === formatTitle(project.title)) {
      errorMessage = 'Project titles must be different';
    } else if (title === '') {
      errorMessage = 'Project must have a title';
    }
  });

  return errorMessage;
};

const getTaskAndProject = (taskID) => {
  const taskList = (0,_taskList__WEBPACK_IMPORTED_MODULE_5__["default"])().taskList;
  const projectID = `${taskID.split('--')[0]}`;

  const projectIndex = taskList.projects.findIndex(
    (project) => project.ID === projectID,
  );
  const taskIndex = taskList.projects[projectIndex].tasks.findIndex(
    (task) => task.ID === taskID,
  );

  const projectEdited = taskList.projects[projectIndex];
  const taskEdited = projectEdited.tasks[taskIndex];

  return { projectEdited, taskEdited };
};

// Handler functions

const handleProjectClick = (e) => {
  const navButtons = document.querySelectorAll('nav button');
  const taskList = (0,_taskList__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const projectTitle = e.target.textContent;
  const main = document.querySelector('main');

  navButtons.forEach((button) => {
    button.classList.remove('current-selected-project');
  });
  e.target.classList.add('current-selected-project');

  if (projectTitle === taskList.currentProject) {
    return;
  }

  taskList.currentProject = projectTitle;
  main.replaceChild(createAllTasksContainer(), main.lastChild);
};

const handleAddProject = () => {
  const nav = document.querySelector('nav');
  const taskList = (0,_taskList__WEBPACK_IMPORTED_MODULE_5__["default"])().taskList;

  const projectsTitles = [];
  taskList.projects.forEach((project) => {
    projectsTitles.push(project.title);
  });

  let title = 'Do all the things';

  while (projectsTitles.includes(title)) {
    title = title.replace('o ', 'oo ');
  }

  nav.insertBefore(createProjectButton(title), nav.lastChild);
  taskList.addProject((0,_project__WEBPACK_IMPORTED_MODULE_6__["default"])(formatTitle(title), title));
};

const handleClickOutsideTaskInput = (e, taskID, clickOutsideInput) => {
  const taskTitle = document.querySelector(`#${taskID} > h2`);
  const taskTitleInput = document.querySelector(`#${taskID} > input`);

  if (
    e.target.closest(`#${taskID} > h2`) ||
    e.target.closest(`#${taskID} > input`)
  ) {
    return;
  }
  document.removeEventListener('click', clickOutsideInput);
  if (taskTitle) {
    taskTitle.setAttribute('style', 'visibility:visible');
    taskTitleInput.setAttribute('onfocus', "value=''");
    taskTitleInput.setAttribute('style', 'visibility:hidden');
  }
};

const handleEditTaskInput = (e, taskID, clickOutsideInput) => {
  const taskTitle = document.querySelector(`#${taskID} > h2`);
  const taskTitleInput = document.querySelector(`#${taskID} > input`);

  if (e.keyCode === 27 || e.keyCode === 13) {
    taskTitle.setAttribute('style', 'visibility:visible');
    taskTitleInput.setAttribute('onfocus', "value=''");
    taskTitleInput.setAttribute('style', 'visibility:hidden');
  }
  if (e.keyCode === 13) {
    const projectID = `${taskID.split('--')[0]}`;
    const projectEditedNode = document.getElementById(projectID);
    const taskEditedNode = document.getElementById(taskID);
    const { projectEdited, taskEdited } = getTaskAndProject(taskID);

    const errorMessage = validateNewTaskTitle(
      projectEdited,
      taskTitleInput.value,
    );
    if (errorMessage) {
      console.log(errorMessage);
      return;
    }

    taskEdited.ID = `${projectID}--${formatTitle(taskTitleInput.value)}`;
    taskEdited.title = taskTitleInput.value;
    projectEditedNode.replaceChild(
      createTaskContainer(
        projectEdited.title,
        taskEdited.title,
        taskEdited.dueDate,
      ),
      taskEditedNode,
    );

    document.removeEventListener('click', clickOutsideInput);
  }
};

const handleEditTask = (taskID, clickOutsideInput) => {
  const taskTitle = document.querySelector(`#${taskID} > h2`);
  const taskTitleInput = document.querySelector(`#${taskID} > input`);

  document.addEventListener('click', clickOutsideInput);

  taskTitle.setAttribute('style', 'visibility:hidden');
  taskTitleInput.setAttribute('style', 'visibility:visible');
  taskTitleInput.focus();
};

const handleClickOutsideProjectInput = (e, projectID, clickOutsideInput) => {
  const projectTitle = document.querySelector(`#${projectID} > h1`);
  const projectTitleInput = document.querySelector(`#${projectID} > input`);

  if (
    e.target.closest(`#${projectID} > h1`) ||
    e.target.closest(`#${projectID} > input`)
  ) {
    return;
  }
  document.removeEventListener('click', clickOutsideInput);
  if (projectTitle) {
    projectTitle.setAttribute('style', 'visibility:visible');
    projectTitleInput.setAttribute('onfocus', "value=''");
    projectTitleInput.setAttribute('style', 'visibility:hidden');
  }
};

const handleEditProjectInput = (e, projectID, clickOutsideInput) => {
  const projectTitle = document.querySelector(`#${projectID} > h1`);
  const projectTitleInput = document.querySelector(`#${projectID} > input`);

  if (e.keyCode === 27 || e.keyCode === 13) {
    projectTitle.setAttribute('style', 'visibility:visible');
    projectTitleInput.setAttribute('onfocus', "value=''");
    projectTitleInput.setAttribute('style', 'visibility:hidden');
  }
  if (e.keyCode === 13) {
    const taskList = (0,_taskList__WEBPACK_IMPORTED_MODULE_5__["default"])().taskList;
    const currentProject = (0,_taskList__WEBPACK_IMPORTED_MODULE_5__["default"])().currentProject;
    const allTasks = document.querySelector('.all-tasks');
    const projectEditedNode = document.getElementById(projectID);
    const nav = document.querySelector('nav');
    let dueDate = 'All';

    const projectIndex = taskList.projects.findIndex(
      (project) => project.ID === projectID,
    );

    const projectEdited = taskList.projects[projectIndex];
    const projectButtonEdited = Array.from(nav.childNodes).find(
      (button) => button.textContent === projectEdited.title,
    );

    const errorMessage = validateNewProjectTitle(
      taskList,
      projectTitleInput.value,
    );
    if (errorMessage) {
      console.log(errorMessage);
      return;
    }
    if (currentProject === 'Today' || currentProject === 'Week') {
      dueDate = 'Today';
    }

    projectEdited.tasks.forEach((task) => {
      task.ID = task.ID.replace(
        projectID,
        `${formatTitle(projectTitleInput.value)}`,
      );
    });
    projectEdited.ID = `${formatTitle(projectTitleInput.value)}`;
    projectEdited.title = projectTitleInput.value;
    allTasks.replaceChild(
      createProjectContainer(projectEdited, dueDate),
      projectEditedNode,
    );
    nav.replaceChild(
      createProjectButton(projectTitleInput.value),
      projectButtonEdited,
    );

    document.removeEventListener('click', clickOutsideInput);
  }
};

const handleEditProject = (projectID, clickOutsideInput) => {
  const projectTitle = document.querySelector(`#${projectID} > h1`);
  const projectTitleInput = document.querySelector(`#${projectID} > input`);

  document.addEventListener('click', clickOutsideInput);

  projectTitle.setAttribute('style', 'visibility:hidden');
  projectTitleInput.setAttribute('style', 'visibility:visible');
  projectTitleInput.focus();
};

const handleAddTask = (project) => {
  const projectNode = document.getElementById(formatTitle(project.title));

  const projectTaskTitles = [];
  project.tasks.forEach((task) => {
    projectTaskTitles.push(task.title);
  });

  let title = 'Do the thing';

  while (projectTaskTitles.includes(title)) {
    title = title.replace('o ', 'oo ');
  }

  const taskID = `${formatTitle(project.title)}--${formatTitle(title)}`;
  const newTask = createTaskContainer(project.title, title, 'Today');
  newTask.classList.add('fade-in');

  projectNode.insertBefore(newTask, projectNode.lastChild);
  project.addTask((0,_task__WEBPACK_IMPORTED_MODULE_7__["default"])(taskID, title, 'Today'));
};

const handleChecboxActive = (e) => {
  const taskContainer = e.target.parentNode.parentNode;
  const taskID = taskContainer.getAttribute('id');
  const { projectEdited, taskEdited } = getTaskAndProject(taskID);

  taskContainer.classList.remove('fade-in');
  taskContainer.classList.add('fade-out');
  setTimeout(() => {
    taskContainer.parentNode.removeChild(taskContainer);
    projectEdited.removeTask(taskEdited);
  }, 750);
};

const handleDeleteProject = (e) => {
  const taskContainer = e.target.parentNode;
  const taskID = taskContainer.getAttribute('id');
  const { projectEdited, taskEdited } = getTaskAndProject(taskID);

  taskContainer.classList.remove('fade-in');
  taskContainer.classList.add('fade-out');
  setTimeout(() => {
    taskContainer.parentNode.removeChild(taskContainer);
    projectEdited.removeTask(taskEdited);
  }, 750);
};

// Create DOM elements

const createTop = () => {
  const top = document.createElement('header');
  const logo = document.createElement('img');
  const logoTitle = document.createElement('p');
  const logoContainer = document.createElement('div');

  top.classList.add('header');
  logoTitle.textContent = 'Do a thing';
  logoContainer.classList.add('logo-container');
  logo.src = _images_done_svg__WEBPACK_IMPORTED_MODULE_1__;
  logo.alt = 'Two checkmarks';

  logoContainer.append(logo, logoTitle);
  top.appendChild(logoContainer);

  return top;
};

const createProjectButton = (title) => {
  const button = document.createElement('button');

  button.textContent = title;
  button.classList.add('project-button');
  button.addEventListener('click', (e) => handleProjectClick(e));

  return button;
};

const createSide = () => {
  const side = document.createElement('nav');
  const inbox = createProjectButton('Inbox');
  const inboxImg = document.createElement('img');
  const today = createProjectButton('Today');
  const todayImg = document.createElement('img');
  const week = createProjectButton('Week');
  const weekImg = document.createElement('img');
  const projectSection = document.createElement('h1');
  const addProject = document.createElement('button');
  const taskList = (0,_taskList__WEBPACK_IMPORTED_MODULE_5__["default"])().taskList;

  inboxImg.src = _images_inbox_svg__WEBPACK_IMPORTED_MODULE_2__;
  inboxImg.alt = 'Inbox icon';
  inbox.classList.add('current-selected-project');
  inbox.appendChild(inboxImg);
  todayImg.src = _images_calendar_day_svg__WEBPACK_IMPORTED_MODULE_3__;
  todayImg.alt = 'Today icon';
  today.appendChild(todayImg);
  weekImg.src = _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_4__;
  weekImg.alt = 'Week icon';
  week.appendChild(weekImg);
  projectSection.textContent = 'Projects';
  addProject.classList.add('add-button');
  addProject.textContent = '＋ Add project';
  addProject.addEventListener('click', () => handleAddProject());

  side.append(inbox, today, week, projectSection);

  taskList.projects.forEach((project) => {
    side.appendChild(createProjectButton(project.title));
  });

  side.appendChild(addProject);

  return side;
};

const createTaskContainer = (projectTitle, title, dueDate) => {
  const taskContainer = document.createElement('div');
  const taskCheckboxContainer = document.createElement('div');
  const taskCompleted = document.createElement('input');
  const taskLabel = document.createElement('label');
  const taskTitleInput = document.createElement('input');
  const taskTitle = document.createElement('h2');
  const taskDelete = document.createElement('button');
  const taskDueDate = document.createElement('p');
  const taskID = `${formatTitle(projectTitle)}--${formatTitle(title)}`;
  const clickOutsideInput = (e) =>
    handleClickOutsideTaskInput(e, taskID, clickOutsideInput);

  taskContainer.classList.add('task-container');
  taskContainer.setAttribute('id', taskID);
  taskCheckboxContainer.classList.add('checkbox-container');
  taskCompleted.setAttribute('type', 'checkbox');
  taskCompleted.setAttribute('id', `${taskID}-input-completed`);
  taskLabel.setAttribute('for', `${taskID}-input-completed`);
  taskLabel.addEventListener('click', (e) => handleChecboxActive(e));
  taskTitleInput.setAttribute('type', 'text');
  taskTitleInput.setAttribute('style', 'visibility:hidden');
  taskTitleInput.setAttribute('id', `${taskID}-input-edit-title`);
  taskTitleInput.addEventListener('keydown', (e) =>
    handleEditTaskInput(e, taskID, clickOutsideInput),
  );
  taskTitle.textContent = title;
  taskTitle.addEventListener('click', () =>
    handleEditTask(taskID, clickOutsideInput),
  );
  taskDelete.textContent = '✖';
  taskDelete.addEventListener('click', (e) => handleDeleteProject(e));
  taskDueDate.textContent = dueDate;
  taskDueDate.classList.add('task-due');

  taskCheckboxContainer.append(taskCompleted, taskLabel);
  taskContainer.append(
    taskCheckboxContainer,
    taskTitleInput,
    taskTitle,
    taskDelete,
    taskDueDate,
  );

  return taskContainer;
};

const createProjectContainer = (project, dueDate) => {
  const projectContainer = document.createElement('div');
  const projectTitle = document.createElement('h1');
  const projectTitleInput = document.createElement('input');
  const projectID = formatTitle(project.title);
  const addTask = document.createElement('button');
  const clickOutsideProjectInput = (e) =>
    handleClickOutsideProjectInput(e, projectID, clickOutsideProjectInput);

  projectContainer.classList.add('project-container');
  projectContainer.setAttribute('id', projectID);
  projectTitleInput.setAttribute('type', 'text');
  projectTitleInput.classList.add('project-title');
  projectTitleInput.setAttribute('style', 'visibility:hidden');
  projectTitleInput.setAttribute('id', `${projectID}-input-edit-title`);
  projectTitleInput.addEventListener('keydown', (e) =>
    handleEditProjectInput(e, projectID, clickOutsideProjectInput),
  );
  projectTitle.textContent = project.title;
  projectTitle.addEventListener('click', () =>
    handleEditProject(projectID, clickOutsideProjectInput),
  );

  projectContainer.append(projectTitle, projectTitleInput);

  project.tasks.forEach((task) => {
    if (
      (dueDate === 'Today' && task.dueDate === 'Today') ||
      dueDate === 'All'
    ) {
      const taskContainer = createTaskContainer(
        project.title,
        task.title,
        task.dueDate,
      );

      projectContainer.appendChild(taskContainer);
    }
  });

  addTask.classList.add('add-button');
  addTask.textContent = '＋ Add task';
  addTask.addEventListener('click', () => handleAddTask(project));
  projectContainer.appendChild(addTask);

  return projectContainer;
};

const createAllTasksContainer = () => {
  const allTasks = document.createElement('div');
  const currentProject = (0,_taskList__WEBPACK_IMPORTED_MODULE_5__["default"])().currentProject;
  const taskList = (0,_taskList__WEBPACK_IMPORTED_MODULE_5__["default"])().taskList;

  if (currentProject === 'Inbox') {
    taskList.projects.forEach((project) => {
      const projectContainer = createProjectContainer(project, 'All');

      if (projectContainer.querySelector('.task-container')) {
        allTasks.appendChild(projectContainer);
      }
    });
  } else if (currentProject === 'Today' || currentProject === 'Week') {
    taskList.projects.forEach((project) => {
      const projectContainer = createProjectContainer(project, 'Today');

      if (projectContainer.querySelector('.task-container')) {
        allTasks.appendChild(projectContainer);
      }
    });
  } else {
    const projectContainer = createProjectContainer(
      taskList.projects.find((project) => project.title === currentProject),
      'All',
    );

    allTasks.appendChild(projectContainer);
  }

  allTasks.classList.add('all-tasks');
  return allTasks;
};

const createMain = () => {
  const main = document.createElement('main');

  main.append(createSide(), createAllTasksContainer());
  main.classList.add('main');

  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  const para = document.createElement('p');

  footer.classList.add('footer');
  para.textContent = 'Copyright © 2023 RogerEaux';
  footer.appendChild(para);

  return footer;
};

const createContent = () => {
  const body = document.querySelector('body');

  body.append(createTop(), createMain(), createFooter());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContent);


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createProject = (ID, title) => {
  let projectID = ID;
  let projectTitle = title;
  const projectTasks = [];

  const addTask = (task) => {
    projectTasks.push(task);
  };

  const removeTask = (task) => {
    projectTasks.splice(projectTasks.indexOf(task), 1);
  };

  return {
    get ID() {
      return projectID;
    },

    set ID(ID) {
      projectID = ID;
    },

    get title() {
      return projectTitle;
    },

    set title(title) {
      projectTitle = title;
    },

    get tasks() {
      return projectTasks;
    },

    addTask,

    removeTask,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createTask = (ID, title, dueDate) => {
  let taskID = ID;
  let taskTitle = title;
  let taskDueDate = dueDate;

  let taskCompleted = false;

  return {
    get ID() {
      return taskID;
    },

    set ID(ID) {
      taskID = ID;
    },

    get title() {
      return taskTitle;
    },

    set title(title) {
      taskTitle = title;
    },

    get dueDate() {
      return taskDueDate;
    },

    set dueDate(dueDate) {
      taskDueDate = dueDate;
    },

    get completed() {
      return taskCompleted;
    },

    set completed(completed) {
      taskCompleted = completed;
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


/***/ }),

/***/ "./src/modules/taskList.js":
/*!*********************************!*\
  !*** ./src/modules/taskList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");



const createTaskList = () => {
  const taskProjects = [(0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])('personal', 'Personal')];
  taskProjects[0].addTask((0,_task__WEBPACK_IMPORTED_MODULE_1__["default"])('personal--pet-dog', 'Pet dog', 'Now'));
  taskProjects[0].addTask((0,_task__WEBPACK_IMPORTED_MODULE_1__["default"])('personal--smile', 'Smile', 'Today'));

  const addProject = (project) => {
    taskProjects.push(project);
  };

  return {
    get projects() {
      return taskProjects;
    },

    addProject,
  };
};

const taskList = createTaskList();
let currentProject = 'Inbox';

const getTaskList = () => ({
  get taskList() {
    return taskList;
  },

  get currentProject() {
    return currentProject;
  },

  set currentProject(project) {
    currentProject = project;
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTaskList);


/***/ }),

/***/ "./src/images/calendar-day.svg":
/*!*************************************!*\
  !*** ./src/images/calendar-day.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a661e46081aed2fc430e.svg";

/***/ }),

/***/ "./src/images/calendar-week.svg":
/*!**************************************!*\
  !*** ./src/images/calendar-week.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb6d5d7e50002d7896c2.svg";

/***/ }),

/***/ "./src/images/done.svg":
/*!*****************************!*\
  !*** ./src/images/done.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2c810052b7988034530.svg";

/***/ }),

/***/ "./src/images/inbox.svg":
/*!******************************!*\
  !*** ./src/images/inbox.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4793f40f7e91a1a64ba5.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");


(0,_modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFX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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7OztBQ0F5Qzs7QUFFekMsdURBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC0tYmlzbXV0aDogIzc2MjA0MTtcbiAgLS1sYXBpczogIzI2NjE5YztcbiAgLS1wZXJpZG90OiAjYjRjNDI0O1xuICAtLXJ1Ynk6ICNhZTAwMWE7XG4gIC0tc2FwcGhpcmU6ICM1NjhjZjU7XG4gIC0tc3RldmVuOiAjZjY2ZmIyO1xuICAtLXBlYXJsOiAjZWFlMGM4O1xuICAtLWFtZXRoeXN0OiAjOTk2NmNjO1xuICAtLWdhcm5ldDogIzlhMmEyYTtcbiAgLS1zaGFkb3c6IDBweCAwcHggOHB4IHZhcigtLWJpc211dGgpO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZyZW0gMWZyO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmxvZ28tY29udGFpbmVyID4gKiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmxvZ28tY29udGFpbmVyIGltZyB7XG4gIHBhZGRpbmc6IDhweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNzVweDtcbn1cblxuLmxvZ28tY29udGFpbmVyIHAge1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLm1haW4ge1xuICB3aWR0aDogODAlO1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2cmVtIDFmcjtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTZweDtcbiAgZ2FwOiA4cHg7XG59XG5cbm5hdiA+ICoge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbkBrZXlmcmFtZXMgYWxsVGFza3NUcmFucyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5hbGwtdGFza3Mge1xuICBhbmltYXRpb246IDAuNXMgZWFzZS1vdXQgMHMgMSBhbGxUYXNrc1RyYW5zO1xufVxuXG4ucHJvamVjdC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBnYXA6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1iaXNtdXRoKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1idXR0b24gaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMS41cmVtO1xufVxuXG5uYXYgPiBoMSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLnByb2plY3QtY29udGFpbmVyID4gaDEsXG4ucHJvamVjdC1jb250YWluZXIgPiBpbnB1dCB7XG4gIGdyaWQtYXJlYTogMSAvIDE7XG4gIG1hcmdpbjogMTZweCA4cHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIgPiBoMSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTpcbiAgICAnaW5wdXQgdGl0bGUgZGVsZXRlJyAxZnJcbiAgICAnLiBkdWUgLicgMWZyIC8gMS41cmVtIDFmciAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbkBrZXlmcmFtZXMgdGFza0NvbXBsZXRlZFRyYW5zIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5mYWRlLW91dCB7XG4gIGFuaW1hdGlvbjogMS4yNXMgZWFzZS1vdXQgMHMgMSB0YXNrQ29tcGxldGVkVHJhbnM7XG59XG5cbkBrZXlmcmFtZXMgdGFza0NyZWF0ZWRUcmFucyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmZhZGUtaW4ge1xuICBhbmltYXRpb246IDAuNzVzIGVhc2UtaW4gMHMgMSB0YXNrQ3JlYXRlZFRyYW5zO1xufVxuXG4udGFzay1jb250YWluZXIgPiBoMixcbi50YXNrLWNvbnRhaW5lciA+IGlucHV0IHtcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFzay1jb250YWluZXIgPiBoMiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnRhc2stY29udGFpbmVyID4gYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tcnVieSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFzay1jb250YWluZXIgPiBidXR0b246YWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXNhcHBoaXJlKTtcbn1cblxuLnRhc2stY29udGFpbmVyIC50YXNrLWR1ZSB7XG4gIGdyaWQtYXJlYTogZHVlO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogaW5wdXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxhcGlzKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMS4xcmVtO1xuICB3aWR0aDogMS4xcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVyaWRvdCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcGVyaWRvdCk7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogdmFyKC0tYmlzbXV0aCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1idXR0b246aG92ZXIsXG4ucHJvamVjdC1idXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbn1cblxuLmFkZC1idXR0b246YWN0aXZlLFxuLnByb2plY3QtYnV0dG9uOmFjdGl2ZSxcbi5tYWluIC5jdXJyZW50LXNlbGVjdGVkLXByb2plY3Qge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87RUFDUCxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsVUFBVTtFQUNaOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiOzttQ0FFaUM7RUFDakMsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07QUFDUjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0VBR0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAtLWJpc211dGg6ICM3NjIwNDE7XFxuICAtLWxhcGlzOiAjMjY2MTljO1xcbiAgLS1wZXJpZG90OiAjYjRjNDI0O1xcbiAgLS1ydWJ5OiAjYWUwMDFhO1xcbiAgLS1zYXBwaGlyZTogIzU2OGNmNTtcXG4gIC0tc3RldmVuOiAjZjY2ZmIyO1xcbiAgLS1wZWFybDogI2VhZTBjODtcXG4gIC0tYW1ldGh5c3Q6ICM5OTY2Y2M7XFxuICAtLWdhcm5ldDogIzlhMmEyYTtcXG4gIC0tc2hhZG93OiAwcHggMHB4IDhweCB2YXIoLS1iaXNtdXRoKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZyZW0gMWZyO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciA+ICoge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIgaW1nIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIgcCB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5tYWluIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZyZW0gMWZyO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbm5hdiA+ICoge1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFsbFRhc2tzVHJhbnMge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjAlKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uYWxsLXRhc2tzIHtcXG4gIGFuaW1hdGlvbjogMC41cyBlYXNlLW91dCAwcyAxIGFsbFRhc2tzVHJhbnM7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGdhcDogOHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHZhcigtLWJpc211dGgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24gaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbm5hdiA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyID4gaDEsXFxuLnByb2plY3QtY29udGFpbmVyID4gaW5wdXQge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMTtcXG4gIG1hcmdpbjogMTZweCA4cHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyID4gaDEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICdpbnB1dCB0aXRsZSBkZWxldGUnIDFmclxcbiAgICAnLiBkdWUgLicgMWZyIC8gMS41cmVtIDFmciAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuQGtleWZyYW1lcyB0YXNrQ29tcGxldGVkVHJhbnMge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLmZhZGUtb3V0IHtcXG4gIGFuaW1hdGlvbjogMS4yNXMgZWFzZS1vdXQgMHMgMSB0YXNrQ29tcGxldGVkVHJhbnM7XFxufVxcblxcbkBrZXlmcmFtZXMgdGFza0NyZWF0ZWRUcmFucyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmZhZGUtaW4ge1xcbiAgYW5pbWF0aW9uOiAwLjc1cyBlYXNlLWluIDBzIDEgdGFza0NyZWF0ZWRUcmFucztcXG59XFxuXFxuLnRhc2stY29udGFpbmVyID4gaDIsXFxuLnRhc2stY29udGFpbmVyID4gaW5wdXQge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyID4gaDIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1ydWJ5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyID4gYnV0dG9uOmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tc2FwcGhpcmUpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLnRhc2stZHVlIHtcXG4gIGdyaWQtYXJlYTogZHVlO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBpbnB1dDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGFwaXMpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjFyZW07XFxuICB3aWR0aDogMS4xcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZXJpZG90KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcGVyaWRvdCk7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBjb2xvcjogdmFyKC0tYmlzbXV0aCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtYnV0dG9uOmhvdmVyLFxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG59XFxuXFxuLmFkZC1idXR0b246YWN0aXZlLFxcbi5wcm9qZWN0LWJ1dHRvbjphY3RpdmUsXFxuLm1haW4gLmN1cnJlbnQtc2VsZWN0ZWQtcHJvamVjdCB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNoZWNrbWFya0ljb24gZnJvbSAnLi4vaW1hZ2VzL2RvbmUuc3ZnJztcbmltcG9ydCBpbmJveEljb24gZnJvbSAnLi4vaW1hZ2VzL2luYm94LnN2Zyc7XG5pbXBvcnQgdG9kYXlJY29uIGZyb20gJy4uL2ltYWdlcy9jYWxlbmRhci1kYXkuc3ZnJztcbmltcG9ydCB3ZWVrSWNvbiBmcm9tICcuLi9pbWFnZXMvY2FsZW5kYXItd2Vlay5zdmcnO1xuaW1wb3J0IGdldFRhc2tMaXN0IGZyb20gJy4vdGFza0xpc3QnO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vdGFzayc7XG5cbi8vIEhlbHBlciBmdW5jdGlvbnNcblxuY29uc3QgZm9ybWF0VGl0bGUgPSAodGl0bGUpID0+IHRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnLScpLnRvTG93ZXJDYXNlKCk7XG5cbmNvbnN0IHZhbGlkYXRlTmV3VGFza1RpdGxlID0gKHByb2plY3QsIHRpdGxlKSA9PiB7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSAnJztcblxuICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAoZm9ybWF0VGl0bGUodGl0bGUpID09PSBmb3JtYXRUaXRsZSh0YXNrLnRpdGxlKSkge1xuICAgICAgZXJyb3JNZXNzYWdlID0gJ1Rhc2sgdGl0bGVzIG11c3QgYmUgZGlmZmVyZW50JztcbiAgICB9IGVsc2UgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgZXJyb3JNZXNzYWdlID0gJ1Rhc2sgbXVzdCBoYXZlIGEgdGl0bGUnO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVycm9yTWVzc2FnZTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlTmV3UHJvamVjdFRpdGxlID0gKHRhc2tMaXN0LCB0aXRsZSkgPT4ge1xuICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XG5cbiAgdGFza0xpc3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChmb3JtYXRUaXRsZSh0aXRsZSkgPT09IGZvcm1hdFRpdGxlKHByb2plY3QudGl0bGUpKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSAnUHJvamVjdCB0aXRsZXMgbXVzdCBiZSBkaWZmZXJlbnQnO1xuICAgIH0gZWxzZSBpZiAodGl0bGUgPT09ICcnKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSAnUHJvamVjdCBtdXN0IGhhdmUgYSB0aXRsZSc7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXJyb3JNZXNzYWdlO1xufTtcblxuY29uc3QgZ2V0VGFza0FuZFByb2plY3QgPSAodGFza0lEKSA9PiB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZ2V0VGFza0xpc3QoKS50YXNrTGlzdDtcbiAgY29uc3QgcHJvamVjdElEID0gYCR7dGFza0lELnNwbGl0KCctLScpWzBdfWA7XG5cbiAgY29uc3QgcHJvamVjdEluZGV4ID0gdGFza0xpc3QucHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LklEID09PSBwcm9qZWN0SUQsXG4gICk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IHRhc2tMaXN0LnByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuZmluZEluZGV4KFxuICAgICh0YXNrKSA9PiB0YXNrLklEID09PSB0YXNrSUQsXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdEVkaXRlZCA9IHRhc2tMaXN0LnByb2plY3RzW3Byb2plY3RJbmRleF07XG4gIGNvbnN0IHRhc2tFZGl0ZWQgPSBwcm9qZWN0RWRpdGVkLnRhc2tzW3Rhc2tJbmRleF07XG5cbiAgcmV0dXJuIHsgcHJvamVjdEVkaXRlZCwgdGFza0VkaXRlZCB9O1xufTtcblxuLy8gSGFuZGxlciBmdW5jdGlvbnNcblxuY29uc3QgaGFuZGxlUHJvamVjdENsaWNrID0gKGUpID0+IHtcbiAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBidXR0b24nKTtcbiAgY29uc3QgdGFza0xpc3QgPSBnZXRUYXNrTGlzdCgpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICBuYXZCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LXNlbGVjdGVkLXByb2plY3QnKTtcbiAgfSk7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtc2VsZWN0ZWQtcHJvamVjdCcpO1xuXG4gIGlmIChwcm9qZWN0VGl0bGUgPT09IHRhc2tMaXN0LmN1cnJlbnRQcm9qZWN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGFza0xpc3QuY3VycmVudFByb2plY3QgPSBwcm9qZWN0VGl0bGU7XG4gIG1haW4ucmVwbGFjZUNoaWxkKGNyZWF0ZUFsbFRhc2tzQ29udGFpbmVyKCksIG1haW4ubGFzdENoaWxkKTtcbn07XG5cbmNvbnN0IGhhbmRsZUFkZFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICBjb25zdCB0YXNrTGlzdCA9IGdldFRhc2tMaXN0KCkudGFza0xpc3Q7XG5cbiAgY29uc3QgcHJvamVjdHNUaXRsZXMgPSBbXTtcbiAgdGFza0xpc3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzVGl0bGVzLnB1c2gocHJvamVjdC50aXRsZSk7XG4gIH0pO1xuXG4gIGxldCB0aXRsZSA9ICdEbyBhbGwgdGhlIHRoaW5ncyc7XG5cbiAgd2hpbGUgKHByb2plY3RzVGl0bGVzLmluY2x1ZGVzKHRpdGxlKSkge1xuICAgIHRpdGxlID0gdGl0bGUucmVwbGFjZSgnbyAnLCAnb28gJyk7XG4gIH1cblxuICBuYXYuaW5zZXJ0QmVmb3JlKGNyZWF0ZVByb2plY3RCdXR0b24odGl0bGUpLCBuYXYubGFzdENoaWxkKTtcbiAgdGFza0xpc3QuYWRkUHJvamVjdChjcmVhdGVQcm9qZWN0KGZvcm1hdFRpdGxlKHRpdGxlKSwgdGl0bGUpKTtcbn07XG5cbmNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZVRhc2tJbnB1dCA9IChlLCB0YXNrSUQsIGNsaWNrT3V0c2lkZUlucHV0KSA9PiB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tJRH0gPiBoMmApO1xuICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tJRH0gPiBpbnB1dGApO1xuXG4gIGlmIChcbiAgICBlLnRhcmdldC5jbG9zZXN0KGAjJHt0YXNrSUR9ID4gaDJgKSB8fFxuICAgIGUudGFyZ2V0LmNsb3Nlc3QoYCMke3Rhc2tJRH0gPiBpbnB1dGApXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrT3V0c2lkZUlucHV0KTtcbiAgaWYgKHRhc2tUaXRsZSkge1xuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6dmlzaWJsZScpO1xuICAgIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnb25mb2N1cycsIFwidmFsdWU9JydcIik7XG4gICAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OmhpZGRlbicpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVFZGl0VGFza0lucHV0ID0gKGUsIHRhc2tJRCwgY2xpY2tPdXRzaWRlSW5wdXQpID0+IHtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFza0lEfSA+IGgyYCk7XG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFza0lEfSA+IGlucHV0YCk7XG5cbiAgaWYgKGUua2V5Q29kZSA9PT0gMjcgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6dmlzaWJsZScpO1xuICAgIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnb25mb2N1cycsIFwidmFsdWU9JydcIik7XG4gICAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OmhpZGRlbicpO1xuICB9XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgY29uc3QgcHJvamVjdElEID0gYCR7dGFza0lELnNwbGl0KCctLScpWzBdfWA7XG4gICAgY29uc3QgcHJvamVjdEVkaXRlZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0SUQpO1xuICAgIGNvbnN0IHRhc2tFZGl0ZWROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFza0lEKTtcbiAgICBjb25zdCB7IHByb2plY3RFZGl0ZWQsIHRhc2tFZGl0ZWQgfSA9IGdldFRhc2tBbmRQcm9qZWN0KHRhc2tJRCk7XG5cbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB2YWxpZGF0ZU5ld1Rhc2tUaXRsZShcbiAgICAgIHByb2plY3RFZGl0ZWQsXG4gICAgICB0YXNrVGl0bGVJbnB1dC52YWx1ZSxcbiAgICApO1xuICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGFza0VkaXRlZC5JRCA9IGAke3Byb2plY3RJRH0tLSR7Zm9ybWF0VGl0bGUodGFza1RpdGxlSW5wdXQudmFsdWUpfWA7XG4gICAgdGFza0VkaXRlZC50aXRsZSA9IHRhc2tUaXRsZUlucHV0LnZhbHVlO1xuICAgIHByb2plY3RFZGl0ZWROb2RlLnJlcGxhY2VDaGlsZChcbiAgICAgIGNyZWF0ZVRhc2tDb250YWluZXIoXG4gICAgICAgIHByb2plY3RFZGl0ZWQudGl0bGUsXG4gICAgICAgIHRhc2tFZGl0ZWQudGl0bGUsXG4gICAgICAgIHRhc2tFZGl0ZWQuZHVlRGF0ZSxcbiAgICAgICksXG4gICAgICB0YXNrRWRpdGVkTm9kZSxcbiAgICApO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja091dHNpZGVJbnB1dCk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUVkaXRUYXNrID0gKHRhc2tJRCwgY2xpY2tPdXRzaWRlSW5wdXQpID0+IHtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFza0lEfSA+IGgyYCk7XG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFza0lEfSA+IGlucHV0YCk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja091dHNpZGVJbnB1dCk7XG5cbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTpoaWRkZW4nKTtcbiAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OnZpc2libGUnKTtcbiAgdGFza1RpdGxlSW5wdXQuZm9jdXMoKTtcbn07XG5cbmNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZVByb2plY3RJbnB1dCA9IChlLCBwcm9qZWN0SUQsIGNsaWNrT3V0c2lkZUlucHV0KSA9PiB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJRH0gPiBoMWApO1xuICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJRH0gPiBpbnB1dGApO1xuXG4gIGlmIChcbiAgICBlLnRhcmdldC5jbG9zZXN0KGAjJHtwcm9qZWN0SUR9ID4gaDFgKSB8fFxuICAgIGUudGFyZ2V0LmNsb3Nlc3QoYCMke3Byb2plY3RJRH0gPiBpbnB1dGApXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrT3V0c2lkZUlucHV0KTtcbiAgaWYgKHByb2plY3RUaXRsZSkge1xuICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6dmlzaWJsZScpO1xuICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnb25mb2N1cycsIFwidmFsdWU9JydcIik7XG4gICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OmhpZGRlbicpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVFZGl0UHJvamVjdElucHV0ID0gKGUsIHByb2plY3RJRCwgY2xpY2tPdXRzaWRlSW5wdXQpID0+IHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJvamVjdElEfSA+IGgxYCk7XG4gIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJvamVjdElEfSA+IGlucHV0YCk7XG5cbiAgaWYgKGUua2V5Q29kZSA9PT0gMjcgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6dmlzaWJsZScpO1xuICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnb25mb2N1cycsIFwidmFsdWU9JydcIik7XG4gICAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OmhpZGRlbicpO1xuICB9XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBnZXRUYXNrTGlzdCgpLnRhc2tMaXN0O1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0VGFza0xpc3QoKS5jdXJyZW50UHJvamVjdDtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdGFza3MnKTtcbiAgICBjb25zdCBwcm9qZWN0RWRpdGVkTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3RJRCk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gICAgbGV0IGR1ZURhdGUgPSAnQWxsJztcblxuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRhc2tMaXN0LnByb2plY3RzLmZpbmRJbmRleChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LklEID09PSBwcm9qZWN0SUQsXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2plY3RFZGl0ZWQgPSB0YXNrTGlzdC5wcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuICAgIGNvbnN0IHByb2plY3RCdXR0b25FZGl0ZWQgPSBBcnJheS5mcm9tKG5hdi5jaGlsZE5vZGVzKS5maW5kKFxuICAgICAgKGJ1dHRvbikgPT4gYnV0dG9uLnRleHRDb250ZW50ID09PSBwcm9qZWN0RWRpdGVkLnRpdGxlLFxuICAgICk7XG5cbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB2YWxpZGF0ZU5ld1Byb2plY3RUaXRsZShcbiAgICAgIHRhc2tMaXN0LFxuICAgICAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUsXG4gICAgKTtcbiAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFByb2plY3QgPT09ICdUb2RheScgfHwgY3VycmVudFByb2plY3QgPT09ICdXZWVrJykge1xuICAgICAgZHVlRGF0ZSA9ICdUb2RheSc7XG4gICAgfVxuXG4gICAgcHJvamVjdEVkaXRlZC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0YXNrLklEID0gdGFzay5JRC5yZXBsYWNlKFxuICAgICAgICBwcm9qZWN0SUQsXG4gICAgICAgIGAke2Zvcm1hdFRpdGxlKHByb2plY3RUaXRsZUlucHV0LnZhbHVlKX1gLFxuICAgICAgKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0RWRpdGVkLklEID0gYCR7Zm9ybWF0VGl0bGUocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpfWA7XG4gICAgcHJvamVjdEVkaXRlZC50aXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuICAgIGFsbFRhc2tzLnJlcGxhY2VDaGlsZChcbiAgICAgIGNyZWF0ZVByb2plY3RDb250YWluZXIocHJvamVjdEVkaXRlZCwgZHVlRGF0ZSksXG4gICAgICBwcm9qZWN0RWRpdGVkTm9kZSxcbiAgICApO1xuICAgIG5hdi5yZXBsYWNlQ2hpbGQoXG4gICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3RUaXRsZUlucHV0LnZhbHVlKSxcbiAgICAgIHByb2plY3RCdXR0b25FZGl0ZWQsXG4gICAgKTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tPdXRzaWRlSW5wdXQpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVFZGl0UHJvamVjdCA9IChwcm9qZWN0SUQsIGNsaWNrT3V0c2lkZUlucHV0KSA9PiB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJRH0gPiBoMWApO1xuICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJRH0gPiBpbnB1dGApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tPdXRzaWRlSW5wdXQpO1xuXG4gIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6aGlkZGVuJyk7XG4gIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTp2aXNpYmxlJyk7XG4gIHByb2plY3RUaXRsZUlucHV0LmZvY3VzKCk7XG59O1xuXG5jb25zdCBoYW5kbGVBZGRUYXNrID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtYXRUaXRsZShwcm9qZWN0LnRpdGxlKSk7XG5cbiAgY29uc3QgcHJvamVjdFRhc2tUaXRsZXMgPSBbXTtcbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgcHJvamVjdFRhc2tUaXRsZXMucHVzaCh0YXNrLnRpdGxlKTtcbiAgfSk7XG5cbiAgbGV0IHRpdGxlID0gJ0RvIHRoZSB0aGluZyc7XG5cbiAgd2hpbGUgKHByb2plY3RUYXNrVGl0bGVzLmluY2x1ZGVzKHRpdGxlKSkge1xuICAgIHRpdGxlID0gdGl0bGUucmVwbGFjZSgnbyAnLCAnb28gJyk7XG4gIH1cblxuICBjb25zdCB0YXNrSUQgPSBgJHtmb3JtYXRUaXRsZShwcm9qZWN0LnRpdGxlKX0tLSR7Zm9ybWF0VGl0bGUodGl0bGUpfWA7XG4gIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrQ29udGFpbmVyKHByb2plY3QudGl0bGUsIHRpdGxlLCAnVG9kYXknKTtcbiAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG5cbiAgcHJvamVjdE5vZGUuaW5zZXJ0QmVmb3JlKG5ld1Rhc2ssIHByb2plY3ROb2RlLmxhc3RDaGlsZCk7XG4gIHByb2plY3QuYWRkVGFzayhjcmVhdGVUYXNrKHRhc2tJRCwgdGl0bGUsICdUb2RheScpKTtcbn07XG5cbmNvbnN0IGhhbmRsZUNoZWNib3hBY3RpdmUgPSAoZSkgPT4ge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBjb25zdCB0YXNrSUQgPSB0YXNrQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgY29uc3QgeyBwcm9qZWN0RWRpdGVkLCB0YXNrRWRpdGVkIH0gPSBnZXRUYXNrQW5kUHJvamVjdCh0YXNrSUQpO1xuXG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1pbicpO1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhc2tDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICBwcm9qZWN0RWRpdGVkLnJlbW92ZVRhc2sodGFza0VkaXRlZCk7XG4gIH0sIDc1MCk7XG59O1xuXG5jb25zdCBoYW5kbGVEZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gIGNvbnN0IHRhc2tJRCA9IHRhc2tDb250YWluZXIuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICBjb25zdCB7IHByb2plY3RFZGl0ZWQsIHRhc2tFZGl0ZWQgfSA9IGdldFRhc2tBbmRQcm9qZWN0KHRhc2tJRCk7XG5cbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluJyk7XG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFza0NvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIHByb2plY3RFZGl0ZWQucmVtb3ZlVGFzayh0YXNrRWRpdGVkKTtcbiAgfSwgNzUwKTtcbn07XG5cbi8vIENyZWF0ZSBET00gZWxlbWVudHNcblxuY29uc3QgY3JlYXRlVG9wID0gKCkgPT4ge1xuICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBsb2dvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICB0b3AuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gIGxvZ29UaXRsZS50ZXh0Q29udGVudCA9ICdEbyBhIHRoaW5nJztcbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xuICBsb2dvLnNyYyA9IGNoZWNrbWFya0ljb247XG4gIGxvZ28uYWx0ID0gJ1R3byBjaGVja21hcmtzJztcblxuICBsb2dvQ29udGFpbmVyLmFwcGVuZChsb2dvLCBsb2dvVGl0bGUpO1xuICB0b3AuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHRvcDtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSAodGl0bGUpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGFuZGxlUHJvamVjdENsaWNrKGUpKTtcblxuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgY3JlYXRlU2lkZSA9ICgpID0+IHtcbiAgY29uc3Qgc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBpbmJveCA9IGNyZWF0ZVByb2plY3RCdXR0b24oJ0luYm94Jyk7XG4gIGNvbnN0IGluYm94SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IHRvZGF5ID0gY3JlYXRlUHJvamVjdEJ1dHRvbignVG9kYXknKTtcbiAgY29uc3QgdG9kYXlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3Qgd2VlayA9IGNyZWF0ZVByb2plY3RCdXR0b24oJ1dlZWsnKTtcbiAgY29uc3Qgd2Vla0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgdGFza0xpc3QgPSBnZXRUYXNrTGlzdCgpLnRhc2tMaXN0O1xuXG4gIGluYm94SW1nLnNyYyA9IGluYm94SWNvbjtcbiAgaW5ib3hJbWcuYWx0ID0gJ0luYm94IGljb24nO1xuICBpbmJveC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXNlbGVjdGVkLXByb2plY3QnKTtcbiAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hJbWcpO1xuICB0b2RheUltZy5zcmMgPSB0b2RheUljb247XG4gIHRvZGF5SW1nLmFsdCA9ICdUb2RheSBpY29uJztcbiAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlJbWcpO1xuICB3ZWVrSW1nLnNyYyA9IHdlZWtJY29uO1xuICB3ZWVrSW1nLmFsdCA9ICdXZWVrIGljb24nO1xuICB3ZWVrLmFwcGVuZENoaWxkKHdlZWtJbWcpO1xuICBwcm9qZWN0U2VjdGlvbi50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkLWJ1dHRvbicpO1xuICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJ++8iyBBZGQgcHJvamVjdCc7XG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVBZGRQcm9qZWN0KCkpO1xuXG4gIHNpZGUuYXBwZW5kKGluYm94LCB0b2RheSwgd2VlaywgcHJvamVjdFNlY3Rpb24pO1xuXG4gIHRhc2tMaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBzaWRlLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RCdXR0b24ocHJvamVjdC50aXRsZSkpO1xuICB9KTtcblxuICBzaWRlLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG4gIHJldHVybiBzaWRlO1xufTtcblxuY29uc3QgY3JlYXRlVGFza0NvbnRhaW5lciA9IChwcm9qZWN0VGl0bGUsIHRpdGxlLCBkdWVEYXRlKSA9PiB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza0NoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRhc2tDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHRhc2tJRCA9IGAke2Zvcm1hdFRpdGxlKHByb2plY3RUaXRsZSl9LS0ke2Zvcm1hdFRpdGxlKHRpdGxlKX1gO1xuICBjb25zdCBjbGlja091dHNpZGVJbnB1dCA9IChlKSA9PlxuICAgIGhhbmRsZUNsaWNrT3V0c2lkZVRhc2tJbnB1dChlLCB0YXNrSUQsIGNsaWNrT3V0c2lkZUlucHV0KTtcblxuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG4gIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIHRhc2tJRCk7XG4gIHRhc2tDaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jb250YWluZXInKTtcbiAgdGFza0NvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgdGFza0NvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza0lEfS1pbnB1dC1jb21wbGV0ZWRgKTtcbiAgdGFza0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7dGFza0lEfS1pbnB1dC1jb21wbGV0ZWRgKTtcbiAgdGFza0xhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhhbmRsZUNoZWNib3hBY3RpdmUoZSkpO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6aGlkZGVuJyk7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrSUR9LWlucHV0LWVkaXQtdGl0bGVgKTtcbiAgdGFza1RpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PlxuICAgIGhhbmRsZUVkaXRUYXNrSW5wdXQoZSwgdGFza0lELCBjbGlja091dHNpZGVJbnB1dCksXG4gICk7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIGhhbmRsZUVkaXRUYXNrKHRhc2tJRCwgY2xpY2tPdXRzaWRlSW5wdXQpLFxuICApO1xuICB0YXNrRGVsZXRlLnRleHRDb250ZW50ID0gJ+Kclic7XG4gIHRhc2tEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGFuZGxlRGVsZXRlUHJvamVjdChlKSk7XG4gIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUnKTtcblxuICB0YXNrQ2hlY2tib3hDb250YWluZXIuYXBwZW5kKHRhc2tDb21wbGV0ZWQsIHRhc2tMYWJlbCk7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kKFxuICAgIHRhc2tDaGVja2JveENvbnRhaW5lcixcbiAgICB0YXNrVGl0bGVJbnB1dCxcbiAgICB0YXNrVGl0bGUsXG4gICAgdGFza0RlbGV0ZSxcbiAgICB0YXNrRHVlRGF0ZSxcbiAgKTtcblxuICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RDb250YWluZXIgPSAocHJvamVjdCwgZHVlRGF0ZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgcHJvamVjdElEID0gZm9ybWF0VGl0bGUocHJvamVjdC50aXRsZSk7XG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY2xpY2tPdXRzaWRlUHJvamVjdElucHV0ID0gKGUpID0+XG4gICAgaGFuZGxlQ2xpY2tPdXRzaWRlUHJvamVjdElucHV0KGUsIHByb2plY3RJRCwgY2xpY2tPdXRzaWRlUHJvamVjdElucHV0KTtcblxuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3RJRCk7XG4gIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHByb2plY3RUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OmhpZGRlbicpO1xuICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7cHJvamVjdElEfS1pbnB1dC1lZGl0LXRpdGxlYCk7XG4gIHByb2plY3RUaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT5cbiAgICBoYW5kbGVFZGl0UHJvamVjdElucHV0KGUsIHByb2plY3RJRCwgY2xpY2tPdXRzaWRlUHJvamVjdElucHV0KSxcbiAgKTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICBoYW5kbGVFZGl0UHJvamVjdChwcm9qZWN0SUQsIGNsaWNrT3V0c2lkZVByb2plY3RJbnB1dCksXG4gICk7XG5cbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlLCBwcm9qZWN0VGl0bGVJbnB1dCk7XG5cbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKFxuICAgICAgKGR1ZURhdGUgPT09ICdUb2RheScgJiYgdGFzay5kdWVEYXRlID09PSAnVG9kYXknKSB8fFxuICAgICAgZHVlRGF0ZSA9PT0gJ0FsbCdcbiAgICApIHtcbiAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBjcmVhdGVUYXNrQ29udGFpbmVyKFxuICAgICAgICBwcm9qZWN0LnRpdGxlLFxuICAgICAgICB0YXNrLnRpdGxlLFxuICAgICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICApO1xuXG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJyk7XG4gIGFkZFRhc2sudGV4dENvbnRlbnQgPSAn77yLIEFkZCB0YXNrJztcbiAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZUFkZFRhc2socHJvamVjdCkpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlQWxsVGFza3NDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0VGFza0xpc3QoKS5jdXJyZW50UHJvamVjdDtcbiAgY29uc3QgdGFza0xpc3QgPSBnZXRUYXNrTGlzdCgpLnRhc2tMaXN0O1xuXG4gIGlmIChjdXJyZW50UHJvamVjdCA9PT0gJ0luYm94Jykge1xuICAgIHRhc2tMaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVQcm9qZWN0Q29udGFpbmVyKHByb2plY3QsICdBbGwnKTtcblxuICAgICAgaWYgKHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJykpIHtcbiAgICAgICAgYWxsVGFza3MuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFByb2plY3QgPT09ICdUb2RheScgfHwgY3VycmVudFByb2plY3QgPT09ICdXZWVrJykge1xuICAgIHRhc2tMaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVQcm9qZWN0Q29udGFpbmVyKHByb2plY3QsICdUb2RheScpO1xuXG4gICAgICBpZiAocHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKSkge1xuICAgICAgICBhbGxUYXNrcy5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlUHJvamVjdENvbnRhaW5lcihcbiAgICAgIHRhc2tMaXN0LnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IGN1cnJlbnRQcm9qZWN0KSxcbiAgICAgICdBbGwnLFxuICAgICk7XG5cbiAgICBhbGxUYXNrcy5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgfVxuXG4gIGFsbFRhc2tzLmNsYXNzTGlzdC5hZGQoJ2FsbC10YXNrcycpO1xuICByZXR1cm4gYWxsVGFza3M7XG59O1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gIG1haW4uYXBwZW5kKGNyZWF0ZVNpZGUoKSwgY3JlYXRlQWxsVGFza3NDb250YWluZXIoKSk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gIHJldHVybiBtYWluO1xufTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gIHBhcmEudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IMKpIDIwMjMgUm9nZXJFYXV4JztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHBhcmEpO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5jb25zdCBjcmVhdGVDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGJvZHkuYXBwZW5kKGNyZWF0ZVRvcCgpLCBjcmVhdGVNYWluKCksIGNyZWF0ZUZvb3RlcigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRlbnQ7XG4iLCJjb25zdCBjcmVhdGVQcm9qZWN0ID0gKElELCB0aXRsZSkgPT4ge1xuICBsZXQgcHJvamVjdElEID0gSUQ7XG4gIGxldCBwcm9qZWN0VGl0bGUgPSB0aXRsZTtcbiAgY29uc3QgcHJvamVjdFRhc2tzID0gW107XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgcHJvamVjdFRhc2tzLnB1c2godGFzayk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgcHJvamVjdFRhc2tzLnNwbGljZShwcm9qZWN0VGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgSUQoKSB7XG4gICAgICByZXR1cm4gcHJvamVjdElEO1xuICAgIH0sXG5cbiAgICBzZXQgSUQoSUQpIHtcbiAgICAgIHByb2plY3RJRCA9IElEO1xuICAgIH0sXG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICByZXR1cm4gcHJvamVjdFRpdGxlO1xuICAgIH0sXG5cbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICAgIHByb2plY3RUaXRsZSA9IHRpdGxlO1xuICAgIH0sXG5cbiAgICBnZXQgdGFza3MoKSB7XG4gICAgICByZXR1cm4gcHJvamVjdFRhc2tzO1xuICAgIH0sXG5cbiAgICBhZGRUYXNrLFxuXG4gICAgcmVtb3ZlVGFzayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7XG4iLCJjb25zdCBjcmVhdGVUYXNrID0gKElELCB0aXRsZSwgZHVlRGF0ZSkgPT4ge1xuICBsZXQgdGFza0lEID0gSUQ7XG4gIGxldCB0YXNrVGl0bGUgPSB0aXRsZTtcbiAgbGV0IHRhc2tEdWVEYXRlID0gZHVlRGF0ZTtcblxuICBsZXQgdGFza0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IElEKCkge1xuICAgICAgcmV0dXJuIHRhc2tJRDtcbiAgICB9LFxuXG4gICAgc2V0IElEKElEKSB7XG4gICAgICB0YXNrSUQgPSBJRDtcbiAgICB9LFxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRhc2tUaXRsZTtcbiAgICB9LFxuXG4gICAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgICB0YXNrVGl0bGUgPSB0aXRsZTtcbiAgICB9LFxuXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICByZXR1cm4gdGFza0R1ZURhdGU7XG4gICAgfSxcblxuICAgIHNldCBkdWVEYXRlKGR1ZURhdGUpIHtcbiAgICAgIHRhc2tEdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9LFxuXG4gICAgZ2V0IGNvbXBsZXRlZCgpIHtcbiAgICAgIHJldHVybiB0YXNrQ29tcGxldGVkO1xuICAgIH0sXG5cbiAgICBzZXQgY29tcGxldGVkKGNvbXBsZXRlZCkge1xuICAgICAgdGFza0NvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcbiIsImltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL3Rhc2snO1xuXG5jb25zdCBjcmVhdGVUYXNrTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgdGFza1Byb2plY3RzID0gW2NyZWF0ZVByb2plY3QoJ3BlcnNvbmFsJywgJ1BlcnNvbmFsJyldO1xuICB0YXNrUHJvamVjdHNbMF0uYWRkVGFzayhjcmVhdGVUYXNrKCdwZXJzb25hbC0tcGV0LWRvZycsICdQZXQgZG9nJywgJ05vdycpKTtcbiAgdGFza1Byb2plY3RzWzBdLmFkZFRhc2soY3JlYXRlVGFzaygncGVyc29uYWwtLXNtaWxlJywgJ1NtaWxlJywgJ1RvZGF5JykpO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHRhc2tQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IHByb2plY3RzKCkge1xuICAgICAgcmV0dXJuIHRhc2tQcm9qZWN0cztcbiAgICB9LFxuXG4gICAgYWRkUHJvamVjdCxcbiAgfTtcbn07XG5cbmNvbnN0IHRhc2tMaXN0ID0gY3JlYXRlVGFza0xpc3QoKTtcbmxldCBjdXJyZW50UHJvamVjdCA9ICdJbmJveCc7XG5cbmNvbnN0IGdldFRhc2tMaXN0ID0gKCkgPT4gKHtcbiAgZ2V0IHRhc2tMaXN0KCkge1xuICAgIHJldHVybiB0YXNrTGlzdDtcbiAgfSxcblxuICBnZXQgY3VycmVudFByb2plY3QoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICB9LFxuXG4gIHNldCBjdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRhc2tMaXN0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlQ29udGVudCBmcm9tICcuL21vZHVsZXMvVUknO1xuXG5jcmVhdGVDb250ZW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=