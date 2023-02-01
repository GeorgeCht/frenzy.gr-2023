"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/page2",{

/***/ "./components/VantaClouds.jsx":
/*!************************************!*\
  !*** ./components/VantaClouds.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vanta_dist_vanta_clouds_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanta/dist/vanta.clouds.min */ \"./node_modules/vanta/dist/vanta.clouds.min.js\");\n/* harmony import */ var vanta_dist_vanta_clouds_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_clouds_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\components\\\\VantaClouds.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar VantaClouds = function VantaClouds() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      vantaEffect = _useState[0],\n      setVantaEffect = _useState[1];\n\n  var vantaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var innerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {\n    var sections = gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.utils.toArray(\".vantaClouds-container .inner-gallery\");\n    var scrollTween = gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(sections, {\n      xPercent: -100 * 2,\n      ease: \"none\",\n      // <-- IMPORTANT!\n      scrollTrigger: {\n        id: 1,\n        trigger: \".vantaClouds-container\",\n        pin: true,\n        scrub: 0.1,\n        end: \"+=2000\"\n      }\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(\".vantaClouds-container .image__1\", {\n      x: 120,\n      ease: \"ease3.inOut\",\n      scrollTrigger: {\n        id: 2,\n        trigger: \".vantaClouds-container\",\n        scrub: 0.1,\n        start: \"0 100%\",\n        end: \"bottom 20%\"\n      }\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(\".vantaClouds-container .image__2\", {\n      x: 225,\n      ease: \"ease3.inOut\",\n      scrollTrigger: {\n        id: 3,\n        trigger: \".vantaClouds-container\",\n        scrub: 0.1,\n        start: \"0 100%\",\n        end: \"bottom 20%\"\n      }\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(\".vantaClouds-container .image__3\", {\n      x: 225,\n      ease: \"ease3.inOut\",\n      scrollTrigger: {\n        id: 3,\n        trigger: \".vantaClouds-container\",\n        scrub: 0.1,\n        start: \"0 100%\",\n        end: \"bottom 20%\"\n      }\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!vantaEffect) {\n      setVantaEffect(vanta_dist_vanta_clouds_min__WEBPACK_IMPORTED_MODULE_2___default()({\n        el: vantaRef.current,\n        THREE: three__WEBPACK_IMPORTED_MODULE_6__,\n        mouseControls: false,\n        touchControls: false,\n        gyroControls: true,\n        minHeight: 820.00,\n        minWidth: 200.00,\n        skyColor: 0xe4e6e8,\n        cloudColor: 0xb5bac8,\n        cloudShadowColor: 0x162b41,\n        sunColor: 0xaf9473,\n        sunGlareColor: 0xb94055,\n        sunlightColor: 0xd99b60,\n        speed: 0.60\n      }));\n    }\n\n    return function () {\n      if (vantaEffect) vantaEffect.destroy();\n    };\n  }, [vantaEffect]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n      className: \"vantaClouds-container block absolute w-full h-[100vh] items-end overflow-hidden z-0\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"top-fade absolute inline-block w-full h-[40vh]\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        ref: vantaRef,\n        className: \"block h-[100vh]\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          ref: innerRef,\n          className: \"inner-gallery relative\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/370/250\",\n            width: 370,\n            height: 250,\n            className: \"image__1 absolute -left-[13.333rem] top-[20rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/540/360\",\n            width: 540,\n            height: 360,\n            className: \"image__2 absolute left-[10%] top-[1rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/380/580\",\n            width: 380,\n            height: 580,\n            className: \"image__3 absolute left-[50%] top-0\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/420/230\",\n            width: 420,\n            height: 230,\n            className: \"image__4 absolute left-[60%] top-[10rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/350/350\",\n            width: 350,\n            height: 350,\n            className: \"image__5 absolute left-[90%] top-[3.333rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          ref: innerRef,\n          className: \"inner-gallery relative left-[100vw]\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/200/300\",\n            width: 540,\n            height: 360,\n            className: \"image__6 absolute\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/200/300\",\n            width: 540,\n            height: 360,\n            className: \"image__7 absolute\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/200/300\",\n            width: 540,\n            height: 360,\n            className: \"image__8 absolute\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/200/300\",\n            width: 540,\n            height: 360,\n            className: \"image__9 absolute\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/200/300\",\n            width: 540,\n            height: 360,\n            className: \"image__10 absolute\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          ref: innerRef,\n          className: \"inner-gallery relative left-[200vw]\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/200/300\",\n            width: 540,\n            height: 360,\n            className: \"image__11 absolute\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/200/300\",\n            width: 540,\n            height: 360,\n            className: \"image__12 absolute\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/200/300\",\n            width: 540,\n            height: 360,\n            className: \"image__13 absolute\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/200/300\",\n            width: 540,\n            height: 360,\n            className: \"image__14 absolute\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"https://picsum.photos/200/300\",\n            width: 540,\n            height: 360,\n            className: \"image__15 absolute\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(VantaClouds, \"HrMl3q96zoWTC+tMTMJpwAOBb08=\");\n\n_c = VantaClouds;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VantaClouds);\n\nvar _c;\n\n$RefreshReg$(_c, \"VantaClouds\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBQSxTQWxCRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FKRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERixpQkFERjtBQW9DRCxDQXhHRDs7R0FBTUo7O0tBQUFBO0FBMEdOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmFudGFDbG91ZHMuanN4PzEwY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwL2Rpc3QvZ3NhcFwiXHJcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IENMT1VEUyBmcm9tICd2YW50YS9kaXN0L3ZhbnRhLmNsb3Vkcy5taW4nXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5cclxuY29uc3QgVmFudGFDbG91ZHMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFt2YW50YUVmZmVjdCwgc2V0VmFudGFFZmZlY3RdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCB2YW50YVJlZiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGlubmVyUmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcclxuXHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBsZXQgc2VjdGlvbnMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoYC52YW50YUNsb3Vkcy1jb250YWluZXIgLmlubmVyLWdhbGxlcnlgKTtcclxuICAgIGxldCBzY3JvbGxUd2VlbiA9IGdzYXAudG8oc2VjdGlvbnMsIHtcclxuICAgICAgeFBlcmNlbnQ6IC0xMDAgKiAyLFxyXG4gICAgICBlYXNlOiBcIm5vbmVcIiwgLy8gPC0tIElNUE9SVEFOVCFcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHRyaWdnZXI6IFwiLnZhbnRhQ2xvdWRzLWNvbnRhaW5lclwiLFxyXG4gICAgICAgIHBpbjogdHJ1ZSxcclxuICAgICAgICBzY3J1YjogMC4xLFxyXG4gICAgICAgIGVuZDogXCIrPTIwMDBcIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgZ3NhcC50byhgLnZhbnRhQ2xvdWRzLWNvbnRhaW5lciAuaW1hZ2VfXzFgLCB7XHJcbiAgICAgIHg6IDEyMCxcclxuICAgICAgZWFzZTogXCJlYXNlMy5pbk91dFwiLFxyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7IGlkOiAyLCB0cmlnZ2VyOiBgLnZhbnRhQ2xvdWRzLWNvbnRhaW5lcmAsIHNjcnViOiAwLjEsIHN0YXJ0OiBcIjAgMTAwJVwiLCBlbmQ6IFwiYm90dG9tIDIwJVwiIH1cclxuICAgIH0pXHJcbiAgICBnc2FwLnRvKGAudmFudGFDbG91ZHMtY29udGFpbmVyIC5pbWFnZV9fMmAsIHtcclxuICAgICAgeDogMjI1LFxyXG4gICAgICBlYXNlOiBcImVhc2UzLmluT3V0XCIsXHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHsgaWQ6IDMsIHRyaWdnZXI6IGAudmFudGFDbG91ZHMtY29udGFpbmVyYCwgc2NydWI6IDAuMSwgc3RhcnQ6IFwiMCAxMDAlXCIsIGVuZDogXCJib3R0b20gMjAlXCIgfVxyXG4gICAgfSlcclxuICAgIGdzYXAudG8oYC52YW50YUNsb3Vkcy1jb250YWluZXIgLmltYWdlX18zYCwge1xyXG4gICAgICB4OiAyMjUsXHJcbiAgICAgIGVhc2U6IFwiZWFzZTMuaW5PdXRcIixcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjogeyBpZDogMywgdHJpZ2dlcjogYC52YW50YUNsb3Vkcy1jb250YWluZXJgLCBzY3J1YjogMC4xLCBzdGFydDogXCIwIDEwMCVcIiwgZW5kOiBcImJvdHRvbSAyMCVcIiB9XHJcbiAgICB9KVxyXG5cclxuICB9LCBbXSlcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBpZiAoIXZhbnRhRWZmZWN0KSB7XHJcbiAgICAgIHNldFZhbnRhRWZmZWN0KFxyXG4gICAgICAgIENMT1VEUyh7XHJcbiAgICAgICAgICBlbDogdmFudGFSZWYuY3VycmVudCxcclxuICAgICAgICAgIFRIUkVFLFxyXG4gICAgICAgICAgbW91c2VDb250cm9sczogZmFsc2UsXHJcbiAgICAgICAgICB0b3VjaENvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICAgIGd5cm9Db250cm9sczogdHJ1ZSxcclxuICAgICAgICAgIG1pbkhlaWdodDogODIwLjAwLFxyXG4gICAgICAgICAgbWluV2lkdGg6IDIwMC4wMCxcclxuICAgICAgICAgIHNreUNvbG9yOiAweGU0ZTZlOCxcclxuICAgICAgICAgIGNsb3VkQ29sb3I6IDB4YjViYWM4LFxyXG4gICAgICAgICAgY2xvdWRTaGFkb3dDb2xvcjogMHgxNjJiNDEsXHJcbiAgICAgICAgICBzdW5Db2xvcjogMHhhZjk0NzMsXHJcbiAgICAgICAgICBzdW5HbGFyZUNvbG9yOiAweGI5NDA1NSxcclxuICAgICAgICAgIHN1bmxpZ2h0Q29sb3I6IDB4ZDk5YjYwLFxyXG4gICAgICAgICAgc3BlZWQ6IDAuNjBcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAodmFudGFFZmZlY3QpIHZhbnRhRWZmZWN0LmRlc3Ryb3koKVxyXG4gICAgfVxyXG5cclxuICB9LCBbdmFudGFFZmZlY3RdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmFudGFDbG91ZHMtY29udGFpbmVyIGJsb2NrIGFic29sdXRlIHctZnVsbCBoLVsxMDB2aF0gaXRlbXMtZW5kIG92ZXJmbG93LWhpZGRlbiB6LTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1mYWRlIGFic29sdXRlIGlubGluZS1ibG9jayB3LWZ1bGwgaC1bNDB2aF1cIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiByZWY9e3ZhbnRhUmVmfSBjbGFzc05hbWU9XCJibG9jayBoLVsxMDB2aF1cIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHJlZj17aW5uZXJSZWZ9IGNsYXNzTmFtZT1cImlubmVyLWdhbGxlcnkgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8zNzAvMjUwXCIgd2lkdGg9ezM3MH0gaGVpZ2h0PXsyNTB9IGNsYXNzTmFtZT1cImltYWdlX18xIGFic29sdXRlIC1sZWZ0LVsxMy4zMzNyZW1dIHRvcC1bMjByZW1dXCIgYWx0PVwiYWx0XCIgLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy81NDAvMzYwXCIgd2lkdGg9ezU0MH0gaGVpZ2h0PXszNjB9IGNsYXNzTmFtZT1cImltYWdlX18yIGFic29sdXRlIGxlZnQtWzEwJV0gdG9wLVsxcmVtXVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMzgwLzU4MFwiIHdpZHRoPXszODB9IGhlaWdodD17NTgwfSBjbGFzc05hbWU9XCJpbWFnZV9fMyBhYnNvbHV0ZSBsZWZ0LVs1MCVdIHRvcC0wXCIgYWx0PVwiYWx0XCIgLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy80MjAvMjMwXCIgd2lkdGg9ezQyMH0gaGVpZ2h0PXsyMzB9IGNsYXNzTmFtZT1cImltYWdlX180IGFic29sdXRlIGxlZnQtWzYwJV0gdG9wLVsxMHJlbV1cIiBhbHQ9XCJhbHRcIiAvPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzM1MC8zNTBcIiB3aWR0aD17MzUwfSBoZWlnaHQ9ezM1MH0gY2xhc3NOYW1lPVwiaW1hZ2VfXzUgYWJzb2x1dGUgbGVmdC1bOTAlXSB0b3AtWzMuMzMzcmVtXVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHJlZj17aW5uZXJSZWZ9IGNsYXNzTmFtZT1cImlubmVyLWdhbGxlcnkgcmVsYXRpdmUgbGVmdC1bMTAwdnddXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMFwiIHdpZHRoPXs1NDB9IGhlaWdodD17MzYwfSBjbGFzc05hbWU9XCJpbWFnZV9fNiBhYnNvbHV0ZVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMFwiIHdpZHRoPXs1NDB9IGhlaWdodD17MzYwfSBjbGFzc05hbWU9XCJpbWFnZV9fNyBhYnNvbHV0ZVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMFwiIHdpZHRoPXs1NDB9IGhlaWdodD17MzYwfSBjbGFzc05hbWU9XCJpbWFnZV9fOCBhYnNvbHV0ZVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMFwiIHdpZHRoPXs1NDB9IGhlaWdodD17MzYwfSBjbGFzc05hbWU9XCJpbWFnZV9fOSBhYnNvbHV0ZVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMFwiIHdpZHRoPXs1NDB9IGhlaWdodD17MzYwfSBjbGFzc05hbWU9XCJpbWFnZV9fMTAgYWJzb2x1dGVcIiBhbHQ9XCJhbHRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiByZWY9e2lubmVyUmVmfSBjbGFzc05hbWU9XCJpbm5lci1nYWxsZXJ5IHJlbGF0aXZlIGxlZnQtWzIwMHZ3XVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDBcIiB3aWR0aD17NTQwfSBoZWlnaHQ9ezM2MH0gY2xhc3NOYW1lPVwiaW1hZ2VfXzExIGFic29sdXRlXCIgYWx0PVwiYWx0XCIgLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwXCIgd2lkdGg9ezU0MH0gaGVpZ2h0PXszNjB9IGNsYXNzTmFtZT1cImltYWdlX18xMiBhYnNvbHV0ZVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMFwiIHdpZHRoPXs1NDB9IGhlaWdodD17MzYwfSBjbGFzc05hbWU9XCJpbWFnZV9fMTMgYWJzb2x1dGVcIiBhbHQ9XCJhbHRcIiAvPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDBcIiB3aWR0aD17NTQwfSBoZWlnaHQ9ezM2MH0gY2xhc3NOYW1lPVwiaW1hZ2VfXzE0IGFic29sdXRlXCIgYWx0PVwiYWx0XCIgLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwXCIgd2lkdGg9ezU0MH0gaGVpZ2h0PXszNjB9IGNsYXNzTmFtZT1cImltYWdlX18xNSBhYnNvbHV0ZVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYW50YUNsb3VkczsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VMYXlvdXRFZmZlY3QiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIkltYWdlIiwiQ0xPVURTIiwiVEhSRUUiLCJWYW50YUNsb3VkcyIsInZhbnRhRWZmZWN0Iiwic2V0VmFudGFFZmZlY3QiLCJ2YW50YVJlZiIsImlubmVyUmVmIiwicmVnaXN0ZXJQbHVnaW4iLCJzZWN0aW9ucyIsInV0aWxzIiwidG9BcnJheSIsInNjcm9sbFR3ZWVuIiwidG8iLCJ4UGVyY2VudCIsImVhc2UiLCJzY3JvbGxUcmlnZ2VyIiwiaWQiLCJ0cmlnZ2VyIiwicGluIiwic2NydWIiLCJlbmQiLCJ4Iiwic3RhcnQiLCJlbCIsImN1cnJlbnQiLCJtb3VzZUNvbnRyb2xzIiwidG91Y2hDb250cm9scyIsImd5cm9Db250cm9scyIsIm1pbkhlaWdodCIsIm1pbldpZHRoIiwic2t5Q29sb3IiLCJjbG91ZENvbG9yIiwiY2xvdWRTaGFkb3dDb2xvciIsInN1bkNvbG9yIiwic3VuR2xhcmVDb2xvciIsInN1bmxpZ2h0Q29sb3IiLCJzcGVlZCIsImRlc3Ryb3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/VantaClouds.jsx\n"));

/***/ })

});