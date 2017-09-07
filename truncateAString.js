/**
 * 
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
 * Return the truncated string with a ... ending ot whats provided.
 * 
 * @param {string} str 
 * @param {number} num 
 * @returns 
 */
const truncateString = (str, num, ending = '...') => {
  if (str.length > num) {
    if (num > 3) num -= 3;
    str = `${str.substring(0, num)}${ending}`;
  }
  return str;
};

truncateString('A-tisket a-tasket A green and yellow basket', 11);
