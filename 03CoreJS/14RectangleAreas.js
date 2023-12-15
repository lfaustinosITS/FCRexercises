

function parseBinaryMatrix(matrix){
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] !==0 && matrix[i][j]!==1){
                throw new Error('This is not a binary matrix')
            };
        }
    }
}
function maximalRectangle(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }
    parseBinaryMatrix(matrix);
    const rows = matrix.length;
    const cols = matrix[0].length;

    function largestRectangleArea(heights) {
        const stack = [];
        let maxArea = 0;

        for (let i = 0; i <= heights.length; i++) {
            while (stack.length !== 0 && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
                const h = heights[stack.pop()];
                const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, h * w);
            }
            stack.push(i);
        }

        return maxArea;
    }

    let maxRectangleArea = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i > 0 && matrix[i][j] === 1) {
                matrix[i][j] += matrix[i - 1][j];
            }
        }
        maxRectangleArea = Math.max(maxRectangleArea, largestRectangleArea(matrix[i]));
    }

    return maxRectangleArea;
}


module.exports = maximalRectangle;


