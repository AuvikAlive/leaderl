const path = require('path');
const fs = require('fs');

const getPhoneCodeFromCountryCode = countryCode => {
  const phoneCodes = fs.readFileSync(path.join(__dirname) + '/phone.json');
  const phoneCodesObject = JSON.parse(phoneCodes);
  return phoneCodesObject[countryCode];
};

module.exports = { getPhoneCodeFromCountryCode };
