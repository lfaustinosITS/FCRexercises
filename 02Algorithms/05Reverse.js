function reverseBlocks(array, blockSize) {
    for (let i = 0; i < array.length; i += blockSize) {
        const block = array.slice(i, i + blockSize);
        block.reverse()
        array.splice(i, blockSize, ...block);
    }
}
module.exports = reverseBlocks;
