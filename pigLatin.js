/**
 * 
 * Translate the provided string to pig latin.
 * 
 * @param {string} str 
 * @returns 
 */
const translatePigLatin = str => {
  const firstVowel = str.search(/[aeiou]/);

  return firstVowel === 0
    ? str + 'way'
    : str.substr(firstVowel) + str.substr(0, firstVowel) + 'ay';
};

translatePigLatin('consonant');
