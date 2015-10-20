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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var bgImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEX5+fn///8pDrwNAAAAFElEQVQI12NgsP/AQAz+f4CBGAwAJIIdTTn0+w0AAAAASUVORK5CYII=';

	var ImageDiff = (function (_Component) {
	  _inherits(ImageDiff, _Component);

	  _createClass(ImageDiff, null, [{
	    key: 'propTypes',
	    value: {
	      after: _react2['default'].PropTypes.string.isRequired,
	      before: _react2['default'].PropTypes.string.isRequired,
	      height: _react2['default'].PropTypes.number,
	      value: _react2['default'].PropTypes.number,
	      width: _react2['default'].PropTypes.number
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      value: 1
	    },
	    enumerable: true
	  }]);

	  function ImageDiff() {
	    _classCallCheck(this, ImageDiff);

	    _get(Object.getPrototypeOf(ImageDiff.prototype), 'constructor', this).call(this);
	    this.handleImgLoad = this.handleImgLoad.bind(this);
	  }

	  _createClass(ImageDiff, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        height: this.props.height,
	        width: this.props.width
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        height: nextProps.height || this.state.height,
	        width: nextProps.width || this.state.width
	      });
	    }
	  }, {
	    key: 'handleImgLoad',
	    value: function handleImgLoad(ref) {
	      var _this = this;

	      return function () {
	        if (!_this.props.height && !_this.props.width) {
	          var _React$findDOMNode = _react2['default'].findDOMNode(_this.refs[ref]);

	          var height = _React$findDOMNode.height;
	          var width = _React$findDOMNode.width;

	          _this.setState({
	            height: height, width: width
	          });
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'ImageDiff', style: { display: 'inline-block', height: this.state.height, width: this.state.width } },
	        this.props.type === 'difference' ? this.renderDifference() : null,
	        this.props.type === 'fade' ? this.renderFade() : null,
	        this.props.type === 'swipe' ? this.renderSwipe() : null
	      );
	    }
	  }, {
	    key: 'renderDifference',
	    value: function renderDifference() {
	      var style = {
	        position: 'relative'
	      };
	      var beforeStyle = {
	        position: 'absolute',
	        top: 0,
	        left: 0
	      };
	      var afterStyle = _extends({}, beforeStyle);

	      return _react2['default'].createElement(
	        'div',
	        { className: 'ImageDiff_inner--difference', style: style },
	        _react2['default'].createElement(
	          'div',
	          { className: 'ImageDiff__before', style: beforeStyle },
	          _react2['default'].createElement('img', {
	            ref: 'before',
	            src: this.props.before,
	            height: this.props.height,
	            width: this.props.width,
	            onLoad: this.handleImgLoad('before')
	          })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'ImageDiff__after', style: afterStyle },
	          _react2['default'].createElement('img', {
	            ref: 'after',
	            src: this.props.after,
	            height: this.props.height,
	            width: this.props.width,
	            style: { mixBlendMode: 'difference' },
	            onLoad: this.handleImgLoad('after')
	          })
	        )
	      );
	    }
	  }, {
	    key: 'renderFade',
	    value: function renderFade() {
	      var style = {
	        backgroundImage: 'url(' + bgImage + ')',
	        height: this.state.height,
	        margin: 0,
	        position: 'absolute',
	        width: this.state.width
	      };

	      var beforeStyle = _extends({
	        border: '1px solid #f77'
	      }, style);

	      var afterStyle = _extends({
	        border: '1px solid #63c363',
	        opacity: this.props.value
	      }, style);

	      return _react2['default'].createElement(
	        'div',
	        { className: 'ImageDiff__inner--fade', style: style },
	        _react2['default'].createElement(
	          'div',
	          { className: 'ImageDiff__before', style: beforeStyle },
	          _react2['default'].createElement('img', {
	            ref: 'before',
	            src: this.props.before,
	            height: this.props.height,
	            width: this.props.width,
	            onLoad: this.handleImgLoad('before')
	          })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'ImageDiff__after', style: afterStyle },
	          _react2['default'].createElement('img', {
	            ref: 'after',
	            src: this.props.after,
	            height: this.props.height,
	            width: this.props.width,
	            onLoad: this.handleImgLoad('after')
	          })
	        )
	      );
	    }
	  }, {
	    key: 'renderSwipe',
	    value: function renderSwipe() {
	      var style = {
	        backgroundImage: 'url(' + bgImage + ')',
	        height: this.state.height,
	        margin: 0,
	        position: 'absolute',
	        width: this.state.width
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
	        height: this.state.height + 2,
	        margin: 0,
	        overflow: 'hidden',
	        position: 'absolute',
	        right: -2,
	        width: this.state.width * (1 - this.props.value)
	      };

	      return _react2['default'].createElement(
	        'div',
	        { className: 'ImageDiff__inner--swipe', style: style },
	        _react2['default'].createElement(
	          'div',
	          { className: 'ImageDiff__before', style: beforeStyle },
	          _react2['default'].createElement('img', {
	            ref: 'before',
	            src: this.props.before,
	            height: this.props.height,
	            width: this.props.width,
	            onLoad: this.handleImgLoad('before')
	          })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'ImageDiff--swiper', style: swiperStyle },
	          _react2['default'].createElement(
	            'div',
	            { className: 'ImageDiff__after', style: afterStyle },
	            _react2['default'].createElement('img', {
	              ref: 'after',
	              src: this.props.after,
	              height: this.props.height,
	              width: this.props.width,
	              onLoad: this.handleImgLoad('after')
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return ImageDiff;
	})(_react.Component);

	exports['default'] = ImageDiff;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;