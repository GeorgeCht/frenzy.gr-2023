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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.jsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"X:\\\\DEV\\\\frenzy\\\\frenzy.gr-2023\\\\components\\\\Layout.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  var pathname = router.pathname;\n\n  var onPageEnter = function onPageEnter(node) {\n    // gsap.to(node, {\n    //   autoAlpha: 0,\n    //   duration: 1.025,\n    //   ease: 'power4.inOut'\n    // })\n    console.log(\"onPageEnter node:\", node);\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block\", {\n      y: '100%',\n      delay: 0.275,\n      duration: 1.215,\n      ease: 'power4.inOut',\n      onComplete: function onComplete() {\n        gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].set(\".transition-block\", {\n          y: '-100%'\n        });\n      }\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block .transition-inner-above\", {\n      y: 0,\n      delay: 0.265,\n      duration: 1.275,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block .transition-inner-below\", {\n      y: 0,\n      delay: 0.275,\n      duration: 1.015,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\"#__next > main\", {\n      opacity: 1,\n      duration: .925,\n      ease: 'circ.inOut'\n    });\n  };\n\n  var onPageExit = function onPageExit(node) {// gsap.to(`.transition-block`, {\n    //   y: 0,\n    //   duration: 1.025,\n    //   ease: 'power4.inOut'\n    // })\n  };\n\n  var onPageClick = function onPageClick(e) {\n    console.log(\"onPageClick e: \", e);\n    console.log(\"onPageClick pathname: \", pathname);\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block\", {\n      y: 0,\n      duration: .825,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block .transition-inner-above\", {\n      y: '-120%',\n      duration: .825,\n      delay: .125,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\".transition-block .transition-inner-below\", {\n      y: '120%',\n      duration: .625,\n      ease: 'power4.inOut'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\"#__next > main\", {\n      opacity: 0,\n      duration: .925,\n      ease: 'circ.inOut'\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(\"#__next > main\", {\n      opacity: 1,\n      duration: .925,\n      ease: 'circ.inOut'\n    });\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      onClick: onPageClick,\n      pathName: router.pathname\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.SwitchTransition, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n        // our route as a key\n        timeout: 575,\n        \"in\": true,\n        onEnter: onPageEnter // our enter animation\n        ,\n        onExit: onPageExit // our exit animation\n        ,\n        mountOnEnter: true,\n        unmountOnExit: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"main\", {\n          className: \"mx-auto opacity-0 z-10\",\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this)\n      }, router.pathname, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3dCO1FBQ3RCLE9BQU8sRUFBRSxHQUZYO1FBR0UsTUFBSSxJQUhOO1FBSUUsT0FBTyxFQUFFQyxXQUpYLENBSXdCO1FBSnhCO1FBS0UsTUFBTSxFQUFFWSxVQUxWLENBS3NCO1FBTHRCO1FBTUUsWUFBWSxFQUFFLElBTmhCO1FBT0UsYUFBYSxFQUFFLElBUGpCO1FBQUEsdUJBU0U7VUFBTSxTQUFTLEVBQUMsd0JBQWhCO1VBQUEsVUFBMENmO1FBQTFDO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFURixHQUNPQyxNQUFNLENBQUNDLFFBRGQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FMRjtFQUFBLGdCQURGO0FBcUJELENBdkdEOztHQUFNSDtVQUVXSjs7O0tBRlhJO0FBeUdOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzeD9jNjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN3aXRjaFRyYW5zaXRpb24sIFRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXHJcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gcm91dGVyXHJcblxyXG4gIGNvbnN0IG9uUGFnZUVudGVyID0gKG5vZGUpID0+IHtcclxuICAgIC8vIGdzYXAudG8obm9kZSwge1xyXG4gICAgLy8gICBhdXRvQWxwaGE6IDAsXHJcbiAgICAvLyAgIGR1cmF0aW9uOiAxLjAyNSxcclxuICAgIC8vICAgZWFzZTogJ3Bvd2VyNC5pbk91dCdcclxuICAgIC8vIH0pXHJcbiAgICBjb25zb2xlLmxvZyhgb25QYWdlRW50ZXIgbm9kZTpgLCBub2RlKVxyXG4gICAgZ3NhcC50byhgLnRyYW5zaXRpb24tYmxvY2tgLCB7XHJcbiAgICAgIHk6ICcxMDAlJyxcclxuICAgICAgZGVsYXk6IDAuMjc1LFxyXG4gICAgICBkdXJhdGlvbjogMS4yMTUsXHJcbiAgICAgIGVhc2U6ICdwb3dlcjQuaW5PdXQnLFxyXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC5zZXQoYC50cmFuc2l0aW9uLWJsb2NrYCwgeyB5OiAnLTEwMCUnIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgZ3NhcC50byhgLnRyYW5zaXRpb24tYmxvY2sgLnRyYW5zaXRpb24taW5uZXItYWJvdmVgLCB7XHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIGRlbGF5OiAwLjI2NSxcclxuICAgICAgZHVyYXRpb246IDEuMjc1LFxyXG4gICAgICBlYXNlOiAncG93ZXI0LmluT3V0J1xyXG4gICAgfSlcclxuICAgIGdzYXAudG8oYC50cmFuc2l0aW9uLWJsb2NrIC50cmFuc2l0aW9uLWlubmVyLWJlbG93YCwge1xyXG4gICAgICB5OiAwLFxyXG4gICAgICBkZWxheTogMC4yNzUsXHJcbiAgICAgIGR1cmF0aW9uOiAxLjAxNSxcclxuICAgICAgZWFzZTogJ3Bvd2VyNC5pbk91dCdcclxuICAgIH0pXHJcbiAgICBnc2FwLnRvKGAjX19uZXh0ID4gbWFpbmAsIHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgZHVyYXRpb246IC45MjUsXHJcbiAgICAgIGVhc2U6ICdjaXJjLmluT3V0JyxcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25QYWdlRXhpdCA9IChub2RlKSA9PiB7XHJcbiAgICAvLyBnc2FwLnRvKGAudHJhbnNpdGlvbi1ibG9ja2AsIHtcclxuICAgIC8vICAgeTogMCxcclxuICAgIC8vICAgZHVyYXRpb246IDEuMDI1LFxyXG4gICAgLy8gICBlYXNlOiAncG93ZXI0LmluT3V0J1xyXG4gICAgLy8gfSlcclxuICB9O1xyXG5cclxuICBjb25zdCBvblBhZ2VDbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgb25QYWdlQ2xpY2sgZTogYCxlKVxyXG4gICAgY29uc29sZS5sb2coYG9uUGFnZUNsaWNrIHBhdGhuYW1lOiBgLHBhdGhuYW1lKVxyXG4gICAgZ3NhcC50byhgLnRyYW5zaXRpb24tYmxvY2tgLCB7XHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuODI1LFxyXG4gICAgICBlYXNlOiAncG93ZXI0LmluT3V0J1xyXG4gICAgfSlcclxuICAgIGdzYXAudG8oYC50cmFuc2l0aW9uLWJsb2NrIC50cmFuc2l0aW9uLWlubmVyLWFib3ZlYCwge1xyXG4gICAgICB5OiAnLTEyMCUnLFxyXG4gICAgICBkdXJhdGlvbjogLjgyNSxcclxuICAgICAgZGVsYXk6IC4xMjUsXHJcbiAgICAgIGVhc2U6ICdwb3dlcjQuaW5PdXQnXHJcbiAgICB9KVxyXG4gICAgZ3NhcC50byhgLnRyYW5zaXRpb24tYmxvY2sgLnRyYW5zaXRpb24taW5uZXItYmVsb3dgLCB7XHJcbiAgICAgIHk6ICcxMjAlJyxcclxuICAgICAgZHVyYXRpb246IC42MjUsXHJcbiAgICAgIGVhc2U6ICdwb3dlcjQuaW5PdXQnXHJcbiAgICB9KVxyXG4gICAgZ3NhcC50byhgI19fbmV4dCA+IG1haW5gLCB7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAuOTI1LFxyXG4gICAgICBlYXNlOiAnY2lyYy5pbk91dCcsXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnc2FwLnRvKGAjX19uZXh0ID4gbWFpbmAsIHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgZHVyYXRpb246IC45MjUsXHJcbiAgICAgIGVhc2U6ICdjaXJjLmluT3V0JyxcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXJcclxuICAgICAgICBvbkNsaWNrPXtvblBhZ2VDbGlja31cclxuICAgICAgICBwYXRoTmFtZT17cm91dGVyLnBhdGhuYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3dpdGNoVHJhbnNpdGlvbj5cclxuICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAga2V5PXtyb3V0ZXIucGF0aG5hbWV9IC8vIG91ciByb3V0ZSBhcyBhIGtleVxyXG4gICAgICAgICAgdGltZW91dD17NTc1fVxyXG4gICAgICAgICAgaW49e3RydWV9XHJcbiAgICAgICAgICBvbkVudGVyPXtvblBhZ2VFbnRlcn0gLy8gb3VyIGVudGVyIGFuaW1hdGlvblxyXG4gICAgICAgICAgb25FeGl0PXtvblBhZ2VFeGl0fSAvLyBvdXIgZXhpdCBhbmltYXRpb25cclxuICAgICAgICAgIG1vdW50T25FbnRlcj17dHJ1ZX1cclxuICAgICAgICAgIHVubW91bnRPbkV4aXQ9e3RydWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibXgtYXV0byBvcGFjaXR5LTAgei0xMFwiPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICA8L1N3aXRjaFRyYW5zaXRpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiU3dpdGNoVHJhbnNpdGlvbiIsIlRyYW5zaXRpb24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJnc2FwIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJwYXRobmFtZSIsIm9uUGFnZUVudGVyIiwibm9kZSIsImNvbnNvbGUiLCJsb2ciLCJ0byIsInkiLCJkZWxheSIsImR1cmF0aW9uIiwiZWFzZSIsIm9uQ29tcGxldGUiLCJzZXQiLCJvcGFjaXR5Iiwib25QYWdlRXhpdCIsIm9uUGFnZUNsaWNrIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n"));

/***/ })

});