function isBalanced(expression) {
  const stack = [];
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];
  
  for (let i = 0; i < expression.length; i++) {
    const bracket = expression[i];
    
    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (closingBrackets.includes(bracket)) {
      const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(bracket)];
      
      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return 'NO';
      }
    }
  }
  
  return stack.length === 0 ? 'YES' : 'NO';
}

console.log("-".repeat(40));
console.log('Case 3: Balance Bracket');
console.log("-".repeat(40));
// Contoh penggunaan
console.log(isBalanced("{[()]}")); // Output: YES
console.log(isBalanced("{[(])}")); // Output: NO
console.log(isBalanced("{(([])[])[]}")); // Output: YES

console.log("-".repeat(40));
