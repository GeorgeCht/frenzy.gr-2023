"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/fonts.css */ \"./styles/fonts.css\");\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Preloader */ \"./components/Preloader.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\pages\\\\_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  // Preloader state\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isPreloading = _useState[0],\n      setIsPreloading = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  var preloadTime = Math.floor(Math.random() * 2500) + 1000;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setTimeout(function () {\n      setIsPreloading(false);\n    }, preloadTime);\n    setTimeout(function () {\n      router.push(\"/page1\");\n    }, 5000); // const firstVisit = localStorage.getItem(\"firstVisit\") || \"true\";\n    // if (firstVisit === \"true\") {\n    // localStorage.setItem(\"firstVisit\", \"false\");\n    // Setup ThreeJS\n    // const threeScript = document.createElement('script')\n    // threeScript.setAttribute('id', 'threeScript')\n    // threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')\n    // document.getElementsByTagName(\"head\")[0].appendChild(threeScript);\n    // Init lenis scroll\n\n    var lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n      duration: 1.2,\n      easing: function easing(t) {\n        return Math.min(1, 1.001 - Math.pow(2, -10 * t));\n      },\n      // https://www.desmos.com/calculator/brs54l4xou\n      direction: 'vertical',\n      // vertical, horizontal\n      gestureDirection: 'vertical',\n      // vertical, horizontal, both\n      smooth: true,\n      mouseMultiplier: 1,\n      smoothTouch: false,\n      touchMultiplier: 2,\n      infinite: false\n    });\n\n    function raf(time) {\n      lenis.raf(time);\n      requestAnimationFrame(raf);\n    }\n\n    requestAnimationFrame(raf);\n    return function () {};\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Frenzy | 2023\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"My page title\"\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this), isPreloading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Preloader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      timer: preloadTime\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"noise-container fixed z-[10000]\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"noise fixed z-[10000]\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(MyApp, \"BuWWUE23cWPCzBICnIoeJr1UzME=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuXG5pbXBvcnQgTGVuaXMgZnJvbSAnQHN0dWRpby1mcmVpZ2h0L2xlbmlzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9mb250cy5jc3MnXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gIC8vIFByZWxvYWRlciBzdGF0ZVxuICBjb25zdCBbaXNQcmVsb2FkaW5nLCBzZXRJc1ByZWxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcHJlbG9hZFRpbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTAwKSArIDEwMDBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1ByZWxvYWRpbmcoZmFsc2UpXG4gICAgfSwgcHJlbG9hZFRpbWUpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcGFnZTFgKVxuICAgIH0sIDUwMDApXG5cbiAgICAgIC8vIGNvbnN0IGZpcnN0VmlzaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0VmlzaXRcIikgfHwgXCJ0cnVlXCI7XG4gIC8vIGlmIChmaXJzdFZpc2l0ID09PSBcInRydWVcIikge1xuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmlyc3RWaXNpdFwiLCBcImZhbHNlXCIpO1xuXG4gICAgLy8gU2V0dXAgVGhyZWVKU1xuICAgIC8vIGNvbnN0IHRocmVlU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICAvLyB0aHJlZVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RocmVlU2NyaXB0JylcbiAgICAvLyB0aHJlZVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy90aHJlZS5qcy9yMTM0L3RocmVlLm1pbi5qcycpXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHRocmVlU2NyaXB0KTtcblxuICAgIC8vIEluaXQgbGVuaXMgc2Nyb2xsXG4gICAgY29uc3QgbGVuaXMgPSBuZXcgTGVuaXMoe1xuICAgICAgZHVyYXRpb246IDEuMixcbiAgICAgIGVhc2luZzogKHQpID0+IE1hdGgubWluKDEsIDEuMDAxIC0gTWF0aC5wb3coMiwgLTEwICogdCkpLCAvLyBodHRwczovL3d3dy5kZXNtb3MuY29tL2NhbGN1bGF0b3IvYnJzNTRsNHhvdVxuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLCAvLyB2ZXJ0aWNhbCwgaG9yaXpvbnRhbFxuICAgICAgZ2VzdHVyZURpcmVjdGlvbjogJ3ZlcnRpY2FsJywgLy8gdmVydGljYWwsIGhvcml6b250YWwsIGJvdGhcbiAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgIG1vdXNlTXVsdGlwbGllcjogMSxcbiAgICAgIHNtb290aFRvdWNoOiBmYWxzZSxcbiAgICAgIHRvdWNoTXVsdGlwbGllcjogMixcbiAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICB9KVxuICAgIGZ1bmN0aW9uIHJhZih0aW1lKSB7XG4gICAgICBsZW5pcy5yYWYodGltZSlcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpXG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpXG5cbiAgICByZXR1cm4gKCkgPT4geyB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RnJlbnp5IHwgMjAyMzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTXkgcGFnZSB0aXRsZVwiIGtleT1cInRpdGxlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtpc1ByZWxvYWRpbmcgPyAoXG4gICAgICAgIDxQcmVsb2FkZXIgdGltZXI9e3ByZWxvYWRUaW1lfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9pc2UtY29udGFpbmVyIGZpeGVkIHotWzEwMDAwXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vaXNlIGZpeGVkIHotWzEwMDAwXVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGF5b3V0IiwiTGVuaXMiLCJIZWFkIiwiUHJlbG9hZGVyIiwidXNlUm91dGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc1ByZWxvYWRpbmciLCJzZXRJc1ByZWxvYWRpbmciLCJyb3V0ZXIiLCJwcmVsb2FkVGltZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJwdXNoIiwibGVuaXMiLCJkdXJhdGlvbiIsImVhc2luZyIsInQiLCJtaW4iLCJwb3ciLCJkaXJlY3Rpb24iLCJnZXN0dXJlRGlyZWN0aW9uIiwic21vb3RoIiwibW91c2VNdWx0aXBsaWVyIiwic21vb3RoVG91Y2giLCJ0b3VjaE11bHRpcGxpZXIiLCJpbmZpbml0ZSIsInJhZiIsInRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});