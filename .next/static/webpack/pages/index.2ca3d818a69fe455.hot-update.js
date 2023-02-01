"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Marquee.jsx":
/*!********************************!*\
  !*** ./components/Marquee.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\components\\\\Marquee.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Marquee = function Marquee(props) {\n  _s();\n\n  gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n  var marqueeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  function removeFirstWord(str) {\n    return str.slice(str.indexOf(' ') + 1);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(marqueeRef, {\n      scrollTrigger: {\n        trigger: \"#__next\",\n        start: \"top top\",\n        end: \"bottom top\",\n        scrub: true\n      },\n      yPercent: 50,\n      scale: 3\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"marquee-container \" + (props.rotateIncline == \"left\" ? \"-\" : \"\") + (props.rotate ? \"rotate-\".concat(props.rotate) : \"\"),\n    ref: marqueeRef,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"marquee-wrapper flex flex-nowrap\",\n      style: {\n        backgroundColor: props.backgroundColor\n      },\n      children: (0,C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(3)).map(function (_, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"flex\",\n          children: props.textContent.map(function (content, contentIndex) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"flex py-2\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n                  className: \"text-colton-xwide uppercase mx-6\",\n                  style: {\n                    color: props.textColor\n                  },\n                  children: content.head\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                  className: \"w-[136px] mx-6\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n                    className: \"text-grotesque uppercase\",\n                    style: {\n                      color: props.textColor\n                    },\n                    children: content.sub.split(' ')[0]\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 39,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n                    className: \"text-grotesque uppercase text-right\",\n                    style: {\n                      color: props.textColor\n                    },\n                    children: removeFirstWord(content.sub)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 40,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 38,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 17\n              }, _this)]\n            }, contentIndex, true, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this);\n          })\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Marquee, \"wvDJETwgPK/gPYskZVzt2YL5O38=\");\n\n_c = Marquee;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Marquee);\n\nvar _c;\n\n$RefreshReg$(_c, \"Marquee\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtNQUFBLENBQWxCO0lBRkg7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQTBCRCxDQS9DRDs7R0FBTXRCOztLQUFBQTtBQWlETiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcnF1ZWUuanN4PzQ0ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXAvZGlzdC9nc2FwXCI7XHJcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcclxuXHJcbmNvbnN0IE1hcnF1ZWUgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxyXG4gIGNvbnN0IG1hcnF1ZWVSZWYgPSB1c2VSZWYobnVsbClcclxuICBmdW5jdGlvbiByZW1vdmVGaXJzdFdvcmQoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnNsaWNlKHN0ci5pbmRleE9mKCcgJykgKyAxKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdzYXAudG8obWFycXVlZVJlZiwge1xyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgdHJpZ2dlcjogXCIjX19uZXh0XCIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxyXG4gICAgICAgIGVuZDogXCJib3R0b20gdG9wXCIsXHJcbiAgICAgICAgc2NydWI6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHlQZXJjZW50OiA1MCxcclxuICAgICAgc2NhbGU6IDMsXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYXJxdWVlLWNvbnRhaW5lciBcIiArIChwcm9wcy5yb3RhdGVJbmNsaW5lID09IFwibGVmdFwiID8gXCItXCIgOiBcIlwiKSArIChwcm9wcy5yb3RhdGUgPyBgcm90YXRlLSR7cHJvcHMucm90YXRlfWAgOiBcIlwiKX0gcmVmPXttYXJxdWVlUmVmfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJxdWVlLXdyYXBwZXIgZmxleCBmbGV4LW5vd3JhcFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9fT5cclxuXHJcbiAgICAgICAge1suLi5BcnJheSgzKV0ubWFwKChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy50ZXh0Q29udGVudC5tYXAoKGNvbnRlbnQsIGNvbnRlbnRJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50SW5kZXh9IGNsYXNzTmFtZT1cImZsZXggcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNvbHRvbi14d2lkZSB1cHBlcmNhc2UgbXgtNlwiIHN0eWxlPXt7Y29sb3I6IHByb3BzLnRleHRDb2xvcn19Pntjb250ZW50LmhlYWR9PC9oND5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzEzNnB4XSBteC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncm90ZXNxdWUgdXBwZXJjYXNlXCIgc3R5bGU9e3tjb2xvcjogcHJvcHMudGV4dENvbG9yfX0+e2NvbnRlbnQuc3ViLnNwbGl0KCcgJylbMF19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JvdGVzcXVlIHVwcGVyY2FzZSB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3tjb2xvcjogcHJvcHMudGV4dENvbG9yfX0+e3JlbW92ZUZpcnN0V29yZChjb250ZW50LnN1Yil9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICBcclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXJxdWVlIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiTWFycXVlZSIsInByb3BzIiwicmVnaXN0ZXJQbHVnaW4iLCJtYXJxdWVlUmVmIiwicmVtb3ZlRmlyc3RXb3JkIiwic3RyIiwic2xpY2UiLCJpbmRleE9mIiwidG8iLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJ5UGVyY2VudCIsInNjYWxlIiwicm90YXRlSW5jbGluZSIsInJvdGF0ZSIsImJhY2tncm91bmRDb2xvciIsIkFycmF5IiwibWFwIiwiXyIsImluZGV4IiwidGV4dENvbnRlbnQiLCJjb250ZW50IiwiY29udGVudEluZGV4IiwiY29sb3IiLCJ0ZXh0Q29sb3IiLCJoZWFkIiwic3ViIiwic3BsaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Marquee.jsx\n"));

/***/ })

});