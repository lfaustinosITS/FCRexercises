function set(obj, path, value) {
    const keys = path.split('.');
    let currentObj = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];

        if (!currentObj[key]) {
            currentObj[key] = {};
        } else if (typeof currentObj[key] !== 'object') {
            throw new Error(`Unable to set property '${keys[i + 1]}' on non-object value at path '${keys.slice(0, i + 1).join('.')}'`);
        }

        currentObj = currentObj[key];
    }

    currentObj[keys[keys.length - 1]] = value;
}

module.exports = set