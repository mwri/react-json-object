import { PropTypes } from 'prop-types';
import React from 'react';

/**
 * Container header component.
 *
 * @component
 * @returns {React.ReactElement} component
 */
function ContainerHeader({ jsonOnClick, jsonDisplay }) {
    return (
        <div className="rjo-title-bar">
            <button className="rjo-control" type="button" onClick={jsonOnClick}>
                {jsonDisplay ? (<s>json</s>) : 'json'}
            </button>
        </div>
    );
}

ContainerHeader.propTypes = {
    jsonOnClick: PropTypes.func.isRequired,
    jsonDisplay: PropTypes.bool.isRequired,
};

export default ContainerHeader;
