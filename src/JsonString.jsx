import { PropTypes } from 'prop-types';
import React from 'react';

/**
 * Render a string JSON value.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonString({ data }) {
    return (
        <div className="rjo-json-value rjo-json-scalar rjo-json-string">
            {data}
        </div>
    );
}

JsonString.propTypes = {
    data: PropTypes.string.isRequired,
};

export default JsonString;
