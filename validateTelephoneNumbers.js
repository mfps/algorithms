/**
 * 
 * Return true if the passed string is a valid phone number.
 * 
 * @param {string} str 
 * @param {string} [countryCode='US'] 
 * @returns 
 */
function telephoneCheck(str, countryCode = 'US') {
  const regex = dictionary();
  const country = regex.find(val => val.countryCode === countryCode);

  return country['regexp'].test(str);
}

const dictionary = () => {
  return [
    {
      countryCode: 'DE',
      regexp: /^(?:([+][0-9]{1,2})+[ .-]*)?([(]{1}[0-9]{1,6}[)])?([0-9 .-/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/
    },
    {
      countryCode: 'US',
      regexp: /^1?( )?((\(\d{3}\))|( \d{3} )|(\d{3}))( |\-)?(\d{3})( |-)?(\d{4}$)/
    }
  ];
};

telephoneCheck('555-555-5555', 'DE');
