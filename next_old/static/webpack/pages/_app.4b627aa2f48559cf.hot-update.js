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

/***/ "./pages/api/db/index.js":
/*!*******************************!*\
  !*** ./pages/api/db/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dbContext\": function() { return /* binding */ dbContext; },\n/* harmony export */   \"default\": function() { return /* binding */ Db_Provider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../firebase/firebase.config */ \"./firebase/firebase.config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nvar dbContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction Db_Provider(param) {\n    var children = param.children;\n    var createCollection = function createCollection() {};\n    var readCollection = function readCollection() {};\n    var setCollection = function setCollection() {};\n    var deleteCollection = function deleteCollection() {};\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), currentCollection = ref[0], setCurentCollection = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var call_firestore = function() {};\n        return call_firestore();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Db_Provider, {\n        value: {\n            currentCollection: currentCollection,\n            createCollection: createCollection,\n            readCollection: readCollection,\n            setCollection: setCollection,\n            deleteCollection: deleteCollection\n        }\n    }, void 0, false, {\n        fileName: \"I:\\\\Kraken\\\\CLIENT\\\\ELODIE\\\\POC\\\\user_account\\\\pages\\\\api\\\\db\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this));\n};\n_s(Db_Provider, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Db_Provider;\nvar _c;\n$RefreshReg$(_c, \"Db_Provider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpRTtBQUNQO0FBQ0g7O0FBRWhELEdBQUssQ0FBQ08sU0FBUyxpQkFBR04sb0RBQWE7QUFFdkIsUUFBUSxDQUFDTyxXQUFXLENBQUMsS0FBWSxFQUFFLENBQUM7UUFBYkMsUUFBUSxHQUFWLEtBQVksQ0FBVkEsUUFBUTtRQUduQ0MsZ0JBQWdCLEdBQXpCLFFBQVEsQ0FBQ0EsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCQyxjQUFjLEdBQXZCLFFBQVEsQ0FBQ0EsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUNuQkMsYUFBYSxHQUF0QixRQUFRLENBQUNBLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEJDLGdCQUFnQixHQUF6QixRQUFRLENBQUNBLGdCQUFnQixHQUFHLENBQUMsQ0FBQzs7SUFMOUIsR0FBSyxDQUE0Q1YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFyRFcsaUJBQWlCLEdBQXlCWCxHQUFZLEtBQW5DWSxtQkFBbUIsR0FBSVosR0FBWTtJQU83REQsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmLEdBQUssQ0FBQ2MsY0FBYyxHQUFHLFFBQVEsR0FBRixDQUFDLENBQUM7UUFFL0IsTUFBTSxDQUFDQSxjQUFjO0lBQ3ZCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLDZFQUNIUixXQUFXO1FBQ1ZTLEtBQUssRUFBRSxDQUFDO1lBQ05ILGlCQUFpQixFQUFqQkEsaUJBQWlCO1lBQ2pCSixnQkFBZ0IsRUFBaEJBLGdCQUFnQjtZQUNoQkMsY0FBYyxFQUFkQSxjQUFjO1lBQ2RDLGFBQWEsRUFBYkEsYUFBYTtZQUNiQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtRQUNsQixDQUFDOzs7Ozs7QUFHUCxDQUFDO0dBekJ1QkwsV0FBVztLQUFYQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS9kYi9pbmRleC5qcz81MDYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi8uLi8uLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWdcIjtcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERiX1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtjdXJyZW50Q29sbGVjdGlvbiwgc2V0Q3VyZW50Q29sbGVjdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbGxlY3Rpb24oKSB7fVxyXG4gIGZ1bmN0aW9uIHJlYWRDb2xsZWN0aW9uKCkge31cclxuICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uKCkge31cclxuICBmdW5jdGlvbiBkZWxldGVDb2xsZWN0aW9uKCkge31cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNhbGxfZmlyZXN0b3JlID0gKCkgPT4ge307XHJcblxyXG4gICAgcmV0dXJuIGNhbGxfZmlyZXN0b3JlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERiX1Byb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgY3VycmVudENvbGxlY3Rpb24sXHJcbiAgICAgICAgY3JlYXRlQ29sbGVjdGlvbixcclxuICAgICAgICByZWFkQ29sbGVjdGlvbixcclxuICAgICAgICBzZXRDb2xsZWN0aW9uLFxyXG4gICAgICAgIGRlbGV0ZUNvbGxlY3Rpb24sXHJcbiAgICAgIH19XHJcbiAgICA+PC9EYl9Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF1dGgiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwiZGJDb250ZXh0IiwiRGJfUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNyZWF0ZUNvbGxlY3Rpb24iLCJyZWFkQ29sbGVjdGlvbiIsInNldENvbGxlY3Rpb24iLCJkZWxldGVDb2xsZWN0aW9uIiwiY3VycmVudENvbGxlY3Rpb24iLCJzZXRDdXJlbnRDb2xsZWN0aW9uIiwiY2FsbF9maXJlc3RvcmUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/db/index.js\n");

/***/ })

});