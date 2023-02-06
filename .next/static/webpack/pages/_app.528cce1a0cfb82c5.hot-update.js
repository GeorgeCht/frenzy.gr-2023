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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/fonts.css */ \"./styles/fonts.css\");\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Preloader */ \"./components/Preloader.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\pages\\\\_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction app(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  // Preloader state\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isPreloading = _useState[0],\n      setIsPreloading = _useState[1]; // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })\n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  var preloadTime = Math.floor(Math.random() * 2500) + 1000;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setTimeout(function () {\n      setIsPreloading(false);\n    }, preloadTime); // document.body.addEventListener(`mousemove`, mouseMoveHandler)\n    // show mousePosition.x \n    // First time visitors redirected to /intro page\n\n    var firstVisit = localStorage.getItem(\"firstVisit\") || \"true\";\n\n    if (firstVisit === \"true\") {\n      localStorage.setItem(\"firstVisit\", \"false\");\n      router.push(\"/page1\");\n    } // Init lenis scroll\n\n\n    var lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n      duration: 1.2,\n      easing: function easing(t) {\n        return Math.min(1, 1.001 - Math.pow(2, -10 * t));\n      },\n      // https://www.desmos.com/calculator/brs54l4xou\n      direction: 'vertical',\n      // vertical, horizontal\n      gestureDirection: 'vertical',\n      // vertical, horizontal, both\n      smooth: true,\n      mouseMultiplier: 1,\n      smoothTouch: false,\n      touchMultiplier: 2,\n      infinite: false\n    });\n\n    function raf(time) {\n      lenis.raf(time);\n      requestAnimationFrame(raf);\n    }\n\n    requestAnimationFrame(raf);\n    return function () {// document.body.removeEventListener(`mousemove`, mouseMoveHandler)\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Frenzy | 2023\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"My page title\"\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), isPreloading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Preloader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      timer: preloadTime\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"app-wrapper\",\n        onMouseMove: function onMouseMove(e) {\n          return mouseMoveHandler(e);\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"noise-container fixed z-[10000]\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"noise fixed z-[10000]\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(app, \"BuWWUE23cWPCzBICnIoeJr1UzME=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU1UsR0FBVCxPQUF1QztFQUFBOztFQUFBLElBQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7RUFBQSxJQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0VBRXJDO0VBQ0EsZ0JBQXdDVCwrQ0FBUSxDQUFDLElBQUQsQ0FBaEQ7RUFBQSxJQUFPVSxZQUFQO0VBQUEsSUFBcUJDLGVBQXJCLGdCQUhxQyxDQUlyQzs7O0VBQ0EsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUF4QjtFQUNBLElBQU1PLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixJQUEzQixJQUFtQyxJQUF2RDtFQUVBbkIsZ0RBQVMsQ0FBQyxZQUFNO0lBRWRvQixVQUFVLENBQUMsWUFBTTtNQUNmTixlQUFlLENBQUMsS0FBRCxDQUFmO0lBQ0QsQ0FGUyxFQUVQRSxXQUZPLENBQVYsQ0FGYyxDQVFkO0lBQ0E7SUFHQTs7SUFDQSxJQUFNSyxVQUFVLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixLQUFzQyxNQUF6RDs7SUFDQSxJQUFJRixVQUFVLEtBQUssTUFBbkIsRUFBMkI7TUFDekJDLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixZQUFyQixFQUFtQyxPQUFuQztNQUNBVCxNQUFNLENBQUNVLElBQVA7SUFDRCxDQWpCYSxDQW1CZDs7O0lBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlyQiw2REFBSixDQUFVO01BQ3RCc0IsUUFBUSxFQUFFLEdBRFk7TUFFdEJDLE1BQU0sRUFBRSxnQkFBQ0MsQ0FBRDtRQUFBLE9BQU9aLElBQUksQ0FBQ2EsR0FBTCxDQUFTLENBQVQsRUFBWSxRQUFRYixJQUFJLENBQUNjLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELEdBQU1GLENBQWxCLENBQXBCLENBQVA7TUFBQSxDQUZjO01BRW9DO01BQzFERyxTQUFTLEVBQUUsVUFIVztNQUdDO01BQ3ZCQyxnQkFBZ0IsRUFBRSxVQUpJO01BSVE7TUFDOUJDLE1BQU0sRUFBRSxJQUxjO01BTXRCQyxlQUFlLEVBQUUsQ0FOSztNQU90QkMsV0FBVyxFQUFFLEtBUFM7TUFRdEJDLGVBQWUsRUFBRSxDQVJLO01BU3RCQyxRQUFRLEVBQUU7SUFUWSxDQUFWLENBQWQ7O0lBV0EsU0FBU0MsR0FBVCxDQUFhQyxJQUFiLEVBQW1CO01BQ2pCZCxLQUFLLENBQUNhLEdBQU4sQ0FBVUMsSUFBVjtNQUNBQyxxQkFBcUIsQ0FBQ0YsR0FBRCxDQUFyQjtJQUNEOztJQUNERSxxQkFBcUIsQ0FBQ0YsR0FBRCxDQUFyQjtJQUVBLE9BQU8sWUFBTSxDQUNYO0lBQ0QsQ0FGRDtFQUdELENBeENRLEVBd0NOLEVBeENNLENBQVQ7RUEwQ0Esb0JBQ0U7SUFBQSx3QkFDRSw4REFBQyxrREFBRDtNQUFBLHdCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFFRTtRQUFNLFFBQVEsRUFBQyxVQUFmO1FBQTBCLE9BQU8sRUFBQztNQUFsQyxHQUFzRCxPQUF0RDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsRUFLRzFCLFlBQVksZ0JBQ1gsOERBQUMsNkRBQUQ7TUFBVyxLQUFLLEVBQUVHO0lBQWxCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFEVyxnQkFHWCw4REFBQywwREFBRDtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFDLGFBQWY7UUFBNkIsV0FBVyxFQUFHLHFCQUFDMEIsQ0FBRDtVQUFBLE9BQU9DLGdCQUFnQixDQUFDRCxDQUFELENBQXZCO1FBQUEsQ0FBM0M7UUFBQSx1QkFDRSw4REFBQyxTQUFELG9CQUFlOUIsU0FBZjtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFSSixlQWNFO01BQUssU0FBUyxFQUFDLGlDQUFmO01BQUEsdUJBQ0U7UUFBSyxTQUFTLEVBQUM7TUFBZjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQWRGO0VBQUEsZ0JBREY7QUFvQkQ7O0dBdEVRRjtVQUtRRDs7O0FBbUVqQiwrREFBZUMsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTGVuaXMgZnJvbSAnQHN0dWRpby1mcmVpZ2h0L2xlbmlzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9mb250cy5jc3MnXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5mdW5jdGlvbiBhcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgLy8gUHJlbG9hZGVyIHN0YXRlXG4gIGNvbnN0IFtpc1ByZWxvYWRpbmcsIHNldElzUHJlbG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAvLyBjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcHJlbG9hZFRpbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTAwKSArIDEwMDBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1ByZWxvYWRpbmcoZmFsc2UpXG4gICAgfSwgcHJlbG9hZFRpbWUpXG5cbiAgICBcblxuICAgIC8vIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihgbW91c2Vtb3ZlYCwgbW91c2VNb3ZlSGFuZGxlcilcbiAgICAvLyBzaG93IG1vdXNlUG9zaXRpb24ueCBcbiAgICBcbiAgICBcbiAgICAvLyBGaXJzdCB0aW1lIHZpc2l0b3JzIHJlZGlyZWN0ZWQgdG8gL2ludHJvIHBhZ2VcbiAgICBjb25zdCBmaXJzdFZpc2l0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdFZpc2l0XCIpIHx8IFwidHJ1ZVwiXG4gICAgaWYgKGZpcnN0VmlzaXQgPT09IFwidHJ1ZVwiKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZpcnN0VmlzaXRcIiwgXCJmYWxzZVwiKVxuICAgICAgcm91dGVyLnB1c2goYC9wYWdlMWApXG4gICAgfVxuXG4gICAgLy8gSW5pdCBsZW5pcyBzY3JvbGxcbiAgICBjb25zdCBsZW5pcyA9IG5ldyBMZW5pcyh7XG4gICAgICBkdXJhdGlvbjogMS4yLFxuICAgICAgZWFzaW5nOiAodCkgPT4gTWF0aC5taW4oMSwgMS4wMDEgLSBNYXRoLnBvdygyLCAtMTAgKiB0KSksIC8vIGh0dHBzOi8vd3d3LmRlc21vcy5jb20vY2FsY3VsYXRvci9icnM1NGw0eG91XG4gICAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsIC8vIHZlcnRpY2FsLCBob3Jpem9udGFsXG4gICAgICBnZXN0dXJlRGlyZWN0aW9uOiAndmVydGljYWwnLCAvLyB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCwgYm90aFxuICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgbW91c2VNdWx0aXBsaWVyOiAxLFxuICAgICAgc21vb3RoVG91Y2g6IGZhbHNlLFxuICAgICAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIH0pXG4gICAgZnVuY3Rpb24gcmFmKHRpbWUpIHtcbiAgICAgIGxlbmlzLnJhZih0aW1lKVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZilcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZilcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoYG1vdXNlbW92ZWAsIG1vdXNlTW92ZUhhbmRsZXIpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZyZW56eSB8IDIwMjM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk15IHBhZ2UgdGl0bGVcIiBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7aXNQcmVsb2FkaW5nID8gKFxuICAgICAgICA8UHJlbG9hZGVyIHRpbWVyPXtwcmVsb2FkVGltZX0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtd3JhcHBlclwiIG9uTW91c2VNb3ZlPXsgKGUpID0+IG1vdXNlTW92ZUhhbmRsZXIoZSkgfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2lzZS1jb250YWluZXIgZml4ZWQgei1bMTAwMDBdXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9pc2UgZml4ZWQgei1bMTAwMDBdXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGF5b3V0IiwiTGVuaXMiLCJIZWFkIiwiUHJlbG9hZGVyIiwiZ3NhcCIsInVzZVJvdXRlciIsImFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzUHJlbG9hZGluZyIsInNldElzUHJlbG9hZGluZyIsInJvdXRlciIsInByZWxvYWRUaW1lIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCIsImZpcnN0VmlzaXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInB1c2giLCJsZW5pcyIsImR1cmF0aW9uIiwiZWFzaW5nIiwidCIsIm1pbiIsInBvdyIsImRpcmVjdGlvbiIsImdlc3R1cmVEaXJlY3Rpb24iLCJzbW9vdGgiLCJtb3VzZU11bHRpcGxpZXIiLCJzbW9vdGhUb3VjaCIsInRvdWNoTXVsdGlwbGllciIsImluZmluaXRlIiwicmFmIiwidGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImUiLCJtb3VzZU1vdmVIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});