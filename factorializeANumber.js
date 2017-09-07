/**
 * 
 * 5! = 1 * 2 * 3 * 4 * 5 = 120
 * 
 * @param {number} num 
 * @returns 
 */
const factorialize = num => {
  if (num === 0) return 1;
  return num * factorialize(num - 1);
};

factorialize(5);
