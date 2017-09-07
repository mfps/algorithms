/**
 * 
 * Check if a value is classified as a boolean primitive. Return true or false.
 * 
 * @param {Boolean} bool 
 * @returns 
 */
const boolWho = bool => {
  return typeof bool === 'boolean';
};

boolWho(null);
