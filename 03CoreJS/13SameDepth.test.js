const  isSameLevel  = require('./13SameDepth');

class TreeNode {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

const nodeI1 = new TreeNode('I');
const nodeI2 = new TreeNode('I');
const nodeG = new TreeNode('G');
const nodeF1 = new TreeNode('F');
const nodeF2 = new TreeNode('F', [nodeI1]);
const nodeH = new TreeNode('H');
const nodeE1 = new TreeNode('E', [nodeG]);
const nodeE2 = new TreeNode('E', [nodeF2, nodeH]);
const nodeD = new TreeNode('D', [nodeF1, nodeE2]);
const nodeC1 = new TreeNode('C');
const nodeC2 = new TreeNode('C', [nodeI2]);
const nodeB = new TreeNode('B', [nodeD, nodeE1]);
const root1 = new TreeNode('A', [nodeB, nodeC1, nodeC2]);


const noded4v6 = new TreeNode(6);
const noded4v9 = new TreeNode(9);
const noded4v4 = new TreeNode(4);
const noded3v3 = new TreeNode(3);
const noded3v5 = new TreeNode(5, [noded4v6]);
const noded3v9 = new TreeNode(9);
const noded3v3c3 = new TreeNode(3);
const noded3v0 = new TreeNode(0, [noded4v9, noded4v4]);
const noded2v1 = new TreeNode(1);
const noded2v5 = new TreeNode(5, [noded3v3, noded3v5, noded3v9]);
const noded2v0 = new TreeNode(0);
const noded2v3 = new TreeNode(3, [noded3v3c3, noded3v0]);
const noded1v1 = new TreeNode(1);
const noded1v2 = new TreeNode(2, [noded2v1, noded2v5]);
const noded1v3 = new TreeNode(3, [noded2v0]);
const noded1v5 = new TreeNode(5);
const noded1v7 = new TreeNode(7, [noded2v3]);
const root2 = new TreeNode(0, [noded1v1, noded1v2, noded1v3, noded1v5, noded1v7]);


describe('isSameLevel function', () => {
    test('Numbers 1 and 1 are not in the same depth anywhere', () => {
        expect(isSameLevel(root2, 1, 1)).toBe(false);
    });

    test('Numbers 3 and 3 can be found in the same depth', () => {
        expect(isSameLevel(root2, 3, 3)).toBe(true);
    });

    test('One of the numbers is not present in the tree', () => {
        expect(isSameLevel(root2, 1, 999)).toBe(false);
    });

    test('Both numbers are not present in the tree', () => {
        expect(isSameLevel(root2, 999, 888)).toBe(false);
    });

    test('Letters F and G can be found in the same depth', () => {
        expect(isSameLevel(root1, 'F', 'G')).toBe(true);
    });

    test('Numbers B and G are not in the same depth anywhere', () => {
        expect(isSameLevel(root1, 'B', 'G')).toBe(false);
    });

    test('Empty tree should return false for any numbers', () => {
        const emptyTree = new TreeNode(0);
        expect(isSameLevel(emptyTree, 1, 2)).toBe(false);
    });
});