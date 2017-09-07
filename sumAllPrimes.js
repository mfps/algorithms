/**
 * 
 * Sum all the prime numbers up to and including the provided number.
 * 
 * @param {number} num 
 * @returns 
 */
const sumPrimes = num => {
  const numbers = [];

  let i = 2;
  for (i; i <= num; i++) {
    numbers.push(i);
  }

  return numbers
    .filter((item, index, array) => {
      let j = 0;
      for (j; j < index; j++) {
        if (item % array[j] === 0) return false;
      }
      return true;
    })
    .reduce(function(a, b) {
      return a + b;
    });
};

sumPrimes(10);
