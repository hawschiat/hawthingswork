/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/BrandIntro.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrandIntro.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ \"./node_modules/animejs/anime.min.js\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {};\n  },\n  mounted: function mounted() {\n    var setDashoffset = function setDashoffset(el) {\n      var l = el.getTotalLength();\n      el.setAttribute('stroke-dasharray', l);\n      return [l, 0];\n    };\n\n    var lines = animejs__WEBPACK_IMPORTED_MODULE_0___default()({\n      targets: ['#letter-s', '#letter-c'],\n      strokeDashoffset: {\n        value: setDashoffset,\n        duration: 700,\n        easing: 'easeOutQuad'\n      },\n      delay: function delay(el, i) {\n        return 700 + i * 450;\n      },\n      duration: 1300\n    }),\n        startPrompt = animejs__WEBPACK_IMPORTED_MODULE_0___default()({\n      targets: '#letter-prompt',\n      translateX: [-145, -145],\n      opacity: [0, 1],\n      duration: 500,\n      delay: lines.duration\n    }),\n        hideLetterH = animejs__WEBPACK_IMPORTED_MODULE_0___default()({\n      targets: '#letter-h',\n      opacity: [0, 0]\n    }),\n        hideLetterA = animejs__WEBPACK_IMPORTED_MODULE_0___default()({\n      targets: '#letter-a',\n      opacity: [0, 0]\n    }),\n        hideLetterW = animejs__WEBPACK_IMPORTED_MODULE_0___default()({\n      targets: '#letter-w',\n      opacity: [0, 0]\n    });\n    var promise = startPrompt.finished.then(function () {\n      startPromptLoop();\n      typeLetters();\n    });\n\n    function startPromptLoop() {\n      var prompt = animejs__WEBPACK_IMPORTED_MODULE_0___default()({\n        targets: '#letter-prompt',\n        opacity: [{\n          value: 1,\n          duration: 500\n        }, {\n          value: 0,\n          duration: 500\n        }],\n        duration: 1000,\n        loop: true\n      });\n    }\n\n    function typeLetters() {\n      var promptMoveH = animejs__WEBPACK_IMPORTED_MODULE_0___default()({\n        targets: '#letter-prompt',\n        translateX: [-145, -100, -50, 0],\n        duration: 300,\n        delay: 50\n      }),\n          letterH = animejs__WEBPACK_IMPORTED_MODULE_0___default()({\n        targets: ['#letter-h', '#letter-a', '#letter-w'],\n        opacity: [0, 1],\n        duration: 100,\n        delay: function delay(el, i) {\n          return 100 + i * 110;\n        }\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/BrandIntro.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Logo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Logo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    imgWidth: {\n      type: Number,\n      default: 360\n    },\n    imgHeight: {\n      type: Number,\n      default: 210\n    }\n  },\n  data: function data() {\n    return {};\n  },\n  computed: {\n    viewBoxString: function viewBoxString() {\n      return \"0 -10 \".concat(this.imgWidth, \" \").concat(this.imgHeight);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Logo.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/animatedBrand.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/animatedBrand.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ \"./node_modules/animejs/anime.min.js\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {};\n  },\n  mounted: function mounted() {\n    animejs__WEBPACK_IMPORTED_MODULE_0___default()({\n      targets: '#letter-prompt',\n      opacity: [{\n        value: 1,\n        duration: 500\n      }, {\n        value: 0,\n        duration: 500\n      }],\n      duration: 1000,\n      loop: true\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/components/animatedBrand.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/customSection.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customSection.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    index: {\n      type: Number,\n      required: true\n    },\n    backgroundColor: {\n      type: String,\n      default: '#DA0007'\n    },\n    isDefault: {\n      type: Boolean,\n      default: false\n    }\n  },\n  data: function data() {\n    return {\n      isActive: false,\n      topY: 0\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    EventBus.$on('changeSectionActive', function (activeIndex) {\n      if (activeIndex !== _this.index) {\n        _this.isActive = false;\n      }\n    });\n    this.isActive = this.isDefault;\n  },\n  computed: {\n    scrollY: function scrollY() {\n      return this.$root.posY;\n    }\n  },\n  watch: {\n    isActive: function isActive() {\n      if (this.isActive === true) {\n        EventBus.$emit('changeSection', this.backgroundColor);\n        EventBus.$emit('changeSectionActive', this.index);\n      }\n    },\n    scrollY: function scrollY() {\n      var topY = this.$refs.currentEl.offsetTop;\n      var height = this.$refs.currentEl.offsetHeight;\n      this.isActive = this.scrollY >= topY - height / 2 && this.scrollY < topY + height;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/customSection.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/scrollerLink.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scrollerLink.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    to: {\n      type: String,\n      required: true,\n      validator: function validator(value) {\n        return value.indexOf('#') === 0;\n      }\n    }\n  },\n  data: function data() {\n    return {};\n  },\n  methods: {\n    scrollTo: function scrollTo(event) {\n      var target = document.querySelector(this.to);\n      target.scrollIntoView({\n        block: \"start\",\n        behavior: 'smooth'\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/scrollerLink.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/AboutSection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/AboutSection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_customSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/customSection */ \"./src/components/customSection.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    CustomSection: _components_customSection__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {};\n  }\n});\n\n//# sourceURL=webpack:///./src/pages/AboutSection.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/ExperienceSection.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/ExperienceSection.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_customSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/customSection */ \"./src/components/customSection.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    CustomSection: _components_customSection__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {};\n  }\n});\n\n//# sourceURL=webpack:///./src/pages/ExperienceSection.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/WelcomeSection.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/WelcomeSection.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_customSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/customSection */ \"./src/components/customSection.vue\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ \"./node_modules/animejs/anime.min.js\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    CustomSection: _components_customSection__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {};\n  },\n  mounted: function mounted() {\n    var firstLine = animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n      targets: '#firstLine',\n      translateX: [-200, 0],\n      opacity: [0, 1],\n      duration: 1500,\n      delay: 2000\n    }),\n        secondLine = animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n      targets: '#secondLine',\n      translateX: [-200, 0],\n      opacity: [0, 1],\n      duration: 1500,\n      delay: 3000\n    }),\n        thirdLine = animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n      targets: '#thirdLine',\n      opacity: [0, 1],\n      duration: 1000,\n      delay: 4000\n    }),\n        linkContainer = animejs__WEBPACK_IMPORTED_MODULE_1___default()({\n      targets: '.link-container',\n      trasnlateY: [200, 0],\n      opacity: [0, 1],\n      duration: 1000,\n      delay: 4300\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/pages/WelcomeSection.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/app.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/style/app.scss ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/app.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BrandIntro.vue?vue&type=template&id=5f1446d5&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BrandIntro.vue?vue&type=template&id=5f1446d5& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"logo\")\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/BrandIntro.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Logo.vue?vue&type=template&id=4ef0a45b&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Logo.vue?vue&type=template&id=4ef0a45b& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"svg\", { attrs: { viewBox: _vm.viewBoxString } }, [\n    _c(\"g\", { attrs: { id: \"lines\" } }, [\n      _c(\"path\", {\n        attrs: {\n          id: \"letter-c\",\n          d:\n            \"M240.95 125.86C237.927718811 141.998794708 233.088958107 153.504812327 226.425235125 160.38153562C225.657233782 161.183024385 224.865107015 161.919551018 224.048857082 162.59113242C215.679465806 169.508189137 204.656342513 173.371717315 190.983973616 174.186203368C188.176012714 174.355392642 185.352704484 174.378049749 182.514045518 174.254127217C168.619400909 173.622149986 157.378062831 169.118488014 148.792953293 160.740219291C146.066430751 158.133860939 143.584079286 155.124992868 141.3458989 151.713471946C133.278964388 139.797760904 129.026595388 123.759712058 128.592833419 103.594983953C128.560945008 102.668941184 128.545 101.055847071 128.545 99.1735951517C128.545 98.222075108 128.545 91.3524253826 128.545 90.3146815733C128.545 87.8047122145 128.578506313 85.565183742 128.645487761 84.311693169C129.075575612 72.6448042068 130.965408649 62.2660177217 134.308760432 53.1726875585C137.882016925 43.2126719479 142.956365551 35.2306915664 149.538673742 29.2241277377C150.450509908 28.3739224275 151.392163094 27.561453104 152.363652533 26.7867086965C160.750368397 20.0351652685 170.974979013 16.3765620152 183.044595421 15.8087878957C185.858113988 15.6829216324 188.653756478 15.7056010471 191.43154589 15.8767772509C204.889657346 16.6950351352 215.732678539 20.5446753845 223.960609469 27.4228699952C224.850149242 28.1631667481 225.703076859 28.9351456401 226.5193954 29.7388097511C234.915767474 38.0114538084 239.806359253 49.8589074707 241.2 65.28\",\n          \"fill-opacity\": \"0\",\n          stroke: \"#DA0000\",\n          \"stroke-width\": \"35\"\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"path\", {\n        attrs: {\n          id: \"letter-s\",\n          d:\n            \"m 18.233359,128.32358 c 0,8.03795 3.703328,17.50702 9.274269,24.70664 4.411959,5.70181 10.3289,10.6064 17.367415,13.86744 17.238616,7.98687 44.568544,8.38266 56.941087,2.79019 15.09785,-6.82432 22.45427,-19.76568 22.04064,-34.95508 -0.44996,-16.52385 -17.80787,-25.08139 -21.50872,-27.7984 C 98.647216,104.21737 79.754575,97.384395 70.130932,94.370991 60.507289,91.350523 52.887054,88.379456 47.277511,85.450732 31.97876,77.440849 24.329384,66.657498 24.329384,53.093625 c 0,-7.050109 2.054404,-13.338043 6.155927,-18.863804 4.101522,-5.532818 9.995184,-9.844747 17.6737,-12.956956 7.678516,-3.105153 16.296813,-4.65773 25.85489,-4.65773 9.623644,0 18.198226,1.686663 25.723754,5.067045 7.525535,3.373325 13.368195,8.136912 17.528005,14.290761 4.16708,6.153848 7.30717,16.142575 7.30717,23.968973\",\n          \"fill-opacity\": \"0\",\n          stroke: \"#D59836\",\n          \"stroke-width\": \"34\"\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"path\", {\n        attrs: {\n          id: \"letter-a\",\n          d:\n            \"m 241.06,71.51 0.41,0.01 0.41,0.02 0.4,0.03 0.39,0.02 0.39,0.04 0.39,0.04 0.38,0.04 0.38,0.05 0.37,0.06 0.37,0.06 0.37,0.06 0.36,0.08 0.35,0.07 0.35,0.08 0.35,0.09 0.34,0.09 0.34,0.1 0.34,0.1 0.33,0.11 0.32,0.11 0.33,0.12 0.31,0.13 0.32,0.12 0.3,0.14 0.31,0.14 0.3,0.14 0.29,0.15 0.3,0.16 0.28,0.16 0.29,0.16 0.27,0.18 0.28,0.17 0.27,0.18 0.26,0.19 0.27,0.19 0.25,0.2 0.25,0.2 0.25,0.21 0.25,0.21 0.23,0.22 0.23,0.22 0.23,0.23 0.22,0.23 0.21,0.23 0.2,0.24 0.2,0.24 0.2,0.25 0.19,0.25 0.18,0.25 0.17,0.26 0.17,0.27 0.16,0.27 0.16,0.27 0.15,0.27 0.15,0.28 0.14,0.29 0.13,0.29 0.12,0.29 0.12,0.3 0.12,0.3 0.11,0.31 0.1,0.31 0.09,0.32 0.09,0.32 0.08,0.32 0.08,0.33 0.07,0.33 0.07,0.34 0.05,0.34 0.06,0.34 0.04,0.35 0.04,0.35 0.04,0.36 0.02,0.36 0.03,0.37 0.01,0.37 0.01,0.37 v 0.38 19.65 l 0.01,0.32 v 0.32 l 0.01,0.31 0.01,0.31 0.01,0.3 0.02,0.3 0.01,0.3 0.02,0.29 0.02,0.29 0.02,0.29 0.03,0.28 0.02,0.28 0.03,0.27 0.03,0.27 0.04,0.27 0.03,0.26 0.04,0.26 0.04,0.25 0.04,0.25 0.05,0.25 0.04,0.24 0.05,0.24 0.05,0.23 0.05,0.23 0.06,0.23 0.05,0.22 0.06,0.22 0.06,0.21 0.07,0.21 0.06,0.21 0.07,0.2 0.07,0.2 0.07,0.2 0.08,0.19 0.07,0.18 0.08,0.19 0.08,0.18 0.08,0.17 0.09,0.17 0.08,0.17 v 0.71 h -12.22 l -0.05,-0.12 -0.05,-0.12 -0.05,-0.12 -0.04,-0.12 -0.04,-0.12 -0.05,-0.11 -0.04,-0.12 -0.04,-0.11 -0.04,-0.12 -0.04,-0.11 -0.04,-0.11 -0.04,-0.11 -0.04,-0.11 -0.03,-0.11 -0.04,-0.1 -0.03,-0.11 -0.03,-0.11 -0.04,-0.1 -0.03,-0.1 -0.03,-0.11 -0.03,-0.1 -0.03,-0.1 -0.03,-0.1 -0.02,-0.09 -0.03,-0.1 -0.03,-0.1 -0.02,-0.09 -0.02,-0.1 -0.03,-0.09 -0.02,-0.09 -0.02,-0.09 -0.02,-0.09 -0.02,-0.09 -0.02,-0.09 -0.02,-0.08 -0.01,-0.09 -0.02,-0.08 -0.01,-0.09 -0.02,-0.08 -0.01,-0.08 -0.22,0.24 -0.23,0.24 -0.22,0.23 -0.24,0.22 -0.23,0.22 -0.24,0.21 -0.24,0.2 -0.24,0.2 -0.25,0.2 -0.25,0.18 -0.26,0.18 -0.26,0.18 -0.26,0.17 -0.26,0.16 -0.27,0.16 -0.27,0.15 -0.27,0.14 -0.28,0.14 -0.28,0.13 -0.29,0.12 -0.28,0.12 -0.29,0.12 -0.3,0.1 -0.3,0.11 -0.3,0.09 -0.3,0.09 -0.31,0.08 -0.31,0.08 -0.31,0.07 -0.32,0.06 -0.32,0.06 -0.32,0.05 -0.33,0.05 -0.33,0.04 -0.33,0.03 -0.34,0.03 -0.34,0.02 -0.35,0.02 -0.34,0.01 h -0.35 -0.33 l -0.33,-0.01 -0.33,-0.01 -0.32,-0.02 -0.32,-0.02 -0.32,-0.03 -0.31,-0.03 -0.32,-0.03 -0.3,-0.05 -0.31,-0.04 -0.3,-0.05 -0.3,-0.06 -0.3,-0.06 -0.29,-0.06 -0.3,-0.07 -0.28,-0.08 -0.29,-0.08 -0.28,-0.08 -0.28,-0.09 -0.28,-0.09 -0.28,-0.1 -0.27,-0.11 -0.27,-0.1 -0.26,-0.12 -0.27,-0.12 -0.26,-0.12 -0.25,-0.13 -0.26,-0.13 -0.25,-0.14 -0.25,-0.14 -0.24,-0.14 -0.25,-0.16 -0.24,-0.15 -0.23,-0.16 -0.24,-0.17 -0.23,-0.17 -0.23,-0.18 -0.23,-0.18 -0.22,-0.18 -0.22,-0.19 -0.21,-0.2 -0.22,-0.19 -0.2,-0.2 -0.2,-0.2 -0.19,-0.21 -0.19,-0.21 -0.19,-0.2 -0.17,-0.22 -0.18,-0.21 -0.16,-0.22 -0.16,-0.22 -0.16,-0.22 -0.15,-0.22 -0.15,-0.23 -0.14,-0.23 -0.13,-0.23 -0.13,-0.23 -0.12,-0.24 -0.12,-0.24 -0.11,-0.24 -0.11,-0.24 -0.1,-0.25 -0.09,-0.25 -0.09,-0.25 -0.09,-0.26 -0.08,-0.25 -0.07,-0.26 -0.07,-0.26 -0.06,-0.27 -0.06,-0.27 -0.05,-0.26 -0.05,-0.28 -0.04,-0.27 -0.04,-0.28 -0.03,-0.28 -0.02,-0.28 -0.02,-0.28 -0.01,-0.29 -0.01,-0.29 -0.01,-0.29 0.01,-0.36 0.01,-0.35 0.01,-0.35 0.03,-0.35 0.03,-0.34 0.03,-0.34 0.05,-0.33 0.05,-0.33 0.06,-0.32 0.06,-0.33 0.07,-0.31 0.08,-0.31 0.08,-0.31 0.09,-0.31 0.1,-0.29 0.1,-0.3 0.11,-0.29 0.12,-0.29 0.12,-0.28 0.13,-0.28 0.14,-0.27 0.14,-0.27 0.15,-0.27 0.16,-0.26 0.16,-0.26 0.17,-0.25 0.18,-0.25 0.18,-0.25 0.19,-0.24 0.2,-0.23 0.2,-0.24 0.21,-0.23 0.22,-0.22 0.22,-0.22 0.23,-0.22 0.24,-0.21 0.24,-0.2 0.25,-0.21 0.26,-0.2 0.26,-0.19 0.27,-0.19 0.28,-0.19 0.28,-0.18 0.29,-0.17 0.29,-0.17 0.3,-0.17 0.31,-0.16 0.31,-0.16 0.32,-0.15 0.32,-0.15 0.33,-0.14 0.34,-0.14 0.34,-0.13 0.34,-0.13 0.36,-0.13 0.36,-0.11 0.36,-0.12 0.37,-0.11 0.38,-0.1 0.38,-0.1 0.39,-0.1 0.4,-0.09 0.4,-0.08 0.4,-0.08 0.42,-0.08 0.41,-0.07 0.43,-0.07 0.43,-0.06 0.44,-0.06 0.44,-0.05 0.45,-0.04 0.45,-0.05 0.46,-0.04 0.47,-0.03 0.47,-0.03 0.48,-0.02 0.48,-0.02 0.49,-0.01 0.5,-0.01 0.5,-0.01 h 5.57 v -2.59 -0.16 l -0.01,-0.15 v -0.16 l -0.01,-0.15 -0.01,-0.15 -0.01,-0.15 -0.01,-0.15 -0.02,-0.14 -0.01,-0.14 -0.02,-0.15 -0.02,-0.14 -0.03,-0.14 -0.02,-0.13 -0.03,-0.14 -0.03,-0.13 -0.03,-0.14 -0.03,-0.13 -0.04,-0.13 -0.04,-0.12 -0.03,-0.13 -0.05,-0.13 -0.04,-0.12 -0.04,-0.12 -0.05,-0.12 -0.05,-0.12 -0.05,-0.12 -0.06,-0.11 -0.05,-0.12 -0.06,-0.11 -0.06,-0.11 -0.06,-0.11 -0.06,-0.11 -0.07,-0.1 -0.07,-0.11 -0.07,-0.1 -0.07,-0.1 -0.07,-0.1 -0.08,-0.1 -0.07,-0.1 -0.08,-0.09 -0.09,-0.09 -0.08,-0.09 -0.09,-0.09 -0.09,-0.09 -0.09,-0.08 -0.09,-0.08 -0.1,-0.08 -0.09,-0.08 -0.1,-0.07 -0.11,-0.08 -0.1,-0.06 -0.11,-0.07 -0.11,-0.07 -0.11,-0.06 -0.12,-0.06 -0.11,-0.06 -0.12,-0.05 -0.12,-0.06 -0.13,-0.05 -0.12,-0.04 -0.13,-0.05 -0.13,-0.04 -0.13,-0.05 -0.14,-0.03 -0.14,-0.04 -0.14,-0.03 -0.14,-0.04 -0.14,-0.03 -0.15,-0.02 -0.15,-0.03 -0.15,-0.02 -0.16,-0.02 -0.15,-0.02 -0.16,-0.01 -0.16,-0.02 -0.17,-0.01 -0.16,-0.01 h -0.17 -0.17 l -0.17,-0.01 -0.15,0.01 h -0.16 -0.14 l -0.15,0.01 -0.15,0.01 -0.14,0.01 -0.14,0.01 -0.14,0.01 -0.14,0.02 -0.14,0.02 -0.13,0.02 -0.14,0.02 -0.13,0.02 -0.13,0.02 -0.13,0.03 -0.13,0.03 -0.12,0.03 -0.13,0.03 -0.12,0.04 -0.12,0.03 -0.12,0.04 -0.12,0.04 -0.11,0.04 -0.12,0.04 -0.11,0.05 -0.11,0.04 -0.11,0.05 -0.11,0.05 -0.1,0.05 -0.11,0.06 -0.1,0.05 -0.1,0.06 -0.1,0.06 -0.1,0.06 -0.09,0.07 -0.1,0.06 -0.09,0.07 -0.09,0.07 -0.09,0.07 -0.09,0.07 -0.08,0.07 -0.09,0.08 -0.08,0.08 -0.08,0.07 -0.08,0.08 -0.07,0.08 -0.07,0.09 -0.07,0.08 -0.07,0.09 -0.07,0.08 -0.06,0.09 -0.06,0.09 -0.06,0.09 -0.06,0.09 -0.06,0.09 -0.05,0.1 -0.05,0.09 -0.05,0.1 -0.05,0.1 -0.04,0.1 -0.04,0.1 -0.04,0.1 -0.04,0.11 -0.04,0.1 -0.03,0.11 -0.03,0.11 -0.03,0.11 -0.03,0.11 -0.02,0.11 -0.03,0.11 -0.02,0.12 -0.02,0.11 -0.01,0.12 -0.02,0.12 -0.01,0.12 -0.01,0.12 -0.01,0.12 v 0.13 l -0.01,0.12 v 0.13 h -12.1 v -0.19 l 0.01,-0.2 v -0.2 l 0.01,-0.19 0.02,-0.19 0.01,-0.2 0.02,-0.19 0.03,-0.19 0.02,-0.19 0.03,-0.19 0.03,-0.19 0.04,-0.19 0.04,-0.19 0.04,-0.18 0.04,-0.19 0.05,-0.18 0.05,-0.19 0.05,-0.18 0.06,-0.19 0.06,-0.18 0.06,-0.18 0.06,-0.18 0.07,-0.18 0.07,-0.18 0.08,-0.18 0.08,-0.18 0.08,-0.18 0.08,-0.17 0.09,-0.18 0.09,-0.17 0.09,-0.18 0.09,-0.17 0.1,-0.18 0.11,-0.17 0.1,-0.17 0.11,-0.17 0.11,-0.17 0.11,-0.17 0.12,-0.17 0.12,-0.17 0.12,-0.16 0.13,-0.17 0.12,-0.16 0.14,-0.16 0.13,-0.16 0.13,-0.16 0.14,-0.16 0.14,-0.15 0.14,-0.15 0.15,-0.15 0.15,-0.15 0.15,-0.15 0.15,-0.14 0.16,-0.15 0.15,-0.14 0.16,-0.14 0.17,-0.13 0.16,-0.14 0.17,-0.13 0.17,-0.14 0.17,-0.13 0.18,-0.13 0.18,-0.12 0.18,-0.13 0.18,-0.12 0.19,-0.12 0.18,-0.12 0.19,-0.12 0.2,-0.12 0.19,-0.11 0.2,-0.11 0.2,-0.11 0.21,-0.11 0.2,-0.11 0.21,-0.1 0.21,-0.11 0.21,-0.1 0.22,-0.1 0.22,-0.1 0.22,-0.09 0.22,-0.1 0.22,-0.09 0.23,-0.09 0.23,-0.09 0.22,-0.08 0.23,-0.08 0.23,-0.08 0.24,-0.08 0.23,-0.08 0.24,-0.07 0.23,-0.07 0.24,-0.07 0.24,-0.06 0.24,-0.06 0.24,-0.07 0.24,-0.05 0.25,-0.06 0.24,-0.05 0.25,-0.05 0.25,-0.05 0.25,-0.05 0.25,-0.04 0.25,-0.05 0.26,-0.04 0.25,-0.03 0.26,-0.04 0.26,-0.03 0.26,-0.03 0.26,-0.03 0.26,-0.02 0.26,-0.02 0.27,-0.02 0.26,-0.02 0.27,-0.02 0.27,-0.01 0.27,-0.01 0.27,-0.01 0.28,-0.01 h 0.27 0.28 0.41 z m -1.41,25.64 -1.88,0.3 -1.61,0.49 -1.34,0.68 -1.07,0.89 -0.81,1.08 -0.55,1.27 -0.28,1.48 -0.04,0.71 0.02,0.55 0.08,0.53 0.12,0.5 0.18,0.48 0.22,0.45 0.27,0.43 0.33,0.41 0.37,0.38 0.42,0.34 0.45,0.3 0.49,0.25 0.52,0.21 0.57,0.16 0.6,0.11 0.63,0.07 0.68,0.02 0.66,-0.02 0.65,-0.05 0.64,-0.1 0.62,-0.13 0.61,-0.16 0.6,-0.21 0.59,-0.24 0.57,-0.28 0.54,-0.31 0.52,-0.34 0.47,-0.36 0.44,-0.39 0.4,-0.41 0.36,-0.44 0.33,-0.47 0.29,-0.49 v -7.79 h -4.52 z\",\n          fill: \"#ffffff\",\n          \"stroke-width\": \"0\"\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"path\", {\n        attrs: {\n          id: \"letter-w\",\n          d:\n            \"m 308.75,73.5 h 11.6 l -11.47,45 h -10.07 l -8.53,-28.32 -8.52,28.32 h -10.03 l -11.48,-45 h 11.61 l 5.86,28.61 8.24,-28.61 h 8.69 l 8.19,28.66 z\",\n          fill: \"#ffffff\",\n          \"stroke-width\": \"0\"\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"path\", {\n        attrs: {\n          id: \"letter-h\",\n          d:\n            \"M 205.05,118.5 V 94.93 h -22.1 v 23.57 h -11.33 v -55 h 11.33 v 22.29 h 22.1 V 63.5 h 11.33 v 55 z\",\n          fill: \"#ffffff\",\n          \"stroke-width\": \"0\"\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"path\", {\n        attrs: {\n          id: \"letter-prompt\",\n          d: \"m 320.35,108.5 h 40 v 10 h -40 z\",\n          fill: \"#ffffff\",\n          \"stroke-width\": \"0\"\n        }\n      })\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Logo.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/animatedBrand.vue?vue&type=template&id=eedbdc78&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/animatedBrand.vue?vue&type=template&id=eedbdc78& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"logo\")\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/animatedBrand.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/customSection.vue?vue&type=template&id=27dcf758&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/customSection.vue?vue&type=template&id=27dcf758& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"section\",\n    { ref: \"currentEl\", class: { \"is-active\": _vm.isActive } },\n    [_vm._t(\"default\")],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/customSection.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/scrollerLink.vue?vue&type=template&id=5fc87164&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scrollerLink.vue?vue&type=template&id=5fc87164& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"a\",\n    { staticClass: \"scroller-link\", on: { click: _vm.scrollTo } },\n    [_vm._t(\"default\")],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/scrollerLink.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/AboutSection.vue?vue&type=template&id=68b0f13c&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/AboutSection.vue?vue&type=template&id=68b0f13c& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"custom-section\",\n    {\n      staticClass: \"page-section\",\n      attrs: { \"background-color\": \"#915A0A\", index: 1, id: \"about\" }\n    },\n    [\n      _c(\"a\", {\n        staticClass: \"top-anchor\",\n        attrs: { id: \"about-top\", tabindex: \"0\" }\n      }),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"about-content\" } }, [\n        _c(\"div\", { attrs: { id: \"content-text\" } }, [\n          _c(\"p\", [\n            _vm._v(\"\\n                I am a student majoring in \"),\n            _c(\"strong\", [_vm._v(\"Computer Science\")]),\n            _vm._v(\" and \"),\n            _c(\"strong\", [_vm._v(\"Linguistics\")]),\n            _vm._v(\" in \"),\n            _c(\"i\", [_vm._v(\"McGill University\")]),\n            _vm._v(\n              \". I started programming in high school, using PHP to create some web applications that utilised MySQL database. Ever since I started studying here, I have had the chance to experiment with several other languages, tools and applications.\\n            \"\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"p\", [\n            _vm._v(\n              \"\\n                Recently, I have been developing web application using JavaScript, with VueJS being my favourite framework so far (this site was developed using VueJS too!) The most recent stack I am using is \"\n            ),\n            _c(\"i\", [_vm._v(\"VueJS + Yii 2 Framework (PHP)+ MySQL\")]),\n            _vm._v(\n              \". In time, I would like to dig deeper into reactive JavaScript and also NoSQL technology.\\n            \"\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"p\", [\n            _vm._v(\n              \"\\n                Aside from web technology, I am also interested in video game development. Being a gamer myself, I have always dreamt of creating a game world with its own exciting backstory. My most recent game project was a summer project I had with my friends, where we co-developed a space shooter game. It's not completed yet but we hope to finish it in the near future.\\n            \"\n            )\n          ])\n        ])\n      ])\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/pages/AboutSection.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/ExperienceSection.vue?vue&type=template&id=2c12f2b2&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/ExperienceSection.vue?vue&type=template&id=2c12f2b2& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"custom-section\",\n    {\n      staticClass: \"page-section\",\n      attrs: { \"background-color\": \"#1D2597\", index: 2, id: \"experience\" }\n    },\n    [\n      _c(\"a\", {\n        staticClass: \"top-anchor\",\n        attrs: { id: \"experience-top\", tabindex: \"0\" }\n      }),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"buffer\" }),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"list-container\" }, [\n        _vm._v(\"\\n        list\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"download-corner\" }, [\n        _c(\"span\", { attrs: { id: \"download-text\" } }, [\n          _vm._v(\"Prefer the PDF version? Click here! \"),\n          _c(\"span\", { staticClass: \"fas fa-hand-point-right\" })\n        ]),\n        _vm._v(\" \"),\n        _c(\"a\", { attrs: { href: \"/assets/Seng-Chiat-Haw-CV.pdf\" } }, [\n          _c(\"div\", { attrs: { id: \"download-icon\" } }, [\n            _c(\"div\", { staticClass: \"icon-wrapper\" }, [\n              _c(\"i\", { staticClass: \"fas fa-file-pdf\" })\n            ])\n          ])\n        ])\n      ])\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/pages/ExperienceSection.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/WelcomeSection.vue?vue&type=template&id=05a4df47&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/WelcomeSection.vue?vue&type=template&id=05a4df47& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"custom-section\",\n    {\n      staticClass: \"page-section\",\n      attrs: {\n        \"is-default\": true,\n        \"background-color\": \"#242582\",\n        index: 0,\n        id: \"welcome\"\n      }\n    },\n    [\n      _c(\"a\", {\n        staticClass: \"top-anchor\",\n        attrs: { id: \"welcome-top\", tabindex: \"0\" }\n      }),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"adjusted-main\" } }, [\n        _c(\"span\", { attrs: { id: \"firstLine\" } }, [\n          _vm._v(\"\\n            Hi! I'm \"),\n          _c(\"strong\", [_vm._v(\"Seng Chiat Haw\")]),\n          _vm._v(\".\\n        \")\n        ]),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"secondLineContainer\" } }, [\n          _c(\"span\", { attrs: { id: \"secondLine\" } }, [\n            _vm._v(\"\\n                I make web stuff\\n            \")\n          ]),\n          _vm._v(\" \"),\n          _c(\"span\", { attrs: { id: \"thirdLine\" } }, [\n            _vm._v(\"\\n                (...among other things)\\n            \")\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"link-container\" }, [\n          _c(\n            \"a\",\n            { attrs: { href: \"https://www.linkedin.com/in/haw-seng-chiat/\" } },\n            [_c(\"span\", { staticClass: \"fab fa-linkedin\" })]\n          ),\n          _vm._v(\" \"),\n          _c(\"a\", { attrs: { href: \"https://github.com/hawschiat\" } }, [\n            _c(\"span\", { staticClass: \"fab fa-github\" })\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"a\",\n            { attrs: { href: \"https://www.facebook.com/haw.sengchiat\" } },\n            [_c(\"span\", { staticClass: \"fab fa-facebook\" })]\n          ),\n          _vm._v(\" \"),\n          _c(\"a\", { attrs: { href: \"mailto:seng.haw@mail.mcgill.ca\" } }, [\n            _c(\"span\", { staticClass: \"fas fa-envelope\" })\n          ])\n        ])\n      ])\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/pages/WelcomeSection.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/BrandIntro.vue":
/*!***************************************!*\
  !*** ./src/components/BrandIntro.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BrandIntro_vue_vue_type_template_id_5f1446d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrandIntro.vue?vue&type=template&id=5f1446d5& */ \"./src/components/BrandIntro.vue?vue&type=template&id=5f1446d5&\");\n/* harmony import */ var _BrandIntro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandIntro.vue?vue&type=script&lang=js& */ \"./src/components/BrandIntro.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _BrandIntro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _BrandIntro_vue_vue_type_template_id_5f1446d5___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _BrandIntro_vue_vue_type_template_id_5f1446d5___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/BrandIntro.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/BrandIntro.vue?");

