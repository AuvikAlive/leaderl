const { SNS } = require('aws-sdk')

let sns = new SNS(require('../../config/aws'))

module.exports = { sns }
