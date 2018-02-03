const dynamodb = require('./dynamo')
const securePin = require('secure-pin')

const saveApplicationToDB = ({
  email,
  phoneNumber,
  firstName,
  lastName,
  userData
}) => {
  const emailPin = securePin.generatePinSync(6)
  const phonePin = securePin.generatePinSync(6)

  let params = {
    TableName: 'leaderalApplications',
    Item: {
      email: { S: email },
      phoneNumber: { S: phoneNumber },
      firstName: { S: firstName },
      lastName: { S: lastName },
      emailPin: { S: emailPin },
      phonePin: { S: phonePin }
    }
  }

  if (userData) {
    params.Item = userData
  }

  return new Promise((resolve, reject) => {
    dynamodb.putItem(params, (err, data) => {
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

module.exports = { saveApplicationToDB }