/***/ }),

/***/ "./src/components/BrandIntro.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/BrandIntro.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandIntro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./BrandIntro.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/BrandIntro.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandIntro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/BrandIntro.vue?");

/***/ }),

/***/ "./src/components/BrandIntro.vue?vue&type=template&id=5f1446d5&":
/*!**********************************************************************!*\
  !*** ./src/components/BrandIntro.vue?vue&type=template&id=5f1446d5& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandIntro_vue_vue_type_template_id_5f1446d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./BrandIntro.vue?vue&type=template&id=5f1446d5& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BrandIntro.vue?vue&type=template&id=5f1446d5&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandIntro_vue_vue_type_template_id_5f1446d5___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandIntro_vue_vue_type_template_id_5f1446d5___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/BrandIntro.vue?");

/***/ }),

/***/ "./src/components/Logo.vue":
/*!*********************************!*\
  !*** ./src/components/Logo.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Logo_vue_vue_type_template_id_4ef0a45b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=4ef0a45b& */ \"./src/components/Logo.vue?vue&type=template&id=4ef0a45b&\");\n/* harmony import */ var _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&lang=js& */ \"./src/components/Logo.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Logo_vue_vue_type_template_id_4ef0a45b___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Logo_vue_vue_type_template_id_4ef0a45b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Logo.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Logo.vue?");

