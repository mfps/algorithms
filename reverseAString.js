/**
 * 
 * Reverse the provided string.
 * 
 * @param {string} str 
 * @returns 
 */
const reverseString = str => {
  return str.split('').reverse().join('');
};

reverseString('hello');
