const mergeArrays = require('./04Merge');

test('Merging two sorted arrays', () => {
  const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
  const smallArray = [0, 2, 4, 6, 8];

  mergeArrays(largeArray, smallArray);

  expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('Handling empty large array', () => {
  const largeArray = new Array(5);
  const smallArray = [0, 2, 4, 6, 8];

  mergeArrays(largeArray, smallArray);

  expect(largeArray).toEqual([0, 2, 4, 6, 8]);
});

test('Handling empty small array', () => {
  const largeArray = [1, 3, 5, 7, 9];
  const smallArray = [];

  mergeArrays(largeArray, smallArray);

  expect(largeArray).toEqual([1, 3, 5, 7, 9]);
});

test('Handling both empty arrays', () => {
  const largeArray = [];
  const smallArray = [];

  mergeArrays(largeArray, smallArray);

  expect(largeArray).toEqual([]);
});

test('Handling large array with no space at the end', () => {
  const largeArray = [1, 3, 5, 7, 9, , ,];
  const smallArray = [0, 2, 4, 6, 8];

  expect(() => mergeArrays(largeArray, smallArray)).toThrow('There is not enough space in the large array');
});
