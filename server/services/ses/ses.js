const { SES } = require('aws-sdk')

let ses = new SES(require('../../config/aws'))

module.exports = { ses }
