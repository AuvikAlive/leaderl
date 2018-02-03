const dynamodb = require('./dynamo')

const deleteApplicationFromDB = email => {
  const params = {
    TableName: 'leaderalApplications',
    Key: {
      email: { S: email }
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

module.exports = { deleteApplicationFromDB }
