"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _dataUtils = require("./dataUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a boolean JSON value.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonBoolean(_ref) {
  let {
    data,
    opts
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rjo-json-value rjo-json-scalar rjo-json-boolean"
  }, data ? opts.true : opts.false);
}

JsonBoolean.propTypes = {
  data: _propTypes.PropTypes.bool.isRequired,
  opts: _dataUtils.jsonDataOptsPropType.isRequired
};
var _default = JsonBoolean;
exports.default = _default;