'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    (0, _classCallCheck3.default)(this, Modal);

    return (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).apply(this, arguments));
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.modalTarget = document.createElement('div');
      this.modalTarget.className = 'edit-modal';

      this.bkgEl = document.createElement('div');
      this.bkgEl.className = 'bkg';

      document.body.appendChild(this.bkgEl);
      document.body.appendChild(this.modalTarget);

      setTimeout(function () {
        _this2.modalTarget.className += ' expand';
      }, 5);

      this._render();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._render();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactDom2.default.unmountComponentAtNode(this.modalTarget);
      document.body.removeChild(this.modalTarget);
      document.body.removeChild(this.bkgEl);
    }
  }, {
    key: '_render',
    value: function _render() {
      _reactDom2.default.render(_react2.default.createElement('div', null, this.props.children, _react2.default.createElement('style', null, '\n          .edit-modal {\n            background: white;\n            width: 50%;\n            top: 50%;\n            transform: translate(50%, -50%);\n            padding: 30px;\n            min-height: 350px;\n            border-radius: 5px;\n            position: fixed;\n            box-shadow: 0px 3px 6px 6px rgba(0, 0, 0, 0.23);\n            opacity: 0;            \n            transition: all 0.8s ease-in-out;\n            padding-bottom: 80px;\n          }\n\n          .edit-modal.expand {\n            opacity: 1;\n          }\n\n          .bkg {\n            background: rgba(0, 0, 0, 0.45);\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            left: 0;\n            top: 0;\n          }\n        ')), this.modalTarget);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('noscript', null);
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = Modal;