import React from 'react';

import { jsonDataOptsPropType } from './dataUtils';

/**
 * Render a null JSON value.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function JsonNull({ opts }) {
    return (
        <div className="rjo-json-json rjo-json-scalar rjo-json-null">
            {opts.null}
        </div>
    );
}

JsonNull.propTypes = {
    opts: jsonDataOptsPropType.isRequired,
};

export default JsonNull;
