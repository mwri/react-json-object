"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dataUtils = require("./dataUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a null JSON value.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonNull(_ref) {
  let {
    opts
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rjo-json-json rjo-json-scalar rjo-json-null"
  }, opts.null);
}

JsonNull.propTypes = {
  opts: _dataUtils.jsonDataOptsPropType.isRequired
};
var _default = JsonNull;
exports.default = _default;