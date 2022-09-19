import { PropTypes } from 'prop-types';
import React from 'react';

import {
    dataPathToPrefixedClassNames, jsonDataOptsPropType,
    jsonDataPathPropType, jsonDataPropType,
    jsonDataType,
} from './dataUtils';
import JsonArray from './JsonArray'; // eslint-disable-line import/no-cycle
import JsonBoolean from './JsonBoolean';
import JsonNull from './JsonNull';
import JsonNumber from './JsonNumber';
import JsonObject from './JsonObject'; // eslint-disable-line import/no-cycle
import JsonString from './JsonString';
import JsonUnknown from './JsonUnknown';

function defaultComponent(dataType) {
    if (dataType === 'object') { return JsonObject; }
    if (dataType === 'array') { return JsonArray; }
    if (dataType === 'string') { return JsonString; }
    if (dataType === 'number') { return JsonNumber; }
    if (dataType === 'boolean') { return JsonBoolean; }
    if (dataType === 'null') { return JsonNull; }

    return JsonUnknown;
}

/**
 * Render some arbitrary JSON.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function Json({
    data, path, component, opts,
}) {
    const opts2 = opts;
    if (opts2.array_path_classes === undefined) { opts2.array_path_classes = 'numbered_and_unnumbered'; }
    if (opts2.true === undefined) { opts2.true = 'true'; }
    if (opts2.false === undefined) { opts2.false = 'false'; }
    if (opts2.null === undefined) { opts2.null = 'none'; }

    const classNames = ['rjo-json'].concat(dataPathToPrefixedClassNames(path, 'rjo-path', opts2.array_path_classes));
    if (path.length === 0) { classNames.push('rjo-root'); }

    const propDataType = jsonDataType(data);
    const component2 = component || defaultComponent;

    let JsonComponent = component2(propDataType, path, data);
    if (JsonComponent === undefined) {
        JsonComponent = defaultComponent(propDataType, path, data);
    }

    if (JsonComponent === null) { return null; }

    return (
        <div className={classNames.join(' ')}>
            <JsonComponent
                data={data}
                path={path}
                component={component2}
                opts={opts2}
            />
        </div>
    );
}

Json.propTypes = {
    data: jsonDataPropType.isRequired,
    path: jsonDataPathPropType,
    component: PropTypes.func,
    opts: jsonDataOptsPropType,
};

Json.defaultProps = {
    path: [],
    component: null,
    opts: {},
};

export default Json;
