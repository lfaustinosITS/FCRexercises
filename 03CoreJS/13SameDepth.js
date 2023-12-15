class TreeNode {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

function isSameLevel(root, n1, n2) {
    const queue = [{ node: root, depth: 0 }];

    let foundDepth = -1;

    while (queue.length > 0) {
        const { node, depth } = queue.shift();

        if (node.value === n1 || node.value === n2) {
            if (foundDepth !== depth) {
                foundDepth = depth;
            } else if (foundDepth == depth) {
                return true; 
            }
        }

        for (const child of node.children) {
            queue.push({ node: child, depth: depth + 1 });
        }
    }

    return false
}

module.exports = isSameLevel;

