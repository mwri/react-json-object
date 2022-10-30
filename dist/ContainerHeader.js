"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Container header component.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function ContainerHeader(_ref) {
  let {
    jsonOnClick,
    jsonDisplay
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rjo-title-bar"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "rjo-control",
    type: "button",
    onClick: jsonOnClick
  }, jsonDisplay ? /*#__PURE__*/_react.default.createElement("s", null, "json") : 'json'));
}

ContainerHeader.propTypes = {
  jsonOnClick: _propTypes.PropTypes.func.isRequired,
  jsonDisplay: _propTypes.PropTypes.bool.isRequired
};
var _default = ContainerHeader;
exports.default = _default;