/***/ }),

/***/ "./src/components/Logo.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/components/Logo.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Logo.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Logo.vue?");

/***/ }),

/***/ "./src/components/Logo.vue?vue&type=template&id=4ef0a45b&":
/*!****************************************************************!*\
  !*** ./src/components/Logo.vue?vue&type=template&id=4ef0a45b& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_4ef0a45b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=4ef0a45b& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Logo.vue?vue&type=template&id=4ef0a45b&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_4ef0a45b___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_4ef0a45b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Logo.vue?");

/***/ }),

/***/ "./src/components/animatedBrand.vue":
/*!******************************************!*\
  !*** ./src/components/animatedBrand.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animatedBrand_vue_vue_type_template_id_eedbdc78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animatedBrand.vue?vue&type=template&id=eedbdc78& */ \"./src/components/animatedBrand.vue?vue&type=template&id=eedbdc78&\");\n/* harmony import */ var _animatedBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animatedBrand.vue?vue&type=script&lang=js& */ \"./src/components/animatedBrand.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _animatedBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _animatedBrand_vue_vue_type_template_id_eedbdc78___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _animatedBrand_vue_vue_type_template_id_eedbdc78___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/animatedBrand.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/animatedBrand.vue?");

/***/ }),

/***/ "./src/components/animatedBrand.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/animatedBrand.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./animatedBrand.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/animatedBrand.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/animatedBrand.vue?");

