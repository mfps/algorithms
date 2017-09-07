/**
 * 
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * 
 * @param {number} num 
 * @returns 
 */
const sumFibs = num => {
  let arrFib = [1];
  let i = 1;
  for (i; i <= num; ) {
    arrFib.push(i);
    i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }

  const res = arrFib.reduce((prev, curr) => {
    if (curr % 2 !== 0) {
      return prev + curr;
    }
    return prev;
  });

  return res;
};

sumFibs(4);
