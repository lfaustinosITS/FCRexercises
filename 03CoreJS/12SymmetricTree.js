class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countClosures(string) {
    if (!string) { return 0 }
    let closures = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ')') {
            closures++;
        }
    }
    return closures;
}

function checkSyntax(string) {
    let open = 0;
    let commas = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ')') {
            open--;
        } else if (string[i] === '(') {
            open++
        } else if (string[i] === ',') {
            commas++
        }
        if (open < 0) {
            throw new Error("More closing parentheses ')' were detected than necessary.")
        }
    };
    if (open > 0) {
        throw new Error("More opening parentheses '(' were detected than necessary.")
    }
    return commas
}
function checkStructure(arr, commas) {
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        if (!arr[i]) { continue }
        else if (arr[i].includes('(') && !arr[i].includes(')')) {
            count++
        }
    }
    if (2 * count != commas) {
        throw new Error("The tree structure contains an incorrect number of commas.");
    }
}

function binaryTree(arr) {
    const newNode = new TreeNode(arr[0][1])
    const rightIndex = parseInt(findRightIndex(arr));

    if (!arr[1]) {
        newNode.left = null;

    } else if (arr[1].includes(')')) {
        newNode.left = arr[1][1];

    } else {
        newNode.left = binaryTree(arr.slice(1));
    }

    if (!arr[rightIndex] || countClosures(arr[rightIndex]) === arr[rightIndex].length) {
        newNode.right = null;
    } else if (arr[rightIndex].includes(')')) {
        newNode.right = arr[rightIndex][1];
    } else {
        newNode.right = binaryTree(arr.slice(rightIndex));
    }
    return newNode;
}

function findRightIndex(arr) {
    if (arr[1] === null || arr[1][2] === ')') {
        return 2
    } else {
        let count = 2;
        for (let i = 2; i < arr.length; i++) {
            if (!arr[i]) { continue }
            else if (arr[i].includes('(')) { count++ };
            let closuresNumber = countClosures(arr[i]);
            count -= closuresNumber
            if (count <= 1) {
                return i + 1
            }
        }
    }

}

function parseTree(treeString) {
    let commas = checkSyntax(treeString);
    const nodes = treeString.split(',').map(node => (node.trim() === '' ? null : node));
    checkStructure(nodes, commas);
    return binaryTree(nodes);
}

function isMirror(left, right) {
    if (!left && !right) {
        return true;
    }

    if (!left || !right || left.value !== right.value) {
        return false;
    }

    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}


function isSymmetric(root) {
    if (!root) {
        return true;
    }

    return isMirror(root.left, root.right);
}

function isSymmetricTree(string){
    root = parseTree(string);
    return isSymmetric(root);
}

module.exports = isSymmetricTree