/***/ }),

/***/ "./src/components/animatedBrand.vue?vue&type=template&id=eedbdc78&":
/*!*************************************************************************!*\
  !*** ./src/components/animatedBrand.vue?vue&type=template&id=eedbdc78& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBrand_vue_vue_type_template_id_eedbdc78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./animatedBrand.vue?vue&type=template&id=eedbdc78& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/animatedBrand.vue?vue&type=template&id=eedbdc78&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBrand_vue_vue_type_template_id_eedbdc78___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBrand_vue_vue_type_template_id_eedbdc78___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/animatedBrand.vue?");

/***/ }),

/***/ "./src/components/customSection.vue":
/*!******************************************!*\
  !*** ./src/components/customSection.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _customSection_vue_vue_type_template_id_27dcf758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customSection.vue?vue&type=template&id=27dcf758& */ \"./src/components/customSection.vue?vue&type=template&id=27dcf758&\");\n/* harmony import */ var _customSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customSection.vue?vue&type=script&lang=js& */ \"./src/components/customSection.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _customSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _customSection_vue_vue_type_template_id_27dcf758___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _customSection_vue_vue_type_template_id_27dcf758___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/customSection.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/customSection.vue?");

/***/ }),

/***/ "./src/components/customSection.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/customSection.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_customSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./customSection.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/customSection.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_customSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/customSection.vue?");

