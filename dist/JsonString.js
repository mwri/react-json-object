"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a string JSON value.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonString(_ref) {
  let {
    data
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rjo-json-value rjo-json-scalar rjo-json-string"
  }, data);
}

JsonString.propTypes = {
  data: _propTypes.PropTypes.string.isRequired
};
var _default = JsonString;
exports.default = _default;