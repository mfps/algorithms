/**
 * 
 * Check if a string (first argument, str) ends with the given target string (second argument, target)
 * 
 * @param {string} str 
 * @param {string} target 
 * @returns 
 */
const confirmEnding = (str, target) => {
  return str.substr(str.length - target.length) === target;
};
const confirmEndingEndsWith = (str, target) => {
  return str.endsWith(target);
};

confirmEnding('Bastian', 'n');
confirmEndingEndsWith('Bastian', 'n');
