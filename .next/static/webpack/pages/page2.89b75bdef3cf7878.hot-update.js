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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vanta_dist_vanta_clouds_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanta/dist/vanta.clouds.min */ \"./node_modules/vanta/dist/vanta.clouds.min.js\");\n/* harmony import */ var vanta_dist_vanta_clouds_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_clouds_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\components\\\\VantaClouds.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar VantaClouds = function VantaClouds() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    x: 0,\n    y: 0\n  }),\n      mousesPos = _useState[0],\n      setMousesPos = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      vantaEffect = _useState2[0],\n      setVantaEffect = _useState2[1];\n\n  var vantaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var innerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  function mouseMoveHandler(e) {\n    setMousesPos({\n      x: e.clientX,\n      y: e.clientY\n    });\n  }\n\n  gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {\n    var sections = gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.utils.toArray(\".vantaClouds-container .inner-gallery\");\n    var scrollTween = gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(sections, {\n      xPercent: -100 * 2,\n      ease: \"none\",\n      // <-- IMPORTANT!\n      scrollTrigger: {\n        id: 1,\n        trigger: \".vantaClouds-container\",\n        pin: true,\n        scrub: 0.9,\n        end: \"+=3000\"\n      }\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(\".vantaClouds-container .image__1\", {\n      x: 120,\n      ease: \"ease3.inOut\",\n      scrollTrigger: {\n        id: 2,\n        trigger: \".vantaClouds-container\",\n        scrub: 0.1,\n        start: \"0 100%\",\n        end: \"bottom 20%\"\n      }\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(\".vantaClouds-container .image__2\", {\n      x: 225,\n      ease: \"ease3.inOut\",\n      scrollTrigger: {\n        id: 3,\n        trigger: \".vantaClouds-container\",\n        scrub: 0.1,\n        start: \"0 100%\",\n        end: \"bottom 20%\"\n      }\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(\".vantaClouds-container .image__3\", {\n      x: 195,\n      ease: \"ease3.inOut\",\n      scrollTrigger: {\n        id: 4,\n        trigger: \".vantaClouds-container\",\n        scrub: 0.1,\n        start: \"0 100%\",\n        end: \"bottom 20%\"\n      }\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(\".vantaClouds-container .image__4\", {\n      x: 265,\n      ease: \"ease3.inOut\",\n      scrollTrigger: {\n        id: 5,\n        trigger: \".vantaClouds-container\",\n        scrub: 0.1,\n        start: \"0 100%\",\n        end: \"bottom 20%\"\n      }\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(\".vantaClouds-container .image__5\", {\n      x: 110,\n      ease: \"ease3.inOut\",\n      scrollTrigger: {\n        id: 6,\n        trigger: \".vantaClouds-container\",\n        scrub: 0.1,\n        start: \"0 100%\",\n        end: \"bottom 20%\"\n      }\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(\".vantaClouds-container .inner-gallery\", {\n      y: mousesPos.y / 1 + 1,\n      x: mousesPos.x / 1 + 1,\n      scaleY: mousesPos.y / 10000 + 1,\n      scaleX: mousesPos.x / 10000 + 1,\n      ease: \"Power2.easeOut\",\n      transformPerspective: 900,\n      transformOrigin: 'center'\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!vantaEffect) {\n      setVantaEffect(vanta_dist_vanta_clouds_min__WEBPACK_IMPORTED_MODULE_2___default()({\n        el: vantaRef.current,\n        THREE: three__WEBPACK_IMPORTED_MODULE_6__,\n        mouseControls: false,\n        touchControls: false,\n        gyroControls: true,\n        minHeight: 820.00,\n        minWidth: 200.00,\n        skyColor: 0xe4e6e8,\n        cloudColor: 0xb5bac8,\n        cloudShadowColor: 0x162b41,\n        sunColor: 0xaf9473,\n        sunGlareColor: 0xb94055,\n        sunlightColor: 0xd99b60,\n        speed: 0.60\n      }));\n    }\n\n    return function () {\n      if (vantaEffect) vantaEffect.destroy();\n    };\n  }, [vantaEffect]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n      className: \"vantaClouds-container block absolute w-full h-[100vh] items-end overflow-hidden z-0\",\n      onMouseMove: function onMouseMove(e) {\n        return mouseMoveHandler(e);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"top-fade absolute inline-block w-full h-[40vh]\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        ref: vantaRef,\n        className: \"block h-[100vh]\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          ref: innerRef,\n          className: \"inner-gallery relative\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-01.webp\",\n            width: 370,\n            height: 250,\n            className: \"image__1 absolute -left-[13.333rem] top-[20rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-02.webp\",\n            width: 540,\n            height: 360,\n            className: \"image__2 absolute left-[1.333%] top-[1rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-03.webp\",\n            width: 380,\n            height: 580,\n            className: \"image__3 absolute left-[33.333%] top-0\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-04.webp\",\n            width: 420,\n            height: 230,\n            className: \"image__4 absolute left-[55%] top-[10rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-05.webp\",\n            width: 350,\n            height: 350,\n            className: \"image__5 absolute left-[80%] top-[3.333rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          ref: innerRef,\n          className: \"inner-gallery relative left-[100vw]\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-01.webp\",\n            width: 370,\n            height: 250,\n            className: \"image__1 absolute -left-[13.333rem] top-[20rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-02.webp\",\n            width: 540,\n            height: 360,\n            className: \"image__2 absolute left-[1.333%] top-[1rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-03.webp\",\n            width: 380,\n            height: 580,\n            className: \"image__3 absolute left-[33.333%] top-0\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-04.webp\",\n            width: 420,\n            height: 230,\n            className: \"image__4 absolute left-[55%] top-[10rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-05.webp\",\n            width: 350,\n            height: 350,\n            className: \"image__5 absolute left-[80%] top-[3.333rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          ref: innerRef,\n          className: \"inner-gallery relative left-[200vw]\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-01.webp\",\n            width: 370,\n            height: 250,\n            className: \"image__1 absolute -left-[13.333rem] top-[20rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-02.webp\",\n            width: 540,\n            height: 360,\n            className: \"image__2 absolute left-[1.333%] top-[1rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-03.webp\",\n            width: 380,\n            height: 580,\n            className: \"image__3 absolute left-[33.333%] top-0\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 130,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-04.webp\",\n            width: 420,\n            height: 230,\n            className: \"image__4 absolute left-[55%] top-[10rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/assets/timeline-img-05.webp\",\n            width: 350,\n            height: 350,\n            className: \"image__5 absolute left-[80%] top-[3.333rem]\",\n            alt: \"alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 132,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"block h-[370vh]\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(VantaClouds, \"V1AQDHDaeu1vDjPdKYi2XQevGrY=\");\n\n_c = VantaClouds;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VantaClouds);\n\nvar _c;\n\n$RefreshReg$(_c, \"VantaClouds\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZhbnRhQ2xvdWRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0VBQUE7O0VBRXhCLGdCQUFrQ1QsK0NBQVEsQ0FBQztJQUFFVSxDQUFDLEVBQUUsQ0FBTDtJQUFRQyxDQUFDLEVBQUU7RUFBWCxDQUFELENBQTFDO0VBQUEsSUFBT0MsU0FBUDtFQUFBLElBQWtCQyxZQUFsQjs7RUFDQSxpQkFBc0NiLCtDQUFRLENBQUMsQ0FBRCxDQUE5QztFQUFBLElBQU9jLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBQ0EsSUFBTUMsUUFBUSxHQUFHZCw2Q0FBTSxDQUFDLElBQUQsQ0FBdkI7RUFDQSxJQUFNZSxRQUFRLEdBQUdmLDZDQUFNLENBQUMsSUFBRCxDQUF2Qjs7RUFFQSxTQUFTZ0IsZ0JBQVQsQ0FBMEJDLENBQTFCLEVBQTZCO0lBQzNCTixZQUFZLENBQUM7TUFDWEgsQ0FBQyxFQUFFUyxDQUFDLENBQUNDLE9BRE07TUFFWFQsQ0FBQyxFQUFFUSxDQUFDLENBQUNFO0lBRk0sQ0FBRCxDQUFaO0VBSUQ7O0VBRURqQiwrREFBQSxDQUFvQkMsa0VBQXBCO0VBRUFGLHNEQUFlLENBQUMsWUFBTTtJQUVwQixJQUFJb0IsUUFBUSxHQUFHbkIsOERBQUEseUNBQWY7SUFDQSxJQUFJc0IsV0FBVyxHQUFHdEIsbURBQUEsQ0FBUW1CLFFBQVIsRUFBa0I7TUFDbENLLFFBQVEsRUFBRSxDQUFDLEdBQUQsR0FBTyxDQURpQjtNQUVsQ0MsSUFBSSxFQUFFLE1BRjRCO01BRXBCO01BQ2RDLGFBQWEsRUFBRTtRQUNiQyxFQUFFLEVBQUUsQ0FEUztRQUViQyxPQUFPLEVBQUUsd0JBRkk7UUFHYkMsR0FBRyxFQUFFLElBSFE7UUFJYkMsS0FBSyxFQUFFLEdBSk07UUFLYkMsR0FBRyxFQUFFO01BTFE7SUFIbUIsQ0FBbEIsQ0FBbEI7SUFXQS9CLG1EQUFBLHFDQUE0QztNQUMxQ00sQ0FBQyxFQUFFLEdBRHVDO01BRTFDbUIsSUFBSSxFQUFFLGFBRm9DO01BRzFDQyxhQUFhLEVBQUU7UUFBRUMsRUFBRSxFQUFFLENBQU47UUFBU0MsT0FBTywwQkFBaEI7UUFBNENFLEtBQUssRUFBRSxHQUFuRDtRQUF3REUsS0FBSyxFQUFFLFFBQS9EO1FBQXlFRCxHQUFHLEVBQUU7TUFBOUU7SUFIMkIsQ0FBNUM7SUFLQS9CLG1EQUFBLHFDQUE0QztNQUMxQ00sQ0FBQyxFQUFFLEdBRHVDO01BRTFDbUIsSUFBSSxFQUFFLGFBRm9DO01BRzFDQyxhQUFhLEVBQUU7UUFBRUMsRUFBRSxFQUFFLENBQU47UUFBU0MsT0FBTywwQkFBaEI7UUFBNENFLEtBQUssRUFBRSxHQUFuRDtRQUF3REUsS0FBSyxFQUFFLFFBQS9EO1FBQXlFRCxHQUFHLEVBQUU7TUFBOUU7SUFIMkIsQ0FBNUM7SUFLQS9CLG1EQUFBLHFDQUE0QztNQUMxQ00sQ0FBQyxFQUFFLEdBRHVDO01BRTFDbUIsSUFBSSxFQUFFLGFBRm9DO01BRzFDQyxhQUFhLEVBQUU7UUFBRUMsRUFBRSxFQUFFLENBQU47UUFBU0MsT0FBTywwQkFBaEI7UUFBNENFLEtBQUssRUFBRSxHQUFuRDtRQUF3REUsS0FBSyxFQUFFLFFBQS9EO1FBQXlFRCxHQUFHLEVBQUU7TUFBOUU7SUFIMkIsQ0FBNUM7SUFLQS9CLG1EQUFBLHFDQUE0QztNQUMxQ00sQ0FBQyxFQUFFLEdBRHVDO01BRTFDbUIsSUFBSSxFQUFFLGFBRm9DO01BRzFDQyxhQUFhLEVBQUU7UUFBRUMsRUFBRSxFQUFFLENBQU47UUFBU0MsT0FBTywwQkFBaEI7UUFBNENFLEtBQUssRUFBRSxHQUFuRDtRQUF3REUsS0FBSyxFQUFFLFFBQS9EO1FBQXlFRCxHQUFHLEVBQUU7TUFBOUU7SUFIMkIsQ0FBNUM7SUFLQS9CLG1EQUFBLHFDQUE0QztNQUMxQ00sQ0FBQyxFQUFFLEdBRHVDO01BRTFDbUIsSUFBSSxFQUFFLGFBRm9DO01BRzFDQyxh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QUFDLG1EQUFEO1lBQU8sR0FBRyxFQUFDLDhCQUFYO1lBQTBDLEtBQUssRUFBRSxHQUFqRDtZQUFzRCxNQUFNLEVBQUUsR0FBOUQ7WUFBbUUsU0FBUyxFQUFDLDZDQUE3RTtZQUEySCxHQUFHLEVBQUM7VUFBL0g7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQUxGO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQWxCRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FKRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixlQWlDRTtNQUFLLFNBQVMsRUFBQztJQUFmO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FqQ0Y7RUFBQSxnQkFERjtBQXFDRCxDQXBJRDs7R0FBTVI7O0tBQUFBO0FBc0lOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmFudGFDbG91ZHMuanN4PzEwY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwL2Rpc3QvZ3NhcFwiXHJcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IENMT1VEUyBmcm9tICd2YW50YS9kaXN0L3ZhbnRhLmNsb3Vkcy5taW4nXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5cclxuY29uc3QgVmFudGFDbG91ZHMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFttb3VzZXNQb3MsIHNldE1vdXNlc1Bvc10gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSlcclxuICBjb25zdCBbdmFudGFFZmZlY3QsIHNldFZhbnRhRWZmZWN0XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgdmFudGFSZWYgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBpbm5lclJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICBmdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGUpIHtcclxuICAgIHNldE1vdXNlc1Bvcyh7XHJcbiAgICAgIHg6IGUuY2xpZW50WCxcclxuICAgICAgeTogZS5jbGllbnRZXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxyXG5cclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIGxldCBzZWN0aW9ucyA9IGdzYXAudXRpbHMudG9BcnJheShgLnZhbnRhQ2xvdWRzLWNvbnRhaW5lciAuaW5uZXItZ2FsbGVyeWApO1xyXG4gICAgbGV0IHNjcm9sbFR3ZWVuID0gZ3NhcC50byhzZWN0aW9ucywge1xyXG4gICAgICB4UGVyY2VudDogLTEwMCAqIDIsXHJcbiAgICAgIGVhc2U6IFwibm9uZVwiLCAvLyA8LS0gSU1QT1JUQU5UIVxyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgdHJpZ2dlcjogXCIudmFudGFDbG91ZHMtY29udGFpbmVyXCIsXHJcbiAgICAgICAgcGluOiB0cnVlLFxyXG4gICAgICAgIHNjcnViOiAwLjksXHJcbiAgICAgICAgZW5kOiBcIis9MzAwMFwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBnc2FwLnRvKGAudmFudGFDbG91ZHMtY29udGFpbmVyIC5pbWFnZV9fMWAsIHtcclxuICAgICAgeDogMTIwLFxyXG4gICAgICBlYXNlOiBcImVhc2UzLmluT3V0XCIsXHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHsgaWQ6IDIsIHRyaWdnZXI6IGAudmFudGFDbG91ZHMtY29udGFpbmVyYCwgc2NydWI6IDAuMSwgc3RhcnQ6IFwiMCAxMDAlXCIsIGVuZDogXCJib3R0b20gMjAlXCIgfVxyXG4gICAgfSlcclxuICAgIGdzYXAudG8oYC52YW50YUNsb3Vkcy1jb250YWluZXIgLmltYWdlX18yYCwge1xyXG4gICAgICB4OiAyMjUsXHJcbiAgICAgIGVhc2U6IFwiZWFzZTMuaW5PdXRcIixcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjogeyBpZDogMywgdHJpZ2dlcjogYC52YW50YUNsb3Vkcy1jb250YWluZXJgLCBzY3J1YjogMC4xLCBzdGFydDogXCIwIDEwMCVcIiwgZW5kOiBcImJvdHRvbSAyMCVcIiB9XHJcbiAgICB9KVxyXG4gICAgZ3NhcC50byhgLnZhbnRhQ2xvdWRzLWNvbnRhaW5lciAuaW1hZ2VfXzNgLCB7XHJcbiAgICAgIHg6IDE5NSxcclxuICAgICAgZWFzZTogXCJlYXNlMy5pbk91dFwiLFxyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7IGlkOiA0LCB0cmlnZ2VyOiBgLnZhbnRhQ2xvdWRzLWNvbnRhaW5lcmAsIHNjcnViOiAwLjEsIHN0YXJ0OiBcIjAgMTAwJVwiLCBlbmQ6IFwiYm90dG9tIDIwJVwiIH1cclxuICAgIH0pXHJcbiAgICBnc2FwLnRvKGAudmFudGFDbG91ZHMtY29udGFpbmVyIC5pbWFnZV9fNGAsIHtcclxuICAgICAgeDogMjY1LFxyXG4gICAgICBlYXNlOiBcImVhc2UzLmluT3V0XCIsXHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHsgaWQ6IDUsIHRyaWdnZXI6IGAudmFudGFDbG91ZHMtY29udGFpbmVyYCwgc2NydWI6IDAuMSwgc3RhcnQ6IFwiMCAxMDAlXCIsIGVuZDogXCJib3R0b20gMjAlXCIgfVxyXG4gICAgfSlcclxuICAgIGdzYXAudG8oYC52YW50YUNsb3Vkcy1jb250YWluZXIgLmltYWdlX181YCwge1xyXG4gICAgICB4OiAxMTAsXHJcbiAgICAgIGVhc2U6IFwiZWFzZTMuaW5PdXRcIixcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjogeyBpZDogNiwgdHJpZ2dlcjogYC52YW50YUNsb3Vkcy1jb250YWluZXJgLCBzY3J1YjogMC4xLCBzdGFydDogXCIwIDEwMCVcIiwgZW5kOiBcImJvdHRvbSAyMCVcIiB9XHJcbiAgICB9KVxyXG4gICAgZ3NhcC50byhgLnZhbnRhQ2xvdWRzLWNvbnRhaW5lciAuaW5uZXItZ2FsbGVyeWAsIHtcclxuICAgICAgeTogKCggbW91c2VzUG9zLnkgKSAvIDEpICsgMSxcclxuICAgICAgeDogKCggbW91c2VzUG9zLnggKSAvIDEpICsgMSxcclxuICAgICAgc2NhbGVZOiAoKCBtb3VzZXNQb3MueSApIC8gMTAwMDApICsgMSxcclxuICAgICAgc2NhbGVYOiAoKCBtb3VzZXNQb3MueCApIC8gMTAwMDApICsgMSxcclxuICAgICAgZWFzZTogYFBvd2VyMi5lYXNlT3V0YCxcclxuICAgICAgdHJhbnNmb3JtUGVyc3BlY3RpdmU6IDkwMCxcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyJ1xyXG4gICAgfSlcclxuXHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFxyXG4gICAgaWYgKCF2YW50YUVmZmVjdCkge1xyXG4gICAgICBzZXRWYW50YUVmZmVjdChcclxuICAgICAgICBDTE9VRFMoe1xyXG4gICAgICAgICAgZWw6IHZhbnRhUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICBUSFJFRSxcclxuICAgICAgICAgIG1vdXNlQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgICAgdG91Y2hDb250cm9sczogZmFsc2UsXHJcbiAgICAgICAgICBneXJvQ29udHJvbHM6IHRydWUsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IDgyMC4wMCxcclxuICAgICAgICAgIG1pbldpZHRoOiAyMDAuMDAsXHJcbiAgICAgICAgICBza3lDb2xvcjogMHhlNGU2ZTgsXHJcbiAgICAgICAgICBjbG91ZENvbG9yOiAweGI1YmFjOCxcclxuICAgICAgICAgIGNsb3VkU2hhZG93Q29sb3I6IDB4MTYyYjQxLFxyXG4gICAgICAgICAgc3VuQ29sb3I6IDB4YWY5NDczLFxyXG4gICAgICAgICAgc3VuR2xhcmVDb2xvcjogMHhiOTQwNTUsXHJcbiAgICAgICAgICBzdW5saWdodENvbG9yOiAweGQ5OWI2MCxcclxuICAgICAgICAgIHNwZWVkOiAwLjYwXHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHZhbnRhRWZmZWN0KSB2YW50YUVmZmVjdC5kZXN0cm95KClcclxuICAgIH1cclxuXHJcbiAgfSwgW3ZhbnRhRWZmZWN0XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZhbnRhQ2xvdWRzLWNvbnRhaW5lciBibG9jayBhYnNvbHV0ZSB3LWZ1bGwgaC1bMTAwdmhdIGl0ZW1zLWVuZCBvdmVyZmxvdy1oaWRkZW4gei0wXCIgb25Nb3VzZU1vdmU9eyAoZSkgPT4gbW91c2VNb3ZlSGFuZGxlcihlKSB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWZhZGUgYWJzb2x1dGUgaW5saW5lLWJsb2NrIHctZnVsbCBoLVs0MHZoXVwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHJlZj17dmFudGFSZWZ9IGNsYXNzTmFtZT1cImJsb2NrIGgtWzEwMHZoXVwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgcmVmPXtpbm5lclJlZn0gY2xhc3NOYW1lPVwiaW5uZXItZ2FsbGVyeSByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy90aW1lbGluZS1pbWctMDEud2VicFwiIHdpZHRoPXszNzB9IGhlaWdodD17MjUwfSBjbGFzc05hbWU9XCJpbWFnZV9fMSBhYnNvbHV0ZSAtbGVmdC1bMTMuMzMzcmVtXSB0b3AtWzIwcmVtXVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL3RpbWVsaW5lLWltZy0wMi53ZWJwXCIgd2lkdGg9ezU0MH0gaGVpZ2h0PXszNjB9IGNsYXNzTmFtZT1cImltYWdlX18yIGFic29sdXRlIGxlZnQtWzEuMzMzJV0gdG9wLVsxcmVtXVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL3RpbWVsaW5lLWltZy0wMy53ZWJwXCIgd2lkdGg9ezM4MH0gaGVpZ2h0PXs1ODB9IGNsYXNzTmFtZT1cImltYWdlX18zIGFic29sdXRlIGxlZnQtWzMzLjMzMyVdIHRvcC0wXCIgYWx0PVwiYWx0XCIgLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvdGltZWxpbmUtaW1nLTA0LndlYnBcIiB3aWR0aD17NDIwfSBoZWlnaHQ9ezIzMH0gY2xhc3NOYW1lPVwiaW1hZ2VfXzQgYWJzb2x1dGUgbGVmdC1bNTUlXSB0b3AtWzEwcmVtXVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL3RpbWVsaW5lLWltZy0wNS53ZWJwXCIgd2lkdGg9ezM1MH0gaGVpZ2h0PXszNTB9IGNsYXNzTmFtZT1cImltYWdlX181IGFic29sdXRlIGxlZnQtWzgwJV0gdG9wLVszLjMzM3JlbV1cIiBhbHQ9XCJhbHRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiByZWY9e2lubmVyUmVmfSBjbGFzc05hbWU9XCJpbm5lci1nYWxsZXJ5IHJlbGF0aXZlIGxlZnQtWzEwMHZ3XVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy90aW1lbGluZS1pbWctMDEud2VicFwiIHdpZHRoPXszNzB9IGhlaWdodD17MjUwfSBjbGFzc05hbWU9XCJpbWFnZV9fMSBhYnNvbHV0ZSAtbGVmdC1bMTMuMzMzcmVtXSB0b3AtWzIwcmVtXVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL3RpbWVsaW5lLWltZy0wMi53ZWJwXCIgd2lkdGg9ezU0MH0gaGVpZ2h0PXszNjB9IGNsYXNzTmFtZT1cImltYWdlX18yIGFic29sdXRlIGxlZnQtWzEuMzMzJV0gdG9wLVsxcmVtXVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL3RpbWVsaW5lLWltZy0wMy53ZWJwXCIgd2lkdGg9ezM4MH0gaGVpZ2h0PXs1ODB9IGNsYXNzTmFtZT1cImltYWdlX18zIGFic29sdXRlIGxlZnQtWzMzLjMzMyVdIHRvcC0wXCIgYWx0PVwiYWx0XCIgLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvdGltZWxpbmUtaW1nLTA0LndlYnBcIiB3aWR0aD17NDIwfSBoZWlnaHQ9ezIzMH0gY2xhc3NOYW1lPVwiaW1hZ2VfXzQgYWJzb2x1dGUgbGVmdC1bNTUlXSB0b3AtWzEwcmVtXVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL3RpbWVsaW5lLWltZy0wNS53ZWJwXCIgd2lkdGg9ezM1MH0gaGVpZ2h0PXszNTB9IGNsYXNzTmFtZT1cImltYWdlX181IGFic29sdXRlIGxlZnQtWzgwJV0gdG9wLVszLjMzM3JlbV1cIiBhbHQ9XCJhbHRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiByZWY9e2lubmVyUmVmfSBjbGFzc05hbWU9XCJpbm5lci1nYWxsZXJ5IHJlbGF0aXZlIGxlZnQtWzIwMHZ3XVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy90aW1lbGluZS1pbWctMDEud2VicFwiIHdpZHRoPXszNzB9IGhlaWdodD17MjUwfSBjbGFzc05hbWU9XCJpbWFnZV9fMSBhYnNvbHV0ZSAtbGVmdC1bMTMuMzMzcmVtXSB0b3AtWzIwcmVtXVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL3RpbWVsaW5lLWltZy0wMi53ZWJwXCIgd2lkdGg9ezU0MH0gaGVpZ2h0PXszNjB9IGNsYXNzTmFtZT1cImltYWdlX18yIGFic29sdXRlIGxlZnQtWzEuMzMzJV0gdG9wLVsxcmVtXVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL3RpbWVsaW5lLWltZy0wMy53ZWJwXCIgd2lkdGg9ezM4MH0gaGVpZ2h0PXs1ODB9IGNsYXNzTmFtZT1cImltYWdlX18zIGFic29sdXRlIGxlZnQtWzMzLjMzMyVdIHRvcC0wXCIgYWx0PVwiYWx0XCIgLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvdGltZWxpbmUtaW1nLTA0LndlYnBcIiB3aWR0aD17NDIwfSBoZWlnaHQ9ezIzMH0gY2xhc3NOYW1lPVwiaW1hZ2VfXzQgYWJzb2x1dGUgbGVmdC1bNTUlXSB0b3AtWzEwcmVtXVwiIGFsdD1cImFsdFwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL3RpbWVsaW5lLWltZy0wNS53ZWJwXCIgd2lkdGg9ezM1MH0gaGVpZ2h0PXszNTB9IGNsYXNzTmFtZT1cImltYWdlX181IGFic29sdXRlIGxlZnQtWzgwJV0gdG9wLVszLjMzM3JlbV1cIiBhbHQ9XCJhbHRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgaC1bMzcwdmhdXCI+PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFudGFDbG91ZHM7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlTGF5b3V0RWZmZWN0IiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJJbWFnZSIsIkNMT1VEUyIsIlRIUkVFIiwiVmFudGFDbG91ZHMiLCJ4IiwieSIsIm1vdXNlc1BvcyIsInNldE1vdXNlc1BvcyIsInZhbnRhRWZmZWN0Iiwic2V0VmFudGFFZmZlY3QiLCJ2YW50YVJlZiIsImlubmVyUmVmIiwibW91c2VNb3ZlSGFuZGxlciIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsInJlZ2lzdGVyUGx1Z2luIiwic2VjdGlvbnMiLCJ1dGlscyIsInRvQXJyYXkiLCJzY3JvbGxUd2VlbiIsInRvIiwieFBlcmNlbnQiLCJlYXNlIiwic2Nyb2xsVHJpZ2dlciIsImlkIiwidHJpZ2dlciIsInBpbiIsInNjcnViIiwiZW5kIiwic3RhcnQiLCJzY2FsZVkiLCJzY2FsZVgiLCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZSIsInRyYW5zZm9ybU9yaWdpbiIsImVsIiwiY3VycmVudCIsIm1vdXNlQ29udHJvbHMiLCJ0b3VjaENvbnRyb2xzIiwiZ3lyb0NvbnRyb2xzIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJza3lDb2xvciIsImNsb3VkQ29sb3IiLCJjbG91ZFNoYWRvd0NvbG9yIiwic3VuQ29sb3IiLCJzdW5HbGFyZUNvbG9yIiwic3VubGlnaHRDb2xvciIsInNwZWVkIiwiZGVzdHJveSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/VantaClouds.jsx\n"));

/***/ })

});