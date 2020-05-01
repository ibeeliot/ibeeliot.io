'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  collapsed: {
    display: 'none'
  },
  expanded: {
    display: 'block',
    border: '1px solid red',
    zIndex: '40',
    position: 'absolute'
  },
  buttonStyle: {
    display: 'block',
    border: '2px solid #ffffffd9',
    zIndex: '30',
    color: 'rgba(255, 255, 255, 0.589)',
    height: '5rem',
    padding: '1rem 3rem 8rem 3rem',
    width: '18rem',
    borderRadius: '5px',
    fontSize: '3em',
    position: 'absolute',
    background: 'none',
    top: '-4em',
    left: '-7em',
    transition: 'all 500ms ease-in-out'
  }
};

var Collapse = function Collapse(props) {
  var _useState = (0, _react.useState)(props.collapsed),
      _useState2 = _slicedToArray(_useState, 2),
      isCollapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var expanded = props.expanded,
      setExpanded = props.setExpanded;

  var toggleCollapse = function toggleCollapse() {
    setCollapsed(!isCollapsed);
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'button',
      {
        style: style.buttonStyle,
        onClick: function onClick() {
          setExpanded();
          toggleCollapse();
        }
      },
      isCollapsed ? 'A little more' : 'A little less'
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'collapse-content',
        style: isCollapsed ? style.collapsed : style.expanded,
        'aria-expanded': isCollapsed
      },
      props.children
    )
  );
};

exports.default = Collapse;