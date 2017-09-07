/**
 * 
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
 * The returned value should be a number.
 * 
 * @param {Array} arr 
 * @param {number} num 
 * @returns 
 */
const getIndexToIns = (arr, num) => {
  return [...arr, num]
    .sort((a, b) => {
      return a - b;
    })
    .indexOf(num);
};

getIndexToIns([40, 60], 50);
