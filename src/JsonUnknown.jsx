import { PropTypes } from 'prop-types';
import React from 'react';

import { jsonDataType } from './dataUtils';

/**
 * Render an unknown JSON value.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonUnknown({ data }) {
    return (
        <pre className="rjo-json-unknown">
            {`Unsupported JSON data (type ${jsonDataType(data)})`}
        </pre>
    );
}

JsonUnknown.propTypes = {
    data: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default JsonUnknown;
