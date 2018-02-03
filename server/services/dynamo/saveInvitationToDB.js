const dynamodb = require('./dynamo')

const saveInvitationToDB = (userId, invitationCode, extraInfo) => {
  let params = {
    TableName: 'leaderalInvitations',
    Item: {
      userId: { S: userId },
      invitationCode: { S: invitationCode }
    }
  }

  if (extraInfo) {
    // extraInfo.emailPin && delete extraInfo.emailPin
    // extraInfo.phonePin && delete extraInfo.phonePin
    params.Item = Object.assign({}, params.Item, extraInfo)
  } else {
    params.Item.bulk = { S: 'true' }
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

module.exports = { saveInvitationToDB }
