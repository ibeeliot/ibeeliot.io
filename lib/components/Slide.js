'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Slide.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = function Wrapper(props) {
  return _react2.default.createElement(
    'div',
    {
      className: props.className,
      style: Object.assign({}, props.style, {
        height: props.height,
        touchAction: 'none',
        overflow: 'hidden'
      })
    },
    props.children
  );
};

var Slide = function (_React$Component) {
  _inherits(Slide, _React$Component);

  function Slide() {
    _classCallCheck(this, Slide);

    return _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).apply(this, arguments));
  }

  _createClass(Slide, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Wrapper,
        _extends({}, this.props, {
          style: Object.assign({}, this.props.style, {
            height: this.props.height,
            touchAction: 'none',
            overflow: 'hidden'
          })
        }),
        this.props.children
      );
    }
  }]);

  return Slide;
}(_react2.default.Component);

Slide.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  height: _propTypes2.default.string
};
Slide.defaultProps = {
  height: '100%',
  className: ''
};


module.exports = Slide;