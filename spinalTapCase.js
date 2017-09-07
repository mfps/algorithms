/**
 * 
 * Convert a string to spinal case.
 * Spinal case is all-lowercase-words-joined-by-dashes.
 * 
 * @param {string} str 
 * @returns 
 */
const spinalCase = str => {
  const match = new RegExp(/\s|_|(?=[A-Z])/);
  return str.split(match).join('-').toLowerCase();
};

spinalCase('This Is Spinal Tap');
