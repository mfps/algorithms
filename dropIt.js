/**
 * 
 * Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
 * The second argument, cb, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
 * Return the rest of the array, otherwise return an empty array.
 * 
 * @param {Array} arr 
 * @param {Function} cb 
 * @returns 
 */
const dropElements = (arr, cb) => {
  let i = 0;
  while (!cb(arr[i])) {
    arr.shift();
  }
  return arr;
};

const callBack = n => {
  return n < 3;
};

dropElements([1, 2, 3], callBack);
