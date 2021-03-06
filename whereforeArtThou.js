/**
 * 
 * A function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). 
 * Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
 * 
 * @param {Array} collection 
 * @param {Object} source 
 * @returns 
 */
const whatIsInAName = (collection, source) => {
  var arr = [];
  var srcKeys = Object.keys(source);

  return collection.filter(obj => {
    return srcKeys
      .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
      .reduce((a, b) => a && b);
  });
};

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
);
