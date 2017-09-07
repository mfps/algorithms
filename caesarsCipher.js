/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * 
 * @param {string} str 
 * @returns 
 */
const rot13 = str => {
  return str.replace(/[A-Z]/g, change);
};

const change = val => {
  return String.fromCharCode(val.charCodeAt(0) % 26 + 65);
};

rot13('SERR PBQR PNZC');
