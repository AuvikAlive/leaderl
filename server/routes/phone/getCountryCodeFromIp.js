const request = require('request');

const getCountryCodeFromIp = ipAddress => {
  return new Promise((resolve, reject) => {
    request(
      `http://freegeoip.net/json/${ipAddress}`,
      (error, response, body) => {
        if (error) {
          console.log('Error', error);
          reject(error);
        } else {
          const obj = JSON.parse(body);
          resolve(obj.country_code);
        }
      }
    );
  });
};

module.exports = { getCountryCodeFromIp };
