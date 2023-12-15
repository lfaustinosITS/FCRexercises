const findBeginningOfLoop  = require('./16FindLoop');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

describe('findBeginningOfLoop', () => {
  it('should find the beginning of the loop in a linked list with a loop', () => {
   
    const head = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    head.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node2;

    expect(findBeginningOfLoop(head)).toEqual(node2);
  });

  it('should return null for a linked list without a loop', () => {
   
    const head = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    head.next = node2;
    node2.next = node3;

    expect(findBeginningOfLoop(head)).toBeNull();
  });

  
  it('should find the beginning of the loop when the loop starts at the first node', () => {
    
    const head = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    head.next = node2;
    node2.next = node3;

    node3.next = head;

    expect(findBeginningOfLoop(head)).toEqual(head);
  });


  it('should return null for an empty linked list', () => {
    expect(findBeginningOfLoop(null)).toBeNull();
  });


});
