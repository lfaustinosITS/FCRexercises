const balanceSum = require('./15BalanceSum');

describe('balanceSum',()=>{
    it('should return -1 for an empty array',()=>{
        expect(balanceSum([])).toBe(-1);
    });
    it('should return zero for an array that contains only zeros',()=>{
        const zeroArray= [0,0,0];
        expect(balanceSum(zeroArray)).toBe(0);
    });
    it('should return the middle of the array for an array that contains only one number',()=>{
        const onesMatrix= [4,4,4,4,4,4];
        expect(balanceSum(onesMatrix)).toBe(2);
    });
    it('should return the correct result for an array with solution',()=>{
        expect(balanceSum([1,2,3,4,9,9,2,7,10,13])).toBe(6);
    });
    it('should return the -1 for an array with no solution',()=>{
        expect(balanceSum([1,2,3,4,4,4,9,9,2,7,10,13])).toBe(-1);
    });
    it('should detect arrays with invalid inputs',()=>{
        const invalidArray= [[1,2,3],[4,5,6]]
        expect(()=>{balanceSum(invalidArray)}).toThrow('This is not a valid array');
    });

})