/***/ }),

/***/ "./src/components/customSection.vue?vue&type=template&id=27dcf758&":
/*!*************************************************************************!*\
  !*** ./src/components/customSection.vue?vue&type=template&id=27dcf758& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customSection_vue_vue_type_template_id_27dcf758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./customSection.vue?vue&type=template&id=27dcf758& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/customSection.vue?vue&type=template&id=27dcf758&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customSection_vue_vue_type_template_id_27dcf758___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customSection_vue_vue_type_template_id_27dcf758___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/customSection.vue?");

/***/ }),

/***/ "./src/components/scrollerLink.vue":
/*!*****************************************!*\
  !*** ./src/components/scrollerLink.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scrollerLink_vue_vue_type_template_id_5fc87164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollerLink.vue?vue&type=template&id=5fc87164& */ \"./src/components/scrollerLink.vue?vue&type=template&id=5fc87164&\");\n/* harmony import */ var _scrollerLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollerLink.vue?vue&type=script&lang=js& */ \"./src/components/scrollerLink.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _scrollerLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _scrollerLink_vue_vue_type_template_id_5fc87164___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _scrollerLink_vue_vue_type_template_id_5fc87164___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/scrollerLink.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/scrollerLink.vue?");

/***/ }),

/***/ "./src/components/scrollerLink.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/components/scrollerLink.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollerLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./scrollerLink.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/scrollerLink.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollerLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/scrollerLink.vue?");

