/**
 * 
 * a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
 * 
 * @param {Array} arr 
 * @param {function} cb 
 * @returns 
 */
const findElement = (arr, cb) => {
  return arr.find(cb);
};

/**
 * 
 * @param {number} num 
 * @returns 
 */
const callBack = num => {
  return num % 2 === 0;
};

findElement([1, 2, 3, 4], callBack);
