class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function linkedListToArray(head) {
    let values = [];
    let current = head;
    let explorer = head;
    let stopper = null;
    while (current !== null) {
        values.push(current.value);
        current = current.next;

        if (explorer !== null && explorer.next!==null) {
            explorer = explorer.next.next
        } else if (stopper !== null) {
            stopper = stopper.next
        }

        if (explorer == current) {
            explorer = null;
            stopper = head;
        }

        if (stopper == current) {
            break
        }
    }
    return values
};

function isPalindrome(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        if (array[left] !== array[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

function isPalindromeLinkedList(head) {
    let values = linkedListToArray(head);
    return isPalindrome(values);
}

module.exports = isPalindromeLinkedList;

