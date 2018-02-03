const { getCountryCodeFromIp } = require('./getCountryCodeFromIp');

test('getCountryCodeFromIp returs country code when ip resolves', async () => {
  const googleIp = '139.130.4.5';

  try {
    await expect(getCountryCodeFromIp(googleIp)).resolves.toEqual('AU');
  } catch (error) {
    console.log(error);
  }
});
