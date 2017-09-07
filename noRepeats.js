/**
 * 
 * Return the number of total permutations of the provided string that don't have repeated consecutive letters.
 * Assume that all characters in the provided string are each unique.
 * 
 * @param {string} str 
 * @returns 
 */
const permAlone = str => {
  const re = new RegExp(/(.)\1/);
  const permutations = (p, o) => {
    if (o.length) {
      let sum = 0;
      let i = 0;
      for (i; i < p.length + 1; i++) {
        let array = p.slice(0, i).concat(o[0]).concat(p.slice(i));
        sum += permutations(array, o.slice(1));
      }

      return sum;
    } else {
      return !re.test(p.join(''));
    }
  };

  return permutations([], str.split(''));
};

permAlone('aab');
