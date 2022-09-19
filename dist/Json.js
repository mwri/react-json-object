"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _dataUtils = require("./dataUtils");

var _JsonArray = _interopRequireDefault(require("./JsonArray"));

var _JsonBoolean = _interopRequireDefault(require("./JsonBoolean"));

var _JsonNull = _interopRequireDefault(require("./JsonNull"));

var _JsonNumber = _interopRequireDefault(require("./JsonNumber"));

var _JsonObject = _interopRequireDefault(require("./JsonObject"));

var _JsonString = _interopRequireDefault(require("./JsonString"));

var _JsonUnknown = _interopRequireDefault(require("./JsonUnknown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-cycle
// eslint-disable-line import/no-cycle
function defaultComponent(dataType) {
  if (dataType === 'object') {
    return _JsonObject.default;
  }

  if (dataType === 'array') {
    return _JsonArray.default;
  }

  if (dataType === 'string') {
    return _JsonString.default;
  }

  if (dataType === 'number') {
    return _JsonNumber.default;
  }

  if (dataType === 'boolean') {
    return _JsonBoolean.default;
  }

  if (dataType === 'null') {
    return _JsonNull.default;
  }

  return _JsonUnknown.default;
}
/**
 * Render some arbitrary JSON.
 *
 * @component
 * @returns {React.ReactElement} component
 */


function Json(_ref) {
  let {
    data,
    path,
    component,
    opts
  } = _ref;
  const opts2 = opts;

  if (opts2.array_path_classes === undefined) {
    opts2.array_path_classes = 'numbered_and_unnumbered';
  }

  if (opts2.true === undefined) {
    opts2.true = 'true';
  }

  if (opts2.false === undefined) {
    opts2.false = 'false';
  }

  if (opts2.null === undefined) {
    opts2.null = 'none';
  }

  const classNames = ['rjo-json'].concat((0, _dataUtils.dataPathToPrefixedClassNames)(path, 'rjo-path', opts2.array_path_classes));

  if (path.length === 0) {
    classNames.push('rjo-root');
  }

  const propDataType = (0, _dataUtils.jsonDataType)(data);
  const component2 = component || defaultComponent;
  let JsonComponent = component2(propDataType, path, data);

  if (JsonComponent === undefined) {
    JsonComponent = defaultComponent(propDataType, path, data);
  }

  if (JsonComponent === null) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames.join(' ')
  }, /*#__PURE__*/_react.default.createElement(JsonComponent, {
    data: data,
    path: path,
    component: component2,
    opts: opts2
  }));
}

Json.propTypes = {
  data: _dataUtils.jsonDataPropType.isRequired,
  path: _dataUtils.jsonDataPathPropType,
  component: _propTypes.PropTypes.func,
  opts: _dataUtils.jsonDataOptsPropType
};
Json.defaultProps = {
  path: [],
  component: null,
  opts: {}
};
var _default = Json;
exports.default = _default;