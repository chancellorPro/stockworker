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
/*!************************************************************************************!*\
  !*** /home/acranum1/projects/stockworker/node_modules/moment/locale sync ^\.\/.*$ ***!
  \************************************************************************************/
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
/* harmony import */ var components_http_errorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/http/errorHandler */ "./components/http/errorHandler.js");
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
/* harmony import */ var components_http_RequestBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/http/RequestBuilder */ "./components/http/RequestBuilder.js");


$(document).on('click', '#product_id', function () {
  $('#product_id').prev('.select2-container').find('.select2-search__field').focus();
}).on('click', '.reports', function () {
  setTimeout(function () {
    var element = $("#html-content-holder"); // global variable

    var canvas_handler = $("#canvas_handler"); // global variable

    var copy_ele = element.get(0).cloneNode(true);
    canvas_handler.append(copy_ele);
    canvas_handler.css('height', element.scrollHeight + 20);
    canvas_handler.css('width', element.scrollWidth + 10);
    html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(copy_ele, {
      scrollX: 0,
      scrollY: -1,
      useCORS: true
    }).then(function (canvas) {
      var imageData = canvas.toDataURL("image/png");
      var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
      $('#canvas-data').val(newData);
    });
  }, 500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2FjcmFudW0xL3Byb2plY3RzL3N0b2Nrd29ya2VyL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbENvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29ic2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2V4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvYWRkRW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvYWpheFBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvY29uZmlybU1vZGFsLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2Zhc3RTYXZlLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9maWx0ZXJEYXRlUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvbW9kYWxEYXRhLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3BhZ2VMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9yZW1vdmVFbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9zdWJtaXRGb3JtLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0RmlsZVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldFN1YkZvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmRDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2F3YXJkRGVsZXRlLmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9kcm9wWm9uZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL3VwZGF0ZVNhdmVBbGxCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcyBzeW5jIFxcLlxcL1tcXHctX10rXFwvbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMgc3luYyBtb2R1bGVzKC4qKW1vZHVsZVxcLmpzJCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWRkLW1lL2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FkZC1tZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy1sb2cvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9jb3B5QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2Rvd25sb2FkQXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2dldExhc3RDb2xsZWN0aW9uTnVtYmVyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL21hcmtDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2F3YXJkL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9oYW5kbGVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvY29weUFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9kb3dubG9hZEFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2hpZGVBcmNoaXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvaGlkZVRhc2tzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2VsZWN0Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2hvd0FyY2hpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9zaG93VGFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Nyb3AvaGFuZGxlcnMvYWRkUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY3JvcC9oYW5kbGVycy9kZWxldGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jcm9wL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3Qvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2RlcGxveVN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3lQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2R5ZVNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvYXNzZXRDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvc29ydGFibGVJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvbGlzdGVuZXJzL2FkZFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL2hhbmRsZXJzL3Nob3dBc3NldC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SUQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9tZWFsRGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9zYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L2hhbmRsZXJzL3ByaWNlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2UvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2Uvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2Ryb3B6b25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL21hcmtDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvaGFuZGxlcnMvc2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9zYXZlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL2FkZFNob3AuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvcmFkaW9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZURlcGFydG1lbnRJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2FkZENvbGxlY3RpYmxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvYWRkQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZU1vdmVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VQYWdlTGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VSYW5kb21OZWlnaGJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvbG9hZFBsYWNlbWVudEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL3NlbGVjdFJvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy91cGRhdGVOZWlnaGJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvYWRkTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJTSVpFUyIsInNtIiwibWQiLCJsZyIsIkxPQURJTkdfVEVYVCIsImRyb3B6b25lQ29udGFpbmVyIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9kcm9wem9uZUNvbnRhaW5lciIsIl9jYW5jZWxCdXR0b24iLCIkIiwiZmluZCIsInVybCIsIl91cGxvYWRVcmwiLCJuYW1lIiwiX3ByZXZpZXciLCJjYWxsYmFjayIsIl9lcnJvckNhbGxiYWNrIiwiX2NhbmNlbENhbGxiYWNrIiwiX3N1Y2Nlc3NDYWxsYmFjayIsIl9kcm9wem9uZUJ1aWxkZXIiLCJkcm9wem9uZUZhaWwiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidXBsb2FkTXVsdGlwbGUiLCJhY2NlcHRlZEZpbGVzIiwiaGVhZGVycyIsIkNTUkZfVE9LRU4iLCJpbml0IiwiZW1pdCIsIm9uIiwidGV4dCIsImZpbGUiLCJyZXNwb25zZSIsImNsaWNrIiwiRHJvcHpvbmUiLCJfdXJsIiwiX21ldGhvZCIsIl9kYXRhIiwiX2Vycm9yIiwiZXJyb3JIYW5kbGVyIiwiX3N1Y2Nlc3MiLCJzdWNjZXNzSGFuZGxlciIsIl9jb21wbGV0ZSIsIm1ldGhvZCIsImRhdGEiLCJmbiIsImFqYXgiLCJ0eXBlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJub3RpZnlFcnJvciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJub3RpZnlTdWNjZXNzIiwibW9kYWxzQ29udGFpbmVyIiwiTU9EQUxfU0laRVMiLCJtb2RhbEluZGV4IiwibW9kYWxDb3VudGVyIiwiX2lkIiwic2l6ZSIsIl9zaXplIiwiaGVhZGVyIiwiX2hlYWRlciIsImJvZHkiLCJfYm9keSIsImZvb3RlciIsIl9mb290ZXIiLCJkYXRhc2V0IiwiX2RhdGFzZXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJfYmVmb3JlQnVpbGRDYWxsYmFjayIsIl9hZnRlckJ1aWxkQ2FsbGJhY2siLCJfb25DbG9zZUNhbGxiYWNrIiwiY29udGVudCIsInB1c2giLCJodG1sIiwiX2dldElEIiwiam9pbiIsIl9nZXRTaXplIiwiX2JlZm9yZUJ1aWxkIiwiX2dldEhlYWRlciIsIl9nZXRCb2R5IiwiX2dldEZvb3RlciIsInNlbGVjdDIiLCJkYXRldGltZXBpY2tlciIsImZvcm1hdCIsImF1dG9jbG9zZSIsIm1pblZpZXciLCJzdGlja3lUYWJsZUhlYWRlcnMiLCJfYWZ0ZXJCdWlsZCIsIm9mZiIsIl9vbkNsb3NlIiwibW9kYWwiLCJnZXRNb2RhbENvdW50ZXIiLCJtb2RhbENvbmZpcm0iLCJNb2RhbEJ1aWxkZXIiLCJub3RpZnkiLCJ6X2luZGV4IiwiRXZlbnRPYnNlcnZlciIsInN1YnNjcmliZXJzIiwiZXZlbnQiLCJoYW5kbGVyIiwiX2xvZyIsImZvckVhY2giLCJzdGF0ZSIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJ0b1VwcGVyQ2FzZSIsIm9ic2VydmVyIiwiU2F2ZWRJdGVtTm90Rm91bmQiLCJFcnJvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRCdXR0b24iLCJ0YXJnZXQiLCJ0ZW1wbGF0ZSIsImlkUGxhY2Vob2xkZXIiLCJyb3dJZCIsImVtYmVkRm9ybSIsImVtYmVkQmxvY2tJZCIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiUmVnRXhwIiwibGVuZ3RoIiwiZGlzcGF0Y2giLCJ0cmlnZ2VyIiwiY29udGFpbmVyIiwicGFyZW50cyIsImh0dHAiLCJyZXBsYWNlV2l0aCIsInNlbmQiLCJkYXRhU2V0IiwicGFyZW50QnV0dG9uIiwiYnRuQ2xhc3MiLCJidG5OYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImhhc093blByb3BlcnR5IiwiY2xvc2VzdCIsInNlcmlhbGl6ZUFycmF5IiwicGFyc2VJbnQiLCJyZWxvYWQiLCJkaXNtaXNzIiwiY3VycmVudEJ0biIsInNhdmVkSXRlbSIsImF0dHIiLCJnZXRGb3JtRGF0YSIsIkNPTlRBSU5FUl9TRUxFQ1RPUiIsIlBBR0VfU0FWRUQiLCJVUERBVEVfU0FWRV9BTExfQlVUVE9OIiwiZm9ybUl0ZW1zIiwibWFya0NoYW5nZWQiLCJkYXRlRm9ybWF0IiwiZGF0ZVJhbmdlSW5wdXRzIiwic2VsZWN0ZWRPcHRpb24iLCJkYXRlRnJvbSIsImRhdGVUbyIsInNlbGVjdGVkVmFsdWUiLCJ2YWwiLCJjc3MiLCJ2aXNpYmlsaXR5IiwiaGVpZ2h0IiwiZGF0ZUZyb21WYWx1ZSIsImRhdGVUb1ZhbHVlIiwibW9tZW50Iiwic3VidHJhY3QiLCJkYXkiLCJzdGFydE9mIiwiZW5kT2YiLCJkb2N1bWVudCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImVhY2giLCJyZW1vdmVBdHRyIiwicmVhZHkiLCJ0YWJsZXNvcnRlciIsIm1vZGFsRGF0YSIsImNvbmZpcm1Nb2RhbCIsInN1Ym1pdEZvcm0iLCJhamF4UGFnaW5hdGlvbiIsImFkZEVtYmVkIiwicmVtb3ZlRW1iZWQiLCJmYXN0U2F2ZSIsInBhZ2VMaW1pdCIsImRhdGVSYW5nZSIsImZpbHRlckRhdGVSYW5nZSIsImNoYW5nZSIsImluaXRTdGlja3kiLCJmYXN0U2F2ZVBhZ2UiLCJhZnRlckJ1aWxkIiwib25DbG9zZSIsImNsb3NlRXZlbnQiLCJVUkwiLCJ3aW5kb3ciLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJlbnQiLCJpZCIsImNhblJlbG9hZCIsImJ1dHRvbiIsImRhdGFSZWxvYWQiLCJyb290Rm9sZGVyIiwiZmlsZU5hbWUiLCJnZXRTdWJGb2xkZXIiLCJmb3JtIiwiZm9ybURhdGEiLCJjdXJyZW50SXRlbSIsInByb3AiLCJmaWxlTmFtZUhhc2giLCJtZDUiLCJzdWJzdHJpbmciLCJwYXRoUGFydHMiLCJtYXRjaCIsImpRdWVyeSIsInBhdGgiLCJwYXRobmFtZSIsInNwbGl0IiwibW9kdWxlcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJtb2R1bGVJdGVtcyIsInN1Yk1vZHVsZXMiLCJzdWJzY3JpYmUiLCJBV0FSRF9DUkVBVEUiLCJzZWxmIiwidW5zdWJzY3JpYmUiLCJlZGl0QnRuIiwidGVtcGxhdGVJZCIsInRlbXBsYXRlUGxhY2Vob2xkZXIiLCJhd2FyZF9pZCIsImZpZWxkTmFtZSIsIkFXQVJEX0NSRUFURUQiLCJBV0FSRF9ERUxFVEUiLCJjcmVhdGVCdG4iLCJjaGlsZHJlbiIsIkVWRU5UX05BTUUiLCJkcm9wem9uZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByZXZpZXdVUkwiLCJkcm9wem9uZUJ1aWxkZXIiLCJEcm9wem9uZUJ1aWxkZXIiLCJzZXRVcGxvYWRVcmwiLCJjYW5jZWwiLCJmaWxlX25hbWUiLCJ2YWx1ZSIsInNldFByZXZpZXciLCJnZXRGaWxlUGF0aCIsImZvbGRlciIsImJ1aWxkIiwic2F2ZUFsbEJ1dHRvbiIsImNvdW50ZXIiLCJjb3VudCIsInNob3ciLCJoaWRlIiwicHJldiIsImZvY3VzIiwic2V0VGltZW91dCIsImVsZW1lbnQiLCJjYW52YXNfaGFuZGxlciIsImNvcHlfZWxlIiwiZ2V0IiwiY2xvbmVOb2RlIiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsV2lkdGgiLCJodG1sMmNhbnZhcyIsInNjcm9sbFgiLCJzY3JvbGxZIiwidXNlQ09SUyIsInRoZW4iLCJjYW52YXMiLCJpbWFnZURhdGEiLCJ0b0RhdGFVUkwiLCJuZXdEYXRhIiwiQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQiLCJERUxUQV9USU1FX0FUVFJJQlVURSIsInRvZ2dsZUNsYXNzIiwiY3VycmVudEVsZW1lbnQiLCJSZXF1ZXN0QnVpbGRlciIsImluZGV4IiwiXyIsIml0ZW0iLCJ1cGRhdGVJbmRleGVzIiwiY3VycmVudExpIiwiZGVsdGFUaW1lSGlkZGVuIiwiZGVsdGFUaW1lRGlzcGxheSIsInRpbWVUeXBlIiwiY29sbGFwc2VTdGF0ZSIsImNvbGxhcHNlU3RhdGVzIiwicmVtb3ZlQWN0aW9uVHlwZVN0YXRlIiwic2F2ZVN0YXRlIiwicmVzcCIsIkFOTk9VTkNFTUVOVFNfU0hPV19GT1JNIiwiYXdhcmRDcmVhdGUiLCJiaW5kIiwiX3RoaXMiLCJhd2FyZERlbGV0ZSIsIkNMT1NFX0FXQVJEX01PREFMIiwic2hvd0Zvcm0iLCJuZXh0Iiwic2V0U3VidHlwZXMiLCJzdWJ0eXBlIiwiYXNzZXRGb3JtU3VidHlwZSIsImFzc2V0Rm9ybUFjdGlvblR5cGUiLCJhc3NldEZvcm1Db2xsZWN0aW9uIiwicHJpY2VzIiwiZW1wdHkiLCJTVUJfVFlQRVMiLCJjb3B5QXNzZXRzIiwiYXNzZXRJZHNGaWVsZCIsIndpdGhOYW1lIiwiYXNzZXRJZHMiLCJuIiwiYXNzZXRJZCIsImFzc2V0TmFtZSIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiZG93bmxvYWRBc3NldHMiLCJjb2xsZWN0aW9uX2lkIiwicGFyZW50Q29udGFpbmVyIiwiY2hhbmdlVHlwZSIsImdldExhc3RDb2xsZWN0aW9uTnVtYmVyIiwiY3VycmVudFRkIiwidXBkYXRlU2F2ZUFsbEJ1dHRvbiIsIkJBTk5FUl9TSE9XX0ZPUk0iLCJUWVBFX1NFTEVDVF9JRCIsInNlbGVjdGVkSW5kZXgiLCJvcHRpb25zIiwic2VsZWN0ZWRFbGVtZW50IiwiZHJvcFpvbmVJbml0IiwiY29weUFkcCIsImFkcElkc0ZpZWxkIiwiYWRwSWRzIiwiYWRwSWQiLCJkb3dubG9hZEFkcCIsImhpZGVBcmNoaXZlIiwiaGlkZVRhc2tzIiwic2VsZWN0Um93IiwiY2hlY2tib3giLCJpcyIsInNob3dBcmNoaXZlIiwiYWN0aW9uIiwic2hvd1Rhc2tzIiwiQ0FTSCIsIkNPSU4iLCJBU1NFVCIsInNvdXJjZVZhbCIsIm1hdGNoZXIiLCJwYXJhbXMiLCJpbkFycmF5Iiwid3JhcHBlciIsImdldFNlbGVjdGlvbiIsIkNPTExFQ1RJT05fU0hPV19GT1JNIiwiYXNzZXRQcmV2aWV3VGVtcGxhdGUiLCJhc3NldHMiLCJjdXJyZW50QXNzZXQiLCJwcmV2aWV3X3VybCIsIlNvcnRhYmxlIiwiZ3JvdXAiLCJyZW1vdmVDbG9uZU9uSGlkZSIsIm9uRW5kIiwicG9zaXRpb24iLCJtYXJrSW5wdXRBc0NoYW5nZWQiLCJzb3J0YWJsZUluaXQiLCJoaWRlQWRkaXRpb25hbFJvd3MiLCJhZGRSb3ciLCJhZGRfY291bnRlciIsInRib2R5IiwidHJMYXN0IiwibGFzdElEIiwibGFzdCIsImluY3JlbWVudElkIiwiaSIsImRlbGV0ZVJvdyIsInJvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYWRkTmV3Um93IiwibGFzdElEUyIsImZpcnN0IiwiTWF0aCIsIm1heCIsImFwcGx5Iiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsImRlcGxveVN0YXR1cyIsIkRFUExPWV9TVEFUVVNfUk9VVEUiLCJpc0FjdGl2ZSIsImNoYW5nZVRhYiIsImRpcmVjdGlvbiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJzaG93RGVwZW5kZW5jeSIsImN1cnJlbnRDb25maWciLCJhZGRNb2RlIiwib25lTGV2ZWxTaG93IiwiY29uZmlnTmFtZSIsImxldmVsIiwiREVQTE9ZX0RFUEVORFMiLCJjb25maWdCbG9jayIsImRlcGVuZENvbmZpZ05hbWUiLCJzaG93RGVwZW5kZW5jeVBvcHVwIiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudENvbmZpZ0lkIiwiaWRzIiwicm9vdExldmVsU2hvdyIsImlkUmVzcG9uc2UiLCJ0ZXh0Q2xhc3MiLCJpc1JlY3Vyc2lvbiIsImdldERlcGxveU1vZGVsSWRzIiwiREVQTE9ZX01PREVMX0lEU19ST1VURSIsIkFDVElWRV9ESVJFQ1RJT04iLCJjaGVja2VkIiwic2F2ZURwYVN0YXRlIiwibGFzdFJvdyIsImNvbG9ycGlja2VyIiwiY2hhbmdlUm93SW5kZXgiLCJyb3dJbmRleCIsIm9sZE5hbWUiLCJuZXdOYW1lIiwiaW5kZXhPZiIsIkRZRV9DT05UQUlORVJfU0VMRUNUT1IiLCJtYXJrQ2hhbmdlZFRyIiwiZHllU2F2ZVBhZ2UiLCJHSUZUX1dSQVBfUk9XX0FEREVEIiwiY3VycmVudElucHV0IiwiYXNzZXRJRCIsImN1cnJlbnRBc3NldER1cGxpY2F0ZSIsImVyciIsInBvc2l0aW9uVXBkYXRlIiwiYnV0dG9uVXJsIiwicGFnZSIsInBhZ2VfbGltaXQiLCJhc3NldENoYW5nZWQiLCJyZW1vdmVSb3ciLCJzaG93QXNzZXQiLCJTV09XX0FTU0VUX1JPVVRFIiwicHJlcGVuZCIsInNhdmVMb2NhbGl6YXRpb25TdGF0ZSIsImN1cnJlbnRLZXkiLCJjdXJyZW50S2V5RHVwbGljYXRlIiwic2F2ZU1hZ2ljU3RhdGUiLCJtYWtldXBfa2l0X2lkIiwiZ2V0TGFzdE1ha2V1cEtpdElEIiwiTUFLRVVQX0tJVF9TSE9XX0ZPUk0iLCJpbmdyZWRpZW50RGVsZXRlIiwibWVhbERlbGV0ZSIsInNhdmVNZWFsU3RhdGUiLCJORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0iLCJUUkFTSCIsIlRSQVNIX0ZJRUxEU19JRCIsIlNFTEVDVF9JRCIsInRyYXNoRmllbGRzIiwiUFJPRFVDVF9TSE9XX0ZPUk0iLCJDbGVhdmUiLCJudW1lcmFsIiwicHJlZml4IiwicmF3VmFsdWVUcmltUHJlZml4Iiwib25WYWx1ZUNoYW5nZWQiLCJyb3VuZCIsInJhd1ZhbHVlIiwicHJvZHVjdFByaWNlIiwicHJpY2VJbml0IiwibWF4SWQiLCJuZXdMZW5ndGgiLCJ0cklkIiwibmV3Um93IiwibmV3Um93SHRtbCIsImRlZmF1bHRWYWx1ZSIsIm91dGVySFRNTCIsImFmdGVyIiwicHJldmlld0hpZGRlbklucHV0Iiwic2F2ZVBhZ2UiLCJzYXZlUm93Iiwicm93VG9TYXZlIiwiciIsImNvbmZpcm0iLCJkYXRhVHlwZSIsImpxWEhSIiwiZXhjZXB0aW9uIiwiZXJyb3JLZXkiLCJtZXNzYWdlS2V5IiwiYXV0b0Rpc2NvdmVyIiwiZHJvcHpvbmVJbml0Iiwic2F2ZUJ1dHRvbiIsIldBTEtfQ0FURUdPUlkiLCJSVU5fQ0FURUdPUlkiLCJzZWxlY3RWYWwiLCJlbWJlZCIsIlNIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0iLCJ0YWJsZSIsImRlcGFydG1lbnRJZCIsInNob3BOYW1lUHJlZml4IiwiZGVwYXJ0bWVudE5hbWVQcmVmaXgiLCJmYXN0U2F2ZUNvbnRhaW5lciIsInNob3BzIiwiZGVwYXJ0bWVudCIsImRlcGluZGV4IiwiZGVwYXJ0bWVudEZvcm1EYXRhIiwiaXRlbU5hbWUiLCJhbGxJdGVtcyIsInJhZGlvIiwicHJldmlld1VybEVsZW1lbnQiLCJyYWRpb0lucHV0IiwiYWRkU2hvcCIsInNvcnRhYmxlRGVwYXJ0bWVudEluaXQiLCJzYXZlU291bmRTdGF0ZSIsIlRBTUFUT09MX1NIT1dfRk9STSIsIlNFQVJDSF9VU0VSX0FTU0VUUyIsIlNVQk1JVF9VU0VSX1BBUlRfRk9STSIsIkRFTEVURV9ORUlHSEJPUiIsIkFERF9ORUlHSEJPUiIsIkdFVF9ORUlHSEJPUlMiLCJVUERBVEVfTkVJR0hCT1JTIiwiTkVJR0hCT1JfR1JJRF9JRCIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwibW9kZWwiLCJjcmVhdGVkX2J5IiwiY3JlYXRlZF9hdCIsInNlbGVjdGVkU3RvcmFnZSIsInBsYWNlbWVudE5hbWUiLCJuZWlnaGJvcnNDb3VudCIsInNpYmxpbmdzIiwicGxhY2VtZW50IiwibG9hZFBhcnQiLCJQTEFDRU1FTlRfQVNTRVRTX1JPVVRFIiwiaXRlbXMiLCJwb3BvdmVyIiwiY291bnRTZWxlY3RvciIsInJvd3NGb3JTZWxlY3QiLCJjb3VudEZvclNlbGVjdCIsIm5laWdoYm9yX2lkIiwic3RhdHVzX3RleHQiLCJzZWFyY2hVc2VyQXNzZXRzIiwic3VibWl0VXNlclBhcnRGb3JtIiwiZGVsZXRlTmVpZ2hib3IiLCJhZGROZWlnaGJvciIsInNlYXJjaE5laWdoYm9yIiwibG9hZFBsYWNlbWVudEFzc2V0cyIsImNoYW5nZVBsYWNlbWVudCIsImNoYW5nZVJhbmRvbU5laWdoYm9ycyIsImhpZGVQbGFjZW1lbnRBc3NldHMiLCJzZWxlY3RSb3dzIiwiY2hhbmdlTW92ZVBsYWNlbWVudCIsInVwZGF0ZU5laWdoYm9ycyIsImNoYW5nZVBhZ2VMaW1pdCIsImFkZENvbW1lbnQiLCJhZGRDb2xsZWN0aWJsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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TCxDQWlEUSxPQWpEUixFQWlEaUIsa0JBakRqQixFQWlEcUNtaEIsaUVBakRyQyxFOzs7Ozs7Ozs7Ozs7QUMzQ0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvKipcbiAqIEJhc2Ugc2l6ZXNcbiAqXG4gKiBAdHlwZSB7e3NtOiBzdHJpbmcsIGxnOiBzdHJpbmd9fVxuICovXG5leHBvcnQgY29uc3QgU0laRVMgPSB7XG4gICAgc206ICdzbScsXG4gICAgbWQ6ICdtZCcsXG4gICAgbGc6ICdsZycsXG59O1xuIiwiaW1wb3J0IERyb3B6b25lIGZyb20gJ2Ryb3B6b25lJztcblxuLyoqXG4gKiBMb2FkaW5nIHRleHRcbiAqIEl0IHdpbGwgYmUgc2hvd24gYWZ0ZXIgdGhlIHN0YXJ0IG9mIGltYWdlIHVwbG9hZGluZ1xuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IExPQURJTkdfVEVYVCA9ICdMb2FkaW5nLi4uJztcblxuLyoqXG4gKiBEcm9wem9uZSBidWlsZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZHJvcHpvbmVDb250YWluZXJcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZHJvcHpvbmVDb250YWluZXIsIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fZHJvcHpvbmVDb250YWluZXIgPSBkcm9wem9uZUNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5fY2FuY2VsQnV0dG9uID0gJChkcm9wem9uZUNvbnRhaW5lcikuZmluZCgnLmRyb3B6b25lLWNhbmNlbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB1cmwgdG8gdXBsb2FkaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgc2V0VXBsb2FkVXJsKHVybCkge1xuICAgICAgICB0aGlzLl91cGxvYWRVcmwgPSB1cmw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBkZWZhdWx0IHByZXZpZXcgaW1hZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHNldFByZXZpZXcobmFtZSwgdXJsKSB7XG4gICAgICAgIHRoaXMuX3ByZXZpZXcgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBlcnJvciBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBlcnJvcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9lcnJvckNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYW5jZWwgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgY2FuY2VsKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBzdWNjZXNzIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIHN1Y2Nlc3MoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fc3VjY2Vzc0NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGRyb3B6b25lXG4gICAgICogQHJldHVybnMge0Ryb3B6b25lfVxuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgX2Ryb3B6b25lQnVpbGRlciA9IHRoaXM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgYWZ0ZXIgZmFpbFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcHpvbmVGYWlsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChfZHJvcHpvbmVCdWlsZGVyLl9kcm9wem9uZUNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2R6LXN0YXJ0ZWQnKTtcbiAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kei1wcmV2aWV3JykucmVtb3ZlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlndXJhdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHVybDogdGhpcy5fdXBsb2FkVXJsLFxuICAgICAgICAgICAgdGh1bWJuYWlsV2lkdGg6IG51bGwsXG4gICAgICAgICAgICB0aHVtYm5haWxIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICB1cGxvYWRNdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiAnaW1hZ2UvKicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gtY3NyZi10b2tlbic6IENTUkZfVE9LRU5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFNldCBjdXJyZW50IGltYWdlIGluIHRoZSBkcm9wem9uZSBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3ICYmICEhX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldy51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiYWRkZWRmaWxlXCIsIF9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ0aHVtYm5haWxcIiwgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldywgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldy51cmwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEFkZGVkIGZpbGUgaGFuZGxlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQoTE9BRElOR19URVhUKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24gKGZpbGUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3B6b25lRmFpbCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9lcnJvckNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9lcnJvckNhbGxiYWNrKGZpbGUsIHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBTdWNjZXNzIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLm9uKFwic3VjY2Vzc1wiLCBmdW5jdGlvbiAoZmlsZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9zdWNjZXNzQ2FsbGJhY2soZmlsZSwgcmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXIgYnV0dG9uIGhhbmRsZXJcbiAgICAgICAgICogQ2xlYXIgZmlsZSBpbmZvIGluIGRyb3B6b25lXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoISF0aGlzLl9jYW5jZWxCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZHJvcHpvbmVGYWlsKCk7XG4gICAgICAgICAgICAgICAgaWYgKCEhX2Ryb3B6b25lQnVpbGRlci5fY2FuY2VsQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX2Ryb3B6b25lQnVpbGRlci5fY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIG5ldyBEcm9wem9uZSh0aGlzLl9kcm9wem9uZUNvbnRhaW5lciwgey4uLmNvbmZpZywgLi4udGhpcy5fY29uZmlnfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tICcuL2Vycm9ySGFuZGxlcic7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcIi4vc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBIVFRQIFJlcXVlc3QgQnVpbGRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgICB0aGlzLl9tZXRob2QgPSAnZ2V0JztcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLl9lcnJvciA9IGVycm9ySGFuZGxlcjtcbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IHN1Y2Nlc3NIYW5kbGVyO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIH1cblxuICAgIG1ldGhvZChtZXRob2QpIHtcbiAgICAgICAgdGhpcy5fbWV0aG9kID0gbWV0aG9kO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlcnJvcihmbikge1xuICAgICAgICB0aGlzLl9lcnJvciA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN1Y2Nlc3MoZm4pIHtcbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbXBsZXRlKGZuKSB7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2VuZCgpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdGhpcy5fdXJsLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5fbWV0aG9kLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5fZGF0YSxcbiAgICAgICAgICAgIGVycm9yOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhcmVzcG9uc2UucmVzcG9uc2VKU09OKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yKHJlc3BvbnNlLnJlc3BvbnNlSlNPTik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRoaXMuX3N1Y2Nlc3MsXG4gICAgICAgICAgICBjb21wbGV0ZTogdGhpcy5fY29tcGxldGUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQmFzZSBlcnJvciBoYW5kbGVyXG4gKlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdG8gdGhlIHJvdXRlXG4gICAgICovXG4gICAgaWYgKCEhcmVzcG9uc2Uucm91dGUpIHtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJvdXRlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBtYWluIGVycm9yIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBpZiAoISFyZXNwb25zZS5tZXNzYWdlKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgYWxsIG1lc3NhZ2VzXG4gICAgICovXG4gICAgaWYoISFyZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2UuZXJyb3JzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JzW2tleV0ubWFwKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBub3RpZnlFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vUmVxdWVzdEJ1aWxkZXInO1xuIiwiaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcblxuLyoqXG4gKiBCYXNlIGVycm9yIGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgLyoqXG4gICAgICogU2hvdyBtYWluIGVycm9yIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBpZiAoISFyZXNwb25zZS5tZXNzYWdlKSB7XG4gICAgICAgIG5vdGlmeVN1Y2Nlc3MocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL21vZGFsJztcbmltcG9ydCAnLi9vYnNlcnZlcic7XG5pbXBvcnQgJy4vaHR0cCc7XG4iLCJjb25zdCBtb2RhbHNDb250YWluZXIgPSAkKCdib2R5Jyk7XG5cbmNvbnN0IE1PREFMX1NJWkVTID0ge1xuICAgIHNtOiAnbW9kYWwtc20nLFxuICAgIG1kOiAnbW9kYWwtbWQnLFxuICAgIGxnOiAnbW9kYWwtbGcnLFxufTtcblxuLyoqXG4gKiBVbmlxdWUgaW5kZXggb2YgdGhlIG1vZGFsXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqL1xubGV0IG1vZGFsSW5kZXggPSAwO1xuXG4vKipcbiAqIENvdW50ZXIgb2YgdGhlIG1vZGFscyBhdCB0aGUgcGFnZVxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmxldCBtb2RhbENvdW50ZXIgPSAwO1xuXG4vKipcbiAqIE1vZGFsIEJ1aWxkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIG1vZGFsSW5kZXgrKztcbiAgICAgICAgdGhpcy5faWQgPSAnbW9kYWxzLWNvbnRhaW5lci1pdGVtLScgKyBtb2RhbEluZGV4O1xuICAgIH1cblxuICAgIHNpemUoc2l6ZSkge1xuICAgICAgICBpZiAoISFNT0RBTF9TSVpFU1tzaXplXSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IE1PREFMX1NJWkVTW3NpemVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZGVyKGhlYWRlcikge1xuICAgICAgICB0aGlzLl9oZWFkZXIgPSBoZWFkZXI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYm9keShib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHkgPSBib2R5O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZvb3Rlcihmb290ZXIpIHtcbiAgICAgICAgdGhpcy5fZm9vdGVyID0gZm9vdGVyO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRhdGFzZXQoZGF0YXNldCkge1xuICAgICAgICB0aGlzLl9kYXRhc2V0ID0gZGF0YXNldDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfZ2V0SUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBfZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fc2l6ZSA/IHRoaXMuX3NpemUgOiBNT0RBTF9TSVpFUy5tZDtcbiAgICB9XG5cbiAgICBfZ2V0SGVhZGVyKCkge1xuICAgICAgICBpZiAoISF0aGlzLl9oZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiR7dGhpcy5faGVhZGVyfTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgX2dldEZvb3RlcigpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmICghIXRoaXMuX2Zvb3Rlcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gJChgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPjwvZGl2PmApXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgkKGBcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBgKSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2Zvb3Rlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfZ2V0Qm9keSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmICghIXRoaXMuX2JvZHkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICQoYDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+PC9kaXY+YClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2JvZHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGJlZm9yZSBidWlsZCBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgYmVmb3JlQnVpbGQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfYmVmb3JlQnVpbGQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYmVmb3JlQnVpbGRDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGwgYWZ0ZXIgYnVpbGQgbW9kYWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGFmdGVyQnVpbGQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9hZnRlckJ1aWxkKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBhZnRlciBjbG9zZSBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgb25DbG9zZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9vbkNsb3NlQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX29uQ2xvc2UoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25DbG9zZUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW9kYWwoY29udGVudCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogRGF0YSBhdHRyaWJ1dGVzXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGxldCBkYXRhc2V0ID0gW107XG4gICAgICAgIGlmICghIXRoaXMuX2RhdGFzZXQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5fZGF0YXNldCkge1xuICAgICAgICAgICAgICAgIGRhdGFzZXQucHVzaChgZGF0YS0ke25hbWV9PVwiJHt0aGlzLl9kYXRhc2V0W25hbWVdfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaHRtbCA9ICQoYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7IHRoaXMuX2dldElEKCkgfVwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAke2RhdGFzZXQuam9pbignICcpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCAke3RoaXMuX2dldFNpemUoKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmApO1xuXG4gICAgICAgIGlmICghIWNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keShjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIHRoZSBiZWZvcmVCdWlsZCBjYWxsYmFja1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmVmb3JlQnVpbGQoKTtcblxuICAgICAgICBodG1sLmZpbmQoJy5tb2RhbC1jb250ZW50JylcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0SGVhZGVyKCkpXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMuX2dldEJvZHkoKSlcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0Rm9vdGVyKCkpO1xuXG4gICAgICAgIGh0bWwuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG5cbiAgICAgICAgaHRtbC5maW5kKCcuZGF0ZXBpY2tlcicpXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy50YWJsZXN0aWNreWhlYWRlcicpLnN0aWNreVRhYmxlSGVhZGVycygpO1xuXG4gICAgICAgIG1vZGFsc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgdGhlIGFmdGVyQnVpbGQgY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2FmdGVyQnVpbGQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdXBkYXRlIGNvdW50ZXIgb2YgbW9kYWxzIGF0IHRoZSBwYWdlXG4gICAgICAgICAqL1xuICAgICAgICBtb2RhbENvdW50ZXIrKztcblxuICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAub24oJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbENvdW50ZXItLTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIHRoaXMuX2dldElEKCkpXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ2hpZGRlbi5icy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBDYWxsIHRoZSBvbkNsb3NlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5fb25DbG9zZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tb2RhbCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgY291bnRlciBvZiBtb2RhbHMgYXQgdGhlIHBhZ2VcbiAqXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kYWxDb3VudGVyKCkge1xuICAgIHJldHVybiBtb2RhbENvdW50ZXI7XG59XG4iLCJpbXBvcnQgJy4vTW9kYWxCdWlsZGVyJ1xuaW1wb3J0ICcuL21vZGFsQ29uZmlybSdcbiIsImltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5cbi8qKlxuICogTW9kYWwgY29uZmlybVxuICpcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vZGFsQ29uZmlybShtZXNzYWdlLCBjYWxsYmFjaykge1xuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcihtZXNzYWdlKVxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1zdWNjZXNzJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0NvbmZpcm0nLFxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgICAnY2xpY2snOiBjYWxsYmFja1xuICAgICAgICB9KSlcbiAgICAgICAgLm1vZGFsKCk7XG59XG4iLCIvKipcbiAqIE5vdGlmeSBoZWxwZXJcbiAqXG4gKiBAcGFyYW0gbWVzc2FnZVxuICogQHBhcmFtIHR5cGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm90aWZ5KG1lc3NhZ2UsIHR5cGUpIHtcbiAgICAkLm5vdGlmeSh7bWVzc2FnZTogbWVzc2FnZX0se1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB6X2luZGV4OiAxMDUxXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgbm90aWZ5IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBub3RpZnkobWVzc2FnZSwgJ2RhbmdlcicpO1xufVxuIiwiaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgbm90aWZ5KG1lc3NhZ2UsICdzdWNjZXNzJyk7XG59XG4iLCIvKipcbiAqIEV2ZW50IG9ic2VydmVyXG4gKi9cbmNsYXNzIEV2ZW50T2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fbG9nKCdzdWJzY3JpYmUnLCBldmVudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLnB1c2goaGFuZGxlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2ggKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX2xvZygnZGlzcGF0Y2gnLCBldmVudCk7XG5cbiAgICAgICAgaWYgKCEhdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihkYXRhLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdW5zdWJzY3JpYmUgKGV2ZW50LCBzdGF0ZSkge1xuICAgICAgICB0aGlzLl9sb2coJ3Vuc3Vic2NyaWJlJywgZXZlbnQpO1xuXG4gICAgICAgIGlmICghIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICBpZighIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5maWx0ZXIoaGFuZGxlciA9PiBoYW5kbGVyICE9PSBzdGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIERlbGV0ZSBhbGwgc3Vic2NyaWJlcnNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9nKG1ldGhvZCwgZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2cobWV0aG9kLnRvVXBwZXJDYXNlKCksICc6JywgJ1snLCBldmVudCwgJ10nKTtcbiAgICB9XG59XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEV2ZW50T2JzZXJ2ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXI7XG4iLCJpbXBvcnQgJy4vRXZlbnRPYnNlcnZlcic7XG4iLCIvKipcbiAqIFNhdmVkIGl0ZW0gbm90IGZvdW5kXG4gKlxuICogVXNpbmcgaW4gZmFzdFNhdmUgaGFuZGxlclxuICovXG5leHBvcnQgY2xhc3MgU2F2ZWRJdGVtTm90Rm91bmQgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnU2F2ZWRJdGVtTm90Rm91bmQnO1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuXG4vKipcbiAqIEFkZCBlbWJlZCBlbGVtZW50XG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3RhcmdldCcpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gY3VycmVudEJ1dHRvbi5kYXRhKCd0ZW1wbGF0ZScpO1xuICAgIGNvbnN0IGlkUGxhY2Vob2xkZXIgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ2lkcGxhY2Vwb2xkZXInKTtcblxuICAgIGxldCByb3dJZCA9IGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnKTtcbiAgICBjdXJyZW50QnV0dG9uLmRhdGEoJ3Jvd2lkJywgKytyb3dJZCk7XG5cbiAgICBsZXQgZW1iZWRGb3JtID0gJCgnIycrIHRlbXBsYXRlKS5odG1sKCk7XG4gICAgY29uc3QgZW1iZWRCbG9ja0lkID0gcm93SWQgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpLnRvU3RyaW5nKDE2KTtcbiAgICBlbWJlZEZvcm0gPSBlbWJlZEZvcm0ucmVwbGFjZSgvJWVtYmVkQmxvY2tJZCUvZywgZW1iZWRCbG9ja0lkKTtcblxuICAgIGlmICghIWlkUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgZW1iZWRGb3JtID0gZW1iZWRGb3JtLnJlcGxhY2UoIG5ldyBSZWdFeHAoaWRQbGFjZWhvbGRlciwgXCJnXCIpLCByb3dJZClcbiAgICB9XG5cbiAgICAkKCcjJyArIHRhcmdldCkuYXBwZW5kKGVtYmVkRm9ybSk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBkaXNwYXRjaFxuICAgICAqL1xuICAgIGNvbnN0IGV2ZW50ID0gY3VycmVudEJ1dHRvbi5kYXRhKCdldmVudCcpO1xuICAgIGlmIChldmVudCAmJiBldmVudC5sZW5ndGgpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZXZlbnQsIHtcbiAgICAgICAgICAgIGVtYmVkQmxvY2tJZDogZW1iZWRCbG9ja0lkXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24udHJpZ2dlcignYWlfYW5pbWF0aW9uJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICpBamF4IHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQodGhpcykucGFyZW50cygnLmFqYXgtcGFnaW5hdGlvbicpLmRhdGEoJ2NvbnRhaW5lcicpO1xuICAgXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKCcjJyArIGNvbnRhaW5lcikucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBPcGVuIGNvbmZpcm0gbW9kYWwgYmVmb3JlIGFjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmhyZWY7XG4gICAgY29uc3QgcGFyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcihkYXRhU2V0LmhlYWRlcilcbiAgICAgICAgLmZvb3RlcihcbiAgICAgICAgICAgICQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAoZGF0YVNldC5idG5DbGFzcyB8fCAnYnRuLXNtIGJ0bi1zdWNjZXNzJykgKyAnIGJ0bicsXG4gICAgICAgICAgICAgICAgJ3RleHQnOiBkYXRhU2V0LmJ0bk5hbWUgfHwgJ0NvbmZpcm0nLFxuICAgICAgICAgICAgICAgICdjbGljayc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGFTZXQuaGFzT3duUHJvcGVydHkoJ3dpdGhGb3JtJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBwYXJlbnRCdXR0b24uY2xvc2VzdCgnZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXcgaHR0cCh1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1ldGhvZChkYXRhU2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKGRhdGFTZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGF0YVNldC5yZWxvYWQpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRhU2V0LmRpc21pc3MpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gY3VycmVudEJ0bi5jbG9zZXN0KCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZGF0YVNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZGF0YShnZXRGb3JtRGF0YShzYXZlZEl0ZW0pKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX1NFTEVDVE9SID0gJy5mYXN0LXNhdmUtcGFnZS1jb250YWluZXInO1xuZXhwb3J0IGNvbnN0IFBBR0VfU0FWRUQgPSAnUEFHRV9TQVZFRCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1NBVkVfQUxMX0JVVFRPTiA9ICdVUERBVEVfU0FWRV9BTExfQlVUVE9OJztcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJChDT05UQUlORVJfU0VMRUNUT1IpO1xuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLmRhdGFzZXQ7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAoISFkYXRhU2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZGF0YVNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIE1hcmsgZm9ybSdzIGVsZW1lbnRzIGFzIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSAnWVlZWS1NTS1ERCc7XG4gICAgY29uc3QgZGF0ZVJhbmdlSW5wdXRzID0gJCgnI2RhdGUtcmFuZ2UtaW5wdXRzJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSAkKCcjZGF0ZS1yYW5nZS1zZWxlY3QnKS5maW5kKCc6c2VsZWN0ZWQnKTtcbiAgICBjb25zdCBkYXRlRnJvbSA9IGRhdGVSYW5nZUlucHV0cy5maW5kKCcuZmlsdGVyLWZyb20nKTtcbiAgICBjb25zdCBkYXRlVG8gPSBkYXRlUmFuZ2VJbnB1dHMuZmluZCgnLmZpbHRlci10bycpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLnZhbCgpO1xuXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgIGRhdGVSYW5nZUlucHV0cy5jc3Moe1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2luaXRpYWwnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZVJhbmdlSW5wdXRzLmNzcyh7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIGhlaWdodDogMFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZGF0ZUZyb21WYWx1ZSA9ICcnO1xuICAgICAgICBsZXQgZGF0ZVRvVmFsdWUgICA9ICcnO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gZGF0ZVRvVmFsdWUgPSBtb21lbnQoKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5ZXN0ZXJkYXknOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBkYXRlVG9WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXknKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXJyZW50LXdlZWsnOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5kYXkoMSkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5kYXkoNykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMtd2Vlayc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLmRheSgtNikuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5kYXkoMCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3VycmVudC1tb250aCc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5lbmRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cy1tb250aCc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsYXN0LXNldmVuJzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuc3VidHJhY3QoNiwgJ2RheScpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGFzdC10aGlydHknOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5zdWJ0cmFjdCgyOSwgJ2RheScpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBkYXRlVG9WYWx1ZSAgID0gbW9tZW50KCkuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0ZUZyb20udmFsKGRhdGVGcm9tVmFsdWUpO1xuICAgICAgICBkYXRlVG8udmFsKGRhdGVUb1ZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZmFzdFNhdmUgZnJvbSBcIi4vZmFzdFNhdmVcIjtcbmltcG9ydCBhZGRFbWJlZCBmcm9tIFwiLi9hZGRFbWJlZFwiO1xuaW1wb3J0IHJlbW92ZUVtYmVkIGZyb20gXCIuL3JlbW92ZUVtYmVkXCI7XG5pbXBvcnQgc3VibWl0Rm9ybSBmcm9tIFwiLi9zdWJtaXRGb3JtXCI7XG5pbXBvcnQgYWpheFBhZ2luYXRpb24gZnJvbSBcIi4vYWpheFBhZ2luYXRpb25cIjtcbmltcG9ydCBjb25maXJtTW9kYWwgZnJvbSBcIi4vY29uZmlybU1vZGFsXCI7XG5pbXBvcnQgcGFnZUxpbWl0IGZyb20gXCIuL3BhZ2VMaW1pdFwiO1xuaW1wb3J0IG1vZGFsRGF0YSBmcm9tIFwiLi9tb2RhbERhdGFcIjtcbmltcG9ydCBmaWx0ZXJEYXRlUmFuZ2UgZnJvbSBcImhhbmRsZXJzL2ZpbHRlckRhdGVSYW5nZVwiO1xuaW1wb3J0IGZhc3RTYXZlUGFnZSwge0NPTlRBSU5FUl9TRUxFQ1RPUiwgbWFya0NoYW5nZWR9IGZyb20gXCIuL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IHRhYmxlU29ydGVyIGZyb20gXCJ0YWJsZXNvcnRlclwiO1xuaW1wb3J0IHN0aWNreUhlYWRlcnMgZnJvbSBcInN0aWNreS10YWJsZS1oZWFkZXJzXCI7XG5pbXBvcnQgJ3RhYmxlc29ydGVyL2Rpc3QvY3NzL3RoZW1lLmRlZmF1bHQubWluLmNzcyc7XG5cbiQoZG9jdW1lbnQpXG4gICAgLnNjcm9sbChmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gMzAwKSB7XG4gICAgICAgICAgICAkKCcudmlzaXQtc3RhdHMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhlaWdodCgwKS5jc3MoJ2Rpc3BsYXknLCAndGFibGUtY29sdW1uLWdyb3VwJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy52aXNpdC1zdGF0cycpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0YWJsZXNvcnRlciA9ICQoJy50YWJsZXNvcnRlcicpO1xuICAgICAgICBpZih0YWJsZXNvcnRlcikge1xuICAgICAgICAgICAgdGFibGVzb3J0ZXIudGFibGVzb3J0ZXIoKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcbiAgICAgICAgICAgIHRhYmxlc29ydGVyLmZpbmQoJ3RoZWFkJykuY3NzKCdiYWNrZ3JvdW5kJywgJyNmZmYnKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gbW9kYWwgd2l0aCBkYXRhIGZyb20gc2VydmVyIGJ5IHJlcXVlc3RcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LW1vZGFsLWFjdGlvbicsIG1vZGFsRGF0YSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gY29uZmlybSBtb2RhbFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtY29uZmlybS1hY3Rpb24nLCBjb25maXJtTW9kYWwpXG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgZm9ybSBkYXRhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1zdWJtaXQtYWN0aW9uJywgc3VibWl0Rm9ybSlcblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBmb3JtIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LXBhZ2luYXRpb24gYScsIGFqYXhQYWdpbmF0aW9uKVxuXG4gICAgLyoqXG4gICAgICogQWRkIGVtYmVkIGVsZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtZW1iZWQnLCBhZGRFbWJlZClcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbWJlZCBlbGVtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucm0tZW1iZWQnLCByZW1vdmVFbWJlZClcblxuICAgIC8qKlxuICAgICAqIEZhc3Qgc2F2ZSB0aGUgZGF0YSBvZiBhbiBlbnRpdHlcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5mYXN0LXNhdmUnLCBmYXN0U2F2ZSlcblxuICAgIC8qKlxuICAgICAqIFNldCBwYWdlIGxpbWl0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnBhZ2UtbGltaXQnLCBwYWdlTGltaXQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIGlucHV0cyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCBgJHtDT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZClcblxuICAgIC5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRlUmFuZ2UgPSAkKCcjZGF0ZS1yYW5nZS1zZWxlY3QnKTtcbiAgICAgICAgaWYgKGRhdGVSYW5nZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpbHRlckRhdGVSYW5nZSgpO1xuICAgICAgICAgICAgZGF0ZVJhbmdlLmNoYW5nZShmaWx0ZXJEYXRlUmFuZ2UpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbmZ1bmN0aW9uIGluaXRTdGlja3koKSB7XG4gICAgJCgnLnRhYmxlc29ydGVyJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XG59XG5cbiQoXCIudGFibGUtcmVzcG9uc2l2ZVwiKS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIGluaXRTdGlja3koKTtcbn0pO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBwYWdlXG4gKi9cbiQoJy5mYXN0LXNhdmUtcGFnZScpLmNsaWNrKGZhc3RTYXZlUGFnZSk7XG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBPcGVuIG1vZGFsIHdpdGggZm9ybSBieSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgIGlmIChjdXJyZW50QnV0dG9uLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjdXJyZW50QnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXG4gICAgICAgIC5tZXRob2QodGhpcy5kYXRhc2V0Lm1ldGhvZCB8fCAnZ2V0JylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLnNpemUoU0laRVMubGcpXG4gICAgICAgICAgICAgICAgLmRhdGFzZXQoe1xuICAgICAgICAgICAgICAgICAgICByZWxvYWQ6IHRoaXMuZGF0YXNldC5yZWxvYWQgfHwgMSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5oZWFkZXIodGhpcy5kYXRhc2V0LmhlYWRlcilcbiAgICAgICAgICAgICAgICAuYWZ0ZXJCdWlsZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuZGF0YXNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmNsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5jbG9zZUV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tb2RhbChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFNldCBwYWdlIGxpbWl0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBocmVmID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaHJlZi5zZWFyY2hQYXJhbXMuc2V0KCdwYWdlX2xpbWl0JywgJCh0aGlzKS52YWwoKSk7XG4gICAgaHJlZi5zZWFyY2hQYXJhbXMuZGVsZXRlKCdwYWdlJyk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmLnRvU3RyaW5nKCk7XG59XG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuXG4vKipcbiAqIFJlbW92ZSBlbWJlZGVkIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSAhIXRoaXMuZGF0YXNldC5wYXJlbnQgPyAkKHRoaXMpLmNsb3Nlc3QodGhpcy5kYXRhc2V0LnBhcmVudCkgOiAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgaWYgKCF0aGlzLmRhdGFzZXQuaWQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKCdBcmUgeW91IHN1cmU/JylcbiAgICAgICAgLmZvb3RlcigkKCc8YnV0dG9uLz4nLCB7XG4gICAgICAgICAgICAnY2xhc3MnOiAnYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJyxcbiAgICAgICAgICAgICd0ZXh0JzogJ0RlbGV0ZScsXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcbiAgICAgICAgICAgICdjbGljayc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7Z2V0TW9kYWxDb3VudGVyfSBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5cbi8qKlxuICogU3VibWl0IGZvcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuXG4gICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgIG5ldyBodHRwKHRoaXMuaHJlZilcbiAgICAgICAgLmRhdGEoY3VycmVudEJ1dHRvbi5jbG9zZXN0KCdmb3JtJykuc2VyaWFsaXplQXJyYXkoKSlcbiAgICAgICAgLm1ldGhvZCh0aGlzLmRhdGFzZXQubWV0aG9kIHx8ICdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoISF0aGlzLmRhdGFzZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaCh0aGlzLmRhdGFzZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgIT09ICdlcnJvcicgJiYgY2FuUmVsb2FkKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLmRhdGFzZXQuZGlzbWlzcykgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QnV0dG9uLmNsb3Nlc3QoJy5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50QnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2FuIHJlbG9hZCB0aGUgcGFnZVxuICpcbiAqIEBwYXJhbSBidXR0b25cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjYW5SZWxvYWQoYnV0dG9uKSB7XG4gICAgaWYgKHBhcnNlSW50KGJ1dHRvbi5kYXRhc2V0LnJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgaWYgKGdldE1vZGFsQ291bnRlcigpIDwgMikge1xuICAgICAgICAgICAgY29uc3QgZGF0YVJlbG9hZCA9ICQoYnV0dG9uKS5jbG9zZXN0KCcubW9kYWwnKS5kYXRhKCdyZWxvYWQnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVJlbG9hZCA9PT0gdHlwZW9mIHVuZGVmaW5lZCB8fCBkYXRhUmVsb2FkID09PSBmYWxzZSB8fCBwYXJzZUludChkYXRhUmVsb2FkKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGdldFN1YkZvbGRlciBmcm9tIFwiLi9nZXRTdWJGb2xkZXJcIjtcblxuLyoqXG4gKiBHZXQgZmlsZSBwYXRoIGZyb20gc3RvcmFnZSB3aXRoIHN1YiBmb2xkZXJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJvb3RGb2xkZXIgUm9vdCBmb2xkZXIgaW4gdGhlIHN0b3JhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAgIEZpbGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyb290Rm9sZGVyLCBmaWxlTmFtZSkge1xuICAgIHJldHVybiAnL3N0b3JhZ2UvJyArIHJvb3RGb2xkZXIgKyAnLycgKyBnZXRTdWJGb2xkZXIoZmlsZU5hbWUpICsgJy8nICsgZmlsZU5hbWU7XG59XG4iLCIvKipcbiAqIEdldCBmb3JtIGRhdGFcbiAqXG4gKiBAcGFyYW0ge2pRdWVyeX0gZm9ybSBGb3JtIGVsZW1lbnRcbiAqXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xuXG4gICAgbGV0IGZvcm1JdGVtcyA9IGZvcm0uZmluZCgnaW5wdXQsIHNlbGVjdCcpO1xuICAgIGlmICghZm9ybUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBmb3JtSXRlbXMgPSBmb3JtO1xuICAgIH1cblxuICAgIGZvcm1JdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRJdGVtLmF0dHIoJ3R5cGUnKSkge1xuICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGZvcm1EYXRhW2N1cnJlbnRJdGVtLmF0dHIoJ25hbWUnKV0gPSAhIWN1cnJlbnRJdGVtLnByb3AoIFwiY2hlY2tlZFwiICkgKiAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVtjdXJyZW50SXRlbS5hdHRyKCduYW1lJyldID0gY3VycmVudEl0ZW0udmFsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmb3JtRGF0YTtcbn1cbiIsImltcG9ydCBtZDUgZnJvbSAnYmx1ZWltcC1tZDUnO1xuXG4vKipcbiAqIEdldCBzdWIgZm9sZGVycyBvZiB0aGUgZmlsZVxuICpcbiAqIFJlc3VsdCBvZiB0aGUgZnVuY3Rpb24gbG9va3MgbGlrZTogYTEvYjIvYzNcbiAqIFdoZXJlIG1kNSBvZiB0aGUgZmlsZSA9IGExYjJjMy4uLi4uLi4uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIHRoZSBmaWxlXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZpbGVOYW1lKSB7XG4gICAgY29uc3QgZmlsZU5hbWVIYXNoID0gbWQ1KGZpbGVOYW1lKS5zdWJzdHJpbmcoMCwgNik7XG4gICAgY29uc3QgcGF0aFBhcnRzID0gZmlsZU5hbWVIYXNoLm1hdGNoKC8uezEsMn0vZyk7XG4gICAgcmV0dXJuIHBhdGhQYXJ0cy5qb2luKCcvJyk7XG59XG4iLCIvKipcbiAqIGpRdWVyeVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xud2luZG93LiQgPSAkO1xud2luZG93LmpRdWVyeSA9ICQ7XG5cbi8qKlxuICogQm9vdHN0cmFwXG4gKi9cbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwJztcblxuLyoqXG4gKiBCb290c3RyYXAgQ2NvbG9ycGlja2VyXG4gKi9cbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyJztcbmltcG9ydCAnYm9vdHN0cmFwLWNvbG9ycGlja2VyL2Rpc3QvY3NzL2Jvb3RzdHJhcC1jb2xvcnBpY2tlci5jc3MnO1xuXG4vKipcbiAqIEZvbnQgQXdlc29tZVxuICovXG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9zY3NzL2ZvbnQtYXdlc29tZS5zY3NzJztcblxuLyoqXG4gKiBFeHRlcm5hbCBtb2R1bGVzXG4gKiBUT0RPOiBnZXQgYnkgbnBtXG4gKi9cbmltcG9ydCAnLi92ZW5kb3IvYW5pbWF0ZSc7XG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1jb25maXJtYXRpb24nO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAtbm90aWZ5JztcbmltcG9ydCAnLi92ZW5kb3Ivc2VsZWN0Mic7XG5pbXBvcnQgJy4vdmVuZG9yL2Vra28tbGlnaHRib3gnO1xuaW1wb3J0ICcuL3ZlbmRvci90aGVtZSc7XG5cbi8qKlxuICogQ29tcG9uZW50c1xuICovXG5pbXBvcnQgJy4vY29tcG9uZW50cyc7XG5cbi8qKlxuICogSGFuZGxlcnNcbiAqL1xuaW1wb3J0ICcuL2hhbmRsZXJzJztcblxuLyoqXG4gKiBTdHlsZXNcbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuLyoqXG4gKiBNb2R1bGVzIGxvYWRlclxuICovXG5jb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcbmlmIChwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAvKipcbiAgICAgKiBUbyBjcmVhdGluZyBkaWZmZXJlbnQgZmlsZXMgZm9yIGVhY2ggbW9kdWxlXG4gICAgICogKERvbid0IGZvcmdldCBucG0gaSAtLXNhdmUtZGV2IGJ1bmRsZS1sb2FkZXIpXG4gICAgICogY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnYnVuZGxlLWxvYWRlciFtb2R1bGVzJywgdHJ1ZSwgL2luZGV4XFwuanMkLyk7XG4gICAgICovXG4gICAgY29uc3QgbW9kdWxlcyA9IHJlcXVpcmUuY29udGV4dCgnbW9kdWxlcycsIHRydWUsIC9cXC5cXC9bXFx3LV9dK1xcL21vZHVsZVxcLmpzJC8pO1xuICAgIG1vZHVsZXMua2V5cygpLm1hcChtb2R1bGUgPT4ge1xuICAgICAgICBjb25zdCBtb2R1bGVJdGVtcyA9IG1vZHVsZS5zcGxpdCgnLycpO1xuXG4gICAgICAgIGlmIChtb2R1bGVJdGVtc1sxXSA9PT0gcGF0aFsxXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01PRFVMRTonLCBwYXRoWzFdKTtcbiAgICAgICAgICAgIG1vZHVsZXMobW9kdWxlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3ViTW9kdWxlcyA9IHJlcXVpcmUuY29udGV4dCgnbW9kdWxlcycsIHRydWUsIC9tb2R1bGVzKC4qKW1vZHVsZVxcLmpzJC8pO1xuICAgIHN1Yk1vZHVsZXMua2V5cygpLm1hcChtb2R1bGUgPT4ge1xuICAgICAgICBjb25zdCBtb2R1bGVJdGVtcyA9IG1vZHVsZS5zcGxpdCgnLycpO1xuXG4gICAgICAgIGlmIChtb2R1bGVJdGVtc1sxXSA9PT0gcGF0aFsxXSAmJiBtb2R1bGVJdGVtc1szXSA9PT0gcGF0aFsyXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NVQiBNT0RVTEU6JywgcGF0aFsyXSk7XG4gICAgICAgICAgICBzdWJNb2R1bGVzKG1vZHVsZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURUR9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCBzZWxmKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3QgZWRpdEJ0biA9ICQoJyMnICsgdGhpcy5kYXRhc2V0LnRlbXBsYXRlSWQpXG4gICAgICAgICAgICAuaHRtbCgpXG4gICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCh0aGlzLmRhdGFzZXQudGVtcGxhdGVQbGFjZWhvbGRlciwgXCJnXCIpLCBkYXRhLmF3YXJkX2lkKVxuICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAoJyVmaWVsZF9uYW1lJScsIFwiZ1wiKSwgdGhpcy5kYXRhc2V0LmZpZWxkTmFtZSB8fCAnJyk7XG5cbiAgICAgICAgY3VycmVudEJ0bi5wYXJlbnQoKS5hcHBlbmQoZWRpdEJ0bik7XG4gICAgICAgIGN1cnJlbnRCdG4ucmVtb3ZlKCk7XG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFXQVJEX0NSRUFURUQsIGRhdGEpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgc2VsZik7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZCkuaHRtbCgpXG4gICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJWZpZWxkX25hbWUlJyksIHRoaXMuZGF0YXNldC5maWVsZE5hbWUgfHwgJycpO1xuXG4gICAgICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XG5cbiAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmQoY3JlYXRlQnRuKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0RmlsZVBhdGggZnJvbSBcImhlbHBlcnMvZ2V0RmlsZVBhdGhcIjtcbmltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdCBhZnRlciB0aGUgbW9kYWwgb3BlbmVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChFVkVOVF9OQU1FKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEVWRU5UX05BTUUsICgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGNvbnRhaW5lclxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcHpvbmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpZXcgVVJMIGhpZGRlbiBpbnB1dFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcHJldmlld1VSTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihkcm9wem9uZUVsZW1lbnQpXG4gICAgICAgICAgICAuc2V0VXBsb2FkVXJsKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LnVybClcbiAgICAgICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICQoJyNwcmV2aWV3LXVybCcpLnZhbCgnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnI3ByZXZpZXctdXJsJykudmFsKCcnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgICAgICAgICBwcmV2aWV3VVJMLnZhbHVlID0gcmVzcG9uc2UuZmlsZV9uYW1lO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBwcmV2aWV3XG4gICAgICAgICAqL1xuICAgICAgICBpZiAocHJldmlld1VSTC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRyb3B6b25lQnVpbGRlclxuICAgICAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3VVJMLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC5mb2xkZXIsIHByZXZpZXdVUkwudmFsdWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XG4gICAgfSk7XG59XG5cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge1VQREFURV9TQVZFX0FMTF9CVVRUT059IGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShVUERBVEVfU0FWRV9BTExfQlVUVE9OLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBjb25zdCBzYXZlQWxsQnV0dG9uID0gJCgnI3VwZGF0ZS1hbGwnKTtcbiAgICAgICAgY29uc3QgY291bnRlciA9ICQoJyN1cGRhdGUtYWxsIC5jb3VudCcpO1xuXG4gICAgICAgIGxldCBjb3VudCA9ICQoJy5mYXN0LXNhdmUtY29udGFpbmVyLmNoYW5nZWQnKS5sZW5ndGg7XG5cbiAgICAgICAgaWYoY291bnQgPiAwKSB7XG4gICAgICAgICAgICBzYXZlQWxsQnV0dG9uLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNhdmVBbGxCdXR0b24uaGlkZSgpXG4gICAgICAgIH1cblxuICAgICAgICBjb3VudGVyLmh0bWwoY291bnQpO1xuICAgIH0pO1xufVxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FjdGlvbi1sb2cvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2FjdGlvbi1sb2cvbW9kdWxlLmpzXCIsXG5cdFwiLi9hY3Rpb24tdHlwZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYWN0aW9uLXR5cGUvbW9kdWxlLmpzXCIsXG5cdFwiLi9hZGQtbWUvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2FkZC1tZS9tb2R1bGUuanNcIixcblx0XCIuL2Fubm91bmNlbWVudHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9hc3NldHMtbG9nL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hc3NldHMtbG9nL21vZHVsZS5qc1wiLFxuXHRcIi4vYXNzZXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hc3NldHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9hd2FyZC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYXdhcmQvbW9kdWxlLmpzXCIsXG5cdFwiLi9iYW5uZXIvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Jhbm5lci9tb2R1bGUuanNcIixcblx0XCIuL2Ntcy1hZHBzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jbXMtYWRwcy9tb2R1bGUuanNcIixcblx0XCIuL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvbW9kdWxlLmpzXCIsXG5cdFwiLi9jb2xsZWN0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qc1wiLFxuXHRcIi4vY3JvcC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY3JvcC9tb2R1bGUuanNcIixcblx0XCIuL2RhaWx5LWxvb3QvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RhaWx5LWxvb3QvbW9kdWxlLmpzXCIsXG5cdFwiLi9kZWZhdWx0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kZWZhdWx0L21vZHVsZS5qc1wiLFxuXHRcIi4vZGVwbG95L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9kZXBsb3kvbW9kdWxlLmpzXCIsXG5cdFwiLi9kcGEvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RwYS9tb2R1bGUuanNcIixcblx0XCIuL2R5ZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZHllL21vZHVsZS5qc1wiLFxuXHRcIi4vZ2lmdC13cmFwL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9naWZ0LXdyYXAvbW9kdWxlLmpzXCIsXG5cdFwiLi9saW5rZWQtYXNzZXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vbG9jYWxpemF0aW9uL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9sb2NhbGl6YXRpb24vbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWdpYy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qc1wiLFxuXHRcIi4vbWFrZXVwLWtpdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanNcIixcblx0XCIuL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qc1wiLFxuXHRcIi4vbWVhbC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWVhbC9tb2R1bGUuanNcIixcblx0XCIuL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9uZWlnaGJvci1hY3Rpdml0eS9tb2R1bGUuanNcIixcblx0XCIuL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9uZXdzLWdpZnRzLWxvZy9tb2R1bGUuanNcIixcblx0XCIuL3Byb2R1Y3QvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Byb2R1Y3QvbW9kdWxlLmpzXCIsXG5cdFwiLi9wdXJjaGFzZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvcHVyY2hhc2UvbW9kdWxlLmpzXCIsXG5cdFwiLi9zZXR0aW5ncy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9tb2R1bGUuanNcIixcblx0XCIuL3Nob3AtcmVsZWFzZXMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3AtcmVsZWFzZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi9zaG9wLXN0YXRzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qc1wiLFxuXHRcIi4vc291bmQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NvdW5kL21vZHVsZS5qc1wiLFxuXHRcIi4vc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zdWJ0eXBlLWF0dHJpYnV0ZXMvbW9kdWxlLmpzXCIsXG5cdFwiLi90YW1hdG9vbC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdGFtYXRvb2wvbW9kdWxlLmpzXCIsXG5cdFwiLi91c2Vycy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvdXNlcnMvbW9kdWxlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbW9kdWxlcyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLlxcXFwvW1xcXFx3LV9dK1xcXFwvbW9kdWxlXFxcXC5qcyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3NldHRpbmdzL21vZHVsZXMvYWlfYW5pbWF0aW9uL21vZHVsZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL21vZHVsZXMgc3luYyByZWN1cnNpdmUgbW9kdWxlcyguKiltb2R1bGVcXFxcLmpzJFwiOyIsImltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAub24oJ2NsaWNrJywgJyNwcm9kdWN0X2lkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjcHJvZHVjdF9pZCcpLnByZXYoJy5zZWxlY3QyLWNvbnRhaW5lcicpLmZpbmQoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKS5mb2N1cygpXG4gICAgfSlcblxuICAgIC5vbignY2xpY2snLCAnLnJlcG9ydHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSAkKFwiI2h0bWwtY29udGVudC1ob2xkZXJcIik7IC8vIGdsb2JhbCB2YXJpYWJsZVxuICAgICAgICAgICAgbGV0IGNhbnZhc19oYW5kbGVyID0gJChcIiNjYW52YXNfaGFuZGxlclwiKTsgLy8gZ2xvYmFsIHZhcmlhYmxlXG5cbiAgICAgICAgICAgIGNvbnN0IGNvcHlfZWxlID0gZWxlbWVudC5nZXQoMCkuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY2FudmFzX2hhbmRsZXIuYXBwZW5kKGNvcHlfZWxlKTtcbiAgICAgICAgICAgIGNhbnZhc19oYW5kbGVyLmNzcygnaGVpZ2h0JywgZWxlbWVudC5zY3JvbGxIZWlnaHQgKyAyMCk7XG4gICAgICAgICAgICBjYW52YXNfaGFuZGxlci5jc3MoJ3dpZHRoJywgZWxlbWVudC5zY3JvbGxXaWR0aCArIDEwKTtcblxuICAgICAgICAgICAgaHRtbDJjYW52YXMoY29weV9lbGUsIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxYOiAwLFxuICAgICAgICAgICAgICAgIHNjcm9sbFk6IC0xLFxuICAgICAgICAgICAgICAgIHVzZUNPUlM6IHRydWUsXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IGltYWdlRGF0YS5yZXBsYWNlKC9eZGF0YTppbWFnZVxcL3BuZy8sIFwiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIik7XG4gICAgICAgICAgICAgICAgJCgnI2NhbnZhcy1kYXRhJykudmFsKG5ld0RhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDUwMClcbiAgICB9KTtcbiIsImV4cG9ydCBjb25zdCBBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCA9ICdBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCc7XG5leHBvcnQgY29uc3QgREVMVEFfVElNRV9BVFRSSUJVVEUgPSAxOTtcbiIsIi8qKlxuICogQ29sbGFwc2Ugc3RhdGVcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgnLmFjdGlvbi10eXBlLXN0YXRlJyk7XG4gICAgcGFyZW50LnRvZ2dsZUNsYXNzKCdkb3duJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIENvbGxhcHNlIHN0YXRlc1xuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCgnLmFjdGlvbi10eXBlLXN0YXRlJykudG9nZ2xlQ2xhc3MoJ2Rvd24nKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUR9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgU3RhdGUgb2YgdGhlIEFjdGlvbiBUeXBlXG4gKiBhdCB0aGUgbW9kYWxcbiAqIHdpdGggY29uZmlybVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRFbGVtZW50LmNsb3Nlc3QoJy5hY3Rpb24tdHlwZS1zdGF0ZScpO1xuXG4gICAgaWYgKCFjdXJyZW50RWxlbWVudC5kYXRhKCdpZCcpKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsIHt9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBNb2RhbEJ1aWxkZXIoKVxuICAgICAgICAuc2l6ZShTSVpFUy5zbSlcbiAgICAgICAgLmhlYWRlcignQXJlIHlvdSBzdXJlPycpXG4gICAgICAgIC5mb290ZXIoJCgnPGJ1dHRvbi8+Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ2J0biBidG4tc20gYnRuLWRhbmdlcicsXG4gICAgICAgICAgICAndGV4dCc6ICdEZWxldGUnLFxuICAgICAgICAgICAgJ2RhdGEtZGlzbWlzcyc6ICdtb2RhbCcsXG4gICAgICAgICAgICAnY2xpY2snOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3IFJlcXVlc3RCdWlsZGVyKGN1cnJlbnRFbGVtZW50LmRhdGEoJ3VybCcpKVxuICAgICAgICAgICAgICAgICAgICAubWV0aG9kKCdERUxFVEUnKVxuICAgICAgICAgICAgICAgICAgICAuc3VjY2VzcygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwge30pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc2VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSlcbiAgICAgICAgLm1vZGFsKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRH0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogVXBkYXRlIGluZGV4ZXMgb2YgdGhlIHN0YXRlc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCAoKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG5cbiAgICAgICAgJCgnLmluZGV4JykuZWFjaCgoXywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgJChpdGVtKS52YWwoaW5kZXgrKyk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgdXBkYXRlSW5kZXhlcyBmcm9tIFwiLi9saXN0ZW5lcnMvdXBkYXRlSW5kZXhlc1wiO1xuaW1wb3J0IGNvbGxhcHNlU3RhdGUgZnJvbSBcIi4vaGFuZGxlcnMvY29sbGFwc2VTdGF0ZVwiO1xuaW1wb3J0IGNvbGxhcHNlU3RhdGVzIGZyb20gXCIuL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzXCI7XG5pbXBvcnQgcmVtb3ZlQWN0aW9uVHlwZVN0YXRlIGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZUFjdGlvblR5cGVTdGF0ZVwiO1xuaW1wb3J0IHtERUxUQV9USU1FX0FUVFJJQlVURX0gZnJvbSBcIm1vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBpbmRleGVzXG4gKi9cbnVwZGF0ZUluZGV4ZXMoKTtcblxuJChkb2N1bWVudClcblxuICAgIC5vbignY2xpY2snLCAnI3Byb2R1Y3RfaWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9kdWN0X2lkJyk7XG4gICAgICAgICQoJyNwcm9kdWN0X2lkJykucHJldignLnNlbGVjdDItY29udGFpbmVyJykuZmluZCgnLnNlbGVjdDItc2VhcmNoX19maWVsZCcpLmZvY3VzKClcbiAgICB9KVxuXG4gICAgLm9uKCdjaGFuZ2UnLCAnW25hbWUkPVwiW3RpbWVfdHlwZV1cIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaSA9ICQodGhpcykuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lSGlkZGVuID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlthdHRyaWJ1dGVzXVsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVt2YWx1ZV1cIl0nKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lRGlzcGxheSA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdW2Rpc3BsYXldXCJdJyk7XG5cbiAgICAgICAgZGVsdGFUaW1lRGlzcGxheS52YWwoZGVsdGFUaW1lSGlkZGVuLmRhdGEoJ3ZhbHVlJykgLyBwYXJzZUludCgkKHRoaXMpLnZhbCgpKSk7XG4gICAgfSlcblxuICAgIC5vbignaW5wdXQnLCAnW25hbWUkPVwiW2F0dHJpYnV0ZXNdWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW3ZhbHVlXVtkaXNwbGF5XVwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudExpID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpO1xuICAgICAgICBjb25zdCB0aW1lVHlwZSA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbdGltZV90eXBlXVwiXScpLnZhbCgpO1xuICAgICAgICBjb25zdCBkZWx0YVRpbWVIaWRkZW4gPSBjdXJyZW50TGkuZmluZCgnW25hbWUkPVwiW2F0dHJpYnV0ZXNdWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW3ZhbHVlXVwiXScpO1xuXG4gICAgICAgIGRlbHRhVGltZUhpZGRlbi52YWwoJCh0aGlzKS52YWwoKSAqIHRpbWVUeXBlKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQ29sbGFwc2Ugb25lIHN0YXRlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29sbGFwc2UtbGluaycsIGNvbGxhcHNlU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZSBhbGwgc3RhdGVzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaGlkZS1zdGF0ZXMnLCBjb2xsYXBzZVN0YXRlcylcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJtLWFjdGlvbi10eXBlLXN0YXRlcycsIHJlbW92ZUFjdGlvblR5cGVTdGF0ZSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuc2F2ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoY29udGFpbmVyLmZpbmQoXCIuY2hhbmdlZCBpbnB1dFwiKSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICBjb250YWluZXIuZmluZCgndHIuY2hhbmdlZCcpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnNhdmUtcGFnZScsIHNhdmVTdGF0ZSk7XG4iLCJleHBvcnQgY29uc3QgQU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk0gPSAnQU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk0sIHNlbGYpO1xuXG4gICAgICAgICQoJy5kYXRldGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9DUkVBVEVELCBDTE9TRV9BV0FSRF9NT0RBTH0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgYW5ub3VuY2VtZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZCh0aGlzKSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcykoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmUgb24gbW9kYWwgY2xvc2VcbiAgICAgKi9cbiAgICAucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKENMT1NFX0FXQVJEX01PREFMLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFKTtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuLyoqXG4gKiBSdW4gdGhlIHNob3cgZm9ybSBoYW5kbGVyLlxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXG4gKi9cbiQoJy5zaG93LWZvcm0nKVxuICAgIC5jbGljayhzaG93Rm9ybSk7XG4iLCJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAub24oJ2NsaWNrJywgJy50b2dnbGVfaWRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLm5leHQoKS5oZWlnaHQoKSA+IDApIHtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgkKHRoaXMpLnRleHQoKS5yZXBsYWNlKCdIaWRlJywgJ1Nob3cnKSk7XG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5oZWlnaHQoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgnU2hvdycsICdIaWRlJykpO1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgnU2hvdycsICdIaWRlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5oZWlnaHQoJzEwMCUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBTVUJfVFlQRVMgLSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcbiAqIEluaXRlZCBpbiBhc3NldC9mb3JtLmJsYWRlLnBocFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgc2V0U3VidHlwZXModGhpcy52YWx1ZSwgdGhpcy5kYXRhc2V0LnN1YnR5cGUpO1xufVxuXG5jb25zdCBhc3NldEZvcm1TdWJ0eXBlID0gJChcIiNzdWJ0eXBlXCIpO1xuY29uc3QgYXNzZXRGb3JtQWN0aW9uVHlwZSA9ICQoJyNhc3NldC1mb3JtLWFjdGlvbi10eXBlJyk7XG5jb25zdCBhc3NldEZvcm1Db2xsZWN0aW9uID0gJCgnI2Fzc2V0LWZvcm0tY29sbGVjdGlvbicpO1xuY29uc3QgcHJpY2VzID0gJCgnLnByaWNlcycpO1xuXG5mdW5jdGlvbiBzZXRTdWJ0eXBlcyh0eXBlLCBzdWJ0eXBlKSB7XG4gICAgYXNzZXRGb3JtU3VidHlwZVxuICAgICAgICAuZW1wdHkoKVxuICAgICAgICAuc2VsZWN0Mih7XG4gICAgICAgICAgICBkYXRhOiBTVUJfVFlQRVNbdHlwZV1cbiAgICAgICAgfSlcbiAgICAgICAgLnZhbChzdWJ0eXBlKVxuICAgICAgICAuY2hhbmdlKCk7XG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IHN0YXRlXG4gICAgICovXG4gICAgaGlkZShhc3NldEZvcm1BY3Rpb25UeXBlKTtcbiAgICBoaWRlKGFzc2V0Rm9ybUNvbGxlY3Rpb24pO1xuICAgIHNob3cocHJpY2VzKTtcblxuICAgIHN3aXRjaCAocGFyc2VJbnQodHlwZSkpIHtcblxuICAgICAgICAvLyBGdXJuaXR1cmVcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgc2hvdyhhc3NldEZvcm1BY3Rpb25UeXBlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIENsb3RoZXNcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgc2hvdyhhc3NldEZvcm1Db2xsZWN0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIEJvZHkgUGFydFxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBoaWRlKHByaWNlcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhpZGUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gc2hvdyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaGlkZScpO1xufSIsIi8qKlxuICogSGFuZGxlciBmb3IgY29weSBhc3NldHMgaWRzIHRvIGNsaXBib2FyZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weUFzc2V0cyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYXNzZXRJZHNGaWVsZCA9ICQoJ3RleHRhcmVhW25hbWU9XCJhc3NldF9pZHNcIl0nKTtcbiAgICBjb25zdCB3aXRoTmFtZSA9ICQoJ2lucHV0W25hbWU9XCJ3aXRoX25hbWVcIl0nKTtcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcblxuICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCQoaXRlbSkpO1xuICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcbiAgICAgICAgbGV0IGFzc2V0TmFtZSA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtbmFtZScpO1xuICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICBpZih3aXRoTmFtZS5wcm9wKFwiY2hlY2tlZFwiKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goJ1xcbicgKyBhc3NldElkICsgJyAnICsgYXNzZXROYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpZiAoYXNzZXRJZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcbiAgICAgICAgICAgIGxldCBhc3NldE5hbWUgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LW5hbWUnKTtcbiAgICAgICAgICAgIGlmKGFzc2V0SWQpIHtcbiAgICAgICAgICAgICAgICBpZih3aXRoTmFtZS5wcm9wKFwiY2hlY2tlZFwiKSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goJ1xcbicgKyBhc3NldElkICsgJyAnICsgYXNzZXROYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXNzZXRJZHNGaWVsZC52YWwoYXNzZXRJZHMpO1xuICAgIGFzc2V0SWRzRmllbGQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBkb3dubG9hZCBhc3NldHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkQXNzZXRzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFzc2V0SWRzID0gW107XG5cbiAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBjb25zb2xlLmxvZygkKGl0ZW0pKTtcbiAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgIGlmKGFzc2V0SWQpIHtcbiAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgaWYgKGFzc2V0SWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICAgICAgaWYoYXNzZXRJZCkge1xuICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgd2luZG93LmxvY2F0aW9uID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpICsgJyZpZHM9JyArIGFzc2V0SWRzLmpvaW4oJywnKTtcbn1cbiIsImltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbmV3IFJlcXVlc3RCdWlsZGVyKHRoaXMuaHJlZilcbiAgICAgICAgLnN1Y2Nlc3MocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICQoJyNjb2xsZWN0aW9uLW51bWJlcicpXG4gICAgICAgICAgICAgICAgLnZhbChyZXN1bHQuY29sbGVjdGlvbl9pZClcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQge1VQREFURV9TQVZFX0FMTF9CVVRUT059IGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG4vKipcbiAqIE1hcmsgY2hhbmdlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQgKCkge1xuICAgIGlmKCQodGhpcykuYXR0cigndHlwZScpICE9ICdjaGVja2JveCcpIHtcbiAgICAgICAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpO1xuICAgICAgICBwYXJlbnRDb250YWluZXIuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goVVBEQVRFX1NBVkVfQUxMX0JVVFRPTik7XG4gICAgfVxufVxuIiwiaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgdXBkYXRlU2F2ZUFsbEJ1dHRvbiBmcm9tIFwibGlzdGVuZXJzL3VwZGF0ZVNhdmVBbGxCdXR0b25cIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcbmltcG9ydCBnZXRMYXN0Q29sbGVjdGlvbk51bWJlciBmcm9tIFwiLi9oYW5kbGVycy9nZXRMYXN0Q29sbGVjdGlvbk51bWJlclwiO1xuaW1wb3J0IHtjb3B5QXNzZXRzfSBmcm9tIFwiLi9oYW5kbGVycy9jb3B5QXNzZXRzXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfREVMRVRFLCBBV0FSRF9DUkVBVEVELCBDTE9TRV9BV0FSRF9NT0RBTH0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHttYXJrQ2hhbmdlZH0gZnJvbSBcIi4vaGFuZGxlcnMvbWFya0NoYW5nZWRcIjtcbmltcG9ydCB7ZG93bmxvYWRBc3NldHN9IGZyb20gXCIuL2hhbmRsZXJzL2Rvd25sb2FkQXNzZXRzXCI7XG5pbXBvcnQge1VQREFURV9TQVZFX0FMTF9CVVRUT059IGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcbmltcG9ydCB7REVMVEFfVElNRV9BVFRSSUJVVEV9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xuXG4kKCcjYXNzZXRzLXRhYmxlJylcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUnLCBhd2FyZENyZWF0ZSlcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUnLCBhd2FyZERlbGV0ZSk7XG5cbiQoJyNhc3NldC1mb3JtLXR5cGUnKVxuICAgIC5jaGFuZ2UoY2hhbmdlVHlwZSlcbiAgICAuY2hhbmdlKCk7XG5cbiQoJyNnZXQtbGFzdC1jb2xsZWN0aW9uLW51bWJlcicpLmNsaWNrKGdldExhc3RDb2xsZWN0aW9uTnVtYmVyKTtcblxuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIENvcHkgYXNzZXRzIGlkc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvcHktYXNzZXRzJywgY29weUFzc2V0cylcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIGRvd25sb2FkIGFzc2V0c1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRvd25sb2FkLWFzc2V0cycsIGRvd25sb2FkQXNzZXRzKVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIGFubm91bmNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xuICAgIH0pXG5cbiAgICAub24oJ2NoYW5nZScsICdbbmFtZSQ9XCJbdGltZV90eXBlXVwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRkID0gJCh0aGlzKS5jbG9zZXN0KCd0ZCcpO1xuICAgICAgICBjb25zdCBkZWx0YVRpbWVIaWRkZW4gPSBjdXJyZW50VGQuZmluZCgnW25hbWUkPVwiWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddXCJdJyk7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZURpc3BsYXkgPSBjdXJyZW50VGQuZmluZCgnW25hbWUkPVwiWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW2Rpc3BsYXldXCJdJyk7XG5cbiAgICAgICAgZGVsdGFUaW1lRGlzcGxheS52YWwoZGVsdGFUaW1lSGlkZGVuLmRhdGEoJ3ZhbHVlJykgLyBwYXJzZUludCgkKHRoaXMpLnZhbCgpKSk7XG4gICAgfSlcblxuICAgIC5vbignaW5wdXQnLCAnW25hbWUkPVwiWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW2Rpc3BsYXldXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50VGQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RkJyk7XG4gICAgICAgIGNvbnN0IHRpbWVUeXBlID0gY3VycmVudFRkLmZpbmQoJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJykudmFsKCk7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11cIl0nKTtcblxuICAgICAgICBkZWx0YVRpbWVIaWRkZW4udmFsKCQodGhpcykudmFsKCkgKiB0aW1lVHlwZSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzKSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmZhc3Qtc2F2ZS1jb250YWluZXIgaW5wdXQsIC5mYXN0LXNhdmUtY29udGFpbmVyIHNlbGVjdCwgLmZhc3Qtc2F2ZS1jb250YWluZXIgdGV4dGFyZWEnLCBtYXJrQ2hhbmdlZClcblxuICAgIC8qKlxuICAgICAqIFVuc3Vic2NyaWJlIG9uIG1vZGFsIGNsb3NlXG4gICAgICovXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgIHVwZGF0ZVNhdmVBbGxCdXR0b24oKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQ0xPU0VfQVdBUkRfTU9EQUwsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuIiwiZXhwb3J0IGNvbnN0IEFXQVJEX0NSRUFURSA9ICdBV0FSRF9DUkVBVEUnO1xuZXhwb3J0IGNvbnN0IEFXQVJEX0NSRUFURUQgPSAnQVdBUkRfQ1JFQVRFRCc7XG5leHBvcnQgY29uc3QgQVdBUkRfREVMRVRFID0gJ0FXQVJEX0RFTEVURSc7XG5leHBvcnQgY29uc3QgQ0xPU0VfQVdBUkRfTU9EQUwgPSAnQ0xPU0VfQVdBUkRfTU9EQUwnO1xuIiwiLyoqXG4gKiBTaG93IGZvcm0gZXZlbnRcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQkFOTkVSX1NIT1dfRk9STSA9ICdCQU5ORVJfU0hPV19GT1JNJztcblxuLyoqXG4gKiBJZCBvZiB0eXBlJ3Mgc2VsZWN0XG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFRZUEVfU0VMRUNUX0lEID0gJ2Jhbm5lci10eXBlJztcbiIsImltcG9ydCB7VFlQRV9TRUxFQ1RfSUR9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBDaGFuZ2UgdHlwZSBoYW5kbGVyXG4gKiBIaWRlL3Nob3cgc29tZSBmaWVsZHNcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFRZUEVfU0VMRUNUX0lEKTtcblxuICAgIGlmICghc2VsZWN0IHx8IHNlbGVjdC5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdC5vcHRpb25zLmxlbmd0aCAmJiBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0pIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcblxuICAgICAgICAkKCcuYmFubmVyLXR5cGUnKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAkKCcuYmFubmVyLXR5cGUtJyArIHNlbGVjdGVkRWxlbWVudC52YWx1ZSkucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge0JBTk5FUl9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5cbi8qKlxuICogU2hvdyBmb3JtIGhhbmRsZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIERyb3B6b25lIEluaXRcbiAgICAgKi9cbiAgICBkcm9wWm9uZUluaXQoQkFOTkVSX1NIT1dfRk9STSk7XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHNob3dGb3JtIGxpc3RlbmVyXG4gICAgICovXG4gICAgc2hvd0Zvcm0oKTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0JBTk5FUl9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5cbi8qKlxuICogU2hvdyBmb3JtIGxpc3RlbmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQkFOTkVSX1NIT1dfRk9STSwgKCkgPT4ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUeXBlIHNlbGVjdCBjaGFuZ2UgdHJpZ2dlclxuICAgICAgICAgKi9cbiAgICAgICAgY2hhbmdlVHlwZSgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRlcyBpbml0XG4gICAgICAgICAqL1xuICAgICAgICAkKCcuYmFubmVyLWZvcm0gLmRhdGVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0Zvcm1cIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcbmltcG9ydCB7VFlQRV9TRUxFQ1RfSUR9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNob3cgZWRpdCBmb3JtIG9mIGEgYmFubmVyXG4gKi9cbiQoJy5zaG93LWZvcm0nKS5jbGljayhzaG93Rm9ybSgpKTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0eXBlIGhhbmRsZXJcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjJyArIFRZUEVfU0VMRUNUX0lELCBjaGFuZ2VUeXBlKTtcbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY29weSBhZHAgaWRzIHRvIGNsaXBib2FyZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weUFkcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkcElkc0ZpZWxkID0gJCgnaW5wdXRbbmFtZT1cImFkcF9pZHNcIl0nKTtcbiAgICBsZXQgYWRwSWRzID0gW107XG5cbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGxldCBhZHBJZCA9ICQoaXRlbSkuZGF0YSgnaWQnKTtcbiAgICAgICAgaWYoYWRwSWQpIHtcbiAgICAgICAgICAgIGFkcElkcy5wdXNoKGFkcElkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpZiAoYWRwSWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICAgICBsZXQgYWRwSWQgPSAkKGl0ZW0pLmRhdGEoJ2lkJyk7XG4gICAgICAgICAgICBpZiAoYWRwSWQpIHtcbiAgICAgICAgICAgICAgICBhZHBJZHMucHVzaChhZHBJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkcElkc0ZpZWxkLnZhbChhZHBJZHMpO1xuICAgIGFkcElkc0ZpZWxkLnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAvLyBhZHBJZHNGaWVsZC52YWwoW10pO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBjb3B5IGFzc2V0cyBpZHMgdG8gY2xpcGJvYXJkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5QXNzZXRzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBhc3NldElkc0ZpZWxkID0gJCgnaW5wdXRbbmFtZT1cImFzc2V0X2lkc1wiXScpO1xuICAgIGxldCBhc3NldElkcyA9IFtdO1xuXG4gICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcbiAgICAgICAgaWYoYXNzZXRJZCkge1xuICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpZiAoYXNzZXRJZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICAgICAgaWYoYXNzZXRJZCkge1xuICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzc2V0SWRzRmllbGQudmFsKGFzc2V0SWRzKTtcbiAgICBhc3NldElkc0ZpZWxkLnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgZG93bmxvYWQgYWRwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEFkcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBhZHBJZHMgPSBbXTtcbiAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgIGxldCBhZHBJZCA9ICQoaXRlbSkuZGF0YSgnaWQnKTtcbiAgICAgICAgaWYoYWRwSWQpIHtcbiAgICAgICAgICAgIGFkcElkcy5wdXNoKGFkcElkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGFsbCBpZiBubyBvbmUgaXMgc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpZiAoYWRwSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xuICAgICAgICAgICAgaWYgKGFkcElkKSB7XG4gICAgICAgICAgICAgICAgYWRwSWRzLnB1c2goYWRwSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cubG9jYXRpb24gPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJykgKyAnJmlkcz0nICsgYWRwSWRzLmpvaW4oJywnKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBvZiBhcmNoaXZlIGNhdGVnb3JpZXMgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBcmNoaXZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuc2hvdy1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5hcmNoaXZlLWNhdGVnb3JpZXMtbGlzdCcpLmh0bWwoJycpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIG9mIHRhc2tzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWRlVGFza3MoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5zaG93LXRhc2tzJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy50YXNrcy1saXN0JykuaGlkZSgnc2xvdycpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBzZWxlY3Qgcm93IGJ5IGZ1bGwgdGQgYXJlYVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0Um93KGUpIHtcbiAgICBpZiAoISQoZS50YXJnZXQpLmhhc0NsYXNzKCdmb3ItY29weScpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSAkKHRoaXMpLmZpbmQoJy5mb3ItY29weScpO1xuXG4gICAgICAgIGlmKGNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICBjaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIEhhbmRsZXIgb2YgYXJjaGl2ZSBjYXRlZ29yaWVzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93QXJjaGl2ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmhpZGUtYXJjaGl2ZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICBcbiAgICBsZXQgYWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpO1xuICAgIG5ldyBodHRwKGFjdGlvbilcbiAgICAgICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLmFyY2hpdmUtY2F0ZWdvcmllcy1saXN0JykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICBcbn1cbiIsIi8qKlxuICogSGFuZGxlciBvZiB0YXNrcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuaGlkZS10YXNrcycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcudGFza3MtbGlzdCcpLnNob3coJ3Nsb3cnKTtcbn1cbiIsIi8vaW1wb3J0IHtidW5kbGVWZXJzaW9uU2VsZWN0fSBmcm9tIFwiLi9oYW5kbGVycy9idW5kbGVWZXJzaW9uU2VsZWN0XCI7XG5pbXBvcnQge3Nob3dBcmNoaXZlfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93QXJjaGl2ZVwiO1xuaW1wb3J0IHtoaWRlQXJjaGl2ZX0gZnJvbSBcIi4vaGFuZGxlcnMvaGlkZUFyY2hpdmVcIjtcbmltcG9ydCB7aGlkZVRhc2tzfSBmcm9tIFwiLi9oYW5kbGVycy9oaWRlVGFza3NcIjtcbmltcG9ydCB7c2hvd1Rhc2tzfSBmcm9tIFwiLi9oYW5kbGVycy9zaG93VGFza3NcIjtcbmltcG9ydCB7Y29weUFkcH0gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFkcFwiO1xuaW1wb3J0IHtjb3B5QXNzZXRzfSBmcm9tIFwiLi9oYW5kbGVycy9jb3B5QXNzZXRzXCI7XG5pbXBvcnQge3NlbGVjdFJvd30gZnJvbSBcIi4vaGFuZGxlcnMvc2VsZWN0Um93XCI7XG5pbXBvcnQge2Rvd25sb2FkQWRwfSBmcm9tIFwiLi9oYW5kbGVycy9kb3dubG9hZEFkcFwiO1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIFNob3cgYXJjaGl2ZSBhZHAgY2F0ZWdvcmllc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnNob3ctYXJjaGl2ZScsIHNob3dBcmNoaXZlKVxuICAgIC8qKlxuICAgICAqIEhpZGUgYXJjaGl2ZSBhZHAgY2F0ZWdvcmllc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtYXJjaGl2ZScsIGhpZGVBcmNoaXZlKVxuICAgIC8qKlxuICAgICAqIEhpZGUgYWRwIHRhc2tzIGJ5IHN0YXR1cyBhbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtdGFza3MnLCBoaWRlVGFza3MpXG4gICAgLyoqXG4gICAgICogU2hvdyBhZHAgdGFza3MgYnkgc3RhdHVzIGFuZCB1c2VyXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuc2hvdy10YXNrcycsIHNob3dUYXNrcylcbiAgICAvKipcbiAgICAgKiBDb3B5IGFkcCBpZHNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFkcCcsIGNvcHlBZHApXG4gICAgLyoqXG4gICAgICogQ29weSBhc3NldHMgaWRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29weS1hc3NldHMnLCBjb3B5QXNzZXRzKVxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIGRvd25sb2FkIGFzc2V0c1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRvd25sb2FkLWFkcCcsIGRvd25sb2FkQWRwKVxuICAgIC8qKlxuICAgICAqIFNob3cgaGlkZSBzaWRlIGJveFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnNob3ctaGlkZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYocGFyc2VJbnQoJCgnLnNpZGUtYm94JykuY3NzKCdyaWdodCcpKSA8IDApIHtcbiAgICAgICAgICAgICQoJy5zaWRlLWJveCcpLmNzcygncmlnaHQnLCAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnNpZGUtYm94JykuY3NzKCdyaWdodCcsICctMTAwJScpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8qKlxuICAgICAqIFNlbGVjdCByb3cgYnkgZnVsbCB0ZCBhcmVhXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuaWQtY29sJywgc2VsZWN0Um93KTtcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgQ0FTSCA9ICdjYXNoX2FkZGVkJztcbmV4cG9ydCBjb25zdCBDT0lOID0gJ2NvaW5zX2FkZGVkJztcbmV4cG9ydCBjb25zdCBBU1NFVCA9ICdhc3NldHNfYWRkZWQnO1xuIiwiaW1wb3J0IHtDQVNIfSBmcm9tIFwibW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtDT0lOfSBmcm9tIFwibW9kdWxlcy9jbXMtdXNlci1hY3Rpb25zL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtBU1NFVH0gZnJvbSBcIm1vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9jb25zdGFudHNcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJzb3IgdG8gcGFyZW50IG5vZGVcbiAgICAgKi9cbiAgICAub24oJ21vdXNlZW50ZXInLCAndGQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQodGhpcykuZmluZCgnLmhpZGRlbi13cmFwcGVyJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBGaWx0ZXIgc2VsZWN0IG9wdGlvbnMgYnkgc2VsZWN0ZWQgc291cmNlXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI2ZpbHRlcl9zb3VyY2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZhbCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICQoXCIjZmlsdGVyX2FjdGlvblwiKS5zZWxlY3QyKHtcbiAgICAgICAgICAgIG1hdGNoZXI6IGZ1bmN0aW9uIChwYXJhbXMsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlVmFsICE9PSAndXNlcl9kZWJ1ZycgJiYgJC5pbkFycmF5KGRhdGEuaWQsIFtDQVNILCBDT0lOLCBBU1NFVF0pID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogT3BlbiBkZXBsb3kgaW5mb1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAndGQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSAkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpO1xuXG4gICAgICAgIGlmICh3cmFwcGVyICYmIHdyYXBwZXIuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdvcGVuJylcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiZXhwb3J0IGNvbnN0IENPTExFQ1RJT05fU0hPV19GT1JNID0gJ0NPTExFQ1RJT05fU0hPV19GT1JNJztcbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbmNvbnN0IGFzc2V0UHJldmlld1RlbXBsYXRlID0gJCgnI2Fzc2V0LXByZXZpZXctdGVtcGxhdGUnKS5odG1sKCk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgYWxsIHBhZ2VcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHNhdmVkSXRlbSA9ICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJyk7XG5cbiAgICBpZiAoIXNhdmVkSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFNhdmVkSXRlbU5vdEZvdW5kO1xuICAgIH1cblxuICAgIGlmIChzYXZlZEl0ZW0uaGFzQ2xhc3MoJ3Byb2dyZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzYXZlZEl0ZW0uYWRkQ2xhc3MoJ3Byb2dyZXNzJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhbmdlZCBkYXRhXG4gICAgICovXG4gICAgY29uc3QgZm9ybUl0ZW1zID0gc2F2ZWRJdGVtLmZpbmQoJy5jaGFuZ2VkJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGZvcm1JdGVtcyk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZm9ybUl0ZW1zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZW0uaGFzQ2xhc3MoJ2Fzc2V0LWlkJykgJiYgISFyZXNwb25zZS5hc3NldHNbY3VycmVudEl0ZW0udmFsKCldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBc3NldCA9IHJlc3BvbnNlLmFzc2V0c1tjdXJyZW50SXRlbS52YWwoKV07XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLnNsb3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5hc3NldC1wcmV2aWV3JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGFzc2V0UHJldmlld1RlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAoJyV1cmwlJywgXCJnXCIpLCBjdXJyZW50QXNzZXQucHJldmlld191cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoIG5ldyBSZWdFeHAoJyV0aXRsZSUnLCBcImdcIiksIGN1cnJlbnRBc3NldC5uYW1lKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIaWRlIGFkZGl0aW9uYWwgcm93c1xuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCgnLmFkZGl0aW9uYWwtZGF0YScpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIE1hcmsgaW5wdXQgYXMgY2hhbmdlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xufVxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xuXG4vKipcbiAqIFNvcnRhYmxlIEluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBuZXcgU29ydGFibGUoX3RoaXMsIHtcbiAgICAgICAgZ3JvdXA6IF90aGlzLmRhdGFzZXQuZ3JvdXAsXG4gICAgICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJChlLnRhcmdldCkuZmluZChfdGhpcy5kYXRhc2V0LnBvc2l0aW9uKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQocG9zaXRpb24udmFsKCkpICE9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi52YWwoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtDT0xMRUNUSU9OX1NIT1dfRk9STX0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgZmFzdFNhdmUgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVcIjtcbmltcG9ydCBtYXJrSW5wdXRBc0NoYW5nZWQgZnJvbSBcIi4vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkXCI7XG5pbXBvcnQgc29ydGFibGVJbml0IGZyb20gXCIuL2hhbmRsZXJzL3NvcnRhYmxlSW5pdFwiO1xuaW1wb3J0IGhpZGVBZGRpdGlvbmFsUm93cyBmcm9tIFwiLi9oYW5kbGVycy9oaWRlQWRkaXRpb25hbFJvd3NcIjtcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vKipcbiAqIFByZXZpZXcgSW1hZ2UgKERyb3Bab25lIGluaXQpXG4gKi9cbiQoJy5zaG93LWZvcm0nKS5jbGljayhkcm9wWm9uZUluaXQoQ09MTEVDVElPTl9TSE9XX0ZPUk0pKTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgY29sbGVjdGlvblxuICovXG4kKCcuY29sbGVjdGlvbi1mYXN0LXNhdmUnKS5jbGljayhmYXN0U2F2ZSk7XG5cbi8qKlxuICogTWFyayBpbnB1dHMgYXMgY2hhbmdlZFxuICovXG4kKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0JykuY2hhbmdlKG1hcmtJbnB1dEFzQ2hhbmdlZCk7XG5cbi8qKlxuICogU29ydGFibGUgaW5pdFxuICovXG4kKCcuc29ydGFibGUnKS5lYWNoKHNvcnRhYmxlSW5pdCk7XG5cbi8qKlxuICogSGlkZSBhZGRpdGlvbmFsIHJvd3NcbiAqL1xuJCgnLmhpZGUtc2xvdHMnKS5jbGljayhoaWRlQWRkaXRpb25hbFJvd3MpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBBZGQgcm93cyB0byB0aGUgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkUm93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjY3JvcHMgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNjcm9wX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmNyb3BfaWQnKS50ZXh0KCk7XG4gICAgbGV0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJWNyb3AlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogRGVsZXRlIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUm93KCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkUm93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGRSb3dcIjtcbmltcG9ydCB7ZGVsZXRlUm93fSBmcm9tIFwiLi9oYW5kbGVycy9kZWxldGVSb3dcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFRCwgQVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLXJvdycsIGFkZFJvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZGVsZXRlUm93KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9ICQodGhpcykuY2xvc2VzdCgndHInKTtcblxuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKHRoaXMpKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEVELCBzZWxmKTtcblxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJvdy5hZGRDbGFzcygnY2hhbmdlZCcpKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5mYXN0LXNhdmUtcGFnZScpLmNsaWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9ICQodGhpcykuY2xvc2VzdCgndHInKTtcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKHRoaXMpKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgc2VsZik7XG5cbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyb3cuYWRkQ2xhc3MoJ2NoYW5nZWQnKSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljaygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2RhaWx5X2xvb3QgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNkYWlseV9sb290X3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGxldCBsYXN0SURTID0gW107XG4gICAgbGV0IGluY3JlbWVudElkID0gMTtcbiAgICB0Ym9keS5maW5kKFwidHJcIikuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBpZihwYXJzZUludCgkKGl0ZW0pLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoKSkpe1xuICAgICAgICAgICAgbGFzdElEUy5wdXNoKHBhcnNlSW50KCQoaXRlbSkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbCgpKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGxhc3RJRFMubGVuZ3RoKXtcbiAgICAgICAgaW5jcmVtZW50SWQgPSAoTWF0aC5tYXguYXBwbHkoTWF0aCxsYXN0SURTKSArIDEpIHx8IDE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXJvd0luZGV4JS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKGkgKyBpbmNyZW1lbnRJZCk7XG5cbiAgICAgICAgdGJvZHkuZmluZCgnLmRhdGVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgbWluVmlldzogJzInXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RhdGUgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJy5kYWlseS1sb290LXNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZmluZCgndHIuY2hhbmdlZCcpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1hZ2ljIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucmVtb3ZlLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoIHBhZ2UgdHlwZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnRvZ2dsZS1wYWdlLXR5cGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5wYXRobmFtZS5zbGljZSgwLCBsb2NhdGlvbi5wYXRobmFtZS5sYXN0SW5kZXhPZignLycpKSArICQodGhpcykuZGF0YSgnaHJlZicpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJyNjb21tb24tbWVudScpLmZpbmQoJy5jb21tb24tbWVudS1zZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYoJCh0aGlzKS5maW5kKCdsaScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jb21tb24tbWVudS1zZWN0aW9uJykuaGlkZSgpXG4gICAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG4vKipcbiAqIFNob3cgRGVwbG95IFN0YXR1c1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGVwbG95U3RhdHVzKCkge1xuICAgIG5ldyBodHRwKERFUExPWV9TVEFUVVNfUk9VVEUpXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICQoJy5kZXBsb3ktc3RhdHVzJykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSAkKCcuZGVwbG95LXN0YXR1cycpLmZpbmQoJy5hY3RpdmUtZGVwbG95JykubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZihpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICQoJy5kZXBsb3ktYnRuJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZigkKCcuZGVwbG95LWJ0bicpLmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge2RlcGxveVN0YXR1cygpO30sIDMwMDApO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xufVxuIiwiXG4vKipcbiAqIEhhbmRsZXIgZm9yIGNoYW5nZSB0YWJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhYihlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjdXJyZW50RWxlbWVudC5hdHRyKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcbiAgICB1cmwgKz0gXCI/ZGlyZWN0aW9uPVwiICsgZGlyZWN0aW9uO1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgaWQ6ICdkZXBsb3knXG4gICAgfSwgJ0RlcGxveScsIHVybCk7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIHNob3cg0LJlcGVuZGVuY3lcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dEZXBlbmRlbmN5KGUpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY29uc3QgY3VycmVudENvbmZpZyA9IGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJy5jb25maWctaXRlbS1ibG9jaycpLmRhdGEoJ21vZGVsJyk7XG4gICAgbGV0IGFkZE1vZGUgPSBjdXJyZW50RWxlbWVudC5pcygnOmNoZWNrZWQnKTtcblxuICAgIG9uZUxldmVsU2hvdyhjdXJyZW50Q29uZmlnLCBhZGRNb2RlKTtcbn1cblxuZnVuY3Rpb24gb25lTGV2ZWxTaG93KGNvbmZpZ05hbWUsIGFkZE1vZGUsIGxldmVsID0gMSkge1xuICAgIGlmKERFUExPWV9ERVBFTkRTLmhhc093blByb3BlcnR5KGNvbmZpZ05hbWUpICYmIGxldmVsIDwgMTApIHtcbiAgICAgICAgbGV0IGNvbmZpZ0Jsb2NrID0gJCgnLm1vZGVsLScgKyBjb25maWdOYW1lKTtcbiAgICAgICAgaWYoYWRkTW9kZSkge1xuICAgICAgICAgICAgY29uZmlnQmxvY2suYWRkQ2xhc3MoJ2RlcGxveS1jaGFpbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlnQmxvY2sucmVtb3ZlQ2xhc3MoJ2RlcGxveS1jaGFpbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIERFUExPWV9ERVBFTkRTW2NvbmZpZ05hbWVdKSB7XG4gICAgICAgICAgICBsZXQgZGVwZW5kQ29uZmlnTmFtZSA9IERFUExPWV9ERVBFTkRTW2NvbmZpZ05hbWVdW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpZ0Jsb2NrID0gJCgnLm1vZGVsLScgKyBkZXBlbmRDb25maWdOYW1lKTtcbiAgICAgICAgICAgIGlmKGFkZE1vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25maWdCbG9jay5hZGRDbGFzcygnZGVwbG95LWNoYWluJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLnJlbW92ZUNsYXNzKCdkZXBsb3ktY2hhaW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uZUxldmVsU2hvdyhkZXBlbmRDb25maWdOYW1lLCBhZGRNb2RlLCBsZXZlbCArIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHNob3cgZGVwZW5kZW5jeSBwb3B1cFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RlcGVuZGVuY3lQb3B1cChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY29uc3QgY3VycmVudENvbmZpZyA9IGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJy5jb25maWctaXRlbS1ibG9jaycpLmRhdGEoJ21vZGVsJyk7XG4gICAgY29uc3QgY3VycmVudENvbmZpZ0lkID0gY3VycmVudEVsZW1lbnQucGFyZW50cygnLmNvbmZpZy1pdGVtLWJsb2NrJykuZGF0YSgnaWQnKTtcbiAgICBsZXQgaWRzID0gW107XG4gICAgaWYoY3VycmVudENvbmZpZ0lkKSB7XG4gICAgICAgIGlkcy5wdXNoKGN1cnJlbnRDb25maWdJZCk7XG4gICAgfVxuXG4gICAgcm9vdExldmVsU2hvdyhjdXJyZW50Q29uZmlnLCBpZHMpO1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBPbmUgbGV2ZWwgc2hvd1xuICpcbiAqIEBwYXJhbSBjb25maWdOYW1lXG4gKiBAcGFyYW0gZGVwZW5kQ29uZmlnTmFtZVxuICogQHBhcmFtIGxldmVsXG4gKiBAcGFyYW0gaWRSZXNwb25zZVxuICovXG5mdW5jdGlvbiBvbmVMZXZlbFNob3coY29uZmlnTmFtZSwgZGVwZW5kQ29uZmlnTmFtZSwgIGxldmVsID0gMSwgaWRSZXNwb25zZSkge1xuICAgIGlmKERFUExPWV9ERVBFTkRTLmhhc093blByb3BlcnR5KGNvbmZpZ05hbWUpICYmIGxldmVsIDwgMTApIHtcbiAgICAgICAgbGV0IGlkcyA9IGlkUmVzcG9uc2UuaWRzO1xuICAgICAgICBsZXQgdGV4dENsYXNzID0gJyc7XG4gICAgICAgIGlmKGlkUmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ25vdEltcGxlbWVudGVkJykpIHtcbiAgICAgICAgICAgIHRleHRDbGFzcyA9ICd0ZXh0LW11dGVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc1JlY3Vyc2lvbiA9IGZhbHNlO1xuICAgICAgICAkKCcuY2hhaW4tJyArIGNvbmZpZ05hbWUpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCQodGhpcykucGFyZW50cygnLmNoYWluLScgKyBkZXBlbmRDb25maWdOYW1lKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaXNSZWN1cnNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNoYWluLScgKyBkZXBlbmRDb25maWdOYW1lICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIHRleHRDbGFzcyArICdcIj4nICsgZGVwZW5kQ29uZmlnTmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+KFJlY3Vyc2lvbik8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+PGJyPicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKCQodGhpcykuZmluZCgnLmNoYWluLScgKyBkZXBlbmRDb25maWdOYW1lKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNoYWluLScgKyBkZXBlbmRDb25maWdOYW1lICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCInICsgdGV4dENsYXNzICsgJ1wiPicgKyBkZXBlbmRDb25maWdOYW1lICsgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAgICAgKGlkcy5sZW5ndGggPiAwID8gJzxzcGFuIGNsYXNzPVwiZGVwZW5kLWlkc1wiPiAnICsgaWRzLmpvaW4oJywnKSArICc8L3NwYW4+JyA6ICcnKSAgK1xuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzUmVjdXJzaW9uKSB7XG4gICAgICAgICAgICBnZXREZXBsb3lNb2RlbElkcyhkZXBlbmRDb25maWdOYW1lLCBsZXZlbCwgaWRzKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4vKipcbiAqIFJvb3QgbGV2ZWwgc2hvd1xuICpcbiAqIEBwYXJhbSBjb25maWdOYW1lXG4gKiBAcGFyYW0gaWRzXG4gKi9cbmZ1bmN0aW9uIHJvb3RMZXZlbFNob3coY29uZmlnTmFtZSwgaWRzID0gW10pIHtcbiAgICBuZXcgaHR0cChERVBMT1lfTU9ERUxfSURTX1JPVVRFKVxuICAgICAgICAubWV0aG9kKCdwb3N0JylcbiAgICAgICAgLmRhdGEoe1xuICAgICAgICAgICAgJ2RpcmVjdGlvbic6IEFDVElWRV9ESVJFQ1RJT04sXG4gICAgICAgICAgICAnZGVwZW5kZW50TW9kZWwnOiBjb25maWdOYW1lLFxuICAgICAgICAgICAgJ2RlcGVuZGVudE1vZGVsSWRzJzogaWRzXG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGxldCBpZHMgPSByZXNwb25zZS5pZHMgfHwgW107XG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZGVwbG95LWNoYWluLWJsb2NrXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAkKCcuZGVwbG95LWNoYWluLWJsb2NrJykuaHRtbCgnPGRpdiBjbGFzcz1cImNoYWluLScgKyBjb25maWdOYW1lICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgICc8c3Bhbj4nICsgY29uZmlnTmFtZSArICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZGVwZW5kLWlkc1wiPiAnICsgaWRzLmpvaW4oJywnKSArICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzwvZGl2PicpO1xuXG4gICAgICAgICAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuaGVhZGVyKCdEZXBsb3kgZGVwZW5kZW5jeScpXG4gICAgICAgICAgICAgICAgLmJvZHkoJCgnLmRlcGxveS1jaGFpbi1ibG9jaycpKVxuICAgICAgICAgICAgICAgIC5tb2RhbCgpO1xuXG4gICAgICAgICAgICBnZXREZXBsb3lNb2RlbElkcyhjb25maWdOYW1lLCAxLCBpZHMpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xufVxuXG4vKipcbiAqIEdldCBkZXBsb3kgbW9kZWwgaWRzXG4gKlxuICogQHBhcmFtIGNvbmZpZ05hbWVcbiAqIEBwYXJhbSBsZXZlbFxuICogQHBhcmFtIGlkc1xuICovXG5mdW5jdGlvbiBnZXREZXBsb3lNb2RlbElkcyhjb25maWdOYW1lLCBsZXZlbCA9IDEsIGlkcyA9IFtdKSB7XG4gICAgZm9yIChsZXQga2V5IGluIERFUExPWV9ERVBFTkRTW2NvbmZpZ05hbWVdKSB7XG4gICAgICAgIGxldCBkZXBlbmRDb25maWdOYW1lID0gREVQTE9ZX0RFUEVORFNbY29uZmlnTmFtZV1ba2V5XTtcblxuICAgICAgICBpZihpZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBuZXcgaHR0cChERVBMT1lfTU9ERUxfSURTX1JPVVRFKVxuICAgICAgICAgICAgICAgIC5tZXRob2QoJ3Bvc3QnKVxuICAgICAgICAgICAgICAgIC5kYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgJ2RpcmVjdGlvbic6IEFDVElWRV9ESVJFQ1RJT04sXG4gICAgICAgICAgICAgICAgICAgICdtb2RlbCc6IGRlcGVuZENvbmZpZ05hbWUsXG4gICAgICAgICAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbCc6IGNvbmZpZ05hbWUsXG4gICAgICAgICAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbElkcyc6IGlkc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbmVMZXZlbFNob3coY29uZmlnTmFtZSwgZGVwZW5kQ29uZmlnTmFtZSwgbGV2ZWwgKyAxLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc2VuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25lTGV2ZWxTaG93KGNvbmZpZ05hbWUsIGRlcGVuZENvbmZpZ05hbWUsIGxldmVsICsgMSwgeydpZHMnOiBbXX0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtjaGFuZ2VUYWJ9IGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVRhYlwiO1xuaW1wb3J0IHtzaG93RGVwZW5kZW5jeX0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3lcIjtcbmltcG9ydCB7c2hvd0RlcGVuZGVuY3lQb3B1cH0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3lQb3B1cFwiO1xuaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQge2RlcGxveVN0YXR1c30gZnJvbSBcIi4vZGVwbG95U3RhdHVzXCI7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIENoYW5nZSB1cmwgb24gdGFiIGNoYW5nZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlcGxveS10YWJzIC5uYXYtbGluaycsIGNoYW5nZVRhYilcbiAgICAvKipcbiAgICAgKiBTYXZlIGFsbCBwYWdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZmFzdC1zYXZlLXBhZ2UtY3VzdG9tJywgZmFzdFNhdmVQYWdlKVxuICAgIC8qKlxuICAgICAqIFNob3cgZGVwZW5kZW5jeVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvbmZpZy1jaGVja2JveCcsIHNob3dEZXBlbmRlbmN5KVxuICAgIC8qKlxuICAgICAqIFNob3cgZGVwZW5kZW5jeSBwb3B1cFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnNob3ctZGVwZW5kZW5jeScsIHNob3dEZXBlbmRlbmN5UG9wdXApXG5cbiAgICAvKipcbiAgICAgKiBDaGVjay91bmNoZWNrIGF3YXJkIGRlcGVuZGVuY2llc1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5hd2FyZC1kZXBlbmRlbmN5IFt0eXBlPWNoZWNrYm94XScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmF3YXJkLWRlcGVuZGVuY3kgW3R5cGU9Y2hlY2tib3hdJykucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XG4gICAgfSlcblxuICAgIC5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICBkZXBsb3lTdGF0dXMoKTtcbiAgICB9KTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsZXZlbHMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2RwYSA+IHRib2R5Jyk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuZHBhX2lkJykudmFsKCk7XG4gICAgbGV0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjZHBhX3RlbXBsYXRlJykuaHRtbCgpLnJlcGxhY2UoLyVkcGFfaWQlL2csIGkgKyBpbmNyZW1lbnRJZCk7XG5cbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGRwYSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZURwYVN0YXRlIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHJvdXRlID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpO1xuICAgIGxldCBkYXRhID0gJCgnLmRwYS1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIG5ldyBodHRwKHJvdXRlKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlRHBhU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGRwYVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93IHRvIHRoZSBkcGEgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93IHRvIHRoZSBkcGEgZ3JpZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kcGEtc2F2ZS1wYWdlJywgc2F2ZURwYVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNkeWUgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNkeWVfdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdCk7XG5cbiAgICAgICAgbGV0IGxhc3RSb3cgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5jcDInKTtcbiAgICAgICAgbGFzdFJvdy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgJChpdGVtKS5jb2xvcnBpY2tlcih7fSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBDaGFuZ2Ugcm93IGluZGV4XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VSb3dJbmRleCgpIHtcbiAgICBsZXQgcm93SW5kZXggPSAkKHRoaXMpLnZhbCgpO1xuICAgIGxldCByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgnaW5wdXQsIHNlbGVjdCcpO1xuXG4gICAgcm93LmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgIGxldCBvbGROYW1lID0gJChpdGVtKS5hdHRyKCduYW1lJyk7XG4gICAgICAgIGxldCBuZXdOYW1lID0gb2xkTmFtZS5zbGljZSgwLCA0KSArIHJvd0luZGV4ICsgIG9sZE5hbWUuc2xpY2Uob2xkTmFtZS5pbmRleE9mKCddJykpO1xuICAgICAgICAkKGl0ZW0pLmF0dHIoJ25hbWUnLCBuZXdOYW1lKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7U2F2ZWRJdGVtTm90Rm91bmR9IGZyb20gXCJleGNlcHRpb25zL1NhdmVkSXRlbU5vdEZvdW5kXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbmV4cG9ydCBjb25zdCBEWUVfQ09OVEFJTkVSX1NFTEVDVE9SID0gJy5keWUtc2F2ZS1wYWdlLWNvbnRhaW5lcic7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgZnJvbSB0aGUgZHllcyBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKERZRV9DT05UQUlORVJfU0VMRUNUT1IpO1xuXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBpZiAoc2F2ZWRJdGVtLmhhc0NsYXNzKCdwcm9ncmVzcycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2F2ZWRJdGVtLmFkZENsYXNzKCdwcm9ncmVzcycpO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGNoYW5nZWQgZGF0YVxuICAgICAqL1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtSXRlbXMpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGZvcm1JdGVtcy5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIE1hcmsgZm9ybSdzIHRyIGFzIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkVHIoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge2NoYW5nZVJvd0luZGV4fSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VSb3dJbmRleFwiO1xuaW1wb3J0IGR5ZVNhdmVQYWdlLCB7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUiwgbWFya0NoYW5nZWRUcn0gZnJvbSBcIi4vaGFuZGxlcnMvZHllU2F2ZVBhZ2VcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEluaXQgY29sb3ItcGlja2VyIGlucHV0c1xuICAgICAqL1xuICAgIC5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLmNwMicpLmNvbG9ycGlja2VyKClcbiAgICAgICAgICAgIC5vbignY3JlYXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KVxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogTWFyayB0ciBhcyBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAub24oJ2NoYW5nZScsIGAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IGlucHV0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHNlbGVjdCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkVHIpXG4gICAgICAgICAgICAgICAgICAgIC5vbignaW5wdXQnLCBgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBpbnB1dCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBzZWxlY3QsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZFRyKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSByb3cgaW5kZXhcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hc3NldF9pZCcsIGNoYW5nZVJvd0luZGV4KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcbiAgICAgKi9cbiAgICAkKCcuZHllLXNhdmUtcGFnZScpLmNsaWNrKGR5ZVNhdmVQYWdlKTtcbiIsImV4cG9ydCBjb25zdCBHSUZUX1dSQVBfUk9XX0FEREVEID0gJ0dJRlRfV1JBUF9ST1dfQURERUQnO1xuIiwiaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuXG4vKipcbiAqIEFzc2V0IElEIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGN1cnJlbnRJbnB1dCA9ICQodGhpcyk7XG4gICAgY29uc3QgYXNzZXRJRCA9IGN1cnJlbnRJbnB1dC52YWwoKTtcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50SW5wdXQuY2xvc2VzdCgndHInKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGR1cGxpY2F0ZWQgYXNzZXRzIGlkc1xuICAgICAqL1xuICAgIGNvbnN0IGN1cnJlbnRBc3NldER1cGxpY2F0ZSA9ICQoJyNnaWZ0LXdyYXBzLWNvbnRhaW5lcicpLmZpbmQoJy5hc3NldC1pZCcpLmZpbHRlcigoXywgaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gYXNzZXRJRCA9PT0gaXRlbS52YWx1ZTtcbiAgICB9KTtcblxuICAgIGlmIChjdXJyZW50QXNzZXREdXBsaWNhdGUubGVuZ3RoID4gMSl7XG4gICAgICAgIGVycm9ySGFuZGxlcih7J21lc3NhZ2UnOiAnRHVwbGljYXRlIGFzc2V0ICcgKyBhc3NldElEfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgaW5wdXRzIG5hbWVzXG4gICAgICovXG4gICAgcGFyZW50LmZpbmQoJ2lucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZS5yZXBsYWNlKCAvXFxbW1xcZF0rXFxdL2csIGBbJHthc3NldElEfV1gKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBocmVmIG9mIHRoZSBkZWxldGUgYnV0dG9uXG4gICAgICovXG4gICAgcGFyZW50LmZpbmQoJy5hamF4LWNvbmZpcm0tYWN0aW9uLWN1c3RvbScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhyZWYgPSB0aGlzLmhyZWYucmVwbGFjZSggL1xcL1tcXGRdKyQvZywgYC8ke2Fzc2V0SUR9YCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgZmFzdFNhdmVQYWdlIGZyb20gXCJoYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBwb3NpdGlvblVwZGF0ZSBmcm9tIFwiLi4vaGVscGVycy9wb3NpdGlvblVwZGF0ZVwiO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhc3NldHMgPSB7fTtcbiAgICAgICAgJCgnI2dpZnQtd3JhcHMtY29udGFpbmVyJykuZmluZCgnLmFzc2V0LWlkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoYXNzZXRzW3RoaXMudmFsdWVdID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhc3NldHNbdGhpcy52YWx1ZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUgYXNzZXQgJyArIGVyci5tZXNzYWdlfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbiB1cGRhdGVcbiAgICAgKi9cbiAgICBwb3NpdGlvblVwZGF0ZSgpO1xuXG4gICAgZmFzdFNhdmVQYWdlLmJpbmQodGhpcykoZSk7XG59XG4iLCJpbXBvcnQgY29uZmlybU1vZGFsIGZyb20gXCJoYW5kbGVycy9jb25maXJtTW9kYWxcIjtcblxuLyoqXG4gKiBSZW1vdmUgZW1iZWRlZCBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgYnV0dG9uVXJsID0gdGhpcy5ocmVmLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgcGFyZW50ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHBhcnNlSW50KGJ1dHRvblVybFtidXR0b25VcmwubGVuZ3RoIC0gMV0pID09PSAwKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbmZpcm1Nb2RhbC5iaW5kKHRoaXMpKGUpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xuaW1wb3J0IHBvc2l0aW9uVXBkYXRlIGZyb20gXCJtb2R1bGVzL2dpZnQtd3JhcC9oZWxwZXJzL3Bvc2l0aW9uVXBkYXRlXCI7XG5cbi8qKlxuICogU29ydGFibGUgSW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIG5ldyBTb3J0YWJsZShfdGhpcywge1xuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcG9zaXRpb25VcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyoqXG4gKiBQb3NpdGlvbiB1cGRhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgICQoJy5wb3NpdGlvbicpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3QgcGFnZSA9ICQoJyNwYWdlJykudmFsKCk7XG4gICAgICAgIGNvbnN0IHBhZ2VfbGltaXQgPSAkKCdbbmFtZT1cInBhZ2VfbGltaXRcIl0nKS52YWwoKTtcblxuICAgICAgICBpZiAocGFyc2VJbnQocG9zaXRpb24udmFsKCkpICE9PSBpbmRleCkge1xuICAgICAgICAgICAgcG9zaXRpb24udmFsKGluZGV4ICsgKChwYWdlIC0gMSkgKiBwYWdlX2xpbWl0KSk7XG4gICAgICAgICAgICBwb3NpdGlvbi5jaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7R0lGVF9XUkFQX1JPV19BRERFRH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIEFkZCBuZXcgcm93IHRvIGdyaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShHSUZUX1dSQVBfUk9XX0FEREVELCBkYXRhID0+IHtcbiAgICAgICAgJCgnI2dpZnQtd3JhcC0nICsgZGF0YS5lbWJlZEJsb2NrSWQpXG4gICAgICAgICAgICAuZmluZCgnLmRhdGV0aW1lcGlja2VyJylcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvc29ydGFibGVJbml0XCI7XG5pbXBvcnQgYXNzZXRDaGFuZ2VkIGZyb20gXCIuL2hhbmRsZXJzL2Fzc2V0Q2hhbmdlZFwiO1xuaW1wb3J0IGFkZFJvdyBmcm9tIFwiLi9saXN0ZW5lcnMvYWRkUm93XCI7XG5pbXBvcnQgZmFzdFNhdmVQYWdlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IHJlbW92ZVJvdyBmcm9tIFwiLi9oYW5kbGVycy9yZW1vdmVSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBhc3NldCBpZCBpbiBpbnB1dFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5hc3NldC1pZCcsIGFzc2V0Q2hhbmdlZClcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LWNvbmZpcm0tYWN0aW9uLWN1c3RvbScsIHJlbW92ZVJvdyk7XG5cbi8qKlxuICogQWRkIHJvdyBsaXN0ZW5lclxuICovXG5hZGRSb3coKTtcblxuLyoqXG4gKiBTb3J0YWJsZSBpbml0XG4gKi9cbiQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcblxuLyoqXG4gKiBTYXZlIGFsbCBwYWdlXG4gKi9cbiQoJy5mYXN0LXNhdmUtcGFnZS1jdXN0b20nKS5jbGljayhmYXN0U2F2ZVBhZ2UpOyIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciBzaG93IGFzc2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93QXNzZXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgbGV0IGFjdGlvbiA9IFNXT1dfQVNTRVRfUk9VVEUgKyAnP2lkPScgKyBjdXJyZW50RWxlbWVudC52YWwoKTtcbiAgICBuZXcgaHR0cChhY3Rpb24pXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdkYXRhJykpIHtcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCduYW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtbmFtZScpLmh0bWwocmVzcG9uc2UuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5oYXNPd25Qcm9wZXJ0eSgncHJldmlld191cmwnKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCd0cicpLmZpbmQoJy5hc3NldC1wcmV2aWV3IGltZycpLmF0dHIoJ3NyYycsIHJlc3BvbnNlLmRhdGEucHJldmlld191cmwpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCd0cicpLmZpbmQoJy5hc3NldC1wcmV2aWV3IC5saXN0LXRodW1ibmFpbCcpLmRhdGEoJ2Z1bGwnLCByZXNwb25zZS5kYXRhLnByZXZpZXdfdXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcbn1cbiIsIlxuaW1wb3J0IHtzaG93QXNzZXR9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dBc3NldFwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIFNob3cgYXNzZXRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuYXNzZXQnLCBzaG93QXNzZXQpXG5cbiAgICAiLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGxvY2FsaXphdGlvbiBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGxldCB0Ym9keSA9ICQoJyNsb2NhbGl6YXRpb25zID4gdGJvZHknKTtcbiAgICBsZXQgdGVtcGxhdGUgPSAkKCcjbG9jYWxpemF0aW9uX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgdGJvZHkucHJlcGVuZCh0ZW1wbGF0ZSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFJlbW92ZSBub3Qgc2F2ZWQgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSb3coZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQodGhpcykucGFyZW50cygndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgbG9jYWxpemF0aW9uIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxpemF0aW9uU3RhdGUgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50QnRuLmNsb3Nlc3QoJ3RyJyk7XG4gICAgY29uc3QgY3VycmVudEtleSA9IHBhcmVudC5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLnZhbCgpO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZHVwbGljYXRlZCBrZXlzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7alF1ZXJ5fVxuICAgICAqL1xuICAgIGNvbnN0IGN1cnJlbnRLZXlEdXBsaWNhdGUgPSAkKCcjbG9jYWxpemF0aW9ucycpLmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykuZmlsdGVyKChfLCBpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBjdXJyZW50S2V5ID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuICAgIGlmIChjdXJyZW50S2V5RHVwbGljYXRlLmxlbmd0aCA+IDEpe1xuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBrZXkgJyArIGN1cnJlbnRLZXl9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBwYXJlbnQuZmluZCgnLmVkaXRhYmxlIGlucHV0Jykuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS5hdHRyKCdyZWFkb25seScsIHRydWUpO1xuXG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVMb2NhbGl6YXRpb25TdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3JlbW92ZVJvd30gZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlUm93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsb2NhbGl6YXRpb25zIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jcmVhdGUtcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVMb2NhbGl6YXRpb25TdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcucmVtb3ZlLXJvdycsIHJlbW92ZVJvdyk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1hZ2ljIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtYWdpYyA+IHRib2R5Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnaW5wdXRbbmFtZT1cImlkXCJdJykudmFsKCk7XG4gICAgICAgIGxldCBpbmNyZW1lbnRJZCA9IHBhcnNlSW50KGxhc3RJRCkgfHwgMDtcbiAgICAgICAgbGV0IHRyTGFzdCA9ICQoJyNtYWdpY190ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8lbWFnaWNfaWQlL2csICsraW5jcmVtZW50SWQpO1xuXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU1hZ2ljU3RhdGUgKCkge1xuICAgIGNvbnN0IGRhdGEgPSAkKCcubWFnaWMtc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIik7XG5cbiAgICBkYXRhLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgJChpdGVtKS5hdHRyKCdyZWFkb25seScsIHRydWUpXG4gICAgfSk7XG5cbiAgICBpZihkYXRhLmxlbmd0aCkge1xuICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlTWFnaWNTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZU1hZ2ljU3RhdGVcIjtcbmltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIG1hZ2ljIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlTWFnaWNTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiaW1wb3J0IFJlcXVlc3RCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBTaG93IGxhc3QgbWFrZXVwIGtpdCBJRFxuICpcbiAqIEBwYXJhbSBlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBuZXcgUmVxdWVzdEJ1aWxkZXIodGhpcy5ocmVmKVxuICAgICAgICAuc3VjY2VzcyhyZXN1bHQgPT4ge1xuICAgICAgICAgICAgJCgnI2xhc3QtbWFrZXVwLWtpdC1pZCcpXG4gICAgICAgICAgICAgICAgLnZhbChyZXN1bHQubWFrZXVwX2tpdF9pZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IGdldExhc3RNYWtldXBLaXRJRCBmcm9tIFwiLi9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SURcIjtcblxuLyoqXG4gKiBTaG93IGxhc3QgbWFrZXVwIGtpdCBJRCBhdCB0aGUgYm9keSBwYXJ0cyBncmlkXG4gKi9cbiQoJyNnZXQtbGFzdC1tYWtldXAta2l0LWlkJylcbiAgICAuY2xpY2soZ2V0TGFzdE1ha2V1cEtpdElEKTtcbiIsImV4cG9ydCBjb25zdCBNQUtFVVBfS0lUX1NIT1dfRk9STSA9ICdNQUtFVVBfS0lUX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge01BS0VVUF9LSVRfU0hPV19GT1JNfSBmcm9tIFwibW9kdWxlcy9tYWtldXAta2l0L2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFByZXZpZXcgSW1hZ2UgKERyb3Bab25lIGluaXQpXG4gKi9cbiQoJy5zaG93LWZvcm0nKS5jbGljayhkcm9wWm9uZUluaXQoTUFLRVVQX0tJVF9TSE9XX0ZPUk0pKTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgaW5ncmVkaWVudCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWVhbF9pbmdyZWRpZW50X2dyb3VwcyA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI21lYWxfaW5ncmVkaWVudF9ncm91cHNfdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuZ3JvdXBfaWQnKS50ZXh0KCk7XG4gICAgbGV0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJW1lYWwtaW5ncmVkaWVudC1ncm91cCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIaWRlIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5ncmVkaWVudERlbGV0ZSgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge2luZ3JlZGllbnREZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGluZ3JlZGllbnREZWxldGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgaW5ncmVkaWVudCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWVhbF9pbmdyZWRpZW50cyA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI21lYWxfaW5ncmVkaWVudHNfdGVtcGxhdGUnKS5odG1sKCk7XG5cbiAgICBsZXQgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuaW5ncmVkaWVudF9pZCcpLnRleHQoKTtcbiAgICBsZXQgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lbWVhbC1pbmdyZWRpZW50JS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmdyZWRpZW50RGVsZXRlKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7aW5ncmVkaWVudERlbGV0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgaW5ncmVkaWVudERlbGV0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtZWFsIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNtZWFsID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjbWVhbF90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5tZWFsX2lkJykudGV4dCgpO1xuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJW1lYWwlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEhpZGUgcm93XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZWFsRGVsZXRlKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBNZWFsIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTWVhbFN0YXRlICgpIHtcbiAgICBjb25zdCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJy5tZWFsLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWRcIik7XG4gICAgY29uc3QgZGF0YSA9ICQoJy5tZWFsLXNhdmUtcGFnZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKHJvdXRlKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgdGJvZHkuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAkKGl0ZW0pLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge21lYWxEZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL21lYWxEZWxldGVcIjtcbmltcG9ydCB7c2F2ZU1lYWxTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVBhZ2VcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9DUkVBVEVELCBBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgZHllIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgbWVhbERlbGV0ZSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIG1lYWxcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEVELCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgc2F2ZU1lYWxTdGF0ZSgpXG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcykoKTtcbiAgICB9KVxuXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcbiAqL1xuJCgnLnNhdmUtcGFnZScpLmNsaWNrKHNhdmVNZWFsU3RhdGUpO1xuIiwiZXhwb3J0IGNvbnN0IE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSA9ICdORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0nO1xuIiwiY29uc3QgVFJBU0ggPSAnVFJBU0gnO1xuY29uc3QgVFJBU0hfRklFTERTX0lEID0gJ3RyYXNoLWZpZWxkcyc7XG5jb25zdCBTRUxFQ1RfSUQgPSAnbmVpZ2hib3ItYWN0aXZpdHktdHlwZS1pZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTRUxFQ1RfSUQpO1xuXG4gICAgaWYgKCFzZWxlY3QgfHwgc2VsZWN0LnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnMubGVuZ3RoICYmIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xuXG4gICAgICAgIGNvbnN0IHRyYXNoRmllbGRzID0gJCgnIycgKyBUUkFTSF9GSUVMRFNfSUQpO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkRWxlbWVudC50ZXh0LnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgVFJBU0g6XG4gICAgICAgICAgICAgICAgdHJhc2hGaWVsZHMucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdHJhc2hGaWVsZHMuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge05FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSBcIi4uL2hhbmRsZXJzL2NoYW5nZVR5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0sIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKE5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSwgc2VsZik7XG5cbiAgICAgICAgY2hhbmdlVHlwZSgpO1xuXG4gICAgICAgICQoJy5uZWlnaGJvci1hY3Rpdml0eS1mb3JtIC5kYXRldGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tICcuL2hhbmRsZXJzL2NoYW5nZVR5cGUnO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgYXdhcmREZWxldGUpXG4gICAgLm9uKCdjaGFuZ2UnLCAnLm5laWdoYm9yLWFjdGl2aXR5LXR5cGUnLCBjaGFuZ2VUeXBlKTtcblxuLyoqXG4gKiBSdW4gdGhlIHNob3cgZm9ybSBoYW5kbGVyLlxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXG4gKi9cbiQoJy5zaG93LWZvcm0nKVxuICAgIC5jbGljayhzaG93Rm9ybSk7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgUFJPRFVDVF9TSE9XX0ZPUk0gPSAnUFJPRFVDVF9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IENsZWF2ZSBmcm9tIFwiY2xlYXZlLmpzXCI7XG5cbi8qKlxuICogUHJpY2UgaW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBuZXcgQ2xlYXZlKHRoaXMsIHtcbiAgICAgICAgbnVtZXJhbDogdHJ1ZSxcbiAgICAgICAgcHJlZml4OiAnJCAnLFxuICAgICAgICByYXdWYWx1ZVRyaW1QcmVmaXg6IHRydWUsXG4gICAgICAgIG9uVmFsdWVDaGFuZ2VkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gTWF0aC5yb3VuZCgrZS50YXJnZXQucmF3VmFsdWUgKiAxMDApO1xuICAgICAgICAgICAgbGV0IHByb2R1Y3RQcmljZSA9ICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCd0ZCcpLmZpbmQoJy5wcm9kdWN0LXByaWNlJyk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gcGFyc2VJbnQocHJvZHVjdFByaWNlLnZhbCgpKSkge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZVxuICAgICAgICAgICAgICAgICAgICAudmFsKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7UFJPRFVDVF9TSE9XX0ZPUk19IGZyb20gXCJtb2R1bGVzL3Byb2R1Y3QvY29uc3RhbnRzXCI7XG5pbXBvcnQgcHJpY2VJbml0IGZyb20gXCJtb2R1bGVzL3Byb2R1Y3QvaGFuZGxlcnMvcHJpY2VJbml0XCI7XG5cbiQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGF3YXJkQ3JlYXRlKVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBhd2FyZERlbGV0ZSk7XG5cbi8qKlxuICogUHJldmlldyBJbWFnZSAoRHJvcFpvbmUgaW5pdClcbiAqL1xuJCgnLnNob3ctZm9ybScpLmNsaWNrKGRyb3Bab25lSW5pdChQUk9EVUNUX1NIT1dfRk9STSkpO1xuXG4kKCcjdGVzdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygndGVzdCcpO1xufSk7XG5cbi8qKlxuICogUHJpY2UgZm9ybWF0XG4gKi9cbiQoJy5wcm9kdWN0LXByaWNlLXZpZXcnKS5lYWNoKHByaWNlSW5pdCk7XG4iLCJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gcGFyc2VJbnQoJCgnLmFkZC1jb3VudGVyJykudmFsKCkpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgndGFibGUudGFibGUgdGJvZHknKTtcbiAgICBjb25zdCBtYXhJZCA9ICQodGhpcykuZGF0YSgnY291bnRlcicpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gJCgndGVtcGxhdGUjY29uZmlnLXJvdycpO1xuXG4gICAgbGV0IG5ld0xlbmd0aCA9IHBhcnNlSW50KHRib2R5LmZpbmQoJ3RyLm5ldy1yb3cnKS5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCB0cklkID0gKG1heElkID4gMCA/IG1heElkIDogMCkgKyBwYXJzZUludCh0Ym9keS5maW5kKCd0ci5uZXctcm93JykubGVuZ3RoKTtcblxuICAgICAgICBsZXQgbmV3Um93ID0gdGVtcGxhdGUuaHRtbCgpLnJlcGxhY2UoLyVpZCUvZywgdHJJZClcbiAgICAgICAgICAgIC5yZXBsYWNlKC8ldHJfaWQlL2csIHRySWQpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWRyYWZ0JS9nLCB0cklkKTtcblxuICAgICAgICAvLyBTZXQgZGVmYXVsdCB2YWx1ZXMgdG8gbmV3IHJvd3NcbiAgICAgICAgbGV0IG5ld1Jvd0h0bWwgPSAkKG5ld1Jvdyk7XG4gICAgICAgICQoJy5kZWZhdWx0LXJvdy12YWx1ZScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBkZWZhdWx0VmFsdWUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgbmV3Um93SHRtbC5maW5kKCcuJyArICQodGhpcykuZGF0YSgnY2xhc3MnKSkuYXR0cigndmFsdWUnLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV3Um93ID0gbmV3Um93SHRtbC5nZXQoMCkub3V0ZXJIVE1MO1xuXG4gICAgICAgIGlmIChuZXdMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKHRib2R5LmZpbmQoJ3RyLm5ldy1yb3cnKS5sYXN0KCkpLmFmdGVyKG5ld1Jvdyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0Ym9keS5wcmVwZW5kKG5ld1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3TGVuZ3RoKys7XG5cbiAgICAgICAgdGJvZHkuZmluZCgnW2RhdGEtYXV0b2luY3JlbWVudD1cIjFcIl0nKS5sYXN0KCkudmFsKHRySWQpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0RmlsZVBhdGggZnJvbSBcImhlbHBlcnMvZ2V0RmlsZVBhdGhcIjtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0XG4gKlxuICogQHBhcmFtIF9cbiAqIEBwYXJhbSBpdGVtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChfLCBpdGVtKSB7XG4gICAgY29uc3QgZHJvcHpvbmVDb250YWluZXIgPSAkKGl0ZW0pO1xuICAgIGNvbnN0IHByZXZpZXdIaWRkZW5JbnB1dCA9IGRyb3B6b25lQ29udGFpbmVyLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBpbml0aWFsaXphdGlvblxuICAgICAqL1xuICAgIGNvbnN0IGRyb3B6b25lQnVpbGRlciA9IG5ldyBEcm9wem9uZUJ1aWxkZXIoaXRlbSlcbiAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUNvbnRhaW5lci5kYXRhKCd1cmwnKSlcbiAgICAgICAgLmVycm9yKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuY2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNldCBwcmV2aWV3XG4gICAgICovXG4gICAgaWYgKCEhcHJldmlld0hpZGRlbklucHV0LnZhbCgpKSB7XG4gICAgICAgIGRyb3B6b25lQnVpbGRlclxuICAgICAgICAgICAgLnNldFByZXZpZXcoXG4gICAgICAgICAgICAgICAgcHJldmlld0hpZGRlbklucHV0LnZhbCgpLFxuICAgICAgICAgICAgICAgIGdldEZpbGVQYXRoKGRyb3B6b25lQ29udGFpbmVyLmRhdGEoJ2ZvbGRlcicpLCBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCkpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICovXG4gICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XG59IiwiLyoqXG4gKiBNYXJrIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkICgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAkKCcjdXBkYXRlLWFsbCcpLnNob3coKTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGRwYSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVBhZ2UgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKCQoXCJ0ci5jaGFuZ2VkXCIpLmZpbmQoJ2lucHV0LCBpbnB1dFt0eXBlPVwiaGlkZGVuXCJdLCBzZWxlY3QsIHRleHRhcmVhJykpO1xuXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YSh7Li4uZGF0YX0pXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICBpZiAocmVzcC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgbm90aWZ5RXJyb3IocmVzcC5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBkcGEgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSb3cgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcm93VG9TYXZlID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpO1xuICAgIGxldCBhY3Rpb24gPSByb3dUb1NhdmUuZGF0YSgnYWN0aW9uJyk7XG4gICAgbGV0IHJvdyA9IHJvd1RvU2F2ZS5maW5kKFwiLmVkaXRhYmxlIHNlbGVjdCwgLmVkaXRhYmxlIGlucHV0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZigkKFwidHIuY2hhbmdlZFwiKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGxldCByID0gY29uZmlybSgnQ2hhbmdlZCBtb3JlIHRoYW4gb25lIHJvdy4gU2F2ZWQgb25seSBjdXJyZW50IHJvdyEnKTtcbiAgICAgICAgaWYociAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXJvd1RvU2F2ZS5oYXNDbGFzcygnY2hhbmdlZCcpKSB7XG4gICAgICAgIG5vdGlmeUVycm9yKCdOb3RoaW5nIHRvIHNhdmUhJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBVVFwiLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICB1cmw6IGFjdGlvbixcbiAgICAgICAgZGF0YTogcm93LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiggcmVzcCApIHtcbiAgICAgICAgICAgIHJvd1RvU2F2ZS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgJC5ub3RpZnkoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3AubWVzc2FnZVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgdHlwZTogcmVzcC50eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoanFYSFIucmVzcG9uc2VKU09OICYmIGpxWEhSLnJlc3BvbnNlSlNPTi5oYXNPd25Qcm9wZXJ0eSgnZXJyb3JzJykpIHtcbiAgICAgICAgICAgICAgICAkLmVhY2goIGpxWEhSLnJlc3BvbnNlSlNPTi5lcnJvcnMsIGZ1bmN0aW9uKGVycm9yS2V5LCBlcnJvciApIHtcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKCBlcnJvciwgZnVuY3Rpb24obWVzc2FnZUtleSwgbWVzc2FnZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IERyb3B6b25lIGZyb20gJ2Ryb3B6b25lJztcbmltcG9ydCBkcm9wem9uZUluaXQgZnJvbSBcIi4vaGFuZGxlcnMvZHJvcHpvbmVJbml0XCI7XG5pbXBvcnQge3NhdmVQYWdlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUGFnZVwiO1xuaW1wb3J0IHttYXJrQ2hhbmdlZH0gZnJvbSBcIi4vaGFuZGxlcnMvbWFya0NoYW5nZWRcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFLCBBV0FSRF9DUkVBVEVELCBBV0FSRF9ERUxFVEUsIENMT1NFX0FXQVJEX01PREFMfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge3NhdmVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVSb3dcIjtcblxuLyoqXG4gKiBUdXJuZWQgb2ZmIHRoZSBEcm9wem9uZSBhdXRvIGluaXRcbiAqXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xuRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdFxuICovXG4kKCcuZHJvcHpvbmUnKS5lYWNoKGRyb3B6b25lSW5pdCk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5zdWJzY3JpYmUgb24gbW9kYWwgY2xvc2VcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShDTE9TRV9BV0FSRF9NT0RBTCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSk7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEVEKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXQgY29sb3ItcGlja2VyIGlucHV0c1xuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmNwMicpLmNvbG9ycGlja2VyKCk7XG5cbiAgICAgICAgJCgnI3VwZGF0ZS1hbGwnKS5jbGljayhzYXZlUGFnZSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmQgYW5kIHNhdmUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJy51cGRhdGUtcm93Jyk7XG5cbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZChfdGhpcykoKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCBzZWxmKTtcbiAgICAgICAgICAgIHNhdmVCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlUm93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJlbW92ZS1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgICQoJyN1cGRhdGUtYWxsJykuc2hvdygpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZHJvcHpvbmUnLCBtYXJrQ2hhbmdlZClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgbWFya0NoYW5nZWQpXG4gICAgLm9uKCdpbnB1dCcsICd0Ym9keSBpbnB1dCwgdGJvZHkgdGV4dGFyZWEnLCBtYXJrQ2hhbmdlZClcbiAgICAub24oJ2NoYW5nZScsICd0Ym9keSBpbnB1dCwgdGJvZHkgc2VsZWN0JywgbWFya0NoYW5nZWQpO1xuIiwiY29uc3QgV0FMS19DQVRFR09SWSA9ICc2JztcbmNvbnN0IFJVTl9DQVRFR09SWSA9JzcnO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxlY3QyID0gJCgnLnRhYmxlJykuZmluZCgnLmVtYmVkLWdyb3VwIHNlbGVjdC5zZWxlY3QyJyk7XG4gICAgICAgIGxldCBzZWxlY3RWYWwgPSAwO1xuICAgICAgICBzZWxlY3QyLmVhY2goZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbCA9ICQoaSkudmFsKCk7XG4gICAgICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcbiAgICAgICAgICAgICAgICAkKGkpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChpKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNob3cgaGlkZSBzcGVlZCBvbiB0cmlnZ2VyIGFkZC1lbWJlZCBidXR0b25cbiAgICAgKi9cbiAgICAub24oJ2FpX2FuaW1hdGlvbicsICcuYWRkLWVtYmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBlbWJlZCA9ICQodGhpcykuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdFZhbCA9IGVtYmVkLmZpbmQoJy5zZWxlY3QyJykudmFsKCk7XG4gICAgICAgIGlmKHNlbGVjdFZhbCA9PT0gV0FMS19DQVRFR09SWSB8fCBzZWxlY3RWYWwgPT09IFJVTl9DQVRFR09SWSkge1xuICAgICAgICAgICAgZW1iZWQuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW1iZWQuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFNob3cgaGlkZSBzcGVlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0VmFsID0gJChpdGVtLnRhcmdldCkudmFsKCk7XG4gICAgICAgIGlmKHNlbGVjdFZhbCA9PT0gV0FMS19DQVRFR09SWSB8fCBzZWxlY3RWYWwgPT09IFJVTl9DQVRFR09SWSkge1xuICAgICAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSA9ICdTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNJztcbiIsIi8qKlxuICogQWRkIGEgbmV3IHNob3AgaW4gYSBkZXBhcnRtZW50cyBncmlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3QgdGFibGUgPSBjdXJyZW50QnRuLmNsb3Nlc3QoJy5zaG9wcy10YWJsZScpLmZpbmQoJ3Rib2R5Jyk7XG4gICAgY29uc3QgZGVwYXJ0bWVudElkID0gY3VycmVudEJ0bi5kYXRhKCdkZXBhcnRtZW50Jyk7XG4gICAgbGV0IGNvdW50ZXIgPSBwYXJzZUludChjdXJyZW50QnRuLmRhdGEoJ2NvdW50JykpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gJCgnI3Nob3AtdGVtcGxhdGUnKVxuICAgICAgICAuaHRtbCgpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJyVkZXBhcnRtZW50SWQlJywgXCJnXCIpLCBkZXBhcnRtZW50SWQpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJyVpbmRleCUnLCBcImdcIiksIGNvdW50ZXIrKyk7XG5cbiAgICBjdXJyZW50QnRuLmRhdGEoJ2NvdW50JywgY291bnRlcik7XG5cbiAgICB0YWJsZS5hcHBlbmQodGVtcGxhdGUpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZm9yIHNob3AgZGVwYXJ0bWVudFxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3Qgc2hvcE5hbWVQcmVmaXggPSAnc2hvcCc7XG4gICAgY29uc3QgZGVwYXJ0bWVudE5hbWVQcmVmaXggPSAnZGVwYXJ0bWVudCc7XG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3QgZmFzdFNhdmVDb250YWluZXIgPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IHNob3BzID0ge307XG4gICAgbGV0IGRlcGFydG1lbnQgPSB7fTtcblxuICAgIGZhc3RTYXZlQ29udGFpbmVyLmZpbmQoJ3Rib2R5IHRyLmNoYW5nZWQgdHIuaW5mbycpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGVwaW5kZXggPSAkKHRoaXMpLmNsb3Nlc3QoJy5kZXBhcnRtZW50JykuaW5kZXgoKTtcbiAgICAgICAgbGV0IGRlcGFydG1lbnRGb3JtRGF0YSA9IGdldEZvcm1EYXRhKCQodGhpcykpO1xuICAgICAgICBmb3IgKGxldCBpIGluIGRlcGFydG1lbnRGb3JtRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBgJHtkZXBhcnRtZW50TmFtZVByZWZpeH1bJHtkZXBpbmRleH1dWyR7aX1dYDtcbiAgICAgICAgICAgIGRlcGFydG1lbnRbaXRlbU5hbWVdID0gZGVwYXJ0bWVudEZvcm1EYXRhW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzKS5uZXh0KCd0ci5zaG9wcycpLmZpbmQoJ3Rib2R5LnNvcnRhYmxlIHRyJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IGdldEZvcm1EYXRhKCQodGhpcykpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gYCR7c2hvcE5hbWVQcmVmaXh9WyR7ZGVwYXJ0bWVudEZvcm1EYXRhLmlkfV1bJHtpbmRleH1dWyR7aX1dYDtcbiAgICAgICAgICAgICAgICBzaG9wc1tpdGVtTmFtZV0gPSBmb3JtRGF0YVtpXTtcbiAgICAgICAgICAgICAgICBzaG9wc1tgJHtzaG9wTmFtZVByZWZpeH1bJHtkZXBhcnRtZW50Rm9ybURhdGEuaWR9XVske2luZGV4fV1bZGVwYXJ0bWVudF1gXSA9IGRlcGFydG1lbnRGb3JtRGF0YS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YSh7Li4uc2hvcHMsIC4uLmRlcGFydG1lbnR9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKCcuY2hhbmdlZCcpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFJhZGlvIGlucHV0IGZyb20gY2hlY2tib3hcbiAqIEJlY2F1c2UgaW5wdXRbdHlwZT1yYWRpb10gZGlkIG5vdCB3b3JrIGNvcnJlY3RseVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSAkKHRoaXMpO1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gY3VycmVudEl0ZW0uY2xvc2VzdCgnLnRhYmxlJykuZmluZCgnLnJhZGlvJyk7XG5cbiAgICBhbGxJdGVtcy5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgIGFsbEl0ZW1zLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XG5cbiAgICBjdXJyZW50SXRlbS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgY3VycmVudEl0ZW0uYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgU29ydGFibGUodGhpcywge1xuICAgICAgICBncm91cDogJ2RlcGFydG1lbnQnLFxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgJChlLml0ZW0pLmNsb3Nlc3QoJy50YWJsZScpLmZpbmQoJ3RyLmRlcGFydG1lbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaW86ICQoZS5pdGVtKS5maW5kKCcucmFkaW8nKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiAkKGUuaXRlbSkuY2xvc2VzdCgnLnRhYmxlJyksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xuXG4vKipcbiAqIFNvcnRhYmxlIEluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG5ldyBTb3J0YWJsZSh0aGlzLCB7XG4gICAgICAgIGdyb3VwOiAnc2hvcHMnLFxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgJChlLml0ZW0pLmNsb3Nlc3QoJ3RyLmRlcGFydG1lbnQnKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJhZGlvOiAkKGUuaXRlbSkuZmluZCgnLnJhZGlvJyksXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogJChlLml0ZW0pLmNsb3Nlc3QoJy50YWJsZScpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXJlbnQuZmluZCgnLnJhZGlvLmNoZWNrZWQ6Z3QoMCknKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yYWRpby5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge1NIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xuaW1wb3J0IERyb3B6b25lQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXJcIjtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0IGFmdGVyIHRoZSBtb2RhbCBvcGVuZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNLCAoKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmV2aWV3XG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZUluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXVybCcpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlldyBTbWFsbFxuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVJbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZS1zbWFsbCcpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwtc21hbGwnKSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRHJvcHpvbmUgSW5pdFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRyb3B6b25lRWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcHJldmlld1VybEVsZW1lbnRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZHJvcHpvbmVJbml0KGRyb3B6b25lRWxlbWVudCwgcHJldmlld1VybEVsZW1lbnQpIHtcbiAgICBpZiAoIWRyb3B6b25lRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cbiAgICAgKi9cbiAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGRyb3B6b25lRWxlbWVudClcbiAgICAgICAgLnNldFVwbG9hZFVybChkcm9wem9uZUVsZW1lbnQuZGF0YXNldC51cmwpXG4gICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAkKHByZXZpZXdVcmxFbGVtZW50KS52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuY2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgICQocHJldmlld1VybEVsZW1lbnQpLnZhbCgnJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgJChkcm9wem9uZUVsZW1lbnQpLmZpbmQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICAgICAgcHJldmlld1VybEVsZW1lbnQudmFsdWUgPSByZXNwb25zZS5maWxlX25hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2V0IHByZXZpZXdcbiAgICAgKi9cbiAgICBpZiAocHJldmlld1VybEVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGRyb3B6b25lQnVpbGRlclxuICAgICAgICAgICAgLnNldFByZXZpZXcoXG4gICAgICAgICAgICAgICAgcHJldmlld1VybEVsZW1lbnQudmFsdWUsXG4gICAgICAgICAgICAgICAgZ2V0RmlsZVBhdGgoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQuZm9sZGVyLCBwcmV2aWV3VXJsRWxlbWVudC52YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgYnVpbGRcbiAgICAgKi9cbiAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcbn0iLCJpbXBvcnQgYWRkU2hvcCBmcm9tIFwiLi9oYW5kbGVycy9hZGRTaG9wXCI7XG5pbXBvcnQgZmFzdFNhdmUgZnJvbSBcIi4vaGFuZGxlcnMvZmFzdFNhdmVcIjtcbmltcG9ydCByYWRpb0lucHV0IGZyb20gXCIuL2hhbmRsZXJzL3JhZGlvSW5wdXRcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcbmltcG9ydCBzb3J0YWJsZUluaXQgZnJvbSBcIm1vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdFwiO1xuaW1wb3J0IHNvcnRhYmxlRGVwYXJ0bWVudEluaXQgZnJvbSBcIm1vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlRGVwYXJ0bWVudEluaXRcIjtcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0XG4gKi9cbnNob3dGb3JtKCk7XG5cbiQoZG9jdW1lbnQpXG4gICAgLyoqXG4gICAgICogUmFkaW8gYnV0dG9ucyBiZWhhdmlvclxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5yYWRpbycsIHJhZGlvSW5wdXQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3cgdG8gdGhlIGRwYSBncmlkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0ci5kZXBhcnRtZW50JykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRG9jdW1lbnQgcmVhZHlcbiAgICAgKi9cbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGNsYXNzIHRvIGNoZWNrZWQgcmFkaW9zXG4gICAgICAgICAqL1xuICAgICAgICAkKCcucmFkaW9bY2hlY2tlZF0nKS5hZGRDbGFzcygnY2hlY2tlZCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYSBuZXcgc2hvcCBpbiBhIGRlcGFydG1lbnRzIGdyaWRcbiAgICAgICAgICovXG4gICAgICAgICQoJy5hZGQtc2hvcCcpLmNsaWNrKGFkZFNob3ApO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGYXN0IHNhdmVcbiAgICAgICAgICovXG4gICAgICAgICQoJy5mYXN0LXNhdmUnKS5jbGljayhmYXN0U2F2ZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1ha2UgdHIgdG8gc29ydGFibGVcbiAgICAgICAgICovXG4gICAgICAgICQoJy5zb3J0YWJsZScpLmVhY2goc29ydGFibGVJbml0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZSB0ciB0byBzb3J0YWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLnNvcnRhYmxlLWRlcGFydG1lbnQnKS5lYWNoKHNvcnRhYmxlRGVwYXJ0bWVudEluaXQpO1xuICAgIH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtZWFsIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNyZWxlYXNlID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjcmVsZWFzZV90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBjb25zdCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5yZWxlYXNlX2lkJykudmFsKCk7XG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lcmVsZWFzZSUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuXG4gICAgICAgIHRib2R5LmZpbmQoJy5kYXRldGltZXBpY2tlcicpXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIE1lYWwgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQYWdlICgpIHtcbiAgICBjb25zdCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJy5yZWxlYXNlLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkXCIpO1xuICAgIGNvbnN0IGRhdGEgPSAkKCcucmVsZWFzZS1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0LCAuY2hhbmdlZCB0ZXh0YXJlYVwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKHJvdXRlKVxuICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHRib2R5LmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlUGFnZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVBhZ2VcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIG9uIHRoZSBkeWVzIHBhZ2VcbiAqL1xuJCgnLnNhdmUtcGFnZScpLmNsaWNrKHNhdmVQYWdlKTtcbiIsIiQoZG9jdW1lbnQpXG5cbiAgICAub24oJ2NsaWNrJywgJ3RyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ3RkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZigkKHRoaXMpLmF0dHIoJ3N0eWxlJykpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQnLCAnI2U3ZTdlNycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI3NvdW5kID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjc291bmRfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuc291bmRfaWQnKS52YWwoKTtcbiAgICBjb25zdCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVzb3VuZF9pZCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgICAgIHRib2R5LmZpbmQoJy5zZWxlY3QyJykuc2VsZWN0MigpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNvdW5kU3RhdGUgKCkge1xuICAgIGNvbnN0IGRhdGEgPSAkKCcuc291bmQtc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZVNvdW5kU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBzb3VuZCBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVNvdW5kU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgVEFNQVRPT0xfU0hPV19GT1JNID0gJ1RBTUFUT09MX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtUQU1BVE9PTF9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShUQU1BVE9PTF9TSE9XX0ZPUk0sIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKFRBTUFUT09MX1NIT1dfRk9STSwgc2VsZik7XG5cbiAgICAgICAgJCgnLm5laWdoYm9yLWFjdGl2aXR5LWZvcm0gLmRhdGVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgYXdhcmREZWxldGUpO1xuXG4vKipcbiAqIFJ1biB0aGUgc2hvdyBmb3JtIGhhbmRsZXIuXG4gKiBBZnRlciBjbGljayBhdCBjcmVhdGUgb3IgZWRpdCBidXR0b25cbiAqL1xuJCgnLnNob3ctZm9ybScpXG4gICAgLmNsaWNrKHNob3dGb3JtKTtcbiIsImV4cG9ydCBjb25zdCBTRUFSQ0hfVVNFUl9BU1NFVFMgICAgICA9ICdTRUFSQ0hfVVNFUl9BU1NFVFMnO1xuZXhwb3J0IGNvbnN0IFNVQk1JVF9VU0VSX1BBUlRfRk9STSAgID0gJ1NVQk1JVF9VU0VSX1BBUlRfRk9STSc7XG5leHBvcnQgY29uc3QgREVMRVRFX05FSUdIQk9SICAgICAgICAgPSAnREVMRVRFX05FSUdIQk9SJztcbmV4cG9ydCBjb25zdCBBRERfTkVJR0hCT1IgICAgICAgICAgICA9ICdBRERfTkVJR0hCT1InO1xuZXhwb3J0IGNvbnN0IEdFVF9ORUlHSEJPUlMgICAgICAgICAgID0gJ0dFVF9ORUlHSEJPUlMnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ORUlHSEJPUlMgICAgICAgID0gJ1VQREFURV9ORUlHSEJPUlMnO1xuXG5leHBvcnQgY29uc3QgTkVJR0hCT1JfR1JJRF9JRCA9ICduZWlnaGJvci1ncmlkJzsiLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5cbi8qKlxuICogQWRkIGNvbW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKCQoJyNjb2xsZWN0aWJsZS1mb3JtJykuZmluZCgnaW5wdXQnKSk7XG5cbiAgICBuZXcgaHR0cCgkKCcjYWRkLWNvbGxlY3RpYmxlJykuYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgLmRhdGEoe2RhdGF9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwLnR5cGUgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvcm0gPSAkKHJlc3AuZGF0YSk7XG4gICAgICAgICAgICAgICAgJCgnIycgKyByZXNwLmNvbnRhaW5lcikucmVwbGFjZVdpdGgoZm9ybSk7XG4gICAgICAgICAgICAgICAgbm90aWZ5U3VjY2VzcygnVXNlciBjb2xsZWN0aWJsZSB1cGRhdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogQWRkIGNvbW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBuZXcgaHR0cCgkKHRoaXMpLmNsb3Nlc3QoJ2EnKS5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BPU1QnKVxuICAgICAgICAuZGF0YSh7ZGVzY3JpcHRpb246ICQoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWwoKX0pXG4gICAgICAgIC5zdWNjZXNzKHIgPT4ge1xuICAgICAgICAgICAgaWYgKHIuc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJCgnW25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgJCgnI3VzZXItY29tbWVudHMnKS5wcmVwZW5kKCc8dHI+PHRkPicgKyByLm1vZGVsLmRlc2NyaXB0aW9uICsgJzwvdGQ+PHRkPicgKyByLmNyZWF0ZWRfYnkgKyAnPC90ZD48dGQ+JyArIHIuY3JlYXRlZF9hdCArICcgUFNUPC90ZD48dGQ+PGEgaHJlZj1cImh0dHA6Ly9jbXMtZGV2LmxvY2FsL3JlbW92ZS1jb21tZW50LycgKyByLm1vZGVsLmlkICsgJ1wiIGNsYXNzPVwiYWpheC1jb25maXJtLWFjdGlvblwiIGRhdGEtbWV0aG9kPVwiREVMRVRFXCIgZGF0YS1oZWFkZXI9XCJEZWxldGUgY29tbWVudD9cIiBkYXRhLWJ0bi1uYW1lPVwiRGVsZXRlXCIgZGF0YS1idG4tY2xhc3M9XCJidG4tZGFuZ2VyIGJ0bi1zbVwiIGRhdGEtZGlzbWlzcz1cIjFcIiBkYXRhLXJlbG9hZD1cIjFcIj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPkRlbGV0ZTwvYnV0dG9uPjwvYT48L3RkPjwvdHI+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIFN5bmNocm9uaXplIG1vdmUtcGxhY2VtZW50LXNlbGVjdCBzZWxlY3RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZWN0ZWRTdG9yYWdlID0gJCh0aGlzKS52YWwoKTtcbiAgICAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0nKS5maW5kKCcubW92ZS1wbGFjZW1lbnQtc2VsZWN0JykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICBpZiAoc2VsZWN0ZWRTdG9yYWdlICE9ICQodGhpcykudmFsKCkpIHtcbiAgICAgICAgICAgICQodGhpcykudmFsKHNlbGVjdGVkU3RvcmFnZSkuY2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7VVBEQVRFX05FSUdIQk9SUywgTkVJR0hCT1JfR1JJRF9JRH0gZnJvbSBcIm1vZHVsZXMvdXNlcnMvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2V0IHBhZ2UgbGltaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGxldCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKSArICcmcGFnZV9saW1pdD0nICsgJCh0aGlzKS52YWwoKTtcbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnR0VUJylcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgJChgIyR7TkVJR0hCT1JfR1JJRF9JRH1gKS5yZXBsYWNlV2l0aChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59XG4iLCIvKipcbiAqIENoYW5nZSBwbGFjZW1lbnQgc2VsZWN0IGluIEFkZCBBc3NldHMgYmxvY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHBsYWNlbWVudE5hbWUgPSAkKCcjYWRkLWFzc2V0cy1ibG9jay1wbGFjZW1lbnQtbmFtZScpO1xuICAgIGlmICgkKHRoaXMpLnZhbCgpID4gMCkge1xuICAgICAgICBwbGFjZW1lbnROYW1lLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlbWVudE5hbWUuc2hvdygpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5laWdoYm9yc0NvdW50ID0gJCgnI25laWdoYm9ycy1jb3VudCcpO1xuICAgIGlmKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgbmVpZ2hib3JzQ291bnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZWlnaGJvcnNDb3VudC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogSGlkZSBhc3NldHMgaW4gcGxhY2VtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgY3VycmVudEVsZW1lbnQuc2libGluZ3MoJy5sb2FkLWFzc2V0cycpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgJCgnI2Fzc2V0LWNvbnRhaW5lci0nICsgY3VycmVudEVsZW1lbnQuZGF0YSgncGxhY2VtZW50JykpLmh0bWwoJycpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIFBMQUNFTUVOVF9BU1NFVFNfUk9VVEUgLSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcbiAqIEluaXRlZCBpbiB1c2VyL2VkaXQuYmxhZGUucGhwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCBwbGFjZW1lbnQgPSBjdXJyZW50RWxlbWVudC5kYXRhKCdwbGFjZW1lbnQnKTtcblxuICAgIGN1cnJlbnRFbGVtZW50LnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG4gICAgY3VycmVudEVsZW1lbnQuc2libGluZ3MoJy5oaWRlLWFzc2V0cycpLnRvZ2dsZUNsYXNzKCdoaWRlJyk7XG5cbiAgICBsb2FkUGFydChQTEFDRU1FTlRfQVNTRVRTX1JPVVRFICsgJyZwbGFjZW1lbnQ9JyArIHBsYWNlbWVudCwgJCgnI2Fzc2V0LWNvbnRhaW5lci0nICsgcGxhY2VtZW50KSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTG9hZCBwYXJ0IGZvciBlZGl0IHVzZXIgcGFnZVxuICovXG5mdW5jdGlvbiBsb2FkUGFydChhY3Rpb24sIGVsZW1lbnQpIHtcbiAgICBuZXcgaHR0cChhY3Rpb24pXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gJChyZXNwb25zZSk7XG4gICAgICAgICAgICBpdGVtcy5maW5kKCcubGlzdC10aHVtYm5haWwnKS5wb3BvdmVyKHtcbiAgICAgICAgICAgICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cIicgKyAkKHRoaXMpLmRhdGEoJ2Z1bGwnKSArICdcIj4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChpdGVtcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59IiwiLyoqXG4gKiBTZWxlY3Qgcm93c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY291bnRTZWxlY3RvciA9ICQodGhpcykucGFyZW50cygndGQsIHRoJykuZmluZCgnLmNvdW50LWZvci1zZWxlY3QnKTtcbiAgICBjb25zdCByb3dzRm9yU2VsZWN0ID0gJCh0aGlzKS5wYXJlbnRzKCd0YWJsZScpLmZpbmQoJy5mb3Itc2VsZWN0Jyk7XG5cbiAgICBsZXQgY291bnRGb3JTZWxlY3QgPSBjb3VudFNlbGVjdG9yLnZhbCgpIHx8IDA7XG4gICAgaWYgKGNvdW50Rm9yU2VsZWN0ID09PSAwKSB7XG4gICAgICAgIGNvdW50Rm9yU2VsZWN0ID0gcm93c0ZvclNlbGVjdC5sZW5ndGg7XG4gICAgICAgIGNvdW50U2VsZWN0b3IudmFsKGNvdW50Rm9yU2VsZWN0KTtcbiAgICB9XG5cbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICByb3dzRm9yU2VsZWN0LmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChjb3VudEZvclNlbGVjdCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvdW50Rm9yU2VsZWN0LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm93c0ZvclNlbGVjdC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCB7VVBEQVRFX05FSUdIQk9SUywgTkVJR0hCT1JfR1JJRF9JRH0gZnJvbSBcIm1vZHVsZXMvdXNlcnMvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogVXBkYXRlIG5laWdoYm9yIGdyaWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShVUERBVEVfTkVJR0hCT1JTLCAocmVzcG9uc2UsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoVVBEQVRFX05FSUdIQk9SUywgc2VsZik7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBuZXcgaHR0cCgkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5hdHRyKCdhY3Rpb24nKSlcbiAgICAgICAgICAgICAgICAubWV0aG9kKCdHRVQnKVxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJChgIyR7TkVJR0hCT1JfR1JJRF9JRH1gKS5yZXBsYWNlV2l0aChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBRERfTkVJR0hCT1J9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTZXQgbmVpZ2hib3IgYXMgYWN0aXZlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQUREX05FSUdIQk9SLCByZXNwID0+IHtcbiAgICAgICAgaWYgKHJlc3AudHlwZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICQoJyNkZWxldGUtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI2FkZC1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjbmVpZ2hib3Itc3RhdHVzLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmh0bWwocmVzcC5kYXRhLnN0YXR1c190ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7REVMRVRFX05FSUdIQk9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2V0IG5laWdoYm9yIGFzIGRlbGV0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShERUxFVEVfTkVJR0hCT1IsIHJlc3AgPT4ge1xuICAgICAgICBpZiAocmVzcC50eXBlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgJCgnI2RlbGV0ZS1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjYWRkLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNuZWlnaGJvci1zdGF0dXMtJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuaHRtbChyZXNwLmRhdGEuc3RhdHVzX3RleHQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtHRVRfTkVJR0hCT1JTLCBORUlHSEJPUl9HUklEX0lEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogVXBkYXRlIG5laWdoYm9yIGdyaWQgaW4gc2VhcmNoaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoR0VUX05FSUdIQk9SUywgcmVzcCA9PiB7XG4gICAgICAgICQoYCMke05FSUdIQk9SX0dSSURfSUR9YCkucmVwbGFjZVdpdGgocmVzcCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtTRUFSQ0hfVVNFUl9BU1NFVFN9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTZWFyY2ggdXNlciBhc3NldHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTRUFSQ0hfVVNFUl9BU1NFVFMsIGRhdGEgPT4ge1xuICAgICAgICAkKCcjc2VhcmNoLWFzc2V0cy1jb250YWluZXInKS5yZXBsYWNlV2l0aChkYXRhKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuaW1wb3J0IHtTVUJNSVRfVVNFUl9QQVJUX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTdWJtaXQgdXNlciBwYXJ0IGZvcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShTVUJNSVRfVVNFUl9QQVJUX0ZPUk0sIHJlc3AgPT4ge1xuICAgICAgICBsZXQgZm9ybSA9ICQocmVzcC5kYXRhKTtcblxuICAgICAgICAkKCcjJyArIHJlc3AuY29udGFpbmVyKS5yZXBsYWNlV2l0aChmb3JtKTtcbiAgICAgICAgZm9ybS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbmAgICAgICAgIG5vdGlmeVN1Y2Nlc3MoJ1VzZXIgZGF0YSB1cGRhdGVkJyk7XG5gICAgIH0pO1xufVxuIiwiaW1wb3J0IHNlYXJjaFVzZXJBc3NldHMgICAgICBmcm9tIFwiLi9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0c1wiO1xuaW1wb3J0IHN1Ym1pdFVzZXJQYXJ0Rm9ybSAgICBmcm9tIFwiLi9saXN0ZW5lcnMvc3VibWl0VXNlclBhcnRGb3JtXCI7XG5pbXBvcnQgZGVsZXRlTmVpZ2hib3IgICAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9kZWxldGVOZWlnaGJvclwiO1xuaW1wb3J0IHNlYXJjaE5laWdoYm9yICAgICAgICBmcm9tIFwiLi9saXN0ZW5lcnMvc2VhcmNoTmVpZ2hib3JcIjtcbmltcG9ydCBhZGROZWlnaGJvciAgICAgICAgICAgZnJvbSBcIi4vbGlzdGVuZXJzL2FkZE5laWdoYm9yXCI7XG5pbXBvcnQgbG9hZFBsYWNlbWVudEFzc2V0cyAgIGZyb20gXCIuL2hhbmRsZXJzL2xvYWRQbGFjZW1lbnRBc3NldHNcIjtcbmltcG9ydCBoaWRlUGxhY2VtZW50QXNzZXRzICAgZnJvbSBcIi4vaGFuZGxlcnMvaGlkZVBsYWNlbWVudEFzc2V0c1wiO1xuaW1wb3J0IGNoYW5nZVBsYWNlbWVudCAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VQbGFjZW1lbnRcIjtcbmltcG9ydCBjaGFuZ2VSYW5kb21OZWlnaGJvcnMgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUmFuZG9tTmVpZ2hib3JzXCI7XG5pbXBvcnQgY2hhbmdlTW92ZVBsYWNlbWVudCAgIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZU1vdmVQbGFjZW1lbnRcIjtcbmltcG9ydCBzZWxlY3RSb3dzICAgICAgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvc2VsZWN0Um93c1wiO1xuaW1wb3J0IHVwZGF0ZU5laWdoYm9ycyAgICAgICBmcm9tIFwiLi9oYW5kbGVycy91cGRhdGVOZWlnaGJvcnNcIjtcbmltcG9ydCBjaGFuZ2VQYWdlTGltaXQgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUGFnZUxpbWl0XCI7XG5pbXBvcnQgYWRkQ29tbWVudCAgICAgICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL2FkZENvbW1lbnRcIjtcbmltcG9ydCBhZGRDb2xsZWN0aWJsZSAgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvYWRkQ29sbGVjdGlibGVcIjtcblxuaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG4vKipcbiAqIFNlYXJjaCB1c2VyIGFzc2V0cyBsaXN0ZW5lclxuICovXG5zZWFyY2hVc2VyQXNzZXRzKCk7XG5cbi8qKlxuICogU3VibWl0IHVzZXIgcGFydCBmb3JtIGxpc3RlbmVyXG4gKi9cbnN1Ym1pdFVzZXJQYXJ0Rm9ybSgpO1xuXG4vKipcbiAqIERlbGV0ZSBOZWlnaGJvclxuICovXG5kZWxldGVOZWlnaGJvcigpO1xuXG4vKipcbiAqIEFkZCBOZWlnaGJvclxuICovXG5hZGROZWlnaGJvcigpO1xuXG4vKipcbiAqIFNlYXJjaCBOZWlnaGJvcnNcbiAqL1xuc2VhcmNoTmVpZ2hib3IoKTtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIExvYWQgYXNzZXRzIGluIHBsYWNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmxvYWQtYXNzZXRzJywgbG9hZFBsYWNlbWVudEFzc2V0cylcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBwbGFjZW1lbnQgaW4gQWRkIEFzc2V0cyBibG9ja1xuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNwbGFjZW1lbnQtZm9yLWFzc2V0JywgY2hhbmdlUGxhY2VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG1vZGUgZm9yIGFkZCBuZWlnaGJvcnNcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjaXMtcmFuZG9tLW5laWdoYm9ycycsIGNoYW5nZVJhbmRvbU5laWdoYm9ycylcblxuICAgIC8qKlxuICAgICAqIEhpZGUgYXNzZXRzIGluIHBsYWNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtYXNzZXRzJywgaGlkZVBsYWNlbWVudEFzc2V0cylcblxuICAgIC8qKlxuICAgICAqIEF1dG8gc2VsZWN0IHJvd3NcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuc2VsZWN0LXJvd3MnLCBzZWxlY3RSb3dzKVxuXG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemUgbW92ZS1wbGFjZW1lbnQtc2VsZWN0IHNlbGVjdHNcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcubW92ZS1wbGFjZW1lbnQtc2VsZWN0JywgY2hhbmdlTW92ZVBsYWNlbWVudClcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBuZWlnaGJvciByZXF1ZXN0XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLW5laWdoYm9yLXJlcXVlc3QsICNhZGQtbmVpZ2hib3JzJywgdXBkYXRlTmVpZ2hib3JzKVxuICAgIC8qKlxuICAgICAqIFNldCBwYWdlIGxpbWl0XG4gICAgICovXG4gICAgIC5vbignY2hhbmdlJywgJy5uZWlnaGJvci1wYWdlLWxpbWl0JywgY2hhbmdlUGFnZUxpbWl0KVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNhZGQtY29tbWVudCcsIGFkZENvbW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgY29sbGVjdGlibGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJyNhZGQtY29sbGVjdGlibGUnLCBhZGRDb2xsZWN0aWJsZSlcbjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=