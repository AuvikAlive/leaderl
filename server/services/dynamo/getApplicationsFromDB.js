const dynamodb = require('./dynamo')

const getApplicationsFromDB = () => {
  const params = {
    TableName: 'leaderalApplications'
  }

  return new Promise((resolve, reject) => {
    dynamodb.scan(params, (error, data) => {
      if (error) {
        console.log(error, error.stack)
        reject(error)
      } else resolve(data.Items)
    })
  })
}

module.exports = { getApplicationsFromDB }
