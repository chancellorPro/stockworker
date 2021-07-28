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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 	__webpack_require__.p = "/";
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
/******/ 	deferredModules.push(["./index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!************************************************************************!*\
  !*** C:/projects/stockworker/node_modules/moment/locale sync ^\.\/.*$ ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../node_modules/moment/locale/af.js",
	"./af.js": "../../../node_modules/moment/locale/af.js",
	"./ar": "../../../node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../node_modules/moment/locale/ar.js",
	"./az": "../../../node_modules/moment/locale/az.js",
	"./az.js": "../../../node_modules/moment/locale/az.js",
	"./be": "../../../node_modules/moment/locale/be.js",
	"./be.js": "../../../node_modules/moment/locale/be.js",
	"./bg": "../../../node_modules/moment/locale/bg.js",
	"./bg.js": "../../../node_modules/moment/locale/bg.js",
	"./bm": "../../../node_modules/moment/locale/bm.js",
	"./bm.js": "../../../node_modules/moment/locale/bm.js",
	"./bn": "../../../node_modules/moment/locale/bn.js",
	"./bn.js": "../../../node_modules/moment/locale/bn.js",
	"./bo": "../../../node_modules/moment/locale/bo.js",
	"./bo.js": "../../../node_modules/moment/locale/bo.js",
	"./br": "../../../node_modules/moment/locale/br.js",
	"./br.js": "../../../node_modules/moment/locale/br.js",
	"./bs": "../../../node_modules/moment/locale/bs.js",
	"./bs.js": "../../../node_modules/moment/locale/bs.js",
	"./ca": "../../../node_modules/moment/locale/ca.js",
	"./ca.js": "../../../node_modules/moment/locale/ca.js",
	"./cs": "../../../node_modules/moment/locale/cs.js",
	"./cs.js": "../../../node_modules/moment/locale/cs.js",
	"./cv": "../../../node_modules/moment/locale/cv.js",
	"./cv.js": "../../../node_modules/moment/locale/cv.js",
	"./cy": "../../../node_modules/moment/locale/cy.js",
	"./cy.js": "../../../node_modules/moment/locale/cy.js",
	"./da": "../../../node_modules/moment/locale/da.js",
	"./da.js": "../../../node_modules/moment/locale/da.js",
	"./de": "../../../node_modules/moment/locale/de.js",
	"./de-at": "../../../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../node_modules/moment/locale/de.js",
	"./dv": "../../../node_modules/moment/locale/dv.js",
	"./dv.js": "../../../node_modules/moment/locale/dv.js",
	"./el": "../../../node_modules/moment/locale/el.js",
	"./el.js": "../../../node_modules/moment/locale/el.js",
	"./en-au": "../../../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../node_modules/moment/locale/en-ie.js",
	"./en-il": "../../../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../../../node_modules/moment/locale/en-il.js",
	"./en-in": "../../../node_modules/moment/locale/en-in.js",
	"./en-in.js": "../../../node_modules/moment/locale/en-in.js",
	"./en-nz": "../../../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../node_modules/moment/locale/en-nz.js",
	"./en-sg": "../../../node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "../../../node_modules/moment/locale/en-sg.js",
	"./eo": "../../../node_modules/moment/locale/eo.js",
	"./eo.js": "../../../node_modules/moment/locale/eo.js",
	"./es": "../../../node_modules/moment/locale/es.js",
	"./es-do": "../../../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../node_modules/moment/locale/es-do.js",
	"./es-us": "../../../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../../../node_modules/moment/locale/es-us.js",
	"./es.js": "../../../node_modules/moment/locale/es.js",
	"./et": "../../../node_modules/moment/locale/et.js",
	"./et.js": "../../../node_modules/moment/locale/et.js",
	"./eu": "../../../node_modules/moment/locale/eu.js",
	"./eu.js": "../../../node_modules/moment/locale/eu.js",
	"./fa": "../../../node_modules/moment/locale/fa.js",
	"./fa.js": "../../../node_modules/moment/locale/fa.js",
	"./fi": "../../../node_modules/moment/locale/fi.js",
	"./fi.js": "../../../node_modules/moment/locale/fi.js",
	"./fil": "../../../node_modules/moment/locale/fil.js",
	"./fil.js": "../../../node_modules/moment/locale/fil.js",
	"./fo": "../../../node_modules/moment/locale/fo.js",
	"./fo.js": "../../../node_modules/moment/locale/fo.js",
	"./fr": "../../../node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../node_modules/moment/locale/fr.js",
	"./fy": "../../../node_modules/moment/locale/fy.js",
	"./fy.js": "../../../node_modules/moment/locale/fy.js",
	"./ga": "../../../node_modules/moment/locale/ga.js",
	"./ga.js": "../../../node_modules/moment/locale/ga.js",
	"./gd": "../../../node_modules/moment/locale/gd.js",
	"./gd.js": "../../../node_modules/moment/locale/gd.js",
	"./gl": "../../../node_modules/moment/locale/gl.js",
	"./gl.js": "../../../node_modules/moment/locale/gl.js",
	"./gom-deva": "../../../node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "../../../node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "../../../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../node_modules/moment/locale/gom-latn.js",
	"./gu": "../../../node_modules/moment/locale/gu.js",
	"./gu.js": "../../../node_modules/moment/locale/gu.js",
	"./he": "../../../node_modules/moment/locale/he.js",
	"./he.js": "../../../node_modules/moment/locale/he.js",
	"./hi": "../../../node_modules/moment/locale/hi.js",
	"./hi.js": "../../../node_modules/moment/locale/hi.js",
	"./hr": "../../../node_modules/moment/locale/hr.js",
	"./hr.js": "../../../node_modules/moment/locale/hr.js",
	"./hu": "../../../node_modules/moment/locale/hu.js",
	"./hu.js": "../../../node_modules/moment/locale/hu.js",
	"./hy-am": "../../../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../node_modules/moment/locale/hy-am.js",
	"./id": "../../../node_modules/moment/locale/id.js",
	"./id.js": "../../../node_modules/moment/locale/id.js",
	"./is": "../../../node_modules/moment/locale/is.js",
	"./is.js": "../../../node_modules/moment/locale/is.js",
	"./it": "../../../node_modules/moment/locale/it.js",
	"./it-ch": "../../../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../../../node_modules/moment/locale/it-ch.js",
	"./it.js": "../../../node_modules/moment/locale/it.js",
	"./ja": "../../../node_modules/moment/locale/ja.js",
	"./ja.js": "../../../node_modules/moment/locale/ja.js",
	"./jv": "../../../node_modules/moment/locale/jv.js",
	"./jv.js": "../../../node_modules/moment/locale/jv.js",
	"./ka": "../../../node_modules/moment/locale/ka.js",
	"./ka.js": "../../../node_modules/moment/locale/ka.js",
	"./kk": "../../../node_modules/moment/locale/kk.js",
	"./kk.js": "../../../node_modules/moment/locale/kk.js",
	"./km": "../../../node_modules/moment/locale/km.js",
	"./km.js": "../../../node_modules/moment/locale/km.js",
	"./kn": "../../../node_modules/moment/locale/kn.js",
	"./kn.js": "../../../node_modules/moment/locale/kn.js",
	"./ko": "../../../node_modules/moment/locale/ko.js",
	"./ko.js": "../../../node_modules/moment/locale/ko.js",
	"./ku": "../../../node_modules/moment/locale/ku.js",
	"./ku.js": "../../../node_modules/moment/locale/ku.js",
	"./ky": "../../../node_modules/moment/locale/ky.js",
	"./ky.js": "../../../node_modules/moment/locale/ky.js",
	"./lb": "../../../node_modules/moment/locale/lb.js",
	"./lb.js": "../../../node_modules/moment/locale/lb.js",
	"./lo": "../../../node_modules/moment/locale/lo.js",
	"./lo.js": "../../../node_modules/moment/locale/lo.js",
	"./lt": "../../../node_modules/moment/locale/lt.js",
	"./lt.js": "../../../node_modules/moment/locale/lt.js",
	"./lv": "../../../node_modules/moment/locale/lv.js",
	"./lv.js": "../../../node_modules/moment/locale/lv.js",
	"./me": "../../../node_modules/moment/locale/me.js",
	"./me.js": "../../../node_modules/moment/locale/me.js",
	"./mi": "../../../node_modules/moment/locale/mi.js",
	"./mi.js": "../../../node_modules/moment/locale/mi.js",
	"./mk": "../../../node_modules/moment/locale/mk.js",
	"./mk.js": "../../../node_modules/moment/locale/mk.js",
	"./ml": "../../../node_modules/moment/locale/ml.js",
	"./ml.js": "../../../node_modules/moment/locale/ml.js",
	"./mn": "../../../node_modules/moment/locale/mn.js",
	"./mn.js": "../../../node_modules/moment/locale/mn.js",
	"./mr": "../../../node_modules/moment/locale/mr.js",
	"./mr.js": "../../../node_modules/moment/locale/mr.js",
	"./ms": "../../../node_modules/moment/locale/ms.js",
	"./ms-my": "../../../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../node_modules/moment/locale/ms.js",
	"./mt": "../../../node_modules/moment/locale/mt.js",
	"./mt.js": "../../../node_modules/moment/locale/mt.js",
	"./my": "../../../node_modules/moment/locale/my.js",
	"./my.js": "../../../node_modules/moment/locale/my.js",
	"./nb": "../../../node_modules/moment/locale/nb.js",
	"./nb.js": "../../../node_modules/moment/locale/nb.js",
	"./ne": "../../../node_modules/moment/locale/ne.js",
	"./ne.js": "../../../node_modules/moment/locale/ne.js",
	"./nl": "../../../node_modules/moment/locale/nl.js",
	"./nl-be": "../../../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../node_modules/moment/locale/nl.js",
	"./nn": "../../../node_modules/moment/locale/nn.js",
	"./nn.js": "../../../node_modules/moment/locale/nn.js",
	"./oc-lnc": "../../../node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "../../../node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "../../../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../node_modules/moment/locale/pa-in.js",
	"./pl": "../../../node_modules/moment/locale/pl.js",
	"./pl.js": "../../../node_modules/moment/locale/pl.js",
	"./pt": "../../../node_modules/moment/locale/pt.js",
	"./pt-br": "../../../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../node_modules/moment/locale/pt.js",
	"./ro": "../../../node_modules/moment/locale/ro.js",
	"./ro.js": "../../../node_modules/moment/locale/ro.js",
	"./ru": "../../../node_modules/moment/locale/ru.js",
	"./ru.js": "../../../node_modules/moment/locale/ru.js",
	"./sd": "../../../node_modules/moment/locale/sd.js",
	"./sd.js": "../../../node_modules/moment/locale/sd.js",
	"./se": "../../../node_modules/moment/locale/se.js",
	"./se.js": "../../../node_modules/moment/locale/se.js",
	"./si": "../../../node_modules/moment/locale/si.js",
	"./si.js": "../../../node_modules/moment/locale/si.js",
	"./sk": "../../../node_modules/moment/locale/sk.js",
	"./sk.js": "../../../node_modules/moment/locale/sk.js",
	"./sl": "../../../node_modules/moment/locale/sl.js",
	"./sl.js": "../../../node_modules/moment/locale/sl.js",
	"./sq": "../../../node_modules/moment/locale/sq.js",
	"./sq.js": "../../../node_modules/moment/locale/sq.js",
	"./sr": "../../../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../node_modules/moment/locale/sr.js",
	"./ss": "../../../node_modules/moment/locale/ss.js",
	"./ss.js": "../../../node_modules/moment/locale/ss.js",
	"./sv": "../../../node_modules/moment/locale/sv.js",
	"./sv.js": "../../../node_modules/moment/locale/sv.js",
	"./sw": "../../../node_modules/moment/locale/sw.js",
	"./sw.js": "../../../node_modules/moment/locale/sw.js",
	"./ta": "../../../node_modules/moment/locale/ta.js",
	"./ta.js": "../../../node_modules/moment/locale/ta.js",
	"./te": "../../../node_modules/moment/locale/te.js",
	"./te.js": "../../../node_modules/moment/locale/te.js",
	"./tet": "../../../node_modules/moment/locale/tet.js",
	"./tet.js": "../../../node_modules/moment/locale/tet.js",
	"./tg": "../../../node_modules/moment/locale/tg.js",
	"./tg.js": "../../../node_modules/moment/locale/tg.js",
	"./th": "../../../node_modules/moment/locale/th.js",
	"./th.js": "../../../node_modules/moment/locale/th.js",
	"./tk": "../../../node_modules/moment/locale/tk.js",
	"./tk.js": "../../../node_modules/moment/locale/tk.js",
	"./tl-ph": "../../../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../node_modules/moment/locale/tlh.js",
	"./tr": "../../../node_modules/moment/locale/tr.js",
	"./tr.js": "../../../node_modules/moment/locale/tr.js",
	"./tzl": "../../../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../node_modules/moment/locale/tzl.js",
	"./tzm": "../../../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../../../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../node_modules/moment/locale/ug-cn.js",
	"./uk": "../../../node_modules/moment/locale/uk.js",
	"./uk.js": "../../../node_modules/moment/locale/uk.js",
	"./ur": "../../../node_modules/moment/locale/ur.js",
	"./ur.js": "../../../node_modules/moment/locale/ur.js",
	"./uz": "../../../node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../node_modules/moment/locale/uz.js",
	"./vi": "../../../node_modules/moment/locale/vi.js",
	"./vi.js": "../../../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../node_modules/moment/locale/yo.js",
	"./yo.js": "../../../node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "../../../node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "../../../node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "../../../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./components/bootstrap/constants.js":
/*!*******************************************!*\
  !*** ./components/bootstrap/constants.js ***!
  \*******************************************/
/*! exports provided: SIZES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZES", function() { return SIZES; });
/**
 * Base sizes
 *
 * @type {{sm: string, lg: string}}
 */
var SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

/***/ }),

/***/ "./components/dropzone/DropzoneBuilder.js":
/*!************************************************!*\
  !*** ./components/dropzone/DropzoneBuilder.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "../../../node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Loading text
 * It will be shown after the start of image uploading
 *
 * @type {string}
 */

var LOADING_TEXT = 'Loading...';
/**
 * Dropzone builder
 */

var _default = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param dropzoneContainer
   * @param config
   */
  function _default(dropzoneContainer) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, _default);

    this._config = config;
    this._dropzoneContainer = dropzoneContainer;
    this._cancelButton = $(dropzoneContainer).find('.dropzone-cancel');
  }
  /**
   * Set url to uploading
   *
   * @param url
   */


  _createClass(_default, [{
    key: "setUploadUrl",
    value: function setUploadUrl(url) {
      this._uploadUrl = url;
      return this;
    }
    /**
     * Set default preview image
     *
     * @param name
     * @param url
     */

  }, {
    key: "setPreview",
    value: function setPreview(name, url) {
      this._preview = {
        name: name,
        url: url
      };
      return this;
    }
    /**
     * Set error handler
     *
     * @param callback
     */

  }, {
    key: "error",
    value: function error(callback) {
      this._errorCallback = callback;
      return this;
    }
    /**
     * Set cancel handler
     *
     * @param callback
     */

  }, {
    key: "cancel",
    value: function cancel(callback) {
      this._cancelCallback = callback;
      return this;
    }
    /**
     * Set success handler
     *
     * @param callback
     */

  }, {
    key: "success",
    value: function success(callback) {
      this._successCallback = callback;
      return this;
    }
    /**
     * Build dropzone
     * @returns {Dropzone}
     */

  }, {
    key: "build",
    value: function build() {
      /**
       * this
       */
      var _dropzoneBuilder = this;
      /**
       * Call after fail
       */


      var dropzoneFail = function dropzoneFail() {
        $(_dropzoneBuilder._dropzoneContainer).removeClass('dz-started');
        $(_dropzoneBuilder._dropzoneContainer).find('.dz-preview').remove();
      };
      /**
       * Default configuration
       *
       * @type object
       */


      var config = {
        url: this._uploadUrl,
        thumbnailWidth: null,
        thumbnailHeight: null,
        uploadMultiple: false,
        acceptedFiles: 'image/*',
        headers: {
          'x-csrf-token': CSRF_TOKEN
        },
        init: function init() {
          /**
           * Set current image in the dropzone if it exists
           */
          if (!!_dropzoneBuilder._preview && !!_dropzoneBuilder._preview.url) {
            this.emit("addedfile", _dropzoneBuilder._preview);
            this.emit("thumbnail", _dropzoneBuilder._preview, _dropzoneBuilder._preview.url);
          }
          /**
           * Added file handler
           */


          this.on("addedfile", function () {
            $(_dropzoneBuilder._dropzoneContainer).find('.dz-filename span').text(LOADING_TEXT);
          });
          /**
           * Error handler
           */

          this.on("error", function (file, response) {
            dropzoneFail();

            if (!!_dropzoneBuilder._errorCallback) {
              _dropzoneBuilder._errorCallback(file, response);
            }
          });
          /**
           * Success handler
           */

          this.on("success", function (file, response) {
            if (!!_dropzoneBuilder._successCallback) {
              _dropzoneBuilder._successCallback(file, response);
            }
          });
        }
      };
      /**
       * Clear button handler
       * Clear file info in dropzone
       */

      if (!!this._cancelButton) {
        this._cancelButton.click(function () {
          dropzoneFail();

          if (!!_dropzoneBuilder._cancelCallback) {
            _dropzoneBuilder._cancelCallback();
          }
        });
      }
      /**
       * Dropzone build
       */


      return new dropzone__WEBPACK_IMPORTED_MODULE_0___default.a(this._dropzoneContainer, _objectSpread(_objectSpread({}, config), this._config));
    }
  }]);

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/http/RequestBuilder.js":
/*!*******************************************!*\
  !*** ./components/http/RequestBuilder.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var _successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./successHandler */ "./components/http/successHandler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * HTTP Request Builder
 */

var _default = /*#__PURE__*/function () {
  function _default(url) {
    _classCallCheck(this, _default);

    this._url = url;
    this._method = 'get';
    this._data = {};
    this._error = _errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"];
    this._success = _successHandler__WEBPACK_IMPORTED_MODULE_1__["default"];

    this._complete = function () {};
  }

  _createClass(_default, [{
    key: "method",
    value: function method(_method) {
      this._method = _method;
      return this;
    }
  }, {
    key: "data",
    value: function data(_data) {
      this._data = _data;
      return this;
    }
  }, {
    key: "error",
    value: function error(fn) {
      this._error = fn;
      return this;
    }
  }, {
    key: "success",
    value: function success(fn) {
      this._success = fn;
      return this;
    }
  }, {
    key: "complete",
    value: function complete(fn) {
      this._complete = fn;
      return this;
    }
  }, {
    key: "send",
    value: function send() {
      var _this = this;

      $.ajax({
        url: this._url,
        type: this._method,
        data: this._data,
        error: function error(response) {
          if (!!response.responseJSON) {
            _this._error(response.responseJSON);
          }
        },
        success: this._success,
        complete: this._complete
      });
    }
  }]);

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/http/errorHandler.js":
/*!*****************************************!*\
  !*** ./components/http/errorHandler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/**
 * Base error handler
 *
 * @param response
 */

/* harmony default export */ __webpack_exports__["default"] = (function (response) {
  /**
   * Redirect to the route
   */
  if (!!response.route) {
    location.href = response.route;
    return;
  }
  /**
   * Show main error message
   */


  if (!!response.message) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__["default"])(response.message);
  }
  /**
   * Show all messages
   */


  if (!!response.errors) {
    Object.keys(response.errors).map(function (key) {
      response.errors[key].map(function (error) {
        Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__["default"])(error);
      });
    });
  }
});

/***/ }),

/***/ "./components/http/index.js":
/*!**********************************!*\
  !*** ./components/http/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestBuilder */ "./components/http/RequestBuilder.js");


/***/ }),

/***/ "./components/http/successHandler.js":
/*!*******************************************!*\
  !*** ./components/http/successHandler.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");

/**
 * Base error handler
 *
 * @param response
 */

/* harmony default export */ __webpack_exports__["default"] = (function (response) {
  /**
   * Show main error message
   */
  if (!!response.message) {
    Object(components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_0__["default"])(response.message);
  }
});

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./components/modal/index.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ "./components/observer/index.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ "./components/http/index.js");




/***/ }),

/***/ "./components/modal/ModalBuilder.js":
/*!******************************************!*\
  !*** ./components/modal/ModalBuilder.js ***!
  \******************************************/
/*! exports provided: default, getModalCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModalCounter", function() { return getModalCounter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var modalsContainer = $('body');
var MODAL_SIZES = {
  sm: 'modal-sm',
  md: 'modal-md',
  lg: 'modal-lg'
};
/**
 * Unique index of the modal
 *
 * @type {number}
 */

var modalIndex = 0;
/**
 * Counter of the modals at the page
 *
 * @type {number}
 */

var modalCounter = 0;
/**
 * Modal Builder
 */

var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    modalIndex++;
    this._id = 'modals-container-item-' + modalIndex;
  }

  _createClass(_default, [{
    key: "size",
    value: function size(_size) {
      if (!!MODAL_SIZES[_size]) {
        this._size = MODAL_SIZES[_size];
      }

      return this;
    }
  }, {
    key: "header",
    value: function header(_header) {
      this._header = _header;
      return this;
    }
  }, {
    key: "body",
    value: function body(_body) {
      this._body = _body;
      return this;
    }
  }, {
    key: "footer",
    value: function footer(_footer) {
      this._footer = _footer;
      return this;
    }
  }, {
    key: "dataset",
    value: function dataset(_dataset) {
      this._dataset = _dataset;
      return this;
    }
  }, {
    key: "_getID",
    value: function _getID() {
      return this._id;
    }
  }, {
    key: "_getSize",
    value: function _getSize() {
      return !!this._size ? this._size : MODAL_SIZES.md;
    }
  }, {
    key: "_getHeader",
    value: function _getHeader() {
      if (!!this._header) {
        return "\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">\xD7</span>\n                    </button>\n                   <h4 class=\"modal-title\">".concat(this._header, "</h4>\n                </div>");
      }

      return '';
    }
  }, {
    key: "_getFooter",
    value: function _getFooter() {
      var result = null;

      if (!!this._footer) {
        result = $("<div class=\"modal-footer\"></div>").append($("\n                    <button type=\"button\" class=\"btn btn-default btn-sm\" data-dismiss=\"modal\">\n                        Cancel\n                    </button>\n                ")).append(this._footer);
      }

      return result;
    }
  }, {
    key: "_getBody",
    value: function _getBody() {
      var result = null;

      if (!!this._body) {
        result = $("<div class=\"modal-body\"></div>").append(this._body);
      }

      return result;
    }
    /**
     * Set callback that will be call before build modal
     *
     * @param callback
     */

  }, {
    key: "beforeBuild",
    value: function beforeBuild(callback) {
      this._beforeBuildCallback = callback;
      return this;
    }
  }, {
    key: "_beforeBuild",
    value: function _beforeBuild() {
      if (typeof this._beforeBuildCallback === "function") {
        this._beforeBuildCallback();
      }
    }
    /**
     * Set callback that will be call after build modal
     *
     * @param callback
     */

  }, {
    key: "afterBuild",
    value: function afterBuild(callback) {
      this._afterBuildCallback = callback;
      return this;
    }
  }, {
    key: "_afterBuild",
    value: function _afterBuild() {
      if (typeof this._afterBuildCallback === "function") {
        this._afterBuildCallback();
      }
    }
    /**
     * Set callback that will be call after close modal
     *
     * @param callback
     */

  }, {
    key: "onClose",
    value: function onClose(callback) {
      this._onCloseCallback = callback;
      return this;
    }
  }, {
    key: "_onClose",
    value: function _onClose() {
      if (typeof this._onCloseCallback === "function") {
        this._onCloseCallback();
      }
    }
  }, {
    key: "modal",
    value: function modal(content) {
      var _this = this;

      /**
       * Data attributes
       * @type {Array}
       */
      var dataset = [];

      if (!!this._dataset) {
        for (var name in this._dataset) {
          dataset.push("data-".concat(name, "=\"").concat(this._dataset[name], "\""));
        }
      }

      var html = $("\n            <div id=\"".concat(this._getID(), "\" class=\"modal fade\" role=\"dialog\" aria-hidden=\"true\" ").concat(dataset.join(' '), ">\n                <div class=\"modal-dialog modal-dialog-centered ").concat(this._getSize(), "\">\n                    <div class=\"modal-content\"></div>\n                </div>\n            </div>"));

      if (!!content) {
        this.body(content);
      }
      /**
       * Call the beforeBuild callback
       */


      this._beforeBuild();

      html.find('.modal-content').append(this._getHeader()).append(this._getBody()).append(this._getFooter());
      html.find('.select2').select2();
      html.find('.datepicker').datetimepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        minView: '2'
      });
      $('.tablestickyheader').stickyTableHeaders();
      modalsContainer.append(html);
      /**
       * Call the afterBuild callback
       */

      this._afterBuild();
      /**
       * update counter of modals at the page
       */


      modalCounter++;
      $('#' + this._getID()).on('hidden.bs.modal', function () {
        modalCounter--;
        $('#' + _this._getID()).off('hidden.bs.modal').remove();
        /**
         * Call the onClose callback
         */

        _this._onClose();
      }).modal();
    }
  }]);

  return _default;
}();
/**
 * Get counter of modals at the page
 *
 * @returns {number}
 */



function getModalCounter() {
  return modalCounter;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/modal/index.js":
/*!***********************************!*\
  !*** ./components/modal/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var _modalConfirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalConfirm */ "./components/modal/modalConfirm.js");



/***/ }),

/***/ "./components/modal/modalConfirm.js":
/*!******************************************!*\
  !*** ./components/modal/modalConfirm.js ***!
  \******************************************/
/*! exports provided: modalConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalConfirm", function() { return modalConfirm; });
/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");


/**
 * Modal confirm
 *
 * @param message
 * @param callback
 */

function modalConfirm(message, callback) {
  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__["SIZES"].sm).header(message).footer($('<button/>', {
    'class': 'btn btn-sm btn-success',
    'text': 'Confirm',
    'data-dismiss': 'modal',
    'click': callback
  })).modal();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/notify/base.js":
/*!***********************************!*\
  !*** ./components/notify/base.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return notify; });
/**
 * Notify helper
 *
 * @param message
 * @param type
 */
function notify(message, type) {
  $.notify({
    message: message
  }, {
    type: type,
    z_index: 1051
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/notify/notifyError.js":
/*!******************************************!*\
  !*** ./components/notify/notifyError.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/notify/base.js");

/* harmony default export */ __webpack_exports__["default"] = (function (message) {
  Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])(message, 'danger');
});

/***/ }),

/***/ "./components/notify/notifySuccess.js":
/*!********************************************!*\
  !*** ./components/notify/notifySuccess.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/notify/base.js");

/* harmony default export */ __webpack_exports__["default"] = (function (message) {
  Object(_base__WEBPACK_IMPORTED_MODULE_0__["default"])(message, 'success');
});

/***/ }),

/***/ "./components/observer/EventObserver.js":
/*!**********************************************!*\
  !*** ./components/observer/EventObserver.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Event observer
 */
var EventObserver = /*#__PURE__*/function () {
  function EventObserver() {
    _classCallCheck(this, EventObserver);

    this.subscribers = {};
  }

  _createClass(EventObserver, [{
    key: "subscribe",
    value: function subscribe(event, handler) {
      this._log('subscribe', event);

      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }

      this.subscribers[event].push(handler);
      return this;
    }
  }, {
    key: "dispatch",
    value: function dispatch(event, data) {
      this._log('dispatch', event);

      if (!!this.subscribers[event]) {
        this.subscribers[event].forEach(function (handler) {
          handler(data, handler);
        });
      }

      return this;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(event, state) {
      this._log('unsubscribe', event);

      if (!!this.subscribers[event]) {
        if (!!state) {
          this.subscribers[event] = this.subscribers[event].filter(function (handler) {
            return handler !== state;
          });
        } else {
          /**
           * Delete all subscribers
           */
          this.subscribers[event] = [];
        }
      }
    }
  }, {
    key: "_log",
    value: function _log(method, event) {
      console.log(method.toUpperCase(), ':', '[', event, ']');
    }
  }]);

  return EventObserver;
}();

var observer = new EventObserver();
/* harmony default export */ __webpack_exports__["default"] = (observer);

/***/ }),

/***/ "./components/observer/index.js":
/*!**************************************!*\
  !*** ./components/observer/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventObserver */ "./components/observer/EventObserver.js");


/***/ }),

/***/ "./exceptions/SavedItemNotFound.js":
/*!*****************************************!*\
  !*** ./exceptions/SavedItemNotFound.js ***!
  \*****************************************/
/*! exports provided: SavedItemNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedItemNotFound", function() { return SavedItemNotFound; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Saved item not found
 *
 * Using in fastSave handler
 */
var SavedItemNotFound = /*#__PURE__*/function (_Error) {
  _inherits(SavedItemNotFound, _Error);

  var _super = _createSuper(SavedItemNotFound);

  function SavedItemNotFound() {
    _classCallCheck(this, SavedItemNotFound);

    var message = 'SavedItemNotFound';
    return _super.call(this, message);
  }

  return SavedItemNotFound;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ "./handlers/addEmbed.js":
/*!******************************!*\
  !*** ./handlers/addEmbed.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");

/**
 * Add embed element
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentButton = $(this);
  var target = currentButton.data('target');
  var template = currentButton.data('template');
  var idPlaceholder = currentButton.data('idplacepolder');
  var rowId = currentButton.data('rowid');
  currentButton.data('rowid', ++rowId);
  var embedForm = $('#' + template).html();
  var embedBlockId = rowId + new Date().getTime().toString(16);
  embedForm = embedForm.replace(/%embedBlockId%/g, embedBlockId);

  if (!!idPlaceholder) {
    embedForm = embedForm.replace(new RegExp(idPlaceholder, "g"), rowId);
  }

  $('#' + target).append(embedForm);
  /**
   * Event dispatch
   */

  var event = currentButton.data('event');

  if (event && event.length) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(event, {
      embedBlockId: embedBlockId
    });
  }

  currentButton.trigger('ai_animation');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/ajaxPagination.js":
/*!************************************!*\
  !*** ./handlers/ajaxPagination.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 *Ajax pagination
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var container = $(this).parents('.ajax-pagination').data('container');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](this.href).method('get').success(function (response) {
    $('#' + container).replaceWith(response);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/confirmModal.js":
/*!**********************************!*\
  !*** ./handlers/confirmModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");





/**
 * Open confirm modal before action
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var dataSet = this.dataset;
  var url = this.href;
  var parentButton = $(this);
  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__["SIZES"].sm).header(dataSet.header).footer($('<button/>', {
    'class': (dataSet.btnClass || 'btn-sm btn-success') + ' btn',
    'text': dataSet.btnName || 'Confirm',
    'click': function click() {
      var currentButton = $(this);

      if (currentButton.hasClass('loading')) {
        return false;
      }

      currentButton.addClass('loading');
      var data = {};

      if (dataSet.hasOwnProperty('withForm')) {
        data = parentButton.closest('form').serializeArray();
      }

      new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](url).data(data).method(dataSet.method || 'get').success(function (response) {
        if (!!dataSet.event) {
          components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(dataSet.event, response);
        }

        if (parseInt(dataSet.reload) === 1) {
          location.reload();
        }

        if (parseInt(dataSet.dismiss) === 1) {
          currentButton.closest('.modal').modal('hide');
        }

        Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(response);
      }).complete(function () {
        currentButton.removeClass('loading');
      }).send();
    }
  })).modal();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/fastSave.js":
/*!******************************!*\
  !*** ./handlers/fastSave.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");





/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = currentBtn.closest('.fast-save-container');
  var dataSet = this.dataset;

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').success(function (response) {
    if (!!dataSet.event) {
      components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(dataSet.event, response);
    }

    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(response);
  }).data(Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(savedItem)).send();
  savedItem.removeClass('changed');
  savedItem.find('.changed').removeClass('changed');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/fastSavePage.js":
/*!**********************************!*\
  !*** ./handlers/fastSavePage.js ***!
  \**********************************/
/*! exports provided: CONTAINER_SELECTOR, PAGE_SAVED, UPDATE_SAVE_ALL_BUTTON, default, markChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINER_SELECTOR", function() { return CONTAINER_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_SAVED", function() { return PAGE_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SAVE_ALL_BUTTON", function() { return UPDATE_SAVE_ALL_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markChanged", function() { return markChanged; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");





var CONTAINER_SELECTOR = '.fast-save-page-container';
var PAGE_SAVED = 'PAGE_SAVED';
var UPDATE_SAVE_ALL_BUTTON = 'UPDATE_SAVE_ALL_BUTTON';
/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = $(CONTAINER_SELECTOR);
  var dataSet = this.dataset;

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  if (savedItem.hasClass('progress')) {
    return false;
  }

  savedItem.addClass('progress');
  /**
   * Get changed data
   */

  var formItems = savedItem.find('.changed');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(formItems);

  if (!Object.keys(data).length) {
    savedItem.removeClass('progress');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).complete(function () {
    savedItem.removeClass('progress');
  }).success(function (response) {
    formItems.removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);

    if (!!dataSet.event) {
      components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(dataSet.event, response);
    }
  }).send();
  return false;
});
/**
 * Mark form's elements as changed
 */

function markChanged() {
  $(this).addClass('changed');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/filterDateRange.js":
/*!*************************************!*\
  !*** ./handlers/filterDateRange.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "../../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var dateFormat = 'YYYY-MM-DD';
  var dateRangeInputs = $('#date-range-inputs');
  var selectedOption = $('#date-range-select').find(':selected');
  var dateFrom = dateRangeInputs.find('.filter-from');
  var dateTo = dateRangeInputs.find('.filter-to');
  var selectedValue = selectedOption.val();

  if (selectedValue === 'custom') {
    dateRangeInputs.css({
      visibility: 'initial',
      height: 'auto'
    });
  } else {
    dateRangeInputs.css({
      visibility: 'hidden',
      height: 0
    });
    var dateFromValue = '';
    var dateToValue = '';

    switch (selectedValue) {
      case 'today':
        dateFromValue = dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().format(dateFormat);
        break;

      case 'yesterday':
        dateFromValue = dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'day').format(dateFormat);
        break;

      case 'current-week':
        dateFromValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().day(1).format(dateFormat);
        dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().day(7).format(dateFormat);
        break;

      case 'previous-week':
        dateFromValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().day(-6).format(dateFormat);
        dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().day(0).format(dateFormat);
        break;

      case 'current-month':
        dateFromValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf('month').format(dateFormat);
        dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf('month').format(dateFormat);
        break;

      case 'previous-month':
        dateFromValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'month').startOf('month').format(dateFormat);
        dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, 'month').endOf('month').format(dateFormat);
        break;

      case 'last-seven':
        dateFromValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(6, 'day').format(dateFormat);
        dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().format(dateFormat);
        break;

      case 'last-thirty':
        dateFromValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(29, 'day').format(dateFormat);
        dateToValue = moment__WEBPACK_IMPORTED_MODULE_0___default()().format(dateFormat);
        break;
    }

    dateFrom.val(dateFromValue);
    dateTo.val(dateToValue);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/index.js":
/*!***************************!*\
  !*** ./handlers/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _fastSave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fastSave */ "./handlers/fastSave.js");
/* harmony import */ var _addEmbed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addEmbed */ "./handlers/addEmbed.js");
/* harmony import */ var _removeEmbed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeEmbed */ "./handlers/removeEmbed.js");
/* harmony import */ var _submitForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitForm */ "./handlers/submitForm.js");
/* harmony import */ var _ajaxPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajaxPagination */ "./handlers/ajaxPagination.js");
/* harmony import */ var _confirmModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmModal */ "./handlers/confirmModal.js");
/* harmony import */ var _pageLimit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pageLimit */ "./handlers/pageLimit.js");
/* harmony import */ var _modalData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalData */ "./handlers/modalData.js");
/* harmony import */ var handlers_filterDateRange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! handlers/filterDateRange */ "./handlers/filterDateRange.js");
/* harmony import */ var _fastSavePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fastSavePage */ "./handlers/fastSavePage.js");
/* harmony import */ var tablesorter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tablesorter */ "../../../node_modules/tablesorter/dist/js/jquery.tablesorter.combined.js");
/* harmony import */ var tablesorter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tablesorter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sticky_table_headers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sticky-table-headers */ "../../../node_modules/sticky-table-headers/js/jquery.stickytableheaders.js");
/* harmony import */ var sticky_table_headers__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sticky_table_headers__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var tablesorter_dist_css_theme_default_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tablesorter/dist/css/theme.default.min.css */ "../../../node_modules/tablesorter/dist/css/theme.default.min.css");
/* harmony import */ var tablesorter_dist_css_theme_default_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tablesorter_dist_css_theme_default_min_css__WEBPACK_IMPORTED_MODULE_12__);













$(document).scroll(function (e) {
  if ($(this).scrollTop() > 300) {
    $('.visit-stats').each(function () {
      $(this).height(0).css('display', 'table-column-group');
    });
  } else {
    $('.visit-stats').each(function () {
      $(this).removeAttr('style');
    });
  }
}).ready(function () {
  var tablesorter = $('.tablesorter');

  if (tablesorter) {
    tablesorter.tablesorter().stickyTableHeaders();
    tablesorter.find('thead').css('background', '#fff');
  }
})
/**
 * Open modal with data from server by request
 */
.on('click', '.ajax-modal-action', _modalData__WEBPACK_IMPORTED_MODULE_7__["default"])
/**
 * Open confirm modal
 */
.on('click', '.ajax-confirm-action', _confirmModal__WEBPACK_IMPORTED_MODULE_5__["default"])
/**
 * Submit form data
 */
.on('click', '.ajax-submit-action', _submitForm__WEBPACK_IMPORTED_MODULE_3__["default"])
/**
 * Submit form data
 */
.on('click', '.ajax-pagination a', _ajaxPagination__WEBPACK_IMPORTED_MODULE_4__["default"])
/**
 * Add embed element
 */
.on('click', '.add-embed', _addEmbed__WEBPACK_IMPORTED_MODULE_1__["default"])
/**
 * Remove embed element
 */
.on('click', '.rm-embed', _removeEmbed__WEBPACK_IMPORTED_MODULE_2__["default"])
/**
 * Fast save the data of an entity
 */
.on('click', '.fast-save', _fastSave__WEBPACK_IMPORTED_MODULE_0__["default"])
/**
 * Set page limit
 */
.on('change', '.page-limit', _pageLimit__WEBPACK_IMPORTED_MODULE_6__["default"])
/**
 * Mark inputs as changed
 */
.on('change', "".concat(_fastSavePage__WEBPACK_IMPORTED_MODULE_9__["CONTAINER_SELECTOR"], " input, ").concat(_fastSavePage__WEBPACK_IMPORTED_MODULE_9__["CONTAINER_SELECTOR"], " select, ").concat(_fastSavePage__WEBPACK_IMPORTED_MODULE_9__["CONTAINER_SELECTOR"], " textarea"), _fastSavePage__WEBPACK_IMPORTED_MODULE_9__["markChanged"]).ready(function () {
  var dateRange = $('#date-range-select');

  if (dateRange.length) {
    Object(handlers_filterDateRange__WEBPACK_IMPORTED_MODULE_8__["default"])();
    dateRange.change(handlers_filterDateRange__WEBPACK_IMPORTED_MODULE_8__["default"]);
  }
});

function initSticky() {
  $('.tablesorter').stickyTableHeaders();
}

$(".table-responsive").scroll(function () {
  initSticky();
});
/**
 * Fast save data on the page
 */

$('.fast-save-page').click(_fastSavePage__WEBPACK_IMPORTED_MODULE_9__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/modalData.js":
/*!*******************************!*\
  !*** ./handlers/modalData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");




/**
 * Open modal with form by request
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var _this = this;

  e.preventDefault();
  var currentButton = $(this);

  if (currentButton.hasClass('loading')) {
    return false;
  }

  currentButton.addClass('loading');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](this.href).method(this.dataset.method || 'get').success(function (response) {
    new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_1__["SIZES"].lg).dataset({
      reload: _this.dataset.reload || 1
    }).header(_this.dataset.header).afterBuild(function () {
      if (!!_this.dataset.event) {
        components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_this.dataset.event, response);
      }
    }).onClose(function () {
      if (!!_this.dataset.closeEvent) {
        components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_this.dataset.closeEvent, response);
      }
    }).modal(response);
  }).complete(function () {
    currentButton.removeClass('loading');
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/pageLimit.js":
/*!*******************************!*\
  !*** ./handlers/pageLimit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Set page limit
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var href = new URL(window.location.href);
  href.searchParams.set('page_limit', $(this).val());
  href.searchParams["delete"]('page');
  window.location.href = href.toString();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/removeEmbed.js":
/*!*********************************!*\
  !*** ./handlers/removeEmbed.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");


/**
 * Remove embeded element
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var parent = !!this.dataset.parent ? $(this).closest(this.dataset.parent) : $(this).parent();

  if (!this.dataset.id) {
    parent.remove();
    return;
  }

  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__["SIZES"].sm).header('Are you sure?').footer($('<button/>', {
    'class': 'btn btn-sm btn-danger',
    'text': 'Delete',
    'data-dismiss': 'modal',
    'click': function click() {
      parent.remove();
    }
  })).modal();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./handlers/submitForm.js":
/*!********************************!*\
  !*** ./handlers/submitForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






/**
 * Submit form
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var _this = this;

  e.preventDefault();
  console.log('SEND');
  var currentButton = $(this);

  if (currentButton.hasClass('loading')) {
    return false;
  }

  currentButton.addClass('loading');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](this.href).data(currentButton.closest('form').serializeArray()).method(this.dataset.method || 'get').success(function (response) {
    if (!!_this.dataset.event) {
      components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_this.dataset.event, response);
    }

    if (response.type !== 'error' && canReload(_this)) {
      location.reload();
    }

    if (parseInt(_this.dataset.dismiss) === 1) {
      currentButton.closest('.modal').modal('hide');
    }

    if (response.type === 'error') {
      Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(response);
    } else {
      Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
    }
  }).complete(function (r) {
    if (r.responseJSON.hasOwnProperty('report_image')) {
      $('#report_path').val(r.responseJSON.report_image);
    }

    currentButton.removeClass('loading');
  }).send();
  return false;
});
/**
 * Can reload the page
 *
 * @param button
 * @returns {boolean}
 */

function canReload(button) {
  if (parseInt(button.dataset.reload) === 1) {
    if (Object(components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_2__["getModalCounter"])() < 2) {
      var dataReload = $(button).closest('.modal').data('reload');

      if (_typeof(dataReload) === ( true ? "undefined" : undefined) || dataReload === false || parseInt(dataReload) === 1) {
        return true;
      }
    }
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./helpers/getFilePath.js":
/*!********************************!*\
  !*** ./helpers/getFilePath.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getSubFolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSubFolder */ "./helpers/getSubFolder.js");

/**
 * Get file path from storage with sub folders
 *
 * @param {string} rootFolder Root folder in the storage
 * @param {string} fileName   File name
 *
 * @returns {string}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (rootFolder, fileName) {
  return '/storage/' + rootFolder + '/' + Object(_getSubFolder__WEBPACK_IMPORTED_MODULE_0__["default"])(fileName) + '/' + fileName;
});

/***/ }),

/***/ "./helpers/getFormData.js":
/*!********************************!*\
  !*** ./helpers/getFormData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Get form data
 *
 * @param {jQuery} form Form element
 *
 * @returns {{}}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (form) {
  var formData = {};
  var formItems = form.find('input, select');

  if (!formItems.length) {
    formItems = form;
  }

  formItems.each(function () {
    var currentItem = $(this);

    switch (currentItem.attr('type')) {
      case 'radio':
      case 'checkbox':
        formData[currentItem.attr('name')] = !!currentItem.prop("checked") * 1;
        break;

      default:
        formData[currentItem.attr('name')] = currentItem.val();
    }
  });
  return formData;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./helpers/getSubFolder.js":
/*!*********************************!*\
  !*** ./helpers/getSubFolder.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blueimp-md5 */ "../../../node_modules/blueimp-md5/js/md5.js");
/* harmony import */ var blueimp_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blueimp_md5__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Get sub folders of the file
 *
 * Result of the function looks like: a1/b2/c3
 * Where md5 of the file = a1b2c3.........
 *
 * @param {string} fileName Name of the file
 *
 * @returns {string}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (fileName) {
  var fileNameHash = blueimp_md5__WEBPACK_IMPORTED_MODULE_0___default()(fileName).substring(0, 6);
  var pathParts = fileNameHash.match(/.{1,2}/g);
  return pathParts.join('/');
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/bootstrap */ "./vendor/bootstrap/index.js");
/* harmony import */ var bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-colorpicker */ "../../../node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js");
/* harmony import */ var bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_colorpicker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_colorpicker_dist_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css */ "../../../node_modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css");
/* harmony import */ var bootstrap_colorpicker_dist_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_colorpicker_dist_css_bootstrap_colorpicker_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! font-awesome/scss/font-awesome.scss */ "../../../node_modules/font-awesome/scss/font-awesome.scss");
/* harmony import */ var font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(font_awesome_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor/animate */ "./vendor/animate/index.js");
/* harmony import */ var _vendor_bootstrap_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor/bootstrap-confirmation */ "./vendor/bootstrap-confirmation/index.js");
/* harmony import */ var _vendor_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor/bootstrap-datetimepicker */ "./vendor/bootstrap-datetimepicker/index.js");
/* harmony import */ var _vendor_bootstrap_notify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor/bootstrap-notify */ "./vendor/bootstrap-notify/index.js");
/* harmony import */ var _vendor_select2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendor/select2 */ "./vendor/select2/index.js");
/* harmony import */ var _vendor_ekko_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vendor/ekko-lightbox */ "./vendor/ekko-lightbox/index.js");
/* harmony import */ var _vendor_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vendor/theme */ "./vendor/theme/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ "./components/index.js");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./handlers */ "./handlers/index.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_14__);
/**
 * jQuery
 */

window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
/**
 * Bootstrap
 */


/**
 * Bootstrap Ccolorpicker
 */



/**
 * Font Awesome
 */


/**
 * External modules
 * TODO: get by npm
 */








/**
 * Components
 */


/**
 * Handlers
 */


/**
 * Styles
 */


/**
 * Modules loader
 */

var path = location.pathname.split('/');

if (path.length > 1) {
  /**
   * To creating different files for each module
   * (Don't forget npm i --save-dev bundle-loader)
   * const context = require.context('bundle-loader!modules', true, /index\.js$/);
   */
  var modules = __webpack_require__("./modules sync recursive \\.\\/[\\w-_]+\\/module\\.js$");

  modules.keys().map(function (module) {
    var moduleItems = module.split('/');

    if (moduleItems[1] === path[1]) {
      console.log('MODULE:', path[1]);
      modules(module);
    }
  });

  var subModules = __webpack_require__("./modules sync recursive modules(.*)module\\.js$");

  subModules.keys().map(function (module) {
    var moduleItems = module.split('/');

    if (moduleItems[1] === path[1] && moduleItems[3] === path[2]) {
      console.log('SUB MODULE:', path[2]);
      subModules(module);
    }
  });
}

/***/ }),

/***/ "./listeners/awardCreate.js":
/*!**********************************!*\
  !*** ./listeners/awardCreate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATE"], self);
    var currentBtn = $(_this);
    var editBtn = $('#' + _this.dataset.templateId).html().replace(new RegExp(_this.dataset.templatePlaceholder, "g"), data.award_id).replace(new RegExp('%field_name%', "g"), _this.dataset.fieldName || '');
    currentBtn.parent().append(editBtn);
    currentBtn.remove();
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_CREATED"], data);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./listeners/awardDelete.js":
/*!**********************************!*\
  !*** ./listeners/awardDelete.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_DELETE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_1__["AWARD_DELETE"], self);
    var createBtn = $('#' + _this.dataset.templateId).html().replace(new RegExp('%field_name%'), _this.dataset.fieldName || '');
    var parent = $(_this).parent();
    parent.children().remove();
    parent.append(createBtn);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./listeners/dropZoneInit.js":
/*!***********************************!*\
  !*** ./listeners/dropZoneInit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFilePath */ "./helpers/getFilePath.js");
/* harmony import */ var components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/dropzone/DropzoneBuilder */ "./components/dropzone/DropzoneBuilder.js");




/**
 * Dropzone init after the modal opened
 */

/* harmony default export */ __webpack_exports__["default"] = (function (EVENT_NAME) {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(EVENT_NAME, function () {
    /**
     * Dropzone container
     *
     * @type {HTMLElement | null}
     */
    var dropzoneElement = document.getElementById('dropzone');
    /**
     * Preview URL hidden input
     *
     * @type {HTMLElement | null}
     */

    var previewURL = document.getElementById('preview-url');
    /**
     * Dropzone initialization
     */

    var dropzoneBuilder = new components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_3__["default"](dropzoneElement).setUploadUrl(dropzoneElement.dataset.url).error(function (file, response) {
      Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
      $('#preview-url').val('');
    }).cancel(function () {
      $('#preview-url').val('');
    }).success(function (file, response) {
      $('.dz-filename span').text(response.file_name);
      previewURL.value = response.file_name;
    });
    /**
     * Set preview
     */

    if (previewURL.value.length) {
      dropzoneBuilder.setPreview(previewURL.value, Object(helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__["default"])(dropzoneElement.dataset.folder, previewURL.value));
    }
    /**
     * Dropzone build
     */


    dropzoneBuilder.build();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./listeners/updateSaveAllButton.js":
/*!******************************************!*\
  !*** ./listeners/updateSaveAllButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_1__["UPDATE_SAVE_ALL_BUTTON"], function (data, self) {
    var saveAllButton = $('#update-all');
    var counter = $('#update-all .count');
    var count = $('.fast-save-container.changed').length;

    if (count > 0) {
      saveAllButton.show();
    } else {
      saveAllButton.hide();
    }

    counter.html(count);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules sync recursive \\.\\/[\\w-_]+\\/module\\.js$":
/*!***********************************************!*\
  !*** ./modules sync \.\/[\w-_]+\/module\.js$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./action-log/module.js": "./modules/action-log/module.js",
	"./action-type/module.js": "./modules/action-type/module.js",
	"./add-me/module.js": "./modules/add-me/module.js",
	"./announcements/module.js": "./modules/announcements/module.js",
	"./assets-log/module.js": "./modules/assets-log/module.js",
	"./assets/module.js": "./modules/assets/module.js",
	"./award/module.js": "./modules/award/module.js",
	"./banner/module.js": "./modules/banner/module.js",
	"./cms-adps/module.js": "./modules/cms-adps/module.js",
	"./cms-user-actions/module.js": "./modules/cms-user-actions/module.js",
	"./collection/module.js": "./modules/collection/module.js",
	"./crop/module.js": "./modules/crop/module.js",
	"./daily-loot/module.js": "./modules/daily-loot/module.js",
	"./default/module.js": "./modules/default/module.js",
	"./deploy/module.js": "./modules/deploy/module.js",
	"./dpa/module.js": "./modules/dpa/module.js",
	"./dye/module.js": "./modules/dye/module.js",
	"./gift-wrap/module.js": "./modules/gift-wrap/module.js",
	"./linked-assets/module.js": "./modules/linked-assets/module.js",
	"./localization/module.js": "./modules/localization/module.js",
	"./magic/module.js": "./modules/magic/module.js",
	"./makeup-kit-asset/module.js": "./modules/makeup-kit-asset/module.js",
	"./makeup-kit/module.js": "./modules/makeup-kit/module.js",
	"./meal-ingredient-groups/module.js": "./modules/meal-ingredient-groups/module.js",
	"./meal-ingredients/module.js": "./modules/meal-ingredients/module.js",
	"./meal/module.js": "./modules/meal/module.js",
	"./neighbor-activity/module.js": "./modules/neighbor-activity/module.js",
	"./news-gifts-log/module.js": "./modules/news-gifts-log/module.js",
	"./product/module.js": "./modules/product/module.js",
	"./purchase/module.js": "./modules/purchase/module.js",
	"./settings/module.js": "./modules/settings/module.js",
	"./shop-department/module.js": "./modules/shop-department/module.js",
	"./shop-releases/module.js": "./modules/shop-releases/module.js",
	"./shop-stats/module.js": "./modules/shop-stats/module.js",
	"./sound/module.js": "./modules/sound/module.js",
	"./subtype-attributes/module.js": "./modules/subtype-attributes/module.js",
	"./tamatool/module.js": "./modules/tamatool/module.js",
	"./users/module.js": "./modules/users/module.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./modules sync recursive \\.\\/[\\w-_]+\\/module\\.js$";

/***/ }),

/***/ "./modules sync recursive modules(.*)module\\.js$":
/*!*********************************************!*\
  !*** ./modules sync modules(.*)module\.js$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./settings/modules/ai_animation/module.js": "./modules/settings/modules/ai_animation/module.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./modules sync recursive modules(.*)module\\.js$";

/***/ }),

/***/ "./modules/action-log/module.js":
/*!**************************************!*\
  !*** ./modules/action-log/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ "../../../node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");




$(document).ready(function () {
  $('.reports').css('pointer-events', 'auto');
}).on('click', '#report_path', function () {
  $('#report_path').select();
  document.execCommand("copy");
  Object(components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_3__["default"])('Copied to buffer!');
}).on('click', '#product_id', function () {
  $('#product_id').prev('.select2-container').find('.select2-search__field').focus();
}).on('click', '#send-report', function (e) {
  e.preventDefault();
  $(this).closest("form").submit();
  return false;
}).on('click', '.reports', function (e) {
  var _this = this;

  e.preventDefault();
  $('#send-report').attr('disabled', true);
  $('.reports').css('pointer-events', 'none');
  var dateFrom = $('[name="today[from]"]').val();
  var dateTo = $('[name="today[to]"]').val();
  var canvas = $('#canvas-data').val();
  var data = {
    from: dateFrom,
    to: dateTo,
    canvas: canvas
  };
  var canvas_handler = $("#canvas_handler");

  if (Object.keys(data).length) {
    $.ajax({
      url: $(this).attr('href'),
      type: 'POST',
      data: data,
      error: function error(response) {
        $('.reports').css('pointer-events', 'auto');

        if (!!response.responseJSON) {
          _this._error(response.responseJSON);
        }
      },
      success: function success(r) {
        $('.reports').css('pointer-events', 'auto');
        canvas_handler.empty();

        if (r.hasOwnProperty('success')) {
          $('.modal-title').text(r.success);
          $('.modal-header').css('background', '#a7ff83');
        } else {
          new ModalBuilder().header('Предпросмотр отчета').body(r).modal();
        }
      },
      complete: function complete(r) {
        $('.reports').css('pointer-events', 'auto');
        console.log('complete');
        postProcess();
      }
    });
  }

  function postProcess() {
    var submitBtn = $('#load');
    submitBtn.data('loading-text', '<i class="fa fa-spinner fa-spin"></i> Подготовка');
    submitBtn.button('loading');
    submitBtn.attr('disabled', true);
    setTimeout(function () {
      var element = $(".html-content-holder");
      var canvas_handler = $("#canvas_handler");
      canvas_handler.empty();
      var copy_ele = $(element).find('.wrapper').get(0).cloneNode(true);
      canvas_handler.append(copy_ele);
      canvas_handler.css('height', element.scrollHeight + 20);
      canvas_handler.css('max-width', 760);
      canvas_handler.css('width', '100%');
      element.css('margin-bottom', 20);
      element.css('padding-bottom', 40);
      html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(copy_ele, {
        scrollX: 0,
        scrollY: 0,
        useCORS: true
      }).then(function (canvas) {
        var imageData = canvas.toDataURL("image/png");
        var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $('#canvas-data').val(newData); // element.append(canvas_handler.html())

        element.empty();
        element.get(0).appendChild(canvas);
        setTimeout(function () {
          submitBtn.button('reset');
          $('#send-report').attr('disabled', false);
        }, 500);
      });
    }, 300);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/constants.js":
/*!******************************************!*\
  !*** ./modules/action-type/constants.js ***!
  \******************************************/
/*! exports provided: ACTION_TYPE_STATES_CHANGED, DELTA_TIME_ATTRIBUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPE_STATES_CHANGED", function() { return ACTION_TYPE_STATES_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELTA_TIME_ATTRIBUTE", function() { return DELTA_TIME_ATTRIBUTE; });
var ACTION_TYPE_STATES_CHANGED = 'ACTION_TYPE_STATES_CHANGED';
var DELTA_TIME_ATTRIBUTE = 19;

/***/ }),

/***/ "./modules/action-type/handlers/collapseState.js":
/*!*******************************************************!*\
  !*** ./modules/action-type/handlers/collapseState.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Collapse state
 *
 * @param e
 *
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var parent = $(this).closest('.action-type-state');
  parent.toggleClass('down');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/handlers/collapseStates.js":
/*!********************************************************!*\
  !*** ./modules/action-type/handlers/collapseStates.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Collapse states
 *
 * @param e
 *
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  $('.action-type-state').toggleClass('down');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/handlers/removeActionTypeState.js":
/*!***************************************************************!*\
  !*** ./modules/action-type/handlers/removeActionTypeState.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bootstrap/constants */ "./components/bootstrap/constants.js");
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/action-type/constants */ "./modules/action-type/constants.js");





/**
 * Remove the State of the Action Type
 * at the modal
 * with confirm
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentElement = $(this);
  var parent = currentElement.closest('.action-type-state');

  if (!currentElement.data('id')) {
    parent.remove();
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["ACTION_TYPE_STATES_CHANGED"], {});
    return false;
  }

  new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]().size(components_bootstrap_constants__WEBPACK_IMPORTED_MODULE_0__["SIZES"].sm).header('Are you sure?').footer($('<button/>', {
    'class': 'btn btn-sm btn-danger',
    'text': 'Delete',
    'data-dismiss': 'modal',
    'click': function click() {
      new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](currentElement.data('url')).method('DELETE').success(function () {
        parent.remove();
        components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["ACTION_TYPE_STATES_CHANGED"], {});
      }).send();
    }
  })).modal();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/listeners/updateIndexes.js":
/*!********************************************************!*\
  !*** ./modules/action-type/listeners/updateIndexes.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_action_type_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/action-type/constants */ "./modules/action-type/constants.js");


/**
 * Update indexes of the states
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_action_type_constants__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPE_STATES_CHANGED"], function () {
    var index = 1;
    $('.index').each(function (_, item) {
      $(item).val(index++);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/module.js":
/*!***************************************!*\
  !*** ./modules/action-type/module.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _listeners_updateIndexes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/updateIndexes */ "./modules/action-type/listeners/updateIndexes.js");
/* harmony import */ var _handlers_collapseState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/collapseState */ "./modules/action-type/handlers/collapseState.js");
/* harmony import */ var _handlers_collapseStates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/collapseStates */ "./modules/action-type/handlers/collapseStates.js");
/* harmony import */ var _handlers_removeActionTypeState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/removeActionTypeState */ "./modules/action-type/handlers/removeActionTypeState.js");
/* harmony import */ var modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/action-type/constants */ "./modules/action-type/constants.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./modules/action-type/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Update indexes
 */

Object(_listeners_updateIndexes__WEBPACK_IMPORTED_MODULE_0__["default"])();
$(document).on('click', '#product_id', function () {
  console.log('product_id');
  $('#product_id').prev('.select2-container').find('.select2-search__field').focus();
}).on('change', '[name$="[time_type]"]', function () {
  var currentLi = $(this).closest('li');
  var deltaTimeHidden = currentLi.find('[name$="[attributes][' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["DELTA_TIME_ATTRIBUTE"] + '][value]"]');
  var deltaTimeDisplay = currentLi.find('[name$="[attributes][' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["DELTA_TIME_ATTRIBUTE"] + '][value][display]"]');
  deltaTimeDisplay.val(deltaTimeHidden.data('value') / parseInt($(this).val()));
}).on('input', '[name$="[attributes][' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["DELTA_TIME_ATTRIBUTE"] + '][value][display]"]', function () {
  var currentLi = $(this).closest('li');
  var timeType = currentLi.find('[name$="[time_type]"]').val();
  var deltaTimeHidden = currentLi.find('[name$="[attributes][' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_4__["DELTA_TIME_ATTRIBUTE"] + '][value]"]');
  deltaTimeHidden.val($(this).val() * timeType);
})
/**
 * Collapse one state
 */
.on('click', '.collapse-link', _handlers_collapseState__WEBPACK_IMPORTED_MODULE_1__["default"])
/**
 * Collapse all states
 */
.on('click', '.hide-states', _handlers_collapseStates__WEBPACK_IMPORTED_MODULE_2__["default"])
/**
 * Remove state
 */
.on('click', '.rm-action-type-states', _handlers_removeActionTypeState__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/action-type/style.scss":
/*!****************************************!*\
  !*** ./modules/action-type/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/add-me/handlers/saveState.js":
/*!**********************************************!*\
  !*** ./modules/add-me/handlers/saveState.js ***!
  \**********************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");




/**
 * Update row
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.save-container');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_3__["default"])(container.find(".changed input"));

  if (!Object.keys(data).length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to save!');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).success(function (resp) {
    container.find('tr.changed').removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(resp);
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/add-me/module.js":
/*!**********************************!*\
  !*** ./modules/add-me/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/add-me/handlers/saveState.js");

$(document)
/**
 * Mark the row as changed
 */
.on('click', 'input[type="checkbox"]', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Save the row
 */
.on('click', '.save-page', _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__["saveState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/announcements/constants.js":
/*!********************************************!*\
  !*** ./modules/announcements/constants.js ***!
  \********************************************/
/*! exports provided: ANNOUNCEMENTS_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANNOUNCEMENTS_SHOW_FORM", function() { return ANNOUNCEMENTS_SHOW_FORM; });
var ANNOUNCEMENTS_SHOW_FORM = 'ANNOUNCEMENTS_SHOW_FORM';

/***/ }),

/***/ "./modules/announcements/listeners/showForm.js":
/*!*****************************************************!*\
  !*** ./modules/announcements/listeners/showForm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/announcements/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["ANNOUNCEMENTS_SHOW_FORM"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["ANNOUNCEMENTS_SHOW_FORM"], self);
    $('.datetimepicker').datetimepicker({
      format: 'yyyy-mm-dd hh:ii:ss',
      autoclose: true
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/announcements/module.js":
/*!*****************************************!*\
  !*** ./modules/announcements/module.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/announcements/listeners/showForm.js");





$(document)
/**
 * Create award and save announcement
 */
.on('click', '.award-create-button', function () {
  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__["default"].bind(this)();
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_2__["default"].bind(_this)();
})
/**
 * Unsubscribe on modal close
 */
.ready(function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_0__["CLOSE_AWARD_MODAL"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_0__["AWARD_CREATE"]);
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_0__["AWARD_CREATED"]);
  });
});
/**
 * Run the show form handler.
 * After click at create or edit button
 */

$('.show-form').click(_listeners_showForm__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets-log/module.js":
/*!**************************************!*\
  !*** ./modules/assets-log/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./modules/assets-log/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);

$(document).on('click', '.toggle_ids', function () {
  if ($(this).next().height() > 0) {
    $(this).text($(this).text().replace('Hide', 'Show'));
    $(this).next().height(0);
  } else {
    $(this).text($(this).text().replace('Show', 'Hide'));
    $(this).text().replace('Show', 'Hide');
    $(this).next().height('100%');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets-log/styles.scss":
/*!****************************************!*\
  !*** ./modules/assets-log/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/assets/handlers/changeType.js":
/*!***********************************************!*\
  !*** ./modules/assets/handlers/changeType.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * SUB_TYPES - it is a global object
 * Inited in asset/form.blade.php
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  setSubtypes(this.value, this.dataset.subtype);
});
var assetFormSubtype = $("#subtype");
var assetFormActionType = $('#asset-form-action-type');
var assetFormCollection = $('#asset-form-collection');
var prices = $('.prices');

function setSubtypes(type, subtype) {
  assetFormSubtype.empty().select2({
    data: SUB_TYPES[type]
  }).val(subtype).change();
  /**
   * Default state
   */

  hide(assetFormActionType);
  hide(assetFormCollection);
  show(prices);

  switch (parseInt(type)) {
    // Furniture
    case 1:
      show(assetFormActionType);
      break;
    // Clothes

    case 2:
      show(assetFormCollection);
      break;
    // Body Part

    case 5:
      hide(prices);
      break;
  }
}

function hide(element) {
  element.addClass('hide');
}

function show(element) {
  element.removeClass('hide');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/handlers/copyAssets.js":
/*!***********************************************!*\
  !*** ./modules/assets/handlers/copyAssets.js ***!
  \***********************************************/
/*! exports provided: copyAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAssets", function() { return copyAssets; });
/**
 * Handler for copy assets ids to clipboard
 */
function copyAssets(e) {
  e.preventDefault();
  var assetIdsField = $('textarea[name="asset_ids"]');
  var withName = $('input[name="with_name"]');
  var assetIds = [];
  $('.fast-save-container').find('input[name="for_copy"]:checked').each(function (n, item) {
    console.log($(item));
    var assetId = $(item).data('asset-id');
    var assetName = $(item).data('asset-name');

    if (assetId) {
      if (withName.prop("checked") === true) {
        assetIds.push('\n' + assetId + ' ' + assetName);
      } else {
        assetIds.push(assetId);
      }
    }
  });
  /**
   * Select all if no one is selected
   */

  if (assetIds.length == 0) {
    $('.fast-save-container').find('input[name="for_copy"]').each(function (n, item) {
      var assetId = $(item).data('asset-id');
      var assetName = $(item).data('asset-name');

      if (assetId) {
        if (withName.prop("checked") === true) {
          assetIds.push('\n' + assetId + ' ' + assetName);
        } else {
          assetIds.push(assetId);
        }
      }
    });
  }

  assetIdsField.val(assetIds);
  assetIdsField.select();
  document.execCommand("copy");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/handlers/downloadAssets.js":
/*!***************************************************!*\
  !*** ./modules/assets/handlers/downloadAssets.js ***!
  \***************************************************/
/*! exports provided: downloadAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadAssets", function() { return downloadAssets; });
/**
 * Handler for download assets
 */
function downloadAssets(e) {
  e.preventDefault();
  var assetIds = [];
  $('.fast-save-container').find('input[name="for_copy"]:checked').each(function (n, item) {
    console.log($(item));
    var assetId = $(item).data('asset-id');

    if (assetId) {
      assetIds.push(assetId);
    }
  });
  /**
   * Select all if no one is selected
   */

  if (assetIds.length === 0) {
    $('.fast-save-container').find('input[name="for_copy"]').each(function (n, item) {
      var assetId = $(item).data('asset-id');

      if (assetId) {
        assetIds.push(assetId);
      }
    });
  }

  window.location = $(this).data('route') + '&ids=' + assetIds.join(',');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/handlers/getLastCollectionNumber.js":
/*!************************************************************!*\
  !*** ./modules/assets/handlers/getLastCollectionNumber.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](this.href).success(function (result) {
    $('#collection-number').val(result.collection_id).removeClass('hide');
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/handlers/markChanged.js":
/*!************************************************!*\
  !*** ./modules/assets/handlers/markChanged.js ***!
  \************************************************/
/*! exports provided: markChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markChanged", function() { return markChanged; });
/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");


/**
 * Mark changed
 */

function markChanged() {
  if ($(this).attr('type') != 'checkbox') {
    var parentContainer = $(this).parents('tr');
    parentContainer.addClass('changed');
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SAVE_ALL_BUTTON"]);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/assets/module.js":
/*!**********************************!*\
  !*** ./modules/assets/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_updateSaveAllButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/updateSaveAllButton */ "./listeners/updateSaveAllButton.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/changeType */ "./modules/assets/handlers/changeType.js");
/* harmony import */ var _handlers_getLastCollectionNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/getLastCollectionNumber */ "./modules/assets/handlers/getLastCollectionNumber.js");
/* harmony import */ var _handlers_copyAssets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/copyAssets */ "./modules/assets/handlers/copyAssets.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _handlers_markChanged__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./handlers/markChanged */ "./modules/assets/handlers/markChanged.js");
/* harmony import */ var _handlers_downloadAssets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./handlers/downloadAssets */ "./modules/assets/handlers/downloadAssets.js");
/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");
/* harmony import */ var modules_action_type_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! modules/action-type/constants */ "./modules/action-type/constants.js");












$('#assets-table').on('click', '.award-create', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_1__["default"]).on('click', '.award-delete', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_0__["default"]);
$('#asset-form-type').change(_handlers_changeType__WEBPACK_IMPORTED_MODULE_3__["default"]).change();
$('#get-last-collection-number').click(_handlers_getLastCollectionNumber__WEBPACK_IMPORTED_MODULE_4__["default"]);
$(document)
/**
 * Copy assets ids
 */
.on('click', '.copy-assets', _handlers_copyAssets__WEBPACK_IMPORTED_MODULE_5__["copyAssets"])
/**
 * Handler for download assets
 */
.on('click', '.download-assets', _handlers_downloadAssets__WEBPACK_IMPORTED_MODULE_9__["downloadAssets"])
/**
 * Create award and save announcement
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_1__["default"].bind(_this)();
}).on('change', '[name$="[time_type]"]', function () {
  var currentTd = $(this).closest('td');
  var deltaTimeHidden = currentTd.find('[name$="[' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_11__["DELTA_TIME_ATTRIBUTE"] + ']"]');
  var deltaTimeDisplay = currentTd.find('[name$="[' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_11__["DELTA_TIME_ATTRIBUTE"] + '][display]"]');
  deltaTimeDisplay.val(deltaTimeHidden.data('value') / parseInt($(this).val()));
}).on('input', '[name$="[' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_11__["DELTA_TIME_ATTRIBUTE"] + '][display]"]', function () {
  var currentTd = $(this).closest('td');
  var timeType = currentTd.find('[name$="[time_type]"]').val();
  var deltaTimeHidden = currentTd.find('[name$="[' + modules_action_type_constants__WEBPACK_IMPORTED_MODULE_11__["DELTA_TIME_ATTRIBUTE"] + ']"]');
  deltaTimeHidden.val($(this).val() * timeType);
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_0__["default"].bind(_this)();
})
/**
 * Mark row as changed
 */
.on('change', '.fast-save-container input, .fast-save-container select, .fast-save-container textarea', _handlers_markChanged__WEBPACK_IMPORTED_MODULE_8__["markChanged"])
/**
 * Unsubscribe on modal close
 */
.ready(function () {
  Object(listeners_updateSaveAllButton__WEBPACK_IMPORTED_MODULE_2__["default"])();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_7__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_6__["CLOSE_AWARD_MODAL"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_7__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_6__["AWARD_CREATE"]);
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_7__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_6__["AWARD_CREATED"]);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/award/constants.js":
/*!************************************!*\
  !*** ./modules/award/constants.js ***!
  \************************************/
/*! exports provided: AWARD_CREATE, AWARD_CREATED, AWARD_DELETE, CLOSE_AWARD_MODAL, SHOW_REPORT_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_CREATE", function() { return AWARD_CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_CREATED", function() { return AWARD_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_DELETE", function() { return AWARD_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_AWARD_MODAL", function() { return CLOSE_AWARD_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_REPORT_PATH", function() { return SHOW_REPORT_PATH; });
var AWARD_CREATE = 'AWARD_CREATE';
var AWARD_CREATED = 'AWARD_CREATED';
var AWARD_DELETE = 'AWARD_DELETE';
var CLOSE_AWARD_MODAL = 'CLOSE_AWARD_MODAL';
var SHOW_REPORT_PATH = 'SHOW_REPORT_PATH';

/***/ }),

/***/ "./modules/award/module.js":
/*!*********************************!*\
  !*** ./modules/award/module.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./modules/banner/constants.js":
/*!*************************************!*\
  !*** ./modules/banner/constants.js ***!
  \*************************************/
/*! exports provided: BANNER_SHOW_FORM, TYPE_SELECT_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANNER_SHOW_FORM", function() { return BANNER_SHOW_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_SELECT_ID", function() { return TYPE_SELECT_ID; });
/**
 * Show form event
 *
 * @type {string}
 */
var BANNER_SHOW_FORM = 'BANNER_SHOW_FORM';
/**
 * Id of type's select
 *
 * @type {string}
 */

var TYPE_SELECT_ID = 'banner-type';

/***/ }),

/***/ "./modules/banner/handlers/changeType.js":
/*!***********************************************!*\
  !*** ./modules/banner/handlers/changeType.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./modules/banner/constants.js");

/**
 * Change type handler
 * Hide/show some fields
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var select = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__["TYPE_SELECT_ID"]);

  if (!select || select.selectedIndex === -1) {
    return false;
  }

  if (select.options.length && select.options[select.selectedIndex]) {
    var selectedElement = select.options[select.selectedIndex];
    $('.banner-type').addClass('hide');
    $('.banner-type-' + selectedElement.value).removeClass('hide');
  }

  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/banner/handlers/showForm.js":
/*!*********************************************!*\
  !*** ./modules/banner/handlers/showForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/banner/constants.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners/showForm */ "./modules/banner/listeners/showForm.js");



/**
 * Show form handler
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  /**
   * Dropzone Init
   */
  Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__["BANNER_SHOW_FORM"]);
  /**
   * Init showForm listener
   */

  Object(_listeners_showForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./modules/banner/listeners/showForm.js":
/*!**********************************************!*\
  !*** ./modules/banner/listeners/showForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/banner/constants.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/changeType */ "./modules/banner/handlers/changeType.js");



/**
 * Show form listener
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["BANNER_SHOW_FORM"], function () {
    /**
     * Type select change trigger
     */
    Object(_handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"])();
    /**
     * Dates init
     */

    $('.banner-form .datepicker').datetimepicker({
      format: 'yyyy-mm-dd hh:ii:ss',
      autoclose: true
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/banner/module.js":
/*!**********************************!*\
  !*** ./modules/banner/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_showForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/showForm */ "./modules/banner/handlers/showForm.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/changeType */ "./modules/banner/handlers/changeType.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./modules/banner/constants.js");



/**
 * Show edit form of a banner
 */

$('.show-form').click(Object(_handlers_showForm__WEBPACK_IMPORTED_MODULE_0__["default"])());
$(document)
/**
 * Change type handler
 */
.on('change', '#' + _constants__WEBPACK_IMPORTED_MODULE_2__["TYPE_SELECT_ID"], _handlers_changeType__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/copyAdp.js":
/*!**********************************************!*\
  !*** ./modules/cms-adps/handlers/copyAdp.js ***!
  \**********************************************/
/*! exports provided: copyAdp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAdp", function() { return copyAdp; });
/**
 * Handler for copy adp ids to clipboard
 */
function copyAdp(e) {
  e.preventDefault();
  var adpIdsField = $('input[name="adp_ids"]');
  var adpIds = [];
  $('.rows-content').find('input[name="for_copy"]:checked').each(function (n, item) {
    var adpId = $(item).data('id');

    if (adpId) {
      adpIds.push(adpId);
    }
  });
  /**
   * Select all if no one is selected
   */

  if (adpIds.length == 0) {
    $('.rows-content').find('input[name="for_copy"]').each(function (n, item) {
      var adpId = $(item).data('id');

      if (adpId) {
        adpIds.push(adpId);
      }
    });
  }

  adpIdsField.val(adpIds);
  adpIdsField.select();
  document.execCommand("copy"); // adpIdsField.val([]);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/copyAssets.js":
/*!*************************************************!*\
  !*** ./modules/cms-adps/handlers/copyAssets.js ***!
  \*************************************************/
/*! exports provided: copyAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAssets", function() { return copyAssets; });
/**
 * Handler for copy assets ids to clipboard
 */
function copyAssets(e) {
  e.preventDefault();
  var assetIdsField = $('input[name="asset_ids"]');
  var assetIds = [];
  $('.rows-content').find('input[name="for_copy"]:checked').each(function (n, item) {
    var assetId = $(item).data('asset-id');

    if (assetId) {
      assetIds.push(assetId);
    }
  });
  /**
   * Select all if no one is selected
   */

  if (assetIds.length == 0) {
    $('.rows-content').find('input[name="for_copy"]').each(function (n, item) {
      var assetId = $(item).data('asset-id');

      if (assetId) {
        assetIds.push(assetId);
      }
    });
  }

  assetIdsField.val(assetIds);
  assetIdsField.select();
  document.execCommand("copy");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/downloadAdp.js":
/*!**************************************************!*\
  !*** ./modules/cms-adps/handlers/downloadAdp.js ***!
  \**************************************************/
/*! exports provided: downloadAdp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadAdp", function() { return downloadAdp; });
/**
 * Handler for download adp
 */
function downloadAdp(e) {
  e.preventDefault();
  var adpIds = [];
  $('.rows-content').find('input[name="for_copy"]:checked').each(function (n, item) {
    var adpId = $(item).data('id');

    if (adpId) {
      adpIds.push(adpId);
    }
  });
  /**
   * Select all if no one is selected
   */

  if (adpIds.length === 0) {
    $('.rows-content').find('input[name="for_copy"]').each(function (n, item) {
      var adpId = $(item).data('id');

      if (adpId) {
        adpIds.push(adpId);
      }
    });
  }

  window.location = $(this).data('route') + '&ids=' + adpIds.join(',');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/hideArchive.js":
/*!**************************************************!*\
  !*** ./modules/cms-adps/handlers/hideArchive.js ***!
  \**************************************************/
/*! exports provided: hideArchive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideArchive", function() { return hideArchive; });
/**
 * Handler of archive categories on adp page
 */
function hideArchive(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.show-archive').removeClass('hidden');
  $('.archive-categories-list').html('');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/hideTasks.js":
/*!************************************************!*\
  !*** ./modules/cms-adps/handlers/hideTasks.js ***!
  \************************************************/
/*! exports provided: hideTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTasks", function() { return hideTasks; });
/**
 * Handler of tasks on adp page
 */
function hideTasks(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.show-tasks').removeClass('hidden');
  $('.tasks-list').hide('slow');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/selectRow.js":
/*!************************************************!*\
  !*** ./modules/cms-adps/handlers/selectRow.js ***!
  \************************************************/
/*! exports provided: selectRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRow", function() { return selectRow; });
/**
 * Handler for select row by full td area
 */
function selectRow(e) {
  if (!$(e.target).hasClass('for-copy')) {
    e.preventDefault();
    var checkbox = $(this).find('.for-copy');

    if (checkbox.is(':checked')) {
      checkbox.prop('checked', false);
    } else {
      checkbox.prop('checked', true);
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/showArchive.js":
/*!**************************************************!*\
  !*** ./modules/cms-adps/handlers/showArchive.js ***!
  \**************************************************/
/*! exports provided: showArchive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArchive", function() { return showArchive; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Handler of archive categories on adp page
 */

function showArchive(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.hide-archive').removeClass('hidden');
  var action = currentElement.attr('href');
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](action).method('get').success(function (response) {
    $('.archive-categories-list').html(response);
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/handlers/showTasks.js":
/*!************************************************!*\
  !*** ./modules/cms-adps/handlers/showTasks.js ***!
  \************************************************/
/*! exports provided: showTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTasks", function() { return showTasks; });
/**
 * Handler of tasks on adp page
 */
function showTasks(e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.addClass('hidden');
  $('.hide-tasks').removeClass('hidden');
  $('.tasks-list').show('slow');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/module.js":
/*!************************************!*\
  !*** ./modules/cms-adps/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_showArchive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/showArchive */ "./modules/cms-adps/handlers/showArchive.js");
/* harmony import */ var _handlers_hideArchive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/hideArchive */ "./modules/cms-adps/handlers/hideArchive.js");
/* harmony import */ var _handlers_hideTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/hideTasks */ "./modules/cms-adps/handlers/hideTasks.js");
/* harmony import */ var _handlers_showTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/showTasks */ "./modules/cms-adps/handlers/showTasks.js");
/* harmony import */ var _handlers_copyAdp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/copyAdp */ "./modules/cms-adps/handlers/copyAdp.js");
/* harmony import */ var _handlers_copyAssets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/copyAssets */ "./modules/cms-adps/handlers/copyAssets.js");
/* harmony import */ var _handlers_selectRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/selectRow */ "./modules/cms-adps/handlers/selectRow.js");
/* harmony import */ var _handlers_downloadAdp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handlers/downloadAdp */ "./modules/cms-adps/handlers/downloadAdp.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ "./modules/cms-adps/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
//import {bundleVersionSelect} from "./handlers/bundleVersionSelect";









$(document)
/**
 * Show archive adp categories
 */
.on('click', '.show-archive', _handlers_showArchive__WEBPACK_IMPORTED_MODULE_0__["showArchive"])
/**
 * Hide archive adp categories
 */
.on('click', '.hide-archive', _handlers_hideArchive__WEBPACK_IMPORTED_MODULE_1__["hideArchive"])
/**
 * Hide adp tasks by status and user
 */
.on('click', '.hide-tasks', _handlers_hideTasks__WEBPACK_IMPORTED_MODULE_2__["hideTasks"])
/**
 * Show adp tasks by status and user
 */
.on('click', '.show-tasks', _handlers_showTasks__WEBPACK_IMPORTED_MODULE_3__["showTasks"])
/**
 * Copy adp ids
 */
.on('click', '.copy-adp', _handlers_copyAdp__WEBPACK_IMPORTED_MODULE_4__["copyAdp"])
/**
 * Copy assets ids
 */
.on('click', '.copy-assets', _handlers_copyAssets__WEBPACK_IMPORTED_MODULE_5__["copyAssets"])
/**
 * Handler for download assets
 */
.on('click', '.download-adp', _handlers_downloadAdp__WEBPACK_IMPORTED_MODULE_7__["downloadAdp"])
/**
 * Show hide side box
 */
.on('click', '.show-hide', function () {
  if (parseInt($('.side-box').css('right')) < 0) {
    $('.side-box').css('right', 0);
  } else {
    $('.side-box').css('right', '-100%');
  }
})
/**
 * Select row by full td area
 */
.on('click', '.id-col', _handlers_selectRow__WEBPACK_IMPORTED_MODULE_6__["selectRow"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/cms-adps/styles.scss":
/*!**************************************!*\
  !*** ./modules/cms-adps/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/cms-user-actions/constants.js":
/*!***********************************************!*\
  !*** ./modules/cms-user-actions/constants.js ***!
  \***********************************************/
/*! exports provided: CASH, COIN, ASSET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASH", function() { return CASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COIN", function() { return COIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSET", function() { return ASSET; });
var CASH = 'cash_added';
var COIN = 'coins_added';
var ASSET = 'assets_added';

/***/ }),

/***/ "./modules/cms-user-actions/module.js":
/*!********************************************!*\
  !*** ./modules/cms-user-actions/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var modules_cms_user_actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/cms-user-actions/constants */ "./modules/cms-user-actions/constants.js");



$(document)
/**
 * Set cursor to parent node
 */
.on('mouseenter', 'td', function () {
  if ($(this).find('.hidden-wrapper').length) {
    $(this).css('cursor', 'pointer');
  }
})
/**
 * Filter select options by selected source
 */
.on('change', '#filter_source', function () {
  var sourceVal = $(this).val();
  $("#filter_action").select2({
    matcher: function matcher(params, data) {
      if (sourceVal !== 'user_debug' && $.inArray(data.id, [modules_cms_user_actions_constants__WEBPACK_IMPORTED_MODULE_0__["CASH"], modules_cms_user_actions_constants__WEBPACK_IMPORTED_MODULE_0__["COIN"], modules_cms_user_actions_constants__WEBPACK_IMPORTED_MODULE_0__["ASSET"]]) > -1) {
        return null;
      } else {
        return data;
      }
    }
  });
})
/**
 * Open deploy info
 */
.on('click', 'td', function () {
  var wrapper = $(this).find('.hidden-wrapper');

  if (wrapper && wrapper.hasClass('open')) {
    if (!window.getSelection().toString().length) {
      wrapper.removeClass('open');
    } else {
      document.execCommand("copy");
    }
  } else {
    wrapper.addClass('open');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/constants.js":
/*!*****************************************!*\
  !*** ./modules/collection/constants.js ***!
  \*****************************************/
/*! exports provided: COLLECTION_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_SHOW_FORM", function() { return COLLECTION_SHOW_FORM; });
var COLLECTION_SHOW_FORM = 'COLLECTION_SHOW_FORM';

/***/ }),

/***/ "./modules/collection/handlers/fastSave.js":
/*!*************************************************!*\
  !*** ./modules/collection/handlers/fastSave.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");




var assetPreviewTemplate = $('#asset-preview-template').html();
/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = $('.fast-save-container');

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  if (savedItem.hasClass('progress')) {
    return false;
  }

  savedItem.addClass('progress');
  /**
   * Get changed data
   */

  var formItems = savedItem.find('.changed');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(formItems);

  if (!Object.keys(data).length) {
    savedItem.removeClass('progress');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).complete(function () {
    savedItem.removeClass('progress');
  }).success(function (response) {
    formItems.each(function () {
      var currentItem = $(this);

      if (currentItem.hasClass('asset-id') && !!response.assets[currentItem.val()]) {
        var currentAsset = response.assets[currentItem.val()];
        currentItem.closest('.slot').find('.asset-preview').html(assetPreviewTemplate.replace(new RegExp('%url%', "g"), currentAsset.preview_url).replace(new RegExp('%title%', "g"), currentAsset.name));
      }
    }).removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/handlers/hideAdditionalRows.js":
/*!***********************************************************!*\
  !*** ./modules/collection/handlers/hideAdditionalRows.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Hide additional rows
 *
 * @param e
 *
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  $('.additional-data').toggleClass('hide');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/handlers/markInputAsChanged.js":
/*!***********************************************************!*\
  !*** ./modules/collection/handlers/markInputAsChanged.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Mark input as changed
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $(this).addClass('changed');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/handlers/sortableInit.js":
/*!*****************************************************!*\
  !*** ./modules/collection/handlers/sortableInit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/modular/sortable.esm.js");

/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](_this, {
    group: _this.dataset.group,
    removeCloneOnHide: true,
    onEnd: function onEnd(e) {
      $(e.target).find(_this.dataset.position).each(function (index) {
        var position = $(this);

        if (parseInt(position.val()) !== index) {
          position.val(index);
          position.change();
        }
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/module.js":
/*!**************************************!*\
  !*** ./modules/collection/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./modules/collection/constants.js");
/* harmony import */ var _handlers_fastSave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/fastSave */ "./modules/collection/handlers/fastSave.js");
/* harmony import */ var _handlers_markInputAsChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/markInputAsChanged */ "./modules/collection/handlers/markInputAsChanged.js");
/* harmony import */ var _handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/sortableInit */ "./modules/collection/handlers/sortableInit.js");
/* harmony import */ var _handlers_hideAdditionalRows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/hideAdditionalRows */ "./modules/collection/handlers/hideAdditionalRows.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./modules/collection/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);







/**
 * Preview Image (DropZone init)
 */

$('.show-form').click(Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_SHOW_FORM"]));
/**
 * Fast save collection
 */

$('.collection-fast-save').click(_handlers_fastSave__WEBPACK_IMPORTED_MODULE_2__["default"]);
/**
 * Mark inputs as changed
 */

$('.fast-save-container').find('input').change(_handlers_markInputAsChanged__WEBPACK_IMPORTED_MODULE_3__["default"]);
/**
 * Sortable init
 */

$('.sortable').each(_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__["default"]);
/**
 * Hide additional rows
 */

$('.hide-slots').click(_handlers_hideAdditionalRows__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/collection/style.scss":
/*!***************************************!*\
  !*** ./modules/collection/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/crop/handlers/addRow.js":
/*!*****************************************!*\
  !*** ./modules/crop/handlers/addRow.js ***!
  \*****************************************/
/*! exports provided: addRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRow", function() { return addRow; });
/**
 * Add rows to the grid
 *
 * @returns {boolean}
 */
function addRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#crops > tbody');
  var trLast = $('#crop_template').html();
  var lastID = tbody.find("tr").last().find('.crop_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%crop%/g, i + incrementId));
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/crop/handlers/deleteRow.js":
/*!********************************************!*\
  !*** ./modules/crop/handlers/deleteRow.js ***!
  \********************************************/
/*! exports provided: deleteRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRow", function() { return deleteRow; });
/**
 * Delete row
 *
 * @returns {boolean}
 */
function deleteRow() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/crop/module.js":
/*!********************************!*\
  !*** ./modules/crop/module.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addRow */ "./modules/crop/handlers/addRow.js");
/* harmony import */ var _handlers_deleteRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/deleteRow */ "./modules/crop/handlers/deleteRow.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");






$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-row', _handlers_addRow__WEBPACK_IMPORTED_MODULE_0__["addRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_deleteRow__WEBPACK_IMPORTED_MODULE_1__["deleteRow"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
})
/**
 * Create award
 */
.on('click', '.award-create-button', function () {
  var row = $(this).closest('tr');
  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_3__["default"].bind(this)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_CREATED"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_CREATED"], self);
    new Promise(function (resolve) {
      resolve(row.addClass('changed'));
    }).then(function () {
      $('.fast-save-page').click();
    });
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var row = $(this).closest('tr');
  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_2__["default"].bind(this)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_DELETE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_5__["AWARD_DELETE"], self);
    new Promise(function (resolve) {
      resolve(row.addClass('changed'));
    }).then(function () {
      $('.fast-save-page').click();
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/handlers/addNewRow.js":
/*!**************************************************!*\
  !*** ./modules/daily-loot/handlers/addNewRow.js ***!
  \**************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the sound config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#daily_loot > tbody');
  var trLast = $('#daily_loot_template').html();
  var lastIDS = [];
  var incrementId = 1;
  tbody.find("tr").each(function (n, item) {
    if (parseInt($(item).find('input').first().val())) {
      lastIDS.push(parseInt($(item).find('input').first().val()));
    }
  });

  if (lastIDS.length) {
    incrementId = Math.max.apply(Math, lastIDS) + 1 || 1;
  }

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%rowIndex%/g, i + incrementId));
    tbody.find("tr").last().find('input').first().val(i + incrementId);
    tbody.find('.datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/handlers/saveState.js":
/*!**************************************************!*\
  !*** ./modules/daily-loot/handlers/saveState.js ***!
  \**************************************************/
/*! exports provided: saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");



/**
 * Update row to the sound config grid
 *
 * @returns {boolean}
 */

function saveState() {
  var container = $('.daily-loot-save-container');
  var data = container.find(".changed input, .changed select").serializeArray();

  if (!data.length) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])('Nothing to save!');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).success(function (resp) {
    container.find('tr.changed').removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(resp);
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/module.js":
/*!**************************************!*\
  !*** ./modules/daily-loot/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveState */ "./modules/daily-loot/handlers/saveState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/daily-loot/handlers/addNewRow.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./modules/daily-loot/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);



$(document)
/**
 * Add next rows to the magic grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveState__WEBPACK_IMPORTED_MODULE_0__["saveState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark the row as changed
 */
.on('click', '.remove-embed', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Switch page type
 */
.on('click', '.toggle-page-type', function () {
  location.href = location.pathname.slice(0, location.pathname.lastIndexOf('/')) + $(this).data('href');
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/daily-loot/style.scss":
/*!***************************************!*\
  !*** ./modules/daily-loot/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/default/module.js":
/*!***********************************!*\
  !*** ./modules/default/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('#common-menu').find('.common-menu-section').each(function () {
    if ($(this).find('li').length === 0) {
      $(this).closest('.common-menu-section').hide();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/deployStatus.js":
/*!****************************************!*\
  !*** ./modules/deploy/deployStatus.js ***!
  \****************************************/
/*! exports provided: deployStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deployStatus", function() { return deployStatus; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Show Deploy Status
 */

function deployStatus() {
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](DEPLOY_STATUS_ROUTE).method('get').success(function (response) {
    $('.deploy-status').html(response);
    var isActive = $('.deploy-status').find('.active-deploy').length;

    if (isActive) {
      $('.deploy-btn').addClass('loading');
    } else if ($('.deploy-btn').hasClass('loading')) {
      window.location.reload(true);
    }

    setTimeout(function () {
      deployStatus();
    }, 3000);
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/handlers/changeTab.js":
/*!**********************************************!*\
  !*** ./modules/deploy/handlers/changeTab.js ***!
  \**********************************************/
/*! exports provided: changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTab", function() { return changeTab; });
/**
 * Handler for change tab
 */
function changeTab(e) {
  var currentElement = $(this);
  var url = window.location.href.split('?')[0];
  var direction = currentElement.attr('href').replace('#', '');
  url += "?direction=" + direction;
  history.pushState({
    id: 'deploy'
  }, 'Deploy', url);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/handlers/showDependency.js":
/*!***************************************************!*\
  !*** ./modules/deploy/handlers/showDependency.js ***!
  \***************************************************/
/*! exports provided: showDependency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDependency", function() { return showDependency; });
/**
 * Handler for show вependency
 */
function showDependency(e) {
  var currentElement = $(this);
  var currentConfig = currentElement.parents('.config-item-block').data('model');
  var addMode = currentElement.is(':checked');
  oneLevelShow(currentConfig, addMode);
}

function oneLevelShow(configName, addMode) {
  var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (DEPLOY_DEPENDS.hasOwnProperty(configName) && level < 10) {
    var configBlock = $('.model-' + configName);

    if (addMode) {
      configBlock.addClass('deploy-chain');
    } else {
      configBlock.removeClass('deploy-chain');
    }

    for (var key in DEPLOY_DEPENDS[configName]) {
      var dependConfigName = DEPLOY_DEPENDS[configName][key];

      var _configBlock = $('.model-' + dependConfigName);

      if (addMode) {
        _configBlock.addClass('deploy-chain');
      } else {
        _configBlock.removeClass('deploy-chain');
      }

      oneLevelShow(dependConfigName, addMode, level + 1);
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/handlers/showDependencyPopup.js":
/*!********************************************************!*\
  !*** ./modules/deploy/handlers/showDependencyPopup.js ***!
  \********************************************************/
/*! exports provided: showDependencyPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDependencyPopup", function() { return showDependencyPopup; });
/* harmony import */ var components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/modal/ModalBuilder */ "./components/modal/ModalBuilder.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");


/**
 * Handler for show dependency popup
 */

function showDependencyPopup(e) {
  e.stopPropagation();
  var currentElement = $(this);
  var currentConfig = currentElement.parents('.config-item-block').data('model');
  var currentConfigId = currentElement.parents('.config-item-block').data('id');
  var ids = [];

  if (currentConfigId) {
    ids.push(currentConfigId);
  }

  rootLevelShow(currentConfig, ids);
  return false;
}
/**
 * One level show
 *
 * @param configName
 * @param dependConfigName
 * @param level
 * @param idResponse
 */

function oneLevelShow(configName, dependConfigName) {
  var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var idResponse = arguments.length > 3 ? arguments[3] : undefined;

  if (DEPLOY_DEPENDS.hasOwnProperty(configName) && level < 10) {
    var ids = idResponse.ids;
    var textClass = '';

    if (idResponse.hasOwnProperty('notImplemented')) {
      textClass = 'text-muted';
    }

    var isRecursion = false;
    $('.chain-' + configName).each(function () {
      if ($(this).parents('.chain-' + dependConfigName).length > 0) {
        isRecursion = true;
        $(this).append('<div class="chain-' + dependConfigName + '">' + '<span class="' + textClass + '">' + dependConfigName + ' <span class="text-danger">(Recursion)</span>' + '</span>' + '</div><br>');
      } else if ($(this).find('.chain-' + dependConfigName).length == 0) {
        $(this).append('<div class="chain-' + dependConfigName + '">' + '<span class="' + textClass + '">' + dependConfigName + '</span>' + (ids.length > 0 ? '<span class="depend-ids"> ' + ids.join(',') + '</span>' : '') + '</div>');
      }
    });

    if (!isRecursion) {
      getDeployModelIds(dependConfigName, level, ids);
    }
  }
}
/**
 * Root level show
 *
 * @param configName
 * @param ids
 */


function rootLevelShow(configName) {
  var ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](DEPLOY_MODEL_IDS_ROUTE).method('post').data({
    'direction': ACTIVE_DIRECTION,
    'dependentModel': configName,
    'dependentModelIds': ids
  }).success(function (response) {
    var ids = response.ids || [];
    $('body').append('<div class="deploy-chain-block"></div>');
    $('.deploy-chain-block').html('<div class="chain-' + configName + '">' + '<span>' + configName + '</span>' + '<span class="depend-ids"> ' + ids.join(',') + '</span>' + '</div>');
    new components_modal_ModalBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]().header('Deploy dependency').body($('.deploy-chain-block')).modal();
    getDeployModelIds(configName, 1, ids);
  }).send();
}
/**
 * Get deploy model ids
 *
 * @param configName
 * @param level
 * @param ids
 */


function getDeployModelIds(configName) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var ids = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _loop = function _loop(key) {
    var dependConfigName = DEPLOY_DEPENDS[configName][key];

    if (ids.length !== 0) {
      new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](DEPLOY_MODEL_IDS_ROUTE).method('post').data({
        'direction': ACTIVE_DIRECTION,
        'model': dependConfigName,
        'dependentModel': configName,
        'dependentModelIds': ids
      }).success(function (response) {
        oneLevelShow(configName, dependConfigName, level + 1, response);
      }).send();
    } else {
      oneLevelShow(configName, dependConfigName, level + 1, {
        'ids': []
      });
    }
  };

  for (var key in DEPLOY_DEPENDS[configName]) {
    _loop(key);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/module.js":
/*!**********************************!*\
  !*** ./modules/deploy/module.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/changeTab */ "./modules/deploy/handlers/changeTab.js");
/* harmony import */ var _handlers_showDependency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/showDependency */ "./modules/deploy/handlers/showDependency.js");
/* harmony import */ var _handlers_showDependencyPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/showDependencyPopup */ "./modules/deploy/handlers/showDependencyPopup.js");
/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");
/* harmony import */ var _deployStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deployStatus */ "./modules/deploy/deployStatus.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./modules/deploy/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);






$(document)
/**
 * Change url on tab change
 */
.on('click', '.deploy-tabs .nav-link', _handlers_changeTab__WEBPACK_IMPORTED_MODULE_0__["changeTab"])
/**
 * Save all page
 */
.on('click', '.fast-save-page-custom', handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_3__["default"])
/**
 * Show dependency
 */
.on('click', '.config-checkbox', _handlers_showDependency__WEBPACK_IMPORTED_MODULE_1__["showDependency"])
/**
 * Show dependency popup
 */
.on('click', '.show-dependency', _handlers_showDependencyPopup__WEBPACK_IMPORTED_MODULE_2__["showDependencyPopup"])
/**
 * Check/uncheck award dependencies
 */
.on('change', '.award-dependency [type=checkbox]', function () {
  $('.award-dependency [type=checkbox]').prop('checked', this.checked);
}).ready(function () {
  Object(_deployStatus__WEBPACK_IMPORTED_MODULE_4__["deployStatus"])();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/deploy/styles.scss":
/*!************************************!*\
  !*** ./modules/deploy/styles.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/dpa/handlers/addNewRow.js":
/*!*******************************************!*\
  !*** ./modules/dpa/handlers/addNewRow.js ***!
  \*******************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the levels config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#dpa > tbody');
  var lastID = tbody.find("tr").last().find('.dpa_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    var trLast = $('#dpa_template').html().replace(/%dpa_id%/g, i + incrementId);
    tbody.append(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dpa/handlers/saveDpaState.js":
/*!**********************************************!*\
  !*** ./modules/dpa/handlers/saveDpaState.js ***!
  \**********************************************/
/*! exports provided: saveDpaState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDpaState", function() { return saveDpaState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the dpa config grid
 *
 * @returns {boolean}
 */

function saveDpaState(e) {
  e.preventDefault();
  var route = $(this).data('route');
  var data = $('.dpa-save-page-container').find(".changed input, .changed select").serializeArray();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('PUT').data(data).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dpa/module.js":
/*!*******************************!*\
  !*** ./modules/dpa/module.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/dpa/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveDpaState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/saveDpaState */ "./modules/dpa/handlers/saveDpaState.js");


$(document)
/**
 * Delete dpa
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Add next row to the dpa grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Add next row to the dpa grid
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Fast save data on the dyes page
 */
.on('click', '.dpa-save-page', _handlers_saveDpaState__WEBPACK_IMPORTED_MODULE_1__["saveDpaState"])
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/handlers/addNewRow.js":
/*!*******************************************!*\
  !*** ./modules/dye/handlers/addNewRow.js ***!
  \*******************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the dye config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#dye > tbody');
  var trLast = $('#dye_template').html();

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast);
    var lastRow = tbody.find("tr").last().find('.cp2');
    lastRow.each(function (index, item) {
      $(item).colorpicker({});
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/handlers/changeRowIndex.js":
/*!************************************************!*\
  !*** ./modules/dye/handlers/changeRowIndex.js ***!
  \************************************************/
/*! exports provided: changeRowIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeRowIndex", function() { return changeRowIndex; });
/**
 * Change row index
 *
 * @returns {boolean}
 */
function changeRowIndex() {
  var rowIndex = $(this).val();
  var row = $(this).closest('tr').find('input, select');
  row.each(function (index, item) {
    var oldName = $(item).attr('name');
    var newName = oldName.slice(0, 4) + rowIndex + oldName.slice(oldName.indexOf(']'));
    $(item).attr('name', newName);
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/handlers/dyeSavePage.js":
/*!*********************************************!*\
  !*** ./modules/dye/handlers/dyeSavePage.js ***!
  \*********************************************/
/*! exports provided: DYE_CONTAINER_SELECTOR, default, markChangedTr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYE_CONTAINER_SELECTOR", function() { return DYE_CONTAINER_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markChangedTr", function() { return markChangedTr; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceptions/SavedItemNotFound */ "./exceptions/SavedItemNotFound.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");




var DYE_CONTAINER_SELECTOR = '.dye-save-page-container';
/**
 * Fast save data from the dyes page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var savedItem = $(DYE_CONTAINER_SELECTOR);

  if (!savedItem.length) {
    throw new exceptions_SavedItemNotFound__WEBPACK_IMPORTED_MODULE_1__["SavedItemNotFound"]();
  }

  if (savedItem.hasClass('progress')) {
    return false;
  }

  savedItem.addClass('progress');
  /**
   * Get changed data
   */

  var formItems = savedItem.find('.changed');
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])(formItems);

  if (!Object.keys(data).length) {
    savedItem.removeClass('progress');
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).complete(function () {
    savedItem.removeClass('progress');
  }).success(function (response) {
    formItems.removeClass('changed');
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
  }).send();
  return false;
});
/**
 * Mark form's tr as changed
 */

function markChangedTr() {
  $(this).closest('tr').addClass('changed');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/dye/module.js":
/*!*******************************!*\
  !*** ./modules/dye/module.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/dye/handlers/addNewRow.js");
/* harmony import */ var _handlers_changeRowIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/changeRowIndex */ "./modules/dye/handlers/changeRowIndex.js");
/* harmony import */ var _handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/dyeSavePage */ "./modules/dye/handlers/dyeSavePage.js");



$(document)
/**
 * Init color-picker inputs
 */
.ready(function () {
  $('.cp2').colorpicker().on('create', function (e) {
    $(document)
    /**
     * Mark tr as changed
     */
    .on('change', "".concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " input, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " select, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " textarea"), _handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["markChangedTr"]).on('input', "".concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " input, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " select, ").concat(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["DYE_CONTAINER_SELECTOR"], " textarea"), _handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["markChangedTr"]);
  });
})
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Change row index
 */
.on('input', '.asset_id', _handlers_changeRowIndex__WEBPACK_IMPORTED_MODULE_1__["changeRowIndex"])
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.dye-save-page').click(_handlers_dyeSavePage__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/constants.js":
/*!****************************************!*\
  !*** ./modules/gift-wrap/constants.js ***!
  \****************************************/
/*! exports provided: GIFT_WRAP_ROW_ADDED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GIFT_WRAP_ROW_ADDED", function() { return GIFT_WRAP_ROW_ADDED; });
var GIFT_WRAP_ROW_ADDED = 'GIFT_WRAP_ROW_ADDED';

/***/ }),

/***/ "./modules/gift-wrap/handlers/assetChanged.js":
/*!****************************************************!*\
  !*** ./modules/gift-wrap/handlers/assetChanged.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");

/**
 * Asset ID changed
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentInput = $(this);
  var assetID = currentInput.val();
  var parent = currentInput.closest('tr');
  /**
   * Check duplicated assets ids
   */

  var currentAssetDuplicate = $('#gift-wraps-container').find('.asset-id').filter(function (_, item) {
    return assetID === item.value;
  });

  if (currentAssetDuplicate.length > 1) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"])({
      'message': 'Duplicate asset ' + assetID
    });
    return false;
  }
  /**
   * Update inputs names
   */


  parent.find('input').each(function () {
    this.name = this.name.replace(/\[[\d]+\]/g, "[".concat(assetID, "]"));
  });
  /**
   * Update href of the delete button
   */

  parent.find('.ajax-confirm-action-custom').each(function () {
    this.href = this.href.replace(/\/[\d]+$/g, "/".concat(assetID));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/handlers/fastSavePage.js":
/*!****************************************************!*\
  !*** ./modules/gift-wrap/handlers/fastSavePage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlers/fastSavePage */ "./handlers/fastSavePage.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var _helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/positionUpdate */ "./modules/gift-wrap/helpers/positionUpdate.js");



/**
 * Fast save data from the all page
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  try {
    var assets = {};
    $('#gift-wraps-container').find('.asset-id').each(function () {
      if (assets[this.value] === true) {
        throw new Error(this.value);
      }

      if (this.value.length) {
        assets[this.value] = true;
      }
    });
  } catch (err) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])({
      'message': 'Duplicate asset ' + err.message
    });
    return false;
  }
  /**
   * Position update
   */


  Object(_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_0__["default"].bind(this)(e);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/handlers/removeRow.js":
/*!*************************************************!*\
  !*** ./modules/gift-wrap/handlers/removeRow.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var handlers_confirmModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlers/confirmModal */ "./handlers/confirmModal.js");

/**
 * Remove embeded element
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var buttonUrl = this.href.split('/');
  var parent = $(this).closest('tr');
  e.preventDefault();

  if (parseInt(buttonUrl[buttonUrl.length - 1]) === 0) {
    parent.remove();
    return false;
  }

  handlers_confirmModal__WEBPACK_IMPORTED_MODULE_0__["default"].bind(this)(e);
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/handlers/sortableInit.js":
/*!****************************************************!*\
  !*** ./modules/gift-wrap/handlers/sortableInit.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var modules_gift_wrap_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/gift-wrap/helpers/positionUpdate */ "./modules/gift-wrap/helpers/positionUpdate.js");


/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](_this, {
    removeCloneOnHide: true,
    onEnd: function onEnd() {
      Object(modules_gift_wrap_helpers_positionUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  });
});

/***/ }),

/***/ "./modules/gift-wrap/helpers/positionUpdate.js":
/*!*****************************************************!*\
  !*** ./modules/gift-wrap/helpers/positionUpdate.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Position update
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.position').each(function (index) {
    var position = $(this);
    var page = $('#page').val();
    var page_limit = $('[name="page_limit"]').val();

    if (parseInt(position.val()) !== index) {
      position.val(index + (page - 1) * page_limit);
      position.change();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/listeners/addRow.js":
/*!***********************************************!*\
  !*** ./modules/gift-wrap/listeners/addRow.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/gift-wrap/constants.js");


/**
 * Add new row to grid
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["GIFT_WRAP_ROW_ADDED"], function (data) {
    $('#gift-wrap-' + data.embedBlockId).find('.datetimepicker').datetimepicker({
      format: 'yyyy-mm-dd hh:ii:ss',
      autoclose: true
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/gift-wrap/module.js":
/*!*************************************!*\
  !*** ./modules/gift-wrap/module.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_sortableInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/sortableInit */ "./modules/gift-wrap/handlers/sortableInit.js");
/* harmony import */ var _handlers_assetChanged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/assetChanged */ "./modules/gift-wrap/handlers/assetChanged.js");
/* harmony import */ var _listeners_addRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/addRow */ "./modules/gift-wrap/listeners/addRow.js");
/* harmony import */ var _handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/fastSavePage */ "./modules/gift-wrap/handlers/fastSavePage.js");
/* harmony import */ var _handlers_removeRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/removeRow */ "./modules/gift-wrap/handlers/removeRow.js");





$(document)
/**
 * Change asset id in input
 */
.on('change', '.asset-id', _handlers_assetChanged__WEBPACK_IMPORTED_MODULE_1__["default"])
/**
 * Remove row
 */
.on('click', '.ajax-confirm-action-custom', _handlers_removeRow__WEBPACK_IMPORTED_MODULE_4__["default"]);
/**
 * Add row listener
 */

Object(_listeners_addRow__WEBPACK_IMPORTED_MODULE_2__["default"])();
/**
 * Sortable init
 */

$('.sortable').each(_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_0__["default"]);
/**
 * Save all page
 */

$('.fast-save-page-custom').click(_handlers_fastSavePage__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/linked-assets/handlers/showAsset.js":
/*!*****************************************************!*\
  !*** ./modules/linked-assets/handlers/showAsset.js ***!
  \*****************************************************/
/*! exports provided: showAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAsset", function() { return showAsset; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Handler for show asset
 */

function showAsset(e) {
  e.preventDefault();
  var currentElement = $(this);
  var action = SWOW_ASSET_ROUTE + '?id=' + currentElement.val();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](action).method('get').success(function (response) {
    console.log(response);

    if (response.hasOwnProperty('data')) {
      if (response.data.hasOwnProperty('name')) {
        currentElement.parents('tr').find('.asset-name').html(response.data.name);
      }

      if (response.data.hasOwnProperty('preview_url')) {
        currentElement.parents('tr').find('.asset-preview img').attr('src', response.data.preview_url);
        currentElement.parents('tr').find('.asset-preview .list-thumbnail').data('full', response.data.preview_url);
      }
    }
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/linked-assets/module.js":
/*!*****************************************!*\
  !*** ./modules/linked-assets/module.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_showAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/showAsset */ "./modules/linked-assets/handlers/showAsset.js");

$(document)
/**
 * Show asset
 */
.on('change', '.asset', _handlers_showAsset__WEBPACK_IMPORTED_MODULE_0__["showAsset"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/handlers/addNewRow.js":
/*!****************************************************!*\
  !*** ./modules/localization/handlers/addNewRow.js ***!
  \****************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the localization config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var tbody = $('#localizations > tbody');
  var template = $('#localization_template').html();
  tbody.prepend(template);
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/handlers/removeRow.js":
/*!****************************************************!*\
  !*** ./modules/localization/handlers/removeRow.js ***!
  \****************************************************/
/*! exports provided: removeRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRow", function() { return removeRow; });
/**
 * Remove not saved row
 *
 * @returns {boolean}
 */
function removeRow(e) {
  e.preventDefault();
  $(this).parents('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/handlers/saveLocalizationState.js":
/*!****************************************************************!*\
  !*** ./modules/localization/handlers/saveLocalizationState.js ***!
  \****************************************************************/
/*! exports provided: saveLocalizationState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLocalizationState", function() { return saveLocalizationState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");



/**
 * Update row to the localization config grid
 *
 * @returns {boolean}
 */

function saveLocalizationState(e) {
  e.preventDefault();
  var currentBtn = $(this);
  var parent = currentBtn.closest('tr');
  var currentKey = parent.find('.localization-key').val();
  /**
   * Check duplicated keys
   *
   * @type {jQuery}
   */

  var currentKeyDuplicate = $('#localizations').find('.localization-key').filter(function (_, item) {
    return currentKey === item.value;
  });

  if (currentKeyDuplicate.length > 1) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__["default"])({
      'message': 'Duplicate key ' + currentKey
    });
    return false;
  }

  var data = parent.find('.editable input').serializeArray();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(data).success(function (response) {
    parent.find('.localization-key').attr('readonly', true);
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/localization/module.js":
/*!****************************************!*\
  !*** ./modules/localization/module.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveLocalizationState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveLocalizationState */ "./modules/localization/handlers/saveLocalizationState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/localization/handlers/addNewRow.js");
/* harmony import */ var _handlers_removeRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/removeRow */ "./modules/localization/handlers/removeRow.js");



$(document)
/**
 * Add next rows to the localizations grid
 */
.on('click', '.create-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveLocalizationState__WEBPACK_IMPORTED_MODULE_0__["saveLocalizationState"])
/**
 * Remove the row
 */
.on('click', '.remove-row', _handlers_removeRow__WEBPACK_IMPORTED_MODULE_2__["removeRow"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/magic/handlers/addNewRow.js":
/*!*********************************************!*\
  !*** ./modules/magic/handlers/addNewRow.js ***!
  \*********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the magic config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#magic > tbody');

  for (var i = 0; i < add_counter; i++) {
    var lastID = tbody.find("tr").last().find('input[name="id"]').val();
    var incrementId = parseInt(lastID) || 0;
    var trLast = $('#magic_template').html().replace(/%magic_id%/g, ++incrementId);
    tbody.append(trLast);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/magic/handlers/saveMagicState.js":
/*!**************************************************!*\
  !*** ./modules/magic/handlers/saveMagicState.js ***!
  \**************************************************/
/*! exports provided: saveMagicState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMagicState", function() { return saveMagicState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the magic config grid
 *
 * @returns {boolean}
 */

function saveMagicState() {
  var data = $('.magic-save-container').find(".changed input");
  data.each(function (n, item) {
    $(item).attr('readonly', true);
  });

  if (data.length) {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/magic/module.js":
/*!*********************************!*\
  !*** ./modules/magic/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveMagicState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveMagicState */ "./modules/magic/handlers/saveMagicState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/magic/handlers/addNewRow.js");


$(document)
/**
 * Add next rows to the magic grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveMagicState__WEBPACK_IMPORTED_MODULE_0__["saveMagicState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/makeup-kit-asset/handlers/getLastMakeupKitID.js":
/*!*****************************************************************!*\
  !*** ./modules/makeup-kit-asset/handlers/getLastMakeupKitID.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Show last makeup kit ID
 *
 * @param e
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](this.href).success(function (result) {
    $('#last-makeup-kit-id').val(result.makeup_kit_id);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/makeup-kit-asset/module.js":
/*!********************************************!*\
  !*** ./modules/makeup-kit-asset/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_getLastMakeupKitID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/getLastMakeupKitID */ "./modules/makeup-kit-asset/handlers/getLastMakeupKitID.js");

/**
 * Show last makeup kit ID at the body parts grid
 */

$('#get-last-makeup-kit-id').click(_handlers_getLastMakeupKitID__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/makeup-kit/constants.js":
/*!*****************************************!*\
  !*** ./modules/makeup-kit/constants.js ***!
  \*****************************************/
/*! exports provided: MAKEUP_KIT_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAKEUP_KIT_SHOW_FORM", function() { return MAKEUP_KIT_SHOW_FORM; });
var MAKEUP_KIT_SHOW_FORM = 'MAKEUP_KIT_SHOW_FORM';

/***/ }),

/***/ "./modules/makeup-kit/module.js":
/*!**************************************!*\
  !*** ./modules/makeup-kit/module.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var modules_makeup_kit_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/makeup-kit/constants */ "./modules/makeup-kit/constants.js");


/**
 * Preview Image (DropZone init)
 */

$('.show-form').click(Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_0__["default"])(modules_makeup_kit_constants__WEBPACK_IMPORTED_MODULE_1__["MAKEUP_KIT_SHOW_FORM"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredient-groups/handlers/addNewRow.js":
/*!**************************************************************!*\
  !*** ./modules/meal-ingredient-groups/handlers/addNewRow.js ***!
  \**************************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the ingredient config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#meal_ingredient_groups > tbody');
  var trLast = $('#meal_ingredient_groups_template').html();
  var lastID = tbody.find("tr").last().find('.group_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%meal-ingredient-group%/g, i + incrementId));
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredient-groups/handlers/ingredientDelete.js":
/*!*********************************************************************!*\
  !*** ./modules/meal-ingredient-groups/handlers/ingredientDelete.js ***!
  \*********************************************************************/
/*! exports provided: ingredientDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ingredientDelete", function() { return ingredientDelete; });
/**
 * Hide row
 *
 * @returns {boolean}
 */
function ingredientDelete() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredient-groups/module.js":
/*!**************************************************!*\
  !*** ./modules/meal-ingredient-groups/module.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/meal-ingredient-groups/handlers/addNewRow.js");
/* harmony import */ var _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/ingredientDelete */ "./modules/meal-ingredient-groups/handlers/ingredientDelete.js");


$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__["ingredientDelete"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * How many rows to add
 * Change counter
                 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/handlers/addNewRow.js":
/*!********************************************************!*\
  !*** ./modules/meal-ingredients/handlers/addNewRow.js ***!
  \********************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the ingredient config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#meal_ingredients > tbody');
  var trLast = $('#meal_ingredients_template').html();
  var lastID = tbody.find("tr").last().find('.ingredient_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%meal-ingredient%/g, i + incrementId));
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/handlers/ingredientDelete.js":
/*!***************************************************************!*\
  !*** ./modules/meal-ingredients/handlers/ingredientDelete.js ***!
  \***************************************************************/
/*! exports provided: ingredientDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ingredientDelete", function() { return ingredientDelete; });
/**
 * Hide row
 *
 * @returns {boolean}
 */
function ingredientDelete() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal-ingredients/module.js":
/*!********************************************!*\
  !*** ./modules/meal-ingredients/module.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/meal-ingredients/handlers/addNewRow.js");
/* harmony import */ var _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/ingredientDelete */ "./modules/meal-ingredients/handlers/ingredientDelete.js");


$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_ingredientDelete__WEBPACK_IMPORTED_MODULE_1__["ingredientDelete"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * How many rows to add
 * Change counter
                 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/handlers/addNewRow.js":
/*!********************************************!*\
  !*** ./modules/meal/handlers/addNewRow.js ***!
  \********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the meal config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#meal > tbody');
  var trLast = $('#meal_template').html();
  var lastID = tbody.find("tr").last().find('.meal_id').text();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%meal%/g, i + incrementId));
    tbody.find('.select2').select2();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/handlers/mealDelete.js":
/*!*********************************************!*\
  !*** ./modules/meal/handlers/mealDelete.js ***!
  \*********************************************/
/*! exports provided: mealDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mealDelete", function() { return mealDelete; });
/**
 * Hide row
 *
 * @returns {boolean}
 */
function mealDelete() {
  $(this).closest('tr').remove();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/handlers/savePage.js":
/*!*******************************************!*\
  !*** ./modules/meal/handlers/savePage.js ***!
  \*******************************************/
/*! exports provided: saveMealState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMealState", function() { return saveMealState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");


/**
 * Update row to the Meal config grid
 *
 * @returns {boolean}
 */

function saveMealState() {
  var route = $(this).data('route');
  var tbody = $('.meal-save-page-container').find(".changed");
  var data = $('.meal-save-page-container').find(".changed input, .changed select").serializeArray();

  if (data.length === 0) {
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('PUT').data(data).send();
  tbody.each(function (n, item) {
    $(item).removeClass('changed');
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/meal/module.js":
/*!********************************!*\
  !*** ./modules/meal/module.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/meal/handlers/addNewRow.js");
/* harmony import */ var _handlers_mealDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/mealDelete */ "./modules/meal/handlers/mealDelete.js");
/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/meal/handlers/savePage.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");







$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', _handlers_mealDelete__WEBPACK_IMPORTED_MODULE_1__["mealDelete"])
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Create award and save meal
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_6__["default"].bind(_this)();
  $(this).closest('tr').addClass('changed');
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_3__["AWARD_CREATED"], function (data, self) {
    Object(_handlers_savePage__WEBPACK_IMPORTED_MODULE_2__["saveMealState"])();
  });
})
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_5__["default"].bind(_this)();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.save-page').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_2__["saveMealState"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/neighbor-activity/constants.js":
/*!************************************************!*\
  !*** ./modules/neighbor-activity/constants.js ***!
  \************************************************/
/*! exports provided: NEIGHBOR_ACTIVITY_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEIGHBOR_ACTIVITY_SHOW_FORM", function() { return NEIGHBOR_ACTIVITY_SHOW_FORM; });
var NEIGHBOR_ACTIVITY_SHOW_FORM = 'NEIGHBOR_ACTIVITY_SHOW_FORM';

/***/ }),

/***/ "./modules/neighbor-activity/handlers/changeType.js":
/*!**********************************************************!*\
  !*** ./modules/neighbor-activity/handlers/changeType.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var TRASH = 'TRASH';
var TRASH_FIELDS_ID = 'trash-fields';
var SELECT_ID = 'neighbor-activity-type-id';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var select = document.getElementById(SELECT_ID);

  if (!select || select.selectedIndex === -1) {
    return false;
  }

  if (select.options.length && select.options[select.selectedIndex]) {
    var selectedElement = select.options[select.selectedIndex];
    var trashFields = $('#' + TRASH_FIELDS_ID);

    switch (selectedElement.text.toUpperCase()) {
      case TRASH:
        trashFields.removeClass('hide');
        break;

      default:
        trashFields.addClass('hide');
    }
  }

  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/neighbor-activity/listeners/showForm.js":
/*!*********************************************************!*\
  !*** ./modules/neighbor-activity/listeners/showForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/neighbor-activity/constants.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/changeType */ "./modules/neighbor-activity/handlers/changeType.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["NEIGHBOR_ACTIVITY_SHOW_FORM"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["NEIGHBOR_ACTIVITY_SHOW_FORM"], self);
    Object(_handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"])();
    $('.neighbor-activity-form .datetimepicker').datetimepicker({
      format: 'yyyy-mm-dd hh:ii:ss',
      autoclose: true
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/neighbor-activity/module.js":
/*!*********************************************!*\
  !*** ./modules/neighbor-activity/module.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/changeType */ "./modules/neighbor-activity/handlers/changeType.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/neighbor-activity/listeners/showForm.js");




$(document).on('click', '.award-create-button', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete-button', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]).on('change', '.neighbor-activity-type', _handlers_changeType__WEBPACK_IMPORTED_MODULE_2__["default"]);
/**
 * Run the show form handler.
 * After click at create or edit button
 */

$('.show-form').click(_listeners_showForm__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/news-gifts-log/module.js":
/*!******************************************!*\
  !*** ./modules/news-gifts-log/module.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./modules/news-gifts-log/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./modules/news-gifts-log/styles.scss":
/*!********************************************!*\
  !*** ./modules/news-gifts-log/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/product/constants.js":
/*!**************************************!*\
  !*** ./modules/product/constants.js ***!
  \**************************************/
/*! exports provided: PRODUCT_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_SHOW_FORM", function() { return PRODUCT_SHOW_FORM; });
var PRODUCT_SHOW_FORM = 'PRODUCT_SHOW_FORM';

/***/ }),

/***/ "./modules/product/handlers/priceInit.js":
/*!***********************************************!*\
  !*** ./modules/product/handlers/priceInit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js */ "../../../node_modules/cleave.js/dist/cleave-esm.js");

/**
 * Price init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new cleave_js__WEBPACK_IMPORTED_MODULE_0__["default"](this, {
    numeral: true,
    prefix: '$ ',
    rawValueTrimPrefix: true,
    onValueChanged: function onValueChanged(e) {
      var value = Math.round(+e.target.rawValue * 100);
      var productPrice = $(this.element).closest('td').find('.product-price');

      if (value !== parseInt(productPrice.val())) {
        productPrice.val(value).change();
      }
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/product/module.js":
/*!***********************************!*\
  !*** ./modules/product/module.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! listeners/dropZoneInit */ "./listeners/dropZoneInit.js");
/* harmony import */ var modules_product_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/product/constants */ "./modules/product/constants.js");
/* harmony import */ var modules_product_handlers_priceInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/product/handlers/priceInit */ "./modules/product/handlers/priceInit.js");





$(document).on('click', '.award-create-button', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete-button', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * Preview Image (DropZone init)
 */

$('.show-form').click(Object(listeners_dropZoneInit__WEBPACK_IMPORTED_MODULE_2__["default"])(modules_product_constants__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_SHOW_FORM"]));
$('#test').click(function () {
  console.log('test');
});
/**
 * Price format
 */

$('.product-price-view').each(modules_product_handlers_priceInit__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/purchase/module.js":
/*!************************************!*\
  !*** ./modules/purchase/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./modules/purchase/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./modules/purchase/style.scss":
/*!*************************************!*\
  !*** ./modules/purchase/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/settings/handlers/addNewRow.js":
/*!************************************************!*\
  !*** ./modules/settings/handlers/addNewRow.js ***!
  \************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = parseInt($('.add-counter').val());
  var tbody = $('table.table tbody');
  var maxId = $(this).data('counter');
  var template = $('template#config-row');
  var newLength = parseInt(tbody.find('tr.new-row').length);

  var _loop = function _loop(i) {
    var trId = (maxId > 0 ? maxId : 0) + parseInt(tbody.find('tr.new-row').length);
    var newRow = template.html().replace(/%id%/g, trId).replace(/%tr_id%/g, trId).replace(/%draft%/g, trId); // Set default values to new rows

    var newRowHtml = $(newRow);
    $('.default-row-value').each(function () {
      var defaultValue = $(this).val();
      newRowHtml.find('.' + $(this).data('class')).attr('value', defaultValue);
    });
    newRow = newRowHtml.get(0).outerHTML;

    if (newLength > 0) {
      $(tbody.find('tr.new-row').last()).after(newRow);
    } else {
      tbody.prepend(newRow);
    }

    newLength++;
    tbody.find('[data-autoincrement="1"]').last().val(trId);
  };

  for (var i = 0; i < add_counter; i++) {
    _loop(i);
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/handlers/dropzoneInit.js":
/*!***************************************************!*\
  !*** ./modules/settings/handlers/dropzoneInit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/dropzone/DropzoneBuilder */ "./components/dropzone/DropzoneBuilder.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFilePath */ "./helpers/getFilePath.js");



/**
 * Dropzone init
 *
 * @param _
 * @param item
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_, item) {
  var dropzoneContainer = $(item);
  var previewHiddenInput = dropzoneContainer.find('input');
  /**
   * Dropzone initialization
   */

  var dropzoneBuilder = new components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](item).setUploadUrl(dropzoneContainer.data('url')).error(function (file, response) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(response);
    previewHiddenInput.val('');
  }).cancel(function () {
    previewHiddenInput.val('');
  }).success(function (file, response) {
    $('.dz-filename span').text(response.file_name);
    previewHiddenInput.val(response.file_name);
  });
  /**
   * Set preview
   */

  if (!!previewHiddenInput.val()) {
    dropzoneBuilder.setPreview(previewHiddenInput.val(), Object(helpers_getFilePath__WEBPACK_IMPORTED_MODULE_2__["default"])(dropzoneContainer.data('folder'), previewHiddenInput.val()));
  }
  /**
   * Dropzone build
   */


  dropzoneBuilder.build();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/handlers/markChanged.js":
/*!**************************************************!*\
  !*** ./modules/settings/handlers/markChanged.js ***!
  \**************************************************/
/*! exports provided: markChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markChanged", function() { return markChanged; });
/**
 * Mark changed
 */
function markChanged() {
  $(this).closest('tr').addClass('changed');
  $('#update-all').show();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/handlers/savePage.js":
/*!***********************************************!*\
  !*** ./modules/settings/handlers/savePage.js ***!
  \***********************************************/
/*! exports provided: savePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePage", function() { return savePage; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Update row to the dpa config grid
 *
 * @returns {boolean}
 */

function savePage(e) {
  e.preventDefault();
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])($("tr.changed").find('input, input[type="hidden"], select, textarea'));
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(_objectSpread({}, data)).success(function (resp) {
    if (resp.type === 'error') {
      Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__["default"])(resp.message);
    } else {
      window.location.reload(true);
    }
  }).send();
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/handlers/saveRow.js":
/*!**********************************************!*\
  !*** ./modules/settings/handlers/saveRow.js ***!
  \**********************************************/
/*! exports provided: saveRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRow", function() { return saveRow; });
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");

/**
 * Update row to the dpa config grid
 *
 * @returns {boolean}
 */

function saveRow(e) {
  e.preventDefault();
  var rowToSave = $(this).parents('tr');
  var action = rowToSave.data('action');
  var row = rowToSave.find(".editable select, .editable input").serializeArray();

  if ($("tr.changed").length > 1) {
    var r = confirm('Changed more than one row. Saved only current row!');

    if (r !== true) {
      return false;
    }
  }

  if (!rowToSave.hasClass('changed')) {
    Object(components_notify_notifyError__WEBPACK_IMPORTED_MODULE_0__["default"])('Nothing to save!');
    return false;
  }

  $.ajax({
    type: "PUT",
    dataType: 'json',
    url: action,
    data: row,
    success: function success(resp) {
      rowToSave.removeClass('changed');
      $.notify({
        message: resp.message
      }, {
        type: resp.type
      });
    },
    error: function error(jqXHR, exception) {
      if (jqXHR.responseJSON && jqXHR.responseJSON.hasOwnProperty('errors')) {
        $.each(jqXHR.responseJSON.errors, function (errorKey, error) {
          $.each(error, function (messageKey, message) {
            $.notify({
              message: message
            }, {
              type: 'danger'
            });
          });
        });
      } else {
        window.location.reload();
      }
    }
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/module.js":
/*!************************************!*\
  !*** ./modules/settings/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "../../../node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handlers_dropzoneInit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/dropzoneInit */ "./modules/settings/handlers/dropzoneInit.js");
/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/settings/handlers/savePage.js");
/* harmony import */ var _handlers_markChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/markChanged */ "./modules/settings/handlers/markChanged.js");
/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var modules_award_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! modules/award/constants */ "./modules/award/constants.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ "./modules/settings/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/settings/handlers/addNewRow.js");
/* harmony import */ var _handlers_saveRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./handlers/saveRow */ "./modules/settings/handlers/saveRow.js");











/**
 * Turned off the Dropzone auto init
 *
 * @type {boolean}
 */

dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.autoDiscover = false;
/**
 * Dropzone init
 */

$('.dropzone').each(_handlers_dropzoneInit__WEBPACK_IMPORTED_MODULE_1__["default"]);
$(document).ready(function () {
  /**
   * Unsubscribe on modal close
   */
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_7__["CLOSE_AWARD_MODAL"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_7__["AWARD_CREATE"]);
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_7__["AWARD_CREATED"]);
  });
  /**
   * Init color-picker inputs
   */

  $('.cp2').colorpicker();
  $('#update-all').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_2__["savePage"]);
})
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_9__["addNewRow"])
/**
 * Create award and save row
 */
.on('click', '.award-create-button', function () {
  var _this = this;

  var saveButton = $(this).closest('tr').find('.update-row');
  listeners_awardCreate__WEBPACK_IMPORTED_MODULE_5__["default"].bind(_this)();
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_7__["AWARD_CREATE"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_4__["default"].unsubscribe(modules_award_constants__WEBPACK_IMPORTED_MODULE_7__["AWARD_CREATE"], self);
    saveButton.click();
  });
}).on('click', '.update-row', _handlers_saveRow__WEBPACK_IMPORTED_MODULE_10__["saveRow"])
/**
 * Delete award
 */
.on('click', '.award-delete-button', function () {
  var _this = this;

  listeners_awardDelete__WEBPACK_IMPORTED_MODULE_6__["default"].bind(_this)();
})
/**
 * Delete award
 */
.on('click', '.remove-embed', function () {
  $(this).closest('tr').addClass('changed');
  $('#update-all').show();
})
/**
 * Mark row as changed
 */
.on('click', '.dropzone', _handlers_markChanged__WEBPACK_IMPORTED_MODULE_3__["markChanged"]).on('click', '.award-create-button', _handlers_markChanged__WEBPACK_IMPORTED_MODULE_3__["markChanged"]).on('input', 'tbody input, tbody textarea', _handlers_markChanged__WEBPACK_IMPORTED_MODULE_3__["markChanged"]).on('change', 'tbody input, tbody select', _handlers_markChanged__WEBPACK_IMPORTED_MODULE_3__["markChanged"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/modules/ai_animation/module.js":
/*!*********************************************************!*\
  !*** ./modules/settings/modules/ai_animation/module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var WALK_CATEGORY = '6';
var RUN_CATEGORY = '7';
$(document).ready(function () {
  var select2 = $('.table').find('.embed-group select.select2');
  var selectVal = 0;
  select2.each(function (n, i) {
    selectVal = $(i).val();

    if (selectVal === WALK_CATEGORY || selectVal === RUN_CATEGORY) {
      $(i).closest('.embed-group').find('.embed-group').find(".row:eq(1)").show();
    } else {
      $(i).closest('.embed-group').find('.embed-group').find(".row:eq(1)").hide();
    }
  });
})
/**
 * Show hide speed on trigger add-embed button
 */
.on('ai_animation', '.add-embed', function () {
  var embed = $(this).closest('.embed-group');
  var selectVal = embed.find('.select2').val();

  if (selectVal === WALK_CATEGORY || selectVal === RUN_CATEGORY) {
    embed.find('.embed-group').find(".row:eq(1)").show();
  } else {
    embed.find('.embed-group').find(".row:eq(1)").hide();
  }
})
/**
 * Show hide speed
 */
.on('.select2').change(function (item) {
  var selectVal = $(item.target).val();

  if (selectVal === WALK_CATEGORY || selectVal === RUN_CATEGORY) {
    $(item.target).closest('.embed-group').find('.embed-group').find(".row:eq(1)").show();
  } else {
    $(item.target).closest('.embed-group').find('.embed-group').find(".row:eq(1)").hide();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/settings/styles.scss":
/*!**************************************!*\
  !*** ./modules/settings/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/shop-department/constants.js":
/*!**********************************************!*\
  !*** ./modules/shop-department/constants.js ***!
  \**********************************************/
/*! exports provided: SHOP_DEPARTMENT_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_DEPARTMENT_SHOW_FORM", function() { return SHOP_DEPARTMENT_SHOW_FORM; });
var SHOP_DEPARTMENT_SHOW_FORM = 'SHOP_DEPARTMENT_SHOW_FORM';

/***/ }),

/***/ "./modules/shop-department/handlers/addShop.js":
/*!*****************************************************!*\
  !*** ./modules/shop-department/handlers/addShop.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Add a new shop in a departments grid
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentBtn = $(this);
  var table = currentBtn.closest('.shops-table').find('tbody');
  var departmentId = currentBtn.data('department');
  var counter = parseInt(currentBtn.data('count'));
  var template = $('#shop-template').html().replace(new RegExp('%departmentId%', "g"), departmentId).replace(new RegExp('%index%', "g"), counter++);
  currentBtn.data('count', counter);
  table.append(template);
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/fastSave.js":
/*!******************************************************!*\
  !*** ./modules/shop-department/handlers/fastSave.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");
/* harmony import */ var components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/successHandler */ "./components/http/successHandler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Fast save for shop department
 *
 * @param e
 *
 * @returns {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var shopNamePrefix = 'shop';
  var departmentNamePrefix = 'department';
  var currentBtn = $(this);
  var fastSaveContainer = $('.fast-save-container');
  var shops = {};
  var department = {};
  fastSaveContainer.find('tbody tr.changed tr.info').each(function () {
    var depindex = $(this).closest('.department').index();
    var departmentFormData = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_1__["default"])($(this));

    for (var i in departmentFormData) {
      var itemName = "".concat(departmentNamePrefix, "[").concat(depindex, "][").concat(i, "]");
      department[itemName] = departmentFormData[i];
    }

    $(this).next('tr.shops').find('tbody.sortable tr').each(function (index) {
      var formData = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_1__["default"])($(this));

      for (var _i in formData) {
        var _itemName = "".concat(shopNamePrefix, "[").concat(departmentFormData.id, "][").concat(index, "][").concat(_i, "]");

        shops[_itemName] = formData[_i];
        shops["".concat(shopNamePrefix, "[").concat(departmentFormData.id, "][").concat(index, "][department]")] = departmentFormData.id;
      }
    });
  });
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(_objectSpread(_objectSpread({}, shops), department)).success(function (response) {
    $('.changed').each(function (index) {
      $(this).removeClass('changed');
    });
    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/radioInput.js":
/*!********************************************************!*\
  !*** ./modules/shop-department/handlers/radioInput.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Radio input from checkbox
 * Because input[type=radio] did not work correctly
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentItem = $(this);
  var allItems = currentItem.closest('.table').find('.radio');
  allItems.prop('checked', false);
  allItems.removeClass('checked');
  currentItem.prop('checked', true);
  currentItem.addClass('checked');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/sortableDepartmentInit.js":
/*!********************************************************************!*\
  !*** ./modules/shop-department/handlers/sortableDepartmentInit.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/modular/sortable.esm.js");

/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](this, {
    group: 'department',
    removeCloneOnHide: true,
    onEnd: function onEnd(e) {
      new Promise(function (resolve) {
        $(e.item).closest('.table').find('tr.department').each(function () {
          $(this).addClass('changed');
        });
        resolve({
          radio: $(e.item).find('.radio'),
          parent: $(e.item).closest('.table')
        });
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/handlers/sortableInit.js":
/*!**********************************************************!*\
  !*** ./modules/shop-department/handlers/sortableInit.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "../../../node_modules/sortablejs/modular/sortable.esm.js");

/**
 * Sortable Init
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](this, {
    group: 'shops',
    removeCloneOnHide: true,
    onEnd: function onEnd(e) {
      new Promise(function (resolve) {
        $(e.item).closest('tr.department').addClass('changed');
        resolve({
          radio: $(e.item).find('.radio'),
          parent: $(e.item).closest('.table')
        });
      }).then(function (data) {
        if (data.parent.find('.radio.checked:gt(0)').length) {
          data.radio.removeClass('checked');
          data.radio.prop('checked', false);
        }
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/listeners/showForm.js":
/*!*******************************************************!*\
  !*** ./modules/shop-department/listeners/showForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/shop-department/constants.js");
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
/* harmony import */ var helpers_getFilePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/getFilePath */ "./helpers/getFilePath.js");
/* harmony import */ var components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/dropzone/DropzoneBuilder */ "./components/dropzone/DropzoneBuilder.js");





/**
 * Dropzone init after the modal opened
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["SHOP_DEPARTMENT_SHOW_FORM"], function () {
    /**
     * Preview
     */
    dropzoneInit(document.getElementById('dropzone'), document.getElementById('preview-url'));
    /**
     * Preview Small
     */

    dropzoneInit(document.getElementById('dropzone-small'), document.getElementById('preview-url-small'));
  });
});
/**
 * Dropzone Init
 *
 * @param {HTMLElement} dropzoneElement
 * @param {HTMLElement} previewUrlElement
 *
 * @returns {boolean}
 */

function dropzoneInit(dropzoneElement, previewUrlElement) {
  if (!dropzoneElement) {
    return false;
  }
  /**
   * Dropzone initialization
   */


  var dropzoneBuilder = new components_dropzone_DropzoneBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](dropzoneElement).setUploadUrl(dropzoneElement.dataset.url).error(function (file, response) {
    Object(components_http_errorHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
    $(previewUrlElement).val('');
  }).cancel(function () {
    $(previewUrlElement).val('');
  }).success(function (file, response) {
    $(dropzoneElement).find('.dz-filename span').text(response.file_name);
    previewUrlElement.value = response.file_name;
  });
  /**
   * Set preview
   */

  if (previewUrlElement.value.length) {
    dropzoneBuilder.setPreview(previewUrlElement.value, Object(helpers_getFilePath__WEBPACK_IMPORTED_MODULE_3__["default"])(dropzoneElement.dataset.folder, previewUrlElement.value));
  }
  /**
   * Dropzone build
   */


  dropzoneBuilder.build();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/module.js":
/*!*******************************************!*\
  !*** ./modules/shop-department/module.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addShop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addShop */ "./modules/shop-department/handlers/addShop.js");
/* harmony import */ var _handlers_fastSave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/fastSave */ "./modules/shop-department/handlers/fastSave.js");
/* harmony import */ var _handlers_radioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/radioInput */ "./modules/shop-department/handlers/radioInput.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/shop-department/listeners/showForm.js");
/* harmony import */ var modules_shop_department_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/shop-department/handlers/sortableInit */ "./modules/shop-department/handlers/sortableInit.js");
/* harmony import */ var modules_shop_department_handlers_sortableDepartmentInit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/shop-department/handlers/sortableDepartmentInit */ "./modules/shop-department/handlers/sortableDepartmentInit.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./modules/shop-department/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);







/**
 * Dropzone init
 */

Object(_listeners_showForm__WEBPACK_IMPORTED_MODULE_3__["default"])();
$(document)
/**
 * Radio buttons behavior
 */
.on('change', '.radio', _handlers_radioInput__WEBPACK_IMPORTED_MODULE_2__["default"])
/**
 * Add next row to the dpa grid
 */
.on('input', 'input', function () {
  $(this).closest('tr.department').addClass('changed');
})
/**
 * Document ready
 */
.ready(function () {
  /**
   * Add class to checked radios
   */
  $('.radio[checked]').addClass('checked');
  /**
   * Add a new shop in a departments grid
   */

  $('.add-shop').click(_handlers_addShop__WEBPACK_IMPORTED_MODULE_0__["default"]);
  /**
   * Fast save
   */

  $('.fast-save').click(_handlers_fastSave__WEBPACK_IMPORTED_MODULE_1__["default"]);
  /**
   * Make tr to sortable
   */

  $('.sortable').each(modules_shop_department_handlers_sortableInit__WEBPACK_IMPORTED_MODULE_4__["default"]);
  /**
   * Make tr to sortable
   */

  $('.sortable-department').each(modules_shop_department_handlers_sortableDepartmentInit__WEBPACK_IMPORTED_MODULE_5__["default"]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-department/styles.scss":
/*!*********************************************!*\
  !*** ./modules/shop-department/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/shop-releases/handlers/addNewRow.js":
/*!*****************************************************!*\
  !*** ./modules/shop-releases/handlers/addNewRow.js ***!
  \*****************************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the meal config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#release > tbody');
  var trLast = $('#release_template').html();
  var lastID = tbody.find("tr").last().find('.release_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%release%/g, i + incrementId));
    tbody.find('.select2').select2();
    tbody.find('.datetimepicker').datetimepicker({
      format: 'yyyy-mm-dd hh:ii:ss',
      autoclose: true
    });
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-releases/handlers/savePage.js":
/*!****************************************************!*\
  !*** ./modules/shop-releases/handlers/savePage.js ***!
  \****************************************************/
/*! exports provided: savePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePage", function() { return savePage; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifyError */ "./components/notify/notifyError.js");


/**
 * Update row to the Meal config grid
 *
 * @returns {boolean}
 */

function savePage() {
  var route = $(this).data('route');
  var tbody = $('.release-save-container').find(".changed");
  var data = $('.release-save-container').find(".changed input, .changed select, .changed textarea").serializeArray();

  if (data.length === 0) {
    return false;
  }

  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('POST').data(data).send();
  tbody.each(function (n, item) {
    $(item).removeClass('changed');
  });
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-releases/module.js":
/*!*****************************************!*\
  !*** ./modules/shop-releases/module.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/shop-releases/handlers/addNewRow.js");
/* harmony import */ var _handlers_savePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/savePage */ "./modules/shop-releases/handlers/savePage.js");


$(document)
/**
 * Add next rows to the dye grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_0__["addNewRow"])
/**
 * Delete row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * Mark row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/**
 * Fast save data on the dyes page
 */

$('.save-page').click(_handlers_savePage__WEBPACK_IMPORTED_MODULE_1__["savePage"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/shop-stats/module.js":
/*!**************************************!*\
  !*** ./modules/shop-stats/module.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).on('click', 'tr', function () {
  $(this).find('td').each(function () {
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    } else {
      $(this).css('background', '#e7e7e7');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/sound/handlers/addNewRow.js":
/*!*********************************************!*\
  !*** ./modules/sound/handlers/addNewRow.js ***!
  \*********************************************/
/*! exports provided: addNewRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewRow", function() { return addNewRow; });
/**
 * Add next rows to the sound config grid
 *
 * @returns {boolean}
 */
function addNewRow() {
  var add_counter = $('.add-counter').val();
  var tbody = $('#sound > tbody');
  var trLast = $('#sound_template').html();
  var lastID = tbody.find("tr").last().find('.sound_id').val();
  var incrementId = parseInt(lastID) + 1 || 1;

  for (var i = 0; i < add_counter; i++) {
    tbody.append(trLast.replace(/%sound_id%/g, i + incrementId));
    tbody.find('.select2').select2();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/sound/handlers/saveSoundState.js":
/*!**************************************************!*\
  !*** ./modules/sound/handlers/saveSoundState.js ***!
  \**************************************************/
/*! exports provided: saveSoundState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSoundState", function() { return saveSoundState; });
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Update row to the sound config grid
 *
 * @returns {boolean}
 */

function saveSoundState() {
  var data = $('.sound-save-container').find(".changed input, .changed select").serializeArray();

  if (data.length) {
    new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).data('route')).method('PUT').data(data).send();
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/sound/module.js":
/*!*********************************!*\
  !*** ./modules/sound/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _handlers_saveSoundState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/saveSoundState */ "./modules/sound/handlers/saveSoundState.js");
/* harmony import */ var _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/addNewRow */ "./modules/sound/handlers/addNewRow.js");


$(document)
/**
 * Add next rows to the sound grid
 */
.on('click', '.add-new-row', _handlers_addNewRow__WEBPACK_IMPORTED_MODULE_1__["addNewRow"])
/**
 * Save the row
 */
.on('click', '.update-row', _handlers_saveSoundState__WEBPACK_IMPORTED_MODULE_0__["saveSoundState"])
/**
 * Mark the row as changed
 */
.on('input', 'input', function () {
  $(this).closest('tr').addClass('changed');
})
/**
 * Mark row as changed
 */
.on('.select2').change(function (item) {
  $(item.target).closest('tr').addClass('changed');
})
/**
 * Remove empty row
 */
.on('click', '.delete-row', function () {
  $(this).closest('tr').remove();
})
/**
 * How many rows to add
 * Change counter
 */
.on('input', '.add-counter', function () {
  $('.add-counter').val(this.value);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/subtype-attributes/module.js":
/*!**********************************************!*\
  !*** ./modules/subtype-attributes/module.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./modules/subtype-attributes/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./modules/subtype-attributes/styles.scss":
/*!************************************************!*\
  !*** ./modules/subtype-attributes/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./modules/tamatool/constants.js":
/*!***************************************!*\
  !*** ./modules/tamatool/constants.js ***!
  \***************************************/
/*! exports provided: TAMATOOL_SHOW_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAMATOOL_SHOW_FORM", function() { return TAMATOOL_SHOW_FORM; });
var TAMATOOL_SHOW_FORM = 'TAMATOOL_SHOW_FORM';

/***/ }),

/***/ "./modules/tamatool/listeners/showForm.js":
/*!************************************************!*\
  !*** ./modules/tamatool/listeners/showForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/tamatool/constants.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["TAMATOOL_SHOW_FORM"], function (data, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["TAMATOOL_SHOW_FORM"], self);
    $('.neighbor-activity-form .datepicker').datetimepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      minView: '2'
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/tamatool/module.js":
/*!************************************!*\
  !*** ./modules/tamatool/module.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! listeners/awardCreate */ "./listeners/awardCreate.js");
/* harmony import */ var listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! listeners/awardDelete */ "./listeners/awardDelete.js");
/* harmony import */ var _listeners_showForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/showForm */ "./modules/tamatool/listeners/showForm.js");



$(document).on('click', '.award-create-button', listeners_awardCreate__WEBPACK_IMPORTED_MODULE_0__["default"]).on('click', '.award-delete-button', listeners_awardDelete__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * Run the show form handler.
 * After click at create or edit button
 */

$('.show-form').click(_listeners_showForm__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/constants.js":
/*!************************************!*\
  !*** ./modules/users/constants.js ***!
  \************************************/
/*! exports provided: SEARCH_USER_ASSETS, SUBMIT_USER_PART_FORM, DELETE_NEIGHBOR, ADD_NEIGHBOR, GET_NEIGHBORS, UPDATE_NEIGHBORS, NEIGHBOR_GRID_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USER_ASSETS", function() { return SEARCH_USER_ASSETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_USER_PART_FORM", function() { return SUBMIT_USER_PART_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_NEIGHBOR", function() { return DELETE_NEIGHBOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEIGHBOR", function() { return ADD_NEIGHBOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NEIGHBORS", function() { return GET_NEIGHBORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_NEIGHBORS", function() { return UPDATE_NEIGHBORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEIGHBOR_GRID_ID", function() { return NEIGHBOR_GRID_ID; });
var SEARCH_USER_ASSETS = 'SEARCH_USER_ASSETS';
var SUBMIT_USER_PART_FORM = 'SUBMIT_USER_PART_FORM';
var DELETE_NEIGHBOR = 'DELETE_NEIGHBOR';
var ADD_NEIGHBOR = 'ADD_NEIGHBOR';
var GET_NEIGHBORS = 'GET_NEIGHBORS';
var UPDATE_NEIGHBORS = 'UPDATE_NEIGHBORS';
var NEIGHBOR_GRID_ID = 'neighbor-grid';

/***/ }),

/***/ "./modules/users/handlers/addCollectible.js":
/*!**************************************************!*\
  !*** ./modules/users/handlers/addCollectible.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");
/* harmony import */ var helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/getFormData */ "./helpers/getFormData.js");



/**
 * Add comment
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var data = Object(helpers_getFormData__WEBPACK_IMPORTED_MODULE_2__["default"])($('#collectible-form').find('input'));
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($('#add-collectible').attr('href')).method('POST').data({
    data: data
  }).success(function (resp) {
    if (resp.type === "success") {
      var form = $(resp.data);
      $('#' + resp.container).replaceWith(form);
      Object(components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__["default"])('User collectible updated');
    }
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/addComment.js":
/*!**********************************************!*\
  !*** ./modules/users/handlers/addComment.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * Add comment
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]($(this).closest('a').attr('href')).method('POST').data({
    description: $('[name="description"]').val()
  }).success(function (r) {
    if (r.status === true) {
      $('[name="description"]').val('');
      $('#user-comments').prepend('<tr><td>' + r.model.description + '</td><td>' + r.created_by + '</td><td>' + r.created_at + ' PST</td><td><a href="http://cms-dev.local/remove-comment/' + r.model.id + '" class="ajax-confirm-action" data-method="DELETE" data-header="Delete comment?" data-btn-name="Delete" data-btn-class="btn-danger btn-sm" data-dismiss="1" data-reload="1"><button class="btn btn-danger btn-sm"><i class="fa fa-trash-o" aria-hidden="true"></i>Delete</button></a></td></tr>');
    }
  }).send();
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/changeMovePlacement.js":
/*!*******************************************************!*\
  !*** ./modules/users/handlers/changeMovePlacement.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Synchronize move-placement-select selects
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var selectedStorage = $(this).val();
  $(this).parents('form').find('.move-placement-select').each(function () {
    if (selectedStorage != $(this).val()) {
      $(this).val(selectedStorage).change();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/changePageLimit.js":
/*!***************************************************!*\
  !*** ./modules/users/handlers/changePageLimit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var modules_users_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/users/constants */ "./modules/users/constants.js");


/**
 * Set page limit
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var route = $(this).data('route') + '&page_limit=' + $(this).val();
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](route).method('GET').success(function (response) {
    $("#".concat(modules_users_constants__WEBPACK_IMPORTED_MODULE_1__["NEIGHBOR_GRID_ID"])).replaceWith(response);
  }).send();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/changePlacement.js":
/*!***************************************************!*\
  !*** ./modules/users/handlers/changePlacement.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Change placement select in Add Assets block
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var placementName = $('#add-assets-block-placement-name');

  if ($(this).val() > 0) {
    placementName.hide();
  } else {
    placementName.show();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/changeRandomNeighbors.js":
/*!*********************************************************!*\
  !*** ./modules/users/handlers/changeRandomNeighbors.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Change mode for add neighbors
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var neighborsCount = $('#neighbors-count');

  if ($(this).is(':checked')) {
    neighborsCount.removeAttr('disabled');
  } else {
    neighborsCount.attr('disabled', 'disabled');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/hidePlacementAssets.js":
/*!*******************************************************!*\
  !*** ./modules/users/handlers/hidePlacementAssets.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Hide assets in placement
 */
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentElement = $(this);
  currentElement.toggleClass('hide');
  currentElement.siblings('.load-assets').toggleClass('hide');
  $('#asset-container-' + currentElement.data('placement')).html('');
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/loadPlacementAssets.js":
/*!*******************************************************!*\
  !*** ./modules/users/handlers/loadPlacementAssets.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");

/**
 * PLACEMENT_ASSETS_ROUTE - it is a global object
 * Inited in user/edit.blade.php
 */

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  e.preventDefault();
  var currentElement = $(this);
  var placement = currentElement.data('placement');
  currentElement.toggleClass('hide');
  currentElement.siblings('.hide-assets').toggleClass('hide');
  loadPart(PLACEMENT_ASSETS_ROUTE + '&placement=' + placement, $('#asset-container-' + placement));
  return false;
});
/**
 * Load part for edit user page
 */

function loadPart(action, element) {
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](action).method('get').success(function (response) {
    var items = $(response);
    items.find('.list-thumbnail').popover({
      container: 'body',
      html: true,
      trigger: 'hover',
      placement: 'right',
      content: function content() {
        return '<img src="' + $(this).data('full') + '">';
      }
    });
    element.replaceWith(items);
  }).send();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/selectRows.js":
/*!**********************************************!*\
  !*** ./modules/users/handlers/selectRows.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Select rows
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var countSelector = $(this).parents('td, th').find('.count-for-select');
  var rowsForSelect = $(this).parents('table').find('.for-select');
  var countForSelect = countSelector.val() || 0;

  if (countForSelect === 0) {
    countForSelect = rowsForSelect.length;
    countSelector.val(countForSelect);
  }

  if ($(this).is(':checked')) {
    rowsForSelect.each(function () {
      if (countForSelect > 0) {
        this.checked = true;
        countForSelect--;
      }
    });
  } else {
    rowsForSelect.each(function () {
      this.checked = false;
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/handlers/updateNeighbors.js":
/*!***************************************************!*\
  !*** ./modules/users/handlers/updateNeighbors.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");
/* harmony import */ var modules_users_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/users/constants */ "./modules/users/constants.js");



/**
 * Update neighbor grid
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(modules_users_constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_NEIGHBORS"], function (response, self) {
    components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe(modules_users_constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_NEIGHBORS"], self);

    if (response.type == 'success') {
      new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]($(_this).closest('form').attr('action')).method('GET').success(function (response) {
        $("#".concat(modules_users_constants__WEBPACK_IMPORTED_MODULE_2__["NEIGHBOR_GRID_ID"])).replaceWith(response);
      }).send();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/addNeighbor.js":
/*!************************************************!*\
  !*** ./modules/users/listeners/addNeighbor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Set neighbor as active
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["ADD_NEIGHBOR"], function (resp) {
    if (resp.type == 'success') {
      $('#delete-neighbor-' + resp.data.neighbor_id).removeClass('hidden');
      $('#add-neighbor-' + resp.data.neighbor_id).addClass('hidden');
      $('#neighbor-status-' + resp.data.neighbor_id).html(resp.data.status_text);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/deleteNeighbor.js":
/*!***************************************************!*\
  !*** ./modules/users/listeners/deleteNeighbor.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Set neighbor as deleted
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_NEIGHBOR"], function (resp) {
    if (resp.type == 'success') {
      $('#delete-neighbor-' + resp.data.neighbor_id).addClass('hidden');
      $('#add-neighbor-' + resp.data.neighbor_id).removeClass('hidden');
      $('#neighbor-status-' + resp.data.neighbor_id).html(resp.data.status_text);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/searchNeighbor.js":
/*!***************************************************!*\
  !*** ./modules/users/listeners/searchNeighbor.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Update neighbor grid in searching
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["GET_NEIGHBORS"], function (resp) {
    $("#".concat(_constants__WEBPACK_IMPORTED_MODULE_1__["NEIGHBOR_GRID_ID"])).replaceWith(resp);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/searchUserAssets.js":
/*!*****************************************************!*\
  !*** ./modules/users/listeners/searchUserAssets.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");


/**
 * Search user assets
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__["SEARCH_USER_ASSETS"], function (data) {
    $('#search-assets-container').replaceWith(data);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/listeners/submitUserPartForm.js":
/*!*******************************************************!*\
  !*** ./modules/users/listeners/submitUserPartForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/observer/EventObserver */ "./components/observer/EventObserver.js");
/* harmony import */ var components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/notify/notifySuccess */ "./components/notify/notifySuccess.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./modules/users/constants.js");



/**
 * Submit user part form
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  components_observer_EventObserver__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_2__["SUBMIT_USER_PART_FORM"], function (resp) {
    var form = $(resp.data);
    $('#' + resp.container).replaceWith(form);
    form.find('.select2').select2();
    "        notifySuccess('User data updated');\n";
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/module.js":
/*!*********************************!*\
  !*** ./modules/users/module.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _listeners_searchUserAssets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/searchUserAssets */ "./modules/users/listeners/searchUserAssets.js");
/* harmony import */ var _listeners_submitUserPartForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners/submitUserPartForm */ "./modules/users/listeners/submitUserPartForm.js");
/* harmony import */ var _listeners_deleteNeighbor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners/deleteNeighbor */ "./modules/users/listeners/deleteNeighbor.js");
/* harmony import */ var _listeners_searchNeighbor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners/searchNeighbor */ "./modules/users/listeners/searchNeighbor.js");
/* harmony import */ var _listeners_addNeighbor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners/addNeighbor */ "./modules/users/listeners/addNeighbor.js");
/* harmony import */ var _handlers_loadPlacementAssets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/loadPlacementAssets */ "./modules/users/handlers/loadPlacementAssets.js");
/* harmony import */ var _handlers_hidePlacementAssets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/hidePlacementAssets */ "./modules/users/handlers/hidePlacementAssets.js");
/* harmony import */ var _handlers_changePlacement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handlers/changePlacement */ "./modules/users/handlers/changePlacement.js");
/* harmony import */ var _handlers_changeRandomNeighbors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./handlers/changeRandomNeighbors */ "./modules/users/handlers/changeRandomNeighbors.js");
/* harmony import */ var _handlers_changeMovePlacement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./handlers/changeMovePlacement */ "./modules/users/handlers/changeMovePlacement.js");
/* harmony import */ var _handlers_selectRows__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./handlers/selectRows */ "./modules/users/handlers/selectRows.js");
/* harmony import */ var _handlers_updateNeighbors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./handlers/updateNeighbors */ "./modules/users/handlers/updateNeighbors.js");
/* harmony import */ var _handlers_changePageLimit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./handlers/changePageLimit */ "./modules/users/handlers/changePageLimit.js");
/* harmony import */ var _handlers_addComment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./handlers/addComment */ "./modules/users/handlers/addComment.js");
/* harmony import */ var _handlers_addCollectible__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./handlers/addCollectible */ "./modules/users/handlers/addCollectible.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles.scss */ "./modules/users/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_15__);
















/**
 * Search user assets listener
 */

Object(_listeners_searchUserAssets__WEBPACK_IMPORTED_MODULE_0__["default"])();
/**
 * Submit user part form listener
 */

Object(_listeners_submitUserPartForm__WEBPACK_IMPORTED_MODULE_1__["default"])();
/**
 * Delete Neighbor
 */

Object(_listeners_deleteNeighbor__WEBPACK_IMPORTED_MODULE_2__["default"])();
/**
 * Add Neighbor
 */

Object(_listeners_addNeighbor__WEBPACK_IMPORTED_MODULE_4__["default"])();
/**
 * Search Neighbors
 */

Object(_listeners_searchNeighbor__WEBPACK_IMPORTED_MODULE_3__["default"])();
$(document)
/**
 * Load assets in placement
 */
.on('click', '.load-assets', _handlers_loadPlacementAssets__WEBPACK_IMPORTED_MODULE_5__["default"])
/**
 * Change placement in Add Assets block
 */
.on('change', '#placement-for-asset', _handlers_changePlacement__WEBPACK_IMPORTED_MODULE_7__["default"])
/**
 * Change mode for add neighbors
 */
.on('change', '#is-random-neighbors', _handlers_changeRandomNeighbors__WEBPACK_IMPORTED_MODULE_8__["default"])
/**
 * Hide assets in placement
 */
.on('click', '.hide-assets', _handlers_hidePlacementAssets__WEBPACK_IMPORTED_MODULE_6__["default"])
/**
 * Auto select rows
 */
.on('change', '.select-rows', _handlers_selectRows__WEBPACK_IMPORTED_MODULE_10__["default"])
/**
 * Synchronize move-placement-select selects
 */
.on('change', '.move-placement-select', _handlers_changeMovePlacement__WEBPACK_IMPORTED_MODULE_9__["default"])
/**
 * Delete neighbor request
 */
.on('click', '.delete-neighbor-request, #add-neighbors', _handlers_updateNeighbors__WEBPACK_IMPORTED_MODULE_11__["default"])
/**
 * Set page limit
 */
.on('change', '.neighbor-page-limit', _handlers_changePageLimit__WEBPACK_IMPORTED_MODULE_12__["default"])
/**
 * Add comment
 */
.on('click', '#add-comment', _handlers_addComment__WEBPACK_IMPORTED_MODULE_13__["default"])
/**
 * Add collectible
 */
.on('click', '#add-collectible', _handlers_addCollectible__WEBPACK_IMPORTED_MODULE_14__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./modules/users/styles.scss":
/*!***********************************!*\
  !*** ./modules/users/styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L3Byb2plY3RzL3N0b2Nrd29ya2VyL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbENvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29ic2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2V4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvYWRkRW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvYWpheFBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvY29uZmlybU1vZGFsLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2Zhc3RTYXZlLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9maWx0ZXJEYXRlUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvbW9kYWxEYXRhLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3BhZ2VMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9yZW1vdmVFbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9zdWJtaXRGb3JtLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0RmlsZVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldFN1YkZvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmRDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2F3YXJkRGVsZXRlLmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9kcm9wWm9uZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL3VwZGF0ZVNhdmVBbGxCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcyBzeW5jIFxcLlxcL1tcXHctX10rXFwvbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMgc3luYyBtb2R1bGVzKC4qKW1vZHVsZVxcLmpzJCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWRkLW1lL2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FkZC1tZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy1sb2cvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9jb3B5QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2Rvd25sb2FkQXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2dldExhc3RDb2xsZWN0aW9uTnVtYmVyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL21hcmtDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2F3YXJkL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9oYW5kbGVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvY29weUFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9kb3dubG9hZEFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2hpZGVBcmNoaXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvaGlkZVRhc2tzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2VsZWN0Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2hvd0FyY2hpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9zaG93VGFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Nyb3AvaGFuZGxlcnMvYWRkUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY3JvcC9oYW5kbGVycy9kZWxldGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jcm9wL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3Qvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2RlcGxveVN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3lQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2R5ZVNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvYXNzZXRDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvc29ydGFibGVJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvbGlzdGVuZXJzL2FkZFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL2hhbmRsZXJzL3Nob3dBc3NldC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SUQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9tZWFsRGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9zYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L2hhbmRsZXJzL3ByaWNlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2UvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2Uvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2Ryb3B6b25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL21hcmtDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvaGFuZGxlcnMvc2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9zYXZlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL2FkZFNob3AuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvcmFkaW9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZURlcGFydG1lbnRJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2FkZENvbGxlY3RpYmxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvYWRkQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZU1vdmVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VQYWdlTGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VSYW5kb21OZWlnaGJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvbG9hZFBsYWNlbWVudEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL3NlbGVjdFJvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy91cGRhdGVOZWlnaGJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvYWRkTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJTSVpFUyIsInNtIiwibWQiLCJsZyIsIkxPQURJTkdfVEVYVCIsImRyb3B6b25lQ29udGFpbmVyIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9kcm9wem9uZUNvbnRhaW5lciIsIl9jYW5jZWxCdXR0b24iLCIkIiwiZmluZCIsInVybCIsIl91cGxvYWRVcmwiLCJuYW1lIiwiX3ByZXZpZXciLCJjYWxsYmFjayIsIl9lcnJvckNhbGxiYWNrIiwiX2NhbmNlbENhbGxiYWNrIiwiX3N1Y2Nlc3NDYWxsYmFjayIsIl9kcm9wem9uZUJ1aWxkZXIiLCJkcm9wem9uZUZhaWwiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidXBsb2FkTXVsdGlwbGUiLCJhY2NlcHRlZEZpbGVzIiwiaGVhZGVycyIsIkNTUkZfVE9LRU4iLCJpbml0IiwiZW1pdCIsIm9uIiwidGV4dCIsImZpbGUiLCJyZXNwb25zZSIsImNsaWNrIiwiRHJvcHpvbmUiLCJfdXJsIiwiX21ldGhvZCIsIl9kYXRhIiwiX2Vycm9yIiwiZXJyb3JIYW5kbGVyIiwiX3N1Y2Nlc3MiLCJzdWNjZXNzSGFuZGxlciIsIl9jb21wbGV0ZSIsIm1ldGhvZCIsImRhdGEiLCJmbiIsImFqYXgiLCJ0eXBlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJub3RpZnlFcnJvciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJub3RpZnlTdWNjZXNzIiwibW9kYWxzQ29udGFpbmVyIiwiTU9EQUxfU0laRVMiLCJtb2RhbEluZGV4IiwibW9kYWxDb3VudGVyIiwiX2lkIiwic2l6ZSIsIl9zaXplIiwiaGVhZGVyIiwiX2hlYWRlciIsImJvZHkiLCJfYm9keSIsImZvb3RlciIsIl9mb290ZXIiLCJkYXRhc2V0IiwiX2RhdGFzZXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJfYmVmb3JlQnVpbGRDYWxsYmFjayIsIl9hZnRlckJ1aWxkQ2FsbGJhY2siLCJfb25DbG9zZUNhbGxiYWNrIiwiY29udGVudCIsInB1c2giLCJodG1sIiwiX2dldElEIiwiam9pbiIsIl9nZXRTaXplIiwiX2JlZm9yZUJ1aWxkIiwiX2dldEhlYWRlciIsIl9nZXRCb2R5IiwiX2dldEZvb3RlciIsInNlbGVjdDIiLCJkYXRldGltZXBpY2tlciIsImZvcm1hdCIsImF1dG9jbG9zZSIsIm1pblZpZXciLCJzdGlja3lUYWJsZUhlYWRlcnMiLCJfYWZ0ZXJCdWlsZCIsIm9mZiIsIl9vbkNsb3NlIiwibW9kYWwiLCJnZXRNb2RhbENvdW50ZXIiLCJtb2RhbENvbmZpcm0iLCJNb2RhbEJ1aWxkZXIiLCJub3RpZnkiLCJ6X2luZGV4IiwiRXZlbnRPYnNlcnZlciIsInN1YnNjcmliZXJzIiwiZXZlbnQiLCJoYW5kbGVyIiwiX2xvZyIsImZvckVhY2giLCJzdGF0ZSIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJ0b1VwcGVyQ2FzZSIsIm9ic2VydmVyIiwiU2F2ZWRJdGVtTm90Rm91bmQiLCJFcnJvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRCdXR0b24iLCJ0YXJnZXQiLCJ0ZW1wbGF0ZSIsImlkUGxhY2Vob2xkZXIiLCJyb3dJZCIsImVtYmVkRm9ybSIsImVtYmVkQmxvY2tJZCIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiUmVnRXhwIiwibGVuZ3RoIiwiZGlzcGF0Y2giLCJ0cmlnZ2VyIiwiY29udGFpbmVyIiwicGFyZW50cyIsImh0dHAiLCJyZXBsYWNlV2l0aCIsInNlbmQiLCJkYXRhU2V0IiwicGFyZW50QnV0dG9uIiwiYnRuQ2xhc3MiLCJidG5OYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImhhc093blByb3BlcnR5IiwiY2xvc2VzdCIsInNlcmlhbGl6ZUFycmF5IiwicGFyc2VJbnQiLCJyZWxvYWQiLCJkaXNtaXNzIiwiY3VycmVudEJ0biIsInNhdmVkSXRlbSIsImF0dHIiLCJnZXRGb3JtRGF0YSIsIkNPTlRBSU5FUl9TRUxFQ1RPUiIsIlBBR0VfU0FWRUQiLCJVUERBVEVfU0FWRV9BTExfQlVUVE9OIiwiZm9ybUl0ZW1zIiwibWFya0NoYW5nZWQiLCJkYXRlRm9ybWF0IiwiZGF0ZVJhbmdlSW5wdXRzIiwic2VsZWN0ZWRPcHRpb24iLCJkYXRlRnJvbSIsImRhdGVUbyIsInNlbGVjdGVkVmFsdWUiLCJ2YWwiLCJjc3MiLCJ2aXNpYmlsaXR5IiwiaGVpZ2h0IiwiZGF0ZUZyb21WYWx1ZSIsImRhdGVUb1ZhbHVlIiwibW9tZW50Iiwic3VidHJhY3QiLCJkYXkiLCJzdGFydE9mIiwiZW5kT2YiLCJkb2N1bWVudCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImVhY2giLCJyZW1vdmVBdHRyIiwicmVhZHkiLCJ0YWJsZXNvcnRlciIsIm1vZGFsRGF0YSIsImNvbmZpcm1Nb2RhbCIsInN1Ym1pdEZvcm0iLCJhamF4UGFnaW5hdGlvbiIsImFkZEVtYmVkIiwicmVtb3ZlRW1iZWQiLCJmYXN0U2F2ZSIsInBhZ2VMaW1pdCIsImRhdGVSYW5nZSIsImZpbHRlckRhdGVSYW5nZSIsImNoYW5nZSIsImluaXRTdGlja3kiLCJmYXN0U2F2ZVBhZ2UiLCJhZnRlckJ1aWxkIiwib25DbG9zZSIsImNsb3NlRXZlbnQiLCJVUkwiLCJ3aW5kb3ciLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJlbnQiLCJpZCIsImNhblJlbG9hZCIsInIiLCJyZXBvcnRfaW1hZ2UiLCJidXR0b24iLCJkYXRhUmVsb2FkIiwicm9vdEZvbGRlciIsImZpbGVOYW1lIiwiZ2V0U3ViRm9sZGVyIiwiZm9ybSIsImZvcm1EYXRhIiwiY3VycmVudEl0ZW0iLCJwcm9wIiwiZmlsZU5hbWVIYXNoIiwibWQ1Iiwic3Vic3RyaW5nIiwicGF0aFBhcnRzIiwibWF0Y2giLCJqUXVlcnkiLCJwYXRoIiwicGF0aG5hbWUiLCJzcGxpdCIsIm1vZHVsZXMiLCJyZXF1aXJlIiwibW9kdWxlIiwibW9kdWxlSXRlbXMiLCJzdWJNb2R1bGVzIiwic3Vic2NyaWJlIiwiQVdBUkRfQ1JFQVRFIiwic2VsZiIsInVuc3Vic2NyaWJlIiwiZWRpdEJ0biIsInRlbXBsYXRlSWQiLCJ0ZW1wbGF0ZVBsYWNlaG9sZGVyIiwiYXdhcmRfaWQiLCJmaWVsZE5hbWUiLCJBV0FSRF9DUkVBVEVEIiwiQVdBUkRfREVMRVRFIiwiY3JlYXRlQnRuIiwiY2hpbGRyZW4iLCJFVkVOVF9OQU1FIiwiZHJvcHpvbmVFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2aWV3VVJMIiwiZHJvcHpvbmVCdWlsZGVyIiwiRHJvcHpvbmVCdWlsZGVyIiwic2V0VXBsb2FkVXJsIiwiY2FuY2VsIiwiZmlsZV9uYW1lIiwidmFsdWUiLCJzZXRQcmV2aWV3IiwiZ2V0RmlsZVBhdGgiLCJmb2xkZXIiLCJidWlsZCIsInNhdmVBbGxCdXR0b24iLCJjb3VudGVyIiwiY291bnQiLCJzaG93IiwiaGlkZSIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicHJldiIsImZvY3VzIiwic3VibWl0IiwiY2FudmFzIiwiZnJvbSIsInRvIiwiY2FudmFzX2hhbmRsZXIiLCJlbXB0eSIsInBvc3RQcm9jZXNzIiwic3VibWl0QnRuIiwic2V0VGltZW91dCIsImVsZW1lbnQiLCJjb3B5X2VsZSIsImdldCIsImNsb25lTm9kZSIsInNjcm9sbEhlaWdodCIsImh0bWwyY2FudmFzIiwic2Nyb2xsWCIsInNjcm9sbFkiLCJ1c2VDT1JTIiwidGhlbiIsImltYWdlRGF0YSIsInRvRGF0YVVSTCIsIm5ld0RhdGEiLCJhcHBlbmRDaGlsZCIsIkFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEIiwiREVMVEFfVElNRV9BVFRSSUJVVEUiLCJ0b2dnbGVDbGFzcyIsImN1cnJlbnRFbGVtZW50IiwiUmVxdWVzdEJ1aWxkZXIiLCJpbmRleCIsIl8iLCJpdGVtIiwidXBkYXRlSW5kZXhlcyIsImN1cnJlbnRMaSIsImRlbHRhVGltZUhpZGRlbiIsImRlbHRhVGltZURpc3BsYXkiLCJ0aW1lVHlwZSIsImNvbGxhcHNlU3RhdGUiLCJjb2xsYXBzZVN0YXRlcyIsInJlbW92ZUFjdGlvblR5cGVTdGF0ZSIsInNhdmVTdGF0ZSIsInJlc3AiLCJBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSIsImF3YXJkQ3JlYXRlIiwiYmluZCIsIl90aGlzIiwiYXdhcmREZWxldGUiLCJDTE9TRV9BV0FSRF9NT0RBTCIsInNob3dGb3JtIiwibmV4dCIsInNldFN1YnR5cGVzIiwic3VidHlwZSIsImFzc2V0Rm9ybVN1YnR5cGUiLCJhc3NldEZvcm1BY3Rpb25UeXBlIiwiYXNzZXRGb3JtQ29sbGVjdGlvbiIsInByaWNlcyIsIlNVQl9UWVBFUyIsImNvcHlBc3NldHMiLCJhc3NldElkc0ZpZWxkIiwid2l0aE5hbWUiLCJhc3NldElkcyIsIm4iLCJhc3NldElkIiwiYXNzZXROYW1lIiwiZG93bmxvYWRBc3NldHMiLCJjb2xsZWN0aW9uX2lkIiwicGFyZW50Q29udGFpbmVyIiwiY2hhbmdlVHlwZSIsImdldExhc3RDb2xsZWN0aW9uTnVtYmVyIiwiY3VycmVudFRkIiwidXBkYXRlU2F2ZUFsbEJ1dHRvbiIsIlNIT1dfUkVQT1JUX1BBVEgiLCJCQU5ORVJfU0hPV19GT1JNIiwiVFlQRV9TRUxFQ1RfSUQiLCJzZWxlY3RlZEluZGV4Iiwib3B0aW9ucyIsInNlbGVjdGVkRWxlbWVudCIsImRyb3Bab25lSW5pdCIsImNvcHlBZHAiLCJhZHBJZHNGaWVsZCIsImFkcElkcyIsImFkcElkIiwiZG93bmxvYWRBZHAiLCJoaWRlQXJjaGl2ZSIsImhpZGVUYXNrcyIsInNlbGVjdFJvdyIsImNoZWNrYm94IiwiaXMiLCJzaG93QXJjaGl2ZSIsImFjdGlvbiIsInNob3dUYXNrcyIsIkNBU0giLCJDT0lOIiwiQVNTRVQiLCJzb3VyY2VWYWwiLCJtYXRjaGVyIiwicGFyYW1zIiwiaW5BcnJheSIsIndyYXBwZXIiLCJnZXRTZWxlY3Rpb24iLCJDT0xMRUNUSU9OX1NIT1dfRk9STSIsImFzc2V0UHJldmlld1RlbXBsYXRlIiwiYXNzZXRzIiwiY3VycmVudEFzc2V0IiwicHJldmlld191cmwiLCJTb3J0YWJsZSIsImdyb3VwIiwicmVtb3ZlQ2xvbmVPbkhpZGUiLCJvbkVuZCIsInBvc2l0aW9uIiwibWFya0lucHV0QXNDaGFuZ2VkIiwic29ydGFibGVJbml0IiwiaGlkZUFkZGl0aW9uYWxSb3dzIiwiYWRkUm93IiwiYWRkX2NvdW50ZXIiLCJ0Ym9keSIsInRyTGFzdCIsImxhc3RJRCIsImxhc3QiLCJpbmNyZW1lbnRJZCIsImkiLCJkZWxldGVSb3ciLCJyb3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFkZE5ld1JvdyIsImxhc3RJRFMiLCJmaXJzdCIsIk1hdGgiLCJtYXgiLCJhcHBseSIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJkZXBsb3lTdGF0dXMiLCJERVBMT1lfU1RBVFVTX1JPVVRFIiwiaXNBY3RpdmUiLCJjaGFuZ2VUYWIiLCJkaXJlY3Rpb24iLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic2hvd0RlcGVuZGVuY3kiLCJjdXJyZW50Q29uZmlnIiwiYWRkTW9kZSIsIm9uZUxldmVsU2hvdyIsImNvbmZpZ05hbWUiLCJsZXZlbCIsIkRFUExPWV9ERVBFTkRTIiwiY29uZmlnQmxvY2siLCJkZXBlbmRDb25maWdOYW1lIiwic2hvd0RlcGVuZGVuY3lQb3B1cCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRDb25maWdJZCIsImlkcyIsInJvb3RMZXZlbFNob3ciLCJpZFJlc3BvbnNlIiwidGV4dENsYXNzIiwiaXNSZWN1cnNpb24iLCJnZXREZXBsb3lNb2RlbElkcyIsIkRFUExPWV9NT0RFTF9JRFNfUk9VVEUiLCJBQ1RJVkVfRElSRUNUSU9OIiwiY2hlY2tlZCIsInNhdmVEcGFTdGF0ZSIsImxhc3RSb3ciLCJjb2xvcnBpY2tlciIsImNoYW5nZVJvd0luZGV4Iiwicm93SW5kZXgiLCJvbGROYW1lIiwibmV3TmFtZSIsImluZGV4T2YiLCJEWUVfQ09OVEFJTkVSX1NFTEVDVE9SIiwibWFya0NoYW5nZWRUciIsImR5ZVNhdmVQYWdlIiwiR0lGVF9XUkFQX1JPV19BRERFRCIsImN1cnJlbnRJbnB1dCIsImFzc2V0SUQiLCJjdXJyZW50QXNzZXREdXBsaWNhdGUiLCJlcnIiLCJwb3NpdGlvblVwZGF0ZSIsImJ1dHRvblVybCIsInBhZ2UiLCJwYWdlX2xpbWl0IiwiYXNzZXRDaGFuZ2VkIiwicmVtb3ZlUm93Iiwic2hvd0Fzc2V0IiwiU1dPV19BU1NFVF9ST1VURSIsInByZXBlbmQiLCJzYXZlTG9jYWxpemF0aW9uU3RhdGUiLCJjdXJyZW50S2V5IiwiY3VycmVudEtleUR1cGxpY2F0ZSIsInNhdmVNYWdpY1N0YXRlIiwibWFrZXVwX2tpdF9pZCIsImdldExhc3RNYWtldXBLaXRJRCIsIk1BS0VVUF9LSVRfU0hPV19GT1JNIiwiaW5ncmVkaWVudERlbGV0ZSIsIm1lYWxEZWxldGUiLCJzYXZlTWVhbFN0YXRlIiwiTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNIiwiVFJBU0giLCJUUkFTSF9GSUVMRFNfSUQiLCJTRUxFQ1RfSUQiLCJ0cmFzaEZpZWxkcyIsIlBST0RVQ1RfU0hPV19GT1JNIiwiQ2xlYXZlIiwibnVtZXJhbCIsInByZWZpeCIsInJhd1ZhbHVlVHJpbVByZWZpeCIsIm9uVmFsdWVDaGFuZ2VkIiwicm91bmQiLCJyYXdWYWx1ZSIsInByb2R1Y3RQcmljZSIsInByaWNlSW5pdCIsIm1heElkIiwibmV3TGVuZ3RoIiwidHJJZCIsIm5ld1JvdyIsIm5ld1Jvd0h0bWwiLCJkZWZhdWx0VmFsdWUiLCJvdXRlckhUTUwiLCJhZnRlciIsInByZXZpZXdIaWRkZW5JbnB1dCIsInNhdmVQYWdlIiwic2F2ZVJvdyIsInJvd1RvU2F2ZSIsImNvbmZpcm0iLCJkYXRhVHlwZSIsImpxWEhSIiwiZXhjZXB0aW9uIiwiZXJyb3JLZXkiLCJtZXNzYWdlS2V5IiwiYXV0b0Rpc2NvdmVyIiwiZHJvcHpvbmVJbml0Iiwic2F2ZUJ1dHRvbiIsIldBTEtfQ0FURUdPUlkiLCJSVU5fQ0FURUdPUlkiLCJzZWxlY3RWYWwiLCJlbWJlZCIsIlNIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0iLCJ0YWJsZSIsImRlcGFydG1lbnRJZCIsInNob3BOYW1lUHJlZml4IiwiZGVwYXJ0bWVudE5hbWVQcmVmaXgiLCJmYXN0U2F2ZUNvbnRhaW5lciIsInNob3BzIiwiZGVwYXJ0bWVudCIsImRlcGluZGV4IiwiZGVwYXJ0bWVudEZvcm1EYXRhIiwiaXRlbU5hbWUiLCJhbGxJdGVtcyIsInJhZGlvIiwicHJldmlld1VybEVsZW1lbnQiLCJyYWRpb0lucHV0IiwiYWRkU2hvcCIsInNvcnRhYmxlRGVwYXJ0bWVudEluaXQiLCJzYXZlU291bmRTdGF0ZSIsIlRBTUFUT09MX1NIT1dfRk9STSIsIlNFQVJDSF9VU0VSX0FTU0VUUyIsIlNVQk1JVF9VU0VSX1BBUlRfRk9STSIsIkRFTEVURV9ORUlHSEJPUiIsIkFERF9ORUlHSEJPUiIsIkdFVF9ORUlHSEJPUlMiLCJVUERBVEVfTkVJR0hCT1JTIiwiTkVJR0hCT1JfR1JJRF9JRCIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwibW9kZWwiLCJjcmVhdGVkX2J5IiwiY3JlYXRlZF9hdCIsInNlbGVjdGVkU3RvcmFnZSIsInBsYWNlbWVudE5hbWUiLCJuZWlnaGJvcnNDb3VudCIsInNpYmxpbmdzIiwicGxhY2VtZW50IiwibG9hZFBhcnQiLCJQTEFDRU1FTlRfQVNTRVRTX1JPVVRFIiwiaXRlbXMiLCJwb3BvdmVyIiwiY291bnRTZWxlY3RvciIsInJvd3NGb3JTZWxlY3QiLCJjb3VudEZvclNlbGVjdCIsIm5laWdoYm9yX2lkIiwic3RhdHVzX3RleHQiLCJzZWFyY2hVc2VyQXNzZXRzIiwic3VibWl0VXNlclBhcnRGb3JtIiwiZGVsZXRlTmVpZ2hib3IiLCJhZGROZWlnaGJvciIsInNlYXJjaE5laWdoYm9yIiwibG9hZFBsYWNlbWVudEFzc2V0cyIsImNoYW5nZVBsYWNlbWVudCIsImNoYW5nZVJhbmRvbU5laWdoYm9ycyIsImhpZGVQbGFjZW1lbnRBc3NldHMiLCJzZWxlY3RSb3dzIiwiY2hhbmdlTW92ZVBsYWNlbWVudCIsInVwZGF0ZU5laWdoYm9ycyIsImNoYW5nZVBhZ2VMaW1pdCIsImFkZENvbW1lbnQiLCJhZGRDb2xsZWN0aWJsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFoQ0osQ0FtQ0t0aEIsRUFuQ0wsQ0FtQ1EsT0FuQ1IsRUFtQ2lCLDBDQW5DakIsRUFtQzZEdWhCLGtFQW5DN0Q7QUFvQ0k7OztBQXBDSixDQXVDTXZoQixFQXZDTixDQXVDUyxRQXZDVCxFQXVDbUIsc0JBdkNuQixFQXVDMkN3aEIsa0VBdkMzQztBQXlDSTs7O0FBekNKLENBNENLeGhCLEVBNUNMLENBNENRLE9BNUNSLEVBNENpQixjQTVDakIsRUE0Q2lDeWhCLDZEQTVDakM7QUE4Q0k7OztBQTlDSixDQWlES3poQixFQWpETCxDQWlEUSxPQWpEUixFQWlEaUIsa0JBakRqQixFQWlEcUMwaEIsaUVBakRyQyxFOzs7Ozs7Ozs7Ozs7QUMzQ0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1pbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1zZ1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maWxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZm9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWRldmFcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vb2MtbG5jXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9vYy1sbmMuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtbW8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qKlxyXG4gKiBCYXNlIHNpemVzXHJcbiAqXHJcbiAqIEB0eXBlIHt7c206IHN0cmluZywgbGc6IHN0cmluZ319XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU0laRVMgPSB7XHJcbiAgICBzbTogJ3NtJyxcclxuICAgIG1kOiAnbWQnLFxyXG4gICAgbGc6ICdsZycsXHJcbn07XHJcbiIsImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XHJcblxyXG4vKipcclxuICogTG9hZGluZyB0ZXh0XHJcbiAqIEl0IHdpbGwgYmUgc2hvd24gYWZ0ZXIgdGhlIHN0YXJ0IG9mIGltYWdlIHVwbG9hZGluZ1xyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cclxuY29uc3QgTE9BRElOR19URVhUID0gJ0xvYWRpbmcuLi4nO1xyXG5cclxuLyoqXHJcbiAqIERyb3B6b25lIGJ1aWxkZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGRyb3B6b25lQ29udGFpbmVyXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRyb3B6b25lQ29udGFpbmVyLCBjb25maWcgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl9kcm9wem9uZUNvbnRhaW5lciA9IGRyb3B6b25lQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbiA9ICQoZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kcm9wem9uZS1jYW5jZWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB1cmwgdG8gdXBsb2FkaW5nXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybFxyXG4gICAgICovXHJcbiAgICBzZXRVcGxvYWRVcmwodXJsKSB7XHJcbiAgICAgICAgdGhpcy5fdXBsb2FkVXJsID0gdXJsO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGRlZmF1bHQgcHJldmlldyBpbWFnZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKi9cclxuICAgIHNldFByZXZpZXcobmFtZSwgdXJsKSB7XHJcbiAgICAgICAgdGhpcy5fcHJldmlldyA9IHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBlcnJvciBoYW5kbGVyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIGVycm9yKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fZXJyb3JDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGNhbmNlbCBoYW5kbGVyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIGNhbmNlbChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX2NhbmNlbENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgc3VjY2VzcyBoYW5kbGVyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHN1Y2Nlc3MoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9zdWNjZXNzQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkIGRyb3B6b25lXHJcbiAgICAgKiBAcmV0dXJucyB7RHJvcHpvbmV9XHJcbiAgICAgKi9cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRoaXNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBfZHJvcHpvbmVCdWlsZGVyID0gdGhpcztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbCBhZnRlciBmYWlsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZHJvcHpvbmVGYWlsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnZHotc3RhcnRlZCcpO1xyXG4gICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHotcHJldmlldycpLnJlbW92ZSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlndXJhdGlvblxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUgb2JqZWN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMuX3VwbG9hZFVybCxcclxuICAgICAgICAgICAgdGh1bWJuYWlsV2lkdGg6IG51bGwsXHJcbiAgICAgICAgICAgIHRodW1ibmFpbEhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgdXBsb2FkTXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiAnaW1hZ2UvKicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICd4LWNzcmYtdG9rZW4nOiBDU1JGX1RPS0VOXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogU2V0IGN1cnJlbnQgaW1hZ2UgaW4gdGhlIGRyb3B6b25lIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3ICYmICEhX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldy51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJhZGRlZGZpbGVcIiwgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidGh1bWJuYWlsXCIsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcudXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEFkZGVkIGZpbGUgaGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQoTE9BRElOR19URVhUKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRXJyb3IgaGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24gKGZpbGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcHpvbmVGYWlsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fZXJyb3JDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9lcnJvckNhbGxiYWNrKGZpbGUsIHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogU3VjY2VzcyBoYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzdWNjZXNzXCIsIGZ1bmN0aW9uIChmaWxlLCByZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX3N1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9zdWNjZXNzQ2FsbGJhY2soZmlsZSwgcmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDbGVhciBidXR0b24gaGFuZGxlclxyXG4gICAgICAgICAqIENsZWFyIGZpbGUgaW5mbyBpbiBkcm9wem9uZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmICghIXRoaXMuX2NhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24uY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVGYWlsKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9jYW5jZWxDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX2NhbmNlbENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJvcHpvbmUgYnVpbGRcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXR1cm4gbmV3IERyb3B6b25lKHRoaXMuX2Ryb3B6b25lQ29udGFpbmVyLCB7Li4uY29uZmlnLCAuLi50aGlzLl9jb25maWd9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4vZXJyb3JIYW5kbGVyJztcclxuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCIuL3N1Y2Nlc3NIYW5kbGVyXCI7XHJcblxyXG4vKipcclxuICogSFRUUCBSZXF1ZXN0IEJ1aWxkZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1cmwpIHtcclxuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5fbWV0aG9kID0gJ2dldCc7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3JIYW5kbGVyO1xyXG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MgPSBzdWNjZXNzSGFuZGxlcjtcclxuICAgICAgICB0aGlzLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZChtZXRob2QpIHtcclxuICAgICAgICB0aGlzLl9tZXRob2QgPSBtZXRob2Q7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcihmbikge1xyXG4gICAgICAgIHRoaXMuX2Vycm9yID0gZm47XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MoZm4pIHtcclxuICAgICAgICB0aGlzLl9zdWNjZXNzID0gZm47XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBsZXRlKGZuKSB7XHJcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBmbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZCgpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMuX3VybCxcclxuICAgICAgICAgICAgdHlwZTogdGhpcy5fbWV0aG9kLFxyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLl9kYXRhLFxyXG4gICAgICAgICAgICBlcnJvcjogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEhcmVzcG9uc2UucmVzcG9uc2VKU09OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IocmVzcG9uc2UucmVzcG9uc2VKU09OKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogdGhpcy5fc3VjY2VzcyxcclxuICAgICAgICAgICAgY29tcGxldGU6IHRoaXMuX2NvbXBsZXRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBCYXNlIGVycm9yIGhhbmRsZXJcclxuICpcclxuICogQHBhcmFtIHJlc3BvbnNlXHJcbiAqL1xyXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVkaXJlY3QgdG8gdGhlIHJvdXRlXHJcbiAgICAgKi9cclxuICAgIGlmICghIXJlc3BvbnNlLnJvdXRlKSB7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJvdXRlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgbWFpbiBlcnJvciBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGlmICghIXJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgICBub3RpZnlFcnJvcihyZXNwb25zZS5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgYWxsIG1lc3NhZ2VzXHJcbiAgICAgKi9cclxuICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2UuZXJyb3JzKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXNwb25zZS5lcnJvcnNba2V5XS5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9SZXF1ZXN0QnVpbGRlcic7XHJcbiIsImltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XHJcblxyXG4vKipcclxuICogQmFzZSBlcnJvciBoYW5kbGVyXHJcbiAqXHJcbiAqIEBwYXJhbSByZXNwb25zZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvKipcclxuICAgICAqIFNob3cgbWFpbiBlcnJvciBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGlmICghIXJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgICBub3RpZnlTdWNjZXNzKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9tb2RhbCc7XHJcbmltcG9ydCAnLi9vYnNlcnZlcic7XHJcbmltcG9ydCAnLi9odHRwJztcclxuIiwiY29uc3QgbW9kYWxzQ29udGFpbmVyID0gJCgnYm9keScpO1xyXG5cclxuY29uc3QgTU9EQUxfU0laRVMgPSB7XHJcbiAgICBzbTogJ21vZGFsLXNtJyxcclxuICAgIG1kOiAnbW9kYWwtbWQnLFxyXG4gICAgbGc6ICdtb2RhbC1sZycsXHJcbn07XHJcblxyXG4vKipcclxuICogVW5pcXVlIGluZGV4IG9mIHRoZSBtb2RhbFxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cclxubGV0IG1vZGFsSW5kZXggPSAwO1xyXG5cclxuLyoqXHJcbiAqIENvdW50ZXIgb2YgdGhlIG1vZGFscyBhdCB0aGUgcGFnZVxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cclxubGV0IG1vZGFsQ291bnRlciA9IDA7XHJcblxyXG4vKipcclxuICogTW9kYWwgQnVpbGRlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIG1vZGFsSW5kZXgrKztcclxuICAgICAgICB0aGlzLl9pZCA9ICdtb2RhbHMtY29udGFpbmVyLWl0ZW0tJyArIG1vZGFsSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZShzaXplKSB7XHJcbiAgICAgICAgaWYgKCEhTU9EQUxfU0laRVNbc2l6ZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IE1PREFMX1NJWkVTW3NpemVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyKGhlYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2hlYWRlciA9IGhlYWRlcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYm9keShib2R5KSB7XHJcbiAgICAgICAgdGhpcy5fYm9keSA9IGJvZHk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZvb3Rlcihmb290ZXIpIHtcclxuICAgICAgICB0aGlzLl9mb290ZXIgPSBmb290ZXI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGFzZXQoZGF0YXNldCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFzZXQgPSBkYXRhc2V0O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRTaXplKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX3NpemUgPyB0aGlzLl9zaXplIDogTU9EQUxfU0laRVMubWQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEhlYWRlcigpIHtcclxuICAgICAgICBpZiAoISF0aGlzLl9oZWFkZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiR7dGhpcy5faGVhZGVyfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEZvb3RlcigpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBpZiAoISF0aGlzLl9mb290ZXIpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJChgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPjwvZGl2PmApXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCQoYFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgYCkpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2Zvb3Rlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEJvZHkoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgaWYgKCEhdGhpcy5fYm9keSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAkKGA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPjwvZGl2PmApXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2JvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGJlZm9yZSBidWlsZCBtb2RhbFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBiZWZvcmVCdWlsZChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfYmVmb3JlQnVpbGQoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBhZnRlciBidWlsZCBtb2RhbFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBhZnRlckJ1aWxkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX2FmdGVyQnVpbGQoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGwgYWZ0ZXIgY2xvc2UgbW9kYWxcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgb25DbG9zZShjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkNsb3NlKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25DbG9zZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vZGFsKGNvbnRlbnQpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEYXRhIGF0dHJpYnV0ZXNcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGRhdGFzZXQgPSBbXTtcclxuICAgICAgICBpZiAoISF0aGlzLl9kYXRhc2V0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5fZGF0YXNldCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YXNldC5wdXNoKGBkYXRhLSR7bmFtZX09XCIke3RoaXMuX2RhdGFzZXRbbmFtZV19XCJgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGh0bWwgPSAkKGBcclxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7IHRoaXMuX2dldElEKCkgfVwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAke2RhdGFzZXQuam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkICR7dGhpcy5fZ2V0U2l6ZSgpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YCk7XHJcblxyXG4gICAgICAgIGlmICghIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5KGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbCB0aGUgYmVmb3JlQnVpbGQgY2FsbGJhY2tcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZCgpO1xyXG5cclxuICAgICAgICBodG1sLmZpbmQoJy5tb2RhbC1jb250ZW50JylcclxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9nZXRIZWFkZXIoKSlcclxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9nZXRCb2R5KCkpXHJcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0Rm9vdGVyKCkpO1xyXG5cclxuICAgICAgICBodG1sLmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG5cclxuICAgICAgICBodG1sLmZpbmQoJy5kYXRlcGlja2VyJylcclxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxyXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWluVmlldzogJzInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnRhYmxlc3RpY2t5aGVhZGVyJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIG1vZGFsc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGwgdGhlIGFmdGVyQnVpbGQgY2FsbGJhY2tcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9hZnRlckJ1aWxkKCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHVwZGF0ZSBjb3VudGVyIG9mIG1vZGFscyBhdCB0aGUgcGFnZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1vZGFsQ291bnRlcisrO1xyXG5cclxuICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXHJcbiAgICAgICAgICAgIC5vbignaGlkZGVuLmJzLm1vZGFsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWxDb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9mZignaGlkZGVuLmJzLm1vZGFsJylcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIENhbGwgdGhlIG9uQ2xvc2UgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25DbG9zZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubW9kYWwoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBjb3VudGVyIG9mIG1vZGFscyBhdCB0aGUgcGFnZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGFsQ291bnRlcigpIHtcclxuICAgIHJldHVybiBtb2RhbENvdW50ZXI7XHJcbn1cclxuIiwiaW1wb3J0ICcuL01vZGFsQnVpbGRlcidcclxuaW1wb3J0ICcuL21vZGFsQ29uZmlybSdcclxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIE1vZGFsIGNvbmZpcm1cclxuICpcclxuICogQHBhcmFtIG1lc3NhZ2VcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW9kYWxDb25maXJtKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XHJcbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcclxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcclxuICAgICAgICAuaGVhZGVyKG1lc3NhZ2UpXHJcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XHJcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1zdWNjZXNzJyxcclxuICAgICAgICAgICAgJ3RleHQnOiAnQ29uZmlybScsXHJcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxyXG4gICAgICAgICAgICAnY2xpY2snOiBjYWxsYmFja1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5tb2RhbCgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBOb3RpZnkgaGVscGVyXHJcbiAqXHJcbiAqIEBwYXJhbSBtZXNzYWdlXHJcbiAqIEBwYXJhbSB0eXBlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3RpZnkobWVzc2FnZSwgdHlwZSkge1xyXG4gICAgJC5ub3RpZnkoe21lc3NhZ2U6IG1lc3NhZ2V9LHtcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIHpfaW5kZXg6IDEwNTFcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBub3RpZnkgZnJvbSBcIi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIG5vdGlmeShtZXNzYWdlLCAnZGFuZ2VyJyk7XHJcbn1cclxuIiwiaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgbm90aWZ5KG1lc3NhZ2UsICdzdWNjZXNzJyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEV2ZW50IG9ic2VydmVyXHJcbiAqL1xyXG5jbGFzcyBFdmVudE9ic2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlIChldmVudCwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuX2xvZygnc3Vic2NyaWJlJywgZXZlbnQpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCAoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9sb2coJ2Rpc3BhdGNoJywgZXZlbnQpO1xyXG5cclxuICAgICAgICBpZiAoISF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5mb3JFYWNoKGhhbmRsZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcihkYXRhLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSAoZXZlbnQsIHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nKCd1bnN1YnNjcmliZScsIGV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKCEhdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgaWYoISFzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5maWx0ZXIoaGFuZGxlciA9PiBoYW5kbGVyICE9PSBzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIERlbGV0ZSBhbGwgc3Vic2NyaWJlcnNcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2xvZyhtZXRob2QsIGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWV0aG9kLnRvVXBwZXJDYXNlKCksICc6JywgJ1snLCBldmVudCwgJ10nKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgRXZlbnRPYnNlcnZlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXI7XHJcbiIsImltcG9ydCAnLi9FdmVudE9ic2VydmVyJztcclxuIiwiLyoqXHJcbiAqIFNhdmVkIGl0ZW0gbm90IGZvdW5kXHJcbiAqXHJcbiAqIFVzaW5nIGluIGZhc3RTYXZlIGhhbmRsZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTYXZlZEl0ZW1Ob3RGb3VuZCBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnU2F2ZWRJdGVtTm90Rm91bmQnO1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcblxyXG4vKipcclxuICogQWRkIGVtYmVkIGVsZW1lbnRcclxuICpcclxuICogQHBhcmFtIGVcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0YXJnZXQnKTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgaWRQbGFjZWhvbGRlciA9IGN1cnJlbnRCdXR0b24uZGF0YSgnaWRwbGFjZXBvbGRlcicpO1xyXG5cclxuICAgIGxldCByb3dJZCA9IGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnKTtcclxuICAgIGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnLCArK3Jvd0lkKTtcclxuXHJcbiAgICBsZXQgZW1iZWRGb3JtID0gJCgnIycrIHRlbXBsYXRlKS5odG1sKCk7XHJcbiAgICBjb25zdCBlbWJlZEJsb2NrSWQgPSByb3dJZCArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSkudG9TdHJpbmcoMTYpO1xyXG4gICAgZW1iZWRGb3JtID0gZW1iZWRGb3JtLnJlcGxhY2UoLyVlbWJlZEJsb2NrSWQlL2csIGVtYmVkQmxvY2tJZCk7XHJcblxyXG4gICAgaWYgKCEhaWRQbGFjZWhvbGRlcikge1xyXG4gICAgICAgIGVtYmVkRm9ybSA9IGVtYmVkRm9ybS5yZXBsYWNlKCBuZXcgUmVnRXhwKGlkUGxhY2Vob2xkZXIsIFwiZ1wiKSwgcm93SWQpXHJcbiAgICB9XHJcblxyXG4gICAgJCgnIycgKyB0YXJnZXQpLmFwcGVuZChlbWJlZEZvcm0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgZGlzcGF0Y2hcclxuICAgICAqL1xyXG4gICAgY29uc3QgZXZlbnQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ2V2ZW50Jyk7XHJcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZXZlbnQsIHtcclxuICAgICAgICAgICAgZW1iZWRCbG9ja0lkOiBlbWJlZEJsb2NrSWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY3VycmVudEJ1dHRvbi50cmlnZ2VyKCdhaV9hbmltYXRpb24nKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqQWpheCBwYWdpbmF0aW9uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gJCh0aGlzKS5wYXJlbnRzKCcuYWpheC1wYWdpbmF0aW9uJykuZGF0YSgnY29udGFpbmVyJyk7XHJcbiAgIFxyXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxyXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAkKCcjJyArIGNvbnRhaW5lcikucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xyXG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBPcGVuIGNvbmZpcm0gbW9kYWwgYmVmb3JlIGFjdGlvblxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmhyZWY7XHJcbiAgICBjb25zdCBwYXJlbnRCdXR0b24gPSAkKHRoaXMpO1xyXG5cclxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxyXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxyXG4gICAgICAgIC5oZWFkZXIoZGF0YVNldC5oZWFkZXIpXHJcbiAgICAgICAgLmZvb3RlcihcclxuICAgICAgICAgICAgJCgnPGJ1dHRvbi8+Jywge1xyXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogKGRhdGFTZXQuYnRuQ2xhc3MgfHwgJ2J0bi1zbSBidG4tc3VjY2VzcycpICsgJyBidG4nLFxyXG4gICAgICAgICAgICAgICAgJ3RleHQnOiBkYXRhU2V0LmJ0bk5hbWUgfHwgJ0NvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgJ2NsaWNrJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhU2V0Lmhhc093blByb3BlcnR5KCd3aXRoRm9ybScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBwYXJlbnRCdXR0b24uY2xvc2VzdCgnZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXcgaHR0cCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZXRob2QoZGF0YVNldC5tZXRob2QgfHwgJ2dldCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWRhdGFTZXQuZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChkYXRhU2V0LmV2ZW50LCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRhdGFTZXQucmVsb2FkKSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRhU2V0LmRpc21pc3MpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLm1vZGFsKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcclxuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xyXG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gY3VycmVudEJ0bi5jbG9zZXN0KCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcclxuXHJcbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXHJcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghIWRhdGFTZXQuZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZGF0YShnZXRGb3JtRGF0YShzYXZlZEl0ZW0pKVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XHJcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xyXG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xyXG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9TRUxFQ1RPUiA9ICcuZmFzdC1zYXZlLXBhZ2UtY29udGFpbmVyJztcclxuZXhwb3J0IGNvbnN0IFBBR0VfU0FWRUQgPSAnUEFHRV9TQVZFRCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU0FWRV9BTExfQlVUVE9OID0gJ1VQREFURV9TQVZFX0FMTF9CVVRUT04nO1xyXG5cclxuLyoqXHJcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXHJcbiAqXHJcbiAqIEBwYXJhbSBlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcclxuICAgIGNvbnN0IHNhdmVkSXRlbSA9ICQoQ09OVEFJTkVSX1NFTEVDVE9SKTtcclxuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XHJcblxyXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xyXG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XHJcblxyXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcclxuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICghIWRhdGFTZXQuZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIGZvcm0ncyBlbGVtZW50cyBhcyBjaGFuZ2VkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQoKSB7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbn1cclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0ZUZvcm1hdCA9ICdZWVlZLU1NLUREJztcclxuICAgIGNvbnN0IGRhdGVSYW5nZUlucHV0cyA9ICQoJyNkYXRlLXJhbmdlLWlucHV0cycpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSAkKCcjZGF0ZS1yYW5nZS1zZWxlY3QnKS5maW5kKCc6c2VsZWN0ZWQnKTtcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZGF0ZVJhbmdlSW5wdXRzLmZpbmQoJy5maWx0ZXItZnJvbScpO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZGF0ZVJhbmdlSW5wdXRzLmZpbmQoJy5maWx0ZXItdG8nKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRPcHRpb24udmFsKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgZGF0ZVJhbmdlSW5wdXRzLmNzcyh7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdpbml0aWFsJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bydcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0ZVJhbmdlSW5wdXRzLmNzcyh7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGVGcm9tVmFsdWUgPSAnJztcclxuICAgICAgICBsZXQgZGF0ZVRvVmFsdWUgICA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlICd0b2RheSc6XHJcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gZGF0ZVRvVmFsdWUgPSBtb21lbnQoKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAneWVzdGVyZGF5JzpcclxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBkYXRlVG9WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXknKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY3VycmVudC13ZWVrJzpcclxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5kYXkoMSkuZm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLmRheSg3KS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMtd2Vlayc6XHJcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuZGF5KC02KS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZGF5KDApLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjdXJyZW50LW1vbnRoJzpcclxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5zdGFydE9mKCdtb250aCcpLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5lbmRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMtbW9udGgnOlxyXG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsYXN0LXNldmVuJzpcclxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5JykuZm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsYXN0LXRoaXJ0eSc6XHJcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXknKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRlRnJvbS52YWwoZGF0ZUZyb21WYWx1ZSk7XHJcbiAgICAgICAgZGF0ZVRvLnZhbChkYXRlVG9WYWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2Zhc3RTYXZlXCI7XHJcbmltcG9ydCBhZGRFbWJlZCBmcm9tIFwiLi9hZGRFbWJlZFwiO1xyXG5pbXBvcnQgcmVtb3ZlRW1iZWQgZnJvbSBcIi4vcmVtb3ZlRW1iZWRcIjtcclxuaW1wb3J0IHN1Ym1pdEZvcm0gZnJvbSBcIi4vc3VibWl0Rm9ybVwiO1xyXG5pbXBvcnQgYWpheFBhZ2luYXRpb24gZnJvbSBcIi4vYWpheFBhZ2luYXRpb25cIjtcclxuaW1wb3J0IGNvbmZpcm1Nb2RhbCBmcm9tIFwiLi9jb25maXJtTW9kYWxcIjtcclxuaW1wb3J0IHBhZ2VMaW1pdCBmcm9tIFwiLi9wYWdlTGltaXRcIjtcclxuaW1wb3J0IG1vZGFsRGF0YSBmcm9tIFwiLi9tb2RhbERhdGFcIjtcclxuaW1wb3J0IGZpbHRlckRhdGVSYW5nZSBmcm9tIFwiaGFuZGxlcnMvZmlsdGVyRGF0ZVJhbmdlXCI7XHJcbmltcG9ydCBmYXN0U2F2ZVBhZ2UsIHtDT05UQUlORVJfU0VMRUNUT1IsIG1hcmtDaGFuZ2VkfSBmcm9tIFwiLi9mYXN0U2F2ZVBhZ2VcIjtcclxuaW1wb3J0IHRhYmxlU29ydGVyIGZyb20gXCJ0YWJsZXNvcnRlclwiO1xyXG5pbXBvcnQgc3RpY2t5SGVhZGVycyBmcm9tIFwic3RpY2t5LXRhYmxlLWhlYWRlcnNcIjtcclxuaW1wb3J0ICd0YWJsZXNvcnRlci9kaXN0L2Nzcy90aGVtZS5kZWZhdWx0Lm1pbi5jc3MnO1xyXG5cclxuJChkb2N1bWVudClcclxuICAgIC5zY3JvbGwoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzAwKSB7XHJcbiAgICAgICAgICAgICQoJy52aXNpdC1zdGF0cycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oZWlnaHQoMCkuY3NzKCdkaXNwbGF5JywgJ3RhYmxlLWNvbHVtbi1ncm91cCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcudmlzaXQtc3RhdHMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0YWJsZXNvcnRlciA9ICQoJy50YWJsZXNvcnRlcicpO1xyXG4gICAgICAgIGlmKHRhYmxlc29ydGVyKSB7XHJcbiAgICAgICAgICAgIHRhYmxlc29ydGVyLnRhYmxlc29ydGVyKCkuc3RpY2t5VGFibGVIZWFkZXJzKCk7XHJcbiAgICAgICAgICAgIHRhYmxlc29ydGVyLmZpbmQoJ3RoZWFkJykuY3NzKCdiYWNrZ3JvdW5kJywgJyNmZmYnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIG1vZGFsIHdpdGggZGF0YSBmcm9tIHNlcnZlciBieSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFqYXgtbW9kYWwtYWN0aW9uJywgbW9kYWxEYXRhKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbiBjb25maXJtIG1vZGFsXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24nLCBjb25maXJtTW9kYWwpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFqYXgtc3VibWl0LWFjdGlvbicsIHN1Ym1pdEZvcm0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFqYXgtcGFnaW5hdGlvbiBhJywgYWpheFBhZ2luYXRpb24pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgZW1iZWQgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtZW1iZWQnLCBhZGRFbWJlZClcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBlbWJlZCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnJtLWVtYmVkJywgcmVtb3ZlRW1iZWQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGYXN0IHNhdmUgdGhlIGRhdGEgb2YgYW4gZW50aXR5XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmZhc3Qtc2F2ZScsIGZhc3RTYXZlKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHBhZ2UgbGltaXRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnBhZ2UtbGltaXQnLCBwYWdlTGltaXQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgYCR7Q09OVEFJTkVSX1NFTEVDVE9SfSBpbnB1dCwgJHtDT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtDT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWQpXHJcblxyXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgZGF0ZVJhbmdlID0gJCgnI2RhdGUtcmFuZ2Utc2VsZWN0Jyk7XHJcbiAgICAgICAgaWYgKGRhdGVSYW5nZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZmlsdGVyRGF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgIGRhdGVSYW5nZS5jaGFuZ2UoZmlsdGVyRGF0ZVJhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTdGlja3koKSB7XHJcbiAgICAkKCcudGFibGVzb3J0ZXInKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcclxufVxyXG5cclxuJChcIi50YWJsZS1yZXNwb25zaXZlXCIpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICBpbml0U3RpY2t5KCk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBwYWdlXHJcbiAqL1xyXG4kKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljayhmYXN0U2F2ZVBhZ2UpO1xyXG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xyXG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBPcGVuIG1vZGFsIHdpdGggZm9ybSBieSByZXF1ZXN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcclxuXHJcbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXHJcbiAgICAgICAgLm1ldGhvZCh0aGlzLmRhdGFzZXQubWV0aG9kIHx8ICdnZXQnKVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgbmV3IE1vZGFsQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAuc2l6ZShTSVpFUy5sZylcclxuICAgICAgICAgICAgICAgIC5kYXRhc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICByZWxvYWQ6IHRoaXMuZGF0YXNldC5yZWxvYWQgfHwgMSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyKHRoaXMuZGF0YXNldC5oZWFkZXIpXHJcbiAgICAgICAgICAgICAgICAuYWZ0ZXJCdWlsZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5ldmVudCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub25DbG9zZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmNsb3NlRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmNsb3NlRXZlbnQsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1vZGFsKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBTZXQgcGFnZSBsaW1pdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBocmVmID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICBocmVmLnNlYXJjaFBhcmFtcy5zZXQoJ3BhZ2VfbGltaXQnLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIGhyZWYuc2VhcmNoUGFyYW1zLmRlbGV0ZSgncGFnZScpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmLnRvU3RyaW5nKCk7XHJcbn1cclxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgcGFyZW50ID0gISF0aGlzLmRhdGFzZXQucGFyZW50ID8gJCh0aGlzKS5jbG9zZXN0KHRoaXMuZGF0YXNldC5wYXJlbnQpIDogJCh0aGlzKS5wYXJlbnQoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGF0YXNldC5pZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXHJcbiAgICAgICAgLnNpemUoU0laRVMuc20pXHJcbiAgICAgICAgLmhlYWRlcignQXJlIHlvdSBzdXJlPycpXHJcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XHJcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInLFxyXG4gICAgICAgICAgICAndGV4dCc6ICdEZWxldGUnLFxyXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcclxuICAgICAgICAgICAgJ2NsaWNrJzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSlcclxuICAgICAgICAubW9kYWwoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7Z2V0TW9kYWxDb3VudGVyfSBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5cbi8qKlxuICogU3VibWl0IGZvcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnU0VORCcpO1xuXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAuZGF0YShjdXJyZW50QnV0dG9uLmNsb3Nlc3QoJ2Zvcm0nKS5zZXJpYWxpemVBcnJheSgpKVxuICAgICAgICAubWV0aG9kKHRoaXMuZGF0YXNldC5tZXRob2QgfHwgJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmICghIXRoaXMuZGF0YXNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSAhPT0gJ2Vycm9yJyAmJiBjYW5SZWxvYWQodGhpcykpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuZGF0YXNldC5kaXNtaXNzKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocmVzcG9uc2UudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNvbXBsZXRlKHIgPT4ge1xuICAgICAgICAgICAgaWYoci5yZXNwb25zZUpTT04uaGFzT3duUHJvcGVydHkoJ3JlcG9ydF9pbWFnZScpKSB7XG4gICAgICAgICAgICAgICAgJCgnI3JlcG9ydF9wYXRoJykudmFsKHIucmVzcG9uc2VKU09OLnJlcG9ydF9pbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2FuIHJlbG9hZCB0aGUgcGFnZVxuICpcbiAqIEBwYXJhbSBidXR0b25cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjYW5SZWxvYWQoYnV0dG9uKSB7XG4gICAgaWYgKHBhcnNlSW50KGJ1dHRvbi5kYXRhc2V0LnJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgaWYgKGdldE1vZGFsQ291bnRlcigpIDwgMikge1xuICAgICAgICAgICAgY29uc3QgZGF0YVJlbG9hZCA9ICQoYnV0dG9uKS5jbG9zZXN0KCcubW9kYWwnKS5kYXRhKCdyZWxvYWQnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVJlbG9hZCA9PT0gdHlwZW9mIHVuZGVmaW5lZCB8fCBkYXRhUmVsb2FkID09PSBmYWxzZSB8fCBwYXJzZUludChkYXRhUmVsb2FkKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGdldFN1YkZvbGRlciBmcm9tIFwiLi9nZXRTdWJGb2xkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBHZXQgZmlsZSBwYXRoIGZyb20gc3RvcmFnZSB3aXRoIHN1YiBmb2xkZXJzXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByb290Rm9sZGVyIFJvb3QgZm9sZGVyIGluIHRoZSBzdG9yYWdlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAgIEZpbGUgbmFtZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJvb3RGb2xkZXIsIGZpbGVOYW1lKSB7XHJcbiAgICByZXR1cm4gJy9zdG9yYWdlLycgKyByb290Rm9sZGVyICsgJy8nICsgZ2V0U3ViRm9sZGVyKGZpbGVOYW1lKSArICcvJyArIGZpbGVOYW1lO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBHZXQgZm9ybSBkYXRhXHJcbiAqXHJcbiAqIEBwYXJhbSB7alF1ZXJ5fSBmb3JtIEZvcm0gZWxlbWVudFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7e319XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xyXG5cclxuICAgIGxldCBmb3JtSXRlbXMgPSBmb3JtLmZpbmQoJ2lucHV0LCBzZWxlY3QnKTtcclxuICAgIGlmICghZm9ybUl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGZvcm1JdGVtcyA9IGZvcm07XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybUl0ZW1zLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gJCh0aGlzKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRJdGVtLmF0dHIoJ3R5cGUnKSkge1xyXG4gICAgICAgICAgICBjYXNlICdyYWRpbyc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhW2N1cnJlbnRJdGVtLmF0dHIoJ25hbWUnKV0gPSAhIWN1cnJlbnRJdGVtLnByb3AoIFwiY2hlY2tlZFwiICkgKiAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVtjdXJyZW50SXRlbS5hdHRyKCduYW1lJyldID0gY3VycmVudEl0ZW0udmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xyXG59XHJcbiIsImltcG9ydCBtZDUgZnJvbSAnYmx1ZWltcC1tZDUnO1xyXG5cclxuLyoqXHJcbiAqIEdldCBzdWIgZm9sZGVycyBvZiB0aGUgZmlsZVxyXG4gKlxyXG4gKiBSZXN1bHQgb2YgdGhlIGZ1bmN0aW9uIGxvb2tzIGxpa2U6IGExL2IyL2MzXHJcbiAqIFdoZXJlIG1kNSBvZiB0aGUgZmlsZSA9IGExYjJjMy4uLi4uLi4uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiB0aGUgZmlsZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBmaWxlTmFtZUhhc2ggPSBtZDUoZmlsZU5hbWUpLnN1YnN0cmluZygwLCA2KTtcclxuICAgIGNvbnN0IHBhdGhQYXJ0cyA9IGZpbGVOYW1lSGFzaC5tYXRjaCgvLnsxLDJ9L2cpO1xyXG4gICAgcmV0dXJuIHBhdGhQYXJ0cy5qb2luKCcvJyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIGpRdWVyeVxyXG4gKi9cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcclxud2luZG93LiQgPSAkO1xyXG53aW5kb3cualF1ZXJ5ID0gJDtcclxuXHJcbi8qKlxyXG4gKiBCb290c3RyYXBcclxuICovXHJcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwJztcclxuXHJcbi8qKlxyXG4gKiBCb290c3RyYXAgQ2NvbG9ycGlja2VyXHJcbiAqL1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC1jb2xvcnBpY2tlcic7XHJcbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyL2Rpc3QvY3NzL2Jvb3RzdHJhcC1jb2xvcnBpY2tlci5jc3MnO1xyXG5cclxuLyoqXHJcbiAqIEZvbnQgQXdlc29tZVxyXG4gKi9cclxuaW1wb3J0ICdmb250LWF3ZXNvbWUvc2Nzcy9mb250LWF3ZXNvbWUuc2Nzcyc7XHJcblxyXG4vKipcclxuICogRXh0ZXJuYWwgbW9kdWxlc1xyXG4gKiBUT0RPOiBnZXQgYnkgbnBtXHJcbiAqL1xyXG5pbXBvcnQgJy4vdmVuZG9yL2FuaW1hdGUnO1xyXG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1jb25maXJtYXRpb24nO1xyXG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlcic7XHJcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLW5vdGlmeSc7XHJcbmltcG9ydCAnLi92ZW5kb3Ivc2VsZWN0Mic7XHJcbmltcG9ydCAnLi92ZW5kb3IvZWtrby1saWdodGJveCc7XHJcbmltcG9ydCAnLi92ZW5kb3IvdGhlbWUnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudHNcclxuICovXHJcbmltcG9ydCAnLi9jb21wb25lbnRzJztcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVyc1xyXG4gKi9cclxuaW1wb3J0ICcuL2hhbmRsZXJzJztcclxuXHJcbi8qKlxyXG4gKiBTdHlsZXNcclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XHJcblxyXG4vKipcclxuICogTW9kdWxlcyBsb2FkZXJcclxuICovXHJcbmNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xyXG5pZiAocGF0aC5sZW5ndGggPiAxKSB7XHJcbiAgICAvKipcclxuICAgICAqIFRvIGNyZWF0aW5nIGRpZmZlcmVudCBmaWxlcyBmb3IgZWFjaCBtb2R1bGVcclxuICAgICAqIChEb24ndCBmb3JnZXQgbnBtIGkgLS1zYXZlLWRldiBidW5kbGUtbG9hZGVyKVxyXG4gICAgICogY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnYnVuZGxlLWxvYWRlciFtb2R1bGVzJywgdHJ1ZSwgL2luZGV4XFwuanMkLyk7XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG1vZHVsZXMgPSByZXF1aXJlLmNvbnRleHQoJ21vZHVsZXMnLCB0cnVlLCAvXFwuXFwvW1xcdy1fXStcXC9tb2R1bGVcXC5qcyQvKTtcclxuICAgIG1vZHVsZXMua2V5cygpLm1hcChtb2R1bGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZUl0ZW1zID0gbW9kdWxlLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgICAgIGlmIChtb2R1bGVJdGVtc1sxXSA9PT0gcGF0aFsxXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTU9EVUxFOicsIHBhdGhbMV0pO1xyXG4gICAgICAgICAgICBtb2R1bGVzKG1vZHVsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3ViTW9kdWxlcyA9IHJlcXVpcmUuY29udGV4dCgnbW9kdWxlcycsIHRydWUsIC9tb2R1bGVzKC4qKW1vZHVsZVxcLmpzJC8pO1xyXG4gICAgc3ViTW9kdWxlcy5rZXlzKCkubWFwKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlSXRlbXMgPSBtb2R1bGUuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgaWYgKG1vZHVsZUl0ZW1zWzFdID09PSBwYXRoWzFdICYmIG1vZHVsZUl0ZW1zWzNdID09PSBwYXRoWzJdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUIgTU9EVUxFOicsIHBhdGhbMl0pO1xyXG4gICAgICAgICAgICBzdWJNb2R1bGVzKG1vZHVsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtBV0FSRF9DUkVBVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge0FXQVJEX0NSRUFURUR9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIHNlbGYpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcclxuICAgICAgICBjb25zdCBlZGl0QnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZClcclxuICAgICAgICAgICAgLmh0bWwoKVxyXG4gICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCh0aGlzLmRhdGFzZXQudGVtcGxhdGVQbGFjZWhvbGRlciwgXCJnXCIpLCBkYXRhLmF3YXJkX2lkKVxyXG4gICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJWZpZWxkX25hbWUlJywgXCJnXCIpLCB0aGlzLmRhdGFzZXQuZmllbGROYW1lIHx8ICcnKTtcclxuXHJcbiAgICAgICAgY3VycmVudEJ0bi5wYXJlbnQoKS5hcHBlbmQoZWRpdEJ0bik7XHJcbiAgICAgICAgY3VycmVudEJ0bi5yZW1vdmUoKTtcclxuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBV0FSRF9DUkVBVEVELCBkYXRhKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7QVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3JlYXRlQnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZCkuaHRtbCgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCclZmllbGRfbmFtZSUnKSwgdGhpcy5kYXRhc2V0LmZpZWxkTmFtZSB8fCAnJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XHJcblxyXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbigpLnJlbW92ZSgpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmQoY3JlYXRlQnRuKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XHJcbmltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogRHJvcHpvbmUgaW5pdCBhZnRlciB0aGUgbW9kYWwgb3BlbmVkXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoRVZFTlRfTkFNRSkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEVWRU5UX05BTUUsICgpID0+IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcm9wem9uZSBjb250YWluZXJcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZHJvcHpvbmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByZXZpZXcgVVJMIGhpZGRlbiBpbnB1dFxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBwcmV2aWV3VVJMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihkcm9wem9uZUVsZW1lbnQpXHJcbiAgICAgICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQudXJsKVxyXG4gICAgICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3ByZXZpZXctdXJsJykudmFsKCcnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhbmNlbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcjcHJldmlldy11cmwnKS52YWwoJycpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgcHJldmlld1VSTC52YWx1ZSA9IHJlc3BvbnNlLmZpbGVfbmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldCBwcmV2aWV3XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKHByZXZpZXdVUkwudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRyb3B6b25lQnVpbGRlclxyXG4gICAgICAgICAgICAgICAgLnNldFByZXZpZXcoXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld1VSTC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC5mb2xkZXIsIHByZXZpZXdVUkwudmFsdWUpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJvcHpvbmUgYnVpbGRcclxuICAgICAgICAgKi9cclxuICAgICAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge1VQREFURV9TQVZFX0FMTF9CVVRUT059IGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShVUERBVEVfU0FWRV9BTExfQlVUVE9OLCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNhdmVBbGxCdXR0b24gPSAkKCcjdXBkYXRlLWFsbCcpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSAkKCcjdXBkYXRlLWFsbCAuY291bnQnKTtcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXIuY2hhbmdlZCcpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHNhdmVBbGxCdXR0b24uc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNhdmVBbGxCdXR0b24uaGlkZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb3VudGVyLmh0bWwoY291bnQpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FjdGlvbi1sb2cvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2FjdGlvbi1sb2cvbW9kdWxlLmpzXCIsXG5cdFwiLi9hY3Rpb24tdHlwZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYWN0aW9uLXR5cGUvbW9kdWxlLmpzXCIsXG5cdFwiLi9hZGQtbWUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2FkZC1tZS9tb2R1bGUuanNcIixcblx0XCIuL2Fubm91bmNlbWVudHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9hc3NldHMtbG9nL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hc3NldHMtbG9nL21vZHVsZS5qc1wiLFxuXHRcIi4vYXNzZXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hc3NldHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9hd2FyZC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXdhcmQvbW9kdWxlLmpzXCIsXG5cdFwiLi9iYW5uZXIvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Jhbm5lci9tb2R1bGUuanNcIixcblx0XCIuL2Ntcy1hZHBzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtYWRwcy9tb2R1bGUuanNcIixcblx0XCIuL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jb2xsZWN0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vY3JvcC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY3JvcC9tb2R1bGUuanNcIixcblx0XCIuL2RhaWx5LWxvb3QvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RhaWx5LWxvb3QvbW9kdWxlLmpzXCIsXG5cdFwiLi9kZWZhdWx0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kZWZhdWx0L21vZHVsZS5qc1wiLFxuXHRcIi4vZGVwbG95L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kZXBsb3kvbW9kdWxlLmpzXCIsXG5cdFwiLi9kcGEvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RwYS9tb2R1bGUuanNcIixcblx0XCIuL2R5ZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZHllL21vZHVsZS5qc1wiLFxuXHRcIi4vZ2lmdC13cmFwL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9naWZ0LXdyYXAvbW9kdWxlLmpzXCIsXG5cdFwiLi9saW5rZWQtYXNzZXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vbG9jYWxpemF0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9sb2NhbGl6YXRpb24vbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWdpYy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qc1wiLFxuXHRcIi4vbWFrZXVwLWtpdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanNcIixcblx0XCIuL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qc1wiLFxuXHRcIi4vbWVhbC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWVhbC9tb2R1bGUuanNcIixcblx0XCIuL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9tb2R1bGUuanNcIixcblx0XCIuL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9uZXdzLWdpZnRzLWxvZy9tb2R1bGUuanNcIixcblx0XCIuL3Byb2R1Y3QvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Byb2R1Y3QvbW9kdWxlLmpzXCIsXG5cdFwiLi9wdXJjaGFzZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvcHVyY2hhc2UvbW9kdWxlLmpzXCIsXG5cdFwiLi9zZXR0aW5ncy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9tb2R1bGUuanNcIixcblx0XCIuL3Nob3AtcmVsZWFzZXMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3AtcmVsZWFzZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLXN0YXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vc291bmQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NvdW5kL21vZHVsZS5qc1wiLFxuXHRcIi4vc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zdWJ0eXBlLWF0dHJpYnV0ZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi90YW1hdG9vbC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdGFtYXRvb2wvbW9kdWxlLmpzXCIsXG5cdFwiLi91c2Vycy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdXNlcnMvbW9kdWxlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbW9kdWxlcyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLlxcXFwvW1xcXFx3LV9dK1xcXFwvbW9kdWxlXFxcXC5qcyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL21vZHVsZXMgc3luYyByZWN1cnNpdmUgbW9kdWxlcyguKiltb2R1bGVcXFxcLmpzJFwiOyIsImltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtTSE9XX1JFUE9SVF9QQVRIfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5yZXBvcnRzJykuY3NzKCdwb2ludGVyLWV2ZW50cycsICdhdXRvJyk7XG4gICAgfSlcblxuICAgIC5vbignY2xpY2snLCAnI3JlcG9ydF9wYXRoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjcmVwb3J0X3BhdGgnKS5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgICAgICBub3RpZnlTdWNjZXNzKCdDb3BpZWQgdG8gYnVmZmVyIScpO1xuICAgIH0pXG5cbiAgICAub24oJ2NsaWNrJywgJyNwcm9kdWN0X2lkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjcHJvZHVjdF9pZCcpLnByZXYoJy5zZWxlY3QyLWNvbnRhaW5lcicpLmZpbmQoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKS5mb2N1cygpXG4gICAgfSlcblxuICAgIC5vbignY2xpY2snLCAnI3NlbmQtcmVwb3J0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKS5zdWJtaXQoKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcblxuICAgIC5vbignY2xpY2snLCAnLnJlcG9ydHMnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCgnI3NlbmQtcmVwb3J0JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgJCgnLnJlcG9ydHMnKS5jc3MoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcblxuICAgICAgICBsZXQgZGF0ZUZyb20gPSAkKCdbbmFtZT1cInRvZGF5W2Zyb21dXCJdJykudmFsKCk7XG4gICAgICAgIGxldCBkYXRlVG8gPSAkKCdbbmFtZT1cInRvZGF5W3RvXVwiXScpLnZhbCgpO1xuICAgICAgICBsZXQgY2FudmFzID0gJCgnI2NhbnZhcy1kYXRhJykudmFsKCk7XG4gICAgICAgIGxldCBkYXRhID0ge2Zyb206IGRhdGVGcm9tLCB0bzogZGF0ZVRvLCBjYW52YXM6IGNhbnZhc307XG4gICAgICAgIGxldCBjYW52YXNfaGFuZGxlciA9ICQoXCIjY2FudmFzX2hhbmRsZXJcIik7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICQodGhpcykuYXR0cignaHJlZicpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIGVycm9yOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5yZXBvcnRzJykuY3NzKCdwb2ludGVyLWV2ZW50cycsICdhdXRvJylcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhcmVzcG9uc2UucmVzcG9uc2VKU09OKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihyZXNwb25zZS5yZXNwb25zZUpTT04pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICAkKCcucmVwb3J0cycpLmNzcygncG9pbnRlci1ldmVudHMnLCAnYXV0bycpXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc19oYW5kbGVyLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLmhhc093blByb3BlcnR5KCdzdWNjZXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC10aXRsZScpLnRleHQoci5zdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1oZWFkZXInKS5jc3MoJ2JhY2tncm91bmQnLCAnI2E3ZmY4MycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcign0J/RgNC10LTQv9GA0L7RgdC80L7RgtGAINC+0YLRh9C10YLQsCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJvZHkocilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5yZXBvcnRzJykuY3NzKCdwb2ludGVyLWV2ZW50cycsICdhdXRvJylcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RQcm9jZXNzKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcG9zdFByb2Nlc3MoKSB7XG5cbiAgICAgICAgICAgIGxldCBzdWJtaXRCdG4gPSAkKCcjbG9hZCcpO1xuICAgICAgICAgICAgc3VibWl0QnRuLmRhdGEoJ2xvYWRpbmctdGV4dCcsICc8aSBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT4g0J/QvtC00LPQvtGC0L7QstC60LAnKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi5idXR0b24oJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9ICQoXCIuaHRtbC1jb250ZW50LWhvbGRlclwiKTtcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzX2hhbmRsZXIgPSAkKFwiI2NhbnZhc19oYW5kbGVyXCIpO1xuICAgICAgICAgICAgICAgIGNhbnZhc19oYW5kbGVyLmVtcHR5KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb3B5X2VsZSA9ICQoZWxlbWVudCkuZmluZCgnLndyYXBwZXInKS5nZXQoMCkuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIGNhbnZhc19oYW5kbGVyLmFwcGVuZChjb3B5X2VsZSk7XG4gICAgICAgICAgICAgICAgY2FudmFzX2hhbmRsZXIuY3NzKCdoZWlnaHQnLCBlbGVtZW50LnNjcm9sbEhlaWdodCArIDIwKTtcbiAgICAgICAgICAgICAgICBjYW52YXNfaGFuZGxlci5jc3MoJ21heC13aWR0aCcsIDc2MCk7XG4gICAgICAgICAgICAgICAgY2FudmFzX2hhbmRsZXIuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LmNzcygnbWFyZ2luLWJvdHRvbScsIDIwKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNzcygncGFkZGluZy1ib3R0b20nLCA0MCk7XG5cbiAgICAgICAgICAgICAgICBodG1sMmNhbnZhcyhjb3B5X2VsZSwge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxYOiAwLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxZOiAwLFxuICAgICAgICAgICAgICAgICAgICB1c2VDT1JTOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNhbnZhcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSBpbWFnZURhdGEucmVwbGFjZSgvXmRhdGE6aW1hZ2VcXC9wbmcvLCBcImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjY2FudmFzLWRhdGEnKS52YWwobmV3RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQuYXBwZW5kKGNhbnZhc19oYW5kbGVyLmh0bWwoKSlcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldCgwKS5hcHBlbmRDaGlsZChjYW52YXMpXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdG4uYnV0dG9uKCdyZXNldCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3NlbmQtcmVwb3J0JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgMzAwKVxuICAgICAgICB9XG5cbiAgICB9KTtcbiIsImV4cG9ydCBjb25zdCBBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCA9ICdBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCc7XHJcbmV4cG9ydCBjb25zdCBERUxUQV9USU1FX0FUVFJJQlVURSA9IDE5O1xyXG4iLCIvKipcclxuICogQ29sbGFwc2Ugc3RhdGVcclxuICpcclxuICogQHBhcmFtIGVcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgnLmFjdGlvbi10eXBlLXN0YXRlJyk7XHJcbiAgICBwYXJlbnQudG9nZ2xlQ2xhc3MoJ2Rvd24nKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENvbGxhcHNlIHN0YXRlc1xyXG4gKlxyXG4gKiBAcGFyYW0gZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCgnLmFjdGlvbi10eXBlLXN0YXRlJykudG9nZ2xlQ2xhc3MoJ2Rvd24nKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xyXG5pbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIFN0YXRlIG9mIHRoZSBBY3Rpb24gVHlwZVxyXG4gKiBhdCB0aGUgbW9kYWxcclxuICogd2l0aCBjb25maXJtXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50RWxlbWVudC5jbG9zZXN0KCcuYWN0aW9uLXR5cGUtc3RhdGUnKTtcclxuXHJcbiAgICBpZiAoIWN1cnJlbnRFbGVtZW50LmRhdGEoJ2lkJykpIHtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsIHt9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXHJcbiAgICAgICAgLnNpemUoU0laRVMuc20pXHJcbiAgICAgICAgLmhlYWRlcignQXJlIHlvdSBzdXJlPycpXHJcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XHJcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInLFxyXG4gICAgICAgICAgICAndGV4dCc6ICdEZWxldGUnLFxyXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcclxuICAgICAgICAgICAgJ2NsaWNrJzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3IFJlcXVlc3RCdWlsZGVyKGN1cnJlbnRFbGVtZW50LmRhdGEoJ3VybCcpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXRob2QoJ0RFTEVURScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3MoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLm1vZGFsKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7QUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUR9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBpbmRleGVzIG9mIHRoZSBzdGF0ZXNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDE7XHJcblxyXG4gICAgICAgICQoJy5pbmRleCcpLmVhY2goKF8sIGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgJChpdGVtKS52YWwoaW5kZXgrKyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB1cGRhdGVJbmRleGVzIGZyb20gXCIuL2xpc3RlbmVycy91cGRhdGVJbmRleGVzXCI7XHJcbmltcG9ydCBjb2xsYXBzZVN0YXRlIGZyb20gXCIuL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVcIjtcclxuaW1wb3J0IGNvbGxhcHNlU3RhdGVzIGZyb20gXCIuL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzXCI7XHJcbmltcG9ydCByZW1vdmVBY3Rpb25UeXBlU3RhdGUgZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlXCI7XHJcbmltcG9ydCB7REVMVEFfVElNRV9BVFRSSUJVVEV9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIGluZGV4ZXNcclxuICovXHJcbnVwZGF0ZUluZGV4ZXMoKTtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLm9uKCdjbGljaycsICcjcHJvZHVjdF9pZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJvZHVjdF9pZCcpO1xyXG4gICAgICAgICQoJyNwcm9kdWN0X2lkJykucHJldignLnNlbGVjdDItY29udGFpbmVyJykuZmluZCgnLnNlbGVjdDItc2VhcmNoX19maWVsZCcpLmZvY3VzKClcclxuICAgIH0pXHJcblxyXG4gICAgLm9uKCdjaGFuZ2UnLCAnW25hbWUkPVwiW3RpbWVfdHlwZV1cIl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudExpID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdXCJdJyk7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lRGlzcGxheSA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdW2Rpc3BsYXldXCJdJyk7XHJcblxyXG4gICAgICAgIGRlbHRhVGltZURpc3BsYXkudmFsKGRlbHRhVGltZUhpZGRlbi5kYXRhKCd2YWx1ZScpIC8gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSkpO1xyXG4gICAgfSlcclxuXHJcbiAgICAub24oJ2lucHV0JywgJ1tuYW1lJD1cIlthdHRyaWJ1dGVzXVsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVt2YWx1ZV1bZGlzcGxheV1cIl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudExpID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVUeXBlID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJykudmFsKCk7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lSGlkZGVuID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlthdHRyaWJ1dGVzXVsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVt2YWx1ZV1cIl0nKTtcclxuXHJcbiAgICAgICAgZGVsdGFUaW1lSGlkZGVuLnZhbCgkKHRoaXMpLnZhbCgpICogdGltZVR5cGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbGxhcHNlIG9uZSBzdGF0ZVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5jb2xsYXBzZS1saW5rJywgY29sbGFwc2VTdGF0ZSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbGxhcHNlIGFsbCBzdGF0ZXNcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1zdGF0ZXMnLCBjb2xsYXBzZVN0YXRlcylcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBzdGF0ZVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5ybS1hY3Rpb24tdHlwZS1zdGF0ZXMnLCByZW1vdmVBY3Rpb25UeXBlU3RhdGUpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcclxuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcclxuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvd1xyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLnNhdmUtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dFwiKSk7XHJcblxyXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcclxuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICBjb250YWluZXIuZmluZCgndHIuY2hhbmdlZCcpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0aGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnNhdmUtcGFnZScsIHNhdmVTdGF0ZSk7XHJcbiIsImV4cG9ydCBjb25zdCBBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSA9ICdBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSc7XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7QU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSwgc2VsZik7XHJcblxyXG4gICAgICAgICQoJy5kYXRldGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcclxuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXHJcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9DUkVBVEVELCBDTE9TRV9BV0FSRF9NT0RBTH0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XHJcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XHJcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgYW5ub3VuY2VtZW50XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZCh0aGlzKSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBhd2FyZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcykoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxyXG4gICAgICovXHJcbiAgICAucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQ0xPU0VfQVdBUkRfTU9EQUwsIChkYXRhLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4vKipcclxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cclxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXHJcbiAqL1xyXG4kKCcuc2hvdy1mb3JtJylcclxuICAgIC5jbGljayhzaG93Rm9ybSk7XHJcbiIsIlxyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAub24oJ2NsaWNrJywgJy50b2dnbGVfaWRzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykubmV4dCgpLmhlaWdodCgpID4gMCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgnSGlkZScsICdTaG93JykpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5oZWlnaHQoMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCQodGhpcykudGV4dCgpLnJlcGxhY2UoJ1Nob3cnLCAnSGlkZScpKTtcclxuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgnU2hvdycsICdIaWRlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLmhlaWdodCgnMTAwJScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcclxuICogU1VCX1RZUEVTIC0gaXQgaXMgYSBnbG9iYWwgb2JqZWN0XHJcbiAqIEluaXRlZCBpbiBhc3NldC9mb3JtLmJsYWRlLnBocFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgc2V0U3VidHlwZXModGhpcy52YWx1ZSwgdGhpcy5kYXRhc2V0LnN1YnR5cGUpO1xyXG59XHJcblxyXG5jb25zdCBhc3NldEZvcm1TdWJ0eXBlID0gJChcIiNzdWJ0eXBlXCIpO1xyXG5jb25zdCBhc3NldEZvcm1BY3Rpb25UeXBlID0gJCgnI2Fzc2V0LWZvcm0tYWN0aW9uLXR5cGUnKTtcclxuY29uc3QgYXNzZXRGb3JtQ29sbGVjdGlvbiA9ICQoJyNhc3NldC1mb3JtLWNvbGxlY3Rpb24nKTtcclxuY29uc3QgcHJpY2VzID0gJCgnLnByaWNlcycpO1xyXG5cclxuZnVuY3Rpb24gc2V0U3VidHlwZXModHlwZSwgc3VidHlwZSkge1xyXG4gICAgYXNzZXRGb3JtU3VidHlwZVxyXG4gICAgICAgIC5lbXB0eSgpXHJcbiAgICAgICAgLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICBkYXRhOiBTVUJfVFlQRVNbdHlwZV1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC52YWwoc3VidHlwZSlcclxuICAgICAgICAuY2hhbmdlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IHN0YXRlXHJcbiAgICAgKi9cclxuICAgIGhpZGUoYXNzZXRGb3JtQWN0aW9uVHlwZSk7XHJcbiAgICBoaWRlKGFzc2V0Rm9ybUNvbGxlY3Rpb24pO1xyXG4gICAgc2hvdyhwcmljZXMpO1xyXG5cclxuICAgIHN3aXRjaCAocGFyc2VJbnQodHlwZSkpIHtcclxuXHJcbiAgICAgICAgLy8gRnVybml0dXJlXHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBzaG93KGFzc2V0Rm9ybUFjdGlvblR5cGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gQ2xvdGhlc1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgc2hvdyhhc3NldEZvcm1Db2xsZWN0aW9uKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIEJvZHkgUGFydFxyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgaGlkZShwcmljZXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmFkZENsYXNzKCdoaWRlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3coZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG59IiwiLyoqXHJcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYXNzZXRzIGlkcyB0byBjbGlwYm9hcmRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5QXNzZXRzKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBhc3NldElkc0ZpZWxkID0gJCgndGV4dGFyZWFbbmFtZT1cImFzc2V0X2lkc1wiXScpO1xyXG4gICAgY29uc3Qgd2l0aE5hbWUgPSAkKCdpbnB1dFtuYW1lPVwid2l0aF9uYW1lXCJdJyk7XHJcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcclxuXHJcbiAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQoaXRlbSkpO1xyXG4gICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xyXG4gICAgICAgIGxldCBhc3NldE5hbWUgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LW5hbWUnKTtcclxuICAgICAgICBpZihhc3NldElkKSB7XHJcbiAgICAgICAgICAgIGlmKHdpdGhOYW1lLnByb3AoXCJjaGVja2VkXCIpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKCdcXG4nICsgYXNzZXRJZCArICcgJyArIGFzc2V0TmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICBpZiAoYXNzZXRJZHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XHJcbiAgICAgICAgICAgIGxldCBhc3NldE5hbWUgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LW5hbWUnKTtcclxuICAgICAgICAgICAgaWYoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYod2l0aE5hbWUucHJvcChcImNoZWNrZWRcIikgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goJ1xcbicgKyBhc3NldElkICsgJyAnICsgYXNzZXROYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzc2V0SWRzRmllbGQudmFsKGFzc2V0SWRzKTtcclxuICAgIGFzc2V0SWRzRmllbGQuc2VsZWN0KCk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhhbmRsZXIgZm9yIGRvd25sb2FkIGFzc2V0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkQXNzZXRzKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBhc3NldElkcyA9IFtdO1xyXG5cclxuICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJChpdGVtKSk7XHJcbiAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XHJcbiAgICAgICAgaWYoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgaWYgKGFzc2V0SWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xyXG4gICAgICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcclxuICAgICAgICAgICAgaWYoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB3aW5kb3cubG9jYXRpb24gPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJykgKyAnJmlkcz0nICsgYXNzZXRJZHMuam9pbignLCcpO1xyXG59XHJcbiIsImltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIG5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmhyZWYpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgJCgnI2NvbGxlY3Rpb24tbnVtYmVyJylcclxuICAgICAgICAgICAgICAgIC52YWwocmVzdWx0LmNvbGxlY3Rpb25faWQpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59IiwiaW1wb3J0IHtVUERBVEVfU0FWRV9BTExfQlVUVE9OfSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbi8qKlxyXG4gKiBNYXJrIGNoYW5nZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZCAoKSB7XHJcbiAgICBpZigkKHRoaXMpLmF0dHIoJ3R5cGUnKSAhPSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpO1xyXG4gICAgICAgIHBhcmVudENvbnRhaW5lci5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKFVQREFURV9TQVZFX0FMTF9CVVRUT04pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XHJcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XHJcbmltcG9ydCB1cGRhdGVTYXZlQWxsQnV0dG9uIGZyb20gXCJsaXN0ZW5lcnMvdXBkYXRlU2F2ZUFsbEJ1dHRvblwiO1xyXG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XHJcbmltcG9ydCBnZXRMYXN0Q29sbGVjdGlvbk51bWJlciBmcm9tIFwiLi9oYW5kbGVycy9nZXRMYXN0Q29sbGVjdGlvbk51bWJlclwiO1xyXG5pbXBvcnQge2NvcHlBc3NldHN9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBc3NldHNcIjtcclxuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0RFTEVURSwgQVdBUkRfQ1JFQVRFRCwgQ0xPU0VfQVdBUkRfTU9EQUx9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge21hcmtDaGFuZ2VkfSBmcm9tIFwiLi9oYW5kbGVycy9tYXJrQ2hhbmdlZFwiO1xyXG5pbXBvcnQge2Rvd25sb2FkQXNzZXRzfSBmcm9tIFwiLi9oYW5kbGVycy9kb3dubG9hZEFzc2V0c1wiO1xyXG5pbXBvcnQge1VQREFURV9TQVZFX0FMTF9CVVRUT059IGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcclxuaW1wb3J0IHtERUxUQV9USU1FX0FUVFJJQlVURX0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XHJcblxyXG4kKCcjYXNzZXRzLXRhYmxlJylcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZScsIGF3YXJkQ3JlYXRlKVxyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlJywgYXdhcmREZWxldGUpO1xyXG5cclxuJCgnI2Fzc2V0LWZvcm0tdHlwZScpXHJcbiAgICAuY2hhbmdlKGNoYW5nZVR5cGUpXHJcbiAgICAuY2hhbmdlKCk7XHJcblxyXG4kKCcjZ2V0LWxhc3QtY29sbGVjdGlvbi1udW1iZXInKS5jbGljayhnZXRMYXN0Q29sbGVjdGlvbk51bWJlcik7XHJcblxyXG5cclxuJChkb2N1bWVudClcclxuICAgIC8qKlxyXG4gICAgICogQ29weSBhc3NldHMgaWRzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmNvcHktYXNzZXRzJywgY29weUFzc2V0cylcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXIgZm9yIGRvd25sb2FkIGFzc2V0c1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kb3dubG9hZC1hc3NldHMnLCBkb3dubG9hZEFzc2V0cylcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBhbm5vdW5jZW1lbnRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC5vbignY2hhbmdlJywgJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZCA9ICQodGhpcykuY2xvc2VzdCgndGQnKTtcclxuICAgICAgICBjb25zdCBkZWx0YVRpbWVIaWRkZW4gPSBjdXJyZW50VGQuZmluZCgnW25hbWUkPVwiWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddXCJdJyk7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lRGlzcGxheSA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bZGlzcGxheV1cIl0nKTtcclxuXHJcbiAgICAgICAgZGVsdGFUaW1lRGlzcGxheS52YWwoZGVsdGFUaW1lSGlkZGVuLmRhdGEoJ3ZhbHVlJykgLyBwYXJzZUludCgkKHRoaXMpLnZhbCgpKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC5vbignaW5wdXQnLCAnW25hbWUkPVwiWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW2Rpc3BsYXldXCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZCA9ICQodGhpcykuY2xvc2VzdCgndGQnKTtcclxuICAgICAgICBjb25zdCB0aW1lVHlwZSA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbdGltZV90eXBlXVwiXScpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11cIl0nKTtcclxuXHJcbiAgICAgICAgZGVsdGFUaW1lSGlkZGVuLnZhbCgkKHRoaXMpLnZhbCgpICogdGltZVR5cGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBhd2FyZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcykoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJy5mYXN0LXNhdmUtY29udGFpbmVyIGlucHV0LCAuZmFzdC1zYXZlLWNvbnRhaW5lciBzZWxlY3QsIC5mYXN0LXNhdmUtY29udGFpbmVyIHRleHRhcmVhJywgbWFya0NoYW5nZWQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxyXG4gICAgICovXHJcbiAgICAucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICB1cGRhdGVTYXZlQWxsQnV0dG9uKCk7XHJcblxyXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShDTE9TRV9BV0FSRF9NT0RBTCwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuIiwiZXhwb3J0IGNvbnN0IEFXQVJEX0NSRUFURSA9ICdBV0FSRF9DUkVBVEUnO1xuZXhwb3J0IGNvbnN0IEFXQVJEX0NSRUFURUQgPSAnQVdBUkRfQ1JFQVRFRCc7XG5leHBvcnQgY29uc3QgQVdBUkRfREVMRVRFID0gJ0FXQVJEX0RFTEVURSc7XG5leHBvcnQgY29uc3QgQ0xPU0VfQVdBUkRfTU9EQUwgPSAnQ0xPU0VfQVdBUkRfTU9EQUwnO1xuZXhwb3J0IGNvbnN0IFNIT1dfUkVQT1JUX1BBVEggPSAnU0hPV19SRVBPUlRfUEFUSCc7XG4iLCIvKipcclxuICogU2hvdyBmb3JtIGV2ZW50XHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQkFOTkVSX1NIT1dfRk9STSA9ICdCQU5ORVJfU0hPV19GT1JNJztcclxuXHJcbi8qKlxyXG4gKiBJZCBvZiB0eXBlJ3Mgc2VsZWN0XHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9TRUxFQ1RfSUQgPSAnYmFubmVyLXR5cGUnO1xyXG4iLCJpbXBvcnQge1RZUEVfU0VMRUNUX0lEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogQ2hhbmdlIHR5cGUgaGFuZGxlclxyXG4gKiBIaWRlL3Nob3cgc29tZSBmaWVsZHNcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChUWVBFX1NFTEVDVF9JRCk7XHJcblxyXG4gICAgaWYgKCFzZWxlY3QgfHwgc2VsZWN0LnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3Qub3B0aW9ucy5sZW5ndGggJiYgc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcclxuXHJcbiAgICAgICAgJCgnLmJhbm5lci10eXBlJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKCcuYmFubmVyLXR5cGUtJyArIHNlbGVjdGVkRWxlbWVudC52YWx1ZSkucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xyXG5pbXBvcnQge0JBTk5FUl9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcclxuXHJcbi8qKlxyXG4gKiBTaG93IGZvcm0gaGFuZGxlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEcm9wem9uZSBJbml0XHJcbiAgICAgKi9cclxuICAgIGRyb3Bab25lSW5pdChCQU5ORVJfU0hPV19GT1JNKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXQgc2hvd0Zvcm0gbGlzdGVuZXJcclxuICAgICAqL1xyXG4gICAgc2hvd0Zvcm0oKTtcclxufVxyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge0JBTk5FUl9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4uL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiBTaG93IGZvcm0gbGlzdGVuZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShCQU5ORVJfU0hPV19GT1JNLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFR5cGUgc2VsZWN0IGNoYW5nZSB0cmlnZ2VyXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2hhbmdlVHlwZSgpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEYXRlcyBpbml0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJCgnLmJhbm5lci1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xyXG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcclxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2hhbmRsZXJzL3Nob3dGb3JtXCI7XHJcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcclxuaW1wb3J0IHtUWVBFX1NFTEVDVF9JRH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogU2hvdyBlZGl0IGZvcm0gb2YgYSBiYW5uZXJcclxuICovXHJcbiQoJy5zaG93LWZvcm0nKS5jbGljayhzaG93Rm9ybSgpKTtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgdHlwZSBoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJyMnICsgVFlQRV9TRUxFQ1RfSUQsIGNoYW5nZVR5cGUpO1xyXG4iLCIvKipcclxuICogSGFuZGxlciBmb3IgY29weSBhZHAgaWRzIHRvIGNsaXBib2FyZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBZHAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYWRwSWRzRmllbGQgPSAkKCdpbnB1dFtuYW1lPVwiYWRwX2lkc1wiXScpO1xyXG4gICAgbGV0IGFkcElkcyA9IFtdO1xyXG5cclxuICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYWRwSWQgPSAkKGl0ZW0pLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgaWYoYWRwSWQpIHtcclxuICAgICAgICAgICAgYWRwSWRzLnB1c2goYWRwSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgaWYgKGFkcElkcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgICAgIGxldCBhZHBJZCA9ICQoaXRlbSkuZGF0YSgnaWQnKTtcclxuICAgICAgICAgICAgaWYgKGFkcElkKSB7XHJcbiAgICAgICAgICAgICAgICBhZHBJZHMucHVzaChhZHBJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZHBJZHNGaWVsZC52YWwoYWRwSWRzKTtcclxuICAgIGFkcElkc0ZpZWxkLnNlbGVjdCgpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgLy8gYWRwSWRzRmllbGQudmFsKFtdKTtcclxufVxyXG4iLCIvKipcclxuICogSGFuZGxlciBmb3IgY29weSBhc3NldHMgaWRzIHRvIGNsaXBib2FyZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBc3NldHMoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGFzc2V0SWRzRmllbGQgPSAkKCdpbnB1dFtuYW1lPVwiYXNzZXRfaWRzXCJdJyk7XHJcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcclxuXHJcbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XHJcbiAgICAgICAgaWYoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgaWYgKGFzc2V0SWRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XHJcbiAgICAgICAgICAgIGlmKGFzc2V0SWQpIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3NldElkc0ZpZWxkLnZhbChhc3NldElkcyk7XHJcbiAgICBhc3NldElkc0ZpZWxkLnNlbGVjdCgpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBIYW5kbGVyIGZvciBkb3dubG9hZCBhZHBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEFkcChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgYWRwSWRzID0gW107XHJcbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xyXG4gICAgICAgIGlmKGFkcElkKSB7XHJcbiAgICAgICAgICAgIGFkcElkcy5wdXNoKGFkcElkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIGlmIChhZHBJZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xyXG4gICAgICAgICAgICBpZiAoYWRwSWQpIHtcclxuICAgICAgICAgICAgICAgIGFkcElkcy5wdXNoKGFkcElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICQodGhpcykuZGF0YSgncm91dGUnKSArICcmaWRzPScgKyBhZHBJZHMuam9pbignLCcpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBIYW5kbGVyIG9mIGFyY2hpdmUgY2F0ZWdvcmllcyBvbiBhZHAgcGFnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBcmNoaXZlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcclxuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICQoJy5zaG93LWFyY2hpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkKCcuYXJjaGl2ZS1jYXRlZ29yaWVzLWxpc3QnKS5odG1sKCcnKTtcclxufVxyXG4iLCIvKipcclxuICogSGFuZGxlciBvZiB0YXNrcyBvbiBhZHAgcGFnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUYXNrcyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkKCcuc2hvdy10YXNrcycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICQoJy50YXNrcy1saXN0JykuaGlkZSgnc2xvdycpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBIYW5kbGVyIGZvciBzZWxlY3Qgcm93IGJ5IGZ1bGwgdGQgYXJlYVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFJvdyhlKSB7XHJcbiAgICBpZiAoISQoZS50YXJnZXQpLmhhc0NsYXNzKCdmb3ItY29weScpKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gJCh0aGlzKS5maW5kKCcuZm9yLWNvcHknKTtcclxuXHJcbiAgICAgICAgaWYoY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVyIG9mIGFyY2hpdmUgY2F0ZWdvcmllcyBvbiBhZHAgcGFnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBcmNoaXZlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcclxuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICQoJy5oaWRlLWFyY2hpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICBcclxuICAgIGxldCBhY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJyk7XHJcbiAgICBuZXcgaHR0cChhY3Rpb24pXHJcbiAgICAgICAgICAgIC5tZXRob2QoJ2dldCcpXHJcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICQoJy5hcmNoaXZlLWNhdGVnb3JpZXMtbGlzdCcpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc2VuZCgpO1xyXG4gICAgXHJcbn1cclxuIiwiLyoqXHJcbiAqIEhhbmRsZXIgb2YgdGFza3Mgb24gYWRwIHBhZ2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza3MoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJCgnLmhpZGUtdGFza3MnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkKCcudGFza3MtbGlzdCcpLnNob3coJ3Nsb3cnKTtcclxufVxyXG4iLCIvL2ltcG9ydCB7YnVuZGxlVmVyc2lvblNlbGVjdH0gZnJvbSBcIi4vaGFuZGxlcnMvYnVuZGxlVmVyc2lvblNlbGVjdFwiO1xyXG5pbXBvcnQge3Nob3dBcmNoaXZlfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93QXJjaGl2ZVwiO1xyXG5pbXBvcnQge2hpZGVBcmNoaXZlfSBmcm9tIFwiLi9oYW5kbGVycy9oaWRlQXJjaGl2ZVwiO1xyXG5pbXBvcnQge2hpZGVUYXNrc30gZnJvbSBcIi4vaGFuZGxlcnMvaGlkZVRhc2tzXCI7XHJcbmltcG9ydCB7c2hvd1Rhc2tzfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93VGFza3NcIjtcclxuaW1wb3J0IHtjb3B5QWRwfSBmcm9tIFwiLi9oYW5kbGVycy9jb3B5QWRwXCI7XHJcbmltcG9ydCB7Y29weUFzc2V0c30gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFzc2V0c1wiO1xyXG5pbXBvcnQge3NlbGVjdFJvd30gZnJvbSBcIi4vaGFuZGxlcnMvc2VsZWN0Um93XCI7XHJcbmltcG9ydCB7ZG93bmxvYWRBZHB9IGZyb20gXCIuL2hhbmRsZXJzL2Rvd25sb2FkQWRwXCI7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5cclxuJChkb2N1bWVudClcclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnNob3ctYXJjaGl2ZScsIHNob3dBcmNoaXZlKVxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIGFyY2hpdmUgYWRwIGNhdGVnb3JpZXNcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hcmNoaXZlJywgaGlkZUFyY2hpdmUpXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgYWRwIHRhc2tzIGJ5IHN0YXR1cyBhbmQgdXNlclxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5oaWRlLXRhc2tzJywgaGlkZVRhc2tzKVxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy10YXNrcycsIHNob3dUYXNrcylcclxuICAgIC8qKlxyXG4gICAgICogQ29weSBhZHAgaWRzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmNvcHktYWRwJywgY29weUFkcClcclxuICAgIC8qKlxyXG4gICAgICogQ29weSBhc3NldHMgaWRzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmNvcHktYXNzZXRzJywgY29weUFzc2V0cylcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlciBmb3IgZG93bmxvYWQgYXNzZXRzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRvd25sb2FkLWFkcCcsIGRvd25sb2FkQWRwKVxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IGhpZGUgc2lkZSBib3hcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1oaWRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKHBhcnNlSW50KCQoJy5zaWRlLWJveCcpLmNzcygncmlnaHQnKSkgPCAwKSB7XHJcbiAgICAgICAgICAgICQoJy5zaWRlLWJveCcpLmNzcygncmlnaHQnLCAwKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5zaWRlLWJveCcpLmNzcygncmlnaHQnLCAnLTEwMCUnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCByb3cgYnkgZnVsbCB0ZCBhcmVhXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmlkLWNvbCcsIHNlbGVjdFJvdyk7XHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IENBU0ggPSAnY2FzaF9hZGRlZCc7XHJcbmV4cG9ydCBjb25zdCBDT0lOID0gJ2NvaW5zX2FkZGVkJztcclxuZXhwb3J0IGNvbnN0IEFTU0VUID0gJ2Fzc2V0c19hZGRlZCc7XHJcbiIsImltcG9ydCB7Q0FTSH0gZnJvbSBcIm1vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHtDT0lOfSBmcm9tIFwibW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge0FTU0VUfSBmcm9tIFwibW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL2NvbnN0YW50c1wiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBjdXJzb3IgdG8gcGFyZW50IG5vZGVcclxuICAgICAqL1xyXG4gICAgLm9uKCdtb3VzZWVudGVyJywgJ3RkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaWx0ZXIgc2VsZWN0IG9wdGlvbnMgYnkgc2VsZWN0ZWQgc291cmNlXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJyNmaWx0ZXJfc291cmNlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZVZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgJChcIiNmaWx0ZXJfYWN0aW9uXCIpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICBtYXRjaGVyOiBmdW5jdGlvbiAocGFyYW1zLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlVmFsICE9PSAndXNlcl9kZWJ1ZycgJiYgJC5pbkFycmF5KGRhdGEuaWQsIFtDQVNILCBDT0lOLCBBU1NFVF0pID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIGRlcGxveSBpbmZvXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAndGQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9ICQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJyk7XHJcblxyXG4gICAgICAgIGlmICh3cmFwcGVyICYmIHdyYXBwZXIuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbicpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4iLCJleHBvcnQgY29uc3QgQ09MTEVDVElPTl9TSE9XX0ZPUk0gPSAnQ09MTEVDVElPTl9TSE9XX0ZPUk0nO1xyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XHJcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xyXG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xyXG5cclxuY29uc3QgYXNzZXRQcmV2aWV3VGVtcGxhdGUgPSAkKCcjYXNzZXQtcHJldmlldy10ZW1wbGF0ZScpLmh0bWwoKTtcclxuXHJcbi8qKlxyXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxyXG4gKlxyXG4gKiBAcGFyYW0gZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XHJcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2F2ZWRJdGVtLmhhc0NsYXNzKCdwcm9ncmVzcycpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2F2ZWRJdGVtLmFkZENsYXNzKCdwcm9ncmVzcycpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNoYW5nZWQgZGF0YVxyXG4gICAgICovXHJcbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtSXRlbXMpO1xyXG5cclxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XHJcbiAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcclxuICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBmb3JtSXRlbXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZW0uaGFzQ2xhc3MoJ2Fzc2V0LWlkJykgJiYgISFyZXNwb25zZS5hc3NldHNbY3VycmVudEl0ZW0udmFsKCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFzc2V0ID0gcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLnNsb3QnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmFzc2V0LXByZXZpZXcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChhc3NldFByZXZpZXdUZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAoJyV1cmwlJywgXCJnXCIpLCBjdXJyZW50QXNzZXQucHJldmlld191cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJXRpdGxlJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0Lm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKipcclxuICogSGlkZSBhZGRpdGlvbmFsIHJvd3NcclxuICpcclxuICogQHBhcmFtIGVcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICQoJy5hZGRpdGlvbmFsLWRhdGEnKS50b2dnbGVDbGFzcygnaGlkZScpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKipcclxuICogTWFyayBpbnB1dCBhcyBjaGFuZ2VkXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbn1cclxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xyXG5cclxuLyoqXHJcbiAqIFNvcnRhYmxlIEluaXRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgIG5ldyBTb3J0YWJsZShfdGhpcywge1xyXG4gICAgICAgIGdyb3VwOiBfdGhpcy5kYXRhc2V0Lmdyb3VwLFxyXG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxyXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICQoZS50YXJnZXQpLmZpbmQoX3RoaXMuZGF0YXNldC5wb3NpdGlvbikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChwb3NpdGlvbi52YWwoKSkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udmFsKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xyXG5pbXBvcnQge0NPTExFQ1RJT05fU0hPV19GT1JNfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlXCI7XHJcbmltcG9ydCBtYXJrSW5wdXRBc0NoYW5nZWQgZnJvbSBcIi4vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkXCI7XHJcbmltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XHJcbmltcG9ydCBoaWRlQWRkaXRpb25hbFJvd3MgZnJvbSBcIi4vaGFuZGxlcnMvaGlkZUFkZGl0aW9uYWxSb3dzXCI7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG4vKipcclxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcclxuICovXHJcbiQoJy5zaG93LWZvcm0nKS5jbGljayhkcm9wWm9uZUluaXQoQ09MTEVDVElPTl9TSE9XX0ZPUk0pKTtcclxuXHJcbi8qKlxyXG4gKiBGYXN0IHNhdmUgY29sbGVjdGlvblxyXG4gKi9cclxuJCgnLmNvbGxlY3Rpb24tZmFzdC1zYXZlJykuY2xpY2soZmFzdFNhdmUpO1xyXG5cclxuLyoqXHJcbiAqIE1hcmsgaW5wdXRzIGFzIGNoYW5nZWRcclxuICovXHJcbiQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXQnKS5jaGFuZ2UobWFya0lucHV0QXNDaGFuZ2VkKTtcclxuXHJcbi8qKlxyXG4gKiBTb3J0YWJsZSBpbml0XHJcbiAqL1xyXG4kKCcuc29ydGFibGUnKS5lYWNoKHNvcnRhYmxlSW5pdCk7XHJcblxyXG4vKipcclxuICogSGlkZSBhZGRpdGlvbmFsIHJvd3NcclxuICovXHJcbiQoJy5oaWRlLXNsb3RzJykuY2xpY2soaGlkZUFkZGl0aW9uYWxSb3dzKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXHJcbiAqIEFkZCByb3dzIHRvIHRoZSBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJvdygpIHtcclxuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNjcm9wcyA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjY3JvcF90ZW1wbGF0ZScpLmh0bWwoKTtcclxuXHJcbiAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuY3JvcF9pZCcpLnRleHQoKTtcclxuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcclxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVjcm9wJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIERlbGV0ZSByb3dcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUm93KCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge2FkZFJvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkUm93XCI7XHJcbmltcG9ydCB7ZGVsZXRlUm93fSBmcm9tIFwiLi9oYW5kbGVycy9kZWxldGVSb3dcIjtcclxuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcclxuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcclxuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtBV0FSRF9DUkVBVEVELCBBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1yb3cnLCBhZGRSb3cpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBkZWxldGVSb3cpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGF3YXJkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xyXG5cclxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKHRoaXMpKCk7XHJcblxyXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEVELCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEVELCBzZWxmKTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJvdy5hZGRDbGFzcygnY2hhbmdlZCcpKTtcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgYXdhcmRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XHJcblxyXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQodGhpcykoKTtcclxuXHJcbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJvdy5hZGRDbGFzcygnY2hhbmdlZCcpKTtcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZGFpbHlfbG9vdCA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjZGFpbHlfbG9vdF90ZW1wbGF0ZScpLmh0bWwoKTtcclxuICAgIGxldCBsYXN0SURTID0gW107XHJcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAxO1xyXG4gICAgdGJvZHkuZmluZChcInRyXCIpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICBpZihwYXJzZUludCgkKGl0ZW0pLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoKSkpe1xyXG4gICAgICAgICAgICBsYXN0SURTLnB1c2gocGFyc2VJbnQoJChpdGVtKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihsYXN0SURTLmxlbmd0aCl7XHJcbiAgICAgICAgaW5jcmVtZW50SWQgPSAoTWF0aC5tYXguYXBwbHkoTWF0aCxsYXN0SURTKSArIDEpIHx8IDE7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lcm93SW5kZXglL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xyXG4gICAgICAgIHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbChpICsgaW5jcmVtZW50SWQpO1xyXG5cclxuICAgICAgICB0Ym9keS5maW5kKCcuZGF0ZXBpY2tlcicpXHJcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcclxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XHJcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5kYWlseS1sb290LXNhdmUtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBkYXRhID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgaWYoIWRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcclxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcclxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCd0ci5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XHJcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuXHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0aGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU3RhdGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcucmVtb3ZlLWVtYmVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2ggcGFnZSB0eXBlXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnRvZ2dsZS1wYWdlLXR5cGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDAsIGxvY2F0aW9uLnBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykpICsgJCh0aGlzKS5kYXRhKCdocmVmJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoJyNjb21tb24tbWVudScpLmZpbmQoJy5jb21tb24tbWVudS1zZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZigkKHRoaXMpLmZpbmQoJ2xpJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY29tbW9uLW1lbnUtc2VjdGlvbicpLmhpZGUoKVxyXG4gICAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbi8qKlxyXG4gKiBTaG93IERlcGxveSBTdGF0dXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXBsb3lTdGF0dXMoKSB7XHJcbiAgICBuZXcgaHR0cChERVBMT1lfU1RBVFVTX1JPVVRFKVxyXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAkKCcuZGVwbG95LXN0YXR1cycpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSAkKCcuZGVwbG95LXN0YXR1cycpLmZpbmQoJy5hY3RpdmUtZGVwbG95JykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICQoJy5kZXBsb3ktYnRuJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKCQoJy5kZXBsb3ktYnRuJykuaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtkZXBsb3lTdGF0dXMoKTt9LCAzMDAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcbn1cclxuIiwiXHJcbi8qKlxyXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcclxuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xyXG4gICAgdXJsICs9IFwiP2RpcmVjdGlvbj1cIiArIGRpcmVjdGlvbjtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKHtcclxuICAgICAgICBpZDogJ2RlcGxveSdcclxuICAgIH0sICdEZXBsb3knLCB1cmwpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBIYW5kbGVyIGZvciBzaG93INCyZXBlbmRlbmN5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RlcGVuZGVuY3koZSkge1xyXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgY3VycmVudENvbmZpZyA9IGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJy5jb25maWctaXRlbS1ibG9jaycpLmRhdGEoJ21vZGVsJyk7XHJcbiAgICBsZXQgYWRkTW9kZSA9IGN1cnJlbnRFbGVtZW50LmlzKCc6Y2hlY2tlZCcpO1xyXG5cclxuICAgIG9uZUxldmVsU2hvdyhjdXJyZW50Q29uZmlnLCBhZGRNb2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25lTGV2ZWxTaG93KGNvbmZpZ05hbWUsIGFkZE1vZGUsIGxldmVsID0gMSkge1xyXG4gICAgaWYoREVQTE9ZX0RFUEVORFMuaGFzT3duUHJvcGVydHkoY29uZmlnTmFtZSkgJiYgbGV2ZWwgPCAxMCkge1xyXG4gICAgICAgIGxldCBjb25maWdCbG9jayA9ICQoJy5tb2RlbC0nICsgY29uZmlnTmFtZSk7XHJcbiAgICAgICAgaWYoYWRkTW9kZSkge1xyXG4gICAgICAgICAgICBjb25maWdCbG9jay5hZGRDbGFzcygnZGVwbG95LWNoYWluJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uZmlnQmxvY2sucmVtb3ZlQ2xhc3MoJ2RlcGxveS1jaGFpbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIERFUExPWV9ERVBFTkRTW2NvbmZpZ05hbWVdKSB7XHJcbiAgICAgICAgICAgIGxldCBkZXBlbmRDb25maWdOYW1lID0gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV1ba2V5XTtcclxuICAgICAgICAgICAgICAgIGxldCBjb25maWdCbG9jayA9ICQoJy5tb2RlbC0nICsgZGVwZW5kQ29uZmlnTmFtZSk7XHJcbiAgICAgICAgICAgIGlmKGFkZE1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLmFkZENsYXNzKCdkZXBsb3ktY2hhaW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLnJlbW92ZUNsYXNzKCdkZXBsb3ktY2hhaW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbmVMZXZlbFNob3coZGVwZW5kQ29uZmlnTmFtZSwgYWRkTW9kZSwgbGV2ZWwgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVyIGZvciBzaG93IGRlcGVuZGVuY3kgcG9wdXBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93RGVwZW5kZW5jeVBvcHVwKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gY3VycmVudEVsZW1lbnQucGFyZW50cygnLmNvbmZpZy1pdGVtLWJsb2NrJykuZGF0YSgnbW9kZWwnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRDb25maWdJZCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJy5jb25maWctaXRlbS1ibG9jaycpLmRhdGEoJ2lkJyk7XHJcbiAgICBsZXQgaWRzID0gW107XHJcbiAgICBpZihjdXJyZW50Q29uZmlnSWQpIHtcclxuICAgICAgICBpZHMucHVzaChjdXJyZW50Q29uZmlnSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJvb3RMZXZlbFNob3coY3VycmVudENvbmZpZywgaWRzKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9uZSBsZXZlbCBzaG93XHJcbiAqXHJcbiAqIEBwYXJhbSBjb25maWdOYW1lXHJcbiAqIEBwYXJhbSBkZXBlbmRDb25maWdOYW1lXHJcbiAqIEBwYXJhbSBsZXZlbFxyXG4gKiBAcGFyYW0gaWRSZXNwb25zZVxyXG4gKi9cclxuZnVuY3Rpb24gb25lTGV2ZWxTaG93KGNvbmZpZ05hbWUsIGRlcGVuZENvbmZpZ05hbWUsICBsZXZlbCA9IDEsIGlkUmVzcG9uc2UpIHtcclxuICAgIGlmKERFUExPWV9ERVBFTkRTLmhhc093blByb3BlcnR5KGNvbmZpZ05hbWUpICYmIGxldmVsIDwgMTApIHtcclxuICAgICAgICBsZXQgaWRzID0gaWRSZXNwb25zZS5pZHM7XHJcbiAgICAgICAgbGV0IHRleHRDbGFzcyA9ICcnO1xyXG4gICAgICAgIGlmKGlkUmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ25vdEltcGxlbWVudGVkJykpIHtcclxuICAgICAgICAgICAgdGV4dENsYXNzID0gJ3RleHQtbXV0ZWQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlzUmVjdXJzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgJCgnLmNoYWluLScgKyBjb25maWdOYW1lKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykucGFyZW50cygnLmNoYWluLScgKyBkZXBlbmRDb25maWdOYW1lKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpc1JlY3Vyc2lvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNoYWluLScgKyBkZXBlbmRDb25maWdOYW1lICsgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCInICsgdGV4dENsYXNzICsgJ1wiPicgKyBkZXBlbmRDb25maWdOYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPihSZWN1cnNpb24pPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj48YnI+Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZigkKHRoaXMpLmZpbmQoJy5jaGFpbi0nICsgZGVwZW5kQ29uZmlnTmFtZSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUgKyAnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIHRleHRDbGFzcyArICdcIj4nICsgZGVwZW5kQ29uZmlnTmFtZSArICc8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgKGlkcy5sZW5ndGggPiAwID8gJzxzcGFuIGNsYXNzPVwiZGVwZW5kLWlkc1wiPiAnICsgaWRzLmpvaW4oJywnKSArICc8L3NwYW4+JyA6ICcnKSAgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghaXNSZWN1cnNpb24pIHtcclxuICAgICAgICAgICAgZ2V0RGVwbG95TW9kZWxJZHMoZGVwZW5kQ29uZmlnTmFtZSwgbGV2ZWwsIGlkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFJvb3QgbGV2ZWwgc2hvd1xyXG4gKlxyXG4gKiBAcGFyYW0gY29uZmlnTmFtZVxyXG4gKiBAcGFyYW0gaWRzXHJcbiAqL1xyXG5mdW5jdGlvbiByb290TGV2ZWxTaG93KGNvbmZpZ05hbWUsIGlkcyA9IFtdKSB7XHJcbiAgICBuZXcgaHR0cChERVBMT1lfTU9ERUxfSURTX1JPVVRFKVxyXG4gICAgICAgIC5tZXRob2QoJ3Bvc3QnKVxyXG4gICAgICAgIC5kYXRhKHtcclxuICAgICAgICAgICAgJ2RpcmVjdGlvbic6IEFDVElWRV9ESVJFQ1RJT04sXHJcbiAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbCc6IGNvbmZpZ05hbWUsXHJcbiAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbElkcyc6IGlkc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWRzID0gcmVzcG9uc2UuaWRzIHx8IFtdO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVwbG95LWNoYWluLWJsb2NrXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQoJy5kZXBsb3ktY2hhaW4tYmxvY2snKS5odG1sKCc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGNvbmZpZ05hbWUgKyAnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4+JyArIGNvbmZpZ05hbWUgKyAnPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZGVwZW5kLWlkc1wiPiAnICsgaWRzLmpvaW4oJywnKSArICc8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICAgICBuZXcgTW9kYWxCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgIC5oZWFkZXIoJ0RlcGxveSBkZXBlbmRlbmN5JylcclxuICAgICAgICAgICAgICAgIC5ib2R5KCQoJy5kZXBsb3ktY2hhaW4tYmxvY2snKSlcclxuICAgICAgICAgICAgICAgIC5tb2RhbCgpO1xyXG5cclxuICAgICAgICAgICAgZ2V0RGVwbG95TW9kZWxJZHMoY29uZmlnTmFtZSwgMSwgaWRzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZGVwbG95IG1vZGVsIGlkc1xyXG4gKlxyXG4gKiBAcGFyYW0gY29uZmlnTmFtZVxyXG4gKiBAcGFyYW0gbGV2ZWxcclxuICogQHBhcmFtIGlkc1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RGVwbG95TW9kZWxJZHMoY29uZmlnTmFtZSwgbGV2ZWwgPSAxLCBpZHMgPSBbXSkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIERFUExPWV9ERVBFTkRTW2NvbmZpZ05hbWVdKSB7XHJcbiAgICAgICAgbGV0IGRlcGVuZENvbmZpZ05hbWUgPSBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXVtrZXldO1xyXG5cclxuICAgICAgICBpZihpZHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIG5ldyBodHRwKERFUExPWV9NT0RFTF9JRFNfUk9VVEUpXHJcbiAgICAgICAgICAgICAgICAubWV0aG9kKCdwb3N0JylcclxuICAgICAgICAgICAgICAgIC5kYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAnZGlyZWN0aW9uJzogQUNUSVZFX0RJUkVDVElPTixcclxuICAgICAgICAgICAgICAgICAgICAnbW9kZWwnOiBkZXBlbmRDb25maWdOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbCc6IGNvbmZpZ05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RlcGVuZGVudE1vZGVsSWRzJzogaWRzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCBsZXZlbCArIDEsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2VuZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCBsZXZlbCArIDEsIHsnaWRzJzogW119KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xyXG5pbXBvcnQge3Nob3dEZXBlbmRlbmN5fSBmcm9tIFwiLi9oYW5kbGVycy9zaG93RGVwZW5kZW5jeVwiO1xyXG5pbXBvcnQge3Nob3dEZXBlbmRlbmN5UG9wdXB9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dEZXBlbmRlbmN5UG9wdXBcIjtcclxuaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XHJcbmltcG9ydCB7ZGVwbG95U3RhdHVzfSBmcm9tIFwiLi9kZXBsb3lTdGF0dXNcIjtcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuXHJcbiQoZG9jdW1lbnQpXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXHJcbiAgICAvKipcclxuICAgICAqIFNhdmUgYWxsIHBhZ2VcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZmFzdC1zYXZlLXBhZ2UtY3VzdG9tJywgZmFzdFNhdmVQYWdlKVxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IGRlcGVuZGVuY3lcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuY29uZmlnLWNoZWNrYm94Jywgc2hvd0RlcGVuZGVuY3kpXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgZGVwZW5kZW5jeSBwb3B1cFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5zaG93LWRlcGVuZGVuY3knLCBzaG93RGVwZW5kZW5jeVBvcHVwKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2svdW5jaGVjayBhd2FyZCBkZXBlbmRlbmNpZXNcclxuICAgICAqL1xyXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmF3YXJkLWRlcGVuZGVuY3kgW3R5cGU9Y2hlY2tib3hdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5hd2FyZC1kZXBlbmRlbmN5IFt0eXBlPWNoZWNrYm94XScpLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xyXG4gICAgfSlcclxuXHJcbiAgICAucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBkZXBsb3lTdGF0dXMoKTtcclxuICAgIH0pO1xyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXHJcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxldmVscyBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHBhID4gdGJvZHknKTtcclxuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmRwYV9pZCcpLnZhbCgpO1xyXG4gICAgbGV0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xyXG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjZHBhX3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVkcGFfaWQlL2csIGkgKyBpbmNyZW1lbnRJZCk7XHJcblxyXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVEcGFTdGF0ZSAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcclxuICAgIGxldCBkYXRhID0gJCgnLmRwYS1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgICBuZXcgaHR0cChyb3V0ZSlcclxuICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xyXG5pbXBvcnQge3NhdmVEcGFTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZURwYVN0YXRlXCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIGRwYVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93IHRvIHRoZSBkcGEgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRwYS1zYXZlLXBhZ2UnLCBzYXZlRHBhU3RhdGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KTtcclxuIiwiLyoqXHJcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHllID4gdGJvZHknKTtcclxuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNkeWVfdGVtcGxhdGUnKS5odG1sKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XHJcblxyXG4gICAgICAgIGxldCBsYXN0Um93ID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuY3AyJyk7XHJcbiAgICAgICAgbGFzdFJvdy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG4gICAgICAgICAgICAkKGl0ZW0pLmNvbG9ycGlja2VyKHt9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBDaGFuZ2Ugcm93IGluZGV4XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJvd0luZGV4KCkge1xyXG4gICAgbGV0IHJvd0luZGV4ID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGxldCByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnaW5wdXQsIHNlbGVjdCcpO1xyXG5cclxuICAgIHJvdy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG4gICAgICAgIGxldCBvbGROYW1lID0gJChpdGVtKS5hdHRyKCduYW1lJyk7XHJcbiAgICAgICAgbGV0IG5ld05hbWUgPSBvbGROYW1lLnNsaWNlKDAsIDQpICsgcm93SW5kZXggKyAgb2xkTmFtZS5zbGljZShvbGROYW1lLmluZGV4T2YoJ10nKSk7XHJcbiAgICAgICAgJChpdGVtKS5hdHRyKCduYW1lJywgbmV3TmFtZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xyXG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcclxuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEWUVfQ09OVEFJTkVSX1NFTEVDVE9SID0gJy5keWUtc2F2ZS1wYWdlLWNvbnRhaW5lcic7XHJcblxyXG4vKipcclxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgZHllcyBwYWdlXHJcbiAqXHJcbiAqIEBwYXJhbSBlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcclxuICAgIGNvbnN0IHNhdmVkSXRlbSA9ICQoRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUik7XHJcblxyXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xyXG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XHJcblxyXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcclxuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcmsgZm9ybSdzIHRyIGFzIGNoYW5nZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZFRyKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbn1cclxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xyXG5pbXBvcnQge2NoYW5nZVJvd0luZGV4fSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VSb3dJbmRleFwiO1xyXG5pbXBvcnQgZHllU2F2ZVBhZ2UsIHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SLCBtYXJrQ2hhbmdlZFRyfSBmcm9tIFwiLi9oYW5kbGVycy9keWVTYXZlUGFnZVwiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXQgY29sb3ItcGlja2VyIGlucHV0c1xyXG4gICAgICovXHJcbiAgICAucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmNwMicpLmNvbG9ycGlja2VyKClcclxuICAgICAgICAgICAgLm9uKCdjcmVhdGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudClcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBNYXJrIHRyIGFzIGNoYW5nZWRcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAub24oJ2NoYW5nZScsIGAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkVHIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdpbnB1dCcsIGAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkVHIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZSByb3cgaW5kZXhcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYXNzZXRfaWQnLCBjaGFuZ2VSb3dJbmRleClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXHJcbiAgICAgKiBDaGFuZ2UgY291bnRlclxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxyXG4gICAgICovXHJcbiAgICAkKCcuZHllLXNhdmUtcGFnZScpLmNsaWNrKGR5ZVNhdmVQYWdlKTtcclxuIiwiZXhwb3J0IGNvbnN0IEdJRlRfV1JBUF9ST1dfQURERUQgPSAnR0lGVF9XUkFQX1JPV19BRERFRCc7XHJcbiIsImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBBc3NldCBJRCBjaGFuZ2VkXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50SW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgYXNzZXRJRCA9IGN1cnJlbnRJbnB1dC52YWwoKTtcclxuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRJbnB1dC5jbG9zZXN0KCd0cicpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgZHVwbGljYXRlZCBhc3NldHMgaWRzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGN1cnJlbnRBc3NldER1cGxpY2F0ZSA9ICQoJyNnaWZ0LXdyYXBzLWNvbnRhaW5lcicpLmZpbmQoJy5hc3NldC1pZCcpLmZpbHRlcigoXywgaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhc3NldElEID09PSBpdGVtLnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRBc3NldER1cGxpY2F0ZS5sZW5ndGggPiAxKXtcclxuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBhc3NldCAnICsgYXNzZXRJRH0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBpbnB1dHMgbmFtZXNcclxuICAgICAqL1xyXG4gICAgcGFyZW50LmZpbmQoJ2lucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lLnJlcGxhY2UoIC9cXFtbXFxkXStcXF0vZywgYFske2Fzc2V0SUR9XWApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgaHJlZiBvZiB0aGUgZGVsZXRlIGJ1dHRvblxyXG4gICAgICovXHJcbiAgICBwYXJlbnQuZmluZCgnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ocmVmID0gdGhpcy5ocmVmLnJlcGxhY2UoIC9cXC9bXFxkXSskL2csIGAvJHthc3NldElEfWApO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IHBvc2l0aW9uVXBkYXRlIGZyb20gXCIuLi9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlXCI7XHJcblxyXG4vKipcclxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgYWxsIHBhZ2VcclxuICpcclxuICogQHBhcmFtIGVcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhc3NldHMgPSB7fTtcclxuICAgICAgICAkKCcjZ2lmdC13cmFwcy1jb250YWluZXInKS5maW5kKCcuYXNzZXQtaWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGFzc2V0c1t0aGlzLnZhbHVlXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0c1t0aGlzLnZhbHVlXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGVycm9ySGFuZGxlcih7J21lc3NhZ2UnOiAnRHVwbGljYXRlIGFzc2V0ICcgKyBlcnIubWVzc2FnZX0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBvc2l0aW9uIHVwZGF0ZVxyXG4gICAgICovXHJcbiAgICBwb3NpdGlvblVwZGF0ZSgpO1xyXG5cclxuICAgIGZhc3RTYXZlUGFnZS5iaW5kKHRoaXMpKGUpO1xyXG59XHJcbiIsImltcG9ydCBjb25maXJtTW9kYWwgZnJvbSBcImhhbmRsZXJzL2NvbmZpcm1Nb2RhbFwiO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zdCBidXR0b25VcmwgPSB0aGlzLmhyZWYuc3BsaXQoJy8nKTtcclxuICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgndHInKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHBhcnNlSW50KGJ1dHRvblVybFtidXR0b25VcmwubGVuZ3RoIC0gMV0pID09PSAwKSB7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtTW9kYWwuYmluZCh0aGlzKShlKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xyXG5pbXBvcnQgcG9zaXRpb25VcGRhdGUgZnJvbSBcIm1vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGVcIjtcclxuXHJcbi8qKlxyXG4gKiBTb3J0YWJsZSBJbml0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICBuZXcgU29ydGFibGUoX3RoaXMsIHtcclxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcclxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFBvc2l0aW9uIHVwZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLnBvc2l0aW9uJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9ICQoJyNwYWdlJykudmFsKCk7XHJcbiAgICAgICAgY29uc3QgcGFnZV9saW1pdCA9ICQoJ1tuYW1lPVwicGFnZV9saW1pdFwiXScpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAocGFyc2VJbnQocG9zaXRpb24udmFsKCkpICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbi52YWwoaW5kZXggKyAoKHBhZ2UgLSAxKSAqIHBhZ2VfbGltaXQpKTtcclxuICAgICAgICAgICAgcG9zaXRpb24uY2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtHSUZUX1dSQVBfUk9XX0FEREVEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogQWRkIG5ldyByb3cgdG8gZ3JpZFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEdJRlRfV1JBUF9ST1dfQURERUQsIGRhdGEgPT4ge1xyXG4gICAgICAgICQoJyNnaWZ0LXdyYXAtJyArIGRhdGEuZW1iZWRCbG9ja0lkKVxyXG4gICAgICAgICAgICAuZmluZCgnLmRhdGV0aW1lcGlja2VyJylcclxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxyXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcclxuaW1wb3J0IGFzc2V0Q2hhbmdlZCBmcm9tIFwiLi9oYW5kbGVycy9hc3NldENoYW5nZWRcIjtcclxuaW1wb3J0IGFkZFJvdyBmcm9tIFwiLi9saXN0ZW5lcnMvYWRkUm93XCI7XHJcbmltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XHJcbmltcG9ydCByZW1vdmVSb3cgZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlUm93XCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIGFzc2V0IGlkIGluIGlucHV0XHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJy5hc3NldC1pZCcsIGFzc2V0Q2hhbmdlZClcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1jb25maXJtLWFjdGlvbi1jdXN0b20nLCByZW1vdmVSb3cpO1xyXG5cclxuLyoqXHJcbiAqIEFkZCByb3cgbGlzdGVuZXJcclxuICovXHJcbmFkZFJvdygpO1xyXG5cclxuLyoqXHJcbiAqIFNvcnRhYmxlIGluaXRcclxuICovXHJcbiQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcclxuXHJcbi8qKlxyXG4gKiBTYXZlIGFsbCBwYWdlXHJcbiAqL1xyXG4kKCcuZmFzdC1zYXZlLXBhZ2UtY3VzdG9tJykuY2xpY2soZmFzdFNhdmVQYWdlKTsiLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogSGFuZGxlciBmb3Igc2hvdyBhc3NldFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBc3NldChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICBsZXQgYWN0aW9uID0gU1dPV19BU1NFVF9ST1VURSArICc/aWQ9JyArIGN1cnJlbnRFbGVtZW50LnZhbCgpO1xyXG4gICAgbmV3IGh0dHAoYWN0aW9uKVxyXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdkYXRhJykpIHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ25hbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LW5hbWUnKS5odG1sKHJlc3BvbnNlLmRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCdwcmV2aWV3X3VybCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtcHJldmlldyBpbWcnKS5hdHRyKCdzcmMnLCByZXNwb25zZS5kYXRhLnByZXZpZXdfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCd0cicpLmZpbmQoJy5hc3NldC1wcmV2aWV3IC5saXN0LXRodW1ibmFpbCcpLmRhdGEoJ2Z1bGwnLCByZXNwb25zZS5kYXRhLnByZXZpZXdfdXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcbn1cclxuIiwiXHJcbmltcG9ydCB7c2hvd0Fzc2V0fSBmcm9tIFwiLi9oYW5kbGVycy9zaG93QXNzZXRcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgYXNzZXRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmFzc2V0Jywgc2hvd0Fzc2V0KVxyXG5cclxuICAgICIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsb2NhbGl6YXRpb24gY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xyXG4gICAgbGV0IHRib2R5ID0gJCgnI2xvY2FsaXphdGlvbnMgPiB0Ym9keScpO1xyXG4gICAgbGV0IHRlbXBsYXRlID0gJCgnI2xvY2FsaXphdGlvbl90ZW1wbGF0ZScpLmh0bWwoKTtcclxuXHJcbiAgICB0Ym9keS5wcmVwZW5kKHRlbXBsYXRlKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFJlbW92ZSBub3Qgc2F2ZWQgcm93XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJvdyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBsb2NhbGl6YXRpb24gY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsaXphdGlvblN0YXRlIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50QnRuLmNsb3Nlc3QoJ3RyJyk7XHJcbiAgICBjb25zdCBjdXJyZW50S2V5ID0gcGFyZW50LmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykudmFsKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBkdXBsaWNhdGVkIGtleXNcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7alF1ZXJ5fVxyXG4gICAgICovXHJcbiAgICBjb25zdCBjdXJyZW50S2V5RHVwbGljYXRlID0gJCgnI2xvY2FsaXphdGlvbnMnKS5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLmZpbHRlcigoXywgaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50S2V5ID09PSBpdGVtLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoY3VycmVudEtleUR1cGxpY2F0ZS5sZW5ndGggPiAxKXtcclxuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBrZXkgJyArIGN1cnJlbnRLZXl9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHBhcmVudC5maW5kKCcuZWRpdGFibGUgaW5wdXQnKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHBhcmVudC5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge3NhdmVMb2NhbGl6YXRpb25TdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlXCI7XHJcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuaW1wb3J0IHtyZW1vdmVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZVJvd1wiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxvY2FsaXphdGlvbnMgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5jcmVhdGUtcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0aGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlTG9jYWxpemF0aW9uU3RhdGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgdGhlIHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtcm93JywgcmVtb3ZlUm93KTtcclxuIiwiLyoqXHJcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1hZ2ljIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcclxuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtYWdpYyA+IHRib2R5Jyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnaW5wdXRbbmFtZT1cImlkXCJdJykudmFsKCk7XHJcbiAgICAgICAgbGV0IGluY3JlbWVudElkID0gcGFyc2VJbnQobGFzdElEKSB8fCAwO1xyXG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjbWFnaWNfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJW1hZ2ljX2lkJS9nLCArK2luY3JlbWVudElkKTtcclxuXHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTWFnaWNTdGF0ZSAoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gJCgnLm1hZ2ljLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xyXG5cclxuICAgIGRhdGEuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xyXG4gICAgICAgICQoaXRlbSkuYXR0cigncmVhZG9ubHknLCB0cnVlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXHJcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgICAgIC5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7c2F2ZU1hZ2ljU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlXCI7XHJcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0aGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlTWFnaWNTdGF0ZSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcclxuICAgICAqIENoYW5nZSBjb3VudGVyXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxyXG4gICAgfSk7XHJcbiIsImltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogU2hvdyBsYXN0IG1ha2V1cCBraXQgSURcclxuICpcclxuICogQHBhcmFtIGVcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIG5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmhyZWYpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgJCgnI2xhc3QtbWFrZXVwLWtpdC1pZCcpXHJcbiAgICAgICAgICAgICAgICAudmFsKHJlc3VsdC5tYWtldXBfa2l0X2lkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59IiwiaW1wb3J0IGdldExhc3RNYWtldXBLaXRJRCBmcm9tIFwiLi9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SURcIjtcclxuXHJcbi8qKlxyXG4gKiBTaG93IGxhc3QgbWFrZXVwIGtpdCBJRCBhdCB0aGUgYm9keSBwYXJ0cyBncmlkXHJcbiAqL1xyXG4kKCcjZ2V0LWxhc3QtbWFrZXVwLWtpdC1pZCcpXHJcbiAgICAuY2xpY2soZ2V0TGFzdE1ha2V1cEtpdElEKTtcclxuIiwiZXhwb3J0IGNvbnN0IE1BS0VVUF9LSVRfU0hPV19GT1JNID0gJ01BS0VVUF9LSVRfU0hPV19GT1JNJztcclxuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xyXG5pbXBvcnQge01BS0VVUF9LSVRfU0hPV19GT1JNfSBmcm9tIFwibW9kdWxlcy9tYWtldXAta2l0L2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFByZXZpZXcgSW1hZ2UgKERyb3Bab25lIGluaXQpXHJcbiAqL1xyXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KE1BS0VVUF9LSVRfU0hPV19GT1JNKSk7XHJcbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBpbmdyZWRpZW50IGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcclxuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsX2luZ3JlZGllbnRfZ3JvdXBzID4gdGJvZHknKTtcclxuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX2luZ3JlZGllbnRfZ3JvdXBzX3RlbXBsYXRlJykuaHRtbCgpO1xyXG5cclxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5ncm91cF9pZCcpLnRleHQoKTtcclxuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcclxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsLWluZ3JlZGllbnQtZ3JvdXAlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKipcclxuICogSGlkZSByb3dcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5ncmVkaWVudERlbGV0ZSgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xyXG5pbXBvcnQge2luZ3JlZGllbnREZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGVcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGluZ3JlZGllbnREZWxldGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4iLCIvKipcclxuICogQWRkIG5leHQgcm93cyB0byB0aGUgaW5ncmVkaWVudCBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWVhbF9pbmdyZWRpZW50cyA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF9pbmdyZWRpZW50c190ZW1wbGF0ZScpLmh0bWwoKTtcclxuXHJcbiAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuaW5ncmVkaWVudF9pZCcpLnRleHQoKTtcclxuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcclxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsLWluZ3JlZGllbnQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKipcclxuICogSGlkZSByb3dcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5ncmVkaWVudERlbGV0ZSgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xyXG5pbXBvcnQge2luZ3JlZGllbnREZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGVcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGluZ3JlZGllbnREZWxldGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcclxufSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXHJcbiAgICAgKiBDaGFuZ2UgY291bnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KTtcclxuXHJcbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtZWFsIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcclxuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsID4gdGJvZHknKTtcclxuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX3RlbXBsYXRlJykuaHRtbCgpO1xyXG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcubWVhbF9pZCcpLnRleHQoKTtcclxuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xyXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJW1lYWwlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xyXG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKipcclxuICogSGlkZSByb3dcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVhbERlbGV0ZSgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTWVhbFN0YXRlICgpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcubWVhbC1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9ICQoJy5tZWFsLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgIGlmKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBodHRwKHJvdXRlKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHRib2R5LmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICAkKGl0ZW0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xyXG5pbXBvcnQge21lYWxEZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL21lYWxEZWxldGVcIjtcclxuaW1wb3J0IHtzYXZlTWVhbFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xyXG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfQ1JFQVRFRCwgQVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcclxuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcclxuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIG1lYWxEZWxldGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBtZWFsXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcblxyXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEVELCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgICAgICBzYXZlTWVhbFN0YXRlKClcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgYXdhcmRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXHJcbiAgICAgKiBDaGFuZ2UgY291bnRlclxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcclxuICAgIH0pO1xyXG5cclxuLyoqXHJcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcclxuICovXHJcbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlTWVhbFN0YXRlKTtcclxuIiwiZXhwb3J0IGNvbnN0IE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSA9ICdORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0nO1xyXG4iLCJjb25zdCBUUkFTSCA9ICdUUkFTSCc7XHJcbmNvbnN0IFRSQVNIX0ZJRUxEU19JRCA9ICd0cmFzaC1maWVsZHMnO1xyXG5jb25zdCBTRUxFQ1RfSUQgPSAnbmVpZ2hib3ItYWN0aXZpdHktdHlwZS1pZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTRUxFQ1RfSUQpO1xyXG5cclxuICAgIGlmICghc2VsZWN0IHx8IHNlbGVjdC5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnMubGVuZ3RoICYmIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XSkge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYXNoRmllbGRzID0gJCgnIycgKyBUUkFTSF9GSUVMRFNfSUQpO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRFbGVtZW50LnRleHQudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRSQVNIOlxyXG4gICAgICAgICAgICAgICAgdHJhc2hGaWVsZHMucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdHJhc2hGaWVsZHMuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7TkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSwgc2VsZik7XHJcblxyXG4gICAgICAgIGNoYW5nZVR5cGUoKTtcclxuXHJcbiAgICAgICAgJCgnLm5laWdoYm9yLWFjdGl2aXR5LWZvcm0gLmRhdGV0aW1lcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xyXG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcclxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xyXG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xyXG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tICcuL2hhbmRsZXJzL2NoYW5nZVR5cGUnO1xyXG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKVxyXG4gICAgLm9uKCdjaGFuZ2UnLCAnLm5laWdoYm9yLWFjdGl2aXR5LXR5cGUnLCBjaGFuZ2VUeXBlKTtcclxuXHJcbi8qKlxyXG4gKiBSdW4gdGhlIHNob3cgZm9ybSBoYW5kbGVyLlxyXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cclxuICovXHJcbiQoJy5zaG93LWZvcm0nKVxyXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcclxuIiwiaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgUFJPRFVDVF9TSE9XX0ZPUk0gPSAnUFJPRFVDVF9TSE9XX0ZPUk0nO1xyXG4iLCJpbXBvcnQgQ2xlYXZlIGZyb20gXCJjbGVhdmUuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBQcmljZSBpbml0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAgIG5ldyBDbGVhdmUodGhpcywge1xyXG4gICAgICAgIG51bWVyYWw6IHRydWUsXHJcbiAgICAgICAgcHJlZml4OiAnJCAnLFxyXG4gICAgICAgIHJhd1ZhbHVlVHJpbVByZWZpeDogdHJ1ZSxcclxuICAgICAgICBvblZhbHVlQ2hhbmdlZDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gTWF0aC5yb3VuZCgrZS50YXJnZXQucmF3VmFsdWUgKiAxMDApO1xyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdFByaWNlID0gJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJ3RkJykuZmluZCgnLnByb2R1Y3QtcHJpY2UnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gcGFyc2VJbnQocHJvZHVjdFByaWNlLnZhbCgpKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgLnZhbCh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XHJcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XHJcbmltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcclxuaW1wb3J0IHtQUk9EVUNUX1NIT1dfRk9STX0gZnJvbSBcIm1vZHVsZXMvcHJvZHVjdC9jb25zdGFudHNcIjtcclxuaW1wb3J0IHByaWNlSW5pdCBmcm9tIFwibW9kdWxlcy9wcm9kdWN0L2hhbmRsZXJzL3ByaWNlSW5pdFwiO1xyXG5cclxuJChkb2N1bWVudClcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSk7XHJcblxyXG4vKipcclxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcclxuICovXHJcbiQoJy5zaG93LWZvcm0nKS5jbGljayhkcm9wWm9uZUluaXQoUFJPRFVDVF9TSE9XX0ZPUk0pKTtcclxuXHJcbiQoJyN0ZXN0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxufSk7XHJcblxyXG4vKipcclxuICogUHJpY2UgZm9ybWF0XHJcbiAqL1xyXG4kKCcucHJvZHVjdC1wcmljZS12aWV3JykuZWFjaChwcmljZUluaXQpO1xyXG4iLCJcclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9IHBhcnNlSW50KCQoJy5hZGQtY291bnRlcicpLnZhbCgpKTtcclxuICAgIGNvbnN0IHRib2R5ID0gJCgndGFibGUudGFibGUgdGJvZHknKTtcclxuICAgIGNvbnN0IG1heElkID0gJCh0aGlzKS5kYXRhKCdjb3VudGVyJyk7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9ICQoJ3RlbXBsYXRlI2NvbmZpZy1yb3cnKTtcclxuXHJcbiAgICBsZXQgbmV3TGVuZ3RoID0gcGFyc2VJbnQodGJvZHkuZmluZCgndHIubmV3LXJvdycpLmxlbmd0aCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHRySWQgPSAobWF4SWQgPiAwID8gbWF4SWQgOiAwKSArIHBhcnNlSW50KHRib2R5LmZpbmQoJ3RyLm5ldy1yb3cnKS5sZW5ndGgpO1xyXG5cclxuICAgICAgICBsZXQgbmV3Um93ID0gdGVtcGxhdGUuaHRtbCgpLnJlcGxhY2UoLyVpZCUvZywgdHJJZClcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyV0cl9pZCUvZywgdHJJZClcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyVkcmFmdCUvZywgdHJJZCk7XHJcblxyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHZhbHVlcyB0byBuZXcgcm93c1xyXG4gICAgICAgIGxldCBuZXdSb3dIdG1sID0gJChuZXdSb3cpO1xyXG4gICAgICAgICQoJy5kZWZhdWx0LXJvdy12YWx1ZScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIG5ld1Jvd0h0bWwuZmluZCgnLicgKyAkKHRoaXMpLmRhdGEoJ2NsYXNzJykpLmF0dHIoJ3ZhbHVlJywgZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXdSb3cgPSBuZXdSb3dIdG1sLmdldCgwKS5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgIGlmIChuZXdMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICQodGJvZHkuZmluZCgndHIubmV3LXJvdycpLmxhc3QoKSkuYWZ0ZXIobmV3Um93KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0Ym9keS5wcmVwZW5kKG5ld1Jvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0xlbmd0aCsrO1xyXG5cclxuICAgICAgICB0Ym9keS5maW5kKCdbZGF0YS1hdXRvaW5jcmVtZW50PVwiMVwiXScpLmxhc3QoKS52YWwodHJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XHJcblxyXG4vKipcclxuICogRHJvcHpvbmUgaW5pdFxyXG4gKlxyXG4gKiBAcGFyYW0gX1xyXG4gKiBAcGFyYW0gaXRlbVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKF8sIGl0ZW0pIHtcclxuICAgIGNvbnN0IGRyb3B6b25lQ29udGFpbmVyID0gJChpdGVtKTtcclxuICAgIGNvbnN0IHByZXZpZXdIaWRkZW5JbnB1dCA9IGRyb3B6b25lQ29udGFpbmVyLmZpbmQoJ2lucHV0Jyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGl0ZW0pXHJcbiAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUNvbnRhaW5lci5kYXRhKCd1cmwnKSlcclxuICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoJycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhbmNlbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoJycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xyXG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKHJlc3BvbnNlLmZpbGVfbmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgcHJldmlld1xyXG4gICAgICovXHJcbiAgICBpZiAoISFwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCkpIHtcclxuICAgICAgICBkcm9wem9uZUJ1aWxkZXJcclxuICAgICAgICAgICAgLnNldFByZXZpZXcoXHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCksXHJcbiAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUNvbnRhaW5lci5kYXRhKCdmb2xkZXInKSwgcHJldmlld0hpZGRlbklucHV0LnZhbCgpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJvcHpvbmUgYnVpbGRcclxuICAgICAqL1xyXG4gICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XHJcbn0iLCIvKipcclxuICogTWFyayBjaGFuZ2VkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQgKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICAkKCcjdXBkYXRlLWFsbCcpLnNob3coKTtcclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcclxuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQYWdlIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoJChcInRyLmNoYW5nZWRcIikuZmluZCgnaW5wdXQsIGlucHV0W3R5cGU9XCJoaWRkZW5cIl0sIHNlbGVjdCwgdGV4dGFyZWEnKSk7XHJcblxyXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoey4uLmRhdGF9KVxyXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwLnR5cGUgPT09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeUVycm9yKHJlc3AubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSb3cgKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgcm93VG9TYXZlID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpO1xyXG4gICAgbGV0IGFjdGlvbiA9IHJvd1RvU2F2ZS5kYXRhKCdhY3Rpb24nKTtcclxuICAgIGxldCByb3cgPSByb3dUb1NhdmUuZmluZChcIi5lZGl0YWJsZSBzZWxlY3QsIC5lZGl0YWJsZSBpbnB1dFwiKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgIGlmKCQoXCJ0ci5jaGFuZ2VkXCIpLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBsZXQgciA9IGNvbmZpcm0oJ0NoYW5nZWQgbW9yZSB0aGFuIG9uZSByb3cuIFNhdmVkIG9ubHkgY3VycmVudCByb3chJyk7XHJcbiAgICAgICAgaWYociAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKCFyb3dUb1NhdmUuaGFzQ2xhc3MoJ2NoYW5nZWQnKSkge1xyXG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQVVRcIixcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIHVybDogYWN0aW9uLFxyXG4gICAgICAgIGRhdGE6IHJvdyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiggcmVzcCApIHtcclxuICAgICAgICAgICAgcm93VG9TYXZlLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3AubWVzc2FnZVxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHJlc3AudHlwZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIGV4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoanFYSFIucmVzcG9uc2VKU09OICYmIGpxWEhSLnJlc3BvbnNlSlNPTi5oYXNPd25Qcm9wZXJ0eSgnZXJyb3JzJykpIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaCgganFYSFIucmVzcG9uc2VKU09OLmVycm9ycywgZnVuY3Rpb24oZXJyb3JLZXksIGVycm9yICkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCggZXJyb3IsIGZ1bmN0aW9uKG1lc3NhZ2VLZXksIG1lc3NhZ2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IERyb3B6b25lIGZyb20gJ2Ryb3B6b25lJztcclxuaW1wb3J0IGRyb3B6b25lSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9kcm9wem9uZUluaXRcIjtcclxuaW1wb3J0IHtzYXZlUGFnZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVBhZ2VcIjtcclxuaW1wb3J0IHttYXJrQ2hhbmdlZH0gZnJvbSBcIi4vaGFuZGxlcnMvbWFya0NoYW5nZWRcIjtcclxuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcclxuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcclxuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0NSRUFURUQsIEFXQVJEX0RFTEVURSwgQ0xPU0VfQVdBUkRfTU9EQUx9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XHJcbmltcG9ydCB7c2F2ZVJvd30gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVJvd1wiO1xyXG5cclxuLyoqXHJcbiAqIFR1cm5lZCBvZmYgdGhlIERyb3B6b25lIGF1dG8gaW5pdFxyXG4gKlxyXG4gKiBAdHlwZSB7Ym9vbGVhbn1cclxuICovXHJcbkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xyXG5cclxuLyoqXHJcbiAqIERyb3B6b25lIGluaXRcclxuICovXHJcbiQoJy5kcm9wem9uZScpLmVhY2goZHJvcHpvbmVJbml0KTtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShDTE9TRV9BV0FSRF9NT0RBTCwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluaXQgY29sb3ItcGlja2VyIGlucHV0c1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgICQoJy5jcDInKS5jb2xvcnBpY2tlcigpO1xyXG5cclxuICAgICAgICAkKCcjdXBkYXRlLWFsbCcpLmNsaWNrKHNhdmVQYWdlKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXBkYXRlLXJvdycpO1xyXG5cclxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xyXG5cclxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIHNlbGYpO1xyXG4gICAgICAgICAgICBzYXZlQnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlUm93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIGF3YXJkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzKSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBhd2FyZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICAgICAgJCgnI3VwZGF0ZS1hbGwnKS5zaG93KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kcm9wem9uZScsIG1hcmtDaGFuZ2VkKVxyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIG1hcmtDaGFuZ2VkKVxyXG4gICAgLm9uKCdpbnB1dCcsICd0Ym9keSBpbnB1dCwgdGJvZHkgdGV4dGFyZWEnLCBtYXJrQ2hhbmdlZClcclxuICAgIC5vbignY2hhbmdlJywgJ3Rib2R5IGlucHV0LCB0Ym9keSBzZWxlY3QnLCBtYXJrQ2hhbmdlZCk7XHJcbiIsImNvbnN0IFdBTEtfQ0FURUdPUlkgPSAnNic7XHJcbmNvbnN0IFJVTl9DQVRFR09SWSA9JzcnO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0MiA9ICQoJy50YWJsZScpLmZpbmQoJy5lbWJlZC1ncm91cCBzZWxlY3Quc2VsZWN0MicpO1xyXG4gICAgICAgIGxldCBzZWxlY3RWYWwgPSAwO1xyXG4gICAgICAgIHNlbGVjdDIuZWFjaChmdW5jdGlvbiAobiwgaSkge1xyXG4gICAgICAgICAgICBzZWxlY3RWYWwgPSAkKGkpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcclxuICAgICAgICAgICAgICAgICQoaSkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChpKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgaGlkZSBzcGVlZCBvbiB0cmlnZ2VyIGFkZC1lbWJlZCBidXR0b25cclxuICAgICAqL1xyXG4gICAgLm9uKCdhaV9hbmltYXRpb24nLCAnLmFkZC1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBlbWJlZCA9ICQodGhpcykuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJyk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0VmFsID0gZW1iZWQuZmluZCgnLnNlbGVjdDInKS52YWwoKTtcclxuICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcclxuICAgICAgICAgICAgZW1iZWQuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVtYmVkLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBoaWRlIHNwZWVkXHJcbiAgICAgKi9cclxuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RWYWwgPSAkKGl0ZW0udGFyZ2V0KS52YWwoKTtcclxuICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcclxuICAgICAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IFNIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0gPSAnU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSc7XHJcbiIsIi8qKlxyXG4gKiBBZGQgYSBuZXcgc2hvcCBpbiBhIGRlcGFydG1lbnRzIGdyaWRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XHJcbiAgICBjb25zdCB0YWJsZSA9IGN1cnJlbnRCdG4uY2xvc2VzdCgnLnNob3BzLXRhYmxlJykuZmluZCgndGJvZHknKTtcclxuICAgIGNvbnN0IGRlcGFydG1lbnRJZCA9IGN1cnJlbnRCdG4uZGF0YSgnZGVwYXJ0bWVudCcpO1xyXG4gICAgbGV0IGNvdW50ZXIgPSBwYXJzZUludChjdXJyZW50QnRuLmRhdGEoJ2NvdW50JykpO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSAkKCcjc2hvcC10ZW1wbGF0ZScpXHJcbiAgICAgICAgLmh0bWwoKVxyXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJyVkZXBhcnRtZW50SWQlJywgXCJnXCIpLCBkZXBhcnRtZW50SWQpXHJcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnJWluZGV4JScsIFwiZ1wiKSwgY291bnRlcisrKTtcclxuXHJcbiAgICBjdXJyZW50QnRuLmRhdGEoJ2NvdW50JywgY291bnRlcik7XHJcblxyXG4gICAgdGFibGUuYXBwZW5kKHRlbXBsYXRlKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xyXG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIEZhc3Qgc2F2ZSBmb3Igc2hvcCBkZXBhcnRtZW50XHJcbiAqXHJcbiAqIEBwYXJhbSBlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBzaG9wTmFtZVByZWZpeCA9ICdzaG9wJztcclxuICAgIGNvbnN0IGRlcGFydG1lbnROYW1lUHJlZml4ID0gJ2RlcGFydG1lbnQnO1xyXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XHJcbiAgICBjb25zdCBmYXN0U2F2ZUNvbnRhaW5lciA9ICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJyk7XHJcblxyXG4gICAgbGV0IHNob3BzID0ge307XHJcbiAgICBsZXQgZGVwYXJ0bWVudCA9IHt9O1xyXG5cclxuICAgIGZhc3RTYXZlQ29udGFpbmVyLmZpbmQoJ3Rib2R5IHRyLmNoYW5nZWQgdHIuaW5mbycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBkZXBpbmRleCA9ICQodGhpcykuY2xvc2VzdCgnLmRlcGFydG1lbnQnKS5pbmRleCgpO1xyXG4gICAgICAgIGxldCBkZXBhcnRtZW50Rm9ybURhdGEgPSBnZXRGb3JtRGF0YSgkKHRoaXMpKTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGRlcGFydG1lbnRGb3JtRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGAke2RlcGFydG1lbnROYW1lUHJlZml4fVske2RlcGluZGV4fV1bJHtpfV1gO1xyXG4gICAgICAgICAgICBkZXBhcnRtZW50W2l0ZW1OYW1lXSA9IGRlcGFydG1lbnRGb3JtRGF0YVtpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQodGhpcykubmV4dCgndHIuc2hvcHMnKS5maW5kKCd0Ym9keS5zb3J0YWJsZSB0cicpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IGdldEZvcm1EYXRhKCQodGhpcykpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGAke3Nob3BOYW1lUHJlZml4fVske2RlcGFydG1lbnRGb3JtRGF0YS5pZH1dWyR7aW5kZXh9XVske2l9XWA7XHJcbiAgICAgICAgICAgICAgICBzaG9wc1tpdGVtTmFtZV0gPSBmb3JtRGF0YVtpXTtcclxuICAgICAgICAgICAgICAgIHNob3BzW2Ake3Nob3BOYW1lUHJlZml4fVske2RlcGFydG1lbnRGb3JtRGF0YS5pZH1dWyR7aW5kZXh9XVtkZXBhcnRtZW50XWBdID0gZGVwYXJ0bWVudEZvcm1EYXRhLmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoey4uLnNob3BzLCAuLi5kZXBhcnRtZW50fSlcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICQoJy5jaGFuZ2VkJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBSYWRpbyBpbnB1dCBmcm9tIGNoZWNrYm94XHJcbiAqIEJlY2F1c2UgaW5wdXRbdHlwZT1yYWRpb10gZGlkIG5vdCB3b3JrIGNvcnJlY3RseVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgYWxsSXRlbXMgPSBjdXJyZW50SXRlbS5jbG9zZXN0KCcudGFibGUnKS5maW5kKCcucmFkaW8nKTtcclxuXHJcbiAgICBhbGxJdGVtcy5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgYWxsSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcclxuXHJcbiAgICBjdXJyZW50SXRlbS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICBjdXJyZW50SXRlbS5hZGRDbGFzcygnY2hlY2tlZCcpO1xyXG59XHJcbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcclxuXHJcbi8qKlxyXG4gKiBTb3J0YWJsZSBJbml0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXcgU29ydGFibGUodGhpcywge1xyXG4gICAgICAgIGdyb3VwOiAnZGVwYXJ0bWVudCcsXHJcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXHJcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKS5maW5kKCd0ci5kZXBhcnRtZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICByYWRpbzogJChlLml0ZW0pLmZpbmQoJy5yYWRpbycpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogJChlLml0ZW0pLmNsb3Nlc3QoJy50YWJsZScpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcclxuXHJcbi8qKlxyXG4gKiBTb3J0YWJsZSBJbml0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXcgU29ydGFibGUodGhpcywge1xyXG4gICAgICAgIGdyb3VwOiAnc2hvcHMnLFxyXG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxyXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAkKGUuaXRlbSkuY2xvc2VzdCgndHIuZGVwYXJ0bWVudCcpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaW86ICQoZS5pdGVtKS5maW5kKCcucmFkaW8nKSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6ICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucGFyZW50LmZpbmQoJy5yYWRpby5jaGVja2VkOmd0KDApJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yYWRpby5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmFkaW8ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XHJcbmltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogRHJvcHpvbmUgaW5pdCBhZnRlciB0aGUgbW9kYWwgb3BlbmVkXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSwgKCkgPT4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByZXZpZXdcclxuICAgICAgICAgKi9cclxuICAgICAgICBkcm9wem9uZUluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybCcpKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUHJldmlldyBTbWFsbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRyb3B6b25lSW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUtc21hbGwnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsLXNtYWxsJykpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEcm9wem9uZSBJbml0XHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRyb3B6b25lRWxlbWVudFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwcmV2aWV3VXJsRWxlbWVudFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGRyb3B6b25lSW5pdChkcm9wem9uZUVsZW1lbnQsIHByZXZpZXdVcmxFbGVtZW50KSB7XHJcbiAgICBpZiAoIWRyb3B6b25lRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGRyb3B6b25lQnVpbGRlciA9IG5ldyBEcm9wem9uZUJ1aWxkZXIoZHJvcHpvbmVFbGVtZW50KVxyXG4gICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQudXJsKVxyXG4gICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgJChwcmV2aWV3VXJsRWxlbWVudCkudmFsKCcnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYW5jZWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKHByZXZpZXdVcmxFbGVtZW50KS52YWwoJycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICQoZHJvcHpvbmVFbGVtZW50KS5maW5kKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcclxuICAgICAgICAgICAgcHJldmlld1VybEVsZW1lbnQudmFsdWUgPSByZXNwb25zZS5maWxlX25hbWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgcHJldmlld1xyXG4gICAgICovXHJcbiAgICBpZiAocHJldmlld1VybEVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyXHJcbiAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxyXG4gICAgICAgICAgICAgICAgcHJldmlld1VybEVsZW1lbnQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC5mb2xkZXIsIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJvcHpvbmUgYnVpbGRcclxuICAgICAqL1xyXG4gICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XHJcbn0iLCJpbXBvcnQgYWRkU2hvcCBmcm9tIFwiLi9oYW5kbGVycy9hZGRTaG9wXCI7XHJcbmltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVwiO1xyXG5pbXBvcnQgcmFkaW9JbnB1dCBmcm9tIFwiLi9oYW5kbGVycy9yYWRpb0lucHV0XCI7XHJcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcclxuaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwibW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XHJcbmltcG9ydCBzb3J0YWJsZURlcGFydG1lbnRJbml0IGZyb20gXCJtb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZURlcGFydG1lbnRJbml0XCI7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5cclxuLyoqXHJcbiAqIERyb3B6b25lIGluaXRcclxuICovXHJcbnNob3dGb3JtKCk7XHJcblxyXG4kKGRvY3VtZW50KVxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWRpbyBidXR0b25zIGJlaGF2aW9yXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJy5yYWRpbycsIHJhZGlvSW5wdXQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0ci5kZXBhcnRtZW50JykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2N1bWVudCByZWFkeVxyXG4gICAgICovXHJcbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCBjbGFzcyB0byBjaGVja2VkIHJhZGlvc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgICQoJy5yYWRpb1tjaGVja2VkXScpLmFkZENsYXNzKCdjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCBhIG5ldyBzaG9wIGluIGEgZGVwYXJ0bWVudHMgZ3JpZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICQoJy5hZGQtc2hvcCcpLmNsaWNrKGFkZFNob3ApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGYXN0IHNhdmVcclxuICAgICAgICAgKi9cclxuICAgICAgICAkKCcuZmFzdC1zYXZlJykuY2xpY2soZmFzdFNhdmUpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYWtlIHRyIHRvIHNvcnRhYmxlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYWtlIHRyIHRvIHNvcnRhYmxlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJCgnLnNvcnRhYmxlLWRlcGFydG1lbnQnKS5lYWNoKHNvcnRhYmxlRGVwYXJ0bWVudEluaXQpO1xyXG4gICAgfSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtZWFsIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcclxuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNyZWxlYXNlID4gdGJvZHknKTtcclxuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNyZWxlYXNlX3RlbXBsYXRlJykuaHRtbCgpO1xyXG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcucmVsZWFzZV9pZCcpLnZhbCgpO1xyXG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lcmVsZWFzZSUvZywgaSArIGluY3JlbWVudElkKSk7XHJcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XHJcblxyXG4gICAgICAgIHRib2R5LmZpbmQoJy5kYXRldGltZXBpY2tlcicpXHJcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcclxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlUGFnZSAoKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcclxuICAgIGNvbnN0IHRib2R5ID0gJCgnLnJlbGVhc2Utc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWRcIik7XHJcbiAgICBjb25zdCBkYXRhID0gJCgnLnJlbGVhc2Utc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdCwgLmNoYW5nZWQgdGV4dGFyZWFcIikuc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgaHR0cChyb3V0ZSlcclxuICAgICAgICAubWV0aG9kKCdQT1NUJylcclxuICAgICAgICAuZGF0YShkYXRhKVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgdGJvZHkuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xyXG4gICAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XHJcbmltcG9ydCB7c2F2ZVBhZ2V9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KTtcclxuXHJcbi8qKlxyXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXHJcbiAqL1xyXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZVBhZ2UpO1xyXG4iLCIkKGRvY3VtZW50KVxyXG5cclxuICAgIC5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCd0ZCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmF0dHIoJ3N0eWxlJykpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQnLCAnI2U3ZTdlNycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuIiwiLyoqXHJcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcclxuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNzb3VuZCA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjc291bmRfdGVtcGxhdGUnKS5odG1sKCk7XHJcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5zb3VuZF9pZCcpLnZhbCgpO1xyXG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lc291bmRfaWQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xyXG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNvdW5kU3RhdGUgKCkge1xyXG4gICAgY29uc3QgZGF0YSA9ICQoJy5zb3VuZC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgaWYoZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXHJcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgICAgIC5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7c2F2ZVNvdW5kU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlXCI7XHJcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0aGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU291bmRTdGF0ZSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXHJcbiAgICAgKiBDaGFuZ2UgY291bnRlclxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcclxuICAgIH0pO1xyXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBUQU1BVE9PTF9TSE9XX0ZPUk0gPSAnVEFNQVRPT0xfU0hPV19GT1JNJztcclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtUQU1BVE9PTF9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShUQU1BVE9PTF9TSE9XX0ZPUk0sIChkYXRhLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoVEFNQVRPT0xfU0hPV19GT1JNLCBzZWxmKTtcclxuXHJcbiAgICAgICAgJCgnLm5laWdoYm9yLWFjdGl2aXR5LWZvcm0gLmRhdGVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XHJcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxyXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcclxuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcclxuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xyXG5cclxuJChkb2N1bWVudClcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSk7XHJcblxyXG4vKipcclxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cclxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXHJcbiAqL1xyXG4kKCcuc2hvdy1mb3JtJylcclxuICAgIC5jbGljayhzaG93Rm9ybSk7XHJcbiIsImV4cG9ydCBjb25zdCBTRUFSQ0hfVVNFUl9BU1NFVFMgICAgICA9ICdTRUFSQ0hfVVNFUl9BU1NFVFMnO1xyXG5leHBvcnQgY29uc3QgU1VCTUlUX1VTRVJfUEFSVF9GT1JNICAgPSAnU1VCTUlUX1VTRVJfUEFSVF9GT1JNJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9ORUlHSEJPUiAgICAgICAgID0gJ0RFTEVURV9ORUlHSEJPUic7XHJcbmV4cG9ydCBjb25zdCBBRERfTkVJR0hCT1IgICAgICAgICAgICA9ICdBRERfTkVJR0hCT1InO1xyXG5leHBvcnQgY29uc3QgR0VUX05FSUdIQk9SUyAgICAgICAgICAgPSAnR0VUX05FSUdIQk9SUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTkVJR0hCT1JTICAgICAgICA9ICdVUERBVEVfTkVJR0hCT1JTJztcclxuXHJcbmV4cG9ydCBjb25zdCBORUlHSEJPUl9HUklEX0lEID0gJ25laWdoYm9yLWdyaWQnOyIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcclxuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XHJcblxyXG4vKipcclxuICogQWRkIGNvbW1lbnRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoJCgnI2NvbGxlY3RpYmxlLWZvcm0nKS5maW5kKCdpbnB1dCcpKTtcclxuXHJcbiAgICBuZXcgaHR0cCgkKCcjYWRkLWNvbGxlY3RpYmxlJykuYXR0cignaHJlZicpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BPU1QnKVxyXG4gICAgICAgIC5kYXRhKHtkYXRhfSlcclxuICAgICAgICAuc3VjY2VzcyhyZXNwID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3AudHlwZSA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtID0gJChyZXNwLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgJCgnIycgKyByZXNwLmNvbnRhaW5lcikucmVwbGFjZVdpdGgoZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBub3RpZnlTdWNjZXNzKCdVc2VyIGNvbGxlY3RpYmxlIHVwZGF0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIEFkZCBjb21tZW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIG5ldyBodHRwKCQodGhpcykuY2xvc2VzdCgnYScpLmF0dHIoJ2hyZWYnKSlcclxuICAgICAgICAubWV0aG9kKCdQT1NUJylcclxuICAgICAgICAuZGF0YSh7ZGVzY3JpcHRpb246ICQoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWwoKX0pXHJcbiAgICAgICAgLnN1Y2Nlc3MociA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyLnN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgJCgnW25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjdXNlci1jb21tZW50cycpLnByZXBlbmQoJzx0cj48dGQ+JyArIHIubW9kZWwuZGVzY3JpcHRpb24gKyAnPC90ZD48dGQ+JyArIHIuY3JlYXRlZF9ieSArICc8L3RkPjx0ZD4nICsgci5jcmVhdGVkX2F0ICsgJyBQU1Q8L3RkPjx0ZD48YSBocmVmPVwiaHR0cDovL2Ntcy1kZXYubG9jYWwvcmVtb3ZlLWNvbW1lbnQvJyArIHIubW9kZWwuaWQgKyAnXCIgY2xhc3M9XCJhamF4LWNvbmZpcm0tYWN0aW9uXCIgZGF0YS1tZXRob2Q9XCJERUxFVEVcIiBkYXRhLWhlYWRlcj1cIkRlbGV0ZSBjb21tZW50P1wiIGRhdGEtYnRuLW5hbWU9XCJEZWxldGVcIiBkYXRhLWJ0bi1jbGFzcz1cImJ0bi1kYW5nZXIgYnRuLXNtXCIgZGF0YS1kaXNtaXNzPVwiMVwiIGRhdGEtcmVsb2FkPVwiMVwiPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+RGVsZXRlPC9idXR0b24+PC9hPjwvdGQ+PC90cj4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFN5bmNocm9uaXplIG1vdmUtcGxhY2VtZW50LXNlbGVjdCBzZWxlY3RzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWRTdG9yYWdlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQodGhpcykucGFyZW50cygnZm9ybScpLmZpbmQoJy5tb3ZlLXBsYWNlbWVudC1zZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkU3RvcmFnZSAhPSAkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudmFsKHNlbGVjdGVkU3RvcmFnZSkuY2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQge1VQREFURV9ORUlHSEJPUlMsIE5FSUdIQk9SX0dSSURfSUR9IGZyb20gXCJtb2R1bGVzL3VzZXJzL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFNldCBwYWdlIGxpbWl0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJykgKyAnJnBhZ2VfbGltaXQ9JyArICQodGhpcykudmFsKCk7XHJcbiAgICBuZXcgaHR0cChyb3V0ZSlcclxuICAgICAgICAubWV0aG9kKCdHRVQnKVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgJChgIyR7TkVJR0hCT1JfR1JJRF9JRH1gKS5yZXBsYWNlV2l0aChyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBDaGFuZ2UgcGxhY2VtZW50IHNlbGVjdCBpbiBBZGQgQXNzZXRzIGJsb2NrXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBwbGFjZW1lbnROYW1lID0gJCgnI2FkZC1hc3NldHMtYmxvY2stcGxhY2VtZW50LW5hbWUnKTtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpID4gMCkge1xyXG4gICAgICAgIHBsYWNlbWVudE5hbWUuaGlkZSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBsYWNlbWVudE5hbWUuc2hvdygpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDaGFuZ2UgbW9kZSBmb3IgYWRkIG5laWdoYm9yc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbmVpZ2hib3JzQ291bnQgPSAkKCcjbmVpZ2hib3JzLWNvdW50Jyk7XHJcbiAgICBpZigkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzQ291bnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmVpZ2hib3JzQ291bnQuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogSGlkZSBhc3NldHMgaW4gcGxhY2VtZW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcclxuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XHJcbiAgICBjdXJyZW50RWxlbWVudC5zaWJsaW5ncygnLmxvYWQtYXNzZXRzJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICQoJyNhc3NldC1jb250YWluZXItJyArIGN1cnJlbnRFbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcpKS5odG1sKCcnKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIFBMQUNFTUVOVF9BU1NFVFNfUk9VVEUgLSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcclxuICogSW5pdGVkIGluIHVzZXIvZWRpdC5ibGFkZS5waHBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgbGV0IHBsYWNlbWVudCA9IGN1cnJlbnRFbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcpO1xyXG5cclxuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XHJcbiAgICBjdXJyZW50RWxlbWVudC5zaWJsaW5ncygnLmhpZGUtYXNzZXRzJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcclxuXHJcbiAgICBsb2FkUGFydChQTEFDRU1FTlRfQVNTRVRTX1JPVVRFICsgJyZwbGFjZW1lbnQ9JyArIHBsYWNlbWVudCwgJCgnI2Fzc2V0LWNvbnRhaW5lci0nICsgcGxhY2VtZW50KSk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogTG9hZCBwYXJ0IGZvciBlZGl0IHVzZXIgcGFnZVxyXG4gKi9cclxuZnVuY3Rpb24gbG9hZFBhcnQoYWN0aW9uLCBlbGVtZW50KSB7XHJcbiAgICBuZXcgaHR0cChhY3Rpb24pXHJcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gJChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGl0ZW1zLmZpbmQoJy5saXN0LXRodW1ibmFpbCcpLnBvcG92ZXIoe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiAnYm9keScsXHJcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiJyArICQodGhpcykuZGF0YSgnZnVsbCcpICsgJ1wiPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGl0ZW1zKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcbn0iLCIvKipcclxuICogU2VsZWN0IHJvd3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNvdW50U2VsZWN0b3IgPSAkKHRoaXMpLnBhcmVudHMoJ3RkLCB0aCcpLmZpbmQoJy5jb3VudC1mb3Itc2VsZWN0Jyk7XHJcbiAgICBjb25zdCByb3dzRm9yU2VsZWN0ID0gJCh0aGlzKS5wYXJlbnRzKCd0YWJsZScpLmZpbmQoJy5mb3Itc2VsZWN0Jyk7XHJcblxyXG4gICAgbGV0IGNvdW50Rm9yU2VsZWN0ID0gY291bnRTZWxlY3Rvci52YWwoKSB8fCAwO1xyXG4gICAgaWYgKGNvdW50Rm9yU2VsZWN0ID09PSAwKSB7XHJcbiAgICAgICAgY291bnRGb3JTZWxlY3QgPSByb3dzRm9yU2VsZWN0Lmxlbmd0aDtcclxuICAgICAgICBjb3VudFNlbGVjdG9yLnZhbChjb3VudEZvclNlbGVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICByb3dzRm9yU2VsZWN0LmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKGNvdW50Rm9yU2VsZWN0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvdW50Rm9yU2VsZWN0LS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByb3dzRm9yU2VsZWN0LmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IHtVUERBVEVfTkVJR0hCT1JTLCBORUlHSEJPUl9HUklEX0lEfSBmcm9tIFwibW9kdWxlcy91c2Vycy9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgbmVpZ2hib3IgZ3JpZFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFVQREFURV9ORUlHSEJPUlMsIChyZXNwb25zZSwgc2VsZikgPT4ge1xyXG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKFVQREFURV9ORUlHSEJPUlMsIHNlbGYpO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuYXR0cignYWN0aW9uJykpXHJcbiAgICAgICAgICAgICAgICAubWV0aG9kKCdHRVQnKVxyXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoYCMke05FSUdIQk9SX0dSSURfSUR9YCkucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtBRERfTkVJR0hCT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBTZXQgbmVpZ2hib3IgYXMgYWN0aXZlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQUREX05FSUdIQk9SLCByZXNwID0+IHtcclxuICAgICAgICBpZiAocmVzcC50eXBlID09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAkKCcjZGVsZXRlLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgJCgnI2FkZC1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJyNuZWlnaGJvci1zdGF0dXMtJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuaHRtbChyZXNwLmRhdGEuc3RhdHVzX3RleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7REVMRVRFX05FSUdIQk9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogU2V0IG5laWdoYm9yIGFzIGRlbGV0ZWRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShERUxFVEVfTkVJR0hCT1IsIHJlc3AgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICQoJyNkZWxldGUtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAkKCcjYWRkLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgJCgnI25laWdoYm9yLXN0YXR1cy0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5odG1sKHJlc3AuZGF0YS5zdGF0dXNfdGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtHRVRfTkVJR0hCT1JTLCBORUlHSEJPUl9HUklEX0lEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIG5laWdoYm9yIGdyaWQgaW4gc2VhcmNoaW5nXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoR0VUX05FSUdIQk9SUywgcmVzcCA9PiB7XHJcbiAgICAgICAgJChgIyR7TkVJR0hCT1JfR1JJRF9JRH1gKS5yZXBsYWNlV2l0aChyZXNwKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7U0VBUkNIX1VTRVJfQVNTRVRTfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogU2VhcmNoIHVzZXIgYXNzZXRzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0VBUkNIX1VTRVJfQVNTRVRTLCBkYXRhID0+IHtcclxuICAgICAgICAkKCcjc2VhcmNoLWFzc2V0cy1jb250YWluZXInKS5yZXBsYWNlV2l0aChkYXRhKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XHJcbmltcG9ydCB7U1VCTUlUX1VTRVJfUEFSVF9GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogU3VibWl0IHVzZXIgcGFydCBmb3JtXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU1VCTUlUX1VTRVJfUEFSVF9GT1JNLCByZXNwID0+IHtcclxuICAgICAgICBsZXQgZm9ybSA9ICQocmVzcC5kYXRhKTtcclxuXHJcbiAgICAgICAgJCgnIycgKyByZXNwLmNvbnRhaW5lcikucmVwbGFjZVdpdGgoZm9ybSk7XHJcbiAgICAgICAgZm9ybS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcclxuYCAgICAgICAgbm90aWZ5U3VjY2VzcygnVXNlciBkYXRhIHVwZGF0ZWQnKTtcclxuYCAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoVXNlckFzc2V0cyAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9zZWFyY2hVc2VyQXNzZXRzXCI7XHJcbmltcG9ydCBzdWJtaXRVc2VyUGFydEZvcm0gICAgZnJvbSBcIi4vbGlzdGVuZXJzL3N1Ym1pdFVzZXJQYXJ0Rm9ybVwiO1xyXG5pbXBvcnQgZGVsZXRlTmVpZ2hib3IgICAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9kZWxldGVOZWlnaGJvclwiO1xyXG5pbXBvcnQgc2VhcmNoTmVpZ2hib3IgICAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9zZWFyY2hOZWlnaGJvclwiO1xyXG5pbXBvcnQgYWRkTmVpZ2hib3IgICAgICAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9hZGROZWlnaGJvclwiO1xyXG5pbXBvcnQgbG9hZFBsYWNlbWVudEFzc2V0cyAgIGZyb20gXCIuL2hhbmRsZXJzL2xvYWRQbGFjZW1lbnRBc3NldHNcIjtcclxuaW1wb3J0IGhpZGVQbGFjZW1lbnRBc3NldHMgICBmcm9tIFwiLi9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzXCI7XHJcbmltcG9ydCBjaGFuZ2VQbGFjZW1lbnQgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUGxhY2VtZW50XCI7XHJcbmltcG9ydCBjaGFuZ2VSYW5kb21OZWlnaGJvcnMgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUmFuZG9tTmVpZ2hib3JzXCI7XHJcbmltcG9ydCBjaGFuZ2VNb3ZlUGxhY2VtZW50ICAgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlTW92ZVBsYWNlbWVudFwiO1xyXG5pbXBvcnQgc2VsZWN0Um93cyAgICAgICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL3NlbGVjdFJvd3NcIjtcclxuaW1wb3J0IHVwZGF0ZU5laWdoYm9ycyAgICAgICBmcm9tIFwiLi9oYW5kbGVycy91cGRhdGVOZWlnaGJvcnNcIjtcclxuaW1wb3J0IGNoYW5nZVBhZ2VMaW1pdCAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VQYWdlTGltaXRcIjtcclxuaW1wb3J0IGFkZENvbW1lbnQgICAgICAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9hZGRDb21tZW50XCI7XHJcbmltcG9ydCBhZGRDb2xsZWN0aWJsZSAgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvYWRkQ29sbGVjdGlibGVcIjtcclxuXHJcbmltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbi8qKlxyXG4gKiBTZWFyY2ggdXNlciBhc3NldHMgbGlzdGVuZXJcclxuICovXHJcbnNlYXJjaFVzZXJBc3NldHMoKTtcclxuXHJcbi8qKlxyXG4gKiBTdWJtaXQgdXNlciBwYXJ0IGZvcm0gbGlzdGVuZXJcclxuICovXHJcbnN1Ym1pdFVzZXJQYXJ0Rm9ybSgpO1xyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBOZWlnaGJvclxyXG4gKi9cclxuZGVsZXRlTmVpZ2hib3IoKTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgTmVpZ2hib3JcclxuICovXHJcbmFkZE5laWdoYm9yKCk7XHJcblxyXG4vKipcclxuICogU2VhcmNoIE5laWdoYm9yc1xyXG4gKi9cclxuc2VhcmNoTmVpZ2hib3IoKTtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGFzc2V0cyBpbiBwbGFjZW1lbnRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcubG9hZC1hc3NldHMnLCBsb2FkUGxhY2VtZW50QXNzZXRzKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIHBsYWNlbWVudCBpbiBBZGQgQXNzZXRzIGJsb2NrXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJyNwbGFjZW1lbnQtZm9yLWFzc2V0JywgY2hhbmdlUGxhY2VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcclxuICAgICAqL1xyXG4gICAgLm9uKCdjaGFuZ2UnLCAnI2lzLXJhbmRvbS1uZWlnaGJvcnMnLCBjaGFuZ2VSYW5kb21OZWlnaGJvcnMpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIGFzc2V0cyBpbiBwbGFjZW1lbnRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hc3NldHMnLCBoaWRlUGxhY2VtZW50QXNzZXRzKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXV0byBzZWxlY3Qgcm93c1xyXG4gICAgICovXHJcbiAgICAub24oJ2NoYW5nZScsICcuc2VsZWN0LXJvd3MnLCBzZWxlY3RSb3dzKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3luY2hyb25pemUgbW92ZS1wbGFjZW1lbnQtc2VsZWN0IHNlbGVjdHNcclxuICAgICAqL1xyXG4gICAgLm9uKCdjaGFuZ2UnLCAnLm1vdmUtcGxhY2VtZW50LXNlbGVjdCcsIGNoYW5nZU1vdmVQbGFjZW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgbmVpZ2hib3IgcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtbmVpZ2hib3ItcmVxdWVzdCwgI2FkZC1uZWlnaGJvcnMnLCB1cGRhdGVOZWlnaGJvcnMpXHJcbiAgICAvKipcclxuICAgICAqIFNldCBwYWdlIGxpbWl0XHJcbiAgICAgKi9cclxuICAgICAub24oJ2NoYW5nZScsICcubmVpZ2hib3ItcGFnZS1saW1pdCcsIGNoYW5nZVBhZ2VMaW1pdClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBjb21tZW50XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnI2FkZC1jb21tZW50JywgYWRkQ29tbWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBjb2xsZWN0aWJsZVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJyNhZGQtY29sbGVjdGlibGUnLCBhZGRDb2xsZWN0aWJsZSlcclxuO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9