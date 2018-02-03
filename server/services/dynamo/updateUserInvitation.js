const dynamodb = require('./dynamo')
const securePin = require('secure-pin')

const updateUserInvitation = ({
  userId,
  email,
  phoneNumber,
  firstName,
  lastName
}) => {
  const emailPin = securePin.generatePinSync(6)
  const phonePin = securePin.generatePinSync(6)

  const params = {
    TableName: 'leaderalInvitations',
    Key: {
      userId: { S: userId }
    },
    UpdateExpression:
      'set email = :e, phoneNumber = :p, firstName = :f, lastName = :l, emailPin = :ep, phonePin = :pp',
    ExpressionAttributeValues: {
      ':e': { S: email },
      ':p': { S: phoneNumber },
      ':f': { S: firstName },
      ':l': { S: lastName },
      ':ep': { S: emailPin },
      ':pp': { S: phonePin }
    }
  }

  return new Promise((resolve, reject) => {
    dynamodb.updateItem(params, (err, data) => {
      if (err) {
        console.log('Error', err)
        reject(err)
      } else {
        console.log('Success', data)
        resolve(true)
      }
    })
  })
}

module.exports = { updateUserInvitation }
