const printTree = require("./10TraverseBinaryTrees");

describe('printTree', () => {
  it('should print tree in infix order by default', () => {
    const bTree = '(A,(B,(D,(H),),),(C,(F,,(I)),(G,,(J))))';;
    const expectedOutput = 'H D B A F I C G J';
    expect(printTree(bTree)).toStrictEqual(expectedOutput);
  });
  it('should print tree in specified order', () => {
    const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
    const expectedOutputInfix = 'D B E A H F I C G J';
    const expectedOutputPrefix = 'A B D E C F H I G J';
    const expectedOutputPostfix = 'D E B H I F J G C A';

    expect(printTree(bTree, 'infix')).toStrictEqual(expectedOutputInfix);
    expect(printTree(bTree, 'prefix')).toStrictEqual(expectedOutputPrefix);
    expect(printTree(bTree, 'postfix')).toStrictEqual(expectedOutputPostfix);
  });
  it('should detect more closing parentheses', () => {
    const bTree = '(A,(B),(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
  
    expect(()=>{printTree(bTree)}).toThrow("More closing parentheses ')' were detected than necessary.");
  });
  it('should detect more opening parentheses', () => {
    const bTree = '(A,(B,((D),(E)),(C,(F,(H),(I)),(G,,(J))))';
  
    expect(()=>{printTree(bTree)}).toThrow("More opening parentheses '(' were detected than necessary.");
  });
  it('should detect incorrect number of commas', () => {
    const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I))(G,,(J))))';
  
    expect(()=>{printTree(bTree)}).toThrow("The tree structure contains an incorrect number of commas.");
  });
  it('should detect invalid order', () => {
    const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
  
    expect(()=>{printTree(bTree,'outfix')}).toThrow("Select a valid order.");
  });
})
