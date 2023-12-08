function flattenImperative(oldObject, parentName = '') {
    const result = {};
    if (!oldObject) { return result }
    for (const key in oldObject) {
        const value = oldObject[key];
        const propName = parentName ? `${parentName}_${key}` : key;

        if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            Object.assign(result, flattenImperative(value, propName));
        } else {
            result[propName] = value;
        }
    }

    return result;
};

function flattenFunctional(oldObject, parentName = '') {
    if (!oldObject) { return {} }
    return Object.keys(oldObject).reduce((result, key) => {
        const value = oldObject[key];
        const propName = parentName ? `${parentName}_${key}` : key;

        if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            return { ...result, ...flattenFunctional(value, propName) };
        } else {
            return { ...result, [propName]: value };
        }
    }, {});
};

module.exports = { flattenFunctional, flattenImperative };