/***/ }),

/***/ "./src/components/scrollerLink.vue?vue&type=template&id=5fc87164&":
/*!************************************************************************!*\
  !*** ./src/components/scrollerLink.vue?vue&type=template&id=5fc87164& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollerLink_vue_vue_type_template_id_5fc87164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./scrollerLink.vue?vue&type=template&id=5fc87164& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/scrollerLink.vue?vue&type=template&id=5fc87164&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollerLink_vue_vue_type_template_id_5fc87164___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollerLink_vue_vue_type_template_id_5fc87164___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/scrollerLink.vue?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Logo */ \"./src/components/Logo.vue\");\n/* harmony import */ var _components_customSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/customSection */ \"./src/components/customSection.vue\");\n/* harmony import */ var _pages_WelcomeSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/WelcomeSection */ \"./src/pages/WelcomeSection.vue\");\n/* harmony import */ var _pages_AboutSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/AboutSection */ \"./src/pages/AboutSection.vue\");\n/* harmony import */ var _pages_ExperienceSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/ExperienceSection */ \"./src/pages/ExperienceSection.vue\");\n/* harmony import */ var _components_BrandIntro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/BrandIntro */ \"./src/components/BrandIntro.vue\");\n/* harmony import */ var _components_animatedBrand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/animatedBrand */ \"./src/components/animatedBrand.vue\");\n/* harmony import */ var _components_scrollerLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/scrollerLink */ \"./src/components/scrollerLink.vue\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! smoothscroll-polyfill */ \"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _style_app_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style/app.scss */ \"./src/style/app.scss\");\n/* harmony import */ var _style_app_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_app_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! es6-promise/auto */ \"./node_modules/es6-promise/auto.js\");\n/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(es6_promise_auto__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.EventBus = new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nsmoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_9___default.a.polyfill();\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('logo', _components_Logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('brand-intro', _components_BrandIntro__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('animated-brand', _components_animatedBrand__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('scroller-link', _components_scrollerLink__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('custom-section', _components_customSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('welcome-section', _pages_WelcomeSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('about-section', _pages_AboutSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('experience-section', _pages_ExperienceSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nwindow.app = new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: '#app',\n  data: {\n    onMainPage: true,\n    posY: 0,\n    windowHeight: 0,\n    minimizePoint: 0,\n    bgColor: '#242582'\n  },\n  watch: {\n    posY: function posY() {\n      var bottom = this.posY + this.windowHeight;\n\n      if (bottom > this.minimizePoint) {\n        this.onMainPage = false;\n      } else {\n        this.onMainPage = true;\n      }\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    EventBus.$on('changeSection', function (newColor) {\n      _this.bgColor = newColor;\n    });\n    this.$nextTick(function () {\n      var height = window.innerHeight;\n      window.addEventListener('resize', function () {\n        _this.windowHeight = height;\n      });\n      _this.windowHeight = height;\n      _this.minimizePoint = height + height / 2;\n    });\n  },\n  created: function created() {\n    var _this2 = this;\n\n    window.addEventListener('scroll', function () {\n      _this2.posY = window.scrollY;\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/AboutSection.vue":
