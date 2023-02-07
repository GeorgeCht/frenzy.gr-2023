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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.jsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"X:\\\\DEV\\\\frenzy\\\\frenzy.gr-2023\\\\components\\\\Layout.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  var pathname = router.pathname;\n\n  var onPageEnter = function onPageEnter(node) {\n    // gsap.to(node, {\n    //   autoAlpha: 0,\n    //   duration: 1.025,\n    //   ease: 'power4.inOut'\n    // })\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block\", {\n      y: '100%',\n      delay: 0.275,\n      duration: 1.215,\n      ease: 'power4.inOut',\n      onComplete: function onComplete() {\n        gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].set(\".transition-block\", {\n          y: '-100%'\n        });\n      }\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block .transition-inner-above\", {\n      y: 0,\n      delay: 0.265,\n      duration: 1.275,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block .transition-inner-below\", {\n      y: 0,\n      delay: 0.275,\n      duration: 1.015,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\"#__next > main\", {\n      opacity: 1,\n      duration: .925,\n      ease: 'circ.inOut'\n    });\n  };\n\n  var onPageExit = function onPageExit(node) {// gsap.to(`.transition-block`, {\n    //   y: 0,\n    //   duration: 1.025,\n    //   ease: 'power4.inOut'\n    // })\n  };\n\n  var onPageClick = function onPageClick(e) {\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block\", {\n      y: 0,\n      duration: .825,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block .transition-inner-above\", {\n      y: '-120%',\n      duration: .825,\n      delay: .125,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block .transition-inner-below\", {\n      y: '120%',\n      duration: .625,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\"#__next > main\", {\n      opacity: 0,\n      duration: .925,\n      ease: 'circ.inOut'\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\"#__next > main\", {\n      opacity: 1,\n      duration: .925,\n      ease: 'circ.inOut'\n    });\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      onClick: onPageClick,\n      pathName: router.pathname\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.SwitchTransition, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n        // our route as a key\n        timeout: 575,\n        \"in\": true,\n        onEnter: onPageEnter // our enter animation\n        ,\n        onExit: onPageExit // our exit animation\n        ,\n        mountOnEnter: true,\n        unmountOnExit: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"main\", {\n          className: \"mx-auto opacity-0 z-10\",\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this)\n      }, router.pathname, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksRUFBRSxJQU5oQjtRQU9FLGFBQWEsRUFBRSxJQVBqQjtRQUFBLHVCQVNFO1VBQU0sU0FBUyxFQUFDLHdCQUFoQjtVQUFBLFVBQTBDYjtRQUExQztVQUFBO1VBQUE7VUFBQTtRQUFBO01BVEYsR0FDT0MsTUFBTSxDQUFDQyxRQURkO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBTEY7RUFBQSxnQkFERjtBQXFCRCxDQXBHRDs7R0FBTUg7VUFFV0o7OztLQUZYSTtBQXNHTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qc3g/YzYxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTd2l0Y2hUcmFuc2l0aW9uLCBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHJvdXRlcjtcclxuXHJcbiAgY29uc3Qgb25QYWdlRW50ZXIgPSAobm9kZSkgPT4ge1xyXG4gICAgLy8gZ3NhcC50byhub2RlLCB7XHJcbiAgICAvLyAgIGF1dG9BbHBoYTogMCxcclxuICAgIC8vICAgZHVyYXRpb246IDEuMDI1LFxyXG4gICAgLy8gICBlYXNlOiAncG93ZXI0LmluT3V0J1xyXG4gICAgLy8gfSlcclxuICAgIGdzYXAudG8oYC50cmFuc2l0aW9uLWJsb2NrYCwge1xyXG4gICAgICB5OiAnMTAwJScsXHJcbiAgICAgIGRlbGF5OiAwLjI3NSxcclxuICAgICAgZHVyYXRpb246IDEuMjE1LFxyXG4gICAgICBlYXNlOiAncG93ZXI0LmluT3V0JyxcclxuICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgIGdzYXAuc2V0KGAudHJhbnNpdGlvbi1ibG9ja2AsIHsgeTogJy0xMDAlJyB9KVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIGdzYXAudG8oYC50cmFuc2l0aW9uLWJsb2NrIC50cmFuc2l0aW9uLWlubmVyLWFib3ZlYCwge1xyXG4gICAgICB5OiAwLFxyXG4gICAgICBkZWxheTogMC4yNjUsXHJcbiAgICAgIGR1cmF0aW9uOiAxLjI3NSxcclxuICAgICAgZWFzZTogJ3Bvd2VyNC5pbk91dCdcclxuICAgIH0pXHJcbiAgICBnc2FwLnRvKGAudHJhbnNpdGlvbi1ibG9jayAudHJhbnNpdGlvbi1pbm5lci1iZWxvd2AsIHtcclxuICAgICAgeTogMCxcclxuICAgICAgZGVsYXk6IDAuMjc1LFxyXG4gICAgICBkdXJhdGlvbjogMS4wMTUsXHJcbiAgICAgIGVhc2U6ICdwb3dlcjQuaW5PdXQnXHJcbiAgICB9KVxyXG4gICAgZ3NhcC50byhgI19fbmV4dCA+IG1haW5gLCB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIGR1cmF0aW9uOiAuOTI1LFxyXG4gICAgICBlYXNlOiAnY2lyYy5pbk91dCcsXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUGFnZUV4aXQgPSAobm9kZSkgPT4ge1xyXG4gICAgLy8gZ3NhcC50byhgLnRyYW5zaXRpb24tYmxvY2tgLCB7XHJcbiAgICAvLyAgIHk6IDAsXHJcbiAgICAvLyAgIGR1cmF0aW9uOiAxLjAyNSxcclxuICAgIC8vICAgZWFzZTogJ3Bvd2VyNC5pbk91dCdcclxuICAgIC8vIH0pXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25QYWdlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZ3NhcC50byhgLnRyYW5zaXRpb24tYmxvY2tgLCB7XHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuODI1LFxyXG4gICAgICBlYXNlOiAncG93ZXI0LmluT3V0J1xyXG4gICAgfSlcclxuICAgIGdzYXAudG8oYC50cmFuc2l0aW9uLWJsb2NrIC50cmFuc2l0aW9uLWlubmVyLWFib3ZlYCwge1xyXG4gICAgICB5OiAnLTEyMCUnLFxyXG4gICAgICBkdXJhdGlvbjogLjgyNSxcclxuICAgICAgZGVsYXk6IC4xMjUsXHJcbiAgICAgIGVhc2U6ICdwb3dlcjQuaW5PdXQnXHJcbiAgICB9KVxyXG4gICAgZ3NhcC50byhgLnRyYW5zaXRpb24tYmxvY2sgLnRyYW5zaXRpb24taW5uZXItYmVsb3dgLCB7XHJcbiAgICAgIHk6ICcxMjAlJyxcclxuICAgICAgZHVyYXRpb246IC42MjUsXHJcbiAgICAgIGVhc2U6ICdwb3dlcjQuaW5PdXQnXHJcbiAgICB9KVxyXG4gICAgZ3NhcC50byhgI19fbmV4dCA+IG1haW5gLCB7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuOTI1LFxyXG4gICAgICBlYXNlOiAnY2lyYy5pbk91dCcsXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnc2FwLnRvKGAjX19uZXh0ID4gbWFpbmAsIHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgZHVyYXRpb246IC45MjUsXHJcbiAgICAgIGVhc2U6ICdjaXJjLmluT3V0JyxcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXJcclxuICAgICAgICBvbkNsaWNrPXtvblBhZ2VDbGlja31cclxuICAgICAgICBwYXRoTmFtZT17cm91dGVyLnBhdGhuYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3dpdGNoVHJhbnNpdGlvbj5cclxuICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAga2V5PXtyb3V0ZXIucGF0aG5hbWV9IC8vIG91ciByb3V0ZSBhcyBhIGtleVxyXG4gICAgICAgICAgdGltZW91dD17NTc1fVxyXG4gICAgICAgICAgaW49e3RydWV9XHJcbiAgICAgICAgICBvbkVudGVyPXtvblBhZ2VFbnRlcn0gLy8gb3VyIGVudGVyIGFuaW1hdGlvblxyXG4gICAgICAgICAgb25FeGl0PXtvblBhZ2VFeGl0fSAvLyBvdXIgZXhpdCBhbmltYXRpb25cclxuICAgICAgICAgIG1vdW50T25FbnRlcj17dHJ1ZX1cclxuICAgICAgICAgIHVubW91bnRPbkV4aXQ9e3RydWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibXgtYXV0byBvcGFjaXR5LTAgei0xMFwiPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICA8L1N3aXRjaFRyYW5zaXRpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiU3dpdGNoVHJhbnNpdGlvbiIsIlRyYW5zaXRpb24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJnc2FwIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJwYXRobmFtZSIsIm9uUGFnZUVudGVyIiwibm9kZSIsInRvIiwieSIsImRlbGF5IiwiZHVyYXRpb24iLCJlYXNlIiwib25Db21wbGV0ZSIsInNldCIsIm9wYWNpdHkiLCJvblBhZ2VFeGl0Iiwib25QYWdlQ2xpY2siLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n"));

/***/ })

});