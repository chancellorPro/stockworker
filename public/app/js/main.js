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
  }).complete(function () {
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

$(document).on('click', '#product_id', function () {
  $('#product_id').prev('.select2-container').find('.select2-search__field').focus();
}).on('click', '#send-report', function (e) {
  e.preventDefault();
  $(this).closest("form").submit();
  return false;
}).on('click', '.reports', function (e) {
  var _this = this;

  e.preventDefault();
  $('#send-report').attr('disabled', true);
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
        if (!!response.responseJSON) {
          _this._error(response.responseJSON);
        }
      },
      success: function success(r) {
        console.log('success');
        canvas_handler.empty();

        if (r.hasOwnProperty('success')) {
          $('.modal-title').text(r.success);
          $('.modal-header').css('background', '#a7ff83');
        } else {
          new ModalBuilder().header('Предпросмотр отчета').body(r).modal();
        }
      },
      complete: function complete(r) {
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
      canvas_handler.css('width', 760);
      html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(copy_ele, {
        scrollX: 0,
        scrollY: 0,
        useCORS: true
      }).then(function (canvas) {
        var imageData = canvas.toDataURL("image/png");
        var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $('#canvas-data').val(newData);
        $('#send-report').attr('disabled', false); // element.append(canvas_handler.html())

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
/*! exports provided: AWARD_CREATE, AWARD_CREATED, AWARD_DELETE, CLOSE_AWARD_MODAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_CREATE", function() { return AWARD_CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_CREATED", function() { return AWARD_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARD_DELETE", function() { return AWARD_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_AWARD_MODAL", function() { return CLOSE_AWARD_MODAL; });
var AWARD_CREATE = 'AWARD_CREATE';
var AWARD_CREATED = 'AWARD_CREATED';
var AWARD_DELETE = 'AWARD_DELETE';
var CLOSE_AWARD_MODAL = 'CLOSE_AWARD_MODAL';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L3Byb2plY3RzL3N0b2Nrd29ya2VyL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbENvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29ic2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2V4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvYWRkRW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvYWpheFBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvY29uZmlybU1vZGFsLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2Zhc3RTYXZlLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9maWx0ZXJEYXRlUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvbW9kYWxEYXRhLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3BhZ2VMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9yZW1vdmVFbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9zdWJtaXRGb3JtLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0RmlsZVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldFN1YkZvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmRDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2F3YXJkRGVsZXRlLmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9kcm9wWm9uZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL3VwZGF0ZVNhdmVBbGxCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcyBzeW5jIFxcLlxcL1tcXHctX10rXFwvbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMgc3luYyBtb2R1bGVzKC4qKW1vZHVsZVxcLmpzJCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWRkLW1lL2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FkZC1tZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy1sb2cvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9jb3B5QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2Rvd25sb2FkQXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2dldExhc3RDb2xsZWN0aW9uTnVtYmVyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL21hcmtDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2F3YXJkL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9oYW5kbGVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvY29weUFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9kb3dubG9hZEFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2hpZGVBcmNoaXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvaGlkZVRhc2tzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2VsZWN0Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2hvd0FyY2hpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9zaG93VGFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Nyb3AvaGFuZGxlcnMvYWRkUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY3JvcC9oYW5kbGVycy9kZWxldGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jcm9wL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3Qvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2RlcGxveVN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3lQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2R5ZVNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvYXNzZXRDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvc29ydGFibGVJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvbGlzdGVuZXJzL2FkZFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL2hhbmRsZXJzL3Nob3dBc3NldC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SUQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9tZWFsRGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9zYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L2hhbmRsZXJzL3ByaWNlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2UvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2Uvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2Ryb3B6b25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL21hcmtDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvaGFuZGxlcnMvc2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9zYXZlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL2FkZFNob3AuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvcmFkaW9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZURlcGFydG1lbnRJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2FkZENvbGxlY3RpYmxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvYWRkQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZU1vdmVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VQYWdlTGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VSYW5kb21OZWlnaGJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvbG9hZFBsYWNlbWVudEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL3NlbGVjdFJvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy91cGRhdGVOZWlnaGJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvYWRkTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJTSVpFUyIsInNtIiwibWQiLCJsZyIsIkxPQURJTkdfVEVYVCIsImRyb3B6b25lQ29udGFpbmVyIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9kcm9wem9uZUNvbnRhaW5lciIsIl9jYW5jZWxCdXR0b24iLCIkIiwiZmluZCIsInVybCIsIl91cGxvYWRVcmwiLCJuYW1lIiwiX3ByZXZpZXciLCJjYWxsYmFjayIsIl9lcnJvckNhbGxiYWNrIiwiX2NhbmNlbENhbGxiYWNrIiwiX3N1Y2Nlc3NDYWxsYmFjayIsIl9kcm9wem9uZUJ1aWxkZXIiLCJkcm9wem9uZUZhaWwiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidXBsb2FkTXVsdGlwbGUiLCJhY2NlcHRlZEZpbGVzIiwiaGVhZGVycyIsIkNTUkZfVE9LRU4iLCJpbml0IiwiZW1pdCIsIm9uIiwidGV4dCIsImZpbGUiLCJyZXNwb25zZSIsImNsaWNrIiwiRHJvcHpvbmUiLCJfdXJsIiwiX21ldGhvZCIsIl9kYXRhIiwiX2Vycm9yIiwiZXJyb3JIYW5kbGVyIiwiX3N1Y2Nlc3MiLCJzdWNjZXNzSGFuZGxlciIsIl9jb21wbGV0ZSIsIm1ldGhvZCIsImRhdGEiLCJmbiIsImFqYXgiLCJ0eXBlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJub3RpZnlFcnJvciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJub3RpZnlTdWNjZXNzIiwibW9kYWxzQ29udGFpbmVyIiwiTU9EQUxfU0laRVMiLCJtb2RhbEluZGV4IiwibW9kYWxDb3VudGVyIiwiX2lkIiwic2l6ZSIsIl9zaXplIiwiaGVhZGVyIiwiX2hlYWRlciIsImJvZHkiLCJfYm9keSIsImZvb3RlciIsIl9mb290ZXIiLCJkYXRhc2V0IiwiX2RhdGFzZXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJfYmVmb3JlQnVpbGRDYWxsYmFjayIsIl9hZnRlckJ1aWxkQ2FsbGJhY2siLCJfb25DbG9zZUNhbGxiYWNrIiwiY29udGVudCIsInB1c2giLCJodG1sIiwiX2dldElEIiwiam9pbiIsIl9nZXRTaXplIiwiX2JlZm9yZUJ1aWxkIiwiX2dldEhlYWRlciIsIl9nZXRCb2R5IiwiX2dldEZvb3RlciIsInNlbGVjdDIiLCJkYXRldGltZXBpY2tlciIsImZvcm1hdCIsImF1dG9jbG9zZSIsIm1pblZpZXciLCJzdGlja3lUYWJsZUhlYWRlcnMiLCJfYWZ0ZXJCdWlsZCIsIm9mZiIsIl9vbkNsb3NlIiwibW9kYWwiLCJnZXRNb2RhbENvdW50ZXIiLCJtb2RhbENvbmZpcm0iLCJNb2RhbEJ1aWxkZXIiLCJub3RpZnkiLCJ6X2luZGV4IiwiRXZlbnRPYnNlcnZlciIsInN1YnNjcmliZXJzIiwiZXZlbnQiLCJoYW5kbGVyIiwiX2xvZyIsImZvckVhY2giLCJzdGF0ZSIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJ0b1VwcGVyQ2FzZSIsIm9ic2VydmVyIiwiU2F2ZWRJdGVtTm90Rm91bmQiLCJFcnJvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRCdXR0b24iLCJ0YXJnZXQiLCJ0ZW1wbGF0ZSIsImlkUGxhY2Vob2xkZXIiLCJyb3dJZCIsImVtYmVkRm9ybSIsImVtYmVkQmxvY2tJZCIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiUmVnRXhwIiwibGVuZ3RoIiwiZGlzcGF0Y2giLCJ0cmlnZ2VyIiwiY29udGFpbmVyIiwicGFyZW50cyIsImh0dHAiLCJyZXBsYWNlV2l0aCIsInNlbmQiLCJkYXRhU2V0IiwicGFyZW50QnV0dG9uIiwiYnRuQ2xhc3MiLCJidG5OYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImhhc093blByb3BlcnR5IiwiY2xvc2VzdCIsInNlcmlhbGl6ZUFycmF5IiwicGFyc2VJbnQiLCJyZWxvYWQiLCJkaXNtaXNzIiwiY3VycmVudEJ0biIsInNhdmVkSXRlbSIsImF0dHIiLCJnZXRGb3JtRGF0YSIsIkNPTlRBSU5FUl9TRUxFQ1RPUiIsIlBBR0VfU0FWRUQiLCJVUERBVEVfU0FWRV9BTExfQlVUVE9OIiwiZm9ybUl0ZW1zIiwibWFya0NoYW5nZWQiLCJkYXRlRm9ybWF0IiwiZGF0ZVJhbmdlSW5wdXRzIiwic2VsZWN0ZWRPcHRpb24iLCJkYXRlRnJvbSIsImRhdGVUbyIsInNlbGVjdGVkVmFsdWUiLCJ2YWwiLCJjc3MiLCJ2aXNpYmlsaXR5IiwiaGVpZ2h0IiwiZGF0ZUZyb21WYWx1ZSIsImRhdGVUb1ZhbHVlIiwibW9tZW50Iiwic3VidHJhY3QiLCJkYXkiLCJzdGFydE9mIiwiZW5kT2YiLCJkb2N1bWVudCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImVhY2giLCJyZW1vdmVBdHRyIiwicmVhZHkiLCJ0YWJsZXNvcnRlciIsIm1vZGFsRGF0YSIsImNvbmZpcm1Nb2RhbCIsInN1Ym1pdEZvcm0iLCJhamF4UGFnaW5hdGlvbiIsImFkZEVtYmVkIiwicmVtb3ZlRW1iZWQiLCJmYXN0U2F2ZSIsInBhZ2VMaW1pdCIsImRhdGVSYW5nZSIsImZpbHRlckRhdGVSYW5nZSIsImNoYW5nZSIsImluaXRTdGlja3kiLCJmYXN0U2F2ZVBhZ2UiLCJhZnRlckJ1aWxkIiwib25DbG9zZSIsImNsb3NlRXZlbnQiLCJVUkwiLCJ3aW5kb3ciLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJlbnQiLCJpZCIsImNhblJlbG9hZCIsImJ1dHRvbiIsImRhdGFSZWxvYWQiLCJyb290Rm9sZGVyIiwiZmlsZU5hbWUiLCJnZXRTdWJGb2xkZXIiLCJmb3JtIiwiZm9ybURhdGEiLCJjdXJyZW50SXRlbSIsInByb3AiLCJmaWxlTmFtZUhhc2giLCJtZDUiLCJzdWJzdHJpbmciLCJwYXRoUGFydHMiLCJtYXRjaCIsImpRdWVyeSIsInBhdGgiLCJwYXRobmFtZSIsInNwbGl0IiwibW9kdWxlcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJtb2R1bGVJdGVtcyIsInN1Yk1vZHVsZXMiLCJzdWJzY3JpYmUiLCJBV0FSRF9DUkVBVEUiLCJzZWxmIiwidW5zdWJzY3JpYmUiLCJlZGl0QnRuIiwidGVtcGxhdGVJZCIsInRlbXBsYXRlUGxhY2Vob2xkZXIiLCJhd2FyZF9pZCIsImZpZWxkTmFtZSIsIkFXQVJEX0NSRUFURUQiLCJBV0FSRF9ERUxFVEUiLCJjcmVhdGVCdG4iLCJjaGlsZHJlbiIsIkVWRU5UX05BTUUiLCJkcm9wem9uZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByZXZpZXdVUkwiLCJkcm9wem9uZUJ1aWxkZXIiLCJEcm9wem9uZUJ1aWxkZXIiLCJzZXRVcGxvYWRVcmwiLCJjYW5jZWwiLCJmaWxlX25hbWUiLCJ2YWx1ZSIsInNldFByZXZpZXciLCJnZXRGaWxlUGF0aCIsImZvbGRlciIsImJ1aWxkIiwic2F2ZUFsbEJ1dHRvbiIsImNvdW50ZXIiLCJjb3VudCIsInNob3ciLCJoaWRlIiwicHJldiIsImZvY3VzIiwic3VibWl0IiwiY2FudmFzIiwiZnJvbSIsInRvIiwiY2FudmFzX2hhbmRsZXIiLCJyIiwiZW1wdHkiLCJwb3N0UHJvY2VzcyIsInN1Ym1pdEJ0biIsInNldFRpbWVvdXQiLCJlbGVtZW50IiwiY29weV9lbGUiLCJnZXQiLCJjbG9uZU5vZGUiLCJzY3JvbGxIZWlnaHQiLCJodG1sMmNhbnZhcyIsInNjcm9sbFgiLCJzY3JvbGxZIiwidXNlQ09SUyIsInRoZW4iLCJpbWFnZURhdGEiLCJ0b0RhdGFVUkwiLCJuZXdEYXRhIiwiYXBwZW5kQ2hpbGQiLCJBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCIsIkRFTFRBX1RJTUVfQVRUUklCVVRFIiwidG9nZ2xlQ2xhc3MiLCJjdXJyZW50RWxlbWVudCIsIlJlcXVlc3RCdWlsZGVyIiwiaW5kZXgiLCJfIiwiaXRlbSIsInVwZGF0ZUluZGV4ZXMiLCJjdXJyZW50TGkiLCJkZWx0YVRpbWVIaWRkZW4iLCJkZWx0YVRpbWVEaXNwbGF5IiwidGltZVR5cGUiLCJjb2xsYXBzZVN0YXRlIiwiY29sbGFwc2VTdGF0ZXMiLCJyZW1vdmVBY3Rpb25UeXBlU3RhdGUiLCJzYXZlU3RhdGUiLCJyZXNwIiwiQU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk0iLCJhd2FyZENyZWF0ZSIsImJpbmQiLCJfdGhpcyIsImF3YXJkRGVsZXRlIiwiQ0xPU0VfQVdBUkRfTU9EQUwiLCJzaG93Rm9ybSIsIm5leHQiLCJzZXRTdWJ0eXBlcyIsInN1YnR5cGUiLCJhc3NldEZvcm1TdWJ0eXBlIiwiYXNzZXRGb3JtQWN0aW9uVHlwZSIsImFzc2V0Rm9ybUNvbGxlY3Rpb24iLCJwcmljZXMiLCJTVUJfVFlQRVMiLCJjb3B5QXNzZXRzIiwiYXNzZXRJZHNGaWVsZCIsIndpdGhOYW1lIiwiYXNzZXRJZHMiLCJuIiwiYXNzZXRJZCIsImFzc2V0TmFtZSIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiZG93bmxvYWRBc3NldHMiLCJjb2xsZWN0aW9uX2lkIiwicGFyZW50Q29udGFpbmVyIiwiY2hhbmdlVHlwZSIsImdldExhc3RDb2xsZWN0aW9uTnVtYmVyIiwiY3VycmVudFRkIiwidXBkYXRlU2F2ZUFsbEJ1dHRvbiIsIkJBTk5FUl9TSE9XX0ZPUk0iLCJUWVBFX1NFTEVDVF9JRCIsInNlbGVjdGVkSW5kZXgiLCJvcHRpb25zIiwic2VsZWN0ZWRFbGVtZW50IiwiZHJvcFpvbmVJbml0IiwiY29weUFkcCIsImFkcElkc0ZpZWxkIiwiYWRwSWRzIiwiYWRwSWQiLCJkb3dubG9hZEFkcCIsImhpZGVBcmNoaXZlIiwiaGlkZVRhc2tzIiwic2VsZWN0Um93IiwiY2hlY2tib3giLCJpcyIsInNob3dBcmNoaXZlIiwiYWN0aW9uIiwic2hvd1Rhc2tzIiwiQ0FTSCIsIkNPSU4iLCJBU1NFVCIsInNvdXJjZVZhbCIsIm1hdGNoZXIiLCJwYXJhbXMiLCJpbkFycmF5Iiwid3JhcHBlciIsImdldFNlbGVjdGlvbiIsIkNPTExFQ1RJT05fU0hPV19GT1JNIiwiYXNzZXRQcmV2aWV3VGVtcGxhdGUiLCJhc3NldHMiLCJjdXJyZW50QXNzZXQiLCJwcmV2aWV3X3VybCIsIlNvcnRhYmxlIiwiZ3JvdXAiLCJyZW1vdmVDbG9uZU9uSGlkZSIsIm9uRW5kIiwicG9zaXRpb24iLCJtYXJrSW5wdXRBc0NoYW5nZWQiLCJzb3J0YWJsZUluaXQiLCJoaWRlQWRkaXRpb25hbFJvd3MiLCJhZGRSb3ciLCJhZGRfY291bnRlciIsInRib2R5IiwidHJMYXN0IiwibGFzdElEIiwibGFzdCIsImluY3JlbWVudElkIiwiaSIsImRlbGV0ZVJvdyIsInJvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYWRkTmV3Um93IiwibGFzdElEUyIsImZpcnN0IiwiTWF0aCIsIm1heCIsImFwcGx5Iiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsImRlcGxveVN0YXR1cyIsIkRFUExPWV9TVEFUVVNfUk9VVEUiLCJpc0FjdGl2ZSIsImNoYW5nZVRhYiIsImRpcmVjdGlvbiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJzaG93RGVwZW5kZW5jeSIsImN1cnJlbnRDb25maWciLCJhZGRNb2RlIiwib25lTGV2ZWxTaG93IiwiY29uZmlnTmFtZSIsImxldmVsIiwiREVQTE9ZX0RFUEVORFMiLCJjb25maWdCbG9jayIsImRlcGVuZENvbmZpZ05hbWUiLCJzaG93RGVwZW5kZW5jeVBvcHVwIiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudENvbmZpZ0lkIiwiaWRzIiwicm9vdExldmVsU2hvdyIsImlkUmVzcG9uc2UiLCJ0ZXh0Q2xhc3MiLCJpc1JlY3Vyc2lvbiIsImdldERlcGxveU1vZGVsSWRzIiwiREVQTE9ZX01PREVMX0lEU19ST1VURSIsIkFDVElWRV9ESVJFQ1RJT04iLCJjaGVja2VkIiwic2F2ZURwYVN0YXRlIiwibGFzdFJvdyIsImNvbG9ycGlja2VyIiwiY2hhbmdlUm93SW5kZXgiLCJyb3dJbmRleCIsIm9sZE5hbWUiLCJuZXdOYW1lIiwiaW5kZXhPZiIsIkRZRV9DT05UQUlORVJfU0VMRUNUT1IiLCJtYXJrQ2hhbmdlZFRyIiwiZHllU2F2ZVBhZ2UiLCJHSUZUX1dSQVBfUk9XX0FEREVEIiwiY3VycmVudElucHV0IiwiYXNzZXRJRCIsImN1cnJlbnRBc3NldER1cGxpY2F0ZSIsImVyciIsInBvc2l0aW9uVXBkYXRlIiwiYnV0dG9uVXJsIiwicGFnZSIsInBhZ2VfbGltaXQiLCJhc3NldENoYW5nZWQiLCJyZW1vdmVSb3ciLCJzaG93QXNzZXQiLCJTV09XX0FTU0VUX1JPVVRFIiwicHJlcGVuZCIsInNhdmVMb2NhbGl6YXRpb25TdGF0ZSIsImN1cnJlbnRLZXkiLCJjdXJyZW50S2V5RHVwbGljYXRlIiwic2F2ZU1hZ2ljU3RhdGUiLCJtYWtldXBfa2l0X2lkIiwiZ2V0TGFzdE1ha2V1cEtpdElEIiwiTUFLRVVQX0tJVF9TSE9XX0ZPUk0iLCJpbmdyZWRpZW50RGVsZXRlIiwibWVhbERlbGV0ZSIsInNhdmVNZWFsU3RhdGUiLCJORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0iLCJUUkFTSCIsIlRSQVNIX0ZJRUxEU19JRCIsIlNFTEVDVF9JRCIsInRyYXNoRmllbGRzIiwiUFJPRFVDVF9TSE9XX0ZPUk0iLCJDbGVhdmUiLCJudW1lcmFsIiwicHJlZml4IiwicmF3VmFsdWVUcmltUHJlZml4Iiwib25WYWx1ZUNoYW5nZWQiLCJyb3VuZCIsInJhd1ZhbHVlIiwicHJvZHVjdFByaWNlIiwicHJpY2VJbml0IiwibWF4SWQiLCJuZXdMZW5ndGgiLCJ0cklkIiwibmV3Um93IiwibmV3Um93SHRtbCIsImRlZmF1bHRWYWx1ZSIsIm91dGVySFRNTCIsImFmdGVyIiwicHJldmlld0hpZGRlbklucHV0Iiwic2F2ZVBhZ2UiLCJzYXZlUm93Iiwicm93VG9TYXZlIiwiY29uZmlybSIsImRhdGFUeXBlIiwianFYSFIiLCJleGNlcHRpb24iLCJlcnJvcktleSIsIm1lc3NhZ2VLZXkiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUluaXQiLCJzYXZlQnV0dG9uIiwiV0FMS19DQVRFR09SWSIsIlJVTl9DQVRFR09SWSIsInNlbGVjdFZhbCIsImVtYmVkIiwiU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSIsInRhYmxlIiwiZGVwYXJ0bWVudElkIiwic2hvcE5hbWVQcmVmaXgiLCJkZXBhcnRtZW50TmFtZVByZWZpeCIsImZhc3RTYXZlQ29udGFpbmVyIiwic2hvcHMiLCJkZXBhcnRtZW50IiwiZGVwaW5kZXgiLCJkZXBhcnRtZW50Rm9ybURhdGEiLCJpdGVtTmFtZSIsImFsbEl0ZW1zIiwicmFkaW8iLCJwcmV2aWV3VXJsRWxlbWVudCIsInJhZGlvSW5wdXQiLCJhZGRTaG9wIiwic29ydGFibGVEZXBhcnRtZW50SW5pdCIsInNhdmVTb3VuZFN0YXRlIiwiVEFNQVRPT0xfU0hPV19GT1JNIiwiU0VBUkNIX1VTRVJfQVNTRVRTIiwiU1VCTUlUX1VTRVJfUEFSVF9GT1JNIiwiREVMRVRFX05FSUdIQk9SIiwiQUREX05FSUdIQk9SIiwiR0VUX05FSUdIQk9SUyIsIlVQREFURV9ORUlHSEJPUlMiLCJORUlHSEJPUl9HUklEX0lEIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJtb2RlbCIsImNyZWF0ZWRfYnkiLCJjcmVhdGVkX2F0Iiwic2VsZWN0ZWRTdG9yYWdlIiwicGxhY2VtZW50TmFtZSIsIm5laWdoYm9yc0NvdW50Iiwic2libGluZ3MiLCJwbGFjZW1lbnQiLCJsb2FkUGFydCIsIlBMQUNFTUVOVF9BU1NFVFNfUk9VVEUiLCJpdGVtcyIsInBvcG92ZXIiLCJjb3VudFNlbGVjdG9yIiwicm93c0ZvclNlbGVjdCIsImNvdW50Rm9yU2VsZWN0IiwibmVpZ2hib3JfaWQiLCJzdGF0dXNfdGV4dCIsInNlYXJjaFVzZXJBc3NldHMiLCJzdWJtaXRVc2VyUGFydEZvcm0iLCJkZWxldGVOZWlnaGJvciIsImFkZE5laWdoYm9yIiwic2VhcmNoTmVpZ2hib3IiLCJsb2FkUGxhY2VtZW50QXNzZXRzIiwiY2hhbmdlUGxhY2VtZW50IiwiY2hhbmdlUmFuZG9tTmVpZ2hib3JzIiwiaGlkZVBsYWNlbWVudEFzc2V0cyIsInNlbGVjdFJvd3MiLCJjaGFuZ2VNb3ZlUGxhY2VtZW50IiwidXBkYXRlTmVpZ2hib3JzIiwiY2hhbmdlUGFnZUxpbWl0IiwiYWRkQ29tbWVudCIsImFkZENvbGxlY3RpYmxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QjVDO0FBZ0NJOzs7QUFoQ0osQ0FtQ0twaEIsRUFuQ0wsQ0FtQ1EsT0FuQ1IsRUFtQ2lCLDBDQW5DakIsRUFtQzZEcWhCLGtFQW5DN0Q7QUFvQ0k7OztBQXBDSixDQXVDTXJoQixFQXZDTixDQXVDUyxRQXZDVCxFQXVDbUIsc0JBdkNuQixFQXVDMkNzaEIsa0VBdkMzQztBQXlDSTs7O0FBekNKLENBNENLdGhCLEVBNUNMLENBNENRLE9BNUNSLEVBNENpQixjQTVDakIsRUE0Q2lDdWhCLDZEQTVDakM7QUE4Q0k7OztBQTlDSixDQWlES3ZoQixFQWpETCxDQWlEUSxPQWpEUixFQWlEaUIsa0JBakRqQixFQWlEcUN3aEIsaUVBakRyQyxFOzs7Ozs7Ozs7Ozs7QUMzQ0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1pbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1zZ1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maWxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZm9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWRldmFcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vb2MtbG5jXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9vYy1sbmMuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtbW8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qKlxyXG4gKiBCYXNlIHNpemVzXHJcbiAqXHJcbiAqIEB0eXBlIHt7c206IHN0cmluZywgbGc6IHN0cmluZ319XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU0laRVMgPSB7XHJcbiAgICBzbTogJ3NtJyxcclxuICAgIG1kOiAnbWQnLFxyXG4gICAgbGc6ICdsZycsXHJcbn07XHJcbiIsImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XHJcblxyXG4vKipcclxuICogTG9hZGluZyB0ZXh0XHJcbiAqIEl0IHdpbGwgYmUgc2hvd24gYWZ0ZXIgdGhlIHN0YXJ0IG9mIGltYWdlIHVwbG9hZGluZ1xyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cclxuY29uc3QgTE9BRElOR19URVhUID0gJ0xvYWRpbmcuLi4nO1xyXG5cclxuLyoqXHJcbiAqIERyb3B6b25lIGJ1aWxkZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGRyb3B6b25lQ29udGFpbmVyXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRyb3B6b25lQ29udGFpbmVyLCBjb25maWcgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl9kcm9wem9uZUNvbnRhaW5lciA9IGRyb3B6b25lQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbiA9ICQoZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kcm9wem9uZS1jYW5jZWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB1cmwgdG8gdXBsb2FkaW5nXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybFxyXG4gICAgICovXHJcbiAgICBzZXRVcGxvYWRVcmwodXJsKSB7XHJcbiAgICAgICAgdGhpcy5fdXBsb2FkVXJsID0gdXJsO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGRlZmF1bHQgcHJldmlldyBpbWFnZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKi9cclxuICAgIHNldFByZXZpZXcobmFtZSwgdXJsKSB7XHJcbiAgICAgICAgdGhpcy5fcHJldmlldyA9IHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBlcnJvciBoYW5kbGVyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIGVycm9yKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fZXJyb3JDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGNhbmNlbCBoYW5kbGVyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIGNhbmNlbChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX2NhbmNlbENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgc3VjY2VzcyBoYW5kbGVyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHN1Y2Nlc3MoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9zdWNjZXNzQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkIGRyb3B6b25lXHJcbiAgICAgKiBAcmV0dXJucyB7RHJvcHpvbmV9XHJcbiAgICAgKi9cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRoaXNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBfZHJvcHpvbmVCdWlsZGVyID0gdGhpcztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbCBhZnRlciBmYWlsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZHJvcHpvbmVGYWlsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnZHotc3RhcnRlZCcpO1xyXG4gICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHotcHJldmlldycpLnJlbW92ZSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlndXJhdGlvblxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUgb2JqZWN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMuX3VwbG9hZFVybCxcclxuICAgICAgICAgICAgdGh1bWJuYWlsV2lkdGg6IG51bGwsXHJcbiAgICAgICAgICAgIHRodW1ibmFpbEhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgdXBsb2FkTXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiAnaW1hZ2UvKicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICd4LWNzcmYtdG9rZW4nOiBDU1JGX1RPS0VOXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogU2V0IGN1cnJlbnQgaW1hZ2UgaW4gdGhlIGRyb3B6b25lIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3ICYmICEhX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldy51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJhZGRlZGZpbGVcIiwgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidGh1bWJuYWlsXCIsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcudXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEFkZGVkIGZpbGUgaGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQoTE9BRElOR19URVhUKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRXJyb3IgaGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24gKGZpbGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcHpvbmVGYWlsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fZXJyb3JDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9lcnJvckNhbGxiYWNrKGZpbGUsIHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogU3VjY2VzcyBoYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzdWNjZXNzXCIsIGZ1bmN0aW9uIChmaWxlLCByZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX3N1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9zdWNjZXNzQ2FsbGJhY2soZmlsZSwgcmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDbGVhciBidXR0b24gaGFuZGxlclxyXG4gICAgICAgICAqIENsZWFyIGZpbGUgaW5mbyBpbiBkcm9wem9uZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmICghIXRoaXMuX2NhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24uY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVGYWlsKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9jYW5jZWxDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX2NhbmNlbENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJvcHpvbmUgYnVpbGRcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXR1cm4gbmV3IERyb3B6b25lKHRoaXMuX2Ryb3B6b25lQ29udGFpbmVyLCB7Li4uY29uZmlnLCAuLi50aGlzLl9jb25maWd9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4vZXJyb3JIYW5kbGVyJztcclxuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCIuL3N1Y2Nlc3NIYW5kbGVyXCI7XHJcblxyXG4vKipcclxuICogSFRUUCBSZXF1ZXN0IEJ1aWxkZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1cmwpIHtcclxuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5fbWV0aG9kID0gJ2dldCc7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3JIYW5kbGVyO1xyXG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MgPSBzdWNjZXNzSGFuZGxlcjtcclxuICAgICAgICB0aGlzLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZChtZXRob2QpIHtcclxuICAgICAgICB0aGlzLl9tZXRob2QgPSBtZXRob2Q7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcihmbikge1xyXG4gICAgICAgIHRoaXMuX2Vycm9yID0gZm47XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MoZm4pIHtcclxuICAgICAgICB0aGlzLl9zdWNjZXNzID0gZm47XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBsZXRlKGZuKSB7XHJcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBmbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZCgpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMuX3VybCxcclxuICAgICAgICAgICAgdHlwZTogdGhpcy5fbWV0aG9kLFxyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLl9kYXRhLFxyXG4gICAgICAgICAgICBlcnJvcjogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEhcmVzcG9uc2UucmVzcG9uc2VKU09OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IocmVzcG9uc2UucmVzcG9uc2VKU09OKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogdGhpcy5fc3VjY2VzcyxcclxuICAgICAgICAgICAgY29tcGxldGU6IHRoaXMuX2NvbXBsZXRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBCYXNlIGVycm9yIGhhbmRsZXJcclxuICpcclxuICogQHBhcmFtIHJlc3BvbnNlXHJcbiAqL1xyXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVkaXJlY3QgdG8gdGhlIHJvdXRlXHJcbiAgICAgKi9cclxuICAgIGlmICghIXJlc3BvbnNlLnJvdXRlKSB7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJvdXRlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgbWFpbiBlcnJvciBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGlmICghIXJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgICBub3RpZnlFcnJvcihyZXNwb25zZS5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgYWxsIG1lc3NhZ2VzXHJcbiAgICAgKi9cclxuICAgIGlmKCEhcmVzcG9uc2UuZXJyb3JzKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2UuZXJyb3JzKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXNwb25zZS5lcnJvcnNba2V5XS5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9SZXF1ZXN0QnVpbGRlcic7XHJcbiIsImltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XHJcblxyXG4vKipcclxuICogQmFzZSBlcnJvciBoYW5kbGVyXHJcbiAqXHJcbiAqIEBwYXJhbSByZXNwb25zZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvKipcclxuICAgICAqIFNob3cgbWFpbiBlcnJvciBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGlmICghIXJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgICBub3RpZnlTdWNjZXNzKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9tb2RhbCc7XHJcbmltcG9ydCAnLi9vYnNlcnZlcic7XHJcbmltcG9ydCAnLi9odHRwJztcclxuIiwiY29uc3QgbW9kYWxzQ29udGFpbmVyID0gJCgnYm9keScpO1xyXG5cclxuY29uc3QgTU9EQUxfU0laRVMgPSB7XHJcbiAgICBzbTogJ21vZGFsLXNtJyxcclxuICAgIG1kOiAnbW9kYWwtbWQnLFxyXG4gICAgbGc6ICdtb2RhbC1sZycsXHJcbn07XHJcblxyXG4vKipcclxuICogVW5pcXVlIGluZGV4IG9mIHRoZSBtb2RhbFxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cclxubGV0IG1vZGFsSW5kZXggPSAwO1xyXG5cclxuLyoqXHJcbiAqIENvdW50ZXIgb2YgdGhlIG1vZGFscyBhdCB0aGUgcGFnZVxyXG4gKlxyXG4gKiBAdHlwZSB7bnVtYmVyfVxyXG4gKi9cclxubGV0IG1vZGFsQ291bnRlciA9IDA7XHJcblxyXG4vKipcclxuICogTW9kYWwgQnVpbGRlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIG1vZGFsSW5kZXgrKztcclxuICAgICAgICB0aGlzLl9pZCA9ICdtb2RhbHMtY29udGFpbmVyLWl0ZW0tJyArIG1vZGFsSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZShzaXplKSB7XHJcbiAgICAgICAgaWYgKCEhTU9EQUxfU0laRVNbc2l6ZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IE1PREFMX1NJWkVTW3NpemVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyKGhlYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2hlYWRlciA9IGhlYWRlcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYm9keShib2R5KSB7XHJcbiAgICAgICAgdGhpcy5fYm9keSA9IGJvZHk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZvb3Rlcihmb290ZXIpIHtcclxuICAgICAgICB0aGlzLl9mb290ZXIgPSBmb290ZXI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGFzZXQoZGF0YXNldCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFzZXQgPSBkYXRhc2V0O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0SUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRTaXplKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX3NpemUgPyB0aGlzLl9zaXplIDogTU9EQUxfU0laRVMubWQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEhlYWRlcigpIHtcclxuICAgICAgICBpZiAoISF0aGlzLl9oZWFkZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiR7dGhpcy5faGVhZGVyfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEZvb3RlcigpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBpZiAoISF0aGlzLl9mb290ZXIpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJChgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPjwvZGl2PmApXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCQoYFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgYCkpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2Zvb3Rlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEJvZHkoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgaWYgKCEhdGhpcy5fYm9keSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAkKGA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPjwvZGl2PmApXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2JvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGJlZm9yZSBidWlsZCBtb2RhbFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBiZWZvcmVCdWlsZChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfYmVmb3JlQnVpbGQoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBhZnRlciBidWlsZCBtb2RhbFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBhZnRlckJ1aWxkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX2FmdGVyQnVpbGQoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGwgYWZ0ZXIgY2xvc2UgbW9kYWxcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgb25DbG9zZShjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkNsb3NlKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25DbG9zZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vZGFsKGNvbnRlbnQpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEYXRhIGF0dHJpYnV0ZXNcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGRhdGFzZXQgPSBbXTtcclxuICAgICAgICBpZiAoISF0aGlzLl9kYXRhc2V0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5fZGF0YXNldCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YXNldC5wdXNoKGBkYXRhLSR7bmFtZX09XCIke3RoaXMuX2RhdGFzZXRbbmFtZV19XCJgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGh0bWwgPSAkKGBcclxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7IHRoaXMuX2dldElEKCkgfVwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAke2RhdGFzZXQuam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkICR7dGhpcy5fZ2V0U2l6ZSgpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YCk7XHJcblxyXG4gICAgICAgIGlmICghIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5KGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbCB0aGUgYmVmb3JlQnVpbGQgY2FsbGJhY2tcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZCgpO1xyXG5cclxuICAgICAgICBodG1sLmZpbmQoJy5tb2RhbC1jb250ZW50JylcclxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9nZXRIZWFkZXIoKSlcclxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9nZXRCb2R5KCkpXHJcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0Rm9vdGVyKCkpO1xyXG5cclxuICAgICAgICBodG1sLmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG5cclxuICAgICAgICBodG1sLmZpbmQoJy5kYXRlcGlja2VyJylcclxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxyXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWluVmlldzogJzInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnRhYmxlc3RpY2t5aGVhZGVyJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIG1vZGFsc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGwgdGhlIGFmdGVyQnVpbGQgY2FsbGJhY2tcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9hZnRlckJ1aWxkKCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHVwZGF0ZSBjb3VudGVyIG9mIG1vZGFscyBhdCB0aGUgcGFnZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1vZGFsQ291bnRlcisrO1xyXG5cclxuICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXHJcbiAgICAgICAgICAgIC5vbignaGlkZGVuLmJzLm1vZGFsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWxDb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9mZignaGlkZGVuLmJzLm1vZGFsJylcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIENhbGwgdGhlIG9uQ2xvc2UgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25DbG9zZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubW9kYWwoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBjb3VudGVyIG9mIG1vZGFscyBhdCB0aGUgcGFnZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGFsQ291bnRlcigpIHtcclxuICAgIHJldHVybiBtb2RhbENvdW50ZXI7XHJcbn1cclxuIiwiaW1wb3J0ICcuL01vZGFsQnVpbGRlcidcclxuaW1wb3J0ICcuL21vZGFsQ29uZmlybSdcclxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIE1vZGFsIGNvbmZpcm1cclxuICpcclxuICogQHBhcmFtIG1lc3NhZ2VcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW9kYWxDb25maXJtKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XHJcbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcclxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcclxuICAgICAgICAuaGVhZGVyKG1lc3NhZ2UpXHJcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XHJcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1zdWNjZXNzJyxcclxuICAgICAgICAgICAgJ3RleHQnOiAnQ29uZmlybScsXHJcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxyXG4gICAgICAgICAgICAnY2xpY2snOiBjYWxsYmFja1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5tb2RhbCgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBOb3RpZnkgaGVscGVyXHJcbiAqXHJcbiAqIEBwYXJhbSBtZXNzYWdlXHJcbiAqIEBwYXJhbSB0eXBlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3RpZnkobWVzc2FnZSwgdHlwZSkge1xyXG4gICAgJC5ub3RpZnkoe21lc3NhZ2U6IG1lc3NhZ2V9LHtcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIHpfaW5kZXg6IDEwNTFcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBub3RpZnkgZnJvbSBcIi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIG5vdGlmeShtZXNzYWdlLCAnZGFuZ2VyJyk7XHJcbn1cclxuIiwiaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgbm90aWZ5KG1lc3NhZ2UsICdzdWNjZXNzJyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEV2ZW50IG9ic2VydmVyXHJcbiAqL1xyXG5jbGFzcyBFdmVudE9ic2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlIChldmVudCwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuX2xvZygnc3Vic2NyaWJlJywgZXZlbnQpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCAoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9sb2coJ2Rpc3BhdGNoJywgZXZlbnQpO1xyXG5cclxuICAgICAgICBpZiAoISF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5mb3JFYWNoKGhhbmRsZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcihkYXRhLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSAoZXZlbnQsIHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nKCd1bnN1YnNjcmliZScsIGV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKCEhdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgaWYoISFzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5maWx0ZXIoaGFuZGxlciA9PiBoYW5kbGVyICE9PSBzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIERlbGV0ZSBhbGwgc3Vic2NyaWJlcnNcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2xvZyhtZXRob2QsIGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWV0aG9kLnRvVXBwZXJDYXNlKCksICc6JywgJ1snLCBldmVudCwgJ10nKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgRXZlbnRPYnNlcnZlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXI7XHJcbiIsImltcG9ydCAnLi9FdmVudE9ic2VydmVyJztcclxuIiwiLyoqXHJcbiAqIFNhdmVkIGl0ZW0gbm90IGZvdW5kXHJcbiAqXHJcbiAqIFVzaW5nIGluIGZhc3RTYXZlIGhhbmRsZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTYXZlZEl0ZW1Ob3RGb3VuZCBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnU2F2ZWRJdGVtTm90Rm91bmQnO1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcblxyXG4vKipcclxuICogQWRkIGVtYmVkIGVsZW1lbnRcclxuICpcclxuICogQHBhcmFtIGVcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0YXJnZXQnKTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0ZW1wbGF0ZScpO1xyXG4gICAgY29uc3QgaWRQbGFjZWhvbGRlciA9IGN1cnJlbnRCdXR0b24uZGF0YSgnaWRwbGFjZXBvbGRlcicpO1xyXG5cclxuICAgIGxldCByb3dJZCA9IGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnKTtcclxuICAgIGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnLCArK3Jvd0lkKTtcclxuXHJcbiAgICBsZXQgZW1iZWRGb3JtID0gJCgnIycrIHRlbXBsYXRlKS5odG1sKCk7XHJcbiAgICBjb25zdCBlbWJlZEJsb2NrSWQgPSByb3dJZCArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSkudG9TdHJpbmcoMTYpO1xyXG4gICAgZW1iZWRGb3JtID0gZW1iZWRGb3JtLnJlcGxhY2UoLyVlbWJlZEJsb2NrSWQlL2csIGVtYmVkQmxvY2tJZCk7XHJcblxyXG4gICAgaWYgKCEhaWRQbGFjZWhvbGRlcikge1xyXG4gICAgICAgIGVtYmVkRm9ybSA9IGVtYmVkRm9ybS5yZXBsYWNlKCBuZXcgUmVnRXhwKGlkUGxhY2Vob2xkZXIsIFwiZ1wiKSwgcm93SWQpXHJcbiAgICB9XHJcblxyXG4gICAgJCgnIycgKyB0YXJnZXQpLmFwcGVuZChlbWJlZEZvcm0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgZGlzcGF0Y2hcclxuICAgICAqL1xyXG4gICAgY29uc3QgZXZlbnQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ2V2ZW50Jyk7XHJcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZXZlbnQsIHtcclxuICAgICAgICAgICAgZW1iZWRCbG9ja0lkOiBlbWJlZEJsb2NrSWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY3VycmVudEJ1dHRvbi50cmlnZ2VyKCdhaV9hbmltYXRpb24nKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqQWpheCBwYWdpbmF0aW9uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gJCh0aGlzKS5wYXJlbnRzKCcuYWpheC1wYWdpbmF0aW9uJykuZGF0YSgnY29udGFpbmVyJyk7XHJcbiAgIFxyXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxyXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAkKCcjJyArIGNvbnRhaW5lcikucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xyXG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBPcGVuIGNvbmZpcm0gbW9kYWwgYmVmb3JlIGFjdGlvblxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmhyZWY7XHJcbiAgICBjb25zdCBwYXJlbnRCdXR0b24gPSAkKHRoaXMpO1xyXG5cclxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxyXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxyXG4gICAgICAgIC5oZWFkZXIoZGF0YVNldC5oZWFkZXIpXHJcbiAgICAgICAgLmZvb3RlcihcclxuICAgICAgICAgICAgJCgnPGJ1dHRvbi8+Jywge1xyXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogKGRhdGFTZXQuYnRuQ2xhc3MgfHwgJ2J0bi1zbSBidG4tc3VjY2VzcycpICsgJyBidG4nLFxyXG4gICAgICAgICAgICAgICAgJ3RleHQnOiBkYXRhU2V0LmJ0bk5hbWUgfHwgJ0NvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgJ2NsaWNrJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhU2V0Lmhhc093blByb3BlcnR5KCd3aXRoRm9ybScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBwYXJlbnRCdXR0b24uY2xvc2VzdCgnZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXcgaHR0cCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZXRob2QoZGF0YVNldC5tZXRob2QgfHwgJ2dldCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWRhdGFTZXQuZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChkYXRhU2V0LmV2ZW50LCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRhdGFTZXQucmVsb2FkKSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRhU2V0LmRpc21pc3MpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLm1vZGFsKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcclxuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xyXG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gY3VycmVudEJ0bi5jbG9zZXN0KCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcclxuXHJcbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXHJcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghIWRhdGFTZXQuZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZGF0YShnZXRGb3JtRGF0YShzYXZlZEl0ZW0pKVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XHJcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xyXG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xyXG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9TRUxFQ1RPUiA9ICcuZmFzdC1zYXZlLXBhZ2UtY29udGFpbmVyJztcclxuZXhwb3J0IGNvbnN0IFBBR0VfU0FWRUQgPSAnUEFHRV9TQVZFRCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU0FWRV9BTExfQlVUVE9OID0gJ1VQREFURV9TQVZFX0FMTF9CVVRUT04nO1xyXG5cclxuLyoqXHJcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXHJcbiAqXHJcbiAqIEBwYXJhbSBlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcclxuICAgIGNvbnN0IHNhdmVkSXRlbSA9ICQoQ09OVEFJTkVSX1NFTEVDVE9SKTtcclxuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XHJcblxyXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xyXG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XHJcblxyXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcclxuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICghIWRhdGFTZXQuZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIGZvcm0ncyBlbGVtZW50cyBhcyBjaGFuZ2VkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQoKSB7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbn1cclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0ZUZvcm1hdCA9ICdZWVlZLU1NLUREJztcclxuICAgIGNvbnN0IGRhdGVSYW5nZUlucHV0cyA9ICQoJyNkYXRlLXJhbmdlLWlucHV0cycpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSAkKCcjZGF0ZS1yYW5nZS1zZWxlY3QnKS5maW5kKCc6c2VsZWN0ZWQnKTtcclxuICAgIGNvbnN0IGRhdGVGcm9tID0gZGF0ZVJhbmdlSW5wdXRzLmZpbmQoJy5maWx0ZXItZnJvbScpO1xyXG4gICAgY29uc3QgZGF0ZVRvID0gZGF0ZVJhbmdlSW5wdXRzLmZpbmQoJy5maWx0ZXItdG8nKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRPcHRpb24udmFsKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgZGF0ZVJhbmdlSW5wdXRzLmNzcyh7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdpbml0aWFsJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bydcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0ZVJhbmdlSW5wdXRzLmNzcyh7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGVGcm9tVmFsdWUgPSAnJztcclxuICAgICAgICBsZXQgZGF0ZVRvVmFsdWUgICA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlICd0b2RheSc6XHJcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gZGF0ZVRvVmFsdWUgPSBtb21lbnQoKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAneWVzdGVyZGF5JzpcclxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBkYXRlVG9WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXknKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY3VycmVudC13ZWVrJzpcclxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5kYXkoMSkuZm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLmRheSg3KS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMtd2Vlayc6XHJcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuZGF5KC02KS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZGF5KDApLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjdXJyZW50LW1vbnRoJzpcclxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5zdGFydE9mKCdtb250aCcpLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5lbmRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMtbW9udGgnOlxyXG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsYXN0LXNldmVuJzpcclxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5JykuZm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsYXN0LXRoaXJ0eSc6XHJcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXknKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRlRnJvbS52YWwoZGF0ZUZyb21WYWx1ZSk7XHJcbiAgICAgICAgZGF0ZVRvLnZhbChkYXRlVG9WYWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2Zhc3RTYXZlXCI7XHJcbmltcG9ydCBhZGRFbWJlZCBmcm9tIFwiLi9hZGRFbWJlZFwiO1xyXG5pbXBvcnQgcmVtb3ZlRW1iZWQgZnJvbSBcIi4vcmVtb3ZlRW1iZWRcIjtcclxuaW1wb3J0IHN1Ym1pdEZvcm0gZnJvbSBcIi4vc3VibWl0Rm9ybVwiO1xyXG5pbXBvcnQgYWpheFBhZ2luYXRpb24gZnJvbSBcIi4vYWpheFBhZ2luYXRpb25cIjtcclxuaW1wb3J0IGNvbmZpcm1Nb2RhbCBmcm9tIFwiLi9jb25maXJtTW9kYWxcIjtcclxuaW1wb3J0IHBhZ2VMaW1pdCBmcm9tIFwiLi9wYWdlTGltaXRcIjtcclxuaW1wb3J0IG1vZGFsRGF0YSBmcm9tIFwiLi9tb2RhbERhdGFcIjtcclxuaW1wb3J0IGZpbHRlckRhdGVSYW5nZSBmcm9tIFwiaGFuZGxlcnMvZmlsdGVyRGF0ZVJhbmdlXCI7XHJcbmltcG9ydCBmYXN0U2F2ZVBhZ2UsIHtDT05UQUlORVJfU0VMRUNUT1IsIG1hcmtDaGFuZ2VkfSBmcm9tIFwiLi9mYXN0U2F2ZVBhZ2VcIjtcclxuaW1wb3J0IHRhYmxlU29ydGVyIGZyb20gXCJ0YWJsZXNvcnRlclwiO1xyXG5pbXBvcnQgc3RpY2t5SGVhZGVycyBmcm9tIFwic3RpY2t5LXRhYmxlLWhlYWRlcnNcIjtcclxuaW1wb3J0ICd0YWJsZXNvcnRlci9kaXN0L2Nzcy90aGVtZS5kZWZhdWx0Lm1pbi5jc3MnO1xyXG5cclxuJChkb2N1bWVudClcclxuICAgIC5zY3JvbGwoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzAwKSB7XHJcbiAgICAgICAgICAgICQoJy52aXNpdC1zdGF0cycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oZWlnaHQoMCkuY3NzKCdkaXNwbGF5JywgJ3RhYmxlLWNvbHVtbi1ncm91cCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcudmlzaXQtc3RhdHMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0YWJsZXNvcnRlciA9ICQoJy50YWJsZXNvcnRlcicpO1xyXG4gICAgICAgIGlmKHRhYmxlc29ydGVyKSB7XHJcbiAgICAgICAgICAgIHRhYmxlc29ydGVyLnRhYmxlc29ydGVyKCkuc3RpY2t5VGFibGVIZWFkZXJzKCk7XHJcbiAgICAgICAgICAgIHRhYmxlc29ydGVyLmZpbmQoJ3RoZWFkJykuY3NzKCdiYWNrZ3JvdW5kJywgJyNmZmYnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIG1vZGFsIHdpdGggZGF0YSBmcm9tIHNlcnZlciBieSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFqYXgtbW9kYWwtYWN0aW9uJywgbW9kYWxEYXRhKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbiBjb25maXJtIG1vZGFsXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24nLCBjb25maXJtTW9kYWwpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFqYXgtc3VibWl0LWFjdGlvbicsIHN1Ym1pdEZvcm0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFqYXgtcGFnaW5hdGlvbiBhJywgYWpheFBhZ2luYXRpb24pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgZW1iZWQgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtZW1iZWQnLCBhZGRFbWJlZClcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBlbWJlZCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnJtLWVtYmVkJywgcmVtb3ZlRW1iZWQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGYXN0IHNhdmUgdGhlIGRhdGEgb2YgYW4gZW50aXR5XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmZhc3Qtc2F2ZScsIGZhc3RTYXZlKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHBhZ2UgbGltaXRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnBhZ2UtbGltaXQnLCBwYWdlTGltaXQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgYCR7Q09OVEFJTkVSX1NFTEVDVE9SfSBpbnB1dCwgJHtDT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtDT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWQpXHJcblxyXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgZGF0ZVJhbmdlID0gJCgnI2RhdGUtcmFuZ2Utc2VsZWN0Jyk7XHJcbiAgICAgICAgaWYgKGRhdGVSYW5nZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZmlsdGVyRGF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgIGRhdGVSYW5nZS5jaGFuZ2UoZmlsdGVyRGF0ZVJhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTdGlja3koKSB7XHJcbiAgICAkKCcudGFibGVzb3J0ZXInKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcclxufVxyXG5cclxuJChcIi50YWJsZS1yZXNwb25zaXZlXCIpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICBpbml0U3RpY2t5KCk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBwYWdlXHJcbiAqL1xyXG4kKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljayhmYXN0U2F2ZVBhZ2UpO1xyXG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xyXG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBPcGVuIG1vZGFsIHdpdGggZm9ybSBieSByZXF1ZXN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcclxuXHJcbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXHJcbiAgICAgICAgLm1ldGhvZCh0aGlzLmRhdGFzZXQubWV0aG9kIHx8ICdnZXQnKVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgbmV3IE1vZGFsQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAuc2l6ZShTSVpFUy5sZylcclxuICAgICAgICAgICAgICAgIC5kYXRhc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICByZWxvYWQ6IHRoaXMuZGF0YXNldC5yZWxvYWQgfHwgMSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyKHRoaXMuZGF0YXNldC5oZWFkZXIpXHJcbiAgICAgICAgICAgICAgICAuYWZ0ZXJCdWlsZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5ldmVudCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub25DbG9zZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmNsb3NlRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmNsb3NlRXZlbnQsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1vZGFsKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBTZXQgcGFnZSBsaW1pdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBocmVmID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICBocmVmLnNlYXJjaFBhcmFtcy5zZXQoJ3BhZ2VfbGltaXQnLCAkKHRoaXMpLnZhbCgpKTtcclxuICAgIGhyZWYuc2VhcmNoUGFyYW1zLmRlbGV0ZSgncGFnZScpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmLnRvU3RyaW5nKCk7XHJcbn1cclxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgcGFyZW50ID0gISF0aGlzLmRhdGFzZXQucGFyZW50ID8gJCh0aGlzKS5jbG9zZXN0KHRoaXMuZGF0YXNldC5wYXJlbnQpIDogJCh0aGlzKS5wYXJlbnQoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGF0YXNldC5pZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXHJcbiAgICAgICAgLnNpemUoU0laRVMuc20pXHJcbiAgICAgICAgLmhlYWRlcignQXJlIHlvdSBzdXJlPycpXHJcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XHJcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInLFxyXG4gICAgICAgICAgICAndGV4dCc6ICdEZWxldGUnLFxyXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcclxuICAgICAgICAgICAgJ2NsaWNrJzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSlcclxuICAgICAgICAubW9kYWwoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQge2dldE1vZGFsQ291bnRlcn0gZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XHJcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBTdWJtaXQgZm9ybVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xyXG5cclxuICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XHJcblxyXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxyXG4gICAgICAgIC5kYXRhKGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnZm9ybScpLnNlcmlhbGl6ZUFycmF5KCkpXHJcbiAgICAgICAgLm1ldGhvZCh0aGlzLmRhdGFzZXQubWV0aG9kIHx8ICdnZXQnKVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaCh0aGlzLmRhdGFzZXQuZXZlbnQsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgIT09ICdlcnJvcicgJiYgY2FuUmVsb2FkKHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuZGF0YXNldC5kaXNtaXNzKSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS50eXBlID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbiByZWxvYWQgdGhlIHBhZ2VcclxuICpcclxuICogQHBhcmFtIGJ1dHRvblxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGNhblJlbG9hZChidXR0b24pIHtcclxuICAgIGlmIChwYXJzZUludChidXR0b24uZGF0YXNldC5yZWxvYWQpID09PSAxKSB7XHJcbiAgICAgICAgaWYgKGdldE1vZGFsQ291bnRlcigpIDwgMikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhUmVsb2FkID0gJChidXR0b24pLmNsb3Nlc3QoJy5tb2RhbCcpLmRhdGEoJ3JlbG9hZCcpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFSZWxvYWQgPT09IHR5cGVvZiB1bmRlZmluZWQgfHwgZGF0YVJlbG9hZCA9PT0gZmFsc2UgfHwgcGFyc2VJbnQoZGF0YVJlbG9hZCkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgZ2V0U3ViRm9sZGVyIGZyb20gXCIuL2dldFN1YkZvbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIEdldCBmaWxlIHBhdGggZnJvbSBzdG9yYWdlIHdpdGggc3ViIGZvbGRlcnNcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHJvb3RGb2xkZXIgUm9vdCBmb2xkZXIgaW4gdGhlIHN0b3JhZ2VcclxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lICAgRmlsZSBuYW1lXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocm9vdEZvbGRlciwgZmlsZU5hbWUpIHtcclxuICAgIHJldHVybiAnL3N0b3JhZ2UvJyArIHJvb3RGb2xkZXIgKyAnLycgKyBnZXRTdWJGb2xkZXIoZmlsZU5hbWUpICsgJy8nICsgZmlsZU5hbWU7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEdldCBmb3JtIGRhdGFcclxuICpcclxuICogQHBhcmFtIHtqUXVlcnl9IGZvcm0gRm9ybSBlbGVtZW50XHJcbiAqXHJcbiAqIEByZXR1cm5zIHt7fX1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZvcm0pIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0ge307XHJcblxyXG4gICAgbGV0IGZvcm1JdGVtcyA9IGZvcm0uZmluZCgnaW5wdXQsIHNlbGVjdCcpO1xyXG4gICAgaWYgKCFmb3JtSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9ybUl0ZW1zID0gZm9ybTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtSXRlbXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VycmVudEl0ZW0uYXR0cigndHlwZScpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcclxuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGFbY3VycmVudEl0ZW0uYXR0cignbmFtZScpXSA9ICEhY3VycmVudEl0ZW0ucHJvcCggXCJjaGVja2VkXCIgKSAqIDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhW2N1cnJlbnRJdGVtLmF0dHIoJ25hbWUnKV0gPSBjdXJyZW50SXRlbS52YWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybURhdGE7XHJcbn1cclxuIiwiaW1wb3J0IG1kNSBmcm9tICdibHVlaW1wLW1kNSc7XHJcblxyXG4vKipcclxuICogR2V0IHN1YiBmb2xkZXJzIG9mIHRoZSBmaWxlXHJcbiAqXHJcbiAqIFJlc3VsdCBvZiB0aGUgZnVuY3Rpb24gbG9va3MgbGlrZTogYTEvYjIvYzNcclxuICogV2hlcmUgbWQ1IG9mIHRoZSBmaWxlID0gYTFiMmMzLi4uLi4uLi4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIHRoZSBmaWxlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGZpbGVOYW1lSGFzaCA9IG1kNShmaWxlTmFtZSkuc3Vic3RyaW5nKDAsIDYpO1xyXG4gICAgY29uc3QgcGF0aFBhcnRzID0gZmlsZU5hbWVIYXNoLm1hdGNoKC8uezEsMn0vZyk7XHJcbiAgICByZXR1cm4gcGF0aFBhcnRzLmpvaW4oJy8nKTtcclxufVxyXG4iLCIvKipcclxuICogalF1ZXJ5XHJcbiAqL1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG53aW5kb3cuJCA9ICQ7XHJcbndpbmRvdy5qUXVlcnkgPSAkO1xyXG5cclxuLyoqXHJcbiAqIEJvb3RzdHJhcFxyXG4gKi9cclxuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAnO1xyXG5cclxuLyoqXHJcbiAqIEJvb3RzdHJhcCBDY29sb3JwaWNrZXJcclxuICovXHJcbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyJztcclxuaW1wb3J0ICdib290c3RyYXAtY29sb3JwaWNrZXIvZGlzdC9jc3MvYm9vdHN0cmFwLWNvbG9ycGlja2VyLmNzcyc7XHJcblxyXG4vKipcclxuICogRm9udCBBd2Vzb21lXHJcbiAqL1xyXG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9zY3NzL2ZvbnQtYXdlc29tZS5zY3NzJztcclxuXHJcbi8qKlxyXG4gKiBFeHRlcm5hbCBtb2R1bGVzXHJcbiAqIFRPRE86IGdldCBieSBucG1cclxuICovXHJcbmltcG9ydCAnLi92ZW5kb3IvYW5pbWF0ZSc7XHJcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLWNvbmZpcm1hdGlvbic7XHJcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcclxuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtbm90aWZ5JztcclxuaW1wb3J0ICcuL3ZlbmRvci9zZWxlY3QyJztcclxuaW1wb3J0ICcuL3ZlbmRvci9la2tvLWxpZ2h0Ym94JztcclxuaW1wb3J0ICcuL3ZlbmRvci90aGVtZSc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50c1xyXG4gKi9cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMnO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXJzXHJcbiAqL1xyXG5pbXBvcnQgJy4vaGFuZGxlcnMnO1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlc1xyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcclxuXHJcbi8qKlxyXG4gKiBNb2R1bGVzIGxvYWRlclxyXG4gKi9cclxuY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XHJcbmlmIChwYXRoLmxlbmd0aCA+IDEpIHtcclxuICAgIC8qKlxyXG4gICAgICogVG8gY3JlYXRpbmcgZGlmZmVyZW50IGZpbGVzIGZvciBlYWNoIG1vZHVsZVxyXG4gICAgICogKERvbid0IGZvcmdldCBucG0gaSAtLXNhdmUtZGV2IGJ1bmRsZS1sb2FkZXIpXHJcbiAgICAgKiBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCdidW5kbGUtbG9hZGVyIW1vZHVsZXMnLCB0cnVlLCAvaW5kZXhcXC5qcyQvKTtcclxuICAgICAqL1xyXG4gICAgY29uc3QgbW9kdWxlcyA9IHJlcXVpcmUuY29udGV4dCgnbW9kdWxlcycsIHRydWUsIC9cXC5cXC9bXFx3LV9dK1xcL21vZHVsZVxcLmpzJC8pO1xyXG4gICAgbW9kdWxlcy5rZXlzKCkubWFwKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlSXRlbXMgPSBtb2R1bGUuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgaWYgKG1vZHVsZUl0ZW1zWzFdID09PSBwYXRoWzFdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNT0RVTEU6JywgcGF0aFsxXSk7XHJcbiAgICAgICAgICAgIG1vZHVsZXMobW9kdWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdWJNb2R1bGVzID0gcmVxdWlyZS5jb250ZXh0KCdtb2R1bGVzJywgdHJ1ZSwgL21vZHVsZXMoLiopbW9kdWxlXFwuanMkLyk7XHJcbiAgICBzdWJNb2R1bGVzLmtleXMoKS5tYXAobW9kdWxlID0+IHtcclxuICAgICAgICBjb25zdCBtb2R1bGVJdGVtcyA9IG1vZHVsZS5zcGxpdCgnLycpO1xyXG5cclxuICAgICAgICBpZiAobW9kdWxlSXRlbXNbMV0gPT09IHBhdGhbMV0gJiYgbW9kdWxlSXRlbXNbM10gPT09IHBhdGhbMl0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NVQiBNT0RVTEU6JywgcGF0aFsyXSk7XHJcbiAgICAgICAgICAgIHN1Yk1vZHVsZXMobW9kdWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge0FXQVJEX0NSRUFURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7QVdBUkRfQ1JFQVRFRH0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgc2VsZik7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKVxyXG4gICAgICAgICAgICAuaHRtbCgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKHRoaXMuZGF0YXNldC50ZW1wbGF0ZVBsYWNlaG9sZGVyLCBcImdcIiksIGRhdGEuYXdhcmRfaWQpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCclZmllbGRfbmFtZSUnLCBcImdcIiksIHRoaXMuZGF0YXNldC5maWVsZE5hbWUgfHwgJycpO1xyXG5cclxuICAgICAgICBjdXJyZW50QnRuLnBhcmVudCgpLmFwcGVuZChlZGl0QnRuKTtcclxuICAgICAgICBjdXJyZW50QnRuLnJlbW92ZSgpO1xyXG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFXQVJEX0NSRUFURUQsIGRhdGEpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIHNlbGYpO1xyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKS5odG1sKClcclxuICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAoJyVmaWVsZF9uYW1lJScpLCB0aGlzLmRhdGFzZXQuZmllbGROYW1lIHx8ICcnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlKCk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZChjcmVhdGVCdG4pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgZ2V0RmlsZVBhdGggZnJvbSBcImhlbHBlcnMvZ2V0RmlsZVBhdGhcIjtcclxuaW1wb3J0IERyb3B6b25lQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBEcm9wem9uZSBpbml0IGFmdGVyIHRoZSBtb2RhbCBvcGVuZWRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChFVkVOVF9OQU1FKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoRVZFTlRfTkFNRSwgKCkgPT4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERyb3B6b25lIGNvbnRhaW5lclxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkcm9wem9uZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUHJldmlldyBVUkwgaGlkZGVuIGlucHV0XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHByZXZpZXdVUkwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGRyb3B6b25lRWxlbWVudClcclxuICAgICAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC51cmwpXHJcbiAgICAgICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjcHJldmlldy11cmwnKS52YWwoJycpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2FuY2VsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJyNwcmV2aWV3LXVybCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KHJlc3BvbnNlLmZpbGVfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3VVJMLnZhbHVlID0gcmVzcG9uc2UuZmlsZV9uYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0IHByZXZpZXdcclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAocHJldmlld1VSTC52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZHJvcHpvbmVCdWlsZGVyXHJcbiAgICAgICAgICAgICAgICAuc2V0UHJldmlldyhcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3VVJMLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEZpbGVQYXRoKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LmZvbGRlciwgcHJldmlld1VSTC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcm9wem9uZSBidWlsZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7VVBEQVRFX1NBVkVfQUxMX0JVVFRPTn0gZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFVQREFURV9TQVZFX0FMTF9CVVRUT04sIChkYXRhLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZUFsbEJ1dHRvbiA9ICQoJyN1cGRhdGUtYWxsJyk7XHJcbiAgICAgICAgY29uc3QgY291bnRlciA9ICQoJyN1cGRhdGUtYWxsIC5jb3VudCcpO1xyXG5cclxuICAgICAgICBsZXQgY291bnQgPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lci5jaGFuZ2VkJykubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZihjb3VudCA+IDApIHtcclxuICAgICAgICAgICAgc2F2ZUFsbEJ1dHRvbi5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2F2ZUFsbEJ1dHRvbi5oaWRlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvdW50ZXIuaHRtbChjb3VudCk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWN0aW9uLWxvZy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYWN0aW9uLWxvZy9tb2R1bGUuanNcIixcblx0XCIuL2FjdGlvbi10eXBlL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanNcIixcblx0XCIuL2FkZC1tZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYWRkLW1lL21vZHVsZS5qc1wiLFxuXHRcIi4vYW5ub3VuY2VtZW50cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYW5ub3VuY2VtZW50cy9tb2R1bGUuanNcIixcblx0XCIuL2Fzc2V0cy1sb2cvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Fzc2V0cy1sb2cvbW9kdWxlLmpzXCIsXG5cdFwiLi9hc3NldHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Fzc2V0cy9tb2R1bGUuanNcIixcblx0XCIuL2F3YXJkL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hd2FyZC9tb2R1bGUuanNcIixcblx0XCIuL2Jhbm5lci9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYmFubmVyL21vZHVsZS5qc1wiLFxuXHRcIi4vY21zLWFkcHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Ntcy1hZHBzL21vZHVsZS5qc1wiLFxuXHRcIi4vY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanNcIixcblx0XCIuL2NvbGxlY3Rpb24vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2NvbGxlY3Rpb24vbW9kdWxlLmpzXCIsXG5cdFwiLi9jcm9wL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jcm9wL21vZHVsZS5qc1wiLFxuXHRcIi4vZGFpbHktbG9vdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZGFpbHktbG9vdC9tb2R1bGUuanNcIixcblx0XCIuL2RlZmF1bHQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzXCIsXG5cdFwiLi9kZXBsb3kvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanNcIixcblx0XCIuL2RwYS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZHBhL21vZHVsZS5qc1wiLFxuXHRcIi4vZHllL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9keWUvbW9kdWxlLmpzXCIsXG5cdFwiLi9naWZ0LXdyYXAvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2dpZnQtd3JhcC9tb2R1bGUuanNcIixcblx0XCIuL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9sb2NhbGl6YXRpb24vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9tb2R1bGUuanNcIixcblx0XCIuL21hZ2ljL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tYWdpYy9tb2R1bGUuanNcIixcblx0XCIuL21ha2V1cC1raXQtYXNzZXQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21ha2V1cC1raXQtYXNzZXQvbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWtldXAta2l0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tYWtldXAta2l0L21vZHVsZS5qc1wiLFxuXHRcIi4vbWVhbC1pbmdyZWRpZW50LWdyb3Vwcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50LWdyb3Vwcy9tb2R1bGUuanNcIixcblx0XCIuL21lYWwtaW5ncmVkaWVudHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsL21vZHVsZS5qc1wiLFxuXHRcIi4vbmVpZ2hib3ItYWN0aXZpdHkvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qc1wiLFxuXHRcIi4vbmV3cy1naWZ0cy1sb2cvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qc1wiLFxuXHRcIi4vcHJvZHVjdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvcHJvZHVjdC9tb2R1bGUuanNcIixcblx0XCIuL3B1cmNoYXNlL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9wdXJjaGFzZS9tb2R1bGUuanNcIixcblx0XCIuL3NldHRpbmdzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zZXR0aW5ncy9tb2R1bGUuanNcIixcblx0XCIuL3Nob3AtZGVwYXJ0bWVudC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L21vZHVsZS5qc1wiLFxuXHRcIi4vc2hvcC1yZWxlYXNlcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanNcIixcblx0XCIuL3Nob3Atc3RhdHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3Atc3RhdHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9zb3VuZC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc291bmQvbW9kdWxlLmpzXCIsXG5cdFwiLi9zdWJ0eXBlLWF0dHJpYnV0ZXMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9tb2R1bGUuanNcIixcblx0XCIuL3RhbWF0b29sL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy90YW1hdG9vbC9tb2R1bGUuanNcIixcblx0XCIuL3VzZXJzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy91c2Vycy9tb2R1bGUuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9tb2R1bGVzIHN5bmMgcmVjdXJzaXZlIFxcXFwuXFxcXC9bXFxcXHctX10rXFxcXC9tb2R1bGVcXFxcLmpzJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9zZXR0aW5ncy9tb2R1bGVzL2FpX2FuaW1hdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbW9kdWxlcyBzeW5jIHJlY3Vyc2l2ZSBtb2R1bGVzKC4qKW1vZHVsZVxcXFwuanMkXCI7IiwiaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJztcblxuJChkb2N1bWVudClcblxuICAgIC5vbignY2xpY2snLCAnI3Byb2R1Y3RfaWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNwcm9kdWN0X2lkJykucHJldignLnNlbGVjdDItY29udGFpbmVyJykuZmluZCgnLnNlbGVjdDItc2VhcmNoX19maWVsZCcpLmZvY3VzKClcbiAgICB9KVxuXG4gICAgLm9uKCdjbGljaycsICcjc2VuZC1yZXBvcnQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCJmb3JtXCIpLnN1Ym1pdCgpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuXG4gICAgLm9uKCdjbGljaycsICcucmVwb3J0cycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKCcjc2VuZC1yZXBvcnQnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIGxldCBkYXRlRnJvbSA9ICQoJ1tuYW1lPVwidG9kYXlbZnJvbV1cIl0nKS52YWwoKTtcbiAgICAgICAgbGV0IGRhdGVUbyA9ICQoJ1tuYW1lPVwidG9kYXlbdG9dXCJdJykudmFsKCk7XG4gICAgICAgIGxldCBjYW52YXMgPSAkKCcjY2FudmFzLWRhdGEnKS52YWwoKTtcbiAgICAgICAgbGV0IGRhdGEgPSB7ZnJvbTogZGF0ZUZyb20sIHRvOiBkYXRlVG8sIGNhbnZhczogY2FudmFzfTtcbiAgICAgICAgbGV0IGNhbnZhc19oYW5kbGVyID0gJChcIiNjYW52YXNfaGFuZGxlclwiKTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJCh0aGlzKS5hdHRyKCdocmVmJyksXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhcmVzcG9uc2UucmVzcG9uc2VKU09OKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihyZXNwb25zZS5yZXNwb25zZUpTT04pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICBjYW52YXNfaGFuZGxlci5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoci5oYXNPd25Qcm9wZXJ0eSgnc3VjY2VzcycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtdGl0bGUnKS50ZXh0KHIuc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtaGVhZGVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJyNhN2ZmODMnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXIoJ9Cf0YDQtdC00L/RgNC+0YHQvNC+0YLRgCDQvtGC0YfQtdGC0LAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ib2R5KHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zdFByb2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwb3N0UHJvY2VzcygpIHtcblxuICAgICAgICAgICAgbGV0IHN1Ym1pdEJ0biA9ICQoJyNsb2FkJyk7XG4gICAgICAgICAgICBzdWJtaXRCdG4uZGF0YSgnbG9hZGluZy10ZXh0JywgJzxpIGNsYXNzPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPiDQn9C+0LTQs9C+0YLQvtCy0LrQsCcpO1xuICAgICAgICAgICAgc3VibWl0QnRuLmJ1dHRvbignbG9hZGluZycpO1xuICAgICAgICAgICAgc3VibWl0QnRuLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gJChcIi5odG1sLWNvbnRlbnQtaG9sZGVyXCIpO1xuICAgICAgICAgICAgICAgIGxldCBjYW52YXNfaGFuZGxlciA9ICQoXCIjY2FudmFzX2hhbmRsZXJcIik7XG4gICAgICAgICAgICAgICAgY2FudmFzX2hhbmRsZXIuZW1wdHkoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvcHlfZWxlID0gJChlbGVtZW50KS5maW5kKCcud3JhcHBlcicpLmdldCgwKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2FudmFzX2hhbmRsZXIuYXBwZW5kKGNvcHlfZWxlKTtcbiAgICAgICAgICAgICAgICBjYW52YXNfaGFuZGxlci5jc3MoJ2hlaWdodCcsIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgMjApO1xuICAgICAgICAgICAgICAgIGNhbnZhc19oYW5kbGVyLmNzcygnd2lkdGgnLCA3NjApO1xuXG4gICAgICAgICAgICAgICAgaHRtbDJjYW52YXMoY29weV9lbGUsIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWDogMCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWTogMCxcbiAgICAgICAgICAgICAgICAgICAgdXNlQ09SUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlRGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0gaW1hZ2VEYXRhLnJlcGxhY2UoL15kYXRhOmltYWdlXFwvcG5nLywgXCJkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NhbnZhcy1kYXRhJykudmFsKG5ld0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjc2VuZC1yZXBvcnQnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudC5hcHBlbmQoY2FudmFzX2hhbmRsZXIuaHRtbCgpKVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVtcHR5KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXQoMCkuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnRuLmJ1dHRvbigncmVzZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNzZW5kLXJlcG9ydCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgfVxuXG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQgPSAnQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQnO1xyXG5leHBvcnQgY29uc3QgREVMVEFfVElNRV9BVFRSSUJVVEUgPSAxOTtcclxuIiwiLyoqXHJcbiAqIENvbGxhcHNlIHN0YXRlXHJcbiAqXHJcbiAqIEBwYXJhbSBlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5hY3Rpb24tdHlwZS1zdGF0ZScpO1xyXG4gICAgcGFyZW50LnRvZ2dsZUNsYXNzKCdkb3duJyk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBDb2xsYXBzZSBzdGF0ZXNcclxuICpcclxuICogQHBhcmFtIGVcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICQoJy5hY3Rpb24tdHlwZS1zdGF0ZScpLnRvZ2dsZUNsYXNzKCdkb3duJyk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcclxuaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcclxuaW1wb3J0IFJlcXVlc3RCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRH0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBTdGF0ZSBvZiB0aGUgQWN0aW9uIFR5cGVcclxuICogYXQgdGhlIG1vZGFsXHJcbiAqIHdpdGggY29uZmlybVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudEVsZW1lbnQuY2xvc2VzdCgnLmFjdGlvbi10eXBlLXN0YXRlJyk7XHJcblxyXG4gICAgaWYgKCFjdXJyZW50RWxlbWVudC5kYXRhKCdpZCcpKSB7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCB7fSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxyXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxyXG4gICAgICAgIC5oZWFkZXIoJ0FyZSB5b3Ugc3VyZT8nKVxyXG4gICAgICAgIC5mb290ZXIoJCgnPGJ1dHRvbi8+Jywge1xyXG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJyxcclxuICAgICAgICAgICAgJ3RleHQnOiAnRGVsZXRlJyxcclxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXHJcbiAgICAgICAgICAgICdjbGljayc6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ldyBSZXF1ZXN0QnVpbGRlcihjdXJyZW50RWxlbWVudC5kYXRhKCd1cmwnKSlcclxuICAgICAgICAgICAgICAgICAgICAubWV0aG9kKCdERUxFVEUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5tb2RhbCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgaW5kZXhlcyBvZiB0aGUgc3RhdGVzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsICgpID0+IHtcclxuICAgICAgICBsZXQgaW5kZXggPSAxO1xyXG5cclxuICAgICAgICAkKCcuaW5kZXgnKS5lYWNoKChfLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICQoaXRlbSkudmFsKGluZGV4KyspO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgdXBkYXRlSW5kZXhlcyBmcm9tIFwiLi9saXN0ZW5lcnMvdXBkYXRlSW5kZXhlc1wiO1xyXG5pbXBvcnQgY29sbGFwc2VTdGF0ZSBmcm9tIFwiLi9oYW5kbGVycy9jb2xsYXBzZVN0YXRlXCI7XHJcbmltcG9ydCBjb2xsYXBzZVN0YXRlcyBmcm9tIFwiLi9oYW5kbGVycy9jb2xsYXBzZVN0YXRlc1wiO1xyXG5pbXBvcnQgcmVtb3ZlQWN0aW9uVHlwZVN0YXRlIGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZUFjdGlvblR5cGVTdGF0ZVwiO1xyXG5pbXBvcnQge0RFTFRBX1RJTUVfQVRUUklCVVRFfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcclxuXHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBpbmRleGVzXHJcbiAqL1xyXG51cGRhdGVJbmRleGVzKCk7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC5vbignY2xpY2snLCAnI3Byb2R1Y3RfaWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2R1Y3RfaWQnKTtcclxuICAgICAgICAkKCcjcHJvZHVjdF9pZCcpLnByZXYoJy5zZWxlY3QyLWNvbnRhaW5lcicpLmZpbmQoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKS5mb2N1cygpXHJcbiAgICB9KVxyXG5cclxuICAgIC5vbignY2hhbmdlJywgJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaSA9ICQodGhpcykuY2xvc2VzdCgnbGknKTtcclxuICAgICAgICBjb25zdCBkZWx0YVRpbWVIaWRkZW4gPSBjdXJyZW50TGkuZmluZCgnW25hbWUkPVwiW2F0dHJpYnV0ZXNdWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW3ZhbHVlXVwiXScpO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZURpc3BsYXkgPSBjdXJyZW50TGkuZmluZCgnW25hbWUkPVwiW2F0dHJpYnV0ZXNdWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW3ZhbHVlXVtkaXNwbGF5XVwiXScpO1xyXG5cclxuICAgICAgICBkZWx0YVRpbWVEaXNwbGF5LnZhbChkZWx0YVRpbWVIaWRkZW4uZGF0YSgndmFsdWUnKSAvIHBhcnNlSW50KCQodGhpcykudmFsKCkpKTtcclxuICAgIH0pXHJcblxyXG4gICAgLm9uKCdpbnB1dCcsICdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdW2Rpc3BsYXldXCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaSA9ICQodGhpcykuY2xvc2VzdCgnbGknKTtcclxuICAgICAgICBjb25zdCB0aW1lVHlwZSA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbdGltZV90eXBlXVwiXScpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdXCJdJyk7XHJcblxyXG4gICAgICAgIGRlbHRhVGltZUhpZGRlbi52YWwoJCh0aGlzKS52YWwoKSAqIHRpbWVUeXBlKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsYXBzZSBvbmUgc3RhdGVcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuY29sbGFwc2UtbGluaycsIGNvbGxhcHNlU3RhdGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsYXBzZSBhbGwgc3RhdGVzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmhpZGUtc3RhdGVzJywgY29sbGFwc2VTdGF0ZXMpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgc3RhdGVcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcucm0tYWN0aW9uLXR5cGUtc3RhdGVzJywgcmVtb3ZlQWN0aW9uVHlwZVN0YXRlKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XHJcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XHJcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSByb3dcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5zYXZlLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIikpO1xyXG5cclxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XHJcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcclxuICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ3RyLmNoYW5nZWQnKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmUgdGhlIHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5zYXZlLXBhZ2UnLCBzYXZlU3RhdGUpO1xyXG4iLCJleHBvcnQgY29uc3QgQU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk0gPSAnQU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk0nO1xyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge0FOTk9VTkNFTUVOVFNfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk0sIChkYXRhLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk0sIHNlbGYpO1xyXG5cclxuICAgICAgICAkKCcuZGF0ZXRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XHJcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxyXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfQ1JFQVRFRCwgQ0xPU0VfQVdBUkRfTU9EQUx9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xyXG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xyXG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIGFubm91bmNlbWVudFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQodGhpcykoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgYXdhcmRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5zdWJzY3JpYmUgb24gbW9kYWwgY2xvc2VcclxuICAgICAqL1xyXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKENMT1NFX0FXQVJEX01PREFMLCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUpO1xyXG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEVEKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuLyoqXHJcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXHJcbiAqIEFmdGVyIGNsaWNrIGF0IGNyZWF0ZSBvciBlZGl0IGJ1dHRvblxyXG4gKi9cclxuJCgnLnNob3ctZm9ybScpXHJcbiAgICAuY2xpY2soc2hvd0Zvcm0pO1xyXG4iLCJcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLm9uKCdjbGljaycsICcudG9nZ2xlX2lkcycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZigkKHRoaXMpLm5leHQoKS5oZWlnaHQoKSA+IDApIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCQodGhpcykudGV4dCgpLnJlcGxhY2UoJ0hpZGUnLCAnU2hvdycpKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykudGV4dCgkKHRoaXMpLnRleHQoKS5yZXBsYWNlKCdTaG93JywgJ0hpZGUnKSk7XHJcbiAgICAgICAgICAgICQodGhpcykudGV4dCgpLnJlcGxhY2UoJ1Nob3cnLCAnSGlkZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5oZWlnaHQoJzEwMCUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXHJcbiAqIFNVQl9UWVBFUyAtIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxyXG4gKiBJbml0ZWQgaW4gYXNzZXQvZm9ybS5ibGFkZS5waHBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIHNldFN1YnR5cGVzKHRoaXMudmFsdWUsIHRoaXMuZGF0YXNldC5zdWJ0eXBlKTtcclxufVxyXG5cclxuY29uc3QgYXNzZXRGb3JtU3VidHlwZSA9ICQoXCIjc3VidHlwZVwiKTtcclxuY29uc3QgYXNzZXRGb3JtQWN0aW9uVHlwZSA9ICQoJyNhc3NldC1mb3JtLWFjdGlvbi10eXBlJyk7XHJcbmNvbnN0IGFzc2V0Rm9ybUNvbGxlY3Rpb24gPSAkKCcjYXNzZXQtZm9ybS1jb2xsZWN0aW9uJyk7XHJcbmNvbnN0IHByaWNlcyA9ICQoJy5wcmljZXMnKTtcclxuXHJcbmZ1bmN0aW9uIHNldFN1YnR5cGVzKHR5cGUsIHN1YnR5cGUpIHtcclxuICAgIGFzc2V0Rm9ybVN1YnR5cGVcclxuICAgICAgICAuZW1wdHkoKVxyXG4gICAgICAgIC5zZWxlY3QyKHtcclxuICAgICAgICAgICAgZGF0YTogU1VCX1RZUEVTW3R5cGVdXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudmFsKHN1YnR5cGUpXHJcbiAgICAgICAgLmNoYW5nZSgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBoaWRlKGFzc2V0Rm9ybUFjdGlvblR5cGUpO1xyXG4gICAgaGlkZShhc3NldEZvcm1Db2xsZWN0aW9uKTtcclxuICAgIHNob3cocHJpY2VzKTtcclxuXHJcbiAgICBzd2l0Y2ggKHBhcnNlSW50KHR5cGUpKSB7XHJcblxyXG4gICAgICAgIC8vIEZ1cm5pdHVyZVxyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgc2hvdyhhc3NldEZvcm1BY3Rpb25UeXBlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIENsb3RoZXNcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHNob3coYXNzZXRGb3JtQ29sbGVjdGlvbik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyBCb2R5IFBhcnRcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIGhpZGUocHJpY2VzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGUoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5hZGRDbGFzcygnaGlkZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93KGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxufSIsIi8qKlxyXG4gKiBIYW5kbGVyIGZvciBjb3B5IGFzc2V0cyBpZHMgdG8gY2xpcGJvYXJkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29weUFzc2V0cyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYXNzZXRJZHNGaWVsZCA9ICQoJ3RleHRhcmVhW25hbWU9XCJhc3NldF9pZHNcIl0nKTtcclxuICAgIGNvbnN0IHdpdGhOYW1lID0gJCgnaW5wdXRbbmFtZT1cIndpdGhfbmFtZVwiXScpO1xyXG4gICAgbGV0IGFzc2V0SWRzID0gW107XHJcblxyXG4gICAgJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygkKGl0ZW0pKTtcclxuICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcclxuICAgICAgICBsZXQgYXNzZXROYW1lID0gJChpdGVtKS5kYXRhKCdhc3NldC1uYW1lJyk7XHJcbiAgICAgICAgaWYoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICBpZih3aXRoTmFtZS5wcm9wKFwiY2hlY2tlZFwiKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaCgnXFxuJyArIGFzc2V0SWQgKyAnICcgKyBhc3NldE5hbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgaWYgKGFzc2V0SWRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xyXG4gICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gJChpdGVtKS5kYXRhKCdhc3NldC1uYW1lJyk7XHJcbiAgICAgICAgICAgIGlmKGFzc2V0SWQpIHtcclxuICAgICAgICAgICAgICAgIGlmKHdpdGhOYW1lLnByb3AoXCJjaGVja2VkXCIpID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKCdcXG4nICsgYXNzZXRJZCArICcgJyArIGFzc2V0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3NldElkc0ZpZWxkLnZhbChhc3NldElkcyk7XHJcbiAgICBhc3NldElkc0ZpZWxkLnNlbGVjdCgpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBIYW5kbGVyIGZvciBkb3dubG9hZCBhc3NldHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEFzc2V0cyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcclxuXHJcbiAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQoaXRlbSkpO1xyXG4gICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xyXG4gICAgICAgIGlmKGFzc2V0SWQpIHtcclxuICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIGlmIChhc3NldElkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XHJcbiAgICAgICAgICAgIGlmKGFzc2V0SWQpIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgd2luZG93LmxvY2F0aW9uID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpICsgJyZpZHM9JyArIGFzc2V0SWRzLmpvaW4oJywnKTtcclxufVxyXG4iLCJpbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBuZXcgUmVxdWVzdEJ1aWxkZXIodGhpcy5ocmVmKVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICQoJyNjb2xsZWN0aW9uLW51bWJlcicpXHJcbiAgICAgICAgICAgICAgICAudmFsKHJlc3VsdC5jb2xsZWN0aW9uX2lkKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufSIsImltcG9ydCB7VVBEQVRFX1NBVkVfQUxMX0JVVFRPTn0gZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xyXG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG4vKipcclxuICogTWFyayBjaGFuZ2VkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQgKCkge1xyXG4gICAgaWYoJCh0aGlzKS5hdHRyKCd0eXBlJykgIT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9ICQodGhpcykucGFyZW50cygndHInKTtcclxuICAgICAgICBwYXJlbnRDb250YWluZXIuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChVUERBVEVfU0FWRV9BTExfQlVUVE9OKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xyXG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xyXG5pbXBvcnQgdXBkYXRlU2F2ZUFsbEJ1dHRvbiBmcm9tIFwibGlzdGVuZXJzL3VwZGF0ZVNhdmVBbGxCdXR0b25cIjtcclxuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xyXG5pbXBvcnQgZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIgZnJvbSBcIi4vaGFuZGxlcnMvZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXJcIjtcclxuaW1wb3J0IHtjb3B5QXNzZXRzfSBmcm9tIFwiLi9oYW5kbGVycy9jb3B5QXNzZXRzXCI7XHJcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9ERUxFVEUsIEFXQVJEX0NSRUFURUQsIENMT1NFX0FXQVJEX01PREFMfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcclxuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHttYXJrQ2hhbmdlZH0gZnJvbSBcIi4vaGFuZGxlcnMvbWFya0NoYW5nZWRcIjtcclxuaW1wb3J0IHtkb3dubG9hZEFzc2V0c30gZnJvbSBcIi4vaGFuZGxlcnMvZG93bmxvYWRBc3NldHNcIjtcclxuaW1wb3J0IHtVUERBVEVfU0FWRV9BTExfQlVUVE9OfSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XHJcbmltcG9ydCB7REVMVEFfVElNRV9BVFRSSUJVVEV9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xyXG5cclxuJCgnI2Fzc2V0cy10YWJsZScpXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUnLCBhd2FyZENyZWF0ZSlcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZScsIGF3YXJkRGVsZXRlKTtcclxuXHJcbiQoJyNhc3NldC1mb3JtLXR5cGUnKVxyXG4gICAgLmNoYW5nZShjaGFuZ2VUeXBlKVxyXG4gICAgLmNoYW5nZSgpO1xyXG5cclxuJCgnI2dldC1sYXN0LWNvbGxlY3Rpb24tbnVtYmVyJykuY2xpY2soZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIpO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpXHJcbiAgICAvKipcclxuICAgICAqIENvcHkgYXNzZXRzIGlkc1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFzc2V0cycsIGNvcHlBc3NldHMpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVyIGZvciBkb3dubG9hZCBhc3NldHNcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZG93bmxvYWQtYXNzZXRzJywgZG93bmxvYWRBc3NldHMpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgYW5ub3VuY2VtZW50XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAub24oJ2NoYW5nZScsICdbbmFtZSQ9XCJbdGltZV90eXBlXVwiXScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VGQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RkJyk7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lSGlkZGVuID0gY3VycmVudFRkLmZpbmQoJ1tuYW1lJD1cIlsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVwiXScpO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZURpc3BsYXkgPSBjdXJyZW50VGQuZmluZCgnW25hbWUkPVwiWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW2Rpc3BsYXldXCJdJyk7XHJcblxyXG4gICAgICAgIGRlbHRhVGltZURpc3BsYXkudmFsKGRlbHRhVGltZUhpZGRlbi5kYXRhKCd2YWx1ZScpIC8gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSkpO1xyXG4gICAgfSlcclxuXHJcbiAgICAub24oJ2lucHV0JywgJ1tuYW1lJD1cIlsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVtkaXNwbGF5XVwiXScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VGQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RkJyk7XHJcbiAgICAgICAgY29uc3QgdGltZVR5cGUgPSBjdXJyZW50VGQuZmluZCgnW25hbWUkPVwiW3RpbWVfdHlwZV1cIl0nKS52YWwoKTtcclxuICAgICAgICBjb25zdCBkZWx0YVRpbWVIaWRkZW4gPSBjdXJyZW50VGQuZmluZCgnW25hbWUkPVwiWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddXCJdJyk7XHJcblxyXG4gICAgICAgIGRlbHRhVGltZUhpZGRlbi52YWwoJCh0aGlzKS52YWwoKSAqIHRpbWVUeXBlKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgYXdhcmRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NoYW5nZScsICcuZmFzdC1zYXZlLWNvbnRhaW5lciBpbnB1dCwgLmZhc3Qtc2F2ZS1jb250YWluZXIgc2VsZWN0LCAuZmFzdC1zYXZlLWNvbnRhaW5lciB0ZXh0YXJlYScsIG1hcmtDaGFuZ2VkKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5zdWJzY3JpYmUgb24gbW9kYWwgY2xvc2VcclxuICAgICAqL1xyXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdXBkYXRlU2F2ZUFsbEJ1dHRvbigpO1xyXG5cclxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQ0xPU0VfQVdBUkRfTU9EQUwsIChkYXRhLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiIsImV4cG9ydCBjb25zdCBBV0FSRF9DUkVBVEUgPSAnQVdBUkRfQ1JFQVRFJztcclxuZXhwb3J0IGNvbnN0IEFXQVJEX0NSRUFURUQgPSAnQVdBUkRfQ1JFQVRFRCc7XHJcbmV4cG9ydCBjb25zdCBBV0FSRF9ERUxFVEUgPSAnQVdBUkRfREVMRVRFJztcclxuZXhwb3J0IGNvbnN0IENMT1NFX0FXQVJEX01PREFMID0gJ0NMT1NFX0FXQVJEX01PREFMJztcclxuIiwiLyoqXHJcbiAqIFNob3cgZm9ybSBldmVudFxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJBTk5FUl9TSE9XX0ZPUk0gPSAnQkFOTkVSX1NIT1dfRk9STSc7XHJcblxyXG4vKipcclxuICogSWQgb2YgdHlwZSdzIHNlbGVjdFxyXG4gKlxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRZUEVfU0VMRUNUX0lEID0gJ2Jhbm5lci10eXBlJztcclxuIiwiaW1wb3J0IHtUWVBFX1NFTEVDVF9JRH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIENoYW5nZSB0eXBlIGhhbmRsZXJcclxuICogSGlkZS9zaG93IHNvbWUgZmllbGRzXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoVFlQRV9TRUxFQ1RfSUQpO1xyXG5cclxuICAgIGlmICghc2VsZWN0IHx8IHNlbGVjdC5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnMubGVuZ3RoICYmIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XSkge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XHJcblxyXG4gICAgICAgICQoJy5iYW5uZXItdHlwZScpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgJCgnLmJhbm5lci10eXBlLScgKyBzZWxlY3RlZEVsZW1lbnQudmFsdWUpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcclxuaW1wb3J0IHtCQU5ORVJfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XHJcblxyXG4vKipcclxuICogU2hvdyBmb3JtIGhhbmRsZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogRHJvcHpvbmUgSW5pdFxyXG4gICAgICovXHJcbiAgICBkcm9wWm9uZUluaXQoQkFOTkVSX1NIT1dfRk9STSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0IHNob3dGb3JtIGxpc3RlbmVyXHJcbiAgICAgKi9cclxuICAgIHNob3dGb3JtKCk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtCQU5ORVJfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XHJcblxyXG4vKipcclxuICogU2hvdyBmb3JtIGxpc3RlbmVyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQkFOTkVSX1NIT1dfRk9STSwgKCkgPT4ge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUeXBlIHNlbGVjdCBjaGFuZ2UgdHJpZ2dlclxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNoYW5nZVR5cGUoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGF0ZXMgaW5pdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICQoJy5iYW5uZXItZm9ybSAuZGF0ZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcclxuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXHJcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9oYW5kbGVycy9zaG93Rm9ybVwiO1xyXG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XHJcbmltcG9ydCB7VFlQRV9TRUxFQ1RfSUR9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFNob3cgZWRpdCBmb3JtIG9mIGEgYmFubmVyXHJcbiAqL1xyXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soc2hvd0Zvcm0oKSk7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIHR5cGUgaGFuZGxlclxyXG4gICAgICovXHJcbiAgICAub24oJ2NoYW5nZScsICcjJyArIFRZUEVfU0VMRUNUX0lELCBjaGFuZ2VUeXBlKTtcclxuIiwiLyoqXHJcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYWRwIGlkcyB0byBjbGlwYm9hcmRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5QWRwKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGFkcElkc0ZpZWxkID0gJCgnaW5wdXRbbmFtZT1cImFkcF9pZHNcIl0nKTtcclxuICAgIGxldCBhZHBJZHMgPSBbXTtcclxuXHJcbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xyXG4gICAgICAgIGlmKGFkcElkKSB7XHJcbiAgICAgICAgICAgIGFkcElkcy5wdXNoKGFkcElkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIGlmIChhZHBJZHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xyXG4gICAgICAgICAgICBsZXQgYWRwSWQgPSAkKGl0ZW0pLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgICAgIGlmIChhZHBJZCkge1xyXG4gICAgICAgICAgICAgICAgYWRwSWRzLnB1c2goYWRwSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRwSWRzRmllbGQudmFsKGFkcElkcyk7XHJcbiAgICBhZHBJZHNGaWVsZC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIC8vIGFkcElkc0ZpZWxkLnZhbChbXSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYXNzZXRzIGlkcyB0byBjbGlwYm9hcmRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5QXNzZXRzKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBhc3NldElkc0ZpZWxkID0gJCgnaW5wdXRbbmFtZT1cImFzc2V0X2lkc1wiXScpO1xyXG4gICAgbGV0IGFzc2V0SWRzID0gW107XHJcblxyXG4gICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xyXG4gICAgICAgIGlmKGFzc2V0SWQpIHtcclxuICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIGlmIChhc3NldElkcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xyXG4gICAgICAgICAgICBpZihhc3NldElkKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXNzZXRJZHNGaWVsZC52YWwoYXNzZXRJZHMpO1xyXG4gICAgYXNzZXRJZHNGaWVsZC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxufVxyXG4iLCIvKipcclxuICogSGFuZGxlciBmb3IgZG93bmxvYWQgYWRwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRBZHAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGFkcElkcyA9IFtdO1xyXG4gICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xyXG4gICAgICAgIGxldCBhZHBJZCA9ICQoaXRlbSkuZGF0YSgnaWQnKTtcclxuICAgICAgICBpZihhZHBJZCkge1xyXG4gICAgICAgICAgICBhZHBJZHMucHVzaChhZHBJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICBpZiAoYWRwSWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgICAgIGxldCBhZHBJZCA9ICQoaXRlbSkuZGF0YSgnaWQnKTtcclxuICAgICAgICAgICAgaWYgKGFkcElkKSB7XHJcbiAgICAgICAgICAgICAgICBhZHBJZHMucHVzaChhZHBJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cubG9jYXRpb24gPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJykgKyAnJmlkcz0nICsgYWRwSWRzLmpvaW4oJywnKTtcclxufVxyXG4iLCIvKipcclxuICogSGFuZGxlciBvZiBhcmNoaXZlIGNhdGVnb3JpZXMgb24gYWRwIHBhZ2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQXJjaGl2ZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkKCcuc2hvdy1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJCgnLmFyY2hpdmUtY2F0ZWdvcmllcy1saXN0JykuaHRtbCgnJyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhhbmRsZXIgb2YgdGFza3Mgb24gYWRwIHBhZ2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlVGFza3MoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJCgnLnNob3ctdGFza3MnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkKCcudGFza3MtbGlzdCcpLmhpZGUoJ3Nsb3cnKTtcclxufVxyXG4iLCIvKipcclxuICogSGFuZGxlciBmb3Igc2VsZWN0IHJvdyBieSBmdWxsIHRkIGFyZWFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RSb3coZSkge1xyXG4gICAgaWYgKCEkKGUudGFyZ2V0KS5oYXNDbGFzcygnZm9yLWNvcHknKSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9ICQodGhpcykuZmluZCgnLmZvci1jb3B5Jyk7XHJcblxyXG4gICAgICAgIGlmKGNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogSGFuZGxlciBvZiBhcmNoaXZlIGNhdGVnb3JpZXMgb24gYWRwIHBhZ2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93QXJjaGl2ZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkKCcuaGlkZS1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgXHJcbiAgICBsZXQgYWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpO1xyXG4gICAgbmV3IGh0dHAoYWN0aW9uKVxyXG4gICAgICAgICAgICAubWV0aG9kKCdnZXQnKVxyXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXJjaGl2ZS1jYXRlZ29yaWVzLWxpc3QnKS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNlbmQoKTtcclxuICAgIFxyXG59XHJcbiIsIi8qKlxyXG4gKiBIYW5kbGVyIG9mIHRhc2tzIG9uIGFkcCBwYWdlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tzKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcclxuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICQoJy5oaWRlLXRhc2tzJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJCgnLnRhc2tzLWxpc3QnKS5zaG93KCdzbG93Jyk7XHJcbn1cclxuIiwiLy9pbXBvcnQge2J1bmRsZVZlcnNpb25TZWxlY3R9IGZyb20gXCIuL2hhbmRsZXJzL2J1bmRsZVZlcnNpb25TZWxlY3RcIjtcclxuaW1wb3J0IHtzaG93QXJjaGl2ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0FyY2hpdmVcIjtcclxuaW1wb3J0IHtoaWRlQXJjaGl2ZX0gZnJvbSBcIi4vaGFuZGxlcnMvaGlkZUFyY2hpdmVcIjtcclxuaW1wb3J0IHtoaWRlVGFza3N9IGZyb20gXCIuL2hhbmRsZXJzL2hpZGVUYXNrc1wiO1xyXG5pbXBvcnQge3Nob3dUYXNrc30gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd1Rhc2tzXCI7XHJcbmltcG9ydCB7Y29weUFkcH0gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFkcFwiO1xyXG5pbXBvcnQge2NvcHlBc3NldHN9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBc3NldHNcIjtcclxuaW1wb3J0IHtzZWxlY3RSb3d9IGZyb20gXCIuL2hhbmRsZXJzL3NlbGVjdFJvd1wiO1xyXG5pbXBvcnQge2Rvd25sb2FkQWRwfSBmcm9tIFwiLi9oYW5kbGVycy9kb3dubG9hZEFkcFwiO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuXHJcbiQoZG9jdW1lbnQpXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgYXJjaGl2ZSBhZHAgY2F0ZWdvcmllc1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5zaG93LWFyY2hpdmUnLCBzaG93QXJjaGl2ZSlcclxuICAgIC8qKlxyXG4gICAgICogSGlkZSBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmhpZGUtYXJjaGl2ZScsIGhpZGVBcmNoaXZlKVxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS10YXNrcycsIGhpZGVUYXNrcylcclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBhZHAgdGFza3MgYnkgc3RhdHVzIGFuZCB1c2VyXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnNob3ctdGFza3MnLCBzaG93VGFza3MpXHJcbiAgICAvKipcclxuICAgICAqIENvcHkgYWRwIGlkc1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFkcCcsIGNvcHlBZHApXHJcbiAgICAvKipcclxuICAgICAqIENvcHkgYXNzZXRzIGlkc1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFzc2V0cycsIGNvcHlBc3NldHMpXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXIgZm9yIGRvd25sb2FkIGFzc2V0c1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kb3dubG9hZC1hZHAnLCBkb3dubG9hZEFkcClcclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBoaWRlIHNpZGUgYm94XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnNob3ctaGlkZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZihwYXJzZUludCgkKCcuc2lkZS1ib3gnKS5jc3MoJ3JpZ2h0JykpIDwgMCkge1xyXG4gICAgICAgICAgICAkKCcuc2lkZS1ib3gnKS5jc3MoJ3JpZ2h0JywgMClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuc2lkZS1ib3gnKS5jc3MoJ3JpZ2h0JywgJy0xMDAlJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3Qgcm93IGJ5IGZ1bGwgdGQgYXJlYVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5pZC1jb2wnLCBzZWxlY3RSb3cpO1xyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBDQVNIID0gJ2Nhc2hfYWRkZWQnO1xyXG5leHBvcnQgY29uc3QgQ09JTiA9ICdjb2luc19hZGRlZCc7XHJcbmV4cG9ydCBjb25zdCBBU1NFVCA9ICdhc3NldHNfYWRkZWQnO1xyXG4iLCJpbXBvcnQge0NBU0h9IGZyb20gXCJtb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7Q09JTn0gZnJvbSBcIm1vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHtBU1NFVH0gZnJvbSBcIm1vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9jb25zdGFudHNcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgY3Vyc29yIHRvIHBhcmVudCBub2RlXHJcbiAgICAgKi9cclxuICAgIC5vbignbW91c2VlbnRlcicsICd0ZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZigkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmlsdGVyIHNlbGVjdCBvcHRpb25zIGJ5IHNlbGVjdGVkIHNvdXJjZVxyXG4gICAgICovXHJcbiAgICAub24oJ2NoYW5nZScsICcjZmlsdGVyX3NvdXJjZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBzb3VyY2VWYWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICQoXCIjZmlsdGVyX2FjdGlvblwiKS5zZWxlY3QyKHtcclxuICAgICAgICAgICAgbWF0Y2hlcjogZnVuY3Rpb24gKHBhcmFtcywgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZVZhbCAhPT0gJ3VzZXJfZGVidWcnICYmICQuaW5BcnJheShkYXRhLmlkLCBbQ0FTSCwgQ09JTiwgQVNTRVRdKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbiBkZXBsb3kgaW5mb1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJ3RkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSAkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpO1xyXG5cclxuICAgICAgICBpZiAod3JhcHBlciAmJiB3cmFwcGVyLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdvcGVuJylcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuIiwiZXhwb3J0IGNvbnN0IENPTExFQ1RJT05fU0hPV19GT1JNID0gJ0NPTExFQ1RJT05fU0hPV19GT1JNJztcclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xyXG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcclxuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcclxuXHJcbmNvbnN0IGFzc2V0UHJldmlld1RlbXBsYXRlID0gJCgnI2Fzc2V0LXByZXZpZXctdGVtcGxhdGUnKS5odG1sKCk7XHJcblxyXG4vKipcclxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgYWxsIHBhZ2VcclxuICpcclxuICogQHBhcmFtIGVcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xyXG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcclxuXHJcbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcclxuICAgICAqL1xyXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XHJcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcclxuXHJcbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xyXG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXHJcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcclxuICAgICAgICAuZGF0YShkYXRhKVxyXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgZm9ybUl0ZW1zLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmhhc0NsYXNzKCdhc3NldC1pZCcpICYmICEhcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBc3NldCA9IHJlc3BvbnNlLmFzc2V0c1tjdXJyZW50SXRlbS52YWwoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5zbG90JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5hc3NldC1wcmV2aWV3JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoYXNzZXRQcmV2aWV3VGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCcldXJsJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0LnByZXZpZXdfdXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAoJyV0aXRsZSUnLCBcImdcIiksIGN1cnJlbnRBc3NldC5uYW1lKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhpZGUgYWRkaXRpb25hbCByb3dzXHJcbiAqXHJcbiAqIEBwYXJhbSBlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAkKCcuYWRkaXRpb25hbC1kYXRhJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIE1hcmsgaW5wdXQgYXMgY2hhbmdlZFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG59XHJcbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcclxuXHJcbi8qKlxyXG4gKiBTb3J0YWJsZSBJbml0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICBuZXcgU29ydGFibGUoX3RoaXMsIHtcclxuICAgICAgICBncm91cDogX3RoaXMuZGF0YXNldC5ncm91cCxcclxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcclxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5maW5kKF90aGlzLmRhdGFzZXQucG9zaXRpb24pLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQocG9zaXRpb24udmFsKCkpICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnZhbChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcclxuaW1wb3J0IHtDT0xMRUNUSU9OX1NIT1dfRk9STX0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVwiO1xyXG5pbXBvcnQgbWFya0lucHV0QXNDaGFuZ2VkIGZyb20gXCIuL2hhbmRsZXJzL21hcmtJbnB1dEFzQ2hhbmdlZFwiO1xyXG5pbXBvcnQgc29ydGFibGVJbml0IGZyb20gXCIuL2hhbmRsZXJzL3NvcnRhYmxlSW5pdFwiO1xyXG5pbXBvcnQgaGlkZUFkZGl0aW9uYWxSb3dzIGZyb20gXCIuL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93c1wiO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxuLyoqXHJcbiAqIFByZXZpZXcgSW1hZ2UgKERyb3Bab25lIGluaXQpXHJcbiAqL1xyXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KENPTExFQ1RJT05fU0hPV19GT1JNKSk7XHJcblxyXG4vKipcclxuICogRmFzdCBzYXZlIGNvbGxlY3Rpb25cclxuICovXHJcbiQoJy5jb2xsZWN0aW9uLWZhc3Qtc2F2ZScpLmNsaWNrKGZhc3RTYXZlKTtcclxuXHJcbi8qKlxyXG4gKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXHJcbiAqL1xyXG4kKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0JykuY2hhbmdlKG1hcmtJbnB1dEFzQ2hhbmdlZCk7XHJcblxyXG4vKipcclxuICogU29ydGFibGUgaW5pdFxyXG4gKi9cclxuJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xyXG5cclxuLyoqXHJcbiAqIEhpZGUgYWRkaXRpb25hbCByb3dzXHJcbiAqL1xyXG4kKCcuaGlkZS1zbG90cycpLmNsaWNrKGhpZGVBZGRpdGlvbmFsUm93cyk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxyXG4gKiBBZGQgcm93cyB0byB0aGUgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjY3JvcHMgPiB0Ym9keScpO1xyXG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2Nyb3BfdGVtcGxhdGUnKS5odG1sKCk7XHJcblxyXG4gICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmNyb3BfaWQnKS50ZXh0KCk7XHJcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lY3JvcCUvZywgaSArIGluY3JlbWVudElkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBEZWxldGUgcm93XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVJvdygpIHtcclxuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHthZGRSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZFJvd1wiO1xyXG5pbXBvcnQge2RlbGV0ZVJvd30gZnJvbSBcIi4vaGFuZGxlcnMvZGVsZXRlUm93XCI7XHJcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XHJcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7QVdBUkRfQ1JFQVRFRCwgQVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtcm93JywgYWRkUm93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZGVsZXRlUm93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcclxuICAgICAqIENoYW5nZSBjb3VudGVyXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhd2FyZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9ICQodGhpcykuY2xvc2VzdCgndHInKTtcclxuXHJcbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZCh0aGlzKSgpO1xyXG5cclxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCwgc2VsZik7XHJcblxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyb3cuYWRkQ2xhc3MoJ2NoYW5nZWQnKSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmZhc3Qtc2F2ZS1wYWdlJykuY2xpY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIGF3YXJkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xyXG5cclxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKHRoaXMpKCk7XHJcblxyXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgc2VsZik7XHJcblxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyb3cuYWRkQ2xhc3MoJ2NoYW5nZWQnKSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmZhc3Qtc2F2ZS1wYWdlJykuY2xpY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4iLCIvKipcclxuICogQWRkIG5leHQgcm93cyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xyXG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcclxuICAgIGNvbnN0IHRib2R5ID0gJCgnI2RhaWx5X2xvb3QgPiB0Ym9keScpO1xyXG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2RhaWx5X2xvb3RfdGVtcGxhdGUnKS5odG1sKCk7XHJcbiAgICBsZXQgbGFzdElEUyA9IFtdO1xyXG4gICAgbGV0IGluY3JlbWVudElkID0gMTtcclxuICAgIHRib2R5LmZpbmQoXCJ0clwiKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgaWYocGFyc2VJbnQoJChpdGVtKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKCkpKXtcclxuICAgICAgICAgICAgbGFzdElEUy5wdXNoKHBhcnNlSW50KCQoaXRlbSkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbCgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYobGFzdElEUy5sZW5ndGgpe1xyXG4gICAgICAgIGluY3JlbWVudElkID0gKE1hdGgubWF4LmFwcGx5KE1hdGgsbGFzdElEUykgKyAxKSB8fCAxO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xyXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXJvd0luZGV4JS9nLCBpICsgaW5jcmVtZW50SWQpKTtcclxuICAgICAgICB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoaSArIGluY3JlbWVudElkKTtcclxuXHJcbiAgICAgICAgdGJvZHkuZmluZCgnLmRhdGVwaWNrZXInKVxyXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXHJcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtaW5WaWV3OiAnMidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xyXG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuZGFpbHktbG9vdC1zYXZlLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgZGF0YSA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXHJcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZmluZCgndHIuY2hhbmdlZCcpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xyXG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XHJcblxyXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuXHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmUgdGhlIHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVN0YXRlKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnJlbW92ZS1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoIHBhZ2UgdHlwZVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy50b2dnbGUtcGFnZS10eXBlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5wYXRobmFtZS5zbGljZSgwLCBsb2NhdGlvbi5wYXRobmFtZS5sYXN0SW5kZXhPZignLycpKSArICQodGhpcykuZGF0YSgnaHJlZicpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcclxuICAgICAqIENoYW5nZSBjb3VudGVyXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxyXG4gICAgfSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcjY29tbW9uLW1lbnUnKS5maW5kKCcuY29tbW9uLW1lbnUtc2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYoJCh0aGlzKS5maW5kKCdsaScpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNvbW1vbi1tZW51LXNlY3Rpb24nKS5oaWRlKClcclxuICAgICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG4vKipcclxuICogU2hvdyBEZXBsb3kgU3RhdHVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVwbG95U3RhdHVzKCkge1xyXG4gICAgbmV3IGh0dHAoREVQTE9ZX1NUQVRVU19ST1VURSlcclxuICAgICAgICAubWV0aG9kKCdnZXQnKVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgJCgnLmRlcGxveS1zdGF0dXMnKS5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gJCgnLmRlcGxveS1zdGF0dXMnKS5maW5kKCcuYWN0aXZlLWRlcGxveScpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGlmKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZGVwbG95LWJ0bicpLmFkZENsYXNzKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZigkKCcuZGVwbG95LWJ0bicpLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ZGVwbG95U3RhdHVzKCk7fSwgMzAwMCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG59XHJcbiIsIlxyXG4vKipcclxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcclxuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcclxuICAgIHVybCArPSBcIj9kaXJlY3Rpb249XCIgKyBkaXJlY3Rpb247XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7XHJcbiAgICAgICAgaWQ6ICdkZXBsb3knXHJcbiAgICB9LCAnRGVwbG95JywgdXJsKTtcclxufVxyXG4iLCIvKipcclxuICogSGFuZGxlciBmb3Igc2hvdyDQsmVwZW5kZW5jeVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dEZXBlbmRlbmN5KGUpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcclxuICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCcuY29uZmlnLWl0ZW0tYmxvY2snKS5kYXRhKCdtb2RlbCcpO1xyXG4gICAgbGV0IGFkZE1vZGUgPSBjdXJyZW50RWxlbWVudC5pcygnOmNoZWNrZWQnKTtcclxuXHJcbiAgICBvbmVMZXZlbFNob3coY3VycmVudENvbmZpZywgYWRkTW9kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBhZGRNb2RlLCBsZXZlbCA9IDEpIHtcclxuICAgIGlmKERFUExPWV9ERVBFTkRTLmhhc093blByb3BlcnR5KGNvbmZpZ05hbWUpICYmIGxldmVsIDwgMTApIHtcclxuICAgICAgICBsZXQgY29uZmlnQmxvY2sgPSAkKCcubW9kZWwtJyArIGNvbmZpZ05hbWUpO1xyXG4gICAgICAgIGlmKGFkZE1vZGUpIHtcclxuICAgICAgICAgICAgY29uZmlnQmxvY2suYWRkQ2xhc3MoJ2RlcGxveS1jaGFpbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLnJlbW92ZUNsYXNzKCdkZXBsb3ktY2hhaW4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXSkge1xyXG4gICAgICAgICAgICBsZXQgZGVwZW5kQ29uZmlnTmFtZSA9IERFUExPWV9ERVBFTkRTW2NvbmZpZ05hbWVdW2tleV07XHJcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlnQmxvY2sgPSAkKCcubW9kZWwtJyArIGRlcGVuZENvbmZpZ05hbWUpO1xyXG4gICAgICAgICAgICBpZihhZGRNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWdCbG9jay5hZGRDbGFzcygnZGVwbG95LWNoYWluJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWdCbG9jay5yZW1vdmVDbGFzcygnZGVwbG95LWNoYWluJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25lTGV2ZWxTaG93KGRlcGVuZENvbmZpZ05hbWUsIGFkZE1vZGUsIGxldmVsICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xyXG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogSGFuZGxlciBmb3Igc2hvdyBkZXBlbmRlbmN5IHBvcHVwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RlcGVuZGVuY3lQb3B1cChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgY3VycmVudENvbmZpZyA9IGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJy5jb25maWctaXRlbS1ibG9jaycpLmRhdGEoJ21vZGVsJyk7XHJcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnSWQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCcuY29uZmlnLWl0ZW0tYmxvY2snKS5kYXRhKCdpZCcpO1xyXG4gICAgbGV0IGlkcyA9IFtdO1xyXG4gICAgaWYoY3VycmVudENvbmZpZ0lkKSB7XHJcbiAgICAgICAgaWRzLnB1c2goY3VycmVudENvbmZpZ0lkKTtcclxuICAgIH1cclxuXHJcbiAgICByb290TGV2ZWxTaG93KGN1cnJlbnRDb25maWcsIGlkcyk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPbmUgbGV2ZWwgc2hvd1xyXG4gKlxyXG4gKiBAcGFyYW0gY29uZmlnTmFtZVxyXG4gKiBAcGFyYW0gZGVwZW5kQ29uZmlnTmFtZVxyXG4gKiBAcGFyYW0gbGV2ZWxcclxuICogQHBhcmFtIGlkUmVzcG9uc2VcclxuICovXHJcbmZ1bmN0aW9uIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCAgbGV2ZWwgPSAxLCBpZFJlc3BvbnNlKSB7XHJcbiAgICBpZihERVBMT1lfREVQRU5EUy5oYXNPd25Qcm9wZXJ0eShjb25maWdOYW1lKSAmJiBsZXZlbCA8IDEwKSB7XHJcbiAgICAgICAgbGV0IGlkcyA9IGlkUmVzcG9uc2UuaWRzO1xyXG4gICAgICAgIGxldCB0ZXh0Q2xhc3MgPSAnJztcclxuICAgICAgICBpZihpZFJlc3BvbnNlLmhhc093blByb3BlcnR5KCdub3RJbXBsZW1lbnRlZCcpKSB7XHJcbiAgICAgICAgICAgIHRleHRDbGFzcyA9ICd0ZXh0LW11dGVkJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpc1JlY3Vyc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgICQoJy5jaGFpbi0nICsgY29uZmlnTmFtZSkuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnBhcmVudHMoJy5jaGFpbi0nICsgZGVwZW5kQ29uZmlnTmFtZSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaXNSZWN1cnNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjaGFpbi0nICsgZGVwZW5kQ29uZmlnTmFtZSArICdcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIHRleHRDbGFzcyArICdcIj4nICsgZGVwZW5kQ29uZmlnTmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4oUmVjdXJzaW9uKTwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+PGJyPicpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoJCh0aGlzKS5maW5kKCcuY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNoYWluLScgKyBkZXBlbmRDb25maWdOYW1lICsgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cIicgKyB0ZXh0Q2xhc3MgKyAnXCI+JyArIGRlcGVuZENvbmZpZ05hbWUgKyAnPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgIChpZHMubGVuZ3RoID4gMCA/ICc8c3BhbiBjbGFzcz1cImRlcGVuZC1pZHNcIj4gJyArIGlkcy5qb2luKCcsJykgKyAnPC9zcGFuPicgOiAnJykgICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWlzUmVjdXJzaW9uKSB7XHJcbiAgICAgICAgICAgIGdldERlcGxveU1vZGVsSWRzKGRlcGVuZENvbmZpZ05hbWUsIGxldmVsLCBpZHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSb290IGxldmVsIHNob3dcclxuICpcclxuICogQHBhcmFtIGNvbmZpZ05hbWVcclxuICogQHBhcmFtIGlkc1xyXG4gKi9cclxuZnVuY3Rpb24gcm9vdExldmVsU2hvdyhjb25maWdOYW1lLCBpZHMgPSBbXSkge1xyXG4gICAgbmV3IGh0dHAoREVQTE9ZX01PREVMX0lEU19ST1VURSlcclxuICAgICAgICAubWV0aG9kKCdwb3N0JylcclxuICAgICAgICAuZGF0YSh7XHJcbiAgICAgICAgICAgICdkaXJlY3Rpb24nOiBBQ1RJVkVfRElSRUNUSU9OLFxyXG4gICAgICAgICAgICAnZGVwZW5kZW50TW9kZWwnOiBjb25maWdOYW1lLFxyXG4gICAgICAgICAgICAnZGVwZW5kZW50TW9kZWxJZHMnOiBpZHNcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkcyA9IHJlc3BvbnNlLmlkcyB8fCBbXTtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlcGxveS1jaGFpbi1ibG9ja1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAkKCcuZGVwbG95LWNoYWluLWJsb2NrJykuaHRtbCgnPGRpdiBjbGFzcz1cImNoYWluLScgKyBjb25maWdOYW1lICsgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxzcGFuPicgKyBjb25maWdOYW1lICsgJzwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImRlcGVuZC1pZHNcIj4gJyArIGlkcy5qb2luKCcsJykgKyAnPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2PicpO1xyXG5cclxuICAgICAgICAgICAgbmV3IE1vZGFsQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyKCdEZXBsb3kgZGVwZW5kZW5jeScpXHJcbiAgICAgICAgICAgICAgICAuYm9keSgkKCcuZGVwbG95LWNoYWluLWJsb2NrJykpXHJcbiAgICAgICAgICAgICAgICAubW9kYWwoKTtcclxuXHJcbiAgICAgICAgICAgIGdldERlcGxveU1vZGVsSWRzKGNvbmZpZ05hbWUsIDEsIGlkcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGRlcGxveSBtb2RlbCBpZHNcclxuICpcclxuICogQHBhcmFtIGNvbmZpZ05hbWVcclxuICogQHBhcmFtIGxldmVsXHJcbiAqIEBwYXJhbSBpZHNcclxuICovXHJcbmZ1bmN0aW9uIGdldERlcGxveU1vZGVsSWRzKGNvbmZpZ05hbWUsIGxldmVsID0gMSwgaWRzID0gW10pIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXSkge1xyXG4gICAgICAgIGxldCBkZXBlbmRDb25maWdOYW1lID0gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV1ba2V5XTtcclxuXHJcbiAgICAgICAgaWYoaWRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBuZXcgaHR0cChERVBMT1lfTU9ERUxfSURTX1JPVVRFKVxyXG4gICAgICAgICAgICAgICAgLm1ldGhvZCgncG9zdCcpXHJcbiAgICAgICAgICAgICAgICAuZGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2RpcmVjdGlvbic6IEFDVElWRV9ESVJFQ1RJT04sXHJcbiAgICAgICAgICAgICAgICAgICAgJ21vZGVsJzogZGVwZW5kQ29uZmlnTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAnZGVwZW5kZW50TW9kZWwnOiBjb25maWdOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbElkcyc6IGlkc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvbmVMZXZlbFNob3coY29uZmlnTmFtZSwgZGVwZW5kQ29uZmlnTmFtZSwgbGV2ZWwgKyAxLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnNlbmQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvbmVMZXZlbFNob3coY29uZmlnTmFtZSwgZGVwZW5kQ29uZmlnTmFtZSwgbGV2ZWwgKyAxLCB7J2lkcyc6IFtdfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcclxuaW1wb3J0IHtzaG93RGVwZW5kZW5jeX0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3lcIjtcclxuaW1wb3J0IHtzaG93RGVwZW5kZW5jeVBvcHVwfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93RGVwZW5kZW5jeVBvcHVwXCI7XHJcbmltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xyXG5pbXBvcnQge2RlcGxveVN0YXR1c30gZnJvbSBcIi4vZGVwbG95U3RhdHVzXCI7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4kKGRvY3VtZW50KVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKVxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIGFsbCBwYWdlXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmZhc3Qtc2F2ZS1wYWdlLWN1c3RvbScsIGZhc3RTYXZlUGFnZSlcclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBkZXBlbmRlbmN5XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmNvbmZpZy1jaGVja2JveCcsIHNob3dEZXBlbmRlbmN5KVxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IGRlcGVuZGVuY3kgcG9wdXBcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1kZXBlbmRlbmN5Jywgc2hvd0RlcGVuZGVuY3lQb3B1cClcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrL3VuY2hlY2sgYXdhcmQgZGVwZW5kZW5jaWVzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJy5hd2FyZC1kZXBlbmRlbmN5IFt0eXBlPWNoZWNrYm94XScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYXdhcmQtZGVwZW5kZW5jeSBbdHlwZT1jaGVja2JveF0nKS5wcm9wKCdjaGVja2VkJywgdGhpcy5jaGVja2VkKTtcclxuICAgIH0pXHJcblxyXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZGVwbG95U3RhdHVzKCk7XHJcbiAgICB9KTtcclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsZXZlbHMgY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xyXG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcclxuICAgIGNvbnN0IHRib2R5ID0gJCgnI2RwYSA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5kcGFfaWQnKS52YWwoKTtcclxuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcclxuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI2RwYV90ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8lZHBhX2lkJS9nLCBpICsgaW5jcmVtZW50SWQpO1xyXG5cclxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGRwYSBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlRHBhU3RhdGUgKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XHJcbiAgICBsZXQgZGF0YSA9ICQoJy5kcGEtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgbmV3IGh0dHAocm91dGUpXHJcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcclxuICAgICAgICAuZGF0YShkYXRhKVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuaW1wb3J0IHtzYXZlRHBhU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZVwiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBkcGFcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93IHRvIHRoZSBkcGEgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBuZXh0IHJvdyB0byB0aGUgZHBhIGdyaWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kcGEtc2F2ZS1wYWdlJywgc2F2ZURwYVN0YXRlKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcclxuICAgICAqIENoYW5nZSBjb3VudGVyXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxyXG4gICAgfSk7XHJcbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xyXG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcclxuICAgIGNvbnN0IHRib2R5ID0gJCgnI2R5ZSA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjZHllX3RlbXBsYXRlJykuaHRtbCgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xyXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xyXG5cclxuICAgICAgICBsZXQgbGFzdFJvdyA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmNwMicpO1xyXG4gICAgICAgIGxhc3RSb3cuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICAgICAgJChpdGVtKS5jb2xvcnBpY2tlcih7fSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKipcclxuICogQ2hhbmdlIHJvdyBpbmRleFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VSb3dJbmRleCgpIHtcclxuICAgIGxldCByb3dJbmRleCA9ICQodGhpcykudmFsKCk7XHJcbiAgICBsZXQgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJ2lucHV0LCBzZWxlY3QnKTtcclxuXHJcbiAgICByb3cuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICBsZXQgb2xkTmFtZSA9ICQoaXRlbSkuYXR0cignbmFtZScpO1xyXG4gICAgICAgIGxldCBuZXdOYW1lID0gb2xkTmFtZS5zbGljZSgwLCA0KSArIHJvd0luZGV4ICsgIG9sZE5hbWUuc2xpY2Uob2xkTmFtZS5pbmRleE9mKCddJykpO1xyXG4gICAgICAgICQoaXRlbSkuYXR0cignbmFtZScsIG5ld05hbWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcclxuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XHJcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUiA9ICcuZHllLXNhdmUtcGFnZS1jb250YWluZXInO1xyXG5cclxuLyoqXHJcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGR5ZXMgcGFnZVxyXG4gKlxyXG4gKiBAcGFyYW0gZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XHJcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKERZRV9DT05UQUlORVJfU0VMRUNUT1IpO1xyXG5cclxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2F2ZWRJdGVtLmhhc0NsYXNzKCdwcm9ncmVzcycpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2F2ZWRJdGVtLmFkZENsYXNzKCdwcm9ncmVzcycpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNoYW5nZWQgZGF0YVxyXG4gICAgICovXHJcbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtSXRlbXMpO1xyXG5cclxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XHJcbiAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcclxuICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYXJrIGZvcm0ncyB0ciBhcyBjaGFuZ2VkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWRUcigpIHtcclxuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG59XHJcbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuaW1wb3J0IHtjaGFuZ2VSb3dJbmRleH0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUm93SW5kZXhcIjtcclxuaW1wb3J0IGR5ZVNhdmVQYWdlLCB7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUiwgbWFya0NoYW5nZWRUcn0gZnJvbSBcIi4vaGFuZGxlcnMvZHllU2F2ZVBhZ2VcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0IGNvbG9yLXBpY2tlciBpbnB1dHNcclxuICAgICAqL1xyXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5jcDInKS5jb2xvcnBpY2tlcigpXHJcbiAgICAgICAgICAgIC5vbignY3JlYXRlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogTWFyayB0ciBhcyBjaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdjaGFuZ2UnLCBgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBpbnB1dCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBzZWxlY3QsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZFRyKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbignaW5wdXQnLCBgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBpbnB1dCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBzZWxlY3QsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZFRyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2Ugcm93IGluZGV4XHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnLmFzc2V0X2lkJywgY2hhbmdlUm93SW5kZXgpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcclxuICAgICAqL1xyXG4gICAgJCgnLmR5ZS1zYXZlLXBhZ2UnKS5jbGljayhkeWVTYXZlUGFnZSk7XHJcbiIsImV4cG9ydCBjb25zdCBHSUZUX1dSQVBfUk9XX0FEREVEID0gJ0dJRlRfV1JBUF9ST1dfQURERUQnO1xyXG4iLCJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XHJcblxyXG4vKipcclxuICogQXNzZXQgSUQgY2hhbmdlZFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY3VycmVudElucHV0ID0gJCh0aGlzKTtcclxuICAgIGNvbnN0IGFzc2V0SUQgPSBjdXJyZW50SW5wdXQudmFsKCk7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50SW5wdXQuY2xvc2VzdCgndHInKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGR1cGxpY2F0ZWQgYXNzZXRzIGlkc1xyXG4gICAgICovXHJcbiAgICBjb25zdCBjdXJyZW50QXNzZXREdXBsaWNhdGUgPSAkKCcjZ2lmdC13cmFwcy1jb250YWluZXInKS5maW5kKCcuYXNzZXQtaWQnKS5maWx0ZXIoKF8sIGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gYXNzZXRJRCA9PT0gaXRlbS52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChjdXJyZW50QXNzZXREdXBsaWNhdGUubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUgYXNzZXQgJyArIGFzc2V0SUR9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgaW5wdXRzIG5hbWVzXHJcbiAgICAgKi9cclxuICAgIHBhcmVudC5maW5kKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZS5yZXBsYWNlKCAvXFxbW1xcZF0rXFxdL2csIGBbJHthc3NldElEfV1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIGhyZWYgb2YgdGhlIGRlbGV0ZSBidXR0b25cclxuICAgICAqL1xyXG4gICAgcGFyZW50LmZpbmQoJy5hamF4LWNvbmZpcm0tYWN0aW9uLWN1c3RvbScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaHJlZiA9IHRoaXMuaHJlZi5yZXBsYWNlKCAvXFwvW1xcZF0rJC9nLCBgLyR7YXNzZXRJRH1gKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xyXG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XHJcbmltcG9ydCBwb3NpdGlvblVwZGF0ZSBmcm9tIFwiLi4vaGVscGVycy9wb3NpdGlvblVwZGF0ZVwiO1xyXG5cclxuLyoqXHJcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXHJcbiAqXHJcbiAqIEBwYXJhbSBlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYXNzZXRzID0ge307XHJcbiAgICAgICAgJCgnI2dpZnQtd3JhcHMtY29udGFpbmVyJykuZmluZCgnLmFzc2V0LWlkJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChhc3NldHNbdGhpcy52YWx1ZV0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldHNbdGhpcy52YWx1ZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBhc3NldCAnICsgZXJyLm1lc3NhZ2V9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3NpdGlvbiB1cGRhdGVcclxuICAgICAqL1xyXG4gICAgcG9zaXRpb25VcGRhdGUoKTtcclxuXHJcbiAgICBmYXN0U2F2ZVBhZ2UuYmluZCh0aGlzKShlKTtcclxufVxyXG4iLCJpbXBvcnQgY29uZmlybU1vZGFsIGZyb20gXCJoYW5kbGVycy9jb25maXJtTW9kYWxcIjtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgZW1iZWRlZCBlbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc3QgYnV0dG9uVXJsID0gdGhpcy5ocmVmLnNwbGl0KCcvJyk7XHJcbiAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChwYXJzZUludChidXR0b25VcmxbYnV0dG9uVXJsLmxlbmd0aCAtIDFdKSA9PT0gMCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybU1vZGFsLmJpbmQodGhpcykoZSk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcclxuaW1wb3J0IHBvc2l0aW9uVXBkYXRlIGZyb20gXCJtb2R1bGVzL2dpZnQtd3JhcC9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlXCI7XHJcblxyXG4vKipcclxuICogU29ydGFibGUgSW5pdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgbmV3IFNvcnRhYmxlKF90aGlzLCB7XHJcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXHJcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvblVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBQb3NpdGlvbiB1cGRhdGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5wb3NpdGlvbicpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAkKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSAkKCcjcGFnZScpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VfbGltaXQgPSAkKCdbbmFtZT1cInBhZ2VfbGltaXRcIl0nKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlSW50KHBvc2l0aW9uLnZhbCgpKSAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24udmFsKGluZGV4ICsgKChwYWdlIC0gMSkgKiBwYWdlX2xpbWl0KSk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLmNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7R0lGVF9XUkFQX1JPV19BRERFRH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEFkZCBuZXcgcm93IHRvIGdyaWRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShHSUZUX1dSQVBfUk9XX0FEREVELCBkYXRhID0+IHtcclxuICAgICAgICAkKCcjZ2lmdC13cmFwLScgKyBkYXRhLmVtYmVkQmxvY2tJZClcclxuICAgICAgICAgICAgLmZpbmQoJy5kYXRldGltZXBpY2tlcicpXHJcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcclxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XHJcbmltcG9ydCBhc3NldENoYW5nZWQgZnJvbSBcIi4vaGFuZGxlcnMvYXNzZXRDaGFuZ2VkXCI7XHJcbmltcG9ydCBhZGRSb3cgZnJvbSBcIi4vbGlzdGVuZXJzL2FkZFJvd1wiO1xyXG5pbXBvcnQgZmFzdFNhdmVQYWdlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xyXG5pbXBvcnQgcmVtb3ZlUm93IGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZVJvd1wiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZSBhc3NldCBpZCBpbiBpbnB1dFxyXG4gICAgICovXHJcbiAgICAub24oJ2NoYW5nZScsICcuYXNzZXQtaWQnLCBhc3NldENoYW5nZWQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJywgcmVtb3ZlUm93KTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgcm93IGxpc3RlbmVyXHJcbiAqL1xyXG5hZGRSb3coKTtcclxuXHJcbi8qKlxyXG4gKiBTb3J0YWJsZSBpbml0XHJcbiAqL1xyXG4kKCcuc29ydGFibGUnKS5lYWNoKHNvcnRhYmxlSW5pdCk7XHJcblxyXG4vKipcclxuICogU2F2ZSBhbGwgcGFnZVxyXG4gKi9cclxuJCgnLmZhc3Qtc2F2ZS1wYWdlLWN1c3RvbScpLmNsaWNrKGZhc3RTYXZlUGFnZSk7IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXIgZm9yIHNob3cgYXNzZXRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93QXNzZXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgbGV0IGFjdGlvbiA9IFNXT1dfQVNTRVRfUk9VVEUgKyAnP2lkPScgKyBjdXJyZW50RWxlbWVudC52YWwoKTtcclxuICAgIG5ldyBodHRwKGFjdGlvbilcclxuICAgICAgICAubWV0aG9kKCdnZXQnKVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpKSB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCduYW1lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCd0cicpLmZpbmQoJy5hc3NldC1uYW1lJykuaHRtbChyZXNwb25zZS5kYXRhLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5oYXNPd25Qcm9wZXJ0eSgncHJldmlld191cmwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LXByZXZpZXcgaW1nJykuYXR0cignc3JjJywgcmVzcG9uc2UuZGF0YS5wcmV2aWV3X3VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtcHJldmlldyAubGlzdC10aHVtYm5haWwnKS5kYXRhKCdmdWxsJywgcmVzcG9uc2UuZGF0YS5wcmV2aWV3X3VybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG59XHJcbiIsIlxyXG5pbXBvcnQge3Nob3dBc3NldH0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0Fzc2V0XCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IGFzc2V0XHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJy5hc3NldCcsIHNob3dBc3NldClcclxuXHJcbiAgICAiLCIvKipcclxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbG9jYWxpemF0aW9uIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcclxuICAgIGxldCB0Ym9keSA9ICQoJyNsb2NhbGl6YXRpb25zID4gdGJvZHknKTtcclxuICAgIGxldCB0ZW1wbGF0ZSA9ICQoJyNsb2NhbGl6YXRpb25fdGVtcGxhdGUnKS5odG1sKCk7XHJcblxyXG4gICAgdGJvZHkucHJlcGVuZCh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBSZW1vdmUgbm90IHNhdmVkIHJvd1xyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSb3coZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICQodGhpcykucGFyZW50cygndHInKS5yZW1vdmUoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xyXG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgbG9jYWxpemF0aW9uIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2NhbGl6YXRpb25TdGF0ZSAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudEJ0bi5jbG9zZXN0KCd0cicpO1xyXG4gICAgY29uc3QgY3VycmVudEtleSA9IHBhcmVudC5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLnZhbCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgZHVwbGljYXRlZCBrZXlzXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge2pRdWVyeX1cclxuICAgICAqL1xyXG4gICAgY29uc3QgY3VycmVudEtleUR1cGxpY2F0ZSA9ICQoJyNsb2NhbGl6YXRpb25zJykuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS5maWx0ZXIoKF8sIGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gY3VycmVudEtleSA9PT0gaXRlbS52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGN1cnJlbnRLZXlEdXBsaWNhdGUubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUga2V5ICcgKyBjdXJyZW50S2V5fSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBwYXJlbnQuZmluZCgnLmVkaXRhYmxlIGlucHV0Jykuc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcclxuICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS5hdHRyKCdyZWFkb25seScsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHtzYXZlTG9jYWxpemF0aW9uU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVMb2NhbGl6YXRpb25TdGF0ZVwiO1xyXG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XHJcbmltcG9ydCB7cmVtb3ZlUm93fSBmcm9tIFwiLi9oYW5kbGVycy9yZW1vdmVSb3dcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsb2NhbGl6YXRpb25zIGdyaWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuY3JlYXRlLXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmUgdGhlIHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZUxvY2FsaXphdGlvblN0YXRlKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIHRoZSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcucmVtb3ZlLXJvdycsIHJlbW92ZVJvdyk7XHJcbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWFnaWMgPiB0Ym9keScpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xyXG4gICAgICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJ2lucHV0W25hbWU9XCJpZFwiXScpLnZhbCgpO1xyXG4gICAgICAgIGxldCBpbmNyZW1lbnRJZCA9IHBhcnNlSW50KGxhc3RJRCkgfHwgMDtcclxuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI21hZ2ljX3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVtYWdpY19pZCUvZywgKytpbmNyZW1lbnRJZCk7XHJcblxyXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU1hZ2ljU3RhdGUgKCkge1xyXG4gICAgY29uc3QgZGF0YSA9ICQoJy5tYWdpYy1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dFwiKTtcclxuXHJcbiAgICBkYXRhLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICAkKGl0ZW0pLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSlcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxyXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxyXG4gICAgICAgICAgICAuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge3NhdmVNYWdpY1N0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlTWFnaWNTdGF0ZVwiO1xyXG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmUgdGhlIHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZU1hZ2ljU3RhdGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXHJcbiAgICAgKiBDaGFuZ2UgY291bnRlclxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcclxuICAgIH0pO1xyXG4iLCJpbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIFNob3cgbGFzdCBtYWtldXAga2l0IElEXHJcbiAqXHJcbiAqIEBwYXJhbSBlXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBuZXcgUmVxdWVzdEJ1aWxkZXIodGhpcy5ocmVmKVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICQoJyNsYXN0LW1ha2V1cC1raXQtaWQnKVxyXG4gICAgICAgICAgICAgICAgLnZhbChyZXN1bHQubWFrZXVwX2tpdF9pZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufSIsImltcG9ydCBnZXRMYXN0TWFrZXVwS2l0SUQgZnJvbSBcIi4vaGFuZGxlcnMvZ2V0TGFzdE1ha2V1cEtpdElEXCI7XHJcblxyXG4vKipcclxuICogU2hvdyBsYXN0IG1ha2V1cCBraXQgSUQgYXQgdGhlIGJvZHkgcGFydHMgZ3JpZFxyXG4gKi9cclxuJCgnI2dldC1sYXN0LW1ha2V1cC1raXQtaWQnKVxyXG4gICAgLmNsaWNrKGdldExhc3RNYWtldXBLaXRJRCk7XHJcbiIsImV4cG9ydCBjb25zdCBNQUtFVVBfS0lUX1NIT1dfRk9STSA9ICdNQUtFVVBfS0lUX1NIT1dfRk9STSc7XHJcbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcclxuaW1wb3J0IHtNQUtFVVBfS0lUX1NIT1dfRk9STX0gZnJvbSBcIm1vZHVsZXMvbWFrZXVwLWtpdC9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxyXG4gKi9cclxuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChNQUtFVVBfS0lUX1NIT1dfRk9STSkpO1xyXG4iLCIvKipcclxuICogQWRkIG5leHQgcm93cyB0byB0aGUgaW5ncmVkaWVudCBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWVhbF9pbmdyZWRpZW50X2dyb3VwcyA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF9pbmdyZWRpZW50X2dyb3Vwc190ZW1wbGF0ZScpLmh0bWwoKTtcclxuXHJcbiAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuZ3JvdXBfaWQnKS50ZXh0KCk7XHJcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lbWVhbC1pbmdyZWRpZW50LWdyb3VwJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhpZGUgcm93XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluZ3JlZGllbnREZWxldGUoKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuaW1wb3J0IHtpbmdyZWRpZW50RGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9pbmdyZWRpZW50RGVsZXRlXCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBpbmdyZWRpZW50RGVsZXRlKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcclxuICAgICAqIENoYW5nZSBjb3VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcclxuICAgIH0pO1xyXG5cclxuIiwiLyoqXHJcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGluZ3JlZGllbnQgY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xyXG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcclxuICAgIGNvbnN0IHRib2R5ID0gJCgnI21lYWxfaW5ncmVkaWVudHMgPiB0Ym9keScpO1xyXG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI21lYWxfaW5ncmVkaWVudHNfdGVtcGxhdGUnKS5odG1sKCk7XHJcblxyXG4gICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmluZ3JlZGllbnRfaWQnKS50ZXh0KCk7XHJcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lbWVhbC1pbmdyZWRpZW50JS9nLCBpICsgaW5jcmVtZW50SWQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhpZGUgcm93XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluZ3JlZGllbnREZWxldGUoKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuaW1wb3J0IHtpbmdyZWRpZW50RGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9pbmdyZWRpZW50RGVsZXRlXCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBpbmdyZWRpZW50RGVsZXRlKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbn0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4iLCIvKipcclxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWVhbCBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWVhbCA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF90ZW1wbGF0ZScpLmh0bWwoKTtcclxuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLm1lYWxfaWQnKS50ZXh0KCk7XHJcbiAgICBjb25zdCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcclxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcclxuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhpZGUgcm93XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lYWxEZWxldGUoKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIE1lYWwgY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU1lYWxTdGF0ZSAoKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcclxuICAgIGNvbnN0IHRib2R5ID0gJCgnLm1lYWwtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZFwiKTtcclxuICAgIGNvbnN0IGRhdGEgPSAkKCcubWVhbC1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgaHR0cChyb3V0ZSlcclxuICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICB0Ym9keS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuaW1wb3J0IHttZWFsRGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9tZWFsRGVsZXRlXCI7XHJcbmltcG9ydCB7c2F2ZU1lYWxTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVBhZ2VcIjtcclxuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0NSRUFURUQsIEFXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XHJcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBtZWFsRGVsZXRlKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgbWVhbFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG5cclxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICAgICAgc2F2ZU1lYWxTdGF0ZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIGF3YXJkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzKSgpO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KTtcclxuXHJcbi8qKlxyXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXHJcbiAqL1xyXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZU1lYWxTdGF0ZSk7XHJcbiIsImV4cG9ydCBjb25zdCBORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0gPSAnTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNJztcclxuIiwiY29uc3QgVFJBU0ggPSAnVFJBU0gnO1xyXG5jb25zdCBUUkFTSF9GSUVMRFNfSUQgPSAndHJhc2gtZmllbGRzJztcclxuY29uc3QgU0VMRUNUX0lEID0gJ25laWdoYm9yLWFjdGl2aXR5LXR5cGUtaWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU0VMRUNUX0lEKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdCB8fCBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlbGVjdC5vcHRpb25zLmxlbmd0aCAmJiBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0pIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFzaEZpZWxkcyA9ICQoJyMnICsgVFJBU0hfRklFTERTX0lEKTtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkRWxlbWVudC50ZXh0LnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgY2FzZSBUUkFTSDpcclxuICAgICAgICAgICAgICAgIHRyYXNoRmllbGRzLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRyYXNoRmllbGRzLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge05FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0sIHNlbGYpO1xyXG5cclxuICAgICAgICBjaGFuZ2VUeXBlKCk7XHJcblxyXG4gICAgICAgICQoJy5uZWlnaGJvci1hY3Rpdml0eS1mb3JtIC5kYXRldGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcclxuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXHJcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcclxuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcclxuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSAnLi9oYW5kbGVycy9jaGFuZ2VUeXBlJztcclxuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xyXG5cclxuJChkb2N1bWVudClcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSlcclxuICAgIC5vbignY2hhbmdlJywgJy5uZWlnaGJvci1hY3Rpdml0eS10eXBlJywgY2hhbmdlVHlwZSk7XHJcblxyXG4vKipcclxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cclxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXHJcbiAqL1xyXG4kKCcuc2hvdy1mb3JtJylcclxuICAgIC5jbGljayhzaG93Rm9ybSk7XHJcbiIsImltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IFBST0RVQ1RfU0hPV19GT1JNID0gJ1BST0RVQ1RfU0hPV19GT1JNJztcclxuIiwiaW1wb3J0IENsZWF2ZSBmcm9tIFwiY2xlYXZlLmpzXCI7XHJcblxyXG4vKipcclxuICogUHJpY2UgaW5pdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgICBuZXcgQ2xlYXZlKHRoaXMsIHtcclxuICAgICAgICBudW1lcmFsOiB0cnVlLFxyXG4gICAgICAgIHByZWZpeDogJyQgJyxcclxuICAgICAgICByYXdWYWx1ZVRyaW1QcmVmaXg6IHRydWUsXHJcbiAgICAgICAgb25WYWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IE1hdGgucm91bmQoK2UudGFyZ2V0LnJhd1ZhbHVlICogMTAwKTtcclxuICAgICAgICAgICAgbGV0IHByb2R1Y3RQcmljZSA9ICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCd0ZCcpLmZpbmQoJy5wcm9kdWN0LXByaWNlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHBhcnNlSW50KHByb2R1Y3RQcmljZS52YWwoKSkpIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC52YWwodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYW5nZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xyXG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xyXG5pbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XHJcbmltcG9ydCB7UFJPRFVDVF9TSE9XX0ZPUk19IGZyb20gXCJtb2R1bGVzL3Byb2R1Y3QvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBwcmljZUluaXQgZnJvbSBcIm1vZHVsZXMvcHJvZHVjdC9oYW5kbGVycy9wcmljZUluaXRcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgYXdhcmREZWxldGUpO1xyXG5cclxuLyoqXHJcbiAqIFByZXZpZXcgSW1hZ2UgKERyb3Bab25lIGluaXQpXHJcbiAqL1xyXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KFBST0RVQ1RfU0hPV19GT1JNKSk7XHJcblxyXG4kKCcjdGVzdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFByaWNlIGZvcm1hdFxyXG4gKi9cclxuJCgnLnByb2R1Y3QtcHJpY2UtdmlldycpLmVhY2gocHJpY2VJbml0KTtcclxuIiwiXHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcclxuICogQWRkIG5leHQgcm93cyB0byB0aGUgY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xyXG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSBwYXJzZUludCgkKCcuYWRkLWNvdW50ZXInKS52YWwoKSk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJ3RhYmxlLnRhYmxlIHRib2R5Jyk7XHJcbiAgICBjb25zdCBtYXhJZCA9ICQodGhpcykuZGF0YSgnY291bnRlcicpO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSAkKCd0ZW1wbGF0ZSNjb25maWctcm93Jyk7XHJcblxyXG4gICAgbGV0IG5ld0xlbmd0aCA9IHBhcnNlSW50KHRib2R5LmZpbmQoJ3RyLm5ldy1yb3cnKS5sZW5ndGgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xyXG4gICAgICAgIGxldCB0cklkID0gKG1heElkID4gMCA/IG1heElkIDogMCkgKyBwYXJzZUludCh0Ym9keS5maW5kKCd0ci5uZXctcm93JykubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1JvdyA9IHRlbXBsYXRlLmh0bWwoKS5yZXBsYWNlKC8laWQlL2csIHRySWQpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8ldHJfaWQlL2csIHRySWQpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lZHJhZnQlL2csIHRySWQpO1xyXG5cclxuICAgICAgICAvLyBTZXQgZGVmYXVsdCB2YWx1ZXMgdG8gbmV3IHJvd3NcclxuICAgICAgICBsZXQgbmV3Um93SHRtbCA9ICQobmV3Um93KTtcclxuICAgICAgICAkKCcuZGVmYXVsdC1yb3ctdmFsdWUnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxldCBkZWZhdWx0VmFsdWUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICBuZXdSb3dIdG1sLmZpbmQoJy4nICsgJCh0aGlzKS5kYXRhKCdjbGFzcycpKS5hdHRyKCd2YWx1ZScsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3Um93ID0gbmV3Um93SHRtbC5nZXQoMCkub3V0ZXJIVE1MO1xyXG5cclxuICAgICAgICBpZiAobmV3TGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAkKHRib2R5LmZpbmQoJ3RyLm5ldy1yb3cnKS5sYXN0KCkpLmFmdGVyKG5ld1Jvdyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGJvZHkucHJlcGVuZChuZXdSb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdMZW5ndGgrKztcclxuXHJcbiAgICAgICAgdGJvZHkuZmluZCgnW2RhdGEtYXV0b2luY3JlbWVudD1cIjFcIl0nKS5sYXN0KCkudmFsKHRySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xyXG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XHJcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xyXG5cclxuLyoqXHJcbiAqIERyb3B6b25lIGluaXRcclxuICpcclxuICogQHBhcmFtIF9cclxuICogQHBhcmFtIGl0ZW1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChfLCBpdGVtKSB7XHJcbiAgICBjb25zdCBkcm9wem9uZUNvbnRhaW5lciA9ICQoaXRlbSk7XHJcbiAgICBjb25zdCBwcmV2aWV3SGlkZGVuSW5wdXQgPSBkcm9wem9uZUNvbnRhaW5lci5maW5kKCdpbnB1dCcpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cclxuICAgICAqL1xyXG4gICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihpdGVtKVxyXG4gICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVDb250YWluZXIuZGF0YSgndXJsJykpXHJcbiAgICAgICAgLmVycm9yKChmaWxlLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCcnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYW5jZWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCcnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAkKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcclxuICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbChyZXNwb25zZS5maWxlX25hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHByZXZpZXdcclxuICAgICAqL1xyXG4gICAgaWYgKCEhcHJldmlld0hpZGRlbklucHV0LnZhbCgpKSB7XHJcbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyXHJcbiAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxyXG4gICAgICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVDb250YWluZXIuZGF0YSgnZm9sZGVyJyksIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyb3B6b25lIGJ1aWxkXHJcbiAgICAgKi9cclxuICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xyXG59IiwiLyoqXHJcbiAqIE1hcmsgY2hhbmdlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkICgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgJCgnI3VwZGF0ZS1hbGwnKS5zaG93KCk7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XHJcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGRwYSBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlUGFnZSAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKCQoXCJ0ci5jaGFuZ2VkXCIpLmZpbmQoJ2lucHV0LCBpbnB1dFt0eXBlPVwiaGlkZGVuXCJdLCBzZWxlY3QsIHRleHRhcmVhJykpO1xyXG5cclxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcclxuICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgIC5kYXRhKHsuLi5kYXRhfSlcclxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICBpZiAocmVzcC50eXBlID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnlFcnJvcihyZXNwLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGRwYSBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlUm93IChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IHJvd1RvU2F2ZSA9ICQodGhpcykucGFyZW50cygndHInKTtcclxuICAgIGxldCBhY3Rpb24gPSByb3dUb1NhdmUuZGF0YSgnYWN0aW9uJyk7XHJcbiAgICBsZXQgcm93ID0gcm93VG9TYXZlLmZpbmQoXCIuZWRpdGFibGUgc2VsZWN0LCAuZWRpdGFibGUgaW5wdXRcIikuc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgICBpZigkKFwidHIuY2hhbmdlZFwiKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgbGV0IHIgPSBjb25maXJtKCdDaGFuZ2VkIG1vcmUgdGhhbiBvbmUgcm93LiBTYXZlZCBvbmx5IGN1cnJlbnQgcm93IScpO1xyXG4gICAgICAgIGlmKHIgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZighcm93VG9TYXZlLmhhc0NsYXNzKCdjaGFuZ2VkJykpIHtcclxuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUFVUXCIsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICB1cmw6IGFjdGlvbixcclxuICAgICAgICBkYXRhOiByb3csXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oIHJlc3AgKSB7XHJcbiAgICAgICAgICAgIHJvd1RvU2F2ZS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgICAgICAgICAkLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwLm1lc3NhZ2VcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiByZXNwLnR5cGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCBleGNlcHRpb24pIHtcclxuICAgICAgICAgICAgaWYgKGpxWEhSLnJlc3BvbnNlSlNPTiAmJiBqcVhIUi5yZXNwb25zZUpTT04uaGFzT3duUHJvcGVydHkoJ2Vycm9ycycpKSB7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2goIGpxWEhSLnJlc3BvbnNlSlNPTi5lcnJvcnMsIGZ1bmN0aW9uKGVycm9yS2V5LCBlcnJvciApIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goIGVycm9yLCBmdW5jdGlvbihtZXNzYWdlS2V5LCBtZXNzYWdlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XHJcbmltcG9ydCBkcm9wem9uZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvZHJvcHpvbmVJbml0XCI7XHJcbmltcG9ydCB7c2F2ZVBhZ2V9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XHJcbmltcG9ydCB7bWFya0NoYW5nZWR9IGZyb20gXCIuL2hhbmRsZXJzL21hcmtDaGFuZ2VkXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XHJcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XHJcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9DUkVBVEVELCBBV0FSRF9ERUxFVEUsIENMT1NFX0FXQVJEX01PREFMfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xyXG5pbXBvcnQge3NhdmVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVSb3dcIjtcclxuXHJcbi8qKlxyXG4gKiBUdXJuZWQgb2ZmIHRoZSBEcm9wem9uZSBhdXRvIGluaXRcclxuICpcclxuICogQHR5cGUge2Jvb2xlYW59XHJcbiAqL1xyXG5Ecm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcclxuXHJcbi8qKlxyXG4gKiBEcm9wem9uZSBpbml0XHJcbiAqL1xyXG4kKCcuZHJvcHpvbmUnKS5lYWNoKGRyb3B6b25lSW5pdCk7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVW5zdWJzY3JpYmUgb24gbW9kYWwgY2xvc2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQ0xPU0VfQVdBUkRfTU9EQUwsIChkYXRhLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbml0IGNvbG9yLXBpY2tlciBpbnB1dHNcclxuICAgICAgICAgKi9cclxuICAgICAgICAkKCcuY3AyJykuY29sb3JwaWNrZXIoKTtcclxuXHJcbiAgICAgICAgJCgnI3VwZGF0ZS1hbGwnKS5jbGljayhzYXZlUGFnZSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnLnVwZGF0ZS1yb3cnKTtcclxuXHJcbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZChfdGhpcykoKTtcclxuXHJcbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCBzZWxmKTtcclxuICAgICAgICAgICAgc2F2ZUJ1dHRvbi5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVJvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBhd2FyZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcykoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgYXdhcmRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcucmVtb3ZlLWVtYmVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgICAgICQoJyN1cGRhdGUtYWxsJykuc2hvdygpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZHJvcHpvbmUnLCBtYXJrQ2hhbmdlZClcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBtYXJrQ2hhbmdlZClcclxuICAgIC5vbignaW5wdXQnLCAndGJvZHkgaW5wdXQsIHRib2R5IHRleHRhcmVhJywgbWFya0NoYW5nZWQpXHJcbiAgICAub24oJ2NoYW5nZScsICd0Ym9keSBpbnB1dCwgdGJvZHkgc2VsZWN0JywgbWFya0NoYW5nZWQpO1xyXG4iLCJjb25zdCBXQUxLX0NBVEVHT1JZID0gJzYnO1xyXG5jb25zdCBSVU5fQ0FURUdPUlkgPSc3JztcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdDIgPSAkKCcudGFibGUnKS5maW5kKCcuZW1iZWQtZ3JvdXAgc2VsZWN0LnNlbGVjdDInKTtcclxuICAgICAgICBsZXQgc2VsZWN0VmFsID0gMDtcclxuICAgICAgICBzZWxlY3QyLmVhY2goZnVuY3Rpb24gKG4sIGkpIHtcclxuICAgICAgICAgICAgc2VsZWN0VmFsID0gJChpKS52YWwoKTtcclxuICAgICAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XHJcbiAgICAgICAgICAgICAgICAkKGkpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoaSkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IGhpZGUgc3BlZWQgb24gdHJpZ2dlciBhZGQtZW1iZWQgYnV0dG9uXHJcbiAgICAgKi9cclxuICAgIC5vbignYWlfYW5pbWF0aW9uJywgJy5hZGQtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgZW1iZWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdFZhbCA9IGVtYmVkLmZpbmQoJy5zZWxlY3QyJykudmFsKCk7XHJcbiAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XHJcbiAgICAgICAgICAgIGVtYmVkLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbWJlZC5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgaGlkZSBzcGVlZFxyXG4gICAgICovXHJcbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0VmFsID0gJChpdGVtLnRhcmdldCkudmFsKCk7XHJcbiAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XHJcbiAgICAgICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNID0gJ1NIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0nO1xyXG4iLCIvKipcclxuICogQWRkIGEgbmV3IHNob3AgaW4gYSBkZXBhcnRtZW50cyBncmlkXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgdGFibGUgPSBjdXJyZW50QnRuLmNsb3Nlc3QoJy5zaG9wcy10YWJsZScpLmZpbmQoJ3Rib2R5Jyk7XHJcbiAgICBjb25zdCBkZXBhcnRtZW50SWQgPSBjdXJyZW50QnRuLmRhdGEoJ2RlcGFydG1lbnQnKTtcclxuICAgIGxldCBjb3VudGVyID0gcGFyc2VJbnQoY3VycmVudEJ0bi5kYXRhKCdjb3VudCcpKTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gJCgnI3Nob3AtdGVtcGxhdGUnKVxyXG4gICAgICAgIC5odG1sKClcclxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCclZGVwYXJ0bWVudElkJScsIFwiZ1wiKSwgZGVwYXJ0bWVudElkKVxyXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJyVpbmRleCUnLCBcImdcIiksIGNvdW50ZXIrKyk7XHJcblxyXG4gICAgY3VycmVudEJ0bi5kYXRhKCdjb3VudCcsIGNvdW50ZXIpO1xyXG5cclxuICAgIHRhYmxlLmFwcGVuZCh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcclxuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBGYXN0IHNhdmUgZm9yIHNob3AgZGVwYXJ0bWVudFxyXG4gKlxyXG4gKiBAcGFyYW0gZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3Qgc2hvcE5hbWVQcmVmaXggPSAnc2hvcCc7XHJcbiAgICBjb25zdCBkZXBhcnRtZW50TmFtZVByZWZpeCA9ICdkZXBhcnRtZW50JztcclxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgZmFzdFNhdmVDb250YWluZXIgPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGxldCBzaG9wcyA9IHt9O1xyXG4gICAgbGV0IGRlcGFydG1lbnQgPSB7fTtcclxuXHJcbiAgICBmYXN0U2F2ZUNvbnRhaW5lci5maW5kKCd0Ym9keSB0ci5jaGFuZ2VkIHRyLmluZm8nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgZGVwaW5kZXggPSAkKHRoaXMpLmNsb3Nlc3QoJy5kZXBhcnRtZW50JykuaW5kZXgoKTtcclxuICAgICAgICBsZXQgZGVwYXJ0bWVudEZvcm1EYXRhID0gZ2V0Rm9ybURhdGEoJCh0aGlzKSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBkZXBhcnRtZW50Rm9ybURhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBgJHtkZXBhcnRtZW50TmFtZVByZWZpeH1bJHtkZXBpbmRleH1dWyR7aX1dYDtcclxuICAgICAgICAgICAgZGVwYXJ0bWVudFtpdGVtTmFtZV0gPSBkZXBhcnRtZW50Rm9ybURhdGFbaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHRoaXMpLm5leHQoJ3RyLnNob3BzJykuZmluZCgndGJvZHkuc29ydGFibGUgdHInKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBnZXRGb3JtRGF0YSgkKHRoaXMpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBgJHtzaG9wTmFtZVByZWZpeH1bJHtkZXBhcnRtZW50Rm9ybURhdGEuaWR9XVske2luZGV4fV1bJHtpfV1gO1xyXG4gICAgICAgICAgICAgICAgc2hvcHNbaXRlbU5hbWVdID0gZm9ybURhdGFbaV07XHJcbiAgICAgICAgICAgICAgICBzaG9wc1tgJHtzaG9wTmFtZVByZWZpeH1bJHtkZXBhcnRtZW50Rm9ybURhdGEuaWR9XVske2luZGV4fV1bZGVwYXJ0bWVudF1gXSA9IGRlcGFydG1lbnRGb3JtRGF0YS5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcclxuICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgIC5kYXRhKHsuLi5zaG9wcywgLi4uZGVwYXJ0bWVudH0pXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAkKCcuY2hhbmdlZCcpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKipcclxuICogUmFkaW8gaW5wdXQgZnJvbSBjaGVja2JveFxyXG4gKiBCZWNhdXNlIGlucHV0W3R5cGU9cmFkaW9dIGRpZCBub3Qgd29yayBjb3JyZWN0bHlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gJCh0aGlzKTtcclxuICAgIGNvbnN0IGFsbEl0ZW1zID0gY3VycmVudEl0ZW0uY2xvc2VzdCgnLnRhYmxlJykuZmluZCgnLnJhZGlvJyk7XHJcblxyXG4gICAgYWxsSXRlbXMucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgIGFsbEl0ZW1zLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XHJcblxyXG4gICAgY3VycmVudEl0ZW0ucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgY3VycmVudEl0ZW0uYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcclxufVxyXG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XHJcblxyXG4vKipcclxuICogU29ydGFibGUgSW5pdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgbmV3IFNvcnRhYmxlKHRoaXMsIHtcclxuICAgICAgICBncm91cDogJ2RlcGFydG1lbnQnLFxyXG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxyXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAkKGUuaXRlbSkuY2xvc2VzdCgnLnRhYmxlJykuZmluZCgndHIuZGVwYXJ0bWVudCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaW86ICQoZS5pdGVtKS5maW5kKCcucmFkaW8nKSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6ICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XHJcblxyXG4vKipcclxuICogU29ydGFibGUgSW5pdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgbmV3IFNvcnRhYmxlKHRoaXMsIHtcclxuICAgICAgICBncm91cDogJ3Nob3BzJyxcclxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcclxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgJChlLml0ZW0pLmNsb3Nlc3QoJ3RyLmRlcGFydG1lbnQnKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhZGlvOiAkKGUuaXRlbSkuZmluZCgnLnJhZGlvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiAkKGUuaXRlbSkuY2xvc2VzdCgnLnRhYmxlJyksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBhcmVudC5maW5kKCcucmFkaW8uY2hlY2tlZDpndCgwKScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmFkaW8ucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7U0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XHJcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xyXG5pbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIERyb3B6b25lIGluaXQgYWZ0ZXIgdGhlIG1vZGFsIG9wZW5lZFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFNIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0sICgpID0+IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcmV2aWV3XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZHJvcHpvbmVJbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwnKSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByZXZpZXcgU21hbGxcclxuICAgICAgICAgKi9cclxuICAgICAgICBkcm9wem9uZUluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lLXNtYWxsJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybC1zbWFsbCcpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRHJvcHpvbmUgSW5pdFxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkcm9wem9uZUVsZW1lbnRcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcHJldmlld1VybEVsZW1lbnRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBkcm9wem9uZUluaXQoZHJvcHpvbmVFbGVtZW50LCBwcmV2aWV3VXJsRWxlbWVudCkge1xyXG4gICAgaWYgKCFkcm9wem9uZUVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGRyb3B6b25lRWxlbWVudClcclxuICAgICAgICAuc2V0VXBsb2FkVXJsKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LnVybClcclxuICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICQocHJldmlld1VybEVsZW1lbnQpLnZhbCgnJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2FuY2VsKCgpID0+IHtcclxuICAgICAgICAgICAgJChwcmV2aWV3VXJsRWxlbWVudCkudmFsKCcnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAkKGRyb3B6b25lRWxlbWVudCkuZmluZCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KHJlc3BvbnNlLmZpbGVfbmFtZSk7XHJcbiAgICAgICAgICAgIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlID0gcmVzcG9uc2UuZmlsZV9uYW1lO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHByZXZpZXdcclxuICAgICAqL1xyXG4gICAgaWYgKHByZXZpZXdVcmxFbGVtZW50LnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgIGRyb3B6b25lQnVpbGRlclxyXG4gICAgICAgICAgICAuc2V0UHJldmlldyhcclxuICAgICAgICAgICAgICAgIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQuZm9sZGVyLCBwcmV2aWV3VXJsRWxlbWVudC52YWx1ZSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyb3B6b25lIGJ1aWxkXHJcbiAgICAgKi9cclxuICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xyXG59IiwiaW1wb3J0IGFkZFNob3AgZnJvbSBcIi4vaGFuZGxlcnMvYWRkU2hvcFwiO1xyXG5pbXBvcnQgZmFzdFNhdmUgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVcIjtcclxuaW1wb3J0IHJhZGlvSW5wdXQgZnJvbSBcIi4vaGFuZGxlcnMvcmFkaW9JbnB1dFwiO1xyXG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XHJcbmltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIm1vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdFwiO1xyXG5pbXBvcnQgc29ydGFibGVEZXBhcnRtZW50SW5pdCBmcm9tIFwibW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvc29ydGFibGVEZXBhcnRtZW50SW5pdFwiO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuXHJcbi8qKlxyXG4gKiBEcm9wem9uZSBpbml0XHJcbiAqL1xyXG5zaG93Rm9ybSgpO1xyXG5cclxuJChkb2N1bWVudClcclxuICAgIC8qKlxyXG4gICAgICogUmFkaW8gYnV0dG9ucyBiZWhhdmlvclxyXG4gICAgICovXHJcbiAgICAub24oJ2NoYW5nZScsICcucmFkaW8nLCByYWRpb0lucHV0KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93IHRvIHRoZSBkcGEgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHIuZGVwYXJ0bWVudCcpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRG9jdW1lbnQgcmVhZHlcclxuICAgICAqL1xyXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGQgY2xhc3MgdG8gY2hlY2tlZCByYWRpb3NcclxuICAgICAgICAgKi9cclxuICAgICAgICAkKCcucmFkaW9bY2hlY2tlZF0nKS5hZGRDbGFzcygnY2hlY2tlZCcpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGQgYSBuZXcgc2hvcCBpbiBhIGRlcGFydG1lbnRzIGdyaWRcclxuICAgICAgICAgKi9cclxuICAgICAgICAkKCcuYWRkLXNob3AnKS5jbGljayhhZGRTaG9wKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRmFzdCBzYXZlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJCgnLmZhc3Qtc2F2ZScpLmNsaWNrKGZhc3RTYXZlKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFrZSB0ciB0byBzb3J0YWJsZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFrZSB0ciB0byBzb3J0YWJsZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICQoJy5zb3J0YWJsZS1kZXBhcnRtZW50JykuZWFjaChzb3J0YWJsZURlcGFydG1lbnRJbml0KTtcclxuICAgIH0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcclxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWVhbCBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjcmVsZWFzZSA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjcmVsZWFzZV90ZW1wbGF0ZScpLmh0bWwoKTtcclxuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLnJlbGVhc2VfaWQnKS52YWwoKTtcclxuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xyXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXJlbGVhc2UlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xyXG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG5cclxuICAgICAgICB0Ym9keS5maW5kKCcuZGF0ZXRpbWVwaWNrZXInKVxyXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXHJcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIE1lYWwgY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVBhZ2UgKCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJy5yZWxlYXNlLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9ICQoJy5yZWxlYXNlLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3QsIC5jaGFuZ2VkIHRleHRhcmVhXCIpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgaWYoZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IGh0dHAocm91dGUpXHJcbiAgICAgICAgLm1ldGhvZCgnUE9TVCcpXHJcbiAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHRib2R5LmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICAkKGl0ZW0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xyXG5pbXBvcnQge3NhdmVQYWdlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcclxuICAgICAqIENoYW5nZSBjb3VudGVyXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4vKipcclxuICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxyXG4gKi9cclxuJCgnLnNhdmUtcGFnZScpLmNsaWNrKHNhdmVQYWdlKTtcclxuIiwiJChkb2N1bWVudClcclxuXHJcbiAgICAub24oJ2NsaWNrJywgJ3RyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuZmluZCgndGQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS5hdHRyKCdzdHlsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3N0eWxlJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kJywgJyNlN2U3ZTcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjc291bmQgPiB0Ym9keScpO1xyXG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI3NvdW5kX3RlbXBsYXRlJykuaHRtbCgpO1xyXG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuc291bmRfaWQnKS52YWwoKTtcclxuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xyXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXNvdW5kX2lkJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcclxuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTb3VuZFN0YXRlICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSAkKCcuc291bmQtc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgIGlmKGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxyXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxyXG4gICAgICAgICAgICAuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge3NhdmVTb3VuZFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU291bmRTdGF0ZVwiO1xyXG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgc291bmQgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmUgdGhlIHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVNvdW5kU3RhdGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KTtcclxuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgVEFNQVRPT0xfU0hPV19GT1JNID0gJ1RBTUFUT09MX1NIT1dfRk9STSc7XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7VEFNQVRPT0xfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoVEFNQVRPT0xfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKFRBTUFUT09MX1NIT1dfRk9STSwgc2VsZik7XHJcblxyXG4gICAgICAgICQoJy5uZWlnaGJvci1hY3Rpdml0eS1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xyXG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcclxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICBtaW5WaWV3OiAnMidcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XHJcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XHJcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgYXdhcmREZWxldGUpO1xyXG5cclxuLyoqXHJcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXHJcbiAqIEFmdGVyIGNsaWNrIGF0IGNyZWF0ZSBvciBlZGl0IGJ1dHRvblxyXG4gKi9cclxuJCgnLnNob3ctZm9ybScpXHJcbiAgICAuY2xpY2soc2hvd0Zvcm0pO1xyXG4iLCJleHBvcnQgY29uc3QgU0VBUkNIX1VTRVJfQVNTRVRTICAgICAgPSAnU0VBUkNIX1VTRVJfQVNTRVRTJztcclxuZXhwb3J0IGNvbnN0IFNVQk1JVF9VU0VSX1BBUlRfRk9STSAgID0gJ1NVQk1JVF9VU0VSX1BBUlRfRk9STSc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfTkVJR0hCT1IgICAgICAgICA9ICdERUxFVEVfTkVJR0hCT1InO1xyXG5leHBvcnQgY29uc3QgQUREX05FSUdIQk9SICAgICAgICAgICAgPSAnQUREX05FSUdIQk9SJztcclxuZXhwb3J0IGNvbnN0IEdFVF9ORUlHSEJPUlMgICAgICAgICAgID0gJ0dFVF9ORUlHSEJPUlMnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX05FSUdIQk9SUyAgICAgICAgPSAnVVBEQVRFX05FSUdIQk9SUyc7XHJcblxyXG5leHBvcnQgY29uc3QgTkVJR0hCT1JfR1JJRF9JRCA9ICduZWlnaGJvci1ncmlkJzsiLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XHJcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xyXG5cclxuLyoqXHJcbiAqIEFkZCBjb21tZW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKCQoJyNjb2xsZWN0aWJsZS1mb3JtJykuZmluZCgnaW5wdXQnKSk7XHJcblxyXG4gICAgbmV3IGh0dHAoJCgnI2FkZC1jb2xsZWN0aWJsZScpLmF0dHIoJ2hyZWYnKSlcclxuICAgICAgICAubWV0aG9kKCdQT1NUJylcclxuICAgICAgICAuZGF0YSh7ZGF0YX0pXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwLnR5cGUgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybSA9ICQocmVzcC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICQoJyMnICsgcmVzcC5jb250YWluZXIpLnJlcGxhY2VXaXRoKGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5U3VjY2VzcygnVXNlciBjb2xsZWN0aWJsZSB1cGRhdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBBZGQgY29tbWVudFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBuZXcgaHR0cCgkKHRoaXMpLmNsb3Nlc3QoJ2EnKS5hdHRyKCdocmVmJykpXHJcbiAgICAgICAgLm1ldGhvZCgnUE9TVCcpXHJcbiAgICAgICAgLmRhdGEoe2Rlc2NyaXB0aW9uOiAkKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsKCl9KVxyXG4gICAgICAgIC5zdWNjZXNzKHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoci5zdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICQoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3VzZXItY29tbWVudHMnKS5wcmVwZW5kKCc8dHI+PHRkPicgKyByLm1vZGVsLmRlc2NyaXB0aW9uICsgJzwvdGQ+PHRkPicgKyByLmNyZWF0ZWRfYnkgKyAnPC90ZD48dGQ+JyArIHIuY3JlYXRlZF9hdCArICcgUFNUPC90ZD48dGQ+PGEgaHJlZj1cImh0dHA6Ly9jbXMtZGV2LmxvY2FsL3JlbW92ZS1jb21tZW50LycgKyByLm1vZGVsLmlkICsgJ1wiIGNsYXNzPVwiYWpheC1jb25maXJtLWFjdGlvblwiIGRhdGEtbWV0aG9kPVwiREVMRVRFXCIgZGF0YS1oZWFkZXI9XCJEZWxldGUgY29tbWVudD9cIiBkYXRhLWJ0bi1uYW1lPVwiRGVsZXRlXCIgZGF0YS1idG4tY2xhc3M9XCJidG4tZGFuZ2VyIGJ0bi1zbVwiIGRhdGEtZGlzbWlzcz1cIjFcIiBkYXRhLXJlbG9hZD1cIjFcIj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPkRlbGV0ZTwvYnV0dG9uPjwvYT48L3RkPjwvdHI+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBTeW5jaHJvbml6ZSBtb3ZlLXBsYWNlbWVudC1zZWxlY3Qgc2VsZWN0c1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNlbGVjdGVkU3RvcmFnZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0nKS5maW5kKCcubW92ZS1wbGFjZW1lbnQtc2VsZWN0JykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFN0b3JhZ2UgIT0gJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnZhbChzZWxlY3RlZFN0b3JhZ2UpLmNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IHtVUERBVEVfTkVJR0hCT1JTLCBORUlHSEJPUl9HUklEX0lEfSBmcm9tIFwibW9kdWxlcy91c2Vycy9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBTZXQgcGFnZSBsaW1pdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpICsgJyZwYWdlX2xpbWl0PScgKyAkKHRoaXMpLnZhbCgpO1xyXG4gICAgbmV3IGh0dHAocm91dGUpXHJcbiAgICAgICAgLm1ldGhvZCgnR0VUJylcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICQoYCMke05FSUdIQk9SX0dSSURfSUR9YCkucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxufVxyXG4iLCIvKipcclxuICogQ2hhbmdlIHBsYWNlbWVudCBzZWxlY3QgaW4gQWRkIEFzc2V0cyBibG9ja1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgcGxhY2VtZW50TmFtZSA9ICQoJyNhZGQtYXNzZXRzLWJsb2NrLXBsYWNlbWVudC1uYW1lJyk7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA+IDApIHtcclxuICAgICAgICBwbGFjZW1lbnROYW1lLmhpZGUoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwbGFjZW1lbnROYW1lLnNob3coKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG5laWdoYm9yc0NvdW50ID0gJCgnI25laWdoYm9ycy1jb3VudCcpO1xyXG4gICAgaWYoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgIG5laWdoYm9yc0NvdW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5laWdoYm9yc0NvdW50LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhpZGUgYXNzZXRzIGluIHBsYWNlbWVudFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICBjdXJyZW50RWxlbWVudC50b2dnbGVDbGFzcygnaGlkZScpO1xyXG4gICAgY3VycmVudEVsZW1lbnQuc2libGluZ3MoJy5sb2FkLWFzc2V0cycpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAkKCcjYXNzZXQtY29udGFpbmVyLScgKyBjdXJyZW50RWxlbWVudC5kYXRhKCdwbGFjZW1lbnQnKSkuaHRtbCgnJyk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBQTEFDRU1FTlRfQVNTRVRTX1JPVVRFIC0gaXQgaXMgYSBnbG9iYWwgb2JqZWN0XHJcbiAqIEluaXRlZCBpbiB1c2VyL2VkaXQuYmxhZGUucGhwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcclxuICAgIGxldCBwbGFjZW1lbnQgPSBjdXJyZW50RWxlbWVudC5kYXRhKCdwbGFjZW1lbnQnKTtcclxuXHJcbiAgICBjdXJyZW50RWxlbWVudC50b2dnbGVDbGFzcygnaGlkZScpO1xyXG4gICAgY3VycmVudEVsZW1lbnQuc2libGluZ3MoJy5oaWRlLWFzc2V0cycpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XHJcblxyXG4gICAgbG9hZFBhcnQoUExBQ0VNRU5UX0FTU0VUU19ST1VURSArICcmcGxhY2VtZW50PScgKyBwbGFjZW1lbnQsICQoJyNhc3NldC1jb250YWluZXItJyArIHBsYWNlbWVudCkpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIExvYWQgcGFydCBmb3IgZWRpdCB1c2VyIHBhZ2VcclxuICovXHJcbmZ1bmN0aW9uIGxvYWRQYXJ0KGFjdGlvbiwgZWxlbWVudCkge1xyXG4gICAgbmV3IGh0dHAoYWN0aW9uKVxyXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9ICQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpdGVtcy5maW5kKCcubGlzdC10aHVtYm5haWwnKS5wb3BvdmVyKHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxyXG4gICAgICAgICAgICAgICAgaHRtbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXHJcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cIicgKyAkKHRoaXMpLmRhdGEoJ2Z1bGwnKSArICdcIj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChpdGVtcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG59IiwiLyoqXHJcbiAqIFNlbGVjdCByb3dzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjb3VudFNlbGVjdG9yID0gJCh0aGlzKS5wYXJlbnRzKCd0ZCwgdGgnKS5maW5kKCcuY291bnQtZm9yLXNlbGVjdCcpO1xyXG4gICAgY29uc3Qgcm93c0ZvclNlbGVjdCA9ICQodGhpcykucGFyZW50cygndGFibGUnKS5maW5kKCcuZm9yLXNlbGVjdCcpO1xyXG5cclxuICAgIGxldCBjb3VudEZvclNlbGVjdCA9IGNvdW50U2VsZWN0b3IudmFsKCkgfHwgMDtcclxuICAgIGlmIChjb3VudEZvclNlbGVjdCA9PT0gMCkge1xyXG4gICAgICAgIGNvdW50Rm9yU2VsZWN0ID0gcm93c0ZvclNlbGVjdC5sZW5ndGg7XHJcbiAgICAgICAgY291bnRTZWxlY3Rvci52YWwoY291bnRGb3JTZWxlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgcm93c0ZvclNlbGVjdC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmIChjb3VudEZvclNlbGVjdCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb3VudEZvclNlbGVjdC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm93c0ZvclNlbGVjdC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCB7VVBEQVRFX05FSUdIQk9SUywgTkVJR0hCT1JfR1JJRF9JRH0gZnJvbSBcIm1vZHVsZXMvdXNlcnMvY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIG5laWdoYm9yIGdyaWRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShVUERBVEVfTkVJR0hCT1JTLCAocmVzcG9uc2UsIHNlbGYpID0+IHtcclxuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShVUERBVEVfTkVJR0hCT1JTLCBzZWxmKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIG5ldyBodHRwKCQodGhpcykuY2xvc2VzdCgnZm9ybScpLmF0dHIoJ2FjdGlvbicpKVxyXG4gICAgICAgICAgICAgICAgLm1ldGhvZCgnR0VUJylcclxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkKGAjJHtORUlHSEJPUl9HUklEX0lEfWApLnJlcGxhY2VXaXRoKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7QUREX05FSUdIQk9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogU2V0IG5laWdoYm9yIGFzIGFjdGl2ZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFERF9ORUlHSEJPUiwgcmVzcCA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3AudHlwZSA9PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgJCgnI2RlbGV0ZS1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJyNhZGQtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAkKCcjbmVpZ2hib3Itc3RhdHVzLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmh0bWwocmVzcC5kYXRhLnN0YXR1c190ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge0RFTEVURV9ORUlHSEJPUn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFNldCBuZWlnaGJvciBhcyBkZWxldGVkXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoREVMRVRFX05FSUdIQk9SLCByZXNwID0+IHtcclxuICAgICAgICBpZiAocmVzcC50eXBlID09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAkKCcjZGVsZXRlLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgJCgnI2FkZC1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJyNuZWlnaGJvci1zdGF0dXMtJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuaHRtbChyZXNwLmRhdGEuc3RhdHVzX3RleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7R0VUX05FSUdIQk9SUywgTkVJR0hCT1JfR1JJRF9JRH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBuZWlnaGJvciBncmlkIGluIHNlYXJjaGluZ1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEdFVF9ORUlHSEJPUlMsIHJlc3AgPT4ge1xyXG4gICAgICAgICQoYCMke05FSUdIQk9SX0dSSURfSUR9YCkucmVwbGFjZVdpdGgocmVzcCk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge1NFQVJDSF9VU0VSX0FTU0VUU30gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFNlYXJjaCB1c2VyIGFzc2V0c1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFNFQVJDSF9VU0VSX0FTU0VUUywgZGF0YSA9PiB7XHJcbiAgICAgICAgJCgnI3NlYXJjaC1hc3NldHMtY29udGFpbmVyJykucmVwbGFjZVdpdGgoZGF0YSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xyXG5pbXBvcnQge1NVQk1JVF9VU0VSX1BBUlRfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFN1Ym1pdCB1c2VyIHBhcnQgZm9ybVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFNVQk1JVF9VU0VSX1BBUlRfRk9STSwgcmVzcCA9PiB7XHJcbiAgICAgICAgbGV0IGZvcm0gPSAkKHJlc3AuZGF0YSk7XHJcblxyXG4gICAgICAgICQoJyMnICsgcmVzcC5jb250YWluZXIpLnJlcGxhY2VXaXRoKGZvcm0pO1xyXG4gICAgICAgIGZvcm0uZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XHJcbmAgICAgICAgIG5vdGlmeVN1Y2Nlc3MoJ1VzZXIgZGF0YSB1cGRhdGVkJyk7XHJcbmAgICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaFVzZXJBc3NldHMgICAgICBmcm9tIFwiLi9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0c1wiO1xyXG5pbXBvcnQgc3VibWl0VXNlclBhcnRGb3JtICAgIGZyb20gXCIuL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm1cIjtcclxuaW1wb3J0IGRlbGV0ZU5laWdoYm9yICAgICAgICBmcm9tIFwiLi9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3JcIjtcclxuaW1wb3J0IHNlYXJjaE5laWdoYm9yICAgICAgICBmcm9tIFwiLi9saXN0ZW5lcnMvc2VhcmNoTmVpZ2hib3JcIjtcclxuaW1wb3J0IGFkZE5laWdoYm9yICAgICAgICAgICBmcm9tIFwiLi9saXN0ZW5lcnMvYWRkTmVpZ2hib3JcIjtcclxuaW1wb3J0IGxvYWRQbGFjZW1lbnRBc3NldHMgICBmcm9tIFwiLi9oYW5kbGVycy9sb2FkUGxhY2VtZW50QXNzZXRzXCI7XHJcbmltcG9ydCBoaWRlUGxhY2VtZW50QXNzZXRzICAgZnJvbSBcIi4vaGFuZGxlcnMvaGlkZVBsYWNlbWVudEFzc2V0c1wiO1xyXG5pbXBvcnQgY2hhbmdlUGxhY2VtZW50ICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVBsYWNlbWVudFwiO1xyXG5pbXBvcnQgY2hhbmdlUmFuZG9tTmVpZ2hib3JzIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVJhbmRvbU5laWdoYm9yc1wiO1xyXG5pbXBvcnQgY2hhbmdlTW92ZVBsYWNlbWVudCAgIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZU1vdmVQbGFjZW1lbnRcIjtcclxuaW1wb3J0IHNlbGVjdFJvd3MgICAgICAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9zZWxlY3RSb3dzXCI7XHJcbmltcG9ydCB1cGRhdGVOZWlnaGJvcnMgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvdXBkYXRlTmVpZ2hib3JzXCI7XHJcbmltcG9ydCBjaGFuZ2VQYWdlTGltaXQgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUGFnZUxpbWl0XCI7XHJcbmltcG9ydCBhZGRDb21tZW50ICAgICAgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvYWRkQ29tbWVudFwiO1xyXG5pbXBvcnQgYWRkQ29sbGVjdGlibGUgICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL2FkZENvbGxlY3RpYmxlXCI7XHJcblxyXG5pbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4vKipcclxuICogU2VhcmNoIHVzZXIgYXNzZXRzIGxpc3RlbmVyXHJcbiAqL1xyXG5zZWFyY2hVc2VyQXNzZXRzKCk7XHJcblxyXG4vKipcclxuICogU3VibWl0IHVzZXIgcGFydCBmb3JtIGxpc3RlbmVyXHJcbiAqL1xyXG5zdWJtaXRVc2VyUGFydEZvcm0oKTtcclxuXHJcbi8qKlxyXG4gKiBEZWxldGUgTmVpZ2hib3JcclxuICovXHJcbmRlbGV0ZU5laWdoYm9yKCk7XHJcblxyXG4vKipcclxuICogQWRkIE5laWdoYm9yXHJcbiAqL1xyXG5hZGROZWlnaGJvcigpO1xyXG5cclxuLyoqXHJcbiAqIFNlYXJjaCBOZWlnaGJvcnNcclxuICovXHJcbnNlYXJjaE5laWdoYm9yKCk7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBhc3NldHMgaW4gcGxhY2VtZW50XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmxvYWQtYXNzZXRzJywgbG9hZFBsYWNlbWVudEFzc2V0cylcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZSBwbGFjZW1lbnQgaW4gQWRkIEFzc2V0cyBibG9ja1xyXG4gICAgICovXHJcbiAgICAub24oJ2NoYW5nZScsICcjcGxhY2VtZW50LWZvci1hc3NldCcsIGNoYW5nZVBsYWNlbWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZSBtb2RlIGZvciBhZGQgbmVpZ2hib3JzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJyNpcy1yYW5kb20tbmVpZ2hib3JzJywgY2hhbmdlUmFuZG9tTmVpZ2hib3JzKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZSBhc3NldHMgaW4gcGxhY2VtZW50XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmhpZGUtYXNzZXRzJywgaGlkZVBsYWNlbWVudEFzc2V0cylcclxuXHJcbiAgICAvKipcclxuICAgICAqIEF1dG8gc2VsZWN0IHJvd3NcclxuICAgICAqL1xyXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnNlbGVjdC1yb3dzJywgc2VsZWN0Um93cylcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN5bmNocm9uaXplIG1vdmUtcGxhY2VtZW50LXNlbGVjdCBzZWxlY3RzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJy5tb3ZlLXBsYWNlbWVudC1zZWxlY3QnLCBjaGFuZ2VNb3ZlUGxhY2VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIG5laWdoYm9yIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLW5laWdoYm9yLXJlcXVlc3QsICNhZGQtbmVpZ2hib3JzJywgdXBkYXRlTmVpZ2hib3JzKVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgcGFnZSBsaW1pdFxyXG4gICAgICovXHJcbiAgICAgLm9uKCdjaGFuZ2UnLCAnLm5laWdoYm9yLXBhZ2UtbGltaXQnLCBjaGFuZ2VQYWdlTGltaXQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgY29tbWVudFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJyNhZGQtY29tbWVudCcsIGFkZENvbW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgY29sbGVjdGlibGVcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcjYWRkLWNvbGxlY3RpYmxlJywgYWRkQ29sbGVjdGlibGUpXHJcbjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==