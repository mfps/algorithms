/**
 * 
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 * 
 * @param {array} collection 
 * @param {string} pre 
 * @returns 
 */
const truthCheck = (collection, pre) => {
  return collection.every(obj => obj[pre]);
};

truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' }
  ],
  'sex'
);
