import MD5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

/**
 * Return a string describing the data type.
 *
 * Returns 'object', 'array', 'string', 'number', 'boolean', 'null', 'undefined'
 * at least.
 *
 * @param {any} data Any data/value.
 * @returns {string} A word describing the type.
 */
function jsonDataType(data) {
    return ({}).toString.call(data).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

/**
 * A React prop type validator factory for the JSON data property.
 *
 * The resultant validator accepts any JSON serialisable type. Specify
 * isRequired as true to generate a required property validator or false
 * to generate an optional property validator.
 *
 * @param {boolean} isRequired Is prop required?
 * @returns {Function} A React property validator function.
 */
function jsonDataPropTypeFactory(isRequired) {
    return function jsonDataPropType(props, propName) {
        const propVal = props[propName];

        if (propVal === undefined) {
            if (isRequired) {
                throw new Error(`${propName} is required`);
            }
        } else {
            const propType = jsonDataType(propVal);

            if (!['object', 'array', 'string', 'number', 'boolean', 'null'].includes(propType)) {
                return new Error(`${propName} must be a JSON serialisable type (${propType} is not valid)`);
            }
        }

        return undefined;
    };
}

/**
 * A React prop type validator for the JSON data path used by the React components.
 */
const jsonDataPropType = jsonDataPropTypeFactory(false);
jsonDataPropType.isRequired = jsonDataPropTypeFactory(true);

/**
 * A React prop type validator for the JSON data path used by the React components.
 */
const jsonDataPathPropType = PropTypes.arrayOf(
    PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
);

/**
 * A React prop type validator for the JSON data options used by the React components.
 */
const jsonDataOptsPropType = PropTypes.shape({
    array_path_classes: PropTypes.string,
    true_text: PropTypes.node,
    false_text: PropTypes.node,
    null_text: PropTypes.node,
});

/**
 * Return a hash for a JSON serialisable structure.
 *
 * @param {any} data Any data/value.
 * @returns {string} MD5 sum as a string.
 */
function jsonDataToMd5Sum(data, extra = undefined) {
    const hashableData = JSON.stringify(data);

    const dataPrefix = extra === undefined
        ? `${jsonDataType(data)} `
        : `${jsonDataType(data)} ${extra} `;

    return MD5(dataPrefix + hashableData).toString();
}

/**
 * Return a array of prefixed CSS class name for the given (array of strings) path.
 *
 * By default numbered and unnumbered classes will be generated for array indexes. An example of
 * a numbered index class would be "prefix-aaa-3-20-d", where as an unnumbered index class would
 * be "prefix-aaa-3-20-d". Setting the optional "arrays" parameter to "numbered" or "unnumbered"
 * will restrict classes to just one or the other.
 *
 * @param {Array} path Array of strings and numbers, as used/generated/maintained by the JSON react components.
 * @param {string} prefix The prefix to apply to all classes.
 * @param {string} arrays Optionally set to "numbered" or "unnumbered", see above.
 * @returns {Array} Array of prefixed class names to apply to the component rendering the class.
 */
function dataPathToPrefixedClassNames(path, prefix, arrays = 'numbered_and_unnumbered') {
    let classNames = [prefix];
    for (const pe of path) { // eslint-disable-line no-restricted-syntax
        const newClassNames = [];
        for (const cn of classNames) { // eslint-disable-line no-restricted-syntax
            if (typeof pe === 'number') {
                if (arrays !== 'numbered') { newClassNames.push(`${cn}-n`); }
                if (arrays !== 'unnumbered') { newClassNames.push(`${cn}-${pe}`); }
            } else {
                newClassNames.push(`${cn}-${pe}`);
            }
        }

        classNames = newClassNames;
    }

    return classNames;
}

/**
 * Given a path, return an extended path.
 *
 * if the given path is null, then null is returned.
 *
 * @param {Array} path Array of strings, as used/generated/maintained by the JSON react components.
 * @param {(string|number)} pathExt extension, may be a string or number.
 * @returns {string} A new path, extended to include the new path element.
 */
function extendDataPath(path, pathExt) {
    return path.concat(pathExt);
}

export {
    dataPathToPrefixedClassNames,
    extendDataPath,
    jsonDataOptsPropType,
    jsonDataPathPropType,
    jsonDataPropType,
    jsonDataToMd5Sum,
    jsonDataType,
};
