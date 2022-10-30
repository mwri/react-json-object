"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.json.stringify.js");

require("core-js/modules/es.regexp.to-string.js");

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _ContainerHeader = _interopRequireDefault(require("./ContainerHeader"));

var _dataUtils = require("./dataUtils");

var _Json = _interopRequireDefault(require("./Json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

  const [jsonDisplay, setJsonDisplay] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rjo-json-container rjo-json-array"
  }, opts.header && /*#__PURE__*/_react.default.createElement(_ContainerHeader.default, {
    jsonOnClick: () => setJsonDisplay(!jsonDisplay),
    jsonDisplay: jsonDisplay
  }), jsonDisplay ? /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(data, null, 4)) : /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, data.map((subData, i) => /*#__PURE__*/_react.default.createElement("tr", {
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