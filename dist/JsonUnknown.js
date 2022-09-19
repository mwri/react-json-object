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
 * Render an unknown JSON value.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonUnknown(_ref) {
  let {
    data
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("pre", {
    className: "rjo-json-unknown"
  }, "Unsupported JSON data (type ".concat((0, _dataUtils.jsonDataType)(data), ")"));
}

JsonUnknown.propTypes = {
  data: _propTypes.PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types

};
var _default = JsonUnknown;
exports.default = _default;