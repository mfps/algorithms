/**
 * We'll pass you an array of two numbers. 
 * Return the sum of those two numbers and all numbers between them.
 * 
 * @param {Array} arr 
 * @returns 
 */
const sumAll = arr => {
  const list = [];

  arr = arr.sort((a, b) => a - b);
  for (var i = arr[0]; i <= arr[1]; i++) {
    list.push(i);
  }

  return list.reduce((a, b) => a + b);
};

sumAll([1, 4]);
