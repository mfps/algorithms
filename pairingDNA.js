/**
 * 
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
 * 
 * @param {string} str 
 * @returns 
 */
const pairElement = str => {
  var pairs = {
    G: 'C',
    C: 'G',
    A: 'T',
    T: 'A'
  };

  return str.split('').map(element => [element, pairs[element]]);
};

pairElement('GCG');
