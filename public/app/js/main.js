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
/*!********************************************************************************!*\
  !*** /home/user/projects/stockworker/node_modules/moment/locale sync ^\.\/.*$ ***!
  \********************************************************************************/
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
	"./en-SG": "../../../node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "../../../node_modules/moment/locale/en-SG.js",
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
	"./en-nz": "../../../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../node_modules/moment/locale/en-nz.js",
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var _default =
/*#__PURE__*/
function () {
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


      return new dropzone__WEBPACK_IMPORTED_MODULE_0___default.a(this._dropzoneContainer, _objectSpread({}, config, {}, this._config));
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

var _default =
/*#__PURE__*/
function () {
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

var _default =
/*#__PURE__*/
function () {
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

      var html = $("\n            <div id=\"".concat(this._getID(), "\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" ").concat(dataset.join(' '), ">\n                <div class=\"modal-dialog modal-dialog-centered ").concat(this._getSize(), "\">\n                    <div class=\"modal-content\"></div>\n                </div>\n            </div>"));

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
var EventObserver =
/*#__PURE__*/
function () {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Saved item not found
 *
 * Using in fastSave handler
 */
var SavedItemNotFound =
/*#__PURE__*/
function (_Error) {
  _inherits(SavedItemNotFound, _Error);

  function SavedItemNotFound() {
    _classCallCheck(this, SavedItemNotFound);

    var message = 'SavedItemNotFound';
    return _possibleConstructorReturn(this, _getPrototypeOf(SavedItemNotFound).call(this, message));
  }

  return SavedItemNotFound;
}(_wrapNativeSuper(Error));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





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

    if (canReload(_this)) {
      location.reload();
    }

    if (parseInt(_this.dataset.dismiss) === 1) {
      currentButton.closest('.modal').modal('hide');
    }

    Object(components_http_successHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(response);
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
/* harmony import */ var raven_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raven-js */ "../../../node_modules/raven-js/src/singleton.js");
/* harmony import */ var raven_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(raven_js__WEBPACK_IMPORTED_MODULE_15__);
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).on('click', '#product_id', function () {
  console.log('product_id');
  $('#product_id').prev('.select2-container').find('.select2-search__field').focus();
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  new components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](currentBtn.attr('href')).method('PUT').data(_objectSpread({}, shops, {}, department)).success(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL3VzZXIvcHJvamVjdHMvc3RvY2t3b3JrZXIvbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL21vZGFsQ29uZmlybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9iYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9hZGRFbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9hamF4UGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9jb25maXJtTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvZmFzdFNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2ZpbHRlckRhdGVSYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9tb2RhbERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvcGFnZUxpbWl0LmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3JlbW92ZUVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3N1Ym1pdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGaWxlUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldEZvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0U3ViRm9sZGVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9hd2FyZENyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2Ryb3Bab25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvdXBkYXRlU2F2ZUFsbEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzIHN5bmMgXFwuXFwvW1xcdy1fXStcXC9tb2R1bGVcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcyBzeW5jIG1vZHVsZXMoLiopbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLWxvZy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9oYW5kbGVycy9jb2xsYXBzZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9oYW5kbGVycy9yZW1vdmVBY3Rpb25UeXBlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9saXN0ZW5lcnMvdXBkYXRlSW5kZXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL3N0eWxlLnNjc3M/NDE2NSIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FkZC1tZS9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hZGQtbWUvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzLWxvZy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMtbG9nL3N0eWxlcy5zY3NzPzc0ODUiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9jb3B5QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2Rvd25sb2FkQXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2dldExhc3RDb2xsZWN0aW9uTnVtYmVyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL21hcmtDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2F3YXJkL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9oYW5kbGVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvY29weUFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9kb3dubG9hZEFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2hpZGVBcmNoaXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvaGlkZVRhc2tzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2VsZWN0Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2hvd0FyY2hpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9zaG93VGFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9zdHlsZXMuc2Nzcz9jNGI0Iiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9mYXN0U2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvaGlkZUFkZGl0aW9uYWxSb3dzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9tYXJrSW5wdXRBc0NoYW5nZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9zdHlsZS5zY3NzPzdkMjkiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jcm9wL2hhbmRsZXJzL2FkZFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Nyb3AvaGFuZGxlcnMvZGVsZXRlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY3JvcC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvaGFuZGxlcnMvc2F2ZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L3N0eWxlLnNjc3M/NmVhNyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2RlcGxveVN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3lQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvc3R5bGVzLnNjc3M/NGNjMSIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvaGFuZGxlcnMvc2F2ZURwYVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2R5ZS9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvY2hhbmdlUm93SW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvZHllU2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9hc3NldENoYW5nZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvZmFzdFNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL3JlbW92ZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGVscGVycy9wb3NpdGlvblVwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9saXN0ZW5lcnMvYWRkUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvaGFuZGxlcnMvc2hvd0Fzc2V0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbGlua2VkLWFzc2V0cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL3JlbW92ZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9zYXZlTG9jYWxpemF0aW9uU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFnaWMvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFnaWMvaGFuZGxlcnMvc2F2ZU1hZ2ljU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWdpYy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L2hhbmRsZXJzL2dldExhc3RNYWtldXBLaXRJRC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQtYXNzZXQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50LWdyb3Vwcy9oYW5kbGVycy9pbmdyZWRpZW50RGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50LWdyb3Vwcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudHMvaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsL2hhbmRsZXJzL21lYWxEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9oYW5kbGVycy9jaGFuZ2VUeXBlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmV3cy1naWZ0cy1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmV3cy1naWZ0cy1sb2cvc3R5bGVzLnNjc3M/M2QyNyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9oYW5kbGVycy9wcmljZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3B1cmNoYXNlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3B1cmNoYXNlL3N0eWxlLnNjc3M/OGE4YyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2Ryb3B6b25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL21hcmtDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvaGFuZGxlcnMvc2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9zYXZlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL2FkZFNob3AuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvcmFkaW9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZURlcGFydG1lbnRJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L3N0eWxlcy5zY3NzPzZlOWEiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtcmVsZWFzZXMvaGFuZGxlcnMvc2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3Atc3RhdHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvaGFuZGxlcnMvc2F2ZVNvdW5kU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zb3VuZC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zdWJ0eXBlLWF0dHJpYnV0ZXMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL3N0eWxlcy5zY3NzPzg5NzQiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YW1hdG9vbC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9hZGRDb2xsZWN0aWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2FkZENvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VNb3ZlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvY2hhbmdlUGFnZUxpbWl0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvY2hhbmdlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvY2hhbmdlUmFuZG9tTmVpZ2hib3JzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvaGlkZVBsYWNlbWVudEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2xvYWRQbGFjZW1lbnRBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9zZWxlY3RSb3dzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvdXBkYXRlTmVpZ2hib3JzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbGlzdGVuZXJzL2FkZE5laWdoYm9yLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbGlzdGVuZXJzL2RlbGV0ZU5laWdoYm9yLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbGlzdGVuZXJzL3NlYXJjaE5laWdoYm9yLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbGlzdGVuZXJzL3NlYXJjaFVzZXJBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc3VibWl0VXNlclBhcnRGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvc3R5bGVzLnNjc3M/OGY3MyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguc2Nzcz8wMDAzIl0sIm5hbWVzIjpbIlNJWkVTIiwic20iLCJtZCIsImxnIiwiTE9BRElOR19URVhUIiwiZHJvcHpvbmVDb250YWluZXIiLCJjb25maWciLCJfY29uZmlnIiwiX2Ryb3B6b25lQ29udGFpbmVyIiwiX2NhbmNlbEJ1dHRvbiIsIiQiLCJmaW5kIiwidXJsIiwiX3VwbG9hZFVybCIsIm5hbWUiLCJfcHJldmlldyIsImNhbGxiYWNrIiwiX2Vycm9yQ2FsbGJhY2siLCJfY2FuY2VsQ2FsbGJhY2siLCJfc3VjY2Vzc0NhbGxiYWNrIiwiX2Ryb3B6b25lQnVpbGRlciIsImRyb3B6b25lRmFpbCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidGh1bWJuYWlsV2lkdGgiLCJ0aHVtYm5haWxIZWlnaHQiLCJ1cGxvYWRNdWx0aXBsZSIsImFjY2VwdGVkRmlsZXMiLCJoZWFkZXJzIiwiQ1NSRl9UT0tFTiIsImluaXQiLCJlbWl0Iiwib24iLCJ0ZXh0IiwiZmlsZSIsInJlc3BvbnNlIiwiY2xpY2siLCJEcm9wem9uZSIsIl91cmwiLCJfbWV0aG9kIiwiX2RhdGEiLCJfZXJyb3IiLCJlcnJvckhhbmRsZXIiLCJfc3VjY2VzcyIsInN1Y2Nlc3NIYW5kbGVyIiwiX2NvbXBsZXRlIiwibWV0aG9kIiwiZGF0YSIsImZuIiwiYWpheCIsInR5cGUiLCJlcnJvciIsInJlc3BvbnNlSlNPTiIsInN1Y2Nlc3MiLCJjb21wbGV0ZSIsInJvdXRlIiwibG9jYXRpb24iLCJocmVmIiwibWVzc2FnZSIsIm5vdGlmeUVycm9yIiwiZXJyb3JzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsIm5vdGlmeVN1Y2Nlc3MiLCJtb2RhbHNDb250YWluZXIiLCJNT0RBTF9TSVpFUyIsIm1vZGFsSW5kZXgiLCJtb2RhbENvdW50ZXIiLCJfaWQiLCJzaXplIiwiX3NpemUiLCJoZWFkZXIiLCJfaGVhZGVyIiwiYm9keSIsIl9ib2R5IiwiZm9vdGVyIiwiX2Zvb3RlciIsImRhdGFzZXQiLCJfZGF0YXNldCIsInJlc3VsdCIsImFwcGVuZCIsIl9iZWZvcmVCdWlsZENhbGxiYWNrIiwiX2FmdGVyQnVpbGRDYWxsYmFjayIsIl9vbkNsb3NlQ2FsbGJhY2siLCJjb250ZW50IiwicHVzaCIsImh0bWwiLCJfZ2V0SUQiLCJqb2luIiwiX2dldFNpemUiLCJfYmVmb3JlQnVpbGQiLCJfZ2V0SGVhZGVyIiwiX2dldEJvZHkiLCJfZ2V0Rm9vdGVyIiwic2VsZWN0MiIsImRhdGV0aW1lcGlja2VyIiwiZm9ybWF0IiwiYXV0b2Nsb3NlIiwibWluVmlldyIsIl9hZnRlckJ1aWxkIiwib2ZmIiwiX29uQ2xvc2UiLCJtb2RhbCIsImdldE1vZGFsQ291bnRlciIsIm1vZGFsQ29uZmlybSIsIk1vZGFsQnVpbGRlciIsIm5vdGlmeSIsInpfaW5kZXgiLCJFdmVudE9ic2VydmVyIiwic3Vic2NyaWJlcnMiLCJldmVudCIsImhhbmRsZXIiLCJfbG9nIiwiZm9yRWFjaCIsInN0YXRlIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInRvVXBwZXJDYXNlIiwib2JzZXJ2ZXIiLCJTYXZlZEl0ZW1Ob3RGb3VuZCIsIkVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudEJ1dHRvbiIsInRhcmdldCIsInRlbXBsYXRlIiwiaWRQbGFjZWhvbGRlciIsInJvd0lkIiwiZW1iZWRGb3JtIiwiZW1iZWRCbG9ja0lkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJSZWdFeHAiLCJsZW5ndGgiLCJkaXNwYXRjaCIsInRyaWdnZXIiLCJjb250YWluZXIiLCJwYXJlbnRzIiwiaHR0cCIsInJlcGxhY2VXaXRoIiwic2VuZCIsImRhdGFTZXQiLCJwYXJlbnRCdXR0b24iLCJidG5DbGFzcyIsImJ0bk5hbWUiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwiaGFzT3duUHJvcGVydHkiLCJjbG9zZXN0Iiwic2VyaWFsaXplQXJyYXkiLCJwYXJzZUludCIsInJlbG9hZCIsImRpc21pc3MiLCJjdXJyZW50QnRuIiwic2F2ZWRJdGVtIiwiYXR0ciIsImdldEZvcm1EYXRhIiwiQ09OVEFJTkVSX1NFTEVDVE9SIiwiUEFHRV9TQVZFRCIsIlVQREFURV9TQVZFX0FMTF9CVVRUT04iLCJmb3JtSXRlbXMiLCJtYXJrQ2hhbmdlZCIsImRhdGVGb3JtYXQiLCJkYXRlUmFuZ2VJbnB1dHMiLCJzZWxlY3RlZE9wdGlvbiIsImRhdGVGcm9tIiwiZGF0ZVRvIiwic2VsZWN0ZWRWYWx1ZSIsInZhbCIsImNzcyIsInZpc2liaWxpdHkiLCJoZWlnaHQiLCJkYXRlRnJvbVZhbHVlIiwiZGF0ZVRvVmFsdWUiLCJtb21lbnQiLCJzdWJ0cmFjdCIsImRheSIsInN0YXJ0T2YiLCJlbmRPZiIsImRvY3VtZW50Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiZWFjaCIsInJlbW92ZUF0dHIiLCJyZWFkeSIsInRhYmxlc29ydGVyIiwic3RpY2t5VGFibGVIZWFkZXJzIiwibW9kYWxEYXRhIiwiY29uZmlybU1vZGFsIiwic3VibWl0Rm9ybSIsImFqYXhQYWdpbmF0aW9uIiwiYWRkRW1iZWQiLCJyZW1vdmVFbWJlZCIsImZhc3RTYXZlIiwicGFnZUxpbWl0IiwiZGF0ZVJhbmdlIiwiZmlsdGVyRGF0ZVJhbmdlIiwiY2hhbmdlIiwiaW5pdFN0aWNreSIsImZhc3RTYXZlUGFnZSIsImFmdGVyQnVpbGQiLCJvbkNsb3NlIiwiY2xvc2VFdmVudCIsIlVSTCIsIndpbmRvdyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmVudCIsImlkIiwiY2FuUmVsb2FkIiwiYnV0dG9uIiwiZGF0YVJlbG9hZCIsInJvb3RGb2xkZXIiLCJmaWxlTmFtZSIsImdldFN1YkZvbGRlciIsImZvcm0iLCJmb3JtRGF0YSIsImN1cnJlbnRJdGVtIiwicHJvcCIsImZpbGVOYW1lSGFzaCIsIm1kNSIsInN1YnN0cmluZyIsInBhdGhQYXJ0cyIsIm1hdGNoIiwialF1ZXJ5IiwicGF0aCIsInBhdGhuYW1lIiwic3BsaXQiLCJtb2R1bGVzIiwicmVxdWlyZSIsIm1vZHVsZSIsIm1vZHVsZUl0ZW1zIiwic3ViTW9kdWxlcyIsInN1YnNjcmliZSIsIkFXQVJEX0NSRUFURSIsInNlbGYiLCJ1bnN1YnNjcmliZSIsImVkaXRCdG4iLCJ0ZW1wbGF0ZUlkIiwidGVtcGxhdGVQbGFjZWhvbGRlciIsImF3YXJkX2lkIiwiZmllbGROYW1lIiwiQVdBUkRfQ1JFQVRFRCIsIkFXQVJEX0RFTEVURSIsImNyZWF0ZUJ0biIsImNoaWxkcmVuIiwiRVZFTlRfTkFNRSIsImRyb3B6b25lRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwicHJldmlld1VSTCIsImRyb3B6b25lQnVpbGRlciIsIkRyb3B6b25lQnVpbGRlciIsInNldFVwbG9hZFVybCIsImNhbmNlbCIsImZpbGVfbmFtZSIsInZhbHVlIiwic2V0UHJldmlldyIsImdldEZpbGVQYXRoIiwiZm9sZGVyIiwiYnVpbGQiLCJzYXZlQWxsQnV0dG9uIiwiY291bnRlciIsImNvdW50Iiwic2hvdyIsImhpZGUiLCJwcmV2IiwiZm9jdXMiLCJBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCIsIkRFTFRBX1RJTUVfQVRUUklCVVRFIiwidG9nZ2xlQ2xhc3MiLCJjdXJyZW50RWxlbWVudCIsIlJlcXVlc3RCdWlsZGVyIiwiaW5kZXgiLCJfIiwiaXRlbSIsInVwZGF0ZUluZGV4ZXMiLCJjdXJyZW50TGkiLCJkZWx0YVRpbWVIaWRkZW4iLCJkZWx0YVRpbWVEaXNwbGF5IiwidGltZVR5cGUiLCJjb2xsYXBzZVN0YXRlIiwiY29sbGFwc2VTdGF0ZXMiLCJyZW1vdmVBY3Rpb25UeXBlU3RhdGUiLCJzYXZlU3RhdGUiLCJyZXNwIiwiQU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk0iLCJhd2FyZENyZWF0ZSIsImJpbmQiLCJfdGhpcyIsImF3YXJkRGVsZXRlIiwiQ0xPU0VfQVdBUkRfTU9EQUwiLCJzaG93Rm9ybSIsIm5leHQiLCJzZXRTdWJ0eXBlcyIsInN1YnR5cGUiLCJhc3NldEZvcm1TdWJ0eXBlIiwiYXNzZXRGb3JtQWN0aW9uVHlwZSIsImFzc2V0Rm9ybUNvbGxlY3Rpb24iLCJwcmljZXMiLCJlbXB0eSIsIlNVQl9UWVBFUyIsImVsZW1lbnQiLCJjb3B5QXNzZXRzIiwiYXNzZXRJZHNGaWVsZCIsIndpdGhOYW1lIiwiYXNzZXRJZHMiLCJuIiwiYXNzZXRJZCIsImFzc2V0TmFtZSIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiZG93bmxvYWRBc3NldHMiLCJjb2xsZWN0aW9uX2lkIiwicGFyZW50Q29udGFpbmVyIiwiY2hhbmdlVHlwZSIsImdldExhc3RDb2xsZWN0aW9uTnVtYmVyIiwiY3VycmVudFRkIiwidXBkYXRlU2F2ZUFsbEJ1dHRvbiIsIkJBTk5FUl9TSE9XX0ZPUk0iLCJUWVBFX1NFTEVDVF9JRCIsInNlbGVjdGVkSW5kZXgiLCJvcHRpb25zIiwic2VsZWN0ZWRFbGVtZW50IiwiZHJvcFpvbmVJbml0IiwiY29weUFkcCIsImFkcElkc0ZpZWxkIiwiYWRwSWRzIiwiYWRwSWQiLCJkb3dubG9hZEFkcCIsImhpZGVBcmNoaXZlIiwiaGlkZVRhc2tzIiwic2VsZWN0Um93IiwiY2hlY2tib3giLCJpcyIsInNob3dBcmNoaXZlIiwiYWN0aW9uIiwic2hvd1Rhc2tzIiwiQ0FTSCIsIkNPSU4iLCJBU1NFVCIsInNvdXJjZVZhbCIsIm1hdGNoZXIiLCJwYXJhbXMiLCJpbkFycmF5Iiwid3JhcHBlciIsImdldFNlbGVjdGlvbiIsIkNPTExFQ1RJT05fU0hPV19GT1JNIiwiYXNzZXRQcmV2aWV3VGVtcGxhdGUiLCJhc3NldHMiLCJjdXJyZW50QXNzZXQiLCJwcmV2aWV3X3VybCIsIlNvcnRhYmxlIiwiZ3JvdXAiLCJyZW1vdmVDbG9uZU9uSGlkZSIsIm9uRW5kIiwicG9zaXRpb24iLCJtYXJrSW5wdXRBc0NoYW5nZWQiLCJzb3J0YWJsZUluaXQiLCJoaWRlQWRkaXRpb25hbFJvd3MiLCJhZGRSb3ciLCJhZGRfY291bnRlciIsInRib2R5IiwidHJMYXN0IiwibGFzdElEIiwibGFzdCIsImluY3JlbWVudElkIiwiaSIsImRlbGV0ZVJvdyIsInJvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImFkZE5ld1JvdyIsImxhc3RJRFMiLCJmaXJzdCIsIk1hdGgiLCJtYXgiLCJhcHBseSIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJkZXBsb3lTdGF0dXMiLCJERVBMT1lfU1RBVFVTX1JPVVRFIiwiaXNBY3RpdmUiLCJzZXRUaW1lb3V0IiwiY2hhbmdlVGFiIiwiZGlyZWN0aW9uIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInNob3dEZXBlbmRlbmN5IiwiY3VycmVudENvbmZpZyIsImFkZE1vZGUiLCJvbmVMZXZlbFNob3ciLCJjb25maWdOYW1lIiwibGV2ZWwiLCJERVBMT1lfREVQRU5EUyIsImNvbmZpZ0Jsb2NrIiwiZGVwZW5kQ29uZmlnTmFtZSIsInNob3dEZXBlbmRlbmN5UG9wdXAiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50Q29uZmlnSWQiLCJpZHMiLCJyb290TGV2ZWxTaG93IiwiaWRSZXNwb25zZSIsInRleHRDbGFzcyIsImlzUmVjdXJzaW9uIiwiZ2V0RGVwbG95TW9kZWxJZHMiLCJERVBMT1lfTU9ERUxfSURTX1JPVVRFIiwiQUNUSVZFX0RJUkVDVElPTiIsImNoZWNrZWQiLCJzYXZlRHBhU3RhdGUiLCJsYXN0Um93IiwiY29sb3JwaWNrZXIiLCJjaGFuZ2VSb3dJbmRleCIsInJvd0luZGV4Iiwib2xkTmFtZSIsIm5ld05hbWUiLCJpbmRleE9mIiwiRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUiIsIm1hcmtDaGFuZ2VkVHIiLCJkeWVTYXZlUGFnZSIsIkdJRlRfV1JBUF9ST1dfQURERUQiLCJjdXJyZW50SW5wdXQiLCJhc3NldElEIiwiY3VycmVudEFzc2V0RHVwbGljYXRlIiwiZXJyIiwicG9zaXRpb25VcGRhdGUiLCJidXR0b25VcmwiLCJwYWdlIiwicGFnZV9saW1pdCIsImFzc2V0Q2hhbmdlZCIsInJlbW92ZVJvdyIsInNob3dBc3NldCIsIlNXT1dfQVNTRVRfUk9VVEUiLCJwcmVwZW5kIiwic2F2ZUxvY2FsaXphdGlvblN0YXRlIiwiY3VycmVudEtleSIsImN1cnJlbnRLZXlEdXBsaWNhdGUiLCJzYXZlTWFnaWNTdGF0ZSIsIm1ha2V1cF9raXRfaWQiLCJnZXRMYXN0TWFrZXVwS2l0SUQiLCJNQUtFVVBfS0lUX1NIT1dfRk9STSIsImluZ3JlZGllbnREZWxldGUiLCJtZWFsRGVsZXRlIiwic2F2ZU1lYWxTdGF0ZSIsIk5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSIsIlRSQVNIIiwiVFJBU0hfRklFTERTX0lEIiwiU0VMRUNUX0lEIiwidHJhc2hGaWVsZHMiLCJQUk9EVUNUX1NIT1dfRk9STSIsIkNsZWF2ZSIsIm51bWVyYWwiLCJwcmVmaXgiLCJyYXdWYWx1ZVRyaW1QcmVmaXgiLCJvblZhbHVlQ2hhbmdlZCIsInJvdW5kIiwicmF3VmFsdWUiLCJwcm9kdWN0UHJpY2UiLCJwcmljZUluaXQiLCJtYXhJZCIsIm5ld0xlbmd0aCIsInRySWQiLCJuZXdSb3ciLCJuZXdSb3dIdG1sIiwiZGVmYXVsdFZhbHVlIiwiZ2V0Iiwib3V0ZXJIVE1MIiwiYWZ0ZXIiLCJwcmV2aWV3SGlkZGVuSW5wdXQiLCJzYXZlUGFnZSIsInNhdmVSb3ciLCJyb3dUb1NhdmUiLCJyIiwiY29uZmlybSIsImRhdGFUeXBlIiwianFYSFIiLCJleGNlcHRpb24iLCJlcnJvcktleSIsIm1lc3NhZ2VLZXkiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUluaXQiLCJzYXZlQnV0dG9uIiwiV0FMS19DQVRFR09SWSIsIlJVTl9DQVRFR09SWSIsInNlbGVjdFZhbCIsImVtYmVkIiwiU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSIsInRhYmxlIiwiZGVwYXJ0bWVudElkIiwic2hvcE5hbWVQcmVmaXgiLCJkZXBhcnRtZW50TmFtZVByZWZpeCIsImZhc3RTYXZlQ29udGFpbmVyIiwic2hvcHMiLCJkZXBhcnRtZW50IiwiZGVwaW5kZXgiLCJkZXBhcnRtZW50Rm9ybURhdGEiLCJpdGVtTmFtZSIsImFsbEl0ZW1zIiwicmFkaW8iLCJwcmV2aWV3VXJsRWxlbWVudCIsInJhZGlvSW5wdXQiLCJhZGRTaG9wIiwic29ydGFibGVEZXBhcnRtZW50SW5pdCIsInNhdmVTb3VuZFN0YXRlIiwiVEFNQVRPT0xfU0hPV19GT1JNIiwiU0VBUkNIX1VTRVJfQVNTRVRTIiwiU1VCTUlUX1VTRVJfUEFSVF9GT1JNIiwiREVMRVRFX05FSUdIQk9SIiwiQUREX05FSUdIQk9SIiwiR0VUX05FSUdIQk9SUyIsIlVQREFURV9ORUlHSEJPUlMiLCJORUlHSEJPUl9HUklEX0lEIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJtb2RlbCIsImNyZWF0ZWRfYnkiLCJjcmVhdGVkX2F0Iiwic2VsZWN0ZWRTdG9yYWdlIiwicGxhY2VtZW50TmFtZSIsIm5laWdoYm9yc0NvdW50Iiwic2libGluZ3MiLCJwbGFjZW1lbnQiLCJsb2FkUGFydCIsIlBMQUNFTUVOVF9BU1NFVFNfUk9VVEUiLCJpdGVtcyIsInBvcG92ZXIiLCJjb3VudFNlbGVjdG9yIiwicm93c0ZvclNlbGVjdCIsImNvdW50Rm9yU2VsZWN0IiwibmVpZ2hib3JfaWQiLCJzdGF0dXNfdGV4dCIsInNlYXJjaFVzZXJBc3NldHMiLCJzdWJtaXRVc2VyUGFydEZvcm0iLCJkZWxldGVOZWlnaGJvciIsImFkZE5laWdoYm9yIiwic2VhcmNoTmVpZ2hib3IiLCJsb2FkUGxhY2VtZW50QXNzZXRzIiwiY2hhbmdlUGxhY2VtZW50IiwiY2hhbmdlUmFuZG9tTmVpZ2hib3JzIiwiaGlkZVBsYWNlbWVudEFzc2V0cyIsInNlbGVjdFJvd3MiLCJjaGFuZ2VNb3ZlUGxhY2VtZW50IiwidXBkYXRlTmVpZ2hib3JzIiwiY2hhbmdlUGFnZUxpbWl0IiwiYWRkQ29tbWVudCIsImFkZENvbGxlY3RpYmxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFFbEI7Ozs7QUFHQUMseUVBQWM7QUFFZDs7OztBQUdBQyxzRUFBVztBQUVYOzs7O0FBR0FDLHlFQUFjO0FBRWRsaEIsQ0FBQyxDQUFDOEssUUFBRDtBQUVHOzs7QUFGSixDQUtLeEosRUFMTCxDQUtRLE9BTFIsRUFLaUIsY0FMakIsRUFLaUM2ZixxRUFMakM7QUFPSTs7O0FBUEosQ0FVSzdmLEVBVkwsQ0FVUSxRQVZSLEVBVWtCLHNCQVZsQixFQVUwQzhmLGlFQVYxQztBQVlJOzs7QUFaSixDQWVLOWYsRUFmTCxDQWVRLFFBZlIsRUFla0Isc0JBZmxCLEVBZTBDK2YsdUVBZjFDO0FBaUJJOzs7QUFqQkosQ0FvQksvZixFQXBCTCxDQW9CUSxPQXBCUixFQW9CaUIsY0FwQmpCLEVBb0JpQ2dnQixxRUFwQmpDO0FBc0JJOzs7QUF0QkosQ0F5QktoZ0IsRUF6QkwsQ0F5QlEsUUF6QlIsRUF5QmtCLGNBekJsQixFQXlCa0NpZ0IsNkRBekJsQztBQTJCSTs7O0FBM0JKLENBOEJLamdCLEVBOUJMLENBOEJRLFFBOUJSLEVBOEJrQix3QkE5QmxCLEVBOEI0Q2tnQixxRUE5QjVDO0FBZ0NJOzs7QUFoQ0osQ0FtQ0tsZ0IsRUFuQ0wsQ0FtQ1EsT0FuQ1IsRUFtQ2lCLDBDQW5DakIsRUFtQzZEbWdCLGtFQW5DN0Q7QUFvQ0k7OztBQXBDSixDQXVDTW5nQixFQXZDTixDQXVDUyxRQXZDVCxFQXVDbUIsc0JBdkNuQixFQXVDMkNvZ0Isa0VBdkMzQztBQXlDSTs7O0FBekNKLENBNENLcGdCLEVBNUNMLENBNENRLE9BNUNSLEVBNENpQixjQTVDakIsRUE0Q2lDcWdCLDZEQTVDakM7QUE4Q0k7OztBQTlDSixDQWlES3JnQixFQWpETCxDQWlEUSxPQWpEUixFQWlEaUIsa0JBakRqQixFQWlEcUNzZ0IsaUVBakRyQyxFOzs7Ozs7Ozs7Ozs7QUMzQ0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvKipcbiAqIEJhc2Ugc2l6ZXNcbiAqXG4gKiBAdHlwZSB7e3NtOiBzdHJpbmcsIGxnOiBzdHJpbmd9fVxuICovXG5leHBvcnQgY29uc3QgU0laRVMgPSB7XG4gICAgc206ICdzbScsXG4gICAgbWQ6ICdtZCcsXG4gICAgbGc6ICdsZycsXG59O1xuIiwiaW1wb3J0IERyb3B6b25lIGZyb20gJ2Ryb3B6b25lJztcblxuLyoqXG4gKiBMb2FkaW5nIHRleHRcbiAqIEl0IHdpbGwgYmUgc2hvd24gYWZ0ZXIgdGhlIHN0YXJ0IG9mIGltYWdlIHVwbG9hZGluZ1xuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IExPQURJTkdfVEVYVCA9ICdMb2FkaW5nLi4uJztcblxuLyoqXG4gKiBEcm9wem9uZSBidWlsZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZHJvcHpvbmVDb250YWluZXJcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJvcHpvbmVDb250YWluZXIsIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fZHJvcHpvbmVDb250YWluZXIgPSBkcm9wem9uZUNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5fY2FuY2VsQnV0dG9uID0gJChkcm9wem9uZUNvbnRhaW5lcikuZmluZCgnLmRyb3B6b25lLWNhbmNlbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB1cmwgdG8gdXBsb2FkaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgc2V0VXBsb2FkVXJsKHVybCkge1xuICAgICAgICB0aGlzLl91cGxvYWRVcmwgPSB1cmw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBkZWZhdWx0IHByZXZpZXcgaW1hZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHNldFByZXZpZXcobmFtZSwgdXJsKSB7XG4gICAgICAgIHRoaXMuX3ByZXZpZXcgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBlcnJvciBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBlcnJvcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9lcnJvckNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYW5jZWwgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgY2FuY2VsKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBzdWNjZXNzIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIHN1Y2Nlc3MoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fc3VjY2Vzc0NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGRyb3B6b25lXG4gICAgICogQHJldHVybnMge0Ryb3B6b25lfVxuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgX2Ryb3B6b25lQnVpbGRlciA9IHRoaXM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgYWZ0ZXIgZmFpbFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcHpvbmVGYWlsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChfZHJvcHpvbmVCdWlsZGVyLl9kcm9wem9uZUNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2R6LXN0YXJ0ZWQnKTtcbiAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kei1wcmV2aWV3JykucmVtb3ZlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlndXJhdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHVybDogdGhpcy5fdXBsb2FkVXJsLFxuICAgICAgICAgICAgdGh1bWJuYWlsV2lkdGg6IG51bGwsXG4gICAgICAgICAgICB0aHVtYm5haWxIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICB1cGxvYWRNdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiAnaW1hZ2UvKicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gtY3NyZi10b2tlbic6IENTUkZfVE9LRU5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFNldCBjdXJyZW50IGltYWdlIGluIHRoZSBkcm9wem9uZSBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3ICYmICEhX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldy51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiYWRkZWRmaWxlXCIsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ0aHVtYm5haWxcIiwgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldywgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldy51cmwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEFkZGVkIGZpbGUgaGFuZGxlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQoTE9BRElOR19URVhUKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24gKGZpbGUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3B6b25lRmFpbCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9lcnJvckNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9lcnJvckNhbGxiYWNrKGZpbGUsIHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBTdWNjZXNzIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwic3VjY2Vzc1wiLCBmdW5jdGlvbiAoZmlsZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9zdWNjZXNzQ2FsbGJhY2soZmlsZSwgcmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXIgYnV0dG9uIGhhbmRsZXJcbiAgICAgICAgICogQ2xlYXIgZmlsZSBpbmZvIGluIGRyb3B6b25lXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoISF0aGlzLl9jYW5jZWxCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZHJvcHpvbmVGYWlsKCk7XG4gICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fY2FuY2VsQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX2Ryb3B6b25lQnVpbGRlci5fY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIG5ldyBEcm9wem9uZSh0aGlzLl9kcm9wem9uZUNvbnRhaW5lciwgey4uLmNvbmZpZywgLi4udGhpcy5fY29uZmlnfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tICcuL2Vycm9ySGFuZGxlcic7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcIi4vc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBIVFRQIFJlcXVlc3QgQnVpbGRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgICB0aGlzLl9tZXRob2QgPSAnZ2V0JztcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLl9lcnJvciA9IGVycm9ySGFuZGxlcjtcbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IHN1Y2Nlc3NIYW5kbGVyO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIH1cblxuICAgIG1ldGhvZChtZXRob2QpIHtcbiAgICAgICAgdGhpcy5fbWV0aG9kID0gbWV0aG9kO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlcnJvcihmbikge1xuICAgICAgICB0aGlzLl9lcnJvciA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN1Y2Nlc3MoZm4pIHtcbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKGZuKSB7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2VuZCgpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdGhpcy5fdXJsLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5fbWV0aG9kLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5fZGF0YSxcbiAgICAgICAgICAgIGVycm9yOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhcmVzcG9uc2UucmVzcG9uc2VKU09OKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yKHJlc3BvbnNlLnJlc3BvbnNlSlNPTik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRoaXMuX3N1Y2Nlc3MsXG4gICAgICAgICAgICBjb21wbGV0ZTogdGhpcy5fY29tcGxldGUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQmFzZSBlcnJvciBoYW5kbGVyXG4gKlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdG8gdGhlIHJvdXRlXG4gICAgICovXG4gICAgaWYgKCEhcmVzcG9uc2Uucm91dGUpIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJvdXRlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBtYWluIGVycm9yIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBpZiAoISFyZXNwb25zZS5tZXNzYWdlKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgYWxsIG1lc3NhZ2VzXG4gICAgICovXG4gICAgaWYoISFyZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2UuZXJyb3JzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JzW2tleV0ubWFwKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBub3RpZnlFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vUmVxdWVzdEJ1aWxkZXInO1xuIiwiaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcblxuLyoqXG4gKiBCYXNlIGVycm9yIGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgLyoqXG4gICAgICogU2hvdyBtYWluIGVycm9yIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBpZiAoISFyZXNwb25zZS5tZXNzYWdlKSB7XG4gICAgICAgIG5vdGlmeVN1Y2Nlc3MocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL21vZGFsJztcbmltcG9ydCAnLi9vYnNlcnZlcic7XG5pbXBvcnQgJy4vaHR0cCc7XG4iLCJjb25zdCBtb2RhbHNDb250YWluZXIgPSAkKCdib2R5Jyk7XG5cbmNvbnN0IE1PREFMX1NJWkVTID0ge1xuICAgIHNtOiAnbW9kYWwtc20nLFxuICAgIG1kOiAnbW9kYWwtbWQnLFxuICAgIGxnOiAnbW9kYWwtbGcnLFxufTtcblxuLyoqXG4gKiBVbmlxdWUgaW5kZXggb2YgdGhlIG1vZGFsXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqL1xubGV0IG1vZGFsSW5kZXggPSAwO1xuXG4vKipcbiAqIENvdW50ZXIgb2YgdGhlIG1vZGFscyBhdCB0aGUgcGFnZVxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmxldCBtb2RhbENvdW50ZXIgPSAwO1xuXG4vKipcbiAqIE1vZGFsIEJ1aWxkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIG1vZGFsSW5kZXgrKztcbiAgICAgICAgdGhpcy5faWQgPSAnbW9kYWxzLWNvbnRhaW5lci1pdGVtLScgKyBtb2RhbEluZGV4O1xuICAgIH1cblxuICAgIHNpemUoc2l6ZSkge1xuICAgICAgICBpZiAoISFNT0RBTF9TSVpFU1tzaXplXSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IE1PREFMX1NJWkVTW3NpemVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZGVyKGhlYWRlcikge1xuICAgICAgICB0aGlzLl9oZWFkZXIgPSBoZWFkZXI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYm9keShib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHkgPSBib2R5O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZvb3Rlcihmb290ZXIpIHtcbiAgICAgICAgdGhpcy5fZm9vdGVyID0gZm9vdGVyO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRhdGFzZXQoZGF0YXNldCkge1xuICAgICAgICB0aGlzLl9kYXRhc2V0ID0gZGF0YXNldDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfZ2V0SUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBfZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fc2l6ZSA/IHRoaXMuX3NpemUgOiBNT0RBTF9TSVpFUy5tZDtcbiAgICB9XG5cbiAgICBfZ2V0SGVhZGVyKCkge1xuICAgICAgICBpZiAoISF0aGlzLl9oZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiR7dGhpcy5faGVhZGVyfTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgX2dldEZvb3RlcigpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmICghIXRoaXMuX2Zvb3Rlcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gJChgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPjwvZGl2PmApXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgkKGBcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBgKSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2Zvb3Rlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfZ2V0Qm9keSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmICghIXRoaXMuX2JvZHkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICQoYDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+PC9kaXY+YClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2JvZHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGJlZm9yZSBidWlsZCBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgYmVmb3JlQnVpbGQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfYmVmb3JlQnVpbGQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGwgYWZ0ZXIgYnVpbGQgbW9kYWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGFmdGVyQnVpbGQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9hZnRlckJ1aWxkKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBhZnRlciBjbG9zZSBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgb25DbG9zZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9vbkNsb3NlQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX29uQ2xvc2UoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25DbG9zZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW9kYWwoY29udGVudCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogRGF0YSBhdHRyaWJ1dGVzXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGxldCBkYXRhc2V0ID0gW107XG4gICAgICAgIGlmICghIXRoaXMuX2RhdGFzZXQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5fZGF0YXNldCkge1xuICAgICAgICAgICAgICAgIGRhdGFzZXQucHVzaChgZGF0YS0ke25hbWV9PVwiJHt0aGlzLl9kYXRhc2V0W25hbWVdfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaHRtbCA9ICQoYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7IHRoaXMuX2dldElEKCkgfVwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgJHtkYXRhc2V0LmpvaW4oJyAnKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgJHt0aGlzLl9nZXRTaXplKCl9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gKTtcblxuICAgICAgICBpZiAoISFjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkoY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbCB0aGUgYmVmb3JlQnVpbGQgY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkKCk7XG5cbiAgICAgICAgaHRtbC5maW5kKCcubW9kYWwtY29udGVudCcpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEhlYWRlcigpKVxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9nZXRCb2R5KCkpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEZvb3RlcigpKTtcblxuICAgICAgICBodG1sLmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuXG4gICAgICAgIGh0bWwuZmluZCgnLmRhdGVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgdGhlIGFmdGVyQnVpbGQgY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2FmdGVyQnVpbGQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdXBkYXRlIGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXG4gICAgICAgICAqL1xuICAgICAgICBtb2RhbENvdW50ZXIrKztcblxuICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbENvdW50ZXItLTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ2hpZGRlbi5icy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBDYWxsIHRoZSBvbkNsb3NlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5fb25DbG9zZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tb2RhbCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgY291bnRlciBvZiBtb2RhbHMgYXQgdGhlIHBhZ2VcbiAqXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kYWxDb3VudGVyKCkge1xuICAgIHJldHVybiBtb2RhbENvdW50ZXI7XG59XG4iLCJpbXBvcnQgJy4vTW9kYWxCdWlsZGVyJ1xuaW1wb3J0ICcuL21vZGFsQ29uZmlybSdcbiIsImltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5cbi8qKlxuICogTW9kYWwgY29uZmlybVxuICpcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vZGFsQ29uZmlybShtZXNzYWdlLCBjYWxsYmFjaykge1xuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcihtZXNzYWdlKVxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1zdWNjZXNzJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0NvbmZpcm0nLFxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgICAnY2xpY2snOiBjYWxsYmFja1xuICAgICAgICB9KSlcbiAgICAgICAgLm1vZGFsKCk7XG59XG4iLCIvKipcbiAqIE5vdGlmeSBoZWxwZXJcbiAqXG4gKiBAcGFyYW0gbWVzc2FnZVxuICogQHBhcmFtIHR5cGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm90aWZ5KG1lc3NhZ2UsIHR5cGUpIHtcbiAgICAkLm5vdGlmeSh7bWVzc2FnZTogbWVzc2FnZX0se1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB6X2luZGV4OiAxMDUxXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgbm90aWZ5IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBub3RpZnkobWVzc2FnZSwgJ2RhbmdlcicpO1xufVxuIiwiaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgbm90aWZ5KG1lc3NhZ2UsICdzdWNjZXNzJyk7XG59XG4iLCIvKipcbiAqIEV2ZW50IG9ic2VydmVyXG4gKi9cbmNsYXNzIEV2ZW50T2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fbG9nKCdzdWJzY3JpYmUnLCBldmVudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLnB1c2goaGFuZGxlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2ggKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX2xvZygnZGlzcGF0Y2gnLCBldmVudCk7XG5cbiAgICAgICAgaWYgKCEhdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihkYXRhLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdW5zdWJzY3JpYmUgKGV2ZW50LCBzdGF0ZSkge1xuICAgICAgICB0aGlzLl9sb2coJ3Vuc3Vic2NyaWJlJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICBpZighIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5maWx0ZXIoaGFuZGxlciA9PiBoYW5kbGVyICE9PSBzdGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIERlbGV0ZSBhbGwgc3Vic2NyaWJlcnNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nKG1ldGhvZCwgZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2cobWV0aG9kLnRvVXBwZXJDYXNlKCksICc6JywgJ1snLCBldmVudCwgJ10nKTtcbiAgICB9XG59XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEV2ZW50T2JzZXJ2ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXI7XG4iLCJpbXBvcnQgJy4vRXZlbnRPYnNlcnZlcic7XG4iLCIvKipcbiAqIFNhdmVkIGl0ZW0gbm90IGZvdW5kXG4gKlxuICogVXNpbmcgaW4gZmFzdFNhdmUgaGFuZGxlclxuICovXG5leHBvcnQgY2xhc3MgU2F2ZWRJdGVtTm90Rm91bmQgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnU2F2ZWRJdGVtTm90Rm91bmQnO1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuXG4vKipcbiAqIEFkZCBlbWJlZCBlbGVtZW50XG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3RhcmdldCcpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0ZW1wbGF0ZScpO1xuICAgIGNvbnN0IGlkUGxhY2Vob2xkZXIgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ2lkcGxhY2Vwb2xkZXInKTtcblxuICAgIGxldCByb3dJZCA9IGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnKTtcbiAgICBjdXJyZW50QnV0dG9uLmRhdGEoJ3Jvd2lkJywgKytyb3dJZCk7XG5cbiAgICBsZXQgZW1iZWRGb3JtID0gJCgnIycrIHRlbXBsYXRlKS5odG1sKCk7XG4gICAgY29uc3QgZW1iZWRCbG9ja0lkID0gcm93SWQgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpLnRvU3RyaW5nKDE2KTtcbiAgICBlbWJlZEZvcm0gPSBlbWJlZEZvcm0ucmVwbGFjZSgvJWVtYmVkQmxvY2tJZCUvZywgZW1iZWRCbG9ja0lkKTtcblxuICAgIGlmICghIWlkUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgZW1iZWRGb3JtID0gZW1iZWRGb3JtLnJlcGxhY2UoIG5ldyBSZWdFeHAoaWRQbGFjZWhvbGRlciwgXCJnXCIpLCByb3dJZClcbiAgICB9XG5cbiAgICAkKCcjJyArIHRhcmdldCkuYXBwZW5kKGVtYmVkRm9ybSk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBkaXNwYXRjaFxuICAgICAqL1xuICAgIGNvbnN0IGV2ZW50ID0gY3VycmVudEJ1dHRvbi5kYXRhKCdldmVudCcpO1xuICAgIGlmIChldmVudCAmJiBldmVudC5sZW5ndGgpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZXZlbnQsIHtcbiAgICAgICAgICAgIGVtYmVkQmxvY2tJZDogZW1iZWRCbG9ja0lkXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24udHJpZ2dlcignYWlfYW5pbWF0aW9uJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICpBamF4IHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQodGhpcykucGFyZW50cygnLmFqYXgtcGFnaW5hdGlvbicpLmRhdGEoJ2NvbnRhaW5lcicpO1xuICAgXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKCcjJyArIGNvbnRhaW5lcikucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBPcGVuIGNvbmZpcm0gbW9kYWwgYmVmb3JlIGFjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmhyZWY7XG4gICAgY29uc3QgcGFyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcihkYXRhU2V0LmhlYWRlcilcbiAgICAgICAgLmZvb3RlcihcbiAgICAgICAgICAgICQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAoZGF0YVNldC5idG5DbGFzcyB8fCAnYnRuLXNtIGJ0bi1zdWNjZXNzJykgKyAnIGJ0bicsXG4gICAgICAgICAgICAgICAgJ3RleHQnOiBkYXRhU2V0LmJ0bk5hbWUgfHwgJ0NvbmZpcm0nLFxuICAgICAgICAgICAgICAgICdjbGljayc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGFTZXQuaGFzT3duUHJvcGVydHkoJ3dpdGhGb3JtJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBwYXJlbnRCdXR0b24uY2xvc2VzdCgnZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXcgaHR0cCh1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1ldGhvZChkYXRhU2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGF0YVNldC5yZWxvYWQpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRhU2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gY3VycmVudEJ0bi5jbG9zZXN0KCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZGF0YVNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZGF0YShnZXRGb3JtRGF0YShzYXZlZEl0ZW0pKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX1NFTEVDVE9SID0gJy5mYXN0LXNhdmUtcGFnZS1jb250YWluZXInO1xuZXhwb3J0IGNvbnN0IFBBR0VfU0FWRUQgPSAnUEFHRV9TQVZFRCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1NBVkVfQUxMX0JVVFRPTiA9ICdVUERBVEVfU0FWRV9BTExfQlVUVE9OJztcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJChDT05UQUlORVJfU0VMRUNUT1IpO1xuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZGF0YVNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIE1hcmsgZm9ybSdzIGVsZW1lbnRzIGFzIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSAnWVlZWS1NTS1ERCc7XG4gICAgY29uc3QgZGF0ZVJhbmdlSW5wdXRzID0gJCgnI2RhdGUtcmFuZ2UtaW5wdXRzJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSAkKCcjZGF0ZS1yYW5nZS1zZWxlY3QnKS5maW5kKCc6c2VsZWN0ZWQnKTtcbiAgICBjb25zdCBkYXRlRnJvbSA9IGRhdGVSYW5nZUlucHV0cy5maW5kKCcuZmlsdGVyLWZyb20nKTtcbiAgICBjb25zdCBkYXRlVG8gPSBkYXRlUmFuZ2VJbnB1dHMuZmluZCgnLmZpbHRlci10bycpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLnZhbCgpO1xuXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgIGRhdGVSYW5nZUlucHV0cy5jc3Moe1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2luaXRpYWwnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZVJhbmdlSW5wdXRzLmNzcyh7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIGhlaWdodDogMFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZGF0ZUZyb21WYWx1ZSA9ICcnO1xuICAgICAgICBsZXQgZGF0ZVRvVmFsdWUgICA9ICcnO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gZGF0ZVRvVmFsdWUgPSBtb21lbnQoKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5ZXN0ZXJkYXknOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBkYXRlVG9WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXknKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXJyZW50LXdlZWsnOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5kYXkoMSkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5kYXkoNykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMtd2Vlayc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLmRheSgtNikuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5kYXkoMCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3VycmVudC1tb250aCc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5lbmRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cy1tb250aCc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsYXN0LXNldmVuJzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuc3VidHJhY3QoNiwgJ2RheScpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGFzdC10aGlydHknOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5zdWJ0cmFjdCgyOSwgJ2RheScpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0ZUZyb20udmFsKGRhdGVGcm9tVmFsdWUpO1xuICAgICAgICBkYXRlVG8udmFsKGRhdGVUb1ZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZmFzdFNhdmUgZnJvbSBcIi4vZmFzdFNhdmVcIjtcbmltcG9ydCBhZGRFbWJlZCBmcm9tIFwiLi9hZGRFbWJlZFwiO1xuaW1wb3J0IHJlbW92ZUVtYmVkIGZyb20gXCIuL3JlbW92ZUVtYmVkXCI7XG5pbXBvcnQgc3VibWl0Rm9ybSBmcm9tIFwiLi9zdWJtaXRGb3JtXCI7XG5pbXBvcnQgYWpheFBhZ2luYXRpb24gZnJvbSBcIi4vYWpheFBhZ2luYXRpb25cIjtcbmltcG9ydCBjb25maXJtTW9kYWwgZnJvbSBcIi4vY29uZmlybU1vZGFsXCI7XG5pbXBvcnQgcGFnZUxpbWl0IGZyb20gXCIuL3BhZ2VMaW1pdFwiO1xuaW1wb3J0IG1vZGFsRGF0YSBmcm9tIFwiLi9tb2RhbERhdGFcIjtcbmltcG9ydCBmaWx0ZXJEYXRlUmFuZ2UgZnJvbSBcImhhbmRsZXJzL2ZpbHRlckRhdGVSYW5nZVwiO1xuaW1wb3J0IGZhc3RTYXZlUGFnZSwge0NPTlRBSU5FUl9TRUxFQ1RPUiwgbWFya0NoYW5nZWR9IGZyb20gXCIuL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IHRhYmxlU29ydGVyIGZyb20gXCJ0YWJsZXNvcnRlclwiO1xuaW1wb3J0IHN0aWNreUhlYWRlcnMgZnJvbSBcInN0aWNreS10YWJsZS1oZWFkZXJzXCI7XG5pbXBvcnQgJ3RhYmxlc29ydGVyL2Rpc3QvY3NzL3RoZW1lLmRlZmF1bHQubWluLmNzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLnNjcm9sbChmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzAwKSB7XG4gICAgICAgICAgICAkKCcudmlzaXQtc3RhdHMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhlaWdodCgwKS5jc3MoJ2Rpc3BsYXknLCAndGFibGUtY29sdW1uLWdyb3VwJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy52aXNpdC1zdGF0cycpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0YWJsZXNvcnRlciA9ICQoJy50YWJsZXNvcnRlcicpO1xuICAgICAgICBpZih0YWJsZXNvcnRlcikge1xuICAgICAgICAgICAgdGFibGVzb3J0ZXIudGFibGVzb3J0ZXIoKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcbiAgICAgICAgICAgIHRhYmxlc29ydGVyLmZpbmQoJ3RoZWFkJykuY3NzKCdiYWNrZ3JvdW5kJywgJyNmZmYnKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gbW9kYWwgd2l0aCBkYXRhIGZyb20gc2VydmVyIGJ5IHJlcXVlc3RcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LW1vZGFsLWFjdGlvbicsIG1vZGFsRGF0YSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gY29uZmlybSBtb2RhbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24nLCBjb25maXJtTW9kYWwpXG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1zdWJtaXQtYWN0aW9uJywgc3VibWl0Rm9ybSlcblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBmb3JtIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LXBhZ2luYXRpb24gYScsIGFqYXhQYWdpbmF0aW9uKVxuXG4gICAgLyoqXG4gICAgICogQWRkIGVtYmVkIGVsZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtZW1iZWQnLCBhZGRFbWJlZClcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbWJlZCBlbGVtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucm0tZW1iZWQnLCByZW1vdmVFbWJlZClcblxuICAgIC8qKlxuICAgICAqIEZhc3Qgc2F2ZSB0aGUgZGF0YSBvZiBhbiBlbnRpdHlcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5mYXN0LXNhdmUnLCBmYXN0U2F2ZSlcblxuICAgIC8qKlxuICAgICAqIFNldCBwYWdlIGxpbWl0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnBhZ2UtbGltaXQnLCBwYWdlTGltaXQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCBgJHtDT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZClcblxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRlUmFuZ2UgPSAkKCcjZGF0ZS1yYW5nZS1zZWxlY3QnKTtcbiAgICAgICAgaWYgKGRhdGVSYW5nZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpbHRlckRhdGVSYW5nZSgpO1xuICAgICAgICAgICAgZGF0ZVJhbmdlLmNoYW5nZShmaWx0ZXJEYXRlUmFuZ2UpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbmZ1bmN0aW9uIGluaXRTdGlja3koKSB7XG4gICAgJCgnLnRhYmxlc29ydGVyJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XG59XG5cbiQoXCIudGFibGUtcmVzcG9uc2l2ZVwiKS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIGluaXRTdGlja3koKTtcbn0pO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBwYWdlXG4gKi9cbiQoJy5mYXN0LXNhdmUtcGFnZScpLmNsaWNrKGZhc3RTYXZlUGFnZSk7XG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBPcGVuIG1vZGFsIHdpdGggZm9ybSBieSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXG4gICAgICAgIC5tZXRob2QodGhpcy5kYXRhc2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNpemUoU0laRVMubGcpXG4gICAgICAgICAgICAgICAgLmRhdGFzZXQoe1xuICAgICAgICAgICAgICAgICAgICByZWxvYWQ6IHRoaXMuZGF0YXNldC5yZWxvYWQgfHwgMSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5oZWFkZXIodGhpcy5kYXRhc2V0LmhlYWRlcilcbiAgICAgICAgICAgICAgICAuYWZ0ZXJCdWlsZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuZGF0YXNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmNsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5jbG9zZUV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tb2RhbChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFNldCBwYWdlIGxpbWl0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBocmVmID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaHJlZi5zZWFyY2hQYXJhbXMuc2V0KCdwYWdlX2xpbWl0JywgJCh0aGlzKS52YWwoKSk7XG4gICAgaHJlZi5zZWFyY2hQYXJhbXMuZGVsZXRlKCdwYWdlJyk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmLnRvU3RyaW5nKCk7XG59XG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuXG4vKipcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSAhIXRoaXMuZGF0YXNldC5wYXJlbnQgPyAkKHRoaXMpLmNsb3Nlc3QodGhpcy5kYXRhc2V0LnBhcmVudCkgOiAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgaWYgKCF0aGlzLmRhdGFzZXQuaWQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKCdBcmUgeW91IHN1cmU/JylcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0RlbGV0ZScsXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcbiAgICAgICAgICAgICdjbGljayc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7Z2V0TW9kYWxDb3VudGVyfSBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogU3VibWl0IGZvcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuXG4gICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgIG5ldyBodHRwKHRoaXMuaHJlZilcbiAgICAgICAgLmRhdGEoY3VycmVudEJ1dHRvbi5jbG9zZXN0KCdmb3JtJykuc2VyaWFsaXplQXJyYXkoKSlcbiAgICAgICAgLm1ldGhvZCh0aGlzLmRhdGFzZXQubWV0aG9kIHx8ICdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoISF0aGlzLmRhdGFzZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaCh0aGlzLmRhdGFzZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhblJlbG9hZCh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5kYXRhc2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2FuIHJlbG9hZCB0aGUgcGFnZVxuICpcbiAqIEBwYXJhbSBidXR0b25cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjYW5SZWxvYWQoYnV0dG9uKSB7XG4gICAgaWYgKHBhcnNlSW50KGJ1dHRvbi5kYXRhc2V0LnJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgaWYgKGdldE1vZGFsQ291bnRlcigpIDwgMikge1xuICAgICAgICAgICAgY29uc3QgZGF0YVJlbG9hZCA9ICQoYnV0dG9uKS5jbG9zZXN0KCcubW9kYWwnKS5kYXRhKCdyZWxvYWQnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVJlbG9hZCA9PT0gdHlwZW9mIHVuZGVmaW5lZCB8fCBkYXRhUmVsb2FkID09PSBmYWxzZSB8fCBwYXJzZUludChkYXRhUmVsb2FkKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGdldFN1YkZvbGRlciBmcm9tIFwiLi9nZXRTdWJGb2xkZXJcIjtcblxuLyoqXG4gKiBHZXQgZmlsZSBwYXRoIGZyb20gc3RvcmFnZSB3aXRoIHN1YiBmb2xkZXJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJvb3RGb2xkZXIgUm9vdCBmb2xkZXIgaW4gdGhlIHN0b3JhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAgIEZpbGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyb290Rm9sZGVyLCBmaWxlTmFtZSkge1xuICAgIHJldHVybiAnL3N0b3JhZ2UvJyArIHJvb3RGb2xkZXIgKyAnLycgKyBnZXRTdWJGb2xkZXIoZmlsZU5hbWUpICsgJy8nICsgZmlsZU5hbWU7XG59XG4iLCIvKipcbiAqIEdldCBmb3JtIGRhdGFcbiAqXG4gKiBAcGFyYW0ge2pRdWVyeX0gZm9ybSBGb3JtIGVsZW1lbnRcbiAqXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xuXG4gICAgbGV0IGZvcm1JdGVtcyA9IGZvcm0uZmluZCgnaW5wdXQsIHNlbGVjdCcpO1xuICAgIGlmICghZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBmb3JtSXRlbXMgPSBmb3JtO1xuICAgIH1cblxuICAgIGZvcm1JdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRJdGVtLmF0dHIoJ3R5cGUnKSkge1xuICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGZvcm1EYXRhW2N1cnJlbnRJdGVtLmF0dHIoJ25hbWUnKV0gPSAhIWN1cnJlbnRJdGVtLnByb3AoIFwiY2hlY2tlZFwiICkgKiAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVtjdXJyZW50SXRlbS5hdHRyKCduYW1lJyldID0gY3VycmVudEl0ZW0udmFsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmb3JtRGF0YTtcbn1cbiIsImltcG9ydCBtZDUgZnJvbSAnYmx1ZWltcC1tZDUnO1xuXG4vKipcbiAqIEdldCBzdWIgZm9sZGVycyBvZiB0aGUgZmlsZVxuICpcbiAqIFJlc3VsdCBvZiB0aGUgZnVuY3Rpb24gbG9va3MgbGlrZTogYTEvYjIvYzNcbiAqIFdoZXJlIG1kNSBvZiB0aGUgZmlsZSA9IGExYjJjMy4uLi4uLi4uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIHRoZSBmaWxlXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZpbGVOYW1lKSB7XG4gICAgY29uc3QgZmlsZU5hbWVIYXNoID0gbWQ1KGZpbGVOYW1lKS5zdWJzdHJpbmcoMCwgNik7XG4gICAgY29uc3QgcGF0aFBhcnRzID0gZmlsZU5hbWVIYXNoLm1hdGNoKC8uezEsMn0vZyk7XG4gICAgcmV0dXJuIHBhdGhQYXJ0cy5qb2luKCcvJyk7XG59XG4iLCIvKipcbiAqIGpRdWVyeVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xud2luZG93LiQgPSAkO1xud2luZG93LmpRdWVyeSA9ICQ7XG5cbi8qKlxuICogQm9vdHN0cmFwXG4gKi9cbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwJztcblxuLyoqXG4gKiBCb290c3RyYXAgQ2NvbG9ycGlja2VyXG4gKi9cbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyJztcbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyL2Rpc3QvY3NzL2Jvb3RzdHJhcC1jb2xvcnBpY2tlci5jc3MnO1xuXG4vKipcbiAqIEZvbnQgQXdlc29tZVxuICovXG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9zY3NzL2ZvbnQtYXdlc29tZS5zY3NzJztcblxuLyoqXG4gKiBFeHRlcm5hbCBtb2R1bGVzXG4gKiBUT0RPOiBnZXQgYnkgbnBtXG4gKi9cbmltcG9ydCAnLi92ZW5kb3IvYW5pbWF0ZSc7XG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1jb25maXJtYXRpb24nO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtbm90aWZ5JztcbmltcG9ydCAnLi92ZW5kb3Ivc2VsZWN0Mic7XG5pbXBvcnQgJy4vdmVuZG9yL2Vra28tbGlnaHRib3gnO1xuaW1wb3J0ICcuL3ZlbmRvci90aGVtZSc7XG5cbi8qKlxuICogQ29tcG9uZW50c1xuICovXG5pbXBvcnQgJy4vY29tcG9uZW50cyc7XG5cbi8qKlxuICogSGFuZGxlcnNcbiAqL1xuaW1wb3J0ICcuL2hhbmRsZXJzJztcblxuLyoqXG4gKiBTdHlsZXNcbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuaW1wb3J0IFJhdmVuIGZyb20gJ3JhdmVuLWpzJztcblxuLyoqXG4gKiBNb2R1bGVzIGxvYWRlclxuICovXG5jb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcbmNvbnNvbGUubG9nKDEyMyk7XG5pZiAocGF0aC5sZW5ndGggPiAxKSB7XG4gICAgLyoqXG4gICAgICogVG8gY3JlYXRpbmcgZGlmZmVyZW50IGZpbGVzIGZvciBlYWNoIG1vZHVsZVxuICAgICAqIChEb24ndCBmb3JnZXQgbnBtIGkgLS1zYXZlLWRldiBidW5kbGUtbG9hZGVyKVxuICAgICAqIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJ2J1bmRsZS1sb2FkZXIhbW9kdWxlcycsIHRydWUsIC9pbmRleFxcLmpzJC8pO1xuICAgICAqL1xuICAgIGNvbnN0IG1vZHVsZXMgPSByZXF1aXJlLmNvbnRleHQoJ21vZHVsZXMnLCB0cnVlLCAvXFwuXFwvW1xcdy1fXStcXC9tb2R1bGVcXC5qcyQvKTtcbiAgICBtb2R1bGVzLmtleXMoKS5tYXAobW9kdWxlID0+IHtcbiAgICAgICAgY29uc3QgbW9kdWxlSXRlbXMgPSBtb2R1bGUuc3BsaXQoJy8nKTtcblxuICAgICAgICBpZiAobW9kdWxlSXRlbXNbMV0gPT09IHBhdGhbMV0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNT0RVTEU6JywgcGF0aFsxXSk7XG4gICAgICAgICAgICBtb2R1bGVzKG1vZHVsZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN1Yk1vZHVsZXMgPSByZXF1aXJlLmNvbnRleHQoJ21vZHVsZXMnLCB0cnVlLCAvbW9kdWxlcyguKiltb2R1bGVcXC5qcyQvKTtcbiAgICBzdWJNb2R1bGVzLmtleXMoKS5tYXAobW9kdWxlID0+IHtcbiAgICAgICAgY29uc3QgbW9kdWxlSXRlbXMgPSBtb2R1bGUuc3BsaXQoJy8nKTtcblxuICAgICAgICBpZiAobW9kdWxlSXRlbXNbMV0gPT09IHBhdGhbMV0gJiYgbW9kdWxlSXRlbXNbM10gPT09IHBhdGhbMl0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUIgTU9EVUxFOicsIHBhdGhbMl0pO1xuICAgICAgICAgICAgc3ViTW9kdWxlcyhtb2R1bGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEVEfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgc2VsZik7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKVxuICAgICAgICAgICAgLmh0bWwoKVxuICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAodGhpcy5kYXRhc2V0LnRlbXBsYXRlUGxhY2Vob2xkZXIsIFwiZ1wiKSwgZGF0YS5hd2FyZF9pZClcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCclZmllbGRfbmFtZSUnLCBcImdcIiksIHRoaXMuZGF0YXNldC5maWVsZE5hbWUgfHwgJycpO1xuXG4gICAgICAgIGN1cnJlbnRCdG4ucGFyZW50KCkuYXBwZW5kKGVkaXRCdG4pO1xuICAgICAgICBjdXJyZW50QnRuLnJlbW92ZSgpO1xuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBV0FSRF9DUkVBVEVELCBkYXRhKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIHNlbGYpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ0biA9ICQoJyMnICsgdGhpcy5kYXRhc2V0LnRlbXBsYXRlSWQpLmh0bWwoKVxuICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAoJyVmaWVsZF9uYW1lJScpLCB0aGlzLmRhdGFzZXQuZmllbGROYW1lIHx8ICcnKTtcblxuICAgICAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kKGNyZWF0ZUJ0bik7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XG5pbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXQgYWZ0ZXIgdGhlIG1vZGFsIG9wZW5lZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoRVZFTlRfTkFNRSkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShFVkVOVF9OQU1FLCAoKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBjb250YWluZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRyb3B6b25lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZScpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aWV3IFVSTCBoaWRkZW4gaW5wdXRcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHByZXZpZXdVUkwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRyb3B6b25lQnVpbGRlciA9IG5ldyBEcm9wem9uZUJ1aWxkZXIoZHJvcHpvbmVFbGVtZW50KVxuICAgICAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC51cmwpXG4gICAgICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAkKCcjcHJldmlldy11cmwnKS52YWwoJycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYW5jZWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJyNwcmV2aWV3LXVybCcpLnZhbCgnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgICAgICAgICAgcHJldmlld1VSTC52YWx1ZSA9IHJlc3BvbnNlLmZpbGVfbmFtZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgcHJldmlld1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHByZXZpZXdVUkwudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBkcm9wem9uZUJ1aWxkZXJcbiAgICAgICAgICAgICAgICAuc2V0UHJldmlldyhcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld1VSTC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQuZm9sZGVyLCBwcmV2aWV3VVJMLnZhbHVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgICAgICovXG4gICAgICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xuICAgIH0pO1xufVxuXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtVUERBVEVfU0FWRV9BTExfQlVUVE9OfSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoVVBEQVRFX1NBVkVfQUxMX0JVVFRPTiwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgY29uc3Qgc2F2ZUFsbEJ1dHRvbiA9ICQoJyN1cGRhdGUtYWxsJyk7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSAkKCcjdXBkYXRlLWFsbCAuY291bnQnKTtcblxuICAgICAgICBsZXQgY291bnQgPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lci5jaGFuZ2VkJykubGVuZ3RoO1xuXG4gICAgICAgIGlmKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgc2F2ZUFsbEJ1dHRvbi5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzYXZlQWxsQnV0dG9uLmhpZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgY291bnRlci5odG1sKGNvdW50KTtcbiAgICB9KTtcbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hY3Rpb24tbG9nL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hY3Rpb24tbG9nL21vZHVsZS5qc1wiLFxuXHRcIi4vYWN0aW9uLXR5cGUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2FjdGlvbi10eXBlL21vZHVsZS5qc1wiLFxuXHRcIi4vYWRkLW1lL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hZGQtbWUvbW9kdWxlLmpzXCIsXG5cdFwiLi9hbm5vdW5jZW1lbnRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL21vZHVsZS5qc1wiLFxuXHRcIi4vYXNzZXRzLWxvZy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXNzZXRzLWxvZy9tb2R1bGUuanNcIixcblx0XCIuL2Fzc2V0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXNzZXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vYXdhcmQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2F3YXJkL21vZHVsZS5qc1wiLFxuXHRcIi4vYmFubmVyL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9iYW5uZXIvbW9kdWxlLmpzXCIsXG5cdFwiLi9jbXMtYWRwcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY21zLWFkcHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jbXMtdXNlci1hY3Rpb25zL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL21vZHVsZS5qc1wiLFxuXHRcIi4vY29sbGVjdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY29sbGVjdGlvbi9tb2R1bGUuanNcIixcblx0XCIuL2Nyb3AvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Nyb3AvbW9kdWxlLmpzXCIsXG5cdFwiLi9kYWlseS1sb290L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kYWlseS1sb290L21vZHVsZS5qc1wiLFxuXHRcIi4vZGVmYXVsdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZGVmYXVsdC9tb2R1bGUuanNcIixcblx0XCIuL2RlcGxveS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZGVwbG95L21vZHVsZS5qc1wiLFxuXHRcIi4vZHBhL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kcGEvbW9kdWxlLmpzXCIsXG5cdFwiLi9keWUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2R5ZS9tb2R1bGUuanNcIixcblx0XCIuL2dpZnQtd3JhcC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZ2lmdC13cmFwL21vZHVsZS5qc1wiLFxuXHRcIi4vbGlua2VkLWFzc2V0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbGlua2VkLWFzc2V0cy9tb2R1bGUuanNcIixcblx0XCIuL2xvY2FsaXphdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vbWFnaWMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21hZ2ljL21vZHVsZS5qc1wiLFxuXHRcIi4vbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9tb2R1bGUuanNcIixcblx0XCIuL21ha2V1cC1raXQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21ha2V1cC1raXQvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL21vZHVsZS5qc1wiLFxuXHRcIi4vbWVhbC1pbmdyZWRpZW50cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9tb2R1bGUuanNcIixcblx0XCIuL21lYWwvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzXCIsXG5cdFwiLi9uZWlnaGJvci1hY3Rpdml0eS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvbW9kdWxlLmpzXCIsXG5cdFwiLi9uZXdzLWdpZnRzLWxvZy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbmV3cy1naWZ0cy1sb2cvbW9kdWxlLmpzXCIsXG5cdFwiLi9wcm9kdWN0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9wcm9kdWN0L21vZHVsZS5qc1wiLFxuXHRcIi4vcHVyY2hhc2UvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3B1cmNoYXNlL21vZHVsZS5qc1wiLFxuXHRcIi4vc2V0dGluZ3MvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZS5qc1wiLFxuXHRcIi4vc2hvcC1kZXBhcnRtZW50L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLXJlbGVhc2VzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL21vZHVsZS5qc1wiLFxuXHRcIi4vc2hvcC1zdGF0cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2hvcC1zdGF0cy9tb2R1bGUuanNcIixcblx0XCIuL3NvdW5kL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zb3VuZC9tb2R1bGUuanNcIixcblx0XCIuL3N1YnR5cGUtYXR0cmlidXRlcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qc1wiLFxuXHRcIi4vdGFtYXRvb2wvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3RhbWF0b29sL21vZHVsZS5qc1wiLFxuXHRcIi4vdXNlcnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3VzZXJzL21vZHVsZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL21vZHVsZXMgc3luYyByZWN1cnNpdmUgXFxcXC5cXFxcL1tcXFxcdy1fXStcXFxcL21vZHVsZVxcXFwuanMkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zZXR0aW5ncy9tb2R1bGVzL2FpX2FuaW1hdGlvbi9tb2R1bGUuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9tb2R1bGVzIHN5bmMgcmVjdXJzaXZlIG1vZHVsZXMoLiopbW9kdWxlXFxcXC5qcyRcIjsiLCIkKGRvY3VtZW50KVxuXG4gICAgLm9uKCdjbGljaycsICcjcHJvZHVjdF9pZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2R1Y3RfaWQnKTtcbiAgICAgICAgJCgnI3Byb2R1Y3RfaWQnKS5wcmV2KCcuc2VsZWN0Mi1jb250YWluZXInKS5maW5kKCcuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkJykuZm9jdXMoKVxuICAgIH0pO1xuIiwiZXhwb3J0IGNvbnN0IEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEID0gJ0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEJztcbmV4cG9ydCBjb25zdCBERUxUQV9USU1FX0FUVFJJQlVURSA9IDE5O1xuIiwiLyoqXG4gKiBDb2xsYXBzZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcuYWN0aW9uLXR5cGUtc3RhdGUnKTtcbiAgICBwYXJlbnQudG9nZ2xlQ2xhc3MoJ2Rvd24nKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogQ29sbGFwc2Ugc3RhdGVzXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKCcuYWN0aW9uLXR5cGUtc3RhdGUnKS50b2dnbGVDbGFzcygnZG93bicpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRH0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBTdGF0ZSBvZiB0aGUgQWN0aW9uIFR5cGVcbiAqIGF0IHRoZSBtb2RhbFxuICogd2l0aCBjb25maXJtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudEVsZW1lbnQuY2xvc2VzdCgnLmFjdGlvbi10eXBlLXN0YXRlJyk7XG5cbiAgICBpZiAoIWN1cnJlbnRFbGVtZW50LmRhdGEoJ2lkJykpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwge30pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKCdBcmUgeW91IHN1cmU/JylcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0RlbGV0ZScsXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcbiAgICAgICAgICAgICdjbGljayc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXcgUmVxdWVzdEJ1aWxkZXIoY3VycmVudEVsZW1lbnQuZGF0YSgndXJsJykpXG4gICAgICAgICAgICAgICAgICAgIC5tZXRob2QoJ0RFTEVURScpXG4gICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgICAgICAubW9kYWwoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBVcGRhdGUgaW5kZXhlcyBvZiB0aGUgc3RhdGVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsICgpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcblxuICAgICAgICAkKCcuaW5kZXgnKS5lYWNoKChfLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAkKGl0ZW0pLnZhbChpbmRleCsrKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cbiIsImltcG9ydCB1cGRhdGVJbmRleGVzIGZyb20gXCIuL2xpc3RlbmVycy91cGRhdGVJbmRleGVzXCI7XG5pbXBvcnQgY29sbGFwc2VTdGF0ZSBmcm9tIFwiLi9oYW5kbGVycy9jb2xsYXBzZVN0YXRlXCI7XG5pbXBvcnQgY29sbGFwc2VTdGF0ZXMgZnJvbSBcIi4vaGFuZGxlcnMvY29sbGFwc2VTdGF0ZXNcIjtcbmltcG9ydCByZW1vdmVBY3Rpb25UeXBlU3RhdGUgZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlXCI7XG5pbXBvcnQge0RFTFRBX1RJTUVfQVRUUklCVVRFfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbi8qKlxuICogVXBkYXRlIGluZGV4ZXNcbiAqL1xudXBkYXRlSW5kZXhlcygpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLm9uKCdjbGljaycsICcjcHJvZHVjdF9pZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2R1Y3RfaWQnKTtcbiAgICAgICAgJCgnI3Byb2R1Y3RfaWQnKS5wcmV2KCcuc2VsZWN0Mi1jb250YWluZXInKS5maW5kKCcuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkJykuZm9jdXMoKVxuICAgIH0pXG5cbiAgICAub24oJ2NoYW5nZScsICdbbmFtZSQ9XCJbdGltZV90eXBlXVwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpO1xuICAgICAgICBjb25zdCBkZWx0YVRpbWVIaWRkZW4gPSBjdXJyZW50TGkuZmluZCgnW25hbWUkPVwiW2F0dHJpYnV0ZXNdWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW3ZhbHVlXVwiXScpO1xuICAgICAgICBjb25zdCBkZWx0YVRpbWVEaXNwbGF5ID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlthdHRyaWJ1dGVzXVsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVt2YWx1ZV1bZGlzcGxheV1cIl0nKTtcblxuICAgICAgICBkZWx0YVRpbWVEaXNwbGF5LnZhbChkZWx0YVRpbWVIaWRkZW4uZGF0YSgndmFsdWUnKSAvIHBhcnNlSW50KCQodGhpcykudmFsKCkpKTtcbiAgICB9KVxuXG4gICAgLm9uKCdpbnB1dCcsICdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdW2Rpc3BsYXldXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGkgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHRpbWVUeXBlID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJykudmFsKCk7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdXCJdJyk7XG5cbiAgICAgICAgZGVsdGFUaW1lSGlkZGVuLnZhbCgkKHRoaXMpLnZhbCgpICogdGltZVR5cGUpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZSBvbmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb2xsYXBzZS1saW5rJywgY29sbGFwc2VTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlIGFsbCBzdGF0ZXNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5oaWRlLXN0YXRlcycsIGNvbGxhcHNlU3RhdGVzKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHN0YXRlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucm0tYWN0aW9uLXR5cGUtc3RhdGVzJywgcmVtb3ZlQWN0aW9uVHlwZVN0YXRlKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCd0ci5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2F2ZS1wYWdlJywgc2F2ZVN0YXRlKTtcbiIsImV4cG9ydCBjb25zdCBBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSA9ICdBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBTk5PVU5DRU1FTlRTX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFOTk9VTkNFTUVOVFNfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSwgc2VsZik7XG5cbiAgICAgICAgJCgnLmRhdGV0aW1lcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0NSRUFURUQsIENMT1NFX0FXQVJEX01PREFMfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBhbm5vdW5jZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKHRoaXMpKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzKSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxuICAgICAqL1xuICAgIC5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQ0xPU0VfQVdBUkRfTU9EQUwsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4vKipcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cbiAqL1xuJCgnLnNob3ctZm9ybScpXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcbiIsIlxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuJChkb2N1bWVudClcblxuICAgIC5vbignY2xpY2snLCAnLnRvZ2dsZV9pZHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQodGhpcykubmV4dCgpLmhlaWdodCgpID4gMCkge1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCQodGhpcykudGV4dCgpLnJlcGxhY2UoJ0hpZGUnLCAnU2hvdycpKTtcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLmhlaWdodCgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgkKHRoaXMpLnRleHQoKS5yZXBsYWNlKCdTaG93JywgJ0hpZGUnKSk7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoKS5yZXBsYWNlKCdTaG93JywgJ0hpZGUnKTtcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLmhlaWdodCgnMTAwJScpO1xuICAgICAgICB9XG4gICAgfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIFNVQl9UWVBFUyAtIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxuICogSW5pdGVkIGluIGFzc2V0L2Zvcm0uYmxhZGUucGhwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRTdWJ0eXBlcyh0aGlzLnZhbHVlLCB0aGlzLmRhdGFzZXQuc3VidHlwZSk7XG59XG5cbmNvbnN0IGFzc2V0Rm9ybVN1YnR5cGUgPSAkKFwiI3N1YnR5cGVcIik7XG5jb25zdCBhc3NldEZvcm1BY3Rpb25UeXBlID0gJCgnI2Fzc2V0LWZvcm0tYWN0aW9uLXR5cGUnKTtcbmNvbnN0IGFzc2V0Rm9ybUNvbGxlY3Rpb24gPSAkKCcjYXNzZXQtZm9ybS1jb2xsZWN0aW9uJyk7XG5jb25zdCBwcmljZXMgPSAkKCcucHJpY2VzJyk7XG5cbmZ1bmN0aW9uIHNldFN1YnR5cGVzKHR5cGUsIHN1YnR5cGUpIHtcbiAgICBhc3NldEZvcm1TdWJ0eXBlXG4gICAgICAgIC5lbXB0eSgpXG4gICAgICAgIC5zZWxlY3QyKHtcbiAgICAgICAgICAgIGRhdGE6IFNVQl9UWVBFU1t0eXBlXVxuICAgICAgICB9KVxuICAgICAgICAudmFsKHN1YnR5cGUpXG4gICAgICAgIC5jaGFuZ2UoKTtcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc3RhdGVcbiAgICAgKi9cbiAgICBoaWRlKGFzc2V0Rm9ybUFjdGlvblR5cGUpO1xuICAgIGhpZGUoYXNzZXRGb3JtQ29sbGVjdGlvbik7XG4gICAgc2hvdyhwcmljZXMpO1xuXG4gICAgc3dpdGNoIChwYXJzZUludCh0eXBlKSkge1xuXG4gICAgICAgIC8vIEZ1cm5pdHVyZVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzaG93KGFzc2V0Rm9ybUFjdGlvblR5cGUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQ2xvdGhlc1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBzaG93KGFzc2V0Rm9ybUNvbGxlY3Rpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQm9keSBQYXJ0XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGhpZGUocHJpY2VzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRDbGFzcygnaGlkZScpO1xufVxuXG5mdW5jdGlvbiBzaG93KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdoaWRlJyk7XG59IiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjb3B5IGFzc2V0cyBpZHMgdG8gY2xpcGJvYXJkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5QXNzZXRzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBhc3NldElkc0ZpZWxkID0gJCgndGV4dGFyZWFbbmFtZT1cImFzc2V0X2lkc1wiXScpO1xuICAgIGNvbnN0IHdpdGhOYW1lID0gJCgnaW5wdXRbbmFtZT1cIndpdGhfbmFtZVwiXScpO1xuICAgIGxldCBhc3NldElkcyA9IFtdO1xuXG4gICAgJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJChpdGVtKSk7XG4gICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICBsZXQgYXNzZXROYW1lID0gJChpdGVtKS5kYXRhKCdhc3NldC1uYW1lJyk7XG4gICAgICAgIGlmKGFzc2V0SWQpIHtcbiAgICAgICAgICAgIGlmKHdpdGhOYW1lLnByb3AoXCJjaGVja2VkXCIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaCgnXFxuJyArIGFzc2V0SWQgKyAnICcgKyBhc3NldE5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhc3NldElkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICAgICAgbGV0IGFzc2V0TmFtZSA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtbmFtZScpO1xuICAgICAgICAgICAgaWYoYXNzZXRJZCkge1xuICAgICAgICAgICAgICAgIGlmKHdpdGhOYW1lLnByb3AoXCJjaGVja2VkXCIpID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaCgnXFxuJyArIGFzc2V0SWQgKyAnICcgKyBhc3NldE5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3NldElkc0ZpZWxkLnZhbChhc3NldElkcyk7XG4gICAgYXNzZXRJZHNGaWVsZC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGRvd25sb2FkIGFzc2V0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRBc3NldHMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcblxuICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCQoaXRlbSkpO1xuICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcbiAgICAgICAgaWYoYXNzZXRJZCkge1xuICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpZiAoYXNzZXRJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICB3aW5kb3cubG9jYXRpb24gPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJykgKyAnJmlkcz0nICsgYXNzZXRJZHMuam9pbignLCcpO1xufVxuIiwiaW1wb3J0IFJlcXVlc3RCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBuZXcgUmVxdWVzdEJ1aWxkZXIodGhpcy5ocmVmKVxuICAgICAgICAuc3VjY2VzcyhyZXN1bHQgPT4ge1xuICAgICAgICAgICAgJCgnI2NvbGxlY3Rpb24tbnVtYmVyJylcbiAgICAgICAgICAgICAgICAudmFsKHJlc3VsdC5jb2xsZWN0aW9uX2lkKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCB7VVBEQVRFX1NBVkVfQUxMX0JVVFRPTn0gZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbi8qKlxuICogTWFyayBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZCAoKSB7XG4gICAgaWYoJCh0aGlzKS5hdHRyKCd0eXBlJykgIT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBjb25zdCBwYXJlbnRDb250YWluZXIgPSAkKHRoaXMpLnBhcmVudHMoJ3RyJyk7XG4gICAgICAgIHBhcmVudENvbnRhaW5lci5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChVUERBVEVfU0FWRV9BTExfQlVUVE9OKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCB1cGRhdGVTYXZlQWxsQnV0dG9uIGZyb20gXCJsaXN0ZW5lcnMvdXBkYXRlU2F2ZUFsbEJ1dHRvblwiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuaW1wb3J0IGdldExhc3RDb2xsZWN0aW9uTnVtYmVyIGZyb20gXCIuL2hhbmRsZXJzL2dldExhc3RDb2xsZWN0aW9uTnVtYmVyXCI7XG5pbXBvcnQge2NvcHlBc3NldHN9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBc3NldHNcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9ERUxFVEUsIEFXQVJEX0NSRUFURUQsIENMT1NFX0FXQVJEX01PREFMfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge21hcmtDaGFuZ2VkfSBmcm9tIFwiLi9oYW5kbGVycy9tYXJrQ2hhbmdlZFwiO1xuaW1wb3J0IHtkb3dubG9hZEFzc2V0c30gZnJvbSBcIi4vaGFuZGxlcnMvZG93bmxvYWRBc3NldHNcIjtcbmltcG9ydCB7VVBEQVRFX1NBVkVfQUxMX0JVVFRPTn0gZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IHtERUxUQV9USU1FX0FUVFJJQlVURX0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XG5cbiQoJyNhc3NldHMtdGFibGUnKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZScsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZScsIGF3YXJkRGVsZXRlKTtcblxuJCgnI2Fzc2V0LWZvcm0tdHlwZScpXG4gICAgLmNoYW5nZShjaGFuZ2VUeXBlKVxuICAgIC5jaGFuZ2UoKTtcblxuJCgnI2dldC1sYXN0LWNvbGxlY3Rpb24tbnVtYmVyJykuY2xpY2soZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIpO1xuXG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogQ29weSBhc3NldHMgaWRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29weS1hc3NldHMnLCBjb3B5QXNzZXRzKVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgZG93bmxvYWQgYXNzZXRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZG93bmxvYWQtYXNzZXRzJywgZG93bmxvYWRBc3NldHMpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgYW5ub3VuY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgfSlcblxuICAgIC5vbignY2hhbmdlJywgJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50VGQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RkJyk7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11cIl0nKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lRGlzcGxheSA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bZGlzcGxheV1cIl0nKTtcblxuICAgICAgICBkZWx0YVRpbWVEaXNwbGF5LnZhbChkZWx0YVRpbWVIaWRkZW4uZGF0YSgndmFsdWUnKSAvIHBhcnNlSW50KCQodGhpcykudmFsKCkpKTtcbiAgICB9KVxuXG4gICAgLm9uKCdpbnB1dCcsICdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bZGlzcGxheV1cIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZCA9ICQodGhpcykuY2xvc2VzdCgndGQnKTtcbiAgICAgICAgY29uc3QgdGltZVR5cGUgPSBjdXJyZW50VGQuZmluZCgnW25hbWUkPVwiW3RpbWVfdHlwZV1cIl0nKS52YWwoKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lSGlkZGVuID0gY3VycmVudFRkLmZpbmQoJ1tuYW1lJD1cIlsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVwiXScpO1xuXG4gICAgICAgIGRlbHRhVGltZUhpZGRlbi52YWwoJCh0aGlzKS52YWwoKSAqIHRpbWVUeXBlKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuZmFzdC1zYXZlLWNvbnRhaW5lciBpbnB1dCwgLmZhc3Qtc2F2ZS1jb250YWluZXIgc2VsZWN0LCAuZmFzdC1zYXZlLWNvbnRhaW5lciB0ZXh0YXJlYScsIG1hcmtDaGFuZ2VkKVxuXG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmUgb24gbW9kYWwgY2xvc2VcbiAgICAgKi9cbiAgICAucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgdXBkYXRlU2F2ZUFsbEJ1dHRvbigpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShDTE9TRV9BV0FSRF9NT0RBTCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSk7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEVEKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgQVdBUkRfQ1JFQVRFID0gJ0FXQVJEX0NSRUFURSc7XG5leHBvcnQgY29uc3QgQVdBUkRfQ1JFQVRFRCA9ICdBV0FSRF9DUkVBVEVEJztcbmV4cG9ydCBjb25zdCBBV0FSRF9ERUxFVEUgPSAnQVdBUkRfREVMRVRFJztcbmV4cG9ydCBjb25zdCBDTE9TRV9BV0FSRF9NT0RBTCA9ICdDTE9TRV9BV0FSRF9NT0RBTCc7XG4iLCIvKipcbiAqIFNob3cgZm9ybSBldmVudFxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBCQU5ORVJfU0hPV19GT1JNID0gJ0JBTk5FUl9TSE9XX0ZPUk0nO1xuXG4vKipcbiAqIElkIG9mIHR5cGUncyBzZWxlY3RcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgVFlQRV9TRUxFQ1RfSUQgPSAnYmFubmVyLXR5cGUnO1xuIiwiaW1wb3J0IHtUWVBFX1NFTEVDVF9JRH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIENoYW5nZSB0eXBlIGhhbmRsZXJcbiAqIEhpZGUvc2hvdyBzb21lIGZpZWxkc1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoVFlQRV9TRUxFQ1RfSUQpO1xuXG4gICAgaWYgKCFzZWxlY3QgfHwgc2VsZWN0LnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnMubGVuZ3RoICYmIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xuXG4gICAgICAgICQoJy5iYW5uZXItdHlwZScpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICQoJy5iYW5uZXItdHlwZS0nICsgc2VsZWN0ZWRFbGVtZW50LnZhbHVlKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7QkFOTkVSX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuLyoqXG4gKiBTaG93IGZvcm0gaGFuZGxlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgSW5pdFxuICAgICAqL1xuICAgIGRyb3Bab25lSW5pdChCQU5ORVJfU0hPV19GT1JNKTtcblxuICAgIC8qKlxuICAgICAqIEluaXQgc2hvd0Zvcm0gbGlzdGVuZXJcbiAgICAgKi9cbiAgICBzaG93Rm9ybSgpO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QkFOTkVSX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4uL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcblxuLyoqXG4gKiBTaG93IGZvcm0gbGlzdGVuZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShCQU5ORVJfU0hPV19GT1JNLCAoKSA9PiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFR5cGUgc2VsZWN0IGNoYW5nZSB0cmlnZ2VyXG4gICAgICAgICAqL1xuICAgICAgICBjaGFuZ2VUeXBlKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERhdGVzIGluaXRcbiAgICAgICAgICovXG4gICAgICAgICQoJy5iYW5uZXItZm9ybSAuZGF0ZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9oYW5kbGVycy9zaG93Rm9ybVwiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuaW1wb3J0IHtUWVBFX1NFTEVDVF9JRH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2hvdyBlZGl0IGZvcm0gb2YgYSBiYW5uZXJcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKHNob3dGb3JtKCkpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHR5cGUgaGFuZGxlclxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyMnICsgVFlQRV9TRUxFQ1RfSUQsIGNoYW5nZVR5cGUpO1xuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjb3B5IGFkcCBpZHMgdG8gY2xpcGJvYXJkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5QWRwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRwSWRzRmllbGQgPSAkKCdpbnB1dFtuYW1lPVwiYWRwX2lkc1wiXScpO1xuICAgIGxldCBhZHBJZHMgPSBbXTtcblxuICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xuICAgICAgICBpZihhZHBJZCkge1xuICAgICAgICAgICAgYWRwSWRzLnB1c2goYWRwSWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhZHBJZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBhZHBJZCA9ICQoaXRlbSkuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgIGlmIChhZHBJZCkge1xuICAgICAgICAgICAgICAgIGFkcElkcy5wdXNoKGFkcElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRwSWRzRmllbGQudmFsKGFkcElkcyk7XG4gICAgYWRwSWRzRmllbGQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIC8vIGFkcElkc0ZpZWxkLnZhbChbXSk7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYXNzZXRzIGlkcyB0byBjbGlwYm9hcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBc3NldHMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGFzc2V0SWRzRmllbGQgPSAkKCdpbnB1dFtuYW1lPVwiYXNzZXRfaWRzXCJdJyk7XG4gICAgbGV0IGFzc2V0SWRzID0gW107XG5cbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhc3NldElkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXNzZXRJZHNGaWVsZC52YWwoYXNzZXRJZHMpO1xuICAgIGFzc2V0SWRzRmllbGQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBkb3dubG9hZCBhZHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkQWRwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFkcElkcyA9IFtdO1xuICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xuICAgICAgICBpZihhZHBJZCkge1xuICAgICAgICAgICAgYWRwSWRzLnB1c2goYWRwSWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhZHBJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICAgICBsZXQgYWRwSWQgPSAkKGl0ZW0pLmRhdGEoJ2lkJyk7XG4gICAgICAgICAgICBpZiAoYWRwSWQpIHtcbiAgICAgICAgICAgICAgICBhZHBJZHMucHVzaChhZHBJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICQodGhpcykuZGF0YSgncm91dGUnKSArICcmaWRzPScgKyBhZHBJZHMuam9pbignLCcpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIG9mIGFyY2hpdmUgY2F0ZWdvcmllcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGlkZUFyY2hpdmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5zaG93LWFyY2hpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmFyY2hpdmUtY2F0ZWdvcmllcy1saXN0JykuaHRtbCgnJyk7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgb2YgdGFza3Mgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUYXNrcyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnNob3ctdGFza3MnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnRhc2tzLWxpc3QnKS5oaWRlKCdzbG93Jyk7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIHNlbGVjdCByb3cgYnkgZnVsbCB0ZCBhcmVhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RSb3coZSkge1xuICAgIGlmICghJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Zvci1jb3B5JykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9ICQodGhpcykuZmluZCgnLmZvci1jb3B5Jyk7XG5cbiAgICAgICAgaWYoY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgIGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogSGFuZGxlciBvZiBhcmNoaXZlIGNhdGVnb3JpZXMgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dBcmNoaXZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuaGlkZS1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIFxuICAgIGxldCBhY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJyk7XG4gICAgbmV3IGh0dHAoYWN0aW9uKVxuICAgICAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuYXJjaGl2ZS1jYXRlZ29yaWVzLWxpc3QnKS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIFxufVxuIiwiLyoqXG4gKiBIYW5kbGVyIG9mIHRhc2tzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza3MoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5oaWRlLXRhc2tzJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy50YXNrcy1saXN0Jykuc2hvdygnc2xvdycpO1xufVxuIiwiLy9pbXBvcnQge2J1bmRsZVZlcnNpb25TZWxlY3R9IGZyb20gXCIuL2hhbmRsZXJzL2J1bmRsZVZlcnNpb25TZWxlY3RcIjtcbmltcG9ydCB7c2hvd0FyY2hpdmV9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dBcmNoaXZlXCI7XG5pbXBvcnQge2hpZGVBcmNoaXZlfSBmcm9tIFwiLi9oYW5kbGVycy9oaWRlQXJjaGl2ZVwiO1xuaW1wb3J0IHtoaWRlVGFza3N9IGZyb20gXCIuL2hhbmRsZXJzL2hpZGVUYXNrc1wiO1xuaW1wb3J0IHtzaG93VGFza3N9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dUYXNrc1wiO1xuaW1wb3J0IHtjb3B5QWRwfSBmcm9tIFwiLi9oYW5kbGVycy9jb3B5QWRwXCI7XG5pbXBvcnQge2NvcHlBc3NldHN9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBc3NldHNcIjtcbmltcG9ydCB7c2VsZWN0Um93fSBmcm9tIFwiLi9oYW5kbGVycy9zZWxlY3RSb3dcIjtcbmltcG9ydCB7ZG93bmxvYWRBZHB9IGZyb20gXCIuL2hhbmRsZXJzL2Rvd25sb2FkQWRwXCI7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogU2hvdyBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1hcmNoaXZlJywgc2hvd0FyY2hpdmUpXG4gICAgLyoqXG4gICAgICogSGlkZSBhcmNoaXZlIGFkcCBjYXRlZ29yaWVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hcmNoaXZlJywgaGlkZUFyY2hpdmUpXG4gICAgLyoqXG4gICAgICogSGlkZSBhZHAgdGFza3MgYnkgc3RhdHVzIGFuZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS10YXNrcycsIGhpZGVUYXNrcylcbiAgICAvKipcbiAgICAgKiBTaG93IGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zaG93LXRhc2tzJywgc2hvd1Rhc2tzKVxuICAgIC8qKlxuICAgICAqIENvcHkgYWRwIGlkc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvcHktYWRwJywgY29weUFkcClcbiAgICAvKipcbiAgICAgKiBDb3B5IGFzc2V0cyBpZHNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFzc2V0cycsIGNvcHlBc3NldHMpXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgZG93bmxvYWQgYXNzZXRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZG93bmxvYWQtYWRwJywgZG93bmxvYWRBZHApXG4gICAgLyoqXG4gICAgICogU2hvdyBoaWRlIHNpZGUgYm94XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1oaWRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZihwYXJzZUludCgkKCcuc2lkZS1ib3gnKS5jc3MoJ3JpZ2h0JykpIDwgMCkge1xuICAgICAgICAgICAgJCgnLnNpZGUtYm94JykuY3NzKCdyaWdodCcsIDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuc2lkZS1ib3gnKS5jc3MoJ3JpZ2h0JywgJy0xMDAlJylcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHJvdyBieSBmdWxsIHRkIGFyZWFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5pZC1jb2wnLCBzZWxlY3RSb3cpO1xuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBDQVNIID0gJ2Nhc2hfYWRkZWQnO1xuZXhwb3J0IGNvbnN0IENPSU4gPSAnY29pbnNfYWRkZWQnO1xuZXhwb3J0IGNvbnN0IEFTU0VUID0gJ2Fzc2V0c19hZGRlZCc7XG4iLCJpbXBvcnQge0NBU0h9IGZyb20gXCJtb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzXCI7XG5pbXBvcnQge0NPSU59IGZyb20gXCJtb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzXCI7XG5pbXBvcnQge0FTU0VUfSBmcm9tIFwibW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL2NvbnN0YW50c1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogU2V0IGN1cnNvciB0byBwYXJlbnQgbm9kZVxuICAgICAqL1xuICAgIC5vbignbW91c2VlbnRlcicsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEZpbHRlciBzZWxlY3Qgb3B0aW9ucyBieSBzZWxlY3RlZCBzb3VyY2VcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjZmlsdGVyX3NvdXJjZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgJChcIiNmaWx0ZXJfYWN0aW9uXCIpLnNlbGVjdDIoe1xuICAgICAgICAgICAgbWF0Y2hlcjogZnVuY3Rpb24gKHBhcmFtcywgZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2VWYWwgIT09ICd1c2VyX2RlYnVnJyAmJiAkLmluQXJyYXkoZGF0YS5pZCwgW0NBU0gsIENPSU4sIEFTU0VUXSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGRlcGxveSBpbmZvXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICd0ZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9ICQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKHdyYXBwZXIgJiYgd3JhcHBlci5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKVxuICAgICAgICB9XG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgQ09MTEVDVElPTl9TSE9XX0ZPUk0gPSAnQ09MTEVDVElPTl9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuY29uc3QgYXNzZXRQcmV2aWV3VGVtcGxhdGUgPSAkKCcjYXNzZXQtcHJldmlldy10ZW1wbGF0ZScpLmh0bWwoKTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcbiAgICAgKi9cbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBmb3JtSXRlbXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS5oYXNDbGFzcygnYXNzZXQtaWQnKSAmJiAhIXJlc3BvbnNlLmFzc2V0c1tjdXJyZW50SXRlbS52YWwoKV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFzc2V0ID0gcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuc2xvdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmFzc2V0LXByZXZpZXcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoYXNzZXRQcmV2aWV3VGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJXVybCUnLCBcImdcIiksIGN1cnJlbnRBc3NldC5wcmV2aWV3X3VybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJXRpdGxlJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0Lm5hbWUpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgYWRkaXRpb25hbCByb3dzXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKCcuYWRkaXRpb25hbC1kYXRhJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogTWFyayBpbnB1dCBhcyBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5cbi8qKlxuICogU29ydGFibGUgSW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIG5ldyBTb3J0YWJsZShfdGhpcywge1xuICAgICAgICBncm91cDogX3RoaXMuZGF0YXNldC5ncm91cCxcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5maW5kKF90aGlzLmRhdGFzZXQucG9zaXRpb24pLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChwb3NpdGlvbi52YWwoKSkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnZhbChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge0NPTExFQ1RJT05fU0hPV19GT1JNfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVwiO1xuaW1wb3J0IG1hcmtJbnB1dEFzQ2hhbmdlZCBmcm9tIFwiLi9oYW5kbGVycy9tYXJrSW5wdXRBc0NoYW5nZWRcIjtcbmltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XG5pbXBvcnQgaGlkZUFkZGl0aW9uYWxSb3dzIGZyb20gXCIuL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93c1wiO1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChDT0xMRUNUSU9OX1NIT1dfRk9STSkpO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBjb2xsZWN0aW9uXG4gKi9cbiQoJy5jb2xsZWN0aW9uLWZhc3Qtc2F2ZScpLmNsaWNrKGZhc3RTYXZlKTtcblxuLyoqXG4gKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXG4gKi9cbiQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXQnKS5jaGFuZ2UobWFya0lucHV0QXNDaGFuZ2VkKTtcblxuLyoqXG4gKiBTb3J0YWJsZSBpbml0XG4gKi9cbiQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcblxuLyoqXG4gKiBIaWRlIGFkZGl0aW9uYWwgcm93c1xuICovXG4kKCcuaGlkZS1zbG90cycpLmNsaWNrKGhpZGVBZGRpdGlvbmFsUm93cyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCByb3dzIHRvIHRoZSBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNjcm9wcyA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2Nyb3BfdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuY3JvcF9pZCcpLnRleHQoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lY3JvcCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBEZWxldGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVSb3coKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGRSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZFJvd1wiO1xuaW1wb3J0IHtkZWxldGVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2RlbGV0ZVJvd1wiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEVELCBBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtcm93JywgYWRkUm93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBkZWxldGVSb3cpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQodGhpcykoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQsIHNlbGYpO1xuXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocm93LmFkZENsYXNzKCdjaGFuZ2VkJykpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLmZhc3Qtc2F2ZS1wYWdlJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQodGhpcykoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcblxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJvdy5hZGRDbGFzcygnY2hhbmdlZCcpKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5mYXN0LXNhdmUtcGFnZScpLmNsaWNrKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZGFpbHlfbG9vdCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2RhaWx5X2xvb3RfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgbGV0IGxhc3RJRFMgPSBbXTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAxO1xuICAgIHRib2R5LmZpbmQoXCJ0clwiKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KCQoaXRlbSkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbCgpKSl7XG4gICAgICAgICAgICBsYXN0SURTLnB1c2gocGFyc2VJbnQoJChpdGVtKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKCkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYobGFzdElEUy5sZW5ndGgpe1xuICAgICAgICBpbmNyZW1lbnRJZCA9IChNYXRoLm1heC5hcHBseShNYXRoLGxhc3RJRFMpICsgMSkgfHwgMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lcm93SW5kZXglL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoaSArIGluY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5maW5kKCcuZGF0ZXBpY2tlcicpXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLmRhaWx5LWxvb3Qtc2F2ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRhID0gY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZighZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCd0ci5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2ggcGFnZSB0eXBlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudG9nZ2xlLXBhZ2UtdHlwZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDAsIGxvY2F0aW9uLnBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykpICsgJCh0aGlzKS5kYXRhKCdocmVmJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnI2NvbW1vbi1tZW51JykuZmluZCgnLmNvbW1vbi1tZW51LXNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZigkKHRoaXMpLmZpbmQoJ2xpJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNvbW1vbi1tZW51LXNlY3Rpb24nKS5oaWRlKClcbiAgICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbi8qKlxuICogU2hvdyBEZXBsb3kgU3RhdHVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXBsb3lTdGF0dXMoKSB7XG4gICAgbmV3IGh0dHAoREVQTE9ZX1NUQVRVU19ST1VURSlcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgJCgnLmRlcGxveS1zdGF0dXMnKS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9ICQoJy5kZXBsb3ktc3RhdHVzJykuZmluZCgnLmFjdGl2ZS1kZXBsb3knKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgJCgnLmRlcGxveS1idG4nKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKCQoJy5kZXBsb3ktYnRuJykuaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7ZGVwbG95U3RhdHVzKCk7fSwgMzAwMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59XG4iLCJcbi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdlIHRhYlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFiKGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gICAgbGV0IGRpcmVjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgIHVybCArPSBcIj9kaXJlY3Rpb249XCIgKyBkaXJlY3Rpb247XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICBpZDogJ2RlcGxveSdcbiAgICB9LCAnRGVwbG95JywgdXJsKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3Igc2hvdyDQsmVwZW5kZW5jeVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RlcGVuZGVuY3koZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gY3VycmVudEVsZW1lbnQucGFyZW50cygnLmNvbmZpZy1pdGVtLWJsb2NrJykuZGF0YSgnbW9kZWwnKTtcbiAgICBsZXQgYWRkTW9kZSA9IGN1cnJlbnRFbGVtZW50LmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgb25lTGV2ZWxTaG93KGN1cnJlbnRDb25maWcsIGFkZE1vZGUpO1xufVxuXG5mdW5jdGlvbiBvbmVMZXZlbFNob3coY29uZmlnTmFtZSwgYWRkTW9kZSwgbGV2ZWwgPSAxKSB7XG4gICAgaWYoREVQTE9ZX0RFUEVORFMuaGFzT3duUHJvcGVydHkoY29uZmlnTmFtZSkgJiYgbGV2ZWwgPCAxMCkge1xuICAgICAgICBsZXQgY29uZmlnQmxvY2sgPSAkKCcubW9kZWwtJyArIGNvbmZpZ05hbWUpO1xuICAgICAgICBpZihhZGRNb2RlKSB7XG4gICAgICAgICAgICBjb25maWdCbG9jay5hZGRDbGFzcygnZGVwbG95LWNoYWluJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWdCbG9jay5yZW1vdmVDbGFzcygnZGVwbG95LWNoYWluJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgICAgIGxldCBkZXBlbmRDb25maWdOYW1lID0gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV1ba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlnQmxvY2sgPSAkKCcubW9kZWwtJyArIGRlcGVuZENvbmZpZ05hbWUpO1xuICAgICAgICAgICAgaWYoYWRkTW9kZSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLmFkZENsYXNzKCdkZXBsb3ktY2hhaW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlnQmxvY2sucmVtb3ZlQ2xhc3MoJ2RlcGxveS1jaGFpbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25lTGV2ZWxTaG93KGRlcGVuZENvbmZpZ05hbWUsIGFkZE1vZGUsIGxldmVsICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogSGFuZGxlciBmb3Igc2hvdyBkZXBlbmRlbmN5IHBvcHVwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93RGVwZW5kZW5jeVBvcHVwKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gY3VycmVudEVsZW1lbnQucGFyZW50cygnLmNvbmZpZy1pdGVtLWJsb2NrJykuZGF0YSgnbW9kZWwnKTtcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnSWQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCcuY29uZmlnLWl0ZW0tYmxvY2snKS5kYXRhKCdpZCcpO1xuICAgIGxldCBpZHMgPSBbXTtcbiAgICBpZihjdXJyZW50Q29uZmlnSWQpIHtcbiAgICAgICAgaWRzLnB1c2goY3VycmVudENvbmZpZ0lkKTtcbiAgICB9XG5cbiAgICByb290TGV2ZWxTaG93KGN1cnJlbnRDb25maWcsIGlkcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIE9uZSBsZXZlbCBzaG93XG4gKlxuICogQHBhcmFtIGNvbmZpZ05hbWVcbiAqIEBwYXJhbSBkZXBlbmRDb25maWdOYW1lXG4gKiBAcGFyYW0gbGV2ZWxcbiAqIEBwYXJhbSBpZFJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCAgbGV2ZWwgPSAxLCBpZFJlc3BvbnNlKSB7XG4gICAgaWYoREVQTE9ZX0RFUEVORFMuaGFzT3duUHJvcGVydHkoY29uZmlnTmFtZSkgJiYgbGV2ZWwgPCAxMCkge1xuICAgICAgICBsZXQgaWRzID0gaWRSZXNwb25zZS5pZHM7XG4gICAgICAgIGxldCB0ZXh0Q2xhc3MgPSAnJztcbiAgICAgICAgaWYoaWRSZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnbm90SW1wbGVtZW50ZWQnKSkge1xuICAgICAgICAgICAgdGV4dENsYXNzID0gJ3RleHQtbXV0ZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzUmVjdXJzaW9uID0gZmFsc2U7XG4gICAgICAgICQoJy5jaGFpbi0nICsgY29uZmlnTmFtZSkuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoJCh0aGlzKS5wYXJlbnRzKCcuY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpc1JlY3Vyc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCInICsgdGV4dENsYXNzICsgJ1wiPicgKyBkZXBlbmRDb25maWdOYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4oUmVjdXJzaW9uKTwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj48YnI+Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoJCh0aGlzKS5maW5kKCcuY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGRlcGVuZENvbmZpZ05hbWUgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cIicgKyB0ZXh0Q2xhc3MgKyAnXCI+JyArIGRlcGVuZENvbmZpZ05hbWUgKyAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICAgICAoaWRzLmxlbmd0aCA+IDAgPyAnPHNwYW4gY2xhc3M9XCJkZXBlbmQtaWRzXCI+ICcgKyBpZHMuam9pbignLCcpICsgJzwvc3Bhbj4nIDogJycpICArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNSZWN1cnNpb24pIHtcbiAgICAgICAgICAgIGdldERlcGxveU1vZGVsSWRzKGRlcGVuZENvbmZpZ05hbWUsIGxldmVsLCBpZHMpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi8qKlxuICogUm9vdCBsZXZlbCBzaG93XG4gKlxuICogQHBhcmFtIGNvbmZpZ05hbWVcbiAqIEBwYXJhbSBpZHNcbiAqL1xuZnVuY3Rpb24gcm9vdExldmVsU2hvdyhjb25maWdOYW1lLCBpZHMgPSBbXSkge1xuICAgIG5ldyBodHRwKERFUExPWV9NT0RFTF9JRFNfUk9VVEUpXG4gICAgICAgIC5tZXRob2QoJ3Bvc3QnKVxuICAgICAgICAuZGF0YSh7XG4gICAgICAgICAgICAnZGlyZWN0aW9uJzogQUNUSVZFX0RJUkVDVElPTixcbiAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbCc6IGNvbmZpZ05hbWUsXG4gICAgICAgICAgICAnZGVwZW5kZW50TW9kZWxJZHMnOiBpZHNcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbGV0IGlkcyA9IHJlc3BvbnNlLmlkcyB8fCBbXTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkZXBsb3ktY2hhaW4tYmxvY2tcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICQoJy5kZXBsb3ktY2hhaW4tYmxvY2snKS5odG1sKCc8ZGl2IGNsYXNzPVwiY2hhaW4tJyArIGNvbmZpZ05hbWUgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuPicgKyBjb25maWdOYW1lICsgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJkZXBlbmQtaWRzXCI+ICcgKyBpZHMuam9pbignLCcpICsgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+Jyk7XG5cbiAgICAgICAgICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5oZWFkZXIoJ0RlcGxveSBkZXBlbmRlbmN5JylcbiAgICAgICAgICAgICAgICAuYm9keSgkKCcuZGVwbG95LWNoYWluLWJsb2NrJykpXG4gICAgICAgICAgICAgICAgLm1vZGFsKCk7XG5cbiAgICAgICAgICAgIGdldERlcGxveU1vZGVsSWRzKGNvbmZpZ05hbWUsIDEsIGlkcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59XG5cbi8qKlxuICogR2V0IGRlcGxveSBtb2RlbCBpZHNcbiAqXG4gKiBAcGFyYW0gY29uZmlnTmFtZVxuICogQHBhcmFtIGxldmVsXG4gKiBAcGFyYW0gaWRzXG4gKi9cbmZ1bmN0aW9uIGdldERlcGxveU1vZGVsSWRzKGNvbmZpZ05hbWUsIGxldmVsID0gMSwgaWRzID0gW10pIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgbGV0IGRlcGVuZENvbmZpZ05hbWUgPSBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXVtrZXldO1xuXG4gICAgICAgIGlmKGlkcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIG5ldyBodHRwKERFUExPWV9NT0RFTF9JRFNfUk9VVEUpXG4gICAgICAgICAgICAgICAgLm1ldGhvZCgncG9zdCcpXG4gICAgICAgICAgICAgICAgLmRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAnZGlyZWN0aW9uJzogQUNUSVZFX0RJUkVDVElPTixcbiAgICAgICAgICAgICAgICAgICAgJ21vZGVsJzogZGVwZW5kQ29uZmlnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2RlcGVuZGVudE1vZGVsJzogY29uZmlnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2RlcGVuZGVudE1vZGVsSWRzJzogaWRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCBsZXZlbCArIDEsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbmVMZXZlbFNob3coY29uZmlnTmFtZSwgZGVwZW5kQ29uZmlnTmFtZSwgbGV2ZWwgKyAxLCB7J2lkcyc6IFtdfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge2NoYW5nZVRhYn0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlVGFiXCI7XG5pbXBvcnQge3Nob3dEZXBlbmRlbmN5fSBmcm9tIFwiLi9oYW5kbGVycy9zaG93RGVwZW5kZW5jeVwiO1xuaW1wb3J0IHtzaG93RGVwZW5kZW5jeVBvcHVwfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93RGVwZW5kZW5jeVBvcHVwXCI7XG5pbXBvcnQgZmFzdFNhdmVQYWdlIGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcbmltcG9ydCB7ZGVwbG95U3RhdHVzfSBmcm9tIFwiLi9kZXBsb3lTdGF0dXNcIjtcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHVybCBvbiB0YWIgY2hhbmdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVwbG95LXRhYnMgLm5hdi1saW5rJywgY2hhbmdlVGFiKVxuICAgIC8qKlxuICAgICAqIFNhdmUgYWxsIHBhZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5mYXN0LXNhdmUtcGFnZS1jdXN0b20nLCBmYXN0U2F2ZVBhZ2UpXG4gICAgLyoqXG4gICAgICogU2hvdyBkZXBlbmRlbmN5XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29uZmlnLWNoZWNrYm94Jywgc2hvd0RlcGVuZGVuY3kpXG4gICAgLyoqXG4gICAgICogU2hvdyBkZXBlbmRlbmN5IHBvcHVwXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy1kZXBlbmRlbmN5Jywgc2hvd0RlcGVuZGVuY3lQb3B1cClcblxuICAgIC8qKlxuICAgICAqIENoZWNrL3VuY2hlY2sgYXdhcmQgZGVwZW5kZW5jaWVzXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmF3YXJkLWRlcGVuZGVuY3kgW3R5cGU9Y2hlY2tib3hdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYXdhcmQtZGVwZW5kZW5jeSBbdHlwZT1jaGVja2JveF0nKS5wcm9wKCdjaGVja2VkJywgdGhpcy5jaGVja2VkKTtcbiAgICB9KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlcGxveVN0YXR1cygpO1xuICAgIH0pO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxldmVscyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHBhID4gdGJvZHknKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5kcGFfaWQnKS52YWwoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyNkcGFfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJWRwYV9pZCUvZywgaSArIGluY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRHBhU3RhdGUgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgbGV0IGRhdGEgPSAkKCcuZHBhLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVEcGFTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZURwYVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgZHBhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRwYS1zYXZlLXBhZ2UnLCBzYXZlRHBhU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2R5ZSA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI2R5ZV90ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcblxuICAgICAgICBsZXQgbGFzdFJvdyA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmNwMicpO1xuICAgICAgICBsYXN0Um93LmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAkKGl0ZW0pLmNvbG9ycGlja2VyKHt9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIENoYW5nZSByb3cgaW5kZXhcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJvd0luZGV4KCkge1xuICAgIGxldCByb3dJbmRleCA9ICQodGhpcykudmFsKCk7XG4gICAgbGV0IHJvdyA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCdpbnB1dCwgc2VsZWN0Jyk7XG5cbiAgICByb3cuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgbGV0IG9sZE5hbWUgPSAkKGl0ZW0pLmF0dHIoJ25hbWUnKTtcbiAgICAgICAgbGV0IG5ld05hbWUgPSBvbGROYW1lLnNsaWNlKDAsIDQpICsgcm93SW5kZXggKyAgb2xkTmFtZS5zbGljZShvbGROYW1lLmluZGV4T2YoJ10nKSk7XG4gICAgICAgICQoaXRlbSkuYXR0cignbmFtZScsIG5ld05hbWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuZXhwb3J0IGNvbnN0IERZRV9DT05UQUlORVJfU0VMRUNUT1IgPSAnLmR5ZS1zYXZlLXBhZ2UtY29udGFpbmVyJztcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBkeWVzIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHNhdmVkSXRlbSA9ICQoRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUik7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTWFyayBmb3JtJ3MgdHIgYXMgY2hhbmdlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWRUcigpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7Y2hhbmdlUm93SW5kZXh9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4XCI7XG5pbXBvcnQgZHllU2F2ZVBhZ2UsIHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SLCBtYXJrQ2hhbmdlZFRyfSBmcm9tIFwiLi9oYW5kbGVycy9keWVTYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjb2xvci1waWNrZXIgaW5wdXRzXG4gICAgICovXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuY3AyJykuY29sb3JwaWNrZXIoKVxuICAgICAgICAgICAgLm9uKCdjcmVhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBNYXJrIHRyIGFzIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgYCR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWRUcilcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdpbnB1dCcsIGAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkVHIpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHJvdyBpbmRleFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFzc2V0X2lkJywgY2hhbmdlUm93SW5kZXgpXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICAgICAqL1xuICAgICQoJy5keWUtc2F2ZS1wYWdlJykuY2xpY2soZHllU2F2ZVBhZ2UpO1xuIiwiZXhwb3J0IGNvbnN0IEdJRlRfV1JBUF9ST1dfQURERUQgPSAnR0lGVF9XUkFQX1JPV19BRERFRCc7XG4iLCJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5cbi8qKlxuICogQXNzZXQgSUQgY2hhbmdlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudElucHV0ID0gJCh0aGlzKTtcbiAgICBjb25zdCBhc3NldElEID0gY3VycmVudElucHV0LnZhbCgpO1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRJbnB1dC5jbG9zZXN0KCd0cicpO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZHVwbGljYXRlZCBhc3NldHMgaWRzXG4gICAgICovXG4gICAgY29uc3QgY3VycmVudEFzc2V0RHVwbGljYXRlID0gJCgnI2dpZnQtd3JhcHMtY29udGFpbmVyJykuZmluZCgnLmFzc2V0LWlkJykuZmlsdGVyKChfLCBpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBhc3NldElEID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgaWYgKGN1cnJlbnRBc3NldER1cGxpY2F0ZS5sZW5ndGggPiAxKXtcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUgYXNzZXQgJyArIGFzc2V0SUR9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBpbnB1dHMgbmFtZXNcbiAgICAgKi9cbiAgICBwYXJlbnQuZmluZCgnaW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lLnJlcGxhY2UoIC9cXFtbXFxkXStcXF0vZywgYFske2Fzc2V0SUR9XWApO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGhyZWYgb2YgdGhlIGRlbGV0ZSBidXR0b25cbiAgICAgKi9cbiAgICBwYXJlbnQuZmluZCgnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaHJlZiA9IHRoaXMuaHJlZi5yZXBsYWNlKCAvXFwvW1xcZF0rJC9nLCBgLyR7YXNzZXRJRH1gKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IHBvc2l0aW9uVXBkYXRlIGZyb20gXCIuLi9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlXCI7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgYWxsIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHt9O1xuICAgICAgICAkKCcjZ2lmdC13cmFwcy1jb250YWluZXInKS5maW5kKCcuYXNzZXQtaWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhc3NldHNbdGhpcy52YWx1ZV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFzc2V0c1t0aGlzLnZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBhc3NldCAnICsgZXJyLm1lc3NhZ2V9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBvc2l0aW9uIHVwZGF0ZVxuICAgICAqL1xuICAgIHBvc2l0aW9uVXBkYXRlKCk7XG5cbiAgICBmYXN0U2F2ZVBhZ2UuYmluZCh0aGlzKShlKTtcbn1cbiIsImltcG9ydCBjb25maXJtTW9kYWwgZnJvbSBcImhhbmRsZXJzL2NvbmZpcm1Nb2RhbFwiO1xuXG4vKipcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBidXR0b25VcmwgPSB0aGlzLmhyZWYuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAocGFyc2VJbnQoYnV0dG9uVXJsW2J1dHRvblVybC5sZW5ndGggLSAxXSkgPT09IDApIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uZmlybU1vZGFsLmJpbmQodGhpcykoZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5pbXBvcnQgcG9zaXRpb25VcGRhdGUgZnJvbSBcIm1vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGVcIjtcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbmV3IFNvcnRhYmxlKF90aGlzLCB7XG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwb3NpdGlvblVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIFBvc2l0aW9uIHVwZGF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnBvc2l0aW9uJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCBwYWdlID0gJCgnI3BhZ2UnKS52YWwoKTtcbiAgICAgICAgY29uc3QgcGFnZV9saW1pdCA9ICQoJ1tuYW1lPVwicGFnZV9saW1pdFwiXScpLnZhbCgpO1xuXG4gICAgICAgIGlmIChwYXJzZUludChwb3NpdGlvbi52YWwoKSkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICBwb3NpdGlvbi52YWwoaW5kZXggKyAoKHBhZ2UgLSAxKSAqIHBhZ2VfbGltaXQpKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtHSUZUX1dSQVBfUk9XX0FEREVEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQWRkIG5ldyByb3cgdG8gZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEdJRlRfV1JBUF9ST1dfQURERUQsIGRhdGEgPT4ge1xuICAgICAgICAkKCcjZ2lmdC13cmFwLScgKyBkYXRhLmVtYmVkQmxvY2tJZClcbiAgICAgICAgICAgIC5maW5kKCcuZGF0ZXRpbWVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcbmltcG9ydCBhc3NldENoYW5nZWQgZnJvbSBcIi4vaGFuZGxlcnMvYXNzZXRDaGFuZ2VkXCI7XG5pbXBvcnQgYWRkUm93IGZyb20gXCIuL2xpc3RlbmVycy9hZGRSb3dcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQgcmVtb3ZlUm93IGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZVJvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIGFzc2V0IGlkIGluIGlucHV0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmFzc2V0LWlkJywgYXNzZXRDaGFuZ2VkKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24tY3VzdG9tJywgcmVtb3ZlUm93KTtcblxuLyoqXG4gKiBBZGQgcm93IGxpc3RlbmVyXG4gKi9cbmFkZFJvdygpO1xuXG4vKipcbiAqIFNvcnRhYmxlIGluaXRcbiAqL1xuJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4vKipcbiAqIFNhdmUgYWxsIHBhZ2VcbiAqL1xuJCgnLmZhc3Qtc2F2ZS1wYWdlLWN1c3RvbScpLmNsaWNrKGZhc3RTYXZlUGFnZSk7IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHNob3cgYXNzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dBc3NldChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgYWN0aW9uID0gU1dPV19BU1NFVF9ST1VURSArICc/aWQ9JyArIGN1cnJlbnRFbGVtZW50LnZhbCgpO1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSkge1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ25hbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCd0cicpLmZpbmQoJy5hc3NldC1uYW1lJykuaHRtbChyZXNwb25zZS5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCdwcmV2aWV3X3VybCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LXByZXZpZXcgaW1nJykuYXR0cignc3JjJywgcmVzcG9uc2UuZGF0YS5wcmV2aWV3X3VybCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LXByZXZpZXcgLmxpc3QtdGh1bWJuYWlsJykuZGF0YSgnZnVsbCcsIHJlc3BvbnNlLmRhdGEucHJldmlld191cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xufVxuIiwiXG5pbXBvcnQge3Nob3dBc3NldH0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0Fzc2V0XCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogU2hvdyBhc3NldFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5hc3NldCcsIHNob3dBc3NldClcblxuICAgICIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbG9jYWxpemF0aW9uIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgbGV0IHRib2R5ID0gJCgnI2xvY2FsaXphdGlvbnMgPiB0Ym9keScpO1xuICAgIGxldCB0ZW1wbGF0ZSA9ICQoJyNsb2NhbGl6YXRpb25fdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICB0Ym9keS5wcmVwZW5kKHRlbXBsYXRlKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogUmVtb3ZlIG5vdCBzYXZlZCByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJvdyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBsb2NhbGl6YXRpb24gY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2NhbGl6YXRpb25TdGF0ZSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRCdG4uY2xvc2VzdCgndHInKTtcbiAgICBjb25zdCBjdXJyZW50S2V5ID0gcGFyZW50LmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykudmFsKCk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBkdXBsaWNhdGVkIGtleXNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtqUXVlcnl9XG4gICAgICovXG4gICAgY29uc3QgY3VycmVudEtleUR1cGxpY2F0ZSA9ICQoJyNsb2NhbGl6YXRpb25zJykuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS5maWx0ZXIoKF8sIGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRLZXkgPT09IGl0ZW0udmFsdWU7XG4gICAgfSk7XG4gICAgaWYgKGN1cnJlbnRLZXlEdXBsaWNhdGUubGVuZ3RoID4gMSl7XG4gICAgICAgIGVycm9ySGFuZGxlcih7J21lc3NhZ2UnOiAnRHVwbGljYXRlIGtleSAnICsgY3VycmVudEtleX0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHBhcmVudC5maW5kKCcuZWRpdGFibGUgaW5wdXQnKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHBhcmVudC5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZUxvY2FsaXphdGlvblN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlTG9jYWxpemF0aW9uU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7cmVtb3ZlUm93fSBmcm9tIFwiLi9oYW5kbGVycy9yZW1vdmVSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxvY2FsaXphdGlvbnMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNyZWF0ZS1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZUxvY2FsaXphdGlvblN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtcm93JywgcmVtb3ZlUm93KTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21hZ2ljID4gdGJvZHknKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCdpbnB1dFtuYW1lPVwiaWRcIl0nKS52YWwoKTtcbiAgICAgICAgbGV0IGluY3JlbWVudElkID0gcGFyc2VJbnQobGFzdElEKSB8fCAwO1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI21hZ2ljX3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVtYWdpY19pZCUvZywgKytpbmNyZW1lbnRJZCk7XG5cbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIG1hZ2ljIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTWFnaWNTdGF0ZSAoKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5tYWdpYy1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dFwiKTtcblxuICAgIGRhdGEuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAkKGl0ZW0pLmF0dHIoJ3JlYWRvbmx5JywgdHJ1ZSlcbiAgICB9KTtcblxuICAgIGlmKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVNYWdpY1N0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlTWFnaWNTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbWFnaWMgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVNYWdpY1N0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCJpbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFNob3cgbGFzdCBtYWtldXAga2l0IElEXG4gKlxuICogQHBhcmFtIGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIG5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmhyZWYpXG4gICAgICAgIC5zdWNjZXNzKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAkKCcjbGFzdC1tYWtldXAta2l0LWlkJylcbiAgICAgICAgICAgICAgICAudmFsKHJlc3VsdC5tYWtldXBfa2l0X2lkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgZ2V0TGFzdE1ha2V1cEtpdElEIGZyb20gXCIuL2hhbmRsZXJzL2dldExhc3RNYWtldXBLaXRJRFwiO1xuXG4vKipcbiAqIFNob3cgbGFzdCBtYWtldXAga2l0IElEIGF0IHRoZSBib2R5IHBhcnRzIGdyaWRcbiAqL1xuJCgnI2dldC1sYXN0LW1ha2V1cC1raXQtaWQnKVxuICAgIC5jbGljayhnZXRMYXN0TWFrZXVwS2l0SUQpO1xuIiwiZXhwb3J0IGNvbnN0IE1BS0VVUF9LSVRfU0hPV19GT1JNID0gJ01BS0VVUF9LSVRfU0hPV19GT1JNJztcbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7TUFLRVVQX0tJVF9TSE9XX0ZPUk19IGZyb20gXCJtb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChNQUtFVVBfS0lUX1NIT1dfRk9STSkpO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBpbmdyZWRpZW50IGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsX2luZ3JlZGllbnRfZ3JvdXBzID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF9pbmdyZWRpZW50X2dyb3Vwc190ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5ncm91cF9pZCcpLnRleHQoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lbWVhbC1pbmdyZWRpZW50LWdyb3VwJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmdyZWRpZW50RGVsZXRlKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7aW5ncmVkaWVudERlbGV0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgaW5ncmVkaWVudERlbGV0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBpbmdyZWRpZW50IGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsX2luZ3JlZGllbnRzID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF9pbmdyZWRpZW50c190ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5pbmdyZWRpZW50X2lkJykudGV4dCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsLWluZ3JlZGllbnQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZ3JlZGllbnREZWxldGUoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtpbmdyZWRpZW50RGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9pbmdyZWRpZW50RGVsZXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBpbmdyZWRpZW50RGVsZXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xufSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21lYWwgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLm1lYWxfaWQnKS50ZXh0KCk7XG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lbWVhbCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lYWxEZWxldGUoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIE1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVNZWFsU3RhdGUgKCkge1xuICAgIGNvbnN0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnLm1lYWwtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZFwiKTtcbiAgICBjb25zdCBkYXRhID0gJCgnLm1lYWwtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICB0Ym9keS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7bWVhbERlbGV0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvbWVhbERlbGV0ZVwiO1xuaW1wb3J0IHtzYXZlTWVhbFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0NSRUFURUQsIEFXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBtZWFsRGVsZXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgbWVhbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZChfdGhpcykoKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBzYXZlTWVhbFN0YXRlKClcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzKSgpO1xuICAgIH0pXG5cblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICovXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZU1lYWxTdGF0ZSk7XG4iLCJleHBvcnQgY29uc3QgTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNID0gJ05FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSc7XG4iLCJjb25zdCBUUkFTSCA9ICdUUkFTSCc7XG5jb25zdCBUUkFTSF9GSUVMRFNfSUQgPSAndHJhc2gtZmllbGRzJztcbmNvbnN0IFNFTEVDVF9JRCA9ICduZWlnaGJvci1hY3Rpdml0eS10eXBlLWlkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNFTEVDVF9JRCk7XG5cbiAgICBpZiAoIXNlbGVjdCB8fCBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3Qub3B0aW9ucy5sZW5ndGggJiYgc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XG5cbiAgICAgICAgY29uc3QgdHJhc2hGaWVsZHMgPSAkKCcjJyArIFRSQVNIX0ZJRUxEU19JRCk7XG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRFbGVtZW50LnRleHQudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBUUkFTSDpcbiAgICAgICAgICAgICAgICB0cmFzaEZpZWxkcy5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0cmFzaEZpZWxkcy5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7TkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNLCBzZWxmKTtcblxuICAgICAgICBjaGFuZ2VUeXBlKCk7XG5cbiAgICAgICAgJCgnLm5laWdoYm9yLWFjdGl2aXR5LWZvcm0gLmRhdGV0aW1lcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gJy4vaGFuZGxlcnMvY2hhbmdlVHlwZSc7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSlcbiAgICAub24oJ2NoYW5nZScsICcubmVpZ2hib3ItYWN0aXZpdHktdHlwZScsIGNoYW5nZVR5cGUpO1xuXG4vKipcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cbiAqL1xuJCgnLnNob3ctZm9ybScpXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBQUk9EVUNUX1NIT1dfRk9STSA9ICdQUk9EVUNUX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgQ2xlYXZlIGZyb20gXCJjbGVhdmUuanNcIjtcblxuLyoqXG4gKiBQcmljZSBpbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIG5ldyBDbGVhdmUodGhpcywge1xuICAgICAgICBudW1lcmFsOiB0cnVlLFxuICAgICAgICBwcmVmaXg6ICckICcsXG4gICAgICAgIHJhd1ZhbHVlVHJpbVByZWZpeDogdHJ1ZSxcbiAgICAgICAgb25WYWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBNYXRoLnJvdW5kKCtlLnRhcmdldC5yYXdWYWx1ZSAqIDEwMCk7XG4gICAgICAgICAgICBsZXQgcHJvZHVjdFByaWNlID0gJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJ3RkJykuZmluZCgnLnByb2R1Y3QtcHJpY2UnKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBwYXJzZUludChwcm9kdWN0UHJpY2UudmFsKCkpKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlXG4gICAgICAgICAgICAgICAgICAgIC52YWwodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC5jaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtQUk9EVUNUX1NIT1dfRk9STX0gZnJvbSBcIm1vZHVsZXMvcHJvZHVjdC9jb25zdGFudHNcIjtcbmltcG9ydCBwcmljZUluaXQgZnJvbSBcIm1vZHVsZXMvcHJvZHVjdC9oYW5kbGVycy9wcmljZUluaXRcIjtcblxuJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKTtcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KFBST0RVQ1RfU0hPV19GT1JNKSk7XG5cbiQoJyN0ZXN0JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG59KTtcblxuLyoqXG4gKiBQcmljZSBmb3JtYXRcbiAqL1xuJCgnLnByb2R1Y3QtcHJpY2UtdmlldycpLmVhY2gocHJpY2VJbml0KTtcbiIsIlxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSBwYXJzZUludCgkKCcuYWRkLWNvdW50ZXInKS52YWwoKSk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCd0YWJsZS50YWJsZSB0Ym9keScpO1xuICAgIGNvbnN0IG1heElkID0gJCh0aGlzKS5kYXRhKCdjb3VudGVyJyk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSAkKCd0ZW1wbGF0ZSNjb25maWctcm93Jyk7XG5cbiAgICBsZXQgbmV3TGVuZ3RoID0gcGFyc2VJbnQodGJvZHkuZmluZCgndHIubmV3LXJvdycpLmxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IHRySWQgPSAobWF4SWQgPiAwID8gbWF4SWQgOiAwKSArIHBhcnNlSW50KHRib2R5LmZpbmQoJ3RyLm5ldy1yb3cnKS5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBuZXdSb3cgPSB0ZW1wbGF0ZS5odG1sKCkucmVwbGFjZSgvJWlkJS9nLCB0cklkKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyV0cl9pZCUvZywgdHJJZClcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lZHJhZnQlL2csIHRySWQpO1xuXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHZhbHVlcyB0byBuZXcgcm93c1xuICAgICAgICBsZXQgbmV3Um93SHRtbCA9ICQobmV3Um93KTtcbiAgICAgICAgJCgnLmRlZmF1bHQtcm93LXZhbHVlJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICBuZXdSb3dIdG1sLmZpbmQoJy4nICsgJCh0aGlzKS5kYXRhKCdjbGFzcycpKS5hdHRyKCd2YWx1ZScsIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdSb3cgPSBuZXdSb3dIdG1sLmdldCgwKS5vdXRlckhUTUw7XG5cbiAgICAgICAgaWYgKG5ld0xlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQodGJvZHkuZmluZCgndHIubmV3LXJvdycpLmxhc3QoKSkuYWZ0ZXIobmV3Um93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRib2R5LnByZXBlbmQobmV3Um93KTtcbiAgICAgICAgfVxuICAgICAgICBuZXdMZW5ndGgrKztcblxuICAgICAgICB0Ym9keS5maW5kKCdbZGF0YS1hdXRvaW5jcmVtZW50PVwiMVwiXScpLmxhc3QoKS52YWwodHJJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IERyb3B6b25lQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXRcbiAqXG4gKiBAcGFyYW0gX1xuICogQHBhcmFtIGl0ZW1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKF8sIGl0ZW0pIHtcbiAgICBjb25zdCBkcm9wem9uZUNvbnRhaW5lciA9ICQoaXRlbSk7XG4gICAgY29uc3QgcHJldmlld0hpZGRlbklucHV0ID0gZHJvcHpvbmVDb250YWluZXIuZmluZCgnaW5wdXQnKTtcblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXG4gICAgICovXG4gICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihpdGVtKVxuICAgICAgICAuc2V0VXBsb2FkVXJsKGRyb3B6b25lQ29udGFpbmVyLmRhdGEoJ3VybCcpKVxuICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYW5jZWwoKCkgPT4ge1xuICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgJCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHByZXZpZXdcbiAgICAgKi9cbiAgICBpZiAoISFwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCkpIHtcbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyXG4gICAgICAgICAgICAuc2V0UHJldmlldyhcbiAgICAgICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCksXG4gICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVDb250YWluZXIuZGF0YSgnZm9sZGVyJyksIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgKi9cbiAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcbn0iLCIvKipcbiAqIE1hcmsgY2hhbmdlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQgKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgICQoJyN1cGRhdGUtYWxsJykuc2hvdygpO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUGFnZSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoJChcInRyLmNoYW5nZWRcIikuZmluZCgnaW5wdXQsIGlucHV0W3R5cGU9XCJoaWRkZW5cIl0sIHNlbGVjdCwgdGV4dGFyZWEnKSk7XG5cbiAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKHsuLi5kYXRhfSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgIGlmIChyZXNwLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICBub3RpZnlFcnJvcihyZXNwLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGRwYSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVJvdyAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCByb3dUb1NhdmUgPSAkKHRoaXMpLnBhcmVudHMoJ3RyJyk7XG4gICAgbGV0IGFjdGlvbiA9IHJvd1RvU2F2ZS5kYXRhKCdhY3Rpb24nKTtcbiAgICBsZXQgcm93ID0gcm93VG9TYXZlLmZpbmQoXCIuZWRpdGFibGUgc2VsZWN0LCAuZWRpdGFibGUgaW5wdXRcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKCQoXCJ0ci5jaGFuZ2VkXCIpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbGV0IHIgPSBjb25maXJtKCdDaGFuZ2VkIG1vcmUgdGhhbiBvbmUgcm93LiBTYXZlZCBvbmx5IGN1cnJlbnQgcm93IScpO1xuICAgICAgICBpZihyICE9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZighcm93VG9TYXZlLmhhc0NsYXNzKCdjaGFuZ2VkJykpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUFVUXCIsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIHVybDogYWN0aW9uLFxuICAgICAgICBkYXRhOiByb3csXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXNwICkge1xuICAgICAgICAgICAgcm93VG9TYXZlLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcC5tZXNzYWdlXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICB0eXBlOiByZXNwLnR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCBleGNlcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChqcVhIUi5yZXNwb25zZUpTT04gJiYganFYSFIucmVzcG9uc2VKU09OLmhhc093blByb3BlcnR5KCdlcnJvcnMnKSkge1xuICAgICAgICAgICAgICAgICQuZWFjaCgganFYSFIucmVzcG9uc2VKU09OLmVycm9ycywgZnVuY3Rpb24oZXJyb3JLZXksIGVycm9yICkge1xuICAgICAgICAgICAgICAgICAgICAkLmVhY2goIGVycm9yLCBmdW5jdGlvbihtZXNzYWdlS2V5LCBtZXNzYWdlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuaW1wb3J0IGRyb3B6b25lSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9kcm9wem9uZUluaXRcIjtcbmltcG9ydCB7c2F2ZVBhZ2V9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XG5pbXBvcnQge21hcmtDaGFuZ2VkfSBmcm9tIFwiLi9oYW5kbGVycy9tYXJrQ2hhbmdlZFwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0NSRUFURUQsIEFXQVJEX0RFTEVURSwgQ0xPU0VfQVdBUkRfTU9EQUx9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZVJvd30gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVJvd1wiO1xuXG4vKipcbiAqIFR1cm5lZCBvZmYgdGhlIERyb3B6b25lIGF1dG8gaW5pdFxuICpcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG5Ecm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0XG4gKi9cbiQoJy5kcm9wem9uZScpLmVhY2goZHJvcHpvbmVJbml0KTtcblxuJChkb2N1bWVudClcblxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKENMT1NFX0FXQVJEX01PREFMLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFKTtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdCBjb2xvci1waWNrZXIgaW5wdXRzXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuY3AyJykuY29sb3JwaWNrZXIoKTtcblxuICAgICAgICAkKCcjdXBkYXRlLWFsbCcpLmNsaWNrKHNhdmVQYWdlKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnLnVwZGF0ZS1yb3cnKTtcblxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIHNlbGYpO1xuICAgICAgICAgICAgc2F2ZUJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcykoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucmVtb3ZlLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgJCgnI3VwZGF0ZS1hbGwnKS5zaG93KCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kcm9wem9uZScsIG1hcmtDaGFuZ2VkKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBtYXJrQ2hhbmdlZClcbiAgICAub24oJ2lucHV0JywgJ3Rib2R5IGlucHV0LCB0Ym9keSB0ZXh0YXJlYScsIG1hcmtDaGFuZ2VkKVxuICAgIC5vbignY2hhbmdlJywgJ3Rib2R5IGlucHV0LCB0Ym9keSBzZWxlY3QnLCBtYXJrQ2hhbmdlZCk7XG4iLCJjb25zdCBXQUxLX0NBVEVHT1JZID0gJzYnO1xuY29uc3QgUlVOX0NBVEVHT1JZID0nNyc7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdDIgPSAkKCcudGFibGUnKS5maW5kKCcuZW1iZWQtZ3JvdXAgc2VsZWN0LnNlbGVjdDInKTtcbiAgICAgICAgbGV0IHNlbGVjdFZhbCA9IDA7XG4gICAgICAgIHNlbGVjdDIuZWFjaChmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgICAgc2VsZWN0VmFsID0gJChpKS52YWwoKTtcbiAgICAgICAgICAgIGlmKHNlbGVjdFZhbCA9PT0gV0FMS19DQVRFR09SWSB8fCBzZWxlY3RWYWwgPT09IFJVTl9DQVRFR09SWSkge1xuICAgICAgICAgICAgICAgICQoaSkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGkpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBoaWRlIHNwZWVkIG9uIHRyaWdnZXIgYWRkLWVtYmVkIGJ1dHRvblxuICAgICAqL1xuICAgIC5vbignYWlfYW5pbWF0aW9uJywgJy5hZGQtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGVtYmVkID0gJCh0aGlzKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0VmFsID0gZW1iZWQuZmluZCgnLnNlbGVjdDInKS52YWwoKTtcbiAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XG4gICAgICAgICAgICBlbWJlZC5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbWJlZC5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBoaWRlIHNwZWVkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBjb25zdCBzZWxlY3RWYWwgPSAkKGl0ZW0udGFyZ2V0KS52YWwoKTtcbiAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XG4gICAgICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNID0gJ1NIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0nO1xuIiwiLyoqXG4gKiBBZGQgYSBuZXcgc2hvcCBpbiBhIGRlcGFydG1lbnRzIGdyaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCB0YWJsZSA9IGN1cnJlbnRCdG4uY2xvc2VzdCgnLnNob3BzLXRhYmxlJykuZmluZCgndGJvZHknKTtcbiAgICBjb25zdCBkZXBhcnRtZW50SWQgPSBjdXJyZW50QnRuLmRhdGEoJ2RlcGFydG1lbnQnKTtcbiAgICBsZXQgY291bnRlciA9IHBhcnNlSW50KGN1cnJlbnRCdG4uZGF0YSgnY291bnQnKSk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSAkKCcjc2hvcC10ZW1wbGF0ZScpXG4gICAgICAgIC5odG1sKClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnJWRlcGFydG1lbnRJZCUnLCBcImdcIiksIGRlcGFydG1lbnRJZClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnJWluZGV4JScsIFwiZ1wiKSwgY291bnRlcisrKTtcblxuICAgIGN1cnJlbnRCdG4uZGF0YSgnY291bnQnLCBjb3VudGVyKTtcblxuICAgIHRhYmxlLmFwcGVuZCh0ZW1wbGF0ZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBmb3Igc2hvcCBkZXBhcnRtZW50XG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBzaG9wTmFtZVByZWZpeCA9ICdzaG9wJztcbiAgICBjb25zdCBkZXBhcnRtZW50TmFtZVByZWZpeCA9ICdkZXBhcnRtZW50JztcbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBmYXN0U2F2ZUNvbnRhaW5lciA9ICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJyk7XG5cbiAgICBsZXQgc2hvcHMgPSB7fTtcbiAgICBsZXQgZGVwYXJ0bWVudCA9IHt9O1xuXG4gICAgZmFzdFNhdmVDb250YWluZXIuZmluZCgndGJvZHkgdHIuY2hhbmdlZCB0ci5pbmZvJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkZXBpbmRleCA9ICQodGhpcykuY2xvc2VzdCgnLmRlcGFydG1lbnQnKS5pbmRleCgpO1xuICAgICAgICBsZXQgZGVwYXJ0bWVudEZvcm1EYXRhID0gZ2V0Rm9ybURhdGEoJCh0aGlzKSk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZGVwYXJ0bWVudEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGAke2RlcGFydG1lbnROYW1lUHJlZml4fVske2RlcGluZGV4fV1bJHtpfV1gO1xuICAgICAgICAgICAgZGVwYXJ0bWVudFtpdGVtTmFtZV0gPSBkZXBhcnRtZW50Rm9ybURhdGFbaV07XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMpLm5leHQoJ3RyLnNob3BzJykuZmluZCgndGJvZHkuc29ydGFibGUgdHInKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gZ2V0Rm9ybURhdGEoJCh0aGlzKSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBgJHtzaG9wTmFtZVByZWZpeH1bJHtkZXBhcnRtZW50Rm9ybURhdGEuaWR9XVske2luZGV4fV1bJHtpfV1gO1xuICAgICAgICAgICAgICAgIHNob3BzW2l0ZW1OYW1lXSA9IGZvcm1EYXRhW2ldO1xuICAgICAgICAgICAgICAgIHNob3BzW2Ake3Nob3BOYW1lUHJlZml4fVske2RlcGFydG1lbnRGb3JtRGF0YS5pZH1dWyR7aW5kZXh9XVtkZXBhcnRtZW50XWBdID0gZGVwYXJ0bWVudEZvcm1EYXRhLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKHsuLi5zaG9wcywgLi4uZGVwYXJ0bWVudH0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICQoJy5jaGFuZ2VkJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogUmFkaW8gaW5wdXQgZnJvbSBjaGVja2JveFxuICogQmVjYXVzZSBpbnB1dFt0eXBlPXJhZGlvXSBkaWQgbm90IHdvcmsgY29ycmVjdGx5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBjdXJyZW50SXRlbS5jbG9zZXN0KCcudGFibGUnKS5maW5kKCcucmFkaW8nKTtcblxuICAgIGFsbEl0ZW1zLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgYWxsSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcblxuICAgIGN1cnJlbnRJdGVtLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICBjdXJyZW50SXRlbS5hZGRDbGFzcygnY2hlY2tlZCcpO1xufVxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xuXG4vKipcbiAqIFNvcnRhYmxlIEluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG5ldyBTb3J0YWJsZSh0aGlzLCB7XG4gICAgICAgIGdyb3VwOiAnZGVwYXJ0bWVudCcsXG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAkKGUuaXRlbSkuY2xvc2VzdCgnLnRhYmxlJykuZmluZCgndHIuZGVwYXJ0bWVudCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICByYWRpbzogJChlLml0ZW0pLmZpbmQoJy5yYWRpbycpLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6ICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5cbi8qKlxuICogU29ydGFibGUgSW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgbmV3IFNvcnRhYmxlKHRoaXMsIHtcbiAgICAgICAgZ3JvdXA6ICdzaG9wcycsXG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAkKGUuaXRlbSkuY2xvc2VzdCgndHIuZGVwYXJ0bWVudCcpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaW86ICQoZS5pdGVtKS5maW5kKCcucmFkaW8nKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiAkKGUuaXRlbSkuY2xvc2VzdCgnLnRhYmxlJyksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBhcmVudC5maW5kKCcucmFkaW8uY2hlY2tlZDpndCgwKScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnJhZGlvLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmFkaW8ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7U0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XG5pbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXQgYWZ0ZXIgdGhlIG1vZGFsIG9wZW5lZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFNIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0sICgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpZXdcbiAgICAgICAgICovXG4gICAgICAgIGRyb3B6b25lSW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsJykpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aWV3IFNtYWxsXG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZUluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lLXNtYWxsJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybC1zbWFsbCcpKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBEcm9wem9uZSBJbml0XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZHJvcHpvbmVFbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwcmV2aWV3VXJsRWxlbWVudFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkcm9wem9uZUluaXQoZHJvcHpvbmVFbGVtZW50LCBwcmV2aWV3VXJsRWxlbWVudCkge1xuICAgIGlmICghZHJvcHpvbmVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxuICAgICAqL1xuICAgIGNvbnN0IGRyb3B6b25lQnVpbGRlciA9IG5ldyBEcm9wem9uZUJ1aWxkZXIoZHJvcHpvbmVFbGVtZW50KVxuICAgICAgICAuc2V0VXBsb2FkVXJsKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LnVybClcbiAgICAgICAgLmVycm9yKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICQocHJldmlld1VybEVsZW1lbnQpLnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYW5jZWwoKCkgPT4ge1xuICAgICAgICAgICAgJChwcmV2aWV3VXJsRWxlbWVudCkudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAkKGRyb3B6b25lRWxlbWVudCkuZmluZCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgICAgICBwcmV2aWV3VXJsRWxlbWVudC52YWx1ZSA9IHJlc3BvbnNlLmZpbGVfbmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJldmlld1xuICAgICAqL1xuICAgIGlmIChwcmV2aWV3VXJsRWxlbWVudC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyXG4gICAgICAgICAgICAuc2V0UHJldmlldyhcbiAgICAgICAgICAgICAgICBwcmV2aWV3VXJsRWxlbWVudC52YWx1ZSxcbiAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC5mb2xkZXIsIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAqL1xuICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xufSIsImltcG9ydCBhZGRTaG9wIGZyb20gXCIuL2hhbmRsZXJzL2FkZFNob3BcIjtcbmltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVwiO1xuaW1wb3J0IHJhZGlvSW5wdXQgZnJvbSBcIi4vaGFuZGxlcnMvcmFkaW9JbnB1dFwiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwibW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XG5pbXBvcnQgc29ydGFibGVEZXBhcnRtZW50SW5pdCBmcm9tIFwibW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvc29ydGFibGVEZXBhcnRtZW50SW5pdFwiO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXRcbiAqL1xuc2hvd0Zvcm0oKTtcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBSYWRpbyBidXR0b25zIGJlaGF2aW9yXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnJhZGlvJywgcmFkaW9JbnB1dClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvdyB0byB0aGUgZHBhIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyLmRlcGFydG1lbnQnKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEb2N1bWVudCByZWFkeVxuICAgICAqL1xuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgY2xhc3MgdG8gY2hlY2tlZCByYWRpb3NcbiAgICAgICAgICovXG4gICAgICAgICQoJy5yYWRpb1tjaGVja2VkXScpLmFkZENsYXNzKCdjaGVja2VkJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhIG5ldyBzaG9wIGluIGEgZGVwYXJ0bWVudHMgZ3JpZFxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmFkZC1zaG9wJykuY2xpY2soYWRkU2hvcCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZhc3Qgc2F2ZVxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmZhc3Qtc2F2ZScpLmNsaWNrKGZhc3RTYXZlKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZSB0ciB0byBzb3J0YWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYWtlIHRyIHRvIHNvcnRhYmxlXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuc29ydGFibGUtZGVwYXJ0bWVudCcpLmVhY2goc29ydGFibGVEZXBhcnRtZW50SW5pdCk7XG4gICAgfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI3JlbGVhc2UgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNyZWxlYXNlX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLnJlbGVhc2VfaWQnKS52YWwoKTtcbiAgICBjb25zdCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVyZWxlYXNlJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG5cbiAgICAgICAgdGJvZHkuZmluZCgnLmRhdGV0aW1lcGlja2VyJylcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVBhZ2UgKCkge1xuICAgIGNvbnN0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnLnJlbGVhc2Utc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWRcIik7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5yZWxlYXNlLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3QsIC5jaGFuZ2VkIHRleHRhcmVhXCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgdGJvZHkuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAkKGl0ZW0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVQYWdlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIGR5ZXMgcGFnZVxuICovXG4kKCcuc2F2ZS1wYWdlJykuY2xpY2soc2F2ZVBhZ2UpO1xuIiwiJChkb2N1bWVudClcblxuICAgIC5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZmluZCgndGQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKCQodGhpcykuYXR0cignc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZCcsICcjZTdlN2U3Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjc291bmQgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNzb3VuZF90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5zb3VuZF9pZCcpLnZhbCgpO1xuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXNvdW5kX2lkJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU291bmRTdGF0ZSAoKSB7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5zb3VuZC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCkge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlU291bmRTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVNvdW5kU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU291bmRTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBUQU1BVE9PTF9TSE9XX0ZPUk0gPSAnVEFNQVRPT0xfU0hPV19GT1JNJztcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge1RBTUFUT09MX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFRBTUFUT09MX1NIT1dfRk9STSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoVEFNQVRPT0xfU0hPV19GT1JNLCBzZWxmKTtcblxuICAgICAgICAkKCcubmVpZ2hib3ItYWN0aXZpdHktZm9ybSAuZGF0ZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSk7XG5cbi8qKlxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cbiAqIEFmdGVyIGNsaWNrIGF0IGNyZWF0ZSBvciBlZGl0IGJ1dHRvblxuICovXG4kKCcuc2hvdy1mb3JtJylcbiAgICAuY2xpY2soc2hvd0Zvcm0pO1xuIiwiZXhwb3J0IGNvbnN0IFNFQVJDSF9VU0VSX0FTU0VUUyAgICAgID0gJ1NFQVJDSF9VU0VSX0FTU0VUUyc7XG5leHBvcnQgY29uc3QgU1VCTUlUX1VTRVJfUEFSVF9GT1JNICAgPSAnU1VCTUlUX1VTRVJfUEFSVF9GT1JNJztcbmV4cG9ydCBjb25zdCBERUxFVEVfTkVJR0hCT1IgICAgICAgICA9ICdERUxFVEVfTkVJR0hCT1InO1xuZXhwb3J0IGNvbnN0IEFERF9ORUlHSEJPUiAgICAgICAgICAgID0gJ0FERF9ORUlHSEJPUic7XG5leHBvcnQgY29uc3QgR0VUX05FSUdIQk9SUyAgICAgICAgICAgPSAnR0VUX05FSUdIQk9SUyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX05FSUdIQk9SUyAgICAgICAgPSAnVVBEQVRFX05FSUdIQk9SUyc7XG5cbmV4cG9ydCBjb25zdCBORUlHSEJPUl9HUklEX0lEID0gJ25laWdoYm9yLWdyaWQnOyIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcblxuLyoqXG4gKiBBZGQgY29tbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoJCgnI2NvbGxlY3RpYmxlLWZvcm0nKS5maW5kKCdpbnB1dCcpKTtcblxuICAgIG5ldyBodHRwKCQoJyNhZGQtY29sbGVjdGlibGUnKS5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAuZGF0YSh7ZGF0YX0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3AgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3AudHlwZSA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm9ybSA9ICQocmVzcC5kYXRhKTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIHJlc3AuY29udGFpbmVyKS5yZXBsYWNlV2l0aChmb3JtKTtcbiAgICAgICAgICAgICAgICBub3RpZnlTdWNjZXNzKCdVc2VyIGNvbGxlY3RpYmxlIHVwZGF0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBBZGQgY29tbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIG5ldyBodHRwKCQodGhpcykuY2xvc2VzdCgnYScpLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgIC5kYXRhKHtkZXNjcmlwdGlvbjogJCgnW25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbCgpfSlcbiAgICAgICAgLnN1Y2Nlc3MociA9PiB7XG4gICAgICAgICAgICBpZiAoci5zdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsKCcnKTtcbiAgICAgICAgICAgICAgICAkKCcjdXNlci1jb21tZW50cycpLnByZXBlbmQoJzx0cj48dGQ+JyArIHIubW9kZWwuZGVzY3JpcHRpb24gKyAnPC90ZD48dGQ+JyArIHIuY3JlYXRlZF9ieSArICc8L3RkPjx0ZD4nICsgci5jcmVhdGVkX2F0ICsgJyBQU1Q8L3RkPjx0ZD48YSBocmVmPVwiaHR0cDovL2Ntcy1kZXYubG9jYWwvcmVtb3ZlLWNvbW1lbnQvJyArIHIubW9kZWwuaWQgKyAnXCIgY2xhc3M9XCJhamF4LWNvbmZpcm0tYWN0aW9uXCIgZGF0YS1tZXRob2Q9XCJERUxFVEVcIiBkYXRhLWhlYWRlcj1cIkRlbGV0ZSBjb21tZW50P1wiIGRhdGEtYnRuLW5hbWU9XCJEZWxldGVcIiBkYXRhLWJ0bi1jbGFzcz1cImJ0bi1kYW5nZXIgYnRuLXNtXCIgZGF0YS1kaXNtaXNzPVwiMVwiIGRhdGEtcmVsb2FkPVwiMVwiPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+RGVsZXRlPC9idXR0b24+PC9hPjwvdGQ+PC90cj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogU3luY2hyb25pemUgbW92ZS1wbGFjZW1lbnQtc2VsZWN0IHNlbGVjdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxlY3RlZFN0b3JhZ2UgPSAkKHRoaXMpLnZhbCgpO1xuICAgICQodGhpcykucGFyZW50cygnZm9ybScpLmZpbmQoJy5tb3ZlLXBsYWNlbWVudC1zZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmIChzZWxlY3RlZFN0b3JhZ2UgIT0gJCh0aGlzKS52YWwoKSkge1xuICAgICAgICAgICAgJCh0aGlzKS52YWwoc2VsZWN0ZWRTdG9yYWdlKS5jaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtVUERBVEVfTkVJR0hCT1JTLCBORUlHSEJPUl9HUklEX0lEfSBmcm9tIFwibW9kdWxlcy91c2Vycy9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTZXQgcGFnZSBsaW1pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpICsgJyZwYWdlX2xpbWl0PScgKyAkKHRoaXMpLnZhbCgpO1xuICAgIG5ldyBodHRwKHJvdXRlKVxuICAgICAgICAubWV0aG9kKCdHRVQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKGAjJHtORUlHSEJPUl9HUklEX0lEfWApLnJlcGxhY2VXaXRoKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcbn1cbiIsIi8qKlxuICogQ2hhbmdlIHBsYWNlbWVudCBzZWxlY3QgaW4gQWRkIEFzc2V0cyBibG9ja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcGxhY2VtZW50TmFtZSA9ICQoJyNhZGQtYXNzZXRzLWJsb2NrLXBsYWNlbWVudC1uYW1lJyk7XG4gICAgaWYgKCQodGhpcykudmFsKCkgPiAwKSB7XG4gICAgICAgIHBsYWNlbWVudE5hbWUuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxhY2VtZW50TmFtZS5zaG93KCk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDaGFuZ2UgbW9kZSBmb3IgYWRkIG5laWdoYm9yc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmVpZ2hib3JzQ291bnQgPSAkKCcjbmVpZ2hib3JzLWNvdW50Jyk7XG4gICAgaWYoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICBuZWlnaGJvcnNDb3VudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5laWdoYm9yc0NvdW50LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBIaWRlIGFzc2V0cyBpbiBwbGFjZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICBjdXJyZW50RWxlbWVudC5zaWJsaW5ncygnLmxvYWQtYXNzZXRzJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICAkKCcjYXNzZXQtY29udGFpbmVyLScgKyBjdXJyZW50RWxlbWVudC5kYXRhKCdwbGFjZW1lbnQnKSkuaHRtbCgnJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogUExBQ0VNRU5UX0FTU0VUU19ST1VURSAtIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxuICogSW5pdGVkIGluIHVzZXIvZWRpdC5ibGFkZS5waHBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IHBsYWNlbWVudCA9IGN1cnJlbnRFbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcpO1xuXG4gICAgY3VycmVudEVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbiAgICBjdXJyZW50RWxlbWVudC5zaWJsaW5ncygnLmhpZGUtYXNzZXRzJykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcblxuICAgIGxvYWRQYXJ0KFBMQUNFTUVOVF9BU1NFVFNfUk9VVEUgKyAnJnBsYWNlbWVudD0nICsgcGxhY2VtZW50LCAkKCcjYXNzZXQtY29udGFpbmVyLScgKyBwbGFjZW1lbnQpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBMb2FkIHBhcnQgZm9yIGVkaXQgdXNlciBwYWdlXG4gKi9cbmZ1bmN0aW9uIGxvYWRQYXJ0KGFjdGlvbiwgZWxlbWVudCkge1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgLm1ldGhvZCgnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSAkKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGl0ZW1zLmZpbmQoJy5saXN0LXRodW1ibmFpbCcpLnBvcG92ZXIoe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgY29udGVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiJyArICQodGhpcykuZGF0YSgnZnVsbCcpICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGl0ZW1zKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcbn0iLCIvKipcbiAqIFNlbGVjdCByb3dzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb3VudFNlbGVjdG9yID0gJCh0aGlzKS5wYXJlbnRzKCd0ZCwgdGgnKS5maW5kKCcuY291bnQtZm9yLXNlbGVjdCcpO1xuICAgIGNvbnN0IHJvd3NGb3JTZWxlY3QgPSAkKHRoaXMpLnBhcmVudHMoJ3RhYmxlJykuZmluZCgnLmZvci1zZWxlY3QnKTtcblxuICAgIGxldCBjb3VudEZvclNlbGVjdCA9IGNvdW50U2VsZWN0b3IudmFsKCkgfHwgMDtcbiAgICBpZiAoY291bnRGb3JTZWxlY3QgPT09IDApIHtcbiAgICAgICAgY291bnRGb3JTZWxlY3QgPSByb3dzRm9yU2VsZWN0Lmxlbmd0aDtcbiAgICAgICAgY291bnRTZWxlY3Rvci52YWwoY291bnRGb3JTZWxlY3QpO1xuICAgIH1cblxuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgIHJvd3NGb3JTZWxlY3QuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGNvdW50Rm9yU2VsZWN0ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY291bnRGb3JTZWxlY3QtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByb3dzRm9yU2VsZWN0LmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtVUERBVEVfTkVJR0hCT1JTLCBORUlHSEJPUl9HUklEX0lEfSBmcm9tIFwibW9kdWxlcy91c2Vycy9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBVcGRhdGUgbmVpZ2hib3IgZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFVQREFURV9ORUlHSEJPUlMsIChyZXNwb25zZSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShVUERBVEVfTkVJR0hCT1JTLCBzZWxmKTtcblxuICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIG5ldyBodHRwKCQodGhpcykuY2xvc2VzdCgnZm9ybScpLmF0dHIoJ2FjdGlvbicpKVxuICAgICAgICAgICAgICAgIC5tZXRob2QoJ0dFVCcpXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKGAjJHtORUlHSEJPUl9HUklEX0lEfWApLnJlcGxhY2VXaXRoKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FERF9ORUlHSEJPUn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNldCBuZWlnaGJvciBhcyBhY3RpdmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBRERfTkVJR0hCT1IsIHJlc3AgPT4ge1xuICAgICAgICBpZiAocmVzcC50eXBlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgJCgnI2RlbGV0ZS1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjYWRkLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNuZWlnaGJvci1zdGF0dXMtJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuaHRtbChyZXNwLmRhdGEuc3RhdHVzX3RleHQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtERUxFVEVfTkVJR0hCT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTZXQgbmVpZ2hib3IgYXMgZGVsZXRlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKERFTEVURV9ORUlHSEJPUiwgcmVzcCA9PiB7XG4gICAgICAgIGlmIChyZXNwLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAkKCcjZGVsZXRlLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNhZGQtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI25laWdoYm9yLXN0YXR1cy0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5odG1sKHJlc3AuZGF0YS5zdGF0dXNfdGV4dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0dFVF9ORUlHSEJPUlMsIE5FSUdIQk9SX0dSSURfSUR9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBVcGRhdGUgbmVpZ2hib3IgZ3JpZCBpbiBzZWFyY2hpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShHRVRfTkVJR0hCT1JTLCByZXNwID0+IHtcbiAgICAgICAgJChgIyR7TkVJR0hCT1JfR1JJRF9JRH1gKS5yZXBsYWNlV2l0aChyZXNwKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge1NFQVJDSF9VU0VSX0FTU0VUU30gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNlYXJjaCB1c2VyIGFzc2V0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFNFQVJDSF9VU0VSX0FTU0VUUywgZGF0YSA9PiB7XG4gICAgICAgICQoJyNzZWFyY2gtYXNzZXRzLWNvbnRhaW5lcicpLnJlcGxhY2VXaXRoKGRhdGEpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBub3RpZnlTdWNjZXNzIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzXCI7XG5pbXBvcnQge1NVQk1JVF9VU0VSX1BBUlRfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFN1Ym1pdCB1c2VyIHBhcnQgZm9ybVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFNVQk1JVF9VU0VSX1BBUlRfRk9STSwgcmVzcCA9PiB7XG4gICAgICAgIGxldCBmb3JtID0gJChyZXNwLmRhdGEpO1xuXG4gICAgICAgICQoJyMnICsgcmVzcC5jb250YWluZXIpLnJlcGxhY2VXaXRoKGZvcm0pO1xuICAgICAgICBmb3JtLmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuYCAgICAgICAgbm90aWZ5U3VjY2VzcygnVXNlciBkYXRhIHVwZGF0ZWQnKTtcbmAgICAgfSk7XG59XG4iLCJpbXBvcnQgc2VhcmNoVXNlckFzc2V0cyAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9zZWFyY2hVc2VyQXNzZXRzXCI7XG5pbXBvcnQgc3VibWl0VXNlclBhcnRGb3JtICAgIGZyb20gXCIuL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm1cIjtcbmltcG9ydCBkZWxldGVOZWlnaGJvciAgICAgICAgZnJvbSBcIi4vbGlzdGVuZXJzL2RlbGV0ZU5laWdoYm9yXCI7XG5pbXBvcnQgc2VhcmNoTmVpZ2hib3IgICAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9zZWFyY2hOZWlnaGJvclwiO1xuaW1wb3J0IGFkZE5laWdoYm9yICAgICAgICAgICBmcm9tIFwiLi9saXN0ZW5lcnMvYWRkTmVpZ2hib3JcIjtcbmltcG9ydCBsb2FkUGxhY2VtZW50QXNzZXRzICAgZnJvbSBcIi4vaGFuZGxlcnMvbG9hZFBsYWNlbWVudEFzc2V0c1wiO1xuaW1wb3J0IGhpZGVQbGFjZW1lbnRBc3NldHMgICBmcm9tIFwiLi9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzXCI7XG5pbXBvcnQgY2hhbmdlUGxhY2VtZW50ICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVBsYWNlbWVudFwiO1xuaW1wb3J0IGNoYW5nZVJhbmRvbU5laWdoYm9ycyBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VSYW5kb21OZWlnaGJvcnNcIjtcbmltcG9ydCBjaGFuZ2VNb3ZlUGxhY2VtZW50ICAgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlTW92ZVBsYWNlbWVudFwiO1xuaW1wb3J0IHNlbGVjdFJvd3MgICAgICAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9zZWxlY3RSb3dzXCI7XG5pbXBvcnQgdXBkYXRlTmVpZ2hib3JzICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL3VwZGF0ZU5laWdoYm9yc1wiO1xuaW1wb3J0IGNoYW5nZVBhZ2VMaW1pdCAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VQYWdlTGltaXRcIjtcbmltcG9ydCBhZGRDb21tZW50ICAgICAgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvYWRkQ29tbWVudFwiO1xuaW1wb3J0IGFkZENvbGxlY3RpYmxlICAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9hZGRDb2xsZWN0aWJsZVwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XG5cbi8qKlxuICogU2VhcmNoIHVzZXIgYXNzZXRzIGxpc3RlbmVyXG4gKi9cbnNlYXJjaFVzZXJBc3NldHMoKTtcblxuLyoqXG4gKiBTdWJtaXQgdXNlciBwYXJ0IGZvcm0gbGlzdGVuZXJcbiAqL1xuc3VibWl0VXNlclBhcnRGb3JtKCk7XG5cbi8qKlxuICogRGVsZXRlIE5laWdoYm9yXG4gKi9cbmRlbGV0ZU5laWdoYm9yKCk7XG5cbi8qKlxuICogQWRkIE5laWdoYm9yXG4gKi9cbmFkZE5laWdoYm9yKCk7XG5cbi8qKlxuICogU2VhcmNoIE5laWdoYm9yc1xuICovXG5zZWFyY2hOZWlnaGJvcigpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhc3NldHMgaW4gcGxhY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcubG9hZC1hc3NldHMnLCBsb2FkUGxhY2VtZW50QXNzZXRzKVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHBsYWNlbWVudCBpbiBBZGQgQXNzZXRzIGJsb2NrXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI3BsYWNlbWVudC1mb3ItYXNzZXQnLCBjaGFuZ2VQbGFjZW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbW9kZSBmb3IgYWRkIG5laWdoYm9yc1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNpcy1yYW5kb20tbmVpZ2hib3JzJywgY2hhbmdlUmFuZG9tTmVpZ2hib3JzKVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBhc3NldHMgaW4gcGxhY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hc3NldHMnLCBoaWRlUGxhY2VtZW50QXNzZXRzKVxuXG4gICAgLyoqXG4gICAgICogQXV0byBzZWxlY3Qgcm93c1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5zZWxlY3Qtcm93cycsIHNlbGVjdFJvd3MpXG5cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbml6ZSBtb3ZlLXBsYWNlbWVudC1zZWxlY3Qgc2VsZWN0c1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5tb3ZlLXBsYWNlbWVudC1zZWxlY3QnLCBjaGFuZ2VNb3ZlUGxhY2VtZW50KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIG5laWdoYm9yIHJlcXVlc3RcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtbmVpZ2hib3ItcmVxdWVzdCwgI2FkZC1uZWlnaGJvcnMnLCB1cGRhdGVOZWlnaGJvcnMpXG4gICAgLyoqXG4gICAgICogU2V0IHBhZ2UgbGltaXRcbiAgICAgKi9cbiAgICAgLm9uKCdjaGFuZ2UnLCAnLm5laWdoYm9yLXBhZ2UtbGltaXQnLCBjaGFuZ2VQYWdlTGltaXQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgY29tbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2FkZC1jb21tZW50JywgYWRkQ29tbWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBjb2xsZWN0aWJsZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2FkZC1jb2xsZWN0aWJsZScsIGFkZENvbGxlY3RpYmxlKVxuO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
