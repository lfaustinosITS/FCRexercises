function mergeArrays(largeArray, smallArray) {
  if (smallArray.length == 0) {
    return largeArray
  }

  let emptySpaceCount = 0;
  for (let i = largeArray.length - 1; i >= 0; i--) {
    if (largeArray[i] === undefined) {
      emptySpaceCount++;
    } else {
      break;
    }
  }

  if (emptySpaceCount < smallArray.length) {
    throw new Error('There is not enough space in the large array')
  }

  let largeIndex = largeArray.length - smallArray.length - 1;
  let smallIndex = smallArray.length - 1;
  let mergeIndex = largeArray.length - 1;

  while (smallIndex >= 0) {
    if (largeIndex >= 0 && largeArray[largeIndex] > smallArray[smallIndex]) {
      largeArray[mergeIndex] = largeArray[largeIndex];
      largeIndex--;
    } else {
      largeArray[mergeIndex] = smallArray[smallIndex];
      smallIndex--;
    }
    mergeIndex--;
  }
}

module.exports = mergeArrays;

