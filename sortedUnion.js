/**
 * 
 * A function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * 
 * @returns 
 */
const uniteUnique = () => {
  const args = [].concat(...arguments);
  return [...new Set(args)];
};

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
