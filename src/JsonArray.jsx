import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

import ContainerHeader from './ContainerHeader';
import {
    extendDataPath, jsonDataOptsPropType,
    jsonDataPathPropType, jsonDataPropType,
    jsonDataToMd5Sum,
} from './dataUtils';
import Json from './Json'; // eslint-disable-line import/no-cycle

/**
 * Render an array JSON value.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonArray({
    data, path, component, opts,
}) {
    if (data.length === 0) {
        return (
            <div className="rjo-json-container rjo-empty-container rjo-json-array rjo-empty-array">empty</div>
        );
    }

    const [jsonDisplay, setJsonDisplay] = useState(false);

    return (
        <div className="rjo-json-container rjo-json-array">
            {opts.header && (
                <ContainerHeader
                    jsonOnClick={() => setJsonDisplay(!jsonDisplay)}
                    jsonDisplay={jsonDisplay}
                />
            )}

            {jsonDisplay ? (<pre>{JSON.stringify(data, null, 4)}</pre>) : (
                <table>
                    <tbody>
                        { data.map((subData, i) => (
                            <tr key={jsonDataToMd5Sum(subData, i.toString())}>
                                <th className="rjo-container-key rjo-array-index">
                                    {i}
                                </th>
                                <td className="rjo-container-value rjo-array-value">
                                    <Json
                                        data={subData}
                                        path={extendDataPath(path, i)}
                                        component={component}
                                        opts={opts}
                                    />
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            )}
        </div>
    );
}

JsonArray.propTypes = {
    data: PropTypes.arrayOf(jsonDataPropType).isRequired,
    path: jsonDataPathPropType.isRequired,
    component: PropTypes.func.isRequired,
    opts: jsonDataOptsPropType.isRequired,
};

export default JsonArray;