/*!************************************!*\
  !*** ./src/pages/AboutSection.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AboutSection_vue_vue_type_template_id_68b0f13c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutSection.vue?vue&type=template&id=68b0f13c& */ \"./src/pages/AboutSection.vue?vue&type=template&id=68b0f13c&\");\n/* harmony import */ var _AboutSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutSection.vue?vue&type=script&lang=js& */ \"./src/pages/AboutSection.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AboutSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AboutSection_vue_vue_type_template_id_68b0f13c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _AboutSection_vue_vue_type_template_id_68b0f13c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/pages/AboutSection.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/AboutSection.vue?");

/***/ }),

/***/ "./src/pages/AboutSection.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/pages/AboutSection.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./AboutSection.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/AboutSection.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/AboutSection.vue?");

/***/ }),

/***/ "./src/pages/AboutSection.vue?vue&type=template&id=68b0f13c&":
/*!*******************************************************************!*\
  !*** ./src/pages/AboutSection.vue?vue&type=template&id=68b0f13c& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSection_vue_vue_type_template_id_68b0f13c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./AboutSection.vue?vue&type=template&id=68b0f13c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/AboutSection.vue?vue&type=template&id=68b0f13c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSection_vue_vue_type_template_id_68b0f13c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutSection_vue_vue_type_template_id_68b0f13c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/AboutSection.vue?");

/***/ }),

