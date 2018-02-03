const dynamodb = require('./dynamo')

const updatePhoneVerificationInInvitations = userId => {
  const params = {
    TableName: 'leaderalInvitations',
    Key: {
      userId: { S: userId }
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

module.exports = { updatePhoneVerificationInInvitations }
