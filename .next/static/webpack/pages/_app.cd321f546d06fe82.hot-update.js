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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./components/Header.jsx\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\components\\\\Layout.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  var onPageEnter = function onPageEnter(node) {\n    // gsap.to(node, {\n    //   autoAlpha: 0,\n    //   duration: 1.025,\n    //   ease: 'power4.inOut'\n    // })\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block\", {\n      y: '100%',\n      delay: 0.275,\n      duration: 1.215,\n      ease: 'power4.inOut',\n      onComplete: function onComplete() {\n        gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].set(\".transition-block\", {\n          y: '-100%'\n        });\n      }\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block .transition-inner-above\", {\n      y: 0,\n      delay: 0.265,\n      duration: 1.275,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block .transition-inner-below\", {\n      y: 0,\n      delay: 0.275,\n      duration: 1.015,\n      ease: 'power4.inOut'\n    });\n  };\n\n  var onPageExit = function onPageExit(node) {// gsap.to(`.transition-block`, {\n    //   y: 0,\n    //   duration: 1.025,\n    //   ease: 'power4.inOut'\n    // })\n  };\n\n  var onPageClick = function onPageClick(e) {\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block\", {\n      y: 0,\n      duration: .825,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block .transition-inner-above\", {\n      y: '-120%',\n      duration: .825,\n      delay: .125,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block .transition-inner-below\", {\n      y: '120%',\n      duration: .625,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\"#__next > main\", {\n      opacity: 0,\n      y: \"-1rem\",\n      duration: .925,\n      ease: 'circ.inOut'\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\"#__next > main\", {\n      opacity: 1,\n      y: 0,\n      duration: .925,\n      ease: 'circ.inOut'\n    });\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      onClick: onPageClick,\n      pathName: router.pathname\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.SwitchTransition, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n        // our route as a key\n        timeout: 575,\n        \"in\": true,\n        onEnter: onPageEnter // our enter animation\n        ,\n        onExit: onPageExit // our exit animation\n        ,\n        mountOnEnter: true,\n        unmountOnExit: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"main\", {\n          className: \"mx-auto opacity-0 -translate-y-4 z-10\",\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this)\n      }, router.pathname, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBQTtVQUFBO1VBQUE7UUFBQTtNQVRGLEdBQ09DLE1BQU0sQ0FBQ2MsUUFEZDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUxGO0VBQUEsZ0JBREY7QUFxQkQsQ0EvRkQ7O0dBQU1oQjtVQUNXRjs7O0tBRFhFO0FBaUdOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzeD9jNjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgeyBTd2l0Y2hUcmFuc2l0aW9uLCBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG9uUGFnZUVudGVyID0gKG5vZGUpID0+IHtcclxuICAgIC8vIGdzYXAudG8obm9kZSwge1xyXG4gICAgLy8gICBhdXRvQWxwaGE6IDAsXHJcbiAgICAvLyAgIGR1cmF0aW9uOiAxLjAyNSxcclxuICAgIC8vICAgZWFzZTogJ3Bvd2VyNC5pbk91dCdcclxuICAgIC8vIH0pXHJcbiAgICBnc2FwLnRvKGAudHJhbnNpdGlvbi1ibG9ja2AsIHtcclxuICAgICAgeTogJzEwMCUnLFxyXG4gICAgICBkZWxheTogMC4yNzUsXHJcbiAgICAgIGR1cmF0aW9uOiAxLjIxNSxcclxuICAgICAgZWFzZTogJ3Bvd2VyNC5pbk91dCcsXHJcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICBnc2FwLnNldChgLnRyYW5zaXRpb24tYmxvY2tgLCB7IHk6ICctMTAwJScgfSlcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBnc2FwLnRvKGAudHJhbnNpdGlvbi1ibG9jayAudHJhbnNpdGlvbi1pbm5lci1hYm92ZWAsIHtcclxuICAgICAgeTogMCxcclxuICAgICAgZGVsYXk6IDAuMjY1LFxyXG4gICAgICBkdXJhdGlvbjogMS4yNzUsXHJcbiAgICAgIGVhc2U6ICdwb3dlcjQuaW5PdXQnXHJcbiAgICB9KVxyXG4gICAgZ3NhcC50byhgLnRyYW5zaXRpb24tYmxvY2sgLnRyYW5zaXRpb24taW5uZXItYmVsb3dgLCB7XHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIGRlbGF5OiAwLjI3NSxcclxuICAgICAgZHVyYXRpb246IDEuMDE1LFxyXG4gICAgICBlYXNlOiAncG93ZXI0LmluT3V0J1xyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBjb25zdCBvblBhZ2VFeGl0ID0gKG5vZGUpID0+IHtcclxuICAgIC8vIGdzYXAudG8oYC50cmFuc2l0aW9uLWJsb2NrYCwge1xyXG4gICAgLy8gICB5OiAwLFxyXG4gICAgLy8gICBkdXJhdGlvbjogMS4wMjUsXHJcbiAgICAvLyAgIGVhc2U6ICdwb3dlcjQuaW5PdXQnXHJcbiAgICAvLyB9KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUGFnZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGdzYXAudG8oYC50cmFuc2l0aW9uLWJsb2NrYCwge1xyXG4gICAgICB5OiAwLFxyXG4gICAgICBkdXJhdGlvbjogLjgyNSxcclxuICAgICAgZWFzZTogJ3Bvd2VyNC5pbk91dCdcclxuICAgIH0pXHJcbiAgICBnc2FwLnRvKGAudHJhbnNpdGlvbi1ibG9jayAudHJhbnNpdGlvbi1pbm5lci1hYm92ZWAsIHtcclxuICAgICAgeTogJy0xMjAlJyxcclxuICAgICAgZHVyYXRpb246IC44MjUsXHJcbiAgICAgIGRlbGF5OiAuMTI1LFxyXG4gICAgICBlYXNlOiAncG93ZXI0LmluT3V0J1xyXG4gICAgfSlcclxuICAgIGdzYXAudG8oYC50cmFuc2l0aW9uLWJsb2NrIC50cmFuc2l0aW9uLWlubmVyLWJlbG93YCwge1xyXG4gICAgICB5OiAnMTIwJScsXHJcbiAgICAgIGR1cmF0aW9uOiAuNjI1LFxyXG4gICAgICBlYXNlOiAncG93ZXI0LmluT3V0J1xyXG4gICAgfSlcclxuICAgIGdzYXAudG8oYCNfX25leHQgPiBtYWluYCwge1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB5OiBgLTFyZW1gLFxyXG4gICAgICBkdXJhdGlvbjogLjkyNSxcclxuICAgICAgZWFzZTogJ2NpcmMuaW5PdXQnLFxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ3NhcC50byhgI19fbmV4dCA+IG1haW5gLCB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuOTI1LFxyXG4gICAgICBlYXNlOiAnY2lyYy5pbk91dCcsXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgb25DbGljaz17b25QYWdlQ2xpY2t9XHJcbiAgICAgICAgcGF0aE5hbWU9e3JvdXRlci5wYXRobmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPFN3aXRjaFRyYW5zaXRpb24+XHJcbiAgICAgICAgPFRyYW5zaXRpb25cclxuICAgICAgICAgIGtleT17cm91dGVyLnBhdGhuYW1lfSAvLyBvdXIgcm91dGUgYXMgYSBrZXlcclxuICAgICAgICAgIHRpbWVvdXQ9ezU3NX1cclxuICAgICAgICAgIGluPXt0cnVlfVxyXG4gICAgICAgICAgb25FbnRlcj17b25QYWdlRW50ZXJ9IC8vIG91ciBlbnRlciBhbmltYXRpb25cclxuICAgICAgICAgIG9uRXhpdD17b25QYWdlRXhpdH0gLy8gb3VyIGV4aXQgYW5pbWF0aW9uXHJcbiAgICAgICAgICBtb3VudE9uRW50ZXI9e3RydWV9XHJcbiAgICAgICAgICB1bm1vdW50T25FeGl0PXt0cnVlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm14LWF1dG8gb3BhY2l0eS0wIC10cmFuc2xhdGUteS00IHotMTBcIj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICAgPC9Td2l0Y2hUcmFuc2l0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIlN3aXRjaFRyYW5zaXRpb24iLCJUcmFuc2l0aW9uIiwiZ3NhcCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwib25QYWdlRW50ZXIiLCJub2RlIiwidG8iLCJ5IiwiZGVsYXkiLCJkdXJhdGlvbiIsImVhc2UiLCJvbkNvbXBsZXRlIiwic2V0Iiwib25QYWdlRXhpdCIsIm9uUGFnZUNsaWNrIiwiZSIsIm9wYWNpdHkiLCJwYXRobmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n"));

/***/ })

});