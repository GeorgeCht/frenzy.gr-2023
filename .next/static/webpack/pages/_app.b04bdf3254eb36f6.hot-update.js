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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/fonts.css */ \"./styles/fonts.css\");\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Preloader */ \"./components/Preloader.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/AppContext */ \"./context/AppContext.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\pages\\\\_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction app(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  // Preloader state\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isPreloading = _useState[0],\n      setIsPreloading = _useState[1]; // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })\n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  var preloadTime = Math.floor(Math.random() * 2500) + 1000;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setTimeout(function () {\n      setIsPreloading(false);\n    }, preloadTime); // const mouseMoveHandler = (event) => {\n    //   setMousePosition({\n    //     x: event.clientX,\n    //     y: event.clientY,\n    //   })\n    //   console.log(mousePosition.x, mousePosition.y)\n    // }\n    // document.body.addEventListener(`mousemove`, mouseMoveHandler)\n    // show mousePosition.x \n    // First time visitors redirected to /intro page\n\n    var firstVisit = localStorage.getItem(\"firstVisit\") || \"true\";\n\n    if (firstVisit === \"true\") {\n      localStorage.setItem(\"firstVisit\", \"false\");\n      router.push(\"/page1\");\n    } // Init lenis scroll\n\n\n    var lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_10__[\"default\"]({\n      duration: 1.2,\n      easing: function easing(t) {\n        return Math.min(1, 1.001 - Math.pow(2, -10 * t));\n      },\n      // https://www.desmos.com/calculator/brs54l4xou\n      direction: 'vertical',\n      // vertical, horizontal\n      gestureDirection: 'vertical',\n      // vertical, horizontal, both\n      smooth: true,\n      mouseMultiplier: 1,\n      smoothTouch: false,\n      touchMultiplier: 2,\n      infinite: false\n    });\n\n    function raf(time) {\n      lenis.raf(time);\n      requestAnimationFrame(raf);\n    }\n\n    requestAnimationFrame(raf);\n    return function () {// document.body.removeEventListener(`mousemove`, mouseMoveHandler)\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"title\", {\n        children: \"Frenzy | 2023\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"My page title\"\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this), isPreloading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Preloader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      timer: preloadTime\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_context_AppContext__WEBPACK_IMPORTED_MODULE_8__.AppWrapper, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n      className: \"noise-container fixed z-[10000]\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n        className: \"noise fixed z-[10000]\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(app, \"BuWWUE23cWPCzBICnIoeJr1UzME=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBZjtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFDO01BQWY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFkRjtFQUFBLGdCQURGO0FBb0JEOztHQTVFUUY7VUFLUUg7OztBQXlFakIsK0RBQWVHLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExlbmlzIGZyb20gJ0BzdHVkaW8tZnJlaWdodC9sZW5pcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZm9udHMuY3NzJ1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1ByZWxvYWRlcidcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEFwcFdyYXBwZXIgfSBmcm9tICcuLi9jb250ZXh0L0FwcENvbnRleHQnXG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9BcHBDb250ZXh0J1xuXG5mdW5jdGlvbiBhcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgLy8gUHJlbG9hZGVyIHN0YXRlXG4gIGNvbnN0IFtpc1ByZWxvYWRpbmcsIHNldElzUHJlbG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAvLyBjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcHJlbG9hZFRpbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTAwKSArIDEwMDBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1ByZWxvYWRpbmcoZmFsc2UpXG4gICAgfSwgcHJlbG9hZFRpbWUpXG5cbiAgICAvLyBjb25zdCBtb3VzZU1vdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gICBzZXRNb3VzZVBvc2l0aW9uKHtcbiAgICAvLyAgICAgeDogZXZlbnQuY2xpZW50WCxcbiAgICAvLyAgICAgeTogZXZlbnQuY2xpZW50WSxcbiAgICAvLyAgIH0pXG4gICAgLy8gICBjb25zb2xlLmxvZyhtb3VzZVBvc2l0aW9uLngsIG1vdXNlUG9zaXRpb24ueSlcbiAgICAvLyB9XG5cbiAgICAvLyBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoYG1vdXNlbW92ZWAsIG1vdXNlTW92ZUhhbmRsZXIpXG4gICAgLy8gc2hvdyBtb3VzZVBvc2l0aW9uLnggXG4gICAgXG4gICAgXG4gICAgLy8gRmlyc3QgdGltZSB2aXNpdG9ycyByZWRpcmVjdGVkIHRvIC9pbnRybyBwYWdlXG4gICAgY29uc3QgZmlyc3RWaXNpdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlyc3RWaXNpdFwiKSB8fCBcInRydWVcIlxuICAgIGlmIChmaXJzdFZpc2l0ID09PSBcInRydWVcIikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaXJzdFZpc2l0XCIsIFwiZmFsc2VcIilcbiAgICAgIHJvdXRlci5wdXNoKGAvcGFnZTFgKVxuICAgIH1cblxuICAgIC8vIEluaXQgbGVuaXMgc2Nyb2xsXG4gICAgY29uc3QgbGVuaXMgPSBuZXcgTGVuaXMoe1xuICAgICAgZHVyYXRpb246IDEuMixcbiAgICAgIGVhc2luZzogKHQpID0+IE1hdGgubWluKDEsIDEuMDAxIC0gTWF0aC5wb3coMiwgLTEwICogdCkpLCAvLyBodHRwczovL3d3dy5kZXNtb3MuY29tL2NhbGN1bGF0b3IvYnJzNTRsNHhvdVxuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLCAvLyB2ZXJ0aWNhbCwgaG9yaXpvbnRhbFxuICAgICAgZ2VzdHVyZURpcmVjdGlvbjogJ3ZlcnRpY2FsJywgLy8gdmVydGljYWwsIGhvcml6b250YWwsIGJvdGhcbiAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgIG1vdXNlTXVsdGlwbGllcjogMSxcbiAgICAgIHNtb290aFRvdWNoOiBmYWxzZSxcbiAgICAgIHRvdWNoTXVsdGlwbGllcjogMixcbiAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICB9KVxuICAgIGZ1bmN0aW9uIHJhZih0aW1lKSB7XG4gICAgICBsZW5pcy5yYWYodGltZSlcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpXG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGBtb3VzZW1vdmVgLCBtb3VzZU1vdmVIYW5kbGVyKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GcmVuenkgfCAyMDIzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNeSBwYWdlIHRpdGxlXCIga2V5PVwidGl0bGVcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAge2lzUHJlbG9hZGluZyA/IChcbiAgICAgICAgPFByZWxvYWRlciB0aW1lcj17cHJlbG9hZFRpbWV9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8QXBwV3JhcHBlcj5cbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L0FwcFdyYXBwZXI+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2lzZS1jb250YWluZXIgZml4ZWQgei1bMTAwMDBdXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9pc2UgZml4ZWQgei1bMTAwMDBdXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGF5b3V0IiwiTGVuaXMiLCJIZWFkIiwiUHJlbG9hZGVyIiwiZ3NhcCIsInVzZVJvdXRlciIsIkFwcFdyYXBwZXIiLCJ1c2VBcHBDb250ZXh0IiwiYXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNQcmVsb2FkaW5nIiwic2V0SXNQcmVsb2FkaW5nIiwicm91dGVyIiwicHJlbG9hZFRpbWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRUaW1lb3V0IiwiZmlyc3RWaXNpdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwicHVzaCIsImxlbmlzIiwiZHVyYXRpb24iLCJlYXNpbmciLCJ0IiwibWluIiwicG93IiwiZGlyZWN0aW9uIiwiZ2VzdHVyZURpcmVjdGlvbiIsInNtb290aCIsIm1vdXNlTXVsdGlwbGllciIsInNtb290aFRvdWNoIiwidG91Y2hNdWx0aXBsaWVyIiwiaW5maW5pdGUiLCJyYWYiLCJ0aW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});