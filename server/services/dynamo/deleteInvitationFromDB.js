const dynamodb = require('./dynamo')

const deleteInvitationFromDB = userId => {
  const params = {
    TableName: 'leaderalInvitations',
    Key: {
      userId: { S: userId }
    }
  }

  return new Promise((resolve, reject) => {
    dynamodb.deleteItem(params, function(error, data) {
      if (error) {
        console.log(error, error.stack)
        reject(error)
      } else resolve(true)
    })
  })
}

module.exports = { deleteInvitationFromDB }
