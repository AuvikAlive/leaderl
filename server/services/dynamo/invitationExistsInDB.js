const dynamodb = require('./dynamo')
const isEmpty = require('lodash/isEmpty')

const invitationExistsInDB = userId => {
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
      } else if (isEmpty(data.Item)) {
        resolve(false)
      } else resolve(data.Item)
    })
  })
}

module.exports = { invitationExistsInDB }
