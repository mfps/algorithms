/**
 * Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
 * If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.
 * 
 * @param {Array} arr 
 * @param {number} arg 
 * @returns 
 */
const pairwise = (arr, arg) => {
  return arr.reduce((sum, cur, i, array) => {
    let j = 0;
    for (j = i + 1; j < array.length; j++) {
      if (cur + array[j] === arg) {
        sum += i + j;
        array[j] = ' ';
        break;
      }
    }

    return sum;
  }, 0);
};

pairwise([1, 4, 2, 3, 0, 5], 7);
