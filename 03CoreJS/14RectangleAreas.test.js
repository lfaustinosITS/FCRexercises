const maximalRectangle=require( "./14RectangleAreas");

const M = [
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0]
];

describe('maximalRectangle',()=>{
    it('should return zero for an empty array',()=>{
        const emptyMatrix= [];
        expect(maximalRectangle(emptyMatrix)).toBe(0);
    });
    it('should return zero for a matrix that contains only zeros',()=>{
        const zeroMatrix= [[0,0,0],[0,0,0]];
        expect(maximalRectangle(zeroMatrix)).toBe(0);
    });
    it('should return the size of the matrix for a matrix that contains only ones',()=>{
        const onesMatrix= [[1,1,1],[1,1,1],[1,1,1]];
        expect(maximalRectangle(onesMatrix)).toBe(9);
    });
    it('should return the correct area for a matrix',()=>{
        expect(maximalRectangle(M)).toBe(27);
    });
    it('should detect no binary matrix',()=>{
        const noBinaryMatrix= [[1,2,3],[4,5,6]]
        expect(()=>{maximalRectangle(noBinaryMatrix)}).toThrow('This is not a binary matrix');
    });

})