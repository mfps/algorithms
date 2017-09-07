/**
 * 
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 * 
 * @param {string} str 
 * @param {string} before 
 * @param {string} after 
 * @returns 
 */
const myReplace = (str, before, after) => {
  const match = new RegExp('[A-Z]');
  if (match.test(before[0])) {
    after = after[0].toUpperCase() + after.slice(1);
  }

  return str.replace(before, after);
};

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
