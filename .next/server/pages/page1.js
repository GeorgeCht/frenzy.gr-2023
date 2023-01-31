"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/page1";
exports.ids = ["pages/page1"];
exports.modules = {

/***/ "./components/Blurs.jsx":
/*!******************************!*\
  !*** ./components/Blurs.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\components\\\\Blurs.jsx\";\n\n\n\n\nconst Blurs = () => {\n  const {\n    0: mousePos,\n    1: setMousePos\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    x: 0,\n    y: 0\n  });\n\n  function mouseMoveHandler(e) {\n    setMousePos({\n      x: e.clientX,\n      y: e.clientY\n    });\n  }\n\n  const blobs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {\n    let ctx = gsap__WEBPACK_IMPORTED_MODULE_0___default().context(() => {\n      gsap__WEBPACK_IMPORTED_MODULE_0___default().to(`.blobs`, {\n        y: mousePos.y / 42 + 1,\n        x: mousePos.x / 42 + 1,\n        rotationY: 5 * (mousePos.y / window.innerHeight) - .5,\n        rotationX: 5 * (mousePos.x / window.innerWidth) - .5,\n        scaleY: mousePos.y / 10000 + 1,\n        scaleX: mousePos.x / 10000 + 1,\n        ease: `Power2.easeOut`,\n        transformPerspective: 900,\n        transformOrigin: 'center'\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_0___default().to(`.blobs`, {\n        '--blob-height-multi': mousePos.y / 6000 + .42,\n        ease: `Power1.easeOut`\n      });\n    }, blobs); //return () => ctx.revert()\n  }, [mousePos]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"blobs-container\",\n    ref: blobs,\n    onMouseMove: e => mouseMoveHandler(e),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"blobs\",\n      role: \"presentation\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"blob-rotate\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"blob-move\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"blob\",\n            style: {\n              marginTop: '-30vh',\n              marginLeft: '-20vw'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"blob-rotate\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"blob-move\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"blob\",\n            style: {\n              marginTop: '13.333vh',\n              marginLeft: '-40vw'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"blob-rotate\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"blob-move\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"blob\",\n            style: {\n              marginRight: '-40vw',\n              marginTop: '10vh'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"blob-rotate\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"blob-move\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"blob\",\n            style: {\n              marginTop: '-20vh',\n              marginRight: '-33.333vw'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blurs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBQyxXQUFmO1VBQUEsdUJBQ0U7WUFBSyxTQUFTLEVBQUMsTUFBZjtZQUFzQixLQUFLLEVBQUU7Y0FBRUMsV0FBVyxFQUFFLE9BQWY7Y0FBd0JGLFNBQVMsRUFBRTtZQUFuQztVQUE3QjtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFkRixlQW9CRTtRQUFLLFNBQVMsRUFBQyxhQUFmO1FBQUEsdUJBQ0U7VUFBSyxTQUFTLEVBQUMsV0FBZjtVQUFBLHVCQUNFO1lBQUssU0FBUyxFQUFDLE1BQWY7WUFBc0IsS0FBSyxFQUFFO2NBQUVBLFNBQVMsRUFBRSxPQUFiO2NBQXNCRSxXQUFXLEVBQUU7WUFBbkM7VUFBN0I7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURGO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBcEJGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQStCRCxDQWxFRDs7QUFvRUEsaUVBQWV6QixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9jb21wb25lbnRzL0JsdXJzLmpzeD84ZGY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQmx1cnMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFttb3VzZVBvcywgc2V0TW91c2VQb3NdID0gdXNlU3RhdGUoe1xyXG4gICAgeDogMCxcclxuICAgIHk6IDBcclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGUpIHtcclxuICAgIHNldE1vdXNlUG9zKHtcclxuICAgICAgeDogZS5jbGllbnRYLFxyXG4gICAgICB5OiBlLmNsaWVudFlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGJsb2JzID0gdXNlUmVmKClcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGN0eCA9IGdzYXAuY29udGV4dCgoKSA9PiB7XHJcbiAgICAgIGdzYXAudG8oYC5ibG9ic2AsIHtcclxuICAgICAgICB5OiAoKCBtb3VzZVBvcy55ICkgLyA0MikgKyAxLFxyXG4gICAgICAgIHg6ICgoIG1vdXNlUG9zLnggKSAvIDQyKSArIDEsXHJcbiAgICAgICAgcm90YXRpb25ZOiA1ICogKCBtb3VzZVBvcy55IC8gd2luZG93LmlubmVySGVpZ2h0ICkgLSAuNSxcclxuICAgICAgICByb3RhdGlvblg6IDUgKiAoIG1vdXNlUG9zLnggLyB3aW5kb3cuaW5uZXJXaWR0aCApIC0gLjUsXHJcbiAgICAgICAgc2NhbGVZOiAoKCBtb3VzZVBvcy55ICkgLyAxMDAwMCkgKyAxLFxyXG4gICAgICAgIHNjYWxlWDogKCggbW91c2VQb3MueCApIC8gMTAwMDApICsgMSxcclxuICAgICAgICBlYXNlOiBgUG93ZXIyLmVhc2VPdXRgLFxyXG4gICAgICAgIHRyYW5zZm9ybVBlcnNwZWN0aXZlOiA5MDAsXHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyJ1xyXG4gICAgICB9KVxyXG4gICAgICBnc2FwLnRvKGAuYmxvYnNgLCB7XHJcbiAgICAgICAgJy0tYmxvYi1oZWlnaHQtbXVsdGknOiAoKCBtb3VzZVBvcy55ICkgLyA2MDAwKSArIC40MixcclxuICAgICAgICBlYXNlOiBgUG93ZXIxLmVhc2VPdXRgLFxyXG4gICAgICB9KVxyXG4gICAgfSwgYmxvYnMpXHJcbiAgICAvL3JldHVybiAoKSA9PiBjdHgucmV2ZXJ0KClcclxuICB9LCBbbW91c2VQb3NdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJibG9icy1jb250YWluZXJcIiByZWY9eyBibG9icyB9IG9uTW91c2VNb3ZlPXsgKGUpID0+IG1vdXNlTW92ZUhhbmRsZXIoZSkgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ic1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9iLXJvdGF0ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9iLW1vdmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9iXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnLTMwdmgnLCBtYXJnaW5MZWZ0OiAnLTIwdncnIH19PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvYi1yb3RhdGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvYi1tb3ZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvYlwiIHN0eWxlPXt7IG1hcmdpblRvcDogJzEzLjMzM3ZoJywgbWFyZ2luTGVmdDogJy00MHZ3JyB9fT48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvYi1yb3RhdGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvYi1tb3ZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvYlwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnLTQwdncnLCBtYXJnaW5Ub3A6ICcxMHZoJyB9fT48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvYi1yb3RhdGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvYi1tb3ZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvYlwiIHN0eWxlPXt7IG1hcmdpblRvcDogJy0yMHZoJywgbWFyZ2luUmlnaHQ6ICctMzMuMzMzdncnIH19PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbHVyczsiXSwibmFtZXMiOlsiZ3NhcCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQmx1cnMiLCJtb3VzZVBvcyIsInNldE1vdXNlUG9zIiwieCIsInkiLCJtb3VzZU1vdmVIYW5kbGVyIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwiYmxvYnMiLCJjdHgiLCJjb250ZXh0IiwidG8iLCJyb3RhdGlvblkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInJvdGF0aW9uWCIsImlubmVyV2lkdGgiLCJzY2FsZVkiLCJzY2FsZVgiLCJlYXNlIiwidHJhbnNmb3JtUGVyc3BlY3RpdmUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Blurs.jsx\n");

/***/ }),

