function enhancedQuerySelectorAll(selector) {
    const parts = selector.split(' < ');
  
    if (parts.length !== 2) {
      throw new Error('Invalid selector format. Use "<" to separate parent and child selectors.');
    }
  
    const parentSelector = parts[0].trim();
    const childSelector = parts[1].trim();
  
    const parentElements = document.querySelectorAll(parentSelector);
  
    const matchingElements = [];
  
    parentElements.forEach((parentElement) => {
      const children = parentElement.querySelectorAll(childSelector);
      if (children.length > 0) {
        matchingElements.push(parentElement);
      }
    });
  
    return matchingElements;
  }
  
module.exports=enhancedQuerySelectorAll;
  