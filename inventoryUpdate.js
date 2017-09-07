/**
 * 
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
 * Update the current existing inventory item quantities (in arr1). 
 * If an item cannot be found, add the new item and quantity into the inventory array. 
 * The returned inventory array should be in alphabetical order by item.
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns 
 */
function updateInventory(arr1, arr2) {
  return arr2
    .map(v => ((f = arr1.find(a => a[1] == v[1])) ? [v[0] + f[0], v[1]] : v))
    .concat(arr1.filter(a => !arr2.find(b => b[1] == a[1])))
    .sort((a, b) => a[1] > b[1]);
}

var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
];

updateInventory(curInv, newInv);
