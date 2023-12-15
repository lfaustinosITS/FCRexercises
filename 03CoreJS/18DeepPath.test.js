
const set = require('./18DeepPath');

describe('set function', () => {
  test('should set deeply nested property in an empty object', () => {
    const obj = {};
    set(obj, 'path.to.deeply.nested.property', 42);
    expect(obj).toEqual({ path: { to: { deeply: { nested: { property: 42 } } } } });
  });

  test('should set deeply nested property in an existing object', () => {
    const existingObj = { path: { to: { existing: {} } } };
    set(existingObj, 'path.to.existing.property', 'new value');
    expect(existingObj).toEqual({ path: { to: { existing: { property: 'new value' } } } });
  });

  test('should throw an error when trying to set a property on a non-object value', () => {
    const invalidObj = { path: 'not an object' };
    expect(() => set(invalidObj, 'path.to.deeply.nested.property', 42)).toThrowError(
      "Unable to set property 'to' on non-object value at path 'path'"
    );
  });

  test('should set property on an existing object value', () => {
    const validObj = { path: { to: { existing: {} } } };
    set(validObj, 'path.to.existing.property', 'new value');
    expect(validObj).toEqual({ path: { to: { existing: { property: 'new value' } } } });
  });
});
