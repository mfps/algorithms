/**
 * 
 * Convert the given number into a roman numeral.
 * 
 * @param {number} num 
 * @param {Object} dictionary 
 * @returns 
 */
function convertToRoman(num, dictionary) {
  const romanNums = dictionary;

  const strArr = `${num}`.split('');

  const separateNumArr = strArr.map(
    (currentVal, index, array) => currentVal += separateNum(array, index)
  );
  const roman = separateNumArr.map(val => romanNums[val]).join('');
  return roman;
}

function romanDictionary() {
  return {
    '1': 'I',
    '2': 'II',
    '3': 'III',
    '4': 'IV',
    '5': 'V',
    '6': 'VI',
    '7': 'VII',
    '8': 'VIII',
    '9': 'IX',
    '10': 'X',
    '20': 'XX',
    '30': 'XXX',
    '40': 'XL',
    '50': 'L',
    '60': 'LX',
    '70': 'LXX',
    '80': 'LXXX',
    '90': 'XC',
    '100': 'C',
    '200': 'CC',
    '300': 'CCC',
    '400': 'CD',
    '500': 'D',
    '600': 'DC',
    '700': 'DCC',
    '800': 'DCCC',
    '900': 'CM',
    '1000': 'M',
    '2000': 'MM',
    '3000': 'MMM'
  };
}
function separateNum(array, index) {
  return Array(array.length - index - 1 + 1).join('0');
}

const dictionary = romanDictionary();
convertToRoman(36, dictionary);
