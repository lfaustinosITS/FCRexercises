const longestRunOfTwoNumbers = require('./07LargestRun');

describe('longestRunOfTwoNumbers', () => {
    it('should find the longest run of at most two distinct numbers', () => {
        expect(longestRunOfTwoNumbers("1212223311212223")).toBe("1121222");
    });

    it('should handle input with only one distinct number', () => {
        expect(longestRunOfTwoNumbers("1111111")).toBe("1111111");
    });

    it('should handle an empty input', () => {
        expect(longestRunOfTwoNumbers("")).toBe("");
    });

    it('should handle input with three or more distinct numbers', () => {
        expect(longestRunOfTwoNumbers("123456789")).toBe("12");
    });

    it('should handle input with mixed numbers', () => {
        expect(longestRunOfTwoNumbers("1122334445566")).toBe("33444");
    });

    it('should handle edge cases with short input', () => {
        expect(longestRunOfTwoNumbers("12")).toBe("12");
    });

    it('should handle input with spaces and non-numeric characters', () => {
        expect(longestRunOfTwoNumbers("12.3abc")).toBe("12");
    });
    it('should return null if there are no numbers in the string', () => {
        expect(longestRunOfTwoNumbers("abc")).toBe(null);
    });
    
});
