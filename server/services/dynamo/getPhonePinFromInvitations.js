const dynamodb = require('./dynamo')

const getPhonePinFromInvitations = userId => {
  const params = {
    TableName: 'leaderalInvitations',
    Key: {
      userId: { S: userId }
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

module.exports = { getPhonePinFromInvitations }