/***/ "./src/pages/ExperienceSection.vue":
/*!*****************************************!*\
  !*** ./src/pages/ExperienceSection.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ExperienceSection_vue_vue_type_template_id_2c12f2b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExperienceSection.vue?vue&type=template&id=2c12f2b2& */ \"./src/pages/ExperienceSection.vue?vue&type=template&id=2c12f2b2&\");\n/* harmony import */ var _ExperienceSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExperienceSection.vue?vue&type=script&lang=js& */ \"./src/pages/ExperienceSection.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _ExperienceSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ExperienceSection_vue_vue_type_template_id_2c12f2b2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ExperienceSection_vue_vue_type_template_id_2c12f2b2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/pages/ExperienceSection.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/ExperienceSection.vue?");

/***/ }),

/***/ "./src/pages/ExperienceSection.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/pages/ExperienceSection.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ExperienceSection.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/ExperienceSection.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/ExperienceSection.vue?");

/***/ }),

/***/ "./src/pages/ExperienceSection.vue?vue&type=template&id=2c12f2b2&":
/*!************************************************************************!*\
  !*** ./src/pages/ExperienceSection.vue?vue&type=template&id=2c12f2b2& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_template_id_2c12f2b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ExperienceSection.vue?vue&type=template&id=2c12f2b2& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/ExperienceSection.vue?vue&type=template&id=2c12f2b2&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_template_id_2c12f2b2___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_template_id_2c12f2b2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/ExperienceSection.vue?");

/***/ }),

/***/ "./src/pages/WelcomeSection.vue":
/*!**************************************!*\
  !*** ./src/pages/WelcomeSection.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WelcomeSection_vue_vue_type_template_id_05a4df47___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomeSection.vue?vue&type=template&id=05a4df47& */ \"./src/pages/WelcomeSection.vue?vue&type=template&id=05a4df47&\");\n/* harmony import */ var _WelcomeSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WelcomeSection.vue?vue&type=script&lang=js& */ \"./src/pages/WelcomeSection.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _WelcomeSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _WelcomeSection_vue_vue_type_template_id_05a4df47___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _WelcomeSection_vue_vue_type_template_id_05a4df47___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/pages/WelcomeSection.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/WelcomeSection.vue?");

/***/ }),

/***/ "./src/pages/WelcomeSection.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/pages/WelcomeSection.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./WelcomeSection.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/WelcomeSection.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/WelcomeSection.vue?");

/***/ }),

/***/ "./src/pages/WelcomeSection.vue?vue&type=template&id=05a4df47&":
/*!*********************************************************************!*\
  !*** ./src/pages/WelcomeSection.vue?vue&type=template&id=05a4df47& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSection_vue_vue_type_template_id_05a4df47___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./WelcomeSection.vue?vue&type=template&id=05a4df47& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/WelcomeSection.vue?vue&type=template&id=05a4df47&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSection_vue_vue_type_template_id_05a4df47___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSection_vue_vue_type_template_id_05a4df47___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/WelcomeSection.vue?");

/***/ }),

/***/ "./src/style/app.scss":
/*!****************************!*\
  !*** ./src/style/app.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/lib/loader.js!./app.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/app.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style/app.scss?");

/***/ })

/******/ });