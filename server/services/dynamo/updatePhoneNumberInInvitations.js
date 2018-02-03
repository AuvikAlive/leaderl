const dynamodb = require('./dynamo')

const updatePhoneNumberInInvitations = async (phoneNumber, email) => {
  const params = {
    TableName: 'leaderalInvitations',
    Key: {
      userId: { S: email }
    },
    UpdateExpression: 'set phoneNumber = :v',
    ExpressionAttributeValues: {
      ':v': { S: phoneNumber }
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

module.exports = { updatePhoneNumberInInvitations }
