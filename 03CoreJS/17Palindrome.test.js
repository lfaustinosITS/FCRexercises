const isPalindromeLinkedList = require('./17Palindrome')

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

describe('isPalindromeLinkedList', () => {
    it('should find a palindrome in a linked list', () => {

        const palindromeList = new Node(1);
        palindromeList.next = new Node(2);
        palindromeList.next.next = new Node(3);
        palindromeList.next.next.next = new Node(2);
        palindromeList.next.next.next.next = new Node(1);


        expect(isPalindromeLinkedList(palindromeList)).toEqual(true);
    });

    it('should return false for a linked list without a palindrome', () => {

        const nonPalindromeList = new Node(1);
        nonPalindromeList.next = new Node(2);
        nonPalindromeList.next.next = new Node(3);
        nonPalindromeList.next.next.next = new Node(4);
        nonPalindromeList.next.next.next.next = new Node(5);

        expect(isPalindromeLinkedList(nonPalindromeList)).toEqual(false);
    });


    it('should find a palindrome in a linked list with a loop', () => {

        const palindromeListWithLoop = new Node('A');
        palindromeListWithLoop.next = new Node('B');
        palindromeListWithLoop.next.next = new Node('C');
        palindromeListWithLoop.next.next.next = new Node('B');
        palindromeListWithLoop.next.next.next.next = new Node('A');
        palindromeListWithLoop.next.next.next.next.next = palindromeListWithLoop.next;


        expect(isPalindromeLinkedList(palindromeListWithLoop)).toEqual(true);
    });


    it('should return true for an empty linked list', () => {
        expect(isPalindromeLinkedList(null)).toEqual(true);
    });


});
