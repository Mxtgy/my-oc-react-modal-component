"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modale.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Modale = function Modale(_ref) {
  var isActive = _ref.isActive,
    enableClose = _ref.enableClose,
    onClose = _ref.onClose,
    title = _ref.title,
    content = _ref.content,
    titleClass = _ref.titleClass,
    contentClass = _ref.contentClass;
  return /*#__PURE__*/_react.default.createElement("dialog", {
    className: isActive ? "modale show" : "modale"
  }, enableClose ? /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return onClose();
    },
    className: "overlay"
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-container"
  }, enableClose ? /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return onClose();
    },
    className: "close"
  }, "X") : null, title ? /*#__PURE__*/_react.default.createElement("h1", {
    className: titleClass ? titleClass : null
  }, title) : null, content ? /*#__PURE__*/_react.default.createElement("p", {
    className: contentClass ? contentClass : null
  }, content) : null));
};
var _default = Modale;
exports.default = _default;