const { flattenArrayIterative, flattenArrayRecursive } = require('./09FlattenArray');

describe('flattenArrayIterative', () => {
  it('should flatten an array correctly under normal conditions', () => {
    const input = [1, 2, 3, [4, 5, [6, [[7]], 8], [9, 10]]];
    const flattenedArray = flattenArrayIterative(input);
    
    expect(flattenedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should handle gracefully when the input array is already flat', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const flattenedArray = flattenArrayIterative(input);
    
    expect(flattenedArray).toEqual(input);
  });

  it('should handle gracefully when the input array is empty', () => {
    const input = [];
    const flattenedArray = flattenArrayIterative(input);
    
    expect(flattenedArray).toEqual([]);
  });

  it('should handle gracefully when the input array is null', () => {
    const input = null;
    const flattenedArray = flattenArrayIterative(input);
    
    expect(flattenedArray).toEqual([]);
  });

  it('should handle gracefully when the input array is undefined', () => {
    const input = undefined;
    const flattenedArray = flattenArrayIterative(input);
    
    expect(flattenedArray).toEqual([]);
  });

  it('should handle gracefully when the input array contains nested null or undefined values', () => {
    const input = [1, [2, null, 3, [null, undefined, 4], 5, 6], 7];
    const flattenedArray = flattenArrayIterative(input);
    
    expect(flattenedArray).toEqual([1, 2, null, 3, null, undefined, 4, 5, 6, 7]);
  });
});

describe('flattenArrayRecursive', () => {
    it('should flatten an array correctly under normal conditions', () => {
      const input = [1, 2, 3, [4, 5, [6, [[7]], 8], [9, 10]]];
      const flattenedArray = flattenArrayRecursive(input);
      
      expect(flattenedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  
    it('should handle gracefully when the input array is already flat', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const flattenedArray = flattenArrayRecursive(input);
      
      expect(flattenedArray).toEqual(input);
    });
  
    it('should handle gracefully when the input array is empty', () => {
      const input = [];
      const flattenedArray = flattenArrayRecursive(input);
      
      expect(flattenedArray).toEqual([]);
    });
  
    it('should handle gracefully when the input array is null', () => {
      const input = null;
      const flattenedArray = flattenArrayRecursive(input);
      
      expect(flattenedArray).toEqual([]);
    });
  
    it('should handle gracefully when the input array is undefined', () => {
      const input = undefined;
      const flattenedArray = flattenArrayRecursive(input);
      
      expect(flattenedArray).toEqual([]);
    });
  
    it('should handle gracefully when the input array contains nested null or undefined values', () => {
      const input = [1, [2, null, 3, [null, undefined, 4], 5, 6], 7];
      const flattenedArray = flattenArrayRecursive(input);
      
      expect(flattenedArray).toEqual([1, 2, null, 3, null, undefined, 4, 5, 6, 7]);
    });
  });
