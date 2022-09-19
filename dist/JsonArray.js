"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.to-string.js");

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _dataUtils = require("./dataUtils");

var _Json = _interopRequireDefault(require("./Json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-cycle

/**
 * Render an array JSON value.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonArray(_ref) {
  let {
    data,
    path,
    component,
    opts
  } = _ref;

  if (data.length === 0) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "rjo-json-container rjo-empty-container rjo-json-array rjo-empty-array"
    }, "empty");
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rjo-json-container rjo-json-array"
  }, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, data.map((subData, i) => /*#__PURE__*/_react.default.createElement("tr", {
    key: (0, _dataUtils.jsonDataToMd5Sum)(subData, i.toString())
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: "rjo-container-key rjo-array-index"
  }, i), /*#__PURE__*/_react.default.createElement("td", {
    className: "rjo-container-value rjo-array-value"
  }, /*#__PURE__*/_react.default.createElement(_Json.default, {
    data: subData,
    path: (0, _dataUtils.extendDataPath)(path, i),
    component: component,
    opts: opts
  })))))));
}

JsonArray.propTypes = {
  data: _propTypes.PropTypes.arrayOf(_dataUtils.jsonDataPropType).isRequired,
  path: _dataUtils.jsonDataPathPropType.isRequired,
  component: _propTypes.PropTypes.func.isRequired,
  opts: _dataUtils.jsonDataOptsPropType.isRequired
};
var _default = JsonArray;
exports.default = _default;