const dynamodb = require('./dynamo')

const getInvitationDataFromDB = userId => {
  const params = {
    TableName: 'leaderalInvitations',
    Key: {
      userId: { S: userId }
    }
  }

  return new Promise((resolve, reject) => {
    dynamodb.getItem(params, (error, data) => {
      if (error) {
        console.log('error', error)
        reject(error)
      } else {
        resolve(data.Item)
      }
    })
  })
}

module.exports = { getInvitationDataFromDB }
