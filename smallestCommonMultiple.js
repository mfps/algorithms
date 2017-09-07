/**
 * 
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * 
 * @param {Array} arr 
 * @returns 
 */
const smallestCommons = arr => {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  const range = [...Array(max + 1).keys()].slice(min);

  return range.reduce((a, b) => {
    let i = a;
    for (i; i <= a * b; i += a) {
      if (i % b === 0) return i;
    }
  });
};

smallestCommons([1, 5]);
