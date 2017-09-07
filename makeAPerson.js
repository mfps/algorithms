/**
 * 
 * @param {string} firstAndLast 
 */
const Person = function(firstAndLast) {
  let fullName;

  this.getFullName = () => fullName.join(' ');

  this.getFirstName = () => fullName[0];

  this.getLastName = () => fullName[fullName.length - 1];

  this.setFirstName = first => fullName[0] = first;

  this.setLastName = last => fullName[fullName.length - 1] = last;

  this.setFullName = firstAndLast => fullName = firstAndLast.split(' ');

  this.setFullName(firstAndLast);
};

const bob = new Person('Bob Ross');
bob.getFullName();
