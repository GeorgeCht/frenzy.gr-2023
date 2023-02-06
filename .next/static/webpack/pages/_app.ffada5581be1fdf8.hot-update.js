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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/fonts.css */ \"./styles/fonts.css\");\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Preloader */ \"./components/Preloader.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\pages\\\\_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction app(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  // Preloader state\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isPreloading = _useState[0],\n      setIsPreloading = _useState[1]; // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })\n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  var preloadTime = Math.floor(Math.random() * 2500) + 1000;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setTimeout(function () {\n      setIsPreloading(false);\n    }, preloadTime);\n\n    var mouseMoveHandler = function mouseMoveHandler(event) {\n      setMousePosition({\n        x: event.clientX,\n        y: event.clientY\n      });\n      console.log(mousePosition.x, mousePosition.y);\n    }; // document.body.addEventListener(`mousemove`, mouseMoveHandler)\n    // show mousePosition.x \n    // First time visitors redirected to /intro page\n\n\n    var firstVisit = localStorage.getItem(\"firstVisit\") || \"true\";\n\n    if (firstVisit === \"true\") {\n      localStorage.setItem(\"firstVisit\", \"false\");\n      router.push(\"/page1\");\n    } // Init lenis scroll\n\n\n    var lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n      duration: 1.2,\n      easing: function easing(t) {\n        return Math.min(1, 1.001 - Math.pow(2, -10 * t));\n      },\n      // https://www.desmos.com/calculator/brs54l4xou\n      direction: 'vertical',\n      // vertical, horizontal\n      gestureDirection: 'vertical',\n      // vertical, horizontal, both\n      smooth: true,\n      mouseMultiplier: 1,\n      smoothTouch: false,\n      touchMultiplier: 2,\n      infinite: false\n    });\n\n    function raf(time) {\n      lenis.raf(time);\n      requestAnimationFrame(raf);\n    }\n\n    requestAnimationFrame(raf);\n    return function () {// document.body.removeEventListener(`mousemove`, mouseMoveHandler)\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Frenzy | 2023\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"My page title\"\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this), isPreloading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Preloader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      timer: preloadTime\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"app-wrapper\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"noise-container fixed z-[10000]\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"noise fixed z-[10000]\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(app, \"BuWWUE23cWPCzBICnIoeJr1UzME=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO01BQUE7SUFBQSxRQURXLGdCQUdYLDhEQUFDLDBEQUFEO01BQUEsdUJBQ0U7UUFBSyxTQUFTLEVBQUMsYUFBZjtRQUFBLHVCQUNFLDhEQUFDLFNBQUQsb0JBQWVKLFNBQWY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBUkosZUFjRTtNQUFLLFNBQVMsRUFBQyxpQ0FBZjtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFDO01BQWY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFkRjtFQUFBLGdCQURGO0FBb0JEOztHQTVFUUY7VUFLUUQ7OztBQXlFakIsK0RBQWVDLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExlbmlzIGZyb20gJ0BzdHVkaW8tZnJlaWdodC9sZW5pcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZm9udHMuY3NzJ1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1ByZWxvYWRlcidcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZnVuY3Rpb24gYXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gIC8vIFByZWxvYWRlciBzdGF0ZVxuICBjb25zdCBbaXNQcmVsb2FkaW5nLCBzZXRJc1ByZWxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgLy8gY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHByZWxvYWRUaW1lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUwMCkgKyAxMDAwXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNQcmVsb2FkaW5nKGZhbHNlKVxuICAgIH0sIHByZWxvYWRUaW1lKVxuXG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgc2V0TW91c2VQb3NpdGlvbih7XG4gICAgICAgIHg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIHk6IGV2ZW50LmNsaWVudFksXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2cobW91c2VQb3NpdGlvbi54LCBtb3VzZVBvc2l0aW9uLnkpXG4gICAgfVxuXG4gICAgLy8gZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKGBtb3VzZW1vdmVgLCBtb3VzZU1vdmVIYW5kbGVyKVxuICAgIC8vIHNob3cgbW91c2VQb3NpdGlvbi54IFxuICAgIFxuICAgIFxuICAgIC8vIEZpcnN0IHRpbWUgdmlzaXRvcnMgcmVkaXJlY3RlZCB0byAvaW50cm8gcGFnZVxuICAgIGNvbnN0IGZpcnN0VmlzaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0VmlzaXRcIikgfHwgXCJ0cnVlXCJcbiAgICBpZiAoZmlyc3RWaXNpdCA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmlyc3RWaXNpdFwiLCBcImZhbHNlXCIpXG4gICAgICByb3V0ZXIucHVzaChgL3BhZ2UxYClcbiAgICB9XG5cbiAgICAvLyBJbml0IGxlbmlzIHNjcm9sbFxuICAgIGNvbnN0IGxlbmlzID0gbmV3IExlbmlzKHtcbiAgICAgIGR1cmF0aW9uOiAxLjIsXG4gICAgICBlYXNpbmc6ICh0KSA9PiBNYXRoLm1pbigxLCAxLjAwMSAtIE1hdGgucG93KDIsIC0xMCAqIHQpKSwgLy8gaHR0cHM6Ly93d3cuZGVzbW9zLmNvbS9jYWxjdWxhdG9yL2JyczU0bDR4b3VcbiAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJywgLy8gdmVydGljYWwsIGhvcml6b250YWxcbiAgICAgIGdlc3R1cmVEaXJlY3Rpb246ICd2ZXJ0aWNhbCcsIC8vIHZlcnRpY2FsLCBob3Jpem9udGFsLCBib3RoXG4gICAgICBzbW9vdGg6IHRydWUsXG4gICAgICBtb3VzZU11bHRpcGxpZXI6IDEsXG4gICAgICBzbW9vdGhUb3VjaDogZmFsc2UsXG4gICAgICB0b3VjaE11bHRpcGxpZXI6IDIsXG4gICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgfSlcbiAgICBmdW5jdGlvbiByYWYodGltZSkge1xuICAgICAgbGVuaXMucmFmKHRpbWUpXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKVxuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihgbW91c2Vtb3ZlYCwgbW91c2VNb3ZlSGFuZGxlcilcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RnJlbnp5IHwgMjAyMzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTXkgcGFnZSB0aXRsZVwiIGtleT1cInRpdGxlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtpc1ByZWxvYWRpbmcgPyAoXG4gICAgICAgIDxQcmVsb2FkZXIgdGltZXI9e3ByZWxvYWRUaW1lfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9pc2UtY29udGFpbmVyIGZpeGVkIHotWzEwMDAwXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vaXNlIGZpeGVkIHotWzEwMDAwXVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIkxlbmlzIiwiSGVhZCIsIlByZWxvYWRlciIsImdzYXAiLCJ1c2VSb3V0ZXIiLCJhcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc1ByZWxvYWRpbmciLCJzZXRJc1ByZWxvYWRpbmciLCJyb3V0ZXIiLCJwcmVsb2FkVGltZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJtb3VzZU1vdmVIYW5kbGVyIiwiZXZlbnQiLCJzZXRNb3VzZVBvc2l0aW9uIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsImNvbnNvbGUiLCJsb2ciLCJtb3VzZVBvc2l0aW9uIiwiZmlyc3RWaXNpdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwicHVzaCIsImxlbmlzIiwiZHVyYXRpb24iLCJlYXNpbmciLCJ0IiwibWluIiwicG93IiwiZGlyZWN0aW9uIiwiZ2VzdHVyZURpcmVjdGlvbiIsInNtb290aCIsIm1vdXNlTXVsdGlwbGllciIsInNtb290aFRvdWNoIiwidG91Y2hNdWx0aXBsaWVyIiwiaW5maW5pdGUiLCJyYWYiLCJ0aW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});