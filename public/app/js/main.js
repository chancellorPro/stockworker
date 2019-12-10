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

$(document).on('click', '#product_id', function () {
  $('#product_id').prev('.select2-container').find('.select2-search__field').focus();
}).on('click', '.reports', function () {
  $('#send-report').attr('disabled', true);
  setTimeout(function () {
    var element = $("#html-content-holder");
    var canvas_handler = $("#canvas_handler");
    var submitBtn = $('#load');
    submitBtn.data('loading-text', '<i class="fa fa-spinner fa-spin"></i> Подготовка');
    submitBtn.button('loading');
    submitBtn.attr('disabled', true);
    canvas_handler.empty();
    element.width(480);
    element.css('margin', 20);
    element.css({
      "border-color": "#2d2d2d",
      "border-width": "2px",
      "border-style": "solid"
    });
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
      $('#send-report').attr('disabled', false);
      setTimeout(function () {
        submitBtn.button('reset');
        $('#send-report').attr('disabled', false);
      }, 4000);
    });
  }, 300);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2FjcmFudW0xL3Byb2plY3RzL3N0b2Nrd29ya2VyL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9odHRwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbENvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3RpZnkvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGlmeS9ub3RpZnlTdWNjZXNzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29ic2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2V4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvYWRkRW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvYWpheFBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvY29uZmlybU1vZGFsLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2Zhc3RTYXZlLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9maWx0ZXJEYXRlUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaGFuZGxlcnMvbW9kYWxEYXRhLmpzIiwid2VicGFjazovLy8uL2hhbmRsZXJzL3BhZ2VMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9yZW1vdmVFbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9oYW5kbGVycy9zdWJtaXRGb3JtLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0RmlsZVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9nZXRGb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldFN1YkZvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saXN0ZW5lcnMvYXdhcmRDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL2F3YXJkRGVsZXRlLmpzIiwid2VicGFjazovLy8uL2xpc3RlbmVycy9kcm9wWm9uZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbGlzdGVuZXJzL3VwZGF0ZVNhdmVBbGxCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcyBzeW5jIFxcLlxcL1tcXHctX10rXFwvbW9kdWxlXFwuanMkIiwid2VicGFjazovLy8uL21vZHVsZXMgc3luYyBtb2R1bGVzKC4qKW1vZHVsZVxcLmpzJCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi1sb2cvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvY29sbGFwc2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FjdGlvbi10eXBlL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvaGFuZGxlcnMvcmVtb3ZlQWN0aW9uVHlwZVN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWN0aW9uLXR5cGUvbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hY3Rpb24tdHlwZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvYWRkLW1lL2hhbmRsZXJzL3NhdmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2FkZC1tZS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hbm5vdW5jZW1lbnRzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fubm91bmNlbWVudHMvbGlzdGVuZXJzL3Nob3dGb3JtLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYW5ub3VuY2VtZW50cy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy1sb2cvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hc3NldHMvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Fzc2V0cy9oYW5kbGVycy9jb3B5QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2Rvd25sb2FkQXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL2dldExhc3RDb2xsZWN0aW9uTnVtYmVyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL2hhbmRsZXJzL21hcmtDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvYXNzZXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2F3YXJkL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9oYW5kbGVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Jhbm5lci9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9iYW5uZXIvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvY29weUFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2NvcHlBc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9kb3dubG9hZEFkcC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy1hZHBzL2hhbmRsZXJzL2hpZGVBcmNoaXZlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvaGlkZVRhc2tzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2VsZWN0Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLWFkcHMvaGFuZGxlcnMvc2hvd0FyY2hpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9oYW5kbGVycy9zaG93VGFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbXMtYWRwcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL2hhbmRsZXJzL2hpZGVBZGRpdGlvbmFsUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vaGFuZGxlcnMvbWFya0lucHV0QXNDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGVjdGlvbi9oYW5kbGVycy9zb3J0YWJsZUluaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsZWN0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbGxlY3Rpb24vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Nyb3AvaGFuZGxlcnMvYWRkUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY3JvcC9oYW5kbGVycy9kZWxldGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jcm9wL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3QvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGFpbHktbG9vdC9oYW5kbGVycy9zYXZlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYWlseS1sb290L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhaWx5LWxvb3Qvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGVwbG95L2RlcGxveVN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9oYW5kbGVycy9jaGFuZ2VUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvaGFuZGxlcnMvc2hvd0RlcGVuZGVuY3lQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kZXBsb3kvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kcGEvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHBhL2hhbmRsZXJzL3NhdmVEcGFTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RwYS9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9keWUvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2NoYW5nZVJvd0luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL2hhbmRsZXJzL2R5ZVNhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZHllL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvYXNzZXRDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hhbmRsZXJzL2Zhc3RTYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvaGFuZGxlcnMvc29ydGFibGVJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvZ2lmdC13cmFwL2hlbHBlcnMvcG9zaXRpb25VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9naWZ0LXdyYXAvbGlzdGVuZXJzL2FkZFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2dpZnQtd3JhcC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9saW5rZWQtYXNzZXRzL2hhbmRsZXJzL3Nob3dBc3NldC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9oYW5kbGVycy9yZW1vdmVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9sb2NhbGl6YXRpb24vaGFuZGxlcnMvc2F2ZUxvY2FsaXphdGlvblN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbG9jYWxpemF0aW9uL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21hZ2ljL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFnaWMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC1hc3NldC9oYW5kbGVycy9nZXRMYXN0TWFrZXVwS2l0SUQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tYWtldXAta2l0LWFzc2V0L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21ha2V1cC1raXQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFrZXVwLWtpdC9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnQtZ3JvdXBzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvaGFuZGxlcnMvaW5ncmVkaWVudERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudC1ncm91cHMvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50cy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZWFsLWluZ3JlZGllbnRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvaGFuZGxlcnMvYWRkTmV3Um93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9tZWFsRGVsZXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWVhbC9oYW5kbGVycy9zYXZlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lYWwvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmVpZ2hib3ItYWN0aXZpdHkvaGFuZGxlcnMvY2hhbmdlVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHJvZHVjdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9wcm9kdWN0L2hhbmRsZXJzL3ByaWNlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Byb2R1Y3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2UvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvcHVyY2hhc2Uvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL2Ryb3B6b25lSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NldHRpbmdzL2hhbmRsZXJzL21hcmtDaGFuZ2VkLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvaGFuZGxlcnMvc2F2ZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXR0aW5ncy9oYW5kbGVycy9zYXZlUm93LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2V0dGluZ3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL2FkZFNob3AuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvZmFzdFNhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvaGFuZGxlcnMvcmFkaW9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZURlcGFydG1lbnRJbml0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L2hhbmRsZXJzL3NvcnRhYmxlSW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9saXN0ZW5lcnMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLWRlcGFydG1lbnQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9oYW5kbGVycy9hZGROZXdSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXJlbGVhc2VzL2hhbmRsZXJzL3NhdmVQYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zaG9wLXN0YXRzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL2FkZE5ld1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3NvdW5kL2hhbmRsZXJzL3NhdmVTb3VuZFN0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc291bmQvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvc3VidHlwZS1hdHRyaWJ1dGVzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL2xpc3RlbmVycy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhbWF0b29sL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2FkZENvbGxlY3RpYmxlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvYWRkQ29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL2NoYW5nZU1vdmVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VQYWdlTGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9jaGFuZ2VSYW5kb21OZWlnaGJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy9oaWRlUGxhY2VtZW50QXNzZXRzLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdXNlcnMvaGFuZGxlcnMvbG9hZFBsYWNlbWVudEFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2hhbmRsZXJzL3NlbGVjdFJvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9oYW5kbGVycy91cGRhdGVOZWlnaGJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvYWRkTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoTmVpZ2hib3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9saXN0ZW5lcnMvc2VhcmNoVXNlckFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3VzZXJzL2xpc3RlbmVycy9zdWJtaXRVc2VyUGFydEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy91c2Vycy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJTSVpFUyIsInNtIiwibWQiLCJsZyIsIkxPQURJTkdfVEVYVCIsImRyb3B6b25lQ29udGFpbmVyIiwiY29uZmlnIiwiX2NvbmZpZyIsIl9kcm9wem9uZUNvbnRhaW5lciIsIl9jYW5jZWxCdXR0b24iLCIkIiwiZmluZCIsInVybCIsIl91cGxvYWRVcmwiLCJuYW1lIiwiX3ByZXZpZXciLCJjYWxsYmFjayIsIl9lcnJvckNhbGxiYWNrIiwiX2NhbmNlbENhbGxiYWNrIiwiX3N1Y2Nlc3NDYWxsYmFjayIsIl9kcm9wem9uZUJ1aWxkZXIiLCJkcm9wem9uZUZhaWwiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwidXBsb2FkTXVsdGlwbGUiLCJhY2NlcHRlZEZpbGVzIiwiaGVhZGVycyIsIkNTUkZfVE9LRU4iLCJpbml0IiwiZW1pdCIsIm9uIiwidGV4dCIsImZpbGUiLCJyZXNwb25zZSIsImNsaWNrIiwiRHJvcHpvbmUiLCJfdXJsIiwiX21ldGhvZCIsIl9kYXRhIiwiX2Vycm9yIiwiZXJyb3JIYW5kbGVyIiwiX3N1Y2Nlc3MiLCJzdWNjZXNzSGFuZGxlciIsIl9jb21wbGV0ZSIsIm1ldGhvZCIsImRhdGEiLCJmbiIsImFqYXgiLCJ0eXBlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJzdWNjZXNzIiwiY29tcGxldGUiLCJyb3V0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJub3RpZnlFcnJvciIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJub3RpZnlTdWNjZXNzIiwibW9kYWxzQ29udGFpbmVyIiwiTU9EQUxfU0laRVMiLCJtb2RhbEluZGV4IiwibW9kYWxDb3VudGVyIiwiX2lkIiwic2l6ZSIsIl9zaXplIiwiaGVhZGVyIiwiX2hlYWRlciIsImJvZHkiLCJfYm9keSIsImZvb3RlciIsIl9mb290ZXIiLCJkYXRhc2V0IiwiX2RhdGFzZXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJfYmVmb3JlQnVpbGRDYWxsYmFjayIsIl9hZnRlckJ1aWxkQ2FsbGJhY2siLCJfb25DbG9zZUNhbGxiYWNrIiwiY29udGVudCIsInB1c2giLCJodG1sIiwiX2dldElEIiwiam9pbiIsIl9nZXRTaXplIiwiX2JlZm9yZUJ1aWxkIiwiX2dldEhlYWRlciIsIl9nZXRCb2R5IiwiX2dldEZvb3RlciIsInNlbGVjdDIiLCJkYXRldGltZXBpY2tlciIsImZvcm1hdCIsImF1dG9jbG9zZSIsIm1pblZpZXciLCJzdGlja3lUYWJsZUhlYWRlcnMiLCJfYWZ0ZXJCdWlsZCIsIm9mZiIsIl9vbkNsb3NlIiwibW9kYWwiLCJnZXRNb2RhbENvdW50ZXIiLCJtb2RhbENvbmZpcm0iLCJNb2RhbEJ1aWxkZXIiLCJub3RpZnkiLCJ6X2luZGV4IiwiRXZlbnRPYnNlcnZlciIsInN1YnNjcmliZXJzIiwiZXZlbnQiLCJoYW5kbGVyIiwiX2xvZyIsImZvckVhY2giLCJzdGF0ZSIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJ0b1VwcGVyQ2FzZSIsIm9ic2VydmVyIiwiU2F2ZWRJdGVtTm90Rm91bmQiLCJFcnJvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRCdXR0b24iLCJ0YXJnZXQiLCJ0ZW1wbGF0ZSIsImlkUGxhY2Vob2xkZXIiLCJyb3dJZCIsImVtYmVkRm9ybSIsImVtYmVkQmxvY2tJZCIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiUmVnRXhwIiwibGVuZ3RoIiwiZGlzcGF0Y2giLCJ0cmlnZ2VyIiwiY29udGFpbmVyIiwicGFyZW50cyIsImh0dHAiLCJyZXBsYWNlV2l0aCIsInNlbmQiLCJkYXRhU2V0IiwicGFyZW50QnV0dG9uIiwiYnRuQ2xhc3MiLCJidG5OYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImhhc093blByb3BlcnR5IiwiY2xvc2VzdCIsInNlcmlhbGl6ZUFycmF5IiwicGFyc2VJbnQiLCJyZWxvYWQiLCJkaXNtaXNzIiwiY3VycmVudEJ0biIsInNhdmVkSXRlbSIsImF0dHIiLCJnZXRGb3JtRGF0YSIsIkNPTlRBSU5FUl9TRUxFQ1RPUiIsIlBBR0VfU0FWRUQiLCJVUERBVEVfU0FWRV9BTExfQlVUVE9OIiwiZm9ybUl0ZW1zIiwibWFya0NoYW5nZWQiLCJkYXRlRm9ybWF0IiwiZGF0ZVJhbmdlSW5wdXRzIiwic2VsZWN0ZWRPcHRpb24iLCJkYXRlRnJvbSIsImRhdGVUbyIsInNlbGVjdGVkVmFsdWUiLCJ2YWwiLCJjc3MiLCJ2aXNpYmlsaXR5IiwiaGVpZ2h0IiwiZGF0ZUZyb21WYWx1ZSIsImRhdGVUb1ZhbHVlIiwibW9tZW50Iiwic3VidHJhY3QiLCJkYXkiLCJzdGFydE9mIiwiZW5kT2YiLCJkb2N1bWVudCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImVhY2giLCJyZW1vdmVBdHRyIiwicmVhZHkiLCJ0YWJsZXNvcnRlciIsIm1vZGFsRGF0YSIsImNvbmZpcm1Nb2RhbCIsInN1Ym1pdEZvcm0iLCJhamF4UGFnaW5hdGlvbiIsImFkZEVtYmVkIiwicmVtb3ZlRW1iZWQiLCJmYXN0U2F2ZSIsInBhZ2VMaW1pdCIsImRhdGVSYW5nZSIsImZpbHRlckRhdGVSYW5nZSIsImNoYW5nZSIsImluaXRTdGlja3kiLCJmYXN0U2F2ZVBhZ2UiLCJhZnRlckJ1aWxkIiwib25DbG9zZSIsImNsb3NlRXZlbnQiLCJVUkwiLCJ3aW5kb3ciLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJlbnQiLCJpZCIsImNhblJlbG9hZCIsImJ1dHRvbiIsImRhdGFSZWxvYWQiLCJyb290Rm9sZGVyIiwiZmlsZU5hbWUiLCJnZXRTdWJGb2xkZXIiLCJmb3JtIiwiZm9ybURhdGEiLCJjdXJyZW50SXRlbSIsInByb3AiLCJmaWxlTmFtZUhhc2giLCJtZDUiLCJzdWJzdHJpbmciLCJwYXRoUGFydHMiLCJtYXRjaCIsImpRdWVyeSIsInBhdGgiLCJwYXRobmFtZSIsInNwbGl0IiwibW9kdWxlcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJtb2R1bGVJdGVtcyIsInN1Yk1vZHVsZXMiLCJzdWJzY3JpYmUiLCJBV0FSRF9DUkVBVEUiLCJzZWxmIiwidW5zdWJzY3JpYmUiLCJlZGl0QnRuIiwidGVtcGxhdGVJZCIsInRlbXBsYXRlUGxhY2Vob2xkZXIiLCJhd2FyZF9pZCIsImZpZWxkTmFtZSIsIkFXQVJEX0NSRUFURUQiLCJBV0FSRF9ERUxFVEUiLCJjcmVhdGVCdG4iLCJjaGlsZHJlbiIsIkVWRU5UX05BTUUiLCJkcm9wem9uZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByZXZpZXdVUkwiLCJkcm9wem9uZUJ1aWxkZXIiLCJEcm9wem9uZUJ1aWxkZXIiLCJzZXRVcGxvYWRVcmwiLCJjYW5jZWwiLCJmaWxlX25hbWUiLCJ2YWx1ZSIsInNldFByZXZpZXciLCJnZXRGaWxlUGF0aCIsImZvbGRlciIsImJ1aWxkIiwic2F2ZUFsbEJ1dHRvbiIsImNvdW50ZXIiLCJjb3VudCIsInNob3ciLCJoaWRlIiwicHJldiIsImZvY3VzIiwic2V0VGltZW91dCIsImVsZW1lbnQiLCJjYW52YXNfaGFuZGxlciIsInN1Ym1pdEJ0biIsImVtcHR5Iiwid2lkdGgiLCJjb3B5X2VsZSIsImdldCIsImNsb25lTm9kZSIsInNjcm9sbEhlaWdodCIsInNjcm9sbFdpZHRoIiwiaHRtbDJjYW52YXMiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInVzZUNPUlMiLCJ0aGVuIiwiY2FudmFzIiwiaW1hZ2VEYXRhIiwidG9EYXRhVVJMIiwibmV3RGF0YSIsIkFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEIiwiREVMVEFfVElNRV9BVFRSSUJVVEUiLCJ0b2dnbGVDbGFzcyIsImN1cnJlbnRFbGVtZW50IiwiUmVxdWVzdEJ1aWxkZXIiLCJpbmRleCIsIl8iLCJpdGVtIiwidXBkYXRlSW5kZXhlcyIsImN1cnJlbnRMaSIsImRlbHRhVGltZUhpZGRlbiIsImRlbHRhVGltZURpc3BsYXkiLCJ0aW1lVHlwZSIsImNvbGxhcHNlU3RhdGUiLCJjb2xsYXBzZVN0YXRlcyIsInJlbW92ZUFjdGlvblR5cGVTdGF0ZSIsInNhdmVTdGF0ZSIsInJlc3AiLCJBTk5PVU5DRU1FTlRTX1NIT1dfRk9STSIsImF3YXJkQ3JlYXRlIiwiYmluZCIsIl90aGlzIiwiYXdhcmREZWxldGUiLCJDTE9TRV9BV0FSRF9NT0RBTCIsInNob3dGb3JtIiwibmV4dCIsInNldFN1YnR5cGVzIiwic3VidHlwZSIsImFzc2V0Rm9ybVN1YnR5cGUiLCJhc3NldEZvcm1BY3Rpb25UeXBlIiwiYXNzZXRGb3JtQ29sbGVjdGlvbiIsInByaWNlcyIsIlNVQl9UWVBFUyIsImNvcHlBc3NldHMiLCJhc3NldElkc0ZpZWxkIiwid2l0aE5hbWUiLCJhc3NldElkcyIsIm4iLCJhc3NldElkIiwiYXNzZXROYW1lIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJkb3dubG9hZEFzc2V0cyIsImNvbGxlY3Rpb25faWQiLCJwYXJlbnRDb250YWluZXIiLCJjaGFuZ2VUeXBlIiwiZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIiLCJjdXJyZW50VGQiLCJ1cGRhdGVTYXZlQWxsQnV0dG9uIiwiQkFOTkVSX1NIT1dfRk9STSIsIlRZUEVfU0VMRUNUX0lEIiwic2VsZWN0ZWRJbmRleCIsIm9wdGlvbnMiLCJzZWxlY3RlZEVsZW1lbnQiLCJkcm9wWm9uZUluaXQiLCJjb3B5QWRwIiwiYWRwSWRzRmllbGQiLCJhZHBJZHMiLCJhZHBJZCIsImRvd25sb2FkQWRwIiwiaGlkZUFyY2hpdmUiLCJoaWRlVGFza3MiLCJzZWxlY3RSb3ciLCJjaGVja2JveCIsImlzIiwic2hvd0FyY2hpdmUiLCJhY3Rpb24iLCJzaG93VGFza3MiLCJDQVNIIiwiQ09JTiIsIkFTU0VUIiwic291cmNlVmFsIiwibWF0Y2hlciIsInBhcmFtcyIsImluQXJyYXkiLCJ3cmFwcGVyIiwiZ2V0U2VsZWN0aW9uIiwiQ09MTEVDVElPTl9TSE9XX0ZPUk0iLCJhc3NldFByZXZpZXdUZW1wbGF0ZSIsImFzc2V0cyIsImN1cnJlbnRBc3NldCIsInByZXZpZXdfdXJsIiwiU29ydGFibGUiLCJncm91cCIsInJlbW92ZUNsb25lT25IaWRlIiwib25FbmQiLCJwb3NpdGlvbiIsIm1hcmtJbnB1dEFzQ2hhbmdlZCIsInNvcnRhYmxlSW5pdCIsImhpZGVBZGRpdGlvbmFsUm93cyIsImFkZFJvdyIsImFkZF9jb3VudGVyIiwidGJvZHkiLCJ0ckxhc3QiLCJsYXN0SUQiLCJsYXN0IiwiaW5jcmVtZW50SWQiLCJpIiwiZGVsZXRlUm93Iiwicm93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhZGROZXdSb3ciLCJsYXN0SURTIiwiZmlyc3QiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJzbGljZSIsImxhc3RJbmRleE9mIiwiZGVwbG95U3RhdHVzIiwiREVQTE9ZX1NUQVRVU19ST1VURSIsImlzQWN0aXZlIiwiY2hhbmdlVGFiIiwiZGlyZWN0aW9uIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInNob3dEZXBlbmRlbmN5IiwiY3VycmVudENvbmZpZyIsImFkZE1vZGUiLCJvbmVMZXZlbFNob3ciLCJjb25maWdOYW1lIiwibGV2ZWwiLCJERVBMT1lfREVQRU5EUyIsImNvbmZpZ0Jsb2NrIiwiZGVwZW5kQ29uZmlnTmFtZSIsInNob3dEZXBlbmRlbmN5UG9wdXAiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50Q29uZmlnSWQiLCJpZHMiLCJyb290TGV2ZWxTaG93IiwiaWRSZXNwb25zZSIsInRleHRDbGFzcyIsImlzUmVjdXJzaW9uIiwiZ2V0RGVwbG95TW9kZWxJZHMiLCJERVBMT1lfTU9ERUxfSURTX1JPVVRFIiwiQUNUSVZFX0RJUkVDVElPTiIsImNoZWNrZWQiLCJzYXZlRHBhU3RhdGUiLCJsYXN0Um93IiwiY29sb3JwaWNrZXIiLCJjaGFuZ2VSb3dJbmRleCIsInJvd0luZGV4Iiwib2xkTmFtZSIsIm5ld05hbWUiLCJpbmRleE9mIiwiRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUiIsIm1hcmtDaGFuZ2VkVHIiLCJkeWVTYXZlUGFnZSIsIkdJRlRfV1JBUF9ST1dfQURERUQiLCJjdXJyZW50SW5wdXQiLCJhc3NldElEIiwiY3VycmVudEFzc2V0RHVwbGljYXRlIiwiZXJyIiwicG9zaXRpb25VcGRhdGUiLCJidXR0b25VcmwiLCJwYWdlIiwicGFnZV9saW1pdCIsImFzc2V0Q2hhbmdlZCIsInJlbW92ZVJvdyIsInNob3dBc3NldCIsIlNXT1dfQVNTRVRfUk9VVEUiLCJwcmVwZW5kIiwic2F2ZUxvY2FsaXphdGlvblN0YXRlIiwiY3VycmVudEtleSIsImN1cnJlbnRLZXlEdXBsaWNhdGUiLCJzYXZlTWFnaWNTdGF0ZSIsIm1ha2V1cF9raXRfaWQiLCJnZXRMYXN0TWFrZXVwS2l0SUQiLCJNQUtFVVBfS0lUX1NIT1dfRk9STSIsImluZ3JlZGllbnREZWxldGUiLCJtZWFsRGVsZXRlIiwic2F2ZU1lYWxTdGF0ZSIsIk5FSUdIQk9SX0FDVElWSVRZX1NIT1dfRk9STSIsIlRSQVNIIiwiVFJBU0hfRklFTERTX0lEIiwiU0VMRUNUX0lEIiwidHJhc2hGaWVsZHMiLCJQUk9EVUNUX1NIT1dfRk9STSIsIkNsZWF2ZSIsIm51bWVyYWwiLCJwcmVmaXgiLCJyYXdWYWx1ZVRyaW1QcmVmaXgiLCJvblZhbHVlQ2hhbmdlZCIsInJvdW5kIiwicmF3VmFsdWUiLCJwcm9kdWN0UHJpY2UiLCJwcmljZUluaXQiLCJtYXhJZCIsIm5ld0xlbmd0aCIsInRySWQiLCJuZXdSb3ciLCJuZXdSb3dIdG1sIiwiZGVmYXVsdFZhbHVlIiwib3V0ZXJIVE1MIiwiYWZ0ZXIiLCJwcmV2aWV3SGlkZGVuSW5wdXQiLCJzYXZlUGFnZSIsInNhdmVSb3ciLCJyb3dUb1NhdmUiLCJyIiwiY29uZmlybSIsImRhdGFUeXBlIiwianFYSFIiLCJleGNlcHRpb24iLCJlcnJvcktleSIsIm1lc3NhZ2VLZXkiLCJhdXRvRGlzY292ZXIiLCJkcm9wem9uZUluaXQiLCJzYXZlQnV0dG9uIiwiV0FMS19DQVRFR09SWSIsIlJVTl9DQVRFR09SWSIsInNlbGVjdFZhbCIsImVtYmVkIiwiU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSIsInRhYmxlIiwiZGVwYXJ0bWVudElkIiwic2hvcE5hbWVQcmVmaXgiLCJkZXBhcnRtZW50TmFtZVByZWZpeCIsImZhc3RTYXZlQ29udGFpbmVyIiwic2hvcHMiLCJkZXBhcnRtZW50IiwiZGVwaW5kZXgiLCJkZXBhcnRtZW50Rm9ybURhdGEiLCJpdGVtTmFtZSIsImFsbEl0ZW1zIiwicmFkaW8iLCJwcmV2aWV3VXJsRWxlbWVudCIsInJhZGlvSW5wdXQiLCJhZGRTaG9wIiwic29ydGFibGVEZXBhcnRtZW50SW5pdCIsInNhdmVTb3VuZFN0YXRlIiwiVEFNQVRPT0xfU0hPV19GT1JNIiwiU0VBUkNIX1VTRVJfQVNTRVRTIiwiU1VCTUlUX1VTRVJfUEFSVF9GT1JNIiwiREVMRVRFX05FSUdIQk9SIiwiQUREX05FSUdIQk9SIiwiR0VUX05FSUdIQk9SUyIsIlVQREFURV9ORUlHSEJPUlMiLCJORUlHSEJPUl9HUklEX0lEIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJtb2RlbCIsImNyZWF0ZWRfYnkiLCJjcmVhdGVkX2F0Iiwic2VsZWN0ZWRTdG9yYWdlIiwicGxhY2VtZW50TmFtZSIsIm5laWdoYm9yc0NvdW50Iiwic2libGluZ3MiLCJwbGFjZW1lbnQiLCJsb2FkUGFydCIsIlBMQUNFTUVOVF9BU1NFVFNfUk9VVEUiLCJpdGVtcyIsInBvcG92ZXIiLCJjb3VudFNlbGVjdG9yIiwicm93c0ZvclNlbGVjdCIsImNvdW50Rm9yU2VsZWN0IiwibmVpZ2hib3JfaWQiLCJzdGF0dXNfdGV4dCIsInNlYXJjaFVzZXJBc3NldHMiLCJzdWJtaXRVc2VyUGFydEZvcm0iLCJkZWxldGVOZWlnaGJvciIsImFkZE5laWdoYm9yIiwic2VhcmNoTmVpZ2hib3IiLCJsb2FkUGxhY2VtZW50QXNzZXRzIiwiY2hhbmdlUGxhY2VtZW50IiwiY2hhbmdlUmFuZG9tTmVpZ2hib3JzIiwiaGlkZVBsYWNlbWVudEFzc2V0cyIsInNlbGVjdFJvd3MiLCJjaGFuZ2VNb3ZlUGxhY2VtZW50IiwidXBkYXRlTmVpZ2hib3JzIiwiY2hhbmdlUGFnZUxpbWl0IiwiYWRkQ29tbWVudCIsImFkZENvbGxlY3RpYmxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Y7Ozs7Ozs7Ozs7OztBQ25SQTtBQUFBO0FBQUE7Ozs7O0FBS08sSUFBTUEsS0FBSyxHQUFHO0FBQ2pCQyxJQUFFLEVBQUUsSUFEYTtBQUVqQkMsSUFBRSxFQUFFLElBRmE7QUFHakJDLElBQUUsRUFBRTtBQUhhLENBQWQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQO0FBRUE7Ozs7Ozs7QUFNQSxJQUFNQyxZQUFZLEdBQUcsWUFBckI7QUFFQTs7Ozs7OztBQUtJOzs7Ozs7QUFNQSxvQkFBWUMsaUJBQVosRUFBNEM7QUFBQSxRQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3hDLFNBQUtDLE9BQUwsR0FBZUQsTUFBZjtBQUNBLFNBQUtFLGtCQUFMLEdBQTBCSCxpQkFBMUI7QUFDQSxTQUFLSSxhQUFMLEdBQXFCQyxDQUFDLENBQUNMLGlCQUFELENBQUQsQ0FBcUJNLElBQXJCLENBQTBCLGtCQUExQixDQUFyQjtBQUNIO0FBRUQ7Ozs7Ozs7OztpQ0FLYUMsRyxFQUFLO0FBQ2QsV0FBS0MsVUFBTCxHQUFrQkQsR0FBbEI7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7K0JBTVdFLEksRUFBTUYsRyxFQUFLO0FBQ2xCLFdBQUtHLFFBQUwsR0FBZ0I7QUFDWkQsWUFBSSxFQUFFQSxJQURNO0FBRVpGLFdBQUcsRUFBRUE7QUFGTyxPQUFoQjtBQUlBLGFBQU8sSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7OzBCQUtNSSxRLEVBQVU7QUFDWixXQUFLQyxjQUFMLEdBQXNCRCxRQUF0QjtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7OzJCQUtPQSxRLEVBQVU7QUFDYixXQUFLRSxlQUFMLEdBQXVCRixRQUF2QjtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7OzRCQUtRQSxRLEVBQVU7QUFDZCxXQUFLRyxnQkFBTCxHQUF3QkgsUUFBeEI7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUVEOzs7Ozs7OzRCQUlRO0FBQ0o7OztBQUdBLFVBQU1JLGdCQUFnQixHQUFHLElBQXpCO0FBRUE7Ozs7O0FBR0EsVUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBWTtBQUM3QlgsU0FBQyxDQUFDVSxnQkFBZ0IsQ0FBQ1osa0JBQWxCLENBQUQsQ0FBdUNjLFdBQXZDLENBQW1ELFlBQW5EO0FBQ0FaLFNBQUMsQ0FBQ1UsZ0JBQWdCLENBQUNaLGtCQUFsQixDQUFELENBQXVDRyxJQUF2QyxDQUE0QyxhQUE1QyxFQUEyRFksTUFBM0Q7QUFDSCxPQUhEO0FBS0E7Ozs7Ozs7QUFLQSxVQUFNakIsTUFBTSxHQUFHO0FBQ1hNLFdBQUcsRUFBRSxLQUFLQyxVQURDO0FBRVhXLHNCQUFjLEVBQUUsSUFGTDtBQUdYQyx1QkFBZSxFQUFFLElBSE47QUFJWEMsc0JBQWMsRUFBRSxLQUpMO0FBS1hDLHFCQUFhLEVBQUUsU0FMSjtBQU1YQyxlQUFPLEVBQUU7QUFDTCwwQkFBZ0JDO0FBRFgsU0FORTtBQVVYQyxZQUFJLEVBQUUsZ0JBQVc7QUFDYjs7O0FBR0EsY0FBSSxDQUFDLENBQUNWLGdCQUFnQixDQUFDTCxRQUFuQixJQUErQixDQUFDLENBQUNLLGdCQUFnQixDQUFDTCxRQUFqQixDQUEwQkgsR0FBL0QsRUFBb0U7QUFDaEUsaUJBQUttQixJQUFMLENBQVUsV0FBVixFQUF1QlgsZ0JBQWdCLENBQUNMLFFBQXhDO0FBQ0EsaUJBQUtnQixJQUFMLENBQVUsV0FBVixFQUF1QlgsZ0JBQWdCLENBQUNMLFFBQXhDLEVBQWtESyxnQkFBZ0IsQ0FBQ0wsUUFBakIsQ0FBMEJILEdBQTVFO0FBQ0g7QUFFRDs7Ozs7QUFHQSxlQUFLb0IsRUFBTCxDQUFRLFdBQVIsRUFBcUIsWUFBWTtBQUM3QnRCLGFBQUMsQ0FBQ1UsZ0JBQWdCLENBQUNaLGtCQUFsQixDQUFELENBQXVDRyxJQUF2QyxDQUE0QyxtQkFBNUMsRUFBaUVzQixJQUFqRSxDQUFzRTdCLFlBQXRFO0FBQ0gsV0FGRDtBQUlBOzs7O0FBR0EsZUFBSzRCLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQVVFLElBQVYsRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQ3ZDZCx3QkFBWTs7QUFDWixnQkFBSSxDQUFDLENBQUNELGdCQUFnQixDQUFDSCxjQUF2QixFQUF1QztBQUNuQ0csOEJBQWdCLENBQUNILGNBQWpCLENBQWdDaUIsSUFBaEMsRUFBc0NDLFFBQXRDO0FBQ0g7QUFDSixXQUxEO0FBT0E7Ozs7QUFHQSxlQUFLSCxFQUFMLENBQVEsU0FBUixFQUFtQixVQUFVRSxJQUFWLEVBQWdCQyxRQUFoQixFQUEwQjtBQUN6QyxnQkFBSSxDQUFDLENBQUNmLGdCQUFnQixDQUFDRCxnQkFBdkIsRUFBeUM7QUFDckNDLDhCQUFnQixDQUFDRCxnQkFBakIsQ0FBa0NlLElBQWxDLEVBQXdDQyxRQUF4QztBQUNIO0FBQ0osV0FKRDtBQUtIO0FBNUNVLE9BQWY7QUErQ0E7Ozs7O0FBSUEsVUFBSSxDQUFDLENBQUMsS0FBSzFCLGFBQVgsRUFBMEI7QUFDdEIsYUFBS0EsYUFBTCxDQUFtQjJCLEtBQW5CLENBQXlCLFlBQVk7QUFDakNmLHNCQUFZOztBQUNaLGNBQUksQ0FBQyxDQUFDRCxnQkFBZ0IsQ0FBQ0YsZUFBdkIsRUFBd0M7QUFDcENFLDRCQUFnQixDQUFDRixlQUFqQjtBQUNIO0FBQ0osU0FMRDtBQU1IO0FBRUQ7Ozs7O0FBR0EsYUFBTyxJQUFJbUIsK0NBQUosQ0FBYSxLQUFLN0Isa0JBQWxCLG9CQUEwQ0YsTUFBMUMsTUFBcUQsS0FBS0MsT0FBMUQsRUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLTDtBQUNBO0FBRUE7Ozs7Ozs7QUFLSSxvQkFBWUssR0FBWixFQUFpQjtBQUFBOztBQUNiLFNBQUswQixJQUFMLEdBQVkxQixHQUFaO0FBQ0EsU0FBSzJCLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLHFEQUFkO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkMsdURBQWhCOztBQUNBLFNBQUtDLFNBQUwsR0FBaUIsWUFBWSxDQUFFLENBQS9CO0FBQ0g7Ozs7MkJBRU1DLE8sRUFBUTtBQUNYLFdBQUtQLE9BQUwsR0FBZU8sT0FBZjtBQUVBLGFBQU8sSUFBUDtBQUNIOzs7eUJBRUlDLEssRUFBTTtBQUNQLFdBQUtQLEtBQUwsR0FBYU8sS0FBYjtBQUVBLGFBQU8sSUFBUDtBQUNIOzs7MEJBRUtDLEUsRUFBSTtBQUNOLFdBQUtQLE1BQUwsR0FBY08sRUFBZDtBQUVBLGFBQU8sSUFBUDtBQUNIOzs7NEJBRU9BLEUsRUFBSTtBQUNSLFdBQUtMLFFBQUwsR0FBZ0JLLEVBQWhCO0FBRUEsYUFBTyxJQUFQO0FBQ0g7Ozs2QkFFUUEsRSxFQUFJO0FBQ1QsV0FBS0gsU0FBTCxHQUFpQkcsRUFBakI7QUFFQSxhQUFPLElBQVA7QUFDSDs7OzJCQUVNO0FBQUE7O0FBQ0h0QyxPQUFDLENBQUN1QyxJQUFGLENBQU87QUFDSHJDLFdBQUcsRUFBRSxLQUFLMEIsSUFEUDtBQUVIWSxZQUFJLEVBQUUsS0FBS1gsT0FGUjtBQUdIUSxZQUFJLEVBQUUsS0FBS1AsS0FIUjtBQUlIVyxhQUFLLEVBQUUsZUFBQWhCLFFBQVEsRUFBSTtBQUNmLGNBQUksQ0FBQyxDQUFDQSxRQUFRLENBQUNpQixZQUFmLEVBQTZCO0FBQ3pCLGlCQUFJLENBQUNYLE1BQUwsQ0FBWU4sUUFBUSxDQUFDaUIsWUFBckI7QUFDSDtBQUNKLFNBUkU7QUFTSEMsZUFBTyxFQUFFLEtBQUtWLFFBVFg7QUFVSFcsZ0JBQVEsRUFBRSxLQUFLVDtBQVZaLE9BQVA7QUFZSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVETDtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFFZSx5RUFBVVYsUUFBVixFQUFvQjtBQUMvQjs7O0FBR0EsTUFBSSxDQUFDLENBQUNBLFFBQVEsQ0FBQ29CLEtBQWYsRUFBc0I7QUFDbEJDLFlBQVEsQ0FBQ0MsSUFBVCxHQUFnQnRCLFFBQVEsQ0FBQ29CLEtBQXpCO0FBQ0E7QUFDSDtBQUVEOzs7OztBQUdBLE1BQUksQ0FBQyxDQUFDcEIsUUFBUSxDQUFDdUIsT0FBZixFQUF3QjtBQUNwQkMsaUZBQVcsQ0FBQ3hCLFFBQVEsQ0FBQ3VCLE9BQVYsQ0FBWDtBQUNIO0FBRUQ7Ozs7O0FBR0EsTUFBRyxDQUFDLENBQUN2QixRQUFRLENBQUN5QixNQUFkLEVBQXNCO0FBQ2xCQyxVQUFNLENBQUNDLElBQVAsQ0FBWTNCLFFBQVEsQ0FBQ3lCLE1BQXJCLEVBQTZCRyxHQUE3QixDQUFpQyxVQUFDQyxHQUFELEVBQVM7QUFDdEM3QixjQUFRLENBQUN5QixNQUFULENBQWdCSSxHQUFoQixFQUFxQkQsR0FBckIsQ0FBeUIsVUFBQVosS0FBSyxFQUFJO0FBQzlCUSxxRkFBVyxDQUFDUixLQUFELENBQVg7QUFDSCxPQUZEO0FBR0gsS0FKRDtBQUtIO0FBQ0osQzs7Ozs7Ozs7Ozs7O0FDakNEO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7O0FBS2UseUVBQVVoQixRQUFWLEVBQW9CO0FBQy9COzs7QUFHQSxNQUFJLENBQUMsQ0FBQ0EsUUFBUSxDQUFDdUIsT0FBZixFQUF3QjtBQUNwQk8sbUZBQWEsQ0FBQzlCLFFBQVEsQ0FBQ3VCLE9BQVYsQ0FBYjtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsSUFBTVEsZUFBZSxHQUFHeEQsQ0FBQyxDQUFDLE1BQUQsQ0FBekI7QUFFQSxJQUFNeUQsV0FBVyxHQUFHO0FBQ2hCbEUsSUFBRSxFQUFFLFVBRFk7QUFFaEJDLElBQUUsRUFBRSxVQUZZO0FBR2hCQyxJQUFFLEVBQUU7QUFIWSxDQUFwQjtBQU1BOzs7Ozs7QUFLQSxJQUFJaUUsVUFBVSxHQUFHLENBQWpCO0FBRUE7Ozs7OztBQUtBLElBQUlDLFlBQVksR0FBRyxDQUFuQjtBQUVBOzs7Ozs7O0FBS0ksc0JBQWM7QUFBQTs7QUFDVkQsY0FBVTtBQUNWLFNBQUtFLEdBQUwsR0FBVywyQkFBMkJGLFVBQXRDO0FBQ0g7Ozs7eUJBRUlHLEssRUFBTTtBQUNQLFVBQUksQ0FBQyxDQUFDSixXQUFXLENBQUNJLEtBQUQsQ0FBakIsRUFBeUI7QUFDckIsYUFBS0MsS0FBTCxHQUFhTCxXQUFXLENBQUNJLEtBQUQsQ0FBeEI7QUFDSDs7QUFFRCxhQUFPLElBQVA7QUFDSDs7OzJCQUVNRSxPLEVBQVE7QUFDWCxXQUFLQyxPQUFMLEdBQWVELE9BQWY7QUFFQSxhQUFPLElBQVA7QUFDSDs7O3lCQUVJRSxLLEVBQU07QUFDUCxXQUFLQyxLQUFMLEdBQWFELEtBQWI7QUFFQSxhQUFPLElBQVA7QUFDSDs7OzJCQUVNRSxPLEVBQVE7QUFDWCxXQUFLQyxPQUFMLEdBQWVELE9BQWY7QUFFQSxhQUFPLElBQVA7QUFDSDs7OzRCQUVPRSxRLEVBQVM7QUFDYixXQUFLQyxRQUFMLEdBQWdCRCxRQUFoQjtBQUVBLGFBQU8sSUFBUDtBQUNIOzs7NkJBRVE7QUFDTCxhQUFPLEtBQUtULEdBQVo7QUFDSDs7OytCQUVVO0FBQ1AsYUFBTyxDQUFDLENBQUMsS0FBS0UsS0FBUCxHQUFlLEtBQUtBLEtBQXBCLEdBQTRCTCxXQUFXLENBQUNqRSxFQUEvQztBQUNIOzs7aUNBRVk7QUFDVCxVQUFJLENBQUMsQ0FBQyxLQUFLd0UsT0FBWCxFQUFvQjtBQUNoQiwrVEFLaUMsS0FBS0EsT0FMdEM7QUFPSDs7QUFDRCxhQUFPLEVBQVA7QUFDSDs7O2lDQUVZO0FBQ1QsVUFBSU8sTUFBTSxHQUFHLElBQWI7O0FBQ0EsVUFBSSxDQUFDLENBQUMsS0FBS0gsT0FBWCxFQUFvQjtBQUNoQkcsY0FBTSxHQUFHdkUsQ0FBQyxzQ0FBRCxDQUNKd0UsTUFESSxDQUNHeEUsQ0FBQywyTEFESixFQU1Kd0UsTUFOSSxDQU1HLEtBQUtKLE9BTlIsQ0FBVDtBQU9IOztBQUNELGFBQU9HLE1BQVA7QUFDSDs7OytCQUVVO0FBQ1AsVUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBQ0EsVUFBSSxDQUFDLENBQUMsS0FBS0wsS0FBWCxFQUFrQjtBQUNkSyxjQUFNLEdBQUd2RSxDQUFDLG9DQUFELENBQ0p3RSxNQURJLENBQ0csS0FBS04sS0FEUixDQUFUO0FBRUg7O0FBQ0QsYUFBT0ssTUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7O2dDQUtZakUsUSxFQUFVO0FBQ2xCLFdBQUttRSxvQkFBTCxHQUE0Qm5FLFFBQTVCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7OzttQ0FFYztBQUNYLFVBQUksT0FBTyxLQUFLbUUsb0JBQVosS0FBcUMsVUFBekMsRUFBcUQ7QUFDakQsYUFBS0Esb0JBQUw7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7OytCQUtXbkUsUSxFQUFVO0FBQ2pCLFdBQUtvRSxtQkFBTCxHQUEyQnBFLFFBQTNCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7OztrQ0FFYTtBQUNWLFVBQUksT0FBTyxLQUFLb0UsbUJBQVosS0FBb0MsVUFBeEMsRUFBb0Q7QUFDaEQsYUFBS0EsbUJBQUw7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7OzRCQUtRcEUsUSxFQUFVO0FBQ2QsV0FBS3FFLGdCQUFMLEdBQXdCckUsUUFBeEI7QUFDQSxhQUFPLElBQVA7QUFDSDs7OytCQUVVO0FBQ1AsVUFBSSxPQUFPLEtBQUtxRSxnQkFBWixLQUFpQyxVQUFyQyxFQUFpRDtBQUM3QyxhQUFLQSxnQkFBTDtBQUNIO0FBQ0o7OzswQkFFS0MsTyxFQUFTO0FBQUE7O0FBQ1g7Ozs7QUFJQSxVQUFJUCxPQUFPLEdBQUcsRUFBZDs7QUFDQSxVQUFJLENBQUMsQ0FBQyxLQUFLQyxRQUFYLEVBQXFCO0FBQ2pCLGFBQUssSUFBSWxFLElBQVQsSUFBaUIsS0FBS2tFLFFBQXRCLEVBQWdDO0FBQzVCRCxpQkFBTyxDQUFDUSxJQUFSLGdCQUFxQnpFLElBQXJCLGdCQUE4QixLQUFLa0UsUUFBTCxDQUFjbEUsSUFBZCxDQUE5QjtBQUNIO0FBQ0o7O0FBRUQsVUFBSTBFLElBQUksR0FBRzlFLENBQUMsbUNBQ0ksS0FBSytFLE1BQUwsRUFESiwwRUFDMkVWLE9BQU8sQ0FBQ1csSUFBUixDQUFhLEdBQWIsQ0FEM0UsZ0ZBRTZDLEtBQUtDLFFBQUwsRUFGN0MsOEdBQVo7O0FBT0EsVUFBSSxDQUFDLENBQUNMLE9BQU4sRUFBZTtBQUNYLGFBQUtYLElBQUwsQ0FBVVcsT0FBVjtBQUNIO0FBRUQ7Ozs7O0FBR0EsV0FBS00sWUFBTDs7QUFFQUosVUFBSSxDQUFDN0UsSUFBTCxDQUFVLGdCQUFWLEVBQ0t1RSxNQURMLENBQ1ksS0FBS1csVUFBTCxFQURaLEVBRUtYLE1BRkwsQ0FFWSxLQUFLWSxRQUFMLEVBRlosRUFHS1osTUFITCxDQUdZLEtBQUthLFVBQUwsRUFIWjtBQUtBUCxVQUFJLENBQUM3RSxJQUFMLENBQVUsVUFBVixFQUFzQnFGLE9BQXRCO0FBRUFSLFVBQUksQ0FBQzdFLElBQUwsQ0FBVSxhQUFWLEVBQ0tzRixjQURMLENBQ29CO0FBQ1pDLGNBQU0sRUFBRSxZQURJO0FBRVpDLGlCQUFTLEVBQUUsSUFGQztBQUdaQyxlQUFPLEVBQUU7QUFIRyxPQURwQjtBQU1BMUYsT0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IyRixrQkFBeEI7QUFFQW5DLHFCQUFlLENBQUNnQixNQUFoQixDQUF1Qk0sSUFBdkI7QUFFQTs7OztBQUdBLFdBQUtjLFdBQUw7QUFFQTs7Ozs7QUFHQWpDLGtCQUFZO0FBRVozRCxPQUFDLENBQUMsTUFBTSxLQUFLK0UsTUFBTCxFQUFQLENBQUQsQ0FDS3pELEVBREwsQ0FDUSxpQkFEUixFQUMyQixZQUFNO0FBQ3pCcUMsb0JBQVk7QUFDWjNELFNBQUMsQ0FBQyxNQUFNLEtBQUksQ0FBQytFLE1BQUwsRUFBUCxDQUFELENBQ0tjLEdBREwsQ0FDUyxpQkFEVCxFQUVLaEYsTUFGTDtBQUdBOzs7O0FBR0EsYUFBSSxDQUFDaUYsUUFBTDtBQUNILE9BVkwsRUFXS0MsS0FYTDtBQVlIOzs7OztBQUdMOzs7Ozs7OztBQUtPLFNBQVNDLGVBQVQsR0FBMkI7QUFDOUIsU0FBT3JDLFlBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDek9EO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7QUFNTyxTQUFTc0MsWUFBVCxDQUFzQmpELE9BQXRCLEVBQStCMUMsUUFBL0IsRUFBeUM7QUFDNUMsTUFBSTRGLHFFQUFKLEdBQ0tyQyxJQURMLENBQ1V2RSxvRUFBSyxDQUFDQyxFQURoQixFQUVLd0UsTUFGTCxDQUVZZixPQUZaLEVBR0ttQixNQUhMLENBR1luRSxDQUFDLENBQUMsV0FBRCxFQUFjO0FBQ25CLGFBQVMsd0JBRFU7QUFFbkIsWUFBUSxTQUZXO0FBR25CLG9CQUFnQixPQUhHO0FBSW5CLGFBQVNNO0FBSlUsR0FBZCxDQUhiLEVBU0t5RixLQVRMO0FBVUgsQzs7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUFBO0FBQUE7Ozs7OztBQU1lLFNBQVNJLE1BQVQsQ0FBZ0JuRCxPQUFoQixFQUF5QlIsSUFBekIsRUFBK0I7QUFDMUN4QyxHQUFDLENBQUNtRyxNQUFGLENBQVM7QUFBQ25ELFdBQU8sRUFBRUE7QUFBVixHQUFULEVBQTRCO0FBQ3hCUixRQUFJLEVBQUVBLElBRGtCO0FBRXhCNEQsV0FBTyxFQUFFO0FBRmUsR0FBNUI7QUFJSCxDOzs7Ozs7Ozs7Ozs7O0FDWEQ7QUFBQTtBQUFBO0FBRWUseUVBQVVwRCxPQUFWLEVBQW1CO0FBQzlCbUQsdURBQU0sQ0FBQ25ELE9BQUQsRUFBVSxRQUFWLENBQU47QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNKRDtBQUFBO0FBQUE7QUFFZSx5RUFBVUEsT0FBVixFQUFtQjtBQUM5Qm1ELHVEQUFNLENBQUNuRCxPQUFELEVBQVUsU0FBVixDQUFOO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEOzs7SUFHTXFELGE7OztBQUNGLDJCQUFlO0FBQUE7O0FBQ1gsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNIOzs7OzhCQUVVQyxLLEVBQU9DLE8sRUFBUztBQUN2QixXQUFLQyxJQUFMLENBQVUsV0FBVixFQUF1QkYsS0FBdkI7O0FBRUEsVUFBSSxDQUFDLEtBQUtELFdBQUwsQ0FBaUJDLEtBQWpCLENBQUwsRUFBOEI7QUFDMUIsYUFBS0QsV0FBTCxDQUFpQkMsS0FBakIsSUFBMEIsRUFBMUI7QUFDSDs7QUFFRCxXQUFLRCxXQUFMLENBQWlCQyxLQUFqQixFQUF3QjFCLElBQXhCLENBQTZCMkIsT0FBN0I7QUFFQSxhQUFPLElBQVA7QUFDSDs7OzZCQUVTRCxLLEVBQU9sRSxJLEVBQU07QUFDbkIsV0FBS29FLElBQUwsQ0FBVSxVQUFWLEVBQXNCRixLQUF0Qjs7QUFFQSxVQUFJLENBQUMsQ0FBQyxLQUFLRCxXQUFMLENBQWlCQyxLQUFqQixDQUFOLEVBQStCO0FBQzNCLGFBQUtELFdBQUwsQ0FBaUJDLEtBQWpCLEVBQXdCRyxPQUF4QixDQUFnQyxVQUFBRixPQUFPLEVBQUk7QUFDdkNBLGlCQUFPLENBQUNuRSxJQUFELEVBQU9tRSxPQUFQLENBQVA7QUFDSCxTQUZEO0FBR0g7O0FBRUQsYUFBTyxJQUFQO0FBQ0g7OztnQ0FFWUQsSyxFQUFPSSxLLEVBQU87QUFDdkIsV0FBS0YsSUFBTCxDQUFVLGFBQVYsRUFBeUJGLEtBQXpCOztBQUVBLFVBQUksQ0FBQyxDQUFDLEtBQUtELFdBQUwsQ0FBaUJDLEtBQWpCLENBQU4sRUFBK0I7QUFDM0IsWUFBRyxDQUFDLENBQUNJLEtBQUwsRUFBWTtBQUNSLGVBQUtMLFdBQUwsQ0FBaUJDLEtBQWpCLElBQTBCLEtBQUtELFdBQUwsQ0FBaUJDLEtBQWpCLEVBQXdCSyxNQUF4QixDQUErQixVQUFBSixPQUFPO0FBQUEsbUJBQUlBLE9BQU8sS0FBS0csS0FBaEI7QUFBQSxXQUF0QyxDQUExQjtBQUNILFNBRkQsTUFFTztBQUNIOzs7QUFHQSxlQUFLTCxXQUFMLENBQWlCQyxLQUFqQixJQUEwQixFQUExQjtBQUNIO0FBRUo7QUFDSjs7O3lCQUVJbkUsTSxFQUFRbUUsSyxFQUFPO0FBQ2hCTSxhQUFPLENBQUNDLEdBQVIsQ0FBWTFFLE1BQU0sQ0FBQzJFLFdBQVAsRUFBWixFQUFrQyxHQUFsQyxFQUF1QyxHQUF2QyxFQUE0Q1IsS0FBNUMsRUFBbUQsR0FBbkQ7QUFDSDs7Ozs7O0FBR0wsSUFBTVMsUUFBUSxHQUFHLElBQUlYLGFBQUosRUFBakI7QUFFZVcsdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7QUFLTyxJQUFNQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSwrQkFBYztBQUFBOztBQUNWLFFBQU1qRSxPQUFPLEdBQUcsbUJBQWhCO0FBRFUsMEZBRUpBLE9BRkk7QUFHYjs7QUFKTDtBQUFBLG1CQUF1Q2tFLEtBQXZDLEc7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9lLHlFQUFVQyxDQUFWLEVBQWE7QUFDeEJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUVBLE1BQU1DLGFBQWEsR0FBR3JILENBQUMsQ0FBQyxJQUFELENBQXZCO0FBQ0EsTUFBTXNILE1BQU0sR0FBR0QsYUFBYSxDQUFDaEYsSUFBZCxDQUFtQixRQUFuQixDQUFmO0FBQ0EsTUFBTWtGLFFBQVEsR0FBR0YsYUFBYSxDQUFDaEYsSUFBZCxDQUFtQixVQUFuQixDQUFqQjtBQUNBLE1BQU1tRixhQUFhLEdBQUdILGFBQWEsQ0FBQ2hGLElBQWQsQ0FBbUIsZUFBbkIsQ0FBdEI7QUFFQSxNQUFJb0YsS0FBSyxHQUFHSixhQUFhLENBQUNoRixJQUFkLENBQW1CLE9BQW5CLENBQVo7QUFDQWdGLGVBQWEsQ0FBQ2hGLElBQWQsQ0FBbUIsT0FBbkIsRUFBNEIsRUFBRW9GLEtBQTlCO0FBRUEsTUFBSUMsU0FBUyxHQUFHMUgsQ0FBQyxDQUFDLE1BQUt1SCxRQUFOLENBQUQsQ0FBaUJ6QyxJQUFqQixFQUFoQjtBQUNBLE1BQU02QyxZQUFZLEdBQUdGLEtBQUssR0FBSSxJQUFJRyxJQUFKLEdBQVdDLE9BQVgsRUFBRCxDQUF1QkMsUUFBdkIsQ0FBZ0MsRUFBaEMsQ0FBN0I7QUFDQUosV0FBUyxHQUFHQSxTQUFTLENBQUNLLE9BQVYsQ0FBa0IsaUJBQWxCLEVBQXFDSixZQUFyQyxDQUFaOztBQUVBLE1BQUksQ0FBQyxDQUFDSCxhQUFOLEVBQXFCO0FBQ2pCRSxhQUFTLEdBQUdBLFNBQVMsQ0FBQ0ssT0FBVixDQUFtQixJQUFJQyxNQUFKLENBQVdSLGFBQVgsRUFBMEIsR0FBMUIsQ0FBbkIsRUFBbURDLEtBQW5ELENBQVo7QUFDSDs7QUFFRHpILEdBQUMsQ0FBQyxNQUFNc0gsTUFBUCxDQUFELENBQWdCOUMsTUFBaEIsQ0FBdUJrRCxTQUF2QjtBQUVBOzs7O0FBR0EsTUFBTW5CLEtBQUssR0FBR2MsYUFBYSxDQUFDaEYsSUFBZCxDQUFtQixPQUFuQixDQUFkOztBQUNBLE1BQUlrRSxLQUFLLElBQUlBLEtBQUssQ0FBQzBCLE1BQW5CLEVBQTJCO0FBQ3ZCakIsNkVBQVEsQ0FBQ2tCLFFBQVQsQ0FBa0IzQixLQUFsQixFQUF5QjtBQUNyQm9CLGtCQUFZLEVBQUVBO0FBRE8sS0FBekI7QUFHSDs7QUFDRE4sZUFBYSxDQUFDYyxPQUFkLENBQXNCLGNBQXRCO0FBRUEsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQzFDRDtBQUFBO0FBQUE7QUFFQTs7OztBQUdlLHlFQUFTaEIsQ0FBVCxFQUFZO0FBQ3ZCQSxHQUFDLENBQUNDLGNBQUY7QUFFQSxNQUFNZ0IsU0FBUyxHQUFHcEksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUksT0FBUixDQUFnQixrQkFBaEIsRUFBb0NoRyxJQUFwQyxDQUF5QyxXQUF6QyxDQUFsQjtBQUVBLE1BQUlpRyxzRUFBSixDQUFTLEtBQUt2RixJQUFkLEVBQ0tYLE1BREwsQ0FDWSxLQURaLEVBRUtPLE9BRkwsQ0FFYSxVQUFBbEIsUUFBUSxFQUFJO0FBQ2pCekIsS0FBQyxDQUFDLE1BQU1vSSxTQUFQLENBQUQsQ0FBbUJHLFdBQW5CLENBQStCOUcsUUFBL0I7QUFDSCxHQUpMLEVBS0srRyxJQUxMO0FBT0EsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHZSx5RUFBU3JCLENBQVQsRUFBWTtBQUN2QkEsR0FBQyxDQUFDQyxjQUFGO0FBRUEsTUFBTXFCLE9BQU8sR0FBRyxLQUFLcEUsT0FBckI7QUFDQSxNQUFNbkUsR0FBRyxHQUFHLEtBQUs2QyxJQUFqQjtBQUNBLE1BQU0yRixZQUFZLEdBQUcxSSxDQUFDLENBQUMsSUFBRCxDQUF0QjtBQUVBLE1BQUlrRyxxRUFBSixHQUNLckMsSUFETCxDQUNVdkUsb0VBQUssQ0FBQ0MsRUFEaEIsRUFFS3dFLE1BRkwsQ0FFWTBFLE9BQU8sQ0FBQzFFLE1BRnBCLEVBR0tJLE1BSEwsQ0FJUW5FLENBQUMsQ0FBQyxXQUFELEVBQWM7QUFDWCxhQUFTLENBQUN5SSxPQUFPLENBQUNFLFFBQVIsSUFBb0Isb0JBQXJCLElBQTZDLE1BRDNDO0FBRVgsWUFBUUYsT0FBTyxDQUFDRyxPQUFSLElBQW1CLFNBRmhCO0FBR1gsYUFBUyxpQkFBWTtBQUNqQixVQUFNdkIsYUFBYSxHQUFHckgsQ0FBQyxDQUFDLElBQUQsQ0FBdkI7O0FBRUEsVUFBSXFILGFBQWEsQ0FBQ3dCLFFBQWQsQ0FBdUIsU0FBdkIsQ0FBSixFQUF1QztBQUNuQyxlQUFPLEtBQVA7QUFDSDs7QUFDRHhCLG1CQUFhLENBQUN5QixRQUFkLENBQXVCLFNBQXZCO0FBR0EsVUFBSXpHLElBQUksR0FBRyxFQUFYOztBQUNBLFVBQUdvRyxPQUFPLENBQUNNLGNBQVIsQ0FBdUIsVUFBdkIsQ0FBSCxFQUF1QztBQUNuQzFHLFlBQUksR0FBR3FHLFlBQVksQ0FBQ00sT0FBYixDQUFxQixNQUFyQixFQUE2QkMsY0FBN0IsRUFBUDtBQUNIOztBQUVELFVBQUlYLHNFQUFKLENBQVNwSSxHQUFULEVBQ0ttQyxJQURMLENBQ1VBLElBRFYsRUFFS0QsTUFGTCxDQUVZcUcsT0FBTyxDQUFDckcsTUFBUixJQUFrQixLQUY5QixFQUdLTyxPQUhMLENBR2EsVUFBQWxCLFFBQVEsRUFBSTtBQUNqQixZQUFJLENBQUMsQ0FBQ2dILE9BQU8sQ0FBQ2xDLEtBQWQsRUFBcUI7QUFDakJTLG1GQUFRLENBQUNrQixRQUFULENBQWtCTyxPQUFPLENBQUNsQyxLQUExQixFQUFpQzlFLFFBQWpDO0FBQ0g7O0FBRUQsWUFBSXlILFFBQVEsQ0FBQ1QsT0FBTyxDQUFDVSxNQUFULENBQVIsS0FBNkIsQ0FBakMsRUFBb0M7QUFDaENyRyxrQkFBUSxDQUFDcUcsTUFBVDtBQUNIOztBQUVELFlBQUlELFFBQVEsQ0FBQ1QsT0FBTyxDQUFDVyxPQUFULENBQVIsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDakMvQix1QkFBYSxDQUFDMkIsT0FBZCxDQUFzQixRQUF0QixFQUFnQ2pELEtBQWhDLENBQXNDLE1BQXRDO0FBQ0g7O0FBRUQ3RCxzRkFBYyxDQUFDVCxRQUFELENBQWQ7QUFDSCxPQWpCTCxFQWtCS21CLFFBbEJMLENBa0JjLFlBQU07QUFDWnlFLHFCQUFhLENBQUN6RyxXQUFkLENBQTBCLFNBQTFCO0FBQ0gsT0FwQkwsRUFxQks0SCxJQXJCTDtBQXNCSDtBQXZDVSxHQUFkLENBSlQsRUE4Q0t6QyxLQTlDTDtBQWdEQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDakVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSx5RUFBVW9CLENBQVYsRUFBYTtBQUN4QkEsR0FBQyxDQUFDQyxjQUFGO0FBRUEsTUFBTWlDLFVBQVUsR0FBR3JKLENBQUMsQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBTXNKLFNBQVMsR0FBR0QsVUFBVSxDQUFDTCxPQUFYLENBQW1CLHNCQUFuQixDQUFsQjtBQUNBLE1BQU1QLE9BQU8sR0FBRyxLQUFLcEUsT0FBckI7O0FBRUEsTUFBSSxDQUFDaUYsU0FBUyxDQUFDckIsTUFBZixFQUF1QjtBQUNuQixVQUFNLElBQUloQiw4RUFBSixFQUFOO0FBQ0g7O0FBRUQsTUFBSXFCLHNFQUFKLENBQVNlLFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixNQUFoQixDQUFULEVBQ0tuSCxNQURMLENBQ1ksS0FEWixFQUVLTyxPQUZMLENBRWEsVUFBQWxCLFFBQVEsRUFBSTtBQUNqQixRQUFJLENBQUMsQ0FBQ2dILE9BQU8sQ0FBQ2xDLEtBQWQsRUFBcUI7QUFDakJTLCtFQUFRLENBQUNrQixRQUFULENBQWtCTyxPQUFPLENBQUNsQyxLQUExQixFQUFpQzlFLFFBQWpDO0FBQ0g7O0FBQ0RTLGtGQUFjLENBQUNULFFBQUQsQ0FBZDtBQUNILEdBUEwsRUFRS1ksSUFSTCxDQVFVbUgsbUVBQVcsQ0FBQ0YsU0FBRCxDQVJyQixFQVNLZCxJQVRMO0FBV0FjLFdBQVMsQ0FBQzFJLFdBQVYsQ0FBc0IsU0FBdEI7QUFDQTBJLFdBQVMsQ0FBQ3JKLElBQVYsQ0FBZSxVQUFmLEVBQTJCVyxXQUEzQixDQUF1QyxTQUF2QztBQUVBLFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNoQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTTZJLGtCQUFrQixHQUFHLDJCQUEzQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUVQOzs7Ozs7OztBQU9lLHlFQUFVeEMsQ0FBVixFQUFhO0FBQ3hCQSxHQUFDLENBQUNDLGNBQUY7QUFFQSxNQUFNaUMsVUFBVSxHQUFHckosQ0FBQyxDQUFDLElBQUQsQ0FBcEI7QUFDQSxNQUFNc0osU0FBUyxHQUFHdEosQ0FBQyxDQUFDeUosa0JBQUQsQ0FBbkI7QUFDQSxNQUFNaEIsT0FBTyxHQUFHLEtBQUtwRSxPQUFyQjs7QUFFQSxNQUFJLENBQUNpRixTQUFTLENBQUNyQixNQUFmLEVBQXVCO0FBQ25CLFVBQU0sSUFBSWhCLDhFQUFKLEVBQU47QUFDSDs7QUFFRCxNQUFJcUMsU0FBUyxDQUFDVCxRQUFWLENBQW1CLFVBQW5CLENBQUosRUFBb0M7QUFDaEMsV0FBTyxLQUFQO0FBQ0g7O0FBQ0RTLFdBQVMsQ0FBQ1IsUUFBVixDQUFtQixVQUFuQjtBQUVBOzs7O0FBR0EsTUFBTWMsU0FBUyxHQUFHTixTQUFTLENBQUNySixJQUFWLENBQWUsVUFBZixDQUFsQjtBQUNBLE1BQU1vQyxJQUFJLEdBQUdtSCxtRUFBVyxDQUFDSSxTQUFELENBQXhCOztBQUVBLE1BQUksQ0FBQ3pHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZZixJQUFaLEVBQWtCNEYsTUFBdkIsRUFBK0I7QUFDM0JxQixhQUFTLENBQUMxSSxXQUFWLENBQXNCLFVBQXRCO0FBQ0EsV0FBTyxLQUFQO0FBQ0g7O0FBRUQsTUFBSTBILHNFQUFKLENBQVNlLFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixNQUFoQixDQUFULEVBQ0tuSCxNQURMLENBQ1ksS0FEWixFQUVLQyxJQUZMLENBRVVBLElBRlYsRUFHS08sUUFITCxDQUdjLFlBQU07QUFDWjBHLGFBQVMsQ0FBQzFJLFdBQVYsQ0FBc0IsVUFBdEI7QUFDSCxHQUxMLEVBTUsrQixPQU5MLENBTWEsVUFBQWxCLFFBQVEsRUFBSTtBQUNqQm1JLGFBQVMsQ0FBQ2hKLFdBQVYsQ0FBc0IsU0FBdEI7QUFDQXNCLGtGQUFjLENBQUNULFFBQUQsQ0FBZDs7QUFDQSxRQUFJLENBQUMsQ0FBQ2dILE9BQU8sQ0FBQ2xDLEtBQWQsRUFBcUI7QUFDakJTLCtFQUFRLENBQUNrQixRQUFULENBQWtCTyxPQUFPLENBQUNsQyxLQUExQixFQUFpQzlFLFFBQWpDO0FBQ0g7QUFDSixHQVpMLEVBYUsrRyxJQWJMO0FBZUEsU0FBTyxLQUFQO0FBQ0g7QUFFRDs7OztBQUdPLFNBQVNxQixXQUFULEdBQXVCO0FBQzFCN0osR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFROEksUUFBUixDQUFpQixTQUFqQjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNuRUQ7QUFBQTtBQUFBO0FBQUE7QUFFZSwyRUFBWTtBQUN2QixNQUFNZ0IsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTUMsZUFBZSxHQUFHL0osQ0FBQyxDQUFDLG9CQUFELENBQXpCO0FBQ0EsTUFBTWdLLGNBQWMsR0FBR2hLLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCQyxJQUF4QixDQUE2QixXQUE3QixDQUF2QjtBQUNBLE1BQU1nSyxRQUFRLEdBQUdGLGVBQWUsQ0FBQzlKLElBQWhCLENBQXFCLGNBQXJCLENBQWpCO0FBQ0EsTUFBTWlLLE1BQU0sR0FBR0gsZUFBZSxDQUFDOUosSUFBaEIsQ0FBcUIsWUFBckIsQ0FBZjtBQUVBLE1BQU1rSyxhQUFhLEdBQUdILGNBQWMsQ0FBQ0ksR0FBZixFQUF0Qjs7QUFFQSxNQUFJRCxhQUFhLEtBQUssUUFBdEIsRUFBZ0M7QUFDNUJKLG1CQUFlLENBQUNNLEdBQWhCLENBQW9CO0FBQ2hCQyxnQkFBVSxFQUFFLFNBREk7QUFFaEJDLFlBQU0sRUFBRTtBQUZRLEtBQXBCO0FBSUgsR0FMRCxNQUtPO0FBQ0hSLG1CQUFlLENBQUNNLEdBQWhCLENBQW9CO0FBQ2hCQyxnQkFBVSxFQUFFLFFBREk7QUFFaEJDLFlBQU0sRUFBRTtBQUZRLEtBQXBCO0FBS0EsUUFBSUMsYUFBYSxHQUFHLEVBQXBCO0FBQ0EsUUFBSUMsV0FBVyxHQUFLLEVBQXBCOztBQUNBLFlBQVFOLGFBQVI7QUFDSSxXQUFLLE9BQUw7QUFDSUsscUJBQWEsR0FBR0MsV0FBVyxHQUFHQyw2Q0FBTSxHQUFHbEYsTUFBVCxDQUFnQnNFLFVBQWhCLENBQTlCO0FBQ0E7O0FBQ0osV0FBSyxXQUFMO0FBQ0lVLHFCQUFhLEdBQUdDLFdBQVcsR0FBR0MsNkNBQU0sR0FBR0MsUUFBVCxDQUFrQixDQUFsQixFQUFxQixLQUFyQixFQUE0Qm5GLE1BQTVCLENBQW1Dc0UsVUFBbkMsQ0FBOUI7QUFDQTs7QUFDSixXQUFLLGNBQUw7QUFDSVUscUJBQWEsR0FBR0UsNkNBQU0sR0FBR0UsR0FBVCxDQUFhLENBQWIsRUFBZ0JwRixNQUFoQixDQUF1QnNFLFVBQXZCLENBQWhCO0FBQ0FXLG1CQUFXLEdBQUtDLDZDQUFNLEdBQUdFLEdBQVQsQ0FBYSxDQUFiLEVBQWdCcEYsTUFBaEIsQ0FBdUJzRSxVQUF2QixDQUFoQjtBQUNBOztBQUNKLFdBQUssZUFBTDtBQUNJVSxxQkFBYSxHQUFHRSw2Q0FBTSxHQUFHRSxHQUFULENBQWEsQ0FBQyxDQUFkLEVBQWlCcEYsTUFBakIsQ0FBd0JzRSxVQUF4QixDQUFoQjtBQUNBVyxtQkFBVyxHQUFLQyw2Q0FBTSxHQUFHRSxHQUFULENBQWEsQ0FBYixFQUFnQnBGLE1BQWhCLENBQXVCc0UsVUFBdkIsQ0FBaEI7QUFDQTs7QUFDSixXQUFLLGVBQUw7QUFDSVUscUJBQWEsR0FBR0UsNkNBQU0sR0FBR0csT0FBVCxDQUFpQixPQUFqQixFQUEwQnJGLE1BQTFCLENBQWlDc0UsVUFBakMsQ0FBaEI7QUFDQVcsbUJBQVcsR0FBS0MsNkNBQU0sR0FBR0ksS0FBVCxDQUFlLE9BQWYsRUFBd0J0RixNQUF4QixDQUErQnNFLFVBQS9CLENBQWhCO0FBQ0E7O0FBQ0osV0FBSyxnQkFBTDtBQUNJVSxxQkFBYSxHQUFHRSw2Q0FBTSxHQUFHQyxRQUFULENBQWtCLENBQWxCLEVBQXFCLE9BQXJCLEVBQThCRSxPQUE5QixDQUFzQyxPQUF0QyxFQUErQ3JGLE1BQS9DLENBQXNEc0UsVUFBdEQsQ0FBaEI7QUFDQVcsbUJBQVcsR0FBS0MsNkNBQU0sR0FBR0MsUUFBVCxDQUFrQixDQUFsQixFQUFxQixPQUFyQixFQUE4QkcsS0FBOUIsQ0FBb0MsT0FBcEMsRUFBNkN0RixNQUE3QyxDQUFvRHNFLFVBQXBELENBQWhCO0FBQ0E7O0FBQ0osV0FBSyxZQUFMO0FBQ0lVLHFCQUFhLEdBQUdFLDZDQUFNLEdBQUdDLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsS0FBckIsRUFBNEJuRixNQUE1QixDQUFtQ3NFLFVBQW5DLENBQWhCO0FBQ0FXLG1CQUFXLEdBQUtDLDZDQUFNLEdBQUdsRixNQUFULENBQWdCc0UsVUFBaEIsQ0FBaEI7QUFDQTs7QUFDSixXQUFLLGFBQUw7QUFDSVUscUJBQWEsR0FBR0UsNkNBQU0sR0FBR0MsUUFBVCxDQUFrQixFQUFsQixFQUFzQixLQUF0QixFQUE2Qm5GLE1BQTdCLENBQW9Dc0UsVUFBcEMsQ0FBaEI7QUFDQVcsbUJBQVcsR0FBS0MsNkNBQU0sR0FBR2xGLE1BQVQsQ0FBZ0JzRSxVQUFoQixDQUFoQjtBQUNBO0FBOUJSOztBQWlDQUcsWUFBUSxDQUFDRyxHQUFULENBQWFJLGFBQWI7QUFDQU4sVUFBTSxDQUFDRSxHQUFQLENBQVdLLFdBQVg7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7Ozs7QUM1REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUF6SyxDQUFDLENBQUMrSyxRQUFELENBQUQsQ0FDS0MsTUFETCxDQUNZLFVBQVU3RCxDQUFWLEVBQWE7QUFDakIsTUFBR25ILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlMLFNBQVIsS0FBc0IsR0FBekIsRUFBOEI7QUFDMUJqTCxLQUFDLENBQUMsY0FBRCxDQUFELENBQWtCa0wsSUFBbEIsQ0FBdUIsWUFBWTtBQUMvQmxMLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVLLE1BQVIsQ0FBZSxDQUFmLEVBQWtCRixHQUFsQixDQUFzQixTQUF0QixFQUFpQyxvQkFBakM7QUFDSCxLQUZEO0FBR0gsR0FKRCxNQUlPO0FBQ0hySyxLQUFDLENBQUMsY0FBRCxDQUFELENBQWtCa0wsSUFBbEIsQ0FBdUIsWUFBWTtBQUMvQmxMLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1MLFVBQVIsQ0FBbUIsT0FBbkI7QUFDSCxLQUZEO0FBR0g7QUFDSixDQVhMLEVBYUtDLEtBYkwsQ0FhVyxZQUFZO0FBQ2YsTUFBSUMsV0FBVyxHQUFHckwsQ0FBQyxDQUFDLGNBQUQsQ0FBbkI7O0FBQ0EsTUFBR3FMLFdBQUgsRUFBZ0I7QUFDWkEsZUFBVyxDQUFDQSxXQUFaLEdBQTBCMUYsa0JBQTFCO0FBQ0EwRixlQUFXLENBQUNwTCxJQUFaLENBQWlCLE9BQWpCLEVBQTBCb0ssR0FBMUIsQ0FBOEIsWUFBOUIsRUFBNEMsTUFBNUM7QUFDSDtBQUNKLENBbkJMO0FBcUJJOzs7QUFyQkosQ0F3QksvSSxFQXhCTCxDQXdCUSxPQXhCUixFQXdCaUIsb0JBeEJqQixFQXdCdUNnSyxrREF4QnZDO0FBMEJJOzs7QUExQkosQ0E2QktoSyxFQTdCTCxDQTZCUSxPQTdCUixFQTZCaUIsc0JBN0JqQixFQTZCeUNpSyxxREE3QnpDO0FBK0JJOzs7QUEvQkosQ0FrQ0tqSyxFQWxDTCxDQWtDUSxPQWxDUixFQWtDaUIscUJBbENqQixFQWtDd0NrSyxtREFsQ3hDO0FBb0NJOzs7QUFwQ0osQ0F1Q0tsSyxFQXZDTCxDQXVDUSxPQXZDUixFQXVDaUIsb0JBdkNqQixFQXVDdUNtSyx1REF2Q3ZDO0FBeUNJOzs7QUF6Q0osQ0E0Q0tuSyxFQTVDTCxDQTRDUSxPQTVDUixFQTRDaUIsWUE1Q2pCLEVBNEMrQm9LLGlEQTVDL0I7QUE4Q0k7OztBQTlDSixDQWlES3BLLEVBakRMLENBaURRLE9BakRSLEVBaURpQixXQWpEakIsRUFpRDhCcUssb0RBakQ5QjtBQW1ESTs7O0FBbkRKLENBc0RLckssRUF0REwsQ0FzRFEsT0F0RFIsRUFzRGlCLFlBdERqQixFQXNEK0JzSyxpREF0RC9CO0FBd0RJOzs7QUF4REosQ0EyREt0SyxFQTNETCxDQTJEUSxRQTNEUixFQTJEa0IsYUEzRGxCLEVBMkRpQ3VLLGtEQTNEakM7QUE2REk7OztBQTdESixDQWdFS3ZLLEVBaEVMLENBZ0VRLFFBaEVSLFlBZ0VxQm1JLGdFQWhFckIscUJBZ0VrREEsZ0VBaEVsRCxzQkFnRWdGQSxnRUFoRWhGLGdCQWdFK0dJLHlEQWhFL0csRUFrRUt1QixLQWxFTCxDQWtFVyxZQUFZO0FBQ2YsTUFBSVUsU0FBUyxHQUFHOUwsQ0FBQyxDQUFDLG9CQUFELENBQWpCOztBQUNBLE1BQUk4TCxTQUFTLENBQUM3RCxNQUFkLEVBQXNCO0FBQ2xCOEQsNEVBQWU7QUFDZkQsYUFBUyxDQUFDRSxNQUFWLENBQWlCRCxnRUFBakI7QUFDSDtBQUNKLENBeEVMOztBQTBFQSxTQUFTRSxVQUFULEdBQXNCO0FBQ2xCak0sR0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjJGLGtCQUFsQjtBQUNIOztBQUVEM0YsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJnTCxNQUF2QixDQUE4QixZQUFZO0FBQ3RDaUIsWUFBVTtBQUNiLENBRkQ7QUFJQTs7OztBQUdBak0sQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIwQixLQUFyQixDQUEyQndLLHFEQUEzQixFOzs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR2UseUVBQVMvRSxDQUFULEVBQVk7QUFBQTs7QUFDdkJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUVBLE1BQU1DLGFBQWEsR0FBR3JILENBQUMsQ0FBQyxJQUFELENBQXZCOztBQUVBLE1BQUlxSCxhQUFhLENBQUN3QixRQUFkLENBQXVCLFNBQXZCLENBQUosRUFBdUM7QUFDbkMsV0FBTyxLQUFQO0FBQ0g7O0FBQ0R4QixlQUFhLENBQUN5QixRQUFkLENBQXVCLFNBQXZCO0FBRUEsTUFBSVIsc0VBQUosQ0FBUyxLQUFLdkYsSUFBZCxFQUNLWCxNQURMLENBQ1ksS0FBS2lDLE9BQUwsQ0FBYWpDLE1BQWIsSUFBdUIsS0FEbkMsRUFFS08sT0FGTCxDQUVhLFVBQUFsQixRQUFRLEVBQUk7QUFDakIsUUFBSXlFLHFFQUFKLEdBQ0tyQyxJQURMLENBQ1V2RSxvRUFBSyxDQUFDRyxFQURoQixFQUVLNEUsT0FGTCxDQUVhO0FBQ0w4RSxZQUFNLEVBQUUsS0FBSSxDQUFDOUUsT0FBTCxDQUFhOEUsTUFBYixJQUF1QjtBQUQxQixLQUZiLEVBS0twRixNQUxMLENBS1ksS0FBSSxDQUFDTSxPQUFMLENBQWFOLE1BTHpCLEVBTUtvSSxVQU5MLENBTWdCLFlBQU07QUFDZCxVQUFJLENBQUMsQ0FBQyxLQUFJLENBQUM5SCxPQUFMLENBQWFrQyxLQUFuQixFQUEwQjtBQUN0QlMsaUZBQVEsQ0FBQ2tCLFFBQVQsQ0FBa0IsS0FBSSxDQUFDN0QsT0FBTCxDQUFha0MsS0FBL0IsRUFBc0M5RSxRQUF0QztBQUNIO0FBQ0osS0FWTCxFQVdLMkssT0FYTCxDQVdhLFlBQU07QUFDWCxVQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMvSCxPQUFMLENBQWFnSSxVQUFuQixFQUErQjtBQUMzQnJGLGlGQUFRLENBQUNrQixRQUFULENBQWtCLEtBQUksQ0FBQzdELE9BQUwsQ0FBYWdJLFVBQS9CLEVBQTJDNUssUUFBM0M7QUFDSDtBQUNKLEtBZkwsRUFnQktzRSxLQWhCTCxDQWdCV3RFLFFBaEJYO0FBaUJILEdBcEJMLEVBcUJLbUIsUUFyQkwsQ0FxQmMsWUFBTTtBQUNaeUUsaUJBQWEsQ0FBQ3pHLFdBQWQsQ0FBMEIsU0FBMUI7QUFDSCxHQXZCTCxFQXdCSzRILElBeEJMO0FBMEJBLFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7QUFBQTs7O0FBR2UseUVBQVVyQixDQUFWLEVBQWE7QUFDeEJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQUlyRSxJQUFJLEdBQUcsSUFBSXVKLEdBQUosQ0FBUUMsTUFBTSxDQUFDekosUUFBUCxDQUFnQkMsSUFBeEIsQ0FBWDtBQUNBQSxNQUFJLENBQUN5SixZQUFMLENBQWtCQyxHQUFsQixDQUFzQixZQUF0QixFQUFvQ3pNLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9LLEdBQVIsRUFBcEM7QUFDQXJILE1BQUksQ0FBQ3lKLFlBQUwsV0FBeUIsTUFBekI7QUFDQUQsUUFBTSxDQUFDekosUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJBLElBQUksQ0FBQytFLFFBQUwsRUFBdkI7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDVEQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7O0FBR2UseUVBQVVYLENBQVYsRUFBYTtBQUN4QkEsR0FBQyxDQUFDQyxjQUFGO0FBRUEsTUFBTXNGLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBS3JJLE9BQUwsQ0FBYXFJLE1BQWYsR0FBd0IxTSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLEtBQUszRSxPQUFMLENBQWFxSSxNQUE3QixDQUF4QixHQUErRDFNLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBNLE1BQVIsRUFBOUU7O0FBRUEsTUFBSSxDQUFDLEtBQUtySSxPQUFMLENBQWFzSSxFQUFsQixFQUFzQjtBQUNsQkQsVUFBTSxDQUFDN0wsTUFBUDtBQUNBO0FBQ0g7O0FBRUQsTUFBSXFGLHFFQUFKLEdBQ0tyQyxJQURMLENBQ1V2RSxvRUFBSyxDQUFDQyxFQURoQixFQUVLd0UsTUFGTCxDQUVZLGVBRlosRUFHS0ksTUFITCxDQUdZbkUsQ0FBQyxDQUFDLFdBQUQsRUFBYztBQUNuQixhQUFTLHVCQURVO0FBRW5CLFlBQVEsUUFGVztBQUduQixvQkFBZ0IsT0FIRztBQUluQixhQUFTLGlCQUFNO0FBQ1gwTSxZQUFNLENBQUM3TCxNQUFQO0FBQ0g7QUFOa0IsR0FBZCxDQUhiLEVBV0trRixLQVhMO0FBYUEsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdlLHlFQUFTb0IsQ0FBVCxFQUFZO0FBQUE7O0FBQ3ZCQSxHQUFDLENBQUNDLGNBQUY7QUFFQSxNQUFNQyxhQUFhLEdBQUdySCxDQUFDLENBQUMsSUFBRCxDQUF2Qjs7QUFFQSxNQUFJcUgsYUFBYSxDQUFDd0IsUUFBZCxDQUF1QixTQUF2QixDQUFKLEVBQXVDO0FBQ25DLFdBQU8sS0FBUDtBQUNIOztBQUNEeEIsZUFBYSxDQUFDeUIsUUFBZCxDQUF1QixTQUF2QjtBQUVBLE1BQUlSLHNFQUFKLENBQVMsS0FBS3ZGLElBQWQsRUFDS1YsSUFETCxDQUNVZ0YsYUFBYSxDQUFDMkIsT0FBZCxDQUFzQixNQUF0QixFQUE4QkMsY0FBOUIsRUFEVixFQUVLN0csTUFGTCxDQUVZLEtBQUtpQyxPQUFMLENBQWFqQyxNQUFiLElBQXVCLEtBRm5DLEVBR0tPLE9BSEwsQ0FHYSxVQUFBbEIsUUFBUSxFQUFJO0FBQ2pCLFFBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQzRDLE9BQUwsQ0FBYWtDLEtBQW5CLEVBQTBCO0FBQ3RCUywrRUFBUSxDQUFDa0IsUUFBVCxDQUFrQixLQUFJLENBQUM3RCxPQUFMLENBQWFrQyxLQUEvQixFQUFzQzlFLFFBQXRDO0FBQ0g7O0FBRUQsUUFBSUEsUUFBUSxDQUFDZSxJQUFULEtBQWtCLE9BQWxCLElBQTZCb0ssU0FBUyxDQUFDLEtBQUQsQ0FBMUMsRUFBa0Q7QUFDOUM5SixjQUFRLENBQUNxRyxNQUFUO0FBQ0g7O0FBRUQsUUFBSUQsUUFBUSxDQUFDLEtBQUksQ0FBQzdFLE9BQUwsQ0FBYStFLE9BQWQsQ0FBUixLQUFtQyxDQUF2QyxFQUEwQztBQUN0Qy9CLG1CQUFhLENBQUMyQixPQUFkLENBQXNCLFFBQXRCLEVBQWdDakQsS0FBaEMsQ0FBc0MsTUFBdEM7QUFDSDs7QUFFRCxRQUFHdEUsUUFBUSxDQUFDZSxJQUFULEtBQWtCLE9BQXJCLEVBQThCO0FBQzFCUixrRkFBWSxDQUFDUCxRQUFELENBQVo7QUFDSCxLQUZELE1BRU87QUFDSFMsb0ZBQWMsQ0FBQ1QsUUFBRCxDQUFkO0FBQ0g7QUFDSixHQXJCTCxFQXNCS21CLFFBdEJMLENBc0JjLFlBQU07QUFDWnlFLGlCQUFhLENBQUN6RyxXQUFkLENBQTBCLFNBQTFCO0FBQ0gsR0F4QkwsRUF5Qks0SCxJQXpCTDtBQTJCQSxTQUFPLEtBQVA7QUFDSDtBQUVEOzs7Ozs7O0FBTUEsU0FBU29FLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQ3ZCLE1BQUkzRCxRQUFRLENBQUMyRCxNQUFNLENBQUN4SSxPQUFQLENBQWU4RSxNQUFoQixDQUFSLEtBQW9DLENBQXhDLEVBQTJDO0FBQ3ZDLFFBQUluRCxxRkFBZSxLQUFLLENBQXhCLEVBQTJCO0FBQ3ZCLFVBQU04RyxVQUFVLEdBQUc5TSxDQUFDLENBQUM2TSxNQUFELENBQUQsQ0FBVTdELE9BQVYsQ0FBa0IsUUFBbEIsRUFBNEIzRyxJQUE1QixDQUFpQyxRQUFqQyxDQUFuQjs7QUFDQSxVQUFJLFFBQU95SyxVQUFQLDJDQUEwQ0EsVUFBVSxLQUFLLEtBQXpELElBQWtFNUQsUUFBUSxDQUFDNEQsVUFBRCxDQUFSLEtBQXlCLENBQS9GLEVBQWtHO0FBQzlGLGVBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDbEVEO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7QUFRZSx5RUFBVUMsVUFBVixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFDM0MsU0FBTyxjQUFjRCxVQUFkLEdBQTJCLEdBQTNCLEdBQWlDRSw2REFBWSxDQUFDRCxRQUFELENBQTdDLEdBQTBELEdBQTFELEdBQWdFQSxRQUF2RTtBQUNILEM7Ozs7Ozs7Ozs7OztBQ1pEO0FBQUE7Ozs7Ozs7QUFPZSx5RUFBU0UsSUFBVCxFQUFlO0FBQzFCLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUVBLE1BQUl2RCxTQUFTLEdBQUdzRCxJQUFJLENBQUNqTixJQUFMLENBQVUsZUFBVixDQUFoQjs7QUFDQSxNQUFJLENBQUMySixTQUFTLENBQUMzQixNQUFmLEVBQXVCO0FBQ25CMkIsYUFBUyxHQUFHc0QsSUFBWjtBQUNIOztBQUVEdEQsV0FBUyxDQUFDc0IsSUFBVixDQUFlLFlBQVk7QUFDdkIsUUFBTWtDLFdBQVcsR0FBR3BOLENBQUMsQ0FBQyxJQUFELENBQXJCOztBQUNBLFlBQVFvTixXQUFXLENBQUM3RCxJQUFaLENBQWlCLE1BQWpCLENBQVI7QUFDSSxXQUFLLE9BQUw7QUFDQSxXQUFLLFVBQUw7QUFDSTRELGdCQUFRLENBQUNDLFdBQVcsQ0FBQzdELElBQVosQ0FBaUIsTUFBakIsQ0FBRCxDQUFSLEdBQXFDLENBQUMsQ0FBQzZELFdBQVcsQ0FBQ0MsSUFBWixDQUFrQixTQUFsQixDQUFGLEdBQWtDLENBQXZFO0FBQ0E7O0FBQ0o7QUFDSUYsZ0JBQVEsQ0FBQ0MsV0FBVyxDQUFDN0QsSUFBWixDQUFpQixNQUFqQixDQUFELENBQVIsR0FBcUM2RCxXQUFXLENBQUNoRCxHQUFaLEVBQXJDO0FBTlI7QUFRSCxHQVZEO0FBWUEsU0FBTytDLFFBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDNUJEO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7O0FBVWUseUVBQVVILFFBQVYsRUFBb0I7QUFDL0IsTUFBTU0sWUFBWSxHQUFHQyxrREFBRyxDQUFDUCxRQUFELENBQUgsQ0FBY1EsU0FBZCxDQUF3QixDQUF4QixFQUEyQixDQUEzQixDQUFyQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0gsWUFBWSxDQUFDSSxLQUFiLENBQW1CLFNBQW5CLENBQWxCO0FBQ0EsU0FBT0QsU0FBUyxDQUFDekksSUFBVixDQUFlLEdBQWYsQ0FBUDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBR0E7QUFDQXVILE1BQU0sQ0FBQ3ZNLENBQVAsR0FBV0EsNkNBQVg7QUFDQXVNLE1BQU0sQ0FBQ29CLE1BQVAsR0FBZ0IzTiw2Q0FBaEI7QUFFQTs7OztBQUdBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUVBOzs7O0FBR0E7QUFFQTs7OztBQUdBO0FBRUE7Ozs7QUFHQSxJQUFNNE4sSUFBSSxHQUFHOUssUUFBUSxDQUFDK0ssUUFBVCxDQUFrQkMsS0FBbEIsQ0FBd0IsR0FBeEIsQ0FBYjs7QUFDQSxJQUFJRixJQUFJLENBQUMzRixNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDakI7Ozs7O0FBS0EsTUFBTThGLE9BQU8sR0FBR0MsNkVBQWhCOztBQUNBRCxTQUFPLENBQUMzSyxJQUFSLEdBQWVDLEdBQWYsQ0FBbUIsVUFBQTRLLE1BQU0sRUFBSTtBQUN6QixRQUFNQyxXQUFXLEdBQUdELE1BQU0sQ0FBQ0gsS0FBUCxDQUFhLEdBQWIsQ0FBcEI7O0FBRUEsUUFBSUksV0FBVyxDQUFDLENBQUQsQ0FBWCxLQUFtQk4sSUFBSSxDQUFDLENBQUQsQ0FBM0IsRUFBZ0M7QUFDNUIvRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCOEcsSUFBSSxDQUFDLENBQUQsQ0FBM0I7QUFDQUcsYUFBTyxDQUFDRSxNQUFELENBQVA7QUFDSDtBQUNKLEdBUEQ7O0FBU0EsTUFBTUUsVUFBVSxHQUFHSCx1RUFBbkI7O0FBQ0FHLFlBQVUsQ0FBQy9LLElBQVgsR0FBa0JDLEdBQWxCLENBQXNCLFVBQUE0SyxNQUFNLEVBQUk7QUFDNUIsUUFBTUMsV0FBVyxHQUFHRCxNQUFNLENBQUNILEtBQVAsQ0FBYSxHQUFiLENBQXBCOztBQUVBLFFBQUlJLFdBQVcsQ0FBQyxDQUFELENBQVgsS0FBbUJOLElBQUksQ0FBQyxDQUFELENBQXZCLElBQThCTSxXQUFXLENBQUMsQ0FBRCxDQUFYLEtBQW1CTixJQUFJLENBQUMsQ0FBRCxDQUF6RCxFQUE4RDtBQUMxRC9HLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkI4RyxJQUFJLENBQUMsQ0FBRCxDQUEvQjtBQUNBTyxnQkFBVSxDQUFDRixNQUFELENBQVY7QUFDSDtBQUNKLEdBUEQ7QUFRSCxDOzs7Ozs7Ozs7Ozs7QUMvRUQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRWUsMkVBQVk7QUFBQTs7QUFDdkJqSCwyRUFBUSxDQUFDb0gsU0FBVCxDQUFtQkMsb0VBQW5CLEVBQWlDLFVBQUNoTSxJQUFELEVBQU9pTSxJQUFQLEVBQWdCO0FBQzdDdEgsNkVBQVEsQ0FBQ3VILFdBQVQsQ0FBcUJGLG9FQUFyQixFQUFtQ0MsSUFBbkM7QUFFQSxRQUFNakYsVUFBVSxHQUFHckosQ0FBQyxDQUFDLEtBQUQsQ0FBcEI7QUFDQSxRQUFNd08sT0FBTyxHQUFHeE8sQ0FBQyxDQUFDLE1BQU0sS0FBSSxDQUFDcUUsT0FBTCxDQUFhb0ssVUFBcEIsQ0FBRCxDQUNYM0osSUFEVyxHQUVYaUQsT0FGVyxDQUVGLElBQUlDLE1BQUosQ0FBVyxLQUFJLENBQUMzRCxPQUFMLENBQWFxSyxtQkFBeEIsRUFBNkMsR0FBN0MsQ0FGRSxFQUVpRHJNLElBQUksQ0FBQ3NNLFFBRnRELEVBR1g1RyxPQUhXLENBR0YsSUFBSUMsTUFBSixDQUFXLGNBQVgsRUFBMkIsR0FBM0IsQ0FIRSxFQUcrQixLQUFJLENBQUMzRCxPQUFMLENBQWF1SyxTQUFiLElBQTBCLEVBSHpELENBQWhCO0FBS0F2RixjQUFVLENBQUNxRCxNQUFYLEdBQW9CbEksTUFBcEIsQ0FBMkJnSyxPQUEzQjtBQUNBbkYsY0FBVSxDQUFDeEksTUFBWDtBQUNBbUcsNkVBQVEsQ0FBQ2tCLFFBQVQsQ0FBa0IyRyxxRUFBbEIsRUFBaUN4TSxJQUFqQztBQUNILEdBWkQ7QUFhSCxDOzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSwyRUFBWTtBQUFBOztBQUN2QjJFLDJFQUFRLENBQUNvSCxTQUFULENBQW1CVSxvRUFBbkIsRUFBaUMsVUFBQ3pNLElBQUQsRUFBT2lNLElBQVAsRUFBZ0I7QUFDN0N0SCw2RUFBUSxDQUFDdUgsV0FBVCxDQUFxQk8sb0VBQXJCLEVBQW1DUixJQUFuQztBQUVBLFFBQU1TLFNBQVMsR0FBRy9PLENBQUMsQ0FBQyxNQUFNLEtBQUksQ0FBQ3FFLE9BQUwsQ0FBYW9LLFVBQXBCLENBQUQsQ0FBaUMzSixJQUFqQyxHQUNiaUQsT0FEYSxDQUNKLElBQUlDLE1BQUosQ0FBVyxjQUFYLENBREksRUFDd0IsS0FBSSxDQUFDM0QsT0FBTCxDQUFhdUssU0FBYixJQUEwQixFQURsRCxDQUFsQjtBQUdBLFFBQU1sQyxNQUFNLEdBQUcxTSxDQUFDLENBQUMsS0FBRCxDQUFELENBQVEwTSxNQUFSLEVBQWY7QUFFQUEsVUFBTSxDQUFDc0MsUUFBUCxHQUFrQm5PLE1BQWxCO0FBQ0E2TCxVQUFNLENBQUNsSSxNQUFQLENBQWN1SyxTQUFkO0FBQ0gsR0FWRDtBQVdILEM7Ozs7Ozs7Ozs7Ozs7QUNmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdlLHlFQUFVRSxVQUFWLEVBQXNCO0FBQ2pDakksMkVBQVEsQ0FBQ29ILFNBQVQsQ0FBbUJhLFVBQW5CLEVBQStCLFlBQU07QUFDakM7Ozs7O0FBS0EsUUFBTUMsZUFBZSxHQUFHbkUsUUFBUSxDQUFDb0UsY0FBVCxDQUF3QixVQUF4QixDQUF4QjtBQUVBOzs7Ozs7QUFLQSxRQUFNQyxVQUFVLEdBQUdyRSxRQUFRLENBQUNvRSxjQUFULENBQXdCLGFBQXhCLENBQW5CO0FBRUE7Ozs7QUFHQSxRQUFNRSxlQUFlLEdBQUcsSUFBSUMsMkVBQUosQ0FBb0JKLGVBQXBCLEVBQ25CSyxZQURtQixDQUNOTCxlQUFlLENBQUM3SyxPQUFoQixDQUF3Qm5FLEdBRGxCLEVBRW5CdUMsS0FGbUIsQ0FFYixVQUFDakIsSUFBRCxFQUFPQyxRQUFQLEVBQW9CO0FBQ3ZCTyxrRkFBWSxDQUFDUCxRQUFELENBQVo7QUFDQXpCLE9BQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JvSyxHQUFsQixDQUFzQixFQUF0QjtBQUNILEtBTG1CLEVBTW5Cb0YsTUFObUIsQ0FNWixZQUFNO0FBQ1Z4UCxPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0ssR0FBbEIsQ0FBc0IsRUFBdEI7QUFDSCxLQVJtQixFQVNuQnpILE9BVG1CLENBU1gsVUFBQ25CLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUN6QnpCLE9BQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCdUIsSUFBdkIsQ0FBNEJFLFFBQVEsQ0FBQ2dPLFNBQXJDO0FBQ0FMLGdCQUFVLENBQUNNLEtBQVgsR0FBbUJqTyxRQUFRLENBQUNnTyxTQUE1QjtBQUNILEtBWm1CLENBQXhCO0FBY0E7Ozs7QUFHQSxRQUFJTCxVQUFVLENBQUNNLEtBQVgsQ0FBaUJ6SCxNQUFyQixFQUE2QjtBQUN6Qm9ILHFCQUFlLENBQ1ZNLFVBREwsQ0FFUVAsVUFBVSxDQUFDTSxLQUZuQixFQUdRRSxtRUFBVyxDQUFDVixlQUFlLENBQUM3SyxPQUFoQixDQUF3QndMLE1BQXpCLEVBQWlDVCxVQUFVLENBQUNNLEtBQTVDLENBSG5CO0FBS0g7QUFFRDs7Ozs7QUFHQUwsbUJBQWUsQ0FBQ1MsS0FBaEI7QUFDSCxHQS9DRDtBQWdESCxDOzs7Ozs7Ozs7Ozs7O0FDekREO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSwyRUFBWTtBQUN2QjlJLDJFQUFRLENBQUNvSCxTQUFULENBQW1CekUsNEVBQW5CLEVBQTJDLFVBQUN0SCxJQUFELEVBQU9pTSxJQUFQLEVBQWdCO0FBQ3ZELFFBQU15QixhQUFhLEdBQUcvUCxDQUFDLENBQUMsYUFBRCxDQUF2QjtBQUNBLFFBQU1nUSxPQUFPLEdBQUdoUSxDQUFDLENBQUMsb0JBQUQsQ0FBakI7QUFFQSxRQUFJaVEsS0FBSyxHQUFHalEsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NpSSxNQUE5Qzs7QUFFQSxRQUFHZ0ksS0FBSyxHQUFHLENBQVgsRUFBYztBQUNWRixtQkFBYSxDQUFDRyxJQUFkO0FBQ0gsS0FGRCxNQUVPO0FBQ0hILG1CQUFhLENBQUNJLElBQWQ7QUFDSDs7QUFFREgsV0FBTyxDQUFDbEwsSUFBUixDQUFhbUwsS0FBYjtBQUNILEdBYkQ7QUFjSCxDOzs7Ozs7Ozs7Ozs7QUNsQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUVBalEsQ0FBQyxDQUFDK0ssUUFBRCxDQUFELENBRUt6SixFQUZMLENBRVEsT0FGUixFQUVpQixhQUZqQixFQUVnQyxZQUFZO0FBQ3BDdEIsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQm9RLElBQWpCLENBQXNCLG9CQUF0QixFQUE0Q25RLElBQTVDLENBQWlELHdCQUFqRCxFQUEyRW9RLEtBQTNFO0FBQ0gsQ0FKTCxFQU1LL08sRUFOTCxDQU1RLE9BTlIsRUFNaUIsVUFOakIsRUFNNkIsWUFBWTtBQUNqQ3RCLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J1SixJQUFsQixDQUF1QixVQUF2QixFQUFtQyxJQUFuQztBQUNBK0csWUFBVSxDQUFDLFlBQVk7QUFDbkIsUUFBSUMsT0FBTyxHQUFHdlEsQ0FBQyxDQUFDLHNCQUFELENBQWY7QUFDQSxRQUFJd1EsY0FBYyxHQUFHeFEsQ0FBQyxDQUFDLGlCQUFELENBQXRCO0FBQ0EsUUFBSXlRLFNBQVMsR0FBR3pRLENBQUMsQ0FBQyxPQUFELENBQWpCO0FBRUF5USxhQUFTLENBQUNwTyxJQUFWLENBQWUsY0FBZixFQUErQixrREFBL0I7QUFDQW9PLGFBQVMsQ0FBQzVELE1BQVYsQ0FBaUIsU0FBakI7QUFDQTRELGFBQVMsQ0FBQ2xILElBQVYsQ0FBZSxVQUFmLEVBQTJCLElBQTNCO0FBQ0FpSCxrQkFBYyxDQUFDRSxLQUFmO0FBRUFILFdBQU8sQ0FBQ0ksS0FBUixDQUFjLEdBQWQ7QUFDQUosV0FBTyxDQUFDbEcsR0FBUixDQUFZLFFBQVosRUFBc0IsRUFBdEI7QUFDQWtHLFdBQU8sQ0FBQ2xHLEdBQVIsQ0FBWTtBQUFDLHNCQUFnQixTQUFqQjtBQUNSLHNCQUFlLEtBRFA7QUFFUixzQkFBZTtBQUZQLEtBQVo7QUFJQSxRQUFNdUcsUUFBUSxHQUFHTCxPQUFPLENBQUNNLEdBQVIsQ0FBWSxDQUFaLEVBQWVDLFNBQWYsQ0FBeUIsSUFBekIsQ0FBakI7QUFDQU4sa0JBQWMsQ0FBQ2hNLE1BQWYsQ0FBc0JvTSxRQUF0QjtBQUNBSixrQkFBYyxDQUFDbkcsR0FBZixDQUFtQixRQUFuQixFQUE2QmtHLE9BQU8sQ0FBQ1EsWUFBUixHQUF1QixFQUFwRDtBQUNBUCxrQkFBYyxDQUFDbkcsR0FBZixDQUFtQixPQUFuQixFQUE0QmtHLE9BQU8sQ0FBQ1MsV0FBUixHQUFzQixFQUFsRDtBQUVBQyxzREFBVyxDQUFDTCxRQUFELEVBQVc7QUFDbEJNLGFBQU8sRUFBRSxDQURTO0FBRWxCQyxhQUFPLEVBQUUsQ0FBQyxDQUZRO0FBR2xCQyxhQUFPLEVBQUU7QUFIUyxLQUFYLENBQVgsQ0FJR0MsSUFKSCxDQUlRLFVBQVVDLE1BQVYsRUFBa0I7QUFDdEIsVUFBSUMsU0FBUyxHQUFHRCxNQUFNLENBQUNFLFNBQVAsQ0FBaUIsV0FBakIsQ0FBaEI7QUFDQSxVQUFJQyxPQUFPLEdBQUdGLFNBQVMsQ0FBQ3hKLE9BQVYsQ0FBa0Isa0JBQWxCLEVBQXNDLCtCQUF0QyxDQUFkO0FBQ0EvSCxPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0ssR0FBbEIsQ0FBc0JxSCxPQUF0QjtBQUNBelIsT0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnVKLElBQWxCLENBQXVCLFVBQXZCLEVBQW1DLEtBQW5DO0FBQ0ErRyxnQkFBVSxDQUFDLFlBQVk7QUFDbkJHLGlCQUFTLENBQUM1RCxNQUFWLENBQWlCLE9BQWpCO0FBRUE3TSxTQUFDLENBQUMsY0FBRCxDQUFELENBQWtCdUosSUFBbEIsQ0FBdUIsVUFBdkIsRUFBbUMsS0FBbkM7QUFDSCxPQUpTLEVBSVAsSUFKTyxDQUFWO0FBS0gsS0FkRDtBQWVILEdBcENTLEVBb0NQLEdBcENPLENBQVY7QUFxQ0gsQ0E3Q0wsRTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFPLElBQU1tSSwwQkFBMEIsR0FBRyw0QkFBbkM7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxFQUE3QixDOzs7Ozs7Ozs7Ozs7QUNEUDtBQUFBOzs7Ozs7O0FBT2UseUVBQVV4SyxDQUFWLEVBQWE7QUFDeEJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUVBLE1BQU1zRixNQUFNLEdBQUcxTSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLG9CQUFoQixDQUFmO0FBQ0EwRCxRQUFNLENBQUNrRixXQUFQLENBQW1CLE1BQW5CO0FBRUEsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ2REO0FBQUE7Ozs7Ozs7QUFPZSx5RUFBVXpLLENBQVYsRUFBYTtBQUN4QkEsR0FBQyxDQUFDQyxjQUFGO0FBRUFwSCxHQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjRSLFdBQXhCLENBQW9DLE1BQXBDO0FBRUEsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ2JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBS2UsMkVBQVk7QUFDdkIsTUFBTUMsY0FBYyxHQUFHN1IsQ0FBQyxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFNME0sTUFBTSxHQUFHbUYsY0FBYyxDQUFDN0ksT0FBZixDQUF1QixvQkFBdkIsQ0FBZjs7QUFFQSxNQUFJLENBQUM2SSxjQUFjLENBQUN4UCxJQUFmLENBQW9CLElBQXBCLENBQUwsRUFBZ0M7QUFDNUJxSyxVQUFNLENBQUM3TCxNQUFQO0FBQ0FtRyw2RUFBUSxDQUFDa0IsUUFBVCxDQUFrQndKLHdGQUFsQixFQUE4QyxFQUE5QztBQUNBLFdBQU8sS0FBUDtBQUNIOztBQUVELE1BQUl4TCxxRUFBSixHQUNLckMsSUFETCxDQUNVdkUsb0VBQUssQ0FBQ0MsRUFEaEIsRUFFS3dFLE1BRkwsQ0FFWSxlQUZaLEVBR0tJLE1BSEwsQ0FHWW5FLENBQUMsQ0FBQyxXQUFELEVBQWM7QUFDbkIsYUFBUyx1QkFEVTtBQUVuQixZQUFRLFFBRlc7QUFHbkIsb0JBQWdCLE9BSEc7QUFJbkIsYUFBUyxpQkFBTTtBQUNYLFVBQUk4UixzRUFBSixDQUFtQkQsY0FBYyxDQUFDeFAsSUFBZixDQUFvQixLQUFwQixDQUFuQixFQUNLRCxNQURMLENBQ1ksUUFEWixFQUVLTyxPQUZMLENBRWEsWUFBTTtBQUNYK0osY0FBTSxDQUFDN0wsTUFBUDtBQUNBbUcsaUZBQVEsQ0FBQ2tCLFFBQVQsQ0FBa0J3Six3RkFBbEIsRUFBOEMsRUFBOUM7QUFDSCxPQUxMLEVBTUtsSixJQU5MO0FBT0g7QUFaa0IsR0FBZCxDQUhiLEVBaUJLekMsS0FqQkw7QUFtQkEsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7QUFHZSwyRUFBWTtBQUN2QmlCLDJFQUFRLENBQUNvSCxTQUFULENBQW1Cc0Qsd0ZBQW5CLEVBQStDLFlBQU07QUFDakQsUUFBSUssS0FBSyxHQUFHLENBQVo7QUFFQS9SLEtBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWtMLElBQVosQ0FBaUIsVUFBQzhHLENBQUQsRUFBSUMsSUFBSixFQUFhO0FBQzFCalMsT0FBQyxDQUFDaVMsSUFBRCxDQUFELENBQVE3SCxHQUFSLENBQVkySCxLQUFLLEVBQWpCO0FBQ0gsS0FGRDtBQUdILEdBTkQ7QUFPSCxDOzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0FHLHdFQUFhO0FBRWJsUyxDQUFDLENBQUMrSyxRQUFELENBQUQsQ0FFS3pKLEVBRkwsQ0FFUSxPQUZSLEVBRWlCLGFBRmpCLEVBRWdDLFlBQVk7QUFDcEN1RixTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0E5RyxHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCb1EsSUFBakIsQ0FBc0Isb0JBQXRCLEVBQTRDblEsSUFBNUMsQ0FBaUQsd0JBQWpELEVBQTJFb1EsS0FBM0U7QUFDSCxDQUxMLEVBT0svTyxFQVBMLENBT1EsUUFQUixFQU9rQix1QkFQbEIsRUFPMkMsWUFBWTtBQUMvQyxNQUFNNlEsU0FBUyxHQUFHblMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixDQUFsQjtBQUNBLE1BQU1vSixlQUFlLEdBQUdELFNBQVMsQ0FBQ2xTLElBQVYsQ0FBZSwwQkFBMEIwUixrRkFBMUIsR0FBaUQsWUFBaEUsQ0FBeEI7QUFDQSxNQUFNVSxnQkFBZ0IsR0FBR0YsU0FBUyxDQUFDbFMsSUFBVixDQUFlLDBCQUEwQjBSLGtGQUExQixHQUFpRCxxQkFBaEUsQ0FBekI7QUFFQVUsa0JBQWdCLENBQUNqSSxHQUFqQixDQUFxQmdJLGVBQWUsQ0FBQy9QLElBQWhCLENBQXFCLE9BQXJCLElBQWdDNkcsUUFBUSxDQUFDbEosQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0ssR0FBUixFQUFELENBQTdEO0FBQ0gsQ0FiTCxFQWVLOUksRUFmTCxDQWVRLE9BZlIsRUFlaUIsMEJBQTBCcVEsa0ZBQTFCLEdBQWlELHFCQWZsRSxFQWV5RixZQUFZO0FBQzdGLE1BQU1RLFNBQVMsR0FBR25TLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdKLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBbEI7QUFDQSxNQUFNc0osUUFBUSxHQUFHSCxTQUFTLENBQUNsUyxJQUFWLENBQWUsdUJBQWYsRUFBd0NtSyxHQUF4QyxFQUFqQjtBQUNBLE1BQU1nSSxlQUFlLEdBQUdELFNBQVMsQ0FBQ2xTLElBQVYsQ0FBZSwwQkFBMEIwUixrRkFBMUIsR0FBaUQsWUFBaEUsQ0FBeEI7QUFFQVMsaUJBQWUsQ0FBQ2hJLEdBQWhCLENBQW9CcEssQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0ssR0FBUixLQUFnQmtJLFFBQXBDO0FBQ0gsQ0FyQkw7QUF1Qkk7OztBQXZCSixDQTBCS2hSLEVBMUJMLENBMEJRLE9BMUJSLEVBMEJpQixnQkExQmpCLEVBMEJtQ2lSLCtEQTFCbkM7QUE0Qkk7OztBQTVCSixDQStCS2pSLEVBL0JMLENBK0JRLE9BL0JSLEVBK0JpQixjQS9CakIsRUErQmlDa1IsZ0VBL0JqQztBQWlDSTs7O0FBakNKLENBb0NLbFIsRUFwQ0wsQ0FvQ1EsT0FwQ1IsRUFvQ2lCLHdCQXBDakIsRUFvQzJDbVIsdUVBcEMzQyxFOzs7Ozs7Ozs7Ozs7QUNiQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBS08sU0FBU0MsU0FBVCxHQUFzQjtBQUN6QixNQUFNdEssU0FBUyxHQUFHcEksQ0FBQyxDQUFDLGlCQUFELENBQW5CO0FBQ0EsTUFBTXFDLElBQUksR0FBR21ILG1FQUFXLENBQUNwQixTQUFTLENBQUNuSSxJQUFWLENBQWUsZ0JBQWYsQ0FBRCxDQUF4Qjs7QUFFQSxNQUFJLENBQUNrRCxNQUFNLENBQUNDLElBQVAsQ0FBWWYsSUFBWixFQUFrQjRGLE1BQXZCLEVBQStCO0FBQzNCaEYsaUZBQVcsQ0FBQyxrQkFBRCxDQUFYO0FBRUEsV0FBTyxLQUFQO0FBQ0g7O0FBRUQsTUFBSXFGLHNFQUFKLENBQVN0SSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxQyxJQUFSLENBQWEsT0FBYixDQUFULEVBQ0tELE1BREwsQ0FDWSxLQURaLEVBRUtDLElBRkwsQ0FFVUEsSUFGVixFQUdLTSxPQUhMLENBR2EsVUFBVWdRLElBQVYsRUFBZ0I7QUFDckJ2SyxhQUFTLENBQUNuSSxJQUFWLENBQWUsWUFBZixFQUE2QlcsV0FBN0IsQ0FBeUMsU0FBekM7QUFDQXNCLGtGQUFjLENBQUN5USxJQUFELENBQWQ7QUFDSCxHQU5MLEVBT0tuSyxJQVBMO0FBU0EsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQzlCRDtBQUFBO0FBQUE7QUFFQXhJLENBQUMsQ0FBQytLLFFBQUQ7QUFFRzs7O0FBRkosQ0FLS3pKLEVBTEwsQ0FLUSxPQUxSLEVBS2lCLHdCQUxqQixFQUsyQyxZQUFZO0FBQy9DdEIsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixFQUFzQkYsUUFBdEIsQ0FBK0IsU0FBL0I7QUFDSCxDQVBMO0FBU0k7OztBQVRKLENBWUt4SCxFQVpMLENBWVEsT0FaUixFQVlpQixZQVpqQixFQVkrQm9SLDZEQVovQixFOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFPLElBQU1FLHVCQUF1QixHQUFHLHlCQUFoQyxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsMkVBQVk7QUFDdkI1TCwyRUFBUSxDQUFDb0gsU0FBVCxDQUFtQndFLGtFQUFuQixFQUE0QyxVQUFDdlEsSUFBRCxFQUFPaU0sSUFBUCxFQUFnQjtBQUN4RHRILDZFQUFRLENBQUN1SCxXQUFULENBQXFCcUUsa0VBQXJCLEVBQThDdEUsSUFBOUM7QUFFQXRPLEtBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCdUYsY0FBckIsQ0FBb0M7QUFDaENDLFlBQU0sRUFBRSxxQkFEd0I7QUFFaENDLGVBQVMsRUFBRTtBQUZxQixLQUFwQztBQUlILEdBUEQ7QUFRSCxDOzs7Ozs7Ozs7Ozs7O0FDWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBekYsQ0FBQyxDQUFDK0ssUUFBRDtBQUVHOzs7QUFGSixDQUtLekosRUFMTCxDQUtRLE9BTFIsRUFLaUIsc0JBTGpCLEVBS3lDLFlBQVk7QUFDN0N1UiwrREFBVyxDQUFDQyxJQUFaLENBQWlCLElBQWpCO0FBQ0gsQ0FQTDtBQVNJOzs7QUFUSixDQVlLeFIsRUFaTCxDQVlRLE9BWlIsRUFZaUIsc0JBWmpCLEVBWXlDLFlBQVk7QUFDN0MsTUFBTXlSLEtBQUssR0FBRyxJQUFkOztBQUVBQywrREFBVyxDQUFDRixJQUFaLENBQWlCQyxLQUFqQjtBQUNILENBaEJMO0FBa0JJOzs7QUFsQkosQ0FxQkszSCxLQXJCTCxDQXFCVyxZQUFVO0FBQ2JwRSwyRUFBUSxDQUFDb0gsU0FBVCxDQUFtQjZFLHlFQUFuQixFQUFzQyxVQUFDNVEsSUFBRCxFQUFPaU0sSUFBUCxFQUFnQjtBQUNsRHRILDZFQUFRLENBQUN1SCxXQUFULENBQXFCRixvRUFBckI7QUFDQXJILDZFQUFRLENBQUN1SCxXQUFULENBQXFCTSxxRUFBckI7QUFDSCxHQUhEO0FBSUgsQ0ExQkw7QUE0QkE7Ozs7O0FBSUE3TyxDQUFDLENBQUMsWUFBRCxDQUFELENBQ0swQixLQURMLENBQ1d3UiwyREFEWCxFOzs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBRUFsVCxDQUFDLENBQUMrSyxRQUFELENBQUQsQ0FFS3pKLEVBRkwsQ0FFUSxPQUZSLEVBRWlCLGFBRmpCLEVBRWdDLFlBQVk7QUFDcEMsTUFBR3RCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ULElBQVIsR0FBZTVJLE1BQWYsS0FBMEIsQ0FBN0IsRUFBZ0M7QUFDNUJ2SyxLQUFDLENBQUMsSUFBRCxDQUFELENBQVF1QixJQUFSLENBQWF2QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVF1QixJQUFSLEdBQWV3RyxPQUFmLENBQXVCLE1BQXZCLEVBQStCLE1BQS9CLENBQWI7QUFDQS9ILEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ULElBQVIsR0FBZTVJLE1BQWYsQ0FBc0IsQ0FBdEI7QUFDSCxHQUhELE1BR087QUFDSHZLLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLElBQVIsQ0FBYXZCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLElBQVIsR0FBZXdHLE9BQWYsQ0FBdUIsTUFBdkIsRUFBK0IsTUFBL0IsQ0FBYjtBQUNBL0gsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUIsSUFBUixHQUFld0csT0FBZixDQUF1QixNQUF2QixFQUErQixNQUEvQjtBQUNBL0gsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbVQsSUFBUixHQUFlNUksTUFBZixDQUFzQixNQUF0QjtBQUNIO0FBQ0osQ0FYTCxFOzs7Ozs7Ozs7Ozs7QUNIQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7OztBQUllLDJFQUFZO0FBQ3ZCNkksYUFBVyxDQUFDLEtBQUsxRCxLQUFOLEVBQWEsS0FBS3JMLE9BQUwsQ0FBYWdQLE9BQTFCLENBQVg7QUFDSDtBQUVELElBQU1DLGdCQUFnQixHQUFHdFQsQ0FBQyxDQUFDLFVBQUQsQ0FBMUI7QUFDQSxJQUFNdVQsbUJBQW1CLEdBQUd2VCxDQUFDLENBQUMseUJBQUQsQ0FBN0I7QUFDQSxJQUFNd1QsbUJBQW1CLEdBQUd4VCxDQUFDLENBQUMsd0JBQUQsQ0FBN0I7QUFDQSxJQUFNeVQsTUFBTSxHQUFHelQsQ0FBQyxDQUFDLFNBQUQsQ0FBaEI7O0FBRUEsU0FBU29ULFdBQVQsQ0FBcUI1USxJQUFyQixFQUEyQjZRLE9BQTNCLEVBQW9DO0FBQ2hDQyxrQkFBZ0IsQ0FDWDVDLEtBREwsR0FFS3BMLE9BRkwsQ0FFYTtBQUNMakQsUUFBSSxFQUFFcVIsU0FBUyxDQUFDbFIsSUFBRDtBQURWLEdBRmIsRUFLSzRILEdBTEwsQ0FLU2lKLE9BTFQsRUFNS3JILE1BTkw7QUFRQTs7OztBQUdBbUUsTUFBSSxDQUFDb0QsbUJBQUQsQ0FBSjtBQUNBcEQsTUFBSSxDQUFDcUQsbUJBQUQsQ0FBSjtBQUNBdEQsTUFBSSxDQUFDdUQsTUFBRCxDQUFKOztBQUVBLFVBQVF2SyxRQUFRLENBQUMxRyxJQUFELENBQWhCO0FBRUk7QUFDQSxTQUFLLENBQUw7QUFDSTBOLFVBQUksQ0FBQ3FELG1CQUFELENBQUo7QUFDQTtBQUVKOztBQUNBLFNBQUssQ0FBTDtBQUNJckQsVUFBSSxDQUFDc0QsbUJBQUQsQ0FBSjtBQUNBO0FBRUo7O0FBQ0EsU0FBSyxDQUFMO0FBQ0lyRCxVQUFJLENBQUNzRCxNQUFELENBQUo7QUFDQTtBQWZSO0FBaUJIOztBQUVELFNBQVN0RCxJQUFULENBQWNJLE9BQWQsRUFBdUI7QUFDbkJBLFNBQU8sQ0FBQ3pILFFBQVIsQ0FBaUIsTUFBakI7QUFDSDs7QUFFRCxTQUFTb0gsSUFBVCxDQUFjSyxPQUFkLEVBQXVCO0FBQ25CQSxTQUFPLENBQUMzUCxXQUFSLENBQW9CLE1BQXBCO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ3RERDtBQUFBO0FBQUE7OztBQUdPLFNBQVMrUyxVQUFULENBQW9CeE0sQ0FBcEIsRUFBdUI7QUFDMUJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUVBLE1BQU13TSxhQUFhLEdBQUc1VCxDQUFDLENBQUMsNEJBQUQsQ0FBdkI7QUFDQSxNQUFNNlQsUUFBUSxHQUFHN1QsQ0FBQyxDQUFDLHlCQUFELENBQWxCO0FBQ0EsTUFBSThULFFBQVEsR0FBRyxFQUFmO0FBRUE5VCxHQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkMsSUFBMUIsQ0FBK0IsZ0NBQS9CLEVBQWlFaUwsSUFBakUsQ0FBc0UsVUFBVTZJLENBQVYsRUFBYTlCLElBQWIsRUFBbUI7QUFDckZwTCxXQUFPLENBQUNDLEdBQVIsQ0FBWTlHLENBQUMsQ0FBQ2lTLElBQUQsQ0FBYjtBQUNBLFFBQUkrQixPQUFPLEdBQUdoVSxDQUFDLENBQUNpUyxJQUFELENBQUQsQ0FBUTVQLElBQVIsQ0FBYSxVQUFiLENBQWQ7QUFDQSxRQUFJNFIsU0FBUyxHQUFHalUsQ0FBQyxDQUFDaVMsSUFBRCxDQUFELENBQVE1UCxJQUFSLENBQWEsWUFBYixDQUFoQjs7QUFDQSxRQUFHMlIsT0FBSCxFQUFZO0FBQ1IsVUFBR0gsUUFBUSxDQUFDeEcsSUFBVCxDQUFjLFNBQWQsTUFBNkIsSUFBaEMsRUFBc0M7QUFDbEN5RyxnQkFBUSxDQUFDalAsSUFBVCxDQUFjLE9BQU9tUCxPQUFQLEdBQWlCLEdBQWpCLEdBQXVCQyxTQUFyQztBQUNILE9BRkQsTUFFTztBQUNISCxnQkFBUSxDQUFDalAsSUFBVCxDQUFjbVAsT0FBZDtBQUNIO0FBQ0o7QUFDSixHQVhEO0FBYUE7Ozs7QUFHQSxNQUFJRixRQUFRLENBQUM3TCxNQUFULElBQW1CLENBQXZCLEVBQTBCO0FBQ3RCakksS0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJDLElBQTFCLENBQStCLHdCQUEvQixFQUF5RGlMLElBQXpELENBQThELFVBQVU2SSxDQUFWLEVBQWE5QixJQUFiLEVBQW1CO0FBQzdFLFVBQUkrQixPQUFPLEdBQUdoVSxDQUFDLENBQUNpUyxJQUFELENBQUQsQ0FBUTVQLElBQVIsQ0FBYSxVQUFiLENBQWQ7QUFDQSxVQUFJNFIsU0FBUyxHQUFHalUsQ0FBQyxDQUFDaVMsSUFBRCxDQUFELENBQVE1UCxJQUFSLENBQWEsWUFBYixDQUFoQjs7QUFDQSxVQUFHMlIsT0FBSCxFQUFZO0FBQ1IsWUFBR0gsUUFBUSxDQUFDeEcsSUFBVCxDQUFjLFNBQWQsTUFBNkIsSUFBaEMsRUFBcUM7QUFDakN5RyxrQkFBUSxDQUFDalAsSUFBVCxDQUFjLE9BQU9tUCxPQUFQLEdBQWlCLEdBQWpCLEdBQXVCQyxTQUFyQztBQUNILFNBRkQsTUFFTztBQUNISCxrQkFBUSxDQUFDalAsSUFBVCxDQUFjbVAsT0FBZDtBQUNIO0FBQ0o7QUFDSixLQVZEO0FBV0g7O0FBRURKLGVBQWEsQ0FBQ3hKLEdBQWQsQ0FBa0IwSixRQUFsQjtBQUNBRixlQUFhLENBQUNNLE1BQWQ7QUFDQW5KLFVBQVEsQ0FBQ29KLFdBQVQsQ0FBcUIsTUFBckI7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDM0NEO0FBQUE7QUFBQTs7O0FBR08sU0FBU0MsY0FBVCxDQUF3QmpOLENBQXhCLEVBQTJCO0FBQzlCQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFJME0sUUFBUSxHQUFHLEVBQWY7QUFFQTlULEdBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCQyxJQUExQixDQUErQixnQ0FBL0IsRUFBaUVpTCxJQUFqRSxDQUFzRSxVQUFVNkksQ0FBVixFQUFhOUIsSUFBYixFQUFtQjtBQUNyRnBMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZOUcsQ0FBQyxDQUFDaVMsSUFBRCxDQUFiO0FBQ0EsUUFBSStCLE9BQU8sR0FBR2hVLENBQUMsQ0FBQ2lTLElBQUQsQ0FBRCxDQUFRNVAsSUFBUixDQUFhLFVBQWIsQ0FBZDs7QUFDQSxRQUFHMlIsT0FBSCxFQUFZO0FBQ1JGLGNBQVEsQ0FBQ2pQLElBQVQsQ0FBY21QLE9BQWQ7QUFDSDtBQUNKLEdBTkQ7QUFRQTs7OztBQUdBLE1BQUlGLFFBQVEsQ0FBQzdMLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkJqSSxLQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkMsSUFBMUIsQ0FBK0Isd0JBQS9CLEVBQXlEaUwsSUFBekQsQ0FBOEQsVUFBVTZJLENBQVYsRUFBYTlCLElBQWIsRUFBbUI7QUFDN0UsVUFBSStCLE9BQU8sR0FBR2hVLENBQUMsQ0FBQ2lTLElBQUQsQ0FBRCxDQUFRNVAsSUFBUixDQUFhLFVBQWIsQ0FBZDs7QUFDQSxVQUFHMlIsT0FBSCxFQUFZO0FBQ1JGLGdCQUFRLENBQUNqUCxJQUFULENBQWNtUCxPQUFkO0FBQ0g7QUFDSixLQUxEO0FBTUg7O0FBR0R6SCxRQUFNLENBQUN6SixRQUFQLEdBQWtCOUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsSUFBUixDQUFhLE9BQWIsSUFBd0IsT0FBeEIsR0FBa0N5UixRQUFRLENBQUM5TyxJQUFULENBQWMsR0FBZCxDQUFwRDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFBQTtBQUFBO0FBRWUseUVBQVVtQyxDQUFWLEVBQWE7QUFDeEJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUVBLE1BQUkwSyxzRUFBSixDQUFtQixLQUFLL08sSUFBeEIsRUFDS0osT0FETCxDQUNhLFVBQUE0QixNQUFNLEVBQUk7QUFDZnZFLEtBQUMsQ0FBQyxvQkFBRCxDQUFELENBQ0tvSyxHQURMLENBQ1M3RixNQUFNLENBQUM4UCxhQURoQixFQUVLelQsV0FGTCxDQUVpQixNQUZqQjtBQUdILEdBTEwsRUFNSzRILElBTkw7QUFRQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFHTyxTQUFTcUIsV0FBVCxHQUF3QjtBQUMzQixNQUFHN0osQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUosSUFBUixDQUFhLE1BQWIsS0FBd0IsVUFBM0IsRUFBdUM7QUFDbkMsUUFBTStLLGVBQWUsR0FBR3RVLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFJLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBeEI7QUFDQWlNLG1CQUFlLENBQUN4TCxRQUFoQixDQUF5QixTQUF6QjtBQUNBOUIsNkVBQVEsQ0FBQ2tCLFFBQVQsQ0FBa0J5Qiw0RUFBbEI7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7Ozs7QUNYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBM0osQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUNLc0IsRUFETCxDQUNRLE9BRFIsRUFDaUIsZUFEakIsRUFDa0N1Uiw2REFEbEMsRUFFS3ZSLEVBRkwsQ0FFUSxPQUZSLEVBRWlCLGVBRmpCLEVBRWtDMFIsNkRBRmxDO0FBSUFoVCxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUNLZ00sTUFETCxDQUNZdUksNERBRFosRUFFS3ZJLE1BRkw7QUFJQWhNLENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDMEIsS0FBakMsQ0FBdUM4Uyx5RUFBdkM7QUFHQXhVLENBQUMsQ0FBQytLLFFBQUQ7QUFDRzs7O0FBREosQ0FJS3pKLEVBSkwsQ0FJUSxPQUpSLEVBSWlCLGNBSmpCLEVBSWlDcVMsK0RBSmpDO0FBTUk7OztBQU5KLENBU0tyUyxFQVRMLENBU1EsT0FUUixFQVNpQixrQkFUakIsRUFTcUM4Uyx1RUFUckM7QUFXSTs7O0FBWEosQ0FjSzlTLEVBZEwsQ0FjUSxPQWRSLEVBY2lCLHNCQWRqQixFQWN5QyxZQUFZO0FBQzdDLE1BQU15UixLQUFLLEdBQUcsSUFBZDs7QUFFQUYsK0RBQVcsQ0FBQ0MsSUFBWixDQUFpQkMsS0FBakI7QUFDSCxDQWxCTCxFQW9CS3pSLEVBcEJMLENBb0JRLFFBcEJSLEVBb0JrQix1QkFwQmxCLEVBb0IyQyxZQUFZO0FBQy9DLE1BQU1tVCxTQUFTLEdBQUd6VSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLElBQWhCLENBQWxCO0FBQ0EsTUFBTW9KLGVBQWUsR0FBR3FDLFNBQVMsQ0FBQ3hVLElBQVYsQ0FBZSxjQUFjMFIsbUZBQWQsR0FBcUMsS0FBcEQsQ0FBeEI7QUFDQSxNQUFNVSxnQkFBZ0IsR0FBR29DLFNBQVMsQ0FBQ3hVLElBQVYsQ0FBZSxjQUFjMFIsbUZBQWQsR0FBcUMsY0FBcEQsQ0FBekI7QUFFQVUsa0JBQWdCLENBQUNqSSxHQUFqQixDQUFxQmdJLGVBQWUsQ0FBQy9QLElBQWhCLENBQXFCLE9BQXJCLElBQWdDNkcsUUFBUSxDQUFDbEosQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0ssR0FBUixFQUFELENBQTdEO0FBQ0gsQ0ExQkwsRUE0Qks5SSxFQTVCTCxDQTRCUSxPQTVCUixFQTRCaUIsY0FBY3FRLG1GQUFkLEdBQXFDLGNBNUJ0RCxFQTRCc0UsWUFBWTtBQUMxRSxNQUFNOEMsU0FBUyxHQUFHelUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixDQUFsQjtBQUNBLE1BQU1zSixRQUFRLEdBQUdtQyxTQUFTLENBQUN4VSxJQUFWLENBQWUsdUJBQWYsRUFBd0NtSyxHQUF4QyxFQUFqQjtBQUNBLE1BQU1nSSxlQUFlLEdBQUdxQyxTQUFTLENBQUN4VSxJQUFWLENBQWUsY0FBYzBSLG1GQUFkLEdBQXFDLEtBQXBELENBQXhCO0FBRUFTLGlCQUFlLENBQUNoSSxHQUFoQixDQUFvQnBLLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9LLEdBQVIsS0FBZ0JrSSxRQUFwQztBQUNILENBbENMO0FBb0NJOzs7QUFwQ0osQ0F1Q0toUixFQXZDTCxDQXVDUSxPQXZDUixFQXVDaUIsc0JBdkNqQixFQXVDeUMsWUFBWTtBQUM3QyxNQUFNeVIsS0FBSyxHQUFHLElBQWQ7O0FBRUFDLCtEQUFXLENBQUNGLElBQVosQ0FBaUJDLEtBQWpCO0FBQ0gsQ0EzQ0w7QUE2Q0k7OztBQTdDSixDQWdES3pSLEVBaERMLENBZ0RRLFFBaERSLEVBZ0RrQix3RkFoRGxCLEVBZ0Q0R3VJLGlFQWhENUc7QUFrREk7OztBQWxESixDQXFES3VCLEtBckRMLENBcURXLFlBQVU7QUFDYnNKLCtFQUFtQjtBQUVuQjFOLDJFQUFRLENBQUNvSCxTQUFULENBQW1CNkUseUVBQW5CLEVBQXNDLFVBQUM1USxJQUFELEVBQU9pTSxJQUFQLEVBQWdCO0FBQ2xEdEgsNkVBQVEsQ0FBQ3VILFdBQVQsQ0FBcUJGLG9FQUFyQjtBQUNBckgsNkVBQVEsQ0FBQ3VILFdBQVQsQ0FBcUJNLHFFQUFyQjtBQUNILEdBSEQ7QUFJSCxDQTVETCxFOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNUixZQUFZLEdBQUcsY0FBckI7QUFDQSxJQUFNUSxhQUFhLEdBQUcsZUFBdEI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxJQUFNbUUsaUJBQWlCLEdBQUcsbUJBQTFCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS08sSUFBTTBCLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVQOzs7Ozs7QUFLTyxJQUFNQyxjQUFjLEdBQUcsYUFBdkIsQzs7Ozs7Ozs7Ozs7O0FDWlA7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7QUFNZSwyRUFBWTtBQUN2QixNQUFNVixNQUFNLEdBQUduSixRQUFRLENBQUNvRSxjQUFULENBQXdCeUYseURBQXhCLENBQWY7O0FBRUEsTUFBSSxDQUFDVixNQUFELElBQVdBLE1BQU0sQ0FBQ1csYUFBUCxLQUF5QixDQUFDLENBQXpDLEVBQTRDO0FBQ3hDLFdBQU8sS0FBUDtBQUNIOztBQUVELE1BQUlYLE1BQU0sQ0FBQ1ksT0FBUCxDQUFlN00sTUFBZixJQUF5QmlNLE1BQU0sQ0FBQ1ksT0FBUCxDQUFlWixNQUFNLENBQUNXLGFBQXRCLENBQTdCLEVBQW1FO0FBQy9ELFFBQUlFLGVBQWUsR0FBR2IsTUFBTSxDQUFDWSxPQUFQLENBQWVaLE1BQU0sQ0FBQ1csYUFBdEIsQ0FBdEI7QUFFQTdVLEtBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0I4SSxRQUFsQixDQUEyQixNQUEzQjtBQUNBOUksS0FBQyxDQUFDLGtCQUFrQitVLGVBQWUsQ0FBQ3JGLEtBQW5DLENBQUQsQ0FBMkM5TyxXQUEzQyxDQUF1RCxNQUF2RDtBQUNIOztBQUVELFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdlLDJFQUFZO0FBQ3ZCOzs7QUFHQW9VLHdFQUFZLENBQUNMLDJEQUFELENBQVo7QUFFQTs7OztBQUdBekIscUVBQVE7QUFDWCxDOzs7Ozs7Ozs7Ozs7QUNqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdlLDJFQUFZO0FBQ3ZCbE0sMkVBQVEsQ0FBQ29ILFNBQVQsQ0FBbUJ1RywyREFBbkIsRUFBcUMsWUFBTTtBQUV2Qzs7O0FBR0FKLHdFQUFVO0FBRVY7Ozs7QUFHQXZVLEtBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCdUYsY0FBOUIsQ0FBNkM7QUFDekNDLFlBQU0sRUFBRSxxQkFEaUM7QUFFekNDLGVBQVMsRUFBRTtBQUY4QixLQUE3QztBQUlILEdBZEQ7QUFlSCxDOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQXpGLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IwQixLQUFoQixDQUFzQndSLGtFQUFRLEVBQTlCO0FBRUFsVCxDQUFDLENBQUMrSyxRQUFEO0FBRUc7OztBQUZKLENBS0t6SixFQUxMLENBS1EsUUFMUixFQUtrQixNQUFNc1QseURBTHhCLEVBS3dDTCw0REFMeEMsRTs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTs7O0FBR08sU0FBU1UsT0FBVCxDQUFpQjlOLENBQWpCLEVBQW9CO0FBQ3ZCQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNOE4sV0FBVyxHQUFHbFYsQ0FBQyxDQUFDLHVCQUFELENBQXJCO0FBQ0EsTUFBSW1WLE1BQU0sR0FBRyxFQUFiO0FBRUFuVixHQUFDLENBQUMsZUFBRCxDQUFELENBQW1CQyxJQUFuQixDQUF3QixnQ0FBeEIsRUFBMERpTCxJQUExRCxDQUErRCxVQUFVNkksQ0FBVixFQUFhOUIsSUFBYixFQUFtQjtBQUM5RSxRQUFJbUQsS0FBSyxHQUFHcFYsQ0FBQyxDQUFDaVMsSUFBRCxDQUFELENBQVE1UCxJQUFSLENBQWEsSUFBYixDQUFaOztBQUNBLFFBQUcrUyxLQUFILEVBQVU7QUFDTkQsWUFBTSxDQUFDdFEsSUFBUCxDQUFZdVEsS0FBWjtBQUNIO0FBQ0osR0FMRDtBQU9BOzs7O0FBR0EsTUFBSUQsTUFBTSxDQUFDbE4sTUFBUCxJQUFpQixDQUFyQixFQUF3QjtBQUNwQmpJLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJDLElBQW5CLENBQXdCLHdCQUF4QixFQUFrRGlMLElBQWxELENBQXVELFVBQVU2SSxDQUFWLEVBQWE5QixJQUFiLEVBQW1CO0FBQ3RFLFVBQUltRCxLQUFLLEdBQUdwVixDQUFDLENBQUNpUyxJQUFELENBQUQsQ0FBUTVQLElBQVIsQ0FBYSxJQUFiLENBQVo7O0FBQ0EsVUFBSStTLEtBQUosRUFBVztBQUNQRCxjQUFNLENBQUN0USxJQUFQLENBQVl1USxLQUFaO0FBQ0g7QUFDSixLQUxEO0FBTUg7O0FBRURGLGFBQVcsQ0FBQzlLLEdBQVosQ0FBZ0IrSyxNQUFoQjtBQUNBRCxhQUFXLENBQUNoQixNQUFaO0FBQ0FuSixVQUFRLENBQUNvSixXQUFULENBQXFCLE1BQXJCLEVBMUJ1QixDQTJCdkI7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDL0JEO0FBQUE7QUFBQTs7O0FBR08sU0FBU1IsVUFBVCxDQUFvQnhNLENBQXBCLEVBQXVCO0FBQzFCQSxHQUFDLENBQUNDLGNBQUY7QUFFQSxNQUFNd00sYUFBYSxHQUFHNVQsQ0FBQyxDQUFDLHlCQUFELENBQXZCO0FBQ0EsTUFBSThULFFBQVEsR0FBRyxFQUFmO0FBRUE5VCxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1CQyxJQUFuQixDQUF3QixnQ0FBeEIsRUFBMERpTCxJQUExRCxDQUErRCxVQUFVNkksQ0FBVixFQUFhOUIsSUFBYixFQUFtQjtBQUM5RSxRQUFJK0IsT0FBTyxHQUFHaFUsQ0FBQyxDQUFDaVMsSUFBRCxDQUFELENBQVE1UCxJQUFSLENBQWEsVUFBYixDQUFkOztBQUNBLFFBQUcyUixPQUFILEVBQVk7QUFDUkYsY0FBUSxDQUFDalAsSUFBVCxDQUFjbVAsT0FBZDtBQUNIO0FBQ0osR0FMRDtBQU9BOzs7O0FBR0EsTUFBSUYsUUFBUSxDQUFDN0wsTUFBVCxJQUFtQixDQUF2QixFQUEwQjtBQUN0QmpJLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJDLElBQW5CLENBQXdCLHdCQUF4QixFQUFrRGlMLElBQWxELENBQXVELFVBQVU2SSxDQUFWLEVBQWE5QixJQUFiLEVBQW1CO0FBQ3RFLFVBQUkrQixPQUFPLEdBQUdoVSxDQUFDLENBQUNpUyxJQUFELENBQUQsQ0FBUTVQLElBQVIsQ0FBYSxVQUFiLENBQWQ7O0FBQ0EsVUFBRzJSLE9BQUgsRUFBWTtBQUNSRixnQkFBUSxDQUFDalAsSUFBVCxDQUFjbVAsT0FBZDtBQUNIO0FBQ0osS0FMRDtBQU1IOztBQUVESixlQUFhLENBQUN4SixHQUFkLENBQWtCMEosUUFBbEI7QUFDQUYsZUFBYSxDQUFDTSxNQUFkO0FBQ0FuSixVQUFRLENBQUNvSixXQUFULENBQXFCLE1BQXJCO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQy9CRDtBQUFBO0FBQUE7OztBQUdPLFNBQVNrQixXQUFULENBQXFCbE8sQ0FBckIsRUFBd0I7QUFDM0JBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQUkrTixNQUFNLEdBQUcsRUFBYjtBQUNBblYsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkMsSUFBbkIsQ0FBd0IsZ0NBQXhCLEVBQTBEaUwsSUFBMUQsQ0FBK0QsVUFBVTZJLENBQVYsRUFBYTlCLElBQWIsRUFBbUI7QUFDOUUsUUFBSW1ELEtBQUssR0FBR3BWLENBQUMsQ0FBQ2lTLElBQUQsQ0FBRCxDQUFRNVAsSUFBUixDQUFhLElBQWIsQ0FBWjs7QUFDQSxRQUFHK1MsS0FBSCxFQUFVO0FBQ05ELFlBQU0sQ0FBQ3RRLElBQVAsQ0FBWXVRLEtBQVo7QUFDSDtBQUNKLEdBTEQ7QUFPQTs7OztBQUdBLE1BQUlELE1BQU0sQ0FBQ2xOLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJqSSxLQUFDLENBQUMsZUFBRCxDQUFELENBQW1CQyxJQUFuQixDQUF3Qix3QkFBeEIsRUFBa0RpTCxJQUFsRCxDQUF1RCxVQUFVNkksQ0FBVixFQUFhOUIsSUFBYixFQUFtQjtBQUN0RSxVQUFJbUQsS0FBSyxHQUFHcFYsQ0FBQyxDQUFDaVMsSUFBRCxDQUFELENBQVE1UCxJQUFSLENBQWEsSUFBYixDQUFaOztBQUNBLFVBQUkrUyxLQUFKLEVBQVc7QUFDUEQsY0FBTSxDQUFDdFEsSUFBUCxDQUFZdVEsS0FBWjtBQUNIO0FBQ0osS0FMRDtBQU1IOztBQUVEN0ksUUFBTSxDQUFDekosUUFBUCxHQUFrQjlDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFDLElBQVIsQ0FBYSxPQUFiLElBQXdCLE9BQXhCLEdBQWtDOFMsTUFBTSxDQUFDblEsSUFBUCxDQUFZLEdBQVosQ0FBcEQ7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDMUJEO0FBQUE7QUFBQTs7O0FBR08sU0FBU3NRLFdBQVQsQ0FBcUJuTyxDQUFyQixFQUF3QjtBQUMzQkEsR0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTXlLLGNBQWMsR0FBRzdSLENBQUMsQ0FBQyxJQUFELENBQXhCO0FBQ0E2UixnQkFBYyxDQUFDL0ksUUFBZixDQUF3QixRQUF4QjtBQUNBOUksR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlksV0FBbkIsQ0FBK0IsUUFBL0I7QUFDQVosR0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEI4RSxJQUE5QixDQUFtQyxFQUFuQztBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUFBO0FBQUE7OztBQUdPLFNBQVN5USxTQUFULENBQW1CcE8sQ0FBbkIsRUFBc0I7QUFDekJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU15SyxjQUFjLEdBQUc3UixDQUFDLENBQUMsSUFBRCxDQUF4QjtBQUNBNlIsZ0JBQWMsQ0FBQy9JLFFBQWYsQ0FBd0IsUUFBeEI7QUFDQTlJLEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJZLFdBQWpCLENBQTZCLFFBQTdCO0FBQ0FaLEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJtUSxJQUFqQixDQUFzQixNQUF0QjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUFBO0FBQUE7OztBQUdPLFNBQVNxRixTQUFULENBQW1Cck8sQ0FBbkIsRUFBc0I7QUFDekIsTUFBSSxDQUFDbkgsQ0FBQyxDQUFDbUgsQ0FBQyxDQUFDRyxNQUFILENBQUQsQ0FBWXVCLFFBQVosQ0FBcUIsVUFBckIsQ0FBTCxFQUF1QztBQUNuQzFCLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1xTyxRQUFRLEdBQUd6VixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFDLElBQVIsQ0FBYSxXQUFiLENBQWpCOztBQUVBLFFBQUd3VixRQUFRLENBQUNDLEVBQVQsQ0FBWSxVQUFaLENBQUgsRUFBNEI7QUFDeEJELGNBQVEsQ0FBQ3BJLElBQVQsQ0FBYyxTQUFkLEVBQXlCLEtBQXpCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hvSSxjQUFRLENBQUNwSSxJQUFULENBQWMsU0FBZCxFQUF5QixJQUF6QjtBQUNIO0FBQ0o7QUFDSixDOzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFBO0FBQUE7QUFFQTs7OztBQUdPLFNBQVNzSSxXQUFULENBQXFCeE8sQ0FBckIsRUFBd0I7QUFDM0JBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU15SyxjQUFjLEdBQUc3UixDQUFDLENBQUMsSUFBRCxDQUF4QjtBQUNBNlIsZ0JBQWMsQ0FBQy9JLFFBQWYsQ0FBd0IsUUFBeEI7QUFDQTlJLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJZLFdBQW5CLENBQStCLFFBQS9CO0FBRUEsTUFBSWdWLE1BQU0sR0FBRy9ELGNBQWMsQ0FBQ3RJLElBQWYsQ0FBb0IsTUFBcEIsQ0FBYjtBQUNBLE1BQUlqQixzRUFBSixDQUFTc04sTUFBVCxFQUNTeFQsTUFEVCxDQUNnQixLQURoQixFQUVTTyxPQUZULENBRWlCLFVBQUFsQixRQUFRLEVBQUk7QUFDakJ6QixLQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QjhFLElBQTlCLENBQW1DckQsUUFBbkM7QUFDSCxHQUpULEVBS1MrRyxJQUxUO0FBT0gsQzs7Ozs7Ozs7Ozs7OztBQ25CRDtBQUFBO0FBQUE7OztBQUdPLFNBQVNxTixTQUFULENBQW1CMU8sQ0FBbkIsRUFBc0I7QUFDekJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU15SyxjQUFjLEdBQUc3UixDQUFDLENBQUMsSUFBRCxDQUF4QjtBQUNBNlIsZ0JBQWMsQ0FBQy9JLFFBQWYsQ0FBd0IsUUFBeEI7QUFDQTlJLEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJZLFdBQWpCLENBQTZCLFFBQTdCO0FBQ0FaLEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJrUSxJQUFqQixDQUFzQixNQUF0QjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQWxRLENBQUMsQ0FBQytLLFFBQUQ7QUFDRzs7O0FBREosQ0FJS3pKLEVBSkwsQ0FJUSxPQUpSLEVBSWlCLGVBSmpCLEVBSWtDcVUsaUVBSmxDO0FBS0k7OztBQUxKLENBUUtyVSxFQVJMLENBUVEsT0FSUixFQVFpQixlQVJqQixFQVFrQ2dVLGlFQVJsQztBQVNJOzs7QUFUSixDQVlLaFUsRUFaTCxDQVlRLE9BWlIsRUFZaUIsYUFaakIsRUFZZ0NpVSw2REFaaEM7QUFhSTs7O0FBYkosQ0FnQktqVSxFQWhCTCxDQWdCUSxPQWhCUixFQWdCaUIsYUFoQmpCLEVBZ0JnQ3VVLDZEQWhCaEM7QUFpQkk7OztBQWpCSixDQW9CS3ZVLEVBcEJMLENBb0JRLE9BcEJSLEVBb0JpQixXQXBCakIsRUFvQjhCMlQseURBcEI5QjtBQXFCSTs7O0FBckJKLENBd0JLM1QsRUF4QkwsQ0F3QlEsT0F4QlIsRUF3QmlCLGNBeEJqQixFQXdCaUNxUywrREF4QmpDO0FBeUJJOzs7QUF6QkosQ0E0QktyUyxFQTVCTCxDQTRCUSxPQTVCUixFQTRCaUIsZUE1QmpCLEVBNEJrQytULGlFQTVCbEM7QUE2Qkk7OztBQTdCSixDQWdDSy9ULEVBaENMLENBZ0NRLE9BaENSLEVBZ0NpQixZQWhDakIsRUFnQytCLFlBQVk7QUFDbkMsTUFBRzRILFFBQVEsQ0FBQ2xKLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXFLLEdBQWYsQ0FBbUIsT0FBbkIsQ0FBRCxDQUFSLEdBQXdDLENBQTNDLEVBQThDO0FBQzFDckssS0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlcUssR0FBZixDQUFtQixPQUFuQixFQUE0QixDQUE1QjtBQUNILEdBRkQsTUFFTztBQUNIckssS0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlcUssR0FBZixDQUFtQixPQUFuQixFQUE0QixPQUE1QjtBQUNIO0FBQ0osQ0F0Q0w7QUF1Q0k7OztBQXZDSixDQTBDSy9JLEVBMUNMLENBMENRLE9BMUNSLEVBMENpQixTQTFDakIsRUEwQzRCa1UsNkRBMUM1QixFOzs7Ozs7Ozs7Ozs7QUNaQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNTSxJQUFJLEdBQUcsWUFBYjtBQUNBLElBQU1DLElBQUksR0FBRyxhQUFiO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLGNBQWQsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBaFcsQ0FBQyxDQUFDK0ssUUFBRDtBQUVHOzs7QUFGSixDQUtLekosRUFMTCxDQUtRLFlBTFIsRUFLc0IsSUFMdEIsRUFLNEIsWUFBWTtBQUNoQyxNQUFHdEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRQyxJQUFSLENBQWEsaUJBQWIsRUFBZ0NnSSxNQUFuQyxFQUEyQztBQUN2Q2pJLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFLLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLFNBQXRCO0FBQ0g7QUFDSixDQVRMO0FBV0k7OztBQVhKLENBY0svSSxFQWRMLENBY1EsUUFkUixFQWNrQixnQkFkbEIsRUFjb0MsWUFBWTtBQUN4QyxNQUFNMlUsU0FBUyxHQUFHalcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0ssR0FBUixFQUFsQjtBQUNBcEssR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JzRixPQUFwQixDQUE0QjtBQUN4QjRRLFdBQU8sRUFBRSxpQkFBVUMsTUFBVixFQUFrQjlULElBQWxCLEVBQXdCO0FBQzdCLFVBQUk0VCxTQUFTLEtBQUssWUFBZCxJQUE4QmpXLENBQUMsQ0FBQ29XLE9BQUYsQ0FBVS9ULElBQUksQ0FBQ3NLLEVBQWYsRUFBbUIsQ0FBQ21KLHVFQUFELEVBQU9DLHVFQUFQLEVBQWFDLHdFQUFiLENBQW5CLElBQTBDLENBQUMsQ0FBN0UsRUFBZ0Y7QUFDNUUsZUFBTyxJQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTzNULElBQVA7QUFDSDtBQUNKO0FBUHVCLEdBQTVCO0FBU0gsQ0F6Qkw7QUEyQkk7OztBQTNCSixDQThCS2YsRUE5QkwsQ0E4QlEsT0E5QlIsRUE4QmlCLElBOUJqQixFQThCdUIsWUFBWTtBQUMzQixNQUFNK1UsT0FBTyxHQUFHclcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRQyxJQUFSLENBQWEsaUJBQWIsQ0FBaEI7O0FBRUEsTUFBSW9XLE9BQU8sSUFBSUEsT0FBTyxDQUFDeE4sUUFBUixDQUFpQixNQUFqQixDQUFmLEVBQXlDO0FBQ3JDLFFBQUksQ0FBQzBELE1BQU0sQ0FBQytKLFlBQVAsR0FBc0J4TyxRQUF0QixHQUFpQ0csTUFBdEMsRUFBOEM7QUFDMUNvTyxhQUFPLENBQUN6VixXQUFSLENBQW9CLE1BQXBCO0FBQ0gsS0FGRCxNQUVPO0FBQ0htSyxjQUFRLENBQUNvSixXQUFULENBQXFCLE1BQXJCO0FBQ0g7QUFDSixHQU5ELE1BTU87QUFDSGtDLFdBQU8sQ0FBQ3ZOLFFBQVIsQ0FBaUIsTUFBakI7QUFDSDtBQUNKLENBMUNMLEU7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQU8sSUFBTXlOLG9CQUFvQixHQUFHLHNCQUE3QixDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxvQkFBb0IsR0FBR3hXLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCOEUsSUFBN0IsRUFBN0I7QUFFQTs7Ozs7Ozs7QUFPZSx5RUFBVXFDLENBQVYsRUFBYTtBQUN4QkEsR0FBQyxDQUFDQyxjQUFGO0FBRUEsTUFBTWlDLFVBQVUsR0FBR3JKLENBQUMsQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBTXNKLFNBQVMsR0FBR3RKLENBQUMsQ0FBQyxzQkFBRCxDQUFuQjs7QUFFQSxNQUFJLENBQUNzSixTQUFTLENBQUNyQixNQUFmLEVBQXVCO0FBQ25CLFVBQU0sSUFBSWhCLDhFQUFKLEVBQU47QUFDSDs7QUFFRCxNQUFJcUMsU0FBUyxDQUFDVCxRQUFWLENBQW1CLFVBQW5CLENBQUosRUFBb0M7QUFDaEMsV0FBTyxLQUFQO0FBQ0g7O0FBQ0RTLFdBQVMsQ0FBQ1IsUUFBVixDQUFtQixVQUFuQjtBQUVBOzs7O0FBR0EsTUFBTWMsU0FBUyxHQUFHTixTQUFTLENBQUNySixJQUFWLENBQWUsVUFBZixDQUFsQjtBQUNBLE1BQU1vQyxJQUFJLEdBQUdtSCxtRUFBVyxDQUFDSSxTQUFELENBQXhCOztBQUVBLE1BQUksQ0FBQ3pHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZZixJQUFaLEVBQWtCNEYsTUFBdkIsRUFBK0I7QUFDM0JxQixhQUFTLENBQUMxSSxXQUFWLENBQXNCLFVBQXRCO0FBQ0EsV0FBTyxLQUFQO0FBQ0g7O0FBRUQsTUFBSTBILHNFQUFKLENBQVNlLFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixNQUFoQixDQUFULEVBQ0tuSCxNQURMLENBQ1ksS0FEWixFQUVLQyxJQUZMLENBRVVBLElBRlYsRUFHS08sUUFITCxDQUdjLFlBQU07QUFDWjBHLGFBQVMsQ0FBQzFJLFdBQVYsQ0FBc0IsVUFBdEI7QUFDSCxHQUxMLEVBTUsrQixPQU5MLENBTWEsVUFBQWxCLFFBQVEsRUFBSTtBQUNqQm1JLGFBQVMsQ0FBQ3NCLElBQVYsQ0FBZSxZQUFZO0FBQ3ZCLFVBQU1rQyxXQUFXLEdBQUdwTixDQUFDLENBQUMsSUFBRCxDQUFyQjs7QUFDQSxVQUFJb04sV0FBVyxDQUFDdkUsUUFBWixDQUFxQixVQUFyQixLQUFvQyxDQUFDLENBQUNwSCxRQUFRLENBQUNnVixNQUFULENBQWdCckosV0FBVyxDQUFDaEQsR0FBWixFQUFoQixDQUExQyxFQUE4RTtBQUMxRSxZQUFNc00sWUFBWSxHQUFHalYsUUFBUSxDQUFDZ1YsTUFBVCxDQUFnQnJKLFdBQVcsQ0FBQ2hELEdBQVosRUFBaEIsQ0FBckI7QUFDQWdELG1CQUFXLENBQ05wRSxPQURMLENBQ2EsT0FEYixFQUVLL0ksSUFGTCxDQUVVLGdCQUZWLEVBR0s2RSxJQUhMLENBR1UwUixvQkFBb0IsQ0FDckJ6TyxPQURDLENBQ1EsSUFBSUMsTUFBSixDQUFXLE9BQVgsRUFBb0IsR0FBcEIsQ0FEUixFQUNrQzBPLFlBQVksQ0FBQ0MsV0FEL0MsRUFFRDVPLE9BRkMsQ0FFUSxJQUFJQyxNQUFKLENBQVcsU0FBWCxFQUFzQixHQUF0QixDQUZSLEVBRW9DME8sWUFBWSxDQUFDdFcsSUFGakQsQ0FIVjtBQU1IO0FBQ0osS0FYRCxFQVdHUSxXQVhILENBV2UsU0FYZjtBQVlBc0Isa0ZBQWMsQ0FBQ1QsUUFBRCxDQUFkO0FBQ0gsR0FwQkwsRUFxQksrRyxJQXJCTDtBQXVCQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDaEVEO0FBQUE7Ozs7Ozs7QUFPZSx5RUFBVXJCLENBQVYsRUFBYTtBQUN4QkEsR0FBQyxDQUFDQyxjQUFGO0FBRUFwSCxHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjRSLFdBQXRCLENBQWtDLE1BQWxDO0FBRUEsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ2JEO0FBQUE7OztBQUdlLDJFQUFZO0FBQ3ZCNVIsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFROEksUUFBUixDQUFpQixTQUFqQjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNMRDtBQUFBO0FBQUE7QUFFQTs7OztBQUdlLDJFQUFZO0FBQ3ZCLE1BQU1pSyxLQUFLLEdBQUcsSUFBZDs7QUFDQSxNQUFJNkQsa0RBQUosQ0FBYTdELEtBQWIsRUFBb0I7QUFDaEI4RCxTQUFLLEVBQUU5RCxLQUFLLENBQUMxTyxPQUFOLENBQWN3UyxLQURMO0FBRWhCQyxxQkFBaUIsRUFBRSxJQUZIO0FBR2hCQyxTQUFLLEVBQUUsZUFBUzVQLENBQVQsRUFBWTtBQUNmbkgsT0FBQyxDQUFDbUgsQ0FBQyxDQUFDRyxNQUFILENBQUQsQ0FBWXJILElBQVosQ0FBaUI4UyxLQUFLLENBQUMxTyxPQUFOLENBQWMyUyxRQUEvQixFQUF5QzlMLElBQXpDLENBQThDLFVBQVU2RyxLQUFWLEVBQWlCO0FBQzNELFlBQU1pRixRQUFRLEdBQUdoWCxDQUFDLENBQUMsSUFBRCxDQUFsQjs7QUFDQSxZQUFJa0osUUFBUSxDQUFDOE4sUUFBUSxDQUFDNU0sR0FBVCxFQUFELENBQVIsS0FBNkIySCxLQUFqQyxFQUF3QztBQUNwQ2lGLGtCQUFRLENBQUM1TSxHQUFULENBQWEySCxLQUFiO0FBQ0FpRixrQkFBUSxDQUFDaEwsTUFBVDtBQUNIO0FBQ0osT0FORDtBQU9IO0FBWGUsR0FBcEI7QUFhSCxDOzs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQWhNLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IwQixLQUFoQixDQUFzQnNULHNFQUFZLENBQUN1QiwrREFBRCxDQUFsQztBQUVBOzs7O0FBR0F2VyxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQjBCLEtBQTNCLENBQWlDa0ssMERBQWpDO0FBRUE7Ozs7QUFHQTVMLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCQyxJQUExQixDQUErQixPQUEvQixFQUF3QytMLE1BQXhDLENBQStDaUwsb0VBQS9DO0FBRUE7Ozs7QUFHQWpYLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZWtMLElBQWYsQ0FBb0JnTSw4REFBcEI7QUFFQTs7OztBQUdBbFgsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQjBCLEtBQWpCLENBQXVCeVYsb0VBQXZCLEU7Ozs7Ozs7Ozs7OztBQ2hDQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7OztBQUtPLFNBQVNDLE1BQVQsR0FBa0I7QUFDckIsTUFBTUMsV0FBVyxHQUFHclgsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9LLEdBQWxCLEVBQXBCO0FBQ0EsTUFBTWtOLEtBQUssR0FBR3RYLENBQUMsQ0FBQyxnQkFBRCxDQUFmO0FBQ0EsTUFBTXVYLE1BQU0sR0FBR3ZYLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9COEUsSUFBcEIsRUFBZjtBQUVBLE1BQUkwUyxNQUFNLEdBQUdGLEtBQUssQ0FBQ3JYLElBQU4sQ0FBVyxJQUFYLEVBQWlCd1gsSUFBakIsR0FBd0J4WCxJQUF4QixDQUE2QixVQUE3QixFQUF5Q3NCLElBQXpDLEVBQWI7QUFDQSxNQUFJbVcsV0FBVyxHQUFJeE8sUUFBUSxDQUFDc08sTUFBRCxDQUFSLEdBQW1CLENBQXBCLElBQTBCLENBQTVDOztBQUVBLE9BQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sV0FBcEIsRUFBaUNNLENBQUMsRUFBbEMsRUFBc0M7QUFDbENMLFNBQUssQ0FBQzlTLE1BQU4sQ0FBYStTLE1BQU0sQ0FBQ3hQLE9BQVAsQ0FBZSxTQUFmLEVBQTBCNFAsQ0FBQyxHQUFHRCxXQUE5QixDQUFiO0FBQ0g7O0FBRUQsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUFBO0FBQUE7Ozs7O0FBS08sU0FBU0UsU0FBVCxHQUFxQjtBQUN4QjVYLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdKLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0JuSSxNQUF0QjtBQUVBLFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBYixDQUFDLENBQUMrSyxRQUFEO0FBRUc7OztBQUZKLENBS0t6SixFQUxMLENBS1EsT0FMUixFQUtpQixVQUxqQixFQUs2QjhWLHVEQUw3QjtBQU9JOzs7QUFQSixDQVVLOVYsRUFWTCxDQVVRLE9BVlIsRUFVaUIsYUFWakIsRUFVZ0NzVyw2REFWaEM7QUFZSTs7O0FBWkosQ0FlS3RXLEVBZkwsQ0FlUSxPQWZSLEVBZWlCLE9BZmpCLEVBZTBCLFlBQVk7QUFDOUJ0QixHQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLElBQWhCLEVBQXNCRixRQUF0QixDQUErQixTQUEvQjtBQUNILENBakJMO0FBbUJJOzs7O0FBbkJKLENBdUJLeEgsRUF2QkwsQ0F1QlEsT0F2QlIsRUF1QmlCLGNBdkJqQixFQXVCaUMsWUFBWTtBQUNyQ3RCLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JvSyxHQUFsQixDQUFzQixLQUFLc0YsS0FBM0I7QUFDSCxDQXpCTDtBQTJCSTs7O0FBM0JKLENBOEJLcE8sRUE5QkwsQ0E4QlEsT0E5QlIsRUE4QmlCLHNCQTlCakIsRUE4QnlDLFlBQVk7QUFDN0MsTUFBTXVXLEdBQUcsR0FBRzdYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdKLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBWjtBQUVBNkosK0RBQVcsQ0FBQ0MsSUFBWixDQUFpQixJQUFqQjtBQUVBOUwsMkVBQVEsQ0FBQ29ILFNBQVQsQ0FBbUJTLHFFQUFuQixFQUFrQyxVQUFDeE0sSUFBRCxFQUFPaU0sSUFBUCxFQUFnQjtBQUM5Q3RILDZFQUFRLENBQUN1SCxXQUFULENBQXFCTSxxRUFBckIsRUFBb0NQLElBQXBDO0FBRUEsUUFBSXdKLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDckJBLGFBQU8sQ0FBQ0YsR0FBRyxDQUFDL08sUUFBSixDQUFhLFNBQWIsQ0FBRCxDQUFQO0FBQ0gsS0FGRCxFQUVHdUksSUFGSCxDQUVRLFlBQVk7QUFDaEJyUixPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQjBCLEtBQXJCO0FBQ0gsS0FKRDtBQUtILEdBUkQ7QUFTSCxDQTVDTDtBQThDSTs7O0FBOUNKLENBaURLSixFQWpETCxDQWlEUSxPQWpEUixFQWlEaUIsc0JBakRqQixFQWlEeUMsWUFBWTtBQUM3QyxNQUFNdVcsR0FBRyxHQUFHN1gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixDQUFaO0FBRUFnSywrREFBVyxDQUFDRixJQUFaLENBQWlCLElBQWpCO0FBRUE5TCwyRUFBUSxDQUFDb0gsU0FBVCxDQUFtQlUsb0VBQW5CLEVBQWlDLFVBQUN6TSxJQUFELEVBQU9pTSxJQUFQLEVBQWdCO0FBQzdDdEgsNkVBQVEsQ0FBQ3VILFdBQVQsQ0FBcUJPLG9FQUFyQixFQUFtQ1IsSUFBbkM7QUFFQSxRQUFJd0osT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUNyQkEsYUFBTyxDQUFDRixHQUFHLENBQUMvTyxRQUFKLENBQWEsU0FBYixDQUFELENBQVA7QUFDSCxLQUZELEVBRUd1SSxJQUZILENBRVEsWUFBWTtBQUNoQnJSLE9BQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCMEIsS0FBckI7QUFDSCxLQUpEO0FBTUgsR0FURDtBQVVILENBaEVMLEU7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7Ozs7O0FBS08sU0FBU3NXLFNBQVQsR0FBcUI7QUFDeEIsTUFBTVgsV0FBVyxHQUFHclgsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9LLEdBQWxCLEVBQXBCO0FBQ0EsTUFBTWtOLEtBQUssR0FBR3RYLENBQUMsQ0FBQyxxQkFBRCxDQUFmO0FBQ0EsTUFBTXVYLE1BQU0sR0FBR3ZYLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCOEUsSUFBMUIsRUFBZjtBQUNBLE1BQUltVCxPQUFPLEdBQUcsRUFBZDtBQUNBLE1BQUlQLFdBQVcsR0FBRyxDQUFsQjtBQUNBSixPQUFLLENBQUNyWCxJQUFOLENBQVcsSUFBWCxFQUFpQmlMLElBQWpCLENBQXNCLFVBQVU2SSxDQUFWLEVBQWE5QixJQUFiLEVBQW1CO0FBQ3JDLFFBQUcvSSxRQUFRLENBQUNsSixDQUFDLENBQUNpUyxJQUFELENBQUQsQ0FBUWhTLElBQVIsQ0FBYSxPQUFiLEVBQXNCaVksS0FBdEIsR0FBOEI5TixHQUE5QixFQUFELENBQVgsRUFBaUQ7QUFDN0M2TixhQUFPLENBQUNwVCxJQUFSLENBQWFxRSxRQUFRLENBQUNsSixDQUFDLENBQUNpUyxJQUFELENBQUQsQ0FBUWhTLElBQVIsQ0FBYSxPQUFiLEVBQXNCaVksS0FBdEIsR0FBOEI5TixHQUE5QixFQUFELENBQXJCO0FBQ0g7QUFDSixHQUpEOztBQU1BLE1BQUc2TixPQUFPLENBQUNoUSxNQUFYLEVBQWtCO0FBQ2R5UCxlQUFXLEdBQUlTLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxLQUFULENBQWVGLElBQWYsRUFBb0JGLE9BQXBCLElBQStCLENBQWhDLElBQXNDLENBQXBEO0FBQ0g7O0FBRUQsT0FBSyxJQUFJTixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixXQUFwQixFQUFpQ00sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQ0wsU0FBSyxDQUFDOVMsTUFBTixDQUFhK1MsTUFBTSxDQUFDeFAsT0FBUCxDQUFlLGFBQWYsRUFBOEI0UCxDQUFDLEdBQUdELFdBQWxDLENBQWI7QUFDQUosU0FBSyxDQUFDclgsSUFBTixDQUFXLElBQVgsRUFBaUJ3WCxJQUFqQixHQUF3QnhYLElBQXhCLENBQTZCLE9BQTdCLEVBQXNDaVksS0FBdEMsR0FBOEM5TixHQUE5QyxDQUFrRHVOLENBQUMsR0FBR0QsV0FBdEQ7QUFFQUosU0FBSyxDQUFDclgsSUFBTixDQUFXLGFBQVgsRUFDS3NGLGNBREwsQ0FDb0I7QUFDWkMsWUFBTSxFQUFFLFlBREk7QUFFWkMsZUFBUyxFQUFFLElBRkM7QUFHWkMsYUFBTyxFQUFFO0FBSEcsS0FEcEI7QUFNSDs7QUFFRCxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDbENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBS08sU0FBU2dOLFNBQVQsR0FBc0I7QUFDekIsTUFBTXRLLFNBQVMsR0FBR3BJLENBQUMsQ0FBQyw0QkFBRCxDQUFuQjtBQUNBLE1BQU1xQyxJQUFJLEdBQUcrRixTQUFTLENBQUNuSSxJQUFWLENBQWUsaUNBQWYsRUFBa0RnSixjQUFsRCxFQUFiOztBQUVBLE1BQUcsQ0FBQzVHLElBQUksQ0FBQzRGLE1BQVQsRUFBaUI7QUFDYmhGLGlGQUFXLENBQUMsa0JBQUQsQ0FBWDtBQUVBLFdBQU8sS0FBUDtBQUNIOztBQUVELE1BQUlxRixzRUFBSixDQUFTdEksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsSUFBUixDQUFhLE9BQWIsQ0FBVCxFQUNTRCxNQURULENBQ2dCLEtBRGhCLEVBRVNDLElBRlQsQ0FFY0EsSUFGZCxFQUdTTSxPQUhULENBR2lCLFVBQVVnUSxJQUFWLEVBQWdCO0FBQ3JCdkssYUFBUyxDQUFDbkksSUFBVixDQUFlLFlBQWYsRUFBNkJXLFdBQTdCLENBQXlDLFNBQXpDO0FBQ0FzQixrRkFBYyxDQUFDeVEsSUFBRCxDQUFkO0FBQ0gsR0FOVCxFQU9TbkssSUFQVDtBQVNBLFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBeEksQ0FBQyxDQUFDK0ssUUFBRDtBQUVHOzs7QUFGSixDQUtLekosRUFMTCxDQUtRLE9BTFIsRUFLaUIsY0FMakIsRUFLaUMwVyw2REFMakM7QUFPSTs7O0FBUEosQ0FVSzFXLEVBVkwsQ0FVUSxPQVZSLEVBVWlCLGFBVmpCLEVBVWdDb1IsNkRBVmhDO0FBWUk7OztBQVpKLENBZUtwUixFQWZMLENBZVEsT0FmUixFQWVpQixPQWZqQixFQWUwQixZQUFZO0FBQzlCdEIsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixFQUFzQkYsUUFBdEIsQ0FBK0IsU0FBL0I7QUFDSCxDQWpCTDtBQW1CSTs7O0FBbkJKLENBc0JLeEgsRUF0QkwsQ0FzQlEsT0F0QlIsRUFzQmlCLGVBdEJqQixFQXNCa0MsWUFBWTtBQUN0Q3RCLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdKLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0JGLFFBQXRCLENBQStCLFNBQS9CO0FBQ0gsQ0F4Qkw7QUEwQkk7OztBQTFCSixDQTZCS3hILEVBN0JMLENBNkJRLFVBN0JSLEVBNkJvQjBLLE1BN0JwQixDQTZCMkIsVUFBVWlHLElBQVYsRUFBZ0I7QUFDbkNqUyxHQUFDLENBQUNpUyxJQUFJLENBQUMzSyxNQUFOLENBQUQsQ0FBZTBCLE9BQWYsQ0FBdUIsSUFBdkIsRUFBNkJGLFFBQTdCLENBQXNDLFNBQXRDO0FBQ0gsQ0EvQkw7QUFpQ0k7OztBQWpDSixDQW9DS3hILEVBcENMLENBb0NRLE9BcENSLEVBb0NpQixhQXBDakIsRUFvQ2dDLFlBQVk7QUFDcEN0QixHQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLElBQWhCLEVBQXNCbkksTUFBdEI7QUFDSCxDQXRDTDtBQXdDSTs7O0FBeENKLENBMkNLUyxFQTNDTCxDQTJDUSxPQTNDUixFQTJDaUIsbUJBM0NqQixFQTJDc0MsWUFBWTtBQUMxQ3dCLFVBQVEsQ0FBQ0MsSUFBVCxHQUFnQkQsUUFBUSxDQUFDK0ssUUFBVCxDQUFrQnlLLEtBQWxCLENBQXdCLENBQXhCLEVBQTJCeFYsUUFBUSxDQUFDK0ssUUFBVCxDQUFrQjBLLFdBQWxCLENBQThCLEdBQTlCLENBQTNCLElBQWlFdlksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsSUFBUixDQUFhLE1BQWIsQ0FBakY7QUFDSCxDQTdDTDtBQStDSTs7OztBQS9DSixDQW1ES2YsRUFuREwsQ0FtRFEsT0FuRFIsRUFtRGlCLGNBbkRqQixFQW1EaUMsWUFBWTtBQUNyQ3RCLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JvSyxHQUFsQixDQUFzQixLQUFLc0YsS0FBM0I7QUFDSCxDQXJETCxFOzs7Ozs7Ozs7Ozs7QUNOQSx1Qzs7Ozs7Ozs7Ozs7QUNBQTFQLDBDQUFDLENBQUMrSyxRQUFELENBQUQsQ0FBWUssS0FBWixDQUFrQixZQUFVO0FBQ3hCcEwsR0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkMsSUFBbEIsQ0FBdUIsc0JBQXZCLEVBQStDaUwsSUFBL0MsQ0FBb0QsWUFBWTtBQUMxRCxRQUFHbEwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRQyxJQUFSLENBQWEsSUFBYixFQUFtQmdJLE1BQW5CLEtBQThCLENBQWpDLEVBQW9DO0FBQ2hDakksT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixzQkFBaEIsRUFBd0NtSCxJQUF4QztBQUNIO0FBQ04sR0FKRDtBQUtILENBTkQsRTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFHTyxTQUFTcUksWUFBVCxHQUF3QjtBQUMzQixNQUFJbFEsc0VBQUosQ0FBU21RLG1CQUFULEVBQ0tyVyxNQURMLENBQ1ksS0FEWixFQUVLTyxPQUZMLENBRWEsVUFBQWxCLFFBQVEsRUFBSTtBQUNqQnpCLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9COEUsSUFBcEIsQ0FBeUJyRCxRQUF6QjtBQUNBLFFBQUlpWCxRQUFRLEdBQUcxWSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkMsSUFBcEIsQ0FBeUIsZ0JBQXpCLEVBQTJDZ0ksTUFBMUQ7O0FBRUEsUUFBR3lRLFFBQUgsRUFBYTtBQUNUMVksT0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQjhJLFFBQWpCLENBQTBCLFNBQTFCO0FBQ0gsS0FGRCxNQUVPLElBQUc5SSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCNkksUUFBakIsQ0FBMEIsU0FBMUIsQ0FBSCxFQUF5QztBQUM1QzBELFlBQU0sQ0FBQ3pKLFFBQVAsQ0FBZ0JxRyxNQUFoQixDQUF1QixJQUF2QjtBQUNIOztBQUVEbUgsY0FBVSxDQUFDLFlBQVc7QUFBQ2tJLGtCQUFZO0FBQUksS0FBN0IsRUFBK0IsSUFBL0IsQ0FBVjtBQUNILEdBYkwsRUFjS2hRLElBZEw7QUFlSCxDOzs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQUE7QUFBQTs7O0FBR08sU0FBU21RLFNBQVQsQ0FBbUJ4UixDQUFuQixFQUFzQjtBQUN6QixNQUFNMEssY0FBYyxHQUFHN1IsQ0FBQyxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFJRSxHQUFHLEdBQUdxTSxNQUFNLENBQUN6SixRQUFQLENBQWdCQyxJQUFoQixDQUFxQitLLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQVY7QUFDQSxNQUFJOEssU0FBUyxHQUFHL0csY0FBYyxDQUFDdEksSUFBZixDQUFvQixNQUFwQixFQUE0QnhCLE9BQTVCLENBQW9DLEdBQXBDLEVBQXlDLEVBQXpDLENBQWhCO0FBQ0E3SCxLQUFHLElBQUksZ0JBQWdCMFksU0FBdkI7QUFDQUMsU0FBTyxDQUFDQyxTQUFSLENBQWtCO0FBQ2RuTSxNQUFFLEVBQUU7QUFEVSxHQUFsQixFQUVHLFFBRkgsRUFFYXpNLEdBRmI7QUFHSCxDOzs7Ozs7Ozs7Ozs7O0FDWkQ7QUFBQTtBQUFBOzs7QUFHTyxTQUFTNlksY0FBVCxDQUF3QjVSLENBQXhCLEVBQTJCO0FBQzlCLE1BQU0wSyxjQUFjLEdBQUc3UixDQUFDLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQU1nWixhQUFhLEdBQUduSCxjQUFjLENBQUN4SixPQUFmLENBQXVCLG9CQUF2QixFQUE2Q2hHLElBQTdDLENBQWtELE9BQWxELENBQXRCO0FBQ0EsTUFBSTRXLE9BQU8sR0FBR3BILGNBQWMsQ0FBQzZELEVBQWYsQ0FBa0IsVUFBbEIsQ0FBZDtBQUVBd0QsY0FBWSxDQUFDRixhQUFELEVBQWdCQyxPQUFoQixDQUFaO0FBQ0g7O0FBRUQsU0FBU0MsWUFBVCxDQUFzQkMsVUFBdEIsRUFBa0NGLE9BQWxDLEVBQXNEO0FBQUEsTUFBWEcsS0FBVyx1RUFBSCxDQUFHOztBQUNsRCxNQUFHQyxjQUFjLENBQUN0USxjQUFmLENBQThCb1EsVUFBOUIsS0FBNkNDLEtBQUssR0FBRyxFQUF4RCxFQUE0RDtBQUN4RCxRQUFJRSxXQUFXLEdBQUd0WixDQUFDLENBQUMsWUFBWW1aLFVBQWIsQ0FBbkI7O0FBQ0EsUUFBR0YsT0FBSCxFQUFZO0FBQ1JLLGlCQUFXLENBQUN4USxRQUFaLENBQXFCLGNBQXJCO0FBQ0gsS0FGRCxNQUVPO0FBQ0h3USxpQkFBVyxDQUFDMVksV0FBWixDQUF3QixjQUF4QjtBQUNIOztBQUVELFNBQUssSUFBSTBDLEdBQVQsSUFBZ0IrVixjQUFjLENBQUNGLFVBQUQsQ0FBOUIsRUFBNEM7QUFDeEMsVUFBSUksZ0JBQWdCLEdBQUdGLGNBQWMsQ0FBQ0YsVUFBRCxDQUFkLENBQTJCN1YsR0FBM0IsQ0FBdkI7O0FBQ0ksVUFBSWdXLFlBQVcsR0FBR3RaLENBQUMsQ0FBQyxZQUFZdVosZ0JBQWIsQ0FBbkI7O0FBQ0osVUFBR04sT0FBSCxFQUFZO0FBQ1JLLG9CQUFXLENBQUN4USxRQUFaLENBQXFCLGNBQXJCO0FBQ0gsT0FGRCxNQUVPO0FBQ0h3USxvQkFBVyxDQUFDMVksV0FBWixDQUF3QixjQUF4QjtBQUNIOztBQUNEc1ksa0JBQVksQ0FBQ0ssZ0JBQUQsRUFBbUJOLE9BQW5CLEVBQTRCRyxLQUFLLEdBQUcsQ0FBcEMsQ0FBWjtBQUNIO0FBQ0o7QUFFSixDOzs7Ozs7Ozs7Ozs7O0FDaENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7O0FBR08sU0FBU0ksbUJBQVQsQ0FBNkJyUyxDQUE3QixFQUFnQztBQUNuQ0EsR0FBQyxDQUFDc1MsZUFBRjtBQUNBLE1BQU01SCxjQUFjLEdBQUc3UixDQUFDLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQU1nWixhQUFhLEdBQUduSCxjQUFjLENBQUN4SixPQUFmLENBQXVCLG9CQUF2QixFQUE2Q2hHLElBQTdDLENBQWtELE9BQWxELENBQXRCO0FBQ0EsTUFBTXFYLGVBQWUsR0FBRzdILGNBQWMsQ0FBQ3hKLE9BQWYsQ0FBdUIsb0JBQXZCLEVBQTZDaEcsSUFBN0MsQ0FBa0QsSUFBbEQsQ0FBeEI7QUFDQSxNQUFJc1gsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsTUFBR0QsZUFBSCxFQUFvQjtBQUNoQkMsT0FBRyxDQUFDOVUsSUFBSixDQUFTNlUsZUFBVDtBQUNIOztBQUVERSxlQUFhLENBQUNaLGFBQUQsRUFBZ0JXLEdBQWhCLENBQWI7QUFDQSxTQUFPLEtBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7QUFRQSxTQUFTVCxZQUFULENBQXNCQyxVQUF0QixFQUFrQ0ksZ0JBQWxDLEVBQTRFO0FBQUEsTUFBdkJILEtBQXVCLHVFQUFmLENBQWU7QUFBQSxNQUFaUyxVQUFZOztBQUN4RSxNQUFHUixjQUFjLENBQUN0USxjQUFmLENBQThCb1EsVUFBOUIsS0FBNkNDLEtBQUssR0FBRyxFQUF4RCxFQUE0RDtBQUN4RCxRQUFJTyxHQUFHLEdBQUdFLFVBQVUsQ0FBQ0YsR0FBckI7QUFDQSxRQUFJRyxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsUUFBR0QsVUFBVSxDQUFDOVEsY0FBWCxDQUEwQixnQkFBMUIsQ0FBSCxFQUFnRDtBQUM1QytRLGVBQVMsR0FBRyxZQUFaO0FBQ0g7O0FBRUQsUUFBSUMsV0FBVyxHQUFHLEtBQWxCO0FBQ0EvWixLQUFDLENBQUMsWUFBWW1aLFVBQWIsQ0FBRCxDQUEwQmpPLElBQTFCLENBQStCLFlBQVU7QUFDckMsVUFBR2xMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFJLE9BQVIsQ0FBZ0IsWUFBWWtSLGdCQUE1QixFQUE4Q3RSLE1BQTlDLEdBQXVELENBQTFELEVBQTZEO0FBQ3pEOFIsbUJBQVcsR0FBRyxJQUFkO0FBQ0EvWixTQUFDLENBQUMsSUFBRCxDQUFELENBQVF3RSxNQUFSLENBQ0ksdUJBQXVCK1UsZ0JBQXZCLEdBQTBDLElBQTFDLEdBQ0ksZUFESixHQUNzQk8sU0FEdEIsR0FDa0MsSUFEbEMsR0FDeUNQLGdCQUR6QyxHQUVRLCtDQUZSLEdBR0ksU0FISixHQUlBLFlBTEo7QUFNSCxPQVJELE1BUU8sSUFBR3ZaLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUMsSUFBUixDQUFhLFlBQVlzWixnQkFBekIsRUFBMkN0UixNQUEzQyxJQUFxRCxDQUF4RCxFQUEyRDtBQUM5RGpJLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdFLE1BQVIsQ0FDSSx1QkFBdUIrVSxnQkFBdkIsR0FBMEMsSUFBMUMsR0FDQSxlQURBLEdBQ2tCTyxTQURsQixHQUM4QixJQUQ5QixHQUNxQ1AsZ0JBRHJDLEdBQ3dELFNBRHhELElBRUNJLEdBQUcsQ0FBQzFSLE1BQUosR0FBYSxDQUFiLEdBQWlCLCtCQUErQjBSLEdBQUcsQ0FBQzNVLElBQUosQ0FBUyxHQUFULENBQS9CLEdBQStDLFNBQWhFLEdBQTRFLEVBRjdFLElBR0EsUUFKSjtBQUtIO0FBQ0osS0FoQkQ7O0FBaUJBLFFBQUksQ0FBQytVLFdBQUwsRUFBa0I7QUFDZEMsdUJBQWlCLENBQUNULGdCQUFELEVBQW1CSCxLQUFuQixFQUEwQk8sR0FBMUIsQ0FBakI7QUFDSDtBQUNKO0FBRUo7QUFFRDs7Ozs7Ozs7QUFNQSxTQUFTQyxhQUFULENBQXVCVCxVQUF2QixFQUE2QztBQUFBLE1BQVZRLEdBQVUsdUVBQUosRUFBSTtBQUN6QyxNQUFJclIsc0VBQUosQ0FBUzJSLHNCQUFULEVBQ0s3WCxNQURMLENBQ1ksTUFEWixFQUVLQyxJQUZMLENBRVU7QUFDRixpQkFBYTZYLGdCQURYO0FBRUYsc0JBQWtCZixVQUZoQjtBQUdGLHlCQUFxQlE7QUFIbkIsR0FGVixFQU9LaFgsT0FQTCxDQU9hLFVBQUFsQixRQUFRLEVBQUk7QUFDakIsUUFBSWtZLEdBQUcsR0FBR2xZLFFBQVEsQ0FBQ2tZLEdBQVQsSUFBZ0IsRUFBMUI7QUFDQTNaLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXdFLE1BQVYsQ0FBaUIsd0NBQWpCO0FBQ0F4RSxLQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjhFLElBQXpCLENBQThCLHVCQUF1QnFVLFVBQXZCLEdBQW9DLElBQXBDLEdBQzFCLFFBRDBCLEdBQ2ZBLFVBRGUsR0FDRixTQURFLEdBRTFCLDRCQUYwQixHQUVLUSxHQUFHLENBQUMzVSxJQUFKLENBQVMsR0FBVCxDQUZMLEdBRXFCLFNBRnJCLEdBRzFCLFFBSEo7QUFLQSxRQUFJa0IscUVBQUosR0FDS25DLE1BREwsQ0FDWSxtQkFEWixFQUVLRSxJQUZMLENBRVVqRSxDQUFDLENBQUMscUJBQUQsQ0FGWCxFQUdLK0YsS0FITDtBQUtBaVUscUJBQWlCLENBQUNiLFVBQUQsRUFBYSxDQUFiLEVBQWdCUSxHQUFoQixDQUFqQjtBQUNILEdBckJMLEVBc0JLblIsSUF0Qkw7QUF1Qkg7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBU3dSLGlCQUFULENBQTJCYixVQUEzQixFQUE0RDtBQUFBLE1BQXJCQyxLQUFxQix1RUFBYixDQUFhO0FBQUEsTUFBVk8sR0FBVSx1RUFBSixFQUFJOztBQUFBLDZCQUMvQ3JXLEdBRCtDO0FBRXBELFFBQUlpVyxnQkFBZ0IsR0FBR0YsY0FBYyxDQUFDRixVQUFELENBQWQsQ0FBMkI3VixHQUEzQixDQUF2Qjs7QUFFQSxRQUFHcVcsR0FBRyxDQUFDMVIsTUFBSixLQUFlLENBQWxCLEVBQXFCO0FBQ2pCLFVBQUlLLHNFQUFKLENBQVMyUixzQkFBVCxFQUNLN1gsTUFETCxDQUNZLE1BRFosRUFFS0MsSUFGTCxDQUVVO0FBQ0YscUJBQWE2WCxnQkFEWDtBQUVGLGlCQUFTWCxnQkFGUDtBQUdGLDBCQUFrQkosVUFIaEI7QUFJRiw2QkFBcUJRO0FBSm5CLE9BRlYsRUFRS2hYLE9BUkwsQ0FRYSxVQUFBbEIsUUFBUSxFQUFJO0FBQ2pCeVgsb0JBQVksQ0FBQ0MsVUFBRCxFQUFhSSxnQkFBYixFQUErQkgsS0FBSyxHQUFHLENBQXZDLEVBQTBDM1gsUUFBMUMsQ0FBWjtBQUNILE9BVkwsRUFXSytHLElBWEw7QUFZSCxLQWJELE1BYU87QUFDSDBRLGtCQUFZLENBQUNDLFVBQUQsRUFBYUksZ0JBQWIsRUFBK0JILEtBQUssR0FBRyxDQUF2QyxFQUEwQztBQUFDLGVBQU87QUFBUixPQUExQyxDQUFaO0FBQ0g7QUFuQm1EOztBQUN4RCxPQUFLLElBQUk5VixHQUFULElBQWdCK1YsY0FBYyxDQUFDRixVQUFELENBQTlCLEVBQTRDO0FBQUEsVUFBbkM3VixHQUFtQztBQW1CM0M7QUFDSixDOzs7Ozs7Ozs7Ozs7O0FDekhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQXRELENBQUMsQ0FBQytLLFFBQUQ7QUFDRzs7O0FBREosQ0FJS3pKLEVBSkwsQ0FJUSxPQUpSLEVBSWlCLHdCQUpqQixFQUkyQ3FYLDZEQUozQztBQUtJOzs7QUFMSixDQVFLclgsRUFSTCxDQVFRLE9BUlIsRUFRaUIsd0JBUmpCLEVBUTJDNEssNkRBUjNDO0FBU0k7OztBQVRKLENBWUs1SyxFQVpMLENBWVEsT0FaUixFQVlpQixrQkFaakIsRUFZcUN5WCx1RUFackM7QUFhSTs7O0FBYkosQ0FnQkt6WCxFQWhCTCxDQWdCUSxPQWhCUixFQWdCaUIsa0JBaEJqQixFQWdCcUNrWSxpRkFoQnJDO0FBa0JJOzs7QUFsQkosQ0FxQktsWSxFQXJCTCxDQXFCUSxRQXJCUixFQXFCa0IsbUNBckJsQixFQXFCdUQsWUFBWTtBQUMzRHRCLEdBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDcU4sSUFBdkMsQ0FBNEMsU0FBNUMsRUFBdUQsS0FBSzhNLE9BQTVEO0FBQ0gsQ0F2QkwsRUF5QksvTyxLQXpCTCxDQXlCVyxZQUFVO0FBQ2JvTixvRUFBWTtBQUNmLENBM0JMLEU7Ozs7Ozs7Ozs7OztBQ1BBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7O0FBS08sU0FBU1IsU0FBVCxHQUFxQjtBQUN4QixNQUFNWCxXQUFXLEdBQUdyWCxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0ssR0FBbEIsRUFBcEI7QUFDQSxNQUFNa04sS0FBSyxHQUFHdFgsQ0FBQyxDQUFDLGNBQUQsQ0FBZjtBQUNBLE1BQU13WCxNQUFNLEdBQUdGLEtBQUssQ0FBQ3JYLElBQU4sQ0FBVyxJQUFYLEVBQWlCd1gsSUFBakIsR0FBd0J4WCxJQUF4QixDQUE2QixTQUE3QixFQUF3Q21LLEdBQXhDLEVBQWY7QUFDQSxNQUFJc04sV0FBVyxHQUFJeE8sUUFBUSxDQUFDc08sTUFBRCxDQUFSLEdBQW1CLENBQXBCLElBQTBCLENBQTVDOztBQUVBLE9BQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sV0FBcEIsRUFBaUNNLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsUUFBSUosTUFBTSxHQUFHdlgsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQjhFLElBQW5CLEdBQTBCaUQsT0FBMUIsQ0FBa0MsV0FBbEMsRUFBK0M0UCxDQUFDLEdBQUdELFdBQW5ELENBQWI7QUFFQUosU0FBSyxDQUFDOVMsTUFBTixDQUFhK1MsTUFBYjtBQUNIOztBQUVELFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7O0FBS08sU0FBUzZDLFlBQVQsQ0FBdUJqVCxDQUF2QixFQUEwQjtBQUM3QkEsR0FBQyxDQUFDQyxjQUFGO0FBRUEsTUFBSXZFLEtBQUssR0FBRzdDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFDLElBQVIsQ0FBYSxPQUFiLENBQVo7QUFDQSxNQUFJQSxJQUFJLEdBQUdyQyxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkMsSUFBOUIsQ0FBbUMsaUNBQW5DLEVBQXNFZ0osY0FBdEUsRUFBWDtBQUVBLE1BQUlYLHNFQUFKLENBQVN6RixLQUFULEVBQ0tULE1BREwsQ0FDWSxLQURaLEVBRUtDLElBRkwsQ0FFVUEsSUFGVixFQUdLbUcsSUFITDtBQUtBLFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNuQkQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBeEksQ0FBQyxDQUFDK0ssUUFBRDtBQUVHOzs7QUFGSixDQUtLekosRUFMTCxDQUtRLE9BTFIsRUFLaUIsYUFMakIsRUFLZ0MsWUFBWTtBQUNwQ3RCLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdKLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0JuSSxNQUF0QjtBQUNILENBUEw7QUFTSTs7O0FBVEosQ0FZS1MsRUFaTCxDQVlRLE9BWlIsRUFZaUIsY0FaakIsRUFZaUMwVyw2REFaakM7QUFjSTs7O0FBZEosQ0FpQksxVyxFQWpCTCxDQWlCUSxPQWpCUixFQWlCaUIsT0FqQmpCLEVBaUIwQixZQUFZO0FBQzlCdEIsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixFQUFzQkYsUUFBdEIsQ0FBK0IsU0FBL0I7QUFDSCxDQW5CTDtBQXFCSTs7O0FBckJKLENBd0JLeEgsRUF4QkwsQ0F3QlEsVUF4QlIsRUF3Qm9CMEssTUF4QnBCLENBd0IyQixVQUFVaUcsSUFBVixFQUFnQjtBQUNuQ2pTLEdBQUMsQ0FBQ2lTLElBQUksQ0FBQzNLLE1BQU4sQ0FBRCxDQUFlMEIsT0FBZixDQUF1QixJQUF2QixFQUE2QkYsUUFBN0IsQ0FBc0MsU0FBdEM7QUFDSCxDQTFCTDtBQTRCSTs7O0FBNUJKLENBK0JLeEgsRUEvQkwsQ0ErQlEsT0EvQlIsRUErQmlCLGdCQS9CakIsRUErQm1DOFksbUVBL0JuQztBQWlDSTs7OztBQWpDSixDQXFDSzlZLEVBckNMLENBcUNRLE9BckNSLEVBcUNpQixjQXJDakIsRUFxQ2lDLFlBQVk7QUFDckN0QixHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0ssR0FBbEIsQ0FBc0IsS0FBS3NGLEtBQTNCO0FBQ0gsQ0F2Q0wsRTs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTs7Ozs7QUFLTyxTQUFTc0ksU0FBVCxHQUFxQjtBQUN4QixNQUFNWCxXQUFXLEdBQUdyWCxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0ssR0FBbEIsRUFBcEI7QUFDQSxNQUFNa04sS0FBSyxHQUFHdFgsQ0FBQyxDQUFDLGNBQUQsQ0FBZjtBQUNBLE1BQU11WCxNQUFNLEdBQUd2WCxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1COEUsSUFBbkIsRUFBZjs7QUFFQSxPQUFLLElBQUk2UyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixXQUFwQixFQUFpQ00sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQ0wsU0FBSyxDQUFDOVMsTUFBTixDQUFhK1MsTUFBYjtBQUVBLFFBQUk4QyxPQUFPLEdBQUcvQyxLQUFLLENBQUNyWCxJQUFOLENBQVcsSUFBWCxFQUFpQndYLElBQWpCLEdBQXdCeFgsSUFBeEIsQ0FBNkIsTUFBN0IsQ0FBZDtBQUNBb2EsV0FBTyxDQUFDblAsSUFBUixDQUFhLFVBQVU2RyxLQUFWLEVBQWlCRSxJQUFqQixFQUF1QjtBQUNoQ2pTLE9BQUMsQ0FBQ2lTLElBQUQsQ0FBRCxDQUFRcUksV0FBUixDQUFvQixFQUFwQjtBQUNILEtBRkQ7QUFJSDs7QUFFRCxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDckJEO0FBQUE7QUFBQTs7Ozs7QUFLTyxTQUFTQyxjQUFULEdBQTBCO0FBQzdCLE1BQUlDLFFBQVEsR0FBR3hhLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9LLEdBQVIsRUFBZjtBQUNBLE1BQUl5TixHQUFHLEdBQUc3WCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLElBQWhCLEVBQXNCL0ksSUFBdEIsQ0FBMkIsZUFBM0IsQ0FBVjtBQUVBNFgsS0FBRyxDQUFDM00sSUFBSixDQUFTLFVBQVU2RyxLQUFWLEVBQWlCRSxJQUFqQixFQUF1QjtBQUM1QixRQUFJd0ksT0FBTyxHQUFHemEsQ0FBQyxDQUFDaVMsSUFBRCxDQUFELENBQVExSSxJQUFSLENBQWEsTUFBYixDQUFkO0FBQ0EsUUFBSW1SLE9BQU8sR0FBR0QsT0FBTyxDQUFDbkMsS0FBUixDQUFjLENBQWQsRUFBaUIsQ0FBakIsSUFBc0JrQyxRQUF0QixHQUFrQ0MsT0FBTyxDQUFDbkMsS0FBUixDQUFjbUMsT0FBTyxDQUFDRSxPQUFSLENBQWdCLEdBQWhCLENBQWQsQ0FBaEQ7QUFDQTNhLEtBQUMsQ0FBQ2lTLElBQUQsQ0FBRCxDQUFRMUksSUFBUixDQUFhLE1BQWIsRUFBcUJtUixPQUFyQjtBQUNILEdBSkQ7QUFNQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNRSxzQkFBc0IsR0FBRywwQkFBL0I7QUFFUDs7Ozs7Ozs7QUFPZSx5RUFBVXpULENBQVYsRUFBYTtBQUN4QkEsR0FBQyxDQUFDQyxjQUFGO0FBRUEsTUFBTWlDLFVBQVUsR0FBR3JKLENBQUMsQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBTXNKLFNBQVMsR0FBR3RKLENBQUMsQ0FBQzRhLHNCQUFELENBQW5COztBQUVBLE1BQUksQ0FBQ3RSLFNBQVMsQ0FBQ3JCLE1BQWYsRUFBdUI7QUFDbkIsVUFBTSxJQUFJaEIsOEVBQUosRUFBTjtBQUNIOztBQUVELE1BQUlxQyxTQUFTLENBQUNULFFBQVYsQ0FBbUIsVUFBbkIsQ0FBSixFQUFvQztBQUNoQyxXQUFPLEtBQVA7QUFDSDs7QUFDRFMsV0FBUyxDQUFDUixRQUFWLENBQW1CLFVBQW5CO0FBRUE7Ozs7QUFHQSxNQUFNYyxTQUFTLEdBQUdOLFNBQVMsQ0FBQ3JKLElBQVYsQ0FBZSxVQUFmLENBQWxCO0FBQ0EsTUFBTW9DLElBQUksR0FBR21ILG1FQUFXLENBQUNJLFNBQUQsQ0FBeEI7O0FBRUEsTUFBSSxDQUFDekcsTUFBTSxDQUFDQyxJQUFQLENBQVlmLElBQVosRUFBa0I0RixNQUF2QixFQUErQjtBQUMzQnFCLGFBQVMsQ0FBQzFJLFdBQVYsQ0FBc0IsVUFBdEI7QUFDQSxXQUFPLEtBQVA7QUFDSDs7QUFFRCxNQUFJMEgsc0VBQUosQ0FBU2UsVUFBVSxDQUFDRSxJQUFYLENBQWdCLE1BQWhCLENBQVQsRUFDS25ILE1BREwsQ0FDWSxLQURaLEVBRUtDLElBRkwsQ0FFVUEsSUFGVixFQUdLTyxRQUhMLENBR2MsWUFBTTtBQUNaMEcsYUFBUyxDQUFDMUksV0FBVixDQUFzQixVQUF0QjtBQUNILEdBTEwsRUFNSytCLE9BTkwsQ0FNYSxVQUFBbEIsUUFBUSxFQUFJO0FBQ2pCbUksYUFBUyxDQUFDaEosV0FBVixDQUFzQixTQUF0QjtBQUNBc0Isa0ZBQWMsQ0FBQ1QsUUFBRCxDQUFkO0FBQ0gsR0FUTCxFQVVLK0csSUFWTDtBQVlBLFNBQU8sS0FBUDtBQUNIO0FBRUQ7Ozs7QUFHTyxTQUFTcVMsYUFBVCxHQUF5QjtBQUM1QjdhLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdKLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0JGLFFBQXRCLENBQStCLFNBQS9CO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQzVERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOUksQ0FBQyxDQUFDK0ssUUFBRDtBQUVHOzs7QUFGSixDQUtLSyxLQUxMLENBS1csWUFBVztBQUNkcEwsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVc2EsV0FBVixHQUNLaFosRUFETCxDQUNRLFFBRFIsRUFDa0IsVUFBVTZGLENBQVYsRUFBYTtBQUN2Qm5ILEtBQUMsQ0FBQytLLFFBQUQ7QUFDRzs7O0FBREosS0FJS3pKLEVBSkwsQ0FJUSxRQUpSLFlBSXFCc1osNEVBSnJCLHFCQUlzREEsNEVBSnRELHNCQUl3RkEsNEVBSnhGLGdCQUkySEMsbUVBSjNILEVBS0t2WixFQUxMLENBS1EsT0FMUixZQUtvQnNaLDRFQUxwQixxQkFLcURBLDRFQUxyRCxzQkFLdUZBLDRFQUx2RixnQkFLMEhDLG1FQUwxSDtBQU1QLEdBUkQ7QUFTSCxDQWZMO0FBaUJJOzs7QUFqQkosQ0FvQkt2WixFQXBCTCxDQW9CUSxPQXBCUixFQW9CaUIsY0FwQmpCLEVBb0JpQzBXLDZEQXBCakM7QUFzQkk7OztBQXRCSixDQXlCSzFXLEVBekJMLENBeUJRLE9BekJSLEVBeUJpQixhQXpCakIsRUF5QmdDLFlBQVk7QUFDcEN0QixHQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLElBQWhCLEVBQXNCbkksTUFBdEI7QUFDSCxDQTNCTDtBQTZCSTs7O0FBN0JKLENBZ0NLUyxFQWhDTCxDQWdDUSxPQWhDUixFQWdDaUIsV0FoQ2pCLEVBZ0M4QmlaLHVFQWhDOUI7QUFrQ0k7Ozs7QUFsQ0osQ0FzQ0tqWixFQXRDTCxDQXNDUSxPQXRDUixFQXNDaUIsY0F0Q2pCLEVBc0NpQyxZQUFZO0FBQ3JDdEIsR0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9LLEdBQWxCLENBQXNCLEtBQUtzRixLQUEzQjtBQUNILENBeENMO0FBMENJOzs7O0FBR0ExUCxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjBCLEtBQXBCLENBQTBCb1osNkRBQTFCLEU7Ozs7Ozs7Ozs7Ozs7QUNqREo7QUFBQTtBQUFPLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QixDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUE7QUFFQTs7OztBQUdlLDJFQUFZO0FBQ3ZCLE1BQU1DLFlBQVksR0FBR2hiLENBQUMsQ0FBQyxJQUFELENBQXRCO0FBQ0EsTUFBTWliLE9BQU8sR0FBR0QsWUFBWSxDQUFDNVEsR0FBYixFQUFoQjtBQUNBLE1BQU1zQyxNQUFNLEdBQUdzTyxZQUFZLENBQUNoUyxPQUFiLENBQXFCLElBQXJCLENBQWY7QUFFQTs7OztBQUdBLE1BQU1rUyxxQkFBcUIsR0FBR2xiLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCQyxJQUEzQixDQUFnQyxXQUFoQyxFQUE2QzJHLE1BQTdDLENBQW9ELFVBQUNvTCxDQUFELEVBQUlDLElBQUosRUFBYTtBQUMzRixXQUFPZ0osT0FBTyxLQUFLaEosSUFBSSxDQUFDdkMsS0FBeEI7QUFDSCxHQUY2QixDQUE5Qjs7QUFJQSxNQUFJd0wscUJBQXFCLENBQUNqVCxNQUF0QixHQUErQixDQUFuQyxFQUFxQztBQUNqQ2pHLGdGQUFZLENBQUM7QUFBQyxpQkFBVyxxQkFBcUJpWjtBQUFqQyxLQUFELENBQVo7QUFDQSxXQUFPLEtBQVA7QUFDSDtBQUVEOzs7OztBQUdBdk8sUUFBTSxDQUFDek0sSUFBUCxDQUFZLE9BQVosRUFBcUJpTCxJQUFyQixDQUEwQixZQUFZO0FBQ2xDLFNBQUs5SyxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVMkgsT0FBVixDQUFtQixZQUFuQixhQUFxQ2tULE9BQXJDLE9BQVo7QUFDSCxHQUZEO0FBSUE7Ozs7QUFHQXZPLFFBQU0sQ0FBQ3pNLElBQVAsQ0FBWSw2QkFBWixFQUEyQ2lMLElBQTNDLENBQWdELFlBQVk7QUFDeEQsU0FBS25JLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVnRixPQUFWLENBQW1CLFdBQW5CLGFBQW9Da1QsT0FBcEMsRUFBWjtBQUNILEdBRkQ7QUFHSCxDOzs7Ozs7Ozs7Ozs7O0FDbkNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBT2UseUVBQVU5VCxDQUFWLEVBQWE7QUFDeEIsTUFBSTtBQUNBLFFBQU1zUCxNQUFNLEdBQUcsRUFBZjtBQUNBelcsS0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJDLElBQTNCLENBQWdDLFdBQWhDLEVBQTZDaUwsSUFBN0MsQ0FBa0QsWUFBWTtBQUMxRCxVQUFJdUwsTUFBTSxDQUFDLEtBQUsvRyxLQUFOLENBQU4sS0FBdUIsSUFBM0IsRUFBaUM7QUFDN0IsY0FBTSxJQUFJeEksS0FBSixDQUFVLEtBQUt3SSxLQUFmLENBQU47QUFDSDs7QUFFRCxVQUFJLEtBQUtBLEtBQUwsQ0FBV3pILE1BQWYsRUFBdUI7QUFDbkJ3TyxjQUFNLENBQUMsS0FBSy9HLEtBQU4sQ0FBTixHQUFxQixJQUFyQjtBQUNIO0FBQ0osS0FSRDtBQVNILEdBWEQsQ0FXRSxPQUFPeUwsR0FBUCxFQUFZO0FBQ1ZuWixnRkFBWSxDQUFDO0FBQUMsaUJBQVcscUJBQXFCbVosR0FBRyxDQUFDblk7QUFBckMsS0FBRCxDQUFaO0FBQ0EsV0FBTyxLQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHQW9ZLHlFQUFjO0FBRWRsUCwrREFBWSxDQUFDNEcsSUFBYixDQUFrQixJQUFsQixFQUF3QjNMLENBQXhCO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ2xDRDtBQUFBO0FBQUE7QUFFQTs7OztBQUdlLHlFQUFVQSxDQUFWLEVBQWE7QUFDeEIsTUFBTWtVLFNBQVMsR0FBRyxLQUFLdFksSUFBTCxDQUFVK0ssS0FBVixDQUFnQixHQUFoQixDQUFsQjtBQUNBLE1BQU1wQixNQUFNLEdBQUcxTSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLElBQWhCLENBQWY7QUFFQTdCLEdBQUMsQ0FBQ0MsY0FBRjs7QUFFQSxNQUFJOEIsUUFBUSxDQUFDbVMsU0FBUyxDQUFDQSxTQUFTLENBQUNwVCxNQUFWLEdBQW1CLENBQXBCLENBQVYsQ0FBUixLQUE4QyxDQUFsRCxFQUFxRDtBQUNqRHlFLFVBQU0sQ0FBQzdMLE1BQVA7QUFDQSxXQUFPLEtBQVA7QUFDSDs7QUFFRDBLLCtEQUFZLENBQUN1SCxJQUFiLENBQWtCLElBQWxCLEVBQXdCM0wsQ0FBeEI7QUFFQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUdlLDJFQUFZO0FBQ3ZCLE1BQU00TCxLQUFLLEdBQUcsSUFBZDs7QUFDQSxNQUFJNkQsa0RBQUosQ0FBYTdELEtBQWIsRUFBb0I7QUFDaEIrRCxxQkFBaUIsRUFBRSxJQURIO0FBRWhCQyxTQUFLLEVBQUUsaUJBQVc7QUFDZHFFLDhGQUFjO0FBQ2pCO0FBSmUsR0FBcEI7QUFNSCxDOzs7Ozs7Ozs7Ozs7QUNkRDtBQUFBOzs7QUFHZSwyRUFBWTtBQUN2QnBiLEdBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZWtMLElBQWYsQ0FBb0IsVUFBVTZHLEtBQVYsRUFBaUI7QUFDakMsUUFBTWlGLFFBQVEsR0FBR2hYLENBQUMsQ0FBQyxJQUFELENBQWxCO0FBQ0EsUUFBTXNiLElBQUksR0FBR3RiLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29LLEdBQVgsRUFBYjtBQUNBLFFBQU1tUixVQUFVLEdBQUd2YixDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qm9LLEdBQXpCLEVBQW5COztBQUVBLFFBQUlsQixRQUFRLENBQUM4TixRQUFRLENBQUM1TSxHQUFULEVBQUQsQ0FBUixLQUE2QjJILEtBQWpDLEVBQXdDO0FBQ3BDaUYsY0FBUSxDQUFDNU0sR0FBVCxDQUFhMkgsS0FBSyxHQUFJLENBQUN1SixJQUFJLEdBQUcsQ0FBUixJQUFhQyxVQUFuQztBQUNBdkUsY0FBUSxDQUFDaEwsTUFBVDtBQUNIO0FBQ0osR0FURDtBQVVILEM7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7QUFHZSwyRUFBWTtBQUN2QmhGLDJFQUFRLENBQUNvSCxTQUFULENBQW1CMk0sOERBQW5CLEVBQXdDLFVBQUExWSxJQUFJLEVBQUk7QUFDNUNyQyxLQUFDLENBQUMsZ0JBQWdCcUMsSUFBSSxDQUFDc0YsWUFBdEIsQ0FBRCxDQUNLMUgsSUFETCxDQUNVLGlCQURWLEVBRUtzRixjQUZMLENBRW9CO0FBQ1pDLFlBQU0sRUFBRSxxQkFESTtBQUVaQyxlQUFTLEVBQUU7QUFGQyxLQUZwQjtBQU1ILEdBUEQ7QUFRSCxDOzs7Ozs7Ozs7Ozs7O0FDZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBekYsQ0FBQyxDQUFDK0ssUUFBRDtBQUVHOzs7QUFGSixDQUtLekosRUFMTCxDQUtRLFFBTFIsRUFLa0IsV0FMbEIsRUFLK0JrYSw4REFML0I7QUFPSTs7O0FBUEosQ0FVS2xhLEVBVkwsQ0FVUSxPQVZSLEVBVWlCLDZCQVZqQixFQVVnRG1hLDJEQVZoRDtBQVlBOzs7O0FBR0FyRSxpRUFBTTtBQUVOOzs7O0FBR0FwWCxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVrTCxJQUFmLENBQW9CZ00sOERBQXBCO0FBRUE7Ozs7QUFHQWxYLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCMEIsS0FBNUIsQ0FBa0N3Syw4REFBbEMsRTs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7O0FBR08sU0FBU3dQLFNBQVQsQ0FBbUJ2VSxDQUFuQixFQUFzQjtBQUN6QkEsR0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTXlLLGNBQWMsR0FBRzdSLENBQUMsQ0FBQyxJQUFELENBQXhCO0FBQ0EsTUFBSTRWLE1BQU0sR0FBRytGLGdCQUFnQixHQUFHLE1BQW5CLEdBQTRCOUosY0FBYyxDQUFDekgsR0FBZixFQUF6QztBQUNBLE1BQUk5QixzRUFBSixDQUFTc04sTUFBVCxFQUNLeFQsTUFETCxDQUNZLEtBRFosRUFFS08sT0FGTCxDQUVhLFVBQUFsQixRQUFRLEVBQUk7QUFDakJvRixXQUFPLENBQUNDLEdBQVIsQ0FBWXJGLFFBQVo7O0FBQ0EsUUFBR0EsUUFBUSxDQUFDc0gsY0FBVCxDQUF3QixNQUF4QixDQUFILEVBQW9DO0FBQ2hDLFVBQUd0SCxRQUFRLENBQUNZLElBQVQsQ0FBYzBHLGNBQWQsQ0FBNkIsTUFBN0IsQ0FBSCxFQUF5QztBQUNyQzhJLHNCQUFjLENBQUN4SixPQUFmLENBQXVCLElBQXZCLEVBQTZCcEksSUFBN0IsQ0FBa0MsYUFBbEMsRUFBaUQ2RSxJQUFqRCxDQUFzRHJELFFBQVEsQ0FBQ1ksSUFBVCxDQUFjakMsSUFBcEU7QUFDSDs7QUFDRCxVQUFHcUIsUUFBUSxDQUFDWSxJQUFULENBQWMwRyxjQUFkLENBQTZCLGFBQTdCLENBQUgsRUFBZ0Q7QUFDNUM4SSxzQkFBYyxDQUFDeEosT0FBZixDQUF1QixJQUF2QixFQUE2QnBJLElBQTdCLENBQWtDLG9CQUFsQyxFQUF3RHNKLElBQXhELENBQTZELEtBQTdELEVBQW9FOUgsUUFBUSxDQUFDWSxJQUFULENBQWNzVSxXQUFsRjtBQUNBOUUsc0JBQWMsQ0FBQ3hKLE9BQWYsQ0FBdUIsSUFBdkIsRUFBNkJwSSxJQUE3QixDQUFrQyxnQ0FBbEMsRUFBb0VvQyxJQUFwRSxDQUF5RSxNQUF6RSxFQUFpRlosUUFBUSxDQUFDWSxJQUFULENBQWNzVSxXQUEvRjtBQUNIO0FBQ0o7QUFFSixHQWRMLEVBZUtuTyxJQWZMO0FBZ0JILEM7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7QUFBQTtBQUFBO0FBRUF4SSxDQUFDLENBQUMrSyxRQUFEO0FBQ0c7OztBQURKLENBSUt6SixFQUpMLENBSVEsUUFKUixFQUlrQixRQUpsQixFQUk0Qm9hLDZEQUo1QixFOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBOzs7OztBQUtPLFNBQVMxRCxTQUFULEdBQXFCO0FBQ3hCLE1BQUlWLEtBQUssR0FBR3RYLENBQUMsQ0FBQyx3QkFBRCxDQUFiO0FBQ0EsTUFBSXVILFFBQVEsR0FBR3ZILENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCOEUsSUFBNUIsRUFBZjtBQUVBd1MsT0FBSyxDQUFDc0UsT0FBTixDQUFjclUsUUFBZDtBQUVBLFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUFBO0FBQUE7Ozs7O0FBS08sU0FBU2tVLFNBQVQsQ0FBbUJ0VSxDQUFuQixFQUFzQjtBQUN6QkEsR0FBQyxDQUFDQyxjQUFGO0FBRUFwSCxHQUFDLENBQUMsSUFBRCxDQUFELENBQVFxSSxPQUFSLENBQWdCLElBQWhCLEVBQXNCeEgsTUFBdEI7QUFFQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFLTyxTQUFTZ2IscUJBQVQsQ0FBZ0MxVSxDQUFoQyxFQUFtQztBQUN0Q0EsR0FBQyxDQUFDQyxjQUFGO0FBRUEsTUFBTWlDLFVBQVUsR0FBR3JKLENBQUMsQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBTTBNLE1BQU0sR0FBR3JELFVBQVUsQ0FBQ0wsT0FBWCxDQUFtQixJQUFuQixDQUFmO0FBQ0EsTUFBTThTLFVBQVUsR0FBR3BQLE1BQU0sQ0FBQ3pNLElBQVAsQ0FBWSxtQkFBWixFQUFpQ21LLEdBQWpDLEVBQW5CO0FBRUE7Ozs7OztBQUtBLE1BQU0yUixtQkFBbUIsR0FBRy9iLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CQyxJQUFwQixDQUF5QixtQkFBekIsRUFBOEMyRyxNQUE5QyxDQUFxRCxVQUFDb0wsQ0FBRCxFQUFJQyxJQUFKLEVBQWE7QUFDMUYsV0FBTzZKLFVBQVUsS0FBSzdKLElBQUksQ0FBQ3ZDLEtBQTNCO0FBQ0gsR0FGMkIsQ0FBNUI7O0FBR0EsTUFBSXFNLG1CQUFtQixDQUFDOVQsTUFBcEIsR0FBNkIsQ0FBakMsRUFBbUM7QUFDL0JqRyxnRkFBWSxDQUFDO0FBQUMsaUJBQVcsbUJBQW1COFo7QUFBL0IsS0FBRCxDQUFaO0FBQ0EsV0FBTyxLQUFQO0FBQ0g7O0FBRUQsTUFBTXpaLElBQUksR0FBR3FLLE1BQU0sQ0FBQ3pNLElBQVAsQ0FBWSxpQkFBWixFQUErQmdKLGNBQS9CLEVBQWI7QUFFQSxNQUFJWCxzRUFBSixDQUFTZSxVQUFVLENBQUNFLElBQVgsQ0FBZ0IsTUFBaEIsQ0FBVCxFQUNLbkgsTUFETCxDQUNZLEtBRFosRUFFS0MsSUFGTCxDQUVVQSxJQUZWLEVBR0tNLE9BSEwsQ0FHYSxVQUFBbEIsUUFBUSxFQUFJO0FBQ2pCaUwsVUFBTSxDQUFDek0sSUFBUCxDQUFZLG1CQUFaLEVBQWlDc0osSUFBakMsQ0FBc0MsVUFBdEMsRUFBa0QsSUFBbEQ7QUFFQXJILGtGQUFjLENBQUNULFFBQUQsQ0FBZDtBQUNILEdBUEwsRUFRSytHLElBUkw7QUFVQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDMUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUF4SSxDQUFDLENBQUMrSyxRQUFEO0FBRUc7OztBQUZKLENBS0t6SixFQUxMLENBS1EsT0FMUixFQUtpQixhQUxqQixFQUtnQzBXLDZEQUxoQztBQU9JOzs7QUFQSixDQVVLMVcsRUFWTCxDQVVRLE9BVlIsRUFVaUIsYUFWakIsRUFVZ0N1YSxxRkFWaEM7QUFZSTs7O0FBWkosQ0FlS3ZhLEVBZkwsQ0FlUSxPQWZSLEVBZWlCLGFBZmpCLEVBZWdDbWEsNkRBZmhDLEU7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7Ozs7O0FBS08sU0FBU3pELFNBQVQsR0FBcUI7QUFDeEIsTUFBTVgsV0FBVyxHQUFHclgsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9LLEdBQWxCLEVBQXBCO0FBQ0EsTUFBTWtOLEtBQUssR0FBR3RYLENBQUMsQ0FBQyxnQkFBRCxDQUFmOztBQUVBLE9BQUssSUFBSTJYLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdOLFdBQXBCLEVBQWlDTSxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFFBQUlILE1BQU0sR0FBR0YsS0FBSyxDQUFDclgsSUFBTixDQUFXLElBQVgsRUFBaUJ3WCxJQUFqQixHQUF3QnhYLElBQXhCLENBQTZCLGtCQUE3QixFQUFpRG1LLEdBQWpELEVBQWI7QUFDQSxRQUFJc04sV0FBVyxHQUFHeE8sUUFBUSxDQUFDc08sTUFBRCxDQUFSLElBQW9CLENBQXRDO0FBQ0EsUUFBSUQsTUFBTSxHQUFHdlgsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUI4RSxJQUFyQixHQUE0QmlELE9BQTVCLENBQW9DLGFBQXBDLEVBQW1ELEVBQUUyUCxXQUFyRCxDQUFiO0FBRUFKLFNBQUssQ0FBQzlTLE1BQU4sQ0FBYStTLE1BQWI7QUFDSDs7QUFFRCxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7OztBQUtPLFNBQVN5RSxjQUFULEdBQTJCO0FBQzlCLE1BQU0zWixJQUFJLEdBQUdyQyxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkMsSUFBM0IsQ0FBZ0MsZ0JBQWhDLENBQWI7QUFFQW9DLE1BQUksQ0FBQzZJLElBQUwsQ0FBVSxVQUFVNkksQ0FBVixFQUFhOUIsSUFBYixFQUFtQjtBQUN6QmpTLEtBQUMsQ0FBQ2lTLElBQUQsQ0FBRCxDQUFRMUksSUFBUixDQUFhLFVBQWIsRUFBeUIsSUFBekI7QUFDSCxHQUZEOztBQUlBLE1BQUdsSCxJQUFJLENBQUM0RixNQUFSLEVBQWdCO0FBQ1osUUFBSUssc0VBQUosQ0FBU3RJLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFDLElBQVIsQ0FBYSxPQUFiLENBQVQsRUFDS0QsTUFETCxDQUNZLEtBRFosRUFFS0MsSUFGTCxDQUVVQSxJQUZWLEVBR0ttRyxJQUhMO0FBSUg7O0FBRUQsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ3RCRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUF4SSxDQUFDLENBQUMrSyxRQUFEO0FBRUc7OztBQUZKLENBS0t6SixFQUxMLENBS1EsT0FMUixFQUtpQixjQUxqQixFQUtpQzBXLDZEQUxqQztBQU9JOzs7QUFQSixDQVVLMVcsRUFWTCxDQVVRLE9BVlIsRUFVaUIsYUFWakIsRUFVZ0MwYSx1RUFWaEM7QUFZSTs7O0FBWkosQ0FlSzFhLEVBZkwsQ0FlUSxPQWZSLEVBZWlCLE9BZmpCLEVBZTBCLFlBQVk7QUFDOUJ0QixHQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLElBQWhCLEVBQXNCRixRQUF0QixDQUErQixTQUEvQjtBQUNILENBakJMO0FBbUJJOzs7QUFuQkosQ0FzQkt4SCxFQXRCTCxDQXNCUSxPQXRCUixFQXNCaUIsYUF0QmpCLEVBc0JnQyxZQUFZO0FBQ3BDdEIsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixFQUFzQm5JLE1BQXRCO0FBQ0gsQ0F4Qkw7QUEwQkk7Ozs7QUExQkosQ0E4QktTLEVBOUJMLENBOEJRLE9BOUJSLEVBOEJpQixjQTlCakIsRUE4QmlDLFlBQVk7QUFDckN0QixHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0ssR0FBbEIsQ0FBc0IsS0FBS3NGLEtBQTNCO0FBQ0gsQ0FoQ0wsRTs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7O0FBTWUseUVBQVV2SSxDQUFWLEVBQWE7QUFDeEJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUVBLE1BQUkwSyxzRUFBSixDQUFtQixLQUFLL08sSUFBeEIsRUFDS0osT0FETCxDQUNhLFVBQUE0QixNQUFNLEVBQUk7QUFDZnZFLEtBQUMsQ0FBQyxxQkFBRCxDQUFELENBQ0tvSyxHQURMLENBQ1M3RixNQUFNLENBQUMwWCxhQURoQjtBQUVILEdBSkwsRUFLS3pULElBTEw7QUFPQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQUE7QUFBQTtBQUVBOzs7O0FBR0F4SSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUNLMEIsS0FETCxDQUNXd2Esb0VBRFgsRTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBTyxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0IsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7O0FBR0FuYyxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEIsS0FBaEIsQ0FBc0JzVCxzRUFBWSxDQUFDbUgsaUZBQUQsQ0FBbEMsRTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTs7Ozs7QUFLTyxTQUFTbkUsU0FBVCxHQUFxQjtBQUN4QixNQUFNWCxXQUFXLEdBQUdyWCxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0ssR0FBbEIsRUFBcEI7QUFDQSxNQUFNa04sS0FBSyxHQUFHdFgsQ0FBQyxDQUFDLGlDQUFELENBQWY7QUFDQSxNQUFNdVgsTUFBTSxHQUFHdlgsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0M4RSxJQUF0QyxFQUFmO0FBRUEsTUFBSTBTLE1BQU0sR0FBR0YsS0FBSyxDQUFDclgsSUFBTixDQUFXLElBQVgsRUFBaUJ3WCxJQUFqQixHQUF3QnhYLElBQXhCLENBQTZCLFdBQTdCLEVBQTBDc0IsSUFBMUMsRUFBYjtBQUNBLE1BQUltVyxXQUFXLEdBQUl4TyxRQUFRLENBQUNzTyxNQUFELENBQVIsR0FBbUIsQ0FBcEIsSUFBMEIsQ0FBNUM7O0FBRUEsT0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixXQUFwQixFQUFpQ00sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQ0wsU0FBSyxDQUFDOVMsTUFBTixDQUFhK1MsTUFBTSxDQUFDeFAsT0FBUCxDQUFlLDBCQUFmLEVBQTJDNFAsQ0FBQyxHQUFHRCxXQUEvQyxDQUFiO0FBQ0g7O0FBRUQsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUFBO0FBQUE7Ozs7O0FBS08sU0FBUzBFLGdCQUFULEdBQTRCO0FBQy9CcGMsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixFQUFzQm5JLE1BQXRCO0FBRUEsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ1REO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQWIsQ0FBQyxDQUFDK0ssUUFBRDtBQUVHOzs7QUFGSixDQUtLekosRUFMTCxDQUtRLE9BTFIsRUFLaUIsY0FMakIsRUFLaUMwVyw2REFMakM7QUFPSTs7O0FBUEosQ0FVSzFXLEVBVkwsQ0FVUSxPQVZSLEVBVWlCLGFBVmpCLEVBVWdDOGEsMkVBVmhDO0FBWUk7OztBQVpKLENBZUs5YSxFQWZMLENBZVEsT0FmUixFQWVpQixPQWZqQixFQWUwQixZQUFZO0FBQzlCdEIsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixFQUFzQkYsUUFBdEIsQ0FBK0IsU0FBL0I7QUFDSCxDQWpCTDtBQW1CSTs7OztBQW5CSixDQXVCS3hILEVBdkJMLENBdUJRLE9BdkJSLEVBdUJpQixjQXZCakIsRUF1QmlDLFlBQVk7QUFDckN0QixHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0ssR0FBbEIsQ0FBc0IsS0FBS3NGLEtBQTNCO0FBQ0gsQ0F6QkwsRTs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTs7Ozs7QUFLTyxTQUFTc0ksU0FBVCxHQUFxQjtBQUN4QixNQUFNWCxXQUFXLEdBQUdyWCxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0ssR0FBbEIsRUFBcEI7QUFDQSxNQUFNa04sS0FBSyxHQUFHdFgsQ0FBQyxDQUFDLDJCQUFELENBQWY7QUFDQSxNQUFNdVgsTUFBTSxHQUFHdlgsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0M4RSxJQUFoQyxFQUFmO0FBRUEsTUFBSTBTLE1BQU0sR0FBR0YsS0FBSyxDQUFDclgsSUFBTixDQUFXLElBQVgsRUFBaUJ3WCxJQUFqQixHQUF3QnhYLElBQXhCLENBQTZCLGdCQUE3QixFQUErQ3NCLElBQS9DLEVBQWI7QUFDQSxNQUFJbVcsV0FBVyxHQUFJeE8sUUFBUSxDQUFDc08sTUFBRCxDQUFSLEdBQW1CLENBQXBCLElBQTBCLENBQTVDOztBQUVBLE9BQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sV0FBcEIsRUFBaUNNLENBQUMsRUFBbEMsRUFBc0M7QUFDbENMLFNBQUssQ0FBQzlTLE1BQU4sQ0FBYStTLE1BQU0sQ0FBQ3hQLE9BQVAsQ0FBZSxvQkFBZixFQUFxQzRQLENBQUMsR0FBR0QsV0FBekMsQ0FBYjtBQUNIOztBQUVELFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFBOzs7OztBQUtPLFNBQVMwRSxnQkFBVCxHQUE0QjtBQUMvQnBjLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdKLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0JuSSxNQUF0QjtBQUVBLFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFiLENBQUMsQ0FBQytLLFFBQUQ7QUFFRzs7O0FBRkosQ0FLS3pKLEVBTEwsQ0FLUSxPQUxSLEVBS2lCLGNBTGpCLEVBS2lDMFcsNkRBTGpDO0FBT0k7OztBQVBKLENBVUsxVyxFQVZMLENBVVEsT0FWUixFQVVpQixhQVZqQixFQVVnQzhhLDJFQVZoQztBQVlJOzs7QUFaSixDQWVLOWEsRUFmTCxDQWVRLE9BZlIsRUFlaUIsT0FmakIsRUFlMEIsWUFBWTtBQUM5QnRCLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdKLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0JGLFFBQXRCLENBQStCLFNBQS9CO0FBQ0gsQ0FqQkw7QUFtQkk7OztBQW5CSixDQXNCS3hILEVBdEJMLENBc0JRLFVBdEJSLEVBc0JvQjBLLE1BdEJwQixDQXNCMkIsVUFBVWlHLElBQVYsRUFBZ0I7QUFDdkNqUyxHQUFDLENBQUNpUyxJQUFJLENBQUMzSyxNQUFOLENBQUQsQ0FBZTBCLE9BQWYsQ0FBdUIsSUFBdkIsRUFBNkJGLFFBQTdCLENBQXNDLFNBQXRDO0FBQ0gsQ0F4QkQ7QUEwQkk7Ozs7QUExQkosQ0E4Qkt4SCxFQTlCTCxDQThCUSxPQTlCUixFQThCaUIsY0E5QmpCLEVBOEJpQyxZQUFZO0FBQ3JDdEIsR0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9LLEdBQWxCLENBQXNCLEtBQUtzRixLQUEzQjtBQUNILENBaENMLEU7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7Ozs7O0FBS08sU0FBU3NJLFNBQVQsR0FBcUI7QUFDeEIsTUFBTVgsV0FBVyxHQUFHclgsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9LLEdBQWxCLEVBQXBCO0FBQ0EsTUFBTWtOLEtBQUssR0FBR3RYLENBQUMsQ0FBQyxlQUFELENBQWY7QUFDQSxNQUFNdVgsTUFBTSxHQUFHdlgsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0I4RSxJQUFwQixFQUFmO0FBQ0EsTUFBTTBTLE1BQU0sR0FBR0YsS0FBSyxDQUFDclgsSUFBTixDQUFXLElBQVgsRUFBaUJ3WCxJQUFqQixHQUF3QnhYLElBQXhCLENBQTZCLFVBQTdCLEVBQXlDc0IsSUFBekMsRUFBZjtBQUNBLE1BQU1tVyxXQUFXLEdBQUl4TyxRQUFRLENBQUNzTyxNQUFELENBQVIsR0FBbUIsQ0FBcEIsSUFBMEIsQ0FBOUM7O0FBRUEsT0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixXQUFwQixFQUFpQ00sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQ0wsU0FBSyxDQUFDOVMsTUFBTixDQUFhK1MsTUFBTSxDQUFDeFAsT0FBUCxDQUFlLFNBQWYsRUFBMEI0UCxDQUFDLEdBQUdELFdBQTlCLENBQWI7QUFDQUosU0FBSyxDQUFDclgsSUFBTixDQUFXLFVBQVgsRUFBdUJxRixPQUF2QjtBQUNIOztBQUVELFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFBOzs7OztBQUtPLFNBQVMrVyxVQUFULEdBQXNCO0FBQ3pCcmMsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixFQUFzQm5JLE1BQXRCO0FBRUEsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ1REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7QUFLTyxTQUFTeWIsYUFBVCxHQUEwQjtBQUM3QixNQUFNelosS0FBSyxHQUFHN0MsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsSUFBUixDQUFhLE9BQWIsQ0FBZDtBQUNBLE1BQU1pVixLQUFLLEdBQUd0WCxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQkMsSUFBL0IsQ0FBb0MsVUFBcEMsQ0FBZDtBQUNBLE1BQU1vQyxJQUFJLEdBQUdyQyxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQkMsSUFBL0IsQ0FBb0MsaUNBQXBDLEVBQXVFZ0osY0FBdkUsRUFBYjs7QUFFQSxNQUFHNUcsSUFBSSxDQUFDNEYsTUFBTCxLQUFnQixDQUFuQixFQUFzQjtBQUNsQixXQUFPLEtBQVA7QUFDSDs7QUFFRCxNQUFJSyxzRUFBSixDQUFTekYsS0FBVCxFQUNLVCxNQURMLENBQ1ksS0FEWixFQUVLQyxJQUZMLENBRVVBLElBRlYsRUFHS21HLElBSEw7QUFLQThPLE9BQUssQ0FBQ3BNLElBQU4sQ0FBVyxVQUFVNkksQ0FBVixFQUFhOUIsSUFBYixFQUFtQjtBQUMxQmpTLEtBQUMsQ0FBQ2lTLElBQUQsQ0FBRCxDQUFRclIsV0FBUixDQUFvQixTQUFwQjtBQUNILEdBRkQ7QUFJQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDM0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBWixDQUFDLENBQUMrSyxRQUFEO0FBRUc7OztBQUZKLENBS0t6SixFQUxMLENBS1EsT0FMUixFQUtpQixjQUxqQixFQUtpQzBXLDZEQUxqQztBQU9JOzs7QUFQSixDQVVLMVcsRUFWTCxDQVVRLE9BVlIsRUFVaUIsYUFWakIsRUFVZ0MrYSwrREFWaEM7QUFZSTs7O0FBWkosQ0FlSy9hLEVBZkwsQ0FlUSxPQWZSLEVBZWlCLE9BZmpCLEVBZTBCLFlBQVk7QUFDOUJ0QixHQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLElBQWhCLEVBQXNCRixRQUF0QixDQUErQixTQUEvQjtBQUNILENBakJMO0FBbUJJOzs7QUFuQkosQ0FzQkt4SCxFQXRCTCxDQXNCUSxVQXRCUixFQXNCb0IwSyxNQXRCcEIsQ0FzQjJCLFVBQVVpRyxJQUFWLEVBQWdCO0FBQ25DalMsR0FBQyxDQUFDaVMsSUFBSSxDQUFDM0ssTUFBTixDQUFELENBQWUwQixPQUFmLENBQXVCLElBQXZCLEVBQTZCRixRQUE3QixDQUFzQyxTQUF0QztBQUNILENBeEJMO0FBMkJJOzs7QUEzQkosQ0E4Qkt4SCxFQTlCTCxDQThCUSxPQTlCUixFQThCaUIsc0JBOUJqQixFQThCeUMsWUFBWTtBQUM3QyxNQUFNeVIsS0FBSyxHQUFHLElBQWQ7O0FBQ0FGLCtEQUFXLENBQUNDLElBQVosQ0FBaUJDLEtBQWpCO0FBQ0EvUyxHQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLElBQWhCLEVBQXNCRixRQUF0QixDQUErQixTQUEvQjtBQUVBOUIsMkVBQVEsQ0FBQ29ILFNBQVQsQ0FBbUJTLHFFQUFuQixFQUFrQyxVQUFDeE0sSUFBRCxFQUFPaU0sSUFBUCxFQUFnQjtBQUM5Q2dPLDRFQUFhO0FBQ2hCLEdBRkQ7QUFHSCxDQXRDTDtBQXdDSTs7O0FBeENKLENBMkNLaGIsRUEzQ0wsQ0EyQ1EsT0EzQ1IsRUEyQ2lCLHNCQTNDakIsRUEyQ3lDLFlBQVk7QUFDN0MsTUFBTXlSLEtBQUssR0FBRyxJQUFkOztBQUVBQywrREFBVyxDQUFDRixJQUFaLENBQWlCQyxLQUFqQjtBQUNILENBL0NMO0FBa0RJOzs7O0FBbERKLENBc0RLelIsRUF0REwsQ0FzRFEsT0F0RFIsRUFzRGlCLGNBdERqQixFQXNEaUMsWUFBWTtBQUNyQ3RCLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JvSyxHQUFsQixDQUFzQixLQUFLc0YsS0FBM0I7QUFDSCxDQXhETDtBQTBEQTs7OztBQUdBMVAsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjBCLEtBQWhCLENBQXNCNGEsZ0VBQXRCLEU7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFBQTtBQUFPLElBQU1DLDJCQUEyQixHQUFHLDZCQUFwQyxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBLDZDQUFNQyxLQUFLLEdBQUcsT0FBZDtBQUNBLElBQU1DLGVBQWUsR0FBRyxjQUF4QjtBQUNBLElBQU1DLFNBQVMsR0FBRywyQkFBbEI7QUFFZSwyRUFBWTtBQUN2QixNQUFNeEksTUFBTSxHQUFHbkosUUFBUSxDQUFDb0UsY0FBVCxDQUF3QnVOLFNBQXhCLENBQWY7O0FBRUEsTUFBSSxDQUFDeEksTUFBRCxJQUFXQSxNQUFNLENBQUNXLGFBQVAsS0FBeUIsQ0FBQyxDQUF6QyxFQUE0QztBQUN4QyxXQUFPLEtBQVA7QUFDSDs7QUFFRCxNQUFJWCxNQUFNLENBQUNZLE9BQVAsQ0FBZTdNLE1BQWYsSUFBeUJpTSxNQUFNLENBQUNZLE9BQVAsQ0FBZVosTUFBTSxDQUFDVyxhQUF0QixDQUE3QixFQUFtRTtBQUMvRCxRQUFJRSxlQUFlLEdBQUdiLE1BQU0sQ0FBQ1ksT0FBUCxDQUFlWixNQUFNLENBQUNXLGFBQXRCLENBQXRCO0FBRUEsUUFBTThILFdBQVcsR0FBRzNjLENBQUMsQ0FBQyxNQUFNeWMsZUFBUCxDQUFyQjs7QUFDQSxZQUFRMUgsZUFBZSxDQUFDeFQsSUFBaEIsQ0FBcUJ3RixXQUFyQixFQUFSO0FBQ0ksV0FBS3lWLEtBQUw7QUFDSUcsbUJBQVcsQ0FBQy9iLFdBQVosQ0FBd0IsTUFBeEI7QUFDQTs7QUFDSjtBQUNJK2IsbUJBQVcsQ0FBQzdULFFBQVosQ0FBcUIsTUFBckI7QUFMUjtBQU9IOztBQUVELFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUN6QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZSwyRUFBWTtBQUN2QjlCLDJFQUFRLENBQUNvSCxTQUFULENBQW1CbU8sc0VBQW5CLEVBQWdELFVBQUNsYSxJQUFELEVBQU9pTSxJQUFQLEVBQWdCO0FBQzVEdEgsNkVBQVEsQ0FBQ3VILFdBQVQsQ0FBcUJnTyxzRUFBckIsRUFBa0RqTyxJQUFsRDtBQUVBaUcsd0VBQVU7QUFFVnZVLEtBQUMsQ0FBQyx5Q0FBRCxDQUFELENBQTZDdUYsY0FBN0MsQ0FBNEQ7QUFDeERDLFlBQU0sRUFBRSxxQkFEZ0Q7QUFFeERDLGVBQVMsRUFBRTtBQUY2QyxLQUE1RDtBQUlILEdBVEQ7QUFVSCxDOzs7Ozs7Ozs7Ozs7O0FDZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUF6RixDQUFDLENBQUMrSyxRQUFELENBQUQsQ0FDS3pKLEVBREwsQ0FDUSxPQURSLEVBQ2lCLHNCQURqQixFQUN5Q3VSLDZEQUR6QyxFQUVLdlIsRUFGTCxDQUVRLE9BRlIsRUFFaUIsc0JBRmpCLEVBRXlDMFIsNkRBRnpDLEVBR0sxUixFQUhMLENBR1EsUUFIUixFQUdrQix5QkFIbEIsRUFHNkNpVCw0REFIN0M7QUFLQTs7Ozs7QUFJQXZVLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FDSzBCLEtBREwsQ0FDV3dSLDJEQURYLEU7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQU8sSUFBTTBKLGlCQUFpQixHQUFHLG1CQUExQixDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUE7QUFFQTs7OztBQUdlLDJFQUFXO0FBQ3RCLE1BQUlDLGlEQUFKLENBQVcsSUFBWCxFQUFpQjtBQUNiQyxXQUFPLEVBQUUsSUFESTtBQUViQyxVQUFNLEVBQUUsSUFGSztBQUdiQyxzQkFBa0IsRUFBRSxJQUhQO0FBSWJDLGtCQUFjLEVBQUUsd0JBQVU5VixDQUFWLEVBQWE7QUFDekIsVUFBSXVJLEtBQUssR0FBR3lJLElBQUksQ0FBQytFLEtBQUwsQ0FBVyxDQUFDL1YsQ0FBQyxDQUFDRyxNQUFGLENBQVM2VixRQUFWLEdBQXFCLEdBQWhDLENBQVo7QUFDQSxVQUFJQyxZQUFZLEdBQUdwZCxDQUFDLENBQUMsS0FBS3VRLE9BQU4sQ0FBRCxDQUFnQnZILE9BQWhCLENBQXdCLElBQXhCLEVBQThCL0ksSUFBOUIsQ0FBbUMsZ0JBQW5DLENBQW5COztBQUVBLFVBQUl5UCxLQUFLLEtBQUt4RyxRQUFRLENBQUNrVSxZQUFZLENBQUNoVCxHQUFiLEVBQUQsQ0FBdEIsRUFBNEM7QUFDeENnVCxvQkFBWSxDQUNQaFQsR0FETCxDQUNTc0YsS0FEVCxFQUVLMUQsTUFGTDtBQUdIO0FBQ0o7QUFiWSxHQUFqQjtBQWVILEM7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBaE0sQ0FBQyxDQUFDK0ssUUFBRCxDQUFELENBQ0t6SixFQURMLENBQ1EsT0FEUixFQUNpQixzQkFEakIsRUFDeUN1Uiw2REFEekMsRUFFS3ZSLEVBRkwsQ0FFUSxPQUZSLEVBRWlCLHNCQUZqQixFQUV5QzBSLDZEQUZ6QztBQUlBOzs7O0FBR0FoVCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEIsS0FBaEIsQ0FBc0JzVCxzRUFBWSxDQUFDNEgsMkVBQUQsQ0FBbEM7QUFFQTVjLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVzBCLEtBQVgsQ0FBaUIsWUFBWTtBQUN6Qm1GLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDSCxDQUZEO0FBSUE7Ozs7QUFHQTlHLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCa0wsSUFBekIsQ0FBOEJtUywwRUFBOUIsRTs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0RBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7O0FBS08sU0FBU3JGLFNBQVQsR0FBcUI7QUFDeEIsTUFBTVgsV0FBVyxHQUFHbk8sUUFBUSxDQUFDbEosQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9LLEdBQWxCLEVBQUQsQ0FBNUI7QUFDQSxNQUFNa04sS0FBSyxHQUFHdFgsQ0FBQyxDQUFDLG1CQUFELENBQWY7QUFDQSxNQUFNc2QsS0FBSyxHQUFHdGQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsSUFBUixDQUFhLFNBQWIsQ0FBZDtBQUNBLE1BQU1rRixRQUFRLEdBQUd2SCxDQUFDLENBQUMscUJBQUQsQ0FBbEI7QUFFQSxNQUFJdWQsU0FBUyxHQUFHclUsUUFBUSxDQUFDb08sS0FBSyxDQUFDclgsSUFBTixDQUFXLFlBQVgsRUFBeUJnSSxNQUExQixDQUF4Qjs7QUFOd0IsNkJBUWYwUCxDQVJlO0FBU3BCLFFBQUk2RixJQUFJLEdBQUcsQ0FBQ0YsS0FBSyxHQUFHLENBQVIsR0FBWUEsS0FBWixHQUFvQixDQUFyQixJQUEwQnBVLFFBQVEsQ0FBQ29PLEtBQUssQ0FBQ3JYLElBQU4sQ0FBVyxZQUFYLEVBQXlCZ0ksTUFBMUIsQ0FBN0M7QUFFQSxRQUFJd1YsTUFBTSxHQUFHbFcsUUFBUSxDQUFDekMsSUFBVCxHQUFnQmlELE9BQWhCLENBQXdCLE9BQXhCLEVBQWlDeVYsSUFBakMsRUFDUnpWLE9BRFEsQ0FDQSxVQURBLEVBQ1l5VixJQURaLEVBRVJ6VixPQUZRLENBRUEsVUFGQSxFQUVZeVYsSUFGWixDQUFiLENBWG9CLENBZXBCOztBQUNBLFFBQUlFLFVBQVUsR0FBRzFkLENBQUMsQ0FBQ3lkLE1BQUQsQ0FBbEI7QUFDQXpkLEtBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCa0wsSUFBeEIsQ0FBNkIsWUFBVTtBQUNuQyxVQUFJeVMsWUFBWSxHQUFHM2QsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0ssR0FBUixFQUFuQjtBQUNBc1QsZ0JBQVUsQ0FBQ3pkLElBQVgsQ0FBZ0IsTUFBTUQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsSUFBUixDQUFhLE9BQWIsQ0FBdEIsRUFBNkNrSCxJQUE3QyxDQUFrRCxPQUFsRCxFQUEyRG9VLFlBQTNEO0FBQ0gsS0FIRDtBQUlBRixVQUFNLEdBQUdDLFVBQVUsQ0FBQzdNLEdBQVgsQ0FBZSxDQUFmLEVBQWtCK00sU0FBM0I7O0FBRUEsUUFBSUwsU0FBUyxHQUFHLENBQWhCLEVBQW1CO0FBQ2Z2ZCxPQUFDLENBQUNzWCxLQUFLLENBQUNyWCxJQUFOLENBQVcsWUFBWCxFQUF5QndYLElBQXpCLEVBQUQsQ0FBRCxDQUFtQ29HLEtBQW5DLENBQXlDSixNQUF6QztBQUNILEtBRkQsTUFFTztBQUNIbkcsV0FBSyxDQUFDc0UsT0FBTixDQUFjNkIsTUFBZDtBQUNIOztBQUNERixhQUFTO0FBRVRqRyxTQUFLLENBQUNyWCxJQUFOLENBQVcsMEJBQVgsRUFBdUN3WCxJQUF2QyxHQUE4Q3JOLEdBQTlDLENBQWtEb1QsSUFBbEQ7QUE5Qm9COztBQVF4QixPQUFLLElBQUk3RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixXQUFwQixFQUFpQ00sQ0FBQyxFQUFsQyxFQUFzQztBQUFBLFVBQTdCQSxDQUE2QjtBQXVCckM7O0FBRUQsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ3ZDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBTWUseUVBQVUzRixDQUFWLEVBQWFDLElBQWIsRUFBbUI7QUFDOUIsTUFBTXRTLGlCQUFpQixHQUFHSyxDQUFDLENBQUNpUyxJQUFELENBQTNCO0FBQ0EsTUFBTTZMLGtCQUFrQixHQUFHbmUsaUJBQWlCLENBQUNNLElBQWxCLENBQXVCLE9BQXZCLENBQTNCO0FBRUE7Ozs7QUFHQSxNQUFNb1AsZUFBZSxHQUFHLElBQUlDLDJFQUFKLENBQW9CMkMsSUFBcEIsRUFDbkIxQyxZQURtQixDQUNONVAsaUJBQWlCLENBQUMwQyxJQUFsQixDQUF1QixLQUF2QixDQURNLEVBRW5CSSxLQUZtQixDQUViLFVBQUNqQixJQUFELEVBQU9DLFFBQVAsRUFBb0I7QUFDdkJPLGdGQUFZLENBQUNQLFFBQUQsQ0FBWjtBQUNBcWMsc0JBQWtCLENBQUMxVCxHQUFuQixDQUF1QixFQUF2QjtBQUNILEdBTG1CLEVBTW5Cb0YsTUFObUIsQ0FNWixZQUFNO0FBQ1ZzTyxzQkFBa0IsQ0FBQzFULEdBQW5CLENBQXVCLEVBQXZCO0FBQ0gsR0FSbUIsRUFTbkJ6SCxPQVRtQixDQVNYLFVBQUNuQixJQUFELEVBQU9DLFFBQVAsRUFBb0I7QUFDekJ6QixLQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QnVCLElBQXZCLENBQTRCRSxRQUFRLENBQUNnTyxTQUFyQztBQUNBcU8sc0JBQWtCLENBQUMxVCxHQUFuQixDQUF1QjNJLFFBQVEsQ0FBQ2dPLFNBQWhDO0FBQ0gsR0FabUIsQ0FBeEI7QUFjQTs7OztBQUdBLE1BQUksQ0FBQyxDQUFDcU8sa0JBQWtCLENBQUMxVCxHQUFuQixFQUFOLEVBQWdDO0FBQzVCaUYsbUJBQWUsQ0FDVk0sVUFETCxDQUVRbU8sa0JBQWtCLENBQUMxVCxHQUFuQixFQUZSLEVBR1F3RixtRUFBVyxDQUFDalEsaUJBQWlCLENBQUMwQyxJQUFsQixDQUF1QixRQUF2QixDQUFELEVBQW1DeWIsa0JBQWtCLENBQUMxVCxHQUFuQixFQUFuQyxDQUhuQjtBQUtIO0FBRUQ7Ozs7O0FBR0FpRixpQkFBZSxDQUFDUyxLQUFoQjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUM5Q0Q7QUFBQTtBQUFBOzs7QUFHTyxTQUFTakcsV0FBVCxHQUF3QjtBQUMzQjdKLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdKLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0JGLFFBQXRCLENBQStCLFNBQS9CO0FBQ0E5SSxHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCa1EsSUFBakI7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBS08sU0FBUzZOLFFBQVQsQ0FBbUI1VyxDQUFuQixFQUFzQjtBQUN6QkEsR0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTS9FLElBQUksR0FBR21ILG1FQUFXLENBQUN4SixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCQyxJQUFoQixDQUFxQiwrQ0FBckIsQ0FBRCxDQUF4QjtBQUVBLE1BQUlxSSxzRUFBSixDQUFTdEksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsSUFBUixDQUFhLE9BQWIsQ0FBVCxFQUNLRCxNQURMLENBQ1ksS0FEWixFQUVLQyxJQUZMLG1CQUVjQSxJQUZkLEdBR0tNLE9BSEwsQ0FHYSxVQUFVZ1EsSUFBVixFQUFnQjtBQUNyQixRQUFJQSxJQUFJLENBQUNuUSxJQUFMLEtBQWMsT0FBbEIsRUFBMkI7QUFDdkJTLG1GQUFXLENBQUMwUCxJQUFJLENBQUMzUCxPQUFOLENBQVg7QUFDSCxLQUZELE1BRU87QUFDSHVKLFlBQU0sQ0FBQ3pKLFFBQVAsQ0FBZ0JxRyxNQUFoQixDQUF1QixJQUF2QjtBQUNIO0FBQ0osR0FUTCxFQVVLWCxJQVZMO0FBWUEsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQzFCRDtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7QUFLTyxTQUFTd1YsT0FBVCxDQUFrQjdXLENBQWxCLEVBQXFCO0FBQ3hCQSxHQUFDLENBQUNDLGNBQUY7QUFFQSxNQUFJNlcsU0FBUyxHQUFHamUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUksT0FBUixDQUFnQixJQUFoQixDQUFoQjtBQUNBLE1BQUl1TixNQUFNLEdBQUdxSSxTQUFTLENBQUM1YixJQUFWLENBQWUsUUFBZixDQUFiO0FBQ0EsTUFBSXdWLEdBQUcsR0FBR29HLFNBQVMsQ0FBQ2hlLElBQVYsQ0FBZSxtQ0FBZixFQUFvRGdKLGNBQXBELEVBQVY7O0FBRUEsTUFBR2pKLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JpSSxNQUFoQixHQUF5QixDQUE1QixFQUErQjtBQUMzQixRQUFJaVcsQ0FBQyxHQUFHQyxPQUFPLENBQUMsb0RBQUQsQ0FBZjs7QUFDQSxRQUFHRCxDQUFDLEtBQUssSUFBVCxFQUFlO0FBQ1gsYUFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFFRCxNQUFHLENBQUNELFNBQVMsQ0FBQ3BWLFFBQVYsQ0FBbUIsU0FBbkIsQ0FBSixFQUFtQztBQUMvQjVGLGlGQUFXLENBQUMsa0JBQUQsQ0FBWDtBQUNBLFdBQU8sS0FBUDtBQUNIOztBQUVEakQsR0FBQyxDQUFDdUMsSUFBRixDQUFPO0FBQ0hDLFFBQUksRUFBRSxLQURIO0FBRUg0YixZQUFRLEVBQUUsTUFGUDtBQUdIbGUsT0FBRyxFQUFFMFYsTUFIRjtBQUlIdlQsUUFBSSxFQUFFd1YsR0FKSDtBQUtIbFYsV0FBTyxFQUFFLGlCQUFVZ1EsSUFBVixFQUFpQjtBQUN0QnNMLGVBQVMsQ0FBQ3JkLFdBQVYsQ0FBc0IsU0FBdEI7QUFDQVosT0FBQyxDQUFDbUcsTUFBRixDQUFTO0FBQ0xuRCxlQUFPLEVBQUUyUCxJQUFJLENBQUMzUDtBQURULE9BQVQsRUFFRTtBQUNFUixZQUFJLEVBQUVtUSxJQUFJLENBQUNuUTtBQURiLE9BRkY7QUFLSCxLQVpFO0FBYUhDLFNBQUssRUFBRSxlQUFVNGIsS0FBVixFQUFpQkMsU0FBakIsRUFBNEI7QUFDL0IsVUFBSUQsS0FBSyxDQUFDM2IsWUFBTixJQUFzQjJiLEtBQUssQ0FBQzNiLFlBQU4sQ0FBbUJxRyxjQUFuQixDQUFrQyxRQUFsQyxDQUExQixFQUF1RTtBQUNuRS9JLFNBQUMsQ0FBQ2tMLElBQUYsQ0FBUW1ULEtBQUssQ0FBQzNiLFlBQU4sQ0FBbUJRLE1BQTNCLEVBQW1DLFVBQVNxYixRQUFULEVBQW1COWIsS0FBbkIsRUFBMkI7QUFDMUR6QyxXQUFDLENBQUNrTCxJQUFGLENBQVF6SSxLQUFSLEVBQWUsVUFBUytiLFVBQVQsRUFBcUJ4YixPQUFyQixFQUErQjtBQUMxQ2hELGFBQUMsQ0FBQ21HLE1BQUYsQ0FBUztBQUNMbkQscUJBQU8sRUFBRUE7QUFESixhQUFULEVBRUU7QUFDRVIsa0JBQUksRUFBRTtBQURSLGFBRkY7QUFLSCxXQU5EO0FBT0gsU0FSRDtBQVNILE9BVkQsTUFVTztBQUNIK0osY0FBTSxDQUFDekosUUFBUCxDQUFnQnFHLE1BQWhCO0FBQ0g7QUFDSjtBQTNCRSxHQUFQO0FBOEJBLFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUN6REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBS0F4SCwrQ0FBUSxDQUFDOGMsWUFBVCxHQUF3QixLQUF4QjtBQUVBOzs7O0FBR0F6ZSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVrTCxJQUFmLENBQW9Cd1QsOERBQXBCO0FBRUExZSxDQUFDLENBQUMrSyxRQUFELENBQUQsQ0FFS0ssS0FGTCxDQUVXLFlBQVk7QUFDZjs7O0FBR0FwRSwyRUFBUSxDQUFDb0gsU0FBVCxDQUFtQjZFLHlFQUFuQixFQUFzQyxVQUFDNVEsSUFBRCxFQUFPaU0sSUFBUCxFQUFnQjtBQUNsRHRILDZFQUFRLENBQUN1SCxXQUFULENBQXFCRixvRUFBckI7QUFDQXJILDZFQUFRLENBQUN1SCxXQUFULENBQXFCTSxxRUFBckI7QUFDSCxHQUhEO0FBS0E7Ozs7QUFHQTdPLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXNhLFdBQVY7QUFFQXRhLEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIwQixLQUFqQixDQUF1QnFjLDJEQUF2QjtBQUNILENBakJMO0FBbUJJOzs7QUFuQkosQ0FzQkt6YyxFQXRCTCxDQXNCUSxPQXRCUixFQXNCaUIsY0F0QmpCLEVBc0JpQzBXLDZEQXRCakM7QUF3Qkk7OztBQXhCSixDQTJCSzFXLEVBM0JMLENBMkJRLE9BM0JSLEVBMkJpQixzQkEzQmpCLEVBMkJ5QyxZQUFZO0FBQzdDLE1BQU15UixLQUFLLEdBQUcsSUFBZDs7QUFDQSxNQUFNNEwsVUFBVSxHQUFHM2UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixFQUFzQi9JLElBQXRCLENBQTJCLGFBQTNCLENBQW5CO0FBRUE0UywrREFBVyxDQUFDQyxJQUFaLENBQWlCQyxLQUFqQjtBQUVBL0wsMkVBQVEsQ0FBQ29ILFNBQVQsQ0FBbUJDLG9FQUFuQixFQUFpQyxVQUFDaE0sSUFBRCxFQUFPaU0sSUFBUCxFQUFnQjtBQUM3Q3RILDZFQUFRLENBQUN1SCxXQUFULENBQXFCRixvRUFBckIsRUFBbUNDLElBQW5DO0FBQ0FxUSxjQUFVLENBQUNqZCxLQUFYO0FBQ0gsR0FIRDtBQUlILENBckNMLEVBdUNLSixFQXZDTCxDQXVDUSxPQXZDUixFQXVDaUIsYUF2Q2pCLEVBdUNnQzBjLDBEQXZDaEM7QUF5Q0k7OztBQXpDSixDQTRDSzFjLEVBNUNMLENBNENRLE9BNUNSLEVBNENpQixzQkE1Q2pCLEVBNEN5QyxZQUFZO0FBQzdDLE1BQU15UixLQUFLLEdBQUcsSUFBZDs7QUFFQUMsK0RBQVcsQ0FBQ0YsSUFBWixDQUFpQkMsS0FBakI7QUFDSCxDQWhETDtBQWtESTs7O0FBbERKLENBcURLelIsRUFyREwsQ0FxRFEsT0FyRFIsRUFxRGlCLGVBckRqQixFQXFEa0MsWUFBWTtBQUN0Q3RCLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdKLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0JGLFFBQXRCLENBQStCLFNBQS9CO0FBQ0E5SSxHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCa1EsSUFBakI7QUFDSCxDQXhETDtBQTBESTs7O0FBMURKLENBNkRLNU8sRUE3REwsQ0E2RFEsT0E3RFIsRUE2RGlCLFdBN0RqQixFQTZEOEJ1SSxpRUE3RDlCLEVBOERLdkksRUE5REwsQ0E4RFEsT0E5RFIsRUE4RGlCLHNCQTlEakIsRUE4RHlDdUksaUVBOUR6QyxFQStES3ZJLEVBL0RMLENBK0RRLE9BL0RSLEVBK0RpQiw2QkEvRGpCLEVBK0RnRHVJLGlFQS9EaEQsRUFnRUt2SSxFQWhFTCxDQWdFUSxRQWhFUixFQWdFa0IsMkJBaEVsQixFQWdFK0N1SSxpRUFoRS9DLEU7Ozs7Ozs7Ozs7OztBQ3hCQSw2Q0FBTStVLGFBQWEsR0FBRyxHQUF0QjtBQUNBLElBQU1DLFlBQVksR0FBRSxHQUFwQjtBQUVBN2UsQ0FBQyxDQUFDK0ssUUFBRCxDQUFELENBRUtLLEtBRkwsQ0FFVyxZQUFXO0FBQ2QsTUFBTTlGLE9BQU8sR0FBR3RGLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWUMsSUFBWixDQUFpQiw2QkFBakIsQ0FBaEI7QUFDQSxNQUFJNmUsU0FBUyxHQUFHLENBQWhCO0FBQ0F4WixTQUFPLENBQUM0RixJQUFSLENBQWEsVUFBVTZJLENBQVYsRUFBYTRELENBQWIsRUFBZ0I7QUFDekJtSCxhQUFTLEdBQUc5ZSxDQUFDLENBQUMyWCxDQUFELENBQUQsQ0FBS3ZOLEdBQUwsRUFBWjs7QUFDQSxRQUFHMFUsU0FBUyxLQUFLRixhQUFkLElBQStCRSxTQUFTLEtBQUtELFlBQWhELEVBQThEO0FBQzFEN2UsT0FBQyxDQUFDMlgsQ0FBRCxDQUFELENBQUszTyxPQUFMLENBQWEsY0FBYixFQUE2Qi9JLElBQTdCLENBQWtDLGNBQWxDLEVBQWtEQSxJQUFsRCxDQUF1RCxZQUF2RCxFQUFxRWlRLElBQXJFO0FBQ0gsS0FGRCxNQUVPO0FBQ0hsUSxPQUFDLENBQUMyWCxDQUFELENBQUQsQ0FBSzNPLE9BQUwsQ0FBYSxjQUFiLEVBQTZCL0ksSUFBN0IsQ0FBa0MsY0FBbEMsRUFBa0RBLElBQWxELENBQXVELFlBQXZELEVBQXFFa1EsSUFBckU7QUFDSDtBQUNKLEdBUEQ7QUFRSCxDQWJMO0FBZUk7OztBQWZKLENBa0JLN08sRUFsQkwsQ0FrQlEsY0FsQlIsRUFrQndCLFlBbEJ4QixFQWtCc0MsWUFBWTtBQUMxQyxNQUFNeWQsS0FBSyxHQUFHL2UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixjQUFoQixDQUFkO0FBQ0EsTUFBTThWLFNBQVMsR0FBR0MsS0FBSyxDQUFDOWUsSUFBTixDQUFXLFVBQVgsRUFBdUJtSyxHQUF2QixFQUFsQjs7QUFDQSxNQUFHMFUsU0FBUyxLQUFLRixhQUFkLElBQStCRSxTQUFTLEtBQUtELFlBQWhELEVBQThEO0FBQzFERSxTQUFLLENBQUM5ZSxJQUFOLENBQVcsY0FBWCxFQUEyQkEsSUFBM0IsQ0FBZ0MsWUFBaEMsRUFBOENpUSxJQUE5QztBQUNILEdBRkQsTUFFTztBQUNINk8sU0FBSyxDQUFDOWUsSUFBTixDQUFXLGNBQVgsRUFBMkJBLElBQTNCLENBQWdDLFlBQWhDLEVBQThDa1EsSUFBOUM7QUFDSDtBQUNKLENBMUJMO0FBNEJJOzs7QUE1QkosQ0ErQks3TyxFQS9CTCxDQStCUSxVQS9CUixFQStCb0IwSyxNQS9CcEIsQ0ErQjJCLFVBQVVpRyxJQUFWLEVBQWdCO0FBQ25DLE1BQU02TSxTQUFTLEdBQUc5ZSxDQUFDLENBQUNpUyxJQUFJLENBQUMzSyxNQUFOLENBQUQsQ0FBZThDLEdBQWYsRUFBbEI7O0FBQ0EsTUFBRzBVLFNBQVMsS0FBS0YsYUFBZCxJQUErQkUsU0FBUyxLQUFLRCxZQUFoRCxFQUE4RDtBQUMxRDdlLEtBQUMsQ0FBQ2lTLElBQUksQ0FBQzNLLE1BQU4sQ0FBRCxDQUFlMEIsT0FBZixDQUF1QixjQUF2QixFQUF1Qy9JLElBQXZDLENBQTRDLGNBQTVDLEVBQTREQSxJQUE1RCxDQUFpRSxZQUFqRSxFQUErRWlRLElBQS9FO0FBQ0gsR0FGRCxNQUVPO0FBQ0hsUSxLQUFDLENBQUNpUyxJQUFJLENBQUMzSyxNQUFOLENBQUQsQ0FBZTBCLE9BQWYsQ0FBdUIsY0FBdkIsRUFBdUMvSSxJQUF2QyxDQUE0QyxjQUE1QyxFQUE0REEsSUFBNUQsQ0FBaUUsWUFBakUsRUFBK0VrUSxJQUEvRTtBQUNIO0FBQ0osQ0F0Q0wsRTs7Ozs7Ozs7Ozs7O0FDSEEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBTyxJQUFNNk8seUJBQXlCLEdBQUcsMkJBQWxDLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7OztBQUdlLHlFQUFVN1gsQ0FBVixFQUFhO0FBQ3hCQSxHQUFDLENBQUNDLGNBQUY7QUFFQSxNQUFNaUMsVUFBVSxHQUFHckosQ0FBQyxDQUFDLElBQUQsQ0FBcEI7QUFDQSxNQUFNaWYsS0FBSyxHQUFHNVYsVUFBVSxDQUFDTCxPQUFYLENBQW1CLGNBQW5CLEVBQW1DL0ksSUFBbkMsQ0FBd0MsT0FBeEMsQ0FBZDtBQUNBLE1BQU1pZixZQUFZLEdBQUc3VixVQUFVLENBQUNoSCxJQUFYLENBQWdCLFlBQWhCLENBQXJCO0FBQ0EsTUFBSTJOLE9BQU8sR0FBRzlHLFFBQVEsQ0FBQ0csVUFBVSxDQUFDaEgsSUFBWCxDQUFnQixPQUFoQixDQUFELENBQXRCO0FBQ0EsTUFBTWtGLFFBQVEsR0FBR3ZILENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQ1o4RSxJQURZLEdBRVppRCxPQUZZLENBRUosSUFBSUMsTUFBSixDQUFXLGdCQUFYLEVBQTZCLEdBQTdCLENBRkksRUFFK0JrWCxZQUYvQixFQUdablgsT0FIWSxDQUdKLElBQUlDLE1BQUosQ0FBVyxTQUFYLEVBQXNCLEdBQXRCLENBSEksRUFHd0JnSSxPQUFPLEVBSC9CLENBQWpCO0FBS0EzRyxZQUFVLENBQUNoSCxJQUFYLENBQWdCLE9BQWhCLEVBQXlCMk4sT0FBekI7QUFFQWlQLE9BQUssQ0FBQ3phLE1BQU4sQ0FBYStDLFFBQWI7QUFFQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFPZSx5RUFBVUosQ0FBVixFQUFhO0FBQ3hCQSxHQUFDLENBQUNDLGNBQUY7QUFFQSxNQUFNK1gsY0FBYyxHQUFHLE1BQXZCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsWUFBN0I7QUFDQSxNQUFNL1YsVUFBVSxHQUFHckosQ0FBQyxDQUFDLElBQUQsQ0FBcEI7QUFDQSxNQUFNcWYsaUJBQWlCLEdBQUdyZixDQUFDLENBQUMsc0JBQUQsQ0FBM0I7QUFFQSxNQUFJc2YsS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFFQUYsbUJBQWlCLENBQUNwZixJQUFsQixDQUF1QiwwQkFBdkIsRUFBbURpTCxJQUFuRCxDQUF3RCxZQUFZO0FBQ2hFLFFBQUlzVSxRQUFRLEdBQUd4ZixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLGFBQWhCLEVBQStCK0ksS0FBL0IsRUFBZjtBQUNBLFFBQUkwTixrQkFBa0IsR0FBR2pXLG1FQUFXLENBQUN4SixDQUFDLENBQUMsSUFBRCxDQUFGLENBQXBDOztBQUNBLFNBQUssSUFBSTJYLENBQVQsSUFBYzhILGtCQUFkLEVBQWtDO0FBQzlCLFVBQU1DLFFBQVEsYUFBTU4sb0JBQU4sY0FBOEJJLFFBQTlCLGVBQTJDN0gsQ0FBM0MsTUFBZDtBQUNBNEgsZ0JBQVUsQ0FBQ0csUUFBRCxDQUFWLEdBQXVCRCxrQkFBa0IsQ0FBQzlILENBQUQsQ0FBekM7QUFDSDs7QUFFRDNYLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ULElBQVIsQ0FBYSxVQUFiLEVBQXlCbFQsSUFBekIsQ0FBOEIsbUJBQTlCLEVBQW1EaUwsSUFBbkQsQ0FBd0QsVUFBVTZHLEtBQVYsRUFBaUI7QUFDckUsVUFBSTVFLFFBQVEsR0FBRzNELG1FQUFXLENBQUN4SixDQUFDLENBQUMsSUFBRCxDQUFGLENBQTFCOztBQUNBLFdBQUssSUFBSTJYLEVBQVQsSUFBY3hLLFFBQWQsRUFBd0I7QUFDcEIsWUFBTXVTLFNBQVEsYUFBTVAsY0FBTixjQUF3Qk0sa0JBQWtCLENBQUM5UyxFQUEzQyxlQUFrRG9GLEtBQWxELGVBQTRENEYsRUFBNUQsTUFBZDs7QUFDQTJILGFBQUssQ0FBQ0ksU0FBRCxDQUFMLEdBQWtCdlMsUUFBUSxDQUFDd0ssRUFBRCxDQUExQjtBQUNBMkgsYUFBSyxXQUFJSCxjQUFKLGNBQXNCTSxrQkFBa0IsQ0FBQzlTLEVBQXpDLGVBQWdEb0YsS0FBaEQsbUJBQUwsR0FBNkUwTixrQkFBa0IsQ0FBQzlTLEVBQWhHO0FBQ0g7QUFDSixLQVBEO0FBUUgsR0FoQkQ7QUFrQkEsTUFBSXJFLHNFQUFKLENBQVNlLFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixNQUFoQixDQUFULEVBQ0tuSCxNQURMLENBQ1ksS0FEWixFQUVLQyxJQUZMLG1CQUVjaWQsS0FGZCxNQUV3QkMsVUFGeEIsR0FHSzVjLE9BSEwsQ0FHYSxVQUFBbEIsUUFBUSxFQUFJO0FBQ2pCekIsS0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFja0wsSUFBZCxDQUFtQixVQUFVNkcsS0FBVixFQUFpQjtBQUNoQy9SLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVksV0FBUixDQUFvQixTQUFwQjtBQUNILEtBRkQ7QUFHQXNCLGtGQUFjLENBQUNULFFBQUQsQ0FBZDtBQUNILEdBUkwsRUFTSytHLElBVEw7QUFXQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDcEREO0FBQUE7Ozs7QUFJZSwyRUFBWTtBQUN2QixNQUFNNEUsV0FBVyxHQUFHcE4sQ0FBQyxDQUFDLElBQUQsQ0FBckI7QUFDQSxNQUFNMmYsUUFBUSxHQUFHdlMsV0FBVyxDQUFDcEUsT0FBWixDQUFvQixRQUFwQixFQUE4Qi9JLElBQTlCLENBQW1DLFFBQW5DLENBQWpCO0FBRUEwZixVQUFRLENBQUN0UyxJQUFULENBQWMsU0FBZCxFQUF5QixLQUF6QjtBQUNBc1MsVUFBUSxDQUFDL2UsV0FBVCxDQUFxQixTQUFyQjtBQUVBd00sYUFBVyxDQUFDQyxJQUFaLENBQWlCLFNBQWpCLEVBQTRCLElBQTVCO0FBQ0FELGFBQVcsQ0FBQ3RFLFFBQVosQ0FBcUIsU0FBckI7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDYkQ7QUFBQTtBQUFBO0FBRUE7Ozs7QUFHZSwyRUFBWTtBQUN2QixNQUFJOE4sa0RBQUosQ0FBYSxJQUFiLEVBQW1CO0FBQ2ZDLFNBQUssRUFBRSxZQURRO0FBRWZDLHFCQUFpQixFQUFFLElBRko7QUFHZkMsU0FBSyxFQUFFLGVBQVM1UCxDQUFULEVBQVk7QUFDZixVQUFJMlEsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUI7QUFDM0IvWCxTQUFDLENBQUNtSCxDQUFDLENBQUM4SyxJQUFILENBQUQsQ0FBVWpKLE9BQVYsQ0FBa0IsUUFBbEIsRUFBNEIvSSxJQUE1QixDQUFpQyxlQUFqQyxFQUFrRGlMLElBQWxELENBQXVELFlBQVk7QUFDL0RsTCxXQUFDLENBQUMsSUFBRCxDQUFELENBQVE4SSxRQUFSLENBQWlCLFNBQWpCO0FBQ0gsU0FGRDtBQUlBaVAsZUFBTyxDQUFDO0FBQ0o2SCxlQUFLLEVBQUU1ZixDQUFDLENBQUNtSCxDQUFDLENBQUM4SyxJQUFILENBQUQsQ0FBVWhTLElBQVYsQ0FBZSxRQUFmLENBREg7QUFFSnlNLGdCQUFNLEVBQUUxTSxDQUFDLENBQUNtSCxDQUFDLENBQUM4SyxJQUFILENBQUQsQ0FBVWpKLE9BQVYsQ0FBa0IsUUFBbEI7QUFGSixTQUFELENBQVA7QUFJSCxPQVREO0FBVUg7QUFkYyxHQUFuQjtBQWdCSCxDOzs7Ozs7Ozs7Ozs7O0FDdEJEO0FBQUE7QUFBQTtBQUVBOzs7O0FBR2UsMkVBQVk7QUFDdkIsTUFBSTROLGtEQUFKLENBQWEsSUFBYixFQUFtQjtBQUNmQyxTQUFLLEVBQUUsT0FEUTtBQUVmQyxxQkFBaUIsRUFBRSxJQUZKO0FBR2ZDLFNBQUssRUFBRSxlQUFTNVAsQ0FBVCxFQUFZO0FBQ2YsVUFBSTJRLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CO0FBQzNCL1gsU0FBQyxDQUFDbUgsQ0FBQyxDQUFDOEssSUFBSCxDQUFELENBQVVqSixPQUFWLENBQWtCLGVBQWxCLEVBQW1DRixRQUFuQyxDQUE0QyxTQUE1QztBQUVBaVAsZUFBTyxDQUFDO0FBQ0o2SCxlQUFLLEVBQUU1ZixDQUFDLENBQUNtSCxDQUFDLENBQUM4SyxJQUFILENBQUQsQ0FBVWhTLElBQVYsQ0FBZSxRQUFmLENBREg7QUFFSnlNLGdCQUFNLEVBQUUxTSxDQUFDLENBQUNtSCxDQUFDLENBQUM4SyxJQUFILENBQUQsQ0FBVWpKLE9BQVYsQ0FBa0IsUUFBbEI7QUFGSixTQUFELENBQVA7QUFJSCxPQVBELEVBT0dxSSxJQVBILENBT1EsVUFBQWhQLElBQUksRUFBSTtBQUNaLFlBQUlBLElBQUksQ0FBQ3FLLE1BQUwsQ0FBWXpNLElBQVosQ0FBaUIsc0JBQWpCLEVBQXlDZ0ksTUFBN0MsRUFBcUQ7QUFDakQ1RixjQUFJLENBQUN1ZCxLQUFMLENBQVdoZixXQUFYLENBQXVCLFNBQXZCO0FBQ0F5QixjQUFJLENBQUN1ZCxLQUFMLENBQVd2UyxJQUFYLENBQWdCLFNBQWhCLEVBQTJCLEtBQTNCO0FBQ0g7QUFDSixPQVpEO0FBYUg7QUFqQmMsR0FBbkI7QUFtQkgsQzs7Ozs7Ozs7Ozs7OztBQ3pCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHZSwyRUFBWTtBQUN2QnJHLDJFQUFRLENBQUNvSCxTQUFULENBQW1CNFEsb0VBQW5CLEVBQThDLFlBQU07QUFDaEQ7OztBQUdBTixnQkFBWSxDQUFDM1QsUUFBUSxDQUFDb0UsY0FBVCxDQUF3QixVQUF4QixDQUFELEVBQXNDcEUsUUFBUSxDQUFDb0UsY0FBVCxDQUF3QixhQUF4QixDQUF0QyxDQUFaO0FBRUE7Ozs7QUFHQXVQLGdCQUFZLENBQUMzVCxRQUFRLENBQUNvRSxjQUFULENBQXdCLGdCQUF4QixDQUFELEVBQTRDcEUsUUFBUSxDQUFDb0UsY0FBVCxDQUF3QixtQkFBeEIsQ0FBNUMsQ0FBWjtBQUNILEdBVkQ7QUFXSDtBQUVEOzs7Ozs7Ozs7QUFRQSxTQUFTdVAsWUFBVCxDQUFzQnhQLGVBQXRCLEVBQXVDMlEsaUJBQXZDLEVBQTBEO0FBQ3RELE1BQUksQ0FBQzNRLGVBQUwsRUFBc0I7QUFDbEIsV0FBTyxLQUFQO0FBQ0g7QUFFRDs7Ozs7QUFHQSxNQUFNRyxlQUFlLEdBQUcsSUFBSUMsMkVBQUosQ0FBb0JKLGVBQXBCLEVBQ25CSyxZQURtQixDQUNOTCxlQUFlLENBQUM3SyxPQUFoQixDQUF3Qm5FLEdBRGxCLEVBRW5CdUMsS0FGbUIsQ0FFYixVQUFDakIsSUFBRCxFQUFPQyxRQUFQLEVBQW9CO0FBQ3ZCTyxnRkFBWSxDQUFDUCxRQUFELENBQVo7QUFDQXpCLEtBQUMsQ0FBQzZmLGlCQUFELENBQUQsQ0FBcUJ6VixHQUFyQixDQUF5QixFQUF6QjtBQUNILEdBTG1CLEVBTW5Cb0YsTUFObUIsQ0FNWixZQUFNO0FBQ1Z4UCxLQUFDLENBQUM2ZixpQkFBRCxDQUFELENBQXFCelYsR0FBckIsQ0FBeUIsRUFBekI7QUFDSCxHQVJtQixFQVNuQnpILE9BVG1CLENBU1gsVUFBQ25CLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUN6QnpCLEtBQUMsQ0FBQ2tQLGVBQUQsQ0FBRCxDQUFtQmpQLElBQW5CLENBQXdCLG1CQUF4QixFQUE2Q3NCLElBQTdDLENBQWtERSxRQUFRLENBQUNnTyxTQUEzRDtBQUNBb1EscUJBQWlCLENBQUNuUSxLQUFsQixHQUEwQmpPLFFBQVEsQ0FBQ2dPLFNBQW5DO0FBQ0gsR0FabUIsQ0FBeEI7QUFjQTs7OztBQUdBLE1BQUlvUSxpQkFBaUIsQ0FBQ25RLEtBQWxCLENBQXdCekgsTUFBNUIsRUFBb0M7QUFDaENvSCxtQkFBZSxDQUNWTSxVQURMLENBRVFrUSxpQkFBaUIsQ0FBQ25RLEtBRjFCLEVBR1FFLG1FQUFXLENBQUNWLGVBQWUsQ0FBQzdLLE9BQWhCLENBQXdCd0wsTUFBekIsRUFBaUNnUSxpQkFBaUIsQ0FBQ25RLEtBQW5ELENBSG5CO0FBS0g7QUFFRDs7Ozs7QUFHQUwsaUJBQWUsQ0FBQ1MsS0FBaEI7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDcEVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQW9ELG1FQUFRO0FBRVJsVCxDQUFDLENBQUMrSyxRQUFEO0FBQ0c7OztBQURKLENBSUt6SixFQUpMLENBSVEsUUFKUixFQUlrQixRQUpsQixFQUk0QndlLDREQUo1QjtBQU1JOzs7QUFOSixDQVNLeGUsRUFUTCxDQVNRLE9BVFIsRUFTaUIsT0FUakIsRUFTMEIsWUFBWTtBQUM5QnRCLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdKLE9BQVIsQ0FBZ0IsZUFBaEIsRUFBaUNGLFFBQWpDLENBQTBDLFNBQTFDO0FBQ0gsQ0FYTDtBQWFJOzs7QUFiSixDQWdCS3NDLEtBaEJMLENBZ0JXLFlBQVk7QUFDZjs7O0FBR0FwTCxHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQjhJLFFBQXJCLENBQThCLFNBQTlCO0FBRUE7Ozs7QUFHQTlJLEdBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTBCLEtBQWYsQ0FBcUJxZSx5REFBckI7QUFFQTs7OztBQUdBL2YsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjBCLEtBQWhCLENBQXNCa0ssMERBQXRCO0FBRUE7Ozs7QUFHQTVMLEdBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZWtMLElBQWYsQ0FBb0JnTSxxRkFBcEI7QUFFQTs7OztBQUdBbFgsR0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJrTCxJQUExQixDQUErQjhVLCtGQUEvQjtBQUNILENBekNMLEU7Ozs7Ozs7Ozs7OztBQ2RBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7O0FBS08sU0FBU2hJLFNBQVQsR0FBcUI7QUFDeEIsTUFBTVgsV0FBVyxHQUFHclgsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9LLEdBQWxCLEVBQXBCO0FBQ0EsTUFBTWtOLEtBQUssR0FBR3RYLENBQUMsQ0FBQyxrQkFBRCxDQUFmO0FBQ0EsTUFBTXVYLE1BQU0sR0FBR3ZYLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCOEUsSUFBdkIsRUFBZjtBQUNBLE1BQU0wUyxNQUFNLEdBQUdGLEtBQUssQ0FBQ3JYLElBQU4sQ0FBVyxJQUFYLEVBQWlCd1gsSUFBakIsR0FBd0J4WCxJQUF4QixDQUE2QixhQUE3QixFQUE0Q21LLEdBQTVDLEVBQWY7QUFDQSxNQUFNc04sV0FBVyxHQUFJeE8sUUFBUSxDQUFDc08sTUFBRCxDQUFSLEdBQW1CLENBQXBCLElBQTBCLENBQTlDOztBQUVBLE9BQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sV0FBcEIsRUFBaUNNLENBQUMsRUFBbEMsRUFBc0M7QUFDbENMLFNBQUssQ0FBQzlTLE1BQU4sQ0FBYStTLE1BQU0sQ0FBQ3hQLE9BQVAsQ0FBZSxZQUFmLEVBQTZCNFAsQ0FBQyxHQUFHRCxXQUFqQyxDQUFiO0FBQ0FKLFNBQUssQ0FBQ3JYLElBQU4sQ0FBVyxVQUFYLEVBQXVCcUYsT0FBdkI7QUFFQWdTLFNBQUssQ0FBQ3JYLElBQU4sQ0FBVyxpQkFBWCxFQUNLc0YsY0FETCxDQUNvQjtBQUNaQyxZQUFNLEVBQUUscUJBREk7QUFFWkMsZUFBUyxFQUFFO0FBRkMsS0FEcEI7QUFLSDs7QUFFRCxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7QUFLTyxTQUFTc1ksUUFBVCxHQUFxQjtBQUN4QixNQUFNbGIsS0FBSyxHQUFHN0MsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsSUFBUixDQUFhLE9BQWIsQ0FBZDtBQUNBLE1BQU1pVixLQUFLLEdBQUd0WCxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkMsSUFBN0IsQ0FBa0MsVUFBbEMsQ0FBZDtBQUNBLE1BQU1vQyxJQUFJLEdBQUdyQyxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkMsSUFBN0IsQ0FBa0Msb0RBQWxDLEVBQXdGZ0osY0FBeEYsRUFBYjs7QUFFQSxNQUFHNUcsSUFBSSxDQUFDNEYsTUFBTCxLQUFnQixDQUFuQixFQUFzQjtBQUNsQixXQUFPLEtBQVA7QUFDSDs7QUFFRCxNQUFJSyxzRUFBSixDQUFTekYsS0FBVCxFQUNLVCxNQURMLENBQ1ksTUFEWixFQUVLQyxJQUZMLENBRVVBLElBRlYsRUFHS21HLElBSEw7QUFLQThPLE9BQUssQ0FBQ3BNLElBQU4sQ0FBVyxVQUFVNkksQ0FBVixFQUFhOUIsSUFBYixFQUFtQjtBQUMxQmpTLEtBQUMsQ0FBQ2lTLElBQUQsQ0FBRCxDQUFRclIsV0FBUixDQUFvQixTQUFwQjtBQUNILEdBRkQ7QUFJQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDM0JEO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQVosQ0FBQyxDQUFDK0ssUUFBRDtBQUVHOzs7QUFGSixDQUtLekosRUFMTCxDQUtRLE9BTFIsRUFLaUIsY0FMakIsRUFLaUMwVyw2REFMakM7QUFPSTs7O0FBUEosQ0FVSzFXLEVBVkwsQ0FVUSxPQVZSLEVBVWlCLGFBVmpCLEVBVWdDLFlBQVk7QUFDcEN0QixHQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLElBQWhCLEVBQXNCbkksTUFBdEI7QUFDSCxDQVpMO0FBY0k7OztBQWRKLENBaUJLUyxFQWpCTCxDQWlCUSxPQWpCUixFQWlCaUIsT0FqQmpCLEVBaUIwQixZQUFZO0FBQzlCdEIsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixFQUFzQkYsUUFBdEIsQ0FBK0IsU0FBL0I7QUFDSCxDQW5CTDtBQXFCSTs7O0FBckJKLENBd0JLeEgsRUF4QkwsQ0F3QlEsVUF4QlIsRUF3Qm9CMEssTUF4QnBCLENBd0IyQixVQUFVaUcsSUFBVixFQUFnQjtBQUNuQ2pTLEdBQUMsQ0FBQ2lTLElBQUksQ0FBQzNLLE1BQU4sQ0FBRCxDQUFlMEIsT0FBZixDQUF1QixJQUF2QixFQUE2QkYsUUFBN0IsQ0FBc0MsU0FBdEM7QUFDSCxDQTFCTDtBQTRCSTs7OztBQTVCSixDQWdDS3hILEVBaENMLENBZ0NRLE9BaENSLEVBZ0NpQixjQWhDakIsRUFnQ2lDLFlBQVk7QUFDckN0QixHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0ssR0FBbEIsQ0FBc0IsS0FBS3NGLEtBQTNCO0FBQ0gsQ0FsQ0w7QUFvQ0E7Ozs7QUFHQTFQLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IwQixLQUFoQixDQUFzQnFjLDJEQUF0QixFOzs7Ozs7Ozs7Ozs7QUMxQ0EvZCwwQ0FBQyxDQUFDK0ssUUFBRCxDQUFELENBRUt6SixFQUZMLENBRVEsT0FGUixFQUVpQixJQUZqQixFQUV1QixZQUFZO0FBQzNCdEIsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRQyxJQUFSLENBQWEsSUFBYixFQUFtQmlMLElBQW5CLENBQXdCLFlBQVk7QUFDaEMsUUFBR2xMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVKLElBQVIsQ0FBYSxPQUFiLENBQUgsRUFBMEI7QUFDdEJ2SixPQUFDLENBQUMsSUFBRCxDQUFELENBQVFtTCxVQUFSLENBQW1CLE9BQW5CO0FBQ0gsS0FGRCxNQUVPO0FBQ0huTCxPQUFDLENBQUMsSUFBRCxDQUFELENBQVFxSyxHQUFSLENBQVksWUFBWixFQUEwQixTQUExQjtBQUNIO0FBQ0osR0FORDtBQU9ILENBVkwsRTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7QUFLTyxTQUFTMk4sU0FBVCxHQUFxQjtBQUN4QixNQUFNWCxXQUFXLEdBQUdyWCxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0ssR0FBbEIsRUFBcEI7QUFDQSxNQUFNa04sS0FBSyxHQUFHdFgsQ0FBQyxDQUFDLGdCQUFELENBQWY7QUFDQSxNQUFNdVgsTUFBTSxHQUFHdlgsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUI4RSxJQUFyQixFQUFmO0FBQ0EsTUFBTTBTLE1BQU0sR0FBR0YsS0FBSyxDQUFDclgsSUFBTixDQUFXLElBQVgsRUFBaUJ3WCxJQUFqQixHQUF3QnhYLElBQXhCLENBQTZCLFdBQTdCLEVBQTBDbUssR0FBMUMsRUFBZjtBQUNBLE1BQU1zTixXQUFXLEdBQUl4TyxRQUFRLENBQUNzTyxNQUFELENBQVIsR0FBbUIsQ0FBcEIsSUFBMEIsQ0FBOUM7O0FBRUEsT0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixXQUFwQixFQUFpQ00sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQ0wsU0FBSyxDQUFDOVMsTUFBTixDQUFhK1MsTUFBTSxDQUFDeFAsT0FBUCxDQUFlLGFBQWYsRUFBOEI0UCxDQUFDLEdBQUdELFdBQWxDLENBQWI7QUFDQUosU0FBSyxDQUFDclgsSUFBTixDQUFXLFVBQVgsRUFBdUJxRixPQUF2QjtBQUNIOztBQUVELFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7O0FBS08sU0FBUzJhLGNBQVQsR0FBMkI7QUFDOUIsTUFBTTVkLElBQUksR0FBR3JDLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCQyxJQUEzQixDQUFnQyxpQ0FBaEMsRUFBbUVnSixjQUFuRSxFQUFiOztBQUVBLE1BQUc1RyxJQUFJLENBQUM0RixNQUFSLEVBQWdCO0FBQ1osUUFBSUssc0VBQUosQ0FBU3RJLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFDLElBQVIsQ0FBYSxPQUFiLENBQVQsRUFDS0QsTUFETCxDQUNZLEtBRFosRUFFS0MsSUFGTCxDQUVVQSxJQUZWLEVBR0ttRyxJQUhMO0FBSUg7O0FBRUQsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUF4SSxDQUFDLENBQUMrSyxRQUFEO0FBRUc7OztBQUZKLENBS0t6SixFQUxMLENBS1EsT0FMUixFQUtpQixjQUxqQixFQUtpQzBXLDZEQUxqQztBQU9JOzs7QUFQSixDQVVLMVcsRUFWTCxDQVVRLE9BVlIsRUFVaUIsYUFWakIsRUFVZ0MyZSx1RUFWaEM7QUFZSTs7O0FBWkosQ0FlSzNlLEVBZkwsQ0FlUSxPQWZSLEVBZWlCLE9BZmpCLEVBZTBCLFlBQVk7QUFDOUJ0QixHQUFDLENBQUMsSUFBRCxDQUFELENBQVFnSixPQUFSLENBQWdCLElBQWhCLEVBQXNCRixRQUF0QixDQUErQixTQUEvQjtBQUNILENBakJMO0FBbUJJOzs7QUFuQkosQ0FzQkt4SCxFQXRCTCxDQXNCUSxVQXRCUixFQXNCb0IwSyxNQXRCcEIsQ0FzQjJCLFVBQVVpRyxJQUFWLEVBQWdCO0FBQ25DalMsR0FBQyxDQUFDaVMsSUFBSSxDQUFDM0ssTUFBTixDQUFELENBQWUwQixPQUFmLENBQXVCLElBQXZCLEVBQTZCRixRQUE3QixDQUFzQyxTQUF0QztBQUNILENBeEJMO0FBMEJJOzs7QUExQkosQ0E2Qkt4SCxFQTdCTCxDQTZCUSxPQTdCUixFQTZCaUIsYUE3QmpCLEVBNkJnQyxZQUFZO0FBQ3BDdEIsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixJQUFoQixFQUFzQm5JLE1BQXRCO0FBQ0gsQ0EvQkw7QUFpQ0k7Ozs7QUFqQ0osQ0FxQ0tTLEVBckNMLENBcUNRLE9BckNSLEVBcUNpQixjQXJDakIsRUFxQ2lDLFlBQVk7QUFDckN0QixHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0ssR0FBbEIsQ0FBc0IsS0FBS3NGLEtBQTNCO0FBQ0gsQ0F2Q0wsRTs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBTyxJQUFNd1Esa0JBQWtCLEdBQUcsb0JBQTNCLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSwyRUFBWTtBQUN2QmxaLDJFQUFRLENBQUNvSCxTQUFULENBQW1COFIsNkRBQW5CLEVBQXVDLFVBQUM3ZCxJQUFELEVBQU9pTSxJQUFQLEVBQWdCO0FBQ25EdEgsNkVBQVEsQ0FBQ3VILFdBQVQsQ0FBcUIyUiw2REFBckIsRUFBeUM1UixJQUF6QztBQUVBdE8sS0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUN1RixjQUF6QyxDQUF3RDtBQUNwREMsWUFBTSxFQUFFLFlBRDRDO0FBRXBEQyxlQUFTLEVBQUUsSUFGeUM7QUFHcERDLGFBQU8sRUFBRTtBQUgyQyxLQUF4RDtBQUtILEdBUkQ7QUFTSCxDOzs7Ozs7Ozs7Ozs7O0FDYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTFGLENBQUMsQ0FBQytLLFFBQUQsQ0FBRCxDQUNLekosRUFETCxDQUNRLE9BRFIsRUFDaUIsc0JBRGpCLEVBQ3lDdVIsNkRBRHpDLEVBRUt2UixFQUZMLENBRVEsT0FGUixFQUVpQixzQkFGakIsRUFFeUMwUiw2REFGekM7QUFJQTs7Ozs7QUFJQWhULENBQUMsQ0FBQyxZQUFELENBQUQsQ0FDSzBCLEtBREwsQ0FDV3dSLDJEQURYLEU7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTWlOLGtCQUFrQixHQUFRLG9CQUFoQztBQUNBLElBQU1DLHFCQUFxQixHQUFLLHVCQUFoQztBQUNBLElBQU1DLGVBQWUsR0FBVyxpQkFBaEM7QUFDQSxJQUFNQyxZQUFZLEdBQWMsY0FBaEM7QUFDQSxJQUFNQyxhQUFhLEdBQWEsZUFBaEM7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBVSxrQkFBaEM7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxlQUF6QixDOzs7Ozs7Ozs7Ozs7QUNQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR2UseUVBQVV0WixDQUFWLEVBQWE7QUFDeEJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU0vRSxJQUFJLEdBQUdtSCxtRUFBVyxDQUFDeEosQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJDLElBQXZCLENBQTRCLE9BQTVCLENBQUQsQ0FBeEI7QUFFQSxNQUFJcUksc0VBQUosQ0FBU3RJLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCdUosSUFBdEIsQ0FBMkIsTUFBM0IsQ0FBVCxFQUNLbkgsTUFETCxDQUNZLE1BRFosRUFFS0MsSUFGTCxDQUVVO0FBQUNBLFFBQUksRUFBSkE7QUFBRCxHQUZWLEVBR0tNLE9BSEwsQ0FHYSxVQUFBZ1EsSUFBSSxFQUFJO0FBQ2IsUUFBSUEsSUFBSSxDQUFDblEsSUFBTCxLQUFjLFNBQWxCLEVBQTZCO0FBQ3pCLFVBQUkwSyxJQUFJLEdBQUdsTixDQUFDLENBQUMyUyxJQUFJLENBQUN0USxJQUFOLENBQVo7QUFDQXJDLE9BQUMsQ0FBQyxNQUFNMlMsSUFBSSxDQUFDdkssU0FBWixDQUFELENBQXdCRyxXQUF4QixDQUFvQzJFLElBQXBDO0FBQ0EzSixxRkFBYSxDQUFDLDBCQUFELENBQWI7QUFDSDtBQUNKLEdBVEwsRUFVS2lGLElBVkw7QUFZQSxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQUE7QUFBQTtBQUVBOzs7O0FBR2UseUVBQVVyQixDQUFWLEVBQWE7QUFDeEJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUVBLE1BQUlrQixzRUFBSixDQUFTdEksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0osT0FBUixDQUFnQixHQUFoQixFQUFxQk8sSUFBckIsQ0FBMEIsTUFBMUIsQ0FBVCxFQUNLbkgsTUFETCxDQUNZLE1BRFosRUFFS0MsSUFGTCxDQUVVO0FBQUNxZSxlQUFXLEVBQUUxZ0IsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJvSyxHQUExQjtBQUFkLEdBRlYsRUFHS3pILE9BSEwsQ0FHYSxVQUFBdWIsQ0FBQyxFQUFJO0FBQ1YsUUFBSUEsQ0FBQyxDQUFDeUMsTUFBRixLQUFhLElBQWpCLEVBQXVCO0FBQ25CM2dCLE9BQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCb0ssR0FBMUIsQ0FBOEIsRUFBOUI7QUFDQXBLLE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CNGIsT0FBcEIsQ0FBNEIsYUFBYXNDLENBQUMsQ0FBQzBDLEtBQUYsQ0FBUUYsV0FBckIsR0FBbUMsV0FBbkMsR0FBaUR4QyxDQUFDLENBQUMyQyxVQUFuRCxHQUFnRSxXQUFoRSxHQUE4RTNDLENBQUMsQ0FBQzRDLFVBQWhGLEdBQTZGLDREQUE3RixHQUE0SjVDLENBQUMsQ0FBQzBDLEtBQUYsQ0FBUWpVLEVBQXBLLEdBQXlLLGlTQUFyTTtBQUNIO0FBQ0osR0FSTCxFQVNLbkUsSUFUTDtBQVdBLFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7QUFBQTs7O0FBR2UsMkVBQVk7QUFDdkIsTUFBSXVZLGVBQWUsR0FBRy9nQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvSyxHQUFSLEVBQXRCO0FBQ0FwSyxHQUFDLENBQUMsSUFBRCxDQUFELENBQVFxSSxPQUFSLENBQWdCLE1BQWhCLEVBQXdCcEksSUFBeEIsQ0FBNkIsd0JBQTdCLEVBQXVEaUwsSUFBdkQsQ0FBNEQsWUFBVTtBQUNsRSxRQUFJNlYsZUFBZSxJQUFJL2dCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9LLEdBQVIsRUFBdkIsRUFBc0M7QUFDbENwSyxPQUFDLENBQUMsSUFBRCxDQUFELENBQVFvSyxHQUFSLENBQVkyVyxlQUFaLEVBQTZCL1UsTUFBN0I7QUFDSDtBQUNKLEdBSkQ7QUFLSCxDOzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7O0FBR2UsMkVBQVk7QUFDdkIsTUFBSW5KLEtBQUssR0FBRzdDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFDLElBQVIsQ0FBYSxPQUFiLElBQXdCLGNBQXhCLEdBQXlDckMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0ssR0FBUixFQUFyRDtBQUNBLE1BQUk5QixzRUFBSixDQUFTekYsS0FBVCxFQUNLVCxNQURMLENBQ1ksS0FEWixFQUVLTyxPQUZMLENBRWEsVUFBQWxCLFFBQVEsRUFBSTtBQUNqQnpCLEtBQUMsWUFBS3lnQix3RUFBTCxFQUFELENBQTBCbFksV0FBMUIsQ0FBc0M5RyxRQUF0QztBQUNILEdBSkwsRUFLSytHLElBTEw7QUFNSCxDOzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTs7O0FBR2UsMkVBQVk7QUFDdkIsTUFBTXdZLGFBQWEsR0FBR2hoQixDQUFDLENBQUMsa0NBQUQsQ0FBdkI7O0FBQ0EsTUFBSUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0ssR0FBUixLQUFnQixDQUFwQixFQUF1QjtBQUNuQjRXLGlCQUFhLENBQUM3USxJQUFkO0FBQ0gsR0FGRCxNQUVPO0FBQ0g2USxpQkFBYSxDQUFDOVEsSUFBZDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7OztBQUdlLDJFQUFZO0FBQ3ZCLE1BQU0rUSxjQUFjLEdBQUdqaEIsQ0FBQyxDQUFDLGtCQUFELENBQXhCOztBQUNBLE1BQUdBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBWLEVBQVIsQ0FBVyxVQUFYLENBQUgsRUFBMkI7QUFDdkJ1TCxrQkFBYyxDQUFDOVYsVUFBZixDQUEwQixVQUExQjtBQUNILEdBRkQsTUFFTztBQUNIOFYsa0JBQWMsQ0FBQzFYLElBQWYsQ0FBb0IsVUFBcEIsRUFBZ0MsVUFBaEM7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7Ozs7QUNWRDtBQUFBOzs7QUFHZSx5RUFBVXBDLENBQVYsRUFBYTtBQUN4QkEsR0FBQyxDQUFDQyxjQUFGO0FBRUEsTUFBTXlLLGNBQWMsR0FBRzdSLENBQUMsQ0FBQyxJQUFELENBQXhCO0FBQ0E2UixnQkFBYyxDQUFDRCxXQUFmLENBQTJCLE1BQTNCO0FBQ0FDLGdCQUFjLENBQUNxUCxRQUFmLENBQXdCLGNBQXhCLEVBQXdDdFAsV0FBeEMsQ0FBb0QsTUFBcEQ7QUFDQTVSLEdBQUMsQ0FBQyxzQkFBc0I2UixjQUFjLENBQUN4UCxJQUFmLENBQW9CLFdBQXBCLENBQXZCLENBQUQsQ0FBMER5QyxJQUExRCxDQUErRCxFQUEvRDtBQUVBLFNBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUFBO0FBQUE7QUFFQTs7Ozs7QUFJZSx5RUFBVXFDLENBQVYsRUFBYTtBQUN4QkEsR0FBQyxDQUFDQyxjQUFGO0FBRUEsTUFBTXlLLGNBQWMsR0FBRzdSLENBQUMsQ0FBQyxJQUFELENBQXhCO0FBQ0EsTUFBSW1oQixTQUFTLEdBQUd0UCxjQUFjLENBQUN4UCxJQUFmLENBQW9CLFdBQXBCLENBQWhCO0FBRUF3UCxnQkFBYyxDQUFDRCxXQUFmLENBQTJCLE1BQTNCO0FBQ0FDLGdCQUFjLENBQUNxUCxRQUFmLENBQXdCLGNBQXhCLEVBQXdDdFAsV0FBeEMsQ0FBb0QsTUFBcEQ7QUFFQXdQLFVBQVEsQ0FBQ0Msc0JBQXNCLEdBQUcsYUFBekIsR0FBeUNGLFNBQTFDLEVBQXFEbmhCLENBQUMsQ0FBQyxzQkFBc0JtaEIsU0FBdkIsQ0FBdEQsQ0FBUjtBQUVBLFNBQU8sS0FBUDtBQUNIO0FBRUQ7Ozs7QUFHQSxTQUFTQyxRQUFULENBQWtCeEwsTUFBbEIsRUFBMEJyRixPQUExQixFQUFtQztBQUMvQixNQUFJakksc0VBQUosQ0FBU3NOLE1BQVQsRUFDS3hULE1BREwsQ0FDWSxLQURaLEVBRUtPLE9BRkwsQ0FFYSxVQUFBbEIsUUFBUSxFQUFJO0FBQ2pCLFFBQU02ZixLQUFLLEdBQUd0aEIsQ0FBQyxDQUFDeUIsUUFBRCxDQUFmO0FBQ0E2ZixTQUFLLENBQUNyaEIsSUFBTixDQUFXLGlCQUFYLEVBQThCc2hCLE9BQTlCLENBQXNDO0FBQ2xDblosZUFBUyxFQUFFLE1BRHVCO0FBRWxDdEQsVUFBSSxFQUFFLElBRjRCO0FBR2xDcUQsYUFBTyxFQUFFLE9BSHlCO0FBSWxDZ1osZUFBUyxFQUFFLE9BSnVCO0FBS2xDdmMsYUFBTyxFQUFFLG1CQUFZO0FBQ2pCLGVBQU8sZUFBZTVFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFDLElBQVIsQ0FBYSxNQUFiLENBQWYsR0FBc0MsSUFBN0M7QUFDSDtBQVBpQyxLQUF0QztBQVNBa08sV0FBTyxDQUFDaEksV0FBUixDQUFvQitZLEtBQXBCO0FBQ0gsR0FkTCxFQWVLOVksSUFmTDtBQWdCSCxDOzs7Ozs7Ozs7Ozs7O0FDeENEO0FBQUE7OztBQUdlLDJFQUFZO0FBQ3ZCLE1BQU1nWixhQUFhLEdBQUd4aEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUksT0FBUixDQUFnQixRQUFoQixFQUEwQnBJLElBQTFCLENBQStCLG1CQUEvQixDQUF0QjtBQUNBLE1BQU13aEIsYUFBYSxHQUFHemhCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFJLE9BQVIsQ0FBZ0IsT0FBaEIsRUFBeUJwSSxJQUF6QixDQUE4QixhQUE5QixDQUF0QjtBQUVBLE1BQUl5aEIsY0FBYyxHQUFHRixhQUFhLENBQUNwWCxHQUFkLE1BQXVCLENBQTVDOztBQUNBLE1BQUlzWCxjQUFjLEtBQUssQ0FBdkIsRUFBMEI7QUFDdEJBLGtCQUFjLEdBQUdELGFBQWEsQ0FBQ3haLE1BQS9CO0FBQ0F1WixpQkFBYSxDQUFDcFgsR0FBZCxDQUFrQnNYLGNBQWxCO0FBQ0g7O0FBRUQsTUFBSTFoQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVEwVixFQUFSLENBQVcsVUFBWCxDQUFKLEVBQTRCO0FBQ3hCK0wsaUJBQWEsQ0FBQ3ZXLElBQWQsQ0FBbUIsWUFBVTtBQUN6QixVQUFJd1csY0FBYyxHQUFHLENBQXJCLEVBQXdCO0FBQ3BCLGFBQUt2SCxPQUFMLEdBQWUsSUFBZjtBQUNBdUgsc0JBQWM7QUFDakI7QUFDSixLQUxEO0FBTUgsR0FQRCxNQU9PO0FBQ0hELGlCQUFhLENBQUN2VyxJQUFkLENBQW1CLFlBQVU7QUFDekIsV0FBS2lQLE9BQUwsR0FBZSxLQUFmO0FBQ0gsS0FGRDtBQUdIO0FBR0osQzs7Ozs7Ozs7Ozs7OztBQzNCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR2UsMkVBQVk7QUFBQTs7QUFDdkJuVCwyRUFBUSxDQUFDb0gsU0FBVCxDQUFtQm9TLHdFQUFuQixFQUFxQyxVQUFDL2UsUUFBRCxFQUFXNk0sSUFBWCxFQUFvQjtBQUNyRHRILDZFQUFRLENBQUN1SCxXQUFULENBQXFCaVMsd0VBQXJCLEVBQXVDbFMsSUFBdkM7O0FBRUEsUUFBSTdNLFFBQVEsQ0FBQ2UsSUFBVCxJQUFpQixTQUFyQixFQUFnQztBQUM1QixVQUFJOEYsc0VBQUosQ0FBU3RJLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUWdKLE9BQVIsQ0FBZ0IsTUFBaEIsRUFBd0JPLElBQXhCLENBQTZCLFFBQTdCLENBQVQsRUFDS25ILE1BREwsQ0FDWSxLQURaLEVBRUtPLE9BRkwsQ0FFYSxVQUFBbEIsUUFBUSxFQUFJO0FBQ2pCekIsU0FBQyxZQUFLeWdCLHdFQUFMLEVBQUQsQ0FBMEJsWSxXQUExQixDQUFzQzlHLFFBQXRDO0FBQ0gsT0FKTCxFQUtLK0csSUFMTDtBQU1IO0FBQ0osR0FYRDtBQVlILEM7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7O0FBR2UsMkVBQVk7QUFDdkJ4QiwyRUFBUSxDQUFDb0gsU0FBVCxDQUFtQmtTLHVEQUFuQixFQUFpQyxVQUFBM04sSUFBSSxFQUFJO0FBQ3JDLFFBQUlBLElBQUksQ0FBQ25RLElBQUwsSUFBYSxTQUFqQixFQUE0QjtBQUN4QnhDLE9BQUMsQ0FBQyxzQkFBc0IyUyxJQUFJLENBQUN0USxJQUFMLENBQVVzZixXQUFqQyxDQUFELENBQStDL2dCLFdBQS9DLENBQTJELFFBQTNEO0FBQ0FaLE9BQUMsQ0FBQyxtQkFBbUIyUyxJQUFJLENBQUN0USxJQUFMLENBQVVzZixXQUE5QixDQUFELENBQTRDN1ksUUFBNUMsQ0FBcUQsUUFBckQ7QUFDQTlJLE9BQUMsQ0FBQyxzQkFBc0IyUyxJQUFJLENBQUN0USxJQUFMLENBQVVzZixXQUFqQyxDQUFELENBQStDN2MsSUFBL0MsQ0FBb0Q2TixJQUFJLENBQUN0USxJQUFMLENBQVV1ZixXQUE5RDtBQUNIO0FBQ0osR0FORDtBQU9ILEM7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7QUFHZSwyRUFBWTtBQUN2QjVhLDJFQUFRLENBQUNvSCxTQUFULENBQW1CaVMsMERBQW5CLEVBQW9DLFVBQUExTixJQUFJLEVBQUk7QUFDeEMsUUFBSUEsSUFBSSxDQUFDblEsSUFBTCxJQUFhLFNBQWpCLEVBQTRCO0FBQ3hCeEMsT0FBQyxDQUFDLHNCQUFzQjJTLElBQUksQ0FBQ3RRLElBQUwsQ0FBVXNmLFdBQWpDLENBQUQsQ0FBK0M3WSxRQUEvQyxDQUF3RCxRQUF4RDtBQUNBOUksT0FBQyxDQUFDLG1CQUFtQjJTLElBQUksQ0FBQ3RRLElBQUwsQ0FBVXNmLFdBQTlCLENBQUQsQ0FBNEMvZ0IsV0FBNUMsQ0FBd0QsUUFBeEQ7QUFDQVosT0FBQyxDQUFDLHNCQUFzQjJTLElBQUksQ0FBQ3RRLElBQUwsQ0FBVXNmLFdBQWpDLENBQUQsQ0FBK0M3YyxJQUEvQyxDQUFvRDZOLElBQUksQ0FBQ3RRLElBQUwsQ0FBVXVmLFdBQTlEO0FBQ0g7QUFDSixHQU5EO0FBT0gsQzs7Ozs7Ozs7Ozs7OztBQ2REO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUdlLDJFQUFZO0FBQ3ZCNWEsMkVBQVEsQ0FBQ29ILFNBQVQsQ0FBbUJtUyx3REFBbkIsRUFBa0MsVUFBQTVOLElBQUksRUFBSTtBQUN0QzNTLEtBQUMsWUFBS3lnQiwyREFBTCxFQUFELENBQTBCbFksV0FBMUIsQ0FBc0NvSyxJQUF0QztBQUNILEdBRkQ7QUFHSCxDOzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7O0FBR2UsMkVBQVk7QUFDdkIzTCwyRUFBUSxDQUFDb0gsU0FBVCxDQUFtQitSLDZEQUFuQixFQUF1QyxVQUFBOWQsSUFBSSxFQUFJO0FBQzNDckMsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJ1SSxXQUE5QixDQUEwQ2xHLElBQTFDO0FBQ0gsR0FGRDtBQUdILEM7Ozs7Ozs7Ozs7Ozs7QUNWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR2UsMkVBQVk7QUFDdkIyRSwyRUFBUSxDQUFDb0gsU0FBVCxDQUFtQmdTLGdFQUFuQixFQUEwQyxVQUFBek4sSUFBSSxFQUFJO0FBQzlDLFFBQUl6RixJQUFJLEdBQUdsTixDQUFDLENBQUMyUyxJQUFJLENBQUN0USxJQUFOLENBQVo7QUFFQXJDLEtBQUMsQ0FBQyxNQUFNMlMsSUFBSSxDQUFDdkssU0FBWixDQUFELENBQXdCRyxXQUF4QixDQUFvQzJFLElBQXBDO0FBQ0FBLFFBQUksQ0FBQ2pOLElBQUwsQ0FBVSxVQUFWLEVBQXNCcUYsT0FBdEI7QUFDUjtBQUNNLEdBTkY7QUFPSCxDOzs7Ozs7Ozs7Ozs7O0FDZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBdWMsMkVBQWdCO0FBRWhCOzs7O0FBR0FDLDZFQUFrQjtBQUVsQjs7OztBQUdBQyx5RUFBYztBQUVkOzs7O0FBR0FDLHNFQUFXO0FBRVg7Ozs7QUFHQUMseUVBQWM7QUFFZGppQixDQUFDLENBQUMrSyxRQUFEO0FBRUc7OztBQUZKLENBS0t6SixFQUxMLENBS1EsT0FMUixFQUtpQixjQUxqQixFQUtpQzRnQixxRUFMakM7QUFPSTs7O0FBUEosQ0FVSzVnQixFQVZMLENBVVEsUUFWUixFQVVrQixzQkFWbEIsRUFVMEM2Z0IsaUVBVjFDO0FBWUk7OztBQVpKLENBZUs3Z0IsRUFmTCxDQWVRLFFBZlIsRUFla0Isc0JBZmxCLEVBZTBDOGdCLHVFQWYxQztBQWlCSTs7O0FBakJKLENBb0JLOWdCLEVBcEJMLENBb0JRLE9BcEJSLEVBb0JpQixjQXBCakIsRUFvQmlDK2dCLHFFQXBCakM7QUFzQkk7OztBQXRCSixDQXlCSy9nQixFQXpCTCxDQXlCUSxRQXpCUixFQXlCa0IsY0F6QmxCLEVBeUJrQ2doQiw2REF6QmxDO0FBMkJJOzs7QUEzQkosQ0E4QktoaEIsRUE5QkwsQ0E4QlEsUUE5QlIsRUE4QmtCLHdCQTlCbEIsRUE4QjRDaWhCLHFFQTlCNUM7QUFnQ0k7OztBQWhDSixDQW1DS2poQixFQW5DTCxDQW1DUSxPQW5DUixFQW1DaUIsMENBbkNqQixFQW1DNkRraEIsa0VBbkM3RDtBQW9DSTs7O0FBcENKLENBdUNNbGhCLEVBdkNOLENBdUNTLFFBdkNULEVBdUNtQixzQkF2Q25CLEVBdUMyQ21oQixrRUF2QzNDO0FBeUNJOzs7QUF6Q0osQ0E0Q0tuaEIsRUE1Q0wsQ0E0Q1EsT0E1Q1IsRUE0Q2lCLGNBNUNqQixFQTRDaUNvaEIsNkRBNUNqQztBQThDSTs7O0FBOUNKLENBaURLcGhCLEVBakRMLENBaURRLE9BakRSLEVBaURpQixrQkFqRGpCLEVBaURxQ3FoQixpRUFqRHJDLEU7Ozs7Ozs7Ozs7OztBQzNDQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qKlxuICogQmFzZSBzaXplc1xuICpcbiAqIEB0eXBlIHt7c206IHN0cmluZywgbGc6IHN0cmluZ319XG4gKi9cbmV4cG9ydCBjb25zdCBTSVpFUyA9IHtcbiAgICBzbTogJ3NtJyxcbiAgICBtZDogJ21kJyxcbiAgICBsZzogJ2xnJyxcbn07XG4iLCJpbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuXG4vKipcbiAqIExvYWRpbmcgdGV4dFxuICogSXQgd2lsbCBiZSBzaG93biBhZnRlciB0aGUgc3RhcnQgb2YgaW1hZ2UgdXBsb2FkaW5nXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgTE9BRElOR19URVhUID0gJ0xvYWRpbmcuLi4nO1xuXG4vKipcbiAqIERyb3B6b25lIGJ1aWxkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkcm9wem9uZUNvbnRhaW5lclxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihkcm9wem9uZUNvbnRhaW5lciwgY29uZmlnID0ge30pIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9kcm9wem9uZUNvbnRhaW5lciA9IGRyb3B6b25lQ29udGFpbmVyO1xuICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24gPSAkKGRyb3B6b25lQ29udGFpbmVyKS5maW5kKCcuZHJvcHpvbmUtY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHVybCB0byB1cGxvYWRpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBzZXRVcGxvYWRVcmwodXJsKSB7XG4gICAgICAgIHRoaXMuX3VwbG9hZFVybCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGRlZmF1bHQgcHJldmlldyBpbWFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgc2V0UHJldmlldyhuYW1lLCB1cmwpIHtcbiAgICAgICAgdGhpcy5fcHJldmlldyA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGVycm9yIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGVycm9yKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2Vycm9yQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbmNlbCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBjYW5jZWwoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fY2FuY2VsQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHN1Y2Nlc3MgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgc3VjY2VzcyhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9zdWNjZXNzQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgZHJvcHpvbmVcbiAgICAgKiBAcmV0dXJucyB7RHJvcHpvbmV9XG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBfZHJvcHpvbmVCdWlsZGVyID0gdGhpcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbCBhZnRlciBmYWlsXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkcm9wem9uZUZhaWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKF9kcm9wem9uZUJ1aWxkZXIuX2Ryb3B6b25lQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnZHotc3RhcnRlZCcpO1xuICAgICAgICAgICAgJChfZHJvcHpvbmVCdWlsZGVyLl9kcm9wem9uZUNvbnRhaW5lcikuZmluZCgnLmR6LXByZXZpZXcnKS5yZW1vdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgdXJsOiB0aGlzLl91cGxvYWRVcmwsXG4gICAgICAgICAgICB0aHVtYm5haWxXaWR0aDogbnVsbCxcbiAgICAgICAgICAgIHRodW1ibmFpbEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgIHVwbG9hZE11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6ICdpbWFnZS8qJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC1jc3JmLXRva2VuJzogQ1NSRl9UT0tFTlxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogU2V0IGN1cnJlbnQgaW1hZ2UgaW4gdGhlIGRyb3B6b25lIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX3ByZXZpZXcgJiYgISFfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LnVybCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJhZGRlZGZpbGVcIiwgX2Ryb3B6b25lQnVpbGRlci5fcHJldmlldyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInRodW1ibmFpbFwiLCBfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LCBfZHJvcHpvbmVCdWlsZGVyLl9wcmV2aWV3LnVybCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQWRkZWQgZmlsZSBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5vbihcImFkZGVkZmlsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoX2Ryb3B6b25lQnVpbGRlci5fZHJvcHpvbmVDb250YWluZXIpLmZpbmQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChMT0FESU5HX1RFWFQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJlcnJvclwiLCBmdW5jdGlvbiAoZmlsZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcHpvbmVGYWlsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIV9kcm9wem9uZUJ1aWxkZXIuX2Vycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX2Vycm9yQ2FsbGJhY2soZmlsZSwgcmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFN1Y2Nlc3MgaGFuZGxlclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMub24oXCJzdWNjZXNzXCIsIGZ1bmN0aW9uIChmaWxlLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9zdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kcm9wem9uZUJ1aWxkZXIuX3N1Y2Nlc3NDYWxsYmFjayhmaWxlLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhciBidXR0b24gaGFuZGxlclxuICAgICAgICAgKiBDbGVhciBmaWxlIGluZm8gaW4gZHJvcHpvbmVcbiAgICAgICAgICovXG4gICAgICAgIGlmICghIXRoaXMuX2NhbmNlbEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsQnV0dG9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkcm9wem9uZUZhaWwoKTtcbiAgICAgICAgICAgICAgICBpZiAoISFfZHJvcHpvbmVCdWlsZGVyLl9jYW5jZWxDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBfZHJvcHpvbmVCdWlsZGVyLl9jYW5jZWxDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gbmV3IERyb3B6b25lKHRoaXMuX2Ryb3B6b25lQ29udGFpbmVyLCB7Li4uY29uZmlnLCAuLi50aGlzLl9jb25maWd9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4vZXJyb3JIYW5kbGVyJztcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiLi9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIEhUVFAgUmVxdWVzdCBCdWlsZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICAgIGNvbnN0cnVjdG9yKHVybCkge1xuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuX21ldGhvZCA9ICdnZXQnO1xuICAgICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3JIYW5kbGVyO1xuICAgICAgICB0aGlzLl9zdWNjZXNzID0gc3VjY2Vzc0hhbmRsZXI7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuXG4gICAgbWV0aG9kKG1ldGhvZCkge1xuICAgICAgICB0aGlzLl9tZXRob2QgPSBtZXRob2Q7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVycm9yKGZuKSB7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3VjY2Vzcyhmbikge1xuICAgICAgICB0aGlzLl9zdWNjZXNzID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29tcGxldGUoZm4pIHtcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZW5kKCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB0aGlzLl91cmwsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLl9tZXRob2QsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLl9kYXRhLFxuICAgICAgICAgICAgZXJyb3I6IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFyZXNwb25zZS5yZXNwb25zZUpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IocmVzcG9uc2UucmVzcG9uc2VKU09OKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogdGhpcy5fc3VjY2VzcyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiB0aGlzLl9jb21wbGV0ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBCYXNlIGVycm9yIGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byB0aGUgcm91dGVcbiAgICAgKi9cbiAgICBpZiAoISFyZXNwb25zZS5yb3V0ZSkge1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gcmVzcG9uc2Uucm91dGU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IG1haW4gZXJyb3IgbWVzc2FnZVxuICAgICAqL1xuICAgIGlmICghIXJlc3BvbnNlLm1lc3NhZ2UpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBhbGwgbWVzc2FnZXNcbiAgICAgKi9cbiAgICBpZighIXJlc3BvbnNlLmVycm9ycykge1xuICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZS5lcnJvcnMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZS5lcnJvcnNba2V5XS5tYXAoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGlmeUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9SZXF1ZXN0QnVpbGRlcic7XG4iLCJpbXBvcnQgbm90aWZ5U3VjY2VzcyBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5U3VjY2Vzc1wiO1xuXG4vKipcbiAqIEJhc2UgZXJyb3IgaGFuZGxlclxuICpcbiAqIEBwYXJhbSByZXNwb25zZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAvKipcbiAgICAgKiBTaG93IG1haW4gZXJyb3IgbWVzc2FnZVxuICAgICAqL1xuICAgIGlmICghIXJlc3BvbnNlLm1lc3NhZ2UpIHtcbiAgICAgICAgbm90aWZ5U3VjY2VzcyhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vbW9kYWwnO1xuaW1wb3J0ICcuL29ic2VydmVyJztcbmltcG9ydCAnLi9odHRwJztcbiIsImNvbnN0IG1vZGFsc0NvbnRhaW5lciA9ICQoJ2JvZHknKTtcblxuY29uc3QgTU9EQUxfU0laRVMgPSB7XG4gICAgc206ICdtb2RhbC1zbScsXG4gICAgbWQ6ICdtb2RhbC1tZCcsXG4gICAgbGc6ICdtb2RhbC1sZycsXG59O1xuXG4vKipcbiAqIFVuaXF1ZSBpbmRleCBvZiB0aGUgbW9kYWxcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5sZXQgbW9kYWxJbmRleCA9IDA7XG5cbi8qKlxuICogQ291bnRlciBvZiB0aGUgbW9kYWxzIGF0IHRoZSBwYWdlXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqL1xubGV0IG1vZGFsQ291bnRlciA9IDA7XG5cbi8qKlxuICogTW9kYWwgQnVpbGRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbW9kYWxJbmRleCsrO1xuICAgICAgICB0aGlzLl9pZCA9ICdtb2RhbHMtY29udGFpbmVyLWl0ZW0tJyArIG1vZGFsSW5kZXg7XG4gICAgfVxuXG4gICAgc2l6ZShzaXplKSB7XG4gICAgICAgIGlmICghIU1PREFMX1NJWkVTW3NpemVdKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gTU9EQUxfU0laRVNbc2l6ZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoZWFkZXIoaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuX2hlYWRlciA9IGhlYWRlcjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBib2R5KGJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keSA9IGJvZHk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZm9vdGVyKGZvb3Rlcikge1xuICAgICAgICB0aGlzLl9mb290ZXIgPSBmb290ZXI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGF0YXNldChkYXRhc2V0KSB7XG4gICAgICAgIHRoaXMuX2RhdGFzZXQgPSBkYXRhc2V0O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9nZXRJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIF9nZXRTaXplKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9zaXplID8gdGhpcy5fc2l6ZSA6IE1PREFMX1NJWkVTLm1kO1xuICAgIH1cblxuICAgIF9nZXRIZWFkZXIoKSB7XG4gICAgICAgIGlmICghIXRoaXMuX2hlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JHt0aGlzLl9oZWFkZXJ9PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBfZ2V0Rm9vdGVyKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKCEhdGhpcy5fZm9vdGVyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAkKGA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+PC9kaXY+YClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCQoYFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIGApKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZm9vdGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9nZXRCb2R5KCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKCEhdGhpcy5fYm9keSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gJChgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj48L2Rpdj5gKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fYm9keSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGwgYmVmb3JlIGJ1aWxkIG1vZGFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBiZWZvcmVCdWlsZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9iZWZvcmVCdWlsZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9iZWZvcmVCdWlsZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2JlZm9yZUJ1aWxkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbCBhZnRlciBidWlsZCBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgYWZ0ZXJCdWlsZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9hZnRlckJ1aWxkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2FmdGVyQnVpbGQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYWZ0ZXJCdWlsZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2FmdGVyQnVpbGRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsIGFmdGVyIGNsb3NlIG1vZGFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBvbkNsb3NlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfb25DbG9zZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vbkNsb3NlQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2RhbChjb250ZW50KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGRhdGFzZXQgPSBbXTtcbiAgICAgICAgaWYgKCEhdGhpcy5fZGF0YXNldCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLl9kYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgZGF0YXNldC5wdXNoKGBkYXRhLSR7bmFtZX09XCIke3RoaXMuX2RhdGFzZXRbbmFtZV19XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBodG1sID0gJChgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiJHsgdGhpcy5fZ2V0SUQoKSB9XCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiICR7ZGF0YXNldC5qb2luKCcgJyl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkICR7dGhpcy5fZ2V0U2l6ZSgpfVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YCk7XG5cbiAgICAgICAgaWYgKCEhY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5ib2R5KGNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgdGhlIGJlZm9yZUJ1aWxkIGNhbGxiYWNrXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9iZWZvcmVCdWlsZCgpO1xuXG4gICAgICAgIGh0bWwuZmluZCgnLm1vZGFsLWNvbnRlbnQnKVxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9nZXRIZWFkZXIoKSlcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy5fZ2V0Qm9keSgpKVxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLl9nZXRGb290ZXIoKSk7XG5cbiAgICAgICAgaHRtbC5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcblxuICAgICAgICBodG1sLmZpbmQoJy5kYXRlcGlja2VyJylcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnLnRhYmxlc3RpY2t5aGVhZGVyJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XG5cbiAgICAgICAgbW9kYWxzQ29udGFpbmVyLmFwcGVuZChodG1sKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbCB0aGUgYWZ0ZXJCdWlsZCBjYWxsYmFja1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYWZ0ZXJCdWlsZCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB1cGRhdGUgY291bnRlciBvZiBtb2RhbHMgYXQgdGhlIHBhZ2VcbiAgICAgICAgICovXG4gICAgICAgIG1vZGFsQ291bnRlcisrO1xuXG4gICAgICAgICQoJyMnICsgdGhpcy5fZ2V0SUQoKSlcbiAgICAgICAgICAgIC5vbignaGlkZGVuLmJzLm1vZGFsJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsQ291bnRlci0tO1xuICAgICAgICAgICAgICAgICQoJyMnICsgdGhpcy5fZ2V0SUQoKSlcbiAgICAgICAgICAgICAgICAgICAgLm9mZignaGlkZGVuLmJzLm1vZGFsJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIENhbGwgdGhlIG9uQ2xvc2UgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLl9vbkNsb3NlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1vZGFsKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEdldCBjb3VudGVyIG9mIG1vZGFscyBhdCB0aGUgcGFnZVxuICpcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2RhbENvdW50ZXIoKSB7XG4gICAgcmV0dXJuIG1vZGFsQ291bnRlcjtcbn1cbiIsImltcG9ydCAnLi9Nb2RhbEJ1aWxkZXInXG5pbXBvcnQgJy4vbW9kYWxDb25maXJtJ1xuIiwiaW1wb3J0IHtTSVpFU30gZnJvbSBcImNvbXBvbmVudHMvYm9vdHN0cmFwL2NvbnN0YW50c1wiO1xuaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBNb2RhbCBjb25maXJtXG4gKlxuICogQHBhcmFtIG1lc3NhZ2VcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gbW9kYWxDb25maXJtKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKG1lc3NhZ2UpXG4gICAgICAgIC5mb290ZXIoJCgnPGJ1dHRvbi8+Jywge1xuICAgICAgICAgICAgJ2NsYXNzJzogJ2J0biBidG4tc20gYnRuLXN1Y2Nlc3MnLFxuICAgICAgICAgICAgJ3RleHQnOiAnQ29uZmlybScsXG4gICAgICAgICAgICAnZGF0YS1kaXNtaXNzJzogJ21vZGFsJyxcbiAgICAgICAgICAgICdjbGljayc6IGNhbGxiYWNrXG4gICAgICAgIH0pKVxuICAgICAgICAubW9kYWwoKTtcbn1cbiIsIi8qKlxuICogTm90aWZ5IGhlbHBlclxuICpcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKiBAcGFyYW0gdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3RpZnkobWVzc2FnZSwgdHlwZSkge1xuICAgICQubm90aWZ5KHttZXNzYWdlOiBtZXNzYWdlfSx7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHpfaW5kZXg6IDEwNTFcbiAgICB9KTtcbn1cbiIsImltcG9ydCBub3RpZnkgZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIG5vdGlmeShtZXNzYWdlLCAnZGFuZ2VyJyk7XG59XG4iLCJpbXBvcnQgbm90aWZ5IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBub3RpZnkobWVzc2FnZSwgJ3N1Y2Nlc3MnKTtcbn1cbiIsIi8qKlxuICogRXZlbnQgb2JzZXJ2ZXJcbiAqL1xuY2xhc3MgRXZlbnRPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmliZXJzID0ge307XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlIChldmVudCwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLl9sb2coJ3N1YnNjcmliZScsIGV2ZW50KTtcblxuICAgICAgICBpZiAoIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0ucHVzaChoYW5kbGVyKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkaXNwYXRjaCAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fbG9nKCdkaXNwYXRjaCcsIGV2ZW50KTtcblxuICAgICAgICBpZiAoISF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0uZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGRhdGEsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1bnN1YnNjcmliZSAoZXZlbnQsIHN0YXRlKSB7XG4gICAgICAgIHRoaXMuX2xvZygndW5zdWJzY3JpYmUnLCBldmVudCk7XG5cbiAgICAgICAgaWYgKCEhdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIGlmKCEhc3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmZpbHRlcihoYW5kbGVyID0+IGhhbmRsZXIgIT09IHN0YXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRGVsZXRlIGFsbCBzdWJzY3JpYmVyc1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9sb2cobWV0aG9kLCBldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhtZXRob2QudG9VcHBlckNhc2UoKSwgJzonLCAnWycsIGV2ZW50LCAnXScpO1xuICAgIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgRXZlbnRPYnNlcnZlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcjtcbiIsImltcG9ydCAnLi9FdmVudE9ic2VydmVyJztcbiIsIi8qKlxuICogU2F2ZWQgaXRlbSBub3QgZm91bmRcbiAqXG4gKiBVc2luZyBpbiBmYXN0U2F2ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBTYXZlZEl0ZW1Ob3RGb3VuZCBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdTYXZlZEl0ZW1Ob3RGb3VuZCc7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIH1cbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5cbi8qKlxuICogQWRkIGVtYmVkIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHRhcmdldCA9IGN1cnJlbnRCdXR0b24uZGF0YSgndGFyZ2V0Jyk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ3RlbXBsYXRlJyk7XG4gICAgY29uc3QgaWRQbGFjZWhvbGRlciA9IGN1cnJlbnRCdXR0b24uZGF0YSgnaWRwbGFjZXBvbGRlcicpO1xuXG4gICAgbGV0IHJvd0lkID0gY3VycmVudEJ1dHRvbi5kYXRhKCdyb3dpZCcpO1xuICAgIGN1cnJlbnRCdXR0b24uZGF0YSgncm93aWQnLCArK3Jvd0lkKTtcblxuICAgIGxldCBlbWJlZEZvcm0gPSAkKCcjJysgdGVtcGxhdGUpLmh0bWwoKTtcbiAgICBjb25zdCBlbWJlZEJsb2NrSWQgPSByb3dJZCArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSkudG9TdHJpbmcoMTYpO1xuICAgIGVtYmVkRm9ybSA9IGVtYmVkRm9ybS5yZXBsYWNlKC8lZW1iZWRCbG9ja0lkJS9nLCBlbWJlZEJsb2NrSWQpO1xuXG4gICAgaWYgKCEhaWRQbGFjZWhvbGRlcikge1xuICAgICAgICBlbWJlZEZvcm0gPSBlbWJlZEZvcm0ucmVwbGFjZSggbmV3IFJlZ0V4cChpZFBsYWNlaG9sZGVyLCBcImdcIiksIHJvd0lkKVxuICAgIH1cblxuICAgICQoJyMnICsgdGFyZ2V0KS5hcHBlbmQoZW1iZWRGb3JtKTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGRpc3BhdGNoXG4gICAgICovXG4gICAgY29uc3QgZXZlbnQgPSBjdXJyZW50QnV0dG9uLmRhdGEoJ2V2ZW50Jyk7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50Lmxlbmd0aCkge1xuICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChldmVudCwge1xuICAgICAgICAgICAgZW1iZWRCbG9ja0lkOiBlbWJlZEJsb2NrSWRcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY3VycmVudEJ1dHRvbi50cmlnZ2VyKCdhaV9hbmltYXRpb24nKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKkFqYXggcGFnaW5hdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gJCh0aGlzKS5wYXJlbnRzKCcuYWpheC1wYWdpbmF0aW9uJykuZGF0YSgnY29udGFpbmVyJyk7XG4gICBcbiAgICBuZXcgaHR0cCh0aGlzLmhyZWYpXG4gICAgICAgIC5tZXRob2QoJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICQoJyMnICsgY29udGFpbmVyKS5yZXBsYWNlV2l0aChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuIiwiaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG4vKipcbiAqIE9wZW4gY29uZmlybSBtb2RhbCBiZWZvcmUgYWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkYXRhU2V0ID0gdGhpcy5kYXRhc2V0O1xuICAgIGNvbnN0IHVybCA9IHRoaXMuaHJlZjtcbiAgICBjb25zdCBwYXJlbnRCdXR0b24gPSAkKHRoaXMpO1xuXG4gICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgIC5zaXplKFNJWkVTLnNtKVxuICAgICAgICAuaGVhZGVyKGRhdGFTZXQuaGVhZGVyKVxuICAgICAgICAuZm9vdGVyKFxuICAgICAgICAgICAgJCgnPGJ1dHRvbi8+Jywge1xuICAgICAgICAgICAgICAgICdjbGFzcyc6IChkYXRhU2V0LmJ0bkNsYXNzIHx8ICdidG4tc20gYnRuLXN1Y2Nlc3MnKSArICcgYnRuJyxcbiAgICAgICAgICAgICAgICAndGV4dCc6IGRhdGFTZXQuYnRuTmFtZSB8fCAnQ29uZmlybScsXG4gICAgICAgICAgICAgICAgJ2NsaWNrJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YVNldC5oYXNPd25Qcm9wZXJ0eSgnd2l0aEZvcm0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHBhcmVudEJ1dHRvbi5jbG9zZXN0KCdmb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5ldyBodHRwKHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWV0aG9kKGRhdGFTZXQubWV0aG9kIHx8ICdnZXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWRhdGFTZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goZGF0YVNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRhU2V0LnJlbG9hZCkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRhdGFTZXQuZGlzbWlzcykgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLm1vZGFsKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSBjdXJyZW50QnRuLmNsb3Nlc3QoJy5mYXN0LXNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmICghIWRhdGFTZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChkYXRhU2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5kYXRhKGdldEZvcm1EYXRhKHNhdmVkSXRlbSkpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtTYXZlZEl0ZW1Ob3RGb3VuZH0gZnJvbSBcImV4Y2VwdGlvbnMvU2F2ZWRJdGVtTm90Rm91bmRcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBDT05UQUlORVJfU0VMRUNUT1IgPSAnLmZhc3Qtc2F2ZS1wYWdlLWNvbnRhaW5lcic7XG5leHBvcnQgY29uc3QgUEFHRV9TQVZFRCA9ICdQQUdFX1NBVkVEJztcbmV4cG9ydCBjb25zdCBVUERBVEVfU0FWRV9BTExfQlVUVE9OID0gJ1VQREFURV9TQVZFX0FMTF9CVVRUT04nO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKENPTlRBSU5FUl9TRUxFQ1RPUik7XG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMuZGF0YXNldDtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcbiAgICAgKi9cbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlmICghIWRhdGFTZXQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaChkYXRhU2V0LmV2ZW50LCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogTWFyayBmb3JtJ3MgZWxlbWVudHMgYXMgY2hhbmdlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYW5nZWQoKSB7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xufVxuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZGF0ZUZvcm1hdCA9ICdZWVlZLU1NLUREJztcbiAgICBjb25zdCBkYXRlUmFuZ2VJbnB1dHMgPSAkKCcjZGF0ZS1yYW5nZS1pbnB1dHMnKTtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9ICQoJyNkYXRlLXJhbmdlLXNlbGVjdCcpLmZpbmQoJzpzZWxlY3RlZCcpO1xuICAgIGNvbnN0IGRhdGVGcm9tID0gZGF0ZVJhbmdlSW5wdXRzLmZpbmQoJy5maWx0ZXItZnJvbScpO1xuICAgIGNvbnN0IGRhdGVUbyA9IGRhdGVSYW5nZUlucHV0cy5maW5kKCcuZmlsdGVyLXRvJyk7XG5cbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRPcHRpb24udmFsKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgZGF0ZVJhbmdlSW5wdXRzLmNzcyh7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAnaW5pdGlhbCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJ1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlUmFuZ2VJbnB1dHMuY3NzKHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBkYXRlRnJvbVZhbHVlID0gJyc7XG4gICAgICAgIGxldCBkYXRlVG9WYWx1ZSAgID0gJyc7XG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAndG9kYXknOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBkYXRlVG9WYWx1ZSA9IG1vbWVudCgpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3llc3RlcmRheSc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IGRhdGVUb1ZhbHVlID0gbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheScpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1cnJlbnQtd2Vlayc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLmRheSgxKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLmRheSg3KS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cy13ZWVrJzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuZGF5KC02KS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLmRheSgwKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXJyZW50LW1vbnRoJzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuc3RhcnRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLmVuZE9mKCdtb250aCcpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzLW1vbnRoJzpcbiAgICAgICAgICAgICAgICBkYXRlRnJvbVZhbHVlID0gbW9tZW50KCkuc3VidHJhY3QoMSwgJ21vbnRoJykuc3RhcnRPZignbW9udGgnKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgZGF0ZVRvVmFsdWUgICA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpLmZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xhc3Qtc2V2ZW4nOlxuICAgICAgICAgICAgICAgIGRhdGVGcm9tVmFsdWUgPSBtb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5JykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsYXN0LXRoaXJ0eSc6XG4gICAgICAgICAgICAgICAgZGF0ZUZyb21WYWx1ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDI5LCAnZGF5JykuZm9ybWF0KGRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGRhdGVUb1ZhbHVlICAgPSBtb21lbnQoKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRlRnJvbS52YWwoZGF0ZUZyb21WYWx1ZSk7XG4gICAgICAgIGRhdGVUby52YWwoZGF0ZVRvVmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBmYXN0U2F2ZSBmcm9tIFwiLi9mYXN0U2F2ZVwiO1xuaW1wb3J0IGFkZEVtYmVkIGZyb20gXCIuL2FkZEVtYmVkXCI7XG5pbXBvcnQgcmVtb3ZlRW1iZWQgZnJvbSBcIi4vcmVtb3ZlRW1iZWRcIjtcbmltcG9ydCBzdWJtaXRGb3JtIGZyb20gXCIuL3N1Ym1pdEZvcm1cIjtcbmltcG9ydCBhamF4UGFnaW5hdGlvbiBmcm9tIFwiLi9hamF4UGFnaW5hdGlvblwiO1xuaW1wb3J0IGNvbmZpcm1Nb2RhbCBmcm9tIFwiLi9jb25maXJtTW9kYWxcIjtcbmltcG9ydCBwYWdlTGltaXQgZnJvbSBcIi4vcGFnZUxpbWl0XCI7XG5pbXBvcnQgbW9kYWxEYXRhIGZyb20gXCIuL21vZGFsRGF0YVwiO1xuaW1wb3J0IGZpbHRlckRhdGVSYW5nZSBmcm9tIFwiaGFuZGxlcnMvZmlsdGVyRGF0ZVJhbmdlXCI7XG5pbXBvcnQgZmFzdFNhdmVQYWdlLCB7Q09OVEFJTkVSX1NFTEVDVE9SLCBtYXJrQ2hhbmdlZH0gZnJvbSBcIi4vZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQgdGFibGVTb3J0ZXIgZnJvbSBcInRhYmxlc29ydGVyXCI7XG5pbXBvcnQgc3RpY2t5SGVhZGVycyBmcm9tIFwic3RpY2t5LXRhYmxlLWhlYWRlcnNcIjtcbmltcG9ydCAndGFibGVzb3J0ZXIvZGlzdC9jc3MvdGhlbWUuZGVmYXVsdC5taW4uY3NzJztcblxuJChkb2N1bWVudClcbiAgICAuc2Nyb2xsKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAzMDApIHtcbiAgICAgICAgICAgICQoJy52aXNpdC1zdGF0cycpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuaGVpZ2h0KDApLmNzcygnZGlzcGxheScsICd0YWJsZS1jb2x1bW4tZ3JvdXAnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnZpc2l0LXN0YXRzJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHRhYmxlc29ydGVyID0gJCgnLnRhYmxlc29ydGVyJyk7XG4gICAgICAgIGlmKHRhYmxlc29ydGVyKSB7XG4gICAgICAgICAgICB0YWJsZXNvcnRlci50YWJsZXNvcnRlcigpLnN0aWNreVRhYmxlSGVhZGVycygpO1xuICAgICAgICAgICAgdGFibGVzb3J0ZXIuZmluZCgndGhlYWQnKS5jc3MoJ2JhY2tncm91bmQnLCAnI2ZmZicpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogT3BlbiBtb2RhbCB3aXRoIGRhdGEgZnJvbSBzZXJ2ZXIgYnkgcmVxdWVzdFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtbW9kYWwtYWN0aW9uJywgbW9kYWxEYXRhKVxuXG4gICAgLyoqXG4gICAgICogT3BlbiBjb25maXJtIG1vZGFsXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1jb25maXJtLWFjdGlvbicsIGNvbmZpcm1Nb2RhbClcblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBmb3JtIGRhdGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hamF4LXN1Ym1pdC1hY3Rpb24nLCBzdWJtaXRGb3JtKVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGZvcm0gZGF0YVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFqYXgtcGFnaW5hdGlvbiBhJywgYWpheFBhZ2luYXRpb24pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgZW1iZWQgZWxlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1lbWJlZCcsIGFkZEVtYmVkKVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtYmVkIGVsZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5ybS1lbWJlZCcsIHJlbW92ZUVtYmVkKVxuXG4gICAgLyoqXG4gICAgICogRmFzdCBzYXZlIHRoZSBkYXRhIG9mIGFuIGVudGl0eVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmZhc3Qtc2F2ZScsIGZhc3RTYXZlKVxuXG4gICAgLyoqXG4gICAgICogU2V0IHBhZ2UgbGltaXRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcucGFnZS1saW1pdCcsIHBhZ2VMaW1pdClcblxuICAgIC8qKlxuICAgICAqIE1hcmsgaW5wdXRzIGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsIGAke0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7Q09OVEFJTkVSX1NFTEVDVE9SfSBzZWxlY3QsICR7Q09OVEFJTkVSX1NFTEVDVE9SfSB0ZXh0YXJlYWAsIG1hcmtDaGFuZ2VkKVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGVSYW5nZSA9ICQoJyNkYXRlLXJhbmdlLXNlbGVjdCcpO1xuICAgICAgICBpZiAoZGF0ZVJhbmdlLmxlbmd0aCkge1xuICAgICAgICAgICAgZmlsdGVyRGF0ZVJhbmdlKCk7XG4gICAgICAgICAgICBkYXRlUmFuZ2UuY2hhbmdlKGZpbHRlckRhdGVSYW5nZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuZnVuY3Rpb24gaW5pdFN0aWNreSgpIHtcbiAgICAkKCcudGFibGVzb3J0ZXInKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcbn1cblxuJChcIi50YWJsZS1yZXNwb25zaXZlXCIpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgaW5pdFN0aWNreSgpO1xufSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGRhdGEgb24gdGhlIHBhZ2VcbiAqL1xuJCgnLmZhc3Qtc2F2ZS1wYWdlJykuY2xpY2soZmFzdFNhdmVQYWdlKTtcbiIsImltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5pbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIE9wZW4gbW9kYWwgd2l0aCBmb3JtIGJ5IHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdXR0b24gPSAkKHRoaXMpO1xuXG4gICAgaWYgKGN1cnJlbnRCdXR0b24uaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGN1cnJlbnRCdXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgIG5ldyBodHRwKHRoaXMuaHJlZilcbiAgICAgICAgLm1ldGhvZCh0aGlzLmRhdGFzZXQubWV0aG9kIHx8ICdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuc2l6ZShTSVpFUy5sZylcbiAgICAgICAgICAgICAgICAuZGF0YXNldCh7XG4gICAgICAgICAgICAgICAgICAgIHJlbG9hZDogdGhpcy5kYXRhc2V0LnJlbG9hZCB8fCAxLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmhlYWRlcih0aGlzLmRhdGFzZXQuaGVhZGVyKVxuICAgICAgICAgICAgICAgIC5hZnRlckJ1aWxkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5kYXRhc2V0LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNwYXRjaCh0aGlzLmRhdGFzZXQuZXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uQ2xvc2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmRhdGFzZXQuY2xvc2VFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2godGhpcy5kYXRhc2V0LmNsb3NlRXZlbnQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1vZGFsKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogU2V0IHBhZ2UgbGltaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGhyZWYgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICBocmVmLnNlYXJjaFBhcmFtcy5zZXQoJ3BhZ2VfbGltaXQnLCAkKHRoaXMpLnZhbCgpKTtcbiAgICBocmVmLnNlYXJjaFBhcmFtcy5kZWxldGUoJ3BhZ2UnKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWYudG9TdHJpbmcoKTtcbn1cbiIsImltcG9ydCB7U0laRVN9IGZyb20gXCJjb21wb25lbnRzL2Jvb3RzdHJhcC9jb25zdGFudHNcIjtcbmltcG9ydCBNb2RhbEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvbW9kYWwvTW9kYWxCdWlsZGVyXCI7XG5cbi8qKlxuICogUmVtb3ZlIGVtYmVkZWQgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBhcmVudCA9ICEhdGhpcy5kYXRhc2V0LnBhcmVudCA/ICQodGhpcykuY2xvc2VzdCh0aGlzLmRhdGFzZXQucGFyZW50KSA6ICQodGhpcykucGFyZW50KCk7XG5cbiAgICBpZiAoIXRoaXMuZGF0YXNldC5pZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIoJ0FyZSB5b3Ugc3VyZT8nKVxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInLFxuICAgICAgICAgICAgJ3RleHQnOiAnRGVsZXRlJyxcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxuICAgICAgICAgICAgJ2NsaWNrJzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSlcbiAgICAgICAgLm1vZGFsKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IHtnZXRNb2RhbENvdW50ZXJ9IGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcblxuLyoqXG4gKiBTdWJtaXQgZm9ybVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9ICQodGhpcyk7XG5cbiAgICBpZiAoY3VycmVudEJ1dHRvbi5oYXNDbGFzcygnbG9hZGluZycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY3VycmVudEJ1dHRvbi5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgbmV3IGh0dHAodGhpcy5ocmVmKVxuICAgICAgICAuZGF0YShjdXJyZW50QnV0dG9uLmNsb3Nlc3QoJ2Zvcm0nKS5zZXJpYWxpemVBcnJheSgpKVxuICAgICAgICAubWV0aG9kKHRoaXMuZGF0YXNldC5tZXRob2QgfHwgJ2dldCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmICghIXRoaXMuZGF0YXNldC5ldmVudCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKHRoaXMuZGF0YXNldC5ldmVudCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSAhPT0gJ2Vycm9yJyAmJiBjYW5SZWxvYWQodGhpcykpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuZGF0YXNldC5kaXNtaXNzKSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocmVzcG9uc2UudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDYW4gcmVsb2FkIHRoZSBwYWdlXG4gKlxuICogQHBhcmFtIGJ1dHRvblxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNhblJlbG9hZChidXR0b24pIHtcbiAgICBpZiAocGFyc2VJbnQoYnV0dG9uLmRhdGFzZXQucmVsb2FkKSA9PT0gMSkge1xuICAgICAgICBpZiAoZ2V0TW9kYWxDb3VudGVyKCkgPCAyKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhUmVsb2FkID0gJChidXR0b24pLmNsb3Nlc3QoJy5tb2RhbCcpLmRhdGEoJ3JlbG9hZCcpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhUmVsb2FkID09PSB0eXBlb2YgdW5kZWZpbmVkIHx8IGRhdGFSZWxvYWQgPT09IGZhbHNlIHx8IHBhcnNlSW50KGRhdGFSZWxvYWQpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgZ2V0U3ViRm9sZGVyIGZyb20gXCIuL2dldFN1YkZvbGRlclwiO1xuXG4vKipcbiAqIEdldCBmaWxlIHBhdGggZnJvbSBzdG9yYWdlIHdpdGggc3ViIGZvbGRlcnNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcm9vdEZvbGRlciBSb290IGZvbGRlciBpbiB0aGUgc3RvcmFnZVxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lICAgRmlsZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJvb3RGb2xkZXIsIGZpbGVOYW1lKSB7XG4gICAgcmV0dXJuICcvc3RvcmFnZS8nICsgcm9vdEZvbGRlciArICcvJyArIGdldFN1YkZvbGRlcihmaWxlTmFtZSkgKyAnLycgKyBmaWxlTmFtZTtcbn1cbiIsIi8qKlxuICogR2V0IGZvcm0gZGF0YVxuICpcbiAqIEBwYXJhbSB7alF1ZXJ5fSBmb3JtIEZvcm0gZWxlbWVudFxuICpcbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZm9ybSkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0ge307XG5cbiAgICBsZXQgZm9ybUl0ZW1zID0gZm9ybS5maW5kKCdpbnB1dCwgc2VsZWN0Jyk7XG4gICAgaWYgKCFmb3JtSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGZvcm1JdGVtcyA9IGZvcm07XG4gICAgfVxuXG4gICAgZm9ybUl0ZW1zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XG4gICAgICAgIHN3aXRjaCAoY3VycmVudEl0ZW0uYXR0cigndHlwZScpKSB7XG4gICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgZm9ybURhdGFbY3VycmVudEl0ZW0uYXR0cignbmFtZScpXSA9ICEhY3VycmVudEl0ZW0ucHJvcCggXCJjaGVja2VkXCIgKSAqIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZvcm1EYXRhW2N1cnJlbnRJdGVtLmF0dHIoJ25hbWUnKV0gPSBjdXJyZW50SXRlbS52YWwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xufVxuIiwiaW1wb3J0IG1kNSBmcm9tICdibHVlaW1wLW1kNSc7XG5cbi8qKlxuICogR2V0IHN1YiBmb2xkZXJzIG9mIHRoZSBmaWxlXG4gKlxuICogUmVzdWx0IG9mIHRoZSBmdW5jdGlvbiBsb29rcyBsaWtlOiBhMS9iMi9jM1xuICogV2hlcmUgbWQ1IG9mIHRoZSBmaWxlID0gYTFiMmMzLi4uLi4uLi4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgdGhlIGZpbGVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZmlsZU5hbWUpIHtcbiAgICBjb25zdCBmaWxlTmFtZUhhc2ggPSBtZDUoZmlsZU5hbWUpLnN1YnN0cmluZygwLCA2KTtcbiAgICBjb25zdCBwYXRoUGFydHMgPSBmaWxlTmFtZUhhc2gubWF0Y2goLy57MSwyfS9nKTtcbiAgICByZXR1cm4gcGF0aFBhcnRzLmpvaW4oJy8nKTtcbn1cbiIsIi8qKlxuICogalF1ZXJ5XG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuJCA9ICQ7XG53aW5kb3cualF1ZXJ5ID0gJDtcblxuLyoqXG4gKiBCb290c3RyYXBcbiAqL1xuaW1wb3J0ICcuL3ZlbmRvci9ib290c3RyYXAnO1xuXG4vKipcbiAqIEJvb3RzdHJhcCBDY29sb3JwaWNrZXJcbiAqL1xuaW1wb3J0ICdib290c3RyYXAtY29sb3JwaWNrZXInO1xuaW1wb3J0ICdib290c3RyYXAtY29sb3JwaWNrZXIvZGlzdC9jc3MvYm9vdHN0cmFwLWNvbG9ycGlja2VyLmNzcyc7XG5cbi8qKlxuICogRm9udCBBd2Vzb21lXG4gKi9cbmltcG9ydCAnZm9udC1hd2Vzb21lL3Njc3MvZm9udC1hd2Vzb21lLnNjc3MnO1xuXG4vKipcbiAqIEV4dGVybmFsIG1vZHVsZXNcbiAqIFRPRE86IGdldCBieSBucG1cbiAqL1xuaW1wb3J0ICcuL3ZlbmRvci9hbmltYXRlJztcbmltcG9ydCAnLi92ZW5kb3IvYm9vdHN0cmFwLWNvbmZpcm1hdGlvbic7XG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlcic7XG5pbXBvcnQgJy4vdmVuZG9yL2Jvb3RzdHJhcC1ub3RpZnknO1xuaW1wb3J0ICcuL3ZlbmRvci9zZWxlY3QyJztcbmltcG9ydCAnLi92ZW5kb3IvZWtrby1saWdodGJveCc7XG5pbXBvcnQgJy4vdmVuZG9yL3RoZW1lJztcblxuLyoqXG4gKiBDb21wb25lbnRzXG4gKi9cbmltcG9ydCAnLi9jb21wb25lbnRzJztcblxuLyoqXG4gKiBIYW5kbGVyc1xuICovXG5pbXBvcnQgJy4vaGFuZGxlcnMnO1xuXG4vKipcbiAqIFN0eWxlc1xuICovXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG4vKipcbiAqIE1vZHVsZXMgbG9hZGVyXG4gKi9cbmNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xuaWYgKHBhdGgubGVuZ3RoID4gMSkge1xuICAgIC8qKlxuICAgICAqIFRvIGNyZWF0aW5nIGRpZmZlcmVudCBmaWxlcyBmb3IgZWFjaCBtb2R1bGVcbiAgICAgKiAoRG9uJ3QgZm9yZ2V0IG5wbSBpIC0tc2F2ZS1kZXYgYnVuZGxlLWxvYWRlcilcbiAgICAgKiBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCdidW5kbGUtbG9hZGVyIW1vZHVsZXMnLCB0cnVlLCAvaW5kZXhcXC5qcyQvKTtcbiAgICAgKi9cbiAgICBjb25zdCBtb2R1bGVzID0gcmVxdWlyZS5jb250ZXh0KCdtb2R1bGVzJywgdHJ1ZSwgL1xcLlxcL1tcXHctX10rXFwvbW9kdWxlXFwuanMkLyk7XG4gICAgbW9kdWxlcy5rZXlzKCkubWFwKG1vZHVsZSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZHVsZUl0ZW1zID0gbW9kdWxlLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgaWYgKG1vZHVsZUl0ZW1zWzFdID09PSBwYXRoWzFdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTU9EVUxFOicsIHBhdGhbMV0pO1xuICAgICAgICAgICAgbW9kdWxlcyhtb2R1bGUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzdWJNb2R1bGVzID0gcmVxdWlyZS5jb250ZXh0KCdtb2R1bGVzJywgdHJ1ZSwgL21vZHVsZXMoLiopbW9kdWxlXFwuanMkLyk7XG4gICAgc3ViTW9kdWxlcy5rZXlzKCkubWFwKG1vZHVsZSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZHVsZUl0ZW1zID0gbW9kdWxlLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgaWYgKG1vZHVsZUl0ZW1zWzFdID09PSBwYXRoWzFdICYmIG1vZHVsZUl0ZW1zWzNdID09PSBwYXRoWzJdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU1VCIE1PRFVMRTonLCBwYXRoWzJdKTtcbiAgICAgICAgICAgIHN1Yk1vZHVsZXMobW9kdWxlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCB7QVdBUkRfQ1JFQVRFRH0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUsIHNlbGYpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCBlZGl0QnRuID0gJCgnIycgKyB0aGlzLmRhdGFzZXQudGVtcGxhdGVJZClcbiAgICAgICAgICAgIC5odG1sKClcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKHRoaXMuZGF0YXNldC50ZW1wbGF0ZVBsYWNlaG9sZGVyLCBcImdcIiksIGRhdGEuYXdhcmRfaWQpXG4gICAgICAgICAgICAucmVwbGFjZSggbmV3IFJlZ0V4cCgnJWZpZWxkX25hbWUlJywgXCJnXCIpLCB0aGlzLmRhdGFzZXQuZmllbGROYW1lIHx8ICcnKTtcblxuICAgICAgICBjdXJyZW50QnRuLnBhcmVudCgpLmFwcGVuZChlZGl0QnRuKTtcbiAgICAgICAgY3VycmVudEJ0bi5yZW1vdmUoKTtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goQVdBUkRfQ1JFQVRFRCwgZGF0YSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtBV0FSRF9ERUxFVEV9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0RFTEVURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfREVMRVRFLCBzZWxmKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVCdG4gPSAkKCcjJyArIHRoaXMuZGF0YXNldC50ZW1wbGF0ZUlkKS5odG1sKClcbiAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCclZmllbGRfbmFtZSUnKSwgdGhpcy5kYXRhc2V0LmZpZWxkTmFtZSB8fCAnJyk7XG5cbiAgICAgICAgY29uc3QgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcblxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZChjcmVhdGVCdG4pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcbmltcG9ydCBnZXRGaWxlUGF0aCBmcm9tIFwiaGVscGVycy9nZXRGaWxlUGF0aFwiO1xuaW1wb3J0IERyb3B6b25lQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZUJ1aWxkZXJcIjtcblxuLyoqXG4gKiBEcm9wem9uZSBpbml0IGFmdGVyIHRoZSBtb2RhbCBvcGVuZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKEVWRU5UX05BTUUpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoRVZFTlRfTkFNRSwgKCkgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogRHJvcHpvbmUgY29udGFpbmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkcm9wem9uZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlldyBVUkwgaGlkZGVuIGlucHV0XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBwcmV2aWV3VVJMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGRyb3B6b25lRWxlbWVudClcbiAgICAgICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQudXJsKVxuICAgICAgICAgICAgLmVycm9yKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgJCgnI3ByZXZpZXctdXJsJykudmFsKCcnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcjcHJldmlldy11cmwnKS52YWwoJycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKChmaWxlLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5kei1maWxlbmFtZSBzcGFuJykudGV4dChyZXNwb25zZS5maWxlX25hbWUpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdVUkwudmFsdWUgPSByZXNwb25zZS5maWxlX25hbWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHByZXZpZXdcbiAgICAgICAgICovXG4gICAgICAgIGlmIChwcmV2aWV3VVJMLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgZHJvcHpvbmVCdWlsZGVyXG4gICAgICAgICAgICAgICAgLnNldFByZXZpZXcoXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdVUkwudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGdldEZpbGVQYXRoKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LmZvbGRlciwgcHJldmlld1VSTC52YWx1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZUJ1aWxkZXIuYnVpbGQoKTtcbiAgICB9KTtcbn1cblxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7VVBEQVRFX1NBVkVfQUxMX0JVVFRPTn0gZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKFVQREFURV9TQVZFX0FMTF9CVVRUT04sIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVBbGxCdXR0b24gPSAkKCcjdXBkYXRlLWFsbCcpO1xuICAgICAgICBjb25zdCBjb3VudGVyID0gJCgnI3VwZGF0ZS1hbGwgLmNvdW50Jyk7XG5cbiAgICAgICAgbGV0IGNvdW50ID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXIuY2hhbmdlZCcpLmxlbmd0aDtcblxuICAgICAgICBpZihjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHNhdmVBbGxCdXR0b24uc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2F2ZUFsbEJ1dHRvbi5oaWRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdW50ZXIuaHRtbChjb3VudCk7XG4gICAgfSk7XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWN0aW9uLWxvZy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYWN0aW9uLWxvZy9tb2R1bGUuanNcIixcblx0XCIuL2FjdGlvbi10eXBlL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hY3Rpb24tdHlwZS9tb2R1bGUuanNcIixcblx0XCIuL2FkZC1tZS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYWRkLW1lL21vZHVsZS5qc1wiLFxuXHRcIi4vYW5ub3VuY2VtZW50cy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYW5ub3VuY2VtZW50cy9tb2R1bGUuanNcIixcblx0XCIuL2Fzc2V0cy1sb2cvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Fzc2V0cy1sb2cvbW9kdWxlLmpzXCIsXG5cdFwiLi9hc3NldHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Fzc2V0cy9tb2R1bGUuanNcIixcblx0XCIuL2F3YXJkL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9hd2FyZC9tb2R1bGUuanNcIixcblx0XCIuL2Jhbm5lci9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvYmFubmVyL21vZHVsZS5qc1wiLFxuXHRcIi4vY21zLWFkcHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2Ntcy1hZHBzL21vZHVsZS5qc1wiLFxuXHRcIi4vY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9tb2R1bGUuanNcIixcblx0XCIuL2NvbGxlY3Rpb24vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2NvbGxlY3Rpb24vbW9kdWxlLmpzXCIsXG5cdFwiLi9jcm9wL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9jcm9wL21vZHVsZS5qc1wiLFxuXHRcIi4vZGFpbHktbG9vdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZGFpbHktbG9vdC9tb2R1bGUuanNcIixcblx0XCIuL2RlZmF1bHQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlLmpzXCIsXG5cdFwiLi9kZXBsb3kvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2RlcGxveS9tb2R1bGUuanNcIixcblx0XCIuL2RwYS9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvZHBhL21vZHVsZS5qc1wiLFxuXHRcIi4vZHllL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9keWUvbW9kdWxlLmpzXCIsXG5cdFwiLi9naWZ0LXdyYXAvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2dpZnQtd3JhcC9tb2R1bGUuanNcIixcblx0XCIuL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2xpbmtlZC1hc3NldHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9sb2NhbGl6YXRpb24vbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL2xvY2FsaXphdGlvbi9tb2R1bGUuanNcIixcblx0XCIuL21hZ2ljL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tYWdpYy9tb2R1bGUuanNcIixcblx0XCIuL21ha2V1cC1raXQtYXNzZXQvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21ha2V1cC1raXQtYXNzZXQvbW9kdWxlLmpzXCIsXG5cdFwiLi9tYWtldXAta2l0L21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tYWtldXAta2l0L21vZHVsZS5qc1wiLFxuXHRcIi4vbWVhbC1pbmdyZWRpZW50LWdyb3Vwcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvbWVhbC1pbmdyZWRpZW50LWdyb3Vwcy9tb2R1bGUuanNcIixcblx0XCIuL21lYWwtaW5ncmVkaWVudHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL21lYWwtaW5ncmVkaWVudHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9tZWFsL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9tZWFsL21vZHVsZS5qc1wiLFxuXHRcIi4vbmVpZ2hib3ItYWN0aXZpdHkvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL25laWdoYm9yLWFjdGl2aXR5L21vZHVsZS5qc1wiLFxuXHRcIi4vbmV3cy1naWZ0cy1sb2cvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL25ld3MtZ2lmdHMtbG9nL21vZHVsZS5qc1wiLFxuXHRcIi4vcHJvZHVjdC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvcHJvZHVjdC9tb2R1bGUuanNcIixcblx0XCIuL3B1cmNoYXNlL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9wdXJjaGFzZS9tb2R1bGUuanNcIixcblx0XCIuL3NldHRpbmdzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy9zZXR0aW5ncy9tb2R1bGUuanNcIixcblx0XCIuL3Nob3AtZGVwYXJ0bWVudC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2hvcC1kZXBhcnRtZW50L21vZHVsZS5qc1wiLFxuXHRcIi4vc2hvcC1yZWxlYXNlcy9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2hvcC1yZWxlYXNlcy9tb2R1bGUuanNcIixcblx0XCIuL3Nob3Atc3RhdHMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3Nob3Atc3RhdHMvbW9kdWxlLmpzXCIsXG5cdFwiLi9zb3VuZC9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc291bmQvbW9kdWxlLmpzXCIsXG5cdFwiLi9zdWJ0eXBlLWF0dHJpYnV0ZXMvbW9kdWxlLmpzXCI6IFwiLi9tb2R1bGVzL3N1YnR5cGUtYXR0cmlidXRlcy9tb2R1bGUuanNcIixcblx0XCIuL3RhbWF0b29sL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy90YW1hdG9vbC9tb2R1bGUuanNcIixcblx0XCIuL3VzZXJzL21vZHVsZS5qc1wiOiBcIi4vbW9kdWxlcy91c2Vycy9tb2R1bGUuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9tb2R1bGVzIHN5bmMgcmVjdXJzaXZlIFxcXFwuXFxcXC9bXFxcXHctX10rXFxcXC9tb2R1bGVcXFxcLmpzJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9zZXR0aW5ncy9tb2R1bGVzL2FpX2FuaW1hdGlvbi9tb2R1bGUuanNcIjogXCIuL21vZHVsZXMvc2V0dGluZ3MvbW9kdWxlcy9haV9hbmltYXRpb24vbW9kdWxlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbW9kdWxlcyBzeW5jIHJlY3Vyc2l2ZSBtb2R1bGVzKC4qKW1vZHVsZVxcXFwuanMkXCI7IiwiaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJztcblxuJChkb2N1bWVudClcblxuICAgIC5vbignY2xpY2snLCAnI3Byb2R1Y3RfaWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNwcm9kdWN0X2lkJykucHJldignLnNlbGVjdDItY29udGFpbmVyJykuZmluZCgnLnNlbGVjdDItc2VhcmNoX19maWVsZCcpLmZvY3VzKClcbiAgICB9KVxuXG4gICAgLm9uKCdjbGljaycsICcucmVwb3J0cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI3NlbmQtcmVwb3J0JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9ICQoXCIjaHRtbC1jb250ZW50LWhvbGRlclwiKTtcbiAgICAgICAgICAgIGxldCBjYW52YXNfaGFuZGxlciA9ICQoXCIjY2FudmFzX2hhbmRsZXJcIik7XG4gICAgICAgICAgICBsZXQgc3VibWl0QnRuID0gJCgnI2xvYWQnKTtcblxuICAgICAgICAgICAgc3VibWl0QnRuLmRhdGEoJ2xvYWRpbmctdGV4dCcsICc8aSBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT4g0J/QvtC00LPQvtGC0L7QstC60LAnKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi5idXR0b24oJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgY2FudmFzX2hhbmRsZXIuZW1wdHkoKTtcblxuICAgICAgICAgICAgZWxlbWVudC53aWR0aCg0ODApO1xuICAgICAgICAgICAgZWxlbWVudC5jc3MoJ21hcmdpbicsIDIwKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKHtcImJvcmRlci1jb2xvclwiOiBcIiMyZDJkMmRcIixcbiAgICAgICAgICAgICAgICBcImJvcmRlci13aWR0aFwiOlwiMnB4XCIsXG4gICAgICAgICAgICAgICAgXCJib3JkZXItc3R5bGVcIjpcInNvbGlkXCJ9KTtcblxuICAgICAgICAgICAgY29uc3QgY29weV9lbGUgPSBlbGVtZW50LmdldCgwKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBjYW52YXNfaGFuZGxlci5hcHBlbmQoY29weV9lbGUpO1xuICAgICAgICAgICAgY2FudmFzX2hhbmRsZXIuY3NzKCdoZWlnaHQnLCBlbGVtZW50LnNjcm9sbEhlaWdodCArIDIwKTtcbiAgICAgICAgICAgIGNhbnZhc19oYW5kbGVyLmNzcygnd2lkdGgnLCBlbGVtZW50LnNjcm9sbFdpZHRoICsgMTApO1xuXG4gICAgICAgICAgICBodG1sMmNhbnZhcyhjb3B5X2VsZSwge1xuICAgICAgICAgICAgICAgIHNjcm9sbFg6IDAsXG4gICAgICAgICAgICAgICAgc2Nyb2xsWTogLTEsXG4gICAgICAgICAgICAgICAgdXNlQ09SUzogdHJ1ZSxcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNhbnZhcykge1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZURhdGEgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0gaW1hZ2VEYXRhLnJlcGxhY2UoL15kYXRhOmltYWdlXFwvcG5nLywgXCJkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKTtcbiAgICAgICAgICAgICAgICAkKCcjY2FudmFzLWRhdGEnKS52YWwobmV3RGF0YSk7XG4gICAgICAgICAgICAgICAgJCgnI3NlbmQtcmVwb3J0JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ0bi5idXR0b24oJ3Jlc2V0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnI3NlbmQtcmVwb3J0JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgNDAwMClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAzMDApXG4gICAgfSk7XG4iLCJleHBvcnQgY29uc3QgQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQgPSAnQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQnO1xuZXhwb3J0IGNvbnN0IERFTFRBX1RJTUVfQVRUUklCVVRFID0gMTk7XG4iLCIvKipcbiAqIENvbGxhcHNlIHN0YXRlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5hY3Rpb24tdHlwZS1zdGF0ZScpO1xuICAgIHBhcmVudC50b2dnbGVDbGFzcygnZG93bicpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBDb2xsYXBzZSBzdGF0ZXNcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoJy5hY3Rpb24tdHlwZS1zdGF0ZScpLnRvZ2dsZUNsYXNzKCdkb3duJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge1NJWkVTfSBmcm9tIFwiY29tcG9uZW50cy9ib290c3RyYXAvY29uc3RhbnRzXCI7XG5pbXBvcnQgTW9kYWxCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL21vZGFsL01vZGFsQnVpbGRlclwiO1xuaW1wb3J0IFJlcXVlc3RCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VEfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIFN0YXRlIG9mIHRoZSBBY3Rpb24gVHlwZVxuICogYXQgdGhlIG1vZGFsXG4gKiB3aXRoIGNvbmZpcm1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50RWxlbWVudC5jbG9zZXN0KCcuYWN0aW9uLXR5cGUtc3RhdGUnKTtcblxuICAgIGlmICghY3VycmVudEVsZW1lbnQuZGF0YSgnaWQnKSkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKEFDVElPTl9UWVBFX1NUQVRFU19DSEFOR0VELCB7fSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgTW9kYWxCdWlsZGVyKClcbiAgICAgICAgLnNpemUoU0laRVMuc20pXG4gICAgICAgIC5oZWFkZXIoJ0FyZSB5b3Ugc3VyZT8nKVxuICAgICAgICAuZm9vdGVyKCQoJzxidXR0b24vPicsIHtcbiAgICAgICAgICAgICdjbGFzcyc6ICdidG4gYnRuLXNtIGJ0bi1kYW5nZXInLFxuICAgICAgICAgICAgJ3RleHQnOiAnRGVsZXRlJyxcbiAgICAgICAgICAgICdkYXRhLWRpc21pc3MnOiAnbW9kYWwnLFxuICAgICAgICAgICAgJ2NsaWNrJzogKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5ldyBSZXF1ZXN0QnVpbGRlcihjdXJyZW50RWxlbWVudC5kYXRhKCd1cmwnKSlcbiAgICAgICAgICAgICAgICAgICAgLm1ldGhvZCgnREVMRVRFJylcbiAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3MoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzcGF0Y2goQUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUQsIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICAgIC5tb2RhbCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QUNUSU9OX1RZUEVfU1RBVEVTX0NIQU5HRUR9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBpbmRleGVzIG9mIHRoZSBzdGF0ZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIG9ic2VydmVyLnN1YnNjcmliZShBQ1RJT05fVFlQRV9TVEFURVNfQ0hBTkdFRCwgKCkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSAxO1xuXG4gICAgICAgICQoJy5pbmRleCcpLmVhY2goKF8sIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICQoaXRlbSkudmFsKGluZGV4KyspO1xuICAgICAgICB9KVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHVwZGF0ZUluZGV4ZXMgZnJvbSBcIi4vbGlzdGVuZXJzL3VwZGF0ZUluZGV4ZXNcIjtcbmltcG9ydCBjb2xsYXBzZVN0YXRlIGZyb20gXCIuL2hhbmRsZXJzL2NvbGxhcHNlU3RhdGVcIjtcbmltcG9ydCBjb2xsYXBzZVN0YXRlcyBmcm9tIFwiLi9oYW5kbGVycy9jb2xsYXBzZVN0YXRlc1wiO1xuaW1wb3J0IHJlbW92ZUFjdGlvblR5cGVTdGF0ZSBmcm9tIFwiLi9oYW5kbGVycy9yZW1vdmVBY3Rpb25UeXBlU3RhdGVcIjtcbmltcG9ydCB7REVMVEFfVElNRV9BVFRSSUJVVEV9IGZyb20gXCJtb2R1bGVzL2FjdGlvbi10eXBlL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuLyoqXG4gKiBVcGRhdGUgaW5kZXhlc1xuICovXG51cGRhdGVJbmRleGVzKCk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAub24oJ2NsaWNrJywgJyNwcm9kdWN0X2lkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncHJvZHVjdF9pZCcpO1xuICAgICAgICAkKCcjcHJvZHVjdF9pZCcpLnByZXYoJy5zZWxlY3QyLWNvbnRhaW5lcicpLmZpbmQoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKS5mb2N1cygpXG4gICAgfSlcblxuICAgIC5vbignY2hhbmdlJywgJ1tuYW1lJD1cIlt0aW1lX3R5cGVdXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGkgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZUhpZGRlbiA9IGN1cnJlbnRMaS5maW5kKCdbbmFtZSQ9XCJbYXR0cmlidXRlc11bJyArIERFTFRBX1RJTUVfQVRUUklCVVRFICsgJ11bdmFsdWVdXCJdJyk7XG4gICAgICAgIGNvbnN0IGRlbHRhVGltZURpc3BsYXkgPSBjdXJyZW50TGkuZmluZCgnW25hbWUkPVwiW2F0dHJpYnV0ZXNdWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddW3ZhbHVlXVtkaXNwbGF5XVwiXScpO1xuXG4gICAgICAgIGRlbHRhVGltZURpc3BsYXkudmFsKGRlbHRhVGltZUhpZGRlbi5kYXRhKCd2YWx1ZScpIC8gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSkpO1xuICAgIH0pXG5cbiAgICAub24oJ2lucHV0JywgJ1tuYW1lJD1cIlthdHRyaWJ1dGVzXVsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVt2YWx1ZV1bZGlzcGxheV1cIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaSA9ICQodGhpcykuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgY29uc3QgdGltZVR5cGUgPSBjdXJyZW50TGkuZmluZCgnW25hbWUkPVwiW3RpbWVfdHlwZV1cIl0nKS52YWwoKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lSGlkZGVuID0gY3VycmVudExpLmZpbmQoJ1tuYW1lJD1cIlthdHRyaWJ1dGVzXVsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVt2YWx1ZV1cIl0nKTtcblxuICAgICAgICBkZWx0YVRpbWVIaWRkZW4udmFsKCQodGhpcykudmFsKCkgKiB0aW1lVHlwZSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlIG9uZSBzdGF0ZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvbGxhcHNlLWxpbmsnLCBjb2xsYXBzZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogQ29sbGFwc2UgYWxsIHN0YXRlc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmhpZGUtc3RhdGVzJywgY29sbGFwc2VTdGF0ZXMpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgc3RhdGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5ybS1hY3Rpb24tdHlwZS1zdGF0ZXMnLCByZW1vdmVBY3Rpb25UeXBlU3RhdGUpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdGF0ZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gJCgnLnNhdmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhKGNvbnRhaW5lci5maW5kKFwiLmNoYW5nZWQgaW5wdXRcIikpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgbm90aWZ5RXJyb3IoJ05vdGhpbmcgdG8gc2F2ZSEnKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ3RyLmNoYW5nZWQnKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zYXZlLXBhZ2UnLCBzYXZlU3RhdGUpO1xuIiwiZXhwb3J0IGNvbnN0IEFOTk9VTkNFTUVOVFNfU0hPV19GT1JNID0gJ0FOTk9VTkNFTUVOVFNfU0hPV19GT1JNJztcbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FOTk9VTkNFTUVOVFNfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoQU5OT1VOQ0VNRU5UU19TSE9XX0ZPUk0sIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFOTk9VTkNFTUVOVFNfU0hPV19GT1JNLCBzZWxmKTtcblxuICAgICAgICAkKCcuZGF0ZXRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfQ1JFQVRFRCwgQ0xPU0VfQVdBUkRfTU9EQUx9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIGFubm91bmNlbWVudFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQodGhpcykoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFVuc3Vic2NyaWJlIG9uIG1vZGFsIGNsb3NlXG4gICAgICovXG4gICAgLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShDTE9TRV9BV0FSRF9NT0RBTCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSk7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEVEKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbi8qKlxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cbiAqIEFmdGVyIGNsaWNrIGF0IGNyZWF0ZSBvciBlZGl0IGJ1dHRvblxuICovXG4kKCcuc2hvdy1mb3JtJylcbiAgICAuY2xpY2soc2hvd0Zvcm0pO1xuIiwiXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLm9uKCdjbGljaycsICcudG9nZ2xlX2lkcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KCkgPiAwKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJCh0aGlzKS50ZXh0KCkucmVwbGFjZSgnSGlkZScsICdTaG93JykpO1xuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCQodGhpcykudGV4dCgpLnJlcGxhY2UoJ1Nob3cnLCAnSGlkZScpKTtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgpLnJlcGxhY2UoJ1Nob3cnLCAnSGlkZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuaGVpZ2h0KCcxMDAlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogU1VCX1RZUEVTIC0gaXQgaXMgYSBnbG9iYWwgb2JqZWN0XG4gKiBJbml0ZWQgaW4gYXNzZXQvZm9ybS5ibGFkZS5waHBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIHNldFN1YnR5cGVzKHRoaXMudmFsdWUsIHRoaXMuZGF0YXNldC5zdWJ0eXBlKTtcbn1cblxuY29uc3QgYXNzZXRGb3JtU3VidHlwZSA9ICQoXCIjc3VidHlwZVwiKTtcbmNvbnN0IGFzc2V0Rm9ybUFjdGlvblR5cGUgPSAkKCcjYXNzZXQtZm9ybS1hY3Rpb24tdHlwZScpO1xuY29uc3QgYXNzZXRGb3JtQ29sbGVjdGlvbiA9ICQoJyNhc3NldC1mb3JtLWNvbGxlY3Rpb24nKTtcbmNvbnN0IHByaWNlcyA9ICQoJy5wcmljZXMnKTtcblxuZnVuY3Rpb24gc2V0U3VidHlwZXModHlwZSwgc3VidHlwZSkge1xuICAgIGFzc2V0Rm9ybVN1YnR5cGVcbiAgICAgICAgLmVtcHR5KClcbiAgICAgICAgLnNlbGVjdDIoe1xuICAgICAgICAgICAgZGF0YTogU1VCX1RZUEVTW3R5cGVdXG4gICAgICAgIH0pXG4gICAgICAgIC52YWwoc3VidHlwZSlcbiAgICAgICAgLmNoYW5nZSgpO1xuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBzdGF0ZVxuICAgICAqL1xuICAgIGhpZGUoYXNzZXRGb3JtQWN0aW9uVHlwZSk7XG4gICAgaGlkZShhc3NldEZvcm1Db2xsZWN0aW9uKTtcbiAgICBzaG93KHByaWNlcyk7XG5cbiAgICBzd2l0Y2ggKHBhcnNlSW50KHR5cGUpKSB7XG5cbiAgICAgICAgLy8gRnVybml0dXJlXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHNob3coYXNzZXRGb3JtQWN0aW9uVHlwZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBDbG90aGVzXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHNob3coYXNzZXRGb3JtQ29sbGVjdGlvbik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBCb2R5IFBhcnRcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgaGlkZShwcmljZXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZENsYXNzKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHNob3coZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbn0iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYXNzZXRzIGlkcyB0byBjbGlwYm9hcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBc3NldHMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGFzc2V0SWRzRmllbGQgPSAkKCd0ZXh0YXJlYVtuYW1lPVwiYXNzZXRfaWRzXCJdJyk7XG4gICAgY29uc3Qgd2l0aE5hbWUgPSAkKCdpbnB1dFtuYW1lPVwid2l0aF9uYW1lXCJdJyk7XG4gICAgbGV0IGFzc2V0SWRzID0gW107XG5cbiAgICAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBjb25zb2xlLmxvZygkKGl0ZW0pKTtcbiAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgIGxldCBhc3NldE5hbWUgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LW5hbWUnKTtcbiAgICAgICAgaWYoYXNzZXRJZCkge1xuICAgICAgICAgICAgaWYod2l0aE5hbWUucHJvcChcImNoZWNrZWRcIikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKCdcXG4nICsgYXNzZXRJZCArICcgJyArIGFzc2V0TmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgaWYgKGFzc2V0SWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICQoJy5mYXN0LXNhdmUtY29udGFpbmVyJykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gJChpdGVtKS5kYXRhKCdhc3NldC1uYW1lJyk7XG4gICAgICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICAgICAgaWYod2l0aE5hbWUucHJvcChcImNoZWNrZWRcIikgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKCdcXG4nICsgYXNzZXRJZCArICcgJyArIGFzc2V0TmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRJZHMucHVzaChhc3NldElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzc2V0SWRzRmllbGQudmFsKGFzc2V0SWRzKTtcbiAgICBhc3NldElkc0ZpZWxkLnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgZG93bmxvYWQgYXNzZXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEFzc2V0cyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBhc3NldElkcyA9IFtdO1xuXG4gICAgJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJChpdGVtKSk7XG4gICAgICAgIGxldCBhc3NldElkID0gJChpdGVtKS5kYXRhKCdhc3NldC1pZCcpO1xuICAgICAgICBpZihhc3NldElkKSB7XG4gICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYWxsIGlmIG5vIG9uZSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlmIChhc3NldElkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcbiAgICAgICAgICAgIGlmKGFzc2V0SWQpIHtcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICQodGhpcykuZGF0YSgncm91dGUnKSArICcmaWRzPScgKyBhc3NldElkcy5qb2luKCcsJyk7XG59XG4iLCJpbXBvcnQgUmVxdWVzdEJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIG5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmhyZWYpXG4gICAgICAgIC5zdWNjZXNzKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAkKCcjY29sbGVjdGlvbi1udW1iZXInKVxuICAgICAgICAgICAgICAgIC52YWwocmVzdWx0LmNvbGxlY3Rpb25faWQpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHtVUERBVEVfU0FWRV9BTExfQlVUVE9OfSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuLyoqXG4gKiBNYXJrIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkICgpIHtcbiAgICBpZigkKHRoaXMpLmF0dHIoJ3R5cGUnKSAhPSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9ICQodGhpcykucGFyZW50cygndHInKTtcbiAgICAgICAgcGFyZW50Q29udGFpbmVyLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgICAgIG9ic2VydmVyLmRpc3BhdGNoKFVQREFURV9TQVZFX0FMTF9CVVRUT04pO1xuICAgIH1cbn1cbiIsImltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IHVwZGF0ZVNhdmVBbGxCdXR0b24gZnJvbSBcImxpc3RlbmVycy91cGRhdGVTYXZlQWxsQnV0dG9uXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5pbXBvcnQgZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXIgZnJvbSBcIi4vaGFuZGxlcnMvZ2V0TGFzdENvbGxlY3Rpb25OdW1iZXJcIjtcbmltcG9ydCB7Y29weUFzc2V0c30gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFzc2V0c1wiO1xuaW1wb3J0IHtBV0FSRF9DUkVBVEUsIEFXQVJEX0RFTEVURSwgQVdBUkRfQ1JFQVRFRCwgQ0xPU0VfQVdBUkRfTU9EQUx9IGZyb20gXCJtb2R1bGVzL2F3YXJkL2NvbnN0YW50c1wiO1xuaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7bWFya0NoYW5nZWR9IGZyb20gXCIuL2hhbmRsZXJzL21hcmtDaGFuZ2VkXCI7XG5pbXBvcnQge2Rvd25sb2FkQXNzZXRzfSBmcm9tIFwiLi9oYW5kbGVycy9kb3dubG9hZEFzc2V0c1wiO1xuaW1wb3J0IHtVUERBVEVfU0FWRV9BTExfQlVUVE9OfSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQge0RFTFRBX1RJTUVfQVRUUklCVVRFfSBmcm9tIFwibW9kdWxlcy9hY3Rpb24tdHlwZS9jb25zdGFudHNcIjtcblxuJCgnI2Fzc2V0cy10YWJsZScpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlJywgYXdhcmREZWxldGUpO1xuXG4kKCcjYXNzZXQtZm9ybS10eXBlJylcbiAgICAuY2hhbmdlKGNoYW5nZVR5cGUpXG4gICAgLmNoYW5nZSgpO1xuXG4kKCcjZ2V0LWxhc3QtY29sbGVjdGlvbi1udW1iZXInKS5jbGljayhnZXRMYXN0Q29sbGVjdGlvbk51bWJlcik7XG5cblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBDb3B5IGFzc2V0cyBpZHNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb3B5LWFzc2V0cycsIGNvcHlBc3NldHMpXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciBkb3dubG9hZCBhc3NldHNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kb3dubG9hZC1hc3NldHMnLCBkb3dubG9hZEFzc2V0cylcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBhbm5vdW5jZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZChfdGhpcykoKTtcbiAgICB9KVxuXG4gICAgLm9uKCdjaGFuZ2UnLCAnW25hbWUkPVwiW3RpbWVfdHlwZV1cIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUZCA9ICQodGhpcykuY2xvc2VzdCgndGQnKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lSGlkZGVuID0gY3VycmVudFRkLmZpbmQoJ1tuYW1lJD1cIlsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVwiXScpO1xuICAgICAgICBjb25zdCBkZWx0YVRpbWVEaXNwbGF5ID0gY3VycmVudFRkLmZpbmQoJ1tuYW1lJD1cIlsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVtkaXNwbGF5XVwiXScpO1xuXG4gICAgICAgIGRlbHRhVGltZURpc3BsYXkudmFsKGRlbHRhVGltZUhpZGRlbi5kYXRhKCd2YWx1ZScpIC8gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSkpO1xuICAgIH0pXG5cbiAgICAub24oJ2lucHV0JywgJ1tuYW1lJD1cIlsnICsgREVMVEFfVElNRV9BVFRSSUJVVEUgKyAnXVtkaXNwbGF5XVwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRkID0gJCh0aGlzKS5jbG9zZXN0KCd0ZCcpO1xuICAgICAgICBjb25zdCB0aW1lVHlwZSA9IGN1cnJlbnRUZC5maW5kKCdbbmFtZSQ9XCJbdGltZV90eXBlXVwiXScpLnZhbCgpO1xuICAgICAgICBjb25zdCBkZWx0YVRpbWVIaWRkZW4gPSBjdXJyZW50VGQuZmluZCgnW25hbWUkPVwiWycgKyBERUxUQV9USU1FX0FUVFJJQlVURSArICddXCJdJyk7XG5cbiAgICAgICAgZGVsdGFUaW1lSGlkZGVuLnZhbCgkKHRoaXMpLnZhbCgpICogdGltZVR5cGUpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZChfdGhpcykoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJy5mYXN0LXNhdmUtY29udGFpbmVyIGlucHV0LCAuZmFzdC1zYXZlLWNvbnRhaW5lciBzZWxlY3QsIC5mYXN0LXNhdmUtY29udGFpbmVyIHRleHRhcmVhJywgbWFya0NoYW5nZWQpXG5cbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSBvbiBtb2RhbCBjbG9zZVxuICAgICAqL1xuICAgIC5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICB1cGRhdGVTYXZlQWxsQnV0dG9uKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKENMT1NFX0FXQVJEX01PREFMLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFKTtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURUQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiIsImV4cG9ydCBjb25zdCBBV0FSRF9DUkVBVEUgPSAnQVdBUkRfQ1JFQVRFJztcbmV4cG9ydCBjb25zdCBBV0FSRF9DUkVBVEVEID0gJ0FXQVJEX0NSRUFURUQnO1xuZXhwb3J0IGNvbnN0IEFXQVJEX0RFTEVURSA9ICdBV0FSRF9ERUxFVEUnO1xuZXhwb3J0IGNvbnN0IENMT1NFX0FXQVJEX01PREFMID0gJ0NMT1NFX0FXQVJEX01PREFMJztcbiIsIi8qKlxuICogU2hvdyBmb3JtIGV2ZW50XG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEJBTk5FUl9TSE9XX0ZPUk0gPSAnQkFOTkVSX1NIT1dfRk9STSc7XG5cbi8qKlxuICogSWQgb2YgdHlwZSdzIHNlbGVjdFxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBUWVBFX1NFTEVDVF9JRCA9ICdiYW5uZXItdHlwZSc7XG4iLCJpbXBvcnQge1RZUEVfU0VMRUNUX0lEfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQ2hhbmdlIHR5cGUgaGFuZGxlclxuICogSGlkZS9zaG93IHNvbWUgZmllbGRzXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChUWVBFX1NFTEVDVF9JRCk7XG5cbiAgICBpZiAoIXNlbGVjdCB8fCBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3Qub3B0aW9ucy5sZW5ndGggJiYgc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XG5cbiAgICAgICAgJCgnLmJhbm5lci10eXBlJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgJCgnLmJhbm5lci10eXBlLScgKyBzZWxlY3RlZEVsZW1lbnQudmFsdWUpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtCQU5ORVJfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4uL2xpc3RlbmVycy9zaG93Rm9ybVwiO1xuXG4vKipcbiAqIFNob3cgZm9ybSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBJbml0XG4gICAgICovXG4gICAgZHJvcFpvbmVJbml0KEJBTk5FUl9TSE9XX0ZPUk0pO1xuXG4gICAgLyoqXG4gICAgICogSW5pdCBzaG93Rm9ybSBsaXN0ZW5lclxuICAgICAqL1xuICAgIHNob3dGb3JtKCk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtCQU5ORVJfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi4vaGFuZGxlcnMvY2hhbmdlVHlwZVwiO1xuXG4vKipcbiAqIFNob3cgZm9ybSBsaXN0ZW5lclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEJBTk5FUl9TSE9XX0ZPUk0sICgpID0+IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHlwZSBzZWxlY3QgY2hhbmdlIHRyaWdnZXJcbiAgICAgICAgICovXG4gICAgICAgIGNoYW5nZVR5cGUoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGF0ZXMgaW5pdFxuICAgICAgICAgKi9cbiAgICAgICAgJCgnLmJhbm5lci1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCBoaDppaTpzcycsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHNob3dGb3JtIGZyb20gXCIuL2hhbmRsZXJzL3Nob3dGb3JtXCI7XG5pbXBvcnQgY2hhbmdlVHlwZSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5pbXBvcnQge1RZUEVfU0VMRUNUX0lEfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBTaG93IGVkaXQgZm9ybSBvZiBhIGJhbm5lclxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soc2hvd0Zvcm0oKSk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdHlwZSBoYW5kbGVyXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnIycgKyBUWVBFX1NFTEVDVF9JRCwgY2hhbmdlVHlwZSk7XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGNvcHkgYWRwIGlkcyB0byBjbGlwYm9hcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBZHAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZHBJZHNGaWVsZCA9ICQoJ2lucHV0W25hbWU9XCJhZHBfaWRzXCJdJyk7XG4gICAgbGV0IGFkcElkcyA9IFtdO1xuXG4gICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBsZXQgYWRwSWQgPSAkKGl0ZW0pLmRhdGEoJ2lkJyk7XG4gICAgICAgIGlmKGFkcElkKSB7XG4gICAgICAgICAgICBhZHBJZHMucHVzaChhZHBJZCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgaWYgKGFkcElkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAkKCcucm93cy1jb250ZW50JykuZmluZCgnaW5wdXRbbmFtZT1cImZvcl9jb3B5XCJdJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICAgICAgbGV0IGFkcElkID0gJChpdGVtKS5kYXRhKCdpZCcpO1xuICAgICAgICAgICAgaWYgKGFkcElkKSB7XG4gICAgICAgICAgICAgICAgYWRwSWRzLnB1c2goYWRwSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZHBJZHNGaWVsZC52YWwoYWRwSWRzKTtcbiAgICBhZHBJZHNGaWVsZC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgLy8gYWRwSWRzRmllbGQudmFsKFtdKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3IgY29weSBhc3NldHMgaWRzIHRvIGNsaXBib2FyZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weUFzc2V0cyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYXNzZXRJZHNGaWVsZCA9ICQoJ2lucHV0W25hbWU9XCJhc3NldF9pZHNcIl0nKTtcbiAgICBsZXQgYXNzZXRJZHMgPSBbXTtcblxuICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgbGV0IGFzc2V0SWQgPSAkKGl0ZW0pLmRhdGEoJ2Fzc2V0LWlkJyk7XG4gICAgICAgIGlmKGFzc2V0SWQpIHtcbiAgICAgICAgICAgIGFzc2V0SWRzLnB1c2goYXNzZXRJZCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgaWYgKGFzc2V0SWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICQoJy5yb3dzLWNvbnRlbnQnKS5maW5kKCdpbnB1dFtuYW1lPVwiZm9yX2NvcHlcIl0nKS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXRJZCA9ICQoaXRlbSkuZGF0YSgnYXNzZXQtaWQnKTtcbiAgICAgICAgICAgIGlmKGFzc2V0SWQpIHtcbiAgICAgICAgICAgICAgICBhc3NldElkcy5wdXNoKGFzc2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3NldElkc0ZpZWxkLnZhbChhc3NldElkcyk7XG4gICAgYXNzZXRJZHNGaWVsZC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgZm9yIGRvd25sb2FkIGFkcFxuICovXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRBZHAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgYWRwSWRzID0gW107XG4gICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAobiwgaXRlbSkge1xuICAgICAgICBsZXQgYWRwSWQgPSAkKGl0ZW0pLmRhdGEoJ2lkJyk7XG4gICAgICAgIGlmKGFkcElkKSB7XG4gICAgICAgICAgICBhZHBJZHMucHVzaChhZHBJZCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbGwgaWYgbm8gb25lIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgaWYgKGFkcElkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJCgnLnJvd3MtY29udGVudCcpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JfY29weVwiXScpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBhZHBJZCA9ICQoaXRlbSkuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgIGlmIChhZHBJZCkge1xuICAgICAgICAgICAgICAgIGFkcElkcy5wdXNoKGFkcElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2luZG93LmxvY2F0aW9uID0gJCh0aGlzKS5kYXRhKCdyb3V0ZScpICsgJyZpZHM9JyArIGFkcElkcy5qb2luKCcsJyk7XG59XG4iLCIvKipcbiAqIEhhbmRsZXIgb2YgYXJjaGl2ZSBjYXRlZ29yaWVzIG9uIGFkcCBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQXJjaGl2ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnNob3ctYXJjaGl2ZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuYXJjaGl2ZS1jYXRlZ29yaWVzLWxpc3QnKS5odG1sKCcnKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBvZiB0YXNrcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGlkZVRhc2tzKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuc2hvdy10YXNrcycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcudGFza3MtbGlzdCcpLmhpZGUoJ3Nsb3cnKTtcbn1cbiIsIi8qKlxuICogSGFuZGxlciBmb3Igc2VsZWN0IHJvdyBieSBmdWxsIHRkIGFyZWFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFJvdyhlKSB7XG4gICAgaWYgKCEkKGUudGFyZ2V0KS5oYXNDbGFzcygnZm9yLWNvcHknKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gJCh0aGlzKS5maW5kKCcuZm9yLWNvcHknKTtcblxuICAgICAgICBpZihjaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBIYW5kbGVyIG9mIGFyY2hpdmUgY2F0ZWdvcmllcyBvbiBhZHAgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FyY2hpdmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5oaWRlLWFyY2hpdmUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgXG4gICAgbGV0IGFjdGlvbiA9IGN1cnJlbnRFbGVtZW50LmF0dHIoJ2hyZWYnKTtcbiAgICBuZXcgaHR0cChhY3Rpb24pXG4gICAgICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5hcmNoaXZlLWNhdGVnb3JpZXMtbGlzdCcpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG4gICAgXG59XG4iLCIvKipcbiAqIEhhbmRsZXIgb2YgdGFza3Mgb24gYWRwIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrcyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmhpZGUtdGFza3MnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLnRhc2tzLWxpc3QnKS5zaG93KCdzbG93Jyk7XG59XG4iLCIvL2ltcG9ydCB7YnVuZGxlVmVyc2lvblNlbGVjdH0gZnJvbSBcIi4vaGFuZGxlcnMvYnVuZGxlVmVyc2lvblNlbGVjdFwiO1xuaW1wb3J0IHtzaG93QXJjaGl2ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd0FyY2hpdmVcIjtcbmltcG9ydCB7aGlkZUFyY2hpdmV9IGZyb20gXCIuL2hhbmRsZXJzL2hpZGVBcmNoaXZlXCI7XG5pbXBvcnQge2hpZGVUYXNrc30gZnJvbSBcIi4vaGFuZGxlcnMvaGlkZVRhc2tzXCI7XG5pbXBvcnQge3Nob3dUYXNrc30gZnJvbSBcIi4vaGFuZGxlcnMvc2hvd1Rhc2tzXCI7XG5pbXBvcnQge2NvcHlBZHB9IGZyb20gXCIuL2hhbmRsZXJzL2NvcHlBZHBcIjtcbmltcG9ydCB7Y29weUFzc2V0c30gZnJvbSBcIi4vaGFuZGxlcnMvY29weUFzc2V0c1wiO1xuaW1wb3J0IHtzZWxlY3RSb3d9IGZyb20gXCIuL2hhbmRsZXJzL3NlbGVjdFJvd1wiO1xuaW1wb3J0IHtkb3dubG9hZEFkcH0gZnJvbSBcIi4vaGFuZGxlcnMvZG93bmxvYWRBZHBcIjtcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBTaG93IGFyY2hpdmUgYWRwIGNhdGVnb3JpZXNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zaG93LWFyY2hpdmUnLCBzaG93QXJjaGl2ZSlcbiAgICAvKipcbiAgICAgKiBIaWRlIGFyY2hpdmUgYWRwIGNhdGVnb3JpZXNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5oaWRlLWFyY2hpdmUnLCBoaWRlQXJjaGl2ZSlcbiAgICAvKipcbiAgICAgKiBIaWRlIGFkcCB0YXNrcyBieSBzdGF0dXMgYW5kIHVzZXJcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5oaWRlLXRhc2tzJywgaGlkZVRhc2tzKVxuICAgIC8qKlxuICAgICAqIFNob3cgYWRwIHRhc2tzIGJ5IHN0YXR1cyBhbmQgdXNlclxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnNob3ctdGFza3MnLCBzaG93VGFza3MpXG4gICAgLyoqXG4gICAgICogQ29weSBhZHAgaWRzXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY29weS1hZHAnLCBjb3B5QWRwKVxuICAgIC8qKlxuICAgICAqIENvcHkgYXNzZXRzIGlkc1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmNvcHktYXNzZXRzJywgY29weUFzc2V0cylcbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciBkb3dubG9hZCBhc3NldHNcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kb3dubG9hZC1hZHAnLCBkb3dubG9hZEFkcClcbiAgICAvKipcbiAgICAgKiBTaG93IGhpZGUgc2lkZSBib3hcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zaG93LWhpZGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KCQoJy5zaWRlLWJveCcpLmNzcygncmlnaHQnKSkgPCAwKSB7XG4gICAgICAgICAgICAkKCcuc2lkZS1ib3gnKS5jc3MoJ3JpZ2h0JywgMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5zaWRlLWJveCcpLmNzcygncmlnaHQnLCAnLTEwMCUnKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvKipcbiAgICAgKiBTZWxlY3Qgcm93IGJ5IGZ1bGwgdGQgYXJlYVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmlkLWNvbCcsIHNlbGVjdFJvdyk7XG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IENBU0ggPSAnY2FzaF9hZGRlZCc7XG5leHBvcnQgY29uc3QgQ09JTiA9ICdjb2luc19hZGRlZCc7XG5leHBvcnQgY29uc3QgQVNTRVQgPSAnYXNzZXRzX2FkZGVkJztcbiIsImltcG9ydCB7Q0FTSH0gZnJvbSBcIm1vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9jb25zdGFudHNcIjtcbmltcG9ydCB7Q09JTn0gZnJvbSBcIm1vZHVsZXMvY21zLXVzZXItYWN0aW9ucy9jb25zdGFudHNcIjtcbmltcG9ydCB7QVNTRVR9IGZyb20gXCJtb2R1bGVzL2Ntcy11c2VyLWFjdGlvbnMvY29uc3RhbnRzXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBTZXQgY3Vyc29yIHRvIHBhcmVudCBub2RlXG4gICAgICovXG4gICAgLm9uKCdtb3VzZWVudGVyJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLmZpbmQoJy5oaWRkZW4td3JhcHBlcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2N1cnNvcicsICdwb2ludGVyJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRmlsdGVyIHNlbGVjdCBvcHRpb25zIGJ5IHNlbGVjdGVkIHNvdXJjZVxuICAgICAqL1xuICAgIC5vbignY2hhbmdlJywgJyNmaWx0ZXJfc291cmNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzb3VyY2VWYWwgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAkKFwiI2ZpbHRlcl9hY3Rpb25cIikuc2VsZWN0Mih7XG4gICAgICAgICAgICBtYXRjaGVyOiBmdW5jdGlvbiAocGFyYW1zLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZVZhbCAhPT0gJ3VzZXJfZGVidWcnICYmICQuaW5BcnJheShkYXRhLmlkLCBbQ0FTSCwgQ09JTiwgQVNTRVRdKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE9wZW4gZGVwbG95IGluZm9cbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJ3RkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gJCh0aGlzKS5maW5kKCcuaGlkZGVuLXdyYXBwZXInKTtcblxuICAgICAgICBpZiAod3JhcHBlciAmJiB3cmFwcGVyLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnb3BlbicpXG4gICAgICAgIH1cbiAgICB9KTtcbiIsImV4cG9ydCBjb25zdCBDT0xMRUNUSU9OX1NIT1dfRk9STSA9ICdDT0xMRUNUSU9OX1NIT1dfRk9STSc7XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5jb25zdCBhc3NldFByZXZpZXdUZW1wbGF0ZSA9ICQoJyNhc3NldC1wcmV2aWV3LXRlbXBsYXRlJykuaHRtbCgpO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGFsbCBwYWdlXG4gKlxuICogQHBhcmFtIGVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjdXJyZW50QnRuID0gJCh0aGlzKTtcbiAgICBjb25zdCBzYXZlZEl0ZW0gPSAkKCcuZmFzdC1zYXZlLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKCFzYXZlZEl0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBTYXZlZEl0ZW1Ob3RGb3VuZDtcbiAgICB9XG5cbiAgICBpZiAoc2F2ZWRJdGVtLmhhc0NsYXNzKCdwcm9ncmVzcycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2F2ZWRJdGVtLmFkZENsYXNzKCdwcm9ncmVzcycpO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGNoYW5nZWQgZGF0YVxuICAgICAqL1xuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHNhdmVkSXRlbS5maW5kKCcuY2hhbmdlZCcpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtSXRlbXMpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV3IGh0dHAoY3VycmVudEJ0bi5hdHRyKCdocmVmJykpXG4gICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5jb21wbGV0ZSgoKSA9PiB7XG4gICAgICAgICAgICBzYXZlZEl0ZW0ucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGZvcm1JdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmhhc0NsYXNzKCdhc3NldC1pZCcpICYmICEhcmVzcG9uc2UuYXNzZXRzW2N1cnJlbnRJdGVtLnZhbCgpXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QXNzZXQgPSByZXNwb25zZS5hc3NldHNbY3VycmVudEl0ZW0udmFsKCldO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5zbG90JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuYXNzZXQtcHJldmlldycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChhc3NldFByZXZpZXdUZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCcldXJsJScsIFwiZ1wiKSwgY3VycmVudEFzc2V0LnByZXZpZXdfdXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCBuZXcgUmVnRXhwKCcldGl0bGUlJywgXCJnXCIpLCBjdXJyZW50QXNzZXQubmFtZSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSBhZGRpdGlvbmFsIHJvd3NcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoJy5hZGRpdGlvbmFsLWRhdGEnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBNYXJrIGlucHV0IGFzIGNoYW5nZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbmV3IFNvcnRhYmxlKF90aGlzLCB7XG4gICAgICAgIGdyb3VwOiBfdGhpcy5kYXRhc2V0Lmdyb3VwLFxuICAgICAgICByZW1vdmVDbG9uZU9uSGlkZTogdHJ1ZSxcbiAgICAgICAgb25FbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQoZS50YXJnZXQpLmZpbmQoX3RoaXMuZGF0YXNldC5wb3NpdGlvbikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHBvc2l0aW9uLnZhbCgpKSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udmFsKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBkcm9wWm9uZUluaXQgZnJvbSBcImxpc3RlbmVycy9kcm9wWm9uZUluaXRcIjtcbmltcG9ydCB7Q09MTEVDVElPTl9TSE9XX0ZPUk19IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlXCI7XG5pbXBvcnQgbWFya0lucHV0QXNDaGFuZ2VkIGZyb20gXCIuL2hhbmRsZXJzL21hcmtJbnB1dEFzQ2hhbmdlZFwiO1xuaW1wb3J0IHNvcnRhYmxlSW5pdCBmcm9tIFwiLi9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcbmltcG9ydCBoaWRlQWRkaXRpb25hbFJvd3MgZnJvbSBcIi4vaGFuZGxlcnMvaGlkZUFkZGl0aW9uYWxSb3dzXCI7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KENPTExFQ1RJT05fU0hPV19GT1JNKSk7XG5cbi8qKlxuICogRmFzdCBzYXZlIGNvbGxlY3Rpb25cbiAqL1xuJCgnLmNvbGxlY3Rpb24tZmFzdC1zYXZlJykuY2xpY2soZmFzdFNhdmUpO1xuXG4vKipcbiAqIE1hcmsgaW5wdXRzIGFzIGNoYW5nZWRcbiAqL1xuJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKS5maW5kKCdpbnB1dCcpLmNoYW5nZShtYXJrSW5wdXRBc0NoYW5nZWQpO1xuXG4vKipcbiAqIFNvcnRhYmxlIGluaXRcbiAqL1xuJCgnLnNvcnRhYmxlJykuZWFjaChzb3J0YWJsZUluaXQpO1xuXG4vKipcbiAqIEhpZGUgYWRkaXRpb25hbCByb3dzXG4gKi9cbiQoJy5oaWRlLXNsb3RzJykuY2xpY2soaGlkZUFkZGl0aW9uYWxSb3dzKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIHJvd3MgdG8gdGhlIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFJvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI2Nyb3BzID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjY3JvcF90ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJy5jcm9wX2lkJykudGV4dCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVjcm9wJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIERlbGV0ZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVJvdygpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZFJvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkUm93XCI7XG5pbXBvcnQge2RlbGV0ZVJvd30gZnJvbSBcIi4vaGFuZGxlcnMvZGVsZXRlUm93XCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURUQsIEFXQVJEX0RFTEVURX0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1yb3cnLCBhZGRSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGRlbGV0ZVJvdylcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAgICAgYXdhcmRDcmVhdGUuYmluZCh0aGlzKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9DUkVBVEVELCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCwgc2VsZik7XG5cbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyb3cuYWRkQ2xhc3MoJ2NoYW5nZWQnKSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcuZmFzdC1zYXZlLXBhZ2UnKS5jbGljaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAgICAgYXdhcmREZWxldGUuYmluZCh0aGlzKSgpO1xuXG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9ERUxFVEUsIHNlbGYpO1xuXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocm93LmFkZENsYXNzKCdjaGFuZ2VkJykpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLmZhc3Qtc2F2ZS1wYWdlJykuY2xpY2soKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNkYWlseV9sb290ID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjZGFpbHlfbG9vdF90ZW1wbGF0ZScpLmh0bWwoKTtcbiAgICBsZXQgbGFzdElEUyA9IFtdO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IDE7XG4gICAgdGJvZHkuZmluZChcInRyXCIpLmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgaWYocGFyc2VJbnQoJChpdGVtKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkudmFsKCkpKXtcbiAgICAgICAgICAgIGxhc3RJRFMucHVzaChwYXJzZUludCgkKGl0ZW0pLmZpbmQoJ2lucHV0JykuZmlyc3QoKS52YWwoKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihsYXN0SURTLmxlbmd0aCl7XG4gICAgICAgIGluY3JlbWVudElkID0gKE1hdGgubWF4LmFwcGx5KE1hdGgsbGFzdElEUykgKyAxKSB8fCAxO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVyb3dJbmRleCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgICAgIHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnaW5wdXQnKS5maXJzdCgpLnZhbChpICsgaW5jcmVtZW50SWQpO1xuXG4gICAgICAgIHRib2R5LmZpbmQoJy5kYXRlcGlja2VyJylcbiAgICAgICAgICAgIC5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pblZpZXc6ICcyJ1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeUVycm9yIGZyb20gXCJjb21wb25lbnRzL25vdGlmeS9ub3RpZnlFcnJvclwiO1xuaW1wb3J0IHN1Y2Nlc3NIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvc3VjY2Vzc0hhbmRsZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBzb3VuZCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN0YXRlICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSAkKCcuZGFpbHktbG9vdC1zYXZlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRhdGEgPSBjb250YWluZXIuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cCgkKHRoaXMpLmRhdGEoJ3JvdXRlJykpXG4gICAgICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ3RyLmNoYW5nZWQnKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3ApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTdGF0ZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVN0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJlbW92ZS1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW1wdHkgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFN3aXRjaCBwYWdlIHR5cGVcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy50b2dnbGUtcGFnZS10eXBlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMCwgbG9jYXRpb24ucGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSkgKyAkKHRoaXMpLmRhdGEoJ2hyZWYnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSByb3dzIHRvIGFkZFxuICAgICAqIENoYW5nZSBjb3VudGVyXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcjY29tbW9uLW1lbnUnKS5maW5kKCcuY29tbW9uLW1lbnUtc2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmKCQodGhpcykuZmluZCgnbGknKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY29tbW9uLW1lbnUtc2VjdGlvbicpLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuLyoqXG4gKiBTaG93IERlcGxveSBTdGF0dXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcGxveVN0YXR1cygpIHtcbiAgICBuZXcgaHR0cChERVBMT1lfU1RBVFVTX1JPVVRFKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAkKCcuZGVwbG95LXN0YXR1cycpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gJCgnLmRlcGxveS1zdGF0dXMnKS5maW5kKCcuYWN0aXZlLWRlcGxveScpLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAkKCcuZGVwbG95LWJ0bicpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoJCgnLmRlcGxveS1idG4nKS5oYXNDbGFzcygnbG9hZGluZycpKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtkZXBsb3lTdGF0dXMoKTt9LCAzMDAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcbn1cbiIsIlxuLyoqXG4gKiBIYW5kbGVyIGZvciBjaGFuZ2UgdGFiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3VycmVudEVsZW1lbnQuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdXJsICs9IFwiP2RpcmVjdGlvbj1cIiArIGRpcmVjdGlvbjtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgIGlkOiAnZGVwbG95J1xuICAgIH0sICdEZXBsb3knLCB1cmwpO1xufVxuIiwiLyoqXG4gKiBIYW5kbGVyIGZvciBzaG93INCyZXBlbmRlbmN5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93RGVwZW5kZW5jeShlKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCcuY29uZmlnLWl0ZW0tYmxvY2snKS5kYXRhKCdtb2RlbCcpO1xuICAgIGxldCBhZGRNb2RlID0gY3VycmVudEVsZW1lbnQuaXMoJzpjaGVja2VkJyk7XG5cbiAgICBvbmVMZXZlbFNob3coY3VycmVudENvbmZpZywgYWRkTW9kZSk7XG59XG5cbmZ1bmN0aW9uIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBhZGRNb2RlLCBsZXZlbCA9IDEpIHtcbiAgICBpZihERVBMT1lfREVQRU5EUy5oYXNPd25Qcm9wZXJ0eShjb25maWdOYW1lKSAmJiBsZXZlbCA8IDEwKSB7XG4gICAgICAgIGxldCBjb25maWdCbG9jayA9ICQoJy5tb2RlbC0nICsgY29uZmlnTmFtZSk7XG4gICAgICAgIGlmKGFkZE1vZGUpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLmFkZENsYXNzKCdkZXBsb3ktY2hhaW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZ0Jsb2NrLnJlbW92ZUNsYXNzKCdkZXBsb3ktY2hhaW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXSkge1xuICAgICAgICAgICAgbGV0IGRlcGVuZENvbmZpZ05hbWUgPSBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBjb25maWdCbG9jayA9ICQoJy5tb2RlbC0nICsgZGVwZW5kQ29uZmlnTmFtZSk7XG4gICAgICAgICAgICBpZihhZGRNb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnQmxvY2suYWRkQ2xhc3MoJ2RlcGxveS1jaGFpbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25maWdCbG9jay5yZW1vdmVDbGFzcygnZGVwbG95LWNoYWluJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbmVMZXZlbFNob3coZGVwZW5kQ29uZmlnTmFtZSwgYWRkTW9kZSwgbGV2ZWwgKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IE1vZGFsQnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9tb2RhbC9Nb2RhbEJ1aWxkZXJcIjtcbmltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciBzaG93IGRlcGVuZGVuY3kgcG9wdXBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dEZXBlbmRlbmN5UG9wdXAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRzKCcuY29uZmlnLWl0ZW0tYmxvY2snKS5kYXRhKCdtb2RlbCcpO1xuICAgIGNvbnN0IGN1cnJlbnRDb25maWdJZCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJy5jb25maWctaXRlbS1ibG9jaycpLmRhdGEoJ2lkJyk7XG4gICAgbGV0IGlkcyA9IFtdO1xuICAgIGlmKGN1cnJlbnRDb25maWdJZCkge1xuICAgICAgICBpZHMucHVzaChjdXJyZW50Q29uZmlnSWQpO1xuICAgIH1cblxuICAgIHJvb3RMZXZlbFNob3coY3VycmVudENvbmZpZywgaWRzKTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogT25lIGxldmVsIHNob3dcbiAqXG4gKiBAcGFyYW0gY29uZmlnTmFtZVxuICogQHBhcmFtIGRlcGVuZENvbmZpZ05hbWVcbiAqIEBwYXJhbSBsZXZlbFxuICogQHBhcmFtIGlkUmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gb25lTGV2ZWxTaG93KGNvbmZpZ05hbWUsIGRlcGVuZENvbmZpZ05hbWUsICBsZXZlbCA9IDEsIGlkUmVzcG9uc2UpIHtcbiAgICBpZihERVBMT1lfREVQRU5EUy5oYXNPd25Qcm9wZXJ0eShjb25maWdOYW1lKSAmJiBsZXZlbCA8IDEwKSB7XG4gICAgICAgIGxldCBpZHMgPSBpZFJlc3BvbnNlLmlkcztcbiAgICAgICAgbGV0IHRleHRDbGFzcyA9ICcnO1xuICAgICAgICBpZihpZFJlc3BvbnNlLmhhc093blByb3BlcnR5KCdub3RJbXBsZW1lbnRlZCcpKSB7XG4gICAgICAgICAgICB0ZXh0Q2xhc3MgPSAndGV4dC1tdXRlZCc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNSZWN1cnNpb24gPSBmYWxzZTtcbiAgICAgICAgJCgnLmNoYWluLScgKyBjb25maWdOYW1lKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZigkKHRoaXMpLnBhcmVudHMoJy5jaGFpbi0nICsgZGVwZW5kQ29uZmlnTmFtZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlzUmVjdXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZChcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjaGFpbi0nICsgZGVwZW5kQ29uZmlnTmFtZSArICdcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cIicgKyB0ZXh0Q2xhc3MgKyAnXCI+JyArIGRlcGVuZENvbmZpZ05hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPihSZWN1cnNpb24pPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2Pjxicj4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZigkKHRoaXMpLmZpbmQoJy5jaGFpbi0nICsgZGVwZW5kQ29uZmlnTmFtZSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZChcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjaGFpbi0nICsgZGVwZW5kQ29uZmlnTmFtZSArICdcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIHRleHRDbGFzcyArICdcIj4nICsgZGVwZW5kQ29uZmlnTmFtZSArICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgICAgIChpZHMubGVuZ3RoID4gMCA/ICc8c3BhbiBjbGFzcz1cImRlcGVuZC1pZHNcIj4gJyArIGlkcy5qb2luKCcsJykgKyAnPC9zcGFuPicgOiAnJykgICtcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1JlY3Vyc2lvbikge1xuICAgICAgICAgICAgZ2V0RGVwbG95TW9kZWxJZHMoZGVwZW5kQ29uZmlnTmFtZSwgbGV2ZWwsIGlkcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBSb290IGxldmVsIHNob3dcbiAqXG4gKiBAcGFyYW0gY29uZmlnTmFtZVxuICogQHBhcmFtIGlkc1xuICovXG5mdW5jdGlvbiByb290TGV2ZWxTaG93KGNvbmZpZ05hbWUsIGlkcyA9IFtdKSB7XG4gICAgbmV3IGh0dHAoREVQTE9ZX01PREVMX0lEU19ST1VURSlcbiAgICAgICAgLm1ldGhvZCgncG9zdCcpXG4gICAgICAgIC5kYXRhKHtcbiAgICAgICAgICAgICdkaXJlY3Rpb24nOiBBQ1RJVkVfRElSRUNUSU9OLFxuICAgICAgICAgICAgJ2RlcGVuZGVudE1vZGVsJzogY29uZmlnTmFtZSxcbiAgICAgICAgICAgICdkZXBlbmRlbnRNb2RlbElkcyc6IGlkc1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBsZXQgaWRzID0gcmVzcG9uc2UuaWRzIHx8IFtdO1xuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRlcGxveS1jaGFpbi1ibG9ja1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgJCgnLmRlcGxveS1jaGFpbi1ibG9jaycpLmh0bWwoJzxkaXYgY2xhc3M9XCJjaGFpbi0nICsgY29uZmlnTmFtZSArICdcIj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4+JyArIGNvbmZpZ05hbWUgKyAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImRlcGVuZC1pZHNcIj4gJyArIGlkcy5qb2luKCcsJykgKyAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nKTtcblxuICAgICAgICAgICAgbmV3IE1vZGFsQnVpbGRlcigpXG4gICAgICAgICAgICAgICAgLmhlYWRlcignRGVwbG95IGRlcGVuZGVuY3knKVxuICAgICAgICAgICAgICAgIC5ib2R5KCQoJy5kZXBsb3ktY2hhaW4tYmxvY2snKSlcbiAgICAgICAgICAgICAgICAubW9kYWwoKTtcblxuICAgICAgICAgICAgZ2V0RGVwbG95TW9kZWxJZHMoY29uZmlnTmFtZSwgMSwgaWRzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcbn1cblxuLyoqXG4gKiBHZXQgZGVwbG95IG1vZGVsIGlkc1xuICpcbiAqIEBwYXJhbSBjb25maWdOYW1lXG4gKiBAcGFyYW0gbGV2ZWxcbiAqIEBwYXJhbSBpZHNcbiAqL1xuZnVuY3Rpb24gZ2V0RGVwbG95TW9kZWxJZHMoY29uZmlnTmFtZSwgbGV2ZWwgPSAxLCBpZHMgPSBbXSkge1xuICAgIGZvciAobGV0IGtleSBpbiBERVBMT1lfREVQRU5EU1tjb25maWdOYW1lXSkge1xuICAgICAgICBsZXQgZGVwZW5kQ29uZmlnTmFtZSA9IERFUExPWV9ERVBFTkRTW2NvbmZpZ05hbWVdW2tleV07XG5cbiAgICAgICAgaWYoaWRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbmV3IGh0dHAoREVQTE9ZX01PREVMX0lEU19ST1VURSlcbiAgICAgICAgICAgICAgICAubWV0aG9kKCdwb3N0JylcbiAgICAgICAgICAgICAgICAuZGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICdkaXJlY3Rpb24nOiBBQ1RJVkVfRElSRUNUSU9OLFxuICAgICAgICAgICAgICAgICAgICAnbW9kZWwnOiBkZXBlbmRDb25maWdOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnZGVwZW5kZW50TW9kZWwnOiBjb25maWdOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnZGVwZW5kZW50TW9kZWxJZHMnOiBpZHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25lTGV2ZWxTaG93KGNvbmZpZ05hbWUsIGRlcGVuZENvbmZpZ05hbWUsIGxldmVsICsgMSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9uZUxldmVsU2hvdyhjb25maWdOYW1lLCBkZXBlbmRDb25maWdOYW1lLCBsZXZlbCArIDEsIHsnaWRzJzogW119KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7Y2hhbmdlVGFifSBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VUYWJcIjtcbmltcG9ydCB7c2hvd0RlcGVuZGVuY3l9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dEZXBlbmRlbmN5XCI7XG5pbXBvcnQge3Nob3dEZXBlbmRlbmN5UG9wdXB9IGZyb20gXCIuL2hhbmRsZXJzL3Nob3dEZXBlbmRlbmN5UG9wdXBcIjtcbmltcG9ydCBmYXN0U2F2ZVBhZ2UgZnJvbSBcImhhbmRsZXJzL2Zhc3RTYXZlUGFnZVwiO1xuaW1wb3J0IHtkZXBsb3lTdGF0dXN9IGZyb20gXCIuL2RlcGxveVN0YXR1c1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdXJsIG9uIHRhYiBjaGFuZ2VcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZXBsb3ktdGFicyAubmF2LWxpbmsnLCBjaGFuZ2VUYWIpXG4gICAgLyoqXG4gICAgICogU2F2ZSBhbGwgcGFnZVxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmZhc3Qtc2F2ZS1wYWdlLWN1c3RvbScsIGZhc3RTYXZlUGFnZSlcbiAgICAvKipcbiAgICAgKiBTaG93IGRlcGVuZGVuY3lcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5jb25maWctY2hlY2tib3gnLCBzaG93RGVwZW5kZW5jeSlcbiAgICAvKipcbiAgICAgKiBTaG93IGRlcGVuZGVuY3kgcG9wdXBcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5zaG93LWRlcGVuZGVuY3knLCBzaG93RGVwZW5kZW5jeVBvcHVwKVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2svdW5jaGVjayBhd2FyZCBkZXBlbmRlbmNpZXNcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuYXdhcmQtZGVwZW5kZW5jeSBbdHlwZT1jaGVja2JveF0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hd2FyZC1kZXBlbmRlbmN5IFt0eXBlPWNoZWNrYm94XScpLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xuICAgIH0pXG5cbiAgICAucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgZGVwbG95U3RhdHVzKCk7XG4gICAgfSk7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbGV2ZWxzIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNkcGEgPiB0Ym9keScpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmRwYV9pZCcpLnZhbCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgdHJMYXN0ID0gJCgnI2RwYV90ZW1wbGF0ZScpLmh0bWwoKS5yZXBsYWNlKC8lZHBhX2lkJS9nLCBpICsgaW5jcmVtZW50SWQpO1xuXG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBkcGEgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVEcGFTdGF0ZSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCByb3V0ZSA9ICQodGhpcykuZGF0YSgncm91dGUnKTtcbiAgICBsZXQgZGF0YSA9ICQoJy5kcGEtc2F2ZS1wYWdlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZCBpbnB1dCwgLmNoYW5nZWQgc2VsZWN0XCIpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZURwYVN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlRHBhU3RhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBkcGFcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvdyB0byB0aGUgZHBhIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5hZGQtbmV3LXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvdyB0byB0aGUgZHBhIGdyaWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZHBhLXNhdmUtcGFnZScsIHNhdmVEcGFTdGF0ZSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjZHllID4gdGJvZHknKTtcbiAgICBjb25zdCB0ckxhc3QgPSAkKCcjZHllX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QpO1xuXG4gICAgICAgIGxldCBsYXN0Um93ID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcuY3AyJyk7XG4gICAgICAgIGxhc3RSb3cuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICQoaXRlbSkuY29sb3JwaWNrZXIoe30pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogQ2hhbmdlIHJvdyBpbmRleFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUm93SW5kZXgoKSB7XG4gICAgbGV0IHJvd0luZGV4ID0gJCh0aGlzKS52YWwoKTtcbiAgICBsZXQgcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJ2lucHV0LCBzZWxlY3QnKTtcblxuICAgIHJvdy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICBsZXQgb2xkTmFtZSA9ICQoaXRlbSkuYXR0cignbmFtZScpO1xuICAgICAgICBsZXQgbmV3TmFtZSA9IG9sZE5hbWUuc2xpY2UoMCwgNCkgKyByb3dJbmRleCArICBvbGROYW1lLnNsaWNlKG9sZE5hbWUuaW5kZXhPZignXScpKTtcbiAgICAgICAgJChpdGVtKS5hdHRyKCduYW1lJywgbmV3TmFtZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1NhdmVkSXRlbU5vdEZvdW5kfSBmcm9tIFwiZXhjZXB0aW9ucy9TYXZlZEl0ZW1Ob3RGb3VuZFwiO1xuaW1wb3J0IGdldEZvcm1EYXRhIGZyb20gXCJoZWxwZXJzL2dldEZvcm1EYXRhXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuXG5leHBvcnQgY29uc3QgRFlFX0NPTlRBSU5FUl9TRUxFQ1RPUiA9ICcuZHllLXNhdmUtcGFnZS1jb250YWluZXInO1xuXG4vKipcbiAqIEZhc3Qgc2F2ZSBkYXRhIGZyb20gdGhlIGR5ZXMgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2F2ZWRJdGVtID0gJChEWUVfQ09OVEFJTkVSX1NFTEVDVE9SKTtcblxuICAgIGlmICghc2F2ZWRJdGVtLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgU2F2ZWRJdGVtTm90Rm91bmQ7XG4gICAgfVxuXG4gICAgaWYgKHNhdmVkSXRlbS5oYXNDbGFzcygncHJvZ3Jlc3MnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNhdmVkSXRlbS5hZGRDbGFzcygncHJvZ3Jlc3MnKTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGFuZ2VkIGRhdGFcbiAgICAgKi9cbiAgICBjb25zdCBmb3JtSXRlbXMgPSBzYXZlZEl0ZW0uZmluZCgnLmNoYW5nZWQnKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0Rm9ybURhdGEoZm9ybUl0ZW1zKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgIHNhdmVkSXRlbS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5ldyBodHRwKGN1cnJlbnRCdG4uYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQVVQnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuY29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZWRJdGVtLnJlbW92ZUNsYXNzKCdwcm9ncmVzcycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBNYXJrIGZvcm0ncyB0ciBhcyBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZFRyKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtjaGFuZ2VSb3dJbmRleH0gZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUm93SW5kZXhcIjtcbmltcG9ydCBkeWVTYXZlUGFnZSwge0RZRV9DT05UQUlORVJfU0VMRUNUT1IsIG1hcmtDaGFuZ2VkVHJ9IGZyb20gXCIuL2hhbmRsZXJzL2R5ZVNhdmVQYWdlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNvbG9yLXBpY2tlciBpbnB1dHNcbiAgICAgKi9cbiAgICAucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5jcDInKS5jb2xvcnBpY2tlcigpXG4gICAgICAgICAgICAub24oJ2NyZWF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudClcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIE1hcmsgdHIgYXMgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgLm9uKCdjaGFuZ2UnLCBgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBpbnB1dCwgJHtEWUVfQ09OVEFJTkVSX1NFTEVDVE9SfSBzZWxlY3QsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gdGV4dGFyZWFgLCBtYXJrQ2hhbmdlZFRyKVxuICAgICAgICAgICAgICAgICAgICAub24oJ2lucHV0JywgYCR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gaW5wdXQsICR7RFlFX0NPTlRBSU5FUl9TRUxFQ1RPUn0gc2VsZWN0LCAke0RZRV9DT05UQUlORVJfU0VMRUNUT1J9IHRleHRhcmVhYCwgbWFya0NoYW5nZWRUcik7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVtcHR5IHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2Ugcm93IGluZGV4XG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYXNzZXRfaWQnLCBjaGFuZ2VSb3dJbmRleClcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gICAgICovXG4gICAgJCgnLmR5ZS1zYXZlLXBhZ2UnKS5jbGljayhkeWVTYXZlUGFnZSk7XG4iLCJleHBvcnQgY29uc3QgR0lGVF9XUkFQX1JPV19BRERFRCA9ICdHSUZUX1dSQVBfUk9XX0FEREVEJztcbiIsImltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9lcnJvckhhbmRsZXJcIjtcblxuLyoqXG4gKiBBc3NldCBJRCBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdXJyZW50SW5wdXQgPSAkKHRoaXMpO1xuICAgIGNvbnN0IGFzc2V0SUQgPSBjdXJyZW50SW5wdXQudmFsKCk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudElucHV0LmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBkdXBsaWNhdGVkIGFzc2V0cyBpZHNcbiAgICAgKi9cbiAgICBjb25zdCBjdXJyZW50QXNzZXREdXBsaWNhdGUgPSAkKCcjZ2lmdC13cmFwcy1jb250YWluZXInKS5maW5kKCcuYXNzZXQtaWQnKS5maWx0ZXIoKF8sIGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGFzc2V0SUQgPT09IGl0ZW0udmFsdWU7XG4gICAgfSk7XG5cbiAgICBpZiAoY3VycmVudEFzc2V0RHVwbGljYXRlLmxlbmd0aCA+IDEpe1xuICAgICAgICBlcnJvckhhbmRsZXIoeydtZXNzYWdlJzogJ0R1cGxpY2F0ZSBhc3NldCAnICsgYXNzZXRJRH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGlucHV0cyBuYW1lc1xuICAgICAqL1xuICAgIHBhcmVudC5maW5kKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUucmVwbGFjZSggL1xcW1tcXGRdK1xcXS9nLCBgWyR7YXNzZXRJRH1dYCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgaHJlZiBvZiB0aGUgZGVsZXRlIGJ1dHRvblxuICAgICAqL1xuICAgIHBhcmVudC5maW5kKCcuYWpheC1jb25maXJtLWFjdGlvbi1jdXN0b20nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ocmVmID0gdGhpcy5ocmVmLnJlcGxhY2UoIC9cXC9bXFxkXSskL2csIGAvJHthc3NldElEfWApO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiaGFuZGxlcnMvZmFzdFNhdmVQYWdlXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgcG9zaXRpb25VcGRhdGUgZnJvbSBcIi4uL2hlbHBlcnMvcG9zaXRpb25VcGRhdGVcIjtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBmcm9tIHRoZSBhbGwgcGFnZVxuICpcbiAqIEBwYXJhbSBlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXNzZXRzID0ge307XG4gICAgICAgICQoJyNnaWZ0LXdyYXBzLWNvbnRhaW5lcicpLmZpbmQoJy5hc3NldC1pZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGFzc2V0c1t0aGlzLnZhbHVlXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXNzZXRzW3RoaXMudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9ySGFuZGxlcih7J21lc3NhZ2UnOiAnRHVwbGljYXRlIGFzc2V0ICcgKyBlcnIubWVzc2FnZX0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gdXBkYXRlXG4gICAgICovXG4gICAgcG9zaXRpb25VcGRhdGUoKTtcblxuICAgIGZhc3RTYXZlUGFnZS5iaW5kKHRoaXMpKGUpO1xufVxuIiwiaW1wb3J0IGNvbmZpcm1Nb2RhbCBmcm9tIFwiaGFuZGxlcnMvY29uZmlybU1vZGFsXCI7XG5cbi8qKlxuICogUmVtb3ZlIGVtYmVkZWQgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGJ1dHRvblVybCA9IHRoaXMuaHJlZi5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgndHInKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChwYXJzZUludChidXR0b25VcmxbYnV0dG9uVXJsLmxlbmd0aCAtIDFdKSA9PT0gMCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25maXJtTW9kYWwuYmluZCh0aGlzKShlKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcbmltcG9ydCBwb3NpdGlvblVwZGF0ZSBmcm9tIFwibW9kdWxlcy9naWZ0LXdyYXAvaGVscGVycy9wb3NpdGlvblVwZGF0ZVwiO1xuXG4vKipcbiAqIFNvcnRhYmxlIEluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBuZXcgU29ydGFibGUoX3RoaXMsIHtcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qKlxuICogUG9zaXRpb24gdXBkYXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKCcucG9zaXRpb24nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSAkKCcjcGFnZScpLnZhbCgpO1xuICAgICAgICBjb25zdCBwYWdlX2xpbWl0ID0gJCgnW25hbWU9XCJwYWdlX2xpbWl0XCJdJykudmFsKCk7XG5cbiAgICAgICAgaWYgKHBhcnNlSW50KHBvc2l0aW9uLnZhbCgpKSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnZhbChpbmRleCArICgocGFnZSAtIDEpICogcGFnZV9saW1pdCkpO1xuICAgICAgICAgICAgcG9zaXRpb24uY2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0dJRlRfV1JBUF9ST1dfQURERUR9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBBZGQgbmV3IHJvdyB0byBncmlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoR0lGVF9XUkFQX1JPV19BRERFRCwgZGF0YSA9PiB7XG4gICAgICAgICQoJyNnaWZ0LXdyYXAtJyArIGRhdGEuZW1iZWRCbG9ja0lkKVxuICAgICAgICAgICAgLmZpbmQoJy5kYXRldGltZXBpY2tlcicpXG4gICAgICAgICAgICAuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxuICAgICAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgc29ydGFibGVJbml0IGZyb20gXCIuL2hhbmRsZXJzL3NvcnRhYmxlSW5pdFwiO1xuaW1wb3J0IGFzc2V0Q2hhbmdlZCBmcm9tIFwiLi9oYW5kbGVycy9hc3NldENoYW5nZWRcIjtcbmltcG9ydCBhZGRSb3cgZnJvbSBcIi4vbGlzdGVuZXJzL2FkZFJvd1wiO1xuaW1wb3J0IGZhc3RTYXZlUGFnZSBmcm9tIFwiLi9oYW5kbGVycy9mYXN0U2F2ZVBhZ2VcIjtcbmltcG9ydCByZW1vdmVSb3cgZnJvbSBcIi4vaGFuZGxlcnMvcmVtb3ZlUm93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgYXNzZXQgaWQgaW4gaW5wdXRcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcuYXNzZXQtaWQnLCBhc3NldENoYW5nZWQpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWpheC1jb25maXJtLWFjdGlvbi1jdXN0b20nLCByZW1vdmVSb3cpO1xuXG4vKipcbiAqIEFkZCByb3cgbGlzdGVuZXJcbiAqL1xuYWRkUm93KCk7XG5cbi8qKlxuICogU29ydGFibGUgaW5pdFxuICovXG4kKCcuc29ydGFibGUnKS5lYWNoKHNvcnRhYmxlSW5pdCk7XG5cbi8qKlxuICogU2F2ZSBhbGwgcGFnZVxuICovXG4kKCcuZmFzdC1zYXZlLXBhZ2UtY3VzdG9tJykuY2xpY2soZmFzdFNhdmVQYWdlKTsiLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogSGFuZGxlciBmb3Igc2hvdyBhc3NldFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Fzc2V0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGxldCBhY3Rpb24gPSBTV09XX0FTU0VUX1JPVVRFICsgJz9pZD0nICsgY3VycmVudEVsZW1lbnQudmFsKCk7XG4gICAgbmV3IGh0dHAoYWN0aW9uKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpKSB7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudHMoJ3RyJykuZmluZCgnLmFzc2V0LW5hbWUnKS5odG1sKHJlc3BvbnNlLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ3ByZXZpZXdfdXJsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtcHJldmlldyBpbWcnKS5hdHRyKCdzcmMnLCByZXNwb25zZS5kYXRhLnByZXZpZXdfdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50cygndHInKS5maW5kKCcuYXNzZXQtcHJldmlldyAubGlzdC10aHVtYm5haWwnKS5kYXRhKCdmdWxsJywgcmVzcG9uc2UuZGF0YS5wcmV2aWV3X3VybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG59XG4iLCJcbmltcG9ydCB7c2hvd0Fzc2V0fSBmcm9tIFwiLi9oYW5kbGVycy9zaG93QXNzZXRcIjtcblxuJChkb2N1bWVudClcbiAgICAvKipcbiAgICAgKiBTaG93IGFzc2V0XG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLmFzc2V0Jywgc2hvd0Fzc2V0KVxuXG4gICAgIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBsb2NhbGl6YXRpb24gY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBsZXQgdGJvZHkgPSAkKCcjbG9jYWxpemF0aW9ucyA+IHRib2R5Jyk7XG4gICAgbGV0IHRlbXBsYXRlID0gJCgnI2xvY2FsaXphdGlvbl90ZW1wbGF0ZScpLmh0bWwoKTtcblxuICAgIHRib2R5LnByZXBlbmQodGVtcGxhdGUpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBSZW1vdmUgbm90IHNhdmVkIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUm93KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKHRoaXMpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgc3VjY2Vzc0hhbmRsZXIgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9zdWNjZXNzSGFuZGxlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuXG4vKipcbiAqIFVwZGF0ZSByb3cgdG8gdGhlIGxvY2FsaXphdGlvbiBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsaXphdGlvblN0YXRlIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY3VycmVudEJ0biA9ICQodGhpcyk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudEJ0bi5jbG9zZXN0KCd0cicpO1xuICAgIGNvbnN0IGN1cnJlbnRLZXkgPSBwYXJlbnQuZmluZCgnLmxvY2FsaXphdGlvbi1rZXknKS52YWwoKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGR1cGxpY2F0ZWQga2V5c1xuICAgICAqXG4gICAgICogQHR5cGUge2pRdWVyeX1cbiAgICAgKi9cbiAgICBjb25zdCBjdXJyZW50S2V5RHVwbGljYXRlID0gJCgnI2xvY2FsaXphdGlvbnMnKS5maW5kKCcubG9jYWxpemF0aW9uLWtleScpLmZpbHRlcigoXywgaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gY3VycmVudEtleSA9PT0gaXRlbS52YWx1ZTtcbiAgICB9KTtcbiAgICBpZiAoY3VycmVudEtleUR1cGxpY2F0ZS5sZW5ndGggPiAxKXtcbiAgICAgICAgZXJyb3JIYW5kbGVyKHsnbWVzc2FnZSc6ICdEdXBsaWNhdGUga2V5ICcgKyBjdXJyZW50S2V5fSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gcGFyZW50LmZpbmQoJy5lZGl0YWJsZSBpbnB1dCcpLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcGFyZW50LmZpbmQoJy5sb2NhbGl6YXRpb24ta2V5JykuYXR0cigncmVhZG9ubHknLCB0cnVlKTtcblxuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHtzYXZlTG9jYWxpemF0aW9uU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVMb2NhbGl6YXRpb25TdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtyZW1vdmVSb3d9IGZyb20gXCIuL2hhbmRsZXJzL3JlbW92ZVJvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgbG9jYWxpemF0aW9ucyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuY3JlYXRlLXJvdycsIGFkZE5ld1JvdylcblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnVwZGF0ZS1yb3cnLCBzYXZlTG9jYWxpemF0aW9uU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLnJlbW92ZS1yb3cnLCByZW1vdmVSb3cpO1xuIiwiLyoqXG4gKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWFnaWMgPiB0Ym9keScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIGxldCBsYXN0SUQgPSB0Ym9keS5maW5kKFwidHJcIikubGFzdCgpLmZpbmQoJ2lucHV0W25hbWU9XCJpZFwiXScpLnZhbCgpO1xuICAgICAgICBsZXQgaW5jcmVtZW50SWQgPSBwYXJzZUludChsYXN0SUQpIHx8IDA7XG4gICAgICAgIGxldCB0ckxhc3QgPSAkKCcjbWFnaWNfdGVtcGxhdGUnKS5odG1sKCkucmVwbGFjZSgvJW1hZ2ljX2lkJS9nLCArK2luY3JlbWVudElkKTtcblxuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgbWFnaWMgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVNYWdpY1N0YXRlICgpIHtcbiAgICBjb25zdCBkYXRhID0gJCgnLm1hZ2ljLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0XCIpO1xuXG4gICAgZGF0YS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICQoaXRlbSkuYXR0cigncmVhZG9ubHknLCB0cnVlKVxuICAgIH0pO1xuXG4gICAgaWYoZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5kYXRhKCdyb3V0ZScpKVxuICAgICAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7c2F2ZU1hZ2ljU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVNYWdpY1N0YXRlXCI7XG5pbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBtYWdpYyBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZU1hZ2ljU3RhdGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHRoZSByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsImltcG9ydCBSZXF1ZXN0QnVpbGRlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogU2hvdyBsYXN0IG1ha2V1cCBraXQgSURcbiAqXG4gKiBAcGFyYW0gZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbmV3IFJlcXVlc3RCdWlsZGVyKHRoaXMuaHJlZilcbiAgICAgICAgLnN1Y2Nlc3MocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICQoJyNsYXN0LW1ha2V1cC1raXQtaWQnKVxuICAgICAgICAgICAgICAgIC52YWwocmVzdWx0Lm1ha2V1cF9raXRfaWQpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCBnZXRMYXN0TWFrZXVwS2l0SUQgZnJvbSBcIi4vaGFuZGxlcnMvZ2V0TGFzdE1ha2V1cEtpdElEXCI7XG5cbi8qKlxuICogU2hvdyBsYXN0IG1ha2V1cCBraXQgSUQgYXQgdGhlIGJvZHkgcGFydHMgZ3JpZFxuICovXG4kKCcjZ2V0LWxhc3QtbWFrZXVwLWtpdC1pZCcpXG4gICAgLmNsaWNrKGdldExhc3RNYWtldXBLaXRJRCk7XG4iLCJleHBvcnQgY29uc3QgTUFLRVVQX0tJVF9TSE9XX0ZPUk0gPSAnTUFLRVVQX0tJVF9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IGRyb3Bab25lSW5pdCBmcm9tIFwibGlzdGVuZXJzL2Ryb3Bab25lSW5pdFwiO1xuaW1wb3J0IHtNQUtFVVBfS0lUX1NIT1dfRk9STX0gZnJvbSBcIm1vZHVsZXMvbWFrZXVwLWtpdC9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBQcmV2aWV3IEltYWdlIChEcm9wWm9uZSBpbml0KVxuICovXG4kKCcuc2hvdy1mb3JtJykuY2xpY2soZHJvcFpvbmVJbml0KE1BS0VVUF9LSVRfU0hPV19GT1JNKSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGluZ3JlZGllbnQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21lYWxfaW5ncmVkaWVudF9ncm91cHMgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX2luZ3JlZGllbnRfZ3JvdXBzX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmdyb3VwX2lkJykudGV4dCgpO1xuICAgIGxldCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsLWluZ3JlZGllbnQtZ3JvdXAlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogSGlkZSByb3dcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZ3JlZGllbnREZWxldGUoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtpbmdyZWRpZW50RGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9pbmdyZWRpZW50RGVsZXRlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBpbmdyZWRpZW50RGVsZXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IHJvd3MgdG8gYWRkXG4gICAgICogQ2hhbmdlIGNvdW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgLm9uKCdpbnB1dCcsICcuYWRkLWNvdW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5hZGQtY291bnRlcicpLnZhbCh0aGlzLnZhbHVlKVxuICAgIH0pO1xuXG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGluZ3JlZGllbnQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9ICQoJy5hZGQtY291bnRlcicpLnZhbCgpO1xuICAgIGNvbnN0IHRib2R5ID0gJCgnI21lYWxfaW5ncmVkaWVudHMgPiB0Ym9keScpO1xuICAgIGNvbnN0IHRyTGFzdCA9ICQoJyNtZWFsX2luZ3JlZGllbnRzX3RlbXBsYXRlJykuaHRtbCgpO1xuXG4gICAgbGV0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLmluZ3JlZGllbnRfaWQnKS50ZXh0KCk7XG4gICAgbGV0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJW1lYWwtaW5ncmVkaWVudCUvZywgaSArIGluY3JlbWVudElkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIaWRlIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5ncmVkaWVudERlbGV0ZSgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge2FkZE5ld1Jvd30gZnJvbSBcIi4vaGFuZGxlcnMvYWRkTmV3Um93XCI7XG5pbXBvcnQge2luZ3JlZGllbnREZWxldGV9IGZyb20gXCIuL2hhbmRsZXJzL2luZ3JlZGllbnREZWxldGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIGluZ3JlZGllbnREZWxldGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG59KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJy5hZGQtY291bnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkZC1jb3VudGVyJykudmFsKHRoaXMudmFsdWUpXG4gICAgfSk7XG5cbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjbWVhbCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI21lYWxfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcubWVhbF9pZCcpLnRleHQoKTtcbiAgICBjb25zdCBpbmNyZW1lbnRJZCA9IChwYXJzZUludChsYXN0SUQpICsgMSkgfHwgMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICB0Ym9keS5hcHBlbmQodHJMYXN0LnJlcGxhY2UoLyVtZWFsJS9nLCBpICsgaW5jcmVtZW50SWQpKTtcbiAgICAgICAgdGJvZHkuZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBIaWRlIHJvd1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVhbERlbGV0ZSgpIHtcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgTWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2F2ZU1lYWxTdGF0ZSAoKSB7XG4gICAgY29uc3Qgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcubWVhbC1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkXCIpO1xuICAgIGNvbnN0IGRhdGEgPSAkKCcubWVhbC1zYXZlLXBhZ2UtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLnNlbmQoKTtcblxuICAgIHRib2R5LmVhY2goZnVuY3Rpb24gKG4sIGl0ZW0pIHtcbiAgICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHttZWFsRGVsZXRlfSBmcm9tIFwiLi9oYW5kbGVycy9tZWFsRGVsZXRlXCI7XG5pbXBvcnQge3NhdmVNZWFsU3RhdGV9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfQ1JFQVRFRCwgQVdBUkRfREVMRVRFfSBmcm9tIFwibW9kdWxlcy9hd2FyZC9jb25zdGFudHNcIjtcbmltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcblxuJChkb2N1bWVudClcblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIGR5ZSBncmlkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYWRkLW5ldy1yb3cnLCBhZGROZXdSb3cpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuZGVsZXRlLXJvdycsIG1lYWxEZWxldGUpXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCdpbnB1dCcsICdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJylcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignLnNlbGVjdDInKS5jaGFuZ2UoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgJChpdGVtLnRhcmdldCkuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgIH0pXG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhd2FyZCBhbmQgc2F2ZSBtZWFsXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBhd2FyZENyZWF0ZS5iaW5kKF90aGlzKSgpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcblxuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIHNhdmVNZWFsU3RhdGUoKVxuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGF3YXJkXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGF3YXJkRGVsZXRlLmJpbmQoX3RoaXMpKCk7XG4gICAgfSlcblxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gKi9cbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlTWVhbFN0YXRlKTtcbiIsImV4cG9ydCBjb25zdCBORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0gPSAnTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNJztcbiIsImNvbnN0IFRSQVNIID0gJ1RSQVNIJztcbmNvbnN0IFRSQVNIX0ZJRUxEU19JRCA9ICd0cmFzaC1maWVsZHMnO1xuY29uc3QgU0VMRUNUX0lEID0gJ25laWdoYm9yLWFjdGl2aXR5LXR5cGUtaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU0VMRUNUX0lEKTtcblxuICAgIGlmICghc2VsZWN0IHx8IHNlbGVjdC5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdC5vcHRpb25zLmxlbmd0aCAmJiBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0pIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcblxuICAgICAgICBjb25zdCB0cmFzaEZpZWxkcyA9ICQoJyMnICsgVFJBU0hfRklFTERTX0lEKTtcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZEVsZW1lbnQudGV4dC50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlIFRSQVNIOlxuICAgICAgICAgICAgICAgIHRyYXNoRmllbGRzLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRyYXNoRmllbGRzLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk19IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBjaGFuZ2VUeXBlIGZyb20gXCIuLi9oYW5kbGVycy9jaGFuZ2VUeXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoTkVJR0hCT1JfQUNUSVZJVFlfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShORUlHSEJPUl9BQ1RJVklUWV9TSE9XX0ZPUk0sIHNlbGYpO1xuXG4gICAgICAgIGNoYW5nZVR5cGUoKTtcblxuICAgICAgICAkKCcubmVpZ2hib3ItYWN0aXZpdHktZm9ybSAuZGF0ZXRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBhd2FyZENyZWF0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkQ3JlYXRlXCI7XG5pbXBvcnQgYXdhcmREZWxldGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZERlbGV0ZVwiO1xuaW1wb3J0IGNoYW5nZVR5cGUgZnJvbSAnLi9oYW5kbGVycy9jaGFuZ2VUeXBlJztcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKVxuICAgIC5vbignY2hhbmdlJywgJy5uZWlnaGJvci1hY3Rpdml0eS10eXBlJywgY2hhbmdlVHlwZSk7XG5cbi8qKlxuICogUnVuIHRoZSBzaG93IGZvcm0gaGFuZGxlci5cbiAqIEFmdGVyIGNsaWNrIGF0IGNyZWF0ZSBvciBlZGl0IGJ1dHRvblxuICovXG4kKCcuc2hvdy1mb3JtJylcbiAgICAuY2xpY2soc2hvd0Zvcm0pO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IFBST0RVQ1RfU0hPV19GT1JNID0gJ1BST0RVQ1RfU0hPV19GT1JNJztcbiIsImltcG9ydCBDbGVhdmUgZnJvbSBcImNsZWF2ZS5qc1wiO1xuXG4vKipcbiAqIFByaWNlIGluaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgbmV3IENsZWF2ZSh0aGlzLCB7XG4gICAgICAgIG51bWVyYWw6IHRydWUsXG4gICAgICAgIHByZWZpeDogJyQgJyxcbiAgICAgICAgcmF3VmFsdWVUcmltUHJlZml4OiB0cnVlLFxuICAgICAgICBvblZhbHVlQ2hhbmdlZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IE1hdGgucm91bmQoK2UudGFyZ2V0LnJhd1ZhbHVlICogMTAwKTtcbiAgICAgICAgICAgIGxldCBwcm9kdWN0UHJpY2UgPSAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgndGQnKS5maW5kKCcucHJvZHVjdC1wcmljZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHBhcnNlSW50KHByb2R1Y3RQcmljZS52YWwoKSkpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgLnZhbCh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgLmNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59IiwiaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQgZHJvcFpvbmVJbml0IGZyb20gXCJsaXN0ZW5lcnMvZHJvcFpvbmVJbml0XCI7XG5pbXBvcnQge1BST0RVQ1RfU0hPV19GT1JNfSBmcm9tIFwibW9kdWxlcy9wcm9kdWN0L2NvbnN0YW50c1wiO1xuaW1wb3J0IHByaWNlSW5pdCBmcm9tIFwibW9kdWxlcy9wcm9kdWN0L2hhbmRsZXJzL3ByaWNlSW5pdFwiO1xuXG4kKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBhd2FyZENyZWF0ZSlcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1kZWxldGUtYnV0dG9uJywgYXdhcmREZWxldGUpO1xuXG4vKipcbiAqIFByZXZpZXcgSW1hZ2UgKERyb3Bab25lIGluaXQpXG4gKi9cbiQoJy5zaG93LWZvcm0nKS5jbGljayhkcm9wWm9uZUluaXQoUFJPRFVDVF9TSE9XX0ZPUk0pKTtcblxuJCgnI3Rlc3QnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbn0pO1xuXG4vKipcbiAqIFByaWNlIGZvcm1hdFxuICovXG4kKCcucHJvZHVjdC1wcmljZS12aWV3JykuZWFjaChwcmljZUluaXQpO1xuIiwiXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1JvdygpIHtcbiAgICBjb25zdCBhZGRfY291bnRlciA9IHBhcnNlSW50KCQoJy5hZGQtY291bnRlcicpLnZhbCgpKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJ3RhYmxlLnRhYmxlIHRib2R5Jyk7XG4gICAgY29uc3QgbWF4SWQgPSAkKHRoaXMpLmRhdGEoJ2NvdW50ZXInKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9ICQoJ3RlbXBsYXRlI2NvbmZpZy1yb3cnKTtcblxuICAgIGxldCBuZXdMZW5ndGggPSBwYXJzZUludCh0Ym9keS5maW5kKCd0ci5uZXctcm93JykubGVuZ3RoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkX2NvdW50ZXI7IGkrKykge1xuICAgICAgICBsZXQgdHJJZCA9IChtYXhJZCA+IDAgPyBtYXhJZCA6IDApICsgcGFyc2VJbnQodGJvZHkuZmluZCgndHIubmV3LXJvdycpLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IG5ld1JvdyA9IHRlbXBsYXRlLmh0bWwoKS5yZXBsYWNlKC8laWQlL2csIHRySWQpXG4gICAgICAgICAgICAucmVwbGFjZSgvJXRyX2lkJS9nLCB0cklkKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVkcmFmdCUvZywgdHJJZCk7XG5cbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgdmFsdWVzIHRvIG5ldyByb3dzXG4gICAgICAgIGxldCBuZXdSb3dIdG1sID0gJChuZXdSb3cpO1xuICAgICAgICAkKCcuZGVmYXVsdC1yb3ctdmFsdWUnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgZGVmYXVsdFZhbHVlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIG5ld1Jvd0h0bWwuZmluZCgnLicgKyAkKHRoaXMpLmRhdGEoJ2NsYXNzJykpLmF0dHIoJ3ZhbHVlJywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld1JvdyA9IG5ld1Jvd0h0bWwuZ2V0KDApLm91dGVySFRNTDtcblxuICAgICAgICBpZiAobmV3TGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCh0Ym9keS5maW5kKCd0ci5uZXctcm93JykubGFzdCgpKS5hZnRlcihuZXdSb3cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGJvZHkucHJlcGVuZChuZXdSb3cpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0xlbmd0aCsrO1xuXG4gICAgICAgIHRib2R5LmZpbmQoJ1tkYXRhLWF1dG9pbmNyZW1lbnQ9XCIxXCJdJykubGFzdCgpLnZhbCh0cklkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgRHJvcHpvbmVCdWlsZGVyIGZyb20gXCJjb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lQnVpbGRlclwiO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL2Vycm9ySGFuZGxlclwiO1xuaW1wb3J0IGdldEZpbGVQYXRoIGZyb20gXCJoZWxwZXJzL2dldEZpbGVQYXRoXCI7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdFxuICpcbiAqIEBwYXJhbSBfXG4gKiBAcGFyYW0gaXRlbVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoXywgaXRlbSkge1xuICAgIGNvbnN0IGRyb3B6b25lQ29udGFpbmVyID0gJChpdGVtKTtcbiAgICBjb25zdCBwcmV2aWV3SGlkZGVuSW5wdXQgPSBkcm9wem9uZUNvbnRhaW5lci5maW5kKCdpbnB1dCcpO1xuXG4gICAgLyoqXG4gICAgICogRHJvcHpvbmUgaW5pdGlhbGl6YXRpb25cbiAgICAgKi9cbiAgICBjb25zdCBkcm9wem9uZUJ1aWxkZXIgPSBuZXcgRHJvcHpvbmVCdWlsZGVyKGl0ZW0pXG4gICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVDb250YWluZXIuZGF0YSgndXJsJykpXG4gICAgICAgIC5lcnJvcigoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcihyZXNwb25zZSk7XG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICBwcmV2aWV3SGlkZGVuSW5wdXQudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN1Y2Nlc3MoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAkKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJldmlld1xuICAgICAqL1xuICAgIGlmICghIXByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSkge1xuICAgICAgICBkcm9wem9uZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxuICAgICAgICAgICAgICAgIHByZXZpZXdIaWRkZW5JbnB1dC52YWwoKSxcbiAgICAgICAgICAgICAgICBnZXRGaWxlUGF0aChkcm9wem9uZUNvbnRhaW5lci5kYXRhKCdmb2xkZXInKSwgcHJldmlld0hpZGRlbklucHV0LnZhbCgpKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcm9wem9uZSBidWlsZFxuICAgICAqL1xuICAgIGRyb3B6b25lQnVpbGRlci5idWlsZCgpO1xufSIsIi8qKlxuICogTWFyayBjaGFuZ2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhbmdlZCAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgJCgnI3VwZGF0ZS1hbGwnKS5zaG93KCk7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBkcGEgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQYWdlIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YSgkKFwidHIuY2hhbmdlZFwiKS5maW5kKCdpbnB1dCwgaW5wdXRbdHlwZT1cImhpZGRlblwiXSwgc2VsZWN0LCB0ZXh0YXJlYScpKTtcblxuICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoey4uLmRhdGF9KVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgaWYgKHJlc3AudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIG5vdGlmeUVycm9yKHJlc3AubWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgbm90aWZ5RXJyb3IgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeUVycm9yXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgZHBhIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUm93IChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHJvd1RvU2F2ZSA9ICQodGhpcykucGFyZW50cygndHInKTtcbiAgICBsZXQgYWN0aW9uID0gcm93VG9TYXZlLmRhdGEoJ2FjdGlvbicpO1xuICAgIGxldCByb3cgPSByb3dUb1NhdmUuZmluZChcIi5lZGl0YWJsZSBzZWxlY3QsIC5lZGl0YWJsZSBpbnB1dFwiKS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgaWYoJChcInRyLmNoYW5nZWRcIikubGVuZ3RoID4gMSkge1xuICAgICAgICBsZXQgciA9IGNvbmZpcm0oJ0NoYW5nZWQgbW9yZSB0aGFuIG9uZSByb3cuIFNhdmVkIG9ubHkgY3VycmVudCByb3chJyk7XG4gICAgICAgIGlmKHIgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFyb3dUb1NhdmUuaGFzQ2xhc3MoJ2NoYW5nZWQnKSkge1xuICAgICAgICBub3RpZnlFcnJvcignTm90aGluZyB0byBzYXZlIScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQVVRcIixcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgdXJsOiBhY3Rpb24sXG4gICAgICAgIGRhdGE6IHJvdyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oIHJlc3AgKSB7XG4gICAgICAgICAgICByb3dUb1NhdmUucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgICQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwLm1lc3NhZ2VcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIHR5cGU6IHJlc3AudHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgaWYgKGpxWEhSLnJlc3BvbnNlSlNPTiAmJiBqcVhIUi5yZXNwb25zZUpTT04uaGFzT3duUHJvcGVydHkoJ2Vycm9ycycpKSB7XG4gICAgICAgICAgICAgICAgJC5lYWNoKCBqcVhIUi5yZXNwb25zZUpTT04uZXJyb3JzLCBmdW5jdGlvbihlcnJvcktleSwgZXJyb3IgKSB7XG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCggZXJyb3IsIGZ1bmN0aW9uKG1lc3NhZ2VLZXksIG1lc3NhZ2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XG5pbXBvcnQgZHJvcHpvbmVJbml0IGZyb20gXCIuL2hhbmRsZXJzL2Ryb3B6b25lSW5pdFwiO1xuaW1wb3J0IHtzYXZlUGFnZX0gZnJvbSBcIi4vaGFuZGxlcnMvc2F2ZVBhZ2VcIjtcbmltcG9ydCB7bWFya0NoYW5nZWR9IGZyb20gXCIuL2hhbmRsZXJzL21hcmtDaGFuZ2VkXCI7XG5pbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IGF3YXJkQ3JlYXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmRDcmVhdGVcIjtcbmltcG9ydCBhd2FyZERlbGV0ZSBmcm9tIFwibGlzdGVuZXJzL2F3YXJkRGVsZXRlXCI7XG5pbXBvcnQge0FXQVJEX0NSRUFURSwgQVdBUkRfQ1JFQVRFRCwgQVdBUkRfREVMRVRFLCBDTE9TRV9BV0FSRF9NT0RBTH0gZnJvbSBcIm1vZHVsZXMvYXdhcmQvY29uc3RhbnRzXCI7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuaW1wb3J0IHtzYXZlUm93fSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlUm93XCI7XG5cbi8qKlxuICogVHVybmVkIG9mZiB0aGUgRHJvcHpvbmUgYXV0byBpbml0XG4gKlxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xuXG4vKipcbiAqIERyb3B6b25lIGluaXRcbiAqL1xuJCgnLmRyb3B6b25lJykuZWFjaChkcm9wem9uZUluaXQpO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVuc3Vic2NyaWJlIG9uIG1vZGFsIGNsb3NlXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoQ0xPU0VfQVdBUkRfTU9EQUwsIChkYXRhLCBzZWxmKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShBV0FSRF9DUkVBVEUpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIudW5zdWJzY3JpYmUoQVdBUkRfQ1JFQVRFRCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0IGNvbG9yLXBpY2tlciBpbnB1dHNcbiAgICAgICAgICovXG4gICAgICAgICQoJy5jcDInKS5jb2xvcnBpY2tlcigpO1xuXG4gICAgICAgICQoJyN1cGRhdGUtYWxsJykuY2xpY2soc2F2ZVBhZ2UpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF3YXJkIGFuZCBzYXZlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWNyZWF0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbiA9ICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCcudXBkYXRlLXJvdycpO1xuXG4gICAgICAgIGF3YXJkQ3JlYXRlLmJpbmQoX3RoaXMpKCk7XG5cbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgKGRhdGEsIHNlbGYpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKEFXQVJEX0NSRUFURSwgc2VsZik7XG4gICAgICAgICAgICBzYXZlQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAub24oJ2NsaWNrJywgJy51cGRhdGUtcm93Jywgc2F2ZVJvdylcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhd2FyZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmF3YXJkLWRlbGV0ZS1idXR0b24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICBhd2FyZERlbGV0ZS5iaW5kKF90aGlzKSgpO1xuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYXdhcmRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5yZW1vdmUtZW1iZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpO1xuICAgICAgICAkKCcjdXBkYXRlLWFsbCcpLnNob3coKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRyb3B6b25lJywgbWFya0NoYW5nZWQpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtY3JlYXRlLWJ1dHRvbicsIG1hcmtDaGFuZ2VkKVxuICAgIC5vbignaW5wdXQnLCAndGJvZHkgaW5wdXQsIHRib2R5IHRleHRhcmVhJywgbWFya0NoYW5nZWQpXG4gICAgLm9uKCdjaGFuZ2UnLCAndGJvZHkgaW5wdXQsIHRib2R5IHNlbGVjdCcsIG1hcmtDaGFuZ2VkKTtcbiIsImNvbnN0IFdBTEtfQ0FURUdPUlkgPSAnNic7XG5jb25zdCBSVU5fQ0FURUdPUlkgPSc3JztcblxuJChkb2N1bWVudClcblxuICAgIC5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0MiA9ICQoJy50YWJsZScpLmZpbmQoJy5lbWJlZC1ncm91cCBzZWxlY3Quc2VsZWN0MicpO1xuICAgICAgICBsZXQgc2VsZWN0VmFsID0gMDtcbiAgICAgICAgc2VsZWN0Mi5lYWNoKGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgICBzZWxlY3RWYWwgPSAkKGkpLnZhbCgpO1xuICAgICAgICAgICAgaWYoc2VsZWN0VmFsID09PSBXQUxLX0NBVEVHT1JZIHx8IHNlbGVjdFZhbCA9PT0gUlVOX0NBVEVHT1JZKSB7XG4gICAgICAgICAgICAgICAgJChpKS5jbG9zZXN0KCcuZW1iZWQtZ3JvdXAnKS5maW5kKCcuZW1iZWQtZ3JvdXAnKS5maW5kKFwiLnJvdzplcSgxKVwiKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoaSkuY2xvc2VzdCgnLmVtYmVkLWdyb3VwJykuZmluZCgnLmVtYmVkLWdyb3VwJykuZmluZChcIi5yb3c6ZXEoMSlcIikuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTaG93IGhpZGUgc3BlZWQgb24gdHJpZ2dlciBhZGQtZW1iZWQgYnV0dG9uXG4gICAgICovXG4gICAgLm9uKCdhaV9hbmltYXRpb24nLCAnLmFkZC1lbWJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZW1iZWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpO1xuICAgICAgICBjb25zdCBzZWxlY3RWYWwgPSBlbWJlZC5maW5kKCcuc2VsZWN0MicpLnZhbCgpO1xuICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcbiAgICAgICAgICAgIGVtYmVkLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVtYmVkLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBTaG93IGhpZGUgc3BlZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdFZhbCA9ICQoaXRlbS50YXJnZXQpLnZhbCgpO1xuICAgICAgICBpZihzZWxlY3RWYWwgPT09IFdBTEtfQ0FURUdPUlkgfHwgc2VsZWN0VmFsID09PSBSVU5fQ0FURUdPUlkpIHtcbiAgICAgICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJy5lbWJlZC1ncm91cCcpLmZpbmQoJy5lbWJlZC1ncm91cCcpLmZpbmQoXCIucm93OmVxKDEpXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IFNIT1BfREVQQVJUTUVOVF9TSE9XX0ZPUk0gPSAnU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSc7XG4iLCIvKipcbiAqIEFkZCBhIG5ldyBzaG9wIGluIGEgZGVwYXJ0bWVudHMgZ3JpZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IHRhYmxlID0gY3VycmVudEJ0bi5jbG9zZXN0KCcuc2hvcHMtdGFibGUnKS5maW5kKCd0Ym9keScpO1xuICAgIGNvbnN0IGRlcGFydG1lbnRJZCA9IGN1cnJlbnRCdG4uZGF0YSgnZGVwYXJ0bWVudCcpO1xuICAgIGxldCBjb3VudGVyID0gcGFyc2VJbnQoY3VycmVudEJ0bi5kYXRhKCdjb3VudCcpKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9ICQoJyNzaG9wLXRlbXBsYXRlJylcbiAgICAgICAgLmh0bWwoKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCclZGVwYXJ0bWVudElkJScsIFwiZ1wiKSwgZGVwYXJ0bWVudElkKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCclaW5kZXglJywgXCJnXCIpLCBjb3VudGVyKyspO1xuXG4gICAgY3VycmVudEJ0bi5kYXRhKCdjb3VudCcsIGNvdW50ZXIpO1xuXG4gICAgdGFibGUuYXBwZW5kKHRlbXBsYXRlKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcImhlbHBlcnMvZ2V0Rm9ybURhdGFcIjtcbmltcG9ydCBzdWNjZXNzSGFuZGxlciBmcm9tIFwiY29tcG9uZW50cy9odHRwL3N1Y2Nlc3NIYW5kbGVyXCI7XG5cbi8qKlxuICogRmFzdCBzYXZlIGZvciBzaG9wIGRlcGFydG1lbnRcbiAqXG4gKiBAcGFyYW0gZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHNob3BOYW1lUHJlZml4ID0gJ3Nob3AnO1xuICAgIGNvbnN0IGRlcGFydG1lbnROYW1lUHJlZml4ID0gJ2RlcGFydG1lbnQnO1xuICAgIGNvbnN0IGN1cnJlbnRCdG4gPSAkKHRoaXMpO1xuICAgIGNvbnN0IGZhc3RTYXZlQ29udGFpbmVyID0gJCgnLmZhc3Qtc2F2ZS1jb250YWluZXInKTtcblxuICAgIGxldCBzaG9wcyA9IHt9O1xuICAgIGxldCBkZXBhcnRtZW50ID0ge307XG5cbiAgICBmYXN0U2F2ZUNvbnRhaW5lci5maW5kKCd0Ym9keSB0ci5jaGFuZ2VkIHRyLmluZm8nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRlcGluZGV4ID0gJCh0aGlzKS5jbG9zZXN0KCcuZGVwYXJ0bWVudCcpLmluZGV4KCk7XG4gICAgICAgIGxldCBkZXBhcnRtZW50Rm9ybURhdGEgPSBnZXRGb3JtRGF0YSgkKHRoaXMpKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBkZXBhcnRtZW50Rm9ybURhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gYCR7ZGVwYXJ0bWVudE5hbWVQcmVmaXh9WyR7ZGVwaW5kZXh9XVske2l9XWA7XG4gICAgICAgICAgICBkZXBhcnRtZW50W2l0ZW1OYW1lXSA9IGRlcGFydG1lbnRGb3JtRGF0YVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcykubmV4dCgndHIuc2hvcHMnKS5maW5kKCd0Ym9keS5zb3J0YWJsZSB0cicpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBnZXRGb3JtRGF0YSgkKHRoaXMpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGAke3Nob3BOYW1lUHJlZml4fVske2RlcGFydG1lbnRGb3JtRGF0YS5pZH1dWyR7aW5kZXh9XVske2l9XWA7XG4gICAgICAgICAgICAgICAgc2hvcHNbaXRlbU5hbWVdID0gZm9ybURhdGFbaV07XG4gICAgICAgICAgICAgICAgc2hvcHNbYCR7c2hvcE5hbWVQcmVmaXh9WyR7ZGVwYXJ0bWVudEZvcm1EYXRhLmlkfV1bJHtpbmRleH1dW2RlcGFydG1lbnRdYF0gPSBkZXBhcnRtZW50Rm9ybURhdGEuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBuZXcgaHR0cChjdXJyZW50QnRuLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUFVUJylcbiAgICAgICAgLmRhdGEoey4uLnNob3BzLCAuLi5kZXBhcnRtZW50fSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgJCgnLmNoYW5nZWQnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3VjY2Vzc0hhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBSYWRpbyBpbnB1dCBmcm9tIGNoZWNrYm94XG4gKiBCZWNhdXNlIGlucHV0W3R5cGU9cmFkaW9dIGRpZCBub3Qgd29yayBjb3JyZWN0bHlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gJCh0aGlzKTtcbiAgICBjb25zdCBhbGxJdGVtcyA9IGN1cnJlbnRJdGVtLmNsb3Nlc3QoJy50YWJsZScpLmZpbmQoJy5yYWRpbycpO1xuXG4gICAgYWxsSXRlbXMucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICBhbGxJdGVtcy5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xuXG4gICAgY3VycmVudEl0ZW0ucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgIGN1cnJlbnRJdGVtLmFkZENsYXNzKCdjaGVja2VkJyk7XG59XG4iLCJpbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5cbi8qKlxuICogU29ydGFibGUgSW5pdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgbmV3IFNvcnRhYmxlKHRoaXMsIHtcbiAgICAgICAgZ3JvdXA6ICdkZXBhcnRtZW50JyxcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKS5maW5kKCd0ci5kZXBhcnRtZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJhZGlvOiAkKGUuaXRlbSkuZmluZCgnLnJhZGlvJyksXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogJChlLml0ZW0pLmNsb3Nlc3QoJy50YWJsZScpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuLyoqXG4gKiBTb3J0YWJsZSBJbml0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgU29ydGFibGUodGhpcywge1xuICAgICAgICBncm91cDogJ3Nob3BzJyxcbiAgICAgICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICQoZS5pdGVtKS5jbG9zZXN0KCd0ci5kZXBhcnRtZW50JykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICByYWRpbzogJChlLml0ZW0pLmZpbmQoJy5yYWRpbycpLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6ICQoZS5pdGVtKS5jbG9zZXN0KCcudGFibGUnKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucGFyZW50LmZpbmQoJy5yYWRpby5jaGVja2VkOmd0KDApJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmFkaW8ucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yYWRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IHtTSE9QX0RFUEFSVE1FTlRfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gXCJjb21wb25lbnRzL2h0dHAvZXJyb3JIYW5kbGVyXCI7XG5pbXBvcnQgZ2V0RmlsZVBhdGggZnJvbSBcImhlbHBlcnMvZ2V0RmlsZVBhdGhcIjtcbmltcG9ydCBEcm9wem9uZUJ1aWxkZXIgZnJvbSBcImNvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVCdWlsZGVyXCI7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdCBhZnRlciB0aGUgbW9kYWwgb3BlbmVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0hPUF9ERVBBUlRNRU5UX1NIT1dfRk9STSwgKCkgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmlld1xuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVJbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy11cmwnKSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpZXcgU21hbGxcbiAgICAgICAgICovXG4gICAgICAgIGRyb3B6b25lSW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcHpvbmUtc21hbGwnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdXJsLXNtYWxsJykpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIERyb3B6b25lIEluaXRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkcm9wem9uZUVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHByZXZpZXdVcmxFbGVtZW50XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGRyb3B6b25lSW5pdChkcm9wem9uZUVsZW1lbnQsIHByZXZpZXdVcmxFbGVtZW50KSB7XG4gICAgaWYgKCFkcm9wem9uZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGluaXRpYWxpemF0aW9uXG4gICAgICovXG4gICAgY29uc3QgZHJvcHpvbmVCdWlsZGVyID0gbmV3IERyb3B6b25lQnVpbGRlcihkcm9wem9uZUVsZW1lbnQpXG4gICAgICAgIC5zZXRVcGxvYWRVcmwoZHJvcHpvbmVFbGVtZW50LmRhdGFzZXQudXJsKVxuICAgICAgICAuZXJyb3IoKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgJChwcmV2aWV3VXJsRWxlbWVudCkudmFsKCcnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICAkKHByZXZpZXdVcmxFbGVtZW50KS52YWwoJycpO1xuICAgICAgICB9KVxuICAgICAgICAuc3VjY2VzcygoZmlsZSwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICQoZHJvcHpvbmVFbGVtZW50KS5maW5kKCcuZHotZmlsZW5hbWUgc3BhbicpLnRleHQocmVzcG9uc2UuZmlsZV9uYW1lKTtcbiAgICAgICAgICAgIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlID0gcmVzcG9uc2UuZmlsZV9uYW1lO1xuICAgICAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFNldCBwcmV2aWV3XG4gICAgICovXG4gICAgaWYgKHByZXZpZXdVcmxFbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBkcm9wem9uZUJ1aWxkZXJcbiAgICAgICAgICAgIC5zZXRQcmV2aWV3KFxuICAgICAgICAgICAgICAgIHByZXZpZXdVcmxFbGVtZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgIGdldEZpbGVQYXRoKGRyb3B6b25lRWxlbWVudC5kYXRhc2V0LmZvbGRlciwgcHJldmlld1VybEVsZW1lbnQudmFsdWUpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyb3B6b25lIGJ1aWxkXG4gICAgICovXG4gICAgZHJvcHpvbmVCdWlsZGVyLmJ1aWxkKCk7XG59IiwiaW1wb3J0IGFkZFNob3AgZnJvbSBcIi4vaGFuZGxlcnMvYWRkU2hvcFwiO1xuaW1wb3J0IGZhc3RTYXZlIGZyb20gXCIuL2hhbmRsZXJzL2Zhc3RTYXZlXCI7XG5pbXBvcnQgcmFkaW9JbnB1dCBmcm9tIFwiLi9oYW5kbGVycy9yYWRpb0lucHV0XCI7XG5pbXBvcnQgc2hvd0Zvcm0gZnJvbSBcIi4vbGlzdGVuZXJzL3Nob3dGb3JtXCI7XG5pbXBvcnQgc29ydGFibGVJbml0IGZyb20gXCJtb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZUluaXRcIjtcbmltcG9ydCBzb3J0YWJsZURlcGFydG1lbnRJbml0IGZyb20gXCJtb2R1bGVzL3Nob3AtZGVwYXJ0bWVudC9oYW5kbGVycy9zb3J0YWJsZURlcGFydG1lbnRJbml0XCI7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbi8qKlxuICogRHJvcHpvbmUgaW5pdFxuICovXG5zaG93Rm9ybSgpO1xuXG4kKGRvY3VtZW50KVxuICAgIC8qKlxuICAgICAqIFJhZGlvIGJ1dHRvbnMgYmVoYXZpb3JcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcucmFkaW8nLCByYWRpb0lucHV0KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93IHRvIHRoZSBkcGEgZ3JpZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHIuZGVwYXJ0bWVudCcpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIERvY3VtZW50IHJlYWR5XG4gICAgICovXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBjbGFzcyB0byBjaGVja2VkIHJhZGlvc1xuICAgICAgICAgKi9cbiAgICAgICAgJCgnLnJhZGlvW2NoZWNrZWRdJykuYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGEgbmV3IHNob3AgaW4gYSBkZXBhcnRtZW50cyBncmlkXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuYWRkLXNob3AnKS5jbGljayhhZGRTaG9wKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmFzdCBzYXZlXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuZmFzdC1zYXZlJykuY2xpY2soZmFzdFNhdmUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYWtlIHRyIHRvIHNvcnRhYmxlXG4gICAgICAgICAqL1xuICAgICAgICAkKCcuc29ydGFibGUnKS5lYWNoKHNvcnRhYmxlSW5pdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1ha2UgdHIgdG8gc29ydGFibGVcbiAgICAgICAgICovXG4gICAgICAgICQoJy5zb3J0YWJsZS1kZXBhcnRtZW50JykuZWFjaChzb3J0YWJsZURlcGFydG1lbnRJbml0KTtcbiAgICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQWRkIG5leHQgcm93cyB0byB0aGUgbWVhbCBjb25maWcgZ3JpZFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Um93KCkge1xuICAgIGNvbnN0IGFkZF9jb3VudGVyID0gJCgnLmFkZC1jb3VudGVyJykudmFsKCk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcjcmVsZWFzZSA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI3JlbGVhc2VfdGVtcGxhdGUnKS5odG1sKCk7XG4gICAgY29uc3QgbGFzdElEID0gdGJvZHkuZmluZChcInRyXCIpLmxhc3QoKS5maW5kKCcucmVsZWFzZV9pZCcpLnZhbCgpO1xuICAgIGNvbnN0IGluY3JlbWVudElkID0gKHBhcnNlSW50KGxhc3RJRCkgKyAxKSB8fCAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRfY291bnRlcjsgaSsrKSB7XG4gICAgICAgIHRib2R5LmFwcGVuZCh0ckxhc3QucmVwbGFjZSgvJXJlbGVhc2UlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcblxuICAgICAgICB0Ym9keS5maW5kKCcuZGF0ZXRpbWVwaWNrZXInKVxuICAgICAgICAgICAgLmRhdGV0aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkIGhoOmlpOnNzJyxcbiAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcbmltcG9ydCBub3RpZnlFcnJvciBmcm9tIFwiY29tcG9uZW50cy9ub3RpZnkvbm90aWZ5RXJyb3JcIjtcblxuLyoqXG4gKiBVcGRhdGUgcm93IHRvIHRoZSBNZWFsIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUGFnZSAoKSB7XG4gICAgY29uc3Qgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJyk7XG4gICAgY29uc3QgdGJvZHkgPSAkKCcucmVsZWFzZS1zYXZlLWNvbnRhaW5lcicpLmZpbmQoXCIuY2hhbmdlZFwiKTtcbiAgICBjb25zdCBkYXRhID0gJCgnLnJlbGVhc2Utc2F2ZS1jb250YWluZXInKS5maW5kKFwiLmNoYW5nZWQgaW5wdXQsIC5jaGFuZ2VkIHNlbGVjdCwgLmNoYW5nZWQgdGV4dGFyZWFcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXcgaHR0cChyb3V0ZSlcbiAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5zZW5kKCk7XG5cbiAgICB0Ym9keS5lYWNoKGZ1bmN0aW9uIChuLCBpdGVtKSB7XG4gICAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7YWRkTmV3Um93fSBmcm9tIFwiLi9oYW5kbGVycy9hZGROZXdSb3dcIjtcbmltcG9ydCB7c2F2ZVBhZ2V9IGZyb20gXCIuL2hhbmRsZXJzL3NhdmVQYWdlXCI7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgbmV4dCByb3dzIHRvIHRoZSBkeWUgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJvd1xuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1yb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogTWFyayByb3cgYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnY2hhbmdlZCcpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIE1hcmsgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJy5zZWxlY3QyJykuY2hhbmdlKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICQoaXRlbS50YXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKTtcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcblxuLyoqXG4gKiBGYXN0IHNhdmUgZGF0YSBvbiB0aGUgZHllcyBwYWdlXG4gKi9cbiQoJy5zYXZlLXBhZ2UnKS5jbGljayhzYXZlUGFnZSk7XG4iLCIkKGRvY3VtZW50KVxuXG4gICAgLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCd0ZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYoJCh0aGlzKS5hdHRyKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kJywgJyNlN2U3ZTcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4iLCIvKipcbiAqIEFkZCBuZXh0IHJvd3MgdG8gdGhlIHNvdW5kIGNvbmZpZyBncmlkXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdSb3coKSB7XG4gICAgY29uc3QgYWRkX2NvdW50ZXIgPSAkKCcuYWRkLWNvdW50ZXInKS52YWwoKTtcbiAgICBjb25zdCB0Ym9keSA9ICQoJyNzb3VuZCA+IHRib2R5Jyk7XG4gICAgY29uc3QgdHJMYXN0ID0gJCgnI3NvdW5kX3RlbXBsYXRlJykuaHRtbCgpO1xuICAgIGNvbnN0IGxhc3RJRCA9IHRib2R5LmZpbmQoXCJ0clwiKS5sYXN0KCkuZmluZCgnLnNvdW5kX2lkJykudmFsKCk7XG4gICAgY29uc3QgaW5jcmVtZW50SWQgPSAocGFyc2VJbnQobGFzdElEKSArIDEpIHx8IDE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZF9jb3VudGVyOyBpKyspIHtcbiAgICAgICAgdGJvZHkuYXBwZW5kKHRyTGFzdC5yZXBsYWNlKC8lc291bmRfaWQlL2csIGkgKyBpbmNyZW1lbnRJZCkpO1xuICAgICAgICB0Ym9keS5maW5kKCcuc2VsZWN0MicpLnNlbGVjdDIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5cbi8qKlxuICogVXBkYXRlIHJvdyB0byB0aGUgc291bmQgY29uZmlnIGdyaWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTb3VuZFN0YXRlICgpIHtcbiAgICBjb25zdCBkYXRhID0gJCgnLnNvdW5kLXNhdmUtY29udGFpbmVyJykuZmluZChcIi5jaGFuZ2VkIGlucHV0LCAuY2hhbmdlZCBzZWxlY3RcIikuc2VyaWFsaXplQXJyYXkoKTtcblxuICAgIGlmKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIG5ldyBodHRwKCQodGhpcykuZGF0YSgncm91dGUnKSlcbiAgICAgICAgICAgIC5tZXRob2QoJ1BVVCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQge3NhdmVTb3VuZFN0YXRlfSBmcm9tIFwiLi9oYW5kbGVycy9zYXZlU291bmRTdGF0ZVwiO1xuaW1wb3J0IHthZGROZXdSb3d9IGZyb20gXCIuL2hhbmRsZXJzL2FkZE5ld1Jvd1wiO1xuXG4kKGRvY3VtZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5leHQgcm93cyB0byB0aGUgc291bmQgZ3JpZFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmFkZC1uZXctcm93JywgYWRkTmV3Um93KVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgcm93XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcudXBkYXRlLXJvdycsIHNhdmVTb3VuZFN0YXRlKVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgcm93IGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICAub24oJ2lucHV0JywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2NoYW5nZWQnKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJvdyBhcyBjaGFuZ2VkXG4gICAgICovXG4gICAgLm9uKCcuc2VsZWN0MicpLmNoYW5nZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAkKGl0ZW0udGFyZ2V0KS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdjaGFuZ2VkJyk7XG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbXB0eSByb3dcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5kZWxldGUtcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgcm93cyB0byBhZGRcbiAgICAgKiBDaGFuZ2UgY291bnRlclxuICAgICAqL1xuICAgIC5vbignaW5wdXQnLCAnLmFkZC1jb3VudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYWRkLWNvdW50ZXInKS52YWwodGhpcy52YWx1ZSlcbiAgICB9KTtcbiIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGNvbnN0IFRBTUFUT09MX1NIT1dfRk9STSA9ICdUQU1BVE9PTF9TSE9XX0ZPUk0nO1xuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7VEFNQVRPT0xfU0hPV19GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoVEFNQVRPT0xfU0hPV19GT1JNLCAoZGF0YSwgc2VsZikgPT4ge1xuICAgICAgICBvYnNlcnZlci51bnN1YnNjcmliZShUQU1BVE9PTF9TSE9XX0ZPUk0sIHNlbGYpO1xuXG4gICAgICAgICQoJy5uZWlnaGJvci1hY3Rpdml0eS1mb3JtIC5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXG4gICAgICAgICAgICBtaW5WaWV3OiAnMidcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgYXdhcmRDcmVhdGUgZnJvbSBcImxpc3RlbmVycy9hd2FyZENyZWF0ZVwiO1xuaW1wb3J0IGF3YXJkRGVsZXRlIGZyb20gXCJsaXN0ZW5lcnMvYXdhcmREZWxldGVcIjtcbmltcG9ydCBzaG93Rm9ybSBmcm9tIFwiLi9saXN0ZW5lcnMvc2hvd0Zvcm1cIjtcblxuJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrJywgJy5hd2FyZC1jcmVhdGUtYnV0dG9uJywgYXdhcmRDcmVhdGUpXG4gICAgLm9uKCdjbGljaycsICcuYXdhcmQtZGVsZXRlLWJ1dHRvbicsIGF3YXJkRGVsZXRlKTtcblxuLyoqXG4gKiBSdW4gdGhlIHNob3cgZm9ybSBoYW5kbGVyLlxuICogQWZ0ZXIgY2xpY2sgYXQgY3JlYXRlIG9yIGVkaXQgYnV0dG9uXG4gKi9cbiQoJy5zaG93LWZvcm0nKVxuICAgIC5jbGljayhzaG93Rm9ybSk7XG4iLCJleHBvcnQgY29uc3QgU0VBUkNIX1VTRVJfQVNTRVRTICAgICAgPSAnU0VBUkNIX1VTRVJfQVNTRVRTJztcbmV4cG9ydCBjb25zdCBTVUJNSVRfVVNFUl9QQVJUX0ZPUk0gICA9ICdTVUJNSVRfVVNFUl9QQVJUX0ZPUk0nO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ORUlHSEJPUiAgICAgICAgID0gJ0RFTEVURV9ORUlHSEJPUic7XG5leHBvcnQgY29uc3QgQUREX05FSUdIQk9SICAgICAgICAgICAgPSAnQUREX05FSUdIQk9SJztcbmV4cG9ydCBjb25zdCBHRVRfTkVJR0hCT1JTICAgICAgICAgICA9ICdHRVRfTkVJR0hCT1JTJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTkVJR0hCT1JTICAgICAgICA9ICdVUERBVEVfTkVJR0hCT1JTJztcblxuZXhwb3J0IGNvbnN0IE5FSUdIQk9SX0dSSURfSUQgPSAnbmVpZ2hib3ItZ3JpZCc7IiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiaGVscGVycy9nZXRGb3JtRGF0YVwiO1xuXG4vKipcbiAqIEFkZCBjb21tZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YSgkKCcjY29sbGVjdGlibGUtZm9ybScpLmZpbmQoJ2lucHV0JykpO1xuXG4gICAgbmV3IGh0dHAoJCgnI2FkZC1jb2xsZWN0aWJsZScpLmF0dHIoJ2hyZWYnKSlcbiAgICAgICAgLm1ldGhvZCgnUE9TVCcpXG4gICAgICAgIC5kYXRhKHtkYXRhfSlcbiAgICAgICAgLnN1Y2Nlc3MocmVzcCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcC50eXBlID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgICAgIGxldCBmb3JtID0gJChyZXNwLmRhdGEpO1xuICAgICAgICAgICAgICAgICQoJyMnICsgcmVzcC5jb250YWluZXIpLnJlcGxhY2VXaXRoKGZvcm0pO1xuICAgICAgICAgICAgICAgIG5vdGlmeVN1Y2Nlc3MoJ1VzZXIgY29sbGVjdGlibGUgdXBkYXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcImNvbXBvbmVudHMvaHR0cC9SZXF1ZXN0QnVpbGRlclwiO1xuXG4vKipcbiAqIEFkZCBjb21tZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbmV3IGh0dHAoJCh0aGlzKS5jbG9zZXN0KCdhJykuYXR0cignaHJlZicpKVxuICAgICAgICAubWV0aG9kKCdQT1NUJylcbiAgICAgICAgLmRhdGEoe2Rlc2NyaXB0aW9uOiAkKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsKCl9KVxuICAgICAgICAuc3VjY2VzcyhyID0+IHtcbiAgICAgICAgICAgIGlmIChyLnN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWwoJycpO1xuICAgICAgICAgICAgICAgICQoJyN1c2VyLWNvbW1lbnRzJykucHJlcGVuZCgnPHRyPjx0ZD4nICsgci5tb2RlbC5kZXNjcmlwdGlvbiArICc8L3RkPjx0ZD4nICsgci5jcmVhdGVkX2J5ICsgJzwvdGQ+PHRkPicgKyByLmNyZWF0ZWRfYXQgKyAnIFBTVDwvdGQ+PHRkPjxhIGhyZWY9XCJodHRwOi8vY21zLWRldi5sb2NhbC9yZW1vdmUtY29tbWVudC8nICsgci5tb2RlbC5pZCArICdcIiBjbGFzcz1cImFqYXgtY29uZmlybS1hY3Rpb25cIiBkYXRhLW1ldGhvZD1cIkRFTEVURVwiIGRhdGEtaGVhZGVyPVwiRGVsZXRlIGNvbW1lbnQ/XCIgZGF0YS1idG4tbmFtZT1cIkRlbGV0ZVwiIGRhdGEtYnRuLWNsYXNzPVwiYnRuLWRhbmdlciBidG4tc21cIiBkYXRhLWRpc21pc3M9XCIxXCIgZGF0YS1yZWxvYWQ9XCIxXCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5EZWxldGU8L2J1dHRvbj48L2E+PC90ZD48L3RyPicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBTeW5jaHJvbml6ZSBtb3ZlLXBsYWNlbWVudC1zZWxlY3Qgc2VsZWN0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGVjdGVkU3RvcmFnZSA9ICQodGhpcykudmFsKCk7XG4gICAgJCh0aGlzKS5wYXJlbnRzKCdmb3JtJykuZmluZCgnLm1vdmUtcGxhY2VtZW50LXNlbGVjdCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHNlbGVjdGVkU3RvcmFnZSAhPSAkKHRoaXMpLnZhbCgpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnZhbChzZWxlY3RlZFN0b3JhZ2UpLmNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1VQREFURV9ORUlHSEJPUlMsIE5FSUdIQk9SX0dSSURfSUR9IGZyb20gXCJtb2R1bGVzL3VzZXJzL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNldCBwYWdlIGxpbWl0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcm91dGUgPSAkKHRoaXMpLmRhdGEoJ3JvdXRlJykgKyAnJnBhZ2VfbGltaXQ9JyArICQodGhpcykudmFsKCk7XG4gICAgbmV3IGh0dHAocm91dGUpXG4gICAgICAgIC5tZXRob2QoJ0dFVCcpXG4gICAgICAgIC5zdWNjZXNzKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICQoYCMke05FSUdIQk9SX0dSSURfSUR9YCkucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xufVxuIiwiLyoqXG4gKiBDaGFuZ2UgcGxhY2VtZW50IHNlbGVjdCBpbiBBZGQgQXNzZXRzIGJsb2NrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwbGFjZW1lbnROYW1lID0gJCgnI2FkZC1hc3NldHMtYmxvY2stcGxhY2VtZW50LW5hbWUnKTtcbiAgICBpZiAoJCh0aGlzKS52YWwoKSA+IDApIHtcbiAgICAgICAgcGxhY2VtZW50TmFtZS5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZW1lbnROYW1lLnNob3coKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIENoYW5nZSBtb2RlIGZvciBhZGQgbmVpZ2hib3JzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBuZWlnaGJvcnNDb3VudCA9ICQoJyNuZWlnaGJvcnMtY291bnQnKTtcbiAgICBpZigkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgIG5laWdoYm9yc0NvdW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmVpZ2hib3JzQ291bnQuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEhpZGUgYXNzZXRzIGluIHBsYWNlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBjdXJyZW50RWxlbWVudC50b2dnbGVDbGFzcygnaGlkZScpO1xuICAgIGN1cnJlbnRFbGVtZW50LnNpYmxpbmdzKCcubG9hZC1hc3NldHMnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuICAgICQoJyNhc3NldC1jb250YWluZXItJyArIGN1cnJlbnRFbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcpKS5odG1sKCcnKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBodHRwIGZyb20gXCJjb21wb25lbnRzL2h0dHAvUmVxdWVzdEJ1aWxkZXJcIjtcblxuLyoqXG4gKiBQTEFDRU1FTlRfQVNTRVRTX1JPVVRFIC0gaXQgaXMgYSBnbG9iYWwgb2JqZWN0XG4gKiBJbml0ZWQgaW4gdXNlci9lZGl0LmJsYWRlLnBocFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICBsZXQgcGxhY2VtZW50ID0gY3VycmVudEVsZW1lbnQuZGF0YSgncGxhY2VtZW50Jyk7XG5cbiAgICBjdXJyZW50RWxlbWVudC50b2dnbGVDbGFzcygnaGlkZScpO1xuICAgIGN1cnJlbnRFbGVtZW50LnNpYmxpbmdzKCcuaGlkZS1hc3NldHMnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuXG4gICAgbG9hZFBhcnQoUExBQ0VNRU5UX0FTU0VUU19ST1VURSArICcmcGxhY2VtZW50PScgKyBwbGFjZW1lbnQsICQoJyNhc3NldC1jb250YWluZXItJyArIHBsYWNlbWVudCkpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIExvYWQgcGFydCBmb3IgZWRpdCB1c2VyIHBhZ2VcbiAqL1xuZnVuY3Rpb24gbG9hZFBhcnQoYWN0aW9uLCBlbGVtZW50KSB7XG4gICAgbmV3IGh0dHAoYWN0aW9uKVxuICAgICAgICAubWV0aG9kKCdnZXQnKVxuICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9ICQocmVzcG9uc2UpO1xuICAgICAgICAgICAgaXRlbXMuZmluZCgnLmxpc3QtdGh1bWJuYWlsJykucG9wb3Zlcih7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICAgICAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnaG92ZXInLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGltZyBzcmM9XCInICsgJCh0aGlzKS5kYXRhKCdmdWxsJykgKyAnXCI+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoaXRlbXMpO1xuICAgICAgICB9KVxuICAgICAgICAuc2VuZCgpO1xufSIsIi8qKlxuICogU2VsZWN0IHJvd3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvdW50U2VsZWN0b3IgPSAkKHRoaXMpLnBhcmVudHMoJ3RkLCB0aCcpLmZpbmQoJy5jb3VudC1mb3Itc2VsZWN0Jyk7XG4gICAgY29uc3Qgcm93c0ZvclNlbGVjdCA9ICQodGhpcykucGFyZW50cygndGFibGUnKS5maW5kKCcuZm9yLXNlbGVjdCcpO1xuXG4gICAgbGV0IGNvdW50Rm9yU2VsZWN0ID0gY291bnRTZWxlY3Rvci52YWwoKSB8fCAwO1xuICAgIGlmIChjb3VudEZvclNlbGVjdCA9PT0gMCkge1xuICAgICAgICBjb3VudEZvclNlbGVjdCA9IHJvd3NGb3JTZWxlY3QubGVuZ3RoO1xuICAgICAgICBjb3VudFNlbGVjdG9yLnZhbChjb3VudEZvclNlbGVjdCk7XG4gICAgfVxuXG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgcm93c0ZvclNlbGVjdC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoY291bnRGb3JTZWxlY3QgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb3VudEZvclNlbGVjdC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvd3NGb3JTZWxlY3QuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiY29tcG9uZW50cy9odHRwL1JlcXVlc3RCdWlsZGVyXCI7XG5pbXBvcnQge1VQREFURV9ORUlHSEJPUlMsIE5FSUdIQk9SX0dSSURfSUR9IGZyb20gXCJtb2R1bGVzL3VzZXJzL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBuZWlnaGJvciBncmlkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoVVBEQVRFX05FSUdIQk9SUywgKHJlc3BvbnNlLCBzZWxmKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVuc3Vic2NyaWJlKFVQREFURV9ORUlHSEJPUlMsIHNlbGYpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS50eXBlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgbmV3IGh0dHAoJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuYXR0cignYWN0aW9uJykpXG4gICAgICAgICAgICAgICAgLm1ldGhvZCgnR0VUJylcbiAgICAgICAgICAgICAgICAuc3VjY2VzcyhyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoYCMke05FSUdIQk9SX0dSSURfSUR9YCkucmVwbGFjZVdpdGgocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7QUREX05FSUdIQk9SfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2V0IG5laWdoYm9yIGFzIGFjdGl2ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEFERF9ORUlHSEJPUiwgcmVzcCA9PiB7XG4gICAgICAgIGlmIChyZXNwLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAkKCcjZGVsZXRlLW5laWdoYm9yLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyNhZGQtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI25laWdoYm9yLXN0YXR1cy0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5odG1sKHJlc3AuZGF0YS5zdGF0dXNfdGV4dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvYnNlcnZlciBmcm9tIFwiY29tcG9uZW50cy9vYnNlcnZlci9FdmVudE9ic2VydmVyXCI7XG5pbXBvcnQge0RFTEVURV9ORUlHSEJPUn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFNldCBuZWlnaGJvciBhcyBkZWxldGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoREVMRVRFX05FSUdIQk9SLCByZXNwID0+IHtcbiAgICAgICAgaWYgKHJlc3AudHlwZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICQoJyNkZWxldGUtbmVpZ2hib3ItJyArIHJlc3AuZGF0YS5uZWlnaGJvcl9pZCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnI2FkZC1uZWlnaGJvci0nICsgcmVzcC5kYXRhLm5laWdoYm9yX2lkKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjbmVpZ2hib3Itc3RhdHVzLScgKyByZXNwLmRhdGEubmVpZ2hib3JfaWQpLmh0bWwocmVzcC5kYXRhLnN0YXR1c190ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7R0VUX05FSUdIQk9SUywgTkVJR0hCT1JfR1JJRF9JRH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIFVwZGF0ZSBuZWlnaGJvciBncmlkIGluIHNlYXJjaGluZ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKEdFVF9ORUlHSEJPUlMsIHJlc3AgPT4ge1xuICAgICAgICAkKGAjJHtORUlHSEJPUl9HUklEX0lEfWApLnJlcGxhY2VXaXRoKHJlc3ApO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IG9ic2VydmVyIGZyb20gXCJjb21wb25lbnRzL29ic2VydmVyL0V2ZW50T2JzZXJ2ZXJcIjtcbmltcG9ydCB7U0VBUkNIX1VTRVJfQVNTRVRTfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU2VhcmNoIHVzZXIgYXNzZXRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU0VBUkNIX1VTRVJfQVNTRVRTLCBkYXRhID0+IHtcbiAgICAgICAgJCgnI3NlYXJjaC1hc3NldHMtY29udGFpbmVyJykucmVwbGFjZVdpdGgoZGF0YSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb2JzZXJ2ZXIgZnJvbSBcImNvbXBvbmVudHMvb2JzZXJ2ZXIvRXZlbnRPYnNlcnZlclwiO1xuaW1wb3J0IG5vdGlmeVN1Y2Nlc3MgZnJvbSBcImNvbXBvbmVudHMvbm90aWZ5L25vdGlmeVN1Y2Nlc3NcIjtcbmltcG9ydCB7U1VCTUlUX1VTRVJfUEFSVF9GT1JNfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogU3VibWl0IHVzZXIgcGFydCBmb3JtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBvYnNlcnZlci5zdWJzY3JpYmUoU1VCTUlUX1VTRVJfUEFSVF9GT1JNLCByZXNwID0+IHtcbiAgICAgICAgbGV0IGZvcm0gPSAkKHJlc3AuZGF0YSk7XG5cbiAgICAgICAgJCgnIycgKyByZXNwLmNvbnRhaW5lcikucmVwbGFjZVdpdGgoZm9ybSk7XG4gICAgICAgIGZvcm0uZmluZCgnLnNlbGVjdDInKS5zZWxlY3QyKCk7XG5gICAgICAgICBub3RpZnlTdWNjZXNzKCdVc2VyIGRhdGEgdXBkYXRlZCcpO1xuYCAgICB9KTtcbn1cbiIsImltcG9ydCBzZWFyY2hVc2VyQXNzZXRzICAgICAgZnJvbSBcIi4vbGlzdGVuZXJzL3NlYXJjaFVzZXJBc3NldHNcIjtcbmltcG9ydCBzdWJtaXRVc2VyUGFydEZvcm0gICAgZnJvbSBcIi4vbGlzdGVuZXJzL3N1Ym1pdFVzZXJQYXJ0Rm9ybVwiO1xuaW1wb3J0IGRlbGV0ZU5laWdoYm9yICAgICAgICBmcm9tIFwiLi9saXN0ZW5lcnMvZGVsZXRlTmVpZ2hib3JcIjtcbmltcG9ydCBzZWFyY2hOZWlnaGJvciAgICAgICAgZnJvbSBcIi4vbGlzdGVuZXJzL3NlYXJjaE5laWdoYm9yXCI7XG5pbXBvcnQgYWRkTmVpZ2hib3IgICAgICAgICAgIGZyb20gXCIuL2xpc3RlbmVycy9hZGROZWlnaGJvclwiO1xuaW1wb3J0IGxvYWRQbGFjZW1lbnRBc3NldHMgICBmcm9tIFwiLi9oYW5kbGVycy9sb2FkUGxhY2VtZW50QXNzZXRzXCI7XG5pbXBvcnQgaGlkZVBsYWNlbWVudEFzc2V0cyAgIGZyb20gXCIuL2hhbmRsZXJzL2hpZGVQbGFjZW1lbnRBc3NldHNcIjtcbmltcG9ydCBjaGFuZ2VQbGFjZW1lbnQgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvY2hhbmdlUGxhY2VtZW50XCI7XG5pbXBvcnQgY2hhbmdlUmFuZG9tTmVpZ2hib3JzIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVJhbmRvbU5laWdoYm9yc1wiO1xuaW1wb3J0IGNoYW5nZU1vdmVQbGFjZW1lbnQgICBmcm9tIFwiLi9oYW5kbGVycy9jaGFuZ2VNb3ZlUGxhY2VtZW50XCI7XG5pbXBvcnQgc2VsZWN0Um93cyAgICAgICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL3NlbGVjdFJvd3NcIjtcbmltcG9ydCB1cGRhdGVOZWlnaGJvcnMgICAgICAgZnJvbSBcIi4vaGFuZGxlcnMvdXBkYXRlTmVpZ2hib3JzXCI7XG5pbXBvcnQgY2hhbmdlUGFnZUxpbWl0ICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL2NoYW5nZVBhZ2VMaW1pdFwiO1xuaW1wb3J0IGFkZENvbW1lbnQgICAgICAgICAgICBmcm9tIFwiLi9oYW5kbGVycy9hZGRDb21tZW50XCI7XG5pbXBvcnQgYWRkQ29sbGVjdGlibGUgICAgICAgIGZyb20gXCIuL2hhbmRsZXJzL2FkZENvbGxlY3RpYmxlXCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLyoqXG4gKiBTZWFyY2ggdXNlciBhc3NldHMgbGlzdGVuZXJcbiAqL1xuc2VhcmNoVXNlckFzc2V0cygpO1xuXG4vKipcbiAqIFN1Ym1pdCB1c2VyIHBhcnQgZm9ybSBsaXN0ZW5lclxuICovXG5zdWJtaXRVc2VyUGFydEZvcm0oKTtcblxuLyoqXG4gKiBEZWxldGUgTmVpZ2hib3JcbiAqL1xuZGVsZXRlTmVpZ2hib3IoKTtcblxuLyoqXG4gKiBBZGQgTmVpZ2hib3JcbiAqL1xuYWRkTmVpZ2hib3IoKTtcblxuLyoqXG4gKiBTZWFyY2ggTmVpZ2hib3JzXG4gKi9cbnNlYXJjaE5laWdoYm9yKCk7XG5cbiQoZG9jdW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGFzc2V0cyBpbiBwbGFjZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5sb2FkLWFzc2V0cycsIGxvYWRQbGFjZW1lbnRBc3NldHMpXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgcGxhY2VtZW50IGluIEFkZCBBc3NldHMgYmxvY2tcbiAgICAgKi9cbiAgICAub24oJ2NoYW5nZScsICcjcGxhY2VtZW50LWZvci1hc3NldCcsIGNoYW5nZVBsYWNlbWVudClcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBtb2RlIGZvciBhZGQgbmVpZ2hib3JzXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnI2lzLXJhbmRvbS1uZWlnaGJvcnMnLCBjaGFuZ2VSYW5kb21OZWlnaGJvcnMpXG5cbiAgICAvKipcbiAgICAgKiBIaWRlIGFzc2V0cyBpbiBwbGFjZW1lbnRcbiAgICAgKi9cbiAgICAub24oJ2NsaWNrJywgJy5oaWRlLWFzc2V0cycsIGhpZGVQbGFjZW1lbnRBc3NldHMpXG5cbiAgICAvKipcbiAgICAgKiBBdXRvIHNlbGVjdCByb3dzXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLnNlbGVjdC1yb3dzJywgc2VsZWN0Um93cylcblxuICAgIC8qKlxuICAgICAqIFN5bmNocm9uaXplIG1vdmUtcGxhY2VtZW50LXNlbGVjdCBzZWxlY3RzXG4gICAgICovXG4gICAgLm9uKCdjaGFuZ2UnLCAnLm1vdmUtcGxhY2VtZW50LXNlbGVjdCcsIGNoYW5nZU1vdmVQbGFjZW1lbnQpXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgbmVpZ2hib3IgcmVxdWVzdFxuICAgICAqL1xuICAgIC5vbignY2xpY2snLCAnLmRlbGV0ZS1uZWlnaGJvci1yZXF1ZXN0LCAjYWRkLW5laWdoYm9ycycsIHVwZGF0ZU5laWdoYm9ycylcbiAgICAvKipcbiAgICAgKiBTZXQgcGFnZSBsaW1pdFxuICAgICAqL1xuICAgICAub24oJ2NoYW5nZScsICcubmVpZ2hib3ItcGFnZS1saW1pdCcsIGNoYW5nZVBhZ2VMaW1pdClcblxuICAgIC8qKlxuICAgICAqIEFkZCBjb21tZW50XG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjYWRkLWNvbW1lbnQnLCBhZGRDb21tZW50KVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbGxlY3RpYmxlXG4gICAgICovXG4gICAgLm9uKCdjbGljaycsICcjYWRkLWNvbGxlY3RpYmxlJywgYWRkQ29sbGVjdGlibGUpXG47XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9