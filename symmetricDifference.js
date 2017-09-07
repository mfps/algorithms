/**
 * 
 * A function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
 * 
 * @param {Array} args 
 * @returns 
 */
const sym = args => {
  const result = [...arguments]
    .map(arr => new Set(arr))
    .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));
  return [...result];
};

/**
 * 
 * @param {Object} A 
 * @param {Object} B 
 */
const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));

sym([1, 2, 3], [5, 2, 1, 4]);
