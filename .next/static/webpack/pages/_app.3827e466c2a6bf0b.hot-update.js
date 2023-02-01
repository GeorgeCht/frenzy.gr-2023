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

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./components/Header.jsx\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\components\\\\Layout.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  var onPageEnter = function onPageEnter(node) {\n    gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fromTo(node, {\n      y: 15,\n      autoAlpha: 0,\n      ease: 'power4'\n    }, {\n      y: 0,\n      autoAlpha: 1,\n      duration: 0.915,\n      ease: 'power4'\n    });\n  };\n\n  var onPageExit = function onPageExit(node) {\n    gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fromTo(node, {\n      y: 0,\n      autoAlpha: 1,\n      ease: 'power4.out'\n    }, {\n      y: -15,\n      autoAlpha: 0,\n      duration: 0.675,\n      ease: 'power4.inOut'\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__.SwitchTransition, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n        // our route as a key\n        timeout: 575,\n        \"in\": true,\n        onEnter: onPageEnter // our enter animation\n        ,\n        onExit: onPageExit // our exit animation\n        ,\n        mountOnEnter: true,\n        unmountOnExit: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"main\", {\n          className: \"mx-auto\",\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this)\n      }, router.pathname, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Layout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQSxJQUFNSyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFrQjtFQUFBOztFQUFBLElBQWZDLFFBQWUsUUFBZkEsUUFBZTtFQUMvQixJQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQXhCOztFQUVBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtJQUM1Qk4sbURBQUEsQ0FDRU0sSUFERixFQUVFO01BQ0VFLENBQUMsRUFBRSxFQURMO01BRUVDLFNBQVMsRUFBRSxDQUZiO01BR0VDLElBQUksRUFBRTtJQUhSLENBRkYsRUFPRTtNQUNFRixDQUFDLEVBQUUsQ0FETDtNQUVFQyxTQUFTLEVBQUUsQ0FGYjtNQUdFRSxRQUFRLEVBQUUsS0FIWjtNQUlFRCxJQUFJLEVBQUU7SUFKUixDQVBGO0VBZUQsQ0FoQkQ7O0VBa0JBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNOLElBQUQsRUFBVTtJQUMzQk4sbURBQUEsQ0FDRU0sSUFERixFQUVFO01BQ0VFLENBQUMsRUFBRSxDQURMO01BRUVDLFNBQVMsRUFBRSxDQUZiO01BR0VDLElBQUksRUFBRTtJQUhSLENBRkYsRUFPRTtNQUNFRixDQUFDLEVBQUUsQ0FBQyxFQUROO01BRUVDLFNBQVMsRUFBRSxDQUZiO01BR0VFLFFBQVEsRUFBRSxLQUhaO01BSUVELElBQUksRUFBRTtJQUpSLENBUEY7RUFjRCxDQWZEOztFQWlCQSxvQkFDRTtJQUFBLHdCQUNFLDhEQUFDLCtDQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixlQUVFLDhEQUFDLG9FQUFEO01BQUEsdUJBQ0UsOERBQUMsOERBQUQ7UUFDd0I7UUFDdEIsT0FBTyxFQUFFLEdBRlg7UUFHRSxNQUFJLElBSE47UUFJRSxPQUFPLEVBQUVMLFdBSlgsQ0FJd0I7UUFKeEI7UUFLRSxNQUFNLEVBQUVPLFVBTFYsQ0FLc0I7UUFMdEI7UUFNRSxZQUFZLEVBQUUsSUFOaEI7UUFPRSxhQUFhLEVBQUUsSUFQakI7UUFBQSx1QkFTRTtVQUFNLFNBQVMsRUFBQyxTQUFoQjtVQUFBLFVBQTJCVDtRQUEzQjtVQUFBO1VBQUE7VUFBQTtRQUFBO01BVEYsR0FDT0MsTUFBTSxDQUFDUyxRQURkO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBRkY7RUFBQSxnQkFERjtBQWtCRCxDQXhERDs7R0FBTVg7VUFDV0Q7OztLQURYQztBQTBETiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qc3g/YzYxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IHsgU3dpdGNoVHJhbnNpdGlvbiwgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgb25QYWdlRW50ZXIgPSAobm9kZSkgPT4ge1xyXG4gICAgZ3NhcC5mcm9tVG8oXHJcbiAgICAgIG5vZGUsXHJcbiAgICAgIHtcclxuICAgICAgICB5OiAxNSxcclxuICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgZWFzZTogJ3Bvd2VyNCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIGF1dG9BbHBoYTogMSxcclxuICAgICAgICBkdXJhdGlvbjogMC45MTUsXHJcbiAgICAgICAgZWFzZTogJ3Bvd2VyNCcsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBcclxuICB9O1xyXG5cclxuICBjb25zdCBvblBhZ2VFeGl0ID0gKG5vZGUpID0+IHtcclxuICAgIGdzYXAuZnJvbVRvKFxyXG4gICAgICBub2RlLFxyXG4gICAgICB7XHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICBhdXRvQWxwaGE6IDEsXHJcbiAgICAgICAgZWFzZTogJ3Bvd2VyNC5vdXQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeTogLTE1LFxyXG4gICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICBkdXJhdGlvbjogMC42NzUsXHJcbiAgICAgICAgZWFzZTogJ3Bvd2VyNC5pbk91dCcsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPFN3aXRjaFRyYW5zaXRpb24+XHJcbiAgICAgICAgPFRyYW5zaXRpb25cclxuICAgICAgICAgIGtleT17cm91dGVyLnBhdGhuYW1lfSAvLyBvdXIgcm91dGUgYXMgYSBrZXlcclxuICAgICAgICAgIHRpbWVvdXQ9ezU3NX1cclxuICAgICAgICAgIGluPXt0cnVlfVxyXG4gICAgICAgICAgb25FbnRlcj17b25QYWdlRW50ZXJ9IC8vIG91ciBlbnRlciBhbmltYXRpb25cclxuICAgICAgICAgIG9uRXhpdD17b25QYWdlRXhpdH0gLy8gb3VyIGV4aXQgYW5pbWF0aW9uXHJcbiAgICAgICAgICBtb3VudE9uRW50ZXI9e3RydWV9XHJcbiAgICAgICAgICB1bm1vdW50T25FeGl0PXt0cnVlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm14LWF1dG9cIj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICAgPC9Td2l0Y2hUcmFuc2l0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIlN3aXRjaFRyYW5zaXRpb24iLCJUcmFuc2l0aW9uIiwiZ3NhcCIsInVzZVJvdXRlciIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwib25QYWdlRW50ZXIiLCJub2RlIiwiZnJvbVRvIiwieSIsImF1dG9BbHBoYSIsImVhc2UiLCJkdXJhdGlvbiIsIm9uUGFnZUV4aXQiLCJwYXRobmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n"));

/***/ })

});