/**
 * 
 * Return the remaining elements of an array after chopping off n elements from the head.
 * 
 * @param {Array} arr 
 * @param {number} howMany 
 * @returns 
 */
const slasher = (arr, howMany) => {
  let i = 0;
  for (i; i < howMany; i++) {
    arr.shift();
  }
  return arr;
};

slasher([1, 2, 3], 2);