/***/ "./pages/page1.js":
/*!************************!*\
  !*** ./pages/page1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page1)\n/* harmony export */ });\n/* harmony import */ var _components_Blurs_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Blurs.jsx */ \"./components/Blurs.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\dev\\\\frenzygr-2023\\\\pages\\\\page1.js\";\n\n\n\nfunction Page1() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n      className: \"blurs-intro\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Blurs_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n      className: \"flex flex-col gap-8 items-center max-w-[1224px] mx-auto\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        className: \"main-heading-1 mx-auto py-[16rem] text-grotesque\",\n        children: [\"We treat each project with \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n          className: \"text-timesnewroman\",\n          children: \"care\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 101\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYWdlMS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFFZSxTQUFTQyxLQUFULEdBQWlCO0VBQzlCLG9CQUNFO0lBQUEsd0JBQ0U7TUFBUyxTQUFTLEVBQUMsYUFBbkI7TUFBQSx1QkFDRSw4REFBQyw2REFBRDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBSUU7TUFBUyxTQUFTLEVBQUMseURBQW5CO01BQUEsdUJBQ0U7UUFBSSxTQUFTLEVBQUMsa0RBQWQ7UUFBQSx1REFBNEY7VUFBRyxTQUFTLEVBQUMsb0JBQWI7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFBNUY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpGO0VBQUEsZ0JBREY7QUFVRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvcGFnZTEuanM/NGYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmx1cnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmx1cnMuanN4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmx1cnMtaW50cm9cIj5cclxuICAgICAgICA8Qmx1cnMgLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC04IGl0ZW1zLWNlbnRlciBtYXgtdy1bMTIyNHB4XSBteC1hdXRvXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW4taGVhZGluZy0xIG14LWF1dG8gcHktWzE2cmVtXSB0ZXh0LWdyb3Rlc3F1ZVwiPldlIHRyZWF0IGVhY2ggcHJvamVjdCB3aXRoIDxpIGNsYXNzTmFtZT1cInRleHQtdGltZXNuZXdyb21hblwiPmNhcmU8L2k+PC9oMT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQmx1cnMiLCJQYWdlMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/page1.js\n");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/page1.js"));
module.exports = __webpack_exports__;

})();