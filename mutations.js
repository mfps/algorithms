/*
 *
 * Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. 
 * 
 * @param {Array} arr 
 * @returns 
 */
const mutation = arr => {
  return arr[1].toLowerCase().split('').every(letter => {
    return arr[0].toLowerCase().indexOf(letter) != -1;
  });
};

mutation(['hello', 'hey']);
