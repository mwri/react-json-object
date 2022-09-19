"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _dataUtils = require("./dataUtils");

var _Json = _interopRequireDefault(require("./Json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-cycle

/**
 * Render an object JSON value possible.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonObject(_ref) {
  let {
    data,
    path,
    component,
    opts
  } = _ref;

  if (Object.keys(data).length === 0) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "rjo-json-container rjo-empty-container rjo-json-object rjo-empty-object"
    }, "empty");
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rjo-json-container rjo-json-object"
  }, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, Object.keys(data).map(k => /*#__PURE__*/_react.default.createElement("tr", {
    key: k
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: "rjo-container-key rjo-object-key"
  }, k), /*#__PURE__*/_react.default.createElement("td", {
    className: "rjo-container-value rjo-object-value"
  }, /*#__PURE__*/_react.default.createElement(_Json.default, {
    data: data[k],
    path: (0, _dataUtils.extendDataPath)(path, k),
    component: component,
    opts: opts
  })))))));
}

JsonObject.propTypes = {
  data: _propTypes.PropTypes.shape({}).isRequired,
  path: _dataUtils.jsonDataPathPropType.isRequired,
  component: _propTypes.PropTypes.func.isRequired,
  opts: _dataUtils.jsonDataOptsPropType.isRequired
};
var _default = JsonObject;
exports.default = _default;