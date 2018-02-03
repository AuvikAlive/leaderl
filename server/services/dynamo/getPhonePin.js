const dynamodb = require('./dynamo')

const getPhonePin = email => {
  const params = {
    TableName: 'leaderalApplications',
    Key: {
      email: { S: email }
    }
  }

  return new Promise((resolve, reject) => {
    dynamodb.getItem(params, function(err, data) {
      if (err) {
        console.log('Error', err)
        reject(err)
      } else {
        resolve(data.Item.phonePin.S)
      }
    })
  })
}

module.exports = { getPhonePin }
