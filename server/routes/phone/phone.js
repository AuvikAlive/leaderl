const express = require('express');
const router = express.Router();
const ip = require('ip');
const { getCountryCodeFromIp } = require('./getCountryCodeFromIp');
const {
  getPhoneCodeFromCountryCode
} = require('./getPhoneCodeFromCountryCode');

router.get('/api/phone', (req, res) => {
  getPhoneCode(req, res);
});

const getPhoneCode = async (req, res) => {
  const ipAddress = ip.address();
  const countryCode = await getCountryCodeFromIp(ipAddress);
  const phoneCode = getPhoneCodeFromCountryCode;
  res.json({ countryCode, phoneCode, ipAddress });
};

module.exports = { router };
