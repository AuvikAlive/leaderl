const dynamodb = require('./dynamo')

const updateApplicantData = ({
  email,
  birthDay,
  title,
  organisation,
  country,
  city
}) => {
  const params = {
    TableName: 'leaderalApplications',
    Key: {
      email: { S: email }
    },
    UpdateExpression:
      'set birthDay = :b, title = :t, organisation = :o, country = :n, city = :c ',
    ExpressionAttributeValues: {
      ':b': { S: birthDay },
      ':t': { S: title },
      ':o': { S: organisation },
      ':n': { S: country },
      ':c': { S: city }
    }
  }

  return new Promise((resolve, reject) => {
    dynamodb.updateItem(params, (error, data) => {
      if (error) {
        console.log('error', error)
        reject(error)
      } else {
        resolve(true)
      }
    })
  })
}

module.exports = { updateApplicantData }
