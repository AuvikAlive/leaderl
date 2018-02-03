const dynamodb = require('./dynamo')

const getApplicantDataFromDB = email => {
  const params = {
    TableName: 'leaderalApplications',
    Key: {
      email: { S: email }
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

module.exports = { getApplicantDataFromDB }
