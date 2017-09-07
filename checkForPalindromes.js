/**
 * 
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 * 
 * @param {string} str 
 * @returns 
 */
const palindrome = str => {
  var newStr = str.replace(/[^a-zA-Z0-9]|\s/g, '').toLowerCase();
  var reverse = newStr.split('').reverse().join('');
  return newStr === reverse ? true : false;
};

palindrome('eye');
