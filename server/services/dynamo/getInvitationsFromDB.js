const dynamodb = require('./dynamo')

const getInvitationsFromDB = () => {
  const params = {
    TableName: 'leaderalInvitations'
  }

  return new Promise((resolve, reject) => {
    dynamodb.scan(params, function(err, data) {
      if (err) {
        console.log(err, err.stack)
        reject(err)
      } else resolve(data.Items)
    })
  })
}

module.exports = { getInvitationsFromDB }
