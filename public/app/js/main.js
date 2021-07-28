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
          new ModalBuilder().header('Предпросмотр отчета (активируйте версию для ПК в настройках мобильного браузера для корректного формирования отчета)').body(r).modal();
        }
      },
      complete: function complete(r) {
        $('.reports').css('pointer-events', 'auto');
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
      var copy_ele = $('#report-table').get(0).cloneNode(true);
      canvas_handler.append(copy_ele);
      canvas_handler.css('height', copy_ele.scrollHeight + 20);
      canvas_handler.css('min-width', '700px');
      html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(copy_ele, {
        scrollX: 0,
        scrollY: 0,
        useCORS: true
      }).then(function (canvas) {
        var imageData = canvas.toDataURL("image/png");
        var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $('#canvas-data').val(newData); // element.append(canvas_handler.html())
        // element.empty();

        element.get(0).prepend(canvas);
        setTimeout(function () {
          submitBtn.button('reset');
          $('#send-report').attr('disabled', false);
          $('#load').click();
        }, 500);
      });
    }, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L3Byb2plY3RzL3N0b2Nrd29ya2VyL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbENvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29ic2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2V4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvYWRkRW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvYWpheFBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvY29uZmlybU1vZGFsLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2Zhc3RTYXZlLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9maWx0ZXJEYXRlUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvbW9kYWxEYXRhLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3BhZ2VMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9yZW1vdmVFbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9zdWJtaXRGb3JtLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0RmlsZVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldFN1YkZvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmRDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2F3YXJkRGVsZXRlLmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9kcm9wWm9uZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL3VwZGF0ZVNhdmVBbGxCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcyBzeW5jIFxcLlxcL1tcXHctX10rXFwvbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMgc3luYyBtb2R1bGVzKC4qKW1vZHVsZVxcLmpzJCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWRkLW1lL2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FkZC1tZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy1sb2cvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9jb3B5QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2Rvd25sb2FkQXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2dldExhc3RDb2xsZWN0aW9uTnVtYmVyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL21hcmtDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2F3YXJkL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9oYW5kbGVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvY29weUFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9kb3dubG9hZEFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2hpZGVBcmNoaXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvaGlkZVRhc2tzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2VsZWN0Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2hvd0FyY2hpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9zaG93VGFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Nyb3AvaGFuZGxlcnMvYWRkUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY3JvcC9oYW5kbGVycy9kZWxldGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jcm9wL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3Qvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2RlcGxveVN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3lQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2R5ZVNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvYXNzZXRDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvc29ydGFibGVJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvbGlzdGVuZXJzL2FkZFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL2hhbmRsZXJzL3Nob3dBc3NldC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SUQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9tZWFsRGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9zYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L2hhbmRsZXJzL3ByaWNlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2UvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2Uvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2Ryb3B6b25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL21hcmtDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvaGFuZGxlcnMvc2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9zYXZlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL2FkZFNob3AuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvcmFkaW9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZURlcGFydG1lbnRJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2FkZENvbGxlY3RpYmxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvYWRkQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZU1vdmVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VQYWdlTGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VSYW5kb21OZWlnaGJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvbG9hZFBsYWNlbWVudEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL3NlbGVjdFJvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy91cGRhdGVOZWlnaGJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvYWRkTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJTSVpFUyIsInNtIiwibWQiLCJsZyIsIkxPQURJTkdfVEVYVCIsImRyb3B6b25lQ29udGFpbmVyIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9kcm9wem9uZUNvbnRhaW5lciIsIl9jYW5jZWxCdXR0b24iLCIkIiwiZmluZCIsInVybCIsIl91cGxvYWRVcmwiLCJuYW1lIiwiX3ByZXZpZXciLCJjYWxsYmFjayIsIl9lcnJvckNhbGxiYWNrIiwiX2NhbmNlbENhbGxiYWNrIiwiX3N1Y2Nlc3NDYWxsYmFjayIsIl9kcm9wem9uZUJ1aWxkZXIiLCJkcm9wem9uZUZhaWwiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidXBsb2FkTXVsdGlwbGUiLCJhY2NlcHRlZEZpbGVzIiwiaGVhZGVycyIsIkNTUkZfVE9LRU4iLCJpbml0IiwiZW1pdCIsIm9uIiwidGV4dCIsImZpbGUiLCJyZXNwb25zZSIsImNsaWNrIiwiRHJvcHpvbmUiLCJfdXJsIiwiX21ldGhvZCIsIl9kYXRhIiwiX2Vycm9yIiwiZXJyb3JIYW5kbGVyIiwiX3N1Y2Nlc3MiLCJzdWNjZXNzSGFuZGxlciIsIl9jb21wbGV0ZSIsIm1ldGhvZCIsImRhdGEiLCJmbiIsImFqYXgiLCJ0eXBlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJub3RpZnlFcnJvciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJub3RpZnlTdWNjZXNzIiwibW9kYWxzQ29udGFpbmVyIiwiTU9EQUxfU0laRVMiLCJtb2RhbEluZGV4IiwibW9kYWxDb3VudGVyIiwiX2lkIiwic2l6ZSIsIl9zaXplIiwiaGVhZGVyIiwiX2hlYWRlciIsImJvZHkiLCJfYm9keSIsImZvb3RlciIsIl9mb290ZXIiLCJkYXRhc2V0IiwiX2RhdGFzZXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJfYmVmb3JlQnVpbGRDYWxsYmFjayIsIl9hZnRlckJ1aWxkQ2FsbGJhY2siLCJfb25DbG9zZUNhbGxiYWNrIiwiY29udGVudCIsInB1c2giLCJodG1sIiwiX2dldElEIiwiam9pbiIsIl9nZXRTaXplIiwiX2JlZm9yZUJ1aWxkIiwiX2dldEhlYWRlciIsIl9nZXRCb2R5IiwiX2dldEZvb3RlciIsInNlbGVjdDIiLCJkYXRldGltZXBpY2tlciIsImZvcm1hdCIsImF1dG9jbG9zZSIsIm1pblZpZXciLCJzdGlja3lUYWJsZUhlYWRlcnMiLCJfYWZ0ZXJCdWlsZCIsIm9mZiIsIl9vbkNsb3NlIiwibW9kYWwiLCJnZXRNb2RhbENvdW50ZXIiLCJtb2RhbENvbmZpcm0iLCJNb2RhbEJ1aWxkZXIiLCJub3RpZnkiLCJ6X2luZGV4IiwiRXZlbnRPYnNlcnZlciIsInN1YnNjcmliZXJzIiwiZXZlbnQiLCJoYW5kbGVyIiwiX2xvZyIsImZvckVhY2giLCJzdGF0ZSIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJ0b1VwcGVyQ2FzZSIsIm9ic2VydmVyIiwiU2F2ZWRJdGVtTm90Rm91bmQiLCJFcnJvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRCdXR0b24iLCJ0YXJnZXQiLCJ0ZW1wbGF0ZSIsImlkUGxhY2Vob2xkZXIiLCJyb3dJZCIsImVtYmVkRm9ybSIsImVtYmVkQmxvY2tJZCIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiUmVnRXhwIiwibGVuZ3RoIiwiZGlzcGF0Y2giLCJ0cmlnZ2VyIiwiY29udGFpbmVyIiwicGFyZW50cyIsImh0dHAiLCJyZXBsYWNlV2l0aCIsInNlbmQiLCJkYXRhU2V0IiwicGFyZW50QnV0dG9uIiwiYnRuQ2xhc3MiLCJidG5OYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImhhc093blByb3BlcnR5IiwiY2xvc2VzdCIsInNlcmlhbGl6ZUFycmF5IiwicGFyc2VJbnQiLCJyZWxvYWQiLCJkaXNtaXNzIiwiY3VycmVudEJ0biIsInNhdmVkSXRlbSIsImF0dHIiLCJnZXRGb3JtRGF0YSIsIkNPTlRBSU5FUl9TRUxFQ1RPUiIsIlBBR0VfU0FWRUQiLCJVUERBVEVfU0FWRV9BTExfQlVUVE9OIiwiZm9ybUl0ZW1zIiwibWFya0NoYW5nZWQiLCJkYXRlRm9ybWF0IiwiZGF0ZVJhbmdlSW5wdXRzIiwic2VsZWN0ZWRPcHRpb24iLCJkYXRlRnJvbSIsImRhdGVUbyIsInNlbGVjdGVkVmFsdWUiLCJ2YWwiLCJjc3MiLCJ2aXNpYmlsaXR5IiwiaGVpZ2h0IiwiZGF0ZUZyb21WYWx1ZSIsImRhdGVUb1ZhbHVlIiwibW9tZW50Iiwic3VidHJhY3QiLCJkYXkiLCJzdGFydE9mIiwiZW5kT2YiLCJkb2N1bWVudCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImVhY2giLCJyZW1vdmVBdHRyIiwicmVhZHkiLCJ0YWJsZXNvcnRlciIsIm1vZGFsRGF0YSIsImNvbmZpcm1Nb2RhbCIsInN1Ym1pdEZvcm0iLCJhamF4UGFnaW5hdGlvbiIsImFkZEVtYmVkIiwicmVtb3ZlRW1iZWQiLCJmYXN0U2F2ZSIsInBhZ2VMaW1pdCIsImRhdGVSYW5nZSIsImZpbHRlckRhdGVSYW5nZSIsImNoYW5nZSIsImluaXRTdGlja3kiLCJmYXN0U2F2ZVBhZ2UiLCJhZnRlckJ1aWxkIiwib25DbG9zZSIsImNsb3NlRXZlbnQiLCJVUkwiLCJ3aW5kb3ciLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJlbnQiLCJpZCIsImNhblJlbG9hZCIsInIiLCJyZXBvcnRfaW1hZ2UiLCJidXR0b24iLCJkYXRhUmVsb2FkIiwicm9vdEZvbGRlciIsImZpbGVOYW1lIiwiZ2V0U3ViRm9sZGVyIiwiZm9ybSIsImZvcm1EYXRhIiwiY3VycmVudEl0ZW0iLCJwcm9wIiwiZmlsZU5hbWVIYXNoIiwibWQ1Iiwic3Vic3RyaW5nIiwicGF0aFBhcnRzIiwibWF0Y2giLCJqUXVlcnkiLCJwYXRoIiwicGF0aG5hbWUiLCJzcGxpdCIsIm1vZHVsZXMiLCJyZXF1aXJlIiwibW9kdWxlIiwibW9kdWxlSXRlbXMiLCJzdWJNb2R1bGVzIiwic3Vic2NyaWJlIiwiQVdBUkRfQ1JFQVRFIiwic2VsZiIsInVuc3Vic2NyaWJlIiwiZWRpdEJ0biIsInRlbXBsYXRlSWQiLCJ0ZW1wbGF0ZVBsYWNlaG9sZGVyIiwiYXdhcmRfaWQiLCJmaWVsZE5hbWUiLCJBV0FSRF9DUkVBVEVEIiwiQVdBUkRfREVMRVRFIiwiY3JlYXRlQnRuIiwiY2hpbGRyZW4iLCJFVkVOVF9OQU1FIiwiZHJvcHpvbmVFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2aWV3VVJMIiwiZHJvcHpvbmVCdWlsZGVyIiwiRHJvcHpvbmVCdWlsZGVyIiwic2V0VXBsb2FkVXJsIiwiY2FuY2VsIiwiZmlsZV9uYW1lIiwidmFsdWUiLCJzZXRQcmV2aWV3IiwiZ2V0RmlsZVBhdGgiLCJmb2xkZXIiLCJidWlsZCIsInNhdmVBbGxCdXR0b24iLCJjb3VudGVyIiwiY291bnQiLCJzaG93IiwiaGlkZSIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicHJldiIsImZvY3VzIiwic3VibWl0IiwiY2FudmFzIiwiZnJvbSIsInRvIiwiY2FudmFzX2hhbmRsZXIiLCJlbXB0eSIsInBvc3RQcm9jZXNzIiwic3VibWl0QnRuIiwic2V0VGltZW91dCIsImVsZW1lbnQiLCJjb3B5X2VsZSIsImdldCIsImNsb25lTm9kZSIsInNjcm9sbEhlaWdodCIsImh0bWwyY2FudmFzIiwic2Nyb2xsWCIsInNjcm9sbFkiLCJ1c2VDT1JTIiwidGhlbiIsImltYWdlRGF0YSIsInRvRGF0YVVSTCIsIm5ld0RhdGEiLCJwcmVwZW5kIiwiQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQiLCJERUxUQV9USU1FX0FUVFJJQlVURSIsInRvZ2dsZUNsYXNzIiwiY3VycmVudEVsZW1lbnQiLCJSZXF1ZXN0QnVpbGRlciIsImluZGV4IiwiXyIsIml0ZW0iLCJ1cGRhdGVJbmRleGVzIiwiY3VycmVudExpIiwiZGVsdGFUaW1lSGlkZGVuIiwiZGVsdGFUaW1lRGlzcGxheSIsInRpbWVUeXBlIiwiY29sbGFwc2VTdGF0ZSIsImNvbGxhcHNlU3RhdGVzIiwicmVtb3ZlQWN0aW9uVHlwZVN0YXRlIiwic2F2ZVN0YXRlIiwicmVzcCIsIkFOTk9VTkNFTUVOVFNfU0hPV19GT1JNIiwiYXdhcmRDcmVhdGUiLCJiaW5kIiwiX3RoaXMiLCJhd2FyZERlbGV0ZSIsIkNMT1NFX0FXQVJEX01PREFMIiwic2hvd0Zvcm0iLCJuZXh0Iiwic2V0U3VidHlwZXMiLCJzdWJ0eXBlIiwiYXNzZXRGb3JtU3VidHlwZSIsImFzc2V0Rm9ybUFjdGlvblR5cGUiLCJhc3NldEZvcm1Db2xsZWN0aW9uIiwicHJpY2VzIiwiU1VCX1RZUEVTIiwiY29weUFzc2V0cyIsImFzc2V0SWRzRmllbGQiLCJ3aXRoTmFtZSIsImFzc2V0SWRzIiwibiIsImFzc2V0SWQiLCJhc3NldE5hbWUiLCJkb3dubG9hZEFzc2V0cyIsImNvbGxlY3Rpb25faWQiLCJwYXJlbnRDb250YWluZXIiLCJjaGFuZ2VUeXBlIiwiZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIiLCJjdXJyZW50VGQiLCJ1cGRhdGVTYXZlQWxsQnV0dG9uIiwiU0hPV19SRVBPUlRfUEFUSCIsIkJBTk5FUl9TSE9XX0ZPUk0iLCJUWVBFX1NFTEVDVF9JRCIsInNlbGVjdGVkSW5kZXgiLCJvcHRpb25zIiwic2VsZWN0ZWRFbGVtZW50IiwiZHJvcFpvbmVJbml0IiwiY29weUFkcCIsImFkcElkc0ZpZWxkIiwiYWRwSWRzIiwiYWRwSWQiLCJkb3dubG9hZEFkcCIsImhpZGVBcmNoaXZlIiwiaGlkZVRhc2tzIiwic2VsZWN0Um93IiwiY2hlY2tib3giLCJpcyIsInNob3dBcmNoaXZlIiwiYWN0aW9uIiwic2hvd1Rhc2tzIiwiQ0FTSCIsIkNPSU4iLCJBU1NFVCIsInNvdXJjZVZhbCIsIm1hdGNoZXIiLCJwYXJhbXMiLCJpbkFycmF5Iiwid3JhcHBlciIsImdldFNlbGVjdGlvbiIsIkNPTExFQ1RJT05fU0hPV19GT1JNIiwiYXNzZXRQcmV2aWV3VGVtcGxhdGUiLCJhc3NldHMiLCJjdXJyZW50QXNzZXQiLCJwcmV2aWV3X3VybCIsIlNvcnRhYmxlIiwiZ3JvdXAiLCJyZW1vdmVDbG9uZU9uSGlkZSIsIm9uRW5kIiwicG9zaXRpb24iLCJtYXJrSW5wdXRBc0NoYW5nZWQiLCJzb3J0YWJsZUluaXQiLCJoaWRlQWRkaXRpb25hbFJvd3MiLCJhZGRSb3ciLCJhZGRfY291bnRlciIsInRib2R5IiwidHJMYXN0IiwibGFzdElEIiwibGFzdCIsImluY3JlbWVudElkIiwiaSIsImRlbGV0ZVJvdyIsInJvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYWRkTmV3Um93IiwibGFzdElEUyIsImZpcnN0IiwiTWF0aCIsIm1heCIsImFwcGx5Iiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsImRlcGxveVN0YXR1cyIsIkRFUExPWV9TVEFUVVNfUk9VVEUiLCJpc0FjdGl2ZSIsImNoYW5nZVRhYiIsImRpcmVjdGlvbiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJzaG93RGVwZW5kZW5jeSIsImN1cnJlbnRDb25maWciLCJhZGRNb2RlIiwib25lTGV2ZWxTaG93IiwiY29uZmlnTmFtZSIsImxldmVsIiwiREVQTE9ZX0RFUEVORFMiLCJjb25maWdCbG9jayIsImRlcGVuZENvbmZpZ05hbWUiLCJzaG93RGVwZW5kZW5jeVBvcHVwIiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudENvbmZpZ0lkIiwiaWRzIiwicm9vdExldmVsU2hvdyIsImlkUmVzcG9uc2UiLCJ0ZXh0Q2xhc3MiLCJpc1JlY3Vyc2lvbiIsImdldERlcGxveU1vZGVsSWRzIiwiREVQTE9ZX01PREVMX0lEU19ST1VURSIsIkFDVElWRV9ESVJFQ1RJT04iLCJjaGVja2VkIiwic2F2ZURwYVN0YXRlIiwibGFzdFJvdyIsImNvbG9ycGlja2VyIiwiY2hhbmdlUm93SW5kZXgiLCJyb3dJbmRleCIsIm9sZE5hbWUiLCJuZXdOYW1lIiwiaW5kZXhPZiIsIkRZRV9DT05UQUlORVJfU0VMRUNUT1IiLCJtYXJrQ2hhbmdlZFRyIiwiZHllU2F2ZVBhZ2UiLCJHSUZUX1dSQVBfUk9XX0FEREVEIiwiY3VycmVudElucHV0IiwiYXNzZXRJRCIsImN1cnJlbnRBc3NldER1cGxpY2F0ZSIsImVyciIsInBvc2l0aW9uVXBkYXRlIiwiYnV0dG9uVXJsIiwicGFnZSIsInBhZ2VfbGltaXQiLCJhc3NldENoYW5nZWQiLCJyZW1vdmVSb3ciLCJzaG93QXNzZXQiLCJTV09XX0FTU0VUX1JPVVRFIiwic2F2ZUxvY2FsaXphdGlvblN0YXRlIiwiY3VycmVudEtleSIsImN1cnJlbnRLZXlEdXBsaWNhdGUiLCJzYXZlTWFnaWNTdGF0ZSIsIm1ha2V1cF9raXRfaWQiLCJnZXRMYXN0TWFrZXVwS2l0SUQiLCJNQUtFVVBfS0lUX1NIT1dfRk9STSIsImluZ3JlZGllbnREZWxldGUiLCJtZWFsRGVsZXRlIiwic2F2ZU1lYWxTdGF0ZSIsIk5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSIsIlRSQVNIIiwiVFJBU0hfRklFTERTX0lEIiwiU0VMRUNUX0lEIiwidHJhc2hGaWVsZHMiLCJQUk9EVUNUX1NIT1dfRk9STSIsIkNsZWF2ZSIsIm51bWVyYWwiLCJwcmVmaXgiLCJyYXdWYWx1ZVRyaW1QcmVmaXgiLCJvblZhbHVlQ2hhbmdlZCIsInJvdW5kIiwicmF3VmFsdWUiLCJwcm9kdWN0UHJpY2UiLCJwcmljZUluaXQiLCJtYXhJZCIsIm5ld0xlbmd0aCIsInRySWQiLCJuZXdSb3ciLCJuZXdSb3dIdG1sIiwiZGVmYXVsdFZhbHVlIiwib3V0ZXJIVE1MIiwiYWZ0ZXIiLCJwcmV2aWV3SGlkZGVuSW5wdXQiLCJzYXZlUGFnZSIsInNhdmVSb3ciLCJyb3dUb1NhdmUiLCJjb25maXJtIiwiZGF0YVR5cGUiLCJqcVhIUiIsImV4Y2VwdGlvbiIsImVycm9yS2V5IiwibWVzc2FnZUtleSIsImF1dG9EaXNjb3ZlciIsImRyb3B6b25lSW5pdCIsInNhdmVCdXR0b24iLCJXQUxLX0NBVEVHT1JZIiwiUlVOX0NBVEVHT1JZIiwic2VsZWN0VmFsIiwiZW1iZWQiLCJTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNIiwidGFibGUiLCJkZXBhcnRtZW50SWQiLCJzaG9wTmFtZVByZWZpeCIsImRlcGFydG1lbnROYW1lUHJlZml4IiwiZmFzdFNhdmVDb250YWluZXIiLCJzaG9wcyIsImRlcGFydG1lbnQiLCJkZXBpbmRleCIsImRlcGFydG1lbnRGb3JtRGF0YSIsIml0ZW1OYW1lIiwiYWxsSXRlbXMiLCJyYWRpbyIsInByZXZpZXdVcmxFbGVtZW50IiwicmFkaW9JbnB1dCIsImFkZFNob3AiLCJzb3J0YWJsZURlcGFydG1lbnRJbml0Iiwic2F2ZVNvdW5kU3RhdGUiLCJUQU1BVE9PTF9TSE9XX0ZPUk0iLCJTRUFSQ0hfVVNFUl9BU1NFVFMiLCJTVUJNSVRfVVNFUl9QQVJUX0ZPUk0iLCJERUxFVEVfTkVJR0hCT1IiLCJBRERfTkVJR0hCT1IiLCJHRVRfTkVJR0hCT1JTIiwiVVBEQVRFX05FSUdIQk9SUyIsIk5FSUdIQk9SX0dSSURfSUQiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIm1vZGVsIiwiY3JlYXRlZF9ieSIsImNyZWF0ZWRfYXQiLCJzZWxlY3RlZFN0b3JhZ2UiLCJwbGFjZW1lbnROYW1lIiwibmVpZ2hib3JzQ291bnQiLCJzaWJsaW5ncyIsInBsYWNlbWVudCIsImxvYWRQYXJ0IiwiUExBQ0VNRU5UX0FTU0VUU19ST1VURSIsIml0ZW1zIiwicG9wb3ZlciIsImNvdW50U2VsZWN0b3IiLCJyb3dzRm9yU2VsZWN0IiwiY291bnRGb3JTZWxlY3QiLCJuZWlnaGJvcl9pZCIsInN0YXR1c190ZXh0Iiwic2VhcmNoVXNlckFzc2V0cyIsInN1Ym1pdFVzZXJQYXJ0Rm9ybSIsImRlbGV0ZU5laWdoYm9yIiwiYWRkTmVpZ2hib3IiLCJzZWFyY2hOZWlnaGJvciIsImxvYWRQbGFjZW1lbnRBc3NldHMiLCJjaGFuZ2VQbGFjZW1lbnQiLCJjaGFuZ2VSYW5kb21OZWlnaGJvcnMiLCJoaWRlUGxhY2VtZW50QXNzZXRzIiwic2VsZWN0Um93cyIsImNoYW5nZU1vdmVQbGFjZW1lbnQiLCJ1cGRhdGVOZWlnaGJvcnMiLCJjaGFuZ2VQYWdlTGltaXQiLCJhZGRDb21tZW50IiwiYWRkQ29sbGVjdGlibGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LENBaURLeGhCLEVBakRMLENBaURRLE9BakRSLEVBaURpQixrQkFqRGpCLEVBaURxQ3loQixpRUFqRHJDLEU7Ozs7Ozs7Ozs7OztBQzNDQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLWluLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLXNnXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VuLXNnLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZmlsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tZGV2YVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tZGV2YS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL29jLWxuYy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGtcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGsuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1tb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLyoqXHJcbiAqIEJhc2Ugc2l6ZXNcclxuICpcclxuICogQHR5cGUge3tzbTogc3RyaW5nLCBsZzogc3RyaW5nfX1cclxuICovXHJcbmV4cG9ydCBjb25zdCBTSVpFUyA9IHtcclxuICAgIHNtOiAnc20nLFxyXG4gICAgbWQ6ICdtZCcsXHJcbiAgICBsZzogJ2xnJyxcclxufTtcclxuIiwiaW1wb3J0IERyb3B6b25lIGZyb20gJ2Ryb3B6b25lJztcclxuXHJcbi8qKlxyXG4gKiBMb2FkaW5nIHRleHRcclxuICogSXQgd2lsbCBiZSBzaG93biBhZnRlciB0aGUgc3RhcnQgb2YgaW1hZ2UgdXBsb2FkaW5nXHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xyXG5jb25zdCBMT0FESU5HX1RFWFQgPSAnTG9hZGluZy4uLic7XHJcblxyXG4vKipcclxuICogRHJvcHpvbmUgYnVpbGRlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3JcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZHJvcHpvbmVDb250YWluZXJcclxuICAgICAqIEBwYXJhbSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZHJvcHpvbmVDb250YWluZXIsIGNvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuX2Ryb3B6b25lQ29udGFpbmVyID0gZHJvcHpvbmVDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fY2FuY2VsQnV0dG9uID0gJChkcm9wem9uZUNvbnRhaW5lcikuZmluZCgnLmRyb3B6b25lLWNhbmNlbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHVybCB0byB1cGxvYWRpbmdcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKi9cclxuICAgIHNldFVwbG9hZFVybCh1cmwpIHtcclxuICAgICAgICB0aGlzLl91cGxvYWRVcmwgPSB1cmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgZGVmYXVsdCBwcmV2aWV3IGltYWdlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqL1xyXG4gICAgc2V0UHJldmlldyhuYW1lLCB1cmwpIHtcclxuICAgICAgICB0aGlzLl9wcmV2aWV3ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGVycm9yIGhhbmRsZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgZXJyb3IoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9lcnJvckNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgY2FuY2VsIGhhbmRsZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgY2FuY2VsKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fY2FuY2VsQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBzdWNjZXNzIGhhbmRsZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgc3VjY2VzcyhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX3N1Y2Nlc3NDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVpbGQgZHJvcHpvbmVcclxuICAgICAqIEByZXR1cm5zIHtEcm9wem9uZX1cclxuICAgICAqL1xyXG4gICAgYnVpbGQoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdGhpc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IF9kcm9wem9uZUJ1aWxkZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsIGFmdGVyIGZhaWxcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkcm9wem9uZUZhaWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLnJlbW92ZUNsYXNzKCdkei1zdGFydGVkJyk7XHJcbiAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kei1wcmV2aWV3JykucmVtb3ZlKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmYXVsdCBjb25maWd1cmF0aW9uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSBvYmplY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5fdXBsb2FkVXJsLFxyXG4gICAgICAgICAgICB0aHVtYm5haWxXaWR0aDogbnVsbCxcclxuICAgICAgICAgICAgdGh1bWJuYWlsSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICB1cGxvYWRNdWx0aXBsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6ICdpbWFnZS8qJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ3gtY3NyZi10b2tlbic6IENTUkZfVE9LRU5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBTZXQgY3VycmVudCBpbWFnZSBpbiB0aGUgZHJvcHpvbmUgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcgJiYgISFfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LnVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImFkZGVkZmlsZVwiLCBfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ0aHVtYm5haWxcIiwgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldywgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldy51cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQWRkZWQgZmlsZSBoYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChMT0FESU5HX1RFWFQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBFcnJvciBoYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMub24oXCJlcnJvclwiLCBmdW5jdGlvbiAoZmlsZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wem9uZUZhaWwoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9lcnJvckNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX2Vycm9yQ2FsbGJhY2soZmlsZSwgcmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBTdWNjZXNzIGhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcInN1Y2Nlc3NcIiwgZnVuY3Rpb24gKGZpbGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX3N1Y2Nlc3NDYWxsYmFjayhmaWxlLCByZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENsZWFyIGJ1dHRvbiBoYW5kbGVyXHJcbiAgICAgICAgICogQ2xlYXIgZmlsZSBpbmZvIGluIGRyb3B6b25lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKCEhdGhpcy5fY2FuY2VsQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkcm9wem9uZUZhaWwoKTtcclxuICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX2NhbmNlbENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2Ryb3B6b25lQnVpbGRlci5fY2FuY2VsQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcm9wem9uZSBidWlsZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBuZXcgRHJvcHpvbmUodGhpcy5fZHJvcHpvbmVDb250YWluZXIsIHsuLi5jb25maWcsIC4uLnRoaXMuX2NvbmZpZ30pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnLi9lcnJvckhhbmRsZXInO1xyXG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcIi4vc3VjY2Vzc0hhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBIVFRQIFJlcXVlc3QgQnVpbGRlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVybCkge1xyXG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgICAgICB0aGlzLl9tZXRob2QgPSAnZ2V0JztcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5fZXJyb3IgPSBlcnJvckhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IHN1Y2Nlc3NIYW5kbGVyO1xyXG4gICAgICAgIHRoaXMuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge307XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kKG1ldGhvZCkge1xyXG4gICAgICAgIHRoaXMuX21ldGhvZCA9IG1ldGhvZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yKGZuKSB7XHJcbiAgICAgICAgdGhpcy5fZXJyb3IgPSBmbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhmbikge1xyXG4gICAgICAgIHRoaXMuX3N1Y2Nlc3MgPSBmbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGxldGUoZm4pIHtcclxuICAgICAgICB0aGlzLl9jb21wbGV0ZSA9IGZuO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZW5kKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5fdXJsLFxyXG4gICAgICAgICAgICB0eXBlOiB0aGlzLl9tZXRob2QsXHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuX2RhdGEsXHJcbiAgICAgICAgICAgIGVycm9yOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISFyZXNwb25zZS5yZXNwb25zZUpTT04pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihyZXNwb25zZS5yZXNwb25zZUpTT04pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiB0aGlzLl9zdWNjZXNzLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogdGhpcy5fY29tcGxldGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEJhc2UgZXJyb3IgaGFuZGxlclxyXG4gKlxyXG4gKiBAcGFyYW0gcmVzcG9uc2VcclxuICovXHJcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWRpcmVjdCB0byB0aGUgcm91dGVcclxuICAgICAqL1xyXG4gICAgaWYgKCEhcmVzcG9uc2Uucm91dGUpIHtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gcmVzcG9uc2Uucm91dGU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBtYWluIGVycm9yIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgaWYgKCEhcmVzcG9uc2UubWVzc2FnZSkge1xyXG4gICAgICAgIG5vdGlmeUVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBhbGwgbWVzc2FnZXNcclxuICAgICAqL1xyXG4gICAgaWYoISFyZXNwb25zZS5lcnJvcnMpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZS5lcnJvcnMpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yc1trZXldLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnlFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL1JlcXVlc3RCdWlsZGVyJztcclxuIiwiaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcclxuXHJcbi8qKlxyXG4gKiBCYXNlIGVycm9yIGhhbmRsZXJcclxuICpcclxuICogQHBhcmFtIHJlc3BvbnNlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBtYWluIGVycm9yIG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgaWYgKCEhcmVzcG9uc2UubWVzc2FnZSkge1xyXG4gICAgICAgIG5vdGlmeVN1Y2Nlc3MocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL21vZGFsJztcclxuaW1wb3J0ICcuL29ic2VydmVyJztcclxuaW1wb3J0ICcuL2h0dHAnO1xyXG4iLCJjb25zdCBtb2RhbHNDb250YWluZXIgPSAkKCdib2R5Jyk7XHJcblxyXG5jb25zdCBNT0RBTF9TSVpFUyA9IHtcclxuICAgIHNtOiAnbW9kYWwtc20nLFxyXG4gICAgbWQ6ICdtb2RhbC1tZCcsXHJcbiAgICBsZzogJ21vZGFsLWxnJyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBVbmlxdWUgaW5kZXggb2YgdGhlIG1vZGFsXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xyXG5sZXQgbW9kYWxJbmRleCA9IDA7XHJcblxyXG4vKipcclxuICogQ291bnRlciBvZiB0aGUgbW9kYWxzIGF0IHRoZSBwYWdlXHJcbiAqXHJcbiAqIEB0eXBlIHtudW1iZXJ9XHJcbiAqL1xyXG5sZXQgbW9kYWxDb3VudGVyID0gMDtcclxuXHJcbi8qKlxyXG4gKiBNb2RhbCBCdWlsZGVyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgbW9kYWxJbmRleCsrO1xyXG4gICAgICAgIHRoaXMuX2lkID0gJ21vZGFscy1jb250YWluZXItaXRlbS0nICsgbW9kYWxJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBzaXplKHNpemUpIHtcclxuICAgICAgICBpZiAoISFNT0RBTF9TSVpFU1tzaXplXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gTU9EQUxfU0laRVNbc2l6ZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIoaGVhZGVyKSB7XHJcbiAgICAgICAgdGhpcy5faGVhZGVyID0gaGVhZGVyO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBib2R5KGJvZHkpIHtcclxuICAgICAgICB0aGlzLl9ib2R5ID0gYm9keTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZm9vdGVyKGZvb3Rlcikge1xyXG4gICAgICAgIHRoaXMuX2Zvb3RlciA9IGZvb3RlcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YXNldChkYXRhc2V0KSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YXNldCA9IGRhdGFzZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fc2l6ZSA/IHRoaXMuX3NpemUgOiBNT0RBTF9TSVpFUy5tZDtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0SGVhZGVyKCkge1xyXG4gICAgICAgIGlmICghIXRoaXMuX2hlYWRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JHt0aGlzLl9oZWFkZXJ9PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0Rm9vdGVyKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGlmICghIXRoaXMuX2Zvb3Rlcikge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAkKGA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+PC9kaXY+YClcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJChgXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBgKSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZm9vdGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0Qm9keSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBpZiAoISF0aGlzLl9ib2R5KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICQoYDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+PC9kaXY+YClcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGwgYmVmb3JlIGJ1aWxkIG1vZGFsXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIGJlZm9yZUJ1aWxkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9iZWZvcmVCdWlsZCgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGFmdGVyIGJ1aWxkIG1vZGFsXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIGFmdGVyQnVpbGQoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfYWZ0ZXJCdWlsZCgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBhZnRlciBjbG9zZSBtb2RhbFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBvbkNsb3NlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQ2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vbkNsb3NlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNsb3NlQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW9kYWwoY29udGVudCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERhdGEgYXR0cmlidXRlc1xyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgZGF0YXNldCA9IFtdO1xyXG4gICAgICAgIGlmICghIXRoaXMuX2RhdGFzZXQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLl9kYXRhc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0LnB1c2goYGRhdGEtJHtuYW1lfT1cIiR7dGhpcy5fZGF0YXNldFtuYW1lXX1cImApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaHRtbCA9ICQoYFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHsgdGhpcy5fZ2V0SUQoKSB9XCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiICR7ZGF0YXNldC5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgJHt0aGlzLl9nZXRTaXplKCl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gKTtcclxuXHJcbiAgICAgICAgaWYgKCEhY29udGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsIHRoZSBiZWZvcmVCdWlsZCBjYWxsYmFja1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkKCk7XHJcblxyXG4gICAgICAgIGh0bWwuZmluZCgnLm1vZGFsLWNvbnRlbnQnKVxyXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEhlYWRlcigpKVxyXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEJvZHkoKSlcclxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9nZXRGb290ZXIoKSk7XHJcblxyXG4gICAgICAgIGh0bWwuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XHJcblxyXG4gICAgICAgIGh0bWwuZmluZCgnLmRhdGVwaWNrZXInKVxyXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXHJcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtaW5WaWV3OiAnMidcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcudGFibGVzdGlja3loZWFkZXInKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcclxuXHJcbiAgICAgICAgbW9kYWxzQ29udGFpbmVyLmFwcGVuZChodG1sKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbCB0aGUgYWZ0ZXJCdWlsZCBjYWxsYmFja1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2FmdGVyQnVpbGQoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdXBkYXRlIGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbW9kYWxDb3VudGVyKys7XHJcblxyXG4gICAgICAgICQoJyMnICsgdGhpcy5fZ2V0SUQoKSlcclxuICAgICAgICAgICAgLm9uKCdoaWRkZW4uYnMubW9kYWwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbENvdW50ZXItLTtcclxuICAgICAgICAgICAgICAgICQoJyMnICsgdGhpcy5fZ2V0SUQoKSlcclxuICAgICAgICAgICAgICAgICAgICAub2ZmKCdoaWRkZW4uYnMubW9kYWwnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ2FsbCB0aGUgb25DbG9zZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tb2RhbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kYWxDb3VudGVyKCkge1xyXG4gICAgcmV0dXJuIG1vZGFsQ291bnRlcjtcclxufVxyXG4iLCJpbXBvcnQgJy4vTW9kYWxCdWlsZGVyJ1xyXG5pbXBvcnQgJy4vbW9kYWxDb25maXJtJ1xyXG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogTW9kYWwgY29uZmlybVxyXG4gKlxyXG4gKiBAcGFyYW0gbWVzc2FnZVxyXG4gKiBAcGFyYW0gY2FsbGJhY2tcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb2RhbENvbmZpcm0obWVzc2FnZSwgY2FsbGJhY2spIHtcclxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxyXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxyXG4gICAgICAgIC5oZWFkZXIobWVzc2FnZSlcclxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcclxuICAgICAgICAgICAgJ2NsYXNzJzogJ2J0biBidG4tc20gYnRuLXN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAndGV4dCc6ICdDb25maXJtJyxcclxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXHJcbiAgICAgICAgICAgICdjbGljayc6IGNhbGxiYWNrXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLm1vZGFsKCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIE5vdGlmeSBoZWxwZXJcclxuICpcclxuICogQHBhcmFtIG1lc3NhZ2VcclxuICogQHBhcmFtIHR5cGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlLCB0eXBlKSB7XHJcbiAgICAkLm5vdGlmeSh7bWVzc2FnZTogbWVzc2FnZX0se1xyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgel9pbmRleDogMTA1MVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgbm90aWZ5KG1lc3NhZ2UsICdkYW5nZXInKTtcclxufVxyXG4iLCJpbXBvcnQgbm90aWZ5IGZyb20gXCIuL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICBub3RpZnkobWVzc2FnZSwgJ3N1Y2Nlc3MnKTtcclxufVxyXG4iLCIvKipcclxuICogRXZlbnQgb2JzZXJ2ZXJcclxuICovXHJcbmNsYXNzIEV2ZW50T2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUgKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nKCdzdWJzY3JpYmUnLCBldmVudCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoIChldmVudCwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2xvZygnZGlzcGF0Y2gnLCBldmVudCk7XHJcblxyXG4gICAgICAgIGlmICghIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmZvckVhY2goaGFuZGxlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGRhdGEsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlIChldmVudCwgc3RhdGUpIHtcclxuICAgICAgICB0aGlzLl9sb2coJ3Vuc3Vic2NyaWJlJywgZXZlbnQpO1xyXG5cclxuICAgICAgICBpZiAoISF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICBpZighIXN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmZpbHRlcihoYW5kbGVyID0+IGhhbmRsZXIgIT09IHN0YXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRGVsZXRlIGFsbCBzdWJzY3JpYmVyc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfbG9nKG1ldGhvZCwgZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXRob2QudG9VcHBlckNhc2UoKSwgJzonLCAnWycsIGV2ZW50LCAnXScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBvYnNlcnZlciA9IG5ldyBFdmVudE9ic2VydmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcjtcclxuIiwiaW1wb3J0ICcuL0V2ZW50T2JzZXJ2ZXInO1xyXG4iLCIvKipcclxuICogU2F2ZWQgaXRlbSBub3QgZm91bmRcclxuICpcclxuICogVXNpbmcgaW4gZmFzdFNhdmUgaGFuZGxlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNhdmVkSXRlbU5vdEZvdW5kIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdTYXZlZEl0ZW1Ob3RGb3VuZCc7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBBZGQgZW1iZWQgZWxlbWVudFxyXG4gKlxyXG4gKiBAcGFyYW0gZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3RhcmdldCcpO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3RlbXBsYXRlJyk7XHJcbiAgICBjb25zdCBpZFBsYWNlaG9sZGVyID0gY3VycmVudEJ1dHRvbi5kYXRhKCdpZHBsYWNlcG9sZGVyJyk7XHJcblxyXG4gICAgbGV0IHJvd0lkID0gY3VycmVudEJ1dHRvbi5kYXRhKCdyb3dpZCcpO1xyXG4gICAgY3VycmVudEJ1dHRvbi5kYXRhKCdyb3dpZCcsICsrcm93SWQpO1xyXG5cclxuICAgIGxldCBlbWJlZEZvcm0gPSAkKCcjJysgdGVtcGxhdGUpLmh0bWwoKTtcclxuICAgIGNvbnN0IGVtYmVkQmxvY2tJZCA9IHJvd0lkICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKS50b1N0cmluZygxNik7XHJcbiAgICBlbWJlZEZvcm0gPSBlbWJlZEZvcm0ucmVwbGFjZSgvJWVtYmVkQmxvY2tJZCUvZywgZW1iZWRCbG9ja0lkKTtcclxuXHJcbiAgICBpZiAoISFpZFBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgZW1iZWRGb3JtID0gZW1iZWRGb3JtLnJlcGxhY2UoIG5ldyBSZWdFeHAoaWRQbGFjZWhvbGRlciwgXCJnXCIpLCByb3dJZClcclxuICAgIH1cclxuXHJcbiAgICAkKCcjJyArIHRhcmdldCkuYXBwZW5kKGVtYmVkRm9ybSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVudCBkaXNwYXRjaFxyXG4gICAgICovXHJcbiAgICBjb25zdCBldmVudCA9IGN1cnJlbnRCdXR0b24uZGF0YSgnZXZlbnQnKTtcclxuICAgIGlmIChldmVudCAmJiBldmVudC5sZW5ndGgpIHtcclxuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChldmVudCwge1xyXG4gICAgICAgICAgICBlbWJlZEJsb2NrSWQ6IGVtYmVkQmxvY2tJZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjdXJyZW50QnV0dG9uLnRyaWdnZXIoJ2FpX2FuaW1hdGlvbicpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICpBamF4IHBhZ2luYXRpb25cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSAkKHRoaXMpLnBhcmVudHMoJy5hamF4LXBhZ2luYXRpb24nKS5kYXRhKCdjb250YWluZXInKTtcclxuICAgXHJcbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXHJcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICQoJyMnICsgY29udGFpbmVyKS5yZXBsYWNlV2l0aChyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XHJcbmltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcclxuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIE9wZW4gY29uZmlybSBtb2RhbCBiZWZvcmUgYWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuaHJlZjtcclxuICAgIGNvbnN0IHBhcmVudEJ1dHRvbiA9ICQodGhpcyk7XHJcblxyXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXHJcbiAgICAgICAgLnNpemUoU0laRVMuc20pXHJcbiAgICAgICAgLmhlYWRlcihkYXRhU2V0LmhlYWRlcilcclxuICAgICAgICAuZm9vdGVyKFxyXG4gICAgICAgICAgICAkKCc8YnV0dG9uLz4nLCB7XHJcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAoZGF0YVNldC5idG5DbGFzcyB8fCAnYnRuLXNtIGJ0bi1zdWNjZXNzJykgKyAnIGJ0bicsXHJcbiAgICAgICAgICAgICAgICAndGV4dCc6IGRhdGFTZXQuYnRuTmFtZSB8fCAnQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAnY2xpY2snOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGFTZXQuaGFzT3duUHJvcGVydHkoJ3dpdGhGb3JtJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHBhcmVudEJ1dHRvbi5jbG9zZXN0KCdmb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBodHRwKHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1ldGhvZChkYXRhU2V0Lm1ldGhvZCB8fCAnZ2V0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhZGF0YVNldC5ldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGF0YVNldC5yZWxvYWQpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRhdGFTZXQuZGlzbWlzcykgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLmNsb3Nlc3QoJy5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgICAgICAubW9kYWwoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xyXG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcclxuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XHJcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSBjdXJyZW50QnRuLmNsb3Nlc3QoJy5mYXN0LXNhdmUtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBkYXRhU2V0ID0gdGhpcy5kYXRhc2V0O1xyXG5cclxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcclxuICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKCEhZGF0YVNldC5ldmVudCkge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZGF0YVNldC5ldmVudCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5kYXRhKGdldEZvcm1EYXRhKHNhdmVkSXRlbSkpXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgIHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcclxuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XHJcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX1NFTEVDVE9SID0gJy5mYXN0LXNhdmUtcGFnZS1jb250YWluZXInO1xyXG5leHBvcnQgY29uc3QgUEFHRV9TQVZFRCA9ICdQQUdFX1NBVkVEJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9TQVZFX0FMTF9CVVRUT04gPSAnVVBEQVRFX1NBVkVfQUxMX0JVVFRPTic7XHJcblxyXG4vKipcclxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgYWxsIHBhZ2VcclxuICpcclxuICogQHBhcmFtIGVcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xyXG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJChDT05UQUlORVJfU0VMRUNUT1IpO1xyXG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcclxuXHJcbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcclxuICAgICAqL1xyXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XHJcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcclxuXHJcbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xyXG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXHJcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcclxuICAgICAgICAuZGF0YShkYXRhKVxyXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKCEhZGF0YVNldC5ldmVudCkge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZGF0YVNldC5ldmVudCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcmsgZm9ybSdzIGVsZW1lbnRzIGFzIGNoYW5nZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZCgpIHtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcclxufVxyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBkYXRlRm9ybWF0ID0gJ1lZWVktTU0tREQnO1xyXG4gICAgY29uc3QgZGF0ZVJhbmdlSW5wdXRzID0gJCgnI2RhdGUtcmFuZ2UtaW5wdXRzJyk7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9ICQoJyNkYXRlLXJhbmdlLXNlbGVjdCcpLmZpbmQoJzpzZWxlY3RlZCcpO1xyXG4gICAgY29uc3QgZGF0ZUZyb20gPSBkYXRlUmFuZ2VJbnB1dHMuZmluZCgnLmZpbHRlci1mcm9tJyk7XHJcbiAgICBjb25zdCBkYXRlVG8gPSBkYXRlUmFuZ2VJbnB1dHMuZmluZCgnLmZpbHRlci10bycpO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZE9wdGlvbi52YWwoKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICBkYXRlUmFuZ2VJbnB1dHMuY3NzKHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2luaXRpYWwnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRlUmFuZ2VJbnB1dHMuY3NzKHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgIGhlaWdodDogMFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZGF0ZUZyb21WYWx1ZSA9ICcnO1xyXG4gICAgICAgIGxldCBkYXRlVG9WYWx1ZSAgID0gJyc7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvZGF5JzpcclxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBkYXRlVG9WYWx1ZSA9IG1vbWVudCgpLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd5ZXN0ZXJkYXknOlxyXG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IGRhdGVUb1ZhbHVlID0gbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheScpLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjdXJyZW50LXdlZWsnOlxyXG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLmRheSgxKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZGF5KDcpLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cy13ZWVrJzpcclxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5kYXkoLTYpLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5kYXkoMCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2N1cnJlbnQtbW9udGgnOlxyXG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLmVuZE9mKCdtb250aCcpLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cy1tb250aCc6XHJcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuc3VidHJhY3QoMSwgJ21vbnRoJykuc3RhcnRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuc3VidHJhY3QoMSwgJ21vbnRoJykuZW5kT2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xhc3Qtc2V2ZW4nOlxyXG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDYsICdkYXknKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xhc3QtdGhpcnR5JzpcclxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5zdWJ0cmFjdCgyOSwgJ2RheScpLmZvcm1hdChkYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGVGcm9tLnZhbChkYXRlRnJvbVZhbHVlKTtcclxuICAgICAgICBkYXRlVG8udmFsKGRhdGVUb1ZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgZmFzdFNhdmUgZnJvbSBcIi4vZmFzdFNhdmVcIjtcclxuaW1wb3J0IGFkZEVtYmVkIGZyb20gXCIuL2FkZEVtYmVkXCI7XHJcbmltcG9ydCByZW1vdmVFbWJlZCBmcm9tIFwiLi9yZW1vdmVFbWJlZFwiO1xyXG5pbXBvcnQgc3VibWl0Rm9ybSBmcm9tIFwiLi9zdWJtaXRGb3JtXCI7XHJcbmltcG9ydCBhamF4UGFnaW5hdGlvbiBmcm9tIFwiLi9hamF4UGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgY29uZmlybU1vZGFsIGZyb20gXCIuL2NvbmZpcm1Nb2RhbFwiO1xyXG5pbXBvcnQgcGFnZUxpbWl0IGZyb20gXCIuL3BhZ2VMaW1pdFwiO1xyXG5pbXBvcnQgbW9kYWxEYXRhIGZyb20gXCIuL21vZGFsRGF0YVwiO1xyXG5pbXBvcnQgZmlsdGVyRGF0ZVJhbmdlIGZyb20gXCJoYW5kbGVycy9maWx0ZXJEYXRlUmFuZ2VcIjtcclxuaW1wb3J0IGZhc3RTYXZlUGFnZSwge0NPTlRBSU5FUl9TRUxFQ1RPUiwgbWFya0NoYW5nZWR9IGZyb20gXCIuL2Zhc3RTYXZlUGFnZVwiO1xyXG5pbXBvcnQgdGFibGVTb3J0ZXIgZnJvbSBcInRhYmxlc29ydGVyXCI7XHJcbmltcG9ydCBzdGlja3lIZWFkZXJzIGZyb20gXCJzdGlja3ktdGFibGUtaGVhZGVyc1wiO1xyXG5pbXBvcnQgJ3RhYmxlc29ydGVyL2Rpc3QvY3NzL3RoZW1lLmRlZmF1bHQubWluLmNzcyc7XHJcblxyXG4kKGRvY3VtZW50KVxyXG4gICAgLnNjcm9sbChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAzMDApIHtcclxuICAgICAgICAgICAgJCgnLnZpc2l0LXN0YXRzJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhlaWdodCgwKS5jc3MoJ2Rpc3BsYXknLCAndGFibGUtY29sdW1uLWdyb3VwJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy52aXNpdC1zdGF0cycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHRhYmxlc29ydGVyID0gJCgnLnRhYmxlc29ydGVyJyk7XHJcbiAgICAgICAgaWYodGFibGVzb3J0ZXIpIHtcclxuICAgICAgICAgICAgdGFibGVzb3J0ZXIudGFibGVzb3J0ZXIoKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcclxuICAgICAgICAgICAgdGFibGVzb3J0ZXIuZmluZCgndGhlYWQnKS5jc3MoJ2JhY2tncm91bmQnLCAnI2ZmZicpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW4gbW9kYWwgd2l0aCBkYXRhIGZyb20gc2VydmVyIGJ5IHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1tb2RhbC1hY3Rpb24nLCBtb2RhbERhdGEpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIGNvbmZpcm0gbW9kYWxcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1jb25maXJtLWFjdGlvbicsIGNvbmZpcm1Nb2RhbClcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1Ym1pdCBmb3JtIGRhdGFcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1zdWJtaXQtYWN0aW9uJywgc3VibWl0Rm9ybSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1Ym1pdCBmb3JtIGRhdGFcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1wYWdpbmF0aW9uIGEnLCBhamF4UGFnaW5hdGlvbilcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBlbWJlZCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1lbWJlZCcsIGFkZEVtYmVkKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGVtYmVkIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcucm0tZW1iZWQnLCByZW1vdmVFbWJlZClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZhc3Qgc2F2ZSB0aGUgZGF0YSBvZiBhbiBlbnRpdHlcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZmFzdC1zYXZlJywgZmFzdFNhdmUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgcGFnZSBsaW1pdFxyXG4gICAgICovXHJcbiAgICAub24oJ2NoYW5nZScsICcucGFnZS1saW1pdCcsIHBhZ2VMaW1pdClcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgaW5wdXRzIGFzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjaGFuZ2UnLCBgJHtDT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZClcclxuXHJcbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBkYXRlUmFuZ2UgPSAkKCcjZGF0ZS1yYW5nZS1zZWxlY3QnKTtcclxuICAgICAgICBpZiAoZGF0ZVJhbmdlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJEYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgZGF0ZVJhbmdlLmNoYW5nZShmaWx0ZXJEYXRlUmFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuZnVuY3Rpb24gaW5pdFN0aWNreSgpIHtcclxuICAgICQoJy50YWJsZXNvcnRlcicpLnN0aWNreVRhYmxlSGVhZGVycygpO1xyXG59XHJcblxyXG4kKFwiLnRhYmxlLXJlc3BvbnNpdmVcIikuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgIGluaXRTdGlja3koKTtcclxufSk7XHJcblxyXG4vKipcclxuICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIHBhZ2VcclxuICovXHJcbiQoJy5mYXN0LXNhdmUtcGFnZScpLmNsaWNrKGZhc3RTYXZlUGFnZSk7XHJcbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XHJcbmltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcclxuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIE9wZW4gbW9kYWwgd2l0aCBmb3JtIGJ5IHJlcXVlc3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcclxuXHJcbiAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xyXG5cclxuICAgIG5ldyBodHRwKHRoaXMuaHJlZilcclxuICAgICAgICAubWV0aG9kKHRoaXMuZGF0YXNldC5tZXRob2QgfHwgJ2dldCcpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBuZXcgTW9kYWxCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgIC5zaXplKFNJWkVTLmxnKVxyXG4gICAgICAgICAgICAgICAgLmRhdGFzZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbG9hZDogdGhpcy5kYXRhc2V0LnJlbG9hZCB8fCAxLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5oZWFkZXIodGhpcy5kYXRhc2V0LmhlYWRlcilcclxuICAgICAgICAgICAgICAgIC5hZnRlckJ1aWxkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmRhdGFzZXQuZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmV2ZW50LCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbkNsb3NlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmRhdGFzZXQuY2xvc2VFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaCh0aGlzLmRhdGFzZXQuY2xvc2VFdmVudCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubW9kYWwocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFNldCBwYWdlIGxpbWl0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGhyZWYgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIGhyZWYuc2VhcmNoUGFyYW1zLnNldCgncGFnZV9saW1pdCcsICQodGhpcykudmFsKCkpO1xyXG4gICAgaHJlZi5zZWFyY2hQYXJhbXMuZGVsZXRlKCdwYWdlJyk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWYudG9TdHJpbmcoKTtcclxufVxyXG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGVtYmVkZWQgZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBwYXJlbnQgPSAhIXRoaXMuZGF0YXNldC5wYXJlbnQgPyAkKHRoaXMpLmNsb3Nlc3QodGhpcy5kYXRhc2V0LnBhcmVudCkgOiAkKHRoaXMpLnBhcmVudCgpO1xyXG5cclxuICAgIGlmICghdGhpcy5kYXRhc2V0LmlkKSB7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcclxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcclxuICAgICAgICAuaGVhZGVyKCdBcmUgeW91IHN1cmU/JylcclxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcclxuICAgICAgICAgICAgJ2NsYXNzJzogJ2J0biBidG4tc20gYnRuLWRhbmdlcicsXHJcbiAgICAgICAgICAgICd0ZXh0JzogJ0RlbGV0ZScsXHJcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxyXG4gICAgICAgICAgICAnY2xpY2snOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5tb2RhbCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtnZXRNb2RhbENvdW50ZXJ9IGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcblxuLyoqXG4gKiBTdWJtaXQgZm9ybVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAuZGF0YShjdXJyZW50QnV0dG9uLmNsb3Nlc3QoJ2Zvcm0nKS5zZXJpYWxpemVBcnJheSgpKVxuICAgICAgICAubWV0aG9kKHRoaXMuZGF0YXNldC5tZXRob2QgfHwgJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmICghIXRoaXMuZGF0YXNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSAhPT0gJ2Vycm9yJyAmJiBjYW5SZWxvYWQodGhpcykpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuZGF0YXNldC5kaXNtaXNzKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocmVzcG9uc2UudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNvbXBsZXRlKHIgPT4ge1xuICAgICAgICAgICAgaWYoci5yZXNwb25zZUpTT04uaGFzT3duUHJvcGVydHkoJ3JlcG9ydF9pbWFnZScpKSB7XG4gICAgICAgICAgICAgICAgJCgnI3JlcG9ydF9wYXRoJykudmFsKHIucmVzcG9uc2VKU09OLnJlcG9ydF9pbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2FuIHJlbG9hZCB0aGUgcGFnZVxuICpcbiAqIEBwYXJhbSBidXR0b25cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjYW5SZWxvYWQoYnV0dG9uKSB7XG4gICAgaWYgKHBhcnNlSW50KGJ1dHRvbi5kYXRhc2V0LnJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgaWYgKGdldE1vZGFsQ291bnRlcigpIDwgMikge1xuICAgICAgICAgICAgY29uc3QgZGF0YVJlbG9hZCA9ICQoYnV0dG9uKS5jbG9zZXN0KCcubW9kYWwnKS5kYXRhKCdyZWxvYWQnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVJlbG9hZCA9PT0gdHlwZW9mIHVuZGVmaW5lZCB8fCBkYXRhUmVsb2FkID09PSBmYWxzZSB8fCBwYXJzZUludChkYXRhUmVsb2FkKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGdldFN1YkZvbGRlciBmcm9tIFwiLi9nZXRTdWJGb2xkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBHZXQgZmlsZSBwYXRoIGZyb20gc3RvcmFnZSB3aXRoIHN1YiBmb2xkZXJzXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByb290Rm9sZGVyIFJvb3QgZm9sZGVyIGluIHRoZSBzdG9yYWdlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAgIEZpbGUgbmFtZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJvb3RGb2xkZXIsIGZpbGVOYW1lKSB7XHJcbiAgICByZXR1cm4gJy9zdG9yYWdlLycgKyByb290Rm9sZGVyICsgJy8nICsgZ2V0U3ViRm9sZGVyKGZpbGVOYW1lKSArICcvJyArIGZpbGVOYW1lO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBHZXQgZm9ybSBkYXRhXHJcbiAqXHJcbiAqIEBwYXJhbSB7alF1ZXJ5fSBmb3JtIEZvcm0gZWxlbWVudFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7e319XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xyXG5cclxuICAgIGxldCBmb3JtSXRlbXMgPSBmb3JtLmZpbmQoJ2lucHV0LCBzZWxlY3QnKTtcclxuICAgIGlmICghZm9ybUl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGZvcm1JdGVtcyA9IGZvcm07XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybUl0ZW1zLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gJCh0aGlzKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRJdGVtLmF0dHIoJ3R5cGUnKSkge1xyXG4gICAgICAgICAgICBjYXNlICdyYWRpbyc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhW2N1cnJlbnRJdGVtLmF0dHIoJ25hbWUnKV0gPSAhIWN1cnJlbnRJdGVtLnByb3AoIFwiY2hlY2tlZFwiICkgKiAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVtjdXJyZW50SXRlbS5hdHRyKCduYW1lJyldID0gY3VycmVudEl0ZW0udmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xyXG59XHJcbiIsImltcG9ydCBtZDUgZnJvbSAnYmx1ZWltcC1tZDUnO1xyXG5cclxuLyoqXHJcbiAqIEdldCBzdWIgZm9sZGVycyBvZiB0aGUgZmlsZVxyXG4gKlxyXG4gKiBSZXN1bHQgb2YgdGhlIGZ1bmN0aW9uIGxvb2tzIGxpa2U6IGExL2IyL2MzXHJcbiAqIFdoZXJlIG1kNSBvZiB0aGUgZmlsZSA9IGExYjJjMy4uLi4uLi4uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiB0aGUgZmlsZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBmaWxlTmFtZUhhc2ggPSBtZDUoZmlsZU5hbWUpLnN1YnN0cmluZygwLCA2KTtcclxuICAgIGNvbnN0IHBhdGhQYXJ0cyA9IGZpbGVOYW1lSGFzaC5tYXRjaCgvLnsxLDJ9L2cpO1xyXG4gICAgcmV0dXJuIHBhdGhQYXJ0cy5qb2luKCcvJyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIGpRdWVyeVxyXG4gKi9cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcclxud2luZG93LiQgPSAkO1xyXG53aW5kb3cualF1ZXJ5ID0gJDtcclxuXHJcbi8qKlxyXG4gKiBCb290c3RyYXBcclxuICovXHJcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwJztcclxuXHJcbi8qKlxyXG4gKiBCb290c3RyYXAgQ2NvbG9ycGlja2VyXHJcbiAqL1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC1jb2xvcnBpY2tlcic7XHJcbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyL2Rpc3QvY3NzL2Jvb3RzdHJhcC1jb2xvcnBpY2tlci5jc3MnO1xyXG5cclxuLyoqXHJcbiAqIEZvbnQgQXdlc29tZVxyXG4gKi9cclxuaW1wb3J0ICdmb250LWF3ZXNvbWUvc2Nzcy9mb250LWF3ZXNvbWUuc2Nzcyc7XHJcblxyXG4vKipcclxuICogRXh0ZXJuYWwgbW9kdWxlc1xyXG4gKiBUT0RPOiBnZXQgYnkgbnBtXHJcbiAqL1xyXG5pbXBvcnQgJy4vdmVuZG9yL2FuaW1hdGUnO1xyXG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1jb25maXJtYXRpb24nO1xyXG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlcic7XHJcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLW5vdGlmeSc7XHJcbmltcG9ydCAnLi92ZW5kb3Ivc2VsZWN0Mic7XHJcbmltcG9ydCAnLi92ZW5kb3IvZWtrby1saWdodGJveCc7XHJcbmltcG9ydCAnLi92ZW5kb3IvdGhlbWUnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudHNcclxuICovXHJcbmltcG9ydCAnLi9jb21wb25lbnRzJztcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVyc1xyXG4gKi9cclxuaW1wb3J0ICcuL2hhbmRsZXJzJztcclxuXHJcbi8qKlxyXG4gKiBTdHlsZXNcclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XHJcblxyXG4vKipcclxuICogTW9kdWxlcyBsb2FkZXJcclxuICovXHJcbmNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xyXG5pZiAocGF0aC5sZW5ndGggPiAxKSB7XHJcbiAgICAvKipcclxuICAgICAqIFRvIGNyZWF0aW5nIGRpZmZlcmVudCBmaWxlcyBmb3IgZWFjaCBtb2R1bGVcclxuICAgICAqIChEb24ndCBmb3JnZXQgbnBtIGkgLS1zYXZlLWRldiBidW5kbGUtbG9hZGVyKVxyXG4gICAgICogY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnYnVuZGxlLWxvYWRlciFtb2R1bGVzJywgdHJ1ZSwgL2luZGV4XFwuanMkLyk7XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG1vZHVsZXMgPSByZXF1aXJlLmNvbnRleHQoJ21vZHVsZXMnLCB0cnVlLCAvXFwuXFwvW1xcdy1fXStcXC9tb2R1bGVcXC5qcyQvKTtcclxuICAgIG1vZHVsZXMua2V5cygpLm1hcChtb2R1bGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZUl0ZW1zID0gbW9kdWxlLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgICAgIGlmIChtb2R1bGVJdGVtc1sxXSA9PT0gcGF0aFsxXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTU9EVUxFOicsIHBhdGhbMV0pO1xyXG4gICAgICAgICAgICBtb2R1bGVzKG1vZHVsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3ViTW9kdWxlcyA9IHJlcXVpcmUuY29udGV4dCgnbW9kdWxlcycsIHRydWUsIC9tb2R1bGVzKC4qKW1vZHVsZVxcLmpzJC8pO1xyXG4gICAgc3ViTW9kdWxlcy5rZXlzKCkubWFwKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlSXRlbXMgPSBtb2R1bGUuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgaWYgKG1vZHVsZUl0ZW1zWzFdID09PSBwYXRoWzFdICYmIG1vZHVsZUl0ZW1zWzNdID09PSBwYXRoWzJdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUIgTU9EVUxFOicsIHBhdGhbMl0pO1xyXG4gICAgICAgICAgICBzdWJNb2R1bGVzKG1vZHVsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtBV0FSRF9DUkVBVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge0FXQVJEX0NSRUFURUR9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIHNlbGYpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcclxuICAgICAgICBjb25zdCBlZGl0QnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZClcclxuICAgICAgICAgICAgLmh0bWwoKVxyXG4gICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCh0aGlzLmRhdGFzZXQudGVtcGxhdGVQbGFjZWhvbGRlciwgXCJnXCIpLCBkYXRhLmF3YXJkX2lkKVxyXG4gICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJWZpZWxkX25hbWUlJywgXCJnXCIpLCB0aGlzLmRhdGFzZXQuZmllbGROYW1lIHx8ICcnKTtcclxuXHJcbiAgICAgICAgY3VycmVudEJ0bi5wYXJlbnQoKS5hcHBlbmQoZWRpdEJ0bik7XHJcbiAgICAgICAgY3VycmVudEJ0bi5yZW1vdmUoKTtcclxuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBV0FSRF9DUkVBVEVELCBkYXRhKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7QVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3JlYXRlQnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZCkuaHRtbCgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCclZmllbGRfbmFtZSUnKSwgdGhpcy5kYXRhc2V0LmZpZWxkTmFtZSB8fCAnJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XHJcblxyXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbigpLnJlbW92ZSgpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmQoY3JlYXRlQnRuKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XHJcbmltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogRHJvcHpvbmUgaW5pdCBhZnRlciB0aGUgbW9kYWwgb3BlbmVkXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoRVZFTlRfTkFNRSkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEVWRU5UX05BTUUsICgpID0+IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcm9wem9uZSBjb250YWluZXJcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZHJvcHpvbmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByZXZpZXcgVVJMIGhpZGRlbiBpbnB1dFxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBwcmV2aWV3VVJMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihkcm9wem9uZUVsZW1lbnQpXHJcbiAgICAgICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQudXJsKVxyXG4gICAgICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3ByZXZpZXctdXJsJykudmFsKCcnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhbmNlbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcjcHJldmlldy11cmwnKS52YWwoJycpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgcHJldmlld1VSTC52YWx1ZSA9IHJlc3BvbnNlLmZpbGVfbmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldCBwcmV2aWV3XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKHByZXZpZXdVUkwudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRyb3B6b25lQnVpbGRlclxyXG4gICAgICAgICAgICAgICAgLnNldFByZXZpZXcoXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld1VSTC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC5mb2xkZXIsIHByZXZpZXdVUkwudmFsdWUpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJvcHpvbmUgYnVpbGRcclxuICAgICAgICAgKi9cclxuICAgICAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge1VQREFURV9TQVZFX0FMTF9CVVRUT059IGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShVUERBVEVfU0FWRV9BTExfQlVUVE9OLCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNhdmVBbGxCdXR0b24gPSAkKCcjdXBkYXRlLWFsbCcpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSAkKCcjdXBkYXRlLWFsbCAuY291bnQnKTtcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXIuY2hhbmdlZCcpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHNhdmVBbGxCdXR0b24uc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNhdmVBbGxCdXR0b24uaGlkZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb3VudGVyLmh0bWwoY291bnQpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FjdGlvbi1sb2cvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2FjdGlvbi1sb2cvbW9kdWxlLmpzXCIsXG5cdFwiLi9hY3Rpb24tdHlwZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYWN0aW9uLXR5cGUvbW9kdWxlLmpzXCIsXG5cdFwiLi9hZGQtbWUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2FkZC1tZS9tb2R1bGUuanNcIixcblx0XCIuL2Fubm91bmNlbWVudHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9hc3NldHMtbG9nL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hc3NldHMtbG9nL21vZHVsZS5qc1wiLFxuXHRcIi4vYXNzZXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hc3NldHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9hd2FyZC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXdhcmQvbW9kdWxlLmpzXCIsXG5cdFwiLi9iYW5uZXIvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Jhbm5lci9tb2R1bGUuanNcIixcblx0XCIuL2Ntcy1hZHBzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtYWRwcy9tb2R1bGUuanNcIixcblx0XCIuL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jb2xsZWN0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vY3JvcC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY3JvcC9tb2R1bGUuanNcIixcblx0XCIuL2RhaWx5LWxvb3QvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RhaWx5LWxvb3QvbW9kdWxlLmpzXCIsXG5cdFwiLi9kZWZhdWx0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kZWZhdWx0L21vZHVsZS5qc1wiLFxuXHRcIi4vZGVwbG95L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kZXBsb3kvbW9kdWxlLmpzXCIsXG5cdFwiLi9kcGEvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RwYS9tb2R1bGUuanNcIixcblx0XCIuL2R5ZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZHllL21vZHVsZS5qc1wiLFxuXHRcIi4vZ2lmdC13cmFwL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9naWZ0LXdyYXAvbW9kdWxlLmpzXCIsXG5cdFwiLi9saW5rZWQtYXNzZXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vbG9jYWxpemF0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9sb2NhbGl6YXRpb24vbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWdpYy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qc1wiLFxuXHRcIi4vbWFrZXVwLWtpdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanNcIixcblx0XCIuL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qc1wiLFxuXHRcIi4vbWVhbC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWVhbC9tb2R1bGUuanNcIixcblx0XCIuL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9tb2R1bGUuanNcIixcblx0XCIuL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9uZXdzLWdpZnRzLWxvZy9tb2R1bGUuanNcIixcblx0XCIuL3Byb2R1Y3QvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Byb2R1Y3QvbW9kdWxlLmpzXCIsXG5cdFwiLi9wdXJjaGFzZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvcHVyY2hhc2UvbW9kdWxlLmpzXCIsXG5cdFwiLi9zZXR0aW5ncy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9tb2R1bGUuanNcIixcblx0XCIuL3Nob3AtcmVsZWFzZXMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3AtcmVsZWFzZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLXN0YXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vc291bmQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NvdW5kL21vZHVsZS5qc1wiLFxuXHRcIi4vc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zdWJ0eXBlLWF0dHJpYnV0ZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi90YW1hdG9vbC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdGFtYXRvb2wvbW9kdWxlLmpzXCIsXG5cdFwiLi91c2Vycy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdXNlcnMvbW9kdWxlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbW9kdWxlcyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLlxcXFwvW1xcXFx3LV9dK1xcXFwvbW9kdWxlXFxcXC5qcyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL21vZHVsZXMgc3luYyByZWN1cnNpdmUgbW9kdWxlcyguKiltb2R1bGVcXFxcLmpzJFwiOyIsImltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtTSE9XX1JFUE9SVF9QQVRIfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5yZXBvcnRzJykuY3NzKCdwb2ludGVyLWV2ZW50cycsICdhdXRvJyk7XG4gICAgfSlcblxuICAgIC5vbignY2xpY2snLCAnI3JlcG9ydF9wYXRoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjcmVwb3J0X3BhdGgnKS5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgICAgICBub3RpZnlTdWNjZXNzKCdDb3BpZWQgdG8gYnVmZmVyIScpO1xuICAgIH0pXG5cbiAgICAub24oJ2NsaWNrJywgJyNwcm9kdWN0X2lkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjcHJvZHVjdF9pZCcpLnByZXYoJy5zZWxlY3QyLWNvbnRhaW5lcicpLmZpbmQoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKS5mb2N1cygpXG4gICAgfSlcblxuICAgIC5vbignY2xpY2snLCAnI3NlbmQtcmVwb3J0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKS5zdWJtaXQoKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcblxuICAgIC5vbignY2xpY2snLCAnLnJlcG9ydHMnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCgnI3NlbmQtcmVwb3J0JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgJCgnLnJlcG9ydHMnKS5jc3MoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcblxuICAgICAgICBsZXQgZGF0ZUZyb20gPSAkKCdbbmFtZT1cInRvZGF5W2Zyb21dXCJdJykudmFsKCk7XG4gICAgICAgIGxldCBkYXRlVG8gPSAkKCdbbmFtZT1cInRvZGF5W3RvXVwiXScpLnZhbCgpO1xuICAgICAgICBsZXQgY2FudmFzID0gJCgnI2NhbnZhcy1kYXRhJykudmFsKCk7XG4gICAgICAgIGxldCBkYXRhID0ge2Zyb206IGRhdGVGcm9tLCB0bzogZGF0ZVRvLCBjYW52YXM6IGNhbnZhc307XG4gICAgICAgIGxldCBjYW52YXNfaGFuZGxlciA9ICQoXCIjY2FudmFzX2hhbmRsZXJcIik7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICQodGhpcykuYXR0cignaHJlZicpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIGVycm9yOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5yZXBvcnRzJykuY3NzKCdwb2ludGVyLWV2ZW50cycsICdhdXRvJylcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhcmVzcG9uc2UucmVzcG9uc2VKU09OKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihyZXNwb25zZS5yZXNwb25zZUpTT04pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICAkKCcucmVwb3J0cycpLmNzcygncG9pbnRlci1ldmVudHMnLCAnYXV0bycpXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc19oYW5kbGVyLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLmhhc093blByb3BlcnR5KCdzdWNjZXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC10aXRsZScpLnRleHQoci5zdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1oZWFkZXInKS5jc3MoJ2JhY2tncm91bmQnLCAnI2E3ZmY4MycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcign0J/RgNC10LTQv9GA0L7RgdC80L7RgtGAINC+0YLRh9C10YLQsCAo0LDQutGC0LjQstC40YDRg9C50YLQtSDQstC10YDRgdC40Y4g0LTQu9GPINCf0Jog0LIg0L3QsNGB0YLRgNC+0LnQutCw0YUg0LzQvtCx0LjQu9GM0L3QvtCz0L4g0LHRgNCw0YPQt9C10YDQsCDQtNC70Y8g0LrQvtGA0YDQtdC60YLQvdC+0LPQviDRhNC+0YDQvNC40YDQvtCy0LDQvdC40Y8g0L7RgtGH0LXRgtCwKScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJvZHkocilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5yZXBvcnRzJykuY3NzKCdwb2ludGVyLWV2ZW50cycsICdhdXRvJylcbiAgICAgICAgICAgICAgICAgICAgcG9zdFByb2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwb3N0UHJvY2VzcygpIHtcblxuICAgICAgICAgICAgbGV0IHN1Ym1pdEJ0biA9ICQoJyNsb2FkJyk7XG4gICAgICAgICAgICBzdWJtaXRCdG4uZGF0YSgnbG9hZGluZy10ZXh0JywgJzxpIGNsYXNzPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPiDQn9C+0LTQs9C+0YLQvtCy0LrQsCcpO1xuICAgICAgICAgICAgc3VibWl0QnRuLmJ1dHRvbignbG9hZGluZycpO1xuICAgICAgICAgICAgc3VibWl0QnRuLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gJChcIi5odG1sLWNvbnRlbnQtaG9sZGVyXCIpO1xuICAgICAgICAgICAgICAgIGxldCBjYW52YXNfaGFuZGxlciA9ICQoXCIjY2FudmFzX2hhbmRsZXJcIik7XG4gICAgICAgICAgICAgICAgY2FudmFzX2hhbmRsZXIuZW1wdHkoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvcHlfZWxlID0gJCgnI3JlcG9ydC10YWJsZScpLmdldCgwKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2FudmFzX2hhbmRsZXIuYXBwZW5kKGNvcHlfZWxlKTtcbiAgICAgICAgICAgICAgICBjYW52YXNfaGFuZGxlci5jc3MoJ2hlaWdodCcsIGNvcHlfZWxlLnNjcm9sbEhlaWdodCArIDIwKTtcbiAgICAgICAgICAgICAgICBjYW52YXNfaGFuZGxlci5jc3MoJ21pbi13aWR0aCcsICc3MDBweCcpO1xuXG5cbiAgICAgICAgICAgICAgICBodG1sMmNhbnZhcyhjb3B5X2VsZSwge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxYOiAwLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxZOiAwLFxuICAgICAgICAgICAgICAgICAgICB1c2VDT1JTOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNhbnZhcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSBpbWFnZURhdGEucmVwbGFjZSgvXmRhdGE6aW1hZ2VcXC9wbmcvLCBcImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjY2FudmFzLWRhdGEnKS52YWwobmV3RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQuYXBwZW5kKGNhbnZhc19oYW5kbGVyLmh0bWwoKSlcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudC5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldCgwKS5wcmVwZW5kKGNhbnZhcylcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ0bi5idXR0b24oJ3Jlc2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjc2VuZC1yZXBvcnQnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsb2FkJykuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICB9XG5cbiAgICB9KTtcbiIsImV4cG9ydCBjb25zdCBBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCA9ICdBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCc7XHJcbmV4cG9ydCBjb25zdCBERUxUQV9USU1FX0FUVFJJQlVURSA9IDE5O1xyXG4iLCIvKipcclxuICogQ29sbGFwc2Ugc3RhdGVcclxuICpcclxuICogQHBhcmFtIGVcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgnLmFjdGlvbi10eXBlLXN0YXRlJyk7XHJcbiAgICBwYXJlbnQudG9nZ2xlQ2xhc3MoJ2Rvd24nKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENvbGxhcHNlIHN0YXRlc1xyXG4gKlxyXG4gKiBAcGFyYW0gZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCgnLmFjdGlvbi10eXBlLXN0YXRlJykudG9nZ2xlQ2xhc3MoJ2Rvd24nKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xyXG5pbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIFN0YXRlIG9mIHRoZSBBY3Rpb24gVHlwZVxyXG4gKiBhdCB0aGUgbW9kYWxcclxuICogd2l0aCBjb25maXJtXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50RWxlbWVudC5jbG9zZXN0KCcuYWN0aW9uLXR5cGUtc3RhdGUnKTtcclxuXHJcbiAgICBpZiAoIWN1cnJlbnRFbGVtZW50LmRhdGEoJ2lkJykpIHtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsIHt9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXHJcbiAgICAgICAgLnNpemUoU0laRVMuc20pXHJcbiAgICAgICAgLmhlYWRlcignQXJlIHlvdSBzdXJlPycpXHJcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XHJcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInLFxyXG4gICAgICAgICAgICAndGV4dCc6ICdEZWxldGUnLFxyXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcclxuICAgICAgICAgICAgJ2NsaWNrJzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3IFJlcXVlc3RCdWlsZGVyKGN1cnJlbnRFbGVtZW50LmRhdGEoJ3VybCcpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXRob2QoJ0RFTEVURScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3MoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLm1vZGFsKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7QUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUR9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBpbmRleGVzIG9mIHRoZSBzdGF0ZXNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDE7XHJcblxyXG4gICAgICAgICQoJy5pbmRleCcpLmVhY2goKF8sIGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgJChpdGVtKS52YWwoaW5kZXgrKyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB1cGRhdGVJbmRleGVzIGZyb20gXCIuL2xpc3RlbmVycy91cGRhdGVJbmRleGVzXCI7XHJcbmltcG9ydCBjb2xsYXBzZVN0YXRlIGZyb20gXCIuL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVcIjtcclxuaW1wb3J0IGNvbGxhcHNlU3RhdGVzIGZyb20gXCIuL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzXCI7XHJcbmltcG9ydCByZW1vdmVBY3Rpb25UeXBlU3RhdGUgZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlXCI7XHJcbmltcG9ydCB7REVMVEFfVElNRV9BVFRSSUJVVEV9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIGluZGV4ZXNcclxuICovXHJcbnVwZGF0ZUluZGV4ZXMoKTtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLm9uKCdjbGljaycsICcjcHJvZHVjdF9pZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJvZHVjdF9pZCcpO1xyXG4gICAgICAgICQoJyNwcm9kdWN0X2lkJykucHJldignLnNlbGVjdDItY29udGFpbmVyJykuZmluZCgnLnNlbGVjdDItc2VhcmNoX19maWVsZCcpLmZvY3VzKClcclxuICAgIH0pXHJcblxyXG4gICAgLm9uKCdjaGFuZ2UnLCAnW25hbWUkPVwiW3RpbWVfdHlwZV1cIl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudExpID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdXCJdJyk7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lRGlzcGxheSA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdW2Rpc3BsYXldXCJdJyk7XHJcblxyXG4gICAgICAgIGRlbHRhVGltZURpc3BsYXkudmFsKGRlbHRhVGltZUhpZGRlbi5kYXRhKCd2YWx1ZScpIC8gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSkpO1xyXG4gICAgfSlcclxuXHJcbiAgICAub24oJ2lucHV0JywgJ1tuYW1lJD1cIlthdHRyaWJ1dGVzXVsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVt2YWx1ZV1bZGlzcGxheV1cIl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudExpID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVUeXBlID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJykudmFsKCk7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lSGlkZGVuID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlthdHRyaWJ1dGVzXVsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVt2YWx1ZV1cIl0nKTtcclxuXHJcbiAgICAgICAgZGVsdGFUaW1lSGlkZGVuLnZhbCgkKHRoaXMpLnZhbCgpICogdGltZVR5cGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbGxhcHNlIG9uZSBzdGF0ZVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5jb2xsYXBzZS1saW5rJywgY29sbGFwc2VTdGF0ZSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbGxhcHNlIGFsbCBzdGF0ZXNcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1zdGF0ZXMnLCBjb2xsYXBzZVN0YXRlcylcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBzdGF0ZVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5ybS1hY3Rpb24tdHlwZS1zdGF0ZXMnLCByZW1vdmVBY3Rpb25UeXBlU3RhdGUpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcclxuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcclxuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvd1xyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLnNhdmUtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dFwiKSk7XHJcblxyXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcclxuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICBjb250YWluZXIuZmluZCgndHIuY2hhbmdlZCcpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0aGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnNhdmUtcGFnZScsIHNhdmVTdGF0ZSk7XHJcbiIsImV4cG9ydCBjb25zdCBBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSA9ICdBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSc7XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7QU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSwgc2VsZik7XHJcblxyXG4gICAgICAgICQoJy5kYXRldGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcclxuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXHJcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9DUkVBVEVELCBDTE9TRV9BV0FSRF9NT0RBTH0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XHJcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XHJcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgYW5ub3VuY2VtZW50XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZCh0aGlzKSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBhd2FyZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcykoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxyXG4gICAgICovXHJcbiAgICAucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQ0xPU0VfQVdBUkRfTU9EQUwsIChkYXRhLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4vKipcclxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cclxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXHJcbiAqL1xyXG4kKCcuc2hvdy1mb3JtJylcclxuICAgIC5jbGljayhzaG93Rm9ybSk7XHJcbiIsIlxyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAub24oJ2NsaWNrJywgJy50b2dnbGVfaWRzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykubmV4dCgpLmhlaWdodCgpID4gMCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgnSGlkZScsICdTaG93JykpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5oZWlnaHQoMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCQodGhpcykudGV4dCgpLnJlcGxhY2UoJ1Nob3cnLCAnSGlkZScpKTtcclxuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgnU2hvdycsICdIaWRlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLmhlaWdodCgnMTAwJScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcclxuICogU1VCX1RZUEVTIC0gaXQgaXMgYSBnbG9iYWwgb2JqZWN0XHJcbiAqIEluaXRlZCBpbiBhc3NldC9mb3JtLmJsYWRlLnBocFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgc2V0U3VidHlwZXModGhpcy52YWx1ZSwgdGhpcy5kYXRhc2V0LnN1YnR5cGUpO1xyXG59XHJcblxyXG5jb25zdCBhc3NldEZvcm1TdWJ0eXBlID0gJChcIiNzdWJ0eXBlXCIpO1xyXG5jb25zdCBhc3NldEZvcm1BY3Rpb25UeXBlID0gJCgnI2Fzc2V0LWZvcm0tYWN0aW9uLXR5cGUnKTtcclxuY29uc3QgYXNzZXRGb3JtQ29sbGVjdGlvbiA9ICQoJyNhc3NldC1mb3JtLWNvbGxlY3Rpb24nKTtcclxuY29uc3QgcHJpY2VzID0gJCgnLnByaWNlcycpO1xyXG5cclxuZnVuY3Rpb24gc2V0U3VidHlwZXModHlwZSwgc3VidHlwZSkge1xyXG4gICAgYXNzZXRGb3JtU3VidHlwZVxyXG4gICAgICAgIC5lbXB0eSgpXHJcbiAgICAgICAgLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICBkYXRhOiBTVUJfVFlQRVNbdHlwZV1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC52YWwoc3VidHlwZSlcclxuICAgICAgICAuY2hhbmdlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IHN0YXRlXHJcbiAgICAgKi9cclxuICAgIGhpZGUoYXNzZXRGb3JtQWN0aW9uVHlwZSk7XHJcbiAgICBoaWRlKGFzc2V0Rm9ybUNvbGxlY3Rpb24pO1xyXG4gICAgc2hvdyhwcmljZXMpO1xyXG5cclxuICAgIHN3aXRjaCAocGFyc2VJbnQodHlwZSkpIHtcclxuXHJcbiAgICAgICAgLy8gRnVybml0dXJlXHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBzaG93KGFzc2V0Rm9ybUFjdGlvblR5cGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gQ2xvdGhlc1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgc2hvdyhhc3NldEZvcm1Db2xsZWN0aW9uKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIEJvZHkgUGFydFxyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgaGlkZShwcmljZXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmFkZENsYXNzKCdoaWRlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3coZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG59IiwiLyoqXHJcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYXNzZXRzIGlkcyB0byBjbGlwYm9hcmRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5QXNzZXRzKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBhc3NldElkc0ZpZWxkID0gJCgndGV4dGFyZWFbbmFtZT1cImFzc2V0X2lkc1wiXScpO1xyXG4gICAgY29uc3Qgd2l0aE5hbWUgPSAkKCdpbnB1dFtuYW1lPVwid2l0aF9uYW1lXCJdJyk7XHJcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcclxuXHJcbiAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQoaXRlbSkpO1xyXG4gICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xyXG4gICAgICAgIGxldCBhc3NldE5hbWUgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LW5hbWUnKTtcclxuICAgICAgICBpZihhc3NldElkKSB7XHJcbiAgICAgICAgICAgIGlmKHdpdGhOYW1lLnByb3AoXCJjaGVja2VkXCIpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKCdcXG4nICsgYXNzZXRJZCArICcgJyArIGFzc2V0TmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICBpZiAoYXNzZXRJZHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XHJcbiAgICAgICAgICAgIGxldCBhc3NldE5hbWUgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LW5hbWUnKTtcclxuICAgICAgICAgICAgaWYoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYod2l0aE5hbWUucHJvcChcImNoZWNrZWRcIikgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goJ1xcbicgKyBhc3NldElkICsgJyAnICsgYXNzZXROYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzc2V0SWRzRmllbGQudmFsKGFzc2V0SWRzKTtcclxuICAgIGFzc2V0SWRzRmllbGQuc2VsZWN0KCk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhhbmRsZXIgZm9yIGRvd25sb2FkIGFzc2V0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkQXNzZXRzKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBhc3NldElkcyA9IFtdO1xyXG5cclxuICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJChpdGVtKSk7XHJcbiAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XHJcbiAgICAgICAgaWYoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgaWYgKGFzc2V0SWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xyXG4gICAgICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcclxuICAgICAgICAgICAgaWYoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB3aW5kb3cubG9jYXRpb24gPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJykgKyAnJmlkcz0nICsgYXNzZXRJZHMuam9pbignLCcpO1xyXG59XHJcbiIsImltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIG5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmhyZWYpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgJCgnI2NvbGxlY3Rpb24tbnVtYmVyJylcclxuICAgICAgICAgICAgICAgIC52YWwocmVzdWx0LmNvbGxlY3Rpb25faWQpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59IiwiaW1wb3J0IHtVUERBVEVfU0FWRV9BTExfQlVUVE9OfSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XHJcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbi8qKlxyXG4gKiBNYXJrIGNoYW5nZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZCAoKSB7XHJcbiAgICBpZigkKHRoaXMpLmF0dHIoJ3R5cGUnKSAhPSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpO1xyXG4gICAgICAgIHBhcmVudENvbnRhaW5lci5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKFVQREFURV9TQVZFX0FMTF9CVVRUT04pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XHJcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XHJcbmltcG9ydCB1cGRhdGVTYXZlQWxsQnV0dG9uIGZyb20gXCJsaXN0ZW5lcnMvdXBkYXRlU2F2ZUFsbEJ1dHRvblwiO1xyXG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XHJcbmltcG9ydCBnZXRMYXN0Q29sbGVjdGlvbk51bWJlciBmcm9tIFwiLi9oYW5kbGVycy9nZXRMYXN0Q29sbGVjdGlvbk51bWJlclwiO1xyXG5pbXBvcnQge2NvcHlBc3NldHN9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBc3NldHNcIjtcclxuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0RFTEVURSwgQVdBUkRfQ1JFQVRFRCwgQ0xPU0VfQVdBUkRfTU9EQUx9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge21hcmtDaGFuZ2VkfSBmcm9tIFwiLi9oYW5kbGVycy9tYXJrQ2hhbmdlZFwiO1xyXG5pbXBvcnQge2Rvd25sb2FkQXNzZXRzfSBmcm9tIFwiLi9oYW5kbGVycy9kb3dubG9hZEFzc2V0c1wiO1xyXG5pbXBvcnQge1VQREFURV9TQVZFX0FMTF9CVVRUT059IGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcclxuaW1wb3J0IHtERUxUQV9USU1FX0FUVFJJQlVURX0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XHJcblxyXG4kKCcjYXNzZXRzLXRhYmxlJylcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZScsIGF3YXJkQ3JlYXRlKVxyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlJywgYXdhcmREZWxldGUpO1xyXG5cclxuJCgnI2Fzc2V0LWZvcm0tdHlwZScpXHJcbiAgICAuY2hhbmdlKGNoYW5nZVR5cGUpXHJcbiAgICAuY2hhbmdlKCk7XHJcblxyXG4kKCcjZ2V0LWxhc3QtY29sbGVjdGlvbi1udW1iZXInKS5jbGljayhnZXRMYXN0Q29sbGVjdGlvbk51bWJlcik7XHJcblxyXG5cclxuJChkb2N1bWVudClcclxuICAgIC8qKlxyXG4gICAgICogQ29weSBhc3NldHMgaWRzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmNvcHktYXNzZXRzJywgY29weUFzc2V0cylcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXIgZm9yIGRvd25sb2FkIGFzc2V0c1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kb3dubG9hZC1hc3NldHMnLCBkb3dubG9hZEFzc2V0cylcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBhbm5vdW5jZW1lbnRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC5vbignY2hhbmdlJywgJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZCA9ICQodGhpcykuY2xvc2VzdCgndGQnKTtcclxuICAgICAgICBjb25zdCBkZWx0YVRpbWVIaWRkZW4gPSBjdXJyZW50VGQuZmluZCgnW25hbWUkPVwiWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddXCJdJyk7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lRGlzcGxheSA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bZGlzcGxheV1cIl0nKTtcclxuXHJcbiAgICAgICAgZGVsdGFUaW1lRGlzcGxheS52YWwoZGVsdGFUaW1lSGlkZGVuLmRhdGEoJ3ZhbHVlJykgLyBwYXJzZUludCgkKHRoaXMpLnZhbCgpKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC5vbignaW5wdXQnLCAnW25hbWUkPVwiWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW2Rpc3BsYXldXCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZCA9ICQodGhpcykuY2xvc2VzdCgndGQnKTtcclxuICAgICAgICBjb25zdCB0aW1lVHlwZSA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbdGltZV90eXBlXVwiXScpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11cIl0nKTtcclxuXHJcbiAgICAgICAgZGVsdGFUaW1lSGlkZGVuLnZhbCgkKHRoaXMpLnZhbCgpICogdGltZVR5cGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBhd2FyZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcykoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJy5mYXN0LXNhdmUtY29udGFpbmVyIGlucHV0LCAuZmFzdC1zYXZlLWNvbnRhaW5lciBzZWxlY3QsIC5mYXN0LXNhdmUtY29udGFpbmVyIHRleHRhcmVhJywgbWFya0NoYW5nZWQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxyXG4gICAgICovXHJcbiAgICAucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICB1cGRhdGVTYXZlQWxsQnV0dG9uKCk7XHJcblxyXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShDTE9TRV9BV0FSRF9NT0RBTCwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuIiwiZXhwb3J0IGNvbnN0IEFXQVJEX0NSRUFURSA9ICdBV0FSRF9DUkVBVEUnO1xuZXhwb3J0IGNvbnN0IEFXQVJEX0NSRUFURUQgPSAnQVdBUkRfQ1JFQVRFRCc7XG5leHBvcnQgY29uc3QgQVdBUkRfREVMRVRFID0gJ0FXQVJEX0RFTEVURSc7XG5leHBvcnQgY29uc3QgQ0xPU0VfQVdBUkRfTU9EQUwgPSAnQ0xPU0VfQVdBUkRfTU9EQUwnO1xuZXhwb3J0IGNvbnN0IFNIT1dfUkVQT1JUX1BBVEggPSAnU0hPV19SRVBPUlRfUEFUSCc7XG4iLCIvKipcclxuICogU2hvdyBmb3JtIGV2ZW50XHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQkFOTkVSX1NIT1dfRk9STSA9ICdCQU5ORVJfU0hPV19GT1JNJztcclxuXHJcbi8qKlxyXG4gKiBJZCBvZiB0eXBlJ3Mgc2VsZWN0XHJcbiAqXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVFlQRV9TRUxFQ1RfSUQgPSAnYmFubmVyLXR5cGUnO1xyXG4iLCJpbXBvcnQge1RZUEVfU0VMRUNUX0lEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogQ2hhbmdlIHR5cGUgaGFuZGxlclxyXG4gKiBIaWRlL3Nob3cgc29tZSBmaWVsZHNcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChUWVBFX1NFTEVDVF9JRCk7XHJcblxyXG4gICAgaWYgKCFzZWxlY3QgfHwgc2VsZWN0LnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3Qub3B0aW9ucy5sZW5ndGggJiYgc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcclxuXHJcbiAgICAgICAgJCgnLmJhbm5lci10eXBlJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKCcuYmFubmVyLXR5cGUtJyArIHNlbGVjdGVkRWxlbWVudC52YWx1ZSkucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xyXG5pbXBvcnQge0JBTk5FUl9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcclxuXHJcbi8qKlxyXG4gKiBTaG93IGZvcm0gaGFuZGxlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEcm9wem9uZSBJbml0XHJcbiAgICAgKi9cclxuICAgIGRyb3Bab25lSW5pdChCQU5ORVJfU0hPV19GT1JNKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXQgc2hvd0Zvcm0gbGlzdGVuZXJcclxuICAgICAqL1xyXG4gICAgc2hvd0Zvcm0oKTtcclxufVxyXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xyXG5pbXBvcnQge0JBTk5FUl9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4uL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiBTaG93IGZvcm0gbGlzdGVuZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShCQU5ORVJfU0hPV19GT1JNLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFR5cGUgc2VsZWN0IGNoYW5nZSB0cmlnZ2VyXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2hhbmdlVHlwZSgpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEYXRlcyBpbml0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJCgnLmJhbm5lci1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xyXG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcclxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2hhbmRsZXJzL3Nob3dGb3JtXCI7XHJcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcclxuaW1wb3J0IHtUWVBFX1NFTEVDVF9JRH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogU2hvdyBlZGl0IGZvcm0gb2YgYSBiYW5uZXJcclxuICovXHJcbiQoJy5zaG93LWZvcm0nKS5jbGljayhzaG93Rm9ybSgpKTtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgdHlwZSBoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJyMnICsgVFlQRV9TRUxFQ1RfSUQsIGNoYW5nZVR5cGUpO1xyXG4iLCIvKipcclxuICogSGFuZGxlciBmb3IgY29weSBhZHAgaWRzIHRvIGNsaXBib2FyZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBZHAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYWRwSWRzRmllbGQgPSAkKCdpbnB1dFtuYW1lPVwiYWRwX2lkc1wiXScpO1xyXG4gICAgbGV0IGFkcElkcyA9IFtdO1xyXG5cclxuICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICBsZXQgYWRwSWQgPSAkKGl0ZW0pLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgaWYoYWRwSWQpIHtcclxuICAgICAgICAgICAgYWRwSWRzLnB1c2goYWRwSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgaWYgKGFkcElkcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgICAgIGxldCBhZHBJZCA9ICQoaXRlbSkuZGF0YSgnaWQnKTtcclxuICAgICAgICAgICAgaWYgKGFkcElkKSB7XHJcbiAgICAgICAgICAgICAgICBhZHBJZHMucHVzaChhZHBJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZHBJZHNGaWVsZC52YWwoYWRwSWRzKTtcclxuICAgIGFkcElkc0ZpZWxkLnNlbGVjdCgpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgLy8gYWRwSWRzRmllbGQudmFsKFtdKTtcclxufVxyXG4iLCIvKipcclxuICogSGFuZGxlciBmb3IgY29weSBhc3NldHMgaWRzIHRvIGNsaXBib2FyZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBc3NldHMoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGFzc2V0SWRzRmllbGQgPSAkKCdpbnB1dFtuYW1lPVwiYXNzZXRfaWRzXCJdJyk7XHJcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcclxuXHJcbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XHJcbiAgICAgICAgaWYoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgaWYgKGFzc2V0SWRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XHJcbiAgICAgICAgICAgIGlmKGFzc2V0SWQpIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3NldElkc0ZpZWxkLnZhbChhc3NldElkcyk7XHJcbiAgICBhc3NldElkc0ZpZWxkLnNlbGVjdCgpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBIYW5kbGVyIGZvciBkb3dubG9hZCBhZHBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEFkcChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgYWRwSWRzID0gW107XHJcbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XHJcbiAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xyXG4gICAgICAgIGlmKGFkcElkKSB7XHJcbiAgICAgICAgICAgIGFkcElkcy5wdXNoKGFkcElkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIGlmIChhZHBJZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xyXG4gICAgICAgICAgICBpZiAoYWRwSWQpIHtcclxuICAgICAgICAgICAgICAgIGFkcElkcy5wdXNoKGFkcElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICQodGhpcykuZGF0YSgncm91dGUnKSArICcmaWRzPScgKyBhZHBJZHMuam9pbignLCcpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBIYW5kbGVyIG9mIGFyY2hpdmUgY2F0ZWdvcmllcyBvbiBhZHAgcGFnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBcmNoaXZlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcclxuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICQoJy5zaG93LWFyY2hpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkKCcuYXJjaGl2ZS1jYXRlZ29yaWVzLWxpc3QnKS5odG1sKCcnKTtcclxufVxyXG4iLCIvKipcclxuICogSGFuZGxlciBvZiB0YXNrcyBvbiBhZHAgcGFnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUYXNrcyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkKCcuc2hvdy10YXNrcycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICQoJy50YXNrcy1saXN0JykuaGlkZSgnc2xvdycpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBIYW5kbGVyIGZvciBzZWxlY3Qgcm93IGJ5IGZ1bGwgdGQgYXJlYVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFJvdyhlKSB7XHJcbiAgICBpZiAoISQoZS50YXJnZXQpLmhhc0NsYXNzKCdmb3ItY29weScpKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gJCh0aGlzKS5maW5kKCcuZm9yLWNvcHknKTtcclxuXHJcbiAgICAgICAgaWYoY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVyIG9mIGFyY2hpdmUgY2F0ZWdvcmllcyBvbiBhZHAgcGFnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBcmNoaXZlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcclxuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICQoJy5oaWRlLWFyY2hpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICBcclxuICAgIGxldCBhY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJyk7XHJcbiAgICBuZXcgaHR0cChhY3Rpb24pXHJcbiAgICAgICAgICAgIC5tZXRob2QoJ2dldCcpXHJcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICQoJy5hcmNoaXZlLWNhdGVnb3JpZXMtbGlzdCcpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc2VuZCgpO1xyXG4gICAgXHJcbn1cclxuIiwiLyoqXHJcbiAqIEhhbmRsZXIgb2YgdGFza3Mgb24gYWRwIHBhZ2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza3MoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgJCgnLmhpZGUtdGFza3MnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAkKCcudGFza3MtbGlzdCcpLnNob3coJ3Nsb3cnKTtcclxufVxyXG4iLCIvL2ltcG9ydCB7YnVuZGxlVmVyc2lvblNlbGVjdH0gZnJvbSBcIi4vaGFuZGxlcnMvYnVuZGxlVmVyc2lvblNlbGVjdFwiO1xyXG5pbXBvcnQge3Nob3dBcmNoaXZlfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93QXJjaGl2ZVwiO1xyXG5pbXBvcnQge2hpZGVBcmNoaXZlfSBmcm9tIFwiLi9oYW5kbGVycy9oaWRlQXJjaGl2ZVwiO1xyXG5pbXBvcnQge2hpZGVUYXNrc30gZnJvbSBcIi4vaGFuZGxlcnMvaGlkZVRhc2tzXCI7XHJcbmltcG9ydCB7c2hvd1Rhc2tzfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93VGFza3NcIjtcclxuaW1wb3J0IHtjb3B5QWRwfSBmcm9tIFwiLi9oYW5kbGVycy9jb3B5QWRwXCI7XHJcbmltcG9ydCB7Y29weUFzc2V0c30gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFzc2V0c1wiO1xyXG5pbXBvcnQge3NlbGVjdFJvd30gZnJvbSBcIi4vaGFuZGxlcnMvc2VsZWN0Um93XCI7XHJcbmltcG9ydCB7ZG93bmxvYWRBZHB9IGZyb20gXCIuL2hhbmRsZXJzL2Rvd25sb2FkQWRwXCI7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5cclxuJChkb2N1bWVudClcclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnNob3ctYXJjaGl2ZScsIHNob3dBcmNoaXZlKVxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIGFyY2hpdmUgYWRwIGNhdGVnb3JpZXNcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hcmNoaXZlJywgaGlkZUFyY2hpdmUpXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgYWRwIHRhc2tzIGJ5IHN0YXR1cyBhbmQgdXNlclxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5oaWRlLXRhc2tzJywgaGlkZVRhc2tzKVxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy10YXNrcycsIHNob3dUYXNrcylcclxuICAgIC8qKlxyXG4gICAgICogQ29weSBhZHAgaWRzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmNvcHktYWRwJywgY29weUFkcClcclxuICAgIC8qKlxyXG4gICAgICogQ29weSBhc3NldHMgaWRzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmNvcHktYXNzZXRzJywgY29weUFzc2V0cylcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlciBmb3IgZG93bmxvYWQgYXNzZXRzXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRvd25sb2FkLWFkcCcsIGRvd25sb2FkQWRwKVxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IGhpZGUgc2lkZSBib3hcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1oaWRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKHBhcnNlSW50KCQoJy5zaWRlLWJveCcpLmNzcygncmlnaHQnKSkgPCAwKSB7XHJcbiAgICAgICAgICAgICQoJy5zaWRlLWJveCcpLmNzcygncmlnaHQnLCAwKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5zaWRlLWJveCcpLmNzcygncmlnaHQnLCAnLTEwMCUnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCByb3cgYnkgZnVsbCB0ZCBhcmVhXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmlkLWNvbCcsIHNlbGVjdFJvdyk7XHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IENBU0ggPSAnY2FzaF9hZGRlZCc7XHJcbmV4cG9ydCBjb25zdCBDT0lOID0gJ2NvaW5zX2FkZGVkJztcclxuZXhwb3J0IGNvbnN0IEFTU0VUID0gJ2Fzc2V0c19hZGRlZCc7XHJcbiIsImltcG9ydCB7Q0FTSH0gZnJvbSBcIm1vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHtDT0lOfSBmcm9tIFwibW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge0FTU0VUfSBmcm9tIFwibW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL2NvbnN0YW50c1wiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBjdXJzb3IgdG8gcGFyZW50IG5vZGVcclxuICAgICAqL1xyXG4gICAgLm9uKCdtb3VzZWVudGVyJywgJ3RkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaWx0ZXIgc2VsZWN0IG9wdGlvbnMgYnkgc2VsZWN0ZWQgc291cmNlXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJyNmaWx0ZXJfc291cmNlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZVZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgJChcIiNmaWx0ZXJfYWN0aW9uXCIpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICBtYXRjaGVyOiBmdW5jdGlvbiAocGFyYW1zLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlVmFsICE9PSAndXNlcl9kZWJ1ZycgJiYgJC5pbkFycmF5KGRhdGEuaWQsIFtDQVNILCBDT0lOLCBBU1NFVF0pID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIGRlcGxveSBpbmZvXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAndGQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9ICQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJyk7XHJcblxyXG4gICAgICAgIGlmICh3cmFwcGVyICYmIHdyYXBwZXIuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbicpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4iLCJleHBvcnQgY29uc3QgQ09MTEVDVElPTl9TSE9XX0ZPUk0gPSAnQ09MTEVDVElPTl9TSE9XX0ZPUk0nO1xyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XHJcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xyXG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xyXG5cclxuY29uc3QgYXNzZXRQcmV2aWV3VGVtcGxhdGUgPSAkKCcjYXNzZXQtcHJldmlldy10ZW1wbGF0ZScpLmh0bWwoKTtcclxuXHJcbi8qKlxyXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxyXG4gKlxyXG4gKiBAcGFyYW0gZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XHJcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2F2ZWRJdGVtLmhhc0NsYXNzKCdwcm9ncmVzcycpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2F2ZWRJdGVtLmFkZENsYXNzKCdwcm9ncmVzcycpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNoYW5nZWQgZGF0YVxyXG4gICAgICovXHJcbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtSXRlbXMpO1xyXG5cclxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XHJcbiAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcclxuICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBmb3JtSXRlbXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZW0uaGFzQ2xhc3MoJ2Fzc2V0LWlkJykgJiYgISFyZXNwb25zZS5hc3NldHNbY3VycmVudEl0ZW0udmFsKCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFzc2V0ID0gcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLnNsb3QnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmFzc2V0LXByZXZpZXcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChhc3NldFByZXZpZXdUZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAoJyV1cmwlJywgXCJnXCIpLCBjdXJyZW50QXNzZXQucHJldmlld191cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJXRpdGxlJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0Lm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKipcclxuICogSGlkZSBhZGRpdGlvbmFsIHJvd3NcclxuICpcclxuICogQHBhcmFtIGVcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICQoJy5hZGRpdGlvbmFsLWRhdGEnKS50b2dnbGVDbGFzcygnaGlkZScpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKipcclxuICogTWFyayBpbnB1dCBhcyBjaGFuZ2VkXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbn1cclxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xyXG5cclxuLyoqXHJcbiAqIFNvcnRhYmxlIEluaXRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgIG5ldyBTb3J0YWJsZShfdGhpcywge1xyXG4gICAgICAgIGdyb3VwOiBfdGhpcy5kYXRhc2V0Lmdyb3VwLFxyXG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxyXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICQoZS50YXJnZXQpLmZpbmQoX3RoaXMuZGF0YXNldC5wb3NpdGlvbikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChwb3NpdGlvbi52YWwoKSkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udmFsKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xyXG5pbXBvcnQge0NPTExFQ1RJT05fU0hPV19GT1JNfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlXCI7XHJcbmltcG9ydCBtYXJrSW5wdXRBc0NoYW5nZWQgZnJvbSBcIi4vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkXCI7XHJcbmltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XHJcbmltcG9ydCBoaWRlQWRkaXRpb25hbFJvd3MgZnJvbSBcIi4vaGFuZGxlcnMvaGlkZUFkZGl0aW9uYWxSb3dzXCI7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG4vKipcclxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcclxuICovXHJcbiQoJy5zaG93LWZvcm0nKS5jbGljayhkcm9wWm9uZUluaXQoQ09MTEVDVElPTl9TSE9XX0ZPUk0pKTtcclxuXHJcbi8qKlxyXG4gKiBGYXN0IHNhdmUgY29sbGVjdGlvblxyXG4gKi9cclxuJCgnLmNvbGxlY3Rpb24tZmFzdC1zYXZlJykuY2xpY2soZmFzdFNhdmUpO1xyXG5cclxuLyoqXHJcbiAqIE1hcmsgaW5wdXRzIGFzIGNoYW5nZWRcclxuICovXHJcbiQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXQnKS5jaGFuZ2UobWFya0lucHV0QXNDaGFuZ2VkKTtcclxuXHJcbi8qKlxyXG4gKiBTb3J0YWJsZSBpbml0XHJcbiAqL1xyXG4kKCcuc29ydGFibGUnKS5lYWNoKHNvcnRhYmxlSW5pdCk7XHJcblxyXG4vKipcclxuICogSGlkZSBhZGRpdGlvbmFsIHJvd3NcclxuICovXHJcbiQoJy5oaWRlLXNsb3RzJykuY2xpY2soaGlkZUFkZGl0aW9uYWxSb3dzKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXHJcbiAqIEFkZCByb3dzIHRvIHRoZSBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJvdygpIHtcclxuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNjcm9wcyA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjY3JvcF90ZW1wbGF0ZScpLmh0bWwoKTtcclxuXHJcbiAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuY3JvcF9pZCcpLnRleHQoKTtcclxuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcclxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVjcm9wJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIERlbGV0ZSByb3dcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUm93KCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge2FkZFJvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkUm93XCI7XHJcbmltcG9ydCB7ZGVsZXRlUm93fSBmcm9tIFwiLi9oYW5kbGVycy9kZWxldGVSb3dcIjtcclxuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcclxuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcclxuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtBV0FSRF9DUkVBVEVELCBBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1yb3cnLCBhZGRSb3cpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBkZWxldGVSb3cpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGF3YXJkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xyXG5cclxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKHRoaXMpKCk7XHJcblxyXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEVELCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEVELCBzZWxmKTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJvdy5hZGRDbGFzcygnY2hhbmdlZCcpKTtcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgYXdhcmRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XHJcblxyXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQodGhpcykoKTtcclxuXHJcbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJvdy5hZGRDbGFzcygnY2hhbmdlZCcpKTtcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZGFpbHlfbG9vdCA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjZGFpbHlfbG9vdF90ZW1wbGF0ZScpLmh0bWwoKTtcclxuICAgIGxldCBsYXN0SURTID0gW107XHJcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAxO1xyXG4gICAgdGJvZHkuZmluZChcInRyXCIpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICBpZihwYXJzZUludCgkKGl0ZW0pLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoKSkpe1xyXG4gICAgICAgICAgICBsYXN0SURTLnB1c2gocGFyc2VJbnQoJChpdGVtKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihsYXN0SURTLmxlbmd0aCl7XHJcbiAgICAgICAgaW5jcmVtZW50SWQgPSAoTWF0aC5tYXguYXBwbHkoTWF0aCxsYXN0SURTKSArIDEpIHx8IDE7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lcm93SW5kZXglL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xyXG4gICAgICAgIHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbChpICsgaW5jcmVtZW50SWQpO1xyXG5cclxuICAgICAgICB0Ym9keS5maW5kKCcuZGF0ZXBpY2tlcicpXHJcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcclxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XHJcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5kYWlseS1sb290LXNhdmUtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBkYXRhID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgaWYoIWRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcclxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcclxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCd0ci5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XHJcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuXHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0aGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU3RhdGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcucmVtb3ZlLWVtYmVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2ggcGFnZSB0eXBlXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnRvZ2dsZS1wYWdlLXR5cGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDAsIGxvY2F0aW9uLnBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykpICsgJCh0aGlzKS5kYXRhKCdocmVmJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoJyNjb21tb24tbWVudScpLmZpbmQoJy5jb21tb24tbWVudS1zZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZigkKHRoaXMpLmZpbmQoJ2xpJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY29tbW9uLW1lbnUtc2VjdGlvbicpLmhpZGUoKVxyXG4gICAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbi8qKlxyXG4gKiBTaG93IERlcGxveSBTdGF0dXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXBsb3lTdGF0dXMoKSB7XHJcbiAgICBuZXcgaHR0cChERVBMT1lfU1RBVFVTX1JPVVRFKVxyXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAkKCcuZGVwbG95LXN0YXR1cycpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSAkKCcuZGVwbG95LXN0YXR1cycpLmZpbmQoJy5hY3RpdmUtZGVwbG95JykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICQoJy5kZXBsb3ktYnRuJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKCQoJy5kZXBsb3ktYnRuJykuaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtkZXBsb3lTdGF0dXMoKTt9LCAzMDAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcbn1cclxuIiwiXHJcbi8qKlxyXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcclxuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xyXG4gICAgdXJsICs9IFwiP2RpcmVjdGlvbj1cIiArIGRpcmVjdGlvbjtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKHtcclxuICAgICAgICBpZDogJ2RlcGxveSdcclxuICAgIH0sICdEZXBsb3knLCB1cmwpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBIYW5kbGVyIGZvciBzaG93INCyZXBlbmRlbmN5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RlcGVuZGVuY3koZSkge1xyXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgY3VycmVudENvbmZpZyA9IGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJy5jb25maWctaXRlbS1ibG9jaycpLmRhdGEoJ21vZGVsJyk7XHJcbiAgICBsZXQgYWRkTW9kZSA9IGN1cnJlbnRFbGVtZW50LmlzKCc6Y2hlY2tlZCcpO1xyXG5cclxuICAgIG9uZUxldmVsU2hvdyhjdXJyZW50Q29uZmlnLCBhZGRNb2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25lTGV2ZWxTaG93KGNvbmZpZ05hbWUsIGFkZE1vZGUsIGxldmVsID0gMSkge1xyXG4gICAgaWYoREVQTE9ZX0RFUEVORFMuaGFzT3duUHJvcGVydHkoY29uZmlnTmFtZSkgJiYgbGV2ZWwgPCAxMCkge1xyXG4gICAgICAgIGxldCBjb25maWdCbG9jayA9ICQoJy5tb2RlbC0nICsgY29uZmlnTmFtZSk7XHJcbiAgICAgICAgaWYoYWRkTW9kZSkge1xyXG4gICAgICAgICAgICBjb25maWdCbG9jay5hZGRDbGFzcygnZGVwbG95LWNoYWluJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uZmlnQmxvY2sucmVtb3ZlQ2xhc3MoJ2RlcGxveS1jaGFpbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIERFUExPWV9ERVBFTkRTW2NvbmZpZ05hbWVdKSB7XHJcbiAgICAgICAgICAgIGxldCBkZXBlbmRDb25maWdOYW1lID0gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV1ba2V5XTtcclxuICAgICAgICAgICAgICAgIGxldCBjb25maWdCbG9jayA9ICQoJy5tb2RlbC0nICsgZGVwZW5kQ29uZmlnTmFtZSk7XHJcbiAgICAgICAgICAgIGlmKGFkZE1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLmFkZENsYXNzKCdkZXBsb3ktY2hhaW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLnJlbW92ZUNsYXNzKCdkZXBsb3ktY2hhaW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbmVMZXZlbFNob3coZGVwZW5kQ29uZmlnTmFtZSwgYWRkTW9kZSwgbGV2ZWwgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVyIGZvciBzaG93IGRlcGVuZGVuY3kgcG9wdXBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93RGVwZW5kZW5jeVBvcHVwKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gY3VycmVudEVsZW1lbnQucGFyZW50cygnLmNvbmZpZy1pdGVtLWJsb2NrJykuZGF0YSgnbW9kZWwnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRDb25maWdJZCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJy5jb25maWctaXRlbS1ibG9jaycpLmRhdGEoJ2lkJyk7XHJcbiAgICBsZXQgaWRzID0gW107XHJcbiAgICBpZihjdXJyZW50Q29uZmlnSWQpIHtcclxuICAgICAgICBpZHMucHVzaChjdXJyZW50Q29uZmlnSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJvb3RMZXZlbFNob3coY3VycmVudENvbmZpZywgaWRzKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9uZSBsZXZlbCBzaG93XHJcbiAqXHJcbiAqIEBwYXJhbSBjb25maWdOYW1lXHJcbiAqIEBwYXJhbSBkZXBlbmRDb25maWdOYW1lXHJcbiAqIEBwYXJhbSBsZXZlbFxyXG4gKiBAcGFyYW0gaWRSZXNwb25zZVxyXG4gKi9cclxuZnVuY3Rpb24gb25lTGV2ZWxTaG93KGNvbmZpZ05hbWUsIGRlcGVuZENvbmZpZ05hbWUsICBsZXZlbCA9IDEsIGlkUmVzcG9uc2UpIHtcclxuICAgIGlmKERFUExPWV9ERVBFTkRTLmhhc093blByb3BlcnR5KGNvbmZpZ05hbWUpICYmIGxldmVsIDwgMTApIHtcclxuICAgICAgICBsZXQgaWRzID0gaWRSZXNwb25zZS5pZHM7XHJcbiAgICAgICAgbGV0IHRleHRDbGFzcyA9ICcnO1xyXG4gICAgICAgIGlmKGlkUmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ25vdEltcGxlbWVudGVkJykpIHtcclxuICAgICAgICAgICAgdGV4dENsYXNzID0gJ3RleHQtbXV0ZWQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlzUmVjdXJzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgJCgnLmNoYWluLScgKyBjb25maWdOYW1lKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykucGFyZW50cygnLmNoYWluLScgKyBkZXBlbmRDb25maWdOYW1lKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpc1JlY3Vyc2lvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNoYWluLScgKyBkZXBlbmRDb25maWdOYW1lICsgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCInICsgdGV4dENsYXNzICsgJ1wiPicgKyBkZXBlbmRDb25maWdOYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPihSZWN1cnNpb24pPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj48YnI+Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZigkKHRoaXMpLmZpbmQoJy5jaGFpbi0nICsgZGVwZW5kQ29uZmlnTmFtZSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUgKyAnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIHRleHRDbGFzcyArICdcIj4nICsgZGVwZW5kQ29uZmlnTmFtZSArICc8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgKGlkcy5sZW5ndGggPiAwID8gJzxzcGFuIGNsYXNzPVwiZGVwZW5kLWlkc1wiPiAnICsgaWRzLmpvaW4oJywnKSArICc8L3NwYW4+JyA6ICcnKSAgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghaXNSZWN1cnNpb24pIHtcclxuICAgICAgICAgICAgZ2V0RGVwbG95TW9kZWxJZHMoZGVwZW5kQ29uZmlnTmFtZSwgbGV2ZWwsIGlkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFJvb3QgbGV2ZWwgc2hvd1xyXG4gKlxyXG4gKiBAcGFyYW0gY29uZmlnTmFtZVxyXG4gKiBAcGFyYW0gaWRzXHJcbiAqL1xyXG5mdW5jdGlvbiByb290TGV2ZWxTaG93KGNvbmZpZ05hbWUsIGlkcyA9IFtdKSB7XHJcbiAgICBuZXcgaHR0cChERVBMT1lfTU9ERUxfSURTX1JPVVRFKVxyXG4gICAgICAgIC5tZXRob2QoJ3Bvc3QnKVxyXG4gICAgICAgIC5kYXRhKHtcclxuICAgICAgICAgICAgJ2RpcmVjdGlvbic6IEFDVElWRV9ESVJFQ1RJT04sXHJcbiAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbCc6IGNvbmZpZ05hbWUsXHJcbiAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbElkcyc6IGlkc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWRzID0gcmVzcG9uc2UuaWRzIHx8IFtdO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVwbG95LWNoYWluLWJsb2NrXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICQoJy5kZXBsb3ktY2hhaW4tYmxvY2snKS5odG1sKCc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGNvbmZpZ05hbWUgKyAnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPHNwYW4+JyArIGNvbmZpZ05hbWUgKyAnPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZGVwZW5kLWlkc1wiPiAnICsgaWRzLmpvaW4oJywnKSArICc8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICAgICBuZXcgTW9kYWxCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgIC5oZWFkZXIoJ0RlcGxveSBkZXBlbmRlbmN5JylcclxuICAgICAgICAgICAgICAgIC5ib2R5KCQoJy5kZXBsb3ktY2hhaW4tYmxvY2snKSlcclxuICAgICAgICAgICAgICAgIC5tb2RhbCgpO1xyXG5cclxuICAgICAgICAgICAgZ2V0RGVwbG95TW9kZWxJZHMoY29uZmlnTmFtZSwgMSwgaWRzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZGVwbG95IG1vZGVsIGlkc1xyXG4gKlxyXG4gKiBAcGFyYW0gY29uZmlnTmFtZVxyXG4gKiBAcGFyYW0gbGV2ZWxcclxuICogQHBhcmFtIGlkc1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RGVwbG95TW9kZWxJZHMoY29uZmlnTmFtZSwgbGV2ZWwgPSAxLCBpZHMgPSBbXSkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIERFUExPWV9ERVBFTkRTW2NvbmZpZ05hbWVdKSB7XHJcbiAgICAgICAgbGV0IGRlcGVuZENvbmZpZ05hbWUgPSBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXVtrZXldO1xyXG5cclxuICAgICAgICBpZihpZHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIG5ldyBodHRwKERFUExPWV9NT0RFTF9JRFNfUk9VVEUpXHJcbiAgICAgICAgICAgICAgICAubWV0aG9kKCdwb3N0JylcclxuICAgICAgICAgICAgICAgIC5kYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAnZGlyZWN0aW9uJzogQUNUSVZFX0RJUkVDVElPTixcclxuICAgICAgICAgICAgICAgICAgICAnbW9kZWwnOiBkZXBlbmRDb25maWdOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbCc6IGNvbmZpZ05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RlcGVuZGVudE1vZGVsSWRzJzogaWRzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCBsZXZlbCArIDEsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc2VuZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCBsZXZlbCArIDEsIHsnaWRzJzogW119KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xyXG5pbXBvcnQge3Nob3dEZXBlbmRlbmN5fSBmcm9tIFwiLi9oYW5kbGVycy9zaG93RGVwZW5kZW5jeVwiO1xyXG5pbXBvcnQge3Nob3dEZXBlbmRlbmN5UG9wdXB9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dEZXBlbmRlbmN5UG9wdXBcIjtcclxuaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XHJcbmltcG9ydCB7ZGVwbG95U3RhdHVzfSBmcm9tIFwiLi9kZXBsb3lTdGF0dXNcIjtcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuXHJcbiQoZG9jdW1lbnQpXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXHJcbiAgICAvKipcclxuICAgICAqIFNhdmUgYWxsIHBhZ2VcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZmFzdC1zYXZlLXBhZ2UtY3VzdG9tJywgZmFzdFNhdmVQYWdlKVxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IGRlcGVuZGVuY3lcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuY29uZmlnLWNoZWNrYm94Jywgc2hvd0RlcGVuZGVuY3kpXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgZGVwZW5kZW5jeSBwb3B1cFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5zaG93LWRlcGVuZGVuY3knLCBzaG93RGVwZW5kZW5jeVBvcHVwKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2svdW5jaGVjayBhd2FyZCBkZXBlbmRlbmNpZXNcclxuICAgICAqL1xyXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmF3YXJkLWRlcGVuZGVuY3kgW3R5cGU9Y2hlY2tib3hdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5hd2FyZC1kZXBlbmRlbmN5IFt0eXBlPWNoZWNrYm94XScpLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xyXG4gICAgfSlcclxuXHJcbiAgICAucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBkZXBsb3lTdGF0dXMoKTtcclxuICAgIH0pO1xyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXHJcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxldmVscyBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHBhID4gdGJvZHknKTtcclxuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmRwYV9pZCcpLnZhbCgpO1xyXG4gICAgbGV0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xyXG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjZHBhX3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVkcGFfaWQlL2csIGkgKyBpbmNyZW1lbnRJZCk7XHJcblxyXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVEcGFTdGF0ZSAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcclxuICAgIGxldCBkYXRhID0gJCgnLmRwYS1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgICBuZXcgaHR0cChyb3V0ZSlcclxuICAgICAgICAubWV0aG9kKCdQVVQnKVxyXG4gICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xyXG5pbXBvcnQge3NhdmVEcGFTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZURwYVN0YXRlXCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIGRwYVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93IHRvIHRoZSBkcGEgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRwYS1zYXZlLXBhZ2UnLCBzYXZlRHBhU3RhdGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KTtcclxuIiwiLyoqXHJcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHllID4gdGJvZHknKTtcclxuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNkeWVfdGVtcGxhdGUnKS5odG1sKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XHJcblxyXG4gICAgICAgIGxldCBsYXN0Um93ID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuY3AyJyk7XHJcbiAgICAgICAgbGFzdFJvdy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG4gICAgICAgICAgICAkKGl0ZW0pLmNvbG9ycGlja2VyKHt9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBDaGFuZ2Ugcm93IGluZGV4XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJvd0luZGV4KCkge1xyXG4gICAgbGV0IHJvd0luZGV4ID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGxldCByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnaW5wdXQsIHNlbGVjdCcpO1xyXG5cclxuICAgIHJvdy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG4gICAgICAgIGxldCBvbGROYW1lID0gJChpdGVtKS5hdHRyKCduYW1lJyk7XHJcbiAgICAgICAgbGV0IG5ld05hbWUgPSBvbGROYW1lLnNsaWNlKDAsIDQpICsgcm93SW5kZXggKyAgb2xkTmFtZS5zbGljZShvbGROYW1lLmluZGV4T2YoJ10nKSk7XHJcbiAgICAgICAgJChpdGVtKS5hdHRyKCduYW1lJywgbmV3TmFtZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xyXG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcclxuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEWUVfQ09OVEFJTkVSX1NFTEVDVE9SID0gJy5keWUtc2F2ZS1wYWdlLWNvbnRhaW5lcic7XHJcblxyXG4vKipcclxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgZHllcyBwYWdlXHJcbiAqXHJcbiAqIEBwYXJhbSBlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcclxuICAgIGNvbnN0IHNhdmVkSXRlbSA9ICQoRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUik7XHJcblxyXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xyXG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XHJcblxyXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcclxuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xyXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcmsgZm9ybSdzIHRyIGFzIGNoYW5nZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZFRyKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbn1cclxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xyXG5pbXBvcnQge2NoYW5nZVJvd0luZGV4fSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VSb3dJbmRleFwiO1xyXG5pbXBvcnQgZHllU2F2ZVBhZ2UsIHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SLCBtYXJrQ2hhbmdlZFRyfSBmcm9tIFwiLi9oYW5kbGVycy9keWVTYXZlUGFnZVwiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXQgY29sb3ItcGlja2VyIGlucHV0c1xyXG4gICAgICovXHJcbiAgICAucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmNwMicpLmNvbG9ycGlja2VyKClcclxuICAgICAgICAgICAgLm9uKCdjcmVhdGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudClcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBNYXJrIHRyIGFzIGNoYW5nZWRcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAub24oJ2NoYW5nZScsIGAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkVHIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdpbnB1dCcsIGAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkVHIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZSByb3cgaW5kZXhcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYXNzZXRfaWQnLCBjaGFuZ2VSb3dJbmRleClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXHJcbiAgICAgKiBDaGFuZ2UgY291bnRlclxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxyXG4gICAgICovXHJcbiAgICAkKCcuZHllLXNhdmUtcGFnZScpLmNsaWNrKGR5ZVNhdmVQYWdlKTtcclxuIiwiZXhwb3J0IGNvbnN0IEdJRlRfV1JBUF9ST1dfQURERUQgPSAnR0lGVF9XUkFQX1JPV19BRERFRCc7XHJcbiIsImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBBc3NldCBJRCBjaGFuZ2VkXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50SW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgYXNzZXRJRCA9IGN1cnJlbnRJbnB1dC52YWwoKTtcclxuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRJbnB1dC5jbG9zZXN0KCd0cicpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgZHVwbGljYXRlZCBhc3NldHMgaWRzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGN1cnJlbnRBc3NldER1cGxpY2F0ZSA9ICQoJyNnaWZ0LXdyYXBzLWNvbnRhaW5lcicpLmZpbmQoJy5hc3NldC1pZCcpLmZpbHRlcigoXywgaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhc3NldElEID09PSBpdGVtLnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRBc3NldER1cGxpY2F0ZS5sZW5ndGggPiAxKXtcclxuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBhc3NldCAnICsgYXNzZXRJRH0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBpbnB1dHMgbmFtZXNcclxuICAgICAqL1xyXG4gICAgcGFyZW50LmZpbmQoJ2lucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lLnJlcGxhY2UoIC9cXFtbXFxkXStcXF0vZywgYFske2Fzc2V0SUR9XWApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgaHJlZiBvZiB0aGUgZGVsZXRlIGJ1dHRvblxyXG4gICAgICovXHJcbiAgICBwYXJlbnQuZmluZCgnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ocmVmID0gdGhpcy5ocmVmLnJlcGxhY2UoIC9cXC9bXFxkXSskL2csIGAvJHthc3NldElEfWApO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IHBvc2l0aW9uVXBkYXRlIGZyb20gXCIuLi9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlXCI7XHJcblxyXG4vKipcclxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgYWxsIHBhZ2VcclxuICpcclxuICogQHBhcmFtIGVcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhc3NldHMgPSB7fTtcclxuICAgICAgICAkKCcjZ2lmdC13cmFwcy1jb250YWluZXInKS5maW5kKCcuYXNzZXQtaWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGFzc2V0c1t0aGlzLnZhbHVlXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0c1t0aGlzLnZhbHVlXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGVycm9ySGFuZGxlcih7J21lc3NhZ2UnOiAnRHVwbGljYXRlIGFzc2V0ICcgKyBlcnIubWVzc2FnZX0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBvc2l0aW9uIHVwZGF0ZVxyXG4gICAgICovXHJcbiAgICBwb3NpdGlvblVwZGF0ZSgpO1xyXG5cclxuICAgIGZhc3RTYXZlUGFnZS5iaW5kKHRoaXMpKGUpO1xyXG59XHJcbiIsImltcG9ydCBjb25maXJtTW9kYWwgZnJvbSBcImhhbmRsZXJzL2NvbmZpcm1Nb2RhbFwiO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zdCBidXR0b25VcmwgPSB0aGlzLmhyZWYuc3BsaXQoJy8nKTtcclxuICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgndHInKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHBhcnNlSW50KGJ1dHRvblVybFtidXR0b25VcmwubGVuZ3RoIC0gMV0pID09PSAwKSB7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtTW9kYWwuYmluZCh0aGlzKShlKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xyXG5pbXBvcnQgcG9zaXRpb25VcGRhdGUgZnJvbSBcIm1vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGVcIjtcclxuXHJcbi8qKlxyXG4gKiBTb3J0YWJsZSBJbml0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICBuZXcgU29ydGFibGUoX3RoaXMsIHtcclxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcclxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFBvc2l0aW9uIHVwZGF0ZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLnBvc2l0aW9uJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9ICQoJyNwYWdlJykudmFsKCk7XHJcbiAgICAgICAgY29uc3QgcGFnZV9saW1pdCA9ICQoJ1tuYW1lPVwicGFnZV9saW1pdFwiXScpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAocGFyc2VJbnQocG9zaXRpb24udmFsKCkpICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbi52YWwoaW5kZXggKyAoKHBhZ2UgLSAxKSAqIHBhZ2VfbGltaXQpKTtcclxuICAgICAgICAgICAgcG9zaXRpb24uY2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtHSUZUX1dSQVBfUk9XX0FEREVEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogQWRkIG5ldyByb3cgdG8gZ3JpZFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEdJRlRfV1JBUF9ST1dfQURERUQsIGRhdGEgPT4ge1xyXG4gICAgICAgICQoJyNnaWZ0LXdyYXAtJyArIGRhdGEuZW1iZWRCbG9ja0lkKVxyXG4gICAgICAgICAgICAuZmluZCgnLmRhdGV0aW1lcGlja2VyJylcclxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxyXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcclxuaW1wb3J0IGFzc2V0Q2hhbmdlZCBmcm9tIFwiLi9oYW5kbGVycy9hc3NldENoYW5nZWRcIjtcclxuaW1wb3J0IGFkZFJvdyBmcm9tIFwiLi9saXN0ZW5lcnMvYWRkUm93XCI7XHJcbmltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XHJcbmltcG9ydCByZW1vdmVSb3cgZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlUm93XCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIGFzc2V0IGlkIGluIGlucHV0XHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJy5hc3NldC1pZCcsIGFzc2V0Q2hhbmdlZClcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1jb25maXJtLWFjdGlvbi1jdXN0b20nLCByZW1vdmVSb3cpO1xyXG5cclxuLyoqXHJcbiAqIEFkZCByb3cgbGlzdGVuZXJcclxuICovXHJcbmFkZFJvdygpO1xyXG5cclxuLyoqXHJcbiAqIFNvcnRhYmxlIGluaXRcclxuICovXHJcbiQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcclxuXHJcbi8qKlxyXG4gKiBTYXZlIGFsbCBwYWdlXHJcbiAqL1xyXG4kKCcuZmFzdC1zYXZlLXBhZ2UtY3VzdG9tJykuY2xpY2soZmFzdFNhdmVQYWdlKTsiLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogSGFuZGxlciBmb3Igc2hvdyBhc3NldFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBc3NldChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICBsZXQgYWN0aW9uID0gU1dPV19BU1NFVF9ST1VURSArICc/aWQ9JyArIGN1cnJlbnRFbGVtZW50LnZhbCgpO1xyXG4gICAgbmV3IGh0dHAoYWN0aW9uKVxyXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdkYXRhJykpIHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ25hbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LW5hbWUnKS5odG1sKHJlc3BvbnNlLmRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCdwcmV2aWV3X3VybCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtcHJldmlldyBpbWcnKS5hdHRyKCdzcmMnLCByZXNwb25zZS5kYXRhLnByZXZpZXdfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCd0cicpLmZpbmQoJy5hc3NldC1wcmV2aWV3IC5saXN0LXRodW1ibmFpbCcpLmRhdGEoJ2Z1bGwnLCByZXNwb25zZS5kYXRhLnByZXZpZXdfdXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcbn1cclxuIiwiXHJcbmltcG9ydCB7c2hvd0Fzc2V0fSBmcm9tIFwiLi9oYW5kbGVycy9zaG93QXNzZXRcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgYXNzZXRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmFzc2V0Jywgc2hvd0Fzc2V0KVxyXG5cclxuICAgICIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsb2NhbGl6YXRpb24gY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xyXG4gICAgbGV0IHRib2R5ID0gJCgnI2xvY2FsaXphdGlvbnMgPiB0Ym9keScpO1xyXG4gICAgbGV0IHRlbXBsYXRlID0gJCgnI2xvY2FsaXphdGlvbl90ZW1wbGF0ZScpLmh0bWwoKTtcclxuXHJcbiAgICB0Ym9keS5wcmVwZW5kKHRlbXBsYXRlKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFJlbW92ZSBub3Qgc2F2ZWQgcm93XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJvdyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBsb2NhbGl6YXRpb24gY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsaXphdGlvblN0YXRlIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50QnRuLmNsb3Nlc3QoJ3RyJyk7XHJcbiAgICBjb25zdCBjdXJyZW50S2V5ID0gcGFyZW50LmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykudmFsKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBkdXBsaWNhdGVkIGtleXNcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7alF1ZXJ5fVxyXG4gICAgICovXHJcbiAgICBjb25zdCBjdXJyZW50S2V5RHVwbGljYXRlID0gJCgnI2xvY2FsaXphdGlvbnMnKS5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLmZpbHRlcigoXywgaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50S2V5ID09PSBpdGVtLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoY3VycmVudEtleUR1cGxpY2F0ZS5sZW5ndGggPiAxKXtcclxuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBrZXkgJyArIGN1cnJlbnRLZXl9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHBhcmVudC5maW5kKCcuZWRpdGFibGUgaW5wdXQnKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHBhcmVudC5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge3NhdmVMb2NhbGl6YXRpb25TdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlXCI7XHJcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuaW1wb3J0IHtyZW1vdmVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZVJvd1wiO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxvY2FsaXphdGlvbnMgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5jcmVhdGUtcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0aGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlTG9jYWxpemF0aW9uU3RhdGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgdGhlIHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtcm93JywgcmVtb3ZlUm93KTtcclxuIiwiLyoqXHJcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1hZ2ljIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcclxuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtYWdpYyA+IHRib2R5Jyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnaW5wdXRbbmFtZT1cImlkXCJdJykudmFsKCk7XHJcbiAgICAgICAgbGV0IGluY3JlbWVudElkID0gcGFyc2VJbnQobGFzdElEKSB8fCAwO1xyXG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjbWFnaWNfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJW1hZ2ljX2lkJS9nLCArK2luY3JlbWVudElkKTtcclxuXHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTWFnaWNTdGF0ZSAoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gJCgnLm1hZ2ljLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xyXG5cclxuICAgIGRhdGEuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xyXG4gICAgICAgICQoaXRlbSkuYXR0cigncmVhZG9ubHknLCB0cnVlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXHJcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgICAgIC5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7c2F2ZU1hZ2ljU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlXCI7XHJcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0aGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlTWFnaWNTdGF0ZSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcclxuICAgICAqIENoYW5nZSBjb3VudGVyXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxyXG4gICAgfSk7XHJcbiIsImltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogU2hvdyBsYXN0IG1ha2V1cCBraXQgSURcclxuICpcclxuICogQHBhcmFtIGVcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIG5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmhyZWYpXHJcbiAgICAgICAgLnN1Y2Nlc3MocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgJCgnI2xhc3QtbWFrZXVwLWtpdC1pZCcpXHJcbiAgICAgICAgICAgICAgICAudmFsKHJlc3VsdC5tYWtldXBfa2l0X2lkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59IiwiaW1wb3J0IGdldExhc3RNYWtldXBLaXRJRCBmcm9tIFwiLi9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SURcIjtcclxuXHJcbi8qKlxyXG4gKiBTaG93IGxhc3QgbWFrZXVwIGtpdCBJRCBhdCB0aGUgYm9keSBwYXJ0cyBncmlkXHJcbiAqL1xyXG4kKCcjZ2V0LWxhc3QtbWFrZXVwLWtpdC1pZCcpXHJcbiAgICAuY2xpY2soZ2V0TGFzdE1ha2V1cEtpdElEKTtcclxuIiwiZXhwb3J0IGNvbnN0IE1BS0VVUF9LSVRfU0hPV19GT1JNID0gJ01BS0VVUF9LSVRfU0hPV19GT1JNJztcclxuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xyXG5pbXBvcnQge01BS0VVUF9LSVRfU0hPV19GT1JNfSBmcm9tIFwibW9kdWxlcy9tYWtldXAta2l0L2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFByZXZpZXcgSW1hZ2UgKERyb3Bab25lIGluaXQpXHJcbiAqL1xyXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KE1BS0VVUF9LSVRfU0hPV19GT1JNKSk7XHJcbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBpbmdyZWRpZW50IGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcclxuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsX2luZ3JlZGllbnRfZ3JvdXBzID4gdGJvZHknKTtcclxuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX2luZ3JlZGllbnRfZ3JvdXBzX3RlbXBsYXRlJykuaHRtbCgpO1xyXG5cclxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5ncm91cF9pZCcpLnRleHQoKTtcclxuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcclxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsLWluZ3JlZGllbnQtZ3JvdXAlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKipcclxuICogSGlkZSByb3dcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5ncmVkaWVudERlbGV0ZSgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xyXG5pbXBvcnQge2luZ3JlZGllbnREZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGVcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGluZ3JlZGllbnREZWxldGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxyXG4gICAgfSk7XHJcblxyXG4iLCIvKipcclxuICogQWRkIG5leHQgcm93cyB0byB0aGUgaW5ncmVkaWVudCBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWVhbF9pbmdyZWRpZW50cyA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF9pbmdyZWRpZW50c190ZW1wbGF0ZScpLmh0bWwoKTtcclxuXHJcbiAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuaW5ncmVkaWVudF9pZCcpLnRleHQoKTtcclxuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcclxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsLWluZ3JlZGllbnQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKipcclxuICogSGlkZSByb3dcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5ncmVkaWVudERlbGV0ZSgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xyXG5pbXBvcnQge2luZ3JlZGllbnREZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGVcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGluZ3JlZGllbnREZWxldGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcclxufSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXHJcbiAgICAgKiBDaGFuZ2UgY291bnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KTtcclxuXHJcbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtZWFsIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcclxuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsID4gdGJvZHknKTtcclxuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX3RlbXBsYXRlJykuaHRtbCgpO1xyXG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcubWVhbF9pZCcpLnRleHQoKTtcclxuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xyXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJW1lYWwlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xyXG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKipcclxuICogSGlkZSByb3dcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVhbERlbGV0ZSgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTWVhbFN0YXRlICgpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xyXG4gICAgY29uc3QgdGJvZHkgPSAkKCcubWVhbC1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9ICQoJy5tZWFsLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgIGlmKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBodHRwKHJvdXRlKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHRib2R5LmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcclxuICAgICAgICAkKGl0ZW0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xyXG5pbXBvcnQge21lYWxEZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL21lYWxEZWxldGVcIjtcclxuaW1wb3J0IHtzYXZlTWVhbFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xyXG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfQ1JFQVRFRCwgQVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcclxuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcclxuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIG1lYWxEZWxldGUpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBtZWFsXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcblxyXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEVELCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgICAgICBzYXZlTWVhbFN0YXRlKClcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgYXdhcmRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXHJcbiAgICAgKiBDaGFuZ2UgY291bnRlclxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcclxuICAgIH0pO1xyXG5cclxuLyoqXHJcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcclxuICovXHJcbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlTWVhbFN0YXRlKTtcclxuIiwiZXhwb3J0IGNvbnN0IE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSA9ICdORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0nO1xyXG4iLCJjb25zdCBUUkFTSCA9ICdUUkFTSCc7XHJcbmNvbnN0IFRSQVNIX0ZJRUxEU19JRCA9ICd0cmFzaC1maWVsZHMnO1xyXG5jb25zdCBTRUxFQ1RfSUQgPSAnbmVpZ2hib3ItYWN0aXZpdHktdHlwZS1pZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTRUxFQ1RfSUQpO1xyXG5cclxuICAgIGlmICghc2VsZWN0IHx8IHNlbGVjdC5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnMubGVuZ3RoICYmIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XSkge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYXNoRmllbGRzID0gJCgnIycgKyBUUkFTSF9GSUVMRFNfSUQpO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRFbGVtZW50LnRleHQudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBjYXNlIFRSQVNIOlxyXG4gICAgICAgICAgICAgICAgdHJhc2hGaWVsZHMucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdHJhc2hGaWVsZHMuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7TkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSwgc2VsZik7XHJcblxyXG4gICAgICAgIGNoYW5nZVR5cGUoKTtcclxuXHJcbiAgICAgICAgJCgnLm5laWdoYm9yLWFjdGl2aXR5LWZvcm0gLmRhdGV0aW1lcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xyXG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcclxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xyXG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xyXG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tICcuL2hhbmRsZXJzL2NoYW5nZVR5cGUnO1xyXG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKVxyXG4gICAgLm9uKCdjaGFuZ2UnLCAnLm5laWdoYm9yLWFjdGl2aXR5LXR5cGUnLCBjaGFuZ2VUeXBlKTtcclxuXHJcbi8qKlxyXG4gKiBSdW4gdGhlIHNob3cgZm9ybSBoYW5kbGVyLlxyXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cclxuICovXHJcbiQoJy5zaG93LWZvcm0nKVxyXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcclxuIiwiaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgUFJPRFVDVF9TSE9XX0ZPUk0gPSAnUFJPRFVDVF9TSE9XX0ZPUk0nO1xyXG4iLCJpbXBvcnQgQ2xlYXZlIGZyb20gXCJjbGVhdmUuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBQcmljZSBpbml0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAgIG5ldyBDbGVhdmUodGhpcywge1xyXG4gICAgICAgIG51bWVyYWw6IHRydWUsXHJcbiAgICAgICAgcHJlZml4OiAnJCAnLFxyXG4gICAgICAgIHJhd1ZhbHVlVHJpbVByZWZpeDogdHJ1ZSxcclxuICAgICAgICBvblZhbHVlQ2hhbmdlZDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gTWF0aC5yb3VuZCgrZS50YXJnZXQucmF3VmFsdWUgKiAxMDApO1xyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdFByaWNlID0gJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJ3RkJykuZmluZCgnLnByb2R1Y3QtcHJpY2UnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gcGFyc2VJbnQocHJvZHVjdFByaWNlLnZhbCgpKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgLnZhbCh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XHJcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XHJcbmltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcclxuaW1wb3J0IHtQUk9EVUNUX1NIT1dfRk9STX0gZnJvbSBcIm1vZHVsZXMvcHJvZHVjdC9jb25zdGFudHNcIjtcclxuaW1wb3J0IHByaWNlSW5pdCBmcm9tIFwibW9kdWxlcy9wcm9kdWN0L2hhbmRsZXJzL3ByaWNlSW5pdFwiO1xyXG5cclxuJChkb2N1bWVudClcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSk7XHJcblxyXG4vKipcclxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcclxuICovXHJcbiQoJy5zaG93LWZvcm0nKS5jbGljayhkcm9wWm9uZUluaXQoUFJPRFVDVF9TSE9XX0ZPUk0pKTtcclxuXHJcbiQoJyN0ZXN0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxufSk7XHJcblxyXG4vKipcclxuICogUHJpY2UgZm9ybWF0XHJcbiAqL1xyXG4kKCcucHJvZHVjdC1wcmljZS12aWV3JykuZWFjaChwcmljZUluaXQpO1xyXG4iLCJcclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XHJcbiAgICBjb25zdCBhZGRfY291bnRlciA9IHBhcnNlSW50KCQoJy5hZGQtY291bnRlcicpLnZhbCgpKTtcclxuICAgIGNvbnN0IHRib2R5ID0gJCgndGFibGUudGFibGUgdGJvZHknKTtcclxuICAgIGNvbnN0IG1heElkID0gJCh0aGlzKS5kYXRhKCdjb3VudGVyJyk7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9ICQoJ3RlbXBsYXRlI2NvbmZpZy1yb3cnKTtcclxuXHJcbiAgICBsZXQgbmV3TGVuZ3RoID0gcGFyc2VJbnQodGJvZHkuZmluZCgndHIubmV3LXJvdycpLmxlbmd0aCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHRySWQgPSAobWF4SWQgPiAwID8gbWF4SWQgOiAwKSArIHBhcnNlSW50KHRib2R5LmZpbmQoJ3RyLm5ldy1yb3cnKS5sZW5ndGgpO1xyXG5cclxuICAgICAgICBsZXQgbmV3Um93ID0gdGVtcGxhdGUuaHRtbCgpLnJlcGxhY2UoLyVpZCUvZywgdHJJZClcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyV0cl9pZCUvZywgdHJJZClcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyVkcmFmdCUvZywgdHJJZCk7XHJcblxyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHZhbHVlcyB0byBuZXcgcm93c1xyXG4gICAgICAgIGxldCBuZXdSb3dIdG1sID0gJChuZXdSb3cpO1xyXG4gICAgICAgICQoJy5kZWZhdWx0LXJvdy12YWx1ZScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIG5ld1Jvd0h0bWwuZmluZCgnLicgKyAkKHRoaXMpLmRhdGEoJ2NsYXNzJykpLmF0dHIoJ3ZhbHVlJywgZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXdSb3cgPSBuZXdSb3dIdG1sLmdldCgwKS5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgIGlmIChuZXdMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICQodGJvZHkuZmluZCgndHIubmV3LXJvdycpLmxhc3QoKSkuYWZ0ZXIobmV3Um93KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0Ym9keS5wcmVwZW5kKG5ld1Jvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0xlbmd0aCsrO1xyXG5cclxuICAgICAgICB0Ym9keS5maW5kKCdbZGF0YS1hdXRvaW5jcmVtZW50PVwiMVwiXScpLmxhc3QoKS52YWwodHJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XHJcblxyXG4vKipcclxuICogRHJvcHpvbmUgaW5pdFxyXG4gKlxyXG4gKiBAcGFyYW0gX1xyXG4gKiBAcGFyYW0gaXRlbVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKF8sIGl0ZW0pIHtcclxuICAgIGNvbnN0IGRyb3B6b25lQ29udGFpbmVyID0gJChpdGVtKTtcclxuICAgIGNvbnN0IHByZXZpZXdIaWRkZW5JbnB1dCA9IGRyb3B6b25lQ29udGFpbmVyLmZpbmQoJ2lucHV0Jyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGl0ZW0pXHJcbiAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUNvbnRhaW5lci5kYXRhKCd1cmwnKSlcclxuICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoJycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhbmNlbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoJycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xyXG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKHJlc3BvbnNlLmZpbGVfbmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgcHJldmlld1xyXG4gICAgICovXHJcbiAgICBpZiAoISFwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCkpIHtcclxuICAgICAgICBkcm9wem9uZUJ1aWxkZXJcclxuICAgICAgICAgICAgLnNldFByZXZpZXcoXHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCksXHJcbiAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUNvbnRhaW5lci5kYXRhKCdmb2xkZXInKSwgcHJldmlld0hpZGRlbklucHV0LnZhbCgpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJvcHpvbmUgYnVpbGRcclxuICAgICAqL1xyXG4gICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XHJcbn0iLCIvKipcclxuICogTWFyayBjaGFuZ2VkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQgKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICAkKCcjdXBkYXRlLWFsbCcpLnNob3coKTtcclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcclxuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQYWdlIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoJChcInRyLmNoYW5nZWRcIikuZmluZCgnaW5wdXQsIGlucHV0W3R5cGU9XCJoaWRkZW5cIl0sIHNlbGVjdCwgdGV4dGFyZWEnKSk7XHJcblxyXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoey4uLmRhdGF9KVxyXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwLnR5cGUgPT09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeUVycm9yKHJlc3AubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSb3cgKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgcm93VG9TYXZlID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpO1xyXG4gICAgbGV0IGFjdGlvbiA9IHJvd1RvU2F2ZS5kYXRhKCdhY3Rpb24nKTtcclxuICAgIGxldCByb3cgPSByb3dUb1NhdmUuZmluZChcIi5lZGl0YWJsZSBzZWxlY3QsIC5lZGl0YWJsZSBpbnB1dFwiKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgIGlmKCQoXCJ0ci5jaGFuZ2VkXCIpLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBsZXQgciA9IGNvbmZpcm0oJ0NoYW5nZWQgbW9yZSB0aGFuIG9uZSByb3cuIFNhdmVkIG9ubHkgY3VycmVudCByb3chJyk7XHJcbiAgICAgICAgaWYociAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKCFyb3dUb1NhdmUuaGFzQ2xhc3MoJ2NoYW5nZWQnKSkge1xyXG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQVVRcIixcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIHVybDogYWN0aW9uLFxyXG4gICAgICAgIGRhdGE6IHJvdyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiggcmVzcCApIHtcclxuICAgICAgICAgICAgcm93VG9TYXZlLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3AubWVzc2FnZVxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHJlc3AudHlwZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIGV4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoanFYSFIucmVzcG9uc2VKU09OICYmIGpxWEhSLnJlc3BvbnNlSlNPTi5oYXNPd25Qcm9wZXJ0eSgnZXJyb3JzJykpIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaCgganFYSFIucmVzcG9uc2VKU09OLmVycm9ycywgZnVuY3Rpb24oZXJyb3JLZXksIGVycm9yICkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCggZXJyb3IsIGZ1bmN0aW9uKG1lc3NhZ2VLZXksIG1lc3NhZ2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IERyb3B6b25lIGZyb20gJ2Ryb3B6b25lJztcclxuaW1wb3J0IGRyb3B6b25lSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9kcm9wem9uZUluaXRcIjtcclxuaW1wb3J0IHtzYXZlUGFnZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVBhZ2VcIjtcclxuaW1wb3J0IHttYXJrQ2hhbmdlZH0gZnJvbSBcIi4vaGFuZGxlcnMvbWFya0NoYW5nZWRcIjtcclxuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcclxuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcclxuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0NSRUFURUQsIEFXQVJEX0RFTEVURSwgQ0xPU0VfQVdBUkRfTU9EQUx9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XHJcbmltcG9ydCB7c2F2ZVJvd30gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVJvd1wiO1xyXG5cclxuLyoqXHJcbiAqIFR1cm5lZCBvZmYgdGhlIERyb3B6b25lIGF1dG8gaW5pdFxyXG4gKlxyXG4gKiBAdHlwZSB7Ym9vbGVhbn1cclxuICovXHJcbkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xyXG5cclxuLyoqXHJcbiAqIERyb3B6b25lIGluaXRcclxuICovXHJcbiQoJy5kcm9wem9uZScpLmVhY2goZHJvcHpvbmVJbml0KTtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShDTE9TRV9BV0FSRF9NT0RBTCwgKGRhdGEsIHNlbGYpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluaXQgY29sb3ItcGlja2VyIGlucHV0c1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgICQoJy5jcDInKS5jb2xvcnBpY2tlcigpO1xyXG5cclxuICAgICAgICAkKCcjdXBkYXRlLWFsbCcpLmNsaWNrKHNhdmVQYWdlKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSByb3dcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXBkYXRlLXJvdycpO1xyXG5cclxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xyXG5cclxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIHNlbGYpO1xyXG4gICAgICAgICAgICBzYXZlQnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlUm93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIGF3YXJkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzKSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBhd2FyZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICAgICAgJCgnI3VwZGF0ZS1hbGwnKS5zaG93KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kcm9wem9uZScsIG1hcmtDaGFuZ2VkKVxyXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIG1hcmtDaGFuZ2VkKVxyXG4gICAgLm9uKCdpbnB1dCcsICd0Ym9keSBpbnB1dCwgdGJvZHkgdGV4dGFyZWEnLCBtYXJrQ2hhbmdlZClcclxuICAgIC5vbignY2hhbmdlJywgJ3Rib2R5IGlucHV0LCB0Ym9keSBzZWxlY3QnLCBtYXJrQ2hhbmdlZCk7XHJcbiIsImNvbnN0IFdBTEtfQ0FURUdPUlkgPSAnNic7XHJcbmNvbnN0IFJVTl9DQVRFR09SWSA9JzcnO1xyXG5cclxuJChkb2N1bWVudClcclxuXHJcbiAgICAucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0MiA9ICQoJy50YWJsZScpLmZpbmQoJy5lbWJlZC1ncm91cCBzZWxlY3Quc2VsZWN0MicpO1xyXG4gICAgICAgIGxldCBzZWxlY3RWYWwgPSAwO1xyXG4gICAgICAgIHNlbGVjdDIuZWFjaChmdW5jdGlvbiAobiwgaSkge1xyXG4gICAgICAgICAgICBzZWxlY3RWYWwgPSAkKGkpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcclxuICAgICAgICAgICAgICAgICQoaSkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChpKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgaGlkZSBzcGVlZCBvbiB0cmlnZ2VyIGFkZC1lbWJlZCBidXR0b25cclxuICAgICAqL1xyXG4gICAgLm9uKCdhaV9hbmltYXRpb24nLCAnLmFkZC1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBlbWJlZCA9ICQodGhpcykuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJyk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0VmFsID0gZW1iZWQuZmluZCgnLnNlbGVjdDInKS52YWwoKTtcclxuICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcclxuICAgICAgICAgICAgZW1iZWQuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVtYmVkLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBoaWRlIHNwZWVkXHJcbiAgICAgKi9cclxuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RWYWwgPSAkKGl0ZW0udGFyZ2V0KS52YWwoKTtcclxuICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcclxuICAgICAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IFNIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0gPSAnU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSc7XHJcbiIsIi8qKlxyXG4gKiBBZGQgYSBuZXcgc2hvcCBpbiBhIGRlcGFydG1lbnRzIGdyaWRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XHJcbiAgICBjb25zdCB0YWJsZSA9IGN1cnJlbnRCdG4uY2xvc2VzdCgnLnNob3BzLXRhYmxlJykuZmluZCgndGJvZHknKTtcclxuICAgIGNvbnN0IGRlcGFydG1lbnRJZCA9IGN1cnJlbnRCdG4uZGF0YSgnZGVwYXJ0bWVudCcpO1xyXG4gICAgbGV0IGNvdW50ZXIgPSBwYXJzZUludChjdXJyZW50QnRuLmRhdGEoJ2NvdW50JykpO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSAkKCcjc2hvcC10ZW1wbGF0ZScpXHJcbiAgICAgICAgLmh0bWwoKVxyXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJyVkZXBhcnRtZW50SWQlJywgXCJnXCIpLCBkZXBhcnRtZW50SWQpXHJcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnJWluZGV4JScsIFwiZ1wiKSwgY291bnRlcisrKTtcclxuXHJcbiAgICBjdXJyZW50QnRuLmRhdGEoJ2NvdW50JywgY291bnRlcik7XHJcblxyXG4gICAgdGFibGUuYXBwZW5kKHRlbXBsYXRlKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xyXG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIEZhc3Qgc2F2ZSBmb3Igc2hvcCBkZXBhcnRtZW50XHJcbiAqXHJcbiAqIEBwYXJhbSBlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBzaG9wTmFtZVByZWZpeCA9ICdzaG9wJztcclxuICAgIGNvbnN0IGRlcGFydG1lbnROYW1lUHJlZml4ID0gJ2RlcGFydG1lbnQnO1xyXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XHJcbiAgICBjb25zdCBmYXN0U2F2ZUNvbnRhaW5lciA9ICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJyk7XHJcblxyXG4gICAgbGV0IHNob3BzID0ge307XHJcbiAgICBsZXQgZGVwYXJ0bWVudCA9IHt9O1xyXG5cclxuICAgIGZhc3RTYXZlQ29udGFpbmVyLmZpbmQoJ3Rib2R5IHRyLmNoYW5nZWQgdHIuaW5mbycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBkZXBpbmRleCA9ICQodGhpcykuY2xvc2VzdCgnLmRlcGFydG1lbnQnKS5pbmRleCgpO1xyXG4gICAgICAgIGxldCBkZXBhcnRtZW50Rm9ybURhdGEgPSBnZXRGb3JtRGF0YSgkKHRoaXMpKTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGRlcGFydG1lbnRGb3JtRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGAke2RlcGFydG1lbnROYW1lUHJlZml4fVske2RlcGluZGV4fV1bJHtpfV1gO1xyXG4gICAgICAgICAgICBkZXBhcnRtZW50W2l0ZW1OYW1lXSA9IGRlcGFydG1lbnRGb3JtRGF0YVtpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQodGhpcykubmV4dCgndHIuc2hvcHMnKS5maW5kKCd0Ym9keS5zb3J0YWJsZSB0cicpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IGdldEZvcm1EYXRhKCQodGhpcykpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGAke3Nob3BOYW1lUHJlZml4fVske2RlcGFydG1lbnRGb3JtRGF0YS5pZH1dWyR7aW5kZXh9XVske2l9XWA7XHJcbiAgICAgICAgICAgICAgICBzaG9wc1tpdGVtTmFtZV0gPSBmb3JtRGF0YVtpXTtcclxuICAgICAgICAgICAgICAgIHNob3BzW2Ake3Nob3BOYW1lUHJlZml4fVske2RlcGFydG1lbnRGb3JtRGF0YS5pZH1dWyR7aW5kZXh9XVtkZXBhcnRtZW50XWBdID0gZGVwYXJ0bWVudEZvcm1EYXRhLmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgLmRhdGEoey4uLnNob3BzLCAuLi5kZXBhcnRtZW50fSlcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICQoJy5jaGFuZ2VkJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBSYWRpbyBpbnB1dCBmcm9tIGNoZWNrYm94XHJcbiAqIEJlY2F1c2UgaW5wdXRbdHlwZT1yYWRpb10gZGlkIG5vdCB3b3JrIGNvcnJlY3RseVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgYWxsSXRlbXMgPSBjdXJyZW50SXRlbS5jbG9zZXN0KCcudGFibGUnKS5maW5kKCcucmFkaW8nKTtcclxuXHJcbiAgICBhbGxJdGVtcy5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgYWxsSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcclxuXHJcbiAgICBjdXJyZW50SXRlbS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICBjdXJyZW50SXRlbS5hZGRDbGFzcygnY2hlY2tlZCcpO1xyXG59XHJcbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcclxuXHJcbi8qKlxyXG4gKiBTb3J0YWJsZSBJbml0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXcgU29ydGFibGUodGhpcywge1xyXG4gICAgICAgIGdyb3VwOiAnZGVwYXJ0bWVudCcsXHJcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXHJcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKS5maW5kKCd0ci5kZXBhcnRtZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2hhbmdlZCcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICByYWRpbzogJChlLml0ZW0pLmZpbmQoJy5yYWRpbycpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogJChlLml0ZW0pLmNsb3Nlc3QoJy50YWJsZScpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcclxuXHJcbi8qKlxyXG4gKiBTb3J0YWJsZSBJbml0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXcgU29ydGFibGUodGhpcywge1xyXG4gICAgICAgIGdyb3VwOiAnc2hvcHMnLFxyXG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxyXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAkKGUuaXRlbSkuY2xvc2VzdCgndHIuZGVwYXJ0bWVudCcpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaW86ICQoZS5pdGVtKS5maW5kKCcucmFkaW8nKSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6ICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucGFyZW50LmZpbmQoJy5yYWRpby5jaGVja2VkOmd0KDApJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yYWRpby5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmFkaW8ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XHJcbmltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogRHJvcHpvbmUgaW5pdCBhZnRlciB0aGUgbW9kYWwgb3BlbmVkXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSwgKCkgPT4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByZXZpZXdcclxuICAgICAgICAgKi9cclxuICAgICAgICBkcm9wem9uZUluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybCcpKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUHJldmlldyBTbWFsbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRyb3B6b25lSW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUtc21hbGwnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsLXNtYWxsJykpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEcm9wem9uZSBJbml0XHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRyb3B6b25lRWxlbWVudFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwcmV2aWV3VXJsRWxlbWVudFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGRyb3B6b25lSW5pdChkcm9wem9uZUVsZW1lbnQsIHByZXZpZXdVcmxFbGVtZW50KSB7XHJcbiAgICBpZiAoIWRyb3B6b25lRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGRyb3B6b25lQnVpbGRlciA9IG5ldyBEcm9wem9uZUJ1aWxkZXIoZHJvcHpvbmVFbGVtZW50KVxyXG4gICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQudXJsKVxyXG4gICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgJChwcmV2aWV3VXJsRWxlbWVudCkudmFsKCcnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYW5jZWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKHByZXZpZXdVcmxFbGVtZW50KS52YWwoJycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICQoZHJvcHpvbmVFbGVtZW50KS5maW5kKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcclxuICAgICAgICAgICAgcHJldmlld1VybEVsZW1lbnQudmFsdWUgPSByZXNwb25zZS5maWxlX25hbWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgcHJldmlld1xyXG4gICAgICovXHJcbiAgICBpZiAocHJldmlld1VybEVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyXHJcbiAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxyXG4gICAgICAgICAgICAgICAgcHJldmlld1VybEVsZW1lbnQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC5mb2xkZXIsIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJvcHpvbmUgYnVpbGRcclxuICAgICAqL1xyXG4gICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XHJcbn0iLCJpbXBvcnQgYWRkU2hvcCBmcm9tIFwiLi9oYW5kbGVycy9hZGRTaG9wXCI7XHJcbmltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVwiO1xyXG5pbXBvcnQgcmFkaW9JbnB1dCBmcm9tIFwiLi9oYW5kbGVycy9yYWRpb0lucHV0XCI7XHJcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcclxuaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwibW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XHJcbmltcG9ydCBzb3J0YWJsZURlcGFydG1lbnRJbml0IGZyb20gXCJtb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZURlcGFydG1lbnRJbml0XCI7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5cclxuLyoqXHJcbiAqIERyb3B6b25lIGluaXRcclxuICovXHJcbnNob3dGb3JtKCk7XHJcblxyXG4kKGRvY3VtZW50KVxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWRpbyBidXR0b25zIGJlaGF2aW9yXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJy5yYWRpbycsIHJhZGlvSW5wdXQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0ci5kZXBhcnRtZW50JykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2N1bWVudCByZWFkeVxyXG4gICAgICovXHJcbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCBjbGFzcyB0byBjaGVja2VkIHJhZGlvc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgICQoJy5yYWRpb1tjaGVja2VkXScpLmFkZENsYXNzKCdjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZCBhIG5ldyBzaG9wIGluIGEgZGVwYXJ0bWVudHMgZ3JpZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICQoJy5hZGQtc2hvcCcpLmNsaWNrKGFkZFNob3ApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGYXN0IHNhdmVcclxuICAgICAgICAgKi9cclxuICAgICAgICAkKCcuZmFzdC1zYXZlJykuY2xpY2soZmFzdFNhdmUpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYWtlIHRyIHRvIHNvcnRhYmxlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYWtlIHRyIHRvIHNvcnRhYmxlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJCgnLnNvcnRhYmxlLWRlcGFydG1lbnQnKS5lYWNoKHNvcnRhYmxlRGVwYXJ0bWVudEluaXQpO1xyXG4gICAgfSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxyXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtZWFsIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcclxuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNyZWxlYXNlID4gdGJvZHknKTtcclxuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNyZWxlYXNlX3RlbXBsYXRlJykuaHRtbCgpO1xyXG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcucmVsZWFzZV9pZCcpLnZhbCgpO1xyXG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lcmVsZWFzZSUvZywgaSArIGluY3JlbWVudElkKSk7XHJcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XHJcblxyXG4gICAgICAgIHRib2R5LmZpbmQoJy5kYXRldGltZXBpY2tlcicpXHJcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcclxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBjb25maWcgZ3JpZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlUGFnZSAoKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcclxuICAgIGNvbnN0IHRib2R5ID0gJCgnLnJlbGVhc2Utc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWRcIik7XHJcbiAgICBjb25zdCBkYXRhID0gJCgnLnJlbGVhc2Utc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdCwgLmNoYW5nZWQgdGV4dGFyZWFcIikuc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgaHR0cChyb3V0ZSlcclxuICAgICAgICAubWV0aG9kKCdQT1NUJylcclxuICAgICAgICAuZGF0YShkYXRhKVxyXG4gICAgICAgIC5zZW5kKCk7XHJcblxyXG4gICAgdGJvZHkuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xyXG4gICAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XHJcbmltcG9ydCB7c2F2ZVBhZ2V9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XHJcblxyXG4kKGRvY3VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxyXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXHJcbiAgICB9KTtcclxuXHJcbi8qKlxyXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXHJcbiAqL1xyXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZVBhZ2UpO1xyXG4iLCIkKGRvY3VtZW50KVxyXG5cclxuICAgIC5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCd0ZCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmF0dHIoJ3N0eWxlJykpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQnLCAnI2U3ZTdlNycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuIiwiLyoqXHJcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcclxuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XHJcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNzb3VuZCA+IHRib2R5Jyk7XHJcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjc291bmRfdGVtcGxhdGUnKS5odG1sKCk7XHJcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5zb3VuZF9pZCcpLnZhbCgpO1xyXG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lc291bmRfaWQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xyXG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNvdW5kU3RhdGUgKCkge1xyXG4gICAgY29uc3QgZGF0YSA9ICQoJy5zb3VuZC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgaWYoZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXHJcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXHJcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgICAgIC5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7c2F2ZVNvdW5kU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlXCI7XHJcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBncmlkXHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB0aGUgcm93XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU291bmRTdGF0ZSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcclxuICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXHJcbiAgICAgKiBDaGFuZ2UgY291bnRlclxyXG4gICAgICovXHJcbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcclxuICAgIH0pO1xyXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBUQU1BVE9PTF9TSE9XX0ZPUk0gPSAnVEFNQVRPT0xfU0hPV19GT1JNJztcclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtUQU1BVE9PTF9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShUQU1BVE9PTF9TSE9XX0ZPUk0sIChkYXRhLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoVEFNQVRPT0xfU0hPV19GT1JNLCBzZWxmKTtcclxuXHJcbiAgICAgICAgJCgnLm5laWdoYm9yLWFjdGl2aXR5LWZvcm0gLmRhdGVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XHJcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxyXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcclxuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcclxuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xyXG5cclxuJChkb2N1bWVudClcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcclxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSk7XHJcblxyXG4vKipcclxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cclxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXHJcbiAqL1xyXG4kKCcuc2hvdy1mb3JtJylcclxuICAgIC5jbGljayhzaG93Rm9ybSk7XHJcbiIsImV4cG9ydCBjb25zdCBTRUFSQ0hfVVNFUl9BU1NFVFMgICAgICA9ICdTRUFSQ0hfVVNFUl9BU1NFVFMnO1xyXG5leHBvcnQgY29uc3QgU1VCTUlUX1VTRVJfUEFSVF9GT1JNICAgPSAnU1VCTUlUX1VTRVJfUEFSVF9GT1JNJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9ORUlHSEJPUiAgICAgICAgID0gJ0RFTEVURV9ORUlHSEJPUic7XHJcbmV4cG9ydCBjb25zdCBBRERfTkVJR0hCT1IgICAgICAgICAgICA9ICdBRERfTkVJR0hCT1InO1xyXG5leHBvcnQgY29uc3QgR0VUX05FSUdIQk9SUyAgICAgICAgICAgPSAnR0VUX05FSUdIQk9SUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTkVJR0hCT1JTICAgICAgICA9ICdVUERBVEVfTkVJR0hCT1JTJztcclxuXHJcbmV4cG9ydCBjb25zdCBORUlHSEJPUl9HUklEX0lEID0gJ25laWdoYm9yLWdyaWQnOyIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcclxuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XHJcblxyXG4vKipcclxuICogQWRkIGNvbW1lbnRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoJCgnI2NvbGxlY3RpYmxlLWZvcm0nKS5maW5kKCdpbnB1dCcpKTtcclxuXHJcbiAgICBuZXcgaHR0cCgkKCcjYWRkLWNvbGxlY3RpYmxlJykuYXR0cignaHJlZicpKVxyXG4gICAgICAgIC5tZXRob2QoJ1BPU1QnKVxyXG4gICAgICAgIC5kYXRhKHtkYXRhfSlcclxuICAgICAgICAuc3VjY2VzcyhyZXNwID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3AudHlwZSA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtID0gJChyZXNwLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgJCgnIycgKyByZXNwLmNvbnRhaW5lcikucmVwbGFjZVdpdGgoZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBub3RpZnlTdWNjZXNzKCdVc2VyIGNvbGxlY3RpYmxlIHVwZGF0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIEFkZCBjb21tZW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIG5ldyBodHRwKCQodGhpcykuY2xvc2VzdCgnYScpLmF0dHIoJ2hyZWYnKSlcclxuICAgICAgICAubWV0aG9kKCdQT1NUJylcclxuICAgICAgICAuZGF0YSh7ZGVzY3JpcHRpb246ICQoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWwoKX0pXHJcbiAgICAgICAgLnN1Y2Nlc3MociA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyLnN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgJCgnW25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjdXNlci1jb21tZW50cycpLnByZXBlbmQoJzx0cj48dGQ+JyArIHIubW9kZWwuZGVzY3JpcHRpb24gKyAnPC90ZD48dGQ+JyArIHIuY3JlYXRlZF9ieSArICc8L3RkPjx0ZD4nICsgci5jcmVhdGVkX2F0ICsgJyBQU1Q8L3RkPjx0ZD48YSBocmVmPVwiaHR0cDovL2Ntcy1kZXYubG9jYWwvcmVtb3ZlLWNvbW1lbnQvJyArIHIubW9kZWwuaWQgKyAnXCIgY2xhc3M9XCJhamF4LWNvbmZpcm0tYWN0aW9uXCIgZGF0YS1tZXRob2Q9XCJERUxFVEVcIiBkYXRhLWhlYWRlcj1cIkRlbGV0ZSBjb21tZW50P1wiIGRhdGEtYnRuLW5hbWU9XCJEZWxldGVcIiBkYXRhLWJ0bi1jbGFzcz1cImJ0bi1kYW5nZXIgYnRuLXNtXCIgZGF0YS1kaXNtaXNzPVwiMVwiIGRhdGEtcmVsb2FkPVwiMVwiPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+RGVsZXRlPC9idXR0b24+PC9hPjwvdGQ+PC90cj4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbmQoKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFN5bmNocm9uaXplIG1vdmUtcGxhY2VtZW50LXNlbGVjdCBzZWxlY3RzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWRTdG9yYWdlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQodGhpcykucGFyZW50cygnZm9ybScpLmZpbmQoJy5tb3ZlLXBsYWNlbWVudC1zZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkU3RvcmFnZSAhPSAkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudmFsKHNlbGVjdGVkU3RvcmFnZSkuY2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5pbXBvcnQge1VQREFURV9ORUlHSEJPUlMsIE5FSUdIQk9SX0dSSURfSUR9IGZyb20gXCJtb2R1bGVzL3VzZXJzL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIFNldCBwYWdlIGxpbWl0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJykgKyAnJnBhZ2VfbGltaXQ9JyArICQodGhpcykudmFsKCk7XHJcbiAgICBuZXcgaHR0cChyb3V0ZSlcclxuICAgICAgICAubWV0aG9kKCdHRVQnKVxyXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgJChgIyR7TkVJR0hCT1JfR1JJRF9JRH1gKS5yZXBsYWNlV2l0aChyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VuZCgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBDaGFuZ2UgcGxhY2VtZW50IHNlbGVjdCBpbiBBZGQgQXNzZXRzIGJsb2NrXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBwbGFjZW1lbnROYW1lID0gJCgnI2FkZC1hc3NldHMtYmxvY2stcGxhY2VtZW50LW5hbWUnKTtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpID4gMCkge1xyXG4gICAgICAgIHBsYWNlbWVudE5hbWUuaGlkZSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBsYWNlbWVudE5hbWUuc2hvdygpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDaGFuZ2UgbW9kZSBmb3IgYWRkIG5laWdoYm9yc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbmVpZ2hib3JzQ291bnQgPSAkKCcjbmVpZ2hib3JzLWNvdW50Jyk7XHJcbiAgICBpZigkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgbmVpZ2hib3JzQ291bnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmVpZ2hib3JzQ291bnQuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogSGlkZSBhc3NldHMgaW4gcGxhY2VtZW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcclxuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XHJcbiAgICBjdXJyZW50RWxlbWVudC5zaWJsaW5ncygnLmxvYWQtYXNzZXRzJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICQoJyNhc3NldC1jb250YWluZXItJyArIGN1cnJlbnRFbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcpKS5odG1sKCcnKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xyXG5cclxuLyoqXHJcbiAqIFBMQUNFTUVOVF9BU1NFVFNfUk9VVEUgLSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcclxuICogSW5pdGVkIGluIHVzZXIvZWRpdC5ibGFkZS5waHBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgbGV0IHBsYWNlbWVudCA9IGN1cnJlbnRFbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcpO1xyXG5cclxuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XHJcbiAgICBjdXJyZW50RWxlbWVudC5zaWJsaW5ncygnLmhpZGUtYXNzZXRzJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcclxuXHJcbiAgICBsb2FkUGFydChQTEFDRU1FTlRfQVNTRVRTX1JPVVRFICsgJyZwbGFjZW1lbnQ9JyArIHBsYWNlbWVudCwgJCgnI2Fzc2V0LWNvbnRhaW5lci0nICsgcGxhY2VtZW50KSk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogTG9hZCBwYXJ0IGZvciBlZGl0IHVzZXIgcGFnZVxyXG4gKi9cclxuZnVuY3Rpb24gbG9hZFBhcnQoYWN0aW9uLCBlbGVtZW50KSB7XHJcbiAgICBuZXcgaHR0cChhY3Rpb24pXHJcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcclxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gJChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGl0ZW1zLmZpbmQoJy5saXN0LXRodW1ibmFpbCcpLnBvcG92ZXIoe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiAnYm9keScsXHJcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiJyArICQodGhpcykuZGF0YSgnZnVsbCcpICsgJ1wiPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGl0ZW1zKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZW5kKCk7XHJcbn0iLCIvKipcclxuICogU2VsZWN0IHJvd3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNvdW50U2VsZWN0b3IgPSAkKHRoaXMpLnBhcmVudHMoJ3RkLCB0aCcpLmZpbmQoJy5jb3VudC1mb3Itc2VsZWN0Jyk7XHJcbiAgICBjb25zdCByb3dzRm9yU2VsZWN0ID0gJCh0aGlzKS5wYXJlbnRzKCd0YWJsZScpLmZpbmQoJy5mb3Itc2VsZWN0Jyk7XHJcblxyXG4gICAgbGV0IGNvdW50Rm9yU2VsZWN0ID0gY291bnRTZWxlY3Rvci52YWwoKSB8fCAwO1xyXG4gICAgaWYgKGNvdW50Rm9yU2VsZWN0ID09PSAwKSB7XHJcbiAgICAgICAgY291bnRGb3JTZWxlY3QgPSByb3dzRm9yU2VsZWN0Lmxlbmd0aDtcclxuICAgICAgICBjb3VudFNlbGVjdG9yLnZhbChjb3VudEZvclNlbGVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICByb3dzRm9yU2VsZWN0LmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKGNvdW50Rm9yU2VsZWN0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvdW50Rm9yU2VsZWN0LS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByb3dzRm9yU2VsZWN0LmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcclxuaW1wb3J0IHtVUERBVEVfTkVJR0hCT1JTLCBORUlHSEJPUl9HUklEX0lEfSBmcm9tIFwibW9kdWxlcy91c2Vycy9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgbmVpZ2hib3IgZ3JpZFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFVQREFURV9ORUlHSEJPUlMsIChyZXNwb25zZSwgc2VsZikgPT4ge1xyXG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKFVQREFURV9ORUlHSEJPUlMsIHNlbGYpO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuYXR0cignYWN0aW9uJykpXHJcbiAgICAgICAgICAgICAgICAubWV0aG9kKCdHRVQnKVxyXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoYCMke05FSUdIQk9SX0dSSURfSUR9YCkucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtBRERfTkVJR0hCT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBTZXQgbmVpZ2hib3IgYXMgYWN0aXZlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQUREX05FSUdIQk9SLCByZXNwID0+IHtcclxuICAgICAgICBpZiAocmVzcC50eXBlID09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAkKCcjZGVsZXRlLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgJCgnI2FkZC1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJyNuZWlnaGJvci1zdGF0dXMtJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuaHRtbChyZXNwLmRhdGEuc3RhdHVzX3RleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7REVMRVRFX05FSUdIQk9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogU2V0IG5laWdoYm9yIGFzIGRlbGV0ZWRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIG9ic2VydmVyLnN1YnNjcmliZShERUxFVEVfTkVJR0hCT1IsIHJlc3AgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICQoJyNkZWxldGUtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAkKCcjYWRkLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgJCgnI25laWdoYm9yLXN0YXR1cy0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5odG1sKHJlc3AuZGF0YS5zdGF0dXNfdGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtHRVRfTkVJR0hCT1JTLCBORUlHSEJPUl9HUklEX0lEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogVXBkYXRlIG5laWdoYm9yIGdyaWQgaW4gc2VhcmNoaW5nXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoR0VUX05FSUdIQk9SUywgcmVzcCA9PiB7XHJcbiAgICAgICAgJChgIyR7TkVJR0hCT1JfR1JJRF9JRH1gKS5yZXBsYWNlV2l0aChyZXNwKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCB7U0VBUkNIX1VTRVJfQVNTRVRTfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogU2VhcmNoIHVzZXIgYXNzZXRzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0VBUkNIX1VTRVJfQVNTRVRTLCBkYXRhID0+IHtcclxuICAgICAgICAkKCcjc2VhcmNoLWFzc2V0cy1jb250YWluZXInKS5yZXBsYWNlV2l0aChkYXRhKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XHJcbmltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XHJcbmltcG9ydCB7U1VCTUlUX1VTRVJfUEFSVF9GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogU3VibWl0IHVzZXIgcGFydCBmb3JtXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU1VCTUlUX1VTRVJfUEFSVF9GT1JNLCByZXNwID0+IHtcclxuICAgICAgICBsZXQgZm9ybSA9ICQocmVzcC5kYXRhKTtcclxuXHJcbiAgICAgICAgJCgnIycgKyByZXNwLmNvbnRhaW5lcikucmVwbGFjZVdpdGgoZm9ybSk7XHJcbiAgICAgICAgZm9ybS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcclxuYCAgICAgICAgbm90aWZ5U3VjY2VzcygnVXNlciBkYXRhIHVwZGF0ZWQnKTtcclxuYCAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoVXNlckFzc2V0cyAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9zZWFyY2hVc2VyQXNzZXRzXCI7XHJcbmltcG9ydCBzdWJtaXRVc2VyUGFydEZvcm0gICAgZnJvbSBcIi4vbGlzdGVuZXJzL3N1Ym1pdFVzZXJQYXJ0Rm9ybVwiO1xyXG5pbXBvcnQgZGVsZXRlTmVpZ2hib3IgICAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9kZWxldGVOZWlnaGJvclwiO1xyXG5pbXBvcnQgc2VhcmNoTmVpZ2hib3IgICAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9zZWFyY2hOZWlnaGJvclwiO1xyXG5pbXBvcnQgYWRkTmVpZ2hib3IgICAgICAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9hZGROZWlnaGJvclwiO1xyXG5pbXBvcnQgbG9hZFBsYWNlbWVudEFzc2V0cyAgIGZyb20gXCIuL2hhbmRsZXJzL2xvYWRQbGFjZW1lbnRBc3NldHNcIjtcclxuaW1wb3J0IGhpZGVQbGFjZW1lbnRBc3NldHMgICBmcm9tIFwiLi9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzXCI7XHJcbmltcG9ydCBjaGFuZ2VQbGFjZW1lbnQgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUGxhY2VtZW50XCI7XHJcbmltcG9ydCBjaGFuZ2VSYW5kb21OZWlnaGJvcnMgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUmFuZG9tTmVpZ2hib3JzXCI7XHJcbmltcG9ydCBjaGFuZ2VNb3ZlUGxhY2VtZW50ICAgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlTW92ZVBsYWNlbWVudFwiO1xyXG5pbXBvcnQgc2VsZWN0Um93cyAgICAgICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL3NlbGVjdFJvd3NcIjtcclxuaW1wb3J0IHVwZGF0ZU5laWdoYm9ycyAgICAgICBmcm9tIFwiLi9oYW5kbGVycy91cGRhdGVOZWlnaGJvcnNcIjtcclxuaW1wb3J0IGNoYW5nZVBhZ2VMaW1pdCAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VQYWdlTGltaXRcIjtcclxuaW1wb3J0IGFkZENvbW1lbnQgICAgICAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9hZGRDb21tZW50XCI7XHJcbmltcG9ydCBhZGRDb2xsZWN0aWJsZSAgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvYWRkQ29sbGVjdGlibGVcIjtcclxuXHJcbmltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbi8qKlxyXG4gKiBTZWFyY2ggdXNlciBhc3NldHMgbGlzdGVuZXJcclxuICovXHJcbnNlYXJjaFVzZXJBc3NldHMoKTtcclxuXHJcbi8qKlxyXG4gKiBTdWJtaXQgdXNlciBwYXJ0IGZvcm0gbGlzdGVuZXJcclxuICovXHJcbnN1Ym1pdFVzZXJQYXJ0Rm9ybSgpO1xyXG5cclxuLyoqXHJcbiAqIERlbGV0ZSBOZWlnaGJvclxyXG4gKi9cclxuZGVsZXRlTmVpZ2hib3IoKTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgTmVpZ2hib3JcclxuICovXHJcbmFkZE5laWdoYm9yKCk7XHJcblxyXG4vKipcclxuICogU2VhcmNoIE5laWdoYm9yc1xyXG4gKi9cclxuc2VhcmNoTmVpZ2hib3IoKTtcclxuXHJcbiQoZG9jdW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGFzc2V0cyBpbiBwbGFjZW1lbnRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcubG9hZC1hc3NldHMnLCBsb2FkUGxhY2VtZW50QXNzZXRzKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIHBsYWNlbWVudCBpbiBBZGQgQXNzZXRzIGJsb2NrXHJcbiAgICAgKi9cclxuICAgIC5vbignY2hhbmdlJywgJyNwbGFjZW1lbnQtZm9yLWFzc2V0JywgY2hhbmdlUGxhY2VtZW50KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcclxuICAgICAqL1xyXG4gICAgLm9uKCdjaGFuZ2UnLCAnI2lzLXJhbmRvbS1uZWlnaGJvcnMnLCBjaGFuZ2VSYW5kb21OZWlnaGJvcnMpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIGFzc2V0cyBpbiBwbGFjZW1lbnRcclxuICAgICAqL1xyXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hc3NldHMnLCBoaWRlUGxhY2VtZW50QXNzZXRzKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXV0byBzZWxlY3Qgcm93c1xyXG4gICAgICovXHJcbiAgICAub24oJ2NoYW5nZScsICcuc2VsZWN0LXJvd3MnLCBzZWxlY3RSb3dzKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3luY2hyb25pemUgbW92ZS1wbGFjZW1lbnQtc2VsZWN0IHNlbGVjdHNcclxuICAgICAqL1xyXG4gICAgLm9uKCdjaGFuZ2UnLCAnLm1vdmUtcGxhY2VtZW50LXNlbGVjdCcsIGNoYW5nZU1vdmVQbGFjZW1lbnQpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgbmVpZ2hib3IgcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtbmVpZ2hib3ItcmVxdWVzdCwgI2FkZC1uZWlnaGJvcnMnLCB1cGRhdGVOZWlnaGJvcnMpXHJcbiAgICAvKipcclxuICAgICAqIFNldCBwYWdlIGxpbWl0XHJcbiAgICAgKi9cclxuICAgICAub24oJ2NoYW5nZScsICcubmVpZ2hib3ItcGFnZS1saW1pdCcsIGNoYW5nZVBhZ2VMaW1pdClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBjb21tZW50XHJcbiAgICAgKi9cclxuICAgIC5vbignY2xpY2snLCAnI2FkZC1jb21tZW50JywgYWRkQ29tbWVudClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBjb2xsZWN0aWJsZVxyXG4gICAgICovXHJcbiAgICAub24oJ2NsaWNrJywgJyNhZGQtY29sbGVjdGlibGUnLCBhZGRDb2xsZWN0aWJsZSlcclxuO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9