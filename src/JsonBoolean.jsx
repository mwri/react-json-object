import { PropTypes } from 'prop-types';
import React from 'react';

import { jsonDataOptsPropType } from './dataUtils';

/**
 * Render a boolean JSON value.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonBoolean({ data, opts }) {
    return (
        <div className="rjo-json-value rjo-json-scalar rjo-json-boolean">
            {data ? opts.true : opts.false}
        </div>
    );
}

JsonBoolean.propTypes = {
    data: PropTypes.bool.isRequired,
    opts: jsonDataOptsPropType.isRequired,
};

export default JsonBoolean;
