"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.json.stringify.js");

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

  const [jsonDisplay, setJsonDisplay] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rjo-json-container rjo-json-object"
  }, opts.header && /*#__PURE__*/_react.default.createElement(_ContainerHeader.default, {
    jsonOnClick: () => setJsonDisplay(!jsonDisplay),
    jsonDisplay: jsonDisplay
  }), jsonDisplay ? /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(data, null, 4)) : /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, Object.keys(data).map(k => /*#__PURE__*/_react.default.createElement("tr", {
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