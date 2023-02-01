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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\components\\\\Marquee.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Marquee = function Marquee(props) {\n  _s();\n\n  gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n  var marqueeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  function removeFirstWord(str) {\n    return str.slice(str.indexOf(' ') + 1);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(marqueeRef.current, {\n      scrollTrigger: {\n        id: 1,\n        trigger: \"#__next\",\n        start: \"top top\",\n        end: \"bottom top\",\n        scrub: true\n      },\n      yPercent: 50,\n      paused: true,\n      scale: 3\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"marquee-container \" + (props.rotateIncline == \"left\" ? \"-\" : \"\") + (props.rotate ? \"rotate-\".concat(props.rotate) : \"\"),\n    ref: marqueeRef,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"marquee-wrapper flex flex-nowrap\",\n      style: {\n        backgroundColor: props.backgroundColor\n      },\n      children: (0,C_dev_frenzygr_2023_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(3)).map(function (_, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"flex\",\n          children: props.textContent.map(function (content, contentIndex) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"flex py-2\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n                  className: \"text-colton-xwide uppercase mx-6\",\n                  style: {\n                    color: props.textColor\n                  },\n                  children: content.head\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 37,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n                  className: \"w-[136px] mx-6\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n                    className: \"text-grotesque uppercase\",\n                    style: {\n                      color: props.textColor\n                    },\n                    children: content.sub.split(' ')[0]\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 41,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n                    className: \"text-grotesque uppercase text-right\",\n                    style: {\n                      color: props.textColor\n                    },\n                    children: removeFirstWord(content.sub)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 42,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 17\n              }, _this)]\n            }, contentIndex, true, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 15\n            }, _this);\n          })\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Marquee, \"wvDJETwgPK/gPYskZVzt2YL5O38=\");\n\n_c = Marquee;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Marquee);\n\nvar _c;\n\n$RefreshReg$(_c, \"Marquee\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQUEsU0FEcUI7VUFBQSxDQUF0QjtRQURILEdBQVVILEtBQVY7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURpQjtNQUFBLENBQWxCO0lBRkg7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQTBCRCxDQWpERDs7R0FBTXpCOztLQUFBQTtBQW1ETiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcnF1ZWUuanN4PzQ0ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXAvZGlzdC9nc2FwXCJcclxuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlclwiXHJcblxyXG5jb25zdCBNYXJxdWVlID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcclxuICBjb25zdCBtYXJxdWVlUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgZnVuY3Rpb24gcmVtb3ZlRmlyc3RXb3JkKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5zbGljZShzdHIuaW5kZXhPZignICcpICsgMSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnc2FwLnRvKG1hcnF1ZWVSZWYuY3VycmVudCwge1xyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgdHJpZ2dlcjogXCIjX19uZXh0XCIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxyXG4gICAgICAgIGVuZDogXCJib3R0b20gdG9wXCIsXHJcbiAgICAgICAgc2NydWI6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHlQZXJjZW50OiA1MCxcclxuICAgICAgcGF1c2VkOiB0cnVlLFxyXG4gICAgICBzY2FsZTogMyxcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1hcnF1ZWUtY29udGFpbmVyIFwiICsgKHByb3BzLnJvdGF0ZUluY2xpbmUgPT0gXCJsZWZ0XCIgPyBcIi1cIiA6IFwiXCIpICsgKHByb3BzLnJvdGF0ZSA/IGByb3RhdGUtJHtwcm9wcy5yb3RhdGV9YCA6IFwiXCIpfSByZWY9e21hcnF1ZWVSZWZ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcnF1ZWUtd3JhcHBlciBmbGV4IGZsZXgtbm93cmFwXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmJhY2tncm91bmRDb2xvcn19PlxyXG5cclxuICAgICAgICB7Wy4uLkFycmF5KDMpXS5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAge3Byb3BzLnRleHRDb250ZW50Lm1hcCgoY29udGVudCwgY29udGVudEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvbnRlbnRJbmRleH0gY2xhc3NOYW1lPVwiZmxleCBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY29sdG9uLXh3aWRlIHVwcGVyY2FzZSBteC02XCIgc3R5bGU9e3tjb2xvcjogcHJvcHMudGV4dENvbG9yfX0+e2NvbnRlbnQuaGVhZH08L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTM2cHhdIG14LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyb3Rlc3F1ZSB1cHBlcmNhc2VcIiBzdHlsZT17e2NvbG9yOiBwcm9wcy50ZXh0Q29sb3J9fT57Y29udGVudC5zdWIuc3BsaXQoJyAnKVswXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncm90ZXNxdWUgdXBwZXJjYXNlIHRleHQtcmlnaHRcIiBzdHlsZT17e2NvbG9yOiBwcm9wcy50ZXh0Q29sb3J9fT57cmVtb3ZlRmlyc3RXb3JkKGNvbnRlbnQuc3ViKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcnF1ZWUiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJNYXJxdWVlIiwicHJvcHMiLCJyZWdpc3RlclBsdWdpbiIsIm1hcnF1ZWVSZWYiLCJyZW1vdmVGaXJzdFdvcmQiLCJzdHIiLCJzbGljZSIsImluZGV4T2YiLCJ0byIsImN1cnJlbnQiLCJzY3JvbGxUcmlnZ2VyIiwiaWQiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsInlQZXJjZW50IiwicGF1c2VkIiwic2NhbGUiLCJyb3RhdGVJbmNsaW5lIiwicm90YXRlIiwiYmFja2dyb3VuZENvbG9yIiwiQXJyYXkiLCJtYXAiLCJfIiwiaW5kZXgiLCJ0ZXh0Q29udGVudCIsImNvbnRlbnQiLCJjb250ZW50SW5kZXgiLCJjb2xvciIsInRleHRDb2xvciIsImhlYWQiLCJzdWIiLCJzcGxpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Marquee.jsx\n"));

/***/ })

});