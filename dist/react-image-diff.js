(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ImageDiff"] = factory(require("react"));
	else
		root["ImageDiff"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var bgImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEX5+fn///8pDrwNAAAAFElEQVQI12NgsP/AQAz+f4CBGAwAJIIdTTn0+w0AAAAASUVORK5CYII=';

	var ImageDiff = function (_Component) {
	  _inherits(ImageDiff, _Component);

	  function ImageDiff() {
	    _classCallCheck(this, ImageDiff);

	    var _this = _possibleConstructorReturn(this, (ImageDiff.__proto__ || Object.getPrototypeOf(ImageDiff)).call(this));

	    _this.renderFade = function (height, width) {
	      var style = {
	        backgroundImage: 'url(' + bgImage + ')',
	        height: height,
	        margin: 0,
	        position: 'absolute',
	        width: width
	      };

	      var beforeStyle = _extends({
	        border: '1px solid #f77'
	      }, style);

	      var afterStyle = _extends({
	        border: '1px solid #63c363',
	        opacity: 1 - _this.props.value
	      }, style);

	      return _react2.default.createElement(
	        'div',
	        { className: 'ImageDiff__inner--fade', style: style },
	        _react2.default.createElement(
	          'div',
	          { className: 'ImageDiff__before', style: beforeStyle },
	          _react2.default.createElement('img', {
	            src: _this.props.before,
	            style: {
	              maxHeight: height,
	              maxWidth: width
	            },
	            onLoad: function onLoad(e) {
	              return _this.handleImgLoad(e, 'Before');
	            }
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ImageDiff__after', style: afterStyle },
	          _react2.default.createElement('img', {
	            src: _this.props.after,
	            style: {
	              maxHeight: height,
	              maxWidth: width
	            },
	            onLoad: function onLoad(e) {
	              return _this.handleImgLoad(e, 'After');
	            }
	          })
	        )
	      );
	    };

	    _this.handleImgLoad = _this.handleImgLoad.bind(_this);
	    _this.getScaledDimensions = _this.getScaledDimensions.bind(_this);

	    _this.state = {
	      naturalWidthBefore: null,
	      naturalHeightBefore: null,
	      naturalWidthAfter: null,
	      naturalHeightAfter: null
	    };
	    return _this;
	  }

	  _createClass(ImageDiff, [{
	    key: 'handleImgLoad',
	    value: function handleImgLoad(e, type) {
	      var _setState;

	      var _e$target = e.target,
	          naturalHeight = _e$target.naturalHeight,
	          naturalWidth = _e$target.naturalWidth;

	      this.setState((_setState = {}, _defineProperty(_setState, 'naturalHeight' + type, naturalHeight), _defineProperty(_setState, 'naturalWidth' + type, naturalWidth), _setState));
	    }
	  }, {
	    key: 'getScaledDimensions',
	    value: function getScaledDimensions() {
	      var getDimensions = function getDimensions(maxHeight, maxWidth, naturalHeight, naturalWidth) {
	        var heightRatio = typeof maxHeight !== 'undefined' ? naturalHeight / maxHeight : 1;
	        var widthRatio = typeof maxWidth !== 'undefined' ? naturalWidth / maxWidth : 1;

	        // Use max to prevent scaling up the image
	        var divisor = Math.max(1, widthRatio);
	        if (widthRatio < heightRatio) {
	          // fit to height
	          divisor = Math.max(1, heightRatio);
	        }

	        return {
	          width: naturalWidth / divisor,
	          height: naturalHeight / divisor
	        };
	      };

	      var _state = this.state,
	          naturalWidthBefore = _state.naturalWidthBefore,
	          naturalHeightBefore = _state.naturalHeightBefore,
	          naturalWidthAfter = _state.naturalWidthAfter,
	          naturalHeightAfter = _state.naturalHeightAfter;
	      var _props = this.props,
	          maxHeight = _props.width,
	          maxWidth = _props.height;


	      var height = 0;
	      var width = 0;
	      var heightBefore = 0;
	      var widthBefore = 0;
	      var heightAfter = 0;
	      var widthAfter = 0;

	      if (naturalHeightBefore && naturalHeightAfter) {
	        var _getDimensions = getDimensions(maxHeight, maxWidth, naturalHeightBefore, naturalWidthBefore);

	        heightBefore = _getDimensions.height;
	        widthBefore = _getDimensions.width;

	        var _getDimensions2 = getDimensions(maxHeight, maxWidth, naturalHeightAfter, naturalWidthAfter);

	        heightAfter = _getDimensions2.height;
	        widthAfter = _getDimensions2.width;

	        height = Math.max(heightBefore, heightAfter);
	        width = Math.max(widthBefore, widthAfter);
	      }

	      return {
	        height: height,
	        width: width,
	        heightBefore: heightBefore,
	        widthBefore: widthBefore,
	        heightAfter: heightAfter,
	        widthAfter: widthAfter
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _getScaledDimensions = this.getScaledDimensions(),
	          height = _getScaledDimensions.height,
	          width = _getScaledDimensions.width;

	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'ImageDiff',
	          style: {
	            display: 'inline-block',
	            height: height,
	            width: width
	          }
	        },
	        this.props.type === 'difference' ? this.renderDifference(height, width) : null,
	        this.props.type === 'fade' ? this.renderFade(height, width) : null,
	        this.props.type === 'swipe' ? this.renderSwipe(height, width) : null
	      );
	    }
	  }, {
	    key: 'renderDifference',
	    value: function renderDifference(height, width) {
	      var _this2 = this;

	      var style = {
	        position: 'relative'
	      };
	      var beforeStyle = {
	        position: 'absolute',
	        top: 0,
	        left: 0
	      };
	      var afterStyle = _extends({}, beforeStyle);

	      return _react2.default.createElement(
	        'div',
	        { className: 'ImageDiff_inner--difference', style: style },
	        _react2.default.createElement(
	          'div',
	          { className: 'ImageDiff__before', style: beforeStyle },
	          _react2.default.createElement('img', {
	            src: this.props.before,
	            style: {
	              maxHeight: height,
	              maxWidth: width
	            },
	            onLoad: function onLoad(e) {
	              return _this2.handleImgLoad(e, 'Before');
	            }
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ImageDiff__after', style: afterStyle },
	          _react2.default.createElement('img', {
	            src: this.props.after,
	            style: {
	              maxHeight: height,
	              maxWidth: width,
	              mixBlendMode: 'difference'
	            },
	            onLoad: function onLoad(e) {
	              return _this2.handleImgLoad(e, 'After');
	            }
	          })
	        )
	      );
	    }
	  }, {
	    key: 'renderSwipe',
	    value: function renderSwipe(height, width) {
	      var _this3 = this;

	      var style = {
	        backgroundImage: 'url(' + bgImage + ')',
	        height: height,
	        margin: 0,
	        position: 'absolute',
	        width: width
	      };

	      var beforeStyle = _extends({
	        border: '1px solid #f77'
	      }, style);

	      var afterStyle = _extends({
	        border: '1px solid #63c363',
	        right: 0
	      }, style);

	      var swiperStyle = {
	        borderLeft: '1px solid #999',
	        height: height + 2,
	        margin: 0,
	        overflow: 'hidden',
	        position: 'absolute',
	        right: -2,
	        width: width * (1 - this.props.value)
	      };

	      return _react2.default.createElement(
	        'div',
	        { className: 'ImageDiff__inner--swipe', style: style },
	        _react2.default.createElement(
	          'div',
	          { className: 'ImageDiff__before', style: beforeStyle },
	          _react2.default.createElement('img', {
	            src: this.props.before,
	            style: {
	              maxHeight: height,
	              maxWidth: width
	            },
	            onLoad: function onLoad(e) {
	              return _this3.handleImgLoad(e, 'Before');
	            }
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ImageDiff--swiper', style: swiperStyle },
	          _react2.default.createElement(
	            'div',
	            { className: 'ImageDiff__after', style: afterStyle },
	            _react2.default.createElement('img', {
	              src: this.props.after,
	              style: {
	                maxHeight: height,
	                maxWidth: width
	              },
	              onLoad: function onLoad(e) {
	                return _this3.handleImgLoad(e, 'After');
	              }
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return ImageDiff;
	}(_react.Component);

	ImageDiff.propTypes = {
	  after: _react.PropTypes.string.isRequired,
	  before: _react.PropTypes.string.isRequired,
	  height: _react.PropTypes.number,
	  type: _react.PropTypes.string.isRequired,
	  value: _react.PropTypes.number,
	  width: _react.PropTypes.number
	};

	ImageDiff.defaultProps = {
	  value: 1
	};

	module.exports = ImageDiff;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ])
});
;