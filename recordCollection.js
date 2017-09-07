/**
 * 
 * A function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.
 * If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
 * 
 * @param {number} id 
 * @param {string} prop 
 * @param {string} value 
 * @returns 
 */
function updateRecords(id, prop, value) {
  if (prop === 'tracks' && value !== '') {
    if (collection[id][prop]) {
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = [value];
    }
  } else if (value !== '') {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}

var collection = {
  '2548': {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  '2468': {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  '1245': {
    artist: 'Robert Palmer',
    tracks: []
  },
  '5439': {
    album: 'ABBA Gold'
  }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

updateRecords(5439, 'artist', 'ABBA');
