class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


const head = new Node(1);
const node2 = new Node(2);
const node3 = new Node(2);
const node4 = new Node(3);
const node5 = new Node(3);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(2);
const node9 = new Node(1);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node4;

//  1 -> 2 -> 3 -> 2 -> 1
const palindromeList = new Node(1);
palindromeList.next = new Node(2);
palindromeList.next.next = new Node(3);
palindromeList.next.next.next = new Node(2);
palindromeList.next.next.next.next = new Node(1);
palindromeList.next.next.next.next.next = palindromeList.next.next.next;

function findBeginningOfLoop(head) {
    let walker = head;
    let explorer = head;

    while (explorer !== null && explorer.next !== null) {
        walker = walker.next;
        explorer = explorer.next.next;

        if (walker === explorer) {
            break;
        }
    }

    if (explorer === null || explorer.next === null) {
        return null;
    }

    walker = head;
    while (walker !== explorer) {
        walker = walker.next;
        explorer = explorer.next;
    }

    return walker;
}

module.exports = findBeginningOfLoop

// const beginningOfLoop = findBeginningOfLoop(head);

// console.log(beginningOfLoop);
// console.log(findBeginningOfLoop(palindromeList));
