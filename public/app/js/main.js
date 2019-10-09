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
/*!*****************************************************!*\
  !*** /app/node_modules/moment/locale sync ^\.\/.*$ ***!
  \*****************************************************/
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




if (undefined && undefined.length) {
  raven_js__WEBPACK_IMPORTED_MODULE_15___default.a.config(undefined, {
    xhr: true,
    console: true,
    dom: true,
    location: false,
    sentry: true
  }).install();
}
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
$(document).on('change', '[name$="[time_type]"]', function () {
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
    Object(components_notify_notifySuccess__WEBPACK_IMPORTED_MODULE_1__["default"])('User data updated');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9hcHAvbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2h0dHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL21vZGFsQ29uZmlybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9iYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9hZGRFbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9hamF4UGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9jb25maXJtTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvZmFzdFNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2ZpbHRlckRhdGVSYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9tb2RhbERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvcGFnZUxpbWl0LmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3JlbW92ZUVtYmVkLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3N1Ym1pdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGaWxlUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldEZvcm1EYXRhLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0U3ViRm9sZGVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9hd2FyZENyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2Ryb3Bab25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvdXBkYXRlU2F2ZUFsbEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzIHN5bmMgXFwuXFwvW1xcdy1fXStcXC9tb2R1bGVcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcyBzeW5jIG1vZHVsZXMoLiopbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9zdHlsZS5zY3NzPzhmYmEiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hZGQtbWUvaGFuZGxlcnMvc2F2ZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWRkLW1lL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzLWxvZy9zdHlsZXMuc2Nzcz83NTZlIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2NoYW5nZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvaGFuZGxlcnMvY29weUFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9kb3dubG9hZEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9nZXRMYXN0Q29sbGVjdGlvbk51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9tYXJrQ2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hd2FyZC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL2hhbmRsZXJzL2NoYW5nZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvaGFuZGxlcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYmFubmVyL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9jb3B5QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvZG93bmxvYWRBZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9oaWRlQXJjaGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2hpZGVUYXNrcy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL3NlbGVjdFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL3Nob3dBcmNoaXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2hvd1Rhc2tzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvc3R5bGVzLnNjc3M/NWY0OCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vc3R5bGUuc2Nzcz82NzA3Iiwid2VicGFjazovLy8uL21vZHVsZXMvY3JvcC9oYW5kbGVycy9hZGRSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jcm9wL2hhbmRsZXJzL2RlbGV0ZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Nyb3AvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9zdHlsZS5zY3NzP2NlMmEiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZWZhdWx0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9kZXBsb3lTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvY2hhbmdlVGFiLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2hhbmRsZXJzL3Nob3dEZXBlbmRlbmN5LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2hhbmRsZXJzL3Nob3dEZXBlbmRlbmN5UG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L3N0eWxlcy5zY3NzP2ZkMjMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2R5ZVNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvYXNzZXRDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvc29ydGFibGVJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvbGlzdGVuZXJzL2FkZFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL2hhbmRsZXJzL3Nob3dBc3NldC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SUQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9tZWFsRGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9zYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL3N0eWxlcy5zY3NzPzg0M2MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvaGFuZGxlcnMvcHJpY2VJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wdXJjaGFzZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wdXJjaGFzZS9zdHlsZS5zY3NzPzA1ZGUiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9kcm9wem9uZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9tYXJrQ2hhbmdlZC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvaGFuZGxlcnMvc2F2ZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9hZGRTaG9wLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL2Zhc3RTYXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3JhZGlvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvc29ydGFibGVEZXBhcnRtZW50SW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9zdHlsZXMuc2Nzcz81ZTVhIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9zdHlsZXMuc2Nzcz9iNzI5Iiwid2VicGFjazovLy8uL21vZHVsZXMvdGFtYXRvb2wvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdGFtYXRvb2wvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdGFtYXRvb2wvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvYWRkQ29sbGVjdGlibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9hZGRDb21tZW50LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvY2hhbmdlTW92ZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZVBhZ2VMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZVJhbmRvbU5laWdoYm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2hpZGVQbGFjZW1lbnRBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9sb2FkUGxhY2VtZW50QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvc2VsZWN0Um93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL3VwZGF0ZU5laWdoYm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9hZGROZWlnaGJvci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9kZWxldGVOZWlnaGJvci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zZWFyY2hOZWlnaGJvci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zZWFyY2hVc2VyQXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvbGlzdGVuZXJzL3N1Ym1pdFVzZXJQYXJ0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL3N0eWxlcy5zY3NzP2Q5Y2MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LnNjc3M/MmI1NCJdLCJuYW1lcyI6WyJTSVpFUyIsInNtIiwibWQiLCJsZyIsIkxPQURJTkdfVEVYVCIsImRyb3B6b25lQ29udGFpbmVyIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9kcm9wem9uZUNvbnRhaW5lciIsIl9jYW5jZWxCdXR0b24iLCIkIiwiZmluZCIsInVybCIsIl91cGxvYWRVcmwiLCJuYW1lIiwiX3ByZXZpZXciLCJjYWxsYmFjayIsIl9lcnJvckNhbGxiYWNrIiwiX2NhbmNlbENhbGxiYWNrIiwiX3N1Y2Nlc3NDYWxsYmFjayIsIl9kcm9wem9uZUJ1aWxkZXIiLCJkcm9wem9uZUZhaWwiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidXBsb2FkTXVsdGlwbGUiLCJhY2NlcHRlZEZpbGVzIiwiaGVhZGVycyIsIkNTUkZfVE9LRU4iLCJpbml0IiwiZW1pdCIsIm9uIiwidGV4dCIsImZpbGUiLCJyZXNwb25zZSIsImNsaWNrIiwiRHJvcHpvbmUiLCJfdXJsIiwiX21ldGhvZCIsIl9kYXRhIiwiX2Vycm9yIiwiZXJyb3JIYW5kbGVyIiwiX3N1Y2Nlc3MiLCJzdWNjZXNzSGFuZGxlciIsIl9jb21wbGV0ZSIsIm1ldGhvZCIsImRhdGEiLCJmbiIsImFqYXgiLCJ0eXBlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJub3RpZnlFcnJvciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJub3RpZnlTdWNjZXNzIiwibW9kYWxzQ29udGFpbmVyIiwiTU9EQUxfU0laRVMiLCJtb2RhbEluZGV4IiwibW9kYWxDb3VudGVyIiwiX2lkIiwic2l6ZSIsIl9zaXplIiwiaGVhZGVyIiwiX2hlYWRlciIsImJvZHkiLCJfYm9keSIsImZvb3RlciIsIl9mb290ZXIiLCJkYXRhc2V0IiwiX2RhdGFzZXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJfYmVmb3JlQnVpbGRDYWxsYmFjayIsIl9hZnRlckJ1aWxkQ2FsbGJhY2siLCJfb25DbG9zZUNhbGxiYWNrIiwiY29udGVudCIsInB1c2giLCJodG1sIiwiX2dldElEIiwiam9pbiIsIl9nZXRTaXplIiwiX2JlZm9yZUJ1aWxkIiwiX2dldEhlYWRlciIsIl9nZXRCb2R5IiwiX2dldEZvb3RlciIsImRhdGV0aW1lcGlja2VyIiwiZm9ybWF0IiwiYXV0b2Nsb3NlIiwibWluVmlldyIsIl9hZnRlckJ1aWxkIiwib2ZmIiwiX29uQ2xvc2UiLCJtb2RhbCIsImdldE1vZGFsQ291bnRlciIsIm1vZGFsQ29uZmlybSIsIk1vZGFsQnVpbGRlciIsIm5vdGlmeSIsInpfaW5kZXgiLCJFdmVudE9ic2VydmVyIiwic3Vic2NyaWJlcnMiLCJldmVudCIsImhhbmRsZXIiLCJfbG9nIiwiZm9yRWFjaCIsInN0YXRlIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInRvVXBwZXJDYXNlIiwib2JzZXJ2ZXIiLCJTYXZlZEl0ZW1Ob3RGb3VuZCIsIkVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudEJ1dHRvbiIsInRhcmdldCIsInRlbXBsYXRlIiwiaWRQbGFjZWhvbGRlciIsInJvd0lkIiwiZW1iZWRGb3JtIiwiZW1iZWRCbG9ja0lkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJSZWdFeHAiLCJsZW5ndGgiLCJkaXNwYXRjaCIsInRyaWdnZXIiLCJjb250YWluZXIiLCJwYXJlbnRzIiwiaHR0cCIsInJlcGxhY2VXaXRoIiwic2VuZCIsImRhdGFTZXQiLCJwYXJlbnRCdXR0b24iLCJidG5DbGFzcyIsImJ0bk5hbWUiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwiaGFzT3duUHJvcGVydHkiLCJjbG9zZXN0Iiwic2VyaWFsaXplQXJyYXkiLCJwYXJzZUludCIsInJlbG9hZCIsImRpc21pc3MiLCJjdXJyZW50QnRuIiwic2F2ZWRJdGVtIiwiYXR0ciIsImdldEZvcm1EYXRhIiwiQ09OVEFJTkVSX1NFTEVDVE9SIiwiUEFHRV9TQVZFRCIsIlVQREFURV9TQVZFX0FMTF9CVVRUT04iLCJmb3JtSXRlbXMiLCJtYXJrQ2hhbmdlZCIsImRhdGVGb3JtYXQiLCJkYXRlUmFuZ2VJbnB1dHMiLCJzZWxlY3RlZE9wdGlvbiIsImRhdGVGcm9tIiwiZGF0ZVRvIiwic2VsZWN0ZWRWYWx1ZSIsInZhbCIsImNzcyIsInZpc2liaWxpdHkiLCJoZWlnaHQiLCJkYXRlRnJvbVZhbHVlIiwiZGF0ZVRvVmFsdWUiLCJtb21lbnQiLCJzdWJ0cmFjdCIsImRheSIsInN0YXJ0T2YiLCJlbmRPZiIsImRvY3VtZW50Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiZWFjaCIsInJlbW92ZUF0dHIiLCJyZWFkeSIsInRhYmxlc29ydGVyIiwic3RpY2t5VGFibGVIZWFkZXJzIiwibW9kYWxEYXRhIiwiY29uZmlybU1vZGFsIiwic3VibWl0Rm9ybSIsImFqYXhQYWdpbmF0aW9uIiwiYWRkRW1iZWQiLCJyZW1vdmVFbWJlZCIsImZhc3RTYXZlIiwicGFnZUxpbWl0IiwiZGF0ZVJhbmdlIiwiZmlsdGVyRGF0ZVJhbmdlIiwiY2hhbmdlIiwiaW5pdFN0aWNreSIsImZhc3RTYXZlUGFnZSIsImFmdGVyQnVpbGQiLCJvbkNsb3NlIiwiY2xvc2VFdmVudCIsIlVSTCIsIndpbmRvdyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmVudCIsImlkIiwiY2FuUmVsb2FkIiwiYnV0dG9uIiwiZGF0YVJlbG9hZCIsInJvb3RGb2xkZXIiLCJmaWxlTmFtZSIsImdldFN1YkZvbGRlciIsImZvcm0iLCJmb3JtRGF0YSIsImN1cnJlbnRJdGVtIiwicHJvcCIsImZpbGVOYW1lSGFzaCIsIm1kNSIsInN1YnN0cmluZyIsInBhdGhQYXJ0cyIsIm1hdGNoIiwialF1ZXJ5IiwiU0VOVFJZX0RTTiIsIlJhdmVuIiwieGhyIiwiZG9tIiwic2VudHJ5IiwiaW5zdGFsbCIsInBhdGgiLCJwYXRobmFtZSIsInNwbGl0IiwibW9kdWxlcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJtb2R1bGVJdGVtcyIsInN1Yk1vZHVsZXMiLCJzdWJzY3JpYmUiLCJBV0FSRF9DUkVBVEUiLCJzZWxmIiwidW5zdWJzY3JpYmUiLCJlZGl0QnRuIiwidGVtcGxhdGVJZCIsInRlbXBsYXRlUGxhY2Vob2xkZXIiLCJhd2FyZF9pZCIsImZpZWxkTmFtZSIsIkFXQVJEX0NSRUFURUQiLCJBV0FSRF9ERUxFVEUiLCJjcmVhdGVCdG4iLCJjaGlsZHJlbiIsIkVWRU5UX05BTUUiLCJkcm9wem9uZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByZXZpZXdVUkwiLCJkcm9wem9uZUJ1aWxkZXIiLCJEcm9wem9uZUJ1aWxkZXIiLCJzZXRVcGxvYWRVcmwiLCJjYW5jZWwiLCJmaWxlX25hbWUiLCJ2YWx1ZSIsInNldFByZXZpZXciLCJnZXRGaWxlUGF0aCIsImZvbGRlciIsImJ1aWxkIiwic2F2ZUFsbEJ1dHRvbiIsImNvdW50ZXIiLCJjb3VudCIsInNob3ciLCJoaWRlIiwiQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQiLCJERUxUQV9USU1FX0FUVFJJQlVURSIsInRvZ2dsZUNsYXNzIiwiY3VycmVudEVsZW1lbnQiLCJSZXF1ZXN0QnVpbGRlciIsImluZGV4IiwiXyIsIml0ZW0iLCJ1cGRhdGVJbmRleGVzIiwiY3VycmVudExpIiwiZGVsdGFUaW1lSGlkZGVuIiwiZGVsdGFUaW1lRGlzcGxheSIsInRpbWVUeXBlIiwiY29sbGFwc2VTdGF0ZSIsImNvbGxhcHNlU3RhdGVzIiwicmVtb3ZlQWN0aW9uVHlwZVN0YXRlIiwic2F2ZVN0YXRlIiwicmVzcCIsIkFOTk9VTkNFTUVOVFNfU0hPV19GT1JNIiwiYXdhcmRDcmVhdGUiLCJiaW5kIiwiX3RoaXMiLCJhd2FyZERlbGV0ZSIsIkNMT1NFX0FXQVJEX01PREFMIiwic2hvd0Zvcm0iLCJuZXh0Iiwic2V0U3VidHlwZXMiLCJzdWJ0eXBlIiwiYXNzZXRGb3JtU3VidHlwZSIsImFzc2V0Rm9ybUFjdGlvblR5cGUiLCJhc3NldEZvcm1Db2xsZWN0aW9uIiwicHJpY2VzIiwiZW1wdHkiLCJzZWxlY3QyIiwiU1VCX1RZUEVTIiwiZWxlbWVudCIsImNvcHlBc3NldHMiLCJhc3NldElkc0ZpZWxkIiwid2l0aE5hbWUiLCJhc3NldElkcyIsIm4iLCJhc3NldElkIiwiYXNzZXROYW1lIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJkb3dubG9hZEFzc2V0cyIsImNvbGxlY3Rpb25faWQiLCJwYXJlbnRDb250YWluZXIiLCJjaGFuZ2VUeXBlIiwiZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIiLCJjdXJyZW50VGQiLCJ1cGRhdGVTYXZlQWxsQnV0dG9uIiwiQkFOTkVSX1NIT1dfRk9STSIsIlRZUEVfU0VMRUNUX0lEIiwic2VsZWN0ZWRJbmRleCIsIm9wdGlvbnMiLCJzZWxlY3RlZEVsZW1lbnQiLCJkcm9wWm9uZUluaXQiLCJjb3B5QWRwIiwiYWRwSWRzRmllbGQiLCJhZHBJZHMiLCJhZHBJZCIsImRvd25sb2FkQWRwIiwiaGlkZUFyY2hpdmUiLCJoaWRlVGFza3MiLCJzZWxlY3RSb3ciLCJjaGVja2JveCIsImlzIiwic2hvd0FyY2hpdmUiLCJhY3Rpb24iLCJzaG93VGFza3MiLCJDQVNIIiwiQ09JTiIsIkFTU0VUIiwic291cmNlVmFsIiwibWF0Y2hlciIsInBhcmFtcyIsImluQXJyYXkiLCJ3cmFwcGVyIiwiZ2V0U2VsZWN0aW9uIiwiQ09MTEVDVElPTl9TSE9XX0ZPUk0iLCJhc3NldFByZXZpZXdUZW1wbGF0ZSIsImFzc2V0cyIsImN1cnJlbnRBc3NldCIsInByZXZpZXdfdXJsIiwiU29ydGFibGUiLCJncm91cCIsInJlbW92ZUNsb25lT25IaWRlIiwib25FbmQiLCJwb3NpdGlvbiIsIm1hcmtJbnB1dEFzQ2hhbmdlZCIsInNvcnRhYmxlSW5pdCIsImhpZGVBZGRpdGlvbmFsUm93cyIsImFkZFJvdyIsImFkZF9jb3VudGVyIiwidGJvZHkiLCJ0ckxhc3QiLCJsYXN0SUQiLCJsYXN0IiwiaW5jcmVtZW50SWQiLCJpIiwiZGVsZXRlUm93Iiwicm93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiYWRkTmV3Um93IiwibGFzdElEUyIsImZpcnN0IiwiTWF0aCIsIm1heCIsImFwcGx5Iiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsImRlcGxveVN0YXR1cyIsIkRFUExPWV9TVEFUVVNfUk9VVEUiLCJpc0FjdGl2ZSIsInNldFRpbWVvdXQiLCJjaGFuZ2VUYWIiLCJkaXJlY3Rpb24iLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic2hvd0RlcGVuZGVuY3kiLCJjdXJyZW50Q29uZmlnIiwiYWRkTW9kZSIsIm9uZUxldmVsU2hvdyIsImNvbmZpZ05hbWUiLCJsZXZlbCIsIkRFUExPWV9ERVBFTkRTIiwiY29uZmlnQmxvY2siLCJkZXBlbmRDb25maWdOYW1lIiwic2hvd0RlcGVuZGVuY3lQb3B1cCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRDb25maWdJZCIsImlkcyIsInJvb3RMZXZlbFNob3ciLCJpZFJlc3BvbnNlIiwidGV4dENsYXNzIiwiaXNSZWN1cnNpb24iLCJnZXREZXBsb3lNb2RlbElkcyIsIkRFUExPWV9NT0RFTF9JRFNfUk9VVEUiLCJBQ1RJVkVfRElSRUNUSU9OIiwiY2hlY2tlZCIsInNhdmVEcGFTdGF0ZSIsImxhc3RSb3ciLCJjb2xvcnBpY2tlciIsImNoYW5nZVJvd0luZGV4Iiwicm93SW5kZXgiLCJvbGROYW1lIiwibmV3TmFtZSIsImluZGV4T2YiLCJEWUVfQ09OVEFJTkVSX1NFTEVDVE9SIiwibWFya0NoYW5nZWRUciIsImR5ZVNhdmVQYWdlIiwiR0lGVF9XUkFQX1JPV19BRERFRCIsImN1cnJlbnRJbnB1dCIsImFzc2V0SUQiLCJjdXJyZW50QXNzZXREdXBsaWNhdGUiLCJlcnIiLCJwb3NpdGlvblVwZGF0ZSIsImJ1dHRvblVybCIsInBhZ2UiLCJwYWdlX2xpbWl0IiwiYXNzZXRDaGFuZ2VkIiwicmVtb3ZlUm93Iiwic2hvd0Fzc2V0IiwiU1dPV19BU1NFVF9ST1VURSIsInByZXBlbmQiLCJzYXZlTG9jYWxpemF0aW9uU3RhdGUiLCJjdXJyZW50S2V5IiwiY3VycmVudEtleUR1cGxpY2F0ZSIsInNhdmVNYWdpY1N0YXRlIiwibWFrZXVwX2tpdF9pZCIsImdldExhc3RNYWtldXBLaXRJRCIsIk1BS0VVUF9LSVRfU0hPV19GT1JNIiwiaW5ncmVkaWVudERlbGV0ZSIsIm1lYWxEZWxldGUiLCJzYXZlTWVhbFN0YXRlIiwiTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNIiwiVFJBU0giLCJUUkFTSF9GSUVMRFNfSUQiLCJTRUxFQ1RfSUQiLCJ0cmFzaEZpZWxkcyIsIlBST0RVQ1RfU0hPV19GT1JNIiwiQ2xlYXZlIiwibnVtZXJhbCIsInByZWZpeCIsInJhd1ZhbHVlVHJpbVByZWZpeCIsIm9uVmFsdWVDaGFuZ2VkIiwicm91bmQiLCJyYXdWYWx1ZSIsInByb2R1Y3RQcmljZSIsInByaWNlSW5pdCIsIm1heElkIiwibmV3TGVuZ3RoIiwidHJJZCIsIm5ld1JvdyIsIm5ld1Jvd0h0bWwiLCJkZWZhdWx0VmFsdWUiLCJnZXQiLCJvdXRlckhUTUwiLCJhZnRlciIsInByZXZpZXdIaWRkZW5JbnB1dCIsInNhdmVQYWdlIiwic2F2ZVJvdyIsInJvd1RvU2F2ZSIsInIiLCJjb25maXJtIiwiZGF0YVR5cGUiLCJqcVhIUiIsImV4Y2VwdGlvbiIsImVycm9yS2V5IiwibWVzc2FnZUtleSIsImF1dG9EaXNjb3ZlciIsImRyb3B6b25lSW5pdCIsInNhdmVCdXR0b24iLCJXQUxLX0NBVEVHT1JZIiwiUlVOX0NBVEVHT1JZIiwic2VsZWN0VmFsIiwiZW1iZWQiLCJTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNIiwidGFibGUiLCJkZXBhcnRtZW50SWQiLCJzaG9wTmFtZVByZWZpeCIsImRlcGFydG1lbnROYW1lUHJlZml4IiwiZmFzdFNhdmVDb250YWluZXIiLCJzaG9wcyIsImRlcGFydG1lbnQiLCJkZXBpbmRleCIsImRlcGFydG1lbnRGb3JtRGF0YSIsIml0ZW1OYW1lIiwiYWxsSXRlbXMiLCJyYWRpbyIsInByZXZpZXdVcmxFbGVtZW50IiwicmFkaW9JbnB1dCIsImFkZFNob3AiLCJzb3J0YWJsZURlcGFydG1lbnRJbml0Iiwic2F2ZVNvdW5kU3RhdGUiLCJUQU1BVE9PTF9TSE9XX0ZPUk0iLCJTRUFSQ0hfVVNFUl9BU1NFVFMiLCJTVUJNSVRfVVNFUl9QQVJUX0ZPUk0iLCJERUxFVEVfTkVJR0hCT1IiLCJBRERfTkVJR0hCT1IiLCJHRVRfTkVJR0hCT1JTIiwiVVBEQVRFX05FSUdIQk9SUyIsIk5FSUdIQk9SX0dSSURfSUQiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIm1vZGVsIiwiY3JlYXRlZF9ieSIsImNyZWF0ZWRfYXQiLCJzZWxlY3RlZFN0b3JhZ2UiLCJwbGFjZW1lbnROYW1lIiwibmVpZ2hib3JzQ291bnQiLCJzaWJsaW5ncyIsInBsYWNlbWVudCIsImxvYWRQYXJ0IiwiUExBQ0VNRU5UX0FTU0VUU19ST1VURSIsIml0ZW1zIiwicG9wb3ZlciIsImNvdW50U2VsZWN0b3IiLCJyb3dzRm9yU2VsZWN0IiwiY291bnRGb3JTZWxlY3QiLCJuZWlnaGJvcl9pZCIsInN0YXR1c190ZXh0Iiwic2VhcmNoVXNlckFzc2V0cyIsInN1Ym1pdFVzZXJQYXJ0Rm9ybSIsImRlbGV0ZU5laWdoYm9yIiwiYWRkTmVpZ2hib3IiLCJzZWFyY2hOZWlnaGJvciIsImxvYWRQbGFjZW1lbnRBc3NldHMiLCJjaGFuZ2VQbGFjZW1lbnQiLCJjaGFuZ2VSYW5kb21OZWlnaGJvcnMiLCJoaWRlUGxhY2VtZW50QXNzZXRzIiwic2VsZWN0Um93cyIsImNoYW5nZU1vdmVQbGFjZW1lbnQiLCJ1cGRhdGVOZWlnaGJvcnMiLCJjaGFuZ2VQYWdlTGltaXQiLCJhZGRDb21tZW50IiwiYWRkQ29sbGVjdGlibGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QWlCSTs7O0FBakJKLENBb0JLbmdCLEVBcEJMLENBb0JRLE9BcEJSLEVBb0JpQixjQXBCakIsRUFvQmlDb2dCLHFFQXBCakM7QUFzQkk7OztBQXRCSixDQXlCS3BnQixFQXpCTCxDQXlCUSxRQXpCUixFQXlCa0IsY0F6QmxCLEVBeUJrQ3FnQiw2REF6QmxDO0FBMkJJOzs7QUEzQkosQ0E4QktyZ0IsRUE5QkwsQ0E4QlEsUUE5QlIsRUE4QmtCLHdCQTlCbEIsRUE4QjRDc2dCLHFFQTlCNUM7QUFnQ0k7OztBQWhDSixDQW1DS3RnQixFQW5DTCxDQW1DUSxPQW5DUixFQW1DaUIsMENBbkNqQixFQW1DNkR1Z0Isa0VBbkM3RDtBQW9DSTs7O0FBcENKLENBdUNNdmdCLEVBdkNOLENBdUNTLFFBdkNULEVBdUNtQixzQkF2Q25CLEVBdUMyQ3dnQixrRUF2QzNDO0FBeUNJOzs7QUF6Q0osQ0E0Q0t4Z0IsRUE1Q0wsQ0E0Q1EsT0E1Q1IsRUE0Q2lCLGNBNUNqQixFQTRDaUN5Z0IsNkRBNUNqQztBQThDSTs7O0FBOUNKLENBaURLemdCLEVBakRMLENBaURRLE9BakRSLEVBaURpQixrQkFqRGpCLEVBaURxQzBnQixpRUFqRHJDLEU7Ozs7Ozs7Ozs7OztBQzNDQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qKlxuICogQmFzZSBzaXplc1xuICpcbiAqIEB0eXBlIHt7c206IHN0cmluZywgbGc6IHN0cmluZ319XG4gKi9cbmV4cG9ydCBjb25zdCBTSVpFUyA9IHtcbiAgICBzbTogJ3NtJyxcbiAgICBtZDogJ21kJyxcbiAgICBsZzogJ2xnJyxcbn07XG4iLCJpbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuXG4vKipcbiAqIExvYWRpbmcgdGV4dFxuICogSXQgd2lsbCBiZSBzaG93biBhZnRlciB0aGUgc3RhcnQgb2YgaW1hZ2UgdXBsb2FkaW5nXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgTE9BRElOR19URVhUID0gJ0xvYWRpbmcuLi4nO1xuXG4vKipcbiAqIERyb3B6b25lIGJ1aWxkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkcm9wem9uZUNvbnRhaW5lclxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihkcm9wem9uZUNvbnRhaW5lciwgY29uZmlnID0ge30pIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9kcm9wem9uZUNvbnRhaW5lciA9IGRyb3B6b25lQ29udGFpbmVyO1xuICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24gPSAkKGRyb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHJvcHpvbmUtY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHVybCB0byB1cGxvYWRpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBzZXRVcGxvYWRVcmwodXJsKSB7XG4gICAgICAgIHRoaXMuX3VwbG9hZFVybCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGRlZmF1bHQgcHJldmlldyBpbWFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgc2V0UHJldmlldyhuYW1lLCB1cmwpIHtcbiAgICAgICAgdGhpcy5fcHJldmlldyA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGVycm9yIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGVycm9yKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2Vycm9yQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbmNlbCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBjYW5jZWwoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fY2FuY2VsQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHN1Y2Nlc3MgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgc3VjY2VzcyhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9zdWNjZXNzQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgZHJvcHpvbmVcbiAgICAgKiBAcmV0dXJucyB7RHJvcHpvbmV9XG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBfZHJvcHpvbmVCdWlsZGVyID0gdGhpcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbCBhZnRlciBmYWlsXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkcm9wem9uZUZhaWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnZHotc3RhcnRlZCcpO1xuICAgICAgICAgICAgJChfZHJvcHpvbmVCdWlsZGVyLl9kcm9wem9uZUNvbnRhaW5lcikuZmluZCgnLmR6LXByZXZpZXcnKS5yZW1vdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgdXJsOiB0aGlzLl91cGxvYWRVcmwsXG4gICAgICAgICAgICB0aHVtYm5haWxXaWR0aDogbnVsbCxcbiAgICAgICAgICAgIHRodW1ibmFpbEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgIHVwbG9hZE11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6ICdpbWFnZS8qJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC1jc3JmLXRva2VuJzogQ1NSRl9UT0tFTlxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogU2V0IGN1cnJlbnQgaW1hZ2UgaW4gdGhlIGRyb3B6b25lIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcgJiYgISFfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LnVybCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJhZGRlZGZpbGVcIiwgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInRodW1ibmFpbFwiLCBfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LCBfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LnVybCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQWRkZWQgZmlsZSBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcImFkZGVkZmlsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChMT0FESU5HX1RFWFQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJlcnJvclwiLCBmdW5jdGlvbiAoZmlsZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcHpvbmVGYWlsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX2Vycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX2Vycm9yQ2FsbGJhY2soZmlsZSwgcmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFN1Y2Nlc3MgaGFuZGxlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzdWNjZXNzXCIsIGZ1bmN0aW9uIChmaWxlLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9zdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX3N1Y2Nlc3NDYWxsYmFjayhmaWxlLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhciBidXR0b24gaGFuZGxlclxuICAgICAgICAgKiBDbGVhciBmaWxlIGluZm8gaW4gZHJvcHpvbmVcbiAgICAgICAgICovXG4gICAgICAgIGlmICghIXRoaXMuX2NhbmNlbEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsQnV0dG9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkcm9wem9uZUZhaWwoKTtcbiAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9jYW5jZWxDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9jYW5jZWxDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gbmV3IERyb3B6b25lKHRoaXMuX2Ryb3B6b25lQ29udGFpbmVyLCB7Li4uY29uZmlnLCAuLi50aGlzLl9jb25maWd9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4vZXJyb3JIYW5kbGVyJztcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiLi9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIEhUVFAgUmVxdWVzdCBCdWlsZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICAgIGNvbnN0cnVjdG9yKHVybCkge1xuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuX21ldGhvZCA9ICdnZXQnO1xuICAgICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3JIYW5kbGVyO1xuICAgICAgICB0aGlzLl9zdWNjZXNzID0gc3VjY2Vzc0hhbmRsZXI7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuXG4gICAgbWV0aG9kKG1ldGhvZCkge1xuICAgICAgICB0aGlzLl9tZXRob2QgPSBtZXRob2Q7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVycm9yKGZuKSB7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3VjY2Vzcyhmbikge1xuICAgICAgICB0aGlzLl9zdWNjZXNzID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29tcGxldGUoZm4pIHtcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZW5kKCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB0aGlzLl91cmwsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLl9tZXRob2QsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLl9kYXRhLFxuICAgICAgICAgICAgZXJyb3I6IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFyZXNwb25zZS5yZXNwb25zZUpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IocmVzcG9uc2UucmVzcG9uc2VKU09OKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogdGhpcy5fc3VjY2VzcyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiB0aGlzLl9jb21wbGV0ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBCYXNlIGVycm9yIGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byB0aGUgcm91dGVcbiAgICAgKi9cbiAgICBpZiAoISFyZXNwb25zZS5yb3V0ZSkge1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gcmVzcG9uc2Uucm91dGU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IG1haW4gZXJyb3IgbWVzc2FnZVxuICAgICAqL1xuICAgIGlmICghIXJlc3BvbnNlLm1lc3NhZ2UpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBhbGwgbWVzc2FnZXNcbiAgICAgKi9cbiAgICBpZighIXJlc3BvbnNlLmVycm9ycykge1xuICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZS5lcnJvcnMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZS5lcnJvcnNba2V5XS5tYXAoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGlmeUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9SZXF1ZXN0QnVpbGRlcic7XG4iLCJpbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuXG4vKipcbiAqIEJhc2UgZXJyb3IgaGFuZGxlclxuICpcbiAqIEBwYXJhbSByZXNwb25zZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAvKipcbiAgICAgKiBTaG93IG1haW4gZXJyb3IgbWVzc2FnZVxuICAgICAqL1xuICAgIGlmICghIXJlc3BvbnNlLm1lc3NhZ2UpIHtcbiAgICAgICAgbm90aWZ5U3VjY2VzcyhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vbW9kYWwnO1xuaW1wb3J0ICcuL29ic2VydmVyJztcbmltcG9ydCAnLi9odHRwJztcbiIsImNvbnN0IG1vZGFsc0NvbnRhaW5lciA9ICQoJ2JvZHknKTtcblxuY29uc3QgTU9EQUxfU0laRVMgPSB7XG4gICAgc206ICdtb2RhbC1zbScsXG4gICAgbWQ6ICdtb2RhbC1tZCcsXG4gICAgbGc6ICdtb2RhbC1sZycsXG59O1xuXG4vKipcbiAqIFVuaXF1ZSBpbmRleCBvZiB0aGUgbW9kYWxcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5sZXQgbW9kYWxJbmRleCA9IDA7XG5cbi8qKlxuICogQ291bnRlciBvZiB0aGUgbW9kYWxzIGF0IHRoZSBwYWdlXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqL1xubGV0IG1vZGFsQ291bnRlciA9IDA7XG5cbi8qKlxuICogTW9kYWwgQnVpbGRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbW9kYWxJbmRleCsrO1xuICAgICAgICB0aGlzLl9pZCA9ICdtb2RhbHMtY29udGFpbmVyLWl0ZW0tJyArIG1vZGFsSW5kZXg7XG4gICAgfVxuXG4gICAgc2l6ZShzaXplKSB7XG4gICAgICAgIGlmICghIU1PREFMX1NJWkVTW3NpemVdKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gTU9EQUxfU0laRVNbc2l6ZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoZWFkZXIoaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuX2hlYWRlciA9IGhlYWRlcjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBib2R5KGJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keSA9IGJvZHk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZm9vdGVyKGZvb3Rlcikge1xuICAgICAgICB0aGlzLl9mb290ZXIgPSBmb290ZXI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGF0YXNldChkYXRhc2V0KSB7XG4gICAgICAgIHRoaXMuX2RhdGFzZXQgPSBkYXRhc2V0O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9nZXRJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIF9nZXRTaXplKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9zaXplID8gdGhpcy5fc2l6ZSA6IE1PREFMX1NJWkVTLm1kO1xuICAgIH1cblxuICAgIF9nZXRIZWFkZXIoKSB7XG4gICAgICAgIGlmICghIXRoaXMuX2hlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JHt0aGlzLl9oZWFkZXJ9PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBfZ2V0Rm9vdGVyKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKCEhdGhpcy5fZm9vdGVyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAkKGA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+PC9kaXY+YClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCQoYFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIGApKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZm9vdGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9nZXRCb2R5KCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKCEhdGhpcy5fYm9keSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gJChgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj48L2Rpdj5gKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fYm9keSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGwgYmVmb3JlIGJ1aWxkIG1vZGFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBiZWZvcmVCdWlsZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9iZWZvcmVCdWlsZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBhZnRlciBidWlsZCBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgYWZ0ZXJCdWlsZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2FmdGVyQnVpbGQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGFmdGVyIGNsb3NlIG1vZGFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBvbkNsb3NlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfb25DbG9zZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vbkNsb3NlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2RhbChjb250ZW50KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGRhdGFzZXQgPSBbXTtcbiAgICAgICAgaWYgKCEhdGhpcy5fZGF0YXNldCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLl9kYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgZGF0YXNldC5wdXNoKGBkYXRhLSR7bmFtZX09XCIke3RoaXMuX2RhdGFzZXRbbmFtZV19XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBodG1sID0gJChgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHsgdGhpcy5fZ2V0SUQoKSB9XCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAke2RhdGFzZXQuam9pbignICcpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCAke3RoaXMuX2dldFNpemUoKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmApO1xuXG4gICAgICAgIGlmICghIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keShjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIHRoZSBiZWZvcmVCdWlsZCBjYWxsYmFja1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGQoKTtcblxuICAgICAgICBodG1sLmZpbmQoJy5tb2RhbC1jb250ZW50JylcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0SGVhZGVyKCkpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEJvZHkoKSlcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0Rm9vdGVyKCkpO1xuXG4gICAgICAgIGh0bWwuZmluZCgnLmRhdGVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgdGhlIGFmdGVyQnVpbGQgY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2FmdGVyQnVpbGQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdXBkYXRlIGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXG4gICAgICAgICAqL1xuICAgICAgICBtb2RhbENvdW50ZXIrKztcblxuICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbENvdW50ZXItLTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ2hpZGRlbi5icy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBDYWxsIHRoZSBvbkNsb3NlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5fb25DbG9zZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tb2RhbCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgY291bnRlciBvZiBtb2RhbHMgYXQgdGhlIHBhZ2VcbiAqXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kYWxDb3VudGVyKCkge1xuICAgIHJldHVybiBtb2RhbENvdW50ZXI7XG59XG4iLCJpbXBvcnQgJy4vTW9kYWxCdWlsZGVyJ1xuaW1wb3J0ICcuL21vZGFsQ29uZmlybSdcbiIsImltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5cbi8qKlxuICogTW9kYWwgY29uZmlybVxuICpcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vZGFsQ29uZmlybShtZXNzYWdlLCBjYWxsYmFjaykge1xuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcihtZXNzYWdlKVxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1zdWNjZXNzJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0NvbmZpcm0nLFxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgICAnY2xpY2snOiBjYWxsYmFja1xuICAgICAgICB9KSlcbiAgICAgICAgLm1vZGFsKCk7XG59XG4iLCIvKipcbiAqIE5vdGlmeSBoZWxwZXJcbiAqXG4gKiBAcGFyYW0gbWVzc2FnZVxuICogQHBhcmFtIHR5cGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm90aWZ5KG1lc3NhZ2UsIHR5cGUpIHtcbiAgICAkLm5vdGlmeSh7bWVzc2FnZTogbWVzc2FnZX0se1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB6X2luZGV4OiAxMDUxXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgbm90aWZ5IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBub3RpZnkobWVzc2FnZSwgJ2RhbmdlcicpO1xufVxuIiwiaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgbm90aWZ5KG1lc3NhZ2UsICdzdWNjZXNzJyk7XG59XG4iLCIvKipcbiAqIEV2ZW50IG9ic2VydmVyXG4gKi9cbmNsYXNzIEV2ZW50T2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fbG9nKCdzdWJzY3JpYmUnLCBldmVudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLnB1c2goaGFuZGxlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2ggKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX2xvZygnZGlzcGF0Y2gnLCBldmVudCk7XG5cbiAgICAgICAgaWYgKCEhdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihkYXRhLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdW5zdWJzY3JpYmUgKGV2ZW50LCBzdGF0ZSkge1xuICAgICAgICB0aGlzLl9sb2coJ3Vuc3Vic2NyaWJlJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICBpZighIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5maWx0ZXIoaGFuZGxlciA9PiBoYW5kbGVyICE9PSBzdGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIERlbGV0ZSBhbGwgc3Vic2NyaWJlcnNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nKG1ldGhvZCwgZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2cobWV0aG9kLnRvVXBwZXJDYXNlKCksICc6JywgJ1snLCBldmVudCwgJ10nKTtcbiAgICB9XG59XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEV2ZW50T2JzZXJ2ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXI7XG4iLCJpbXBvcnQgJy4vRXZlbnRPYnNlcnZlcic7XG4iLCIvKipcbiAqIFNhdmVkIGl0ZW0gbm90IGZvdW5kXG4gKlxuICogVXNpbmcgaW4gZmFzdFNhdmUgaGFuZGxlclxuICovXG5leHBvcnQgY2xhc3MgU2F2ZWRJdGVtTm90Rm91bmQgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnU2F2ZWRJdGVtTm90Rm91bmQnO1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuXG4vKipcbiAqIEFkZCBlbWJlZCBlbGVtZW50XG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3RhcmdldCcpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0ZW1wbGF0ZScpO1xuICAgIGNvbnN0IGlkUGxhY2Vob2xkZXIgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ2lkcGxhY2Vwb2xkZXInKTtcblxuICAgIGxldCByb3dJZCA9IGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnKTtcbiAgICBjdXJyZW50QnV0dG9uLmRhdGEoJ3Jvd2lkJywgKytyb3dJZCk7XG5cbiAgICBsZXQgZW1iZWRGb3JtID0gJCgnIycrIHRlbXBsYXRlKS5odG1sKCk7XG4gICAgY29uc3QgZW1iZWRCbG9ja0lkID0gcm93SWQgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpLnRvU3RyaW5nKDE2KTtcbiAgICBlbWJlZEZvcm0gPSBlbWJlZEZvcm0ucmVwbGFjZSgvJWVtYmVkQmxvY2tJZCUvZywgZW1iZWRCbG9ja0lkKTtcblxuICAgIGlmICghIWlkUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgZW1iZWRGb3JtID0gZW1iZWRGb3JtLnJlcGxhY2UoIG5ldyBSZWdFeHAoaWRQbGFjZWhvbGRlciwgXCJnXCIpLCByb3dJZClcbiAgICB9XG5cbiAgICAkKCcjJyArIHRhcmdldCkuYXBwZW5kKGVtYmVkRm9ybSk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBkaXNwYXRjaFxuICAgICAqL1xuICAgIGNvbnN0IGV2ZW50ID0gY3VycmVudEJ1dHRvbi5kYXRhKCdldmVudCcpO1xuICAgIGlmIChldmVudCAmJiBldmVudC5sZW5ndGgpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZXZlbnQsIHtcbiAgICAgICAgICAgIGVtYmVkQmxvY2tJZDogZW1iZWRCbG9ja0lkXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24udHJpZ2dlcignYWlfYW5pbWF0aW9uJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICpBamF4IHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQodGhpcykucGFyZW50cygnLmFqYXgtcGFnaW5hdGlvbicpLmRhdGEoJ2NvbnRhaW5lcicpO1xuICAgXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKCcjJyArIGNvbnRhaW5lcikucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBPcGVuIGNvbmZpcm0gbW9kYWwgYmVmb3JlIGFjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmhyZWY7XG4gICAgY29uc3QgcGFyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcihkYXRhU2V0LmhlYWRlcilcbiAgICAgICAgLmZvb3RlcihcbiAgICAgICAgICAgICQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAoZGF0YVNldC5idG5DbGFzcyB8fCAnYnRuLXNtIGJ0bi1zdWNjZXNzJykgKyAnIGJ0bicsXG4gICAgICAgICAgICAgICAgJ3RleHQnOiBkYXRhU2V0LmJ0bk5hbWUgfHwgJ0NvbmZpcm0nLFxuICAgICAgICAgICAgICAgICdjbGljayc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGFTZXQuaGFzT3duUHJvcGVydHkoJ3dpdGhGb3JtJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBwYXJlbnRCdXR0b24uY2xvc2VzdCgnZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXcgaHR0cCh1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1ldGhvZChkYXRhU2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGF0YVNldC5yZWxvYWQpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRhU2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gY3VycmVudEJ0bi5jbG9zZXN0KCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZGF0YVNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZGF0YShnZXRGb3JtRGF0YShzYXZlZEl0ZW0pKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX1NFTEVDVE9SID0gJy5mYXN0LXNhdmUtcGFnZS1jb250YWluZXInO1xuZXhwb3J0IGNvbnN0IFBBR0VfU0FWRUQgPSAnUEFHRV9TQVZFRCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1NBVkVfQUxMX0JVVFRPTiA9ICdVUERBVEVfU0FWRV9BTExfQlVUVE9OJztcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJChDT05UQUlORVJfU0VMRUNUT1IpO1xuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZGF0YVNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIE1hcmsgZm9ybSdzIGVsZW1lbnRzIGFzIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSAnWVlZWS1NTS1ERCc7XG4gICAgY29uc3QgZGF0ZVJhbmdlSW5wdXRzID0gJCgnI2RhdGUtcmFuZ2UtaW5wdXRzJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSAkKCcjZGF0ZS1yYW5nZS1zZWxlY3QnKS5maW5kKCc6c2VsZWN0ZWQnKTtcbiAgICBjb25zdCBkYXRlRnJvbSA9IGRhdGVSYW5nZUlucHV0cy5maW5kKCcuZmlsdGVyLWZyb20nKTtcbiAgICBjb25zdCBkYXRlVG8gPSBkYXRlUmFuZ2VJbnB1dHMuZmluZCgnLmZpbHRlci10bycpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLnZhbCgpO1xuXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgIGRhdGVSYW5nZUlucHV0cy5jc3Moe1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2luaXRpYWwnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZVJhbmdlSW5wdXRzLmNzcyh7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIGhlaWdodDogMFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZGF0ZUZyb21WYWx1ZSA9ICcnO1xuICAgICAgICBsZXQgZGF0ZVRvVmFsdWUgICA9ICcnO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gZGF0ZVRvVmFsdWUgPSBtb21lbnQoKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5ZXN0ZXJkYXknOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBkYXRlVG9WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXknKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXJyZW50LXdlZWsnOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5kYXkoMSkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5kYXkoNykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMtd2Vlayc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLmRheSgtNikuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5kYXkoMCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3VycmVudC1tb250aCc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5lbmRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cy1tb250aCc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsYXN0LXNldmVuJzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuc3VidHJhY3QoNiwgJ2RheScpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGFzdC10aGlydHknOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5zdWJ0cmFjdCgyOSwgJ2RheScpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0ZUZyb20udmFsKGRhdGVGcm9tVmFsdWUpO1xuICAgICAgICBkYXRlVG8udmFsKGRhdGVUb1ZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZmFzdFNhdmUgZnJvbSBcIi4vZmFzdFNhdmVcIjtcbmltcG9ydCBhZGRFbWJlZCBmcm9tIFwiLi9hZGRFbWJlZFwiO1xuaW1wb3J0IHJlbW92ZUVtYmVkIGZyb20gXCIuL3JlbW92ZUVtYmVkXCI7XG5pbXBvcnQgc3VibWl0Rm9ybSBmcm9tIFwiLi9zdWJtaXRGb3JtXCI7XG5pbXBvcnQgYWpheFBhZ2luYXRpb24gZnJvbSBcIi4vYWpheFBhZ2luYXRpb25cIjtcbmltcG9ydCBjb25maXJtTW9kYWwgZnJvbSBcIi4vY29uZmlybU1vZGFsXCI7XG5pbXBvcnQgcGFnZUxpbWl0IGZyb20gXCIuL3BhZ2VMaW1pdFwiO1xuaW1wb3J0IG1vZGFsRGF0YSBmcm9tIFwiLi9tb2RhbERhdGFcIjtcbmltcG9ydCBmaWx0ZXJEYXRlUmFuZ2UgZnJvbSBcImhhbmRsZXJzL2ZpbHRlckRhdGVSYW5nZVwiO1xuaW1wb3J0IGZhc3RTYXZlUGFnZSwge0NPTlRBSU5FUl9TRUxFQ1RPUiwgbWFya0NoYW5nZWR9IGZyb20gXCIuL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IHRhYmxlU29ydGVyIGZyb20gXCJ0YWJsZXNvcnRlclwiO1xuaW1wb3J0IHN0aWNreUhlYWRlcnMgZnJvbSBcInN0aWNreS10YWJsZS1oZWFkZXJzXCI7XG5pbXBvcnQgJ3RhYmxlc29ydGVyL2Rpc3QvY3NzL3RoZW1lLmRlZmF1bHQubWluLmNzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLnNjcm9sbChmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzAwKSB7XG4gICAgICAgICAgICAkKCcudmlzaXQtc3RhdHMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhlaWdodCgwKS5jc3MoJ2Rpc3BsYXknLCAndGFibGUtY29sdW1uLWdyb3VwJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy52aXNpdC1zdGF0cycpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0YWJsZXNvcnRlciA9ICQoJy50YWJsZXNvcnRlcicpO1xuICAgICAgICBpZih0YWJsZXNvcnRlcikge1xuICAgICAgICAgICAgdGFibGVzb3J0ZXIudGFibGVzb3J0ZXIoKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcbiAgICAgICAgICAgIHRhYmxlc29ydGVyLmZpbmQoJ3RoZWFkJykuY3NzKCdiYWNrZ3JvdW5kJywgJyNmZmYnKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gbW9kYWwgd2l0aCBkYXRhIGZyb20gc2VydmVyIGJ5IHJlcXVlc3RcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LW1vZGFsLWFjdGlvbicsIG1vZGFsRGF0YSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gY29uZmlybSBtb2RhbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24nLCBjb25maXJtTW9kYWwpXG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1zdWJtaXQtYWN0aW9uJywgc3VibWl0Rm9ybSlcblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBmb3JtIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LXBhZ2luYXRpb24gYScsIGFqYXhQYWdpbmF0aW9uKVxuXG4gICAgLyoqXG4gICAgICogQWRkIGVtYmVkIGVsZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtZW1iZWQnLCBhZGRFbWJlZClcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbWJlZCBlbGVtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucm0tZW1iZWQnLCByZW1vdmVFbWJlZClcblxuICAgIC8qKlxuICAgICAqIEZhc3Qgc2F2ZSB0aGUgZGF0YSBvZiBhbiBlbnRpdHlcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5mYXN0LXNhdmUnLCBmYXN0U2F2ZSlcblxuICAgIC8qKlxuICAgICAqIFNldCBwYWdlIGxpbWl0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnBhZ2UtbGltaXQnLCBwYWdlTGltaXQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCBgJHtDT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZClcblxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRlUmFuZ2UgPSAkKCcjZGF0ZS1yYW5nZS1zZWxlY3QnKTtcbiAgICAgICAgaWYgKGRhdGVSYW5nZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpbHRlckRhdGVSYW5nZSgpO1xuICAgICAgICAgICAgZGF0ZVJhbmdlLmNoYW5nZShmaWx0ZXJEYXRlUmFuZ2UpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbmZ1bmN0aW9uIGluaXRTdGlja3koKSB7XG4gICAgJCgnLnRhYmxlc29ydGVyJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XG59XG5cbiQoXCIudGFibGUtcmVzcG9uc2l2ZVwiKS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIGluaXRTdGlja3koKTtcbn0pO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBwYWdlXG4gKi9cbiQoJy5mYXN0LXNhdmUtcGFnZScpLmNsaWNrKGZhc3RTYXZlUGFnZSk7XG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBPcGVuIG1vZGFsIHdpdGggZm9ybSBieSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXG4gICAgICAgIC5tZXRob2QodGhpcy5kYXRhc2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNpemUoU0laRVMubGcpXG4gICAgICAgICAgICAgICAgLmRhdGFzZXQoe1xuICAgICAgICAgICAgICAgICAgICByZWxvYWQ6IHRoaXMuZGF0YXNldC5yZWxvYWQgfHwgMSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5oZWFkZXIodGhpcy5kYXRhc2V0LmhlYWRlcilcbiAgICAgICAgICAgICAgICAuYWZ0ZXJCdWlsZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuZGF0YXNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmNsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5jbG9zZUV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tb2RhbChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFNldCBwYWdlIGxpbWl0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBocmVmID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaHJlZi5zZWFyY2hQYXJhbXMuc2V0KCdwYWdlX2xpbWl0JywgJCh0aGlzKS52YWwoKSk7XG4gICAgaHJlZi5zZWFyY2hQYXJhbXMuZGVsZXRlKCdwYWdlJyk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmLnRvU3RyaW5nKCk7XG59XG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuXG4vKipcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSAhIXRoaXMuZGF0YXNldC5wYXJlbnQgPyAkKHRoaXMpLmNsb3Nlc3QodGhpcy5kYXRhc2V0LnBhcmVudCkgOiAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgaWYgKCF0aGlzLmRhdGFzZXQuaWQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKCdBcmUgeW91IHN1cmU/JylcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0RlbGV0ZScsXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcbiAgICAgICAgICAgICdjbGljayc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7Z2V0TW9kYWxDb3VudGVyfSBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogU3VibWl0IGZvcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuXG4gICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgIG5ldyBodHRwKHRoaXMuaHJlZilcbiAgICAgICAgLmRhdGEoY3VycmVudEJ1dHRvbi5jbG9zZXN0KCdmb3JtJykuc2VyaWFsaXplQXJyYXkoKSlcbiAgICAgICAgLm1ldGhvZCh0aGlzLmRhdGFzZXQubWV0aG9kIHx8ICdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoISF0aGlzLmRhdGFzZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaCh0aGlzLmRhdGFzZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhblJlbG9hZCh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5kYXRhc2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2FuIHJlbG9hZCB0aGUgcGFnZVxuICpcbiAqIEBwYXJhbSBidXR0b25cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjYW5SZWxvYWQoYnV0dG9uKSB7XG4gICAgaWYgKHBhcnNlSW50KGJ1dHRvbi5kYXRhc2V0LnJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgaWYgKGdldE1vZGFsQ291bnRlcigpIDwgMikge1xuICAgICAgICAgICAgY29uc3QgZGF0YVJlbG9hZCA9ICQoYnV0dG9uKS5jbG9zZXN0KCcubW9kYWwnKS5kYXRhKCdyZWxvYWQnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVJlbG9hZCA9PT0gdHlwZW9mIHVuZGVmaW5lZCB8fCBkYXRhUmVsb2FkID09PSBmYWxzZSB8fCBwYXJzZUludChkYXRhUmVsb2FkKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGdldFN1YkZvbGRlciBmcm9tIFwiLi9nZXRTdWJGb2xkZXJcIjtcblxuLyoqXG4gKiBHZXQgZmlsZSBwYXRoIGZyb20gc3RvcmFnZSB3aXRoIHN1YiBmb2xkZXJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJvb3RGb2xkZXIgUm9vdCBmb2xkZXIgaW4gdGhlIHN0b3JhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAgIEZpbGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyb290Rm9sZGVyLCBmaWxlTmFtZSkge1xuICAgIHJldHVybiAnL3N0b3JhZ2UvJyArIHJvb3RGb2xkZXIgKyAnLycgKyBnZXRTdWJGb2xkZXIoZmlsZU5hbWUpICsgJy8nICsgZmlsZU5hbWU7XG59XG4iLCIvKipcbiAqIEdldCBmb3JtIGRhdGFcbiAqXG4gKiBAcGFyYW0ge2pRdWVyeX0gZm9ybSBGb3JtIGVsZW1lbnRcbiAqXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xuXG4gICAgbGV0IGZvcm1JdGVtcyA9IGZvcm0uZmluZCgnaW5wdXQsIHNlbGVjdCcpO1xuICAgIGlmICghZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBmb3JtSXRlbXMgPSBmb3JtO1xuICAgIH1cblxuICAgIGZvcm1JdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRJdGVtLmF0dHIoJ3R5cGUnKSkge1xuICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGZvcm1EYXRhW2N1cnJlbnRJdGVtLmF0dHIoJ25hbWUnKV0gPSAhIWN1cnJlbnRJdGVtLnByb3AoIFwiY2hlY2tlZFwiICkgKiAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVtjdXJyZW50SXRlbS5hdHRyKCduYW1lJyldID0gY3VycmVudEl0ZW0udmFsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmb3JtRGF0YTtcbn1cbiIsImltcG9ydCBtZDUgZnJvbSAnYmx1ZWltcC1tZDUnO1xuXG4vKipcbiAqIEdldCBzdWIgZm9sZGVycyBvZiB0aGUgZmlsZVxuICpcbiAqIFJlc3VsdCBvZiB0aGUgZnVuY3Rpb24gbG9va3MgbGlrZTogYTEvYjIvYzNcbiAqIFdoZXJlIG1kNSBvZiB0aGUgZmlsZSA9IGExYjJjMy4uLi4uLi4uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIHRoZSBmaWxlXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZpbGVOYW1lKSB7XG4gICAgY29uc3QgZmlsZU5hbWVIYXNoID0gbWQ1KGZpbGVOYW1lKS5zdWJzdHJpbmcoMCwgNik7XG4gICAgY29uc3QgcGF0aFBhcnRzID0gZmlsZU5hbWVIYXNoLm1hdGNoKC8uezEsMn0vZyk7XG4gICAgcmV0dXJuIHBhdGhQYXJ0cy5qb2luKCcvJyk7XG59XG4iLCIvKipcbiAqIGpRdWVyeVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xud2luZG93LiQgPSAkO1xud2luZG93LmpRdWVyeSA9ICQ7XG5cbi8qKlxuICogQm9vdHN0cmFwXG4gKi9cbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwJztcblxuLyoqXG4gKiBCb290c3RyYXAgQ2NvbG9ycGlja2VyXG4gKi9cbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyJztcbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyL2Rpc3QvY3NzL2Jvb3RzdHJhcC1jb2xvcnBpY2tlci5jc3MnO1xuXG4vKipcbiAqIEZvbnQgQXdlc29tZVxuICovXG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9zY3NzL2ZvbnQtYXdlc29tZS5zY3NzJztcblxuLyoqXG4gKiBFeHRlcm5hbCBtb2R1bGVzXG4gKiBUT0RPOiBnZXQgYnkgbnBtXG4gKi9cbmltcG9ydCAnLi92ZW5kb3IvYW5pbWF0ZSc7XG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1jb25maXJtYXRpb24nO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtbm90aWZ5JztcbmltcG9ydCAnLi92ZW5kb3Ivc2VsZWN0Mic7XG5pbXBvcnQgJy4vdmVuZG9yL2Vra28tbGlnaHRib3gnO1xuaW1wb3J0ICcuL3ZlbmRvci90aGVtZSc7XG5cbi8qKlxuICogQ29tcG9uZW50c1xuICovXG5pbXBvcnQgJy4vY29tcG9uZW50cyc7XG5cbi8qKlxuICogSGFuZGxlcnNcbiAqL1xuaW1wb3J0ICcuL2hhbmRsZXJzJztcblxuLyoqXG4gKiBTdHlsZXNcbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuaW1wb3J0IFJhdmVuIGZyb20gJ3JhdmVuLWpzJztcblxuaWYgKFNFTlRSWV9EU04gJiYgU0VOVFJZX0RTTi5sZW5ndGgpIHtcbiAgICBSYXZlbi5jb25maWcoU0VOVFJZX0RTTiwge1xuICAgICAgICB4aHI6IHRydWUsXG4gICAgICAgIGNvbnNvbGU6IHRydWUsXG4gICAgICAgIGRvbTogdHJ1ZSxcbiAgICAgICAgbG9jYXRpb246IGZhbHNlLFxuICAgICAgICBzZW50cnk6IHRydWVcbiAgICB9KS5pbnN0YWxsKCk7XG59XG5cbi8qKlxuICogTW9kdWxlcyBsb2FkZXJcbiAqL1xuY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5pZiAocGF0aC5sZW5ndGggPiAxKSB7XG4gICAgLyoqXG4gICAgICogVG8gY3JlYXRpbmcgZGlmZmVyZW50IGZpbGVzIGZvciBlYWNoIG1vZHVsZVxuICAgICAqIChEb24ndCBmb3JnZXQgbnBtIGkgLS1zYXZlLWRldiBidW5kbGUtbG9hZGVyKVxuICAgICAqIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJ2J1bmRsZS1sb2FkZXIhbW9kdWxlcycsIHRydWUsIC9pbmRleFxcLmpzJC8pO1xuICAgICAqL1xuICAgIGNvbnN0IG1vZHVsZXMgPSByZXF1aXJlLmNvbnRleHQoJ21vZHVsZXMnLCB0cnVlLCAvXFwuXFwvW1xcdy1fXStcXC9tb2R1bGVcXC5qcyQvKTtcbiAgICBtb2R1bGVzLmtleXMoKS5tYXAobW9kdWxlID0+IHtcbiAgICAgICAgY29uc3QgbW9kdWxlSXRlbXMgPSBtb2R1bGUuc3BsaXQoJy8nKTtcblxuICAgICAgICBpZiAobW9kdWxlSXRlbXNbMV0gPT09IHBhdGhbMV0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNT0RVTEU6JywgcGF0aFsxXSk7XG4gICAgICAgICAgICBtb2R1bGVzKG1vZHVsZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN1Yk1vZHVsZXMgPSByZXF1aXJlLmNvbnRleHQoJ21vZHVsZXMnLCB0cnVlLCAvbW9kdWxlcyguKiltb2R1bGVcXC5qcyQvKTtcbiAgICBzdWJNb2R1bGVzLmtleXMoKS5tYXAobW9kdWxlID0+IHtcbiAgICAgICAgY29uc3QgbW9kdWxlSXRlbXMgPSBtb2R1bGUuc3BsaXQoJy8nKTtcblxuICAgICAgICBpZiAobW9kdWxlSXRlbXNbMV0gPT09IHBhdGhbMV0gJiYgbW9kdWxlSXRlbXNbM10gPT09IHBhdGhbMl0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUIgTU9EVUxFOicsIHBhdGhbMl0pO1xuICAgICAgICAgICAgc3ViTW9kdWxlcyhtb2R1bGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEVEfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgc2VsZik7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKVxuICAgICAgICAgICAgLmh0bWwoKVxuICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAodGhpcy5kYXRhc2V0LnRlbXBsYXRlUGxhY2Vob2xkZXIsIFwiZ1wiKSwgZGF0YS5hd2FyZF9pZClcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCclZmllbGRfbmFtZSUnLCBcImdcIiksIHRoaXMuZGF0YXNldC5maWVsZE5hbWUgfHwgJycpO1xuXG4gICAgICAgIGN1cnJlbnRCdG4ucGFyZW50KCkuYXBwZW5kKGVkaXRCdG4pO1xuICAgICAgICBjdXJyZW50QnRuLnJlbW92ZSgpO1xuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBV0FSRF9DUkVBVEVELCBkYXRhKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIHNlbGYpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ0biA9ICQoJyMnICsgdGhpcy5kYXRhc2V0LnRlbXBsYXRlSWQpLmh0bWwoKVxuICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAoJyVmaWVsZF9uYW1lJScpLCB0aGlzLmRhdGFzZXQuZmllbGROYW1lIHx8ICcnKTtcblxuICAgICAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kKGNyZWF0ZUJ0bik7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XG5pbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXQgYWZ0ZXIgdGhlIG1vZGFsIG9wZW5lZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoRVZFTlRfTkFNRSkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShFVkVOVF9OQU1FLCAoKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBjb250YWluZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRyb3B6b25lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZScpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aWV3IFVSTCBoaWRkZW4gaW5wdXRcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHByZXZpZXdVUkwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRyb3B6b25lQnVpbGRlciA9IG5ldyBEcm9wem9uZUJ1aWxkZXIoZHJvcHpvbmVFbGVtZW50KVxuICAgICAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC51cmwpXG4gICAgICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAkKCcjcHJldmlldy11cmwnKS52YWwoJycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYW5jZWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJyNwcmV2aWV3LXVybCcpLnZhbCgnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLmR6LWZpbGVuYW1lIHNwYW4nKS50ZXh0KHJlc3BvbnNlLmZpbGVfbmFtZSk7XG4gICAgICAgICAgICAgICAgcHJldmlld1VSTC52YWx1ZSA9IHJlc3BvbnNlLmZpbGVfbmFtZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgcHJldmlld1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHByZXZpZXdVUkwudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBkcm9wem9uZUJ1aWxkZXJcbiAgICAgICAgICAgICAgICAuc2V0UHJldmlldyhcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld1VSTC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQuZm9sZGVyLCBwcmV2aWV3VVJMLnZhbHVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgICAgICovXG4gICAgICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xuICAgIH0pO1xufVxuXG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtVUERBVEVfU0FWRV9BTExfQlVUVE9OfSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoVVBEQVRFX1NBVkVfQUxMX0JVVFRPTiwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgY29uc3Qgc2F2ZUFsbEJ1dHRvbiA9ICQoJyN1cGRhdGUtYWxsJyk7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSAkKCcjdXBkYXRlLWFsbCAuY291bnQnKTtcblxuICAgICAgICBsZXQgY291bnQgPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lci5jaGFuZ2VkJykubGVuZ3RoO1xuXG4gICAgICAgIGlmKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgc2F2ZUFsbEJ1dHRvbi5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzYXZlQWxsQnV0dG9uLmhpZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgY291bnRlci5odG1sKGNvdW50KTtcbiAgICB9KTtcbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hY3Rpb24tdHlwZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYWN0aW9uLXR5cGUvbW9kdWxlLmpzXCIsXG5cdFwiLi9hZGQtbWUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2FkZC1tZS9tb2R1bGUuanNcIixcblx0XCIuL2Fubm91bmNlbWVudHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9hc3NldHMtbG9nL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hc3NldHMtbG9nL21vZHVsZS5qc1wiLFxuXHRcIi4vYXNzZXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hc3NldHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9hd2FyZC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXdhcmQvbW9kdWxlLmpzXCIsXG5cdFwiLi9iYW5uZXIvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Jhbm5lci9tb2R1bGUuanNcIixcblx0XCIuL2Ntcy1hZHBzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtYWRwcy9tb2R1bGUuanNcIixcblx0XCIuL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jb2xsZWN0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vY3JvcC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY3JvcC9tb2R1bGUuanNcIixcblx0XCIuL2RhaWx5LWxvb3QvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RhaWx5LWxvb3QvbW9kdWxlLmpzXCIsXG5cdFwiLi9kZWZhdWx0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kZWZhdWx0L21vZHVsZS5qc1wiLFxuXHRcIi4vZGVwbG95L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kZXBsb3kvbW9kdWxlLmpzXCIsXG5cdFwiLi9kcGEvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RwYS9tb2R1bGUuanNcIixcblx0XCIuL2R5ZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZHllL21vZHVsZS5qc1wiLFxuXHRcIi4vZ2lmdC13cmFwL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9naWZ0LXdyYXAvbW9kdWxlLmpzXCIsXG5cdFwiLi9saW5rZWQtYXNzZXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vbG9jYWxpemF0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9sb2NhbGl6YXRpb24vbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWdpYy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qc1wiLFxuXHRcIi4vbWFrZXVwLWtpdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanNcIixcblx0XCIuL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qc1wiLFxuXHRcIi4vbWVhbC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWVhbC9tb2R1bGUuanNcIixcblx0XCIuL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9tb2R1bGUuanNcIixcblx0XCIuL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9uZXdzLWdpZnRzLWxvZy9tb2R1bGUuanNcIixcblx0XCIuL3Byb2R1Y3QvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Byb2R1Y3QvbW9kdWxlLmpzXCIsXG5cdFwiLi9wdXJjaGFzZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvcHVyY2hhc2UvbW9kdWxlLmpzXCIsXG5cdFwiLi9zZXR0aW5ncy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9tb2R1bGUuanNcIixcblx0XCIuL3Nob3AtcmVsZWFzZXMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3AtcmVsZWFzZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLXN0YXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vc291bmQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NvdW5kL21vZHVsZS5qc1wiLFxuXHRcIi4vc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zdWJ0eXBlLWF0dHJpYnV0ZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi90YW1hdG9vbC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdGFtYXRvb2wvbW9kdWxlLmpzXCIsXG5cdFwiLi91c2Vycy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdXNlcnMvbW9kdWxlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbW9kdWxlcyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLlxcXFwvW1xcXFx3LV9dK1xcXFwvbW9kdWxlXFxcXC5qcyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL21vZHVsZXMgc3luYyByZWN1cnNpdmUgbW9kdWxlcyguKiltb2R1bGVcXFxcLmpzJFwiOyIsImV4cG9ydCBjb25zdCBBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCA9ICdBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCc7XG5leHBvcnQgY29uc3QgREVMVEFfVElNRV9BVFRSSUJVVEUgPSAxOTtcbiIsIi8qKlxuICogQ29sbGFwc2Ugc3RhdGVcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgnLmFjdGlvbi10eXBlLXN0YXRlJyk7XG4gICAgcGFyZW50LnRvZ2dsZUNsYXNzKCdkb3duJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIENvbGxhcHNlIHN0YXRlc1xuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCgnLmFjdGlvbi10eXBlLXN0YXRlJykudG9nZ2xlQ2xhc3MoJ2Rvd24nKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUR9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgU3RhdGUgb2YgdGhlIEFjdGlvbiBUeXBlXG4gKiBhdCB0aGUgbW9kYWxcbiAqIHdpdGggY29uZmlybVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRFbGVtZW50LmNsb3Nlc3QoJy5hY3Rpb24tdHlwZS1zdGF0ZScpO1xuXG4gICAgaWYgKCFjdXJyZW50RWxlbWVudC5kYXRhKCdpZCcpKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsIHt9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcignQXJlIHlvdSBzdXJlPycpXG4gICAgICAgIC5mb290ZXIoJCgnPGJ1dHRvbi8+Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ2J0biBidG4tc20gYnRuLWRhbmdlcicsXG4gICAgICAgICAgICAndGV4dCc6ICdEZWxldGUnLFxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgICAnY2xpY2snOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3IFJlcXVlc3RCdWlsZGVyKGN1cnJlbnRFbGVtZW50LmRhdGEoJ3VybCcpKVxuICAgICAgICAgICAgICAgICAgICAubWV0aG9kKCdERUxFVEUnKVxuICAgICAgICAgICAgICAgICAgICAuc3VjY2VzcygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwge30pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc2VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSlcbiAgICAgICAgLm1vZGFsKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRH0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogVXBkYXRlIGluZGV4ZXMgb2YgdGhlIHN0YXRlc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCAoKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG5cbiAgICAgICAgJCgnLmluZGV4JykuZWFjaCgoXywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgJChpdGVtKS52YWwoaW5kZXgrKyk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgdXBkYXRlSW5kZXhlcyBmcm9tIFwiLi9saXN0ZW5lcnMvdXBkYXRlSW5kZXhlc1wiO1xuaW1wb3J0IGNvbGxhcHNlU3RhdGUgZnJvbSBcIi4vaGFuZGxlcnMvY29sbGFwc2VTdGF0ZVwiO1xuaW1wb3J0IGNvbGxhcHNlU3RhdGVzIGZyb20gXCIuL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzXCI7XG5pbXBvcnQgcmVtb3ZlQWN0aW9uVHlwZVN0YXRlIGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZUFjdGlvblR5cGVTdGF0ZVwiO1xuaW1wb3J0IHtERUxUQV9USU1FX0FUVFJJQlVURX0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBpbmRleGVzXG4gKi9cbnVwZGF0ZUluZGV4ZXMoKTtcblxuJChkb2N1bWVudClcblxuICAgIC5vbignY2hhbmdlJywgJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGkgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdXCJdJyk7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZURpc3BsYXkgPSBjdXJyZW50TGkuZmluZCgnW25hbWUkPVwiW2F0dHJpYnV0ZXNdWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW3ZhbHVlXVtkaXNwbGF5XVwiXScpO1xuXG4gICAgICAgIGRlbHRhVGltZURpc3BsYXkudmFsKGRlbHRhVGltZUhpZGRlbi5kYXRhKCd2YWx1ZScpIC8gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSkpO1xuICAgIH0pXG5cbiAgICAub24oJ2lucHV0JywgJ1tuYW1lJD1cIlthdHRyaWJ1dGVzXVsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVt2YWx1ZV1bZGlzcGxheV1cIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaSA9ICQodGhpcykuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgY29uc3QgdGltZVR5cGUgPSBjdXJyZW50TGkuZmluZCgnW25hbWUkPVwiW3RpbWVfdHlwZV1cIl0nKS52YWwoKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lSGlkZGVuID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlthdHRyaWJ1dGVzXVsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVt2YWx1ZV1cIl0nKTtcblxuICAgICAgICBkZWx0YVRpbWVIaWRkZW4udmFsKCQodGhpcykudmFsKCkgKiB0aW1lVHlwZSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlIG9uZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvbGxhcHNlLWxpbmsnLCBjb2xsYXBzZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogQ29sbGFwc2UgYWxsIHN0YXRlc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtc3RhdGVzJywgY29sbGFwc2VTdGF0ZXMpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5ybS1hY3Rpb24tdHlwZS1zdGF0ZXMnLCByZW1vdmVBY3Rpb25UeXBlU3RhdGUpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLnNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIikpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ3RyLmNoYW5nZWQnKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zYXZlLXBhZ2UnLCBzYXZlU3RhdGUpO1xuIiwiZXhwb3J0IGNvbnN0IEFOTk9VTkNFTUVOVFNfU0hPV19GT1JNID0gJ0FOTk9VTkNFTUVOVFNfU0hPV19GT1JNJztcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FOTk9VTkNFTUVOVFNfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk0sIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFOTk9VTkNFTUVOVFNfU0hPV19GT1JNLCBzZWxmKTtcblxuICAgICAgICAkKCcuZGF0ZXRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfQ1JFQVRFRCwgQ0xPU0VfQVdBUkRfTU9EQUx9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIGFubm91bmNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQodGhpcykoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFVuc3Vic2NyaWJlIG9uIG1vZGFsIGNsb3NlXG4gICAgICovXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShDTE9TRV9BV0FSRF9NT0RBTCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSk7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEVEKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbi8qKlxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cbiAqIEFmdGVyIGNsaWNrIGF0IGNyZWF0ZSBvciBlZGl0IGJ1dHRvblxuICovXG4kKCcuc2hvdy1mb3JtJylcbiAgICAuY2xpY2soc2hvd0Zvcm0pO1xuIiwiXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLm9uKCdjbGljaycsICcudG9nZ2xlX2lkcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KCkgPiAwKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgnSGlkZScsICdTaG93JykpO1xuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCQodGhpcykudGV4dCgpLnJlcGxhY2UoJ1Nob3cnLCAnSGlkZScpKTtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgpLnJlcGxhY2UoJ1Nob3cnLCAnSGlkZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KCcxMDAlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogU1VCX1RZUEVTIC0gaXQgaXMgYSBnbG9iYWwgb2JqZWN0XG4gKiBJbml0ZWQgaW4gYXNzZXQvZm9ybS5ibGFkZS5waHBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIHNldFN1YnR5cGVzKHRoaXMudmFsdWUsIHRoaXMuZGF0YXNldC5zdWJ0eXBlKTtcbn1cblxuY29uc3QgYXNzZXRGb3JtU3VidHlwZSA9ICQoXCIjc3VidHlwZVwiKTtcbmNvbnN0IGFzc2V0Rm9ybUFjdGlvblR5cGUgPSAkKCcjYXNzZXQtZm9ybS1hY3Rpb24tdHlwZScpO1xuY29uc3QgYXNzZXRGb3JtQ29sbGVjdGlvbiA9ICQoJyNhc3NldC1mb3JtLWNvbGxlY3Rpb24nKTtcbmNvbnN0IHByaWNlcyA9ICQoJy5wcmljZXMnKTtcblxuZnVuY3Rpb24gc2V0U3VidHlwZXModHlwZSwgc3VidHlwZSkge1xuICAgIGFzc2V0Rm9ybVN1YnR5cGVcbiAgICAgICAgLmVtcHR5KClcbiAgICAgICAgLnNlbGVjdDIoe1xuICAgICAgICAgICAgZGF0YTogU1VCX1RZUEVTW3R5cGVdXG4gICAgICAgIH0pXG4gICAgICAgIC52YWwoc3VidHlwZSlcbiAgICAgICAgLmNoYW5nZSgpO1xuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBzdGF0ZVxuICAgICAqL1xuICAgIGhpZGUoYXNzZXRGb3JtQWN0aW9uVHlwZSk7XG4gICAgaGlkZShhc3NldEZvcm1Db2xsZWN0aW9uKTtcbiAgICBzaG93KHByaWNlcyk7XG5cbiAgICBzd2l0Y2ggKHBhcnNlSW50KHR5cGUpKSB7XG5cbiAgICAgICAgLy8gRnVybml0dXJlXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHNob3coYXNzZXRGb3JtQWN0aW9uVHlwZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBDbG90aGVzXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHNob3coYXNzZXRGb3JtQ29sbGVjdGlvbik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBCb2R5IFBhcnRcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgaGlkZShwcmljZXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZENsYXNzKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHNob3coZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbn0iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYXNzZXRzIGlkcyB0byBjbGlwYm9hcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBc3NldHMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGFzc2V0SWRzRmllbGQgPSAkKCd0ZXh0YXJlYVtuYW1lPVwiYXNzZXRfaWRzXCJdJyk7XG4gICAgY29uc3Qgd2l0aE5hbWUgPSAkKCdpbnB1dFtuYW1lPVwid2l0aF9uYW1lXCJdJyk7XG4gICAgbGV0IGFzc2V0SWRzID0gW107XG5cbiAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBjb25zb2xlLmxvZygkKGl0ZW0pKTtcbiAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgIGxldCBhc3NldE5hbWUgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LW5hbWUnKTtcbiAgICAgICAgaWYoYXNzZXRJZCkge1xuICAgICAgICAgICAgaWYod2l0aE5hbWUucHJvcChcImNoZWNrZWRcIikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKCdcXG4nICsgYXNzZXRJZCArICcgJyArIGFzc2V0TmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgaWYgKGFzc2V0SWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gJChpdGVtKS5kYXRhKCdhc3NldC1uYW1lJyk7XG4gICAgICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICAgICAgaWYod2l0aE5hbWUucHJvcChcImNoZWNrZWRcIikgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKCdcXG4nICsgYXNzZXRJZCArICcgJyArIGFzc2V0TmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzc2V0SWRzRmllbGQudmFsKGFzc2V0SWRzKTtcbiAgICBhc3NldElkc0ZpZWxkLnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgZG93bmxvYWQgYXNzZXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEFzc2V0cyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBhc3NldElkcyA9IFtdO1xuXG4gICAgJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJChpdGVtKSk7XG4gICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhc3NldElkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcbiAgICAgICAgICAgIGlmKGFzc2V0SWQpIHtcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICQodGhpcykuZGF0YSgncm91dGUnKSArICcmaWRzPScgKyBhc3NldElkcy5qb2luKCcsJyk7XG59XG4iLCJpbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIG5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmhyZWYpXG4gICAgICAgIC5zdWNjZXNzKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAkKCcjY29sbGVjdGlvbi1udW1iZXInKVxuICAgICAgICAgICAgICAgIC52YWwocmVzdWx0LmNvbGxlY3Rpb25faWQpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHtVUERBVEVfU0FWRV9BTExfQlVUVE9OfSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuLyoqXG4gKiBNYXJrIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkICgpIHtcbiAgICBpZigkKHRoaXMpLmF0dHIoJ3R5cGUnKSAhPSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9ICQodGhpcykucGFyZW50cygndHInKTtcbiAgICAgICAgcGFyZW50Q29udGFpbmVyLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKFVQREFURV9TQVZFX0FMTF9CVVRUT04pO1xuICAgIH1cbn1cbiIsImltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IHVwZGF0ZVNhdmVBbGxCdXR0b24gZnJvbSBcImxpc3RlbmVycy91cGRhdGVTYXZlQWxsQnV0dG9uXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5pbXBvcnQgZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIgZnJvbSBcIi4vaGFuZGxlcnMvZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXJcIjtcbmltcG9ydCB7Y29weUFzc2V0c30gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFzc2V0c1wiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0RFTEVURSwgQVdBUkRfQ1JFQVRFRCwgQ0xPU0VfQVdBUkRfTU9EQUx9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7bWFya0NoYW5nZWR9IGZyb20gXCIuL2hhbmRsZXJzL21hcmtDaGFuZ2VkXCI7XG5pbXBvcnQge2Rvd25sb2FkQXNzZXRzfSBmcm9tIFwiLi9oYW5kbGVycy9kb3dubG9hZEFzc2V0c1wiO1xuaW1wb3J0IHtVUERBVEVfU0FWRV9BTExfQlVUVE9OfSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQge0RFTFRBX1RJTUVfQVRUUklCVVRFfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcblxuJCgnI2Fzc2V0cy10YWJsZScpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlJywgYXdhcmREZWxldGUpO1xuXG4kKCcjYXNzZXQtZm9ybS10eXBlJylcbiAgICAuY2hhbmdlKGNoYW5nZVR5cGUpXG4gICAgLmNoYW5nZSgpO1xuXG4kKCcjZ2V0LWxhc3QtY29sbGVjdGlvbi1udW1iZXInKS5jbGljayhnZXRMYXN0Q29sbGVjdGlvbk51bWJlcik7XG5cblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBDb3B5IGFzc2V0cyBpZHNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFzc2V0cycsIGNvcHlBc3NldHMpXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciBkb3dubG9hZCBhc3NldHNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kb3dubG9hZC1hc3NldHMnLCBkb3dubG9hZEFzc2V0cylcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBhbm5vdW5jZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZChfdGhpcykoKTtcbiAgICB9KVxuXG4gICAgLm9uKCdjaGFuZ2UnLCAnW25hbWUkPVwiW3RpbWVfdHlwZV1cIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZCA9ICQodGhpcykuY2xvc2VzdCgndGQnKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lSGlkZGVuID0gY3VycmVudFRkLmZpbmQoJ1tuYW1lJD1cIlsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVwiXScpO1xuICAgICAgICBjb25zdCBkZWx0YVRpbWVEaXNwbGF5ID0gY3VycmVudFRkLmZpbmQoJ1tuYW1lJD1cIlsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVtkaXNwbGF5XVwiXScpO1xuXG4gICAgICAgIGRlbHRhVGltZURpc3BsYXkudmFsKGRlbHRhVGltZUhpZGRlbi5kYXRhKCd2YWx1ZScpIC8gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSkpO1xuICAgIH0pXG5cbiAgICAub24oJ2lucHV0JywgJ1tuYW1lJD1cIlsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVtkaXNwbGF5XVwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRkID0gJCh0aGlzKS5jbG9zZXN0KCd0ZCcpO1xuICAgICAgICBjb25zdCB0aW1lVHlwZSA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbdGltZV90eXBlXVwiXScpLnZhbCgpO1xuICAgICAgICBjb25zdCBkZWx0YVRpbWVIaWRkZW4gPSBjdXJyZW50VGQuZmluZCgnW25hbWUkPVwiWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddXCJdJyk7XG5cbiAgICAgICAgZGVsdGFUaW1lSGlkZGVuLnZhbCgkKHRoaXMpLnZhbCgpICogdGltZVR5cGUpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcykoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5mYXN0LXNhdmUtY29udGFpbmVyIGlucHV0LCAuZmFzdC1zYXZlLWNvbnRhaW5lciBzZWxlY3QsIC5mYXN0LXNhdmUtY29udGFpbmVyIHRleHRhcmVhJywgbWFya0NoYW5nZWQpXG5cbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxuICAgICAqL1xuICAgIC5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICB1cGRhdGVTYXZlQWxsQnV0dG9uKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKENMT1NFX0FXQVJEX01PREFMLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFKTtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiIsImV4cG9ydCBjb25zdCBBV0FSRF9DUkVBVEUgPSAnQVdBUkRfQ1JFQVRFJztcbmV4cG9ydCBjb25zdCBBV0FSRF9DUkVBVEVEID0gJ0FXQVJEX0NSRUFURUQnO1xuZXhwb3J0IGNvbnN0IEFXQVJEX0RFTEVURSA9ICdBV0FSRF9ERUxFVEUnO1xuZXhwb3J0IGNvbnN0IENMT1NFX0FXQVJEX01PREFMID0gJ0NMT1NFX0FXQVJEX01PREFMJztcbiIsIi8qKlxuICogU2hvdyBmb3JtIGV2ZW50XG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEJBTk5FUl9TSE9XX0ZPUk0gPSAnQkFOTkVSX1NIT1dfRk9STSc7XG5cbi8qKlxuICogSWQgb2YgdHlwZSdzIHNlbGVjdFxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBUWVBFX1NFTEVDVF9JRCA9ICdiYW5uZXItdHlwZSc7XG4iLCJpbXBvcnQge1RZUEVfU0VMRUNUX0lEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQ2hhbmdlIHR5cGUgaGFuZGxlclxuICogSGlkZS9zaG93IHNvbWUgZmllbGRzXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChUWVBFX1NFTEVDVF9JRCk7XG5cbiAgICBpZiAoIXNlbGVjdCB8fCBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3Qub3B0aW9ucy5sZW5ndGggJiYgc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XG5cbiAgICAgICAgJCgnLmJhbm5lci10eXBlJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgJCgnLmJhbm5lci10eXBlLScgKyBzZWxlY3RlZEVsZW1lbnQudmFsdWUpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtCQU5ORVJfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4uL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuXG4vKipcbiAqIFNob3cgZm9ybSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBJbml0XG4gICAgICovXG4gICAgZHJvcFpvbmVJbml0KEJBTk5FUl9TSE9XX0ZPUk0pO1xuXG4gICAgLyoqXG4gICAgICogSW5pdCBzaG93Rm9ybSBsaXN0ZW5lclxuICAgICAqL1xuICAgIHNob3dGb3JtKCk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtCQU5ORVJfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuXG4vKipcbiAqIFNob3cgZm9ybSBsaXN0ZW5lclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEJBTk5FUl9TSE9XX0ZPUk0sICgpID0+IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHlwZSBzZWxlY3QgY2hhbmdlIHRyaWdnZXJcbiAgICAgICAgICovXG4gICAgICAgIGNoYW5nZVR5cGUoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGF0ZXMgaW5pdFxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmJhbm5lci1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2hhbmRsZXJzL3Nob3dGb3JtXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5pbXBvcnQge1RZUEVfU0VMRUNUX0lEfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTaG93IGVkaXQgZm9ybSBvZiBhIGJhbm5lclxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soc2hvd0Zvcm0oKSk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdHlwZSBoYW5kbGVyXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnIycgKyBUWVBFX1NFTEVDVF9JRCwgY2hhbmdlVHlwZSk7XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYWRwIGlkcyB0byBjbGlwYm9hcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBZHAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZHBJZHNGaWVsZCA9ICQoJ2lucHV0W25hbWU9XCJhZHBfaWRzXCJdJyk7XG4gICAgbGV0IGFkcElkcyA9IFtdO1xuXG4gICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBsZXQgYWRwSWQgPSAkKGl0ZW0pLmRhdGEoJ2lkJyk7XG4gICAgICAgIGlmKGFkcElkKSB7XG4gICAgICAgICAgICBhZHBJZHMucHVzaChhZHBJZCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgaWYgKGFkcElkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xuICAgICAgICAgICAgaWYgKGFkcElkKSB7XG4gICAgICAgICAgICAgICAgYWRwSWRzLnB1c2goYWRwSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZHBJZHNGaWVsZC52YWwoYWRwSWRzKTtcbiAgICBhZHBJZHNGaWVsZC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgLy8gYWRwSWRzRmllbGQudmFsKFtdKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY29weSBhc3NldHMgaWRzIHRvIGNsaXBib2FyZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weUFzc2V0cyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYXNzZXRJZHNGaWVsZCA9ICQoJ2lucHV0W25hbWU9XCJhc3NldF9pZHNcIl0nKTtcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcblxuICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgIGlmKGFzc2V0SWQpIHtcbiAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgaWYgKGFzc2V0SWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcbiAgICAgICAgICAgIGlmKGFzc2V0SWQpIHtcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3NldElkc0ZpZWxkLnZhbChhc3NldElkcyk7XG4gICAgYXNzZXRJZHNGaWVsZC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGRvd25sb2FkIGFkcFxuICovXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRBZHAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgYWRwSWRzID0gW107XG4gICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBsZXQgYWRwSWQgPSAkKGl0ZW0pLmRhdGEoJ2lkJyk7XG4gICAgICAgIGlmKGFkcElkKSB7XG4gICAgICAgICAgICBhZHBJZHMucHVzaChhZHBJZCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgaWYgKGFkcElkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBhZHBJZCA9ICQoaXRlbSkuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgIGlmIChhZHBJZCkge1xuICAgICAgICAgICAgICAgIGFkcElkcy5wdXNoKGFkcElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2luZG93LmxvY2F0aW9uID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpICsgJyZpZHM9JyArIGFkcElkcy5qb2luKCcsJyk7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgb2YgYXJjaGl2ZSBjYXRlZ29yaWVzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQXJjaGl2ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnNob3ctYXJjaGl2ZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuYXJjaGl2ZS1jYXRlZ29yaWVzLWxpc3QnKS5odG1sKCcnKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBvZiB0YXNrcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGlkZVRhc2tzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuc2hvdy10YXNrcycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcudGFza3MtbGlzdCcpLmhpZGUoJ3Nsb3cnKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3Igc2VsZWN0IHJvdyBieSBmdWxsIHRkIGFyZWFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFJvdyhlKSB7XG4gICAgaWYgKCEkKGUudGFyZ2V0KS5oYXNDbGFzcygnZm9yLWNvcHknKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gJCh0aGlzKS5maW5kKCcuZm9yLWNvcHknKTtcblxuICAgICAgICBpZihjaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBIYW5kbGVyIG9mIGFyY2hpdmUgY2F0ZWdvcmllcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FyY2hpdmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5oaWRlLWFyY2hpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgXG4gICAgbGV0IGFjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKTtcbiAgICBuZXcgaHR0cChhY3Rpb24pXG4gICAgICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5hcmNoaXZlLWNhdGVnb3JpZXMtbGlzdCcpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgXG59XG4iLCIvKipcbiAqIEhhbmRsZXIgb2YgdGFza3Mgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrcyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmhpZGUtdGFza3MnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnRhc2tzLWxpc3QnKS5zaG93KCdzbG93Jyk7XG59XG4iLCIvL2ltcG9ydCB7YnVuZGxlVmVyc2lvblNlbGVjdH0gZnJvbSBcIi4vaGFuZGxlcnMvYnVuZGxlVmVyc2lvblNlbGVjdFwiO1xuaW1wb3J0IHtzaG93QXJjaGl2ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0FyY2hpdmVcIjtcbmltcG9ydCB7aGlkZUFyY2hpdmV9IGZyb20gXCIuL2hhbmRsZXJzL2hpZGVBcmNoaXZlXCI7XG5pbXBvcnQge2hpZGVUYXNrc30gZnJvbSBcIi4vaGFuZGxlcnMvaGlkZVRhc2tzXCI7XG5pbXBvcnQge3Nob3dUYXNrc30gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd1Rhc2tzXCI7XG5pbXBvcnQge2NvcHlBZHB9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBZHBcIjtcbmltcG9ydCB7Y29weUFzc2V0c30gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFzc2V0c1wiO1xuaW1wb3J0IHtzZWxlY3RSb3d9IGZyb20gXCIuL2hhbmRsZXJzL3NlbGVjdFJvd1wiO1xuaW1wb3J0IHtkb3dubG9hZEFkcH0gZnJvbSBcIi4vaGFuZGxlcnMvZG93bmxvYWRBZHBcIjtcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBTaG93IGFyY2hpdmUgYWRwIGNhdGVnb3JpZXNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zaG93LWFyY2hpdmUnLCBzaG93QXJjaGl2ZSlcbiAgICAvKipcbiAgICAgKiBIaWRlIGFyY2hpdmUgYWRwIGNhdGVnb3JpZXNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5oaWRlLWFyY2hpdmUnLCBoaWRlQXJjaGl2ZSlcbiAgICAvKipcbiAgICAgKiBIaWRlIGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5oaWRlLXRhc2tzJywgaGlkZVRhc2tzKVxuICAgIC8qKlxuICAgICAqIFNob3cgYWRwIHRhc2tzIGJ5IHN0YXR1cyBhbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnNob3ctdGFza3MnLCBzaG93VGFza3MpXG4gICAgLyoqXG4gICAgICogQ29weSBhZHAgaWRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29weS1hZHAnLCBjb3B5QWRwKVxuICAgIC8qKlxuICAgICAqIENvcHkgYXNzZXRzIGlkc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvcHktYXNzZXRzJywgY29weUFzc2V0cylcbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciBkb3dubG9hZCBhc3NldHNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kb3dubG9hZC1hZHAnLCBkb3dubG9hZEFkcClcbiAgICAvKipcbiAgICAgKiBTaG93IGhpZGUgc2lkZSBib3hcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zaG93LWhpZGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KCQoJy5zaWRlLWJveCcpLmNzcygncmlnaHQnKSkgPCAwKSB7XG4gICAgICAgICAgICAkKCcuc2lkZS1ib3gnKS5jc3MoJ3JpZ2h0JywgMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5zaWRlLWJveCcpLmNzcygncmlnaHQnLCAnLTEwMCUnKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvKipcbiAgICAgKiBTZWxlY3Qgcm93IGJ5IGZ1bGwgdGQgYXJlYVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmlkLWNvbCcsIHNlbGVjdFJvdyk7XG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IENBU0ggPSAnY2FzaF9hZGRlZCc7XG5leHBvcnQgY29uc3QgQ09JTiA9ICdjb2luc19hZGRlZCc7XG5leHBvcnQgY29uc3QgQVNTRVQgPSAnYXNzZXRzX2FkZGVkJztcbiIsImltcG9ydCB7Q0FTSH0gZnJvbSBcIm1vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9jb25zdGFudHNcIjtcbmltcG9ydCB7Q09JTn0gZnJvbSBcIm1vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9jb25zdGFudHNcIjtcbmltcG9ydCB7QVNTRVR9IGZyb20gXCJtb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBTZXQgY3Vyc29yIHRvIHBhcmVudCBub2RlXG4gICAgICovXG4gICAgLm9uKCdtb3VzZWVudGVyJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsICdwb2ludGVyJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRmlsdGVyIHNlbGVjdCBvcHRpb25zIGJ5IHNlbGVjdGVkIHNvdXJjZVxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNmaWx0ZXJfc291cmNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzb3VyY2VWYWwgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAkKFwiI2ZpbHRlcl9hY3Rpb25cIikuc2VsZWN0Mih7XG4gICAgICAgICAgICBtYXRjaGVyOiBmdW5jdGlvbiAocGFyYW1zLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZVZhbCAhPT0gJ3VzZXJfZGVidWcnICYmICQuaW5BcnJheShkYXRhLmlkLCBbQ0FTSCwgQ09JTiwgQVNTRVRdKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gZGVwbG95IGluZm9cbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKTtcblxuICAgICAgICBpZiAod3JhcHBlciAmJiB3cmFwcGVyLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnb3BlbicpXG4gICAgICAgIH1cbiAgICB9KTtcbiIsImV4cG9ydCBjb25zdCBDT0xMRUNUSU9OX1NIT1dfRk9STSA9ICdDT0xMRUNUSU9OX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5jb25zdCBhc3NldFByZXZpZXdUZW1wbGF0ZSA9ICQoJyNhc3NldC1wcmV2aWV3LXRlbXBsYXRlJykuaHRtbCgpO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBpZiAoc2F2ZWRJdGVtLmhhc0NsYXNzKCdwcm9ncmVzcycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2F2ZWRJdGVtLmFkZENsYXNzKCdwcm9ncmVzcycpO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGNoYW5nZWQgZGF0YVxuICAgICAqL1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtSXRlbXMpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGZvcm1JdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmhhc0NsYXNzKCdhc3NldC1pZCcpICYmICEhcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QXNzZXQgPSByZXNwb25zZS5hc3NldHNbY3VycmVudEl0ZW0udmFsKCldO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5zbG90JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuYXNzZXQtcHJldmlldycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChhc3NldFByZXZpZXdUZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCcldXJsJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0LnByZXZpZXdfdXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCcldGl0bGUlJywgXCJnXCIpLCBjdXJyZW50QXNzZXQubmFtZSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSBhZGRpdGlvbmFsIHJvd3NcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoJy5hZGRpdGlvbmFsLWRhdGEnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBNYXJrIGlucHV0IGFzIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbmV3IFNvcnRhYmxlKF90aGlzLCB7XG4gICAgICAgIGdyb3VwOiBfdGhpcy5kYXRhc2V0Lmdyb3VwLFxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQoZS50YXJnZXQpLmZpbmQoX3RoaXMuZGF0YXNldC5wb3NpdGlvbikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHBvc2l0aW9uLnZhbCgpKSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udmFsKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7Q09MTEVDVElPTl9TSE9XX0ZPUk19IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlXCI7XG5pbXBvcnQgbWFya0lucHV0QXNDaGFuZ2VkIGZyb20gXCIuL2hhbmRsZXJzL21hcmtJbnB1dEFzQ2hhbmdlZFwiO1xuaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcbmltcG9ydCBoaWRlQWRkaXRpb25hbFJvd3MgZnJvbSBcIi4vaGFuZGxlcnMvaGlkZUFkZGl0aW9uYWxSb3dzXCI7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KENPTExFQ1RJT05fU0hPV19GT1JNKSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGNvbGxlY3Rpb25cbiAqL1xuJCgnLmNvbGxlY3Rpb24tZmFzdC1zYXZlJykuY2xpY2soZmFzdFNhdmUpO1xuXG4vKipcbiAqIE1hcmsgaW5wdXRzIGFzIGNoYW5nZWRcbiAqL1xuJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dCcpLmNoYW5nZShtYXJrSW5wdXRBc0NoYW5nZWQpO1xuXG4vKipcbiAqIFNvcnRhYmxlIGluaXRcbiAqL1xuJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4vKipcbiAqIEhpZGUgYWRkaXRpb25hbCByb3dzXG4gKi9cbiQoJy5oaWRlLXNsb3RzJykuY2xpY2soaGlkZUFkZGl0aW9uYWxSb3dzKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIHJvd3MgdG8gdGhlIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFJvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2Nyb3BzID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjY3JvcF90ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5jcm9wX2lkJykudGV4dCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVjcm9wJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIERlbGV0ZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVJvdygpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZFJvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkUm93XCI7XG5pbXBvcnQge2RlbGV0ZVJvd30gZnJvbSBcIi4vaGFuZGxlcnMvZGVsZXRlUm93XCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURUQsIEFXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1yb3cnLCBhZGRSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGRlbGV0ZVJvdylcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZCh0aGlzKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEVELCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCwgc2VsZik7XG5cbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyb3cuYWRkQ2xhc3MoJ2NoYW5nZWQnKSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZCh0aGlzKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIHNlbGYpO1xuXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocm93LmFkZENsYXNzKCdjaGFuZ2VkJykpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLmZhc3Qtc2F2ZS1wYWdlJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNkYWlseV9sb290ID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjZGFpbHlfbG9vdF90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBsZXQgbGFzdElEUyA9IFtdO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IDE7XG4gICAgdGJvZHkuZmluZChcInRyXCIpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgaWYocGFyc2VJbnQoJChpdGVtKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKCkpKXtcbiAgICAgICAgICAgIGxhc3RJRFMucHVzaChwYXJzZUludCgkKGl0ZW0pLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihsYXN0SURTLmxlbmd0aCl7XG4gICAgICAgIGluY3JlbWVudElkID0gKE1hdGgubWF4LmFwcGx5KE1hdGgsbGFzdElEUykgKyAxKSB8fCAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVyb3dJbmRleCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgICAgIHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbChpICsgaW5jcmVtZW50SWQpO1xuXG4gICAgICAgIHRib2R5LmZpbmQoJy5kYXRlcGlja2VyJylcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuZGFpbHktbG9vdC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ3RyLmNoYW5nZWQnKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJlbW92ZS1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFN3aXRjaCBwYWdlIHR5cGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy50b2dnbGUtcGFnZS10eXBlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMCwgbG9jYXRpb24ucGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSkgKyAkKHRoaXMpLmRhdGEoJ2hyZWYnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcjY29tbW9uLW1lbnUnKS5maW5kKCcuY29tbW9uLW1lbnUtc2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmKCQodGhpcykuZmluZCgnbGknKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY29tbW9uLW1lbnUtc2VjdGlvbicpLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuLyoqXG4gKiBTaG93IERlcGxveSBTdGF0dXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcGxveVN0YXR1cygpIHtcbiAgICBuZXcgaHR0cChERVBMT1lfU1RBVFVTX1JPVVRFKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKCcuZGVwbG95LXN0YXR1cycpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gJCgnLmRlcGxveS1zdGF0dXMnKS5maW5kKCcuYWN0aXZlLWRlcGxveScpLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAkKCcuZGVwbG95LWJ0bicpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoJCgnLmRlcGxveS1idG4nKS5oYXNDbGFzcygnbG9hZGluZycpKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtkZXBsb3lTdGF0dXMoKTt9LCAzMDAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcbn1cbiIsIlxuLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2RpcmVjdGlvbj1cIiArIGRpcmVjdGlvbjtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgIGlkOiAnZGVwbG95J1xuICAgIH0sICdEZXBsb3knLCB1cmwpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBzaG93INCyZXBlbmRlbmN5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93RGVwZW5kZW5jeShlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCcuY29uZmlnLWl0ZW0tYmxvY2snKS5kYXRhKCdtb2RlbCcpO1xuICAgIGxldCBhZGRNb2RlID0gY3VycmVudEVsZW1lbnQuaXMoJzpjaGVja2VkJyk7XG5cbiAgICBvbmVMZXZlbFNob3coY3VycmVudENvbmZpZywgYWRkTW9kZSk7XG59XG5cbmZ1bmN0aW9uIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBhZGRNb2RlLCBsZXZlbCA9IDEpIHtcbiAgICBpZihERVBMT1lfREVQRU5EUy5oYXNPd25Qcm9wZXJ0eShjb25maWdOYW1lKSAmJiBsZXZlbCA8IDEwKSB7XG4gICAgICAgIGxldCBjb25maWdCbG9jayA9ICQoJy5tb2RlbC0nICsgY29uZmlnTmFtZSk7XG4gICAgICAgIGlmKGFkZE1vZGUpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLmFkZENsYXNzKCdkZXBsb3ktY2hhaW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLnJlbW92ZUNsYXNzKCdkZXBsb3ktY2hhaW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXSkge1xuICAgICAgICAgICAgbGV0IGRlcGVuZENvbmZpZ05hbWUgPSBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBjb25maWdCbG9jayA9ICQoJy5tb2RlbC0nICsgZGVwZW5kQ29uZmlnTmFtZSk7XG4gICAgICAgICAgICBpZihhZGRNb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnQmxvY2suYWRkQ2xhc3MoJ2RlcGxveS1jaGFpbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25maWdCbG9jay5yZW1vdmVDbGFzcygnZGVwbG95LWNoYWluJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbmVMZXZlbFNob3coZGVwZW5kQ29uZmlnTmFtZSwgYWRkTW9kZSwgbGV2ZWwgKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciBzaG93IGRlcGVuZGVuY3kgcG9wdXBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dEZXBlbmRlbmN5UG9wdXAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCcuY29uZmlnLWl0ZW0tYmxvY2snKS5kYXRhKCdtb2RlbCcpO1xuICAgIGNvbnN0IGN1cnJlbnRDb25maWdJZCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJy5jb25maWctaXRlbS1ibG9jaycpLmRhdGEoJ2lkJyk7XG4gICAgbGV0IGlkcyA9IFtdO1xuICAgIGlmKGN1cnJlbnRDb25maWdJZCkge1xuICAgICAgICBpZHMucHVzaChjdXJyZW50Q29uZmlnSWQpO1xuICAgIH1cblxuICAgIHJvb3RMZXZlbFNob3coY3VycmVudENvbmZpZywgaWRzKTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogT25lIGxldmVsIHNob3dcbiAqXG4gKiBAcGFyYW0gY29uZmlnTmFtZVxuICogQHBhcmFtIGRlcGVuZENvbmZpZ05hbWVcbiAqIEBwYXJhbSBsZXZlbFxuICogQHBhcmFtIGlkUmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gb25lTGV2ZWxTaG93KGNvbmZpZ05hbWUsIGRlcGVuZENvbmZpZ05hbWUsICBsZXZlbCA9IDEsIGlkUmVzcG9uc2UpIHtcbiAgICBpZihERVBMT1lfREVQRU5EUy5oYXNPd25Qcm9wZXJ0eShjb25maWdOYW1lKSAmJiBsZXZlbCA8IDEwKSB7XG4gICAgICAgIGxldCBpZHMgPSBpZFJlc3BvbnNlLmlkcztcbiAgICAgICAgbGV0IHRleHRDbGFzcyA9ICcnO1xuICAgICAgICBpZihpZFJlc3BvbnNlLmhhc093blByb3BlcnR5KCdub3RJbXBsZW1lbnRlZCcpKSB7XG4gICAgICAgICAgICB0ZXh0Q2xhc3MgPSAndGV4dC1tdXRlZCc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNSZWN1cnNpb24gPSBmYWxzZTtcbiAgICAgICAgJCgnLmNoYWluLScgKyBjb25maWdOYW1lKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZigkKHRoaXMpLnBhcmVudHMoJy5jaGFpbi0nICsgZGVwZW5kQ29uZmlnTmFtZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlzUmVjdXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZChcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjaGFpbi0nICsgZGVwZW5kQ29uZmlnTmFtZSArICdcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cIicgKyB0ZXh0Q2xhc3MgKyAnXCI+JyArIGRlcGVuZENvbmZpZ05hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPihSZWN1cnNpb24pPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2Pjxicj4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZigkKHRoaXMpLmZpbmQoJy5jaGFpbi0nICsgZGVwZW5kQ29uZmlnTmFtZSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZChcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjaGFpbi0nICsgZGVwZW5kQ29uZmlnTmFtZSArICdcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIHRleHRDbGFzcyArICdcIj4nICsgZGVwZW5kQ29uZmlnTmFtZSArICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgICAgIChpZHMubGVuZ3RoID4gMCA/ICc8c3BhbiBjbGFzcz1cImRlcGVuZC1pZHNcIj4gJyArIGlkcy5qb2luKCcsJykgKyAnPC9zcGFuPicgOiAnJykgICtcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1JlY3Vyc2lvbikge1xuICAgICAgICAgICAgZ2V0RGVwbG95TW9kZWxJZHMoZGVwZW5kQ29uZmlnTmFtZSwgbGV2ZWwsIGlkcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBSb290IGxldmVsIHNob3dcbiAqXG4gKiBAcGFyYW0gY29uZmlnTmFtZVxuICogQHBhcmFtIGlkc1xuICovXG5mdW5jdGlvbiByb290TGV2ZWxTaG93KGNvbmZpZ05hbWUsIGlkcyA9IFtdKSB7XG4gICAgbmV3IGh0dHAoREVQTE9ZX01PREVMX0lEU19ST1VURSlcbiAgICAgICAgLm1ldGhvZCgncG9zdCcpXG4gICAgICAgIC5kYXRhKHtcbiAgICAgICAgICAgICdkaXJlY3Rpb24nOiBBQ1RJVkVfRElSRUNUSU9OLFxuICAgICAgICAgICAgJ2RlcGVuZGVudE1vZGVsJzogY29uZmlnTmFtZSxcbiAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbElkcyc6IGlkc1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBsZXQgaWRzID0gcmVzcG9uc2UuaWRzIHx8IFtdO1xuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlcGxveS1jaGFpbi1ibG9ja1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgJCgnLmRlcGxveS1jaGFpbi1ibG9jaycpLmh0bWwoJzxkaXYgY2xhc3M9XCJjaGFpbi0nICsgY29uZmlnTmFtZSArICdcIj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4+JyArIGNvbmZpZ05hbWUgKyAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImRlcGVuZC1pZHNcIj4gJyArIGlkcy5qb2luKCcsJykgKyAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nKTtcblxuICAgICAgICAgICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmhlYWRlcignRGVwbG95IGRlcGVuZGVuY3knKVxuICAgICAgICAgICAgICAgIC5ib2R5KCQoJy5kZXBsb3ktY2hhaW4tYmxvY2snKSlcbiAgICAgICAgICAgICAgICAubW9kYWwoKTtcblxuICAgICAgICAgICAgZ2V0RGVwbG95TW9kZWxJZHMoY29uZmlnTmFtZSwgMSwgaWRzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcbn1cblxuLyoqXG4gKiBHZXQgZGVwbG95IG1vZGVsIGlkc1xuICpcbiAqIEBwYXJhbSBjb25maWdOYW1lXG4gKiBAcGFyYW0gbGV2ZWxcbiAqIEBwYXJhbSBpZHNcbiAqL1xuZnVuY3Rpb24gZ2V0RGVwbG95TW9kZWxJZHMoY29uZmlnTmFtZSwgbGV2ZWwgPSAxLCBpZHMgPSBbXSkge1xuICAgIGZvciAobGV0IGtleSBpbiBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXSkge1xuICAgICAgICBsZXQgZGVwZW5kQ29uZmlnTmFtZSA9IERFUExPWV9ERVBFTkRTW2NvbmZpZ05hbWVdW2tleV07XG5cbiAgICAgICAgaWYoaWRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbmV3IGh0dHAoREVQTE9ZX01PREVMX0lEU19ST1VURSlcbiAgICAgICAgICAgICAgICAubWV0aG9kKCdwb3N0JylcbiAgICAgICAgICAgICAgICAuZGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICdkaXJlY3Rpb24nOiBBQ1RJVkVfRElSRUNUSU9OLFxuICAgICAgICAgICAgICAgICAgICAnbW9kZWwnOiBkZXBlbmRDb25maWdOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnZGVwZW5kZW50TW9kZWwnOiBjb25maWdOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnZGVwZW5kZW50TW9kZWxJZHMnOiBpZHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25lTGV2ZWxTaG93KGNvbmZpZ05hbWUsIGRlcGVuZENvbmZpZ05hbWUsIGxldmVsICsgMSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCBsZXZlbCArIDEsIHsnaWRzJzogW119KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcbmltcG9ydCB7c2hvd0RlcGVuZGVuY3l9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dEZXBlbmRlbmN5XCI7XG5pbXBvcnQge3Nob3dEZXBlbmRlbmN5UG9wdXB9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dEZXBlbmRlbmN5UG9wdXBcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IHtkZXBsb3lTdGF0dXN9IGZyb20gXCIuL2RlcGxveVN0YXR1c1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG4gICAgLyoqXG4gICAgICogU2F2ZSBhbGwgcGFnZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmZhc3Qtc2F2ZS1wYWdlLWN1c3RvbScsIGZhc3RTYXZlUGFnZSlcbiAgICAvKipcbiAgICAgKiBTaG93IGRlcGVuZGVuY3lcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb25maWctY2hlY2tib3gnLCBzaG93RGVwZW5kZW5jeSlcbiAgICAvKipcbiAgICAgKiBTaG93IGRlcGVuZGVuY3kgcG9wdXBcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zaG93LWRlcGVuZGVuY3knLCBzaG93RGVwZW5kZW5jeVBvcHVwKVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2svdW5jaGVjayBhd2FyZCBkZXBlbmRlbmNpZXNcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuYXdhcmQtZGVwZW5kZW5jeSBbdHlwZT1jaGVja2JveF0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hd2FyZC1kZXBlbmRlbmN5IFt0eXBlPWNoZWNrYm94XScpLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xuICAgIH0pXG5cbiAgICAucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgZGVwbG95U3RhdHVzKCk7XG4gICAgfSk7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbGV2ZWxzIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNkcGEgPiB0Ym9keScpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmRwYV9pZCcpLnZhbCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI2RwYV90ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8lZHBhX2lkJS9nLCBpICsgaW5jcmVtZW50SWQpO1xuXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBkcGEgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVEcGFTdGF0ZSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcbiAgICBsZXQgZGF0YSA9ICQoJy5kcGEtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZURwYVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlRHBhU3RhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBkcGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvdyB0byB0aGUgZHBhIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvdyB0byB0aGUgZHBhIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZHBhLXNhdmUtcGFnZScsIHNhdmVEcGFTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHllID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjZHllX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuXG4gICAgICAgIGxldCBsYXN0Um93ID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuY3AyJyk7XG4gICAgICAgIGxhc3RSb3cuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICQoaXRlbSkuY29sb3JwaWNrZXIoe30pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogQ2hhbmdlIHJvdyBpbmRleFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUm93SW5kZXgoKSB7XG4gICAgbGV0IHJvd0luZGV4ID0gJCh0aGlzKS52YWwoKTtcbiAgICBsZXQgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJ2lucHV0LCBzZWxlY3QnKTtcblxuICAgIHJvdy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICBsZXQgb2xkTmFtZSA9ICQoaXRlbSkuYXR0cignbmFtZScpO1xuICAgICAgICBsZXQgbmV3TmFtZSA9IG9sZE5hbWUuc2xpY2UoMCwgNCkgKyByb3dJbmRleCArICBvbGROYW1lLnNsaWNlKG9sZE5hbWUuaW5kZXhPZignXScpKTtcbiAgICAgICAgJChpdGVtKS5hdHRyKCduYW1lJywgbmV3TmFtZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5leHBvcnQgY29uc3QgRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUiA9ICcuZHllLXNhdmUtcGFnZS1jb250YWluZXInO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGR5ZXMgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJChEWUVfQ09OVEFJTkVSX1NFTEVDVE9SKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcbiAgICAgKi9cbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBNYXJrIGZvcm0ncyB0ciBhcyBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZFRyKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtjaGFuZ2VSb3dJbmRleH0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUm93SW5kZXhcIjtcbmltcG9ydCBkeWVTYXZlUGFnZSwge0RZRV9DT05UQUlORVJfU0VMRUNUT1IsIG1hcmtDaGFuZ2VkVHJ9IGZyb20gXCIuL2hhbmRsZXJzL2R5ZVNhdmVQYWdlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNvbG9yLXBpY2tlciBpbnB1dHNcbiAgICAgKi9cbiAgICAucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5jcDInKS5jb2xvcnBpY2tlcigpXG4gICAgICAgICAgICAub24oJ2NyZWF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudClcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIE1hcmsgdHIgYXMgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgLm9uKCdjaGFuZ2UnLCBgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBpbnB1dCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBzZWxlY3QsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZFRyKVxuICAgICAgICAgICAgICAgICAgICAub24oJ2lucHV0JywgYCR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWRUcik7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2Ugcm93IGluZGV4XG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYXNzZXRfaWQnLCBjaGFuZ2VSb3dJbmRleClcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gICAgICovXG4gICAgJCgnLmR5ZS1zYXZlLXBhZ2UnKS5jbGljayhkeWVTYXZlUGFnZSk7XG4iLCJleHBvcnQgY29uc3QgR0lGVF9XUkFQX1JPV19BRERFRCA9ICdHSUZUX1dSQVBfUk9XX0FEREVEJztcbiIsImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcblxuLyoqXG4gKiBBc3NldCBJRCBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdXJyZW50SW5wdXQgPSAkKHRoaXMpO1xuICAgIGNvbnN0IGFzc2V0SUQgPSBjdXJyZW50SW5wdXQudmFsKCk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudElucHV0LmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBkdXBsaWNhdGVkIGFzc2V0cyBpZHNcbiAgICAgKi9cbiAgICBjb25zdCBjdXJyZW50QXNzZXREdXBsaWNhdGUgPSAkKCcjZ2lmdC13cmFwcy1jb250YWluZXInKS5maW5kKCcuYXNzZXQtaWQnKS5maWx0ZXIoKF8sIGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGFzc2V0SUQgPT09IGl0ZW0udmFsdWU7XG4gICAgfSk7XG5cbiAgICBpZiAoY3VycmVudEFzc2V0RHVwbGljYXRlLmxlbmd0aCA+IDEpe1xuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBhc3NldCAnICsgYXNzZXRJRH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGlucHV0cyBuYW1lc1xuICAgICAqL1xuICAgIHBhcmVudC5maW5kKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUucmVwbGFjZSggL1xcW1tcXGRdK1xcXS9nLCBgWyR7YXNzZXRJRH1dYCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgaHJlZiBvZiB0aGUgZGVsZXRlIGJ1dHRvblxuICAgICAqL1xuICAgIHBhcmVudC5maW5kKCcuYWpheC1jb25maXJtLWFjdGlvbi1jdXN0b20nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ocmVmID0gdGhpcy5ocmVmLnJlcGxhY2UoIC9cXC9bXFxkXSskL2csIGAvJHthc3NldElEfWApO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgcG9zaXRpb25VcGRhdGUgZnJvbSBcIi4uL2hlbHBlcnMvcG9zaXRpb25VcGRhdGVcIjtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXNzZXRzID0ge307XG4gICAgICAgICQoJyNnaWZ0LXdyYXBzLWNvbnRhaW5lcicpLmZpbmQoJy5hc3NldC1pZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGFzc2V0c1t0aGlzLnZhbHVlXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRzW3RoaXMudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9ySGFuZGxlcih7J21lc3NhZ2UnOiAnRHVwbGljYXRlIGFzc2V0ICcgKyBlcnIubWVzc2FnZX0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gdXBkYXRlXG4gICAgICovXG4gICAgcG9zaXRpb25VcGRhdGUoKTtcblxuICAgIGZhc3RTYXZlUGFnZS5iaW5kKHRoaXMpKGUpO1xufVxuIiwiaW1wb3J0IGNvbmZpcm1Nb2RhbCBmcm9tIFwiaGFuZGxlcnMvY29uZmlybU1vZGFsXCI7XG5cbi8qKlxuICogUmVtb3ZlIGVtYmVkZWQgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGJ1dHRvblVybCA9IHRoaXMuaHJlZi5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgndHInKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChwYXJzZUludChidXR0b25VcmxbYnV0dG9uVXJsLmxlbmd0aCAtIDFdKSA9PT0gMCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25maXJtTW9kYWwuYmluZCh0aGlzKShlKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcbmltcG9ydCBwb3NpdGlvblVwZGF0ZSBmcm9tIFwibW9kdWxlcy9naWZ0LXdyYXAvaGVscGVycy9wb3NpdGlvblVwZGF0ZVwiO1xuXG4vKipcbiAqIFNvcnRhYmxlIEluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBuZXcgU29ydGFibGUoX3RoaXMsIHtcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qKlxuICogUG9zaXRpb24gdXBkYXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKCcucG9zaXRpb24nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSAkKCcjcGFnZScpLnZhbCgpO1xuICAgICAgICBjb25zdCBwYWdlX2xpbWl0ID0gJCgnW25hbWU9XCJwYWdlX2xpbWl0XCJdJykudmFsKCk7XG5cbiAgICAgICAgaWYgKHBhcnNlSW50KHBvc2l0aW9uLnZhbCgpKSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnZhbChpbmRleCArICgocGFnZSAtIDEpICogcGFnZV9saW1pdCkpO1xuICAgICAgICAgICAgcG9zaXRpb24uY2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0dJRlRfV1JBUF9ST1dfQURERUR9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBBZGQgbmV3IHJvdyB0byBncmlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoR0lGVF9XUkFQX1JPV19BRERFRCwgZGF0YSA9PiB7XG4gICAgICAgICQoJyNnaWZ0LXdyYXAtJyArIGRhdGEuZW1iZWRCbG9ja0lkKVxuICAgICAgICAgICAgLmZpbmQoJy5kYXRldGltZXBpY2tlcicpXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgc29ydGFibGVJbml0IGZyb20gXCIuL2hhbmRsZXJzL3NvcnRhYmxlSW5pdFwiO1xuaW1wb3J0IGFzc2V0Q2hhbmdlZCBmcm9tIFwiLi9oYW5kbGVycy9hc3NldENoYW5nZWRcIjtcbmltcG9ydCBhZGRSb3cgZnJvbSBcIi4vbGlzdGVuZXJzL2FkZFJvd1wiO1xuaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcbmltcG9ydCByZW1vdmVSb3cgZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlUm93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgYXNzZXQgaWQgaW4gaW5wdXRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuYXNzZXQtaWQnLCBhc3NldENoYW5nZWQpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1jb25maXJtLWFjdGlvbi1jdXN0b20nLCByZW1vdmVSb3cpO1xuXG4vKipcbiAqIEFkZCByb3cgbGlzdGVuZXJcbiAqL1xuYWRkUm93KCk7XG5cbi8qKlxuICogU29ydGFibGUgaW5pdFxuICovXG4kKCcuc29ydGFibGUnKS5lYWNoKHNvcnRhYmxlSW5pdCk7XG5cbi8qKlxuICogU2F2ZSBhbGwgcGFnZVxuICovXG4kKCcuZmFzdC1zYXZlLXBhZ2UtY3VzdG9tJykuY2xpY2soZmFzdFNhdmVQYWdlKTsiLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogSGFuZGxlciBmb3Igc2hvdyBhc3NldFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Fzc2V0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCBhY3Rpb24gPSBTV09XX0FTU0VUX1JPVVRFICsgJz9pZD0nICsgY3VycmVudEVsZW1lbnQudmFsKCk7XG4gICAgbmV3IGh0dHAoYWN0aW9uKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpKSB7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LW5hbWUnKS5odG1sKHJlc3BvbnNlLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ3ByZXZpZXdfdXJsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtcHJldmlldyBpbWcnKS5hdHRyKCdzcmMnLCByZXNwb25zZS5kYXRhLnByZXZpZXdfdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtcHJldmlldyAubGlzdC10aHVtYm5haWwnKS5kYXRhKCdmdWxsJywgcmVzcG9uc2UuZGF0YS5wcmV2aWV3X3VybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59XG4iLCJcbmltcG9ydCB7c2hvd0Fzc2V0fSBmcm9tIFwiLi9oYW5kbGVycy9zaG93QXNzZXRcIjtcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBTaG93IGFzc2V0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmFzc2V0Jywgc2hvd0Fzc2V0KVxuXG4gICAgIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsb2NhbGl6YXRpb24gY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBsZXQgdGJvZHkgPSAkKCcjbG9jYWxpemF0aW9ucyA+IHRib2R5Jyk7XG4gICAgbGV0IHRlbXBsYXRlID0gJCgnI2xvY2FsaXphdGlvbl90ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIHRib2R5LnByZXBlbmQodGVtcGxhdGUpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBSZW1vdmUgbm90IHNhdmVkIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUm93KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKHRoaXMpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGxvY2FsaXphdGlvbiBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsaXphdGlvblN0YXRlIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudEJ0bi5jbG9zZXN0KCd0cicpO1xuICAgIGNvbnN0IGN1cnJlbnRLZXkgPSBwYXJlbnQuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS52YWwoKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGR1cGxpY2F0ZWQga2V5c1xuICAgICAqXG4gICAgICogQHR5cGUge2pRdWVyeX1cbiAgICAgKi9cbiAgICBjb25zdCBjdXJyZW50S2V5RHVwbGljYXRlID0gJCgnI2xvY2FsaXphdGlvbnMnKS5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLmZpbHRlcigoXywgaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gY3VycmVudEtleSA9PT0gaXRlbS52YWx1ZTtcbiAgICB9KTtcbiAgICBpZiAoY3VycmVudEtleUR1cGxpY2F0ZS5sZW5ndGggPiAxKXtcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUga2V5ICcgKyBjdXJyZW50S2V5fSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gcGFyZW50LmZpbmQoJy5lZGl0YWJsZSBpbnB1dCcpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcGFyZW50LmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykuYXR0cigncmVhZG9ubHknLCB0cnVlKTtcblxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlTG9jYWxpemF0aW9uU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVMb2NhbGl6YXRpb25TdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtyZW1vdmVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZVJvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbG9jYWxpemF0aW9ucyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY3JlYXRlLXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlTG9jYWxpemF0aW9uU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJlbW92ZS1yb3cnLCByZW1vdmVSb3cpO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWFnaWMgPiB0Ym9keScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJ2lucHV0W25hbWU9XCJpZFwiXScpLnZhbCgpO1xuICAgICAgICBsZXQgaW5jcmVtZW50SWQgPSBwYXJzZUludChsYXN0SUQpIHx8IDA7XG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjbWFnaWNfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJW1hZ2ljX2lkJS9nLCArK2luY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVNYWdpY1N0YXRlICgpIHtcbiAgICBjb25zdCBkYXRhID0gJCgnLm1hZ2ljLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xuXG4gICAgZGF0YS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICQoaXRlbSkuYXR0cigncmVhZG9ubHknLCB0cnVlKVxuICAgIH0pO1xuXG4gICAgaWYoZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZU1hZ2ljU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZU1hZ2ljU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsImltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogU2hvdyBsYXN0IG1ha2V1cCBraXQgSURcbiAqXG4gKiBAcGFyYW0gZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbmV3IFJlcXVlc3RCdWlsZGVyKHRoaXMuaHJlZilcbiAgICAgICAgLnN1Y2Nlc3MocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICQoJyNsYXN0LW1ha2V1cC1raXQtaWQnKVxuICAgICAgICAgICAgICAgIC52YWwocmVzdWx0Lm1ha2V1cF9raXRfaWQpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCBnZXRMYXN0TWFrZXVwS2l0SUQgZnJvbSBcIi4vaGFuZGxlcnMvZ2V0TGFzdE1ha2V1cEtpdElEXCI7XG5cbi8qKlxuICogU2hvdyBsYXN0IG1ha2V1cCBraXQgSUQgYXQgdGhlIGJvZHkgcGFydHMgZ3JpZFxuICovXG4kKCcjZ2V0LWxhc3QtbWFrZXVwLWtpdC1pZCcpXG4gICAgLmNsaWNrKGdldExhc3RNYWtldXBLaXRJRCk7XG4iLCJleHBvcnQgY29uc3QgTUFLRVVQX0tJVF9TSE9XX0ZPUk0gPSAnTUFLRVVQX0tJVF9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtNQUtFVVBfS0lUX1NIT1dfRk9STX0gZnJvbSBcIm1vZHVsZXMvbWFrZXVwLWtpdC9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KE1BS0VVUF9LSVRfU0hPV19GT1JNKSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGluZ3JlZGllbnQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21lYWxfaW5ncmVkaWVudF9ncm91cHMgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX2luZ3JlZGllbnRfZ3JvdXBzX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmdyb3VwX2lkJykudGV4dCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsLWluZ3JlZGllbnQtZ3JvdXAlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZ3JlZGllbnREZWxldGUoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtpbmdyZWRpZW50RGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9pbmdyZWRpZW50RGVsZXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBpbmdyZWRpZW50RGVsZXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGluZ3JlZGllbnQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21lYWxfaW5ncmVkaWVudHMgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX2luZ3JlZGllbnRzX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmluZ3JlZGllbnRfaWQnKS50ZXh0KCk7XG4gICAgbGV0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJW1lYWwtaW5ncmVkaWVudCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIaWRlIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5ncmVkaWVudERlbGV0ZSgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge2luZ3JlZGllbnREZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGluZ3JlZGllbnREZWxldGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG59KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWVhbCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI21lYWxfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcubWVhbF9pZCcpLnRleHQoKTtcbiAgICBjb25zdCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIaWRlIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVhbERlbGV0ZSgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU1lYWxTdGF0ZSAoKSB7XG4gICAgY29uc3Qgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcubWVhbC1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkXCIpO1xuICAgIGNvbnN0IGRhdGEgPSAkKCcubWVhbC1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHRib2R5LmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHttZWFsRGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9tZWFsRGVsZXRlXCI7XG5pbXBvcnQge3NhdmVNZWFsU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfQ1JFQVRFRCwgQVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIG1lYWxEZWxldGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBtZWFsXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVNZWFsU3RhdGUoKVxuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgfSlcblxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gKi9cbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlTWVhbFN0YXRlKTtcbiIsImV4cG9ydCBjb25zdCBORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0gPSAnTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNJztcbiIsImNvbnN0IFRSQVNIID0gJ1RSQVNIJztcbmNvbnN0IFRSQVNIX0ZJRUxEU19JRCA9ICd0cmFzaC1maWVsZHMnO1xuY29uc3QgU0VMRUNUX0lEID0gJ25laWdoYm9yLWFjdGl2aXR5LXR5cGUtaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU0VMRUNUX0lEKTtcblxuICAgIGlmICghc2VsZWN0IHx8IHNlbGVjdC5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdC5vcHRpb25zLmxlbmd0aCAmJiBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0pIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcblxuICAgICAgICBjb25zdCB0cmFzaEZpZWxkcyA9ICQoJyMnICsgVFJBU0hfRklFTERTX0lEKTtcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZEVsZW1lbnQudGV4dC50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlIFRSQVNIOlxuICAgICAgICAgICAgICAgIHRyYXNoRmllbGRzLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRyYXNoRmllbGRzLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0sIHNlbGYpO1xuXG4gICAgICAgIGNoYW5nZVR5cGUoKTtcblxuICAgICAgICAkKCcubmVpZ2hib3ItYWN0aXZpdHktZm9ybSAuZGF0ZXRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSAnLi9oYW5kbGVycy9jaGFuZ2VUeXBlJztcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKVxuICAgIC5vbignY2hhbmdlJywgJy5uZWlnaGJvci1hY3Rpdml0eS10eXBlJywgY2hhbmdlVHlwZSk7XG5cbi8qKlxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cbiAqIEFmdGVyIGNsaWNrIGF0IGNyZWF0ZSBvciBlZGl0IGJ1dHRvblxuICovXG4kKCcuc2hvdy1mb3JtJylcbiAgICAuY2xpY2soc2hvd0Zvcm0pO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IFBST0RVQ1RfU0hPV19GT1JNID0gJ1BST0RVQ1RfU0hPV19GT1JNJztcbiIsImltcG9ydCBDbGVhdmUgZnJvbSBcImNsZWF2ZS5qc1wiO1xuXG4vKipcbiAqIFByaWNlIGluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgbmV3IENsZWF2ZSh0aGlzLCB7XG4gICAgICAgIG51bWVyYWw6IHRydWUsXG4gICAgICAgIHByZWZpeDogJyQgJyxcbiAgICAgICAgcmF3VmFsdWVUcmltUHJlZml4OiB0cnVlLFxuICAgICAgICBvblZhbHVlQ2hhbmdlZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IE1hdGgucm91bmQoK2UudGFyZ2V0LnJhd1ZhbHVlICogMTAwKTtcbiAgICAgICAgICAgIGxldCBwcm9kdWN0UHJpY2UgPSAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgndGQnKS5maW5kKCcucHJvZHVjdC1wcmljZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHBhcnNlSW50KHByb2R1Y3RQcmljZS52YWwoKSkpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgLnZhbCh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgLmNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59IiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge1BST0RVQ1RfU0hPV19GT1JNfSBmcm9tIFwibW9kdWxlcy9wcm9kdWN0L2NvbnN0YW50c1wiO1xuaW1wb3J0IHByaWNlSW5pdCBmcm9tIFwibW9kdWxlcy9wcm9kdWN0L2hhbmRsZXJzL3ByaWNlSW5pdFwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgYXdhcmREZWxldGUpO1xuXG4vKipcbiAqIFByZXZpZXcgSW1hZ2UgKERyb3Bab25lIGluaXQpXG4gKi9cbiQoJy5zaG93LWZvcm0nKS5jbGljayhkcm9wWm9uZUluaXQoUFJPRFVDVF9TSE9XX0ZPUk0pKTtcblxuJCgnI3Rlc3QnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbn0pO1xuXG4vKipcbiAqIFByaWNlIGZvcm1hdFxuICovXG4kKCcucHJvZHVjdC1wcmljZS12aWV3JykuZWFjaChwcmljZUluaXQpO1xuIiwiXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9IHBhcnNlSW50KCQoJy5hZGQtY291bnRlcicpLnZhbCgpKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJ3RhYmxlLnRhYmxlIHRib2R5Jyk7XG4gICAgY29uc3QgbWF4SWQgPSAkKHRoaXMpLmRhdGEoJ2NvdW50ZXInKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9ICQoJ3RlbXBsYXRlI2NvbmZpZy1yb3cnKTtcblxuICAgIGxldCBuZXdMZW5ndGggPSBwYXJzZUludCh0Ym9keS5maW5kKCd0ci5uZXctcm93JykubGVuZ3RoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgdHJJZCA9IChtYXhJZCA+IDAgPyBtYXhJZCA6IDApICsgcGFyc2VJbnQodGJvZHkuZmluZCgndHIubmV3LXJvdycpLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IG5ld1JvdyA9IHRlbXBsYXRlLmh0bWwoKS5yZXBsYWNlKC8laWQlL2csIHRySWQpXG4gICAgICAgICAgICAucmVwbGFjZSgvJXRyX2lkJS9nLCB0cklkKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVkcmFmdCUvZywgdHJJZCk7XG5cbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgdmFsdWVzIHRvIG5ldyByb3dzXG4gICAgICAgIGxldCBuZXdSb3dIdG1sID0gJChuZXdSb3cpO1xuICAgICAgICAkKCcuZGVmYXVsdC1yb3ctdmFsdWUnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgZGVmYXVsdFZhbHVlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIG5ld1Jvd0h0bWwuZmluZCgnLicgKyAkKHRoaXMpLmRhdGEoJ2NsYXNzJykpLmF0dHIoJ3ZhbHVlJywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld1JvdyA9IG5ld1Jvd0h0bWwuZ2V0KDApLm91dGVySFRNTDtcblxuICAgICAgICBpZiAobmV3TGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCh0Ym9keS5maW5kKCd0ci5uZXctcm93JykubGFzdCgpKS5hZnRlcihuZXdSb3cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGJvZHkucHJlcGVuZChuZXdSb3cpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0xlbmd0aCsrO1xuXG4gICAgICAgIHRib2R5LmZpbmQoJ1tkYXRhLWF1dG9pbmNyZW1lbnQ9XCIxXCJdJykubGFzdCgpLnZhbCh0cklkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdFxuICpcbiAqIEBwYXJhbSBfXG4gKiBAcGFyYW0gaXRlbVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoXywgaXRlbSkge1xuICAgIGNvbnN0IGRyb3B6b25lQ29udGFpbmVyID0gJChpdGVtKTtcbiAgICBjb25zdCBwcmV2aWV3SGlkZGVuSW5wdXQgPSBkcm9wem9uZUNvbnRhaW5lci5maW5kKCdpbnB1dCcpO1xuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cbiAgICAgKi9cbiAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGl0ZW0pXG4gICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVDb250YWluZXIuZGF0YSgndXJsJykpXG4gICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAkKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJldmlld1xuICAgICAqL1xuICAgIGlmICghIXByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSkge1xuICAgICAgICBkcm9wem9uZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxuICAgICAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSxcbiAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUNvbnRhaW5lci5kYXRhKCdmb2xkZXInKSwgcHJldmlld0hpZGRlbklucHV0LnZhbCgpKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAqL1xuICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xufSIsIi8qKlxuICogTWFyayBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZCAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgJCgnI3VwZGF0ZS1hbGwnKS5zaG93KCk7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBkcGEgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQYWdlIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YSgkKFwidHIuY2hhbmdlZFwiKS5maW5kKCdpbnB1dCwgaW5wdXRbdHlwZT1cImhpZGRlblwiXSwgc2VsZWN0LCB0ZXh0YXJlYScpKTtcblxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoey4uLmRhdGF9KVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgaWYgKHJlc3AudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIG5vdGlmeUVycm9yKHJlc3AubWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUm93IChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHJvd1RvU2F2ZSA9ICQodGhpcykucGFyZW50cygndHInKTtcbiAgICBsZXQgYWN0aW9uID0gcm93VG9TYXZlLmRhdGEoJ2FjdGlvbicpO1xuICAgIGxldCByb3cgPSByb3dUb1NhdmUuZmluZChcIi5lZGl0YWJsZSBzZWxlY3QsIC5lZGl0YWJsZSBpbnB1dFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoJChcInRyLmNoYW5nZWRcIikubGVuZ3RoID4gMSkge1xuICAgICAgICBsZXQgciA9IGNvbmZpcm0oJ0NoYW5nZWQgbW9yZSB0aGFuIG9uZSByb3cuIFNhdmVkIG9ubHkgY3VycmVudCByb3chJyk7XG4gICAgICAgIGlmKHIgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFyb3dUb1NhdmUuaGFzQ2xhc3MoJ2NoYW5nZWQnKSkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQVVRcIixcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgdXJsOiBhY3Rpb24sXG4gICAgICAgIGRhdGE6IHJvdyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oIHJlc3AgKSB7XG4gICAgICAgICAgICByb3dUb1NhdmUucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwLm1lc3NhZ2VcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIHR5cGU6IHJlc3AudHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgaWYgKGpxWEhSLnJlc3BvbnNlSlNPTiAmJiBqcVhIUi5yZXNwb25zZUpTT04uaGFzT3duUHJvcGVydHkoJ2Vycm9ycycpKSB7XG4gICAgICAgICAgICAgICAgJC5lYWNoKCBqcVhIUi5yZXNwb25zZUpTT04uZXJyb3JzLCBmdW5jdGlvbihlcnJvcktleSwgZXJyb3IgKSB7XG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCggZXJyb3IsIGZ1bmN0aW9uKG1lc3NhZ2VLZXksIG1lc3NhZ2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XG5pbXBvcnQgZHJvcHpvbmVJbml0IGZyb20gXCIuL2hhbmRsZXJzL2Ryb3B6b25lSW5pdFwiO1xuaW1wb3J0IHtzYXZlUGFnZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVBhZ2VcIjtcbmltcG9ydCB7bWFya0NoYW5nZWR9IGZyb20gXCIuL2hhbmRsZXJzL21hcmtDaGFuZ2VkXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfQ1JFQVRFRCwgQVdBUkRfREVMRVRFLCBDTE9TRV9BV0FSRF9NT0RBTH0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlUm93fSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUm93XCI7XG5cbi8qKlxuICogVHVybmVkIG9mZiB0aGUgRHJvcHpvbmUgYXV0byBpbml0XG4gKlxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXRcbiAqL1xuJCgnLmRyb3B6b25lJykuZWFjaChkcm9wem9uZUluaXQpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVuc3Vic2NyaWJlIG9uIG1vZGFsIGNsb3NlXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQ0xPU0VfQVdBUkRfTU9EQUwsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0IGNvbG9yLXBpY2tlciBpbnB1dHNcbiAgICAgICAgICovXG4gICAgICAgICQoJy5jcDInKS5jb2xvcnBpY2tlcigpO1xuXG4gICAgICAgICQoJyN1cGRhdGUtYWxsJykuY2xpY2soc2F2ZVBhZ2UpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXBkYXRlLXJvdycpO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgc2VsZik7XG4gICAgICAgICAgICBzYXZlQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVJvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzKSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAkKCcjdXBkYXRlLWFsbCcpLnNob3coKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRyb3B6b25lJywgbWFya0NoYW5nZWQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIG1hcmtDaGFuZ2VkKVxuICAgIC5vbignaW5wdXQnLCAndGJvZHkgaW5wdXQsIHRib2R5IHRleHRhcmVhJywgbWFya0NoYW5nZWQpXG4gICAgLm9uKCdjaGFuZ2UnLCAndGJvZHkgaW5wdXQsIHRib2R5IHNlbGVjdCcsIG1hcmtDaGFuZ2VkKTtcbiIsImNvbnN0IFdBTEtfQ0FURUdPUlkgPSAnNic7XG5jb25zdCBSVU5fQ0FURUdPUlkgPSc3JztcblxuJChkb2N1bWVudClcblxuICAgIC5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0MiA9ICQoJy50YWJsZScpLmZpbmQoJy5lbWJlZC1ncm91cCBzZWxlY3Quc2VsZWN0MicpO1xuICAgICAgICBsZXQgc2VsZWN0VmFsID0gMDtcbiAgICAgICAgc2VsZWN0Mi5lYWNoKGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgICBzZWxlY3RWYWwgPSAkKGkpLnZhbCgpO1xuICAgICAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XG4gICAgICAgICAgICAgICAgJChpKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoaSkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTaG93IGhpZGUgc3BlZWQgb24gdHJpZ2dlciBhZGQtZW1iZWQgYnV0dG9uXG4gICAgICovXG4gICAgLm9uKCdhaV9hbmltYXRpb24nLCAnLmFkZC1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZW1iZWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpO1xuICAgICAgICBjb25zdCBzZWxlY3RWYWwgPSBlbWJlZC5maW5kKCcuc2VsZWN0MicpLnZhbCgpO1xuICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcbiAgICAgICAgICAgIGVtYmVkLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVtYmVkLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTaG93IGhpZGUgc3BlZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdFZhbCA9ICQoaXRlbS50YXJnZXQpLnZhbCgpO1xuICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcbiAgICAgICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IFNIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0gPSAnU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSc7XG4iLCIvKipcbiAqIEFkZCBhIG5ldyBzaG9wIGluIGEgZGVwYXJ0bWVudHMgZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHRhYmxlID0gY3VycmVudEJ0bi5jbG9zZXN0KCcuc2hvcHMtdGFibGUnKS5maW5kKCd0Ym9keScpO1xuICAgIGNvbnN0IGRlcGFydG1lbnRJZCA9IGN1cnJlbnRCdG4uZGF0YSgnZGVwYXJ0bWVudCcpO1xuICAgIGxldCBjb3VudGVyID0gcGFyc2VJbnQoY3VycmVudEJ0bi5kYXRhKCdjb3VudCcpKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9ICQoJyNzaG9wLXRlbXBsYXRlJylcbiAgICAgICAgLmh0bWwoKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCclZGVwYXJ0bWVudElkJScsIFwiZ1wiKSwgZGVwYXJ0bWVudElkKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCclaW5kZXglJywgXCJnXCIpLCBjb3VudGVyKyspO1xuXG4gICAgY3VycmVudEJ0bi5kYXRhKCdjb3VudCcsIGNvdW50ZXIpO1xuXG4gICAgdGFibGUuYXBwZW5kKHRlbXBsYXRlKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogRmFzdCBzYXZlIGZvciBzaG9wIGRlcGFydG1lbnRcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHNob3BOYW1lUHJlZml4ID0gJ3Nob3AnO1xuICAgIGNvbnN0IGRlcGFydG1lbnROYW1lUHJlZml4ID0gJ2RlcGFydG1lbnQnO1xuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IGZhc3RTYXZlQ29udGFpbmVyID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGxldCBzaG9wcyA9IHt9O1xuICAgIGxldCBkZXBhcnRtZW50ID0ge307XG5cbiAgICBmYXN0U2F2ZUNvbnRhaW5lci5maW5kKCd0Ym9keSB0ci5jaGFuZ2VkIHRyLmluZm8nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRlcGluZGV4ID0gJCh0aGlzKS5jbG9zZXN0KCcuZGVwYXJ0bWVudCcpLmluZGV4KCk7XG4gICAgICAgIGxldCBkZXBhcnRtZW50Rm9ybURhdGEgPSBnZXRGb3JtRGF0YSgkKHRoaXMpKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBkZXBhcnRtZW50Rm9ybURhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gYCR7ZGVwYXJ0bWVudE5hbWVQcmVmaXh9WyR7ZGVwaW5kZXh9XVske2l9XWA7XG4gICAgICAgICAgICBkZXBhcnRtZW50W2l0ZW1OYW1lXSA9IGRlcGFydG1lbnRGb3JtRGF0YVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcykubmV4dCgndHIuc2hvcHMnKS5maW5kKCd0Ym9keS5zb3J0YWJsZSB0cicpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBnZXRGb3JtRGF0YSgkKHRoaXMpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGAke3Nob3BOYW1lUHJlZml4fVske2RlcGFydG1lbnRGb3JtRGF0YS5pZH1dWyR7aW5kZXh9XVske2l9XWA7XG4gICAgICAgICAgICAgICAgc2hvcHNbaXRlbU5hbWVdID0gZm9ybURhdGFbaV07XG4gICAgICAgICAgICAgICAgc2hvcHNbYCR7c2hvcE5hbWVQcmVmaXh9WyR7ZGVwYXJ0bWVudEZvcm1EYXRhLmlkfV1bJHtpbmRleH1dW2RlcGFydG1lbnRdYF0gPSBkZXBhcnRtZW50Rm9ybURhdGEuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoey4uLnNob3BzLCAuLi5kZXBhcnRtZW50fSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgJCgnLmNoYW5nZWQnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBSYWRpbyBpbnB1dCBmcm9tIGNoZWNrYm94XG4gKiBCZWNhdXNlIGlucHV0W3R5cGU9cmFkaW9dIGRpZCBub3Qgd29yayBjb3JyZWN0bHlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gJCh0aGlzKTtcbiAgICBjb25zdCBhbGxJdGVtcyA9IGN1cnJlbnRJdGVtLmNsb3Nlc3QoJy50YWJsZScpLmZpbmQoJy5yYWRpbycpO1xuXG4gICAgYWxsSXRlbXMucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICBhbGxJdGVtcy5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xuXG4gICAgY3VycmVudEl0ZW0ucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgIGN1cnJlbnRJdGVtLmFkZENsYXNzKCdjaGVja2VkJyk7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5cbi8qKlxuICogU29ydGFibGUgSW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgbmV3IFNvcnRhYmxlKHRoaXMsIHtcbiAgICAgICAgZ3JvdXA6ICdkZXBhcnRtZW50JyxcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKS5maW5kKCd0ci5kZXBhcnRtZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJhZGlvOiAkKGUuaXRlbSkuZmluZCgnLnJhZGlvJyksXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogJChlLml0ZW0pLmNsb3Nlc3QoJy50YWJsZScpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgU29ydGFibGUodGhpcywge1xuICAgICAgICBncm91cDogJ3Nob3BzJyxcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICQoZS5pdGVtKS5jbG9zZXN0KCd0ci5kZXBhcnRtZW50JykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICByYWRpbzogJChlLml0ZW0pLmZpbmQoJy5yYWRpbycpLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6ICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucGFyZW50LmZpbmQoJy5yYWRpby5jaGVja2VkOmd0KDApJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmFkaW8ucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yYWRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0RmlsZVBhdGggZnJvbSBcImhlbHBlcnMvZ2V0RmlsZVBhdGhcIjtcbmltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdCBhZnRlciB0aGUgbW9kYWwgb3BlbmVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSwgKCkgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlld1xuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVJbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwnKSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpZXcgU21hbGxcbiAgICAgICAgICovXG4gICAgICAgIGRyb3B6b25lSW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUtc21hbGwnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsLXNtYWxsJykpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIERyb3B6b25lIEluaXRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkcm9wem9uZUVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHByZXZpZXdVcmxFbGVtZW50XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGRyb3B6b25lSW5pdChkcm9wem9uZUVsZW1lbnQsIHByZXZpZXdVcmxFbGVtZW50KSB7XG4gICAgaWYgKCFkcm9wem9uZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXG4gICAgICovXG4gICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihkcm9wem9uZUVsZW1lbnQpXG4gICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQudXJsKVxuICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgJChwcmV2aWV3VXJsRWxlbWVudCkudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICAkKHByZXZpZXdVcmxFbGVtZW50KS52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICQoZHJvcHpvbmVFbGVtZW50KS5maW5kKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgICAgIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlID0gcmVzcG9uc2UuZmlsZV9uYW1lO1xuICAgICAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNldCBwcmV2aWV3XG4gICAgICovXG4gICAgaWYgKHByZXZpZXdVcmxFbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBkcm9wem9uZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxuICAgICAgICAgICAgICAgIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgIGdldEZpbGVQYXRoKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LmZvbGRlciwgcHJldmlld1VybEVsZW1lbnQudmFsdWUpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICovXG4gICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XG59IiwiaW1wb3J0IGFkZFNob3AgZnJvbSBcIi4vaGFuZGxlcnMvYWRkU2hvcFwiO1xuaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlXCI7XG5pbXBvcnQgcmFkaW9JbnB1dCBmcm9tIFwiLi9oYW5kbGVycy9yYWRpb0lucHV0XCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5pbXBvcnQgc29ydGFibGVJbml0IGZyb20gXCJtb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcbmltcG9ydCBzb3J0YWJsZURlcGFydG1lbnRJbml0IGZyb20gXCJtb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZURlcGFydG1lbnRJbml0XCI7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdFxuICovXG5zaG93Rm9ybSgpO1xuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIFJhZGlvIGJ1dHRvbnMgYmVoYXZpb3JcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcucmFkaW8nLCByYWRpb0lucHV0KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93IHRvIHRoZSBkcGEgZ3JpZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHIuZGVwYXJ0bWVudCcpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERvY3VtZW50IHJlYWR5XG4gICAgICovXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBjbGFzcyB0byBjaGVja2VkIHJhZGlvc1xuICAgICAgICAgKi9cbiAgICAgICAgJCgnLnJhZGlvW2NoZWNrZWRdJykuYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGEgbmV3IHNob3AgaW4gYSBkZXBhcnRtZW50cyBncmlkXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuYWRkLXNob3AnKS5jbGljayhhZGRTaG9wKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmFzdCBzYXZlXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuZmFzdC1zYXZlJykuY2xpY2soZmFzdFNhdmUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYWtlIHRyIHRvIHNvcnRhYmxlXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuc29ydGFibGUnKS5lYWNoKHNvcnRhYmxlSW5pdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1ha2UgdHIgdG8gc29ydGFibGVcbiAgICAgICAgICovXG4gICAgICAgICQoJy5zb3J0YWJsZS1kZXBhcnRtZW50JykuZWFjaChzb3J0YWJsZURlcGFydG1lbnRJbml0KTtcbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjcmVsZWFzZSA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI3JlbGVhc2VfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcucmVsZWFzZV9pZCcpLnZhbCgpO1xuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXJlbGVhc2UlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcblxuICAgICAgICB0Ym9keS5maW5kKCcuZGF0ZXRpbWVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBNZWFsIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUGFnZSAoKSB7XG4gICAgY29uc3Qgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcucmVsZWFzZS1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZFwiKTtcbiAgICBjb25zdCBkYXRhID0gJCgnLnJlbGVhc2Utc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdCwgLmNoYW5nZWQgdGV4dGFyZWFcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICB0Ym9keS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZVBhZ2V9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gKi9cbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlUGFnZSk7XG4iLCIkKGRvY3VtZW50KVxuXG4gICAgLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCd0ZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYoJCh0aGlzKS5hdHRyKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kJywgJyNlN2U3ZTcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNzb3VuZCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI3NvdW5kX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLnNvdW5kX2lkJykudmFsKCk7XG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lc291bmRfaWQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTb3VuZFN0YXRlICgpIHtcbiAgICBjb25zdCBkYXRhID0gJCgnLnNvdW5kLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTb3VuZFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU291bmRTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgc291bmQgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVTb3VuZFN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IFRBTUFUT09MX1NIT1dfRk9STSA9ICdUQU1BVE9PTF9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7VEFNQVRPT0xfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoVEFNQVRPT0xfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShUQU1BVE9PTF9TSE9XX0ZPUk0sIHNlbGYpO1xuXG4gICAgICAgICQoJy5uZWlnaGJvci1hY3Rpdml0eS1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKTtcblxuLyoqXG4gKiBSdW4gdGhlIHNob3cgZm9ybSBoYW5kbGVyLlxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXG4gKi9cbiQoJy5zaG93LWZvcm0nKVxuICAgIC5jbGljayhzaG93Rm9ybSk7XG4iLCJleHBvcnQgY29uc3QgU0VBUkNIX1VTRVJfQVNTRVRTICAgICAgPSAnU0VBUkNIX1VTRVJfQVNTRVRTJztcbmV4cG9ydCBjb25zdCBTVUJNSVRfVVNFUl9QQVJUX0ZPUk0gICA9ICdTVUJNSVRfVVNFUl9QQVJUX0ZPUk0nO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ORUlHSEJPUiAgICAgICAgID0gJ0RFTEVURV9ORUlHSEJPUic7XG5leHBvcnQgY29uc3QgQUREX05FSUdIQk9SICAgICAgICAgICAgPSAnQUREX05FSUdIQk9SJztcbmV4cG9ydCBjb25zdCBHRVRfTkVJR0hCT1JTICAgICAgICAgICA9ICdHRVRfTkVJR0hCT1JTJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTkVJR0hCT1JTICAgICAgICA9ICdVUERBVEVfTkVJR0hCT1JTJztcblxuZXhwb3J0IGNvbnN0IE5FSUdIQk9SX0dSSURfSUQgPSAnbmVpZ2hib3ItZ3JpZCc7IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG4vKipcbiAqIEFkZCBjb21tZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YSgkKCcjY29sbGVjdGlibGUtZm9ybScpLmZpbmQoJ2lucHV0JykpO1xuXG4gICAgbmV3IGh0dHAoJCgnI2FkZC1jb2xsZWN0aWJsZScpLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgIC5kYXRhKHtkYXRhfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcC50eXBlID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgICAgIGxldCBmb3JtID0gJChyZXNwLmRhdGEpO1xuICAgICAgICAgICAgICAgICQoJyMnICsgcmVzcC5jb250YWluZXIpLnJlcGxhY2VXaXRoKGZvcm0pO1xuICAgICAgICAgICAgICAgIG5vdGlmeVN1Y2Nlc3MoJ1VzZXIgY29sbGVjdGlibGUgdXBkYXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIEFkZCBjb21tZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5jbG9zZXN0KCdhJykuYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgLmRhdGEoe2Rlc2NyaXB0aW9uOiAkKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsKCl9KVxuICAgICAgICAuc3VjY2VzcyhyID0+IHtcbiAgICAgICAgICAgIGlmIChyLnN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWwoJycpO1xuICAgICAgICAgICAgICAgICQoJyN1c2VyLWNvbW1lbnRzJykucHJlcGVuZCgnPHRyPjx0ZD4nICsgci5tb2RlbC5kZXNjcmlwdGlvbiArICc8L3RkPjx0ZD4nICsgci5jcmVhdGVkX2J5ICsgJzwvdGQ+PHRkPicgKyByLmNyZWF0ZWRfYXQgKyAnIFBTVDwvdGQ+PHRkPjxhIGhyZWY9XCJodHRwOi8vY21zLWRldi5sb2NhbC9yZW1vdmUtY29tbWVudC8nICsgci5tb2RlbC5pZCArICdcIiBjbGFzcz1cImFqYXgtY29uZmlybS1hY3Rpb25cIiBkYXRhLW1ldGhvZD1cIkRFTEVURVwiIGRhdGEtaGVhZGVyPVwiRGVsZXRlIGNvbW1lbnQ/XCIgZGF0YS1idG4tbmFtZT1cIkRlbGV0ZVwiIGRhdGEtYnRuLWNsYXNzPVwiYnRuLWRhbmdlciBidG4tc21cIiBkYXRhLWRpc21pc3M9XCIxXCIgZGF0YS1yZWxvYWQ9XCIxXCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5EZWxldGU8L2J1dHRvbj48L2E+PC90ZD48L3RyPicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBTeW5jaHJvbml6ZSBtb3ZlLXBsYWNlbWVudC1zZWxlY3Qgc2VsZWN0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGVjdGVkU3RvcmFnZSA9ICQodGhpcykudmFsKCk7XG4gICAgJCh0aGlzKS5wYXJlbnRzKCdmb3JtJykuZmluZCgnLm1vdmUtcGxhY2VtZW50LXNlbGVjdCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHNlbGVjdGVkU3RvcmFnZSAhPSAkKHRoaXMpLnZhbCgpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnZhbChzZWxlY3RlZFN0b3JhZ2UpLmNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1VQREFURV9ORUlHSEJPUlMsIE5FSUdIQk9SX0dSSURfSUR9IGZyb20gXCJtb2R1bGVzL3VzZXJzL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNldCBwYWdlIGxpbWl0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJykgKyAnJnBhZ2VfbGltaXQ9JyArICQodGhpcykudmFsKCk7XG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ0dFVCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICQoYCMke05FSUdIQk9SX0dSSURfSUR9YCkucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xufVxuIiwiLyoqXG4gKiBDaGFuZ2UgcGxhY2VtZW50IHNlbGVjdCBpbiBBZGQgQXNzZXRzIGJsb2NrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwbGFjZW1lbnROYW1lID0gJCgnI2FkZC1hc3NldHMtYmxvY2stcGxhY2VtZW50LW5hbWUnKTtcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA+IDApIHtcbiAgICAgICAgcGxhY2VtZW50TmFtZS5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZW1lbnROYW1lLnNob3coKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIENoYW5nZSBtb2RlIGZvciBhZGQgbmVpZ2hib3JzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBuZWlnaGJvcnNDb3VudCA9ICQoJyNuZWlnaGJvcnMtY291bnQnKTtcbiAgICBpZigkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgIG5laWdoYm9yc0NvdW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmVpZ2hib3JzQ291bnQuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEhpZGUgYXNzZXRzIGluIHBsYWNlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC50b2dnbGVDbGFzcygnaGlkZScpO1xuICAgIGN1cnJlbnRFbGVtZW50LnNpYmxpbmdzKCcubG9hZC1hc3NldHMnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuICAgICQoJyNhc3NldC1jb250YWluZXItJyArIGN1cnJlbnRFbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcpKS5odG1sKCcnKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBQTEFDRU1FTlRfQVNTRVRTX1JPVVRFIC0gaXQgaXMgYSBnbG9iYWwgb2JqZWN0XG4gKiBJbml0ZWQgaW4gdXNlci9lZGl0LmJsYWRlLnBocFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgcGxhY2VtZW50ID0gY3VycmVudEVsZW1lbnQuZGF0YSgncGxhY2VtZW50Jyk7XG5cbiAgICBjdXJyZW50RWxlbWVudC50b2dnbGVDbGFzcygnaGlkZScpO1xuICAgIGN1cnJlbnRFbGVtZW50LnNpYmxpbmdzKCcuaGlkZS1hc3NldHMnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuXG4gICAgbG9hZFBhcnQoUExBQ0VNRU5UX0FTU0VUU19ST1VURSArICcmcGxhY2VtZW50PScgKyBwbGFjZW1lbnQsICQoJyNhc3NldC1jb250YWluZXItJyArIHBsYWNlbWVudCkpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIExvYWQgcGFydCBmb3IgZWRpdCB1c2VyIHBhZ2VcbiAqL1xuZnVuY3Rpb24gbG9hZFBhcnQoYWN0aW9uLCBlbGVtZW50KSB7XG4gICAgbmV3IGh0dHAoYWN0aW9uKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9ICQocmVzcG9uc2UpO1xuICAgICAgICAgICAgaXRlbXMuZmluZCgnLmxpc3QtdGh1bWJuYWlsJykucG9wb3Zlcih7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICAgICAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnaG92ZXInLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGltZyBzcmM9XCInICsgJCh0aGlzKS5kYXRhKCdmdWxsJykgKyAnXCI+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoaXRlbXMpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xufSIsIi8qKlxuICogU2VsZWN0IHJvd3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvdW50U2VsZWN0b3IgPSAkKHRoaXMpLnBhcmVudHMoJ3RkLCB0aCcpLmZpbmQoJy5jb3VudC1mb3Itc2VsZWN0Jyk7XG4gICAgY29uc3Qgcm93c0ZvclNlbGVjdCA9ICQodGhpcykucGFyZW50cygndGFibGUnKS5maW5kKCcuZm9yLXNlbGVjdCcpO1xuXG4gICAgbGV0IGNvdW50Rm9yU2VsZWN0ID0gY291bnRTZWxlY3Rvci52YWwoKSB8fCAwO1xuICAgIGlmIChjb3VudEZvclNlbGVjdCA9PT0gMCkge1xuICAgICAgICBjb3VudEZvclNlbGVjdCA9IHJvd3NGb3JTZWxlY3QubGVuZ3RoO1xuICAgICAgICBjb3VudFNlbGVjdG9yLnZhbChjb3VudEZvclNlbGVjdCk7XG4gICAgfVxuXG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgcm93c0ZvclNlbGVjdC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoY291bnRGb3JTZWxlY3QgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb3VudEZvclNlbGVjdC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvd3NGb3JTZWxlY3QuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1VQREFURV9ORUlHSEJPUlMsIE5FSUdIQk9SX0dSSURfSUR9IGZyb20gXCJtb2R1bGVzL3VzZXJzL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBuZWlnaGJvciBncmlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoVVBEQVRFX05FSUdIQk9SUywgKHJlc3BvbnNlLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKFVQREFURV9ORUlHSEJPUlMsIHNlbGYpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS50eXBlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuYXR0cignYWN0aW9uJykpXG4gICAgICAgICAgICAgICAgLm1ldGhvZCgnR0VUJylcbiAgICAgICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoYCMke05FSUdIQk9SX0dSSURfSUR9YCkucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QUREX05FSUdIQk9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2V0IG5laWdoYm9yIGFzIGFjdGl2ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFERF9ORUlHSEJPUiwgcmVzcCA9PiB7XG4gICAgICAgIGlmIChyZXNwLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAkKCcjZGVsZXRlLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNhZGQtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI25laWdoYm9yLXN0YXR1cy0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5odG1sKHJlc3AuZGF0YS5zdGF0dXNfdGV4dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0RFTEVURV9ORUlHSEJPUn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNldCBuZWlnaGJvciBhcyBkZWxldGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoREVMRVRFX05FSUdIQk9SLCByZXNwID0+IHtcbiAgICAgICAgaWYgKHJlc3AudHlwZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICQoJyNkZWxldGUtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI2FkZC1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjbmVpZ2hib3Itc3RhdHVzLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmh0bWwocmVzcC5kYXRhLnN0YXR1c190ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7R0VUX05FSUdIQk9SUywgTkVJR0hCT1JfR1JJRF9JRH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBuZWlnaGJvciBncmlkIGluIHNlYXJjaGluZ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEdFVF9ORUlHSEJPUlMsIHJlc3AgPT4ge1xuICAgICAgICAkKGAjJHtORUlHSEJPUl9HUklEX0lEfWApLnJlcGxhY2VXaXRoKHJlc3ApO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7U0VBUkNIX1VTRVJfQVNTRVRTfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2VhcmNoIHVzZXIgYXNzZXRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0VBUkNIX1VTRVJfQVNTRVRTLCBkYXRhID0+IHtcbiAgICAgICAgJCgnI3NlYXJjaC1hc3NldHMtY29udGFpbmVyJykucmVwbGFjZVdpdGgoZGF0YSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcbmltcG9ydCB7U1VCTUlUX1VTRVJfUEFSVF9GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU3VibWl0IHVzZXIgcGFydCBmb3JtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU1VCTUlUX1VTRVJfUEFSVF9GT1JNLCByZXNwID0+IHtcbiAgICAgICAgbGV0IGZvcm0gPSAkKHJlc3AuZGF0YSk7XG5cbiAgICAgICAgJCgnIycgKyByZXNwLmNvbnRhaW5lcikucmVwbGFjZVdpdGgoZm9ybSk7XG4gICAgICAgIGZvcm0uZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgICAgIG5vdGlmeVN1Y2Nlc3MoJ1VzZXIgZGF0YSB1cGRhdGVkJyk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgc2VhcmNoVXNlckFzc2V0cyAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9zZWFyY2hVc2VyQXNzZXRzXCI7XG5pbXBvcnQgc3VibWl0VXNlclBhcnRGb3JtICAgIGZyb20gXCIuL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm1cIjtcbmltcG9ydCBkZWxldGVOZWlnaGJvciAgICAgICAgZnJvbSBcIi4vbGlzdGVuZXJzL2RlbGV0ZU5laWdoYm9yXCI7XG5pbXBvcnQgc2VhcmNoTmVpZ2hib3IgICAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9zZWFyY2hOZWlnaGJvclwiO1xuaW1wb3J0IGFkZE5laWdoYm9yICAgICAgICAgICBmcm9tIFwiLi9saXN0ZW5lcnMvYWRkTmVpZ2hib3JcIjtcbmltcG9ydCBsb2FkUGxhY2VtZW50QXNzZXRzICAgZnJvbSBcIi4vaGFuZGxlcnMvbG9hZFBsYWNlbWVudEFzc2V0c1wiO1xuaW1wb3J0IGhpZGVQbGFjZW1lbnRBc3NldHMgICBmcm9tIFwiLi9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzXCI7XG5pbXBvcnQgY2hhbmdlUGxhY2VtZW50ICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVBsYWNlbWVudFwiO1xuaW1wb3J0IGNoYW5nZVJhbmRvbU5laWdoYm9ycyBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VSYW5kb21OZWlnaGJvcnNcIjtcbmltcG9ydCBjaGFuZ2VNb3ZlUGxhY2VtZW50ICAgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlTW92ZVBsYWNlbWVudFwiO1xuaW1wb3J0IHNlbGVjdFJvd3MgICAgICAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9zZWxlY3RSb3dzXCI7XG5pbXBvcnQgdXBkYXRlTmVpZ2hib3JzICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL3VwZGF0ZU5laWdoYm9yc1wiO1xuaW1wb3J0IGNoYW5nZVBhZ2VMaW1pdCAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VQYWdlTGltaXRcIjtcbmltcG9ydCBhZGRDb21tZW50ICAgICAgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvYWRkQ29tbWVudFwiO1xuaW1wb3J0IGFkZENvbGxlY3RpYmxlICAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9hZGRDb2xsZWN0aWJsZVwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XG5cbi8qKlxuICogU2VhcmNoIHVzZXIgYXNzZXRzIGxpc3RlbmVyXG4gKi9cbnNlYXJjaFVzZXJBc3NldHMoKTtcblxuLyoqXG4gKiBTdWJtaXQgdXNlciBwYXJ0IGZvcm0gbGlzdGVuZXJcbiAqL1xuc3VibWl0VXNlclBhcnRGb3JtKCk7XG5cbi8qKlxuICogRGVsZXRlIE5laWdoYm9yXG4gKi9cbmRlbGV0ZU5laWdoYm9yKCk7XG5cbi8qKlxuICogQWRkIE5laWdoYm9yXG4gKi9cbmFkZE5laWdoYm9yKCk7XG5cbi8qKlxuICogU2VhcmNoIE5laWdoYm9yc1xuICovXG5zZWFyY2hOZWlnaGJvcigpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhc3NldHMgaW4gcGxhY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcubG9hZC1hc3NldHMnLCBsb2FkUGxhY2VtZW50QXNzZXRzKVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHBsYWNlbWVudCBpbiBBZGQgQXNzZXRzIGJsb2NrXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI3BsYWNlbWVudC1mb3ItYXNzZXQnLCBjaGFuZ2VQbGFjZW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbW9kZSBmb3IgYWRkIG5laWdoYm9yc1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNpcy1yYW5kb20tbmVpZ2hib3JzJywgY2hhbmdlUmFuZG9tTmVpZ2hib3JzKVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBhc3NldHMgaW4gcGxhY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1hc3NldHMnLCBoaWRlUGxhY2VtZW50QXNzZXRzKVxuXG4gICAgLyoqXG4gICAgICogQXV0byBzZWxlY3Qgcm93c1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5zZWxlY3Qtcm93cycsIHNlbGVjdFJvd3MpXG5cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbml6ZSBtb3ZlLXBsYWNlbWVudC1zZWxlY3Qgc2VsZWN0c1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5tb3ZlLXBsYWNlbWVudC1zZWxlY3QnLCBjaGFuZ2VNb3ZlUGxhY2VtZW50KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIG5laWdoYm9yIHJlcXVlc3RcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtbmVpZ2hib3ItcmVxdWVzdCwgI2FkZC1uZWlnaGJvcnMnLCB1cGRhdGVOZWlnaGJvcnMpXG4gICAgLyoqXG4gICAgICogU2V0IHBhZ2UgbGltaXRcbiAgICAgKi9cbiAgICAgLm9uKCdjaGFuZ2UnLCAnLm5laWdoYm9yLXBhZ2UtbGltaXQnLCBjaGFuZ2VQYWdlTGltaXQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgY29tbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2FkZC1jb21tZW50JywgYWRkQ29tbWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBjb2xsZWN0aWJsZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnI2FkZC1jb2xsZWN0aWJsZScsIGFkZENvbGxlY3RpYmxlKVxuO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==