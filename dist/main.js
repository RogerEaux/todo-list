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
  --steven: #f66fb2;
  --garnet: #9a2a2a;
  --pearl: #6fcfa4;
  --amethyst: #9966cc;
  --bismuth: #762041;
  --lapis: #26619c;
  --peridot: #b4c424;
  --ruby: #ae001a;
  --sapphire: #568cf5;
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
  justify-content: left;
  font-size: 1rem;
  gap: 8px;
  border: none;
  border-radius: 5px;
  color: var(--bismuth);
  cursor: pointer;
}

.project-button.default-project {
  flex-direction: row-reverse;
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

@keyframes taskDeletedTrans {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }

  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

.fade-out-deleted {
  animation: 1.25s ease-out 0s 1 taskDeletedTrans;
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

.project-button > button,
.task-container > button {
  cursor: pointer;
  color: var(--ruby);
  border: none;
  font-size: 1rem;
}

.project-button > button {
  visibility: hidden;
}

.project-button:hover > button {
  visibility: visible;
}

.task-container.fade-out-deleted > button {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yCAAyC;EACzC,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,OAAO;EACP,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;IACE,0BAA0B;IAC1B,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,UAAU;EACZ;AACF;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,eAAe;EACf,QAAQ;EACR,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,aAAa;AACf;;AAEA;;EAEE,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb;;mCAEiC;EACjC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE;IACE,yBAAyB;IACzB,UAAU;EACZ;;EAEA;IACE,2BAA2B;IAC3B,UAAU;EACZ;AACF;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE;IACE,4BAA4B;IAC5B,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,UAAU;EACZ;AACF;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE;IACE,yBAAyB;IACzB,UAAU;EACZ;;EAEA;IACE,4BAA4B;IAC5B,UAAU;EACZ;AACF;;AAEA;EACE,+CAA+C;AACjD;;AAEA;;EAEE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,OAAO;EACP,MAAM;AACR;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;EAChC,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;;;EAGE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;AACzB","sourcesContent":[":root {\n  font-family: Helvetica, Arial, sans-serif;\n  --steven: #f66fb2;\n  --garnet: #9a2a2a;\n  --pearl: #6fcfa4;\n  --amethyst: #9966cc;\n  --bismuth: #762041;\n  --lapis: #26619c;\n  --peridot: #b4c424;\n  --ruby: #ae001a;\n  --sapphire: #568cf5;\n  --shadow: 0px 0px 8px var(--bismuth);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  height: 100vh;\n  flex-direction: column;\n  display: flex;\n}\n\n.header {\n  display: grid;\n  grid-template-columns: 16rem 1fr;\n  box-shadow: var(--shadow);\n}\n\n.logo-container {\n  display: flex;\n  padding: 16px;\n  justify-self: center;\n}\n\n.logo-container > * {\n  align-self: center;\n}\n\n.logo-container img {\n  padding: 8px;\n  width: auto;\n  height: 75px;\n}\n\n.logo-container p {\n  padding: 16px;\n  font-size: 1.4rem;\n}\n\n.main {\n  width: 80%;\n  flex: 1;\n  display: grid;\n  grid-template-columns: 16rem 1fr;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  gap: 8px;\n}\n\nnav > * {\n  padding: 8px;\n}\n\n@keyframes allTasksTrans {\n  0% {\n    transform: translateY(60%);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n.all-tasks {\n  animation: 0.5s ease-out 0s 1 allTasksTrans;\n}\n\n.project-button {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  font-size: 1rem;\n  gap: 8px;\n  border: none;\n  border-radius: 5px;\n  color: var(--bismuth);\n  cursor: pointer;\n}\n\n.project-button.default-project {\n  flex-direction: row-reverse;\n}\n\n.project-button img {\n  width: auto;\n  height: 1.5rem;\n}\n\nnav > h1 {\n  font-size: 1.2rem;\n}\n\n.project-container {\n  display: grid;\n  grid-template-columns: 1fr;\n  padding: 16px;\n}\n\n.project-container > h1,\n.project-container > input {\n  grid-area: 1 / 1;\n  margin: 16px 8px;\n  font-size: 1.4rem;\n}\n\n.project-container > h1 {\n  cursor: pointer;\n}\n\n.task-container {\n  display: grid;\n  grid-template:\n    'input title delete' 1fr\n    '. due .' 1fr / 1.5rem 1fr 1rem;\n  align-items: center;\n  padding: 8px;\n}\n\n@keyframes taskCompletedTrans {\n  0% {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n\n.fade-out {\n  animation: 1.25s ease-out 0s 1 taskCompletedTrans;\n}\n\n@keyframes taskCreatedTrans {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n}\n\n.fade-in {\n  animation: 0.75s ease-in 0s 1 taskCreatedTrans;\n}\n\n@keyframes taskDeletedTrans {\n  0% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n}\n\n.fade-out-deleted {\n  animation: 1.25s ease-out 0s 1 taskDeletedTrans;\n}\n\n.task-container > h2,\n.task-container > input {\n  grid-area: title;\n  font-size: 1rem;\n}\n\n.task-container > h2 {\n  cursor: pointer;\n  font-weight: 400;\n}\n\n.project-button > button,\n.task-container > button {\n  cursor: pointer;\n  color: var(--ruby);\n  border: none;\n  font-size: 1rem;\n}\n\n.project-button > button {\n  visibility: hidden;\n}\n\n.project-button:hover > button {\n  visibility: visible;\n}\n\n.task-container.fade-out-deleted > button {\n  color: var(--sapphire);\n}\n\n.task-container .task-due {\n  grid-area: due;\n  font-size: 0.7rem;\n}\n\n.checkbox-container {\n  grid-area: input;\n  position: relative;\n}\n\n.checkbox-container label {\n  background-color: #ffffff;\n  border: 2px solid var(--lapis);\n  border-radius: 50%;\n  cursor: pointer;\n  height: 1.1rem;\n  width: 1.1rem;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.checkbox-container input[type='checkbox'] {\n  visibility: hidden;\n}\n\n.checkbox-container input[type='checkbox']:checked + label {\n  background-color: var(--peridot);\n  border-color: var(--peridot);\n}\n\n.add-button {\n  font-size: 1rem;\n  text-align: left;\n  border: none;\n  border-radius: 5px;\n  padding: 8px;\n  color: var(--bismuth);\n  cursor: pointer;\n}\n\n.add-button:hover,\n.project-button:hover {\n  filter: brightness(90%);\n}\n\n.add-button:active,\n.project-button:active,\n.main .current-selected-project {\n  filter: brightness(80%);\n}\n\n.footer {\n  display: flex;\n  padding: 16px;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
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
  const navButtons = document.querySelectorAll('nav > button');
  const taskList = (0,_taskList__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const projectTitle = e.target.firstChild.textContent;
  const main = document.querySelector('main');

  navButtons.forEach((button) => {
    button.classList.remove('current-selected-project');
  });
  e.target.classList.add('current-selected-project');

  if (projectTitle === taskList.currentProject) {
    return;
  }

  console.log(projectTitle);

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

  const newProjectButton = createProjectButton(title);
  newProjectButton.click();
  nav.insertBefore(newProjectButton, nav.lastChild);
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
      (button) => button.firstChild.textContent === projectEdited.title,
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

    const newProjectButton = createProjectButton(projectTitleInput.value);
    newProjectButton.click();
    nav.replaceChild(newProjectButton, projectButtonEdited);

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

const handleDeleteTask = (e) => {
  const taskContainer = e.target.parentNode;
  const taskID = taskContainer.getAttribute('id');
  const { projectEdited, taskEdited } = getTaskAndProject(taskID);

  taskContainer.classList.remove('fade-in');
  taskContainer.classList.add('fade-out-deleted');
  setTimeout(() => {
    taskContainer.parentNode.removeChild(taskContainer);
    projectEdited.removeTask(taskEdited);
  }, 750);
};

const handleDeleteProject = (e) => {
  const taskList = (0,_taskList__WEBPACK_IMPORTED_MODULE_5__["default"])().taskList;
  const projectTitle = e.target.parentNode.firstChild.textContent;
  const projectID = formatTitle(projectTitle);
  const nav = document.querySelector('nav');

  const projectEditedNode = document.getElementById(projectID);
  const projectIndex = taskList.projects.findIndex(
    (project) => project.ID === projectID,
  );

  nav.removeChild(
    Array.from(nav.childNodes).find(
      (button) => button.firstChild.textContent === projectTitle,
    ),
  );
  if (projectEditedNode) {
    const allTasks = document.querySelector('.all-tasks');
    allTasks.removeChild(projectEditedNode);
  }
  taskList.removeProject(taskList.projects[projectIndex]);
  e.stopPropagation();
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
  const projectButton = document.createElement('button');
  const projectDelete = document.createElement('button');

  projectDelete.textContent = '✖';
  projectDelete.addEventListener('click', (e) => handleDeleteProject(e));
  projectButton.textContent = title;
  projectButton.classList.add('project-button');
  projectButton.appendChild(projectDelete);
  projectButton.addEventListener('click', (e) => handleProjectClick(e));

  return projectButton;
};

const createDefaultProjects = () => {
  const inbox = createProjectButton('Inbox');
  const inboxImg = document.createElement('img');
  const today = createProjectButton('Today');
  const todayImg = document.createElement('img');
  const week = createProjectButton('Week');
  const weekImg = document.createElement('img');

  inboxImg.src = _images_inbox_svg__WEBPACK_IMPORTED_MODULE_2__;
  inbox.classList.add('default-project');
  inbox.classList.add('current-selected-project');
  inbox.removeChild(inbox.lastChild);
  inbox.appendChild(inboxImg);
  todayImg.src = _images_calendar_day_svg__WEBPACK_IMPORTED_MODULE_3__;
  today.classList.add('default-project');
  today.removeChild(today.lastChild);
  today.appendChild(todayImg);
  weekImg.src = _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_4__;
  week.classList.add('default-project');
  week.removeChild(week.lastChild);
  week.appendChild(weekImg);

  return { inbox, today, week };
};

const createSide = () => {
  const side = document.createElement('nav');
  const projectSection = document.createElement('h1');
  const addProject = document.createElement('button');
  const taskList = (0,_taskList__WEBPACK_IMPORTED_MODULE_5__["default"])().taskList;
  const { inbox, today, week } = createDefaultProjects();

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
  taskDelete.addEventListener('click', (e) => handleDeleteTask(e));
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

  const removeProject = (project) => {
    taskProjects.splice(taskProjects.indexOf(project), 1);
  };

  return {
    get projects() {
      return taskProjects;
    },

    addProject,

    removeProject,
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

module.exports = __webpack_require__.p + "51ad95caf1289c264033.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFB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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUMzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7OztBQ0F5Qzs7QUFFekMsdURBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC0tc3RldmVuOiAjZjY2ZmIyO1xuICAtLWdhcm5ldDogIzlhMmEyYTtcbiAgLS1wZWFybDogIzZmY2ZhNDtcbiAgLS1hbWV0aHlzdDogIzk5NjZjYztcbiAgLS1iaXNtdXRoOiAjNzYyMDQxO1xuICAtLWxhcGlzOiAjMjY2MTljO1xuICAtLXBlcmlkb3Q6ICNiNGM0MjQ7XG4gIC0tcnVieTogI2FlMDAxYTtcbiAgLS1zYXBwaGlyZTogIzU2OGNmNTtcbiAgLS1zaGFkb3c6IDBweCAwcHggOHB4IHZhcigtLWJpc211dGgpO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZyZW0gMWZyO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmxvZ28tY29udGFpbmVyID4gKiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmxvZ28tY29udGFpbmVyIGltZyB7XG4gIHBhZGRpbmc6IDhweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNzVweDtcbn1cblxuLmxvZ28tY29udGFpbmVyIHAge1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLm1haW4ge1xuICB3aWR0aDogODAlO1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2cmVtIDFmcjtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTZweDtcbiAgZ2FwOiA4cHg7XG59XG5cbm5hdiA+ICoge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbkBrZXlmcmFtZXMgYWxsVGFza3NUcmFucyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5hbGwtdGFza3Mge1xuICBhbmltYXRpb246IDAuNXMgZWFzZS1vdXQgMHMgMSBhbGxUYXNrc1RyYW5zO1xufVxuXG4ucHJvamVjdC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZ2FwOiA4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogdmFyKC0tYmlzbXV0aCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtYnV0dG9uLmRlZmF1bHQtcHJvamVjdCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLnByb2plY3QtYnV0dG9uIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEuNXJlbTtcbn1cblxubmF2ID4gaDEge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciA+IGgxLFxuLnByb2plY3QtY29udGFpbmVyID4gaW5wdXQge1xuICBncmlkLWFyZWE6IDEgLyAxO1xuICBtYXJnaW46IDE2cHggOHB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyID4gaDEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgJ2lucHV0IHRpdGxlIGRlbGV0ZScgMWZyXG4gICAgJy4gZHVlIC4nIDFmciAvIDEuNXJlbSAxZnIgMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHRhc2tDb21wbGV0ZWRUcmFucyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uZmFkZS1vdXQge1xuICBhbmltYXRpb246IDEuMjVzIGVhc2Utb3V0IDBzIDEgdGFza0NvbXBsZXRlZFRyYW5zO1xufVxuXG5Aa2V5ZnJhbWVzIHRhc2tDcmVhdGVkVHJhbnMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5mYWRlLWluIHtcbiAgYW5pbWF0aW9uOiAwLjc1cyBlYXNlLWluIDBzIDEgdGFza0NyZWF0ZWRUcmFucztcbn1cblxuQGtleWZyYW1lcyB0YXNrRGVsZXRlZFRyYW5zIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uZmFkZS1vdXQtZGVsZXRlZCB7XG4gIGFuaW1hdGlvbjogMS4yNXMgZWFzZS1vdXQgMHMgMSB0YXNrRGVsZXRlZFRyYW5zO1xufVxuXG4udGFzay1jb250YWluZXIgPiBoMixcbi50YXNrLWNvbnRhaW5lciA+IGlucHV0IHtcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFzay1jb250YWluZXIgPiBoMiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnByb2plY3QtYnV0dG9uID4gYnV0dG9uLFxuLnRhc2stY29udGFpbmVyID4gYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tcnVieSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ucHJvamVjdC1idXR0b24gPiBidXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciA+IGJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi50YXNrLWNvbnRhaW5lci5mYWRlLW91dC1kZWxldGVkID4gYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLXNhcHBoaXJlKTtcbn1cblxuLnRhc2stY29udGFpbmVyIC50YXNrLWR1ZSB7XG4gIGdyaWQtYXJlYTogZHVlO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogaW5wdXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxhcGlzKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMS4xcmVtO1xuICB3aWR0aDogMS4xcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVyaWRvdCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcGVyaWRvdCk7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogdmFyKC0tYmlzbXV0aCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1idXR0b246aG92ZXIsXG4ucHJvamVjdC1idXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbn1cblxuLmFkZC1idXR0b246YWN0aXZlLFxuLnByb2plY3QtYnV0dG9uOmFjdGl2ZSxcbi5tYWluIC5jdXJyZW50LXNlbGVjdGVkLXByb2plY3Qge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87RUFDUCxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsVUFBVTtFQUNaOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFFBQVE7RUFDUixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7O21DQUVpQztFQUNqQyxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07QUFDUjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0VBR0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAtLXN0ZXZlbjogI2Y2NmZiMjtcXG4gIC0tZ2FybmV0OiAjOWEyYTJhO1xcbiAgLS1wZWFybDogIzZmY2ZhNDtcXG4gIC0tYW1ldGh5c3Q6ICM5OTY2Y2M7XFxuICAtLWJpc211dGg6ICM3NjIwNDE7XFxuICAtLWxhcGlzOiAjMjY2MTljO1xcbiAgLS1wZXJpZG90OiAjYjRjNDI0O1xcbiAgLS1ydWJ5OiAjYWUwMDFhO1xcbiAgLS1zYXBwaGlyZTogIzU2OGNmNTtcXG4gIC0tc2hhZG93OiAwcHggMHB4IDhweCB2YXIoLS1iaXNtdXRoKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZyZW0gMWZyO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciA+ICoge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIgaW1nIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIgcCB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5tYWluIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZyZW0gMWZyO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbm5hdiA+ICoge1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFsbFRhc2tzVHJhbnMge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjAlKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uYWxsLXRhc2tzIHtcXG4gIGFuaW1hdGlvbjogMC41cyBlYXNlLW91dCAwcyAxIGFsbFRhc2tzVHJhbnM7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGdhcDogOHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHZhcigtLWJpc211dGgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24uZGVmYXVsdC1wcm9qZWN0IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uIGltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5uYXYgPiBoMSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciA+IGgxLFxcbi5wcm9qZWN0LWNvbnRhaW5lciA+IGlucHV0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDE7XFxuICBtYXJnaW46IDE2cHggOHB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciA+IGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICAnaW5wdXQgdGl0bGUgZGVsZXRlJyAxZnJcXG4gICAgJy4gZHVlIC4nIDFmciAvIDEuNXJlbSAxZnIgMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbkBrZXlmcmFtZXMgdGFza0NvbXBsZXRlZFRyYW5zIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5mYWRlLW91dCB7XFxuICBhbmltYXRpb246IDEuMjVzIGVhc2Utb3V0IDBzIDEgdGFza0NvbXBsZXRlZFRyYW5zO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRhc2tDcmVhdGVkVHJhbnMge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5mYWRlLWluIHtcXG4gIGFuaW1hdGlvbjogMC43NXMgZWFzZS1pbiAwcyAxIHRhc2tDcmVhdGVkVHJhbnM7XFxufVxcblxcbkBrZXlmcmFtZXMgdGFza0RlbGV0ZWRUcmFucyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLmZhZGUtb3V0LWRlbGV0ZWQge1xcbiAgYW5pbWF0aW9uOiAxLjI1cyBlYXNlLW91dCAwcyAxIHRhc2tEZWxldGVkVHJhbnM7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciA+IGgyLFxcbi50YXNrLWNvbnRhaW5lciA+IGlucHV0IHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciA+IGgyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbiA+IGJ1dHRvbixcXG4udGFzay1jb250YWluZXIgPiBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLXJ1YnkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24gPiBidXR0b24ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b246aG92ZXIgPiBidXR0b24ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmZhZGUtb3V0LWRlbGV0ZWQgPiBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLXNhcHBoaXJlKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWR1ZSB7XFxuICBncmlkLWFyZWE6IGR1ZTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogaW5wdXQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxhcGlzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMS4xcmVtO1xcbiAgd2lkdGg6IDEuMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVyaWRvdCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXBlcmlkb3QpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY29sb3I6IHZhcigtLWJpc211dGgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlcixcXG4ucHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxufVxcblxcbi5hZGQtYnV0dG9uOmFjdGl2ZSxcXG4ucHJvamVjdC1idXR0b246YWN0aXZlLFxcbi5tYWluIC5jdXJyZW50LXNlbGVjdGVkLXByb2plY3Qge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCBjaGVja21hcmtJY29uIGZyb20gJy4uL2ltYWdlcy9kb25lLnN2Zyc7XG5pbXBvcnQgaW5ib3hJY29uIGZyb20gJy4uL2ltYWdlcy9pbmJveC5zdmcnO1xuaW1wb3J0IHRvZGF5SWNvbiBmcm9tICcuLi9pbWFnZXMvY2FsZW5kYXItZGF5LnN2Zyc7XG5pbXBvcnQgd2Vla0ljb24gZnJvbSAnLi4vaW1hZ2VzL2NhbGVuZGFyLXdlZWsuc3ZnJztcbmltcG9ydCBnZXRUYXNrTGlzdCBmcm9tICcuL3Rhc2tMaXN0JztcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL3Rhc2snO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb25zXG5cbmNvbnN0IGZvcm1hdFRpdGxlID0gKHRpdGxlKSA9PiB0aXRsZS5yZXBsYWNlQWxsKCcgJywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuXG5jb25zdCB2YWxpZGF0ZU5ld1Rhc2tUaXRsZSA9IChwcm9qZWN0LCB0aXRsZSkgPT4ge1xuICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XG5cbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKGZvcm1hdFRpdGxlKHRpdGxlKSA9PT0gZm9ybWF0VGl0bGUodGFzay50aXRsZSkpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9ICdUYXNrIHRpdGxlcyBtdXN0IGJlIGRpZmZlcmVudCc7XG4gICAgfSBlbHNlIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9ICdUYXNrIG11c3QgaGF2ZSBhIHRpdGxlJztcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlcnJvck1lc3NhZ2U7XG59O1xuXG5jb25zdCB2YWxpZGF0ZU5ld1Byb2plY3RUaXRsZSA9ICh0YXNrTGlzdCwgdGl0bGUpID0+IHtcbiAgbGV0IGVycm9yTWVzc2FnZSA9ICcnO1xuXG4gIHRhc2tMaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAoZm9ybWF0VGl0bGUodGl0bGUpID09PSBmb3JtYXRUaXRsZShwcm9qZWN0LnRpdGxlKSkge1xuICAgICAgZXJyb3JNZXNzYWdlID0gJ1Byb2plY3QgdGl0bGVzIG11c3QgYmUgZGlmZmVyZW50JztcbiAgICB9IGVsc2UgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgZXJyb3JNZXNzYWdlID0gJ1Byb2plY3QgbXVzdCBoYXZlIGEgdGl0bGUnO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVycm9yTWVzc2FnZTtcbn07XG5cbmNvbnN0IGdldFRhc2tBbmRQcm9qZWN0ID0gKHRhc2tJRCkgPT4ge1xuICBjb25zdCB0YXNrTGlzdCA9IGdldFRhc2tMaXN0KCkudGFza0xpc3Q7XG4gIGNvbnN0IHByb2plY3RJRCA9IGAke3Rhc2tJRC5zcGxpdCgnLS0nKVswXX1gO1xuXG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHRhc2tMaXN0LnByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5JRCA9PT0gcHJvamVjdElELFxuICApO1xuICBjb25zdCB0YXNrSW5kZXggPSB0YXNrTGlzdC5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmZpbmRJbmRleChcbiAgICAodGFzaykgPT4gdGFzay5JRCA9PT0gdGFza0lELFxuICApO1xuXG4gIGNvbnN0IHByb2plY3RFZGl0ZWQgPSB0YXNrTGlzdC5wcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuICBjb25zdCB0YXNrRWRpdGVkID0gcHJvamVjdEVkaXRlZC50YXNrc1t0YXNrSW5kZXhdO1xuXG4gIHJldHVybiB7IHByb2plY3RFZGl0ZWQsIHRhc2tFZGl0ZWQgfTtcbn07XG5cbi8vIEhhbmRsZXIgZnVuY3Rpb25zXG5cbmNvbnN0IGhhbmRsZVByb2plY3RDbGljayA9IChlKSA9PiB7XG4gIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgPiBidXR0b24nKTtcbiAgY29uc3QgdGFza0xpc3QgPSBnZXRUYXNrTGlzdCgpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gIG5hdkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtc2VsZWN0ZWQtcHJvamVjdCcpO1xuICB9KTtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1zZWxlY3RlZC1wcm9qZWN0Jyk7XG5cbiAgaWYgKHByb2plY3RUaXRsZSA9PT0gdGFza0xpc3QuY3VycmVudFByb2plY3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zb2xlLmxvZyhwcm9qZWN0VGl0bGUpO1xuXG4gIHRhc2tMaXN0LmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFRpdGxlO1xuICBtYWluLnJlcGxhY2VDaGlsZChjcmVhdGVBbGxUYXNrc0NvbnRhaW5lcigpLCBtYWluLmxhc3RDaGlsZCk7XG59O1xuXG5jb25zdCBoYW5kbGVBZGRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbiAgY29uc3QgdGFza0xpc3QgPSBnZXRUYXNrTGlzdCgpLnRhc2tMaXN0O1xuXG4gIGNvbnN0IHByb2plY3RzVGl0bGVzID0gW107XG4gIHRhc2tMaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0c1RpdGxlcy5wdXNoKHByb2plY3QudGl0bGUpO1xuICB9KTtcblxuICBsZXQgdGl0bGUgPSAnRG8gYWxsIHRoZSB0aGluZ3MnO1xuXG4gIHdoaWxlIChwcm9qZWN0c1RpdGxlcy5pbmNsdWRlcyh0aXRsZSkpIHtcbiAgICB0aXRsZSA9IHRpdGxlLnJlcGxhY2UoJ28gJywgJ29vICcpO1xuICB9XG5cbiAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGNyZWF0ZVByb2plY3RCdXR0b24odGl0bGUpO1xuICBuZXdQcm9qZWN0QnV0dG9uLmNsaWNrKCk7XG4gIG5hdi5pbnNlcnRCZWZvcmUobmV3UHJvamVjdEJ1dHRvbiwgbmF2Lmxhc3RDaGlsZCk7XG4gIHRhc2tMaXN0LmFkZFByb2plY3QoY3JlYXRlUHJvamVjdChmb3JtYXRUaXRsZSh0aXRsZSksIHRpdGxlKSk7XG59O1xuXG5jb25zdCBoYW5kbGVDbGlja091dHNpZGVUYXNrSW5wdXQgPSAoZSwgdGFza0lELCBjbGlja091dHNpZGVJbnB1dCkgPT4ge1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXNrSUR9ID4gaDJgKTtcbiAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXNrSUR9ID4gaW5wdXRgKTtcblxuICBpZiAoXG4gICAgZS50YXJnZXQuY2xvc2VzdChgIyR7dGFza0lEfSA+IGgyYCkgfHxcbiAgICBlLnRhcmdldC5jbG9zZXN0KGAjJHt0YXNrSUR9ID4gaW5wdXRgKVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja091dHNpZGVJbnB1dCk7XG4gIGlmICh0YXNrVGl0bGUpIHtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OnZpc2libGUnKTtcbiAgICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ29uZm9jdXMnLCBcInZhbHVlPScnXCIpO1xuICAgIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTpoaWRkZW4nKTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlRWRpdFRhc2tJbnB1dCA9IChlLCB0YXNrSUQsIGNsaWNrT3V0c2lkZUlucHV0KSA9PiB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tJRH0gPiBoMmApO1xuICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tJRH0gPiBpbnB1dGApO1xuXG4gIGlmIChlLmtleUNvZGUgPT09IDI3IHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OnZpc2libGUnKTtcbiAgICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ29uZm9jdXMnLCBcInZhbHVlPScnXCIpO1xuICAgIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTpoaWRkZW4nKTtcbiAgfVxuICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIGNvbnN0IHByb2plY3RJRCA9IGAke3Rhc2tJRC5zcGxpdCgnLS0nKVswXX1gO1xuICAgIGNvbnN0IHByb2plY3RFZGl0ZWROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdElEKTtcbiAgICBjb25zdCB0YXNrRWRpdGVkTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2tJRCk7XG4gICAgY29uc3QgeyBwcm9qZWN0RWRpdGVkLCB0YXNrRWRpdGVkIH0gPSBnZXRUYXNrQW5kUHJvamVjdCh0YXNrSUQpO1xuXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdmFsaWRhdGVOZXdUYXNrVGl0bGUoXG4gICAgICBwcm9qZWN0RWRpdGVkLFxuICAgICAgdGFza1RpdGxlSW5wdXQudmFsdWUsXG4gICAgKTtcbiAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRhc2tFZGl0ZWQuSUQgPSBgJHtwcm9qZWN0SUR9LS0ke2Zvcm1hdFRpdGxlKHRhc2tUaXRsZUlucHV0LnZhbHVlKX1gO1xuICAgIHRhc2tFZGl0ZWQudGl0bGUgPSB0YXNrVGl0bGVJbnB1dC52YWx1ZTtcbiAgICBwcm9qZWN0RWRpdGVkTm9kZS5yZXBsYWNlQ2hpbGQoXG4gICAgICBjcmVhdGVUYXNrQ29udGFpbmVyKFxuICAgICAgICBwcm9qZWN0RWRpdGVkLnRpdGxlLFxuICAgICAgICB0YXNrRWRpdGVkLnRpdGxlLFxuICAgICAgICB0YXNrRWRpdGVkLmR1ZURhdGUsXG4gICAgICApLFxuICAgICAgdGFza0VkaXRlZE5vZGUsXG4gICAgKTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tPdXRzaWRlSW5wdXQpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVFZGl0VGFzayA9ICh0YXNrSUQsIGNsaWNrT3V0c2lkZUlucHV0KSA9PiB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tJRH0gPiBoMmApO1xuICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tJRH0gPiBpbnB1dGApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tPdXRzaWRlSW5wdXQpO1xuXG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6aGlkZGVuJyk7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTp2aXNpYmxlJyk7XG4gIHRhc2tUaXRsZUlucHV0LmZvY3VzKCk7XG59O1xuXG5jb25zdCBoYW5kbGVDbGlja091dHNpZGVQcm9qZWN0SW5wdXQgPSAoZSwgcHJvamVjdElELCBjbGlja091dHNpZGVJbnB1dCkgPT4ge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcm9qZWN0SUR9ID4gaDFgKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcm9qZWN0SUR9ID4gaW5wdXRgKTtcblxuICBpZiAoXG4gICAgZS50YXJnZXQuY2xvc2VzdChgIyR7cHJvamVjdElEfSA+IGgxYCkgfHxcbiAgICBlLnRhcmdldC5jbG9zZXN0KGAjJHtwcm9qZWN0SUR9ID4gaW5wdXRgKVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja091dHNpZGVJbnB1dCk7XG4gIGlmIChwcm9qZWN0VGl0bGUpIHtcbiAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OnZpc2libGUnKTtcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ29uZm9jdXMnLCBcInZhbHVlPScnXCIpO1xuICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTpoaWRkZW4nKTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlRWRpdFByb2plY3RJbnB1dCA9IChlLCBwcm9qZWN0SUQsIGNsaWNrT3V0c2lkZUlucHV0KSA9PiB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJRH0gPiBoMWApO1xuICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJRH0gPiBpbnB1dGApO1xuXG4gIGlmIChlLmtleUNvZGUgPT09IDI3IHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OnZpc2libGUnKTtcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ29uZm9jdXMnLCBcInZhbHVlPScnXCIpO1xuICAgIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTpoaWRkZW4nKTtcbiAgfVxuICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZ2V0VGFza0xpc3QoKS50YXNrTGlzdDtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGdldFRhc2tMaXN0KCkuY3VycmVudFByb2plY3Q7XG4gICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXRhc2tzJyk7XG4gICAgY29uc3QgcHJvamVjdEVkaXRlZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0SUQpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICAgIGxldCBkdWVEYXRlID0gJ0FsbCc7XG5cbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSB0YXNrTGlzdC5wcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5JRCA9PT0gcHJvamVjdElELFxuICAgICk7XG5cbiAgICBjb25zdCBwcm9qZWN0RWRpdGVkID0gdGFza0xpc3QucHJvamVjdHNbcHJvamVjdEluZGV4XTtcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uRWRpdGVkID0gQXJyYXkuZnJvbShuYXYuY2hpbGROb2RlcykuZmluZChcbiAgICAgIChidXR0b24pID0+IGJ1dHRvbi5maXJzdENoaWxkLnRleHRDb250ZW50ID09PSBwcm9qZWN0RWRpdGVkLnRpdGxlLFxuICAgICk7XG5cbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB2YWxpZGF0ZU5ld1Byb2plY3RUaXRsZShcbiAgICAgIHRhc2tMaXN0LFxuICAgICAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUsXG4gICAgKTtcbiAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFByb2plY3QgPT09ICdUb2RheScgfHwgY3VycmVudFByb2plY3QgPT09ICdXZWVrJykge1xuICAgICAgZHVlRGF0ZSA9ICdUb2RheSc7XG4gICAgfVxuXG4gICAgcHJvamVjdEVkaXRlZC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0YXNrLklEID0gdGFzay5JRC5yZXBsYWNlKFxuICAgICAgICBwcm9qZWN0SUQsXG4gICAgICAgIGAke2Zvcm1hdFRpdGxlKHByb2plY3RUaXRsZUlucHV0LnZhbHVlKX1gLFxuICAgICAgKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0RWRpdGVkLklEID0gYCR7Zm9ybWF0VGl0bGUocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpfWA7XG4gICAgcHJvamVjdEVkaXRlZC50aXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuICAgIGFsbFRhc2tzLnJlcGxhY2VDaGlsZChcbiAgICAgIGNyZWF0ZVByb2plY3RDb250YWluZXIocHJvamVjdEVkaXRlZCwgZHVlRGF0ZSksXG4gICAgICBwcm9qZWN0RWRpdGVkTm9kZSxcbiAgICApO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGNyZWF0ZVByb2plY3RCdXR0b24ocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpO1xuICAgIG5ld1Byb2plY3RCdXR0b24uY2xpY2soKTtcbiAgICBuYXYucmVwbGFjZUNoaWxkKG5ld1Byb2plY3RCdXR0b24sIHByb2plY3RCdXR0b25FZGl0ZWQpO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja091dHNpZGVJbnB1dCk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUVkaXRQcm9qZWN0ID0gKHByb2plY3RJRCwgY2xpY2tPdXRzaWRlSW5wdXQpID0+IHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJvamVjdElEfSA+IGgxYCk7XG4gIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJvamVjdElEfSA+IGlucHV0YCk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja091dHNpZGVJbnB1dCk7XG5cbiAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTpoaWRkZW4nKTtcbiAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OnZpc2libGUnKTtcbiAgcHJvamVjdFRpdGxlSW5wdXQuZm9jdXMoKTtcbn07XG5cbmNvbnN0IGhhbmRsZUFkZFRhc2sgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1hdFRpdGxlKHByb2plY3QudGl0bGUpKTtcblxuICBjb25zdCBwcm9qZWN0VGFza1RpdGxlcyA9IFtdO1xuICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBwcm9qZWN0VGFza1RpdGxlcy5wdXNoKHRhc2sudGl0bGUpO1xuICB9KTtcblxuICBsZXQgdGl0bGUgPSAnRG8gdGhlIHRoaW5nJztcblxuICB3aGlsZSAocHJvamVjdFRhc2tUaXRsZXMuaW5jbHVkZXModGl0bGUpKSB7XG4gICAgdGl0bGUgPSB0aXRsZS5yZXBsYWNlKCdvICcsICdvbyAnKTtcbiAgfVxuXG4gIGNvbnN0IHRhc2tJRCA9IGAke2Zvcm1hdFRpdGxlKHByb2plY3QudGl0bGUpfS0tJHtmb3JtYXRUaXRsZSh0aXRsZSl9YDtcbiAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2tDb250YWluZXIocHJvamVjdC50aXRsZSwgdGl0bGUsICdUb2RheScpO1xuICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcblxuICBwcm9qZWN0Tm9kZS5pbnNlcnRCZWZvcmUobmV3VGFzaywgcHJvamVjdE5vZGUubGFzdENoaWxkKTtcbiAgcHJvamVjdC5hZGRUYXNrKGNyZWF0ZVRhc2sodGFza0lELCB0aXRsZSwgJ1RvZGF5JykpO1xufTtcblxuY29uc3QgaGFuZGxlQ2hlY2JveEFjdGl2ZSA9IChlKSA9PiB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnN0IHRhc2tJRCA9IHRhc2tDb250YWluZXIuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICBjb25zdCB7IHByb2plY3RFZGl0ZWQsIHRhc2tFZGl0ZWQgfSA9IGdldFRhc2tBbmRQcm9qZWN0KHRhc2tJRCk7XG5cbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluJyk7XG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFza0NvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIHByb2plY3RFZGl0ZWQucmVtb3ZlVGFzayh0YXNrRWRpdGVkKTtcbiAgfSwgNzUwKTtcbn07XG5cbmNvbnN0IGhhbmRsZURlbGV0ZVRhc2sgPSAoZSkgPT4ge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgY29uc3QgdGFza0lEID0gdGFza0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gIGNvbnN0IHsgcHJvamVjdEVkaXRlZCwgdGFza0VkaXRlZCB9ID0gZ2V0VGFza0FuZFByb2plY3QodGFza0lEKTtcblxuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dC1kZWxldGVkJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhc2tDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICBwcm9qZWN0RWRpdGVkLnJlbW92ZVRhc2sodGFza0VkaXRlZCk7XG4gIH0sIDc1MCk7XG59O1xuXG5jb25zdCBoYW5kbGVEZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgY29uc3QgdGFza0xpc3QgPSBnZXRUYXNrTGlzdCgpLnRhc2tMaXN0O1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gIGNvbnN0IHByb2plY3RJRCA9IGZvcm1hdFRpdGxlKHByb2plY3RUaXRsZSk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuXG4gIGNvbnN0IHByb2plY3RFZGl0ZWROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdElEKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gdGFza0xpc3QucHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LklEID09PSBwcm9qZWN0SUQsXG4gICk7XG5cbiAgbmF2LnJlbW92ZUNoaWxkKFxuICAgIEFycmF5LmZyb20obmF2LmNoaWxkTm9kZXMpLmZpbmQoXG4gICAgICAoYnV0dG9uKSA9PiBidXR0b24uZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9PT0gcHJvamVjdFRpdGxlLFxuICAgICksXG4gICk7XG4gIGlmIChwcm9qZWN0RWRpdGVkTm9kZSkge1xuICAgIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC10YXNrcycpO1xuICAgIGFsbFRhc2tzLnJlbW92ZUNoaWxkKHByb2plY3RFZGl0ZWROb2RlKTtcbiAgfVxuICB0YXNrTGlzdC5yZW1vdmVQcm9qZWN0KHRhc2tMaXN0LnByb2plY3RzW3Byb2plY3RJbmRleF0pO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuLy8gQ3JlYXRlIERPTSBlbGVtZW50c1xuXG5jb25zdCBjcmVhdGVUb3AgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGxvZ29UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHRvcC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgbG9nb1RpdGxlLnRleHRDb250ZW50ID0gJ0RvIGEgdGhpbmcnO1xuICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvZ28tY29udGFpbmVyJyk7XG4gIGxvZ28uc3JjID0gY2hlY2ttYXJrSWNvbjtcbiAgbG9nby5hbHQgPSAnVHdvIGNoZWNrbWFya3MnO1xuXG4gIGxvZ29Db250YWluZXIuYXBwZW5kKGxvZ28sIGxvZ29UaXRsZSk7XG4gIHRvcC5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcblxuICByZXR1cm4gdG9wO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBwcm9qZWN0RGVsZXRlLnRleHRDb250ZW50ID0gJ+Kclic7XG4gIHByb2plY3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGFuZGxlRGVsZXRlUHJvamVjdChlKSk7XG4gIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpO1xuICBwcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKHByb2plY3REZWxldGUpO1xuICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhhbmRsZVByb2plY3RDbGljayhlKSk7XG5cbiAgcmV0dXJuIHByb2plY3RCdXR0b247XG59O1xuXG5jb25zdCBjcmVhdGVEZWZhdWx0UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IGluYm94ID0gY3JlYXRlUHJvamVjdEJ1dHRvbignSW5ib3gnKTtcbiAgY29uc3QgaW5ib3hJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgdG9kYXkgPSBjcmVhdGVQcm9qZWN0QnV0dG9uKCdUb2RheScpO1xuICBjb25zdCB0b2RheUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCB3ZWVrID0gY3JlYXRlUHJvamVjdEJ1dHRvbignV2VlaycpO1xuICBjb25zdCB3ZWVrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgaW5ib3hJbWcuc3JjID0gaW5ib3hJY29uO1xuICBpbmJveC5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0LXByb2plY3QnKTtcbiAgaW5ib3guY2xhc3NMaXN0LmFkZCgnY3VycmVudC1zZWxlY3RlZC1wcm9qZWN0Jyk7XG4gIGluYm94LnJlbW92ZUNoaWxkKGluYm94Lmxhc3RDaGlsZCk7XG4gIGluYm94LmFwcGVuZENoaWxkKGluYm94SW1nKTtcbiAgdG9kYXlJbWcuc3JjID0gdG9kYXlJY29uO1xuICB0b2RheS5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0LXByb2plY3QnKTtcbiAgdG9kYXkucmVtb3ZlQ2hpbGQodG9kYXkubGFzdENoaWxkKTtcbiAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlJbWcpO1xuICB3ZWVrSW1nLnNyYyA9IHdlZWtJY29uO1xuICB3ZWVrLmNsYXNzTGlzdC5hZGQoJ2RlZmF1bHQtcHJvamVjdCcpO1xuICB3ZWVrLnJlbW92ZUNoaWxkKHdlZWsubGFzdENoaWxkKTtcbiAgd2Vlay5hcHBlbmRDaGlsZCh3ZWVrSW1nKTtcblxuICByZXR1cm4geyBpbmJveCwgdG9kYXksIHdlZWsgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNpZGUgPSAoKSA9PiB7XG4gIGNvbnN0IHNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZ2V0VGFza0xpc3QoKS50YXNrTGlzdDtcbiAgY29uc3QgeyBpbmJveCwgdG9kYXksIHdlZWsgfSA9IGNyZWF0ZURlZmF1bHRQcm9qZWN0cygpO1xuXG4gIHByb2plY3RTZWN0aW9uLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJyk7XG4gIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSAn77yLIEFkZCBwcm9qZWN0JztcbiAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZUFkZFByb2plY3QoKSk7XG5cbiAgc2lkZS5hcHBlbmQoaW5ib3gsIHRvZGF5LCB3ZWVrLCBwcm9qZWN0U2VjdGlvbik7XG5cbiAgdGFza0xpc3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHNpZGUuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0LnRpdGxlKSk7XG4gIH0pO1xuXG4gIHNpZGUuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgcmV0dXJuIHNpZGU7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrQ29udGFpbmVyID0gKHByb2plY3RUaXRsZSwgdGl0bGUsIGR1ZURhdGUpID0+IHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrQ2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza0NvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgdGFza0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgdGFza0lEID0gYCR7Zm9ybWF0VGl0bGUocHJvamVjdFRpdGxlKX0tLSR7Zm9ybWF0VGl0bGUodGl0bGUpfWA7XG4gIGNvbnN0IGNsaWNrT3V0c2lkZUlucHV0ID0gKGUpID0+XG4gICAgaGFuZGxlQ2xpY2tPdXRzaWRlVGFza0lucHV0KGUsIHRhc2tJRCwgY2xpY2tPdXRzaWRlSW5wdXQpO1xuXG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcbiAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFza0lEKTtcbiAgdGFza0NoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWNvbnRhaW5lcicpO1xuICB0YXNrQ29tcGxldGVkLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICB0YXNrQ29tcGxldGVkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrSUR9LWlucHV0LWNvbXBsZXRlZGApO1xuICB0YXNrTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt0YXNrSUR9LWlucHV0LWNvbXBsZXRlZGApO1xuICB0YXNrTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGFuZGxlQ2hlY2JveEFjdGl2ZShlKSk7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTpoaWRkZW4nKTtcbiAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tJRH0taW5wdXQtZWRpdC10aXRsZWApO1xuICB0YXNrVGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+XG4gICAgaGFuZGxlRWRpdFRhc2tJbnB1dChlLCB0YXNrSUQsIGNsaWNrT3V0c2lkZUlucHV0KSxcbiAgKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgaGFuZGxlRWRpdFRhc2sodGFza0lELCBjbGlja091dHNpZGVJbnB1dCksXG4gICk7XG4gIHRhc2tEZWxldGUudGV4dENvbnRlbnQgPSAn4pyWJztcbiAgdGFza0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBoYW5kbGVEZWxldGVUYXNrKGUpKTtcbiAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZScpO1xuXG4gIHRhc2tDaGVja2JveENvbnRhaW5lci5hcHBlbmQodGFza0NvbXBsZXRlZCwgdGFza0xhYmVsKTtcbiAgdGFza0NvbnRhaW5lci5hcHBlbmQoXG4gICAgdGFza0NoZWNrYm94Q29udGFpbmVyLFxuICAgIHRhc2tUaXRsZUlucHV0LFxuICAgIHRhc2tUaXRsZSxcbiAgICB0YXNrRGVsZXRlLFxuICAgIHRhc2tEdWVEYXRlLFxuICApO1xuXG4gIHJldHVybiB0YXNrQ29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdENvbnRhaW5lciA9IChwcm9qZWN0LCBkdWVEYXRlKSA9PiB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBwcm9qZWN0SUQgPSBmb3JtYXRUaXRsZShwcm9qZWN0LnRpdGxlKTtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBjbGlja091dHNpZGVQcm9qZWN0SW5wdXQgPSAoZSkgPT5cbiAgICBoYW5kbGVDbGlja091dHNpZGVQcm9qZWN0SW5wdXQoZSwgcHJvamVjdElELCBjbGlja091dHNpZGVQcm9qZWN0SW5wdXQpO1xuXG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdElEKTtcbiAgcHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgcHJvamVjdFRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICBwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6aGlkZGVuJyk7XG4gIHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtwcm9qZWN0SUR9LWlucHV0LWVkaXQtdGl0bGVgKTtcbiAgcHJvamVjdFRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PlxuICAgIGhhbmRsZUVkaXRQcm9qZWN0SW5wdXQoZSwgcHJvamVjdElELCBjbGlja091dHNpZGVQcm9qZWN0SW5wdXQpLFxuICApO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIGhhbmRsZUVkaXRQcm9qZWN0KHByb2plY3RJRCwgY2xpY2tPdXRzaWRlUHJvamVjdElucHV0KSxcbiAgKTtcblxuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGUsIHByb2plY3RUaXRsZUlucHV0KTtcblxuICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAoXG4gICAgICAoZHVlRGF0ZSA9PT0gJ1RvZGF5JyAmJiB0YXNrLmR1ZURhdGUgPT09ICdUb2RheScpIHx8XG4gICAgICBkdWVEYXRlID09PSAnQWxsJ1xuICAgICkge1xuICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGNyZWF0ZVRhc2tDb250YWluZXIoXG4gICAgICAgIHByb2plY3QudGl0bGUsXG4gICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgICk7XG5cbiAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgfVxuICB9KTtcblxuICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC1idXR0b24nKTtcbiAgYWRkVGFzay50ZXh0Q29udGVudCA9ICfvvIsgQWRkIHRhc2snO1xuICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlQWRkVGFzayhwcm9qZWN0KSk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG5cbiAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVBbGxUYXNrc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRUYXNrTGlzdCgpLmN1cnJlbnRQcm9qZWN0O1xuICBjb25zdCB0YXNrTGlzdCA9IGdldFRhc2tMaXN0KCkudGFza0xpc3Q7XG5cbiAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSAnSW5ib3gnKSB7XG4gICAgdGFza0xpc3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZVByb2plY3RDb250YWluZXIocHJvamVjdCwgJ0FsbCcpO1xuXG4gICAgICBpZiAocHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKSkge1xuICAgICAgICBhbGxUYXNrcy5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChjdXJyZW50UHJvamVjdCA9PT0gJ1RvZGF5JyB8fCBjdXJyZW50UHJvamVjdCA9PT0gJ1dlZWsnKSB7XG4gICAgdGFza0xpc3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZVByb2plY3RDb250YWluZXIocHJvamVjdCwgJ1RvZGF5Jyk7XG5cbiAgICAgIGlmIChwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpKSB7XG4gICAgICAgIGFsbFRhc2tzLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVQcm9qZWN0Q29udGFpbmVyKFxuICAgICAgdGFza0xpc3QucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gY3VycmVudFByb2plY3QpLFxuICAgICAgJ0FsbCcsXG4gICAgKTtcblxuICAgIGFsbFRhc2tzLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICB9XG5cbiAgYWxsVGFza3MuY2xhc3NMaXN0LmFkZCgnYWxsLXRhc2tzJyk7XG4gIHJldHVybiBhbGxUYXNrcztcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgbWFpbi5hcHBlbmQoY3JlYXRlU2lkZSgpLCBjcmVhdGVBbGxUYXNrc0NvbnRhaW5lcigpKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgcGFyYS50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMyBSb2dlckVhdXgnO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgYm9keS5hcHBlbmQoY3JlYXRlVG9wKCksIGNyZWF0ZU1haW4oKSwgY3JlYXRlRm9vdGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGVudDtcbiIsImNvbnN0IGNyZWF0ZVByb2plY3QgPSAoSUQsIHRpdGxlKSA9PiB7XG4gIGxldCBwcm9qZWN0SUQgPSBJRDtcbiAgbGV0IHByb2plY3RUaXRsZSA9IHRpdGxlO1xuICBjb25zdCBwcm9qZWN0VGFza3MgPSBbXTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICBwcm9qZWN0VGFza3MucHVzaCh0YXNrKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICBwcm9qZWN0VGFza3Muc3BsaWNlKHByb2plY3RUYXNrcy5pbmRleE9mKHRhc2spLCAxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBJRCgpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0SUQ7XG4gICAgfSxcblxuICAgIHNldCBJRChJRCkge1xuICAgICAgcHJvamVjdElEID0gSUQ7XG4gICAgfSxcblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0VGl0bGU7XG4gICAgfSxcblxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xuICAgICAgcHJvamVjdFRpdGxlID0gdGl0bGU7XG4gICAgfSxcblxuICAgIGdldCB0YXNrcygpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0VGFza3M7XG4gICAgfSxcblxuICAgIGFkZFRhc2ssXG5cbiAgICByZW1vdmVUYXNrLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDtcbiIsImNvbnN0IGNyZWF0ZVRhc2sgPSAoSUQsIHRpdGxlLCBkdWVEYXRlKSA9PiB7XG4gIGxldCB0YXNrSUQgPSBJRDtcbiAgbGV0IHRhc2tUaXRsZSA9IHRpdGxlO1xuICBsZXQgdGFza0R1ZURhdGUgPSBkdWVEYXRlO1xuXG4gIGxldCB0YXNrQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgSUQoKSB7XG4gICAgICByZXR1cm4gdGFza0lEO1xuICAgIH0sXG5cbiAgICBzZXQgSUQoSUQpIHtcbiAgICAgIHRhc2tJRCA9IElEO1xuICAgIH0sXG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGFza1RpdGxlO1xuICAgIH0sXG5cbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICAgIHRhc2tUaXRsZSA9IHRpdGxlO1xuICAgIH0sXG5cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgIHJldHVybiB0YXNrRHVlRGF0ZTtcbiAgICB9LFxuXG4gICAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xuICAgICAgdGFza0R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH0sXG5cbiAgICBnZXQgY29tcGxldGVkKCkge1xuICAgICAgcmV0dXJuIHRhc2tDb21wbGV0ZWQ7XG4gICAgfSxcblxuICAgIHNldCBjb21wbGV0ZWQoY29tcGxldGVkKSB7XG4gICAgICB0YXNrQ29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrO1xuIiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vdGFzayc7XG5cbmNvbnN0IGNyZWF0ZVRhc2tMaXN0ID0gKCkgPT4ge1xuICBjb25zdCB0YXNrUHJvamVjdHMgPSBbY3JlYXRlUHJvamVjdCgncGVyc29uYWwnLCAnUGVyc29uYWwnKV07XG4gIHRhc2tQcm9qZWN0c1swXS5hZGRUYXNrKGNyZWF0ZVRhc2soJ3BlcnNvbmFsLS1wZXQtZG9nJywgJ1BldCBkb2cnLCAnTm93JykpO1xuICB0YXNrUHJvamVjdHNbMF0uYWRkVGFzayhjcmVhdGVUYXNrKCdwZXJzb25hbC0tc21pbGUnLCAnU21pbGUnLCAnVG9kYXknKSk7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgdGFza1Byb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgdGFza1Byb2plY3RzLnNwbGljZSh0YXNrUHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgcHJvamVjdHMoKSB7XG4gICAgICByZXR1cm4gdGFza1Byb2plY3RzO1xuICAgIH0sXG5cbiAgICBhZGRQcm9qZWN0LFxuXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgfTtcbn07XG5cbmNvbnN0IHRhc2tMaXN0ID0gY3JlYXRlVGFza0xpc3QoKTtcbmxldCBjdXJyZW50UHJvamVjdCA9ICdJbmJveCc7XG5cbmNvbnN0IGdldFRhc2tMaXN0ID0gKCkgPT4gKHtcbiAgZ2V0IHRhc2tMaXN0KCkge1xuICAgIHJldHVybiB0YXNrTGlzdDtcbiAgfSxcblxuICBnZXQgY3VycmVudFByb2plY3QoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICB9LFxuXG4gIHNldCBjdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRhc2tMaXN0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlQ29udGVudCBmcm9tICcuL21vZHVsZXMvVUknO1xuXG5jcmVhdGVDb250ZW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=