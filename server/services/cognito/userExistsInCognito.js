const { cognitoidentityserviceprovider } = require('./cognito')
const { UserPoolId } = require('../../config/aws')

const userExistsInCognito = Username => {
  const params = { UserPoolId, Username }

  return new Promise((resolve, reject) => {
    cognitoidentityserviceprovider.adminGetUser(params, (error, data) => {
      if (error) {
        if (error.code === 'UserNotFoundException') {
          resolve(false)
        } else {
          console.log(error, error.stack)
          reject(error)
        }
      } else {
        console.log(data)
        resolve(data)
      }
    })
  })
}

module.exports = { userExistsInCognito }
