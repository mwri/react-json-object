import { PropTypes } from 'prop-types';
import React from 'react';

/**
 * Render a number JSON value.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonNumber({ data }) {
    return (
        <div className="rjo-json-value rjo-json-scalar rjo-json-number">
            {data}
        </div>
    );
}

JsonNumber.propTypes = {
    data: PropTypes.number.isRequired,
};

export default JsonNumber;
