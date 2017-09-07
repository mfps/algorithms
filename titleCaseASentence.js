/**
 * 
 * Return the provided string with the first letter of each word capitalized. 
 * Make sure the rest of the word is in lower case.
 * 
 * @param {string} str 
 * @returns 
 */
const titleCase = str => {
  return str
    .split(' ')
    .map(val => {
      return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    })
    .join(' ');
};

titleCase("I'm a little tea pot");
