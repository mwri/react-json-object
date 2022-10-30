import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

import ContainerHeader from './ContainerHeader';
import { extendDataPath, jsonDataOptsPropType, jsonDataPathPropType } from './dataUtils';
import Json from './Json'; // eslint-disable-line import/no-cycle

/**
 * Render an object JSON value possible.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonObject({
    data, path, component, opts,
}) {
    if (Object.keys(data).length === 0) {
        return (
            <div className="rjo-json-container rjo-empty-container rjo-json-object rjo-empty-object">empty</div>
        );
    }

    const [jsonDisplay, setJsonDisplay] = useState(false);

    return (
        <div className="rjo-json-container rjo-json-object">
            {opts.header && (
                <ContainerHeader
                    jsonOnClick={() => setJsonDisplay(!jsonDisplay)}
                    jsonDisplay={jsonDisplay}
                />
            )}

            {jsonDisplay ? (<pre>{JSON.stringify(data, null, 4)}</pre>) : (
                <table>
                    <tbody>
                        { Object.keys(data).map((k) => (
                            <tr key={k}>
                                <th className="rjo-container-key rjo-object-key">
                                    {k}
                                </th>
                                <td className="rjo-container-value rjo-object-value">
                                    <Json
                                        data={data[k]}
                                        path={extendDataPath(path, k)}
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

JsonObject.propTypes = {
    data: PropTypes.shape({}).isRequired,
    path: jsonDataPathPropType.isRequired,
    component: PropTypes.func.isRequired,
    opts: jsonDataOptsPropType.isRequired,
};

export default JsonObject;
