/**
 * 
 * Return the length of the longest word in the provided sentence.
 * 
 * @param {string} str 
 * @returns 
 */
const findLongestWord = str => {
  return str
    .split(' ')
    .map(val => {
      return val.length;
    })
    .sort((a, b) => {
      return b - a;
    })[0];
};

findLongestWord('The quick brown fox jumped over the lazy dog');
