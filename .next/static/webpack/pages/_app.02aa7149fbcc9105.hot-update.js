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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/fonts.css */ \"./styles/fonts.css\");\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Preloader */ \"./components/Preloader.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\pages\\\\_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  // Preloader state\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isPreloading = _useState[0],\n      setIsPreloading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    x: 0,\n    y: 0\n  }),\n      mousePosition = _useState2[0],\n      setMousePosition = _useState2[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  var preloadTime = Math.floor(Math.random() * 2500) + 1000;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setTimeout(function () {\n      setIsPreloading(false);\n    }, preloadTime);\n    setTimeout(function () {\n      document.body.addEventListener(\"mousemove\", function (e) {\n        setMousePos({\n          x: e.clientX,\n          y: e.clientY\n        });\n        console.log(mousePos);\n        console.log(e.clientX);\n      });\n    }, 1000); // First time visitors redirected to /intro page\n\n    var firstVisit = localStorage.getItem(\"firstVisit\") || \"true\";\n\n    if (firstVisit === \"true\") {\n      localStorage.setItem(\"firstVisit\", \"false\");\n      router.push(\"/page1\");\n    } // Setup ThreeJS\n    // const threeScript = document.createElement('script')\n    // threeScript.setAttribute('id', 'threeScript')\n    // threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')\n    // document.getElementsByTagName(\"head\")[0].appendChild(threeScript);\n    // Init lenis scroll\n\n\n    var lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n      duration: 1.2,\n      easing: function easing(t) {\n        return Math.min(1, 1.001 - Math.pow(2, -10 * t));\n      },\n      // https://www.desmos.com/calculator/brs54l4xou\n      direction: 'vertical',\n      // vertical, horizontal\n      gestureDirection: 'vertical',\n      // vertical, horizontal, both\n      smooth: true,\n      mouseMultiplier: 1,\n      smoothTouch: false,\n      touchMultiplier: 2,\n      infinite: false\n    });\n\n    function raf(time) {\n      lenis.raf(time);\n      requestAnimationFrame(raf);\n    }\n\n    requestAnimationFrame(raf);\n    return function () {};\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Frenzy | 2023\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"My page title\"\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), isPreloading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Preloader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      timer: preloadTime\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"noise-container fixed z-[10000]\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"noise fixed z-[10000]\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(MyApp, \"WlhzUBrMKYXkxjYLTrMlUt4W6sk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU1UsS0FBVCxPQUF5QztFQUFBOztFQUFBLElBQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7RUFBQSxJQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0VBRXZDO0VBQ0EsZ0JBQXdDVCwrQ0FBUSxDQUFDLElBQUQsQ0FBaEQ7RUFBQSxJQUFPVSxZQUFQO0VBQUEsSUFBcUJDLGVBQXJCOztFQUNBLGlCQUEwQ1gsK0NBQVEsQ0FBQztJQUFFWSxDQUFDLEVBQUUsQ0FBTDtJQUFRQyxDQUFDLEVBQUU7RUFBWCxDQUFELENBQWxEO0VBQUEsSUFBT0MsYUFBUDtFQUFBLElBQXNCQyxnQkFBdEI7O0VBQ0EsSUFBTUMsTUFBTSxHQUFHVixzREFBUyxFQUF4QjtFQUNBLElBQU1XLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixJQUEzQixJQUFtQyxJQUF2RDtFQUdBdkIsZ0RBQVMsQ0FBQyxZQUFNO0lBRWR3QixVQUFVLENBQUMsWUFBTTtNQUNmVixlQUFlLENBQUMsS0FBRCxDQUFmO0lBQ0QsQ0FGUyxFQUVQTSxXQUZPLENBQVY7SUFNQUksVUFBVSxDQUFDLFlBQU07TUFDZkMsUUFBUSxDQUFDQyxJQUFULENBQWNDLGdCQUFkLGNBQTRDLFVBQUNDLENBQUQsRUFBTztRQUNqREMsV0FBVyxDQUFDO1VBQ1ZkLENBQUMsRUFBRWEsQ0FBQyxDQUFDRSxPQURLO1VBRVZkLENBQUMsRUFBRVksQ0FBQyxDQUFDRztRQUZLLENBQUQsQ0FBWDtRQUlBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWjtRQUNBRixPQUFPLENBQUNDLEdBQVIsQ0FBWUwsQ0FBQyxDQUFDRSxPQUFkO01BQ0QsQ0FQRDtJQVFELENBVFMsRUFTUCxJQVRPLENBQVYsQ0FSYyxDQXFCZDs7SUFDQSxJQUFNSyxVQUFVLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixLQUFzQyxNQUF6RDs7SUFDQSxJQUFJRixVQUFVLEtBQUssTUFBbkIsRUFBMkI7TUFDekJDLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixZQUFyQixFQUFtQyxPQUFuQztNQUNBbkIsTUFBTSxDQUFDb0IsSUFBUDtJQUNELENBMUJhLENBNEJkO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFFQTs7O0lBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUluQyw2REFBSixDQUFVO01BQ3RCb0MsUUFBUSxFQUFFLEdBRFk7TUFFdEJDLE1BQU0sRUFBRSxnQkFBQ0MsQ0FBRDtRQUFBLE9BQU90QixJQUFJLENBQUN1QixHQUFMLENBQVMsQ0FBVCxFQUFZLFFBQVF2QixJQUFJLENBQUN3QixHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxHQUFNRixDQUFsQixDQUFwQixDQUFQO01BQUEsQ0FGYztNQUVvQztNQUMxREcsU0FBUyxFQUFFLFVBSFc7TUFHQztNQUN2QkMsZ0JBQWdCLEVBQUUsVUFKSTtNQUlRO01BQzlCQyxNQUFNLEVBQUUsSUFMYztNQU10QkMsZUFBZSxFQUFFLENBTks7TUFPdEJDLFdBQVcsRUFBRSxLQVBTO01BUXRCQyxlQUFlLEVBQUUsQ0FSSztNQVN0QkMsUUFBUSxFQUFFO0lBVFksQ0FBVixDQUFkOztJQVdBLFNBQVNDLEdBQVQsQ0FBYUMsSUFBYixFQUFtQjtNQUNqQmQsS0FBSyxDQUFDYSxHQUFOLENBQVVDLElBQVY7TUFDQUMscUJBQXFCLENBQUNGLEdBQUQsQ0FBckI7SUFDRDs7SUFDREUscUJBQXFCLENBQUNGLEdBQUQsQ0FBckI7SUFFQSxPQUFPLFlBQU0sQ0FBRyxDQUFoQjtFQUNELENBckRRLEVBcUROLEVBckRNLENBQVQ7RUF1REEsb0JBQ0U7SUFBQSx3QkFDRSw4REFBQyxrREFBRDtNQUFBLHdCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFFRTtRQUFNLFFBQVEsRUFBQyxVQUFmO1FBQTBCLE9BQU8sRUFBQztNQUFsQyxHQUFzRCxPQUF0RDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsRUFLR3hDLFlBQVksZ0JBQ1gsOERBQUMsNkRBQUQ7TUFBVyxLQUFLLEVBQUVPO0lBQWxCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFEVyxnQkFHWCw4REFBQywwREFBRDtNQUFBLHVCQUNFLDhEQUFDLFNBQUQsb0JBQWVSLFNBQWY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFSSixlQVlFO01BQUssU0FBUyxFQUFDLGlDQUFmO01BQUEsdUJBQ0U7UUFBSyxTQUFTLEVBQUM7TUFBZjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVpGO0VBQUEsZ0JBREY7QUFrQkQ7O0dBbEZRRjtVQUtRRDs7O0tBTFJDO0FBb0ZULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBMZW5pcyBmcm9tICdAc3R1ZGlvLWZyZWlnaHQvbGVuaXMnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2ZvbnRzLmNzcydcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QcmVsb2FkZXInXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gIC8vIFByZWxvYWRlciBzdGF0ZVxuICBjb25zdCBbaXNQcmVsb2FkaW5nLCBzZXRJc1ByZWxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHByZWxvYWRUaW1lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUwMCkgKyAxMDAwXG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzUHJlbG9hZGluZyhmYWxzZSlcbiAgICB9LCBwcmVsb2FkVGltZSlcblxuXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihgbW91c2Vtb3ZlYCwgKGUpID0+IHtcbiAgICAgICAgc2V0TW91c2VQb3Moe1xuICAgICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgICB5OiBlLmNsaWVudFlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cobW91c2VQb3MpXG4gICAgICAgIGNvbnNvbGUubG9nKGUuY2xpZW50WClcbiAgICAgIH0pXG4gICAgfSwgMTAwMClcblxuICAgIFxuXG4gICAgLy8gRmlyc3QgdGltZSB2aXNpdG9ycyByZWRpcmVjdGVkIHRvIC9pbnRybyBwYWdlXG4gICAgY29uc3QgZmlyc3RWaXNpdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlyc3RWaXNpdFwiKSB8fCBcInRydWVcIlxuICAgIGlmIChmaXJzdFZpc2l0ID09PSBcInRydWVcIikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaXJzdFZpc2l0XCIsIFwiZmFsc2VcIilcbiAgICAgIHJvdXRlci5wdXNoKGAvcGFnZTFgKVxuICAgIH1cblxuICAgIC8vIFNldHVwIFRocmVlSlNcbiAgICAvLyBjb25zdCB0aHJlZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgLy8gdGhyZWVTY3JpcHQuc2V0QXR0cmlidXRlKCdpZCcsICd0aHJlZVNjcmlwdCcpXG4gICAgLy8gdGhyZWVTY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvdGhyZWUuanMvcjEzNC90aHJlZS5taW4uanMnKVxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZCh0aHJlZVNjcmlwdCk7XG5cbiAgICAvLyBJbml0IGxlbmlzIHNjcm9sbFxuICAgIGNvbnN0IGxlbmlzID0gbmV3IExlbmlzKHtcbiAgICAgIGR1cmF0aW9uOiAxLjIsXG4gICAgICBlYXNpbmc6ICh0KSA9PiBNYXRoLm1pbigxLCAxLjAwMSAtIE1hdGgucG93KDIsIC0xMCAqIHQpKSwgLy8gaHR0cHM6Ly93d3cuZGVzbW9zLmNvbS9jYWxjdWxhdG9yL2JyczU0bDR4b3VcbiAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJywgLy8gdmVydGljYWwsIGhvcml6b250YWxcbiAgICAgIGdlc3R1cmVEaXJlY3Rpb246ICd2ZXJ0aWNhbCcsIC8vIHZlcnRpY2FsLCBob3Jpem9udGFsLCBib3RoXG4gICAgICBzbW9vdGg6IHRydWUsXG4gICAgICBtb3VzZU11bHRpcGxpZXI6IDEsXG4gICAgICBzbW9vdGhUb3VjaDogZmFsc2UsXG4gICAgICB0b3VjaE11bHRpcGxpZXI6IDIsXG4gICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgfSlcbiAgICBmdW5jdGlvbiByYWYodGltZSkge1xuICAgICAgbGVuaXMucmFmKHRpbWUpXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKVxuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKVxuXG4gICAgcmV0dXJuICgpID0+IHsgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZyZW56eSB8IDIwMjM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk15IHBhZ2UgdGl0bGVcIiBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7aXNQcmVsb2FkaW5nID8gKFxuICAgICAgICA8UHJlbG9hZGVyIHRpbWVyPXtwcmVsb2FkVGltZX0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vaXNlLWNvbnRhaW5lciBmaXhlZCB6LVsxMDAwMF1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2lzZSBmaXhlZCB6LVsxMDAwMF1cIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIkxlbmlzIiwiSGVhZCIsIlByZWxvYWRlciIsImdzYXAiLCJ1c2VSb3V0ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzUHJlbG9hZGluZyIsInNldElzUHJlbG9hZGluZyIsIngiLCJ5IiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJyb3V0ZXIiLCJwcmVsb2FkVGltZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNldE1vdXNlUG9zIiwiY2xpZW50WCIsImNsaWVudFkiLCJjb25zb2xlIiwibG9nIiwibW91c2VQb3MiLCJmaXJzdFZpc2l0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJwdXNoIiwibGVuaXMiLCJkdXJhdGlvbiIsImVhc2luZyIsInQiLCJtaW4iLCJwb3ciLCJkaXJlY3Rpb24iLCJnZXN0dXJlRGlyZWN0aW9uIiwic21vb3RoIiwibW91c2VNdWx0aXBsaWVyIiwic21vb3RoVG91Y2giLCJ0b3VjaE11bHRpcGxpZXIiLCJpbmZpbml0ZSIsInJhZiIsInRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});