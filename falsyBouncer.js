/**
 * 
 * Remove all falsy values from an array.
 * 
 * @param {Array} arr 
 * @returns 
 */
const bouncer = arr => {
  return arr.filter(Boolean);
};

bouncer([7, 'ate', '', false, 9]);
