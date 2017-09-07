/**
 * 
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 * 
 * @param {string} str 
 * @returns 
 */
const fearNotLetter = str => {
  let allChars = '';
  const notChars = new RegExp('[^' + str + ']', 'g');
  let i = 0;
  for (i; allChars[allChars.length - 1] !== str[str.length - 1]; i++) {
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
  }

  return allChars.match(notChars)
    ? allChars.match(notChars).join('')
    : undefined;
};

fearNotLetter('abce');
