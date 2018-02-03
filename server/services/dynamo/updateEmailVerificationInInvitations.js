const dynamodb = require('./dynamo')

const updateEmailVerificationInInvitations = userId => {
  const params = {
    TableName: 'leaderalInvitations',
    Key: {
      userId: { S: userId }
    },
    UpdateExpression: 'set emailVerified = :v remove emailPin',
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

module.exports = { updateEmailVerificationInInvitations }
