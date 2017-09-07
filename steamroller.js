/**
 * 
 * Flatten a nested array. You must account for varying levels of nesting.
 * 
 * @param {Array} arr 
 * @returns 
 */
const steamrollArray = arr => {
  return arr.reduce(
    (r, e) => r.concat(Array.isArray(e) ? steamrollArray(e) : [e]),
    []
  );
};

steamrollArray([1, [2], [3, [[4]]]]);
