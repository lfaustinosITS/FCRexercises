const reverseBlocks = require('./05Reverse');

describe('reverseBlocks', () => {
    it('should succesfully reverse blocks in an array ', () => {
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const blockSize = 3;
        reverseBlocks(arr, blockSize);
        expect(arr).toEqual([2, 1, 0, 5, 4, 3, 8, 7, 6, 10, 9]);
    });

    it("should handle blocks smaller than the array's size", () => {
        const arr = [0, 1, 2, 3, 4];
        const blockSize = 6;
        reverseBlocks(arr, blockSize);
        expect(arr).toEqual([4, 3, 2, 1, 0]);
    });

    it('should handle an empty array', () => {
        const arr = [];
        const blockSize = 4;
        reverseBlocks(arr, blockSize);
        expect(arr).toEqual([]);
    });

    it("should handle a blockSize equal to the array's length", () => {
        const arr = [0, 1, 2, 3, 4, 5, 6];
        const blockSize = 7;
        reverseBlocks(arr, blockSize);
        expect(arr).toEqual([6, 5, 4, 3, 2, 1, 0]);
    });

    it('should handle a blockSize of 1', () => {
        const arr = [0, 1, 2, 3, 4, 5];
        const blockSize = 1;
        reverseBlocks(arr, blockSize);
        expect(arr).toEqual([0, 1, 2, 3, 4, 5]);
    });
})