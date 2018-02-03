const dynamodb = require('./dynamo')

const updatePhoneNumberInApplications = async (phoneNumber, email) => {
  const params = {
    TableName: 'leaderalApplications',
    Key: {
      email: { S: email }
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

module.exports = { updatePhoneNumberInApplications }
