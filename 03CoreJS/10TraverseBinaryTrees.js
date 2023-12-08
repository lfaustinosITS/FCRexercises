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

function parseTree(treeString) {

  let commas = checkSyntax(treeString);
  const nodes = treeString.split(',').map(node => (node.trim() === '' ? null : node));
  checkStructure(nodes, commas);

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

  return binaryTree(nodes);
}

function traverseInfix(node, result) {
  if (!node) { return; };
  if (typeof node === 'object') {
    traverseInfix(node.left, result);
    result.push(node.value);
    traverseInfix(node.right, result);
  } else {
    result.push(node);
  }
}

function traversePrefix(node, result) {
  if (!node) { return };
  if (typeof node === 'object') {
    result.push(node.value);
    traversePrefix(node.left, result);
    traversePrefix(node.right, result);
  } else {
    result.push(node);
  }
}

function traversePostfix(node, result) {
  if (!node) { return };
  if (typeof node === 'object') {
    traversePostfix(node.left, result);
    traversePostfix(node.right, result);
    result.push(node.value);
  } else {
    result.push(node);
  }
}

function printTree(tree, order = 'infix') {
  const root = parseTree(tree);
  const result = [];

  if (order == 'prefix') {
    traversePrefix(root, result);

  } else if (order == 'postfix') {
    traversePostfix(root, result);
  } else if (order == 'infix') {
    traverseInfix(root, result);
  }else{
    throw new Error('Select a valid order.')
  }

  return result.join(' ');
}

module.exports = printTree;

