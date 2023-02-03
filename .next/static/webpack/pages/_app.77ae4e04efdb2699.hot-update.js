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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/fonts.css */ \"./styles/fonts.css\");\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Preloader */ \"./components/Preloader.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\pages\\\\_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  // Preloader state\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isPreloading = _useState[0],\n      setIsPreloading = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  var preloadTime = Math.floor(Math.random() * 2500) + 1000;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setTimeout(function () {\n      setIsPreloading(false);\n    }, preloadTime); // First time visitors redirected to /intro page\n\n    var firstVisit = localStorage.getItem(\"firstVisit\") || \"true\";\n    console.log(\"first visit = \".concat(localStorage.getItem(\"firstVisit\")));\n\n    if (firstVisit === \"true\") {\n      localStorage.setItem(\"firstVisit\", \"false\");\n      router.push(\"/page1\");\n    } // Setup ThreeJS\n    // const threeScript = document.createElement('script')\n    // threeScript.setAttribute('id', 'threeScript')\n    // threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')\n    // document.getElementsByTagName(\"head\")[0].appendChild(threeScript);\n    // Init lenis scroll\n\n\n    var lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n      duration: 1.2,\n      easing: function easing(t) {\n        return Math.min(1, 1.001 - Math.pow(2, -10 * t));\n      },\n      // https://www.desmos.com/calculator/brs54l4xou\n      direction: 'vertical',\n      // vertical, horizontal\n      gestureDirection: 'vertical',\n      // vertical, horizontal, both\n      smooth: true,\n      mouseMultiplier: 1,\n      smoothTouch: false,\n      touchMultiplier: 2,\n      infinite: false\n    });\n\n    function raf(time) {\n      lenis.raf(time);\n      requestAnimationFrame(raf);\n    }\n\n    requestAnimationFrame(raf);\n    return function () {};\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Frenzy | 2023\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"My page title\"\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this), isPreloading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Preloader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      timer: preloadTime\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"noise-container fixed z-[10000]\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"noise fixed z-[10000]\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(MyApp, \"BuWWUE23cWPCzBICnIoeJr1UzME=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVpGO0VBQUEsZ0JBREY7QUFrQkQ7O0dBbkVRRjtVQUlRRDs7O0tBSlJDO0FBcUVULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBMZW5pcyBmcm9tICdAc3R1ZGlvLWZyZWlnaHQvbGVuaXMnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2ZvbnRzLmNzcydcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QcmVsb2FkZXInXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gIC8vIFByZWxvYWRlciBzdGF0ZVxuICBjb25zdCBbaXNQcmVsb2FkaW5nLCBzZXRJc1ByZWxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcHJlbG9hZFRpbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTAwKSArIDEwMDBcbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNQcmVsb2FkaW5nKGZhbHNlKVxuICAgIH0sIHByZWxvYWRUaW1lKVxuXG4gICAgLy8gRmlyc3QgdGltZSB2aXNpdG9ycyByZWRpcmVjdGVkIHRvIC9pbnRybyBwYWdlXG4gICAgY29uc3QgZmlyc3RWaXNpdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlyc3RWaXNpdFwiKSB8fCBcInRydWVcIlxuICAgIGNvbnNvbGUubG9nKGBmaXJzdCB2aXNpdCA9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdFZpc2l0XCIpfWApXG4gICAgaWYgKGZpcnN0VmlzaXQgPT09IFwidHJ1ZVwiKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZpcnN0VmlzaXRcIiwgXCJmYWxzZVwiKVxuICAgICAgcm91dGVyLnB1c2goYC9wYWdlMWApXG4gICAgfVxuXG4gICAgLy8gU2V0dXAgVGhyZWVKU1xuICAgIC8vIGNvbnN0IHRocmVlU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICAvLyB0aHJlZVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RocmVlU2NyaXB0JylcbiAgICAvLyB0aHJlZVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy90aHJlZS5qcy9yMTM0L3RocmVlLm1pbi5qcycpXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHRocmVlU2NyaXB0KTtcblxuICAgIC8vIEluaXQgbGVuaXMgc2Nyb2xsXG4gICAgY29uc3QgbGVuaXMgPSBuZXcgTGVuaXMoe1xuICAgICAgZHVyYXRpb246IDEuMixcbiAgICAgIGVhc2luZzogKHQpID0+IE1hdGgubWluKDEsIDEuMDAxIC0gTWF0aC5wb3coMiwgLTEwICogdCkpLCAvLyBodHRwczovL3d3dy5kZXNtb3MuY29tL2NhbGN1bGF0b3IvYnJzNTRsNHhvdVxuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLCAvLyB2ZXJ0aWNhbCwgaG9yaXpvbnRhbFxuICAgICAgZ2VzdHVyZURpcmVjdGlvbjogJ3ZlcnRpY2FsJywgLy8gdmVydGljYWwsIGhvcml6b250YWwsIGJvdGhcbiAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgIG1vdXNlTXVsdGlwbGllcjogMSxcbiAgICAgIHNtb290aFRvdWNoOiBmYWxzZSxcbiAgICAgIHRvdWNoTXVsdGlwbGllcjogMixcbiAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICB9KVxuICAgIGZ1bmN0aW9uIHJhZih0aW1lKSB7XG4gICAgICBsZW5pcy5yYWYodGltZSlcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpXG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpXG5cbiAgICByZXR1cm4gKCkgPT4geyB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RnJlbnp5IHwgMjAyMzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTXkgcGFnZSB0aXRsZVwiIGtleT1cInRpdGxlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtpc1ByZWxvYWRpbmcgPyAoXG4gICAgICAgIDxQcmVsb2FkZXIgdGltZXI9e3ByZWxvYWRUaW1lfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9pc2UtY29udGFpbmVyIGZpeGVkIHotWzEwMDAwXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vaXNlIGZpeGVkIHotWzEwMDAwXVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGF5b3V0IiwiTGVuaXMiLCJIZWFkIiwiUHJlbG9hZGVyIiwiZ3NhcCIsInVzZVJvdXRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNQcmVsb2FkaW5nIiwic2V0SXNQcmVsb2FkaW5nIiwicm91dGVyIiwicHJlbG9hZFRpbWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRUaW1lb3V0IiwiZmlyc3RWaXNpdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsInB1c2giLCJsZW5pcyIsImR1cmF0aW9uIiwiZWFzaW5nIiwidCIsIm1pbiIsInBvdyIsImRpcmVjdGlvbiIsImdlc3R1cmVEaXJlY3Rpb24iLCJzbW9vdGgiLCJtb3VzZU11bHRpcGxpZXIiLCJzbW9vdGhUb3VjaCIsInRvdWNoTXVsdGlwbGllciIsImluZmluaXRlIiwicmFmIiwidGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});