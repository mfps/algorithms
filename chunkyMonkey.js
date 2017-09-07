/**
 * 
 * A function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 * 
 * @param {Array} arr 
 * @param {number} size 
 * @returns 
 */
const chunkArrayInGroups = (arr, size) => {
  return [...Array(Math.ceil(arr.length / size))].map((val, i) =>
    arr.slice(i * size, (i + 1) * size)
  );
};

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
