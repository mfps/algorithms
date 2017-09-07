/**
 * 
 * Return a new array that transforms the element's average altitude into their orbital periods.
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 * 
 * @param {Array} arr 
 * @returns 
 */
const orbitalPeriod = arr => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(el => {
    const orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + el.avgAlt, 3) / GM)
    );
    return {
      name: el.name,
      orbitalPeriod
    };
  });
};

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
