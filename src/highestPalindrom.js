function highestPalindrome(string, k) {
  const chars = string.split('');

  function isPalindrome(left, right) {
    if (left >= right) {
      const result = chars.join('');
      return !isNaN(result) && result === result.split('').reverse().join('');
    }
    if (chars[left] !== chars[right]) {
      return false;
    }
    return isPalindrome(left + 1, right - 1);
  }

  function replaceChars(left, right, replacements) {
    if (left >= right) {
      if (replacements === 0) {
        return isPalindrome(0, chars.length - 1) ? chars.join('') : -1;
      }
      return -1;
    }

    if (chars[left] !== chars[right]) {
      const maxChar = Math.max(chars[left], chars[right]);
      chars[left] = chars[right] = maxChar;
      const result1 = replaceChars(left + 1, right - 1, replacements - 1);
      chars[left] = chars[right] = string[left];
      chars[left] = chars[right] = maxChar;
      const result2 = replaceChars(left + 1, right - 1, replacements - 1);
      chars[left] = chars[right] = string[left];
      return Math.max(result1, result2);
    }

    return replaceChars(left + 1, right - 1, replacements);
  }

  return replaceChars(0, chars.length - 1, k);
}

// Contoh penggunaan fungsi
const data = '3943';
const k = 1;
console.log("-".repeat(40));
console.log('Case 2: Highest Palindrome');
console.log("-".repeat(40));
console.log(highestPalindrome(data, k));