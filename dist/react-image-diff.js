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

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(2);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _bgPng = __webpack_require__(3);

	var _bgPng2 = _interopRequireDefault(_bgPng);

	var ImageDiff = (function (_Component) {
	  function ImageDiff() {
	    _classCallCheck(this, ImageDiff);

	    _get(Object.getPrototypeOf(ImageDiff.prototype), 'constructor', this).call(this);
	    this.handleImgLoad = this.handleImgLoad.bind(this);
	  }

	  _inherits(ImageDiff, _Component);

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
	        this.props.type === 'fade' ? this.renderFade() : this.renderSwipe()
	      );
	    }
	  }, {
	    key: 'renderFade',
	    value: function renderFade() {
	      var style = {
	        backgroundImage: 'url(' + _bgPng2['default'] + ')',
	        height: this.state.height,
	        margin: 0,
	        position: 'absolute',
	        width: this.state.width
	      };

	      var beforeStyle = (0, _objectAssign2['default'])({
	        border: '1px solid #f77'
	      }, style);

	      var afterStyle = (0, _objectAssign2['default'])({
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
	        backgroundImage: 'url(' + _bgPng2['default'] + ')',
	        height: this.state.height,
	        margin: 0,
	        position: 'absolute',
	        width: this.state.width
	      };

	      var beforeStyle = (0, _objectAssign2['default'])({
	        border: '1px solid #f77'
	      }, style);

	      var afterStyle = (0, _objectAssign2['default'])({
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

	ImageDiff.propTypes = {
	  after: _react2['default'].PropTypes.string.isRequired,
	  before: _react2['default'].PropTypes.string.isRequired,
	  height: _react2['default'].PropTypes.number,
	  value: _react2['default'].PropTypes.number,
	  width: _react2['default'].PropTypes.number
	};

	ImageDiff.defaultProps = {
	  value: 1
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);

		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}

		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEX5+fn///8pDrwNAAAAFElEQVQI12NgsP/AQAz+f4CBGAwAJIIdTTn0+w0AAAAASUVORK5CYII="

/***/ }
/******/ ])
});
;