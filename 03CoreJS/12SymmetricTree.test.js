const isSymmetricTree= require("./12SymmetricTree");

describe('isSymmetricTree', () => {
  it('should detect no symmetric trees', () => {
    const bTree = '(A,(B,(D,(H),),),(C,(F,,(I)),(G,,(J))))';;
    const expectedOutput = false;
    expect(isSymmetricTree(bTree)).toStrictEqual(expectedOutput);
  });
  it('should detect symmetric trees', () => {
    const bTree = '(1,(2,(3),(4,(5),)),(2,(4,,(5)),(3)))';
    const expectedOutput = true;
    expect(isSymmetricTree(bTree)).toStrictEqual(expectedOutput);
  });
  it('should detect more closing parentheses', () => {
    const bTree = '(A,(B),(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
  
    expect(()=>{isSymmetricTree(bTree)}).toThrow("More closing parentheses ')' were detected than necessary.");
  });
  it('should detect more opening parentheses', () => {
    const bTree = '(A,(B,((D),(E)),(C,(F,(H),(I)),(G,,(J))))';
  
    expect(()=>{isSymmetricTree(bTree)}).toThrow("More opening parentheses '(' were detected than necessary.");
  });
  it('should detect incorrect number of commas', () => {
    const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I))(G,,(J))))';
  
    expect(()=>{isSymmetricTree(bTree)}).toThrow("The tree structure contains an incorrect number of commas.");
  });
})
