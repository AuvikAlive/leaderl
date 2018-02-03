const dynamodb = require('./dynamo')

const applicationExistsInDB = email => {
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
        console.log(data)
        resolve(!!data.Item)
      }
    })
  })
}

module.exports = { applicationExistsInDB }
