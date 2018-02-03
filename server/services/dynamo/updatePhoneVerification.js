const dynamodb = require('./dynamo')

const updatePhoneVerification = email => {
  const params = {
    TableName: 'leaderalApplications',
    Key: {
      email: { S: email }
    },
    UpdateExpression: 'set phoneVerified = :v remove phonePin',
    ExpressionAttributeValues: {
      ':v': { BOOL: true }
    }
  }

  return new Promise((resolve, reject) => {
    dynamodb.updateItem(params, (error, data) => {
      if (error) {
        console.log('error', error)
        reject(error)
      } else {
        resolve(true)
      }
    })
  })
}

module.exports = { updatePhoneVerification }
