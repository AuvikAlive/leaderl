const { DynamoDB } = require('aws-sdk')

let dynamodb = new DynamoDB(require('../../config/aws'))

module.exports = dynamodb
