/**
 * 
 * A function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
 * 
 * @returns 
 */
const addTogether = () => {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== 'number')
    ? undefined
    : args.length > 1
        ? args.reduce((acc, n) => acc += n, 0)
        : n => (typeof n === 'number' ? n + args[0] : undefined);
};

addTogether(2, 3);
