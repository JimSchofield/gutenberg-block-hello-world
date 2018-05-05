/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    RichText = _wp$blocks.RichText,\n    InspectorControls = _wp$blocks.InspectorControls,\n    ColorPalette = _wp$blocks.ColorPalette,\n    MediaUpload = _wp$blocks.MediaUpload;\n\n\nregisterBlockType('firstgutyblocks/hero-image', {\n    title: \"Hero Image Block\",\n    icon: 'format-image',\n    category: 'common',\n\n    attributes: {\n        textString: {\n            type: 'array',\n            source: 'children',\n            selector: 'h2'\n        },\n        fontColor: {\n            type: 'string',\n            default: null // let's get rid of the annoying orange\n        },\n        backgroundImage: {\n            type: 'string',\n            default: null // no image by default!\n        }\n    },\n\n    edit: function edit(props) {\n        var setAttributes = props.setAttributes,\n            attributes = props.attributes,\n            className = props.className,\n            focus = props.focus;\n        var _props$attributes = props.attributes,\n            fontColor = _props$attributes.fontColor,\n            overlayColor = _props$attributes.overlayColor,\n            backgroundImage = _props$attributes.backgroundImage;\n\n\n        function onTextChange(changes) {\n            setAttributes({\n                textString: changes\n            });\n        }\n\n        function onTextColorChange(changes) {\n            setAttributes({\n                fontColor: changes\n            });\n        }\n\n        function onOverlayColorChange(changes) {\n            setAttributes({\n                overlayColor: changes\n            });\n        }\n\n        function onImageSelect(imageObject) {\n            setAttributes({\n                backgroundImage: imageObject.sizes.full.url\n            });\n        }\n\n        return [React.createElement(\n            InspectorControls,\n            null,\n            React.createElement(\n                'div',\n                null,\n                React.createElement(\n                    'strong',\n                    null,\n                    'Select a font color:'\n                ),\n                React.createElement(ColorPalette, {\n                    value: fontColor,\n                    onChange: onTextColorChange\n                })\n            ),\n            React.createElement(\n                'div',\n                null,\n                React.createElement(\n                    'strong',\n                    null,\n                    'Select an overlay color:'\n                ),\n                React.createElement(ColorPalette, {\n                    value: overlayColor,\n                    onChange: onOverlayColorChange\n                })\n            ),\n            React.createElement(\n                'div',\n                null,\n                React.createElement(\n                    'strong',\n                    null,\n                    'Select a background image:'\n                ),\n                React.createElement(MediaUpload, {\n                    onSelect: onImageSelect,\n                    type: 'image',\n                    value: backgroundImage,\n                    render: function render(_ref) {\n                        var open = _ref.open;\n                        return React.createElement(\n                            'button',\n                            { onClick: open },\n                            'Upload Image!'\n                        );\n                    }\n                })\n            )\n        ), React.createElement(\n            'div',\n            {\n                className: className,\n                style: {\n                    backgroundImage: 'url(' + backgroundImage + ')',\n                    backgroundSize: 'cover',\n                    backgroundPosition: 'center'\n                } },\n            React.createElement('div', {\n                className: 'overlay',\n                style: { background: overlayColor }\n            }),\n            React.createElement(RichText, {\n                tagName: 'h2',\n                className: 'content',\n                value: attributes.textString,\n                onChange: onTextChange,\n                placeholder: 'Enter your text here!',\n                style: { color: fontColor }\n            })\n        )];\n    },\n    save: function save(props) {\n        var attributes = props.attributes,\n            className = props.className;\n        var _props$attributes2 = props.attributes,\n            fontColor = _props$attributes2.fontColor,\n            backgroundImage = _props$attributes2.backgroundImage;\n\n\n        return React.createElement(\n            'div',\n            {\n                className: className,\n                style: {\n                    backgroundImage: 'url(' + backgroundImage + ')',\n                    backgroundSize: 'cover',\n                    backgroundPosition: 'center'\n                } },\n            React.createElement('div', { className: 'overlay' }),\n            React.createElement(\n                'h2',\n                { 'class': 'content', style: { color: fontColor } },\n                attributes.textString\n            )\n        );\n